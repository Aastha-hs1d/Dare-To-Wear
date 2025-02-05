let boxes = document.querySelector(".container").children;
let onlight;
let stopbutton = document.querySelector(".button button");
let running = true;
function getrandomcolour(){
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}
function changecolours(){
    Array.from(boxes).forEach(e=>{
        e.style.backgroundColor = getrandomcolour()
        e.style.color = getrandomcolour()
    })
}
// start disco lights
function startDisco(){
    onlight= setInterval(changecolours, 100);
    stopbutton.innerText = "STOP";
    stopbutton.style.backgroundColor = "darkred";
    running = true;

}

// stop discolights
function stopDisco(){
    clearInterval(onlight);
    stopbutton.innerText = "START";
    stopbutton.style.backgroundColor = "green";
    running = false;
}

// initially
startDisco();

// toggle
stopbutton.addEventListener("click", function(e){
    console.log(e);
    if(running){
        stopDisco();
    }
    else{
        startDisco();
    }
})
