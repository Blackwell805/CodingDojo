$("#button1").click(function () {
    $("#button1").addClass("red-text");
})
$('#button2').click(function () {
    $('p').hide();
})
$('#button3').click(function () {
    $('p').show(function () {
    })
})
$('#button4').click(function () {
    var myText = $('#myParagraph').text()
    alert(myText);
})
$('#button5').click(function () {
    $('#myParagraph').text('Oh this is getting good!');
})
$('#button6').click(function () {
    $('#funny').toggle(function () {
    });
})
$('#button7').click(function () {
    $('#funny').slideUp(function () {
    });
})
$('#button8').click(function () {
    $('#funny').slideDown(function () {
    });
})
$('#button9').click(function () {
    $('#funny').fadeOut(function () {
    });
})
$('#button10').click(function () {
    $('#funny').fadeIn(function () {
    });
})
$('#button11').click(function () {
    $('#testing').before("<p>Well...</p>");


});