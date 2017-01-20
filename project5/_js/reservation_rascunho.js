$(document).ready(function(){

  document.getElementById('travel_info').addEventListener('submit', checkReservation);

  function checkReservation(event){
    event.preventDefault();

    var arrivalDate = $("#txtStartDate").datepicker('getDate'),
        departureDate = $("#txtEndDate").datepicker('getDate'),
        adults = document.getElementById('selectAdults').value,
        children = document.getElementById('selectChildren').value,
        typeRoom = document.getElementById('selectRoom').value,
        priceRoom;


    if(typeRoom === '-- Select a room --'){
      alert('Please choose your room.');

      document.getElementById('selectRoom').focus();
    }
    if(arrivalDate == null || departureDate == null){
      alert('Please choose valid dates.');
    }

/*
    switch(typeRoom){
      case 'Van Gogh':
        priceRoom = 250;
        break;
      case 'Picasso':
        priceRoom = 200;
        break;
      case 'Monet':
        priceRoom = 300;
        break;
      case 'Michelangelo':
        priceRoom = 280;
        break;
      case 'Da Vinci':
        priceRoom = 320;
        break;
    }
*/

    
    function calculatePriceRoom() {
      var startDateTime = $("#txtStartDate").datepicker('getDate').getTime(),
          endDateTime = $("#txtEndDate").datepicker('getDate').getTime(),
          miliseconds = 24*60*60*1000,
          diffDays = Math.round(Math.abs((startDateTime - endDateTime)/(miliseconds)));
        
          //alert(diffDays); //show difference
      var date = $("#txtStartDate").datepicker('getDate'),
          dayOfWeek = date.getUTCDay(),
          priceRoom = 0;

          //alert(dayOfWeek);

        for (var i=0; i < diffDays; i++){
          //alert(dayOfWeek);
          if (dayOfWeek == 0 || dayOfWeek == 6){ //Sunday or Saturday
            priceRoom = priceRoom + 200; //weekend
          }
          else {
            priceRoom = priceRoom + 100; //weekday
          }
          dayOfWeek = (dayOfWeek + 1) % 7;
        }
        //alert(priceRoom);
    }
    //days();
    //calculatePriceRoom();

  

/*  
    function isWeekend(diffDays){
      var date = $("#txtStartDate").datepicker('getDate'),
          dayOfWeek = date.getUTCDay(),
          priceDay;

      for (i=0, i < diffDays, i++){
        if(dayOfWeek != 0 && dayOfWeek != 6) { // not weekend
          priceDay = priceDay + 100;
        }
        else {
          priceDay = priceDay + 100; 
        }
      }

      alert(priceDay);
    }
    isWeekend();
*/
    
      //document.getElementById('reservation_info').innerHTML = priceRoom;
   // $("#reservation_info").HTML(typeRoom);

   };
    
 });