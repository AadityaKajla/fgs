function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);

    tint_color="";
}
function draw(){
    image(video,0,0,200,150);
}
function take_snapshot(){
    save('png.png');
 }