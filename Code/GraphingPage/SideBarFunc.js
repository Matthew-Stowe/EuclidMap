function OpenSideBar(){
    document.getElementById("Sidebar").style.width = "400px";
    document.getElementById("ButtonDiv").style.marginLeft = "0px";
}

function CloseSideBar(){
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("ButtonDiv").style.marginLeft = "0";
}

function OpenMoreOptns(){
    document.getElementById("MoreOptionsPopUp").style.visibility = "visible";
}
function CloseMoreOptns(){
    document.getElementById("MoreOptionsPopUp").style.visibility = "hidden";
}

function OpenSignIn(){
    document.getElementById("SignInPopUp").style.visibility = "visible";
}
function CloseSignIn(){
    document.getElementById("SignInPopUp").style.visibility = "hidden";
}

function OpenShare(){
    document.getElementById("SharePopUp").style.visibility = "visible";
}
function CloseShare(){
    document.getElementById("SharePopUp").style.visibility = "hidden";
}
