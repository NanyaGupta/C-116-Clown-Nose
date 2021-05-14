noseX=0;
noseY=0;


function preload() {
     clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');   
} 
 function setup() {
      canvas = createCanvas(300, 300);
       canvas.center(); 
   video=createCapture(VIDEO);
   video.size(300,300);
   video.hide();
    
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on("pose",gotPoses);
} 

function modelLoaded(){
     console.log('Posenet has been Intialized');
}

function gotPoses(results){
     if(results.length > 0){
          noseX=results[0].pose.nose.x;
          noseY=results[0].pose.nose.y;
          console.log(results);
          console.log("nose x=" + results[0].pose.nose.x);
          console.log("nose y=" + results[0].pose.nose.y);
          console.log("left-eye x=" + results[0].pose.leftEye.x);
          console.log("left-eye y=" + results[0].pose.leftEye.y);
          console.log("right-eye x=" + results[0].pose.rightEye.x);
          console.log("rigth-eye y=" + results[0].pose.rightEye.y);
     }
}
      
function draw() { 
     image(video, 0,0,300,300);
     image(clown_nose, noseX, noseY, 35, 35);
}

 function takeSnapshot(){
save('myImage.png'); 
}

