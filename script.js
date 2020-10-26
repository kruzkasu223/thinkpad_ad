const modal = document.querySelector(".modal");
const cross = document.querySelector(".modal_cross");
const thumbs = document.querySelectorAll(".card");
const full = document.querySelector(".full_img");

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        modal.classList.add("open");
        cross.classList.add("open");

        const fullSrc = thumb.getAttribute("data-original");
        full.src = fullSrc;
    });
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        cross.classList.remove("open");
    }
});

function scrollG() {
    document.getElementById("gallary").scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
}

function scrollTS() {
    document.getElementById("tech_specs").scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
}

function scrollC() {
    document.getElementById("contact").scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
}
