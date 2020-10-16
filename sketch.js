const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, eBox, boxHolder;
var posX = 0, posY = 0;
var click, bump, win;
var pupB, pupBL, pupBR, pupL, pupM, pupR, pupT, pupTL, pupTR;
var time;
var gameState = 1;

function preload(){
    click = loadSound("Sounds/Click.mp3");
    bump = loadSound("Sounds/Bump.mp3");
    win = loadSound("Sounds/Ta Da.mp3")


    pupB = loadImage("Images/PupB.jpg");
    pupBL = loadImage("Images/PupBL.jpg");
    pupBR = loadImage("Images/PupBR.jpg");
    pupL = loadImage("Images/PupL.jpg");
    pupM = loadImage("Images/PupM.jpg");
    pupR = loadImage("Images/PupR.jpg");
    pupT = loadImage("Images/PupT.jpg");
    pupTL = loadImage("Images/PupTL.jpg");
    pupTR = loadImage("Images/PupTR.jpg");
}

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    boxHolder = createSprite(400,400,610,610);

    randomSprites();
    
    box1.shapeColor = "red";
    box2.shapeColor = "orange";
    box3.shapeColor = "yellow";
    box4.shapeColor = "green";
    box5.shapeColor = "blue";
    box6.shapeColor = "purple";
    box7.shapeColor = "black";
    box8.shapeColor = "white";

    box1.addImage(pupBL);
    box2.addImage(pupB);
    box3.addImage(pupL);
    box4.addImage(pupM);
    box5.addImage(pupR);
    box6.addImage(pupT);
    box7.addImage(pupTL);
    box8.addImage(pupTR);

    box1.scale = 0.35;
    box2.scale = 0.35;
    box3.scale = 0.35;
    box4.scale = 0.35;
    box5.scale = 0.35;
    box6.scale = 0.35;
    box7.scale = 0.35;
    box8.scale = 0.35;


}

function draw(){
    background(0);
    Engine.update(engine);

    time = Math.floor(frameCount/30);

    drawSprites();
    if(box7.x == 200 && box7.y == 200 && box6.x == 400 && box6.y == 200 && box8.x == 600 && box8.y == 200 &&
        box3.x == 200 && box3.y == 400 && box4.x == 400 && box4.y == 400 && box5.x == 600 && box5.y == 400&&
        box1.x == 200 && box1.y == 600 && box2.x == 400 && box2.y == 600 && gameState == 1){
            win.play();
            eBox.addImage(pupBR);
            eBox.scale = 0.35;   
            gameState = 0;
        }
    else if(gameState == 0){
        textSize(35);
        fill("red")
        text("You Win!", 320,400);
    }        
    else if(300 - time <=0){
        textSize(35);
        fill("red")
        text("You Lose!", 320,400);
    }
    else{
        move();
        text("Time Remaining: " + (300-time), 100, 50);
    }
    
}

function randomSprites(){
    var r1 = Math.round(random(1,6));
    var a;
    var b;
    var c;


    switch(r1){
        case 1:
            a = 200;
            b = 400;
            c = 600;
        break;

        case 2:
            a = 400;
            b = 200;
            c = 600;
        break;

        case 3:
            a = 600;
            b = 400;
            c = 200; 
        break;
        
        case 4:
            a = 200;
            b = 600;
            c = 400;
            break;  
        case 5:
            a = 600;
            b = 200;
            c = 400;
            break;
        default:
            a = 400;
            b = 600;
            c = 200;
            break; 
    }  
    box1 = createSprite(a,a,200,200);
    box2 = createSprite(b,a,200,200);
    box3 = createSprite(c,a,200,200);
    box4 = createSprite(a,b,200,200);
    box5 = createSprite(b,b,200,200);
    box6 = createSprite(c,b,200,200);
    box7 = createSprite(a,c,200,200);
    box8 = createSprite(b,c,200,200);
    eBox = createSprite(c,c,200,200);
}

