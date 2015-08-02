


$(document).ready(function(){
var princ = 0;
var intr = 0;
var rate = 0;
var cycle = 0;	
	
	
	$( ".princ" ).focus(function() {
  var princ = $( this ).val();
  console.log(princ);
});	
	$( ".princ" ).focusout(function() {
  var princ = $( this ).val();
  console.log(princ);
});
	$( ".intr" ).focus(function() {
  var intr = $( this ).val();
  console.log(intr);
});	
	$( ".intr" ).focusout(function() {
  var intr = $( this ).val();
  console.log(intr);
});
	$( ".rate" ).focus(function() {
  var rate = $( this ).val();
  console.log(rate);
});	
	$( ".rate" ).focusout(function() {
  var rate = $( this ).val();
  console.log(rate);
});

	$( ".cycle" ).focus(function() {
  function cycle(){
	var cycle = $( this ).val();
	//console.log(cycle)
  }
});
	$( ".cycle" ).focusout(function() {	
  function cyc(){
	var cycle = $( this ).val();
  //console.log(cycle)
  }
});


$("#button").click(function(event){
		event.preventDefault();
		$("<div>").append("Hello world!").appendTo("#append")	
	}); 


	
});



