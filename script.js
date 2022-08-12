

function makeCanvas(squares = 50, color = "blue"){
    let sliderValueDefault = document.querySelector(".sliderValue");
    sliderValueDefault.innerHTML = `Grid size: ${squares} x ${squares}`;
    let pixels = 600;
    let oneSquare = pixels/squares;
    let canvas = document.querySelector(".canvas");
    document.querySelector("#colorPickerCanvas").addEventListener("input", function(e){
         canvasColor = e.target.value;
    })
    for(let x=0; x <Math.floor(squares); x++){
        for(let y=0; y<Math.floor(squares); y++){
            let square = document.createElement("div");
            square.setAttribute("class","divSquare");
            square.style.border = "1px solid black";
            square.style.width = `${oneSquare}px`
            square.style.height =`${oneSquare}px`
            square.style.display = "flex"
            square.style.boxSizing = "border-box"
            square.style.backgroundColor = `${color}`
            canvas.appendChild(square)
        }
    }
    
    draw(globalPenColor)
    
    
}


function updateCanvas(){
    let slider = document.querySelector("#slider");
    let sliderValue = 50;
    let sliderValueDisplay = document.querySelector(".sliderValue")
    slider.addEventListener("change", function(e){
        sliderValue = e.target.value;
        sliderValueDisplay.innerHTML=`Grid size: ${sliderValue} x ${sliderValue}`
        
    })
    let canvasColor = "blue"
    document.querySelector("#colorPickerCanvas").addEventListener("input", function(e){
        canvasColor = e.target.value;
   })

   let btn = document.querySelector("#btnUpdate").addEventListener("click", function(){
    removeCanvas()
    makeCanvas(sliderValue, canvasColor)
   })
    


}




function removeCanvas(){
    let divs = document.querySelectorAll(".divSquare")
    divs.forEach(function(oneDiv){
        oneDiv.remove()
    })
} 

var globalPenColor = "#ff0000"

function draw(color="#ff0000"){
    document.querySelector("#colorPickerPen").addEventListener("input", function(e){
        color= e.target.value;
        globalPenColor = color
    })
    let hoverSquare = document.querySelectorAll(".divSquare");
    hoverSquare.forEach(function(oneSquareHover){
        oneSquareHover.addEventListener("mousemove", function(e){
            if(e.buttons){
                e.target.style.backgroundColor = `${color}`
            }
        })
    })
}





makeCanvas()
updateCanvas()
draw()
