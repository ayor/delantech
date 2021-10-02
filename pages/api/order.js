const nodemailer = require("nodemailer");
const { validateEmail } = require('../../middleware/validate');

const _usermail = "citrinetechltd@gmail.com"

const _userpass = process.env.PASS;



// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
        user: _usermail,
        pass: _userpass
    }
});

export default async function handler(req, res) {
    try {
        const {
            email,
            phone,
            address,
            city,
            country
        } = req.body;

        if (!validateEmail(email)) {
            const err = new Error();
            err.status = 500;
            err.message = "Suspicious Entry, please try again later";
            throw err;
        }

        let info = await transporter.sendMail({
            from: email, // sender address
            to: "info@delantech.com.ng", // list of receivers
            subject: `Order from 
             ${email}`, // Subject line
            text: ` 
            Phone number:${phone} 
            Address - ${address} ,
            City -  ${city},
            Country - ${country}
            `, // plain text body
        });

        res.status(200).json({ message: "Order Received" })
    } catch (error) {

        res.status(500).json({ error })
    }
}