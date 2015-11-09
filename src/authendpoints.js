
/**
* @api providerLogin
* @apiGroup Provider
*
* @apiParam {String} email Provider's Email
*
*/
export const providerLogin = (email) => ({
    url: 'http://localhost:8000/provider/get/' + email,
    headers: {
      'User-Agent': 'request'
    }
  });

/**
* @api providerRegister
* @apiGroup Provider
*
* @apiParam {Number} npi Provider's National Provider Index
*
*/

// export const providerRegister = {
//   url: 'http://localhost:8000/provider/create',
//   headers: {
//     'User-Agent': 'request'
//   }
// };


/**
* @api administratorLogin
* @apiGroup Administrator
*
* @apiParam {String} email Administrator's Email
*
*/
export const administratorLogin = (email) => ({
    url: 'http://localhost:8000/administrator/get/' + email,
    headers: {
      'User-Agent': 'request'
    }
  });

export const administratorRegister = {
  url: 'http://localhost:8000/administrator/create',
  headers: {
    'User-Agent': 'request'
  }
};
