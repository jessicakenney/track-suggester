$(document).ready(function() {
  $("#survey").submit(function(event) {
    alert("hi");
    alert("calculating your best fit");
  // Retrieve user input
    var why = $("input:radio[name=why]:checked").val();
    var frontOrBack = $("input:radio[name=frontOrBack]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var category = $("input:radio[name=category]:checked").val();
    var platform = $("input:radio[name=platform]:checked").val();
  // debug
    alert(why);
  // alert(frontOrBack);
  // alert(size);
  // alert(platform);
  // Add Text to Summary HTML
    $(".why").text(why);
    $(".frontOrBack").text(frontOrBack);
    $(".size").text(size);
    $(".category").text(category);
    $(".platform").text(platform);

  //Initialize all the options to 0;
    var skill = 0;
    var fun = 0;
    var startup = 0;
    var pro = 0;
    var frontend = 0;
    var backend = 0;
    var small = 0;
    var medium = 0;
    var large = 0;
    var mobile = 0;
    var website = 0;
    var game = 0;
    var dataAnal = 0;
    var microsoft = 0;
    var apple = 0;

  //Set booleans for selected user input
    if (why === "skill") { skill = 1; };
    if (why === "fun") { fun = 1; };
    if (why === "startup") { startup = 1; };
    if (why === "pro") { pro = 1; };
    if (frontOrBack === "frontend") { frontend = 1; };
    if (frontOrBack === "backend") { backend = 1; };
    if (size === "small") { small = 1; };
    if (size === "medium") { medium = 1; };
    if (size === "large") { large = 1; };
    if (platform === "microsoft") { microsoft = 1; };
    if (platform === "apple") { apple = 1; };
    if (category === "mobile") { mobile = 1; };
    if (category === "website") { website = 1; };
    if (category === "game") { game = 1; };
    if (category === "dataAnal") { dataAnal = 1; };

//initialize
    var suggestRuby = 0;
    var suggestJava = 0;
    var suggestCsharp = 0;
    var suggestCSS = 0;

//Use selected booleans to determine suggestions
    if (frontend) {
      if (startup || website || small){
        suggestRuby = 1;
      } else {
        suggestCSS = 1;
      }
    };
    if (backend) {
      if (apple || pro || medium || large || mobile ){
        suggestJava = 1;
      }
      if (microsoft){
        suggestCsharp = 1;
    }
  };
    $("#summary").show();
    $("form").hide();
    
    if (suggestRuby) {
      $(".suggestRuby").show();
    } else if (suggestJava) {
      $(".suggestJava").show();
    } else if (suggestCsharp) {
      $(".suggestCsharp").show();
    } else if (suggestCsharp) {
      $(".suggestCsharp").show();
    } else {
      $(".default").show();
    };

  event.preventDefault();
  });
});
