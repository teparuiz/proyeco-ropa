const loginCtrl = {};

const User = require("../models/User");

loginCtrl.register = async (req, res) =>{
    await User.findOne({email: email}, (err, user)=>{
        if (user) {
          res.send({ message: "user already exist" });
        } else {
          const user = new User({ name, email, password });
          user.save((err) => {
            if (err) {
              res.send(err);
            } else {
              res.send({ message: "succesfull " });
            }
          });
        }
      })
 
}





module.exports = loginCtrl;
