img = "";
staus = "";

function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML = "Status: Detecing Objects";
}
function preload(){
    img = loadImage('bedroom.jpg');
}
function draw(){
    image(img, 0, 0, 640, 420);
}
function modalLoaded() {
    console.log("Model Loaded");
    staus = true;
    objectDetector.detect(img , gotResult);
}
function gotResult(error ,results){
    if  (error){
        console.log(error);
    }
    console.log(results);
}

