
var bordebg = ["at_bmo", "at_finn", "at_jake", "at_flameprincess", "at_iceking", "at_ladyunicorn", "at_lsp", "at_marceline",
"at_princessbubblegum","at_slimeprincess", "at_snail","at_thelich"]



$(document).ready(function(){
  var rnd = Math.floor(Math.random() * bordebg.length);

  function bodyborder(elem, nme){
    elem.css("background", "url(" + nme + ".png)");
    elem.css("background-size", "40px 40px");
  }

  bodyborder($("#left"),bordebg[rnd]);
  bodyborder($("#right"),bordebg[rnd]);
  bodyborder($("#top"),bordebg[rnd]);
  bodyborder($("#bottom"),bordebg[rnd]);
});

$(document).on('change', '.slider', function() {
    $("#good").fadeTo("slow", 1 - $('.slider').val()/10 * 0.1);
    $("#bad").fadeTo("slow", $('.slider').val()/10 * 0.1);
});

$(document).on('click', '#mood', function() {
  $("#loadimg").css("display", "none");
  $("#moodshow").attr("src", "pics/lvl" + (Math.floor($('.slider').val()/10) + 1) +".gif");
  $("#loadimg").fadeIn("slow");
  if ((Math.floor($('.slider').val()/10) + 1) === 6) {
    var audio = new Audio('sound.mp3');
    audio.play();
  }
});
