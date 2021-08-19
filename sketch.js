var gato, gato1, gato2, gato3, gato4, gato5
var cenario, cenario1
var rato, rato1, rato2, rato3, rato4, rato5
function preload() {
    //carregue as imagens aqui
    gato1=loadAnimation("cat1.png")
    gato2=loadAnimation("cat2.png","cat3.png")
    gato3=loadAnimation("cat4.png")
    rato2=loadAnimation("mouse2.png","mouse3.png")
    rato1=loadAnimation("mouse1.png")
    cenario1=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    cenario=createSprite(500,400,10,10)
cenario.addImage(cenario1)
    rato=createSprite(100,600)
    rato.addAnimation("rato",rato1)
    gato=createSprite(700,600,10,10)
    gato.addAnimation("gato",gato1)
    gato.scale=0.3
    rato.scale=0.2
   


}

function draw() {

if(gato.x-rato.x<(gato.width/2-rato.width/2)){
gato.velocityX=0
gato.addAnimation("gato",gato3)
gato.changeAnimation("gato",gato3)
rato.x=500000000
gato.x=500  
}
    background(255);
   
   
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    drawSprites();
}


function keyPressed(){
  if(keyCode==LEFT_ARROW){
    rato.addAnimation("rato",rato2)
rato.changeAnimation("rato",rato2)
rato.frameDelay=25
gato.addAnimation("garo",gato2)
gato.changeAnimation("garo",gato2)
gato.velocityX=-4
  }
  //Para mover e alterar a animação, escreva o código aqui


}
