var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'myapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/myapp-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'myapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/myapp-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'myapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/myapp-production'
  }
};
export default config[env];
