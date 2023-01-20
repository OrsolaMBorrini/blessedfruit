Plotly.d3.csv('visualisations/scripts/full_time_series.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

var allCountryNames = unpack(rows, 'Region'),
    allYear = unpack(rows, 'Time'),
    allValues = unpack(rows, 'Religious observation'),
    listofCountries = [],
    listofYears = [],
    currentCountry,
    currentValue = [],
    currentYear = [];

  for (var i = 0; i < allCountryNames.length; i++ ){
    if (listofCountries.indexOf(allCountryNames[i]) === -1 ){
      listofCountries.push(allCountryNames[i]);
    }
  }

  for (var i = 0; i < allYear.length; i++ ){
    if (listofYears.indexOf(allYear[i]) === -1 ){
      listofYears.push(allYear[i]);
    }
  }

  function getCountryData(chosenCountry) {
    currentValue = [];
    currentYear = [];
    for (var i = 0 ; i < allCountryNames.length ; i++){
      if ( allCountryNames[i] === chosenCountry ) {
        currentValue.push(allValues[i]);
        currentYear.push(allYear[i]);
      }
    }
  }

  function getYearData(chosenYear) {
    currentValue = [];
    currentCountry = [];
    for (var i = 0 ; i < allYear.length ; i++){
      if ( allYear[i] === chosenYear ) {
        currentValue.push(allValues[i]);
        currentCountry.push(allCountryNames[i]);
      }
    }
  }

// Default Country Data
setPiePlot('Piemonte', '2000');

function setPiePlot(chosenCountry, chosenYear) {
    getCountryData(chosenCountry);
    getYearData(chosenYear);

    var trace1 = {
      values: currentValue,
      labels: currentCountry,
    };

    var data = [trace1];

    var layout = {
      title: '<b>Religious observance</b> <br>'+ chosenCountry + ' '+ chosenYear,
      showlegend: true
    };

    Plotly.newPlot('pie-religion', data, layout, {showSendToCloud: true, mode: 'pie'});
};

var countrySelector = document.querySelector('.countrydata'),
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
    setPiePlot(countrySelector.value,yearSelector.value);
}

function updateYear(){
    setPiePlot(countrySelector.value,yearSelector.value);
}

document.querySelector('.countrydata').addEventListener('change', updateCountry, false);
document.querySelector('.yeardata').addEventListener('change', updateYear, false);
});
