// import {administratorLogin, administratorRegister} from '../authendpoints'
import request from 'request';
import express from 'express';
const rtr = express.Router();

/**
 * SampleRoute is a sample class that serves the hello_world endpoint.
 */
export default class AdministratorRoute{
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {
    /**
    * @api {post} /admin/register Register Administrator
    * @apiName administratorRegister
    * @apiGroup Administrator
    *
    * @apiParam {String} email
    * @apiParam {String} password
    * @apiParam {String} firstName
    * @apiParam {String} lastName
    *
    * @apiError InvalidPassword Password must be at leat 5 charcters long
    * @apiError IncompleteRegistration All fields must be completed
    */
    rtr.post('/register', (req, res) => {
      request({
                url: 'http://localhost:8000/admin/create',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },

                json: req.body
              }, function(error, response, body) {
                  if(error) return res.status(400).end(error);
                  else if(response.statusCode !== 200) return res.status(400).end(JSON.stringify(body));
                  else res.end(JSON.stringify(body));
              });
    });

    /**
    * @api {post} /admin/login Administrator Login
    * @apiName administratorLogin
    * @apiGroup Administrator
    *
    * @apiParam {String} email
    * @apiParam {String} password
    *
    * @apiError InvalidPassword
    * @apiError InvalidEmail
    */
    rtr.post('/login', (req, res) => {
      request({
                url: 'http://localhost:8000/admin/get/' + req.body.email,
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
    });

  }
  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
