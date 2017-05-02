const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path = require('path');
const bodyparser = require('body-parser');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get("/stylesheets/style.css", function (req,res){
	res.sendFile('/stylesheets/style.css', {root: __dirname + '/../public'});
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: name, showForm: true } );
});

router.get('/tweets/:id', function(req,res){
  var id = Number(req.params.id);
  var list = tweetBank.find({id: id});
  res.render('index', { list: id});
})

module.exports = router;