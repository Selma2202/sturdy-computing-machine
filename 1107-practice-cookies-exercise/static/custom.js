// console.log("hello world")

// $(document).ready(function() {
// 	console.log("DOM Loaded")
// 	setTimeout(function(){
// 		$ ('#jqueryContainer').html( '<h1>I AM JQUERY')
// 	}, 3000)
// })

// $(document).ready(function(){
// 	Cookies.set('visited', 'true');
// })

$(document).ready(function(){
	if ((Cookies.get('visited')) === undefined) {
		Cookies.set('visited', 'true');
		$ ('#jqueryContainer').html( '<h1>WELCOME')
	} else {
		$ ('#jqueryContainer').html( '<h1>WELCOME BACK!!')
	}
})