  $('document').ready(function(){
            $('#event9text').text(localStorage.eventname);
            $('#event9date').text(localStorage.eventdate);
            $('#event9hour').text(localStorage.hour);
            $('#event9minute').text(localStorage.minute);
            
        });

        $( function() {
            $( "#startdate9" ).datepicker({ 
                changeMonth: true,
                changeYear: true
                });
          } );
        function saveEvents9(){
            var event9minute = $('#txteventname9').val();
            var event9date = $('#startdate9').val();
            var event9hour = $('#hour9').val();
            var event9minute = $('#minute9').val();

            localStorage.setItem('event9text',event9text);
            localStorage.setItem('event9date',event9date);
            localStorage.setItem('event9hour',event9hour);
            localStorage.setItem('event9minute',event9minute);
            console.log(eventname);
            console.log(startdate);
            location.reload();
        }