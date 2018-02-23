// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
   return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  var dbo = db.db('TodoApp');
  // dbo.collection('Todos').find().toArray((err, result) => {
  //   if (err) throw err;
  //   console.log(result);
  // db.close();
  // });

  dbo.collection('Todos').find().sort({text: 1}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

   db.close();
});
