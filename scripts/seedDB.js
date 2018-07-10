const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

//This file empties the name collection and inserts the books

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactnamelist",
    {
        useMongoClient: true
    }
);

const nameSeed = [
    {
        name: "Benjamin",
        gender: "Male",
        nationality: "English",
        date: new Date(Date.now())
    },
    {
        name: "Sana",
        gender: "Female",
        nationality: "Arabic",
        date: new Date(Date.now())
    },
    {
        name: "Brenda",
        gender: "Female",
        nationality: "English",
        date: new Date(Date.now())
    }
];

db.Name
    .remove({})
    .then(() => 
db.Name.collection.insertMany(nameSeed))
.then(data => {
    console.log(data.insertedIds.length + "records inserted!");
    process.exit(0);
}).catch(err=>{
    console.log(err);
    process.exit(1);
});
