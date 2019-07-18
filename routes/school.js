const mongoose= require('mongoose');
const express=require('express');
const router=express.Router();
const {School, schoolValidation }=require('../models/school');

router.get('/', async (req,res) =>{
    const school= await School.find();
    return res.send(school);
});

router.get('/:id', async (req,res) =>{
    const school = await School.findById(req.params.id);
    if(!school) return res.status(404).send(error);
    return res.send(school);
});

router.post('/', async (req,res) =>{
    const {error}= schoolValidation(req.body);
    if(error) return res.status(400).send(error);
    let school= new School({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email
    });
    school= await school.save()
    res.send(school);
});

router.put('/:id', async (req,res) =>{
    const error= schoolValidation(req.body);
    if(error) return res.status(400).send(error);
    const school= await School.findByIdAndUpdate(req.params.id,
    {
        name: req.body.name,
        address: req.body.address,
        email: req.email
    }, {new: true});
    if(!school)  return res.status(404).send(error);
    return res.send(school);
});

router.delete('/:id', (req,res) =>{
    const school = await School.findByIdAndDelete(req.params.id);
    if(!school) return res.status(404).send(error);
    return res.send(school);
});

module.exports=router;