// jshint devel:true
console.log('\'Allo \'Allo!');

$(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();

    });
    $('#botao1').click(function() {
        alert('Em Breve!');

    });
});
