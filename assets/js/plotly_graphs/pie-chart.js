document.addEventListener('DOMContentLoaded', function() {
  Plotly.d3.csv('visualisations/scripts/full_time_series_1.csv', function(err, rows) {

  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var allRegions = unpack(rows, 'Region'),
    allYear = unpack(rows, 'Time'),
    allLiveBirths = unpack(rows, 'Live_births'),
    allAbortions = unpack(rows, 'Abortions'),
    allMiscarriages = unpack(rows, 'Miscarriages'),
    listofRegions = [],
    listofYears = [],
    currentRegion,
    currentLiveBirths = [],
    currentAbortions = [],
    currentMiscarriages = [],
    currentYear = [];

  for (var i = 0; i < allRegions.length; i++) {
    if (listofRegions.indexOf(allRegions[i]) === -1) {
      listofRegions.push(allRegions[i]);
    }
  }

  for (var i = 0; i < allYear.length; i++) {
    if (listofYears.indexOf(allYear[i]) === -1) {
      listofYears.push(allYear[i]);
    }
  }

  function getCountryData(chosenRegion) {
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

  function getYearData(chosenYear) {
    currentLiveBirths = [];
    currentAbortions = [];
    currentMiscarriages = [];
    currentRegion = [];
    for (var i = 0; i < allYear.length; i++) {
      if (allYear[i] === chosenYear) {
        currentLiveBirths.push(allLiveBirths[i]);
        currentAbortions.push(allAbortions[i]);
        currentMiscarriages.push(allMiscarriages[i]);
        currentRegion.push(allRegions[i]);
      }
    }
  }

  // Default Country Data
  setPiePlot('Piemonte', '2000');

  function setPiePlot(chosenRegion, chosenYear) {
    getCountryData(chosenRegion);
    getYearData(chosenYear);

    var trace1 = {
      values: [currentLiveBirths, currentAbortions, currentMiscarriages],
      labels: ['Live Births', 'Abortions', 'Miscarriages'],
      type: 'pie'
    };

    var data = [trace1];

    var layout = {

      title: '<b>Pregnancy statistics <br>'+ chosenRegion + ' '+ chosenYear,
      showlegend: true
    };

    Plotly.newPlot('pie-pregnancies', data, layout, {showSendToCloud: true, mode: 'pie'});
};

var RegionSelector = document.querySelector('.countrydata'),
    yearSelector = document.querySelector('.yeardata');

function assignOptions(textArray, selector) {
  for (var i = 0; i < textArray.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
  }
}

assignOptions(listofYears, yearSelector);

function updateCountry(){
    setPiePlot(RegionSelector.value,yearSelector.value);
}

function updateYear(){
    setPiePlot(RegionSelector.value,yearSelector.value);
}

document.querySelector('.countrydata').addEventListener('change', updateCountry, false);
document.querySelector('.yeardata').addEventListener('change', updateYear, false);
});

});
