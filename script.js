const audioElement = document.querySelector('audio');
const videoElement = document.querySelector('video');
const playButtons = document.querySelectorAll('#play-button');
const pauseButtons = document.querySelectorAll('#pause-button');
const seekBar = document.querySelectorAll('#seek-bar');

if (audioElement) {
    playButtons[0].addEventListener('click', function() {
        audioElement.play();
    });

    pauseButtons[0].addEventListener('click', function() {
        audioElement.pause();
    });
}

if (videoElement) {
    playButtons[1].addEventListener('click', function() {
        videoElement.play();
    });

    pauseButtons[1].addEventListener('click', function() {
        videoElement.pause();
    });
}

audioElement.addEventListener('loadedmetadata', function() {
    seekBar[0].max = audioElement.duration;
});

videoElement.addEventListener('loadedmetadata', function() {
    seekBar[1].max = videoElement.duration;
});

seekBar[0].addEventListener('input', function() {
    const currentTime = this.value;
    audioElement.currentTime = currentTime;
});

seekBar[1].addEventListener('input', function() {
    const currentTime = this.value;
    videoElement.currentTime = currentTime;
});
