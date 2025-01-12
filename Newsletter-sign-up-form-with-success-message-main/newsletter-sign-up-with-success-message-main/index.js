"use strict"

window.onload = function(){
    const btn = document.getElementsByTagName("button")[0]
    const input = document.getElementsByTagName("input")[0]
    const ErrorMsg = document.getElementById("errorMsg")
    const form = document.querySelector("form")
    const main = document.querySelector("main")

    btn.addEventListener("click",BtnClick)

    document.addEventListener("keydown",function(event){
        if(event.key == "Enter")
            BtnClick()
    })


    function BtnClick(){
        const vetSplit = input.value.split("@")
        if(input.value == "" || !input.value.includes("@") || !vetSplit[0] 
            || !vetSplit[1]){
            input.style.color = "rgb(255, 98, 87)"
            input.style.borderColor = "rgb(255, 98, 87)"
            input.style.backgroundColor = "#ffecec"
            ErrorMsg.style.display = "inline-block"
            ErrorMsg.textContent = "Valid email required"
            ErrorMsg.style.color = "rgb(255, 98, 87)"
        }
        else{
            const succDiv = document.getElementById("succ")
            main.style.display = "none"
            succDiv.style.display = "block"
            document.querySelector(".dismiss-btn").addEventListener("click",function(){
                main.style.display = "grid"
                succDiv.style.display = "none"
            })
        }
    }

    form.addEventListener("submit",function(event){
        event.preventDefault()
    })
}