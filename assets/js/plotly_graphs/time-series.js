Plotly.d3.csv('visualisations/scripts/full_time_series.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

var allCountryNames = unpack(rows, 'Region'),
    allYear = unpack(rows, 'Time'),
    allGdp = unpack(rows, 'Religious observation'),
    listofCountries = [],
    currentCountry,
    currentGdp = [],
    currentYear = [];

  for (var i = 0; i < allCountryNames.length; i++ ){
    if (listofCountries.indexOf(allCountryNames[i]) === -1 ){
      listofCountries.push(allCountryNames[i]);
    }
  }

  function getCountryData(chosenCountry) {
    currentGdp = [];
    currentYear = [];
    for (var i = 0 ; i < allCountryNames.length ; i++){
      if ( allCountryNames[i] === chosenCountry ) {
        currentGdp.push(allGdp[i]);
        currentYear.push(allYear[i]);
      }
    }
  };

// Default Country Data
setBubblePlot('Piemonte');

function setBubblePlot(chosenCountry) {
    getCountryData(chosenCountry);

    var trace1 = {
      x: currentYear,
      y: currentGdp,
      mode: 'lines+markers',
      marker: {
        size: 12,
        opacity: 0.5
      }
    };

    var data = [trace1];

    var layout = {
      title: 'Religious observation per Region<br>'+ chosenCountry
    };

    Plotly.newPlot('plotdiv', data, layout, {showSendToCloud: true});
};

var innerContainer = document.querySelector('[data-num="0"'),
    plotEl = innerContainer.querySelector('.plot'),
    countrySelector = innerContainer.querySelector('.countrydata');

function assignOptions(textArray, selector) {
  for (var i = 0; i < textArray.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
  }
}

assignOptions(listofCountries, countrySelector);

function updateCountry(){
    setBubblePlot(countrySelector.value);
}

countrySelector.addEventListener('change', updateCountry, false);
});
