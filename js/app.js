<<<<<<< HEAD
$(document).ready(function(){
var princ = 0;
var years = 0;
=======



$(document).ready(function(){
var princ = 0;
var intr = 0;
>>>>>>> 48488bcba7d55522d85978ec35467149c5abb41e
var rate = 0;
var cycle = 0;	
	
	
<<<<<<< HEAD
	$( "#principal" ).focus(function() {
  var princ = $( this ).val();
  console.log(princ);
});	
	$( "#principal" ).focusout(function() {
  var princ = $( this ).val();
  console.log(princ);
});
	$( "#years" ).focus(function() {
  var years = $( this ).val();
  console.log(years);
});	
	$( "#years" ).focusout(function() {
  var years = $( this ).val();
  console.log(years);
});
	$( "#int-rate" ).focus(function() {
  var rate = $( this ).val();
  console.log(rate);
});	
	$( "#int-rate" ).focusout(function() {
=======
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
>>>>>>> 48488bcba7d55522d85978ec35467149c5abb41e
  var rate = $( this ).val();
  console.log(rate);
});

<<<<<<< HEAD
	$( "#cycles" ).focus(function() {
	var cycle = $( this ).val();
	console.log(cycle)
});

	$( "#cycles" ).focusout(function() {	
	var cycle = $( this ).val();
  	console.log(cycle)
=======
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
>>>>>>> 48488bcba7d55522d85978ec35467149c5abb41e
});


$("#button").click(function(event){
		event.preventDefault();
<<<<<<< HEAD
		var $principal = parseFloat($("#principal").val());
		var $years = parseFloat($("#years").val());
		var $intrate = parseFloat(($("#int-rate").val())/100);
		var $cycles = parseFloat($("#cycles").val());
		//var $answer = $principal * (1 + $intrate/$cycles);
		var $ansfinal = parseInt(Math.pow($principal * (1 + $intrate/$cycles), ($cycles * $years)));
		$("<div>").append($ansfinal).appendTo('#append');
	}); 
$("#clear").click(function(event){
		event.preventDefault();
		$("#append").empty();

});

	
	

});
=======
		$("<div>").append("Hello world!").appendTo("#append")	
	}); 


	
});



>>>>>>> 48488bcba7d55522d85978ec35467149c5abb41e
