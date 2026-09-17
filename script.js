const projects = document.querySelectorAll('.project');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.animate(
        [{opacity:0, transform:'translateY(30px)'},{opacity:1, transform:'translateY(0)'}],
        {duration:900,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'}
      );
      io.unobserve(e.target);
    }
  });
},{threshold:.08});
projects.forEach(p=>{p.style.opacity='0';io.observe(p)});
