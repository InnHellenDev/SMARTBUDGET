"use strict";

//import { Schema, model } from "mongoose";
//export const ROLES = ["user", "admin", "moderator"];
var mongoose = require('mongoose');

var ROLES = ["user", "admin", "moderator"];
var {
  Schema
} = mongoose;
var roleSchema = new Schema({
  name: String
}, {
  versionKey: false
}); //export default model("Role", roleSchema);

module.exports = mongoose.model('Role', roleSchema);