// function changeParagraph() {
//     var el = document.getElementById('p1');
//     el.innerText = 'baz';
// }
// function changeParagraph() {
//     var els = document.querySelector('.changable-paragraph'); // maina visiem p
//     console.log(els);
//     for (var i = 0; i < els.length; i++) {
//         var el = els[i];
//     }
//     // el.innerText = 'baz';
// }
// $('#btn1').click(function(){
//     var $el = $('.changable-paragraph');
//     $el.text('baz');
//     $el.css('color', 'red');
// });

// document.querySelector('#btn1').addEventListener('click', function(){
//     var els = document.querySelectorAll('.changable-paragraph'); // maina visiem p
//     console.log(els);
//     for (var i = 0; i < els.length; i++) {
//         var el = els[i];
//         el.innerText = 'baz';
//         el.style.color = 'red';
//     }
    
// });

// $('#btn1').hover(function(){
//     $('#p2').hide(1000, function(){
//         // $(this).show(2000);
//     });
// }, function(){
//     $('#p2').show(1000, function(){
//         // $(this).show(2000);
//     });
// });

// $( function() {
//     $( "#draggable" ).draggable();
//     $( "#droppable" ).droppable({
//       drop: function( event, ui ) {
//         $( this )
//           .addClass( "ui-state-highlight" )
//           .find( "p" )
//             .html( "Dropped!" );
//       }
//     });
//   } );