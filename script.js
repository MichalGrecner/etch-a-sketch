

function makeCanvas(squares = 50){
    let pixels = 600;
    let oneSquare = pixels/squares

    let canvas = document.querySelector(".canvas");
    let square = document.createElement("div");
    for(let x=0; x <Math.floor(squares); x++){
        for(let y=0; y<Math.floor(squares); y++){
            let square = document.createElement("div");
            square.setAttribute("class","divSquare");
            square.style.border = "1px solid black";
            square.style.width = `${oneSquare}px`
            square.style.height =`${oneSquare}px`
            square.style.display = "flex"
            square.style.boxSizing = "border-box"
            canvas.appendChild(square)
        }
    }
}
 getSize()

function getSize(){
    let slider = document.querySelector("#slider");
    let sliderValue = 50;
    let sliderValueDisplay = document.querySelector(".sliderValue")
    slider.addEventListener("change", function(e){
        removeCanvas()
        sliderValue = e.target.value;
        sliderValueDisplay.innerHTML=sliderValue
        makeCanvas(sliderValue)
    })
}

function removeCanvas(){
    let divs = document.querySelectorAll(".divSquare")
    divs.forEach(function(oneDiv){
        oneDiv.remove()
    })
}