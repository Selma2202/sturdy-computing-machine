// (function () {
//   var termTemplate = "<span class='ui-autocomplete-term'>$1</span>";

//   $(document).ready(function() {
//     $("#searchbar").autocomplete({
//       source: "/data",
//       minLength: 2,
//       open: function(e,ui) {
//             var acData = $(this).data('autocomplete');
//             acData
//                 .menu
//                 .element
//                 .find('a')
//                 .each(function() {
//                     var me = $(this);
//                     var regex = new RegExp( '(' + acData.term + ')', 'gi' );
//                     me.html( me.text().replace(regex, termTemplate) );
//                 });
//         }
//     });
//   });
// })();
// http://www.skalb.com/2013/04/23/server-side-auto-complete-using-nodejs/

// $( function() {
//     // function log( message ) {
//     //   $( "<div>" ).text( message ).prependTo( "#log" );
//     //   $( "#log" ).scrollTop( 0 );
//     // }
 
//     $( "#searchbar" ).autocomplete({
//       source: function( request, response ) {
//         $.ajax( {
//           url: "search",
//           dataType: "jsonp",
//           data: {
//             term: request.term
//           },
//           success: function( data ) {
//             response( data );
//           }
//         } );
//       },
//       minLength: 2,
//       select: function( event, ui ) {
//         log( "Selected: " + ui.item.value + " aka " + ui.item.id );
//       }
//     } );
//   } );




// $('#searchbar').autocomplete(options)
//https://www.devbridge.com/sourcery/components/jquery-autocomplete/