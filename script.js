function showSlides(idx) {
    let backgrounds = ["url(assets/images/drawing.jpg)", "url(assets/images/at_night.jpg)"];
    document.getElementById('slide').style.backgroundImage = backgrounds[idx++];
    if (idx === 2) {
        idx = 0;
    }
    setTimeout(showSlides, 6000, idx);
}

showSlides(0);