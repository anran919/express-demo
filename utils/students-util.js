/*
 * @Descripttion: 对本地数据学生数据做crud操作
 * @version: 
 * @Author: 张安然
 * @Date: 2019-11-18 15:29:42
 * @LastEditors: 张安然
 * @LastEditTime: 2019-11-18 17:02:08
 */

var fs = require('fs');
var dbPath = './public/assets/student-db.json'
exports.findAll = function (callback) {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        console.log("findAll 1" + data);
        console.log("err 1" + err);
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students
        return callback(err, students);
    })

}

exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        console.log("findAll 1" + data);
        console.log("err 1" + err);
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students
        student.id =students[students.length-1].id+1;
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


exports.find = function (id) {

}


exports.update = function () {


}
exports.add = function () {


}

exports.delete = function () {

}