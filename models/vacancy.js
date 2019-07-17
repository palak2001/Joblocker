const mongoose= require('mongoose');
const Joi = require('joi');
const {schoolSchema} = require('./school.js');

const vacancySchema={
    School: {
        type: schoolSchema,
        required: true
    },
    Subject: {
        type: String,
        required: true,
    },
    Classes: {
        type: Number
    },
    Qualification:{
        type: String
    }
}

function vacancyValidation(vacancy){
    const schema={
        SchoolId: Joi.string().min(3),
        Subject: Joi.string().required(),
        Classes: Joi.number(),
        Qualification: Joi.string()
    };

    return Joi.validate(vacancy,schema);
}

const Vacancy= mongoose.model('Vacancy',vacancySchema);

exports.Vacancy=Vacancy;
exports.vacancyValidation= vacancyValidation;