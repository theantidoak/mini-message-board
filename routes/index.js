const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
].map((message) => ({ ...message, added: message.added.toLocaleString('en-US', { hour12: true, })}));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini message board', messages });
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.message, user: req.body.author, added: (new Date()).toLocaleString('en-US', { hour12: true, }) });
  res.redirect('/');
})

module.exports = router;
