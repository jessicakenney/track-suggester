$(document).ready(function() {
  $("#survey").submit(function(event) {
    alert("hi");
    var why = $("input:radio[name=why]:checked").val();
    var frontOrBack = $("input:radio[name=frontOrBack]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var category = $("input:radio[name=category]:checked").val();
    var platform = $("input:radio[name=platform]:checked").val();
    // debug
    // alert(why);
    // alert(frontOrBack);
    // alert(size);
    // alert(platform);

    $(".why").text(why);
    $(".frontOrBack").text(frontOrBack);
    $("#summary").show();
    alert("calculating your best fit");
    // need to put branching here to calculatedefin suggestion
    var suggestRuby = 0;
    var suggestJava = 1;
    var suggestCSS = 0;
    if (suggestRuby) {
      $(".suggestRuby").show();
    } else if (suggestJava) {
      $(".suggestJava").show();
    } else if (suggestCSS) {
      $(".suggestCSS").show();
    }





  event.preventDefault();
  });
});
