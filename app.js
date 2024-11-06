const navBtn = document.querySelector(".nav-btn")
const headerEL = document.querySelector("header") 

navBtn.addEventListener("click", () => {
    headerEL.classList.toggle("nav-open")
})