/*
 * @Descripttion: 对本地数据学生数据做crud操作
 * @version: 
 * @Author: 张安然
 * @Date: 2019-11-18 15:29:42
 * @LastEditors: 张安然
 * @LastEditTime: 2019-11-19 10:23:00
 */

var fs = require('fs');
var dbPath = './public/assets/student-db.json'

//测试修改 


exports.findAll = function (callback) {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students
        return callback(err, students);
    })

}


/**
 * 
 */
exports.findByid = function (id, callback) {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students;
        var ret = students.find((item) => {
            return item.id = id;
        })
        return callback(null, ret);
    });
}


exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        console.log("findAll 1" + data);
        console.log("err 1" + err);
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students
        student.id = students[students.length - 1].id + 1;
        students.push(student);
        var json = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, json, (err) => {
            if (err) {
                return callback(err)
            }
            return callback(null)
        });
    })
}


/**
 * 更新
 */
exports.update = function (student, callback) {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students;

        var stu = students.find((item) => {
            return item.id === parseInt(student.id);
        })

        //遍历拷贝对象
        for (let key in student) {
            stu[key] = student[key]
        }

        //保存文件，重新写入
        var fileData = JSON.stringify({
            students: students
        });

        fs.writeFile(dbPath, fileData, (err) => {
            if (err) {
                callback(err)
            }
            callback(null);
        });

    })

}
exports.add = function () {


}

exports.delete = function () {

}