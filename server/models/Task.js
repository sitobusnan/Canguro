const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const taskSchema = new Schema({
  kid: String,
  tutors: [],
  type: { type: String, enum: ['Education', 'Home']},
  text: String,
  status: true,
  date: Date,
  place: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Task = mongoose.model('User', taskSchema);
module.exports = Task;