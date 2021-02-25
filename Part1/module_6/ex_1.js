function GetDate() {
  now = new Date();
  document.write("Time: " + now.getHours() + " : " + now.getMinutes() + "<br>");
  document.write("Date: " + now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear());
}
GetDate();
