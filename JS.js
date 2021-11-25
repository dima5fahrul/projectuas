// JavaScript Document

window.addEventListener('scroll', function(){
	var navbar = document.querySelector('nav');
	navbar.classList.toggle('sticky', window.scrollY > 0);
	if (window.scrollY <= 0) {
		navbar.classList.add('py-4', window.scrollY > 0);
		navbar.classList.remove('py-1', window.scrollY > 0);
	} else {
		navbar.classList.add('py-1', window.scrollY > 0);
		navbar.classList.remove('py-4', window.scrollY > 0);
	}
	
	if (window.scrollY <= 0) {
		navbar.classList.add('navbar-dark', window.scrollY > 0);
		navbar.classList.remove('navbar-light', window.scrollY > 0);
	} else{
		navbar.classList.add('navbar-light', window.screenY > 0);
		navbar.classList.remove('navbar-dark', window.screenY > 0);
	}
});
