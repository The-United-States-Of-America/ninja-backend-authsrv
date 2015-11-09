import {clientLogin, clientRegister} from '../authendpoints'
// import request from 'request';
import request from 'request-json';
import express from 'express';
const rtr = express.Router();
const client = request.createClient('http://localhost:8000/client/');

/**
 * ClientRoute serves all endpoints for clients
 */
export default class ClientRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {
    /**
    * @api {post} /client/register Register Client
    * @apiName clientRegister
    * @apiGroup Client
    *
    * @apiParam {String} email
    * @apiParam {String} password
    * @apiParam {String} firstName
    * @apiParam {String} lastName
    * @apiParam {Number} ssn
    *
    * @apiError InvalidPassword Password must be at leat 5 charcters long
    * @apiError IncompleteRegistration All fields must be completed
    */
    rtr.post('register/', (req, res) => {
      client.post(clientRegister, req.body, (error, response, body) => {
          if(req.body.password.length < 5) return res.status(400).send("Password must be at least 5 characters long");
          if(response.statusCode !== 200) return res.status(404).send("Invalid Registration: Please make sure all content is filled");
          else return res.send(JSON.parse(body));
      });
    });

    /**
    * @api {post} /client/login Client Login
    * @apiName clientLogin
    * @apiGroup Client
    *
    * @apiParam {String} email
    * @apiParam {String} password
    *
    * @apiError InvalidPassword
    * @apiError InvalidEmail
    */
    rtr.post('login/', (req, res) => {
      client.get(clientLogin(req.body.email), (error, response, body) => {
        if(response.statusCode !== 200) return res.status(400).send("Invalid Email");
        if(req.body.password !== JSON.parse(body).password) return res.status(404).send("Invalid Password");
        else return res.send(JSON.parse(body));
      });
    });

  }
  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
