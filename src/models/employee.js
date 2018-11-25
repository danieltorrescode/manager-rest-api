const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true },
		email: { type: String, required: true },
		department: { type: String, required: true },
    job: { type: String, required: true },
    salary: { type: Number, required: true ,min: 1},
		img: { type: String }
});

module.exports = mongoose.model('Employee', employeeSchema);
