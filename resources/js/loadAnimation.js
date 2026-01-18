document.addEventListener('DOMContentLoaded', () => {
	const infoDivs = document.querySelectorAll('.info');
	const globalWait = 400; // Initial Pause (ms)

	const observerOptions = {
		root: null, // Use the Browser Viewport
		threshold: 0.1 // Trigger when 10% of the DIV is Visible
	};

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				const delay = globalWait + (index * 400);

				// Staggered Delay for Simultaneously Appearing Elements
				setTimeout(() => {
					entry.target.classList.add('is-visible');
				}, delay);

				// Stop Watching Once Faded-In
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	infoDivs.forEach(div => {
		observer.observe(div);
	});
});