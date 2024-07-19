"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = exports.isModerator = exports.verifyToken = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//import jwt from "jsonwebtoken";
//import config from "../config";
//import User from "../models/User";
//import Role from "../models/Role";
var jwt = require('jsonwebtoken');

var config = require('../database');

var User = require('../models/User');

var Role = require('../models/Role');

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({
      message: "No token provided"
    });

    try {
      var decoded = jwt.verify(token, config.SECRET);
      req.userId = decoded.id;
      var user = yield User.findById(req.userId, {
        password: 0
      });
      if (!user) return res.status(404).json({
        message: "No user found"
      });
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Unauthorized!"
      });
    }
  });

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var isModerator = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    try {
      var user = yield User.findById(req.userId);
      var roles = yield Role.find({
        _id: {
          $in: user.roles
        }
      });

      for (var i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }
      }

      return res.status(403).json({
        message: "Require Moderator Role!"
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: error
      });
    }
  });

  return function isModerator(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isModerator = isModerator;

var isAdmin = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    try {
      var user = yield User.findById(req.userId);
      var roles = yield Role.find({
        _id: {
          $in: user.roles
        }
      });

      for (var i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      return res.status(403).json({
        message: "Require Admin Role!"
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: error
      });
    }
  });

  return function isAdmin(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;