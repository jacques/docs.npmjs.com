/* globals describe, it */

var supertest = require('supertest')
var assert = require('assert')
var app = require('..')

describe('GET /_monitor/ping', function () {
  it('returns 200', function (done) {
    supertest(app)
      .get('/_monitor/ping')
      .expect(200, done)
  })
})

describe('GET /_monitor/status', function () {
  it('returns 200 and a json object', function (done) {
    supertest(app)
      .get('/_monitor/status')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        assert.equal(res.body.name, 'docs')
        assert(res.body.pid)
        assert.equal(typeof res.body.uptime, 'number')
        assert(res.body.rss)
        done()
      })
  })
})

describe('GET /', function () {
  it('returns 200', function (done) {
    supertest(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
})

describe('GET /cli/install', function () {
  it('returns 200', function (done) {
    supertest(app)
      .get('/cli/install')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
})

describe('GET /cli/nonexistent', function () {
  it('returns a 404', function (done) {
    supertest(app)
      .get('/cli/nonexistent')
      .expect('Content-Type', /html/)
      .expect(404)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
})

describe('redirects', function () {
  it('301s /enterprise/whitelist to /enterprise/mirroring', function (done) {
    supertest(app)
      .get('/enterprise/whitelist')
      .expect('Location', /https:\/\/npme\.npmjs\.com\/docs\/workflow\/mirroring\.html/)
      .expect(301, done)
  })

  it('301s /misc/index to /', function (done) {
    supertest(app)
      .get('/misc/index')
      .expect('Location', /\/$/)
      .expect(301, done)
  })

  it('301s /package.json to /files/package.json', function (done) {
    supertest(app)
      .get('/package.json')
      .expect('Location', /\/files\/package\.json$/)
      .expect(301, done)
  })
})
