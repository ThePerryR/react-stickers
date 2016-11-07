
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport('smtps://postmaster%40sandbox8f92a415c7554faa85804b6c0a92b4ce.mailgun.org:1df16894124474853fb225c2922b1e7e@smtp.mailgun.org');

export default function(to, subject, html, cb) {
  var mailOptions = {
    from: 'postmaster@sandbox8f92a415c7554faa85804b6c0a92b4ce.mailgun.org', // sender address
    to, // list of receivers
    subject, // Subject line
    html // html body
  };
  transporter.sendMail(mailOptions, cb);
}
