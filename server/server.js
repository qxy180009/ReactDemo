const express = require('express')
const mongoose = require('mongoose')
// link to mongo
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connect success');
  
})
// mysql table类似得文档概念
// 新建数据模型

const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type:Number, require: true }
}))

// 新增数据
// User.create({
//   user: 'Mary',
//   age: 19
// }, function(err, doc){
//   if(!err){
//     console.log(doc);
//   }else {
//     console.log(err);
//   }
// })

// new app
// User.remove({age: 18}, function(err, doc) {
//   console.log(doc);
  
// })

// User.updateOne({}, {'$set': {age: 21}}, function(err, doc) {
//   console.log(doc);
// })

const app = express()

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>')
})
app.get('/data', function(req, res) {
  User.findOne({user: 'Qiang'},function(err, doc){
    res.json(doc)
  })
})

app.listen(9093, function(){
  console.log("Node app start at port 9093")
})
