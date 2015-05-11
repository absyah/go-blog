var request = require("request");

var base_url = "http://localhost:3000/"

describe("Articles list", function() {

  describe("GET /articles", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + "articles", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns array of article", function(done) {
      request.get(base_url + "articles", function(error, response, body) {
        expect(JSON.parse(body).articles).toEqual(jasmine.any(Array));
        done();
      });
    });
  });
});