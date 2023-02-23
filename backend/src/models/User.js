const { Schema, model } = require("mongoose");
//const bcrypt = require("bcrypt-nodejs")
//const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

/* userSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObjetc();
  delete userObject.password;

  return userObject;
};

userSchema.plugin(uniqueValidator, {
  message: `{PATH} debe ser único`,
}); */

//Encriptado 
/* userSchema.methods.encryptPassword = (password) =>{
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function (password){
  return bcrypt.compareSync(password, this.password)
} */
module.exports = model("User", userSchema);
