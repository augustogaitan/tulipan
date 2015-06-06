$(document).ready(function(){

	MyApp.Main.init();
    if($(".clase").length > 0){
        MyApp.seccion.modulo();
    }
});

var MyApp = {

    Main : {
        init : function() {
        }
    },
    seccion : {
        modulo : function() {
        }
    }
}