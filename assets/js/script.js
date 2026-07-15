const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const hoversign = document.querySelector(".hover-sign");

const videoList = [video1, video2, video3];

videoList.forEach((video) => {
    video.addEventListener("mouseenter", () => {
        video.play();
        hoversign.classList.add("active");
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; // Optional: video ko start se reset karega
        hoversign.classList.remove("active");
    });
});