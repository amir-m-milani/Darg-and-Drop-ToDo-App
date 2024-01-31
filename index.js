const addJobButton = document.querySelector(".add-button");
const closeModal = document.querySelector(".modal_ .main .close");

addJobButton.addEventListener("click", OpenModal);
closeModal.addEventListener("click", CloseModal);

function OpenModal() {
    document.querySelector(".overlay").classList.remove("d-none");
    document.querySelector(".modal_ .main").classList.add("open");
}

function CloseModal() {
    document.querySelector(".overlay").classList.add("d-none");
    document.querySelector(".modal_ .main").classList.remove("open");

}