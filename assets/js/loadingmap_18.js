
// 2018 DATA

// Create a new instance of the map for religion
$(document).ready(function() {
    var map_18_rel = L.map('map_18_rel').setView([42.5, 12.5], 5);


    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map_18_rel);


    //Add legend
    // Create a new container for the legend
    var legend = L.control({ position: "bottomright" });

    // When the layer is added to the map
    // When the layer is added to the map
    legend.onAdd = function() {

      var div = L.DomUtil.create("div", "legend");
      div.className += "legend-item";
      // Add the legend items and their corresponding colors
      div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #FFE6CB;'></div> <div class='legend-text'>Religious observance %</div></div>";
      div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #BD0026;'></div> <div class='legend-text'>Age-group: 18-24</div></div>";

      return div;
    }
    legend.addTo(map_18_rel);



  // // GetColor function  //
      function getColor(value) {
          return value < 16     ? '#FFE6CB' :
                 value < 18     ? '#faf0e6' :
                 value < 20     ? '#D7BB9F' :
                 value < 22   ? '#CB895E' :
                 value < 24    ? '#BC4418' :
                 value < 28    ? '#8D2A07' :
                 value < 30    ? '#580000' :
                             '#BC4418';
      }

      // Fetch the GeoJSON data
      fetch("visualisations/scripts/map_2018/pregnancy_religion_education_18.geojson")
        .then(function(response) {
          return response.json();
        })
        .then(function(italianRegions) {
          // Add our geojson file to the map, style with colors according to the value property
          var geojson = L.geoJson(italianRegions, {
            style: function(feature) {
              return {
                fillColor: getColor(feature.properties.relig_yes),
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
              layer.bindPopup(feature.properties.name + " - " + feature.properties.relig_yes);
            }
          }).addTo(map_18_rel);

          // Zoom the map to fit the GeoJSON data

           // Invalidate the map size to fix any issues with the map not displaying correctly
           $('.map-li').on('click', function() {
             map_18_rel.invalidateSize();
          });
         });


        });
      // });


// Create a new instance of the map for pregnancies
$(document).ready(function() {
    var map_18_preg = L.map('map_18_preg').setView([42.5, 12.5], 5);


    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map_18_preg);


    //Add legend
    // Create a new container for the legend
    var legend = L.control({ position: "bottomright" });

    // When the layer is added to the map
    // When the layer is added to the map
    legend.onAdd = function() {

      var div = L.DomUtil.create("div", "legend");
      div.className += "legend-item";
      // Add the legend items and their corresponding colors
      div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #FFE6CB;'></div> <div class='legend-text'>Total pregnancies % </div></div>";
      div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #BD0026;'></div> <div class='legend-text'>Age-group: 18-24</div></div>";

      return div;
    }
    legend.addTo(map_18_preg);



  // // GetColor function  //
      function getColor(value) {
          return value < 2     ? '#FFE6CB' :
                 value < 2.2     ? '#faf0e6' :
                 value < 2.4     ? '#D7BB9F' :
                 value < 2.8   ? '#CB895E' :
                 value < 3    ? '#BC4418' :
                 value < 3.3    ? '#8D2A07' :
                 value < 3.6    ? '#580000' :
                             '#BC4418';
      }

      // Fetch the GeoJSON data
      fetch("visualisations/scripts/map_2018/pregnancy_religion_education_18.geojson")
        .then(function(response) {
          return response.json();
        })
        .then(function(italianRegions) {
          // Add our geojson file to the map, style with colors according to the value property
          var geojson = L.geoJson(italianRegions, {
            style: function(feature) {
              return {
                fillColor: getColor(feature.properties.pregnancy_percentage),
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
              layer.bindPopup(feature.properties.name + " - " + feature.properties.pregnancy_percentage);
            }
          }).addTo(map_18_preg);

          // Zoom the map to fit the GeoJSON data

           // Invalidate the map size to fix any issues with the map not displaying correctly
           $('.map-li').on('click', function() {
             map_18_preg.invalidateSize();
          });
         });


        });



        // Create a new instance of the map for early leavers
        $(document).ready(function() {
            var map_18_edu = L.map('map_18_edu').setView([42.5, 12.5], 5);


            // Add a tile layer to the map
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map_18_edu);


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
            legend.addTo(map_18_edu);



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
              fetch("visualisations/scripts/map_2018/pregnancy_religion_education_18.geojson")
                .then(function(response) {
                  return response.json();
                })
                .then(function(italianRegions) {
                  // Add our geojson file to the map, style with colors according to the value property
                  var geojson = L.geoJson(italianRegions, {
                    style: function(feature) {
                      return {
                        fillColor: getColor(feature.properties.female_early_leavers_percentage),
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
                          weight: 4,
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
                      // Add the zoom functionality
                      layer.on("click", function() {
                        map_18_edu.zoomIn(0.4);
                      });
                      layer.on("mouseout", function() {
                        map_18_edu.zoomOut(0.4);
                      });
                      // Add the original popup content
                      layer.bindPopup(feature.properties.name + " - " + feature.properties.female_early_leavers_percentage);
                    }
                  }).addTo(map_18_edu);

                  map_18_edu.removeControl(map_18_edu.zoomControl);


                  // Zoom the map to fit the GeoJSON data

                   // Invalidate the map size to fix any issues with the map not displaying correctly
                   $('.map-li').on('click', function() {
                     map_18_edu.invalidateSize();
                  });
                 });


                });
