//Create variables here
var dog, happyDog; 
var database1;
var foodS, foodStock;
var x;


function preload()
{
    //load images here
    dog= loadImage("images/Dog.png");
    happyDog= loadImage("images/happydog.png");

}

function setup() {
	createCanvas(500, 500);
 dog = createSprite(100,200);
    dog.addImage("Dog",dog);
    database1=firebase.database();
    foodStock= database.ref('food');
    foodStock.on("value", readStock);

}



function draw() {  
background(46,139,87);
x=0;
if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  happyDog = createSprite(100,290);
  happyDog.addImage(happyDog);
 
}
  drawSprites();
  //add styles here
textSize(20);
Fill(red);
stroke(blue);
text("food stock is :", foodStock);
}


function readStock(x){
  foodStock= data.val();
}


function writeStock(x){
  if (x<=0 ) {
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    foodStock:x
  })
}

