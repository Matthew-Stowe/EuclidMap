//Line segment colour = #5E427E;
//Axis Line Colour = #7e7e7e;
//Canvas Size = 1600 x 750

const Canvas = document.getElementById("DrawCanvas");
const ctx = DrawCanvas.getContext("2d");

var zoomlevel = 20;

function VaribleLineSeg(x1, y1, x2, y2, colour = "#5E427E", Thickness = 1) {

    ctx.strokeStyle = colour;   //controls the colour of the line
    ctx.lineWidth = Thickness;  //controls the thickness of the line
  
    ctx.beginPath();                              //intantiates a line segment
    ctx.moveTo(x1, y1);                           //moves line to first coord
    ctx.lineTo(x2, y2);                           //places end point at second coord
    ctx.stroke();                                 //draws line between two points
  
  
    //console.log("varible line drawn to screen");  //debug option
  
}