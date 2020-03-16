'use strict';

function l(param) {
	console.log( param );
}

l('Hello World!');

// jQuery старт
$(document).ready(function(){

function printError() {
	var login 				= $('#login'),
			password  		= $('#password'),
			errorMessage 	= {
				login: 		'<span id="login-error" class="login-error">Введите данные</span>',
				password: '<span id="password-error" class="password-error">Укажите пароль</span>'
			};

	var x = '';
	switch(x) {

		case login.val():
			login.addClass('error');
			login.focus();
			if ( $('.login-error').length == 0 ) {
				setTimeout(function() {
					$(errorMessage.login).insertAfter(login);
				}, 200);
			}
			break;

		case password.val():
			password.addClass('error');
			if ( $('.password-error').length == 0 ) {
				setTimeout(function(){
					$(errorMessage.password).insertAfter(password);
				}, 200);
			}
		default:
			passwordControl();
	}
}

function passwordControl() {
	var password = $('#password');

	if ( password.val().length < 8 ) {
		$('.form-message').addClass('error');
	}
}


/*
setInterval(function() {
	if ($('#login').val() && $('#password').val() && $('#password').val().length >= 8) {
		$('.input-submit').removeClass('disabled');
	} else {
		$('.input-submit').not('.disabled').addClass('disabled');
	}
}, 500);
*/


			if ( password.val().length < 8) {
				console.log( password.val().length );
				$('.form-message').addClass('error');
			}

$('input').keypress(function() {
	if ( $(this).val() ) {
		$(this).removeClass('error');
		$(this).siblings('span').remove();
	}
});

$( '.form' ).submit( function( e ) {
	if ( $('.input-submit').hasClass('disabled') ) {
		e.preventDefault();
		// решить проблему с отправкой формы
	}
});

});
// jQuery конец
