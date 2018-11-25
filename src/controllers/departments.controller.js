const Department = require('../models/department');

const departmentCtrl = {};

departmentCtrl.getDepartments = async (req, res, next) => {
    const departments = await Department.find();
    res.json(departments);
};

departmentCtrl.createDepartment = async (req, res, next) => {
    const department = new Department({
        name: req.body.name,
        description: req.body.description,
				director: req.body.director,
        img: req.body.img,
        employees: req.body.employees
    });
    await department.save();
		res.json([{status: 'Department created'},department]);
};

departmentCtrl.getDepartment = async (req, res, next) => {
    const { id } = req.params;
    const department = await Department.findById(id);
    res.json(department);
};

departmentCtrl.editDepartment = async (req, res, next) => {
    const { id } = req.params;
    const department = {
			name: req.body.name,
			description: req.body.description,
			director: req.body.director,
			img: req.body.img,
			employees: req.body.employees
    };
    await Department.findByIdAndUpdate(id, {$set: department}, {new: true});
    res.json([{status: 'Department Updated'},id]);
};

departmentCtrl.deleteDepartment = async (req, res, next) => {
    await Department.findByIdAndRemove(req.params.id);
    res.json({status: 'Department Deleted'});
};

module.exports = departmentCtrl;
