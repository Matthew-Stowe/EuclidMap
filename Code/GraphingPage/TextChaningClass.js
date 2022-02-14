class FurtherReadingText {
  constructor(text, title, link) {
    this.text = text;
    // this.img = img
    this.title = title;
    this.link = link;
  }
  get Text() {
    return this.text;
  }

  ChangeText(ChangingText) {
    this.text = String(ChangingText);
    return 0;
  }

  ChangeBoxText() {
    // console.log("Text has been changed")
    document.getElementById("FunctionTitle").innerHTML = this.title;
    document.getElementById("FunctionDescription").innerHTML = this.text;
    document.getElementById("FunctionLinkTo").href = this.link;

    // console.log("Change Box Text was used")
  }
}

const Cubic = new FurtherReadingText(
  "Cubic Graph does XYZ",
  "Cubic Functions",
  "https://wikipedia.org"
);
const Poly = new FurtherReadingText(
  "A Polynomail does XYZ",
  "Polynomail Functions",
  "https://wikipedia.org"
);
const Linear = new FurtherReadingText(
  "A Linear Function allways takes the form: ax+b, and allways has a constant gradient",
  "Linear Functions",
  "https://wikipedia.org"
);
const Constant = new FurtherReadingText(
  "A constant function has a constant gradient of 0 and is allways a stright line parrlell to the x axis",
  "Constant Functions",
  "https://wikipedia.org"
);
const Trig = new FurtherReadingText(
  "Trig Functions are all very unique and should be read upon further",
  "Trigonometric Functions",
  "https://wikipedia.org"
);
const Log = new FurtherReadingText(
  "Logarithmic functions will allways cross the x axis at (1,0) and will allways level off",
  "Logarithmic Functions",
  "https://wikipedia.org"
);

//below is the old code used to change the box text

// //all of these functions are to change the text inside the furhter reading div
// //the links of all of these functions should be changed to other pages that i am yet to make
// //indepentant pictures should be made and placed into the div
// //this could be made into a class for better optimisation
// function ChangeCubicText(){
//   console.log("Text has been changed")
//   document.getElementById("FunctionTitle").innerHTML = "Cubic Function";
//   document.getElementById("FunctionDescription").innerHTML = ("Shown in the form: ax^3 + bx^2 + cx + d, this type of function which has 3 roots along the x axis and a single point of infliction!");
//   document.getElementById("FunctionLinkTo").href = "https://wikipedia.org";
// }
// function ChangePolyText(){
//   console.log("Text has been changed")
//   document.getElementById("FunctionTitle").innerHTML = "Polynomial Function";
//   document.getElementById("FunctionDescription").innerHTML = ("Shown in the form: ax^2 + bx + c, this type of function has 2 roots along the x axis and is perfectly symetrical along the y axis!");
//   document.getElementById("FunctionLinkTo").href = "https://wikipedia.org";
// }
// function ChangeLinearText(){
//   console.log("Text has been changed")
//   document.getElementById("FunctionTitle").innerHTML = "Linear Function";
//   document.getElementById("FunctionDescription").innerHTML = ("Shown in the form: ax + b, this type of function will have a constant gradient and will intercept the y axis at b");
//   document.getElementById("FunctionLinkTo").href = "https://wikipedia.org";
// }
// function ChangeConstantText(){
//   console.log("Text has been changed")
//   document.getElementById("FunctionTitle").innerHTML = "Constant Function";
//   document.getElementById("FunctionDescription").innerHTML = ("Shown in the form: a, this type of function has NO gradient and and will allways intercept the y axis at a");
//   document.getElementById("FunctionLinkTo").href = "https://wikipedia.org";
// }
// function ChangeTrigText(){
//   console.log("Text has been changed")
//   document.getElementById("FunctionTitle").innerHTML = "Trigonometric Functions";
//   document.getElementById("FunctionDescription").innerHTML = ("Shown in the form: a, this type of function has NO gradient and and will allways intercept the y axis at a");
//   document.getElementById("FunctionLinkTo").href = "https://wikipedia.org";
// }
// function ChangeLogText(){
//   console.log("Text has been changed")
//   document.getElementById("FunctionTitle").innerHTML = "Logarithmic Functions";
//   document.getElementById("FunctionDescription").innerHTML = ("Shown in the form: a, this type of function has NO gradient and and will allways intercept the y axis at a");
//   document.getElementById("FunctionLinkTo").href = "https://wikipedia.org";
// }
