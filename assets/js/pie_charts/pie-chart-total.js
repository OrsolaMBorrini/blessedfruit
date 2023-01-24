
$(document).ready(function(){
  createPieChart("piediv-north-17", [
    { category: "A", value: 10 },
    { category: "B", value: 20 },
    { category: "C", value: 30 },
    { category: "D", value: 40 }
  ], [
    { category: "A", value: 80 },
    { category: "B", value: 10 },
    { category: "C", value: 20 },
    { category: "D", value: 40 },
    { category: "E", value: 20 },
    { category: "F", value: 9 },
    { category: "G", value: 40 }
  ]);




  createPieChart("piediv-centro-17", [
    { category: "A", value: 15 },
    { category: "B", value: 25 },
    { category: "C", value: 35 },
    { category: "D", value: 45 }
  ]);
  createPieChart("piediv-south-17", [
    { category: "A", value: 20 },
    { category: "B", value: 30 },
    { category: "C", value: 40 },
    { category: "D", value: 50 }
  ])
});

function createPieChart(rootId,data,subchartData) {
  var root = am5.Root.new(rootId);
  root.setThemes([am5themes_Animated.new(root)]);

  var container = root.container.children.push(
    am5.Container.new(root, {
      width: am5.p100,
      height: am5.p100,
      layout: root.horizontalLayout
    })
  );

  var chart = container.children.push(
    am5percent.PieChart.new(root, {
      tooltip: am5.Tooltip.new(root, {})
    })
  );

  var series = chart.series.push(
    am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category",
    alignLabels: false
  })
  );

  series.labels.template.setAll({
  textType: "circular",
  radius: 4
  });
  series.ticks.template.set("visible", false);
  series.slices.template.set("toggleKey", "none");
  series.data.setAll(data);

  series.slices.template.events.on("click", function(e) {
    selectSlice(e.target, subSeries);
    updateLines();
  });

  var subSeries = createSubChart(root, container, subchartData);
  updateSubChartData(subSeries, subchartData);
  //
  // var subSeries = createSubChart(root, container);
  // updateSubChartData(subSeries, [
  // { category: "A", value: 0 },
  // { category: "B", value: 0 },
  // { category: "C", value: 0 },
  // { category: "D", value: 0 },
  // { category: "E", value: 0 },
  // { category: "F", value: 0 },
  // { category: "G", value: 0 }
  // ]);

  container.events.on("boundschanged", function() {
  root.events.on("frameended", function(){
    updateLines();
  })
  })

  container.appear(1000, 10);

  series.events.on("datavalidated", function() {
    selectSlice(series.slices.getIndex(0), subSeries);
  });
  }


  function createSubChart(root,container, subchartData) {
    var subChart = container.children.push(
      am5percent.PieChart.new(root, {
        radius: am5.percent(50),
        tooltip: am5.Tooltip.new(root, {})
      })
    );

    var subSeries = subChart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category"
      })
    );
    subSeries.data.setAll(subchartData);
    subSeries.slices.template.set("toggleKey", "none");
    return subSeries;
  }

function updateSubChartData(subSeries, subchartData) {
  subSeries.data.setAll(data);
}

// var selectedSlice;


function selectSlice(slice,subSeries) {
  selectedSlice = slice;
  var dataItem = slice.dataItem;
  var dataContext = dataItem.dataContext;

  if (dataContext) {
    var i = 0;
    subSeries.data.each(function(dataObject) {
      var dataObj = dataContext.subchartDdata[i];
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