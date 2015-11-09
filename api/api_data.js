define({ "api": [
  {
    "type": "",
    "url": "administratorLogin",
    "title": "",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Administrator's Email</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/authendpoints.js",
    "groupTitle": "Administrator",
    "name": "Administratorlogin"
  },
  {
    "type": "post",
    "url": "/administrator/login",
    "title": "Administrator Login",
    "name": "administratorLogin",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPassword",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidEmail",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/administrator.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "post",
    "url": "/administrator/register",
    "title": "Register Administrator",
    "name": "administratorRegister",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "ssn",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPassword",
            "description": "<p>Password must be at leat 5 charcters long</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncompleteRegistration",
            "description": "<p>All fields must be completed</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/administrator.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "",
    "url": "optionsLogin",
    "title": "",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Client's Email</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/authendpoints.js",
    "groupTitle": "Client",
    "name": "Optionslogin"
  },
  {
    "type": "post",
    "url": "/client/login",
    "title": "Client Login",
    "name": "clientLogin",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPassword",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidEmail",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/client.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/client/register",
    "title": "Register Client",
    "name": "clientRegister",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "ssn",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPassword",
            "description": "<p>Password must be at leat 5 charcters long</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncompleteRegistration",
            "description": "<p>All fields must be completed</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/client.js",
    "groupTitle": "Client"
  },
  {
    "type": "",
    "url": "providerLogin",
    "title": "",
    "group": "Provider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Provider's Email</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/authendpoints.js",
    "groupTitle": "Provider",
    "name": "Providerlogin"
  },
  {
    "type": "",
    "url": "providerRegister",
    "title": "",
    "group": "Provider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "npi",
            "description": "<p>Provider's National Provider Index</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/authendpoints.js",
    "groupTitle": "Provider",
    "name": "Providerregister"
  },
  {
    "type": "post",
    "url": "/provider/login",
    "title": "Provider Login",
    "name": "providerLogin",
    "group": "Provider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPassword",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidEmail",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/provider.js",
    "groupTitle": "Provider"
  },
  {
    "type": "post",
    "url": "/provider/register",
    "title": "Register Provider",
    "name": "providerRegister",
    "group": "Provider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "ssn",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "npi",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPassword",
            "description": "<p>Password must be at leat 5 charcters long</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncompleteRegistration",
            "description": "<p>All fields must be completed</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/provider.js",
    "groupTitle": "Provider"
  }
] });