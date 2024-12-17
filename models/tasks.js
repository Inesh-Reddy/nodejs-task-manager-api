const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, 'name is required'],
        trim: true,
        maxlength:[20, 'cannot exceed 20 lenght']
    },
    completed:{
        type:Boolean,
        require:false,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);

