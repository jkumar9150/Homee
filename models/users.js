const mongoose = require('mongoose');

const UserSchema = mongoose.Schema( {
    //Add User table fields
    first_name: {
        type : String,
        require : true
    },

    last_name: {
        type : String,
        require : true
    }


})