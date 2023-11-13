document.addEventListener("DOMContentLoaded", ()=>{
    const newTaskBtn = document.getElementById("nuovaTaskBtn")
    const input =document.getElementById("nuovaTask")

    newTaskBtn.addEventListener("click", ()=>{
        console.log('nuova task');
    })
    input.addEventListener("keypress", (f)=>{
        console.log(f);
    })



})