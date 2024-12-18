const express = require("express");
const Task = require("../models/tasks");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({
      tasks,
    });
  } catch (err) {
    res.status(500).json({
      msg: err.message,
    });
  }
};

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(400).json({ msg: `Nothing found with id:${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({
      mesg: err.message,
    });
  }
};

const updateTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).json({ msg: `nothing to update` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ mag: `Internal server error` });
  }
};

const deleteTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task found with id: ${taskID}` });
    }
    res.status(200).json({ msg: task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
};
