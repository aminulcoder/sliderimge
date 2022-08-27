var photos = ["img/download (1).jfif","img/download.jfif","img/hfpqyV7B-IMG-Dubai-UAE.jpg","img/photo-1508919801845-fc2ae1bc2a28.jfif"]


var imgTag = document.querySelector("img");

var count = 0;
function next(){
    count++;
    if(count>=photos.length){
        count = 0;
        imgTag.src = photos[count];

    }else{

        imgTag.src =photos[count];
    }
    
}
function prev(){

    count--;
    if(count<0){
        count= photos.length -1;
    
        imgTag.src = photos[count];

    }else{

        imgTag.src =photos[count];
    }
}