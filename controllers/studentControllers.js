/**
 * Package init...
 */
const express = require('express');
const path = require('path');
const { readFileSync, openSync, mkdirSync, readSync, unlinkSync } = require('fs');
const students = require('../models/Student')

/**
 * Create routing system here....
 */

const home = async (req,res) =>{
    // Get data from mongodb....
    const data = await students.find().sort({_id : -1});
    res.render('show',{
        data
    });
}

const create = (req,res) =>{
    res.render('create');
}

/**
 * Single student...
 */
const singleStudent = async (req,res) =>{
    // Get data from mongodb....
    const data = await students.findById(req.params.id);
    res.render('single',{
        data
    });
    // const user = await students.find({ age : { $eq : 23}});
    // const user = await students.find({ age : { $ne : 23}});
    // const user = await students.find({ age : { $gt : 23}});
    // const user = await students.find({ age : { $gte : 23}});
    // const user = await students.find({ age : { $lt : 23}});
    // const user = await students.find({$and : [{ name : "Rubel Hossain"}, {age : 23}]});
    // const user = await students.find({$or : [{ name : "Rubel Hossain"}, {age : 23}]});
    // const user = await students.updateMany({ }, {$rename : {age : "Amar Boyos"}}); //First time change age to amar boyos..
    // const again = await students.updateMany({ }, {$rename : {Amar_Boyos : "age"}});
    // const de = await students.updateMany({ }, { $unset : { Amar_Boyos : 'age'}})
    // let d = await students.find();;
    // console.log(d);
    // console.log(user);
}
 
/**
 * Create a single user....here...
 */
const submit = async (req,res) =>{
    const {name,email,skill,age} = req.body;
    await students.create({
        name : name,
        email : email,
        skill : skill,
        age : age,
        photo : req.file ? req.file.filename : 'avatar.png'
    })
    console.log(`Data create successfull`.bgGreen.white);
    res.redirect('/students')
}

/**
 * Delte user....
 */

const deleteSingleUser = async (req,res) =>{
    //Get user params...here...
    const single_student_id = req.params.id;
    // Get data from mongodb....
    await students.findByIdAndDelete(single_student_id);
    console.log(`Data delete successfull`.bgGreen.white);
    res.redirect('/students');
}

/**
 * Edit single student....here...
 */
const edit_single_student = async (req,res) =>{
    // Get student id...
    const {id} = req.params;
    // Get all student from mongodb....
    const single_student = await students.findById(id);
    //Render...data...
    res.render('edit',{
        single_student
    });
}

// Update student data...

const update_student = async (req,res) =>{
    //Get from data...
    const {name,email,age,skill} = req.body
    // Get data from mongodb....
    await students.findByIdAndUpdate(req.params.id, {
        name : name,
        email : email,
        age : age,
        skill : skill,
        photo : req.file ? req.file.filename : 'avatar.png'
    })
    console.log(`Data update successfull`.bgGreen.white);
    res.redirect('/students');
};

/**
 * Export controllers from here...
 */
module.exports = {
    home,create,submit,deleteSingleUser,singleStudent,edit_single_student,update_student
}