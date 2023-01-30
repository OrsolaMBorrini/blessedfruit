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

      // Create a new div element for the legend
      // Add the legend to the map
      // var legend17rel = L.control({ position: "bottomright" });
      // legend17rel.onAdd = function(map_17_rel) {
      //   var div = L.DomUtil.create("div", "legend");
      //   div.innerHTML = `
      //     <div>
      //       <div class="legend-item" id="rel17_1" style="background: ${rel1}"></div>
      //       <span>0 - 18</span>
      //     </div>
      //     <div>
      //       <div class="legend-item" id="rel17_2" style="background: ${rel2}"></div>
      //       <span>18 - 20</span>
      //     </div>
      //     <div>
      //       <div class="legend-item" id="rel17_3" style="background: ${rel3}"></div>
      //       <span>20 - 22</span>
      //     </div>
      //     <div>
      //       <div class="legend-item" id="rel17_4" style="background: ${rel4}"></div>
      //       <span>22 - 24</span>
      //     </div>
      //     <div>
      //       <div class="legend-item" id="rel17_5" style="background: ${rel5}"></div>
      //       <span>24 - 26</span>
      //     </div>
      //     <div>
      //       <div class="legend-item"id="rel17_6" style="background: ${rel6}"></div>
      //       <span>26 - 28</span>
      //     </div>
      //     <div>
      //       <div class="legend-item" id="rel17_7"style="background: ${rel7}"></div>
      //       <span>28 - 30</span>
      //     </div>
      //     <div>
      //       <div class="legend-item" id="rel17_8"style="background: ${rel8}"></div>
      //       <span>30 - 32</span>
      //     </div>
      //     <div>
      //       <div class="legend-item" id="rel17_9"style="background: ${rel9}"></div>
      //       <span>32 +</span>
      //     </div>
      //   `;
      //   return div;
      // };
      // legend17rel.addTo(map_17_rel);





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

          map_17_rel.scrollWheelZoom.disable();
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
    var preg1="#FEE68E",
        preg2="#F7C979",
        preg3="#fc9f1c",
        preg4="#F07000",
        preg5 ='#BC4418',
        preg6='#580000';

  // // GetColor function  //
      function getColor(value) {
          return value < 2.5    ?  preg1 :
                 value < 3.2    ?  preg2 :
                 value < 3.4    ?  preg3 :
                 value < 3.6    ?  preg4 :
                 value < 4.0    ?  preg5 :
                    preg6         ;
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
          map.scrollWheelZoom.disable();

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

            var edu1 ='#eaf4f4',
            edu2 ='#bcdad3',
            edu3 = '#95b9a5',
            edu4 = '#5c8565',
            edu5 = '#01734c',
            edu6 = '#01573a',
            edu7 = '#013824';

          // // GetColor function  //
              function getColor(value) {
                  return value < 3     ? edu1 :
                         value < 4     ? edu2 :
                         value < 5     ? edu3 :
                         value < 6     ? edu4 :
                         value < 7     ? edu5 :
                         value < 8     ? edu6 :
                                     edu7;
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

                  map_17_edu.scrollWheelZoom.disable();

                 });


                });
