var backy ;
var backgroundImg ;
var ballon
var database
var height
var ballonImg
var scaleb
function preload(){
backgroundImg = loadImage("Hot Air Ballon-01.png")
ballonImg = loadImage("Hot Air Ballon-02.png")



  
}
function setup() {
  createCanvas(2000 , 1000);
  backy = createSprite(1000, 400 ,2000, 1000)
  backy.addImage(backgroundImg)
 ballon =  createSprite(400, 780, 50, 50);
 
 ballon.addImage(ballonImg)
 database = firebase.database()
 console.log(database)
 var heightref = database.ref('balloon/height')
 heightref.on("value",rh,logerror)

 var scaleref = database.ref('balloon/scale')
 scaleref.on("value",scalem,logerror1)
}

function draw() {
  background("pink");  
  drawSprites();

  if(keyDown(UP_ARROW)){
   updateHeight(0,-25)
  // ballon.scale = ballon.scale - 0.005
   scaley(-0.005)
  }
  else if(keyDown(DOWN_ARROW)) {
    updateHeight(0,+25)
    //ballon.scale = ballon.scale + 0.005
    scaley(0.005)
  }
  else if(keyDown(RIGHT_ARROW)) {
     updateHeight(+25,0)
  }
  else if(keyDown(LEFT_ARROW)) {
    updateHeight(-25,0)
  }
}
function updateHeight(x,y){
ballon.x = ballon.x + x
ballon.y = ballon.y + y
database.ref('balloon/height').set({
  x : height.x + x ,
  y : height.y + y
})

}
function rh(data){
height = data.val()
console.log(height)
ballon.y = height.y
ballon.x = height.x
}

function scaley(scale){
ballon.scale = ballon.scale + scaleb
database.ref('balloon/scale').set({
 scale : ballon.scale 
})

}
function scalem(data){
scaleb = data.val()
console.log(scaleb)

}
function logerror(){
  console.log("error pls evacuate")
  
  }
  
  function logerror1(){
  console.log("error pls evacuate")
  
  }
