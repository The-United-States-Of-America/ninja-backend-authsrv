import {providerLogin} from '../authendpoints'
import request from 'request';
import express from 'express';
const rtr = express.Router();

/**
 * ProviderRoute supplies all provider related endpoints.
 */
export default class ProviderRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {
    /**
    * @api {post} /provider/register Register Provider
    * @apiName providerRegister
    * @apiGroup Provider
    *
    * @apiParam {String} email
    * @apiParam {String} password
    * @apiParam {Number} ssn
    * @apiParam {Number} npi
    *
    *
    * @apiError InvalidPassword Password must be at leat 5 charcters long
    * @apiError IncompleteRegistration All fields must be completed
    */
    // rtr.post('/register', (req, res) => {
    //   console.log(body);
    //   request(providerRegister, (error, response, body) => {
    //
    //   if(req.body.password.length < 5) return res.status(400).send("Password must be at least 5 characters long");
    //   if(response.statusCode !== 200) return res.status(404).send("Invalid Registration: Please make sure all content is filled");
    //   else return res.send(JSON.parse(body));
    // });

    /**
    * @api {post} /provider/login Provider Login
    * @apiName  providerLogin
    * @apiGroup Provider
    *
    * @apiParam {String} email
    * @apiParam {String} password
    *
    * @apiError InvalidPassword
    * @apiError InvalidEmail
    */
    rtr.post('/login', (req, res) => {
      request(providerLogin(req.body.email), (error, response, body) => {
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
