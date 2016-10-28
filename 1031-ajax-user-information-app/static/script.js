$(document).ready(function(){	

		var lasttime = Date.now() - 300

	$('#searchForm').keyup(function(){

		console.log(Date.now())


		if (Date.now() - lasttime >= 300) {
			postFunctie()
			lasttime = Date.now()
			console.log(lasttime + "aaaaa")
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

	// }




// function canirun () {
// 	Boolean(Date.now > iRan + 299)
// }

// if (canirun()) {
// 	dostuff
// }



// - Use date.now
// - Store the date.now in a variable (var startTime), so the time doesn’t change in between: that is the starting time
// - So the function should not start executing until it is startTime + 300  (if?)
// - om dit elke 300ms te laten gebeuren, kun je het misschien in een for-loop stoppen. 
// - ook nog iets met true/false










//Basisdoc pre timeassignment. works.
// $(document).ready(function(){

// 	$('#searchForm').keyup(function(){
// 		$.post('/ajax1', {userInput: $('input#searchbar').val()}, function(data, status){

// 			$(resultsHere).empty()
// 			$(dropdown).empty()
// 			if (status == 'success') {
// 				//console.log (data)

// 				// let htmlArray = []

// 				for (var i = 0; i < data.length; i++) {
// 					$( "#resultsHere" ).append( data[i].firstName + " " + data[i].lastName + ": " + data[i].email + "<br>"  );

// 					// htmlArray.push(data[i].firstName + " " + data[i].lastName + ": " + data[i].email + "<br>" )
// 				};

// 				for (var i = 0; i < data.length; i++) {
// 					$( "#dropdown" ).append( '<option>' + data[i].firstName + " " + data[i].lastName + ": " + data[i].email); 

// 					// htmlArray.push(data[i].firstName + " " + data[i].lastName + ": " + data[i].email + "<br>" )
// 				};

// 				// $( "#resultsHere" ).text( htmlArray );

// 			}

// 		})
// 	})
// })










	// //setup before functions
	// var typingTimer = Date.now();                //timer identifier
	// var doneTypingInterval = Date.now() + 300;  //time in ms, 5 second for example
	// var $input = $('input#searchbar');

	// //on keyup, start the countdown
	// $input.on('keyup', function () {
	// 	clearTimeout(typingTimer);
	// 	typingTimer = setTimeout(doneTyping, doneTypingInterval);
	// });

	// var timeNowInMs = Date.now();
	// var time300MsLater = timeNowInMs + 300;
	// if Date.now() > time300MsLater




//de data die het inneemt: de jquery versie van wat er in de zoekbar getypt wordt
// de data die het naar app.js stuurt: de waarde van wat er in de zoekbar getypt wordt
// de data die het terugkrijgt: All good, (res.send vanuit de app.js)
// de d











// $.post ("/search", {send: 'data'}, function(data, status){
// 	//process data
// 	//data as an object

// 	//Is de 'data' de json file, of de letter die getypt is in het inputveld van het formulier met een id (#searchbar)? --> ik denk de json file, want die moet je echt oproepen, en is niet dynamisch. terwijl de letter telkens verandert, en die kun je keer op keer oproepen met #searchbar.
// 	// nee wacht ik denkk toch de letter, want dan pas wordt de functie getriggerd. de database roepen we daarna op met parsefile
// 	// nee wacht de data is wat gepost moet worden, dus alle info hieronder moet daar als parameter in?
// 	// - deze moet gecheckt worden of deze overeenkomt met de database
// 	// - om dat te checken, moet de database checkbaar worden, dus parsen

// 	var inputLetter = $('#searchbar').text()

// 	fs.readFile( __dirname + '/data.json', (error, data) => {
// 		if (error) throw error

// 			let resultArray = [];//empty array to fill with results matching the inputted letter, to return and display results in the browser.

// 		let parsedData = JSON.parse(data)


// 	// - het checken van de letters (nu nog letter enkelvoud) kan gedaan worden met een for loop, zoals in part 0 van de oefening
// 	// --> er moet een loop komen om systematisch en genummerd door de objecten te gaan (for loop)
// 	// --> voor elk objectnummer moet vervolgens gecheckt worden op de letter in de firstname (i.firstname) OF (||) in de lastname (i.lastname) voorkomt (for each in)
// 	// - elk resultaat (object) dat overeenkomt, moet in een leeg array gepusht worden. er moet dus een leeg array zijn.
// 	for (var i = 0; i < parsedData.length; i++) {

// 		if (([parsedData.i.firstname].indexOf(inputLetter) !== -1) || ([parsedData.i.lastname].indexOf(inputLetter) !== -1)) {
// 			//WANT: parsedData(alle objecten).i(nummervanhetobject).indexOf(inputletter)(checkt of de letter er in zit). Zo nee: dan is het -1. Als het antwoord dus NIET -1 is (en het maakt niet echt uit welk nummer het dan wel is), dan komt de letter er blijkbaar in voor, en mag het object i in de parsed data gepusht worden:
// 			resultArray.push(parsedData.i)
// 		}

// 	}


// 	// - de resultaten die overeenkomen (een array vol objecten), moeten teruggestuurd worden. "How to render an array of objects in pug/jade"
// 	// - de teruggestuurde resultaten moeten zichtbaar zijn in de html
// 	// --> waar moet dit heengestuurd worden? het id zelf? "How to read ajax responses"
// 	})
// })

// // bouwsteentje voor aanspreken input ID
// //$('#searchbar').text() //spreekt ID aan en zegt: ik wil de text hiervan hebben. Je kunt ook vragen om de css, of elements.
















