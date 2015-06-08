$(document).ready(function(){

	MyApp.Main.init();
    if($(".slider").length > 0){
        MyApp.banner.slider();
    }
});

var MyApp = {

    Main : {
        init : function() {
        }
    },
    banner : {
        slider : function() {
            $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true
            });
        }
    }
}