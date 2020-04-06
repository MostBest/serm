'use strict';

function l( param ) {
	console.log( param );
}

function random(number) {
	return Math.ceil(Math.random() * number);
}

let number = random(10);


let buttons = document.querySelectorAll('.btn'); // глобальная переменная

buttons.forEach(function(button) {
	button.addEventListener('click', addElement);
});


function addElement(e) {

	let buttonProperties 		= this.getBoundingClientRect(); // возращает размер элемента и его позицию
	let buttonSize			 		= Math.max(this.clientWidth, this.clientHeight);

	// создали елемент, поместили в кнопку
	let subElement = document.createElement('span');
			subElement.classList.add('inc');
			this.appendChild(subElement);

	// увеличиваем размер дочернего элемента относительно родителя
	subElement.style.width = buttonSize + 'px';
	subElement.style.height = buttonSize + 'px';


	let x = e.clientX - buttonProperties.left - buttonProperties.width / 2;
	let y = e.clientY - buttonProperties.top - buttonProperties.height / 2;

	subElement.style.left = x + 'px';
	subElement.style.top  = y + 'px';

}
