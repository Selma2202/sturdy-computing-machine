$(document).ready(function(){	
	var lasttime = Date.now() - 300 //for the first time, lasttime needs to be defined (outside of the keyupfunction.)

	$('#searchForm').keyup(function(){
		//console.log(Date.now())//logs every keypress
		if (Date.now() - lasttime >= 300) {
			postFunctie()
			lasttime = Date.now()
			//logs only every 300ms
		}

		function postFunctie (){
			$.post('/ajax1', {userInput: $('input#searchbar').val()}, function(data, status){

				//resets results when pushing a key so the process can start again
				$(resultsHere).empty()
				$(dropdown).empty()

				if (status == 'success') {					
					//posts results to the resultsHere section of html
					for (var i = 0; i < data.length; i++) {
						$( "#resultsHere" ).append( data[i].firstName + " " + data[i].lastName + ": " + data[i].email + "<br>"  );
					};
					//posts results into a dropdown menu in the html.
					for (var i = 0; i < data.length; i++) {
						$( "#dropdown" ).append( '<option>' + data[i].firstName + " " + data[i].lastName + ": " + data[i].email); 
					}
				}		
			})
		}

	})

})