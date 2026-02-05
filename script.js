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

let input=document.querySelector("#input1")
let btn = document.querySelector("button")
let list= document.querySelector("ol")

btn.addEventListener("click",addNews)

function addNews(){
    let takedata= input.value;
    if(takedata==""){
        alert("Please enter news!")
        return
    }
    let li=document.createElement("li")
    li.innerText=takedata;
    list.appendChild(li)
    input.value=""
}