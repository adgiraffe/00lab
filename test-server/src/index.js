const Koa = require('koa');
const Router=require('koa-router');

const app = new Koa();
const router=new Router();


//Koa에서는 use함수를 통해 미들웨어를 어플리케이션에 등록 해준다.
//ctx는 , 웹요청과 응담에 대한 정보. next는 미들웨어 실행.


router.get('/', (ctx, next) => {
    ctx.body = '홈';
});


router.get('/about',(ctx,next)=>{
    ctx.body='소개';
});

router.get('/about/:name', (ctx, next) => {
    const { name } = ctx.params; // 라우트 경로에서 :파라미터명 으로 정의된 값이 ctx.params 안에 설정됩니다.
    ctx.body = name + '의 소개';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});