const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true,
};
const requiredNumber = {
  type: Number,
  required: true,
};

// const defaultRequiredDate = {
//   type: Date, 
//   default: Date.now,
//   required: true
// }

//  Title - Text
//  Description - Text
//  Comments - Text
//  Rating - scale 1 -10
//  Image - Text URL
//  Latitude - Number
//  Logtitude - Number
//  VisiteDate  - DateTime

const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  comments: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
  },
  image: String,
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90,
  },
  longtitude: {
    ...requiredNumber,
    min: -180,
    max: 180,
  },

  visitDate: {
    required: true,
    type: Date
  }
},{
  timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema)

module.exports = LogEntry;