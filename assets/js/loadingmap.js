//PIES AND BROWSER MENU

  const regionLinks = document.querySelectorAll('.dropdown-menu a[data-value]');
  const yearButtons = document.querySelectorAll('input[type="radio"][data-value]');
  const pregnancyPie = document.getElementById('pregnancy-pie');

  regionLinks.forEach(link => {
    link.addEventListener('click', function() {
      // remove active class from other links
      regionLinks.forEach(l => l.classList.remove("active"))
      // add active class to selected link
      this.classList.add("active")
      // get selected year
      const selectedYear = document.querySelector('input[type="radio"].active[data-value]').getAttribute('data-value');
      // get selected region
      const selectedRegion = this.getAttribute('data-value');
      fetch(`assets/img/pregnancies_total/${selectedRegion}_${selectedYear}.html`)
        .then(response => response.text())
        .then(html => {
          pregnancyPie.innerHTML = html;
        });
    });
  });

  yearButtons.forEach(button => {
    button.addEventListener('change', function() {
      // remove active class from other buttons
      yearButtons.forEach(b => b.classList.remove("active"))
      // add active class to selected button
      this.classList.add("active")
      // get selected year
      const selectedYear = document.querySelector('input[type="radio"].active[data-value]').getAttribute('data-value');
      const selectedRegion = document.querySelector('a[data-value].active[data-parent="#region-dropdown"]').getAttribute('data-value');
      fetch(`assets/img/pregnancies_total/${selectedRegion}_${selectedYear}.html`)
        .then(response => response.text())
        .then(html => {
          pregnancyPie.innerHTML = html;
        });
    });
  });


// Create a new instance of the map
$(document).ready(function() {
    var map = L.map('map_17_rel').setView([42.5, 12.5], 6);


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
                 value < 6     ? '#faf0e6' :
                 value < 9     ? '#D7BB9F' :
                 value < 12   ? '#CB895E' :
                 value < 15    ? '#BC4418' :
                 value < 18    ? '#8D2A07' :
                 value < 21    ? '#580000' :
                             '#BC4418';
      }

      // Fetch the GeoJSON data
      fetch("visualisations/scripts/map_2017/pregnancy_religion_education_17.geojson")
        .then(function(response) {
          return response.json();
        })
        .then(function(italianRegions) {
          // Add our geojson file to the map, style with colors according to the value property
          var geojson = L.geoJson(italianRegions, {
            style: function(feature) {
              return {
                fillColor: getColor(feature.properties.pregnancy_total),
                weight: 2,
                opacity: 1,
                color: "white",
                dashArray: "2",
                fillOpacity: 0.7
              };
            },
            onEachFeature: function(feature, layer) {
              // Add the click event to the layer
              layer.on("click", function() {
                // Change the style of the clicked layer to make it slightly larger
                layer.setStyle({
                  weight: 5,
                  fillOpacity: 1
                });
                // Reset the style of all other layers to their original values
                geojson.eachLayer(function(otherLayer) {
                  if (otherLayer != layer) {
                    otherLayer.setStyle({
                      weight: 2,
                      fillOpacity: 0.7
                    });
                  }
                });
              });
              // Add the original popup content
              layer.bindPopup(feature.properties.name + " - " + feature.properties.pregnancy_total);
            }
          }).addTo(map);

          // Zoom the map to fit the GeoJSON data

           // Invalidate the map size to fix any issues with the map not displaying correctly
           $('.map-li').on('click', function() {
             map.invalidateSize();
          });
         });


        });
      // });



    //
    // var geojson = L.geoJson(italianRegions, {
    //   style: function(feature) {
    //     return {
    //       fillColor: getColor(feature.properties.value),
    //       weight: 2,
    //       opacity: 1,
    //       color: "white",
    //       dashArray: "3",
    //       fillOpacity: 0.7
    //     };
    //   },
    //   onEachFeature: function(feature, layer) {
    //     layer.on({
    //       mouseover: function(e) {
    //         map.fitBounds(e.target.getBounds());
    //       }
    //     });
    //     layer.bindPopup(feature.properties.name + " - " + feature.properties.value.toString());
    //   }
    // }).addTo(map);
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
