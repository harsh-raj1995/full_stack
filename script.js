// // function 
//  //argument

// function display(name){
//     //parameter
//     name();
// }

// function ret(name){
//     return "hi"
// }
// console.log(ret());

// function greet(){
//     console.log("welcome")
// }
// display(greet)

// //arrow function
// console.log(a)
// var a=()=>{
//     console.log("hi")
// }
// console.log(a)
// a();
// //function are first class citizen
// //can be store in variable , can give parameter and can be called inside function
// setTimeout(()=>{
//     console.log("set time out")
// },2000)

let a= document.querySelector("p")

a.innerHTML="<h2>hi</h2>"
a.style.backgroundColor="Red"

let b= document.querySelector("body")
let btn=document.querySelector("button")
btn.addEventListener("click",function(){
    b.style.backgroundColor="Black"
    b.style.color="White"
})