const menuBtn = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    // if(navBar.classList.contains("close")){
    //     navBar.classList.remove("close");
    // }
    // else{
    //     navBar.classList.add("close")
    // }
    navBar.classList.toggle("showlink")
})