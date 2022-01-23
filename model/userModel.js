const mongoose = require('mongoose');

const KidSchema = new mongoose.Schema({
    name: {
        type:String
    },
    wrongAns:{
        type: Number
    },
    createdAt :{
        type: Date
    }
    

    
})

const Kid = mongoose.model('kid', KidSchema );
module.exports = Kid;