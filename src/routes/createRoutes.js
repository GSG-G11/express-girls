const express = require('express');
const router=express.Router();
const postControllers=require('../controllers/postControllers')


router.post('/create-post',postControllers);
module.exports=router;