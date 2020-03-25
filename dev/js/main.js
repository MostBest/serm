'use strict';

function l(param) {
	console.log( param );
}

let btn = document.querySelectorAll('.btn');

btn.forEach(function(item) {
	item.addEventListener('click', addElement);
});

function addElement() {

	if (this.childNodes.length == 1) {

		let  elem = document.createElement('span');
		elem.classList.add('animate');
		this.appendChild(elem);

	}
}
