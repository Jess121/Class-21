var a,b, c, d;
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 100, 80);
  b=createSprite(200,200,60,70);
  a.shapeColor = "green";
  b.shapeColor = "green";

  a.debug = true;
  b.debug = true;

  c = createSprite( 100, 200, 50, 50);
  d = createSprite( 200, 300, 50, 50);

  c.debug = true;
  d.debug = true;

}

function draw() {
  background(0); 
  a.x = mouseX;
  a.y = mouseY;
  touching(a, b);
  touching(a, c);
  touching(a, d)
  /*
  a.isTouching(b);
  a.isTouching(c);
  */


  drawSprites();
}

function touching(jar,notepad){
  //Detecting collision

  if (jar.x-notepad.x <=jar.width/2 + notepad.width/2 && notepad.x-jar.x<=jar.width/2 + notepad.width/2 
    && jar.y-notepad.y<=jar.height/2 + notepad.height/2 && notepad.y-jar.y<=jar.height/2 + notepad.height/2){
    jar.shapeColor = "red";
    notepad.shapeColor = "red"; 
  }
  else{
    jar.shapeColor = "green";
    notepad.shapeColor = "green";
  }
}


/*
Algorithm
  Logic to solve a problem

  Pre-defined algorithms:
    1. isTouching () - Detects collision
    2. bounceOff() - bounces off objects


    ARGUMENTS
      - real values given to a function
      - Used when using/calling a function

    PARAMETERS
      - Used when creating a function
      - PLACEHOLDERS for arguments
*/