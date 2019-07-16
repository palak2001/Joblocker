const mongoose= require('mongoose');

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

const Vacancy= mongoose.model('Vacancy',vacancySchema);

exports.module=Vacancy;