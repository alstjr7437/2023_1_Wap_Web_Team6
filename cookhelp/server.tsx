const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const fs = require('fs');
const bcrypt = require('bcrypt');
//express 서버
// port 설정 부분
const port = process.env.PORT || 5000;

const db = require('./lib/db.tsx');
const sessionOption = require('./lib/sessionOption.tsx');

// 사용자들 테스트 하는 부분
//json형식으로 주고 받음
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.get('/authcheck', (req, res) => {   
  const sendData = { isLogin: "" };
  if (req.session.is_logined) {
      sendData.isLogin = "True"
  } else {
      sendData.isLogin = "False"
  }
  res.send(sendData);
})

app.get('/api/logout', function (req, res) {
  console.log("hello");
  req.session.destroy(function (err) {
      res.redirect('/');
  });
});

app.post("/api/login", (req, res) => { // 데이터 받아서 결과 전송
    const userId = req.body.setId;
    const password = req.body.setPassword;
    const sendData = { isLogin: "" };

    if (userId && password) {             // id와 pw가 입력되었는지 확인
        db.query('SELECT * FROM members WHERE id = ?', [userId], function (error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {       // db에서의 반환값이 있다 = 일치하는 아이디가 있다.
                //bcrypt.compare(password , results[0].password, (err, result) => {    // 입력된 비밀번호가 해시된 저장값과 같은 값인지 비교   
                    if (results[0].password == password) {                  // 비밀번호가 일치하면
                        //   req.session.is_logined = true;      // 세션 정보 갱신                      여기서 에러...
                        //   req.session.nickname = userId;
                        //   req.session.save(function () {
                        //       sendData.isLogin = "True"
                        //       res.send(sendData);
                        //   });
                        console.log("로그인 성공!!")
                        //db.query(`INSERT INTO logTable (created, username, action, command, actiondetail) VALUES (NOW(), ?, 'login' , ?, ?)`
                        //    , [req.session.nickname, '-', `React 로그인 테스트`], function (error, result) { });
                    }
                    else{                                   // 비밀번호가 다른 경우
                        sendData.isLogin = "로그인 정보가 일치하지 않습니다."
                        console.log('비밀번호가 틀렸습니다.')
                        res.send(sendData);
                    }
                    
                //})                      
            } else {    // db에 해당 아이디가 없는 경우
                sendData.isLogin = "아이디 정보가 일치하지 않습니다."
                console.log('아이디가 없습니다.')
                res.send(sendData);
            }
        });
    } else {            // 아이디, 비밀번호 중 입력되지 않은 값이 있는 경우
        sendData.isLogin = "아이디와 비밀번호를 입력하세요!"
        res.send(sendData);
    }
});

app.post("/api/Join", (req, res) => {  // 데이터 받아서 결과 전송
    console.log('hello')
    const userId = req.body.joinId;
    const userPassword = req.body.joinPassword;
    const userName = req.body.joinName;
    const userSelectFood = req.body.joinSelectFood;
    
    console.log(userId, userPassword, userName, userSelectFood)
  
    const sendData = { isSuccess: "" };

    if (userId && userPassword && userName && userSelectFood) {
        db.query('SELECT * FROM members WHERE id = ?', [userId], function(error, results, fields) { // DB에 같은 이름의 회원아이디가 있는지 확인
            if (error) throw error;
            if (results.length <= 0) {         // DB에 같은 이름의 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우
                db.query('INSERT INTO members (id, password, nickname, foodstyle) VALUES(?,?,?,?)', [userId, userPassword, userName, userSelectFood], function (error, data) {
                    if (error) throw error;                    
                    console.log('회원가입 성공!')
                    // req.session.save(function () {    
                    //     sendData.isSuccess = "True"
                    //     res.send(sendData);
                    // });
                });
            }
            else {                                                  // DB에 같은 이름의 회원아이디가 있는 경우            
                sendData.isSuccess = "이미 존재하는 아이디 입니다!"
                console.log('이미 아이디가 있습니다')
                res.send(sendData);  
            }            
        });        
    } else {
        console.log('아이디 비밀번호 입력하세요!')
        sendData.isSuccess = "아이디와 비밀번호를 입력하세요!"
        res.send(sendData);  
    }
  
});

// 서버 작동하는지 찍는 부분
app.listen(port, () => console.log('Listening on port',port))