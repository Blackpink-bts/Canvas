var mouseEvent="Empty"
var last_position_of_x,last_position_of_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var colour="black";
var width_of_line=1;
canvas.addEventListener("mousedown",mousedown)
function mousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseleave",mouseleave)
function mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",mouseup)
function mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mousemove",mousemove);
function mousemove(e){
current_position_of_x=e.clientX-canvas.offsetLeft;
current_position_of_y=e.clientY-canvas.offsetTop;
if (mouseEvent =="mousedown"){
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=width_of_line;
console.log ("Last position of x and y coordinates=")
console.log("x=" + last_position_of_x+"y=" +last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);

console.log ("Current position of x and y coordinates=")
console.log("x=" + current_position_of_x+"y=" +current_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();
}

last_position_of_x=current_position_of_mouse_x
last_position_of_y=current_position_of_mouse_y
}