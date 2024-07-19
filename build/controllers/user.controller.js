"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = require('../models/User');

var Role = require('../models/Role');

var usuario_controller = {}; //import User from "../models/User";
//import Role from "../models/Role";

usuario_controller.createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var {
        username,
        email,
        password,
        roles
      } = req.body;
      var rolesFound = yield Role.find({
        name: {
          $in: roles
        }
      }); // creating a new User

      var user = new User({
        username,
        email,
        password,
        roles: rolesFound.map(role => role._id)
      }); // encrypting password

      user.password = yield User.encryptPassword(user.password); // saving the new user

      var savedUser = yield user.save();
      return res.status(200).json({
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        roles: savedUser.roles
      });
    } catch (error) {
      console.error(error);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //export const getUsers = async (req, res) => {};


module.exports = usuario_controller;
/*
export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {};

export const getUser = async (req, res) => {};
*/