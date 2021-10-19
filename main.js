song_legend=""; 
song_potter=""; 
leftWristX= 0; 
leftWristY= 0; 
rightWristX= 0; 
rightWristY= 0; 

function preload() { 
song= loadSound("Legends_song1.mp3"); 
song1= loadSound("Harry_Potter.mp3") 
} 

function setup() { 
canvas= createCanvas(600,500); 
canvas.position(620,220); 

video= createCapture(VIDEO); 
video.hide(); 
posenet= ml5.poseNet(video, gotModel); 
posenet.on('pose', gotPoses); } 

function gotModel() {
console.log("Reached the end!"); } 

function gotPoses(result) { 

console.log(result);

if (result.lenth > 0) {
 leftWristX= result[0].pose.leftWrist.x; 
 leftWristY= result[0].pose.leftWrist.x; 
 rightWristX= result[0].pose.rightWrist.y; 
 rightWristY= result[0].pose.rightWrist.y; 
} 
}
function draw() { 
    image(video, 0, 0, 600, 500); }