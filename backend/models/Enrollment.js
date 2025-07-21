const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  classStudying: { type: String, required: true },
  percentage: { type: String, required: true },
  schoolName: { type: String, required: true },
  course: { type: String, required: true },
  city: { type: String, required: true },
  submissionDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);