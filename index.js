const addButton = document.querySelector(".add-button");
const closeModal = document.querySelector(".modal_ .main .close");
const insertJobButton = document.querySelector(".submit-button");
const jobs = document.querySelectorAll(".job");
const jobsConatainers = document.querySelectorAll(".jobs");
const checkBoxes = document.querySelectorAll(".check-box");

addButton.addEventListener("click", OpenModal);
closeModal.addEventListener("click", CloseModal);
insertJobButton.addEventListener("click", AddJob);
checkBoxes.forEach((checkBox, index) => {
    checkBox.addEventListener("click", () => {
        // check if the job is checked or not
        if (jobs[index].classList.contains("checked")) {
            jobs[index].classList.remove("checked");
            checkBox.innerHTML = "";
        } else {
            jobs[index].classList.add("checked");
            checkBox.innerHTML = `<svg width="24" height="20" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M19.495 1.13301C19.7166 0.999715 19.9812 0.95744 20.2333 1.01505C20.4854 1.07267 20.7053 1.22569 20.847 1.44201L21.837 2.95201C21.9661 3.14927 22.0213 3.38578 21.9929 3.61979C21.9646 3.85381 21.8544 4.07028 21.682 4.23101L21.679 4.23501L21.665 4.24801L21.608 4.30101L21.383 4.51601C20.138 5.7236 18.9307 6.96954 17.763 8.25201C15.566 10.668 12.957 13.83 11.201 16.898C10.711 17.754 9.514 17.938 8.804 17.199L2.319 10.461C2.22607 10.3644 2.1535 10.2501 2.10562 10.1249C2.05774 9.99971 2.03551 9.86616 2.04027 9.7322C2.04503 9.59824 2.07667 9.4666 2.13332 9.34512C2.18996 9.22363 2.27045 9.11477 2.37 9.02501L4.33 7.25701C4.50225 7.10172 4.72311 7.01112 4.95478 7.00072C5.18646 6.99032 5.41454 7.06077 5.6 7.20001L8.90901 9.68101C14.078 4.58401 17.009 2.62801 19.495 1.13301Z"
                fill="#08A20E" />
        </svg>`;
        }

    });
});

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