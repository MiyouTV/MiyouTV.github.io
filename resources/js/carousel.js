const images = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.indicator');
let currentImage = 0;
let timer;

// Shows Image from Index
function showImage(index) {
	images.forEach((image, i) => {
		if (i === index) {
			image.classList.add('active');

		} else {
			image.classList.remove('active');
		}
	});
	indicators.forEach((indicator, i) => {
		if (i === index) {
			indicator.classList.add('active');

		} else {
			indicator.classList.remove('active');
		}
	});
}

// Shows Next Image
function nextImage() {
	currentImage = (currentImage + 1) % images.length;
	showImage(currentImage);
}

indicators.forEach((indicator, i) => {
	// Adds On-Click for Each Image
	indicator.onclick = function() {
		showImage(i);
	};
});

images.forEach((image) => {
	// Pauses Slideshow
	image.onmouseenter = function() {
		clearInterval(timer);
	};
	//Resume Slideshow
	image.onmouseleave = function() {
		timer = setInterval(nextImage, 3000);
	};
});

// Sets First Element as Active
document.querySelector('.indicator').classList.add('active');
document.querySelector('.carousel img').classList.add('active');

// Auto Slideshow Images
timer = setInterval(nextImage, 3000);