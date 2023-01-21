
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
L.geoJSON(italianRegions, {
    style: function(feature) {
        return {
            color: '#ff0000',
            weight: 2,
            fillOpacity: 0.3
        };
    }
}).addTo(regions);

// zoom the map to the bounds of the regions
map.fitBounds(regions.getBounds());
