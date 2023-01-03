const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({

//     host: "mail.mdtamiz.xyz",
//     port: 465,
//     secure: true, // use TLS
//     auth: {
//         user: process.env.EMAIL,
//         pass: "Tamiz123456.xyz",
//     }
// });
// let transporter = nodemailer.createTransport({
//     host: "mail.mdtamiz.xyz",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//         user: 'web@mdtamiz.xyz', // generated ethereal user
//         pass: "Tamiz123456.xyz", // generated ethereal password
//     },
// });

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "mdtomiz.official@gmail.com",
        pass: "mzgwsvstihcdxkyt",
    },
    tls: {
        rejectUnauthorized: false
    }
});


module.exports = transporter