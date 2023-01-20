const sidebarBtnToggle = document.getElementById("sidebarBtnToggle");

// ajouter le script pour ajouter une class "open" pour la sidebar
sidebarBtnToggle.addEventListener("click", function(){
    sidebarBtnToggle.classList.toggle("open");
    document.getElementById("sidebar").classList.toggle("open");
});

const modalBtn = document.getElementById("modalBtn");

// ajouter le script pour ajouter une class "open" pour la modal
modalBtn.addEventListener("click", function (){
    document.getElementById("modal-element").classList.toggle("open");
});


let modal = document.getElementById("modal-element");

document.getElementById("modalBtn").addEventListener("click",function(){
    modal.style.display = "block";
});

document.getElementById("close-modal-btn").addEventListener("click",function(){
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});