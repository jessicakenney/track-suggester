$(document).ready(function() {
  $("#survey").submit(function(event) {
    alert("hi");
    var why = $("input:radio[name=why]:checked").val();
    var frontOrBack = $("input:radio[name=frontOrBack]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var category = $("input:radio[name=category]:checked").val();
    var platform = $("input:radio[name=platform]:checked").val();
    alert(why);
    alert(frontOrBack);
    alert(size);
    alert(platform);

  event.preventDefault();
  });
});
