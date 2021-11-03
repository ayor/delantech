const nodemailer = require('nodemailer');
const { validateEmail } = require('../../middleware/validate');
import { db } from '../../middleware/db';
const createInvoice = require('../../middleware/prepareInvoice');
const AWS = require('aws-sdk');
const uuid = require('uuid');
const S3 = new AWS.S3();

AWS.config.getCredentials(function (err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log('Access key:', AWS.config.credentials.accessKeyId);
  }
});

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
      invoice = await createInvoice(
        { ...order, id: dbResult.id },
        { email, phone, address, city, country }
      );
      const s3_data = {
        key: dbResult.id,
        bucket: 'delantech-invoices',
        contentType: 'application/pdf',
        body: invoice.pdf,
        contentEncoding: 'base64',
      };

      /**
         * const bucket = new AWS.S3(); 
         fs.writeFileSync(path.join('invoices', invoiceName), result.pdf, 'base64');
        return { invoiceName, path: path.join( 'invoices', invoiceName) }
         */

      S3.putObject(s3_data, async (err, resp) => {
        if (err) {
          throw new Error('Could not upload invoice to aws s3 bucket');
        }

        console.log(resp);

        const object = S3.getObject({
          Bucket: 'delantech-invoice',
          Key: dbResult.id,
        });

        console.log(object);
        // let info = await transporter.sendMail({
        //   from: email, // sender address
        //   to: 'info@delantech.com.ng', // list of receivers
        //   subject: `Order from
        //        ${email}`, // Subject line
        //   text: ` Hello Delantech,
        //       Kindly find attached order request from ${email}.

        //       You can call - ${phone} for more detials
        //       `, // plain text body
        //   // attachments: [{
        //   //     filename: invoice.invoiceName,
        //   //     path: invoice.path,
        //   //     contentType: 'application/pdf'
        //   // }],
        // });
        // let reply = await transporter.sendMail({
        //   to: email, // list of receivers
        //   subject: `Reply ${info.messageId}`, // Subject line
        //   text: ` Hello ${email},
        //       Kindly find attached your order invoice.

        //       A personnel from Delantech will get in touch with you as soon as possible.
        //       `, // plain text body
        //   // attachments: [{
        //   //     filename: invoice.invoiceName,
        //   //     path: invoice.path,
        //   //     contentType: 'application/pdf'
        //   // }],
        // });
      });
    }
    res.status(200).json({ message: 'Order Received' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
