
function submitForm(e){
  e.preventDefault();
  alert('Thank you! This is a demo contact. Replace with your form handler.');
  e.target.reset();
}

function openPost(e,id){
  e.preventDefault();
  const modal = document.getElementById('postModal');
  modal.innerHTML = `<div class="modal-card"><h3>Full Post</h3><p>This is a demo. Replace with full post content for "<strong>${id}</strong>".</p><p><button onclick="closeModal()" class="btn">Close</button></p></div>`;
  modal.style.display='flex';
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  const modal = document.getElementById('postModal');
  modal.style.display='none';
  modal.setAttribute('aria-hidden','true');
}

window.addEventListener('click', function(e){
  const modal = document.getElementById('postModal');
  if(e.target === modal) closeModal();
});
