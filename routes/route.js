var express = require('express');
const router = express.Router();

//Fetch Users
router.get('/users', (req, res, next)=> {
    res.send('Retrieving users');
}) 

//Add User
router.post('/users', (req, res, next)=> {
    res.send('Retrieving users');
}) 

//Delete User
router.delete('/users/:id', (req, res, next)=> {
    res.send('Retrieving users');
}) 


module.exports = router;