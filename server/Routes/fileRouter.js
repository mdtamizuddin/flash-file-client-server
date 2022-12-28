const express = require('express')
const Files = require('../Model/files')

const router = express.Router()


router.get('/', (req, res) => {
    Files.find({}, (err, data) => {
        res.send(data)
    })
})


router.post('/', (req, res) => {
    const newFile = new Files(req.body)

    newFile.save((err, data) => {
        if (err) {
            res.status(500).send({ message: "There is a problem on server", err })
        }
        else {
            res.send(data)
        }
    })
})


module.exports = router