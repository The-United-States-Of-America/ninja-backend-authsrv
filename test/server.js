import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const should = chai.should(),
      expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('LoginTests', () => {

  it('should succeed login', (done) => {
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
       .expect(404, done);
  });

});
