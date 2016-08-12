var javaPoints = 0;
var cPoints = 0;
var rubyPoints = 0;
var phpPoints = 0;
var result = "";

var questionOne = function(build){
  if(build == "content")
  {
    phpPoints += 1;
    return;
  }
  else if(build == "games")
  {
    cPoints += 1;
    return;
  }
  else if(build == "apps")
  {
    rubyPoints += 1;
    return;
  }
  else // all
  {
    javaPoints += 1;
    return;
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var build = $("input:radio[name=build]:checked").val();
    var company = $("#company").val();
    var code = $("input:radio[name=code]:checked").val();


    javaPoints = 0;
    cPoints = 0;
    rubyPoints = 0;
    phpPoints = 0;
    //First Question Logic

    questionOne(build);

    //Second Question Logic
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

    //Third Question Logic
    if(code == "drupal")
    {
      phpPoints += 1;
    }
    else if(build == "net")
    {
      cPoints += 1;
    }
    else if(build == "rails")
    {
      rubyPoints += 1;
    }
    else // android
    {
      javaPoints += 1;
    }

    //Output Logic;
    if((javaPoints > phpPoints) && (javaPoints > cPoints) && (javaPoints > rubyPoints))
    {
      result="Java!";
    }
    else if((phpPoints > cPoints) && (phpPoints > rubyPoints))
    {
      result="PHP"
    }
    else if(cPoints > rubyPoints)
    {
      result="C"
    }
    else //Ruby
    {
      result="Ruby"
    }

    $(".track").text(result);

    $("#output").show();

    event.preventDefault();
  });
});
