const sidebarBtnToggle = document.getElementById("sidebarBtnToggle");
// ajouter le script pour ajouter une class "open" pour la sidebar
sidebarBtnToggle.addEventListener("click", changeClassForTheSideBar);

function changeClassForTheSideBar() {
    let openSideBar = document.getElementById("sidebar");
    sidebarBtnToggle.classList.toggle("open");
    openSideBar.classList.toggle("open");
}

const modalBtn = document.getElementById("modalBtn");
// ajouter le script pour ajouter une class "open" pour la modal
modalBtn.addEventListener("click", changeClassForTheModal);

function changeClassForTheModal() {
    let openModal = document.getElementById("modal-element");
    openModal.classList.toggle("open");
}