$(document).ready(function() {
  Plotly.d3.csv('visualisations/scripts/full_time_series.csv', function(err, rows) {

  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var allRegions = unpack(rows, 'Region'),
    allYear1 = unpack(rows, 'Time'),
    allLiveBirths = unpack(rows, 'Live_births'),
    allAbortions = unpack(rows, 'Abortions'),
    allMiscarriages = unpack(rows, 'Miscarriages'),
    listofRegions = [],
    listofYears1 = [],
    currentRegion,
    currentLiveBirths = [],
    currentAbortions = [],
    currentMiscarriages = [];

    for (var i = 0; i < allRegions.length; i++) {
    if (listofRegions.indexOf(allRegions[i]) === -1) {
      listofRegions.push(allRegions[i]);
    }
  }

  for (var i = 0; i < allYear1.length; i++) {
    if (listofYears1.indexOf(allYear1[i]) === -1) {
      listofYears1.push(allYear1[i]);
    }
  }

  function getRegionData(chosenRegion) {
    console.log("getRegionData function called with chosenRegion: " + chosenRegion);
    currentLiveBirths = [];
    currentAbortions = [];
    currentMiscarriages = [];
    for (var i = 0; i < allRegions.length; i++) {
      if (allRegions[i] === chosenRegion) {
        currentLiveBirths.push(allLiveBirths[i]);
        currentAbortions.push(allAbortions[i]);
        currentMiscarriages.push(allMiscarriages[i]);


      }
    }
  }

  function getYearData(chosenYear1) {
    console.log("getYearData function called with chosenYear: " + chosenYear1);

    currentLiveBirths = [];
    currentAbortions = [];
    currentMiscarriages = [];
    for (var i = 0; i < allYear1.length; i++) {
      if (allYear1[i] === chosenYear1) {
        currentLiveBirths.push(allLiveBirths[i]);
        currentAbortions.push(allAbortions[i]);
        currentMiscarriages.push(allMiscarriages[i]);

      }
    }
  }

  // Default Country Data
  setPiePlot('Piemonte', '2017');

  function setPiePlot(chosenRegion, chosenYear1) {
    console.log("setPiePlot function called with chosenRegion: " + chosenRegion + " and chosenYear: " + chosenYear1);

    getRegionData(chosenRegion);
    getYearData(chosenYear1);

    var trace1 = {
      values: [currentLiveBirths, currentAbortions, currentMiscarriages],
      labels: ['Live Births', 'Abortions', 'Miscarriages'],
      type: 'pie'
    };

    var data = [trace1];

    var layout = {

      title: '<b>Pregnancy statistics <br>'+ chosenRegion + ' '+ chosenYear1,
      showlegend: true
    };

    Plotly.newPlot('pie-pregnancies', data, layout, {showSendToCloud: true, mode: 'pie'});
};

var innerContainer4 = document.querySelector('[data-num="4"'),
    pieEl = innerContainer4.querySelector('.pie'),
    regionSelector = innerContainer4.querySelector('.countrydata-pie'),
    yearSelector1= innerContainer4.querySelector('.yeardata-pie');
function assignOptions(textArray, selector) {
  for (var i = 0; i < textArray.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
  }
}

assignOptions(listofYears1, yearSelector1);
assignOptions(listofRegions, regionSelector);


function updateRegion(){
    setPiePlot(regionSelector.value,yearSelector1.value);
}

function updateYear1(){
    setPiePlot(regionSelector.value,yearSelector1.value);
}

regionSelector.addEventListener('change', updateRegion, false);
yearSelector1.addEventListener('change', updateYear1, false);
});
});
