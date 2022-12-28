const { MongoClient, ServerApiVersion } = require('mongodb');

const falshfiles = () => {
    const DB_URI = 'mongodb+srv://flashfile:flashfile@cluster0.7qhzohf.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    const users = client.db("flashfiles").collection("users")
    const files = client.db("flashfiles").collection("files")

    return { users, files, client}

}

module.exports = falshfiles