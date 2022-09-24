// CREDITS
//I made this script with the help of Web Dev Simplified tutorials on youtube
id=1;
carrousel();
//function next/previous buttons
function nextslide(x){
    next(id += x);
}
function next(x){
    let i;
    let slides=document.getElementsByClassName("slide");
    if (x>slides.length){
        id=1;
    }
    else if (x<1){
        id=slides.length;
    }
    for(i=0;i<slides.length;i++){
        //console.log(slides[i]);
        slides[i].style.display="none";
    }
    slides[id-1].style.display="block";
}
//function carrousel automatic
function carrousel(){
    let i;
    let slides=document.getElementsByClassName("slide");
    id++;
    if (id>slides.length){
        id=1;
    }
    else if (id<1){
        id=slides.length;
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[id-1].style.display="block";
    setTimeout(carrousel, 2500);
}