function preload(){
  mustache=loadImage('https://i.postimg.cc/NMZvz0gC/414-4149124-moustache-png-pic-mustache-templates-clipart.jpg');
}

nose_x=0;
nose_y=0;

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length>0){
      nose_x=(results[0].pose.nose.x);
      nose_y=(results[0].pose.nose.y);
      console.log(results);
      console.log("nose x="+results[0].pose.nose.x);
      console.log("nose y="+results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(mustache,nose_x,nose_y,30,30);
}

function take_snapshot(){
    save('myMustachefilterimage.png');
}