const userCtrl = {};

const User = require("../models/User");

userCtrl.getUser = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
// Función solo almacena usuarios, no pide validación
/* userCtrl.createUser = async (req, res) => {
 const {username, name, password, email} = req.body
 const newUser = new User({
  username, name, password, email
 })
 await newUser.save()
 res.json({message: "User saved"})
}; */

//Función para crear usuarios y validar que no se repita el email
userCtrl.createUser = async (req, res) => {
  const { username, name, password, email } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    res.send({ message: "user already exists" });
  } else {
    const newUser = new User({ username, name, password, email });
    await newUser.save();
    res.send({ message: "user created successfully" });
  }
};

/* userCtrl.deleteUser = async (req, res) => {
  await User.findbyIdandDelete(req.params.id);
  res.json("User deleted");
}; */

// Login
userCtrl.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      if (password === user.password) {
        res.send({ message: "login success, user:user" });
      } else {
        res.send({ message: "wrong credentials" });
      }
    }
  } catch (err) {
    console.error(err);
  }
};

//Delete User
userCtrl.deleteUser = async (req, res) => {
  await User.findbyIdAndDelete(req.params.id);
  res.json("User deleted");
};
module.exports = userCtrl;
