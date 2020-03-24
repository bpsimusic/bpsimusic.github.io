document.addEventListener('DOMContentLoaded', function() {
	var hamburgers = document.querySelector('.hamburger-menu');
	var menu = document.querySelector('.collapsed-menu');
	hamburgers.addEventListener('click', function() {
		menu.classList.toggle('visible');
	});
});
