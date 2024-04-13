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
let arrow_left = document.querySelector('.arrow_left');
let arrow_right = document.querySelector('.arrow_right');

let i = 0;

arrow_left.addEventListener('click', function() {
	var prevIndex = (i - 1 + slides.length) % slides.length;
	changeSlide(prevIndex);
});

arrow_right.addEventListener('click', function() {
	var nextIndex = (i + 1) % slides.length;
	changeSlide(nextIndex);
});

function setSlide() {
	banner_img.setAttribute('src', './assets/images/slideshow/' + slides[i].image);
	taglines.innerHTML = slides[i].tagLine;

	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[i].classList.add('dot_selected');
}

function changeSlide(index) {
	i = index;
	setSlide();
}

setSlide();