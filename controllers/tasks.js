const express = require('express');
const Task = require('../models/tasks');

const getAllTasks = async (req, res)=>{
  try{
    const tasks = await Task.find({});
    res.status(200).json({
      tasks
    })
  }catch(err){
      res.status(500).json({
        "msg": err.message,
      })
  }
}
const createTasks = async (req, res)=>{
  try{
    const task  = await Task.create(req.body)
    res.status(201).json({task})
  }catch(err){
    res.status(500).json({"msg":err.message})
  }
}
const getTasks =  async (req, res)=>{
  // try{
  //   const task = await Task.findById(`${req.body._id}`);
  //   if (!task) {
  //       return res.status(404).json({
  //           msg: "Task not found"
  //       });
  //   }
  //   res.status(200).json({ msg: task });
  // }
  // 
  // 
  try{
    const task = await Task.findOne({name:`${req.body.name}`});
    console.log(task);
    if (!task) {
        return res.status(404).json({
            msg: "Task not found"
        });
    }
    res.status(200).json({ msg: task });
  }catch(err){
    res.status(500).json({
      msg: err.message
    })
  }
  
}
const updateTasks = (req, res)=>{
  res.send('update task')
}
const deleteTasks = (req, res)=>{
  res.send('delete task')
}

module.exports = {
  getAllTasks, createTasks, getTasks,  updateTasks, deleteTasks
}
