var printWarning = function (target, message, index, interval){   
    if (index < message.length) {
        $(target).append(message[index++]);
        
    setTimeout(function () { printWarning(target, message, index, interval); }, interval);
    
    }
}

$('#clickme').on('click', function(){

$('.cardContainer').hide();

printWarning(".gameDisplay","Happy father's day Dad!", 0, 80);

$("#indicators").attr("display","show");

$("#clickme").hide();

})
