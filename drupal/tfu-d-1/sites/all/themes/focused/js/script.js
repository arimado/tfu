var $ob = jQuery.noConflict();  

$ob(document).ready(function(){
             $ob('#vid').videoBG({
                mp4:'sunrise.mp4',
                ogv:'sunrise.ogv',
                webm:'sunrise.webm',
                poster:'sunrise.png',
                height: '100%',
                width: '100%',
                scale:true,
                zIndex: -20
            }); 

            $ob(".trailer").fitVids();



});