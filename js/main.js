"use strict";
// Draws and styles the map.
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
        // Centers to the lower 48 US states
        center: new google.maps.LatLng(41, -97),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);
    //Associates the styled map with the MapTypeId and set it to display. 
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    //Array of location and other data.
    var locations = [
      ['Mt. Everest', 27.9880556, 86.9252778, 4],
      ['Mt. McKinley (Denali)', 63.0694444, -151.0077778, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    //Draws markers and displays data on mouse click.
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        var icon = {
            url: 'img/mountainIcon.png',
            scaledSize: new google.maps.Size(locations[i][3] * 10, locations[i][3] * 10), // scaled size
        };

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            animation: google.maps.Animation.DROP,
            icon: icon
        });

        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}