const express = require('express');
const app = express();
var path = require('path');

//html과 같은 정적 파일을 제공하기위한 소스코드
app.use(express.static(path.join(__dirname, 'client')));

//웹상에 표출할 html파일을 바라보기위한 소스코드 
app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname, 'client', 'map.html'));
});
 

app.use('/', function(req, res) {
    res.send("Hello Cesium");
});

app.listen(8080, function() {
    console.log("run port 8080");
});