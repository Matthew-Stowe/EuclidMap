var string_VarLineSeg = `const Canvas = document.getElementById("DrawCanvas");
const ctx = DrawCanvas.getContext("2d");

function VaribleLineSeg(x1, y1, x2, y2, colour = "#5E427E", Thickness = 1) {

    ctx.strokeStyle = colour;   //controls the colour of the line
    ctx.lineWidth = Thickness;  //controls the thickness of the line
  
    ctx.beginPath();                              //intantiates a line segment
    ctx.moveTo(x1, y1);                           //moves line to first coord
    ctx.lineTo(x2, y2);                           //places end point at second coord
    ctx.stroke();                                 //draws line between two points
  
  
    //console.log("varible line drawn to screen");  //debug option
  
}`;

var string_FunctionClass = `class Function {
    constructor(xres, yres, xcoords, ycoords, func, colour) {
      this.xres = xres;
      this.yres = yres;
      this.xcoords = xcoords;
      this.ycoords = ycoords;
      this.func = func;
      this.colour = colour;
    }
  
    ChangeFunc(newFunc) {
      this.func = newFunc;
    }
  
    ChangeCol(Colour) {
      this.colour = Colour;
    }
  
    CreateCoordSet() {
      this.ycoords = [];
      this.xcoords = [];
  
      const Parser = new math.parser();
      Parser.evaluate(String(this.func));
  
      for (let i = -this.xres / 2; i < this.xres / 2; i += 0.2) {
        this.ycoords.push(Parser.evaluate("f(" + String(i) + ")"));
        this.xcoords.push(i);
      }
    }
  
    DrawGraph() {
      let StartPosX;
      let StartPosY;
  
      for (let i = 0; i < this.ycoords.length; i += 1) {
        VaribleLineSeg(
          StartPosX,
          StartPosY,
          this.xcoords[i],
          this.ycoords[i],
          this.colour,
          0.1
        );
        StartPosX = this.xcoords[i];
        StartPosY = this.ycoords[i];
      }
    }
  }`;

var string_CanvasClass = `class WindowCanvas{
    constructor(FunctionNum,FunctionArr,xres,yres){
        this.FunctionNum = FunctionNum
        this.FunctionArr = FunctionArr
        this.xres = xres
        this.yres = yres
    }

    get resolution(){
        return [this.xres,this.yres]
    }

    InitCanvas(){
        this.ScaleCanvas()
        this.ClearCanvas()
        this.DrawAxisLines()
        this.CreateCheckeredBackground(1)
    }

    CreateFunction(Func,Colour = "#5E427E"){
        this.FunctionArr.push(new Function(1600,750,0,0,String(Func),Colour))
    }

    RemoveFunction(Index){
        this.FunctionArr.splice(Index,1)
    }

    Draw(){
        this.ClearCanvas()
        this.CreateCheckeredBackground(1)
        this.DrawAxisLines()

        for(let i = 0; i < this.FunctionArr.length; i++){
            this.FunctionArr[i].CreateCoordSet();
            this.FunctionArr[i].DrawGraph();
        }
    }

    ScaleCanvas(){
        //should make the canvas being at 0,0 at the center of the screen
        ctx.translate(this.xres/2,this.yres/2);
      
        //flips coords to correct orentation
        ctx.scale(1,-1);
      
        //scales the canvas up
        ctx.scale(40,40);
    }

    CreateCheckeredBackground(Freq) {
        // console.log("RenderCheckBack Used!")
        for (let i= -this.xres/2; i < this.xres/2 + 1; i += Freq){
            VaribleLineSeg(i,this.yres/2,i,-this.yres/2, "#7e7e7e", 0.01); //Verticle Lines
            VaribleLineSeg(this.yres/2,i,-this.yres/2,i, "#7e7e7e", 0.01); //Horizontal Lines
        }
    }

    ClearCanvas(){
        ctx.clearRect(-this.xres/2, -this.yres/2, this.xres, this.yres);
    }

    DrawAxisLines(){
        VaribleLineSeg(0,-this.yres/2,0,this.yres/2,"#7e7e7e",0.1);   //draws a thick line from the top center of the screen to the bottom
        VaribleLineSeg(this.xres/2,0,-this.xres/2,0,"#7e7e7e",0.1);     //draws a thick line form the left center of the screen to the right
    }

}`;

