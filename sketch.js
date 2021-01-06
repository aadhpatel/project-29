



var ground, ground2;
var block1, block2, block3, block4, block5;
var polygon, polygonImg, slingShot;

function preload() {
polygonImg = loadImage("polygon.png");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    background(0);
    
    
ground=new Ground(100,400,5000,20);
ground2=new Ground(400,200,200,20);

block1 = new Block(330, 235, 30, 40);
block2 = new Block(360, 235, 30, 40);
block3 = new Block(390, 235, 30, 40);
block4 = new Block(420, 235, 30, 40);
block5 = new Block(450, 235, 30, 40);

polygon = Bodies.circle(50,200,20);
    World.add(world.polygon);


    slingShot = new Slingshot(this.polygon,{x:100,y:200});

    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y,40,40);

}

function draw(){
    ground.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    slingShot.display();

    
}

function mouseDragged(){
    if (gameState !=="launched") {
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
