// Variables
const video = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');
const preloader = document.querySelector('.preloader');

// Play / pause
switchBtn.addEventListener('click', (e) => {
	// L'ajout de la classe slide indique que la vidéo est en pause
	// Penser aux variables drapeau, mais ca fait du code en plus ,-)
	if (!switchBtn.classList.contains('slide')){
		switchBtn.classList.add('slide');
		video.pause();
	} else {
		switchBtn.classList.remove('slide');
		video.play();
	}
});

// Video preloader
window.addEventListener('load', () => {
	preloader.classList.add('hide-preloader');
	video.play();
});