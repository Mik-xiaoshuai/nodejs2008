const express = require('express')   //引入模块
var mysql= require('mysql');   //引入模块
const app = express()     //调用  express
const port = 8080     //服务运算的端口

app.get('/User',function (req,res) {
   // console.log("欢迎访问用户接口")
    res.send("欢迎访问用户接口");
});

app.get('/list',function(req,res){
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'vue2008'
    });

    connection.connect();

    connection.query("select user_id,user_name,email from p_users limit 10",function (error, results, fields) {
        // if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
        // console.log(results)
        res.send(JSON.stringify(results))
    });

    connection.end();
})
app.get('/', (req, res) => {   //路由写法

    const list=[
        {
            userid:'1001',
            name:'张三',
            age:11,
        },
        {
            userid:'1002',
            name:'李四',
            age:12,
        },
        {
            userid:'1003',
            name:'王五',
            age:13,
        },
        ];
    //将数组转为json字符串

    res.send(JSON.stringify(list));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});