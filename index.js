window.addEventListener("load",()=>{
    const sounds = document.querySelectorAll(".sound");
    const beats = document.querySelectorAll(".beats div");

    
    beats.forEach((beat,index) =>{
        beat.addEventListener("click",function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            const arrayVal = [];
          
        
        });
    });
   
})