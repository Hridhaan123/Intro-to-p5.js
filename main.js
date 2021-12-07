function preload() {
    
}
function setup() {
    canvas = createCanvas(555,555);
    canvas.position(150,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
}
function draw() {
    image(video,0,0,555.555);
    tint(tint_colour);
}
function take_snapshot() {
    save('HridhaanHarsora.jpg')
}
function filter_tint() {
    tint_colour = document.getElementById("color_name").value;
}