let myCanvas;
let myCanvasPosition;

let programm = document.querySelector("#programm")
let organisatorisches = document.querySelector("#organisatorisches")
let impressionen = document.querySelector("#impressionen")

function setup() {
    myCanvas = createCanvas(1000, 1000);
    myCanvasPosition = myCanvas.position();
  }
  
  function draw() {
    background(255, 235, 205);
     let c = color('#0f0')
    let b = color(165, 42, 42)
    let a = color(255, 0, 0)
    
    fill(c)
    triangle(600, 30, 450, 300, 750, 300);
   
    fill(b)
    rect(570, 300, 75, 75);

    fill(a)
    circle(500, 200, 20)
    circle(650, 250, 20)
    circle(600, 175, 20)
    circle(550, 300, 20)
    circle(620, 100, 20)
    circle(mouseX, mouseY, 20)

    textSize(20);
    fill(a)
    programm.style.top = (myCanvasPosition.y + 192) + "px"
    programm.style.left = (myCanvasPosition.x + 407) + "px"
    organisatorisches.style.top = (myCanvasPosition.y + 241) + "px"
    organisatorisches.style.left = (myCanvasPosition.x + 666) + "px"
    impressionen.style.top = (myCanvasPosition.y + 92) + "px"
    impressionen.style.left = (myCanvasPosition.x + 635) + "px"
    /*
    text('Programm', 395, 205)
    text('Organisatorisches', 666, 257)
    text('Impressionen', 635, 105)
    */
  }