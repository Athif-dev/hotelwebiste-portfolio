const nodemailer  = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mousepointco@gmail.com',
      pass: 'pointmouse007'
    }
  });
  var mailOptions = {
    from: 'mousepointco@gmail.com',
    to: 'athif045@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(err, info){
    if (err) {
      console.log('error',err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });