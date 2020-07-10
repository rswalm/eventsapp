function saveEvents9(){
    var event9text = $('#eventtext9').val();
    localStorage.setItem('event9text',event9text);
    console.log(event9text);
   
  }
function saveEvents10(){
    var event10text = $('#eventtext10').val();
    localStorage.setItem('event10text',event10text);
   
  }
function saveEvents11(){
    var event11text = $('#eventtext11').val();
    localStorage.setItem('event11text',event11text);
   
  }
function saveEvents12(){
    var event12text = $('#eventtext12').val();
    localStorage.setItem('event12text',event12text);
   
  }
function saveEvents1(){
    var event1text = $('#eventtext1').val();
    localStorage.setItem('event1text',event1text);
   
  }
function saveEvents2(){
    var event2text = $('#eventtext2').val();
    localStorage.setItem('event2text',event2text);
   
  }
function saveEvents3(){
    var event3text = $('#eventtext3').val();
    localStorage.setItem('event3text',event3text);
   
  }
function saveEvents4(){
    var event4text = $('#eventtext4').val();
    localStorage.setItem('event4text',event4text);
   
  }
function saveEvents5(){
    var event5text = $('#eventtext5').val();
    localStorage.setItem('event5text',event5text);
   
  }

  $('document').ready(function(){
    $('#event9text').text(localStorage.event9text);
    $('#event10text').text(localStorage.event10text);
    $('#event11text').text(localStorage.event11text);
    $('#event12text').text(localStorage.event12text);
    $('#event1text').text(localStorage.event1text);
    $('#event2text').text(localStorage.event2text);
    $('#event3text').text(localStorage.event3text);
    $('#event4text').text(localStorage.event4text);
    $('#event5text').text(localStorage.event5text);
    
 });