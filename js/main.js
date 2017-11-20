$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    var photoHTML = '';
    var employees = data.results;
      $.each(data.results, function(i, results){
        photoHTML += '<li>';
        photoHTML += '<img src="' + results.picture.large + '">';
        photoHTML += '<h3>' + results.name.first + ' ' + results.name.last + '</h3>';
        photoHTML += '<p>' + results.email + '</p>';
        photoHTML += '<p>' + results.login.username + '</p>';
        photoHTML += '<div></div>';
        photoHTML += '<p>' + results.phone + '</p>';
        photoHTML += '<p>' + results.location.street + " " + results.location.city + ", " + results.nat + " " + results.location.postcode + '</p>';
        photoHTML += '<p>' + 'Date of birthday: ' + results.dob + '</p>';
        // extra info end
        photoHTML += '<div class="box_c1"><img src="' + results.picture.large + '"></div>';
        photoHTML += '<div class="box_c1">';
        photoHTML += '<h3>' + results.name.first + ' ' + results.name.last + '</h3>';
        photoHTML += '<p>' + results.email + '</p>';
        photoHTML += '<p>' + results.location.city + '</p>';
        photoHTML += '</div>';
        photoHTML += '</li>';
      });
      $('#profile').html(photoHTML);
      $('li *').css('display', 'none');
      $('.box_c1 *').css('display', 'block');
      $('.box_c1').css('display', 'block');
      // modal click event
      $('li').click(function(){
        $('ul>div').remove();
        var current = $(this);
        var background = '';
        var modal = '';
        modal += '<div>' + $(current).html() + '</div>';
        background += '<span class="faded"></span>';
        $('#profile').append(modal);
        $('#profile').append(background);
        $('ul>div').css('display', 'flex');
        $('ul>div *').css('display', 'block');
        $('ul>div .box_c1').css('display', 'none');
        // modal close button
        $('ul>div, ul>span').click(function(){
          $('ul>div, ul>span').css('display', 'none');
        });
      });
  }
});
