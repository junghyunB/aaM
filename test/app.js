var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.set('view engine', 'ejs'); // 뷰엔진으로 npm 설치한 ejs 사용
app.set('views', './views/') // view 파일들은 .view 에 잇다
app.use(bodyParser.urlencoded({extended: true})); // post 할때 자꾸 cannot property  에러나서 찾아보니 router 경로 지정 전에 bodyparser 미들웨어 설정해야함
app.use(bodyParser.json());


var boardRouter = require('./routes/board')
var mysqlRouter = require('./routes/mysql')
app.use('/form', formRouter);
app.use('/mysql', mysqlRouter);
app.use('/board', boardRouter);  //항상 추가해주자 라우터를 만들면 app.js 메인파일에 추가 항상!


app.listen(3000);