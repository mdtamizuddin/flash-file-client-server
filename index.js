const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const Files = require('./server/Model/files')
const transporter = require('./server/Model/transforter')
app.use(express.json())
app.use(cors())
app.set('view engine', 'ejs')
app.set('views', './public')
app.use(express.static(__dirname + '/public'));
mongoose.set('strictQuery', false);


app.get('/', async (req, res) => {
    const allFile = await Files.find({})
    res.render('Home', {
        name: "Flash File Website Home Page",
        files: allFile
    })
})
app.get('/details/:id', async (req, res) => {
    const allFile = await Files.find({})

    Files.findOne({ _id: req.params.id }, (err, data) => {
        res.render('view/Details', {
            name: "Flash File Website Home Page",
            file: data,
            files: allFile
        })
    })
})
app.get('/category/:brand', async (req, res) => {
    const allFile = await Files.find({})
    Files.find({ brand: req.params.brand }, (err, data) => {
        res.render('view/Category', {
            name: `${req.params.brand} Flash File `,
            file: data,
            files: allFile,
            brand: req.params.brand
        })
    })
})
app.get('/search/:brand', async (req, res) => {
    const allFile = await Files.find({})

    const result = await allFile.filter((p) => p.
        model.toLowerCase().includes(req.params.brand.toLowerCase()))

    res.render('view/Search', {
        name: `${req.params.brand} Flash File `,
        files: allFile,
        brand: req.params.brand,
        result: result
    })
})
app.get('/admin', async (req, res) => {
    const allFile = await Files.find({})
    Files.find({}, (err, data) => {
        res.render('view/Category', {
            name: `${req.params.brand} Flash File `,
            file: data,
            files: allFile,
            brand: req.params.brand
        })
    })
})


app.use('/api/files', require('./server/Routes/fileRouter'))


mongoose
    .connect(`mongodb+srv://flashfile:flashfile@cluster0.7qhzohf.mongodb.net/flashfiles?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Is Connected"))
    .catch((err) => console.log(err));

    transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});
app.use('/message', require('./server/Routes/MailerRouter'))
app.use((req, res, next) => {
    res.status(404).render('view/NotFound', {
    })
})




app.listen(3000, () => {
    console.log('My Node SSR Project is runnign')
})