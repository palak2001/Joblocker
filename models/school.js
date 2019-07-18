const mongoose= require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const schoolSchema={
    schoolId: Joi.objectId,
    name:{
        type: String,
        required: true,
        minlength: 3
    },
    address:{
        type: String,
        required: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true
    } 
}

function schoolValidation(school){
    const schema={
        name: Joi.string().min(3).required(),
        address: Joi.string().required(),
        email: Joi.string()
    };

    return Joi.validate(school,schema);
}

const School= mongoose.model('School',schoolSchema);

exports.School=School;
exports.schoolValidation= schoolValidation;
exports.schoolSchema= schoolSchema;
