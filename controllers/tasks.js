const express = require('express');
const Task = require('../models/tasks');

const getAllTasks = (req, res)=>{
  res.send('all items from the file')
}
const createTasks = async (req, res)=>{
  const task  = await Task.create(req.body)
  res.status(201).json({task})
}
const getTasks = (req, res)=>{
  res.send('get single task')
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
