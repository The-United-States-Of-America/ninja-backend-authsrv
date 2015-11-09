// import {clientLogin} from '../authendpoints'
import request from 'request';
import express from 'express';

const rtr = express.Router();

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
    rtr.post('/register', (req, res) => {
      request({
                url: 'http://localhost:8000/client/create',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },

                json: req.body
              }, function(error, response, body) {
                  if(error) return res.status(400).end(error);
                  else if(response.statusCode !== 200) return res.status(400).end("Invalid Registration: Please make sure all content is filled");
                  else res.end(JSON.stringify(body));
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
    rtr.post('/login', (req, res) => {
      request({
                url: 'http://localhost:8000/client/get/' + req.body.email,
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              }, function(error, response, body) {
                  if(error) return res.status(400).end(error);
                  else if(response.statusCode !== 200) return res.status(400).end("Invalid Email");
                  else if(req.body.password !== JSON.parse(body).password) return res.status(400).end("Invalid Password");
                  else return res.send(JSON.parse(body));
              });

      // client.get(clientLogin(req.body.email), (error, response, body) => {
      //   if(response.statusCode !== 200) return res.status(400).send("Invalid Email");
      //   if(req.body.password !== JSON.parse(body).password) return res.status(404).send("Invalid Password");
      //   else return res.send(JSON.parse(body));
      // });
    });

  }
  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
