var router = require('koa-router')();
var koaBody = require('koa-body')(),
session = require('koa-session');

//fake users
var users=[
    {username:'tom',password:'tom'},
    {username:'lily',password:'lily'}
]

var list = {
    login: function *(next) {
        var params = this.request.body;
        var username = params.username;
        var password=params.password;
        var ifValidUser=users.some(function(value){
            return value.username==username && value.password==password;
        });

        if(ifValidUser){

        }
        else{
            yield this.redirect("/");
        }

        

    },
    loginRender: function *(next) {


        console.log('enter login');
        yield this.render("./login");
    },
    mainRender: function * (next) {
        if (yield User.thereIs(this.session.name)) {
            yield this.render("/main");
        } else {
            this.redirect("/");
        }
    }
};

router
    .get('/', koaBody, list.loginRender)
    .post('/', koaBody, list.login)
    .get('/main', koaBody, list.mainRender);
module.exports = router;