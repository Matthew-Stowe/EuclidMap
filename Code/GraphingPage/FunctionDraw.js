//Defult Colour = "#5E427E"

class Function {
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
}

const GraphX = new Function(1600, 750, 0, 0, "f(x) = sin(x)", "#5E427E");
GraphX.DrawGraph();
