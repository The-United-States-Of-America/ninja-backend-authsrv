import {providerLogin, providerRegister} from '../authendpoints'
import request from 'request';
import express from 'express';
const rtr = express.Router();

/**
 * SampleRoute is a sample class that serves the hello_world endpoint.
 */
export default class ProviderRoute{
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
    rtr.post('/register', (req, res) => {
      console.log(body);
      request(providerRegister, (error, response, body) => {
          console.log(body, error);
          var option = {
            host: 'www.bloomapi.com/api/npis',
            path: '/' + res.body.npi,
            method: 'GET'
          }
          http.request(options, function(res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
              console.log('BODY: ' + chunk);
              if (chunk == "npi not found") return res.status(400).send("Invalid NPI");
              else{
                req.body.firstName = res.headers.first_name;
                req.body.lastName = res.headers.last_name;
                req.body.prefix = res.headers.name_prefix;
              }
            });
          }).end();
          if(req.body.password.length < 5) return res.status(400).send("Password must be at least 5 characters long");
          if(response.statusCode !== 200) return res.status(404).send("Invalid Registration: Please make sure all content is filled");
          else return res.send(JSON.parse(body));
      });
    });

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
      //console.log(req.body);
      request(providerLogin(req.body.email), (error, response, body) => {
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
