const addButton = document.querySelector(".add-button");
const closeModal = document.querySelector(".modal_ .main .close");
const insertJobButton = document.querySelector(".submit-button");
const jobs = document.querySelectorAll(".job");
const jobsConatainers = document.querySelectorAll(".jobs");

addButton.addEventListener("click", OpenModal);
closeModal.addEventListener("click", CloseModal);
insertJobButton.addEventListener("click", AddJob);

//drag every job
jobs.forEach(job => {
    job.addEventListener("dragstart", () => {
        job.classList.add("dragging");
    });
    job.addEventListener("dragend", () => {
        job.classList.remove("dragging");
    });
});

// add dragging job to category
jobsConatainers.forEach(jobContainer => {
    jobContainer.addEventListener("dragover", (e) => {
        e.preventDefault();
        const darggingJob = document.querySelector(".dragging");
        jobContainer.appendChild(darggingJob);
    });
});

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
    <div class="job" draggable="true">
        <h4>${jobTitle}</h4>
        <div class="check-box">
        </div>
    </div>`;
    job.addEventListener("dragstart", () => {
        job.classList.add("dragging");
    });
    job.addEventListener("dragend", () => {
        job.classList.remove("dragging");
    });
    category.appendChild(job);// add the job to category
    // close the modal
    CloseModal();
    // console.log(jobTitle);
}