const should = require("should");
const request = require("request");
const expect = require("chai").expect;
//const baseUrl = "http://localhost:3000/quotes";
const baseUrl = "https://s3.us-east-2.amazonaws.com/www.jayzon.com/db.json"; 
const util = require("util");


describe('loads all music quotes successfully', function() {
    it('loads all music quotes successfully', function(done) {
        request.get({ url: baseUrl + '?type=music' },
            function(error, response, body) {
                expect(response.statusCode).to.equal(200);
            done();
        });
    });

        it('loads all book quotes successfully', function(done) {
            request.get({ url: baseUrl + '?type=book' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('loads all quotes', function(done) {
            request.get({ url: baseUrl},
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                done();
            });
        });
});
