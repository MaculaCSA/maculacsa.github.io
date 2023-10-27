//importar jquery
import $ from 'jquery';

const carga = function(){
    //esperar 6 segundos
    setTimeout(function(){
            //handleScroll();
            $('#mainNav').removeClass('invisible');
            $('body').removeClass('hidden');
            $('#carga').fadeOut();
    }
    , 6000);
    
  }

export default carga;