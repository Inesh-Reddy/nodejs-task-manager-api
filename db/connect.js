const mongoose = require('mongoose');

const mongoDB = async (url) => {
    return await mongoose.connect(url);
}
module.exports = mongoDB;