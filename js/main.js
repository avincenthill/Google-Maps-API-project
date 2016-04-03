"use strict";

function initMap() {
    // Create an array of styles.
    var styles = [
        {
            "featureType": "administrative",
            "stylers": [
                {
                    "visibility": "off"
                }
    ]
  }, {
            "featureType": "landscape",
            "stylers": [
                {
                    "visibility": "off"
                }
    ]
  }, {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
                }
    ]
  }, {
            "featureType": "road",
            "stylers": [
                {
                    "visibility": "off"
                }
    ]
  }, {
            "featureType": "water",
            "stylers": [
                {
                    "lightness": -100
                }
    ]
  }, {
            "featureType": "transit",
            "stylers": [
                {
                    "visibility": "off"
                }
    ]
  }, {}
];

    // Creates a new StyledMapType object, passing it the array of styles, as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });

    // Creates a map object, and includes the MapTypeId to add to the map type control.
    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(41, -97),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);
    //Associates the styled map with the MapTypeId and set it to display. 
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}