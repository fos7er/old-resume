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

// если пользователь был на сайте за последние 10 минут, то отключаем стартовый экран

var coockieOptions = {
  expires: 600 
};

if ( getCookie('wasLast10minutes') === 'true' ) {
  var starterScreen = document.querySelector('.starter-screen-container');
  starterScreen.style.display = 'none';

}

setCookie('wasLast10minutes', true , coockieOptions);

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

$(document).on('click', 'a.smoothscroll', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

// modal content show 
var overlay =document.querySelector(".overlay");
var modalAll=document.querySelectorAll(".modal-content"),item;

$('#portfolio').on('click', '.portfolio-item', function (event) {
	event.preventDefault();
	var modalId = this.getAttribute('data-portfoliomodal');
	overlay.classList.add("show");
	document.getElementById(modalId).classList.add('show');



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
	// var sections = $("section");
	// var navigation_links = $("#nav-wrap a");

	// sections.waypoint({

 //      handler: function(event, direction) {

	// 	   var active_section;

	// 		active_section = $(this);
	// 		if (direction === "up") active_section = active_section.prev();

	// 		var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

 //         navigation_links.parent().removeClass("current");
	// 		active_link.parent().addClass("current");

	// 	},
	// 	offset: '35%'

	// });