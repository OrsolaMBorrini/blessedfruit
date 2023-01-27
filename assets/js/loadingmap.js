//PIES AND BROWSER MENU


// 2017 DATA

// Create a new instance of the map for religion
$(document).ready(function() {

    var map_17_rel = L.map('map_17_rel').setView([42.5, 12.5], 5);


    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map_17_rel);

    //
    // //Add legend
    // // Create a new container for the legend

    var rel1= '#FFF2EB',
    rel2='#F1D0CC',
    rel3= '#F1D0CC',
    rel4= '#D68D8E',
    rel5= '#C86B6F',
    rel6= '#BB4A50',
    rel7='#ad2831',
    rel8='#7b0d1e',
    rel9= '#38040e';
    
    // var legend = L.control.legend({
    //     position: 'bottomright',
    //     legend: {
    //         values: [18, 20, 22, 24, 26, 28, 30, 32],
    //         labels: ['18 or less', '20 or less', '22 or less', '24 or less', '26 or less', '28 or less', '30 or less', '32 or less'],
    //         colors: [rel1, rel2, rel3, rel4, rel5, rel6, rel7, rel8, rel9]
    //     }
    // });
    // legend.addTo(map_17_rel);

    // LIGHT TO dark


    //
    // // When the layer is added to the map
    // // When the layer is added to the map
    // legend.onAdd = function() {
    // //
    //   var div = L.DomUtil.create("div", "legend");
    //   div.className += "legend-item";
    //   // Add the legend items and their corresponding colors
    //   div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #FFE6CB;'></div> <div class='legend-text'>Religious observance %</div></div>";
    //   div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #BD0026;'></div> <div class='legend-text'>Age-group: 18-24</div></div>";
    //
    //   return div;
    // }
    // legend.addTo(map_17_rel);
    //
    // var legend = L.control.legend({
    //     position: 'bottomright',
    //     legend: {
    //         values: [18, 20, 22, 24, 26, 28, 30, 32],
    //         labels: ['18 or less', '20 or less', '22 or less', '24 or less', '26 or less', '28 or less', '30 or less', '32 or less'],
    //         colors: [rel1, rel2, rel3, rel4, rel5, rel6, rel7, rel8, rel9]
    //     }
    // });
    // legend.addTo(map_17_rel);

  // // GetColor function RELIGION  //

              // Hex	RGB CHERRY
              // #e5bbbb	(229,187,187)
              // #df9f9f	(223,159,159)
              // #ce7676	(206,118,118)
              // #b85a5a	(184,90,90)
              // #9a3e3e	(154,62,62)





      function getColor(value) {
          return value < 18    ? rel1 :
                 value < 20    ? rel2 :
                 value < 22    ? rel3 :
                 value < 24    ? rel4 :
                 value < 26    ? rel5 :
                 value < 28    ? rel6 :
                 value < 30    ? rel7 :
                 value < 32    ? rel8 :
                  rel9;
                 ;
      }



      // Fetch the GeoJSON data
      fetch("visualisations/scripts/map_edit2017/pregnancy_religion_education_17.geojson")
        .then(function(response) {
          return response.json();
        })
        .then(function(italianRegions) {
          // Add our geojson file to the map, style with colors according to the value property
          var geojson = L.geoJson(italianRegions, {
            style: function(feature) {
              return {
                fillColor: getColor(feature.properties.relig_yes),
                weight: 1,
                opacity: 2,
                color: "white",
                dashArray: "0",
                fillOpacity: 0.9
              };
            },
            onEachFeature: function(feature, layer) {
              // Add the click event to the layer
              layer.on("click", function() {
                // Change the style of the clicked layer to make it slightly larger
                layer.setStyle({
                  weight: 3,
                  fillOpacity: 1

                });
                // Reset the style of all other layers to their original values
                geojson.eachLayer(function(otherLayer) {
                  if (otherLayer != layer) {
                    otherLayer.setStyle({
                      weight: 1,
                      fillOpacity: 0.9
                    });
                  }
                });
              });
              // Add the original popup content
              layer.bindPopup(feature.properties.name + " - " + parseFloat(feature.properties.relig_yes).toFixed(1));
            }
          }).addTo(map_17_rel);

          // Zoom the map to fit the GeoJSON data

           // Invalidate the map size to fix any issues with the map not displaying correctly
           $('.map-li').on('click', function() {
             map_17_rel.invalidateSize();
          });
         });


        });
      // });


