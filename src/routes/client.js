import request from 'request';
import express from 'express';
const rtr = express.Router();

/**
 * SampleRoute is a sample class that serves the hello_world endpoint.
 */
export default class ClientRoute{
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {
    rtr.post('/login', (req, res) => {
      //console.log(req.body)
      const options = {
        url: 'http://localhost:8000/client/get/' + req.body.email,
        headers: {
          'User-Agent': 'request'
        }
      };
      request(options, (error, response, body) => {
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
