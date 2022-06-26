let mongoose = require('mongoose');

// create a Model Class
let userCollectionModel = mongoose.Schema(
    {
      username: String,
      password: String,
      email: String,
      name: String,
      phNum: Number

    },
    {
        collection: "users"
    }
);
module.exports = mongoose.model('users', userCollectionModel);