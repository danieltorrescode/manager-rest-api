const mongoose = require('mongoose');
const { Schema } = mongoose;

const departmentSchema = new Schema({
    name: { type: String, required: true},
		description: { type: String, required: true },
		director: { type: String, required: true },
		employees: { type: Number, min: 1},
    img: { type: String }
});

module.exports = mongoose.model('department', departmentSchema);
