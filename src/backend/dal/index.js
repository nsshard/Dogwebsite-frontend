const {MongoClient} = require("mongodb");
const {mongoose} = require('mongoose'); 

const client = new MongoClient("mongodb://127.0.0.1:27017",
{ 
  useNewUrlParser: true, useUnifiedTopology: true

});

client.connect(err => {
  if(err) {
    console.error(err);
    process.exit();
  }
  console.log('successfully connected to MDB')
})

module.exports = client;