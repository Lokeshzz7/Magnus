const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const check = document.querySelectorAll('.check');
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        bar.style.display='none'
    })
    check.forEach(item=>{
      item.addEventListener('click',function(){
        nav.classList.remove("active");
        bar.style.display="flex";
      })
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        bar.style.display='flex'
    })
   
}

window.addEventListener('resize', removeUiBtnClass);

function removeUiBtnClass() {
    const screenWidth = window.innerWidth;
    const navbarItems = document.querySelectorAll('#navbar li a button');
    if (screenWidth <= 900) {
      navbarItems.forEach(item => {
        item.classList.remove('ui-btn');
        item.classList.add('anc');
      })
    } else {
   
      navbarItems.forEach(item => {
        if (!item.classList.contains('ui-btn')) {
          item.classList.add('ui-btn');
          item.classList.remove('anc');
        }
      });
    }
  }
  

  removeUiBtnClass();
  

window.onload=fadeout;
      
function fadeout() {
  const fade = document.querySelector('.load-container');
    var intervalID = setInterval(function () {
  
if (!fade.style.opacity) {
    fade.style.opacity = 1;
}
  
  
if (fade.style.opacity > 0) {
    fade.style.opacity -= 0.1;
}
  
else {
    clearInterval(intervalID);
}
  
    }, 200);
}

console.log('inga inada panra');