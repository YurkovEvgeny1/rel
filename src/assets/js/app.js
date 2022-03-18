let header = document.querySelector(".header__menu")
let burger = document.querySelector(".burger__menu")
let list = document.querySelector(".nav__list")

burger.onclick = function(){
	burger.classList.toggle("active");
	header.classList.toggle("active");
}
list.onclick = function(){
	burger.classList.remove("active");
	header.classList.remove("active");
}