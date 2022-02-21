const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const routes=require('./routes/createRoutes')
const routes2=require('./routes/publicRoutes')
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});*/
/*app.get('/posts',function)
router.get(function )
app.use(router)*/
app.use(routes)
app.use(routes2)
/*app.get('/posts', (req, res) => {
  fs.readFile(path.join(__dirname, 'posts.json'), (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.send(data);
    }
  });
});*/


module.exports=app;