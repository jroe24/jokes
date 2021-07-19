const mongoose = require('mongoose');
const dbName = "jokes";

mongoose.connect('mongodb://localhost/' + dbName, {
    urlNewParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected with mongo database: " + dbName))
    .catch((err) => console.log("Something went wrong when connecting to the DB: " + err))