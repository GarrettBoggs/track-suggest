var javaPoints = 0;
var cPoints = 0;
var RubyPoints = 0;
var phpPoints = 0;
var result = "";

$(document).ready(function() {
  $("form").submit(function(event) {
    var build = $("input:radio[name=build]:checked").val();


    if(build == "content")
    {
      phpPoints += 1;
    }
    else if(build == "games")
    {
      cPoints += 1;
    }
    else if(build == "apps")
    {
      RubyPoints += 1;
    }
    else // all
    {
      javaPoints += 1;
    }


    if((javaPoints > phpPoints) && (javaPoints > cPoints) && (javaPoints > RubyPoints))
    {
      result="Java!";
    }
    else if((javaPoints > phpPoints) && (javaPoints > cPoints) && (javaPoints > RubyPoints))
    {
      result="Php"
    }
    alert(phpPoints);

    $(".track").text(result);

    $("#output").show();

    event.preventDefault();
  });
});
