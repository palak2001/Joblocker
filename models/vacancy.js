const mongoose= require('mongoose');
const Joi = require('joi');
const {schoolSchema} = require('./school.js');
Joi.objectId = require('joi-objectid')(Joi);

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
        schoolId: Joi.string().required(),
        Subject: Joi.string().required(),
        Classes: Joi.number(),
        Qualification: Joi.string()
    };

    return Joi.validate(vacancy,schema);
}

const Vacancy= mongoose.model('Vacancy',vacancySchema);

exports.Vacancy=Vacancy;
exports.vacancyValidation= vacancyValidation;