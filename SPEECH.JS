let text=document.getElementById("text")
let play=document.getElementById("play")
let step=document.getElementById("step")
let pause=document.getElementById("pause")
let RESUME=document.getElementById("RESUME")


play.addEventListener('click',()=>{
    talk(text.value)
    console.log(text.value);
})
function talk(PLY){
    let rex= new SpeechSynthesisUtterance(PLY)
    rex.rate=step.value
    speechSynthesis.speak(rex)

}
pause.addEventListener('click',()=>{
    speechSynthesis.pause()
})
RESUME.addEventListener('click',()=>{
    speechSynthesis.resume()
})
