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
var name = 'Ivan'
var moving = true
var position = 100
var bounceTime = 0
var isItTrue = true
// set a variable called position, and its value is 100 
  
 function setup() {
   createCanvas(400, 500)
   // create a <canvas> tag in the html
 }

 function mousePressed() {
  moving = !moving
}

 function draw() {
   background(100)
   // background with greyscale = 100.
//  390 = window size
  //  rect(0, 0, 10, 10)
  //  a rectangle starting at (0,0), width and height are both 10.
  if (position == 400){
    isItTrue = false
    bounceTime++
  }

  if (position == 0){
    isItTrue = true
    bounceTime++
  }
  
  if (moving && isItTrue){
    position = position + 2 
  }

  if (moving && !isItTrue){
    position = position -2
  }
  
  rect(position, 0, 10, 10)
  text('# bounce time: ' + bounceTime, 10, 40)
  text('moving is ' + moving, 10, 70)
  // console.log('The position is ' + position)
  // now position is 100+1=101, so the rectangle will be starting at (101,0)
  // And this code is run endless times, so the rectangle wioll be moving to the right all the time till it reach the end.
  // If change 1 to bigger number, then the rectangle will move faster because its horizontal coordinate increases by bigger number each time.fail
  // 
  // If add console.log('The position is ' + position),
  //  then the console will increase the value of position like crazy. The console is recording and showing the value of 
  // No space between is and Ivan is because it is simply coming stuff

  // mousePressed is a toggle 
  // if moving is a logic decision
}