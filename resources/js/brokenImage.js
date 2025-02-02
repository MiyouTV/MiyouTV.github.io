/* const images = document.querySelectorAll('img');

images.forEach((image) => {
	image.setAttribute('onerror', 'this.src="/resources/images/missing.jpg"');
	if (image.getAttribute('src') === null)
		image.setAttribute('src', '/resources/images/missing.jpg');
}); */

function brokenImage(image) {
	image.setAttribute('src', '/resources/images/missing.jpg');
}