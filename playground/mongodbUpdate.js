const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
   return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  var dbo = db.db('TodoApp');
  dbo.collection('Todos').findOneAndUpdate({
    _id: new ObjectId('5a90548473c70e890f4c9818')
  }, {
    $set: {
      completed: true
    }
  }, {
      returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (err) => {
    throw err;
  });

  dbo.collection('Users').findOneAndUpdate({
    _id: new ObjectId ('5a8f3cb253e6fc3ae54f8259')
  }, {
    $set: {
      name: 'Megha'
    },
    $inc: {
      age: -2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (err) => {
    throw err;
  });

   db.close();
});
