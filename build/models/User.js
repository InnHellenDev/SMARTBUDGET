"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//mport { Schema, model } from "mongoose";
//import bcrypt from "bcryptjs";
var mongoose = require('mongoose');

var bcrypt = require('bcryptjs');

var {
  Schema
} = mongoose;
var userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    type: Schema.Types.ObjectId,
    ref: "Role"
  }]
}, {
  timestamps: true,
  versionKey: false
});

userSchema.statics.encryptPassword = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (password) {
    var salt = yield bcrypt.genSalt(10);
    return yield bcrypt.hash(password, salt);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

userSchema.statics.comparePassword = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (password, receivedPassword) {
    return yield bcrypt.compare(password, receivedPassword);
  });

  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}(); //export default model("User", userSchema);


module.exports = mongoose.model('User', userSchema);