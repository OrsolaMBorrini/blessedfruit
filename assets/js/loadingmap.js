//
// // fetch("italy-with-regions_1458.geojson")
// // .then(response => response.json())
// // .then(json => console.log(json));
// // create a new map object and set the center and zoom level
// var map = L.map('map').setView([41.8719, 12.5674], 5);
//
// // add a tile layer to the map
// var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
//
// // add our js file containg a variable of the geojson coordinates
// var geojson = L.geoJson(italy_regions, {
//     style: function (feature) {
//         return {
//             fillColor: getColor(feature.properties.density),
//             weight: 2,
//             opacity: 1,
//             color: 'white',
//             dashArray: '3',
//             fillOpacity: 0.7
//         };
//     },
//     onEachFeature: function (feature, layer) {
//         layer.bindPopup(feature.properties.name);
//     }
// }).addTo(map);
// L.geoJson(italy_regions).addTo(map);
//
// function getColor(d) {
//     return d > 2     ? '#800026' :
//            d > 4     ? '#BD0026' :
//            d > 6     ? '#E31A1C' :
//            d > 8     ? '#FC4E2A' :
//            d > 10    ? '#FD8D3C' :
//            d > 12    ? '#FEB24C' :
//            d > 14    ? '#FED976' :
//                        '#FFEDA0';
// }
//
//
// function style(features) {
//     return {
//         fillColor: getColor(features.properties.value),
//         weight: 2,
//         opacity: 1,
//         color: 'white',
//         dashArray: '6',
//         fillOpacity: 0.7
//     };
// }
//
// L.geoJson(italy_regions, {style: style}).addTo(map);
// // zoom the map to the bounds of the regions
// map.fitBounds(regions.getBounds());


// Create a new instance of the map
    var map = L.map('map').setView([42.5, 12.5], 6);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    //Add legend
    // Create a new container for the legend
    var legend = L.control({ position: "bottomright" });

    // When the layer is added to the map
    // When the layer is added to the map
    legend.onAdd = function() {

      var div = L.DomUtil.create("div", "legend");
      div.className += "legend-item";
      // Add the legend items and their corresponding colors
      div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #FFE6CB;'></div> <div class='legend-text'>Less than 3</div></div>";
      div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #BD0026;'></div> <div class='legend-text'>Less than 6</div></div>";
      div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #D7BB9F;'></div> <div class='legend-text'>Less than 8</div></div>";
      div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #CB895E;'></div> <div class='legend-text'>Less than 9</div></div>";
      div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #BC4418;'></div> <div class='legend-text'>Less than 12</div></div>";
      div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #8D2A07;'></div> <div class='legend-text'>Less than 14</div></div>";
      div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #580000;'></div> <div class='legend-text'>Less than 16</div></div>";

      return div;
    }
    legend.addTo(map);



  // // GetColor function  //
      function getColor(value) {
          return value < 3     ? '#FFE6CB' :
                 value < 6     ? '#BD0026' :
                 value < 8     ? '#D7BB9F' :
                 value < 9    ? '#CB895E' :
                 value < 12    ? '#BC4418' :
                 value < 14    ? '#8D2A07' :
                 value < 16    ? '#580000' :
                             '#580000';
      }


  // Fetch the GeoJSON data
  fetch("visualisations/maps/EL_17.geojson")
    .then(function(response) {
      return response.json();
    })
    .then(function(italianRegions) {
      // Add ourgeojson file to the map, style with colors according to the value property
      var geojson = L.geoJson(italianRegions, {
        style: function(feature) {
          return {
            fillColor: getColor(feature.properties.value),
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: 0.7
          };
        },
        onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.name + " - " + feature.properties.value.toString());
        }
      }).addTo(map);
    });


//
// // MD1_17
//
// var map_MD1_17 = L.map('map1_17').setView([42.5, 12.5], 6);
//
// // Add a tile layer to the map
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map_MD1_17);
//
//
// //Add legend
// // Create a new container for the legend
// var legend = L.control({ position: "bottomright" });
//
// // When the layer is added to the map
// // When the layer is added to the map
// legend.onAdd = function() {
//
//   var div = L.DomUtil.create("div", "legend");
//   div.className += "legend-item";
//   // Add the legend items and their corresponding colors
//   div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #FFE6CB;'></div> <div class='legend-text'>Less than 3</div></div>";
//   div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #BD0026;'></div> <div class='legend-text'>Less than 6</div></div>";
//   div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #D7BB9F;'></div> <div class='legend-text'>Less than 8</div></div>";
//   div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #CB895E;'></div> <div class='legend-text'>Less than 9</div></div>";
//   div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #BC4418;'></div> <div class='legend-text'>Less than 12</div></div>";
//   div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #8D2A07;'></div> <div class='legend-text'>Less than 14</div></div>";
//   div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #580000;'></div> <div class='legend-text'>Less than 16</div></div>";
//
//   return div;
// }
// legend.addTo(map_MD1_17);
//
//
//
// // // GetColor function  //
//   function getColor(value) {
//       return value < 10     ? '#FFE6CB' :
//              value < 14     ? '#BD0026' :
//              value < 18   ? '#D7BB9F' :
//              value < 22    ? '#CB895E' :
//              value < 26    ? '#BC4418' :
//              value < 28    ? '#8D2A07' :
//              value < 32    ? '#580000' :
//                          '#580000';
//   }
//
//
//
//
// // Fetch the GeoJSON data
// fetch("/Users/macuser/Desktop/openaccrepo/blessedfruit/visualisations/scripts/relig_obv.geojson")
// .then(function(response) {
//   return response.json();
// })
// .then(function(italian_rel) {
//   // Add ourgeojson file to the map, style with colors according to the value property
//   var geojson = L.geoJson(italian_rel, {
//     style: function(feature) {
//       return {
//         fillColor: getColor(feature.properties.relig_no),
//         weight: 2,
//         opacity: 1,
//         color: "white",
//         dashArray: "3",
//         fillOpacity: 0.7
//       };
//     },
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup(feature.properties.name + " - " + feature.properties.value.toString());
//     }
//   }).addTo(map_MD1_17);
// });
