const tabNames = document.querySelectorAll('.tabName');
const tabs = document.querySelectorAll('.tab');

function openTab(tab) {
	tabs.forEach((currentTab) => {
		// Shows Active Tab Content
		if (currentTab === tab) {
			currentTab.classList.add('active');

		} else {
			currentTab.classList.remove('active');
		}
	});
}

tabNames.forEach((tab) => {
	tab.onclick = function() {
		// Removes Previous Active Tab
		tabNames.forEach((currentTab) => {
			currentTab.classList.remove('active');
		});
		openTab(document.querySelector("#" + tab.textContent.replace(/\s+/g, '')), tab);

		// Sets Active Tab Name
		tab.classList.add('active');
	};
});

// Sets First Element as Active
if (tabNames) {
	document.querySelector('.tabName').classList.add('active');
	document.querySelector('.tab').classList.add('active');
}