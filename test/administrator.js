import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const should = chai.should(),
      expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('AdministratorLoginTests', () => {

  it('should successfully create a administrator', (done) => {
    api.post('/administrator/register')
      .set('Accept', 'application/json')
      .send({
        firstName: 'David',
        lastName: 'Dominguez',
        email: 'domind4@rpi.edu',
        password: 'test0102',
      })
      .expect(200, done);
  });

  it('should fail with too short of a password', (done) => {
    api.post('/administrator/register')
      .set('Accept, application/json')
      .send({
        firstName: 'David',
        lastName: 'Dominguez',
        email: 'domind4@rpi.edu',
        password: 'test',
      })
      .expect(400, done);
  });

  it('should fail with not enough content', (done) => {
    api.post('/administrator/register')
      .set('Accept, application/json')
      .send({
        firstName: 'Sharkbait',
        email: 'nemos@rpi.edu',
        password: 'test'
      })
      .expect(404, done);
  });

  it('should succeed login', (done) => {
    api.post('/administrator/login')
       .set('Accept', 'application/json')
       .send({
         email: 'domind4@rpi.edu',
         password: 'test0102'
       })
       .expect(200, done);
  });

  it('should fail with incorrect email', (done) => {
    api.post('/administrator/login')
       .set('Accept', 'application/json')
       .send({
         email: 'wrongsathyp@rpi.edu',
         password: 'test0102'
       })
       .expect(400, done);
  });

  it('should fail with incorrect password', (done) => {
    api.post('/administrator/login')
       .set('Accept', 'application/json')
       .send({
         email: 'domind4@rpi.edu',
         password: 'wrongtest'
       })
       .expect(404, done);
  });

});
