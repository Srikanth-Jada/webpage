let videoIndex = 0;
function moveVideoSlide() {
    const videoSlider = document.querySelector(".slider");
    const videoSlides = document.querySelectorAll(".slider .slide video");
    videoIndex = (videoIndex + 1) % videoSlides.length;
    videoSlider.style.transform = `translateX(-${videoIndex * 100}%)`;
    videoSlides.forEach((video, i) => {
        if (i === videoIndex) {
            video.currentTime = 0;
            video.play();
        }
    });
}
setInterval(moveVideoSlide, 5000);

let imageIndex = 0;
function moveImageSlide() {
    const imageSlider = document.querySelector(".second-slider");
    const imageSlides = document.querySelectorAll(".second-slider .slide");
    imageIndex = (imageIndex + 1) % imageSlides.length;
    imageSlider.style.transform = `translateX(-${imageIndex * 100}%)`;
}
setInterval(moveImageSlide, 5000);
