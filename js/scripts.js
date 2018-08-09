$(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();
    var input = $("select#animalSelector").val();
    if (input === "Turtles"){
      $('.Turtles').show();
      $('.Snakes').hide();
      $('.Insects').hide();
    } else if (input === "Snakes"){
      $('.Snakes').show();
      $('.Turtles').hide();
      $('.Insects').hide();
    } else {
      $('.Insects').show();
      $('.Turtles').hide();
      $('.Snakes').hide();
    }

  });
});
