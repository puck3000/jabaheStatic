$(function() {  
   $("header").headroom();
});
// transformicons
!function(t,n){"function"==typeof define&&define.amd?define(n):t.transformicons=n()}(this||window,function(){"use strict";var t={},n="tcon-transform",r={transform:["click","touchstart"],revert:["click","touchstart"]},e=function(t){return"string"==typeof t?Array.prototype.slice.call(document.querySelectorAll(t)):"undefined"==typeof t||t instanceof Array?t:[t]},o=function(t){return"string"==typeof t?t.toLowerCase().split(" "):t},c=function(t,n,c){var f=(c?"remove":"add")+"EventListener",u=e(t),a=u.length,s={};for(var l in r)s[l]=n&&n[l]?o(n[l]):r[l];for(;a--;)for(var d in s)for(var v=s[d].length;v--;)u[a][f](s[d][v],i)},i=function(n){t.toggle(n.currentTarget)};return t.add=function(n,r){return c(n,r),t},t.remove=function(n,r){return c(n,r,!0),t},t.transform=function(r){return e(r).forEach(function(t){t.classList.add(n)}),t},t.revert=function(r){return e(r).forEach(function(t){t.classList.remove(n)}),t},t.toggle=function(r){return e(r).forEach(function(r){t[r.classList.contains(n)?"revert":"transform"](r)}),t},t});transformicons.add('.tcon');

$(function() {  
    $('#navToggle').click(function() {
    	$('nav').toggleClass('open');
    });

});