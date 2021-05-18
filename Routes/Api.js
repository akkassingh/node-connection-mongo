// Initialize express router
let router = require('express').Router();

// Import employee controller
var employeeController = require('../controller/employeeController');

// root API response
router.get('/', function (req, res) {
    res.json({
        status: `Api is live`,
        message: `Access Employee details on http://localhost:8080/api/e`,
    });
});

// Employee routes
router.route('/employee')
    .get(employeeController.index)
    .post(employeeController.new);

router.route('/employee/:employee_id')
    .get(employeeController.view)
    .patch(employeeController.update)
    .put(employeeController.update)
    .delete(employeeController.delete);


// Export API routes
module.exports = router;