// Create a new instance of the map for pregnancies
$(document).ready(function() {
    var map = L.map('map_17_preg').setView([42.5, 12.5], 5);


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
      // div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #FFE6CB;'></div> <div class='legend-text'>Total pregnancies % </div></div>";
      // div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #BD0026;'></div> <div class='legend-text'>Age-group: 18-24</div></div>";

      return div;
    }
    // legend.addTo(map);

    var preg1="#F2DAAF",
        preg2="#EEBF99",
        preg3="#F07000",
        preg4="#E07058",
        preg5="#F59C1F";
// E78B4B
  // // GetColor function  //
      function getColor(value) {
          return value < 2.5     ? preg1 :
                 // value < 3     ? preg3 :
                 // value < 2.4     ? '#D7BB9F' :
                 // value < 2.8   ? '#CB895E' :
                 // value < 3    ? '#BC4418' :
                 value < 3.2    ? '#F7C979' :
                 value < 3.4    ?  preg3:
                 value < 3.6    ?  preg5:
                 value < 4.0    ? '#BC4418':
                 // value <       ? :
                    '#580000'         ;
      }

      // Fetch the GeoJSON data
      fetch("visualisations/scripts/map_edit2017/pregnancy_religion_education_17.geojson")
        .then(function(response) {
          return response.json();
        })
        .then(function(italianRegions) {
          // Add our geojson file to the map, style with colors according to the value property
          var geojson = L.geoJson(italianRegions, {
            style: function(feature) {
              return {
                fillColor: getColor(feature.properties.pregnancy_percentage),
                weight: 1,
                opacity: 1,
                color: "white",
                dashArray: "0",
                fillOpacity: 0.7
              };
            },
            onEachFeature: function(feature, layer) {
              // Add the click event to the layer
              layer.on("click", function() {
                // Change the style of the clicked layer to make it slightly larger
                layer.setStyle({
                  weight: 3,
                  fillOpacity: 0.9
                });
                // Reset the style of all other layers to their original values
                geojson.eachLayer(function(otherLayer) {
                  if (otherLayer != layer) {
                    otherLayer.setStyle({
                      weight: 1,
                      fillOpacity: 0.7
                    });
                  }
                });
              });
              // Add the original popup content
              layer.bindPopup(feature.properties.name + " - " + parseFloat(feature.properties.pregnancy_percentage).toFixed(1));
            }
          }).addTo(map);

          // Zoom the map to fit the GeoJSON data

           // Invalidate the map size to fix any issues with the map not displaying correctly
           $('.map-li').on('click', function() {
             map.invalidateSize();
          });
         });


        });



        // Create a new instance of the map for early leavers
        $(document).ready(function() {
            var map_17_edu = L.map('map_17_edu').setView([42.5, 12.5], 5);


            // Add a tile layer to the map
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map_17_edu);


            //Add legend
            // Create a new container for the legend
            var legend = L.control({ position: "bottomright" });

            // When the layer is added to the map
            // When the layer is added to the map
            legend.onAdd = function() {

              var div = L.DomUtil.create("div", "legend");
              div.className += "legend-item";
              // Add the legend items and their corresponding colors
              div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #FFE6CB !important;'></div> <div class='legend-text'>Early leavers of education %</div></div>";
              div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #BD0026;'></div> <div class='legend-text'>Age-group: 18-24</div></div>";

              return div;
            }
            // legend.addTo(map_17_edu);


          // // GetColor function  //
              function getColor(value) {
                  return value < 3     ? '#eaf4f4' :
                         value < 4     ? '#cce3de' :
                         value < 5     ? '#a4c3b2' :
                         value < 6   ? '#84a98c' :
                         value < 7    ? '#52796f' :
                         value < 8    ? '#015A3B' :
                                     '#013824';
              }

              // Fetch the GeoJSON data
              fetch("visualisations/scripts/map_edit2017/pregnancy_religion_education_17.geojson")
                .then(function(response) {
                  return response.json();
                })
                .then(function(italianRegions) {
                  // Add our geojson file to the map, style with colors according to the value property
                  var geojson = L.geoJson(italianRegions, {
                    style: function(feature) {
                      return {
                        fillColor: getColor(feature.properties.female_early_leavers_percentage),
                        weight: 1,
                        opacity: 1,
                        color: "white",
                        dashArray: "0",
                        fillOpacity: 0.9
                      };
                    },
                    onEachFeature: function(feature, layer) {
                      // Add the click event to the layer
                      layer.on("click", function() {
                        // Change the style of the clicked layer to make it slightly larger
                        layer.setStyle({
                          weight: 3,
                          fillOpacity: 1
                        });
                        // Reset the style of all other layers to their original values
                        geojson.eachLayer(function(otherLayer) {
                          if (otherLayer != layer) {
                            otherLayer.setStyle({
                              weight: 1,
                              fillOpacity: 0.9
                            });
                          }
                        });
                      });
                      // Add the zoom functionality
                      layer.on("click", function() {
                        map_17_edu.zoomIn(0.4);
                      });
                      layer.on("mouseout", function() {
                        map_17_edu.zoomOut(0.4);
                      });
                      // Add the original popup content
                      layer.bindPopup(feature.properties.name + " - " + parseFloat(feature.properties.female_early_leavers_percentage).toFixed(1));
                    }
                  }).addTo(map_17_edu);

                  map_17_edu.removeControl(map_17_edu.zoomControl);


                  // Zoom the map to fit the GeoJSON data

                   // Invalidate the map size to fix any issues with the map not displaying correctly
                   $('.map-li').on('click', function() {
                     map_17_edu.invalidateSize();
                  });
                 });


                });
