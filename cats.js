var date = document.getElementById("date");

var d = new Date();
var myVar = setInterval(time, 1000);

function time() {
  var d = new Date();
  date.innerHTML = d.toLocaleString([],{month: "long", day: "2-digit"}) + ", " + d.toLocaleString([], { timeStyle: "short"});
 };

 var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");

//Morning
if (d.getHours() < 12) {
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
};

//Afternoon
if (d.getHours() > 11 && d.getHours() < 15) {
  div1.style.display = "none";
  div2.style.display = "none";
  div4.style.display = "none";
};

//Day
if (d.getHours() > 14 && d.getHours() < 18) {
  div1.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
};

//Evening
if (d.getHours() > 17) {
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
};

//Div 1
var p1 = document.getElementById("p1");
var gm = document.getElementById("h1-1");

p1.innerHTML = "Today is " + d.toLocaleString([], {weekday: "long"}) + "!";
function showP1 () {
  p1.style.opacity = "1";
  gm.style.bottom = " 20px";
};

function hideP1 () {
  p1.style.opacity = "0";
  gm.style.bottom = "0";
};

//Div 2
var p2 = document.getElementById("p2");
var gd = document.getElementById("h1-2");

p2.innerHTML = "Today is " + d.toLocaleString([], {weekday: "long"});
function showP2 () {
  p2.style.opacity = "1";
  gd.style.bottom = " 20px";
};

function hideP2 () {
  p2.style.opacity = "0";
  gd.style.bottom = "0";
};

//Div 3
var p3 = document.getElementById("p3");
var ga = document.getElementById("h1-3");

p3.innerHTML = "Today is " + d.toLocaleString([], {weekday: "long"});
function showP3 () {
  p3.style.opacity = "1";
  ga.style.bottom = " 20px";
};

function hideP3 () {
  p3.style.opacity = "0";
  ga.style.bottom = "0";
};

//Div 4
var p4 = document.getElementById("p4");
var ge = document.getElementById("h1-4");

p4.innerHTML = "Today is " + d.toLocaleString([], {weekday: "long"});
function showP4 () {
  p4.style.opacity = "1";
  ge.style.bottom = " 20px";
};

function hideP4 () {
  p4.style.opacity = "0";
  ge.style.bottom = "0";
};
