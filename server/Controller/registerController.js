const adminModel = require('../Model/adminModel');
const Usermodel = require('../Model/userModel');
const bcrypt = require('bcrypt');
const { sendMailOfRegister } = require('../Utils/sendMail');
const Joi = require('joi');

const validateRegister = (bodyData) => {
  let joiSchema = Joi.object({
    firstName: Joi.string().min(2).max(100).required(),
    lastName: Joi.string().min(2).max(100).required(),
    email: Joi.string().min(2).max(100).required().email(),
    Password: Joi.string().min(3).max(100).required(),
  });

  return joiSchema.validate(bodyData);
};

const registerUser = async (req, res) => {
  let validBody = validateRegister(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    const { firstName, lastName, email } = req.body;
    bcrypt.genSalt(12, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(req.body.Password, salt, (err, hash) => {
        if (err) throw err;
        sendMailOfRegister(req, res);
        req.body.Password = hash;
        const user = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: req.body.Password,
        };
        const isUser = Usermodel.find({ email: req.body.email });
        if (!isUser) throw new Error('email already in use');
        const newUser = new Usermodel(user);
        newUser.save();
        res.status(200).json({ message: 'success', data: user });
      });
    });
  } catch (error) {
    res.status(400).json({ message: 'faild', data: error.message });
  }
};
const registerAdmin = async (req, res) => {
   
    try {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) throw err
            bcrypt.hash(req.body.Password, salt, (err, hash) => {
                if (err) throw err
                sendMailOfRegister(req, res);
                req.body.Password = hash
                const { firstName, lastName, email } = req.body
                const Admin =  {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: req.body.Password,
                }
                const isUser =  adminModel.find({ email: req.body.email })
                if (!isUser) throw new Error("email already in use")
                const newUser =  new adminModel(Admin)
                newUser.save()
                res.status(200).json({ message: "success", data: Admin });
            })
        })

    } catch (error) {
        res.status(400).json({ message: "faild", data: error.message });

    }

}
module.exports = {
  registerUser,
  registerAdmin,
};
