const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const volunteerSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    pnumber :{
        type : Number,
        required : true
    }
    

})


const Volunteer = mongoose.model("Volunteer",volunteerSchema);

module.exports = Volunteer;

