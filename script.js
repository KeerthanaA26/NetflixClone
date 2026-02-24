const navbar = document.getElementById("navbar");

function toggle(){
    if(navbar.style.display === "block"){
        navbar.style.display = "none";
    }else{
        navbar.style.display = "block";
    }
}


const slider = document.querySelector(".carousel-slider");

/* Mouse wheel horizontal scroll */
slider.addEventListener("wheel", (e)=>{
e.preventDefault();
slider.scrollLeft += e.deltaY;
});

/* Auto scrolling */
let autoScroll = setInterval(()=>{
slider.scrollLeft += 1;
},20);

/* Pause on hover */
slider.addEventListener("mouseenter",()=>{
clearInterval(autoScroll);
});

/* Resume scroll */
slider.addEventListener("mouseleave",()=>{
autoScroll = setInterval(()=>{
slider.scrollLeft += 1;
},20);
});