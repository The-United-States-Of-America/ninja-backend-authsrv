import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const should = chai.should(),
      expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('ClientLoginTests', () => {

  it('should successfully create a client', (done) => {
    api.post('/client/register')
      .set('Accept', 'application/json')
      .send({
        ssn: '246810112',
        firstName: 'David',
        lastName: 'Dominguez',
        email: 'domind4@rpi.edu',
        password: 'test0102'

      })
      .expect(200, done);
  });

  it('should fail with not enough content', function(done) {
    api.post('/client/register')
      .set('Accept, application/json')
      .send({
        firstName: 'Sharkbait',
        email: 'nemos@rpi.edu',
        password: 'test'
      })
      .expect(400, done);
  });

  it('should succeed client login', (done) => {
    api.post('/client/login')
       .set('Accept', 'application/json')
       .send({
         email: 'sathyp@rpi.edu',
         password: 'test'
       })
       .expect(200, done);
  });

  it('should fail with incorrect email', (done) => {
    api.post('/client/login')
       .set('Accept', 'application/json')
       .send({
         email: 'wrongsathyp@rpi.edu',
         password: 'test'
       })
       .expect(400, done);
  });

  it('should fail with incorrect password', (done) => {
    api.post('/client/login')
       .set('Accept', 'application/json')
       .send({
         email: 'sathyp@rpi.edu',
         password: 'wrongtest'
       })
       .expect(400, done);
  });

});
