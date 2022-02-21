const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
app.post('/create-post', (req, res) => {
  const filePath = path.join(__dirname, 'posts.json');

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
  ///// ??????????????????
});
app.get('/posts', (req, res) => {
  fs.readFile(path.join(__dirname, 'posts.json'), (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.send(data);
    }
  });
});

app.listen(4000, () => {
  console.log('I am listening in port 4000');
});
