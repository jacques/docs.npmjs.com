var supertest = require("supertest")
var app = require("..")

describe('GET /', function() {
  it('returns 200', function(done) {
    supertest(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err)
        done()
      })
  })
})

describe('GET /cli/install', function() {
  it('returns 200', function(done) {
    supertest(app)
      .get('/cli/install')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err)
        done()
      })
  })
})

describe('GET /cli/nonexistent', function() {
  it('returns a 404', function(done) {
    supertest(app)
      .get('/cli/nonexistent')
      .expect('Content-Type', /html/)
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err)
        done()
      })
  })
})
