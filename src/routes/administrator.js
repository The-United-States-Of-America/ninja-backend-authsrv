import {administratorLogin, administratorRegister} from '../authendpoints'
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
    * @api {post} /administrator/register Register Administrator
    * @apiName administratorRegister
    * @apiGroup Administrator
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
      //console.log(body);
      request(administratorRegister, (error, response, body) => {
          console.log(body, error);
          if(req.body.password.length < 5) return res.status(400).send("Password must be at least 5 characters long");
          if(response.statusCode !== 200) return res.status(404).send("Invalid Registration: Please make sure all content is filled");
          else return res.send(JSON.parse(body));
      });
    });

    /**
    * @api {post} /administrator/login Administrator Login
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
      console.log(req.body);
      request(administratorLogin(req.body.email), (error, response, body) => {
        //console.log(body, error);
        if(response.statusCode !== 200) return res.status(400).send("Invalid Email");
        if(req.body.password !== JSON.parse(body).password) return res.status(404).send("Invalid Password");
        else return res.send(JSON.parse(body));
      });
      //return res.send('LOGIN');
    });

  }
  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
