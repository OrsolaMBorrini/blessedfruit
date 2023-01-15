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


  //
  //   function getColor(value) {
  //       return value > 2     ? '#800026' :
  //              value > 4     ? '#BD0026' :
  //              value > 6     ? '#E31A1C' :
  //              value > 8     ? '#FC4E2A' :
  //              value > 10    ? '#FD8D3C' :
  //              value > 12    ? '#FEB24C' :
  //              value > 14    ? '#FED976' :
  //                          '#FFEDA0';
  //   }
  //
  //   // Add the GeoJSON file of Italian regions to the map
  //   fetch("visualisations/maps/EL_17.geojson")
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(italianRegions) {
  //   // Add the GeoJSON file to the map
  //   var geojson = L.geoJson(italianRegions, {
  //     style: function(feature) {
  //       return {
  //         fillColor: getColor(feature.properties.value),
  //         weight: 2,
  //         opacity: 1,
  //         color: "white",
  //         dashArray: "3",
  //         fillOpacity: 0.7
  //       };
  //     },
  //     onEachFeature: function(feature, layer) {
  //       layer.bindPopup(feature.properties.value);
  //     }
  //   }).addTo(map);
  // });

  // // Define the getColor function
  // function getColor(value) {
  //   if (value < 3) {
  //     return "green";
  //   } else if (value < 6) {
  //     return "yellow";
  //   } else if (value < 8) {
  //     return "orange";
  //   } else {
  //     return "red";
  //   }
  // }  //
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

    //
    //   function getColor(value){
    //   if (value < 10) {
    //     return "green";
    //   } else if (value < 20) {
    //     return "yellow";
    //   } else if (value < 50) {
    //     return "orange";
    //   } else if (value < 50) {
    //     return "orange";
    //   } else if (value < 50) {
    //     return "orange";
    //   } else if (value < 50) {
    //     return "orange";
    //   } else {
    //     return "red";
    //   }
    // }
    //   }
  // Fetch the GeoJSON data
  fetch("visualisations/maps/EL_17.geojson")
    .then(function(response) {
      return response.json();
    })
    .then(function(italianRegions) {
      // Add the GeoJSON file to the map
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
          layer.bindPopup(feature.properties.value.toString());
        }
      }).addTo(map);
    });
