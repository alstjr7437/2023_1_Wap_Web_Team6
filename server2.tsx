const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
//express 서버
const app = express();
// port 설정 부분
const port = process.env.PORT || 5000;

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const pool = mysql.createPool({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
  connectionLimit: 10 // 연결 풀의 최대 연결 개수 설정
});


// 사용자들 테스트 하는 부분
//json형식으로 주고 받음
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/customers', (req, res) => {
  pool.getConnection((err, connection) => {
      if (err) {
          throw err;
      }
      connection.query("SELECT * FROM members;", (err, rows, fields) => {
          connection.release(); // 커넥션 반환
          if (err) {
              throw err;
          }
          res.send(rows);
      });
  });
});

// 서버 작동하는지 찍는 부분
app.listen(port, () => console.log('Listening on port',port))