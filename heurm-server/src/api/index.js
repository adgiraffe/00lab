const Router = require('koa-router');

const api = new Router();
const auth = require('./auth');
const book = require('./book');
api.use('/auth', auth.routes());
api.use('/book', book.routes());
module.exports = api;