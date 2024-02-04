const addButton = document.querySelector(".add-button");
const closeModal = document.querySelector(".modal_ .main .close");
const insertJobButton = document.querySelector(".submit-button");

addButton.addEventListener("click", OpenModal);
closeModal.addEventListener("click", CloseModal);
insertJobButton.addEventListener("click", AddJob);

function OpenModal() {
    document.querySelector(".overlay").classList.remove("d-none");
    document.querySelector(".modal_ .main").classList.add("open");
}

function CloseModal() {
    document.querySelector(".overlay").classList.add("d-none");
    document.querySelector(".modal_ .main").classList.remove("open");

}

function AddJob() {
    const jobTitle = document.querySelector(".modal_ input[name=job]").value;// get the job title from the input
    const category = document.querySelector("#Today .jobs");// select the category (default = Today)
    let job = document.createElement("div"); // create element
    // add the job title
    job.innerHTML = `
    <div class="job">
        <h4>${jobTitle}</h4>
        <div class="check-box">
        </div>
    </div>`;
    category.appendChild(job);// add the job to category
    // close the modal
    CloseModal();
    // console.log(jobTitle);
}