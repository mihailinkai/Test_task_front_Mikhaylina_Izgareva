'use strict';


//использоем метод map  чтобы получить данные из каталога

$('.product__area').html(catalog.map(function (item) {
    return pattern(item);
}).join(''));





//по клику изменяем кол-во товара 


$(document).ready(function () {
	
//	по щелчку вниз
    $('.stepper-arrow.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        return false;
    });
  
//	по щелчку вверх
	  $('.stepper-arrow.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        return false;
    });

});