$(document).ready(function() {
  $("#survey").submit(function(event) {
    alert("hi");
    var why = $("input:radio[name=why]:checked").val();
    var frontOrBack = $("input:radio[name=frontOrBack]:checked").val();
    alert(why);
    alert(frontOrBack);


  event.preventDefault();
  });
});
