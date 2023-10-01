window.onload = function(){
        //esperar 6 segundos
        setTimeout(function(){
                handleScroll();
                $('#mainNav').removeClass('invisible');
                $('body').removeClass('hidden');
                $('#carga').fadeOut();
        }
        , 6000);
        
}