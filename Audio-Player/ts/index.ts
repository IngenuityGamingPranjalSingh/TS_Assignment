let musicContainer: HTMLElement = <HTMLElement>document.getElementById('music-container');
let playBtn: any = document.getElementById('play');
let prevBtn: HTMLElement = <HTMLElement>document.getElementById('prev');
let nextBtn: HTMLElement = <HTMLElement>document.getElementById('next');

let audio: any = document.getElementById('audio');
let progress: HTMLElement = <HTMLElement>document.getElementById('progress');
let progressContainer: HTMLElement = <HTMLElement>document.getElementById('progress-container');
let title: any = document.getElementById('title');
let cover: any = document.getElementById('cover');

let songs = ['Nights Like That', 'Oh My Other', 'Tie Me Down', 'Lose My Mind', 'Higher Ground'];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song: any): any {
    title.innerText = song;
    audio.src = `assets/music/${song}.mp3`;
    cover.src = `assets/images/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

function prevSong() {
    songIndex--;

    if (songIndex >= 0) {
        loadSong(songs[songIndex]);
        playSong();
    }
}

function nextSong() {
    songIndex++;

    if (songIndex < songs.length) {
        loadSong(songs[songIndex]);
        playSong();
    }
}

function updateProgress(e: any) {
    const {duration, currentTime} = e.target;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e: any) {
    const width = e.target.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);