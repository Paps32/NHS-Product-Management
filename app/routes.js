// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
router.get('/', function(req, res){
  // res.set('Content-Type', 'text/html')
    res.render('product-management.html', { root: __dirname + "/views" } );
});
module.exports = router;
