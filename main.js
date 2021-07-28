noseX=0;
noseY=0;


function preload(){
ryuga_nose = loadImage('https://i.postimg.cc/x11GLw59/Ryuga-Trans.png');
}

function setup(){
canvas = createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet = ml5.poseNet(video,modelLoded) ;
poseNet.on('pose', gotPoses);

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x +16;
        noseY=results[0].pose.nose.y +16;
        console.log("nose x ="+noseX);
        console.log("nose y ="+noseY);
        
    }
}

function modelLoded(){
    console.log('PoseNet Is Initialize');
}

function draw(){
image(video,0,0,400,400);
image(ryuga_nose,noseX,noseY,200,200);

}

function take_snapshot(){
    save('ryuga.png');
    
}