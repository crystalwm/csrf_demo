var koa = require('koa'),
    render=require('koa-swig'),
    path=require('path'),
    static = require('koa-static'),
    router=require('koa-router')(),
    session = require('koa-session'),
    route=require('./routes/route.js');


var app = koa();


app.context.render = render({
    root: path.join(__dirname, './public'),
    ext: 'html'
});




//session
app.keys=['riLbqTemd3NAdUBwUU7nfsuteqwapN'];
app.use(session(app));



    app
        .use(session(app))
        .use(static(path.join(__dirname, './public')))
        .use(router.routes())
        .use(route.routes());

 app.listen(3001,function(){
    console.log("victim listening on port 3001");
 });
