// 2017 DATA - PIE Visualisations


$(document).ready(function(){

//
//
//

  var piedivNord17 =  [{"category": "Piemonte", "value": 3.622520400150227, "subData": [{"category": "Live births", "value": 2.657262843680953}, {"category": "Abortions", "value": 0.8145427586173258}, {"category": "Miscarriages", "value": 0.1507147978519483}]}, {"category": "Valle d'Aosta", "value": 3.203252032520325, "subData": [{"category": "Live births", "value": 2.3089430894308944}, {"category": "Abortions", "value": 0.7479674796747967}, {"category": "Miscarriages", "value": 0.1463414634146341}]}, {"category": "Liguria", "value": 3.709522562625469, "subData": [{"category": "Live births", "value": 2.6097582264118007}, {"category": "Abortions", "value": 0.9659305810130632}, {"category": "Miscarriages", "value": 0.1338337552006051}]}, {"category": "Lombardia", "value": 3.5408646382323274, "subData": [{"category": "Live births", "value": 2.7331708475305474}, {"category": "Abortions", "value": 0.6861338458197788}, {"category": "Miscarriages", "value": 0.1215599448820016}]}, {"category": "Veneto", "value": 2.978630243617656, "subData": [{"category": "Live births", "value": 2.409824168784993}, {"category": "Abortions", "value": 0.4524501635874919}, {"category": "Miscarriages", "value": 0.1163559112451704}]}, {"category": "Friuli-Venezia Giulia", "value": 3.1888679518770835, "subData": [{"category": "Live births", "value": 2.431511813306276}, {"category": "Abortions", "value": 0.6214668792578635}, {"category": "Miscarriages", "value": 0.08140405717820977}]}, {"category": "Emilia-Romagna", "value": 3.821205901715525, "subData": [{"category": "Live births", "value": 2.9121325949734733}, {"category": "Abortions", "value": 0.7958021918444798}, {"category": "Miscarriages", "value": 0.1132711148975719}]}, {"category": "Trentino-Alto Adige", "value": 3.503630620950148, "subData": [{"category": "Live births", "value": 2.891472110970011}, {"category": "Abortions", "value": 0.5307544528019277}, {"category": "Miscarriages", "value": 0.1245019920318725}]}];



  var piedivCentro17 =
  [{"category": "Toscana", "value": 3.4608687522642017, "subData": [{"category": "Live births", "value": 2.566289981418939}, {"category": "Abortions", "value": 0.7654462376272335}, {"category": "Miscarriages", "value": 0.1291325332180294}]}, {"category": "Umbria", "value": 3.322999418717303, "subData": [{"category": "Live births", "value": 2.557643867467545}, {"category": "Abortions", "value": 0.6660530904863399}, {"category": "Miscarriages", "value": 0.0993024607634179}]}, {"category": "Marche", "value": 3.1142841834547794, "subData": [{"category": "Live births", "value": 2.472674667809687}, {"category": "Abortions", "value": 0.5130197171024432}, {"category": "Miscarriages", "value": 0.1285897985426489}]}, {"category": "Lazio", "value": 3.2937919433687863, "subData": [{"category": "Live births", "value": 2.3724833978728253}, {"category": "Abortions", "value": 0.7671146466681853}, {"category": "Miscarriages", "value": 0.1541938988277759}]}];



  var piedivSud17 =
    [{"category": "Abruzzo", "value": 3.232228064310245, "subData": [{"category": "Live births", "value": 2.580311825669392}, {"category": "Abortions", "value": 0.5592195240555572}, {"category": "Miscarriages", "value": 0.0926967145852961}]}, {"category": "Molise", "value": 3.0502988047808763, "subData": [{"category": "Live births", "value": 2.2908366533864544}, {"category": "Abortions", "value": 0.6349601593625498}, {"category": "Miscarriages", "value": 0.1245019920318725}]}, {"category": "Campania", "value": 3.8910781927145295, "subData": [{"category": "Live births", "value": 3.3338063685089567}, {"category": "Abortions", "value": 0.4737629220474418}, {"category": "Miscarriages", "value": 0.083508902158132}]}, {"category": "Puglia", "value": 3.753125094129341, "subData": [{"category": "Live births", "value": 2.8004285843377383}, {"category": "Abortions", "value": 0.771968174600784}, {"category": "Miscarriages", "value": 0.180728335190819}]}, {"category": "Basilicata", "value": 2.462768357939527, "subData": [{"category": "Live births", "value": 1.927664238282509}, {"category": "Abortions", "value": 0.3997163303462059}, {"category": "Miscarriages", "value": 0.1353877893108117}]}, {"category": "Calabria", "value": 3.650524339837193, "subData": [{"category": "Live births", "value": 3.106329982130932}, {"category": "Abortions", "value": 0.4052127141129542}, {"category": "Miscarriages", "value": 0.1389816435933072}]}, {"category": "Sicilia", "value": 4.771080727748121, "subData": [{"category": "Live births", "value": 4.053409957511712}, {"category": "Abortions", "value": 0.5294013509096851}, {"category": "Miscarriages", "value": 0.188269419326724}]}, {"category": "Sardegna", "value": 3.029788789389865, "subData": [{"category": "Live births", "value": 2.258308748661985}, {"category": "Abortions", "value": 0.6670495783620082}, {"category": "Miscarriages", "value": 0.1044304623658721}]}];

// -----------------YEAR 2018-----------------
    var piedivNord18 =


    [{"category": "Piemonte", "value": 1.7484154071184788, "subData": [{"category": "Live births", "value": 1.235494880546075}, {"category": "Abortions", "value": 0.3890784982935154}, {"category": "Miscarriages", "value": 0.1238420282788883}]}, {"category": "Valle d'Aosta", "value": 1.5382124352331603, "subData": [{"category": "Live births", "value": 1.16580310880829}, {"category": "Abortions", "value": 0.2509715025906736}, {"category": "Miscarriages", "value": 0.1214378238341968}]}, {"category": "Liguria", "value": 1.7707451003300525, "subData": [{"category": "Live births", "value": 1.3114466804918656}, {"category": "Abortions", "value": 0.4366620907205654}, {"category": "Miscarriages", "value": 0.0226363291176212}]}, {"category": "Lombardia", "value": 1.6601711906851653, "subData": [{"category": "Live births", "value": 1.2565525127024133}, {"category": "Abortions", "value": 0.3264177986778217}, {"category": "Miscarriages", "value": 0.0772008793049303}]}, {"category": "Veneto", "value": 1.57604397023454, "subData": [{"category": "Live births", "value": 1.1747187293183323}, {"category": "Abortions", "value": 0.2306258171780923}, {"category": "Miscarriages", "value": 0.1706994237381156}]}, {"category": "Friuli-Venezia Giulia", "value": 1.699929433477482, "subData": [{"category": "Live births", "value": 1.1923932907521668}, {"category": "Abortions", "value": 0.2922177791448785}, {"category": "Miscarriages", "value": 0.2153183635804368}]}, {"category": "Emilia-Romagna", "value": 1.9306186908082008, "subData": [{"category": "Live births", "value": 1.3786019094980488}, {"category": "Abortions", "value": 0.381851608288892}, {"category": "Miscarriages", "value": 0.1701651730212598}]}, {"category": "Trentino-Alto Adige", "value": 1.7991822639235042, "subData": [{"category": "Live births", "value": 1.3829839222010458}, {"category": "Abortions", "value": 0.2508592744628516}, {"category": "Miscarriages", "value": 0.1653390672596067}]}];

    var piedivCentro18 =[ {"category": "Toscana", "value": 1.759088918090232, "subData": [{"category": "Live births", "value": 1.2165279602861732}, {"category": "Abortions", "value": 0.3673528982333187}, {"category": "Miscarriages", "value": 0.1752080595707402}]}, {"category": "Umbria", "value": 1.6472655392049198, "subData": [{"category": "Live births", "value": 1.227517875881592}, {"category": "Abortions", "value": 0.3099299607096664}, {"category": "Miscarriages", "value": 0.1098177026136613}]}, {"category": "Marche", "value": 0.4016092503762888, "subData": [{"category": "Live births", "value": 0.2869642279396249}, {"category": "Abortions", "value": 0.0689276822011844}, {"category": "Miscarriages", "value": 0.0457173402354794}]}, {"category": "Lazio", "value": 1.6714962933787223, "subData": [{"category": "Live births", "value": 1.1038979307628465}, {"category": "Abortions", "value": 0.3622220034041835}, {"category": "Miscarriages", "value": 0.2053763592116924}]}];



    var piedivSud18 =[{"category": "Abruzzo", "value": 1.631006935843448, "subData": [{"category": "Live births", "value": 1.1951944513252415}, {"category": "Abortions", "value": 0.2569977706217488}, {"category": "Miscarriages", "value": 0.1788147138964577}]}, {"category": "Molise", "value": 1.3476312419974392, "subData": [{"category": "Live births", "value": 0.9154929577464788}, {"category": "Abortions", "value": 0.2848911651728553}, {"category": "Miscarriages", "value": 0.147247119078105}]}, {"category": "Campania", "value": 1.783249316057715, "subData": [{"category": "Live births", "value": 1.55175047563499}, {"category": "Abortions", "value": 0.2262217222847144}, {"category": "Miscarriages", "value": 0.0052771181380105}]}, {"category": "Puglia", "value": 1.938639005241343, "subData": [{"category": "Live births", "value": 1.352222636461326}, {"category": "Abortions", "value": 0.3600956161319327}, {"category": "Miscarriages", "value": 0.2263207526480843}]}, {"category": "Basilicata", "value": 1.3364910072538174, "subData": [{"category": "Live births", "value": 0.9804246298565796}, {"category": "Abortions", "value": 0.1755490046702659}, {"category": "Miscarriages", "value": 0.1805173727269716}]}, {"category": "Calabria", "value": 1.803666744024136, "subData": [{"category": "Live births", "value": 1.394291018797865}, {"category": "Abortions", "value": 0.2000464144813181}, {"category": "Miscarriages", "value": 0.2093293107449524}]}, {"category": "Sicilia", "value": 2.4467028082347, "subData": [{"category": "Live births", "value": 1.952341938745272}, {"category": "Abortions", "value": 0.2466574860111213}, {"category": "Miscarriages", "value": 0.2477033834783063}]}, {"category": "Sardegna", "value": 1.5166828463901485, "subData": [{"category": "Live births", "value": 1.0691915900900302}, {"category": "Abortions", "value": 0.2579890155192361}, {"category": "Miscarriages", "value": 0.1895022407808822}]}];

    // 2019 DATA

    var piedivNord19 =[{"category": "Piemonte", "value": 1.8063791182865787, "subData": [{"category": "Live births", "value": 1.3250509541437028}, {"category": "Abortions", "value": 0.4061738424045491}, {"category": "Miscarriages", "value": 0.0751543217383267}]}, {"category": "Valle d'Aosta", "value": 1.5836012861736335, "subData": [{"category": "Live births", "value": 1.1414790996784565}, {"category": "Abortions", "value": 0.3697749196141479}, {"category": "Miscarriages", "value": 0.0723472668810289}]}, {"category": "Liguria", "value": 1.855328065656786, "subData": [{"category": "Live births", "value": 1.3052778626620685}, {"category": "Abortions", "value": 0.4831128767043552}, {"category": "Miscarriages", "value": 0.0669373262903624}]}, {"category": "Lombardia", "value": 1.7348972067439057, "subData": [{"category": "Live births", "value": 1.3391560969983336}, {"category": "Abortions", "value": 0.3361810784044673}, {"category": "Miscarriages", "value": 0.0595600313411049}]}, {"category": "Veneto", "value": 1.4747267128869477, "subData": [{"category": "Live births", "value": 1.1931095115557393}, {"category": "Abortions", "value": 0.2240091209448528}, {"category": "Miscarriages", "value": 0.0576080803863555}]}, {"category": "Friuli-Venezia Giulia", "value": 1.5751977947230873, "subData": [{"category": "Live births", "value": 1.201088318476354}, {"category": "Abortions", "value": 0.3069845702216017}, {"category": "Miscarriages", "value": 0.0671249060251315}]}, {"category": "Emilia-Romagna", "value": 1.8675978631690016, "subData": [{"category": "Live births", "value": 1.4232922149511926}, {"category": "Abortions", "value": 0.3889448805484974}, {"category": "Miscarriages", "value": 0.0553607676693116}]}, {"category": "Trentino-Alto Adige", "value": 1.743696117197122, "subData": [{"category": "Live births", "value": 1.439035457315097}, {"category": "Abortions", "value": 0.2641472742594153}, {"category": "Miscarriages", "value": 0.0405133856226097}]}];

    var piedivCentro19 =[{"category": "Toscana", "value": 1.7139500428270482, "subData": [{"category": "Live births", "value": 1.2709215917772068}, {"category": "Abortions", "value": 0.3790772507350047}, {"category": "Miscarriages", "value": 0.0639512003148366}]}, {"category": "Umbria", "value": 1.6715399610136452, "subData": [{"category": "Live births", "value": 1.286549707602339}, {"category": "Abortions", "value": 0.3350389863547758}, {"category": "Miscarriages", "value": 0.0499512670565302}]}, {"category": "Marche", "value": 1.5718380702560912, "subData": [{"category": "Live births", "value": 1.2480056248140836}, {"category": "Abortions", "value": 0.2589307444765948}, {"category": "Miscarriages", "value": 0.0649017009654128}]}, {"category": "Lazio", "value": 1.6551323366263406, "subData": [{"category": "Live births", "value": 1.192174265236762}, {"category": "Abortions", "value": 0.3854755489812809}, {"category": "Miscarriages", "value": 0.0774825224082976}]}];

    var piedivSud19= [{"category": "Abruzzo", "value": 1.6683661463644208, "subData": [{"category": "Live births", "value": 1.3318691662091144}, {"category": "Abortions", "value": 0.2886500902031532}, {"category": "Miscarriages", "value": 0.0478468899521531}]}, {"category": "Molise", "value": 1.616521509633149, "subData": [{"category": "Live births", "value": 1.2140406439693852}, {"category": "Abortions", "value": 0.3365003958828186}, {"category": "Miscarriages", "value": 0.0659804697809448}]}, {"category": "Campania", "value": 2.008542433241109, "subData": [{"category": "Live births", "value": 1.7208833191522932}, {"category": "Abortions", "value": 0.2445525083536657}, {"category": "Miscarriages", "value": 0.0431066057351507}]}, {"category": "Puglia", "value": 1.938825412350509, "subData": [{"category": "Live births", "value": 1.4466722980482818}, {"category": "Abortions", "value": 0.3987907348953007}, {"category": "Miscarriages", "value": 0.0933623794069266}]}, {"category": "Basilicata", "value": 1.2861519814147673, "subData": [{"category": "Live births", "value": 1.00670011110737}, {"category": "Abortions", "value": 0.2087471802296219}, {"category": "Miscarriages", "value": 0.0707046900777751}]}, {"category": "Calabria", "value": 1.9248339265660392, "subData": [{"category": "Live births", "value": 1.6378932942497668}, {"category": "Abortions", "value": 0.2136589451243885}, {"category": "Miscarriages", "value": 0.0732816871918838}]}, {"category": "Sicilia", "value": 2.491422069725684, "subData": [{"category": "Live births", "value": 2.1166598517306974}, {"category": "Abortions", "value": 0.2764493590997173}, {"category": "Miscarriages", "value": 0.0983128588952692}]}, {"category": "Sardegna", "value": 1.572258877403097, "subData": [{"category": "Live births", "value": 1.1719120456300551}, {"category": "Abortions", "value": 0.3461543672352359}, {"category": "Miscarriages", "value": 0.054192464537806}]}];
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

      createPie ("piediv-nord-19", piedivNord19);
      createPie ("piediv-centro-19", piedivCentro19);
      createPie ("piediv-sud-19", piedivSud19);



});
