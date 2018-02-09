
$( function() {
    $( "#tabs" ).tabs();
  } );

  $(document).ready(function(){

    $('#send-chat-message').click(function(){
        var username = $('#chat-username-input').val();
        var comment = $('#chat-message-input').val();


        var date = new Date('2017-12-24');
        var commentElement = $('<div class="chat-message">' +
            '<h4>' + username + '<em>' + date + '</em></h4>' +
            '<p>' +
            comment +
             '</p>' +
         '</div>');
        $('#chat-window').append(commentElement);
        $('#chat-message-input').val('');
    });
});
