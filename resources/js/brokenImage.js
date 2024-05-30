const images = document.querySelectorAll('img');

images.forEach((image) => {
	if (image.getAttribute('src') === null)
		image.setAttribute('src', '../resources/images/missing.jpg');
});