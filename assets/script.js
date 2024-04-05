	const slides = [
    {
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
let banner_img = document.querySelector('.banner-img');
let taglines = document.getElementById('taglines');
let dots = document.querySelectorAll('.dot');

let i = 0;

function arrow_left() {
	if (i <= 0) i = slides.length;
	i--;
	return setSlide();
}

function arrow_right() {
	if (i >= slides.length - 1) i = -1;
	i++;
	return setSlide();
}

function setSlide() {
	banner_img.setAttribute('src', './assets/images/slideshow/' + slides[i].image);
	taglines.innerHTML = slides[i].tagLine;

	// Déselectionner tous les points
	dots.forEach(dot => dot.classList.remove('dot_selected'));
	// Sélectionner le point correspondant
	dots[i].classList.add('dot_selected');
}
	function changeSlide(index) {
		i = index;
		setSlide();
}

// Initialiser le slider
setSlide();