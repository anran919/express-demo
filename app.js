/*
 * @Descripttion: 
 * @version: 
 * @Author: 张安然
 * @Date: 2019-11-17 18:03:49
 * @LastEditors: 张安然
 * @LastEditTime: 2019-11-18 10:05:30
 */
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// 指定公开目录
app.use('/public/', express.static('./public/'));

//使用art-template
app.engine('html', require('express-art-template'));



var comments =[
    {
        name  :'张三',
        title :'这是一条评论',
        date  :'2019-11-21',
        
    },
    {
        name  :'张三2',
        title :'这是一条评论',
        date  :'2019-11-21',
        
    },
    {
        name  :'张三3',
        title :'这是一条评论',
        date  :'2019-11-21',
        
    },
    {
        name  :'张三4',
        title :'这是一条评论',
        date  :'2019-11-21',
        
    },
]

app.get('/', (request, response) => {
    response.send('hello word use nodemon')
})

app.get('/about', (request, response) => {

    // response.redirect('/index'); //重定向 
    response.render('about/about.html')
})

/**
 * 
 */
app.get('/index', (request, response) => {
    // 默认找views下的文件
    response.render('index.html', {
        comment: {
            name: '张三', 
            title: '我自横刀向天笑'
        }
    });
})


/**
 * 添加评论请求
 */
app.post('/postComment',(request,response)=>{
    var commnet = request.body;
    commnet.date ='2019-11-21';
    //收到请求，存储数据，返回到列表界面
    comments.unshift(commnet);
    response.render('commnet/comment.html',{
        comments :comments
    });
})

/**
 * 添加评论页面
 */
app.get('/editComment', (request, response) => {
    response.render('edit-comment/edit-comment.html');
})


/**
 * 显示评论列表
 */
app.get('/comment', (request, response) => {
    response.render('commnet/comment.html',{
        comments :comments
    });
})

app.listen(3000, () => {
    console.log('服务器启动')
})
