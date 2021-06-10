var player,playerImage;
var back;
var backImage;
var virus1,virus1Image,virusGroup;
var immunity,immunityImage,immunityGroup;
var iconImage,healthIcon;
var healthPoints=0;

function preload(){
    playerImage=loadImage("images/player.png");
    backImage=loadImage("images/background1.jpg");
    virus1Image=loadImage("images/red_virus.png");
    immunityImage=loadImage("images/immune.png");
    iconImage=loadImage("images/health.png");
}

function setup(){
    canvas=createCanvas(displayWidth,displayHeight);
    database=firebase.database();

    back=createSprite(0,200,displayWidth,displayHeight);
    back.addImage(backImage);
    back.scale=2.5;
    back.velocityX=-4;
    back.x=back.width/2;
    console.log(back.x);

    player=createSprite(150,730,20,20);
    player.addImage(playerImage);
    player.scale=0.5;

    healthIcon=createSprite(1050,200,10,10);
    healthIcon.addImage(iconImage);
    healthIcon.scale=0.2;

    ground=createSprite(10,730,3000,10);
    ground.x=ground.width/2;
    ground.velocityX=-4;

    virusGroup=createGroup();
    immunityGroup=createGroup();
}

function draw(){
background(0);
text("Health Points :"+healthPoints,displayWidth-100,200);
fill(0);
textSize(20);
stroke(0);

if(keyDown("space")&& player.y>=250){
    player.velocityY=-12;
}
player.velocityY=player.velocityY+0.8;
player.collide(ground);

if(ground.x<0){
    ground.x=ground.width/2;
}
if(back.x<50){
    back.x=back.width/2;
}

if(player.isTouching(virusGroup)){
    virusGroup.destroyEach();
    healthPoints=healthPoints-1;
}
if(player.isTouching(immunityGroup)){
    immunityGroup.destroyEach();
    healthPoints=healthPoints+2;
  }




drawSprites();
spawnImmunity();
spawnvirus();

}

function spawnImmunity(){
    if(frameCount%380===0){
    var immunity=createSprite(1200,170,10,30);
    immunity.velocityX=-6;
    immunity.y=Math.round(random(120,200));
    immunity.addImage(immunityImage);
    immunity.scale=0.5;
    immunity.lifetime=1000;
    immunityGroup.add(immunity)
    }
}
function spawnvirus(){
    if(frameCount%380===0){
        var virus1=createSprite(1300,500,10,30);
        virus1.velocityX=-4;
        if(healthPoints<=5){
            virus1.velocityX=-6;
        } else 
        if(healthPoints<=10){
            virus1.velocityX=-8;
        } else
        if(healthPoints<=15){
            virus1.velocityX=-10;
        }
        
        virus1.addImage(virus1Image);
        virus1.scale=0.2;
        virus1.lifetime=1000;
        virusGroup.add(virus1);
    }
}
