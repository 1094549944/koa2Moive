const Koa = require('koa')
const app = new Koa
const { normal, ejsTpl, pugTpl } = require('./tpl')
const ejs = require('ejs')
const pug = require('pug')
app.use(async (ctx, next) => {
  ctx.type = "text/html;charset=utf-8"
  // ctx.body = ejs.render(ejsTpl, {
  //   you: 'Luck',
  //   me: 'bootstrap'
  // })
  ctx.body = pug.render(pugTpl, {
    you: 'Luck',
    me: 'Scott'
  })

}).listen(4455)