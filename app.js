const sign=document.querySelector(".singnbtn");
const signform=document.querySelector(".singnpopup");

sign.addEventListener('click',()=>{
    signform.classList.toggle("visible");
})