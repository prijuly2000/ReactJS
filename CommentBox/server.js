'use strict'

var express = require('express');
var server = express();
var data= [
{
	id:1,
	author:"Pritesh",
	text:"hi,whats up"
},
{
	id:2,
	author:"Mahesh",
	text:"Im doint good"
},
{
	id:3,
	author:"Sandeep",
	text:"Hey Pritesh"
}
];

server.use(express.static(__dirname));

var port = 3000;
server.listen(port,function(){
	console.log("Listening on localhost:"+port);
})

