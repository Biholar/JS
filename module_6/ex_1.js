function GetDate() {
  now = new Date();
  document.write("Time: " + now.getHours() + " : " + now.getMinutes() + "<br>");
  document.write("Date: " + (now.getDate() + 1) + "/" + now.getMonth() + "/" + now.getFullYear());
}
GetDate();
