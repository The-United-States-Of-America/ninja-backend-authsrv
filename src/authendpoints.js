/**
* @api optionsLogin
* @apiGroup Client
*
* @apiParam {String} email Client's email
*
*/
export const optionsLogin = (email) => ({
    url: 'http://localhost:8000/client/get/' + email,
    headers: {
      'User-Agent': 'request'
    }
  });

export const optionsRegister = {
  url: 'http://localhost:8000/client/create',
  headers: {
    'User-Agent': 'request'
  }
};
