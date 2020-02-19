  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historySchema = new Schema({
  module: { type: String, required: true },
  description: { type: String, required: true},
  date: {type: Date, required: false}
}, {
  timestamps: true,
});

const History = mongoose.model('History', historySchema);

module.exports = History;