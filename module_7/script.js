// EX1--------------------------------------------

flag = true;

function ColorChange1() {
  if (flag) {
    flag = false;
    document.getElementById("first").style.background = "blue";
    document.getElementById("first").style.color = "white";
  } else {
    document.getElementById("first").style.background = "yellow";
    document.getElementById("first").style.color = "black";
    flag = true;
  }
}

flag2 = true;
function ColorChange2() {
  if (flag2) {
    flag2 = false;
    document.all("second").style.background = "white";
    document.all("second").style.color = "red";
  } else {
    document.all("second").style.background = "green";
    document.all("second").style.color = "white";
    flag2 = true;
  }
}

flag3 = true;
function ColorChange3() {
  if (flag3) {
    flag3 = false;
    document.getElementById("third").style.background = "blue";
    document.getElementById("third").style.color = "white";
  } else {
    document.getElementById("third").style.background = "yellow";
    document.getElementById("third").style.color = "black";
    flag3 = true;
  }
}

// EX2--------------------------------------------

function Clocks() {
  var clockElem = document.querySelector(".clocks");
  var date = new Date();
  d = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
  clockElem.innerHTML += "Today is " + d + "<br/>";
}
