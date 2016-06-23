var express = require('express');
var app = express();
app.get('*',function(req,res){
    res.send('ok');
});
app.listen(9090);
var axios = require('axios');
axios.get('http://localhost:9090/package.json')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
