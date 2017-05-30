
/* Мета контент главного меню*/
var loopa=document.querySelector(".loopa");
var login=document.querySelector(".login");

var metaSearch=document.querySelector(".meta-content.search");
var metaLogin=document.querySelector(".meta-content.login");

var focusSearch=metaSearch.querySelector("[name=search]");
var focusEmail=metaLogin.querySelector("[name=email]");

var metaMenu=document.querySelector(".meta-menu");
var catalogButton=document.querySelector("#catalog-btn");

var cartButton=document.querySelector(".cart");
var cartMenu=document.querySelector(".cart-menu");

catalogButton.addEventListener("mouseover", function(event) {
event.preventDefault();
metaMenu.classList.add("meta-content-show");
});

metaMenu.addEventListener("mouseleave", function(event) {
metaMenu.classList.remove("meta-content-show");
});




loopa.addEventListener("mouseover", function(event) {
event.preventDefault();
metaSearch.classList.add("meta-content-show");
metaMenu.classList.remove("meta-content-show");
metaLogin.classList.remove("meta-content-show");
cartMenu.classList.remove("meta-content-show");
focusSearch.focus();
});


metaSearch.addEventListener("mouseleave", function(event) {
event.preventDefault();
metaSearch.classList.remove("meta-content-show");
});


login.addEventListener("mouseover", function(event) {
event.preventDefault();
metaLogin.classList.add("meta-content-show");
focusEmail.focus();
metaSearch.classList.remove("meta-content-show");
metaMenu.classList.remove("meta-content-show");
cartMenu.classList.remove("meta-content-show");
});


metaLogin.addEventListener("mouseleave", function(event) {
event.preventDefault();
metaLogin.classList.remove("meta-content-show");
});

cartButton.addEventListener("mouseover", function(event) {
event.preventDefault();
cartMenu.classList.add("meta-content-show");
metaSearch.classList.remove("meta-content-show");
metaMenu.classList.remove("meta-content-show");
metaLogin.classList.remove("meta-content-show");
});


cartMenu.addEventListener("mouseleave", function(event) {
event.preventDefault();
cartMenu.classList.remove("meta-content-show");
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) 
		{
			if (metaSearch.classList.contains("meta-content-show"))
			{metaSearch.classList.remove("meta-content-show"); }
			if (metaMenu.classList.contains("meta-content-show"))
			{metaMenu.classList.remove("meta-content-show");}
			if (metaLogin.classList.contains("meta-content-show"))
			{metaLogin.classList.remove("meta-content-show");}
			if (cartMenu.classList.contains("meta-content-show"))
			{cartMenu.classList.remove("meta-content-show");}
			
		  
		}
});





/* слайдер и цвет фона сайта */

var sliderBtn1=document.querySelector("#btn-1");
var sliderBtn2=document.querySelector("#btn-2");
var sliderBtn3=document.querySelector("#btn-3");
var sliderContainer=document.querySelector(".slider-container");
var bodycolor=document.querySelector("body");



function changebackground() {

if (document.querySelector("#btn-1").checked==true) { 

	bodycolor.classList.remove("site-color2");
	bodycolor.classList.remove("site-color3");

	
	sliderContainer.classList.remove("slider-gradient2");
	sliderContainer.classList.remove("slider-gradient3");

	
		 }
if (document.querySelector("#btn-2").checked==true) { 
	
	bodycolor.classList.remove("site-color1");
	bodycolor.classList.remove("site-color3");
	bodycolor.classList.add("site-color2");
	
	sliderContainer.classList.remove("slider-gradient1");
	sliderContainer.classList.remove("slider-gradient3");
	sliderContainer.classList.add("slider-gradient2");
	
		 }		 
if (document.querySelector("#btn-3").checked==true) { 
	
	bodycolor.classList.remove("site-color1");
	bodycolor.classList.remove("site-color2");
	bodycolor.classList.add("site-color3");
	
	sliderContainer.classList.remove("slider-gradient1");
	sliderContainer.classList.remove("slider-gradient2");
	sliderContainer.classList.add("slider-gradient3");
	
		 }

}

