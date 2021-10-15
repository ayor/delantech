const nodemailer = require('nodemailer');
const { validateEmail } = require('../../middleware/validate');
import { db } from '../../middleware/db';
const createInvoice = require('../../middleware/prepareInvoice');

const _usermail = 'lawaltoyeeb@delantech.com.ng';
const _userpass = process.env.PASS;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: _usermail,
    pass: _userpass,
  },
});

export default async function handler(req, res) {
  try {
    const { email, phone, address, city, country, order } = JSON.parse(
      req.body
    );
    let invoice;

    if (!validateEmail(email)) {
      const err = new Error();
      err.status = 500;
      err.message = 'Suspicious Entry, please try again later';
      throw err;
    }

    let dbResult = await db.collection('orders').add({
      order,
      usermail: email,
      userphone: phone,
    });

    if (dbResult.id) {
      //   invoice =  await createInvoice({ ...order, id: dbResult.id }, { email, phone, address, city, country });
      //     console.log(invoice)
      let info = await transporter.sendMail({
        from: email, // sender address
        to: 'info@delantech.com.ng', // list of receivers
        subject: `Order from 
             ${email}`, // Subject line
        text: ` Hello Delantech, 
            Kindly find attached order request from ${email}.
            
            You can call - ${phone} for more detials
            `, // plain text body
        // attachments: [{
        //     filename: invoice.invoiceName,
        //     path: invoice.path,
        //     contentType: 'application/pdf'
        // }],
      });
      let reply = await transporter.sendMail({
        to: email, // list of receivers
        subject: `Reply ${info.messageId}`, // Subject line
        text: ` Hello ${email}, 
            Kindly find attached your order invoice.
            
            A personnel from Delantech will get in touch with you as soon as possible.
            `, // plain text body
        // attachments: [{
        //     filename: invoice.invoiceName,
        //     path: invoice.path,
        //     contentType: 'application/pdf'
        // }],
      });
    }
    res.status(200).json({ message: 'Order Received' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
