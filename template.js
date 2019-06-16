
	'use strict';

var pattern = function pattern(item) {
	var str = item.primaryImageUrl;
	var newStr = str.substring(0, str.length - 4);
	var ModImg = 'http:' + newStr + '_220x220_1.jpg';


