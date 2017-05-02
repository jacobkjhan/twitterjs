const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks')
const routes = require('./routes');

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


nunjucks.configure('views', {noCache: true});
nunjucks.render('index',people,function(err,res){
	console.log(res);
});

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', nunjucks.render);

app.use('/', routes);


app.listen(3000, function(){
	console.log("You're connected.")
});


