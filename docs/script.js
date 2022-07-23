const toggle=document.getElementById('toggle');
const content=document.getElementById('content');
toggle.addEventListener('click',() => {
  content.classList.toggle('move');
});