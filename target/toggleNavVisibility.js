function toggleNavVisibility() {
    let nav = document.getElementById("nav");
    console.log(nav);
    if (nav.style.display === "none") {
        nav.style.display = "block"
    }
    else {
        nav.style.display = "none";
    }
}