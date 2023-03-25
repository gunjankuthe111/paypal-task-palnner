const {Schema, model} = require("mongoose");

const userSchema = new Schema({
  name: {type: "String", required: true},
  email: {type: "String", unique: true, required: true},
  password: {type: "String", required: true},
  pic: {
    type: "String",
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  }
},{timestamps:true});

const UserModel = model("user", userSchema);

module.exports = UserModel;
