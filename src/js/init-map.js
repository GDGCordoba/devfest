$( document ).ready( () => {
    initMap();
});

$( window ).resize( () => {
    if( $( "#mobile_cheat" ).css( 'display' ) != 'none' ) {
        initMap();
    }
});

function initMap() {
    var map = new google.maps.Map( document.getElementById( "map" ), {
        center: { lat: 37.8877385, lng: -4.7865236 },
        zoom: 17,
        disableDefaultUI: true,
        zoomControl: false,
        draggable: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        keyboardShortcuts: false,
        panControl: false,
        clear: false,
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            },
            {
                featureType: "transit",
                stylers: [{
                    visibility: "off"
                }]
            }
        ]
    });

    var info = new google.maps.InfoWindow({
        content:"<div style='width:250px; margin-top: 5px;'>" +
                    "<h5 class='grey-text text-darken-3'><strong>coSfera Córdoba</strong></h5>" +
                "</div>" +
                "<div>" +
                    "<div class='grey-text text-darken-3' style='font-size: 1.2em; line-height: 1.3em; margin-top: 10px;'>" +
                        "Av. de Cervantes, 6, 14008<br/>" +
                        "Córdoba, Córdoba, España" +
                    "</div>" +
                    "<p class='grey-text text-darken-3' style='font-size: 1.2em; line-height: 1.3em; margin-top: 10px;'>" +
                        "957 21 80 00<br/>" +
                        "<a href='https://cosfera.es' target='_blank'>cosfera.es</a>" +
                    "</p>" +
                "</div>"
    });

    var marker = new google.maps.Marker({
        position: { lat: 37.8877385, lng: -4.7865236 },
        map: map
    });

    marker.addListener( "click", function( e ) {
        info.open( map, marker );
    });

    info.open( map, marker );
}
