
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
      div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #F1D0CC;'></div> <div class='legend-text'>Age-group: 18-24</div></div>";

      return div;
    }
    // legend.addTo(map_18_rel);



    var rel1= '#FFF2EB',
        rel2='#F1D0CC',
        rel3= '#F1D0CC',
        rel4= '#D68D8E',
        rel5= '#C86B6F',
        rel6= '#BB4A50',
        rel7='#ad2831',
        rel8='#7b0d1e',
        rel9= '#38040e';


    function getColor(value) {
        return value < 3    ? rel1 :
               value < 8    ? rel2 :
               value < 9.5    ? rel3 :
               value < 10.5   ? rel4 :
               value < 11.5    ? rel5 :
               value < 12.5    ? rel6 :
               value < 13.5    ? rel7 :
               value < 14.5    ? rel8 :
                rel9;
               ;
    }

    // function getColor(value) {
    //     return value < 18    ? '#e5bbbb' :
    //            value < 20    ? '#e5bbbb' :
    //            value < 22    ? '#ce7676' :
    //            value < 24    ? '#df9f9f' :
    //            value < 26    ? '#b85a5a' :
    //            value < 30    ? '#a31525' :
    //            value <33     ? '#65041d':
    //           '#e5bbbb' ;
    // }
    //

    // value < 16     ? '#e5bbbb' : LIGHT

    // Fetch the GeoJSON data
    fetch("visualisations/scripts/map_edit2018/pregnancy_religion_education_18.geojson")
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
    // legend.addTo(map_18_preg);



    var preg1="#F2DAAF",
        preg2="#EEBF99",
        preg3="#F07000",
        preg4="#E07058",
        preg5="#F59C1F";
// E78B4B
  // // GetColor function  //
      function getColor(value) {
          return value < 1     ? preg1 :
                 // value < 3     ? preg3 :
                 // value < 2.4     ? '#D7BB9F' :
                 // value < 2.8   ? '#CB895E' :
                 // value < 3    ? '#BC4418' :
                 value < 1.3    ? '#F7C979' :
                 value < 1.6    ?  preg3:
                 value < 1.9    ?  preg5:
                 value < 2.2    ? '#BC4418':
                 // value <       ? :
                    '#580000'         ;
      }
      // Fetch the GeoJSON data
      fetch("visualisations/scripts/map_edit2018/pregnancy_religion_education_18.geojson")
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
            // legend.addTo(map_18_edu);



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
              fetch("visualisations/scripts/map_edit2018/pregnancy_religion_education_18.geojson")
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
                        map_18_edu.zoomIn(0.4);
                      });
                      layer.on("mouseout", function() {
                        map_18_edu.zoomOut(0.4);
                      });
                      // Add the original popup content
                      layer.bindPopup(feature.properties.name + " - " + parseFloat(feature.properties.female_early_leavers_percentage).toFixed(1));
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
