const express = require('express')
const bodyParser = require('body-parser')
//express 서버
const app = express();
// port 설정 부분
const port = process.env.PORT || 5000;

//json형식으로 주고 받음
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// 사용자들 테스트 하는 부분
app.get('/api/customers', (req, res) =>{
    res.send([
            {
            'id' : 1,
            'password' : '000324',
            'image' : 'https://placeimg.com/64/64/any',
            'name' : '김민석',
            'birthday' : '000324',
            'gender' : '남자',
            'job' : '대학생'
            },
            {
              'id' : 2,
              'password' : '2321',
              'image' : 'https://placeimg.com/64/64/any',
              'name' : '홍길동',
              'birthday' : '7437',
              'gender' : '남자',
              'job' : '대학생'
            },
            {
              'id' : 3,
              'password' : '023',
              'image' : 'https://placeimg.com/64/64/any',
              'name' : '홍길순',
              'birthday' : '7437',
              'gender' : '여자',
              'job' : '대학생'
            }
    ]);
});

// 서버 작동하는지 찍는 부분
app.listen(port, () => console.log('Listening on port',port))