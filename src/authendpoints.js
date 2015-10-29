/**
* @api optionsLogin
* @apiGroup Client
*
* @apiParam {String} email Client's email
*
*/
export const clientLogin = (email) => ({
    url: 'http://localhost:8000/client/get/' + email,
    headers: {
      'User-Agent': 'request'
    }
  });

export const clientRegister = {
  url: 'http://localhost:8000/client/create',
  headers: {
    'User-Agent': 'request'
  }
};
export const providerLogin = (email) => ({
    url: 'http://localhost:8000/provider/get/' + email,
    headers: {
      'User-Agent': 'request'
    }
  });

export const providerRegister = {
  url: 'http://localhost:8000/provider/create',
  headers: {
    'User-Agent': 'request'
  }
};
export const administratorLogin = (email) => ({
    url: 'http://localhost:8000/provider/get/' + email,
    headers: {
      'User-Agent': 'request'
    }
  });

export const administratorRegister = {
  url: 'http://localhost:8000/provider/create',
  headers: {
    'User-Agent': 'request'
  }
};