function move(){
    if(mousePressedOver(box1)){
        if(box1.x == eBox.x){
            if(box1.y + 200 == eBox.y || box1.y-200 == eBox.y){
            posX = box1.x; 
            posY = box1.y;
            box1.x = eBox.x;
            box1.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY;
            click.play();
            }
        }
        else if(box1.y == eBox.y){
            if(box1.x + 200 == eBox.x || box1.x-200 == eBox.x){
            posX = box1.x; 
            posY = box1.y;
            box1.x = eBox.x;
            box1.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY; 
            click.play();
            }
        }
        else{
            bump.play();
        }
    }
    if(mousePressedOver(box2)){
        if(box2.x == eBox.x){
            if(box2.y + 200 == eBox.y || box2.y-200 == eBox.y){
            posX = box2.x; 
            posY = box2.y;
            box2.x = eBox.x;
            box2.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY; 
            click.play();
            }
        }
        else if(box2.y == eBox.y){
            if(box2.x + 200 == eBox.x || box2.x-200 == eBox.x){
            posX = box2.x; 
            posY = box2.y;
            box2.x = eBox.x;
            box2.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY; 
            click.play();
            }
        }
        else{
            bump.play();
        }
    }
    if(mousePressedOver(box3)){
        if(box3.x == eBox.x){
            if(box3.y + 200 == eBox.y || box3.y-200 == eBox.y){
            posX = box3.x; 
            posY = box3.y;
            box3.x = eBox.x;
            box3.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY; 
            click.play();
            }
        }
        else if(box3.y == eBox.y){
            if(box3.x + 200 == eBox.x || box3.x-200 == eBox.x){
            posX = box3.x; 
            posY = box3.y;
            box3.x = eBox.x;
            box3.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY; 
            click.play();
            }
        }
        else{
            bump.play();
        }
    }
    if(mousePressedOver(box4)){
        if(box4.x == eBox.x){
            if(box4.y + 200 == eBox.y || box4.y-200 == eBox.y){
            posX = box4.x; 
            posY = box4.y;
            box4.x = eBox.x;
            box4.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY; 
            click.play();
            }
        }
        else if(box4.y == eBox.y){
            if(box4.x + 200 == eBox.x || box4.x-200 == eBox.x){
            posX = box4.x; 
            posY = box4.y;
            box4.x = eBox.x;
            box4.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY; 
            click.play();
            }
        }
        else{
            bump.play();
        }
    }
    if(mousePressedOver(box5)){
        if(box5.x == eBox.x){
            if(box5.y + 200 == eBox.y || box5.y-200 == eBox.y){
            posX = box5.x; 
            posY = box5.y;
            box5.x = eBox.x;
            box5.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY; 
            click.play();
            }
        }
        else if(box5.y == eBox.y){
            if(box5.x + 200 == eBox.x || box5.x-200 == eBox.x){
            posX = box5.x; 
            posY = box5.y; 
            box5.x = eBox.x;
            box5.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY;
            click.play();
            }
        }
        else{
            bump.play();
        }
    }
    if(mousePressedOver(box6)){
        if(box6.x == eBox.x){
            if(box6.y + 200 == eBox.y || box6.y-200 == eBox.y){
            posX = box6.x; 
            posY = box6.y;
            box6.x = eBox.x;
            box6.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY; 
            click.play();
            }
        }
        else if(box6.y == eBox.y){
            if(box6.x + 200 == eBox.x || box6.x-200 == eBox.x){
            posX = box6.x; 
            posY = box6.y;
            box6.x = eBox.x;
            box6.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY;
            click.play(); 
            }
        } 
        else{
            bump.play();
        }
    }
    if(mousePressedOver(box7)){
        if(box7.x == eBox.x){
            if(box7.y + 200 == eBox.y || box7.y-200 == eBox.y){
            posX = box7.x; 
            posY = box7.y;
            box7.x = eBox.x;
            box7.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY; 
            click.play();
            }
        }
        else if(box7.y == eBox.y){
            if(box7.x + 200 == eBox.x || box7.x-200 == eBox.x){
            posX = box7.x; 
            posY = box7.y; 
            box7.x = eBox.x;
            box7.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY;
            click.play();
            }
        }
        else{
            bump.play();
        }
    }
    if(mousePressedOver(box8)){
        if(box8.x == eBox.x){
            if(box8.y + 200 == eBox.y || box8.y-200 == eBox.y){
            posX = box8.x;
            posY = box8.y; 
            box8.x = eBox.x;
            box8.y = eBox.y;
            eBox.x = posX;
            eBox.y = posY;
            click.play();
            }
        }
        else if(box8.y == eBox.y){
            if(box8.x + 200 == eBox.x || box8.x-200 == eBox.x){
                posX = box8.x; 
                posY = box8.y; 
                box8.x = eBox.x;
                box8.y = eBox.y;
                eBox.x = posX;
                eBox.y = posY;
                click.play();
            }
        }
        else{
            bump.play();
        }
        
    }
}