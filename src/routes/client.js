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
      const options = {
        url: 'http://localhost:8000/client/get/1',
        headers: {
          'User-Agent': 'request'
        }
      };
      request(options, (error, response, body) => {
        if(response.statusCode !== 200) return res.status(400).send("Invalid Login");

        return res.send(JSON.parse(body));
      });
      //return res.send('LOGIN');
    });

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
