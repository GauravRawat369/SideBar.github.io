var dark = document.querySelector('.dark');
var night = document.querySelector('.night');
var light = document.querySelector('.light');
var sidebar = document.querySelector('.sidebar');
var active = document.querySelector('.list-item active');

dark.addEventListener("click",()=>{
    sidebar.className = "sidebar";
    active.className = "list-item active"
})
night.addEventListener("click",()=>{
    sidebar.className = "sidebar night";
    active.className = "list-item active night"
})
light.addEventListener("click",()=>{
    sidebar.className = "sidebar light";
    active.className = "list-item active light"
})