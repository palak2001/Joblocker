const mongoose = require('mongoose');
const express= require('express');
const app=express();
const vacancy = require('./routes/vacancy');
//const Joi= require ('joi');
//const school = require('./routes/school');

mongoose.connect('mongodb+srv://admin:vishal@l-earn-wkcrl.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(console.log('Connected to MongoDB....'))
    .catch((err)=>{console.error(err)});

app.use(express.json());
app.use('/api/vacancy',vacancy, ()=>{console.log('Vacancies are accessible')});

const port =process.env.PORT || 8080;
app.listen(port, ()=>console.log(`Listening to the port ${port}.... `));