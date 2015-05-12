var should = require('should'); 
var assert = require('assert');
var request = require('supertest');

describe('Article', function() {
  var url = 'http://localhost:3000';
  
  describe('articles list', function() {
    it('returns status code 200', function(done) {
      
      request(url)
      .get('/articles')
      // end handles the response
      .end(function(err, res) {
        if (err) {
          throw err;
        }

        res.status.should.be.equal(200);
        done();
      });
    
    });

    it('returns array of article', function(done) {

      request(url)
      .get('/articles')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        (JSON.parse(res.text).articles).should.be.a.Array
        done();
      });
    
    });

  });
});