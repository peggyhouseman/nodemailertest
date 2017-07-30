"use strict";

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let mockery = require('mockery');
let nodemailerMock = require('nodemailer-mock');

chai.use(chaiHttp);

describe('Server', () => {
    
    /* This could be an app, Express, etc. It should be 
    instantiated *after* nodemailer is mocked. */
    let server = null;

    before(function() {
        // Enable mockery to mock objects
        mockery.enable({
            warnOnUnregistered: false,
        });
    
        /* Once mocked, any code that calls require('nodemailer') 
        will get our nodemailerMock */
        mockery.registerMock('nodemailer', nodemailerMock)
    
        // IMPORTANT!
        /* Make sure anything that uses nodemailer is loaded here, 
        after it is mocked... */
        server = require('../server');
    });
  
    afterEach(function() {
        // Reset the mock back to the defaults after each test
        nodemailerMock.mock.reset();
    });
  
    after(function() {
        // Remove our mocked nodemailer and disable mockery
        mockery.deregisterAll();
        mockery.disable();
    });
    
    it('/send should call smtp', (done) => {
        chai.request(server)
            .get('/send')
            .end((err, res) => {
                res.should.have.status(200);
                //res.value.should.be.exactly('value');
                const sentMail = nodemailerMock.mock.sentMail();
                sentMail.length.should.be.equal(1);
                //sentMail[0].property.should.be.exactly('foobar');
                done();
            });
    });
});
