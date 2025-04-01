const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery-content img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach(interact => {
    interact.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");

        const originalSrc = interact.getAttribute("data-original");
        original.src = originalSrc;
        const altText = interact.alt;
        caption.textContent = altText;
    });
});


modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});