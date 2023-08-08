const btn = document.getElementById("toggleBtn");
const navs = document.getElementById("navs");
btn.addEventListener("click",()=>{
    navs.classList.toggle("active");
});
