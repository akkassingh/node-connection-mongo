// Import employee model
Employee = require('../models/employeeModel');

// Handle index actions
exports.index = function (req, res) {
    Employee.get(function (err, employees) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Employee data retrieved successfully",
            data: employees
        });
    });
};

// Handle create employee actions
exports.new = function (req, res) {
    var employee = new Employee();
    employee.name = req.body.name ? req.body.name : employee.name;
    employee.gender = req.body.gender;
    employee.email = req.body.email;
    employee.phone = req.body.phone;

    employee.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New Employee created!',
                data: employee
            });
    });
};

// Handle view employee info
exports.view = function (req, res) {
    Employee.findById(req.params.employee_id, function (err, employee) {
        if (err)
            res.send(err);
        res.json({
            message: 'Employee details loading..',
            data: employee
        });
    });
};

// Handle update Employee info
exports.update = function (req, res) {
    Employee.findById(req.params.employee_id, function (err, employee) {
        if (err)
            res.send(err);
        employee.name = req.body.name ? req.body.name : employee.name;
        employee.gender = req.body.gender;
        employee.email = req.body.email;
        employee.phone = req.body.phone;

        employee.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Employee Info updated',
                data: employee
            });
        });
    });
};

// Handle delete Employee
exports.delete = function (req, res) {
    Employee.deleteOne({
        _id: req.params.employee_id
    }, function (err, employee) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Employee deleted'
        });
    });
};