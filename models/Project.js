
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
Underscoreid:String , 

image:String , 

title:String , 

startdate:String , 

abstract:String 


})

module.exports = {
  Project : mongoose.model('Project', projectSchema),
}

