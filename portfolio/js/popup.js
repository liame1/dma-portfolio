// ~~~~~ GLOBAL VARIABLES:
//const closeBtn = document.querySelector("button");
const dialog = document.querySelector(".dialog-container");


// closeBtn.onclick = function() {
//     modal01.close();
//     dialog.style.display = "none";
// };


// ~~~~~ INDIVIDUAL MODALS :
// MODAL-01
//const btn01 = document.querySelector(".btn-01");
const modal01 = document.querySelector(".modal-01");
const image01 = document.querySelectorAll(".image-01");
image01.forEach(interact => {
    interact.addEventListener("click", () => {
        modal01.showModal();
        dialog.style.display = "inherit";
    });     
    modal01.addEventListener("click", (e) => {
        if(e.target.classList.contains("modal-01")){
            modal01.close();
            dialog.style.display = "none";
        }
        //else if (e.target.contains(btn01)) {
        //    modal01.close();
        //    dialog.style.display = "none";
        //}
    });
});
// MODAL-02
const modal02 = document.querySelector(".modal-02");
const image02 = document.querySelectorAll(".image-02");
image02.forEach(interact => {
    interact.addEventListener("click", () => {
        modal02.showModal();
        dialog.style.display = "inherit";
    });
    modal02.addEventListener("click", (e) => {
        if(e.target.classList.contains("modal-02")){
            modal02.close();
            dialog.style.display = "none";
        }
        //else if (e.target.contains(closeBtn)) {
        //    modal02.close();
        //    dialog.style.display = "none";
        //}
    });
});
// MODAL-03
const modal03 = document.querySelector(".modal-03");
const image03 = document.querySelectorAll(".image-03");
image03.forEach(interact => {
    interact.addEventListener("click", () => {
        modal03.showModal();
        dialog.style.display = "inherit";
    });
    modal03.addEventListener("click", (e) => {
        if(e.target.classList.contains("modal-03")){
            modal03.close();
            dialog.style.display = "none";
        }
        //else if (e.target.contains(closeBtn)) {
        //    modal03.close();
        //    dialog.style.display = "none";
        //}
    });
});
// MODAL-04
const modal04 = document.querySelector(".modal-04");
const image04 = document.querySelectorAll(".image-04");
image04.forEach(interact => {
    interact.addEventListener("click", () => {
        modal04.showModal();
        dialog.style.display = "inherit";
    });
    modal04.addEventListener("click", (e) => {
        if(e.target.classList.contains("modal-04")){
            modal04.close();
            dialog.style.display = "none";
        }
    });
});
// MODAL-05
const modal05 = document.querySelector(".modal-05");
const image05 = document.querySelectorAll(".image-05");
image05.forEach(interact => {
    interact.addEventListener("click", () => {
        modal05.showModal();
        dialog.style.display = "inherit";
    });
    modal05.addEventListener("click", (e) => {
        if(e.target.classList.contains("modal-05")){
            modal05.close();
            dialog.style.display = "none";
        }
    });
});
// MODAL-06
const modal06 = document.querySelector(".modal-06");
const image06 = document.querySelectorAll(".image-06");
image06.forEach(interact => {
    interact.addEventListener("click", () => {
        modal06.showModal();
        dialog.style.display = "inherit";
    });
    modal06.addEventListener("click", (e) => {
        if(e.target.classList.contains("modal-06")){
            modal06.close();
            dialog.style.display = "none";
        }
    });
});
// MODAL-07
const modal07 = document.querySelector(".modal-07");
const image07 = document.querySelectorAll(".image-07");
image07.forEach(interact => {
    interact.addEventListener("click", () => {
        modal07.showModal();
        dialog.style.display = "inherit";
    });
    modal07.addEventListener("click", (e) => {
        if(e.target.classList.contains("modal-07")){
            modal07.close();
            dialog.style.display = "none";
        }
    });
});
// MODAL-08
const modal08 = document.querySelector(".modal-08");
const image08 = document.querySelectorAll(".image-08");
image08.forEach(interact => {
    interact.addEventListener("click", () => {
        modal08.showModal();
        dialog.style.display = "inherit";
    });
    modal08.addEventListener("click", (e) => {
        if(e.target.classList.contains("modal-08")){
            modal08.close();
            dialog.style.display = "none";
        }
    });
});
// MODAL-09
const modal09 = document.querySelector(".modal-09");
const image09 = document.querySelectorAll(".image-09");
image09.forEach(interact => {
    interact.addEventListener("click", () => {
        modal09.showModal();
        dialog.style.display = "inherit";
    });
    modal09.addEventListener("click", (e) => {
        if(e.target.classList.contains("modal-09")){
            modal09.close();
            dialog.style.display = "none";
        }
    });
});
// MODAL-10
const modal10 = document.querySelector(".modal-10");
const image10 = document.querySelectorAll(".image-10");
image10.forEach(interact => {
    interact.addEventListener("click", () => {
        modal10.showModal();
        dialog.style.display = "inherit";
    });
    modal10.addEventListener("click", (e) => {
        if(e.target.classList.contains("modal-10")){
            modal10.close();
            dialog.style.display = "none";
        }
    });
});

// ~~~~~ CLOSE BUTTON :
// closeBtn.addEventListener("click", () => {
//     modal01.close();
//     dialog.style.display = "none";
// });
// closeBtn.addEventListener("click", () => {
//     modal02.close();
//     dialog.style.display = "none";
// });

// closeBtn.onclick = function() {
//     modal02.close();
//     modal01.close();

//     dialog.style.display = "none";
// };