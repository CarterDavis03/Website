var i = 0;
var images = [];
var time = 3000;

//Add all the images to a list
images[0] = 'photos/1.png';
images[1] = 'photos/2.png';
images[2] = 'photos/3.png';

function changeImg(){

    //Set the images source file
    document.slide.src = images[i];

    //Increment the value i
    if(i < images.length - 1){
        i++;
    } else{
        i = 0;
    }

    //Delay
    setTimeout("changeImg()", time);
}

//Make the script run upon page load
window.onload = changeImg;