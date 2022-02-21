const path = require('path');
const fs=require('fs');
const postControllers=(req, res) => {
    const filePath = path.join(__dirname, '..','posts.json');
  
    fs.readFile(filePath, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        let obj = JSON.parse(data);
        console.log('the req body', req.body.post);
        obj[Date.now()] = req.body.post;
        console.log('my obj is', obj);
  
        fs.writeFile(filePath, JSON.stringify(obj), (error) => {
          if (error) {
          } else {
          }
        });
      }
    });
    res.redirect('/');
  }
module.exports= postControllers;