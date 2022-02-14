function ZoomIn(){
    ctx.scale(2,2)
    BrowserCanvas.Draw()
    zoomlevel = zoomlevel * 2;
}

function ZoomOut(){
    ctx.scale(0.5,0.5);
    BrowserCanvas.Draw()
    zoomlevel = zoomlevel / 2;
}



class WindowCanvas{
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

}

const BrowserCanvas = new WindowCanvas(0,[],1600,750)       //second element needs to be [] in order to be a list
// BrowserCanvas.CreateFunction("f(x) = x^2");
// BrowserCanvas.CreateFunction("f(x) = x^3");
// BrowserCanvas.CreateFunction("f(x) = log(x)");
BrowserCanvas.InitCanvas();

const LogarithmicFunctions = ["log","ln"]
const Exponts = ["e"]

function AuthIn(PassFunc,Colour = "#00EEFF",Index){
    if(PassFunc.includes("f(x)")){
        BrowserCanvas.FunctionArr[Index].ChangeFunc(PassFunc);
        BrowserCanvas.FunctionArr[Index].ChangeCol(Colour);

        BrowserCanvas.FunctionArr[Index].xcoords = []
        BrowserCanvas.FunctionArr[Index].ycoords = []
    }
    else if(PassFunc.includes("=")){
        BrowserCanvas.FunctionArr[Index].ChangeFunc(PassFunc);
        BrowserCanvas.FunctionArr[Index].ChangeCol(Colour);

        BrowserCanvas.FunctionArr[Index].xcoords = []
        BrowserCanvas.FunctionArr[Index].ycoords = []
    }
    else
    {
        alert("Please Enter A Valid Input");
    }


    if(PassFunc.includes("x^3")){
        FindFunctionType("cubic");
      }
      else if(PassFunc.includes("x^2")){
        FindFunctionType("squared");
      }
      else if(PassFunc.includes("sin(x)") || PassFunc.includes("cos(x)") || PassFunc.includes("tan(x)")){
        FindFunctionType("trig")
      }
      else if(PassFunc.includes("log(x)")){
        FindFunctionType("logarithms")
      }
      else if(PassFunc.includes("x")){
        FindFunctionType("linear");
      }
      else{
        FindFunctionType("Constant");
      }
}
