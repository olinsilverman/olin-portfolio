// Horizontal wheel movement on the homepage image strip.
const strip=document.querySelector('.strip');
if(strip){strip.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){e.preventDefault();strip.scrollLeft+=e.deltaY;}},{passive:false});}
