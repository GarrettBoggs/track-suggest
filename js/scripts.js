var javaPoints = 0;
var cPoints = 0;
var rubyPoints = 0;
var phpPoints = 0;
var result = "";
var image= "";

var questionOne = function(build) //First Question Logic
{
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
    rubyPoints += 1;
  }
  else // all
  {
    javaPoints += 1;
  }

  return;
}

var questionTwo = function(company) //Second Question Logic
{
  if(company == "small")
  {
    rubyPoints += 1;
  }
  else
  {
    javaPoints += 1;
    cPoints += 1;
    rubyPoints += 1;
  }

  return;
}

var questThree = function(code) //Third Question Logic
{
  if(code == "drupal")
  {
    phpPoints += 1;
  }
  else if(code == "net")
  {
    cPoints += 1;
  }
  else if(code == "rails")
  {
    rubyPoints += 1;
  }
  else // android
  {
    javaPoints += 1;
  }

  return;
}

var calculate = function(javaPoints, phpPoints, cPoints, rubyPoints) //calculate logic
{
  if((javaPoints > phpPoints) && (javaPoints > cPoints) && (javaPoints > rubyPoints))
  {
    result="Java/Android";
    image = '<img src="./img/java.png" alt="picture of the java icon">';
  }
  else if((phpPoints > cPoints) && (phpPoints > rubyPoints))
  {
    result="PHP/Drupal";
    image = '<img src="./img/php.png" alt="picture of the php elephant">';
  }
  else if(cPoints > rubyPoints)
  {
    result="C#/.Net";
    image = '<img src="./img/csharp.png" alt="picture of the C# logo">';
  }
  else //Ruby
  {
    result="Ruby/Rails";
    image = '<img src="./img/ruby.png" alt="picture of ruby">';
  }
  return;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var build = $("input:radio[name=build]:checked").val();
    var company = $("#company").val();
    var code = $("input:radio[name=code]:checked").val();
    var name = $("input#name1").val();

    $("#warning").remove();
    $("#img").remove();

    javaPoints = 0;
    cPoints = 0;
    rubyPoints = 0;
    phpPoints = 0;
    //First Question Call
    questionOne(build);
    //Second Question Logic
    questionTwo(company);
    //Third Question Logic
    questThree(code);
    //Output Logic;
    calculate(javaPoints, phpPoints, cPoints, rubyPoints);

    if(name == "")
    {
      $("#warn").append('<div id="warning">' + "Please enter your name!" + '</div>');
    }
    else
    {
      $(".track").text(result);
      $(".name1Input").text(name);
      $(".image").append('<div id="img">' + image);
      $("#output").fadeIn();
    }

    event.preventDefault();
  });
});
