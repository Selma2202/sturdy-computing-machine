$(document).ready(function(){	
	var lasttime = Date.now() - 300

	$('#searchForm').keyup(function(){
		//console.log(Date.now())//logs every keypress
		if (Date.now() - lasttime >= 300) {
			postFunctie()
			lasttime = Date.now()
			//console.log(lasttime + "aaaaa")//logs only every 300ms
		}

		function postFunctie (){
			$.post('/ajax1', {userInput: $('input#searchbar').val()}, function(data, status){

				$(resultsHere).empty()
				$(dropdown).empty()
				if (status == 'success') {					

					for (var i = 0; i < data.length; i++) {
						$( "#resultsHere" ).append( data[i].firstName + " " + data[i].lastName + ": " + data[i].email + "<br>"  );
					};
					for (var i = 0; i < data.length; i++) {
						$( "#dropdown" ).append( '<option>' + data[i].firstName + " " + data[i].lastName + ": " + data[i].email); 
					}
				}		
			})
		}
	})
})

//de data die het inneemt: de jquery versie van wat er in de zoekbar getypt wordt
// de data die het naar app.js stuurt: de waarde van wat er in de zoekbar getypt wordt
// de data die het terugkrijgt: All good, (res.send vanuit de app.js)
