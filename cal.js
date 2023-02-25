let display=document.getElementById('display')
let btn=document.querySelectorAll('button')
let result
let num

btn.forEach(btn=>btn.addEventListener('click',(e)=>{
    num=e.target.id
    display.innerText+=num
    display.innerText= eval(display.innerText)
}))



