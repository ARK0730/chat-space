$(document).on('turbolinks:load', function(){
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="messages__message">
                  <div class="messages__message__talker">
                  ${message.user_name}
                  </div>
                  <div class="messages__message__date">
                  ${message.date}
                  </div>
                </div>
                <div class="lower-message">
                  <p class="lower-message__content">
                  ${content}
                  </p>
                  <img class="ower-message__image">
                  ${img}
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
      $('#message_content').val('');
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight})
    })
    .fail(function(){
      alert('投稿に失敗しました。');
    })
    .always(function(data){
      $('.submit-btn').prop('disabled', false);　//ここで解除している
    })
  })
})