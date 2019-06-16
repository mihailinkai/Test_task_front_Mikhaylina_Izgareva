'use strict';


//использоем метод map  чтобы получить данные из каталога

$('.product__area').html(catalog.map(function (item) {
    return pattern(item);
}).join(''));



