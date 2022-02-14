// const TrigFunctions = ["sin","cos","cot","sec","cosec"]
// const LogarithmicFunctions = ["log","ln"]
// const Exponts = ["e"]

var InputFunc = "f(x) = x";
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

//this function does not work as you cannot but superscript text inside an input feild

// function CheckTextConsistancy(Func,id){
//   var FeildText = Func;

//   //loops through untill the char "^" is found
//   for(i=0;i<FeildText.length;i++){
//     if(FeildText[i] == "^"){
//       var SuperPointerStart = i;
//     }
//   }

//   //loops through untill the char ")" is found
//   for(i=0;i<FeildText.length;i++){
//     if(FeildText[i] == ")"){
//       var SuperPointerEnd = i;
//     }
//   }

//   console.log(SuperPointerEnd)
//   console.log(SuperPointerStart)
//   var NewString = ""
//   var SuperScriptText = []

//   //Puts all letters before the superset into newstring
//   for(i=0;i<SuperPointerStart;i++){
//     NewString += FeildText[i]
//   }
//   for(i=SuperPointerStart+1;i<SuperPointerEnd;i++){
//     SuperScriptText.push(FeildText.charCodeAt(i))
//   }

//   // NewString += SuperScriptText.sup()
//   console.log(SuperScriptText)

//   document.getElementById(id).value = 	"U+00B2"
// }

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
}
