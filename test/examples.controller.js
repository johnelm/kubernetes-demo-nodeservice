// const chai = require( 'chai' );
// const { request } = require( 'supertest' ); 
// const { Server } = require('../server');
import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('People', () => {
  it('should get all people', () =>
    request(Server)
      .get('/api/v1/people')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          .of.length(2);
      }));

  it('should add a new person', () =>
    request(Server)
      .post('/api/v1/people')
      .send({ name: 'test' })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('name')
          .equal('test');
      }));

  it('should get a person by id', () =>
    request(Server)
      .get('/api/v1/people/2')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('name')
          .equal('test');
      }));
});
