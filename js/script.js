var goToSiteButton=document.querySelector(".go-to-site-button");
var starterScreenPt1=document.querySelector(".starter-screen-pt1");
var starterScreenPt2=document.querySelector(".starter-screen-pt2");
var starterMainScreen=document.querySelector(".starter-screen-container");

goToSiteButton.addEventListener("click", function(event){
goToSiteButton.classList.add("animation-rotate");
starterScreenPt1.classList.add("animation-up");
starterScreenPt2.classList.add("animation-down");
starterMainScreen.classList.add("animation-dissappear");

});

$(document).on('click', 'a.smoothscroll', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

// modal content show 

var overlay =document.querySelector(".overlay");
var portfolioItem1=document.querySelector("#portfolio1");
var portfolioItem2=document.querySelector("#portfolio2");
var portfolioItem3=document.querySelector("#portfolio3");
var modalAll=document.querySelectorAll(".modal-content"), index, item;

// находим кнопки открытия подробного окна элемента портфолио
var OpenPortfolio1=document.querySelector("#more-info-button1");
var OpenPortfolio2=document.querySelector("#more-info-button2");
var OpenPortfolio3=document.querySelector("#more-info-button3");

OpenPortfolio1.addEventListener("click", function() {
overlay.classList.add("show");
portfolioItem1.classList.add("show");	
});

OpenPortfolio2.addEventListener("click", function() {
overlay.classList.add("show");
portfolioItem2.classList.add("show");	
});

OpenPortfolio3.addEventListener("click", function() {
overlay.classList.add("show");
portfolioItem3.classList.add("show");	
});

var modalCloseButtons = document.querySelectorAll('.close-modal'), 
    index, button; /* Все кнопки закрыть модал контент*/

for (index = 0; index < modalCloseButtons.length; index++) {
    button = modalCloseButtons[index];

    button.addEventListener('click', closeModalFunction);
 
}

/* функцтя посика всего модал контент и закрытия */
function closeModalFunction(event) {
	event.preventDefault();
	for (index=0; index< modalAll.length; index++) {
		item=modalAll[index];
		item.classList.remove("show");
	}

}


window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) 
		{
			closeModalFunction(event);
		  
		}
});

/* ПОДСВЕТКА МЕНЮ С ПОМОЩЬЮ ВЭЙПОИНТОВ */
	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});