function showSlides(idx) {
    let backgrounds = ["url(assets/images/drawing.jpg)", "url(assets/images/at_night.jpg)", "url(assets/images/budapest_wheel.jpg)", "url(assets/images/drawing3.jpg)", "url(assets/images/drawing_panorama.jpg)"];
    document.getElementById('slide').style.backgroundImage = backgrounds[idx++];
    if (idx === backgrounds.length) {
        idx = 0;
    }
    setTimeout(showSlides, 4000, idx);
}

showSlides(0);