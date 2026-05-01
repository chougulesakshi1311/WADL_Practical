const Employee = require('../models/employee.js');

exports.addEmployee = async(req, res) => {
    try {
        const {name, department, designation, salary, joiningDate} = req.body;
        const employee = new Employee({name, department, designation, salary, joiningDate});
        const savedEmployee = await employee.save();
        res.status(201).json({message: "Employee added successfully", employee: savedEmployee});
    } catch(error) {
        res.status(500).json({error: "Failed to add employee"});
    }
};

exports.getEmployees = async(req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({employees});
    } catch(error) {
        res.status(500).json({error: "Failed to retrieve employees"});
    }
};

exports.updateEmployee = async(req, res) => {
    try {
        const {id} = req.params;
        const updated = await Employee.findByIdAndUpdate(id, req.body, {new: true});
        if(!updated) return res.status(404).json({error: "Employee not found"});
        res.status(200).json({message: "Employee updated successfully", Employee: updated});
    } catch(error) {
        res.status(500).json({error: "Failed to update employee"});
    }
};

exports.deleteEmployee = async(req, res) => {
    try {
        const {id} = req.params;
        const deleted = await Employee.findByIdAndDelete(id);
        if(!deleted) return res.status(404).json({error: "Employee not found"});
        res.status(200).json({message: "Employee deleted successfully"});
    } catch(error) {  
        res.status(500).json({error: "Failed to delete employee"});
    }
};