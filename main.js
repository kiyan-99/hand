prediction_1="";
prediction_2="";
Webcam.set({width:300,height:300,image_format:'png',png_quality:90});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() { Webcam.snap(function(data_uri){ document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'; }) }
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CkjZ1p1rK/model.json',modelLoaded);
function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The first prediction is"+prediction_1;
    speak_data2="The sceond  prediction is"+prediction_2;
var utterThis=new SpeechSynthesisUtterance(speak_data1 + speak_data2);
synth.speak(utterThis);
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}