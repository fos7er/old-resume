
// Получение координат элемента отностиельно страницы ( кроме IE8- )
function getCoords(elem) { 
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
    bottom: box.bottom + pageYOffset
  };

}

var sections = document.getElementsByTagName('section'); 
var navLinks = nav.getElementsByTagName('a'); 

// Если оффсет больше начала координат секции и меньше конца координат секции, то данная секция активная

function wayPoints () {
	// подсветка будет срабатывать чуть раньше, чем начнется секция
	var offset = document.documentElement.clientHeight * 0.2; 

for (var i = 0; i < sections.length; i++) {
		var sectionCoords = getCoords(sections[i]);
		if ( (pageYOffset + offset) >= sectionCoords.top && (pageYOffset + offset) <= sectionCoords.bottom )
			{ var sectionId ='#' +  sections[i].id;
				for (var i = 0; i < navLinks.length; i++) {
					navLinks[i].parentElement.classList.remove('current');
					if ( navLinks[i].getAttribute('href') == sectionId)
						navLinks[i].parentElement.classList.add('current');
				}
				break; // псоле того как нашли активную секцию остальные игнорируем
			}
	}	
}

window.addEventListener( "scroll", wayPoints );
