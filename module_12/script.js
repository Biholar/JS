function innerHTML() {
  document.body.innerHTML +=
    '<div class="content-container">' +
    ' <div class="conent">' +
    " <h2>Select function</h2>" +
    ' <select id="func">' +
    '     <option value="sin">sin</option>' +
    '     <option value="cos">cos</option>' +
    '     <option value="tan">tan</option>' +
    '     <option value="1/tan">ctg</option>' +
    " </select>" +
    '<div class="parameters-box">' +
    " <h2>Input parameters</h2>" +
    '<div class="input-box">' +
    '<div class="input">' +
    ' <p>Start Point\t</p><input id="x0" type="number">' +
    "</div>" +
    '<div class="input">' +
    ' <p>End Point\t</p><input id="x1" type="number">' +
    "</div>" +
    '<div class="input">' +
    ' <p>Step\t</p><input id="e" type="number">' +
    "</div>" +
    "</div>" +
    ' <button onclick="calc()">Calculate</button>' +
    " </div>" +
    "</div>" +
    " </div>";
}

function calc() {}
