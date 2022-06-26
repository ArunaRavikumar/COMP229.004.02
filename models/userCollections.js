let mongoose = require('mongoose');
let crypto = require('crypto');
let Schema = mongoose.Schema;
// create a Model Class
let userCollectionModel = mongoose.Schema(
    {
      name: String,
      phNum: Number,

      email: {
        type: String,
        match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
    },
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true
    },
    password: {
        type: String,
        validate: [(password) => {
            return password && password.length > 6;
        }, 'Password should be longer']
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        required: 'Provider is required'
    },
    providerId: String,
    providerData: {},
    created: {
        type: Date,
        default: Date.now
    }
},
    
    
    {
        collection: "users"
    }
);



userCollectionModel.pre('save', function(next) {
    if (this.password) {
        this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

userCollectionModel.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

userCollectionModel.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

userCollectionModel.statics.findUniqueUsername = function(username, suffix,
    callback) {
    var possibleUsername = username + (suffix || '');
    this.findOne({
        username: possibleUsername
    }, (err, user) => {
        if (!err) {
            if (!user) {
                callback(possibleUsername);
            } else {
                return this.findUniqueUsername(username, (suffix || 0) +
                    1, callback);
            }
        } else {
            callback(null);
        }
    });
};

userCollectionModel.set('toJSON', {
    getters: true,
    virtuals: true
});

module.exports = mongoose.model('users', userCollectionModel);