var string_InputControl = `var InputFunc = "f(x) = x";
var TextBoxNum = 0;
var TextBoxArr = [];
var ColourPickerArr = [];

function InputText(InputStr) {
  TextBoxNum += 1;
  // console.log("Number of Text Boxes: " , TextBoxNum);

  var idNum = TextBoxNum;
  var CIDNum = TextBoxNum;
  String(idNum);

  var InputSection = document.createElement("input");
  TextBoxArr.push(InputSection);

  var ColourPicker = document.createElement("input");
  ColourPickerArr.push(ColourPicker);

  InputSection.placeholder = "f(x) = x";
  InputSection.id = idNum;
  InputSection.className = "TreeFunctionInput";

  BrowserCanvas.CreateFunction("f(x) = x");
  InputSection.setAttribute(
    "onchange",
    "AuthIn(this.value,ColourPickerArr[this.id-1].value,this.id-1);BrowserCanvas.Draw();CheckTextConsistancy(this.value,this.id)"
  );

  ColourPicker.type = "color";
  ColourPicker.id = CIDNum;
  ColourPicker.className = "ColourPicker";
  ColourPicker.value = "#00EEFF";
  ColourPicker.setAttribute(
    "onchange",
    "BrowserCanvas.FunctionArr[this.id-1].ChangeCol(this.value);BrowserCanvas.Draw();"
  );

  document.getElementById("InputDiv").appendChild(InputSection);
  document.getElementById("InputDiv").appendChild(ColourPicker);
}

function RemoveInputFeild() {
  if (TextBoxNum != 0) {
    TextBoxNum = TextBoxNum - 1;

    var DeleteBox = TextBoxArr.at(-1);
    DeleteBox.remove();
    TextBoxArr.pop();

    var DeleteColourPicker = ColourPickerArr.at(-1);
    DeleteColourPicker.remove();
    ColourPickerArr.pop();

    BrowserCanvas.RemoveFunction(TextBoxNum);
    BrowserCanvas.Draw();
  }
}
function FindFunctionType(Func) {
    switch (Func) {
      case "cubic":
        Cubic.ChangeBoxText();
        ShowFurtherReading();
        // console.log("The Function is cubic!")
        break;
  
      case "squared":
        Poly.ChangeBoxText();
        ShowFurtherReading();
        // console.log("The Function is squared!")
        break;
  
      case "linear":
        Linear.ChangeBoxText();
        ShowFurtherReading();
        // console.log("The Function is linear!")
        break;
  
      case "constant":
        Constant.ChangeBoxText();
        ShowFurtherReading();
        // console.log("The Function is constant!")
        break;
  
      case "trig":
        Trig.ChangeBoxText();
        ShowFurtherReading();
        break;
  
      case "logarithms":
        Log.ChangeBoxText();
        ShowFurtherReading();
        break;
    }
  }
  
  function ShowFurtherReading() {
    var FadeBox = document.getElementById("FadeInBox");
  
    FadeBox.style.visibility = "visible";
    FadeBox.style.animation = "fadein 3s";
    // console.log("Further reading box shown!")
    const TimeOut = setTimeout(HideFurtherReading, 8000); //fades out the box after 10s (10,000ms)
  }
  
  function HideFurtherReading() {
    document.getElementById("FadeInBox").style.animation = "fadeout 3s"; //plays the fadeout animation
    document.getElementById("FadeInBox").style.animationFillMode = "forwards"; //keeps the div hidden after the fade out animation is complete
    // console.log("Further reading box hidden!")
  }`;

var string_case0 = '//Select a code block to view with the drop down selector';

function ChangeCodeBlockContent(value) {
  switch (String(value)) {
    //0 case
    case "0":
      CodeContainer.setValue(string_case0);
      CodeContainer.refresh();
      break;
    //Varible Line Segment
    case "1":
      CodeContainer.setValue(string_VarLineSeg);
      CodeContainer.refresh();
      break;
    //Function Class
    case "2":
      CodeContainer.setValue(string_FunctionClass);
      CodeContainer.refresh();
      break;
    //Canvas Class
    case "3":
      CodeContainer.setValue(string_CanvasClass);
      CodeContainer.refresh();
      break;
    //Input Control
    case "4":
      CodeContainer.setValue(string_InputControl);
      CodeContainer.refresh();
      break;
  }
}
