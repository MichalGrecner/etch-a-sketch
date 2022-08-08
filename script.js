let squares = 64; //squares per line
let pixels = 600; //canvas width/height

let oneSquare = pixels/squares
console.log("size of one square: " +oneSquare)

makeCanvas(oneSquare)

function makeCanvas(oneSquare){
    let canvas = document.querySelector(".canvas");
    let square = document.createElement("div");
    for(let x=0; x <Math.floor(squares); x++){
        for(let y=0; y<Math.floor(squares); y++){
            let square = document.createElement("div");
            square.style.border = "1px solid black";
            square.style.width = `${oneSquare}px`
            square.style.height =`${oneSquare}px`
            square.style.display = "flex"
            square.style.boxSizing = "border-box"

            canvas.appendChild(square)
            
           
            

        }

    }
}