const slides=document.querySelectorAll('.slide');
console.log(slides);

let counter=0;

slides.forEach((slide,index)=>{

    slide.style.left=`${index*100}%`

});

const goPrev=()=>{
   
    if(counter ==0){
        counter=slides.length-1;
        slideimg();
    }else{
        counter--;
    slideimg();
    }
   
    
}


const goNext=()=>{

    if(counter == slides.length-1){
        counter=0;
        slideimg();
    }else{
        counter++;
        slideimg();
    }
   
}





const slideimg=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    })

}



