
$(function(){
   	// conexão do serviço
	var socket = io.connect('http://localhost:3000')

	// variaes criadas - butões
	var message = $("#message")
	var username = $("#username")
	var send_message = $("#send_message")
	var send_username = $("#send_username")
	var chatroom = $("#chatroom")
	var feedback = $("#feedback")
	// var NgModule = $("NgModule")
	// var CommonModule = $("CommonModule")
	// var IonicModule = $("IonicModule")
	// var FormsModule = $("FormsModule")
	// var RouterModule = $("RouterModule")

	//Emite a mensagem
	send_message.click(function(){
		socket.emit('new_message', {message : message.val()})
	})

	//Lista a menssagem que o usuario está enviado.
	socket.on("new_message", (data) => {
		feedback.html('');
		message.val('');
		chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
	})

	//Emiti o usuario ou informar o usuario
	send_username.click(function(){
		socket.emit('change_username', {username : username.val()})
	})

	// pressionar enter
	message.bind("keypress", () => {
		socket.emit('typing')
	})

	// informar quem vai manda a mensagem no chat app
	socket.on('typing', (data) => {
		feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
	
	})


	


});


