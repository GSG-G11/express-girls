/*const path = require('path');
const publicControllers=(req, res) => {
    res.sendFile(path.join(__dirname, '..','..', 'public', 'index.html'));
  }
module.exports=publicControllers;*/
const path = require('path');
const fs=require('fs');
const post = (req, res) => {
    fs.readFile(path.join(__dirname,'..', 'posts.json'), (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.send(data);
      }
    });
  }
module.exports=post