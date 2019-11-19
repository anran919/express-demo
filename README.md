# express-demo
### MongoDB使用

+ 下载安装

  - 如果出安装后使用mongod启动出现权限问题，使用命令 ``java sudo chown -R $USER /data/db``   

+ 开启数据库`mongod`

+ 使用数据库，在新的命令窗口，``mongo``

+ 关闭数据库``use admin; db.shutdownServer();``     

+ 或者使用``exit`` 退出mongodb

  ### 基本操作

  + 查看数据库

  + ```
    show dbs
    ```

    

  + 切换到指定数据库 （如果没有会新建）

  ```
  use test
  ```

  + 查看当前数据库

  + ```
    db
    ```

  + 插入数据

  + ```
    db.test.insert({"name": "first itme"})
    ```

  + 显示表中的数据

    ```
    db.test.find()
    ```

  + 查看所有的表

  + ```
    show collections
    ```

  ### 可视化工具

  + robo 3t 

  ### node.js中使用mongodb

  + 官方mongodb包（很少使用）

  + ```
    ``npm install mongodb -s `
    ```

  + 使用第三方mongoose （推荐使用）

  + ```
    npm install mongoose -s
    ```

  ### mogodb的基本概念

  ```json
  {
    数据库: {
      表(collections): [
        {
          "key": "value",
          "key": "value"
        },
        {
          "key": "value",
          "key": "value"
        },
        {
          "key": "value",
          "key": "value"
        },
        
      ],
      表: [
        {
          "key": "value",
          "key": "value"
        },
        {
          "key": "value",
          "key": "value"
        },
        {
          "key": "value",
          "key": "value"
        },
        
      ],  
    },
    数据库: {
      
    }
  }
  
  ```

  