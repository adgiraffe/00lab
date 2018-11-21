const Router = require('koa-router');
const auth = new Router();
const authCtrl = require('./auth.controller');

auth.post('/register/local', authCtrl.localRegister);
auth.post('/login/local', authCtrl.localLogin);
auth.get('/exists/:key(email|username)/:value', authCtrl.exists);
// 3번째 API exists 에서는 :key(email|username) 이 사용되었는데, 이 의미는 key 라는 파라미터를 설정하는데, 이 값들이 email 이나 username 일때만 허용한다는 것 입니
auth.post('/logout', authCtrl.logout);
auth.get('/check', authCtrl.check);

module.exports = auth;