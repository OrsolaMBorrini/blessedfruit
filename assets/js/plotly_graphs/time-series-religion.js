Plotly.d3.csv('visualisations/scripts/full_time_series_1.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

var allCountryNames = unpack(rows, 'Region'),
    allYear = unpack(rows, 'Time'),
    allValues = unpack(rows, 'Religious observation'),
    listofCountries = [],
    currentCountry,
    currentValue = [],
    currentYear = [];

  for (var i = 0; i < allCountryNames.length; i++ ){
    if (listofCountries.indexOf(allCountryNames[i]) === -1 ){
      listofCountries.push(allCountryNames[i]);
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
  };

// Default Country Data
setBubblePlot('Piemonte');

function setBubblePlot(chosenCountry) {
    getCountryData(chosenCountry);

    var trace1 = {
      x: currentYear,
      y: currentValue,
      mode: 'lines+markers',
      marker: {
        size: 12,
        opacity: 0.5
      },
      line: { color: '#C70C43' }
    };


    var data = [trace1];

    var layout = {
      title: 'Religious observance <br>'+ chosenCountry
    };

    Plotly.newPlot('plotdiv-religion', data, layout, {showSendToCloud: true});
};

var innerContainer1 = document.querySelector('[data-num="1"'),
    plotEl = innerContainer1.querySelector('.plot'),
    countrySelector1 = innerContainer1.querySelector('.countrydata1');

function assignOptions(textArray, selector) {
  for (var i = 0; i < textArray.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
  }
}

assignOptions(listofCountries, countrySelector1);

function updateCountry1(){
    setBubblePlot(countrySelector1.value);
}

document.querySelector('.countrydata1').addEventListener('change', updateCountry1, false);
});
