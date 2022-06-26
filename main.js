rightwristx=0;
leftwristx=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 130);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    window.alert("Congrats, The Model Has Successfully Loaded");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftWristx= results[0].pose.leftWrist.x;
    rightWristx= results[0].pose.rightWrist.x;
    difference = floor(leftWristx - rightWristx);
    document.getElementById("text_size").innerHTML = "The Font Size Is " + difference + "px";
}
}

function draw(){
    background("#801C1D");
    textSize(difference);
    fill("#064359");
    text('Amyan Jivani', 50, 400);
    
}