const User = require("../Model/userSchema");
const hash = require("../bcrypt");

exports.newUser = async (req, res) => {
  try {
    console.log(req.body);
    var password1 = req.body.password;
    var password2 = req.body.confirm_password;

    if (password1 == password2) {
      const hashPassword = await hash.cryptpassword(password1);
      User.create({
        fullname: req.body.fullname,
        e_mail: req.body.e_mail,
        password: hashPassword,
      })
        .then((data) => {
          res.send("Registered successfully ");
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User.",
          });
        });
    } else {
      res.send("Password not matching");
    }
  } catch (error) {
    res.send(error);
  }
};

exports.getUsers = (req, res) => {
  User.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.signin = async (req, res) => {
  try {
    await User.findOne(
      { e_mail: req.body.e_mail },
      async function (err, exists) {
        if (exists) {
          const check = await hash.validate(req.body.password, exists.password);
          if (check) {
            const token = await hash.generator(exists.e_mail, exists.fullname);

            res.send({ msg: "Login Successful", data: token });
          } else {
            res.send({ msg: "Incorrect Password" });
          }
        } else {
          res.send({ msg: "Email not found" });
        }
      }
    );
  } catch (error) {
    res.send(error);
  }
};

exports.updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { fullname: req.body.fullname, e_mail: req.body.e_mail } }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.deleteUser = (req, res) => {
  User.remove({ _id: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.protected = (req, res) => {
  res.send("You are in a protected route");
};
