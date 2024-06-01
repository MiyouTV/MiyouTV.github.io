const thumbnails = document.querySelectorAll('.thumbnail img');
const preview = document.querySelector('#preview');

function setPreview(thumbnail) {
	preview.src = thumbnail.src;
	thumbnails.forEach((img) => {
		if (thumbnail === img) {
			img.parentElement.classList.add('active');
		} else
			img.parentElement.classList.remove('active');
	});
}

thumbnails.forEach((thumbnail) => {
	thumbnail.onclick = function() {
		setPreview(thumbnail);
	};
});

// Sets First Element as Active
let first = document.querySelector('.thumbnail img');
preview.src = first.src;
first.parentElement.classList.add('active');