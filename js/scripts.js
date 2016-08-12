$(document).ready(function() {
  $("form").submit(function(event) {
    var build = $("input:radio[name=build]:checked").val();
    


    $("#output").show();
    event.preventDefault();
  });
});
