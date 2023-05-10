const modal_open        = document.getElementById('modal_open');
const modal_container   = document.getElementById('modal_container');
const modal_close       = document.getElementById('modal_close');


modal_open.addEventListener('click',() =>{
 // alert('hi');
  modal_container.classList.add('s_modal_show');
});


modal_close.addEventListener('click',() =>{
  modal_container.classList.remove('s_modal_show');
});