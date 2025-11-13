const display = document.querySelector(".res-text")
const copy = document.querySelector(".copy")
const range = document.querySelector("#range")
const rangeRes = document.querySelector(".range-res")
const numInput = document.querySelector("#number")
const charInput = document.querySelector("#special-char")
const btn = document.querySelector(".generate")

const strongestPw = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()<>?{}[]1234567890`;
const strongPw = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()<>?{}[]`;
const middlePw = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890`;
const weakPw = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;

btn.addEventListener("click",generatePw);

function generatePw(){
    let length = range.value;
    let numCheck = numInput.checked;
    let charCheck = charInput.checked;
    
    let newPw = "";

    if(numCheck && charCheck){
        for(let i=0;i < length;i++){
            newPw += strongestPw[Math.floor(Math.random() * strongestPw.length)];
        }
    }
    else if(charCheck){
        for(let i=0;i < length;i++){
            newPw += strongPw[Math.floor(Math.random() * strongPw.length)];
        }
    }
    else if(numCheck){
        for(let i=0;i < length;i++){
            newPw += middlePw[Math.floor(Math.random() * middlePw.length)];
        }
    }
    else{
        for(let i=0;i < length;i++){
            newPw += weakPw[Math.floor(Math.random() * weakPw.length)];
        }
    }

    display.value = newPw;    
}


//Range Value

range.addEventListener("change",()=>{
    rangeRes.innerHTML = range.value;
})

//Copy

copy.addEventListener("click",()=>{
    if(display.value){
        display.select();
        display.setSelectionRange(0,9999999)

        navigator.clipboard.writeText(display.value);
        alert("Copy Success!")
    }
})