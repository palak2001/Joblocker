const mongoose= require('mongoose');
const Joi = require('joi');

const vacancySchema={
    SchoolName: {
        type: String,
        required: true,
        minlength: 3,
    },
    Subject: {
        type: String,
        required: true,
    },
    Classes: {
        type: [Number]
    },
    Qualification:{
        type: [String]
    }
}

function vacancyValidation(vacancy){
    const schema={
        SchoolName: Joi.string().minlength(3).required(),
        Subject: Joi.string().required(),
        Classes: Joi.array(),
        Qualification: Joi.array()
    };

    return Joi.validate(vacancy,schema);
}

const Vacancy= mongoose.model('Vacancy',vacancySchema);

exports.Vacancy=Vacancy;
exports.vacancyValidation= vacancyValidation;