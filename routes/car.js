var express = require('express');
var router = express.Router();

let carController = require('../controllers/car');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    
    // ADD YOUR CODE HERE        

}

/* GET list of items */
router.get('/list', carController.carList);

// Route for Details
router.get('/details/:id', carController.details);

// Routers for edit
router.get('/edit/:id', carController.displayEditPage);
router.post('/edit/:id', carController.processEditPage);

// Delete
router.get('/delete/:id', carController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', carController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', carController.processAddPage);

module.exports = router;