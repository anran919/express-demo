/*
 * @Descripttion: 
 * @version: 
 * @Author: 张安然
 * @Date: 2019-11-17 18:03:49
 * @LastEditors: 张安然
 * @LastEditTime: 2019-11-19 20:00:45
 */
var express = require('express')
var bodyParser = require('body-parser')

var router = require('./router')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// 指定公开目录
app.use('/public/', express.static('./public/'));
app.use('/node_modules/', express.static('./node_modules/'));
//使用art-template
app.engine('html', require('express-art-template'));

app.use(router)

app.listen(3000, () => {
    console.log('服务器启动')
})
