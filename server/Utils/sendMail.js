const nodemailer = require("nodemailer");
const { EMAIL_ADDRESS, EMAIL_PASS } = process.env;
const adminModel = require('../Model/adminModel')
const userModel = require('../Model/userModel')

const sendMailOfRegister = (req, res) => {
  const { email, Password, firstName, lastName } = req.body;

  const output = `
  <div style="text-align: center;background:#f3f1f1;border-radius: 7px;">
    <h2 style="box-shadow: 10px 10px 8px 10px gray;text-align: center;">  Share-It ברוכים הבאים לאתר</h2>
    <h4 style="text-align: center"> Share-It פרטי ההתחברות לאתר</h4>
    <ul style="list-style:none"> 
        <li>name : ${firstName} ${lastName}  </li>
        <li>email : ${email} </li>
        <li>password : ${Password} </li>
    </ul>
    <h3 style="text-align: center"> שים לב </h3>
    <h4 style="text-align: center">  אינך יכול לשלוח מייל בחזרה למשתמש זה  </h4>
    </div>
    `
  const transporter = nodemailer.createTransport({
    service: "gamil",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: EMAIL_ADDRESS,
      pass: EMAIL_PASS,
    },
    secureConnection: false,
    tls: {
      rejectUnauthorized: false,
    },
  });

  const information = {
    from:`Share-It ${EMAIL_ADDRESS}`,
    to: email,
    subject: "register to share-it weeb!",
    text: "welcome to share-it",
    html: output,
  };

  try {
    transporter.sendMail(information, (error, infro)=>{
        if(error) throw error;
        console.log(`message send :%s ${infro.messageId}`);
        console.log(`preview url :%s ${nodemailer.getTestMessageUrl(infro)}`);
        res.send('success');
    })      
  } catch (error) {
      res.send('filed' + error.message)
      console.log(error.message);
  }
};

const sendMailOfNewPost = async () => {
    const output = `
      <h2>פוסט חדש פורסם באתר Share-It </h2>
      `
    const transporter = nodemailer.createTransport({
      service: "gamil",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASS,
      },
      secureConnection: false,
      tls: {
        rejectUnauthorized: false,
      },
    });
  
    let emails = []
    const userEmails = await userModel.find({})
    userEmails.map((user)=>{
        return emails.push(user.email)
    })
    const adminEmails = await adminModel.find({})
    adminEmails.map((admin)=>{
        return emails.push(admin.email)
    })
    // console.log(emails);
    const information = {
      from:`Share-It ${EMAIL_ADDRESS}`,
      to: emails,
      subject: "new post posted in share-it weeb!",
      text: "new post",
      html: output,
    };
  
    try {
      transporter.sendMail(information, (error, infro)=>{
          if(error) throw error;
          console.log(`message send :%s ${infro.messageId}`);
          console.log(`preview url :%s ${nodemailer.getTestMessageUrl(infro)}`);
          res.send('success');
      })      
    } catch (error) {
        res.send('filed' + error.message)
        console.log(error.message);
    }
  };

module.exports = {
  sendMailOfRegister,
  sendMailOfNewPost,
};
