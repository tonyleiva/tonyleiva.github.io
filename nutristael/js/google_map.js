var google;

function init() {
    var myLatlng = new google.maps.LatLng(-29.916527, -50.682434);
    var mapOptions = {
        zoom: 10,
        center: myLatlng,
        fullscreenControl: false,
        scaleControl: true,
        scrollwheel: false,
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var addresses = ['Rua Barão do Amazonas, 1090 - Petrópolis, Porto Alegre', 'Av. Bento Gonçalves, 4119 - Partenon, Porto Alegre', 'R. Sepé, 2778, Capão da Canoa'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false&key=AIzaSyCGlvsa6CehN6URaJN6j-cMD2qAljgJ7Is', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                animation: google.maps.Animation.DROP,
            });
        });
    }
}
google.maps.event.addDomListener(window, 'load', init);