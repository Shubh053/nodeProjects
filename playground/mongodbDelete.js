const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
   return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  var dbo = db.db('TodoApp');
  dbo.collection('Todos').deleteOne({text: 'Let\'s delete something'}).then((result) => {
    console.log(result);
  });

   db.close();
});
