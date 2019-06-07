console.log(window); // brauzera objekts, raksta konsolee, kur 
// var redzet JS kodu (dev tools)
console.log(document);// otrs ir Document, kurs raada visu HTML kodu.
// DOM (Document Object Model) ir tas, kad JS redz HTML kodu.

// function changeParagraph() {
//     var el = document.getElementById('p1');
//     el.innerText = 'baz';
// }
// innerText ir tikai teksts
// innerHTML ir ari tagi

//     function changeParagraph() {
// vairs nav vajadziga

//     }
// jaliek # prieksa, ja pec ID,
// jo var likt, ka izvelas pec jebkaa.

// $ ir tas pats, kas document.querrySelector (jQuery)
// on ir tas pats, kas addEventListener (jQuery)


// document.querySelector('#btn1').addEventListener('click', function() {
//     var els = document.querySelectorAll('.changable');
//     for (var i = 0; i < els.length; i++) {
//         var el = els[i];
//         el.innerText = 'sveiki';
//         el.style.color = 'red';
//         el.style.fontSize = '20px'; 
//     }
// });

$('#btn1').click(function () {
    var $elem = $('.changable');
    $elem.text('sveiki');
    $elem.css({ 'color': 'red', 'font-size': '20px' });
});

jQuery('#btn2').hover(function () {// ja izmanto MooTools (JS framework), tad raksta jQuery, nevis $
    $('#p2').hide(1000);

}, function () {
    $('#p2').show(1000);
});