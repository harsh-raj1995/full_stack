// // function 
//  //argument

function display(name){
    //parameter
    name();
}

// function ret(name){
//     return "hi"
// }
// console.log(ret());

function greet(){
    console.log("welcome")
}
display(greet)

//arrow function
console.log(a)
var a=()=>{
    console.log("hi")
}
console.log(a)
a();
// //function are first class citizen
// //can be store in variable , can give parameter and can be called inside function
// setTimeout(()=>{
//     console.log("set time out")
// },2000)

// let a= document.querySelector("p")

// a.style.backgroundColor="Red"

// let b= document.querySelector("body")
// let btn=document.querySelector("button")
// let cur =0
// btn.addEventListener("click",function(){
//     if (cur==0){
//     b.style.backgroundColor="Black"
//     b.style.color="White"
//     a.style.backgroundColor="#aca8a8"
//         cur=1
//     }else{
//         cur=0
//         b.style.backgroundColor="White"
//         b.style.color="Black"
//         a.style.backgroundColor="Red"
//     }
// })

// let input=document.querySelector("#input1")
// let btn = document.querySelector("button")
// let list= document.querySelector("ol")

// btn.addEventListener("click",addNews)

// function addNews(){
//     let takedata= input.value;
//     if(takedata==""){
//         alert("Please enter news!")
//         return
//     }
//     let li=document.createElement("li")
//     li.innerText=takedata;
//     list.appendChild(li)
//     input.value=""
// }

let arr=[1,2,3,4,5]
//for each -- used to perform some operation on each element of array but does not return new array
arr.forEach((n)=>
    console.log(n)
)
//map is used to perform some operation on each element of array and return new array
let arr2=arr.map((n)=>n*n);
console.log(arr2)

//filter -- need condition
let arr3=arr.filter((n)=>n%2==0)
console.log(arr3)
//reduce -- used to reduce array to single value
let sum=arr.reduce((acc,n)=>acc+n,0)
//how it works -- acc is accumulator which stores the result of previous operation and n is current element of array
console.log(sum)

console.log(arr[0])

// //objects -- key value pair
let obj ={
    name:"harsh",
    age:21,
    city:"delhi",
    email:"harsh@example.com",
    display2:function(){
        console.log("hello")
    },
    //inner object
    object:{
        name:"inner object"
    }
}
console.log(obj.name)
console.log(obj["age"])
obj.age=22
console.log(obj.age)
//delete operator -- used to delete property from object
delete obj.city
console.log(obj)
obj.display2()
console.log(obj.object.name)


//promise -- used to handle asynchronous operations
 //// callback -- when we call function and pass another function as parameter to it and that function will be called after some time
 function task1(callback){
    setTimeout(()=>{
        console.log("task 1 completed")
        callback()
    },10000)
 }//higher order function -- when we pass function as parameter to another function
function task2(){
    setTimeout(()=>{
        console.log("task 2 completed")
    },5000)
}//callback function -- when we pass function as parameter to another function and that function will be called after some time
task1(task2)
//callback hell -- when we have multiple nested callbacks
// task1(function(){
//     task2(function(){
//         console.log("all tasks completed")
//     })
// })
//piramid of doom -- when we have multiple nested callbacks and it becomes difficult to read and maintain code
// task1(function(){
//     task2(function(){
//         task3(function(){
//             task4(function(){
//                 console.log("all tasks completed")
//             })
//         })
//     })
// }

//promise -- used to handle asynchronous operations and avoid callback hell
let promise = new Promise((resolve,reject)=>{
    let a=9
    if(a%2==0){
        resolve("even number "+a)
        //resolve -- used to return value when promise is resolved
    }else{
        reject(a+" is odd number")
        //reject -- used to return value when promise is rejected
    }
})
promise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})