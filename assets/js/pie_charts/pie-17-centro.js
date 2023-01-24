


$(document).ready(function(){

  var root2 = am5.Root.new("piediv-centro-17");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root2.setThemes([am5themes_Animated.new(root2)]);

  var container2 = root2.container.children.push(
    am5.Container.new(root2, {
      width: am5.p100,
      height: am5.p100,
      layout: root2.horizontalLayout
    })
  );

  // Create main chart
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
  var chart2 = container2.children.push(
    am5percent.PieChart.new(root2, {
      tooltip: am5.Tooltip.new(root2, {})
    })
  );

  // Create series
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
  var series2 = chart2.series.push(
    am5percent.PieSeries.new(root2, {
      valueField: "value",
      categoryField: "category",
      alignLabels: false
    })
  );

  series2.labels.template.setAll({
    textType: "circular",
    radius: 4
  });
  series2.ticks.template.set("visible", false);
  series2.slices.template.set("toggleKey", "none");

  // add events
  series2.slices.template.events.on("click", function(e) {
    selectSlice(e.target);
  });

  // Create sub chart
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
  var subChart2 = container2.children.push(
    am5percent.PieChart.new(root2, {
      radius: am5.percent(50),
      tooltip: am5.Tooltip.new(root2, {})
    })
  );

  // Create sub series
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
  var subSeries2 = subChart2.series.push(
    am5percent.PieSeries.new(root2, {
      valueField: "value",
      categoryField: "category"
    })
  );

  subSeries2.data.setAll([
    { category: "A", value: 0 },
    { category: "B", value: 0 },
    { category: "C", value: 0 },
    { category: "D", value: 0 },
    { category: "E", value: 0 },
    { category: "F", value: 0 },
    { category: "G", value: 0 }
  ]);
  subSeries2.slices.template.set("toggleKey", "none");

  var selectedSlice2;

  series2.on("startAngle", function() {
    updateLines();
  });

  container2.events.on("boundschanged", function() {
    root2.events.on("frameended", function(){
      updateLines();
     })
  })

  function updateLines() {
    if (selectedSlice2) {
      var startAngle = selectedSlice2.get("startAngle");
      var arc = selectedSlice2.get("arc");
      var radius = selectedSlice2.get("radius");

      var x00 = radius * am5.math.cos(startAngle);
      var y00 = radius * am5.math.sin(startAngle);

      var x10 = radius * am5.math.cos(startAngle + arc);
      var y10 = radius * am5.math.sin(startAngle + arc);

      var subRadius = subSeries2.slices.getIndex(0).get("radius");
      var x01 = 0;
      var y01 = -subRadius;

      var x11 = 0;
      var y11 = subRadius;

      var point00 = series2.toGlobal({ x: x00, y: y00 });
      var point10 = series2.toGlobal({ x: x10, y: y10 });

      var point01 = subSeries2.toGlobal({ x: x01, y: y01 });
      var point11 = subSeries2.toGlobal({ x: x11, y: y11 });

      line0.set("points", [point00, point01]);
      line1.set("points", [point10, point11]);
    }
  }

  // lines
  var line0 = container2.children.push(
    am5.Line.new(root2, {
      position: "absolute",
      stroke: root2.interfaceColors.get("text"),
      strokeDasharray: [2, 2]
    })
  );
  var line1 = container2.children.push(
    am5.Line.new(root2, {
      position: "absolute",
      stroke: root2.interfaceColors.get("text"),
      strokeDasharray: [2, 2]
    })
  );

  // Set data
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
  series2.data.setAll([
    {
      category: "Piemonte",
      value: 362,
      subData: [
        { category: "Live births", value: 265 },
        { category: "Abortions", value: 81 },
        { category: "Miscarriages", value: 15 },

      ]
    },
    {
      category: "Valle d'Aosta",
      value: 320,
      subData: [
        { category: "A", value: 230 },
        { category: "B", value: 74 },
        { category: "C", value: 14 }
      ]
    },
    {
      category: "Liguria",
      value: 200,
      subData: [
        { category: "A", value: 110 },
        { category: "B", value: 60 },
        { category: "C", value: 30 }
      ]
    },
    {
      category: "Lombardia",
      value: 150,
      subData: [
        { category: "A", value: 80 },
        { category: "B", value: 40 },
        { category: "C", value: 30 }
      ]
    },

    {
      category: "Veneto",
      value: 140,
      subData: [
        { category: "A", value: 90 },
        { category: "B", value: 40 },
        { category: "C", value: 10 }
      ]
    },{
      category: "Friuli-Venezia Giulia",
      value: 140,
      subData: [
        { category: "A", value: 90 },
        { category: "B", value: 40 },
        { category: "C", value: 10 }
      ]
    },{
      category: "Trentino Alto Adige",
      value: 140,
      subData: [
        { category: "A", value: 90 },
        { category: "B", value: 40 },
        { category: "C", value: 10 }
      ]

    }
  ]);

  function selectSlice(slice) {
    selectedSlice = slice;
    var dataItem = slice.dataItem;
    var dataContext = dataItem.dataContext;

    if (dataContext) {
      var i = 0;
      subSeries2.data.each(function(dataObject) {
        var dataObj = dataContext.subData[i];
        if(dataObj){
            subSeries2.data.setIndex(i, dataObj);
            if(!subSeries2.dataItems[i].get("visible")){
                subSeries2.dataItems[i].show();
            }
        }
        else{
            subSeries2.dataItems[i].hide();
        }

        i++;
      });
    }

    var middleAngle = slice.get("startAngle") + slice.get("arc") / 2;
    var firstAngle = series2.dataItems[0].get("slice").get("startAngle");

    series2.animate({
      key: "startAngle",
      to: firstAngle - middleAngle,
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic)
    });
    series2.animate({
      key: "endAngle",
      to: firstAngle - middleAngle + 360,
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic)
    });
  }

  container2.appear(1000, 10);

  series2.events.on("datavalidated", function() {
    selectSlice(series2.slices.getIndex(0));


  });
});
