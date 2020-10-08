window.onload=function(){
	const menuIcon = document.querySelector(".burger");
	const navbar = document.querySelector(".navbar");
	const comicCover = document.querySelector(".comic-cover");

	menuIcon.addEventListener('click', () => {
		navbar.classList.toggle("open");
		console.log(navbar.classList);
	});

	comicCover.addEventListener('click', () => {
		comicCover.classList.toggle("reveal");
	});
};