function task1(){
  return new Promise((resolve)=>{   
    setTimeout(()=>{
      console.log("task1")
      resolve();
    })
  })
}
function task2(){
  return new Promise((resolve)=>{   
    setTimeout(()=>{
      console.log("task2")
      resolve();
    })
  })
}
function task3(){
  return new Promise((resolve)=>{   
    setTimeout(()=>{
      console.log("task3")
      resolve();
    })
  })
}

task1()
.then(()=>task2())
.then(()=>task3())
.finally(()=>console.log('completed'))

//then chaining resolve callback hell( deep nesting ,diff debuging and messy and tight couplying )
//then chaining issue- immidiate run dont wait we can use return task2() or .then(task2)
async function execute(){
  //async await
  await task1;
  //task 2 when 1 is completed
  await task2;
  await task3;
}
execute()

//fetchAPI
async function executeTask() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await response.json();
  //fetch is not readable so we need to convert into json
  //we wont use that in react
  console.log(data) 
}
executeTask()
//fetch return promise we can also post data also

//this- it points the property of current object

const obj={
  name:'harsh',
  display: function(){
    console.log(this.name)
  }
  // d2:()=>{
  //   console.group(this.name)
  //   //it does not support this
  // }
}
obj.display()

const obj2={
  name:'raj'
}
function dis(str){
  console.log(str+this.name)
}
dis(obj)
dis(obj2)
//undefined
dis.call(obj)
//.cal(x) x is treated as this keyword and they become global
dis.apply(obj,["hi"])
// let obj2=obj.display;
// obj2();
// this is for obj1 only 
let obj3=obj.display.bind(obj)
obj3()
//promise execute before settimout -micro and macro
//time to recall
/*
async sync- how it is treated in js engine- webapi callstack event task
let var const
temporal dead zone and hoisting
function type datatype
array object methods
for each loop
dom manipulation 
event handling 
callback
promise
async await
bind call and apply
higher order funct
arrow function
fetch api and 
 
check on google sheet


*/