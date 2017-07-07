$(document).ready(function() {
  $("#survey").submit(function(event) {
    alert("hi");
    var answer_why = $("input:checked").val();


  event.preventDefault();
  });
});
