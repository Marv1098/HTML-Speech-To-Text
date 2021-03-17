const fetch = require("node-fetch")
let chai = require('chai')
let chaiHttp = require('chai-http');
const { response } = require("express");
let expect = chai.expect

chai.use(chaiHttp);

describe("Testcase for VoiceSearch API", function () {

    it("should return status on 200 For", function (done) {
        chai
            .request('http://localhost:3000')
            .get("/")
            .then(function (res) {
                expect(res).to.have.status(200);
                done();
            })
            .catch(function (err) {
                // throw(err);
                done(err);
            });
    });

    it("should return 404 error for test(get) ", function (done) {
        chai
            .request('http://localhost:3000')
            .get("/test")//i do not have test 
            .then(function (res) {
                expect(res).to.have.status(404);
                done();
            })
            .catch(function (err) {
                // throw(err);
                done(err);
            });
    });

})

module.exports = response;
