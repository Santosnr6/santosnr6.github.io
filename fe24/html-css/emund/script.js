window.addEventListener("scroll", function () {
    const header = document.getElementById("header-scroll");

    if (window.scrollY > 0) {
        header.style.opacity = 1;
    } else {
        header.style.opacity = 0;
    }
});
