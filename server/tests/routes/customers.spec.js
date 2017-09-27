const chai = require('chai').expect;
const request = require('supertest');

const app = require('../../app');
const db = require('../../models');

describe('Customers route', ()=>{

    it('should add a customer to the database', (done) =>{
        request(app)
        .post('/api/customers')
        .send({firstName: 'Brian',
            lastName: 'Chavez'})
        .expect(200, done)

    });

    it('should download all customers', (done) =>{
        request(app)
        .get('/api/customers')
        .expect(200, done);
        });

    it('should fetch a single customer', (done) =>{
        request(app)
        .get('/api/customers/2')
        .expect(200, done);
    });

    it('should return a 404 error when fetching a nonexistent id number', (done)=>{
        request(app)
        .get('/api/customers/9999999')
        .expect(404, done);
    });

    it('should update a customer to the database', () =>{
        //ARRANGE
        
        //1. Add a new customer
        const newCustomer = new db.Customer({
            firstName: "Carolina",
            lastName: "Gomez Garrett"
        });

        newCustomer
        .save()
        .then(customer =>{
        //ACT
        //2.Send a request to update that new customer via express
            request(app)
            .put('/api/customers/' + customer.id)
            .send({firstName: 'Belen'})
            .expect(204)
            .then(()=>{
        //ASSERT
        //3. Check that the customer has been updated
                db
                .Customer
                .findById(customer.id)
                .then(customer => {
                    expect(customer.firstName).to.equal('Belen');
                    done();
                });
            });
        });

    });


    it('should delete a customer from the database', (done)=>{
        const newCustomer = new db.Customer({
            firstName: "Mariano",
            lastName: "Chavez"
        });

        newCustomer.save().then(customer =>{
            request(app)
            .delete('/api/customers/' + customer.id)
            .expect(200, done);
        });
    });
        

});
