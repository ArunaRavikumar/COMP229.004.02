//do not expose ur credentials in the code for production environment.
let atlasDB = "mongodb+srv://appuser:KgzTMAHduub3UNR6@clustercomp229.iefotwg.mongodb.net/userCollection?retryWrites=true&w=majority";

// database setup
let mongoos = require('mongoose');

module.exports = function(){

    mongoos.connect(atlasDB);
    let mongoDb = mongoos.connection;

    mongoDb.on('error', console.error.bind(console, 'Connection Error:'));
    mongoDb.once('open', ()=>{
        console.log('Connected to MongoDB...');
    });

    return mongoDb;
}