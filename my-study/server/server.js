const express = require('express');
const app = express();
const port = 3001; /* react의 기본 port가 3000이므로 3000 아닌 다른 수 기입 */
const cors =  require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host : "localhost",
    port : 3307,
    user : "admin",
    password : "a1234",
    database : "reactdb",
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, Express !!');
});

app.post('/idplz', (req, res) => {
    /*const serverid = req.body.plzid;
    console.log(serverid);
    const sendText = {
        text : " 지금은 코딩 중!",
    };
    res.send(sendText); */ /* DB 연결 전에  쓴 코드 */

    const test = req.body.test;
    console.log(req.body);

    connection.query("INSERT INTO react_test (test_body) values (?)", [test],
    function (err, rows, fields) {
        if(err) {
            console.log("실패");
            console.log(err);
        }else {
           console.log("성공"); 
           console.log(rows);
        }
    });

});

app.post("/callbody", (req, res) => {
    connection.query("SELECT * FROM react_test",
    function(err, rows, fields){
        if(err){
            console.log("불러오기 실패");
        }else{
            console.log("불러오기 성공");
            //console.log(rows);
            res.send(rows);
            /* res.send(row[0]) 기존 코드 임 */
        }
    })
});

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}`);
});
