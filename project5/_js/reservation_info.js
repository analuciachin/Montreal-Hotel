$(document).ready(function(){

  document.getElementById('travel_info').addEventListener('submit', checkReservation);

  function checkReservation(event){
    event.preventDefault();

    var arrivalDate = $("#txtStartDate").datepicker('getDate'),
        departureDate = $("#txtEndDate").datepicker('getDate'),
        adults = document.getElementById('selectAdults').value,
        children = document.getElementById('selectChildren').value,
        typeRoom = document.getElementById('selectRoom').value,
        priceRoom,
        priceAdults,
        priceChildren,
        priceTypeRoom;


    if(typeRoom === '-- Select a room --'){
      alert('Please choose your room.');

      document.getElementById('selectRoom').focus();
    }
    if(arrivalDate == null || departureDate == null){
      alert('Please choose valid dates.');
    }


    switch(typeRoom){
      case 'Van Gogh':
        priceTypeRoom = 200;
        break;
      case 'Picasso':
        priceTypeRoom = 250;
        break;
      case 'Monet':
        priceTypeRoom = 280;
        break;
      case 'Michelangelo':
        priceTypeRoom = 300;
        break;
      case 'Da Vinci':
        priceTypeRoom = 320;
        break;
    }

    switch(adults){
      case '1':
      case '2':
        priceAdults = 100;
        break;
      case '3':
      case '4':
        priceAdults = 200;
        break;
      case '5':
        priceAdults = 250;
        break;
    }

    switch(children){
      case '3':
        priceChildren = 50;
        break;
      case '4':
        priceChildren = 100;
        break;
      case '5':
        priceChildren = 150;
        break;
      default:
        priceChildren = 0;
        break;
    }

    // calculate de price room based in number of adults, children, 
    // type of the room and length of the stay
    var startDateTime = $("#txtStartDate").datepicker('getDate').getTime(),
        endDateTime = $("#txtEndDate").datepicker('getDate').getTime(),
        miliseconds = 24*60*60*1000,
        diffDays = Math.round(Math.abs((startDateTime - endDateTime)/(miliseconds)));
        
    var date = $("#txtStartDate").datepicker('getDate'),
        dayOfWeek = date.getUTCDay(),
        priceRoom = 0;

    for (var i=0; i < diffDays; i++){
      if (dayOfWeek == 0 || dayOfWeek == 6){ //Sunday or Saturday
        priceRoom = priceRoom + 200; //weekend
      }
      else {
        priceRoom = priceRoom + 100; //weekday
      }
        dayOfWeek = (dayOfWeek + 1) % 7;
      }  
    finalPriceRoom = priceRoom + priceTypeRoom + priceAdults + priceChildren;

    var checkinDate = $("#txtStartDate").datepicker({ dateFormat: 'yyyy-mm-dd' }).val();
    var checkoutDate = $("#txtEndDate").datepicker({ dateFormat: 'yyyy-mm-dd' }).val();

    document.getElementById('reservation_info').innerHTML = 
        'The room is available for the period chosen!<br>';
    document.getElementById('reservation_info').innerHTML += 
        'Information about your stay.<br>';
    document.getElementById('reservation_info').innerHTML += 
        'Check-in: ' + checkinDate + '<br>';
    document.getElementById('reservation_info').innerHTML += 
        'Check-out: ' + checkoutDate + '<br>';
    document.getElementById('reservation_info').innerHTML +=
        'Number of adults: ' + adults + '<br>';
    document.getElementById('reservation_info').innerHTML +=
        'Number of children: ' + children + '<br>';
    document.getElementById('reservation_info').innerHTML +=
        'Your room: ' + typeRoom + '<br>';
    document.getElementById('reservation_info').innerHTML +=
      'Price: $' + finalPriceRoom.toFixed(2);

   };
    
 });