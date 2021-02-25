function PageDraw() {
  document.body.innerHTML =
    '<div class="content-container">' +
    ' <div class="conent">' +
    " <h2>Select function</h2>" +
    ' <select id="funct">' +
    '     <option value="sin">sin</option>' +
    '     <option value="cos">cos</option>' +
    '     <option value="tan">tan</option>' +
    '     <option value="1/tan">ctg</option>' +
    " </select>" +
    '<div class="parameters-box">' +
    " <h2>Input parameters</h2>" +
    '<div class="input-box">' +
    '<div id= "input" class="input">' +
    ' <p>Start Point</p><input id="x1" type="number" value="0">' +
    "</div>" +
    '<div id= ""class="input">' +
    ' <p>End Point</p><input id="x2" type="number" value="0">' +
    "</div>" +
    '<div id= ""class="input">' +
    ' <p>Step</p><input id="e" type="number" value="0"> ' +
    "</div>" +
    "</div>" +
    ' <button onclick="calc()">Calculate</button> ' +
    " </div>" +
    "</div>" +
    " </div>";
  console.log(funct, x1, x2, e);
}

function calc(funct, x1, x2, e) {
  var x1 = parseFloat(document.all.x1.value);
  var x2 = parseFloat(document.all.x2.value);
  var e = parseFloat(document.all.e.value);
  var x = document.getElementById("input");
  var a = document.all.funct.selectedIndex;
  var funct = document.all.funct.options[a].value;
  console.log(funct, x1, x2, e);

  if (funct == "1/tan") funct = "ctg";

  document.body.innerHTML =
    '<div class="table-content-container">' +
    ' <div class="table-conent">' +
    "<h2>Result</h2>" +
    '<table id="res_table">' +
    " <tr>" +
    '   <td colspan="2">Angle</td>' +
    '<td rowspan="2">' +
    funct +
    "</td>" +
    " </tr>" +
    " <tr>" +
    "   <td>In Deg </td>" +
    "   <td>In Rad </td>" +
    " </tr>" +
    " </table>" +
    " <br>" +
    ' <button onclick="PageDraw()">Back</button>';
  x1 = +x1;
  x2 = +x2;
  e = +e;

  //end pos check
  if (x1 > x2) {
    x1 += x2;
    x2 = x1 - x2;
    x1 -= x2;
  }

  //step check
  if (+e > 0) {
    e = Math.abs(e);
  }

  let command = "";

  let row, cell;
  while (x1 < x2) {
    row = document.all.res_table.insertRow();
    cell = row.insertCell(0);
    cell.innerHTML = x1;

    cell = row.insertCell(1);
    cell.innerHTML = (x1 * Math.PI) / 180;

    if (funct != "ctg") command = "Math.";
    else {
      command = "1/ Math.";
      funct = "tan";
    }
    command += funct + "( Math.PI / 180* " + x1 + ")";
    cell = row.insertCell(2);
    cell.innerHTML = eval(command);

    x1 += e;
  }
}
