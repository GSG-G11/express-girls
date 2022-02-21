const express = require('express');
const post=require('../controllers/publicControllers')
const router2=express.Router();
router2.get('/posts',post);

module.exports=router2;
