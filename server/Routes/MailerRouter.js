const transporter = require('../Model/transforter')

const router = require('express').Router()

router.post('/', async (req, res) => {
    await transporter.sendMail({
        from: req.body.email, // sender address
        to: "tamizuddin.tr@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: req.body.message, // plain text body
        html: `<b>${req.body.message} , From ${req.body.email} , Phone ${req.body.phone}</b>`, // html body
    }).then(resu => res.send(resu)).catch(err => res.send(err))

})


module.exports = router