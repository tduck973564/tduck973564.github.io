function toggleNavVisibility() {
    let nav = document.getElementById("nav");
    if (nav.style.display === "none") {
        nav.style.display = "block"
    }
    else {
        nav.style.display = "none";
    }
}

function makeNavVisibleOnMediaQuery(x) {
    let nav = document.getElementById("nav");
    if (!x.matches) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

let screenSizeMediaQuery = window.matchMedia("(max-width: 1200px)");
makeNavVisibleOnMediaQuery(screenSizeMediaQuery);
screenSizeMediaQuery.addListener(makeNavVisibleOnMediaQuery);