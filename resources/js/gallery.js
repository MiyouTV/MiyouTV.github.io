const images = document.querySelectorAll('.thumbnail img');
const preview = document.querySelector('#preview');

function setPreview(image) {
	preview.src = image.src;
	images.forEach((img) => {
		if (image === img) {
			img.parentElement.classList.add('active');
		} else
			img.parentElement.classList.remove('active');
	});
}

images.forEach((image) => {
	image.onclick = function() {
		setPreview(image);
	};
});

// Sets First Element as Active
let first = document.querySelector('.thumbnail img');
preview.src = first.src;
first.parentElement.classList.add('active');