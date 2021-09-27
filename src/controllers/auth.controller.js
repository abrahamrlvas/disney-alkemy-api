const Users = require('../models/auth.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const main = require('../utils/sendMail');

module.exports = {
  async authRegister(req, res) {
    const { name, email, password } = req.body;
    if (await Users.findOne({ where: { email } })) {
      return res.status(404).json({ message: `El usuario ${email} ya existe` });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await Users.create({
      name,
      email: req.body.email,
      password: hashPassword,
    })
    main(user.email)
    return res.status(201).json({ message: "User register successfully" })
  },

  async authLogin(req, res) {
    let token = null;
    const { email, password } = req.body;
    const user = await Users.findOne({
      where: {
        email: email,
      },
    })
    if (!user) {
      res.status(404).json({ message: "Email o contraseña invalida", token });
    } else {
      const comparePassword = bcrypt.compareSync(password, user.password);
      if (comparePassword) {
        token = jwt.sign(
          {
            userId: user.id,
            email: user.email,
          },
          process.env.AUTH_SECRET,
          {
            expiresIn: process.env.AUTH_EXPIRE,
          }
        );
        res.status(200).send({
          accessToken: token,
        });
      } else {
        res.status(201).json({ message: "Contraseña invalida", token });
      }
    }
  }
}
