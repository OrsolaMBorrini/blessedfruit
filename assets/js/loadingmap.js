
fetch("italy-with-regions_1458.geojson")
.then(response => response.json())
.then(json => console.log(json));
// create a new map object and set the center and zoom level
var map = L.map('map').setView([41.8719, 12.5674], 5);

// add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(map);

// create a new feature group to hold the regions
var regions = L.featureGroup().addTo(map);

// add the regions as polygons to the feature group


$.getJSON("italy-with-regions_1458.geojson", function(data) {
    var regions = L.geoJSON(data, {
        style: function(feature) {
            return {color: "blue", weight: 1, fillOpacity: 0.2};
        },
        onEachFeature: function(feature, layer) {
            layer.bindPopup(feature.properties.name);
        }
    }).addTo(map);
});


// zoom the map to the bounds of the regions
map.fitBounds(regions.getBounds());