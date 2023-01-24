
// 2017 DATA - PIE Visualisations


$(document).ready(function(){

//
//
//

  var piedivNord17 =  [{"category": "Piemonte", "value": 3.622520400150227, "subData": [{"category": "Live births", "value": 2.657262843680953}, {"category": "Abortions", "value": 0.8145427586173258}, {"category": "Miscarriages", "value": 0.1507147978519483}]}, {"category": "Valle d'Aosta / Vall\u00e9e d'Aoste", "value": 3.203252032520325, "subData": [{"category": "Live births", "value": 2.3089430894308944}, {"category": "Abortions", "value": 0.7479674796747967}, {"category": "Miscarriages", "value": 0.1463414634146341}]}, {"category": "Liguria", "value": 3.709522562625469, "subData": [{"category": "Live births", "value": 2.6097582264118007}, {"category": "Abortions", "value": 0.9659305810130632}, {"category": "Miscarriages", "value": 0.1338337552006051}]}, {"category": "Lombardia", "value": 3.5408646382323274, "subData": [{"category": "Live births", "value": 2.7331708475305474}, {"category": "Abortions", "value": 0.6861338458197788}, {"category": "Miscarriages", "value": 0.1215599448820016}]}, {"category": "Veneto", "value": 2.978630243617656, "subData": [{"category": "Live births", "value": 2.409824168784993}, {"category": "Abortions", "value": 0.4524501635874919}, {"category": "Miscarriages", "value": 0.1163559112451704}]}, {"category": "Friuli-Venezia Giulia", "value": 3.1888679518770835, "subData": [{"category": "Live births", "value": 2.431511813306276}, {"category": "Abortions", "value": 0.6214668792578635}, {"category": "Miscarriages", "value": 0.1358892593129439}]}, {"category": "Emilia-Romagna", "value": 3.821205901715525, "subData": [{"category": "Live births", "value": 2.9121325949734733}, {"category": "Abortions", "value": 0.7958021918444798}, {"category": "Miscarriages", "value": 0.1132711148975719}]}, {"category": "Trentino Alto Adige / S\u00fcdtirol", "value": 3.503630620950148, "subData": [{"category": "Live births", "value": 2.891472110970011}]}];



  var piedivCentro17 =
  [{"category": "Toscana", "value": 3.4608687522642017, "subData": [{"category": "Live births", "value": 2.566289981418939}, {"category": "Abortions", "value": 0.7654462376272335}, {"category": "Miscarriages", "value": 0.1291325332180294}]}, {"category": "Umbria", "value": 3.322999418717303, "subData": [{"category": "Live births", "value": 2.557643867467545}, {"category": "Abortions", "value": 0.6660530904863399}, {"category": "Miscarriages", "value": 0.0993024607634179}]}, {"category": "Marche", "value": 3.1142841834547794, "subData": [{"category": "Live births", "value": 2.472674667809687}, {"category": "Abortions", "value": 0.5130197171024432}, {"category": "Miscarriages", "value": 0.1285897985426489}]}, {"category": "Lazio", "value": 3.2937919433687863, "subData": [{"category": "Live births", "value": 2.3724833978728253}, {"category": "Abortions", "value": 0.7671146466681853}, {"category": "Miscarriages", "value": 0.1541938988277759}]}, {"category": "Abruzzo", "value": 3.232228064310245, "subData": [{"category": "Live births", "value": 2.580311825669392}, {"category": "Abortions", "value": 0.5592195240555572}, {"category": "Miscarriages", "value": 0.0926967145852961}]}, {"category": "Molise", "value": 3.0502988047808763, "subData": [{"category": "Live births", "value": 2.2908366533864544}, {"category": "Abortions", "value": 0.6349601593625498}, {"category": "Miscarriages", "value": 0.1245019920318725}]}];




  var piedivSud17 =
    [{"category": "Campania", "value": 3.8910781927145295, "subData": [{"category": "Live births", "value": 3.3338063685089567}, {"category": "Abortions", "value": 0.4737629220474418}, {"category": "Miscarriages", "value": 0.083508902158132}]}, {"category": "Puglia", "value": 3.753125094129341, "subData": [{"category": "Live births", "value": 2.8004285843377383}, {"category": "Abortions", "value": 0.771968174600784}, {"category": "Miscarriages", "value": 0.180728335190819}]}, {"category": "Basilicata", "value": 2.462768357939527, "subData": [{"category": "Live births", "value": 1.927664238282509}, {"category": "Abortions", "value": 0.3997163303462059}, {"category": "Miscarriages", "value": 0.1353877893108117}]}, {"category": "Calabria", "value": 3.650524339837193, "subData": [{"category": "Live births", "value": 3.106329982130932}, {"category": "Abortions", "value": 0.4052127141129542}, {"category": "Miscarriages", "value": 0.1389816435933072}]}, {"category": "Sicilia", "value": 4.771080727748121, "subData": [{"category": "Live births", "value": 4.053409957511712}, {"category": "Abortions", "value": 0.5294013509096851}, {"category": "Miscarriages", "value": 0.188269419326724}]}, {"category": "Sardegna", "value": 3.029788789389865, "subData": [{"category": "Live births", "value": 2.258308748661985}, {"category": "Abortions", "value": 0.6670495783620082}, {"category": "Miscarriages", "value": 0.1044304623658721}]}];


// -----------------YEAR 2018-----------------
    var piedivNord18 =


    [{"category": "Piemonte", "value": 3.622520400150227, "subData": [{"category": "Live births", "value": 2.657262843680953}, {"category": "Abortions", "value": 0.8145427586173258}, {"category": "Miscarriages", "value": 0.1507147978519483}]}, {"category": "Valle d'Aosta / Vall\u00e9e d'Aoste", "value": 3.203252032520325, "subData": [{"category": "Live births", "value": 2.3089430894308944}, {"category": "Abortions", "value": 0.7479674796747967}, {"category": "Miscarriages", "value": 0.1463414634146341}]}, {"category": "Liguria", "value": 3.709522562625469, "subData": [{"category": "Live births", "value": 2.6097582264118007}, {"category": "Abortions", "value": 0.9659305810130632}, {"category": "Miscarriages", "value": 0.1338337552006051}]}, {"category": "Lombardia", "value": 3.5408646382323274, "subData": [{"category": "Live births", "value": 2.7331708475305474}, {"category": "Abortions", "value": 0.6861338458197788}, {"category": "Miscarriages", "value": 0.1215599448820016}]}, {"category": "Veneto", "value": 2.978630243617656, "subData": [{"category": "Live births", "value": 2.409824168784993}, {"category": "Abortions", "value": 0.4524501635874919}, {"category": "Miscarriages", "value": 0.1163559112451704}]}, {"category": "Friuli-Venezia Giulia", "value": 3.1888679518770835, "subData": [{"category": "Live births", "value": 2.431511813306276}, {"category": "Abortions", "value": 0.6214668792578635}, {"category": "Miscarriages", "value": 0.1358892593129439}]}, {"category": "Emilia-Romagna", "value": 3.821205901715525, "subData": [{"category": "Live births", "value": 2.9121325949734733}, {"category": "Abortions", "value": 0.7958021918444798}, {"category": "Miscarriages", "value": 0.1132711148975719}]}, {"category": "Trentino Alto Adige / S\u00fcdtirol", "value": 3.503630620950148, "subData": [{"category": "Live births", "value": 2.891472110970011}, {"category": "Abortions", "value": 0.5307544528019277}, {"category": "Miscarriages", "value": 0.0814040571782097}]}];

    var piedivCentro18 =[{"category": "Toscana", "value": 3.4608687522642017, "subData": [{"category": "Live births", "value": 2.566289981418939}, {"category": "Abortions", "value": 0.7654462376272335}, {"category": "Miscarriages", "value": 0.1291325332180294}]}, {"category": "Umbria", "value": 3.322999418717303, "subData": [{"category": "Live births", "value": 2.557643867467545}, {"category": "Abortions", "value": 0.6660530904863399}, {"category": "Miscarriages", "value": 0.0993024607634179}]}, {"category": "Marche", "value": 3.1142841834547794, "subData": [{"category": "Live births", "value": 2.472674667809687}, {"category": "Abortions", "value": 0.5130197171024432}, {"category": "Miscarriages", "value": 0.1285897985426489}]}, {"category": "Lazio", "value": 3.2937919433687863, "subData": [{"category": "Live births", "value": 2.3724833978728253}, {"category": "Abortions", "value": 0.7671146466681853}, {"category": "Miscarriages", "value": 0.1541938988277759}]}, {"category": "Abruzzo", "value": 3.232228064310245, "subData": [{"category": "Live births", "value": 2.580311825669392}, {"category": "Abortions", "value": 0.5592195240555572}, {"category": "Miscarriages", "value": 0.0926967145852961}]}, {"category": "Molise", "value": 3.0502988047808763, "subData": [{"category": "Live births", "value": 2.2908366533864544}, {"category": "Abortions", "value": 0.6349601593625498}, {"category": "Miscarriages", "value": 0.1245019920318725}]}];



    var piedivSud18 =[{"category": "Campania", "value": 3.8910781927145295, "subData": [{"category": "Live births", "value": 3.3338063685089567}, {"category": "Abortions", "value": 0.4737629220474418}, {"category": "Miscarriages", "value": 0.083508902158132}]}, {"category": "Puglia", "value": 3.753125094129341, "subData": [{"category": "Live births", "value": 2.8004285843377383}, {"category": "Abortions", "value": 0.771968174600784}, {"category": "Miscarriages", "value": 0.180728335190819}]}, {"category": "Basilicata", "value": 2.462768357939527, "subData": [{"category": "Live births", "value": 1.927664238282509}, {"category": "Abortions", "value": 0.3997163303462059}, {"category": "Miscarriages", "value": 0.1353877893108117}]}, {"category": "Calabria", "value": 3.650524339837193, "subData": [{"category": "Live births", "value": 3.106329982130932}, {"category": "Abortions", "value": 0.4052127141129542}, {"category": "Miscarriages", "value": 0.1389816435933072}]}, {"category": "Sicilia", "value": 4.771080727748121, "subData": [{"category": "Live births", "value": 4.053409957511712}, {"category": "Abortions", "value": 0.5294013509096851}, {"category": "Miscarriages", "value": 0.188269419326724}]}, {"category": "Sardegna", "value": 3.029788789389865, "subData": [{"category": "Live births", "value": 2.258308748661985}, {"category": "Abortions", "value": 0.6670495783620082}, {"category": "Miscarriages", "value": 0.1044304623658721}]}];


    // 2019 DATA

    var piedivNord19 =[{"category": "Piemonte", "value": 3.622520400150227, "subData": [{"category": "Live births", "value": 2.657262843680953}, {"category": "Abortions", "value": 0.8145427586173258}, {"category": "Miscarriages", "value": 0.1507147978519483}]}, {"category": "Valle d'Aosta / Vall\u00e9e d'Aoste", "value": 3.203252032520325, "subData": [{"category": "Live births", "value": 2.3089430894308944}, {"category": "Abortions", "value": 0.7479674796747967}, {"category": "Miscarriages", "value": 0.1463414634146341}]}, {"category": "Liguria", "value": 3.709522562625469, "subData": [{"category": "Live births", "value": 2.6097582264118007}, {"category": "Abortions", "value": 0.9659305810130632}, {"category": "Miscarriages", "value": 0.1338337552006051}]}, {"category": "Lombardia", "value": 3.5408646382323274, "subData": [{"category": "Live births", "value": 2.7331708475305474}, {"category": "Abortions", "value": 0.6861338458197788}, {"category": "Miscarriages", "value": 0.1215599448820016}]}, {"category": "Veneto", "value": 2.978630243617656, "subData": [{"category": "Live births", "value": 2.409824168784993}, {"category": "Abortions", "value": 0.4524501635874919}, {"category": "Miscarriages", "value": 0.1163559112451704}]}, {"category": "Friuli-Venezia Giulia", "value": 3.1888679518770835, "subData": [{"category": "Live births", "value": 2.431511813306276}, {"category": "Abortions", "value": 0.6214668792578635}, {"category": "Miscarriages", "value": 0.1358892593129439}]}, {"category": "Emilia-Romagna", "value": 3.821205901715525, "subData": [{"category": "Live births", "value": 2.9121325949734733}, {"category": "Abortions", "value": 0.7958021918444798}, {"category": "Miscarriages", "value": 0.1132711148975719}]}, {"category": "Trentino Alto Adige / S\u00fcdtirol", "value": 3.503630620950148, "subData": [{"category": "Live births", "value": 2.891472110970011}, {"category": "Abortions", "value": 0.5307544528019277}, {"category": "Miscarriages", "value": 0.0814040571782097}]}];

    var piedivCentro19 =[{"category": "Toscana", "value": 3.4608687522642017, "subData": [{"category": "Live births", "value": 2.566289981418939}, {"category": "Abortions", "value": 0.7654462376272335}, {"category": "Miscarriages", "value": 0.1291325332180294}]}, {"category": "Umbria", "value": 3.322999418717303, "subData": [{"category": "Live births", "value": 2.557643867467545}, {"category": "Abortions", "value": 0.6660530904863399}, {"category": "Miscarriages", "value": 0.0993024607634179}]}, {"category": "Marche", "value": 3.1142841834547794, "subData": [{"category": "Live births", "value": 2.472674667809687}, {"category": "Abortions", "value": 0.5130197171024432}, {"category": "Miscarriages", "value": 0.1285897985426489}]}, {"category": "Lazio", "value": 3.2937919433687863, "subData": [{"category": "Live births", "value": 2.3724833978728253}, {"category": "Abortions", "value": 0.7671146466681853}, {"category": "Miscarriages", "value": 0.1541938988277759}]}, {"category": "Abruzzo", "value": 3.232228064310245, "subData": [{"category": "Live births", "value": 2.580311825669392}, {"category": "Abortions", "value": 0.5592195240555572}, {"category": "Miscarriages", "value": 0.0926967145852961}]}, {"category": "Molise", "value": 3.0502988047808763, "subData": [{"category": "Live births", "value": 2.2908366533864544}, {"category": "Abortions", "value": 0.6349601593625498}, {"category": "Miscarriages", "value": 0.1245019920318725}]}];

    var piedivSud19= [{"category": "Campania", "value": 3.8910781927145295, "subData": [{"category": "Live births", "value": 3.3338063685089567}, {"category": "Abortions", "value": 0.4737629220474418}, {"category": "Miscarriages", "value": 0.083508902158132}]}, {"category": "Puglia", "value": 3.753125094129341, "subData": [{"category": "Live births", "value": 2.8004285843377383}, {"category": "Abortions", "value": 0.771968174600784}, {"category": "Miscarriages", "value": 0.180728335190819}]}, {"category": "Basilicata", "value": 2.462768357939527, "subData": [{"category": "Live births", "value": 1.927664238282509}, {"category": "Abortions", "value": 0.3997163303462059}, {"category": "Miscarriages", "value": 0.1353877893108117}]}, {"category": "Calabria", "value": 3.650524339837193, "subData": [{"category": "Live births", "value": 3.106329982130932}, {"category": "Abortions", "value": 0.4052127141129542}, {"category": "Miscarriages", "value": 0.1389816435933072}]}, {"category": "Sicilia", "value": 4.771080727748121, "subData": [{"category": "Live births", "value": 4.053409957511712}, {"category": "Abortions", "value": 0.5294013509096851}, {"category": "Miscarriages", "value": 0.188269419326724}]}, {"category": "Sardegna", "value": 3.029788789389865, "subData": [{"category": "Live births", "value": 2.258308748661985}, {"category": "Abortions", "value": 0.6670495783620082}, {"category": "Miscarriages", "value": 0.1044304623658721}]}];

      
  // MAIN FUNCTION FOR CREATING PIES

  function createPie(divEl,arrayData){


  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element

  var root = am5.Root.new(divEl);

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([am5themes_Animated.new(root)]);

  var container = root.container.children.push(
    am5.Container.new(root, {
      width: am5.p100,
      height: am5.p100,
      layout: root.horizontalLayout
    })
  );

  // Create main chart
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
  var chart = container.children.push(
    am5percent.PieChart.new(root, {
      tooltip: am5.Tooltip.new(root, {})
    })
  );

  // Create series
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
  var series = chart.series.push(
    am5percent.PieSeries.new(root, {
      valueField: "value",
      categoryField: "category",
      alignLabels: false
    })
  );

  series.labels.template.setAll({
    textType: "circular",
    radius: 4,
    fontSize: 11

  });
  series.ticks.template.set("visible", false);
  series.slices.template.set("toggleKey", "none");

  // add events
  series.slices.template.events.on("click", function(e) {
    selectSlice(e.target);
  });

  // Create sub chart
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
  var subChart = container.children.push(
    am5percent.PieChart.new(root, {
      radius: am5.percent(50),
      tooltip: am5.Tooltip.new(root, {})
    })
  );

  // Create sub series
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
  var subSeries = subChart.series.push(
    am5percent.PieSeries.new(root, {
      valueField: "value",
      categoryField: "category"
    })
  );

  subSeries.data.setAll([
    { category: "Live births", value: 0 },
    { category: "Abortions", value: 0 },
    { category: "Miscarriages", value: 0 }
  ]);

  subSeries.slices.template.set("toggleKey", "none");

  var selectedSlice;

  series.on("startAngle", function() {
    updateLines();
  });

  container.events.on("boundschanged", function() {
    root.events.on("frameended", function(){
      updateLines();
     })
  })

  function updateLines() {
    if (selectedSlice) {
      var startAngle = selectedSlice.get("startAngle");
      var arc = selectedSlice.get("arc");
      var radius = selectedSlice.get("radius");

      var x00 = radius * am5.math.cos(startAngle);
      var y00 = radius * am5.math.sin(startAngle);

      var x10 = radius * am5.math.cos(startAngle + arc);
      var y10 = radius * am5.math.sin(startAngle + arc);

      var subRadius = subSeries.slices.getIndex(0).get("radius");
      var x01 = 0;
      var y01 = -subRadius;

      var x11 = 0;
      var y11 = subRadius;

      var point00 = series.toGlobal({ x: x00, y: y00 });
      var point10 = series.toGlobal({ x: x10, y: y10 });

      var point01 = subSeries.toGlobal({ x: x01, y: y01 });
      var point11 = subSeries.toGlobal({ x: x11, y: y11 });

      line0.set("points", [point00, point01]);
      line1.set("points", [point10, point11]);
    }
  }

  // lines
  var line0 = container.children.push(
    am5.Line.new(root, {
      position: "absolute",
      stroke: root.interfaceColors.get("text"),
      strokeDasharray: [2, 2]
    })
  );
  var line1 = container.children.push(
    am5.Line.new(root, {
      position: "absolute",
      stroke: root.interfaceColors.get("text"),
      strokeDasharray: [2, 2]
    })
  );

  // Set data
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
  series.data.setAll(arrayData);

  function selectSlice(slice) {
    selectedSlice = slice;
    var dataItem = slice.dataItem;
    var dataContext = dataItem.dataContext;

    if (dataContext) {
      var i = 0;
      subSeries.data.each(function(dataObject) {
        var dataObj = dataContext.subData[i];
        if(dataObj){
            subSeries.data.setIndex(i, dataObj);
            if(!subSeries.dataItems[i].get("visible")){
                subSeries.dataItems[i].show();
            }
        }
        else{
            subSeries.dataItems[i].hide();
        }

        i++;
      });
    }

    var middleAngle = slice.get("startAngle") + slice.get("arc") / 2;
    var firstAngle = series.dataItems[0].get("slice").get("startAngle");

    series.animate({
      key: "startAngle",
      to: firstAngle - middleAngle,
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic)
    });
    series.animate({
      key: "endAngle",
      to: firstAngle - middleAngle + 360,
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic)
    });
  }

  container.appear(1000, 10);

  series.events.on("datavalidated", function() {
    selectSlice(series.slices.getIndex(0));
  });




};

// fetch('assets/js/pie_charts/fulltimeseries.json')
//     .then(response => response.json())
//     .then(jsonData => {
//         var regions = createRegionYearObjects(jsonData);
//         var piedivNord17 = [regions["Piemonte2017"], regions["Liguria2017"]];
//         console.log(piedivNord);
//         createPie("piediv-nord-17", piedivNord17);
//
//         // console.log(piedivNord17);
//     })
//     .catch(error => console.error(error));

// ACCESS JSON DATA AND CREATE VARIABLES

    // Pies for each region year 2017
      createPie("piediv-nord-17", piedivNord17);

      createPie("piediv-centro-17",piedivCentro17);
      createPie ("piediv-sud-17", piedivSud17);

    // Pies for each region year 2017


      createPie ("piediv-nord-18", piedivNord18);
      createPie ("piediv-centro-18", piedivCentro18);
      createPie ("piediv-sud-18", piedivSud18);

    // Pies for each region year 2017

      createPie ("piediv-nord-19", piedivNord17);
      createPie ("piediv-centro-19", piedivCentro19);
      createPie ("piediv-sud-19", piedivSud19);



});
