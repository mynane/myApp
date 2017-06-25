'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_config2.default.db);
var db = _mongoose2.default.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + _config2.default.db);
});

var models = _glob2.default.sync(_config2.default.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = (0, _express2.default)();

module.exports = require('./config/express')(app, _config2.default);

app.listen(_config2.default.port, function () {
  console.log('Express server listening on port ' + _config2.default.port);
});
//# sourceMappingURL=index.js.map
