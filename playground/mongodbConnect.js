// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
   return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  // var dbo = db.db('TodoApp');
  //
  // dbo.collection('Todos').insertOne({
  //    text: 'Something to do',
  //    completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unbale to insert Todo.', err);
  //   }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // var dbo = db.db('TodoApp');
  // dbo.collection('Users').insertOne({
  //   name: 'Shubham Srivastava',
  //   age: 24,
  //   location: 'Allahabad'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Users.');
  //   }
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
