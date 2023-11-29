const date1 = new Date('5/21/2022');
const date2 = new Date();
var diffDays = Math.floor(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
diffDays = (diffDays + " Days");

function onload() {
    document.getElementById("days").innerText = diffDays;
}
onload();