const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployee = async (req, res, next) => {
    const employee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
				email: req.body.email,
				department: req.body.department,
        job: req.body.job,
        salary: req.body.salary,
				img: req.body.img
    });
    await employee.save();
		res.json([{status: 'Employee created'},employee]);
};

employeeCtrl.getEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
};

employeeCtrl.editEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			department: req.body.department,
			job: req.body.job,
			salary: req.body.salary,
			img: req.body.img
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json([{status: 'Employee Updated'},id]);
};

employeeCtrl.deleteEmployee = async (req, res, next) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee Deleted'});
};

module.exports = employeeCtrl;
