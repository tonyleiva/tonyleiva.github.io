;(function () {
	'use strict';

	var submitLogin = function() {
		$('#login').click(function(event) {
			event.preventDefault();
			$("#errolog").hide();
			var username=$('#username').val();	//Pega valor do campo email
			var password=$('#password').val();	//Pega valor do campo senha
			$.ajax({			//Função AJAX
				url:"/portal/aut/",			//Arquivo php
				type:"post",				//Método de envio
				data: "username="+username+"&password="+password,	//Dados
	   			success: function (result){			//Sucesso no AJAX
		   			if (result.error)
		   				errorLogin();		//Informa o erro
		   			else
						location.href='/portal/index/';	//Redireciona
	   			},
    			error: function () {
    				errorLogin();		//Informa o erro
        		}
			})
			return false;	//Evita que a página seja atualizada
		});
	};
	var errorLogin = function() {$("#errolog").show();};

	var recoverLogin = function() {
		//open canvas with email and button to confirm, send ajax email and show the confirmation message
	}

	$(function(){
		submitLogin();
		recoverLogin();
	});
}());