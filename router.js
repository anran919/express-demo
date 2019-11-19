/*
 * @Descripttion: 
 * @version: 
 * @Author: 张安然
 * @Date: 2019-11-18 12:42:46
 * @LastEditors: 张安然
 * @LastEditTime: 2019-11-19 11:05:21
 */
var express = require('express')
var fs = require('fs')
var studentUtil = require('./utils/students-util');

//使用express 自自带的router
var router = express.Router();
var comments = [
    {
        name: '张三',
        title: '这是一条评论',
        date: '2019-11-21',

    },
    {
        name: '张三2',
        title: '这是一条评论',
        date: '2019-11-21',

    },
    {
        name: '张三3',
        title: '这是一条评论',
        date: '2019-11-21',

    },
    {
        name: '张三4',
        title: '这是一条评论',
        date: '2019-11-21',

    },
]

var students = [];

router.get('/', (request, response) => {
    response.send('hello word use nodemon')
})

router.get('/about', (request, response) => {

    // response.redirect('/index'); //重定向 
    response.render('about/about.html')
})

/**
 * 
 */
router.get('/index', (request, response) => {
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
router.post('/postComment', (request, response) => {
    var commnet = request.body;
    commnet.date = '2019-11-21';
    //收到请求，存储数据，返回到列表界面
    comments.unshift(commnet);
    response.render('commnet/comment.html', {
        comments: comments,
    });
})

/**
 * 添加评论页面
 */
router.get('/editComment', (request, response) => {
    response.render('edit-comment/edit-comment.html');
})


/**
 * 显示评论列表
 */
router.get('/comment', (request, response) => {
    response.render('commnet/comment.html', {
        comments: comments
    });
})

router.get('/students', (request, response) => {
    // var students = {};
    // // readfile 'utf-8' 可选参数
    // fs.readFile('./public/assets/student-db.json', 'utf-8', (err, data) => {
    //     if (err) {
    //         return response.status(500).send("Service error ");
    //     }

    //     console.log(data);
    //     response.render('dash-board/dash-board.html', {
    //         students: JSON.parse(data).students
    //     })
    // })
    studentUtil.findAll((err, students) => {
        if (err) {
            response.status(500).send(err);
        }
        console.log('findAll' + students);
        response.render('students/students.html', {
            students: students
        })
    });

})


/**
 * 学生系统的增删改查
 */


/**
 * 跳转增加学生页面
 */
router.get('/students/new', (request, response) => {
    response.render('student/student-new/student-new.html');
})

///students/new
router.post('/students/new', (request, response) => {
    // var student = request.body;
    // //收到请求，存储数据，返回到列表界面
    // students.unshift(student);
    // response.render('students/students.html', {
    //     students: students,
    // });
    var student = request.body;
    studentUtil.save(student, (err) => {
        if (err) {
            response.status(500).send("添加失败" + err);
        }
        response.redirect('/students');

    })
})

/**
 * update
 */
router.get('/students/update', (request, response) => {
    studentUtil.update({
        "id": 1,
        "name": '汤姆',
    }, (err) => {
        if (err) {
            response.status(500).send("修改失败" + err);
        }
        response.send('修改成功');
    });
});



/**
 * 跳转编辑页面
 */
router.get('/students/edit', (request, response) => {
    var id = request.query.id;
    studentUtil.findByid(id, (err, student) => {
        if (err) {
            response.status(500).send(err);
        }
        response.render('student/student-edit/student-edit.html', {
            student: student
        })

    })
});

/**
 * 编辑数据
 */
router.post('/students/edit', (request, response) => {
    var student = request.body
    studentUtil.update(student,(err,data)=>{
        if(err){
            response.status(500).send(err)
        }
        response.redirect('/students')
    })
});
/**
 * 编辑数据
 */
router.get('/students/delete', (request, response) => {
    var id = request.query.id
    studentUtil.deleteByid(id,(err)=>{
        if(err){
            response.status(500).send(err)
        }
        response.redirect('/students')
    })
});




module.exports = router;