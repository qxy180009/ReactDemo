



// str 模板字符串
// name = 'Qiang'
// saying = 'MARY HAHA'
// console.log(`hello ${name}, we say ${saying}`);
//  setTimeout(() =>{
//    console.log('xxx');
   
//  }, 1000)

// const double  = x => x*2
// console.log(double(4));

// const hello = (name = 'qiang') => {
//   console.log(`hello ${name}`);
// };

// hello()
// hello("Mary")

// function hello(name1, name2) {
//   console.log(name1, name2);
  
// }
// arr = ['Qiang','Mary']
// // hello.apply(null, arr)
// // 展开运算符
// hello(...arr)

// object
// const obj = {name: 'qiang', course: 'database'}
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// name = 'imooc'
// const obj = {
//   // name
//   [name]: 'hello',
//   hello1() {

//   }
// }
// console.log(obj);

// const obj = {name: 'Qiang', course: 'React'}
// const obj2 = {type: 'IT', date: '2017'}
// console.log({...obj, ...obj2, salary:"30000"});

// const arr = ['jest', 'jmetter']

// let arg1 = arr[0]
// let arg2 = arr[1]
// let [arg1, arg2] = arr
// console.log(arg1,"|", arg2);

// const obj = {name: 'imooc', course: 'React'}

class MyApp {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`hello,  ${this.name}`);
    
  }
}
const app = new MyApp('Qiang')
app.sayHello()