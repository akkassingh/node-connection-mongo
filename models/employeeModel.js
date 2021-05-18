//import Mongoose
var mongoose = require('mongoose');

// Setup Employee schema
var employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export employee model
var Employee = module.exports = mongoose.model('employee', employeeSchema);

module.exports.get = function (callback, limit) {
    Employee.find(callback).limit(limit);
}