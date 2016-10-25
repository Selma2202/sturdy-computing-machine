$.get("/search", function(data, status) {
	//process data
	// the response will contain data that is present in the html
})


$.post ("/search", '#searchbar', function(data, status){
	//process data
	//data as an object

	//Is de 'data' de json file, of de letter die getypt is in het inputveld van het formulier met een id (#searchbar)? --> ik denk de json file, want die moet je echt oproepen, en is niet dynamisch. terwijl de letter telkens verandert, en die kun je keer op keer oproepen met #searchbar.
	// nee wacht ik denkk toch de letter, want dan pas wordt de functie getriggerd. de database roepen we daarna op met parsefile
	// - deze moet gecheckt worden of deze overeenkomt met de database
	// - om dat te checken, moet de database checkbaar worden, dus parsen
	// - het checken van de letters (nu nog letter enkelvoud) kan gedaan worden met een for loop, zoals in part 0 van de oefening
	// - elk resultaat (object) dat overeenkomt, moet in een leeg array gepusht worden. er moet dus een leeg array zijn.
	// - de resultaten die overeenkomen (een array vol objecten), moeten teruggestuurd worden. "How to render an array of objects in pug/jade"
	// - de teruggestuurde resultaten moeten zichtbaar zijn in de html
	// --> waar moet dit heengestuurd worden? het id zelf? "How to read ajax responses"
})

// bouwsteentje voor aanspreken input ID
$('#searchbar').text() //spreekt ID aan en zegt: ik wil de text hiervan hebben. Je kunt ook vragen om de css, of elements.
$('#searchbar').input() //betekent dit iets?