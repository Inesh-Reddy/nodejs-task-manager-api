const express = require('express');

const getAllTasks = (req, res)=>{
  res.send('all items from the file')
}
const createTasks = (req, res)=>{
  res.send('ecreate task')
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
