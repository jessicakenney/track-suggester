$(document).ready(function() {
  $("#survey").submit(function(event) {
    alert("Calculating your best fit");
  // Retrieve user input
    var why = $("input:radio[name=why]:checked").val();
    var frontOrBack = $("input:radio[name=frontOrBack]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var category = $("input:radio[name=category]:checked").val();
    var platform = $("input:radio[name=platform]:checked").val();

  // Add Text to Summary HTML
    $(".why").text(why);
    $(".frontOrBack").text(frontOrBack);
    $(".size").text(size);
    $(".category").text(category);
    $(".platform").text(platform);

  //Set booleans based on checked user input
    if (why === "skill") {
      var skill = 1;
    } else {
      var skill = 0;
    };
    if (why === "fun") {
      var fun = 1;
    } else {
      var fun = 0;
    };
    if (why === "startup") {
      var startup = 1;
    } else {
      var startup = 0;
    };
    if (why === "pro") {
      var pro = 1;
    } else {
      var pro = 0;
    };
    if (frontOrBack === "frontend") {
      var frontend = 1;
    } else {
      var frontend = 0;
    };
    if (frontOrBack === "backend") {
       var backend = 1;
    } else {
      var backend = 0;
    };
    if (size === "small") {
      var small = 1;
    } else {
      var small = 0;
     };
    if (size === "medium") {
      var medium = 1;
    } else {
      var medium = 0;
     };
    if (size === "large") {
      var large = 1;
    } else {
      var large = 0;
    };
    if (platform === "microsoft") {
      var microsoft = 1;
    } else {
      var microsoft = 0;
    };
    if (platform === "apple") {
      var apple = 1;
    } else {
      var apple = 0;
    };
    if (category === "mobile") {
      var mobile = 1;
    } else {
      var mobile = 0;
    };
    if (category === "website") {
      var website = 1;
    } else {
      var website = 0;
    };
    if (category === "game") {
      var game = 1;
    } else {
      var game = 0;
    };
    if (category === "dataAnal") {
      var dataAnal = 1;
    } else {
      var dataAnal = 0;
    };

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
