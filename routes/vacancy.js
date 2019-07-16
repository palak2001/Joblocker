const mongoose= require('mongoose');
const express=require('express');
const router=express.Router();
const {Vacancy, vacancyValidation }=require('../models/vacancy');

router.get('/', async (req,res) =>{
    const vacancy= await Vacancy.find();
    return res.send(vacancy);
});

router.get('/:id', async (req,res) =>{
    const vacancy = await Vacancy.findById(req.params.id);
    if(!vacancy) return res.status(400).send(error);
    return res.send(vacancy);
});

router.post('/', (req,res) =>{

});

router.put('/:id', async (req,res) =>{
    const error= vacancyValidation(req.body);
    if(error) return res.status(400).send(error);
    const vacancy= await Vacancy.findByIdAndUpdate(req.params.id,
    {
        SchoolName: req.body.SchoolName,
        Subject: req.body.Subject,
        Classes: req.Classes,
        Qualification: req.Qualification
    }, {new: true});
    if(!vacancy)  return res.status(404).send(error);
    return res.send(vacancy);
});

router.delete('/:id', (req,res) =>{
    const vacancy = await Vacancy.findByIdAndDelete(req.params.id);
    if(!vacancy) return res.status(400).send(error);
    return res.send(vacancy);
});

module.exports=router;