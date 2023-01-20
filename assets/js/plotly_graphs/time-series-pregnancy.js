Plotly.d3.csv('visualisations/scripts/full_time_series.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

var allCountryNames = unpack(rows, 'Region'),
    allYear = unpack(rows, 'Time'),
    allValues = unpack(rows, 'Total'),
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
      line: { color: '#52A84C' }
    };

    var data = [trace1];

    var layout = {
      title: 'Total Pregnancies<br>'+ chosenCountry
    };

    Plotly.newPlot('plotdiv-pregnancy', data, layout, {showSendToCloud: true});
};

var innerContainer2 = document.querySelector('[data-num="2"'),
    plotEl = innerContainer2.querySelector('.plot'),
    countrySelector2 = innerContainer2.querySelector('.countrydata2');

function assignOptions(textArray, selector) {
  for (var i = 0; i < textArray.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
  }
}

assignOptions(listofCountries, countrySelector2);

function updateCountry2(){
    setBubblePlot(countrySelector2.value);
}

document.querySelector('.countrydata2').addEventListener('change', updateCountry2, false);
});
