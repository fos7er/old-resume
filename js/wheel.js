var outerLittleStroke = document.querySelector(".outer-little-stroke");
var innerLittleStroke = document.querySelector(".inner-little-stroke");
var centralCircle = document.querySelector(".central-circle");
var halfRing = document.querySelector(".half-ring");
var circleH1 = document.getElementById('circleH1');
var circleH2 = document.getElementById('circleH2');
var circleSpan = document.getElementById('circleSpan');
var playButton = document.querySelector('.play-button');






function phase2 () {
	
	outerLittleStroke.classList.add('ols-phase2');
	innerLittleStroke.classList.add('ils-phase2');
	centralCircle.classList.add('central-circle-bgcolor-phase2');
	halfRing.classList.add('hl-phase2');
	playButton.classList.add('pb-phase2');

	outerLittleStroke.classList.remove('ols-phase1');
	innerLittleStroke.classList.remove('ils-phase1');
	centralCircle.classList.remove('central-circle-bgcolor-phase1');
	halfRing.classList.remove('hl-phase1');
	playButton.classList.remove('pb-phase1');

	circleH1.textContent='Настроим';
 	circleH2.textContent='Эффективные рекламные';
 	circleSpan.textContent='Компании';
	
}

function phase3 () {
	
	outerLittleStroke.classList.add('ols-phase3');
	innerLittleStroke.classList.add('ils-phase3');
	centralCircle.classList.add('central-circle-bgcolor-phase3');
	halfRing.classList.add('hl-phase3');
	playButton.classList.add('pb-phase3');

	outerLittleStroke.classList.remove('ols-phase2');
	innerLittleStroke.classList.remove('ils-phase2');
	centralCircle.classList.remove('central-circle-bgcolor-phase2');
	halfRing.classList.remove('hl-phase2');
	playButton.classList.remove('pb-phase2');

	circleH1.textContent='Научим';
 	circleH2.textContent='Коммуницировать';
 	circleSpan.textContent='С пользователями';

	
}

(function rotatePromoCircle() {

    // фаза1

	outerLittleStroke.classList.add('ols-phase1');
 	innerLittleStroke.classList.add('ils-phase1');
 	centralCircle.classList.add('central-circle-bgcolor-phase1');
 	halfRing.classList.add('hl-phase1');
 	playButton.classList.add('pb-phase1');

 	outerLittleStroke.classList.remove('ols-phase3');
 	innerLittleStroke.classList.remove('ils-phase3');
 	centralCircle.classList.remove('central-circle-bgcolor-phase3');
 	halfRing.classList.remove('hl-phase3');
 	playButton.classList.remove('pb-phase3');

 	circleH1.textContent='Создадим';
 	circleH2.textContent='Имидж в интернет сети';
 	circleSpan.textContent='';
	
	// фаза 2

	clearTimeout(timerPhase2);
	var timerPhase2=setTimeout (phase2, 4210);
	//фаза 3

	clearTimeout(timerPhase3);
	var timerPhase3=setTimeout (phase3, 7710);

	
	clearTimeout(timer1);
	var timer1=setTimeout(rotatePromoCircle, 11910);
}) ();

