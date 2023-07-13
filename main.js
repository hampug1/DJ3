function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
   

}

function draw(){
    image(video, 0, 0, 500, 500)
    fill("red");
    stroke("red");
}

function modelLoaded(){
    console.log("model loaded");
 }
function gotPoses(results) { 
    if(results.length > 0) { 
        console.log(results);

        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("left wrist score = " + scoreLeftWrist + "right wrist score" + scoreRightWrist);



        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist X = " + leftWristX + "left wrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist X = " + rightWristX + "right wrist Y = " + rightWristY);
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
    }
    
