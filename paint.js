var dragX, dragY, moveX, moveY;
var circles = [];
var lastCircles = [];
var dropdown,size=30;


function setup() {
  dropdown = createSelect();
  dropdown.option('color');
  dropdown.option('red');
  dropdown.option('green');
  dropdown.option('blue');
  text("hola");
  createCanvas(400, 400);
  smooth();
  noStroke();
}

function draw() {
  background(255);
  printCircles(circles);
  printCircles(lastCircles);
  fill(150);
  ellipse(moveX, moveY, size, size);
  printInfo();
}

function mouseMoved() {
  moveX = mouseX;
  moveY = mouseY;
}

function mousePressed(){
	Array.prototype.push.apply(circles, lastCircles);
  lastCircles=[];
  lastCircles.push(new Point(mouseX, mouseY, dropdown.value(),size));
}

function mouseDragged() {
  lastCircles.push(new Point(mouseX, mouseY, dropdown.value(),size));
}
function keyPressed() {
  if(key=="z"){
    lastCircles=[];
  }
  if(key=="a"){
    circles=[];
    lastCircles=[];
  }
  if(key=="+"){
  	size++;   
  }
  if(key=="-"){
   	size--; 
  }
}
function printInfo(){
 	textSize(12);
	fill(0);
  text("Pulse 'z' para volver atrás.\nPulse 'a' para borrar el lienzo.\nPulse '+' para incrementar el tamaño del pincel.\nPulse '-' para reducir el tamaño del pincel.", 0, 10);  
}
function printCircles(array) {
  for (var i = 0; i < array.length; i++) {
    switch (array[i].color) {
      case "red":
        fill(255, 0, 0);
        break;
      case "green":
        fill(0, 255, 0);
        break;
      case "blue":
        fill(0, 0, 255);
        break;
      default:
        fill(150);
    }
    ellipse(array[i].xValue, array[i].yValue, array[i].size, array[i].size);
  }
}
class Point {
  constructor(xValue, yValue, color, size) {
    this.xValue = xValue;
    this.yValue = yValue;
    this.color = color;
    this.size = size;
  }
  xValue() {
    return this.xValue();
  }
  yValue() {
    return this.yValue();
  }
  color() {
    return this.color();
  }
  size(){
  	return this.size();
  }
}
