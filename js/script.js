const arrImages = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
	'https://www.freecodecamp.org/news/content/images/2022/08/pexels-antonio-batinic--4164418--1-.jpg'
];

const containerHighlighted = document.querySelector('.highlighted');

for (let i = 0; i < arrImages.length; i++) {
	containerHighlighted.innerHTML += `<img src="${arrImages[i]}" alt="" class="${i == 0 ? 'active' : ''}">`;
}


// selezionimo le immagini nell'html
const listHighlighted = document.querySelectorAll('.highlighted img');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

// definito una variabile che rappresenta lo stato attuale del carosello
// cioe' l'indice dell'immagine attiva
let activeIndex = 0;

btnNext.addEventListener('click',
	function() {
		// dall'immagine attiva tolgo la classe active
		listHighlighted[activeIndex].classList.remove('active');
		// settiamo il nuovo valore di active index
		activeIndex++;
		if (activeIndex >= listHighlighted.length) {
			activeIndex = 0;
		}
		// alla nuova immagine attiva aggiungiamo la classe active
		listHighlighted[activeIndex].classList.add('active');
	}
);

btnPrev.addEventListener('click',
	function() {
		// dall'immagine attiva tolgo la classe active
		listHighlighted[activeIndex].classList.remove('active');
		// settiamo il nuovo valore di active index
		activeIndex--;
		if (activeIndex < 0) {
			activeIndex = listHighlighted.length - 1;
		}
		// alla nuova immagine attiva aggiungiamo la classe active
		listHighlighted[activeIndex].classList.add('active');
	}
);