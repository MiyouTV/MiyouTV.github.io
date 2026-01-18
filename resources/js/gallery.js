const thumbnails = document.querySelectorAll('.thumbnail img');
const preview = document.querySelector('#preview');
const previewDesc = document.querySelector('#preview-description');

function setPreview(thumbnail) {
	preview.src = thumbnail.src;
	previewDesc.textContent = "Artist: " + thumbnail.getAttribute('artist') || "Anonymous";

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
if (first) {
	setPreview(first);
}