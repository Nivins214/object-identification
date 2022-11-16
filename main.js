img = "";
status_ = "";

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_").innerHTML = "Status : Detection Objects";

}
function modelLoaded(){
    console.log("Model Loaded!");
    status_ = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function preload() {
    img = loadImage('dog_cat.jpg');
    
}
function draw() {
    image(img,0,0,640,420);
    cat_x = results[0].x;
    cat_y = results[0].y;
    fill("#FF0000");
    text("dog",45,75);
    noFill();
    stroke("#FF000");
    rect(30,60,450,350);

    fill("#2b00ff");
    text("cat",cat_x,cay_y);
    noFill();
    stroke("#2b00ff");
    rect(cat_x+15,cat_y+15,300,325);

    fill("#fffff");
    text("bowl",300,330);
    noFill();
    stroke("#ff00d4");
    rect(285,315,100,100);
}