
$(document).ready(function(){

	$("#txtStartDate").datepicker({
  		minDate: 0,
		  maxDate: "+6M",
  		numberOfMonths:3,
  		dateFormat: 'yy-mm-dd',
  		onSelect: function(dateText, inst){
    		$("#txtEndDate").datepicker("option","minDate",
    		$("#txtStartDate").datepicker("getDate"));
  		}
	});

	$("#txtEndDate").datepicker({
		numberOfMonths:3, 
    	dateFormat: 'yy-mm-dd'
    	//changeMonth: true
	});

});