// function setup() {
//   createCanvas(800, 800)
//   background(0, 0, 0)
// }

// function draw() {
//   noStroke()
//   if(mouseIsPressed){
//     ellipse(mouseX, mouseY, 30, 30)
    
//     if (keyIsPressed){
//       if (key == "r"){
//         fill(255, 0, 0)
//       } 
//       if (key == "g"){
//         fill(0, 255, 0)
//       } 
//       if (key == "b"){
//         fill(0, 0, 255)
//       } 
//     }else if(mouseIsPressed){
//       fill(255,255,255)
//     } 
//   }
// }
var position = 100
// set a variable called position, and its value is 100 
  
 function setup() {
   createCanvas(400, 200)
   // create a <canvas> tag in the html
 }
 
 function draw() {
   background(100)
   // background with greyscale = 100, which is black.
 
  //  rect(0, 0, 10, 10)
  //  a rectangle starting at (0,0), width and height are both 10.

  position = position + 1
  rect(position, 0, 10, 10)
  // now position is 100+1=101, so the rectangle will be starting at (101,0)
  // And this code is run endless times, so the rectangle wioll be moving to the right all the time till it reach the end.
}