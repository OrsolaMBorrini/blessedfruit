$(document).ready(function() {
  Plotly.d3.csv('visualisations/scripts/full_time_series.csv', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var allCountryNames = unpack(rows, 'Region'),
        allYear = unpack(rows, 'Time'),
        allLiveBirths = unpack(rows, 'Religious observation'),
        allAbortions = unpack(rows, 'Total'),
        allMiscarriages = unpack(rows, 'Early leavers absolute value'),
        listofCountries = [],
        currentCountry,
        currentLiveBirths = [],
        currentAbortions = [],
        currentMiscarriages = [],
        currentYear = [];

    for (var i = 0; i < allCountryNames.length; i++ ){
        if (listofCountries.indexOf(allCountryNames[i]) === -1 ){
            listofCountries.push(allCountryNames[i]);
        }
    }

    function getCountryData(chosenCountry) {
        currentLiveBirths = [];
        currentAbortions = [];
        currentMiscarriages = [];
        currentYear = [];
        for (var i = 0 ; i < allCountryNames.length ; i++){
            if ( allCountryNames[i] === chosenCountry ) {
                currentLiveBirths.push(allLiveBirths[i]);
                currentAbortions.push(allAbortions[i]);
                currentMiscarriages.push(allMiscarriages[i]);
                currentYear.push(allYear[i]);
            }
        }
    };

    // Default Country Data
    setLinePlot('Piemonte');

    function setLinePlot(chosenCountry) {
        getCountryData(chosenCountry);

        var trace1 = {
            x: currentYear,
            y: currentLiveBirths,
            mode: 'lines+markers',
            name: 'Religious observance',
            marker: {
                size: 12,
                opacity: 0.5
            },
            line: { color: '#52A84C' }
        };
        var trace2 = {
            x: currentYear,
            y: currentAbortions,
            mode: 'lines+markers',
            name: 'Pregnancies',
            marker: {
                size: 12,
                opacity: 0.5
            },
            line: { color: '#C70C43' }
        };
        var trace3 = {
            x: currentYear,
            y: currentMiscarriages,
            mode: 'lines+markers',
            name: 'Female Early Leavers of Education',
            marker: {
                size: 12,
                opacity: 0.5
            },
            line: { color: '#DD8301' }
        };

        var data = [trace1, trace2, trace3];

        var layout = {
            title: chosenCountry
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
    setLinePlot(countrySelector2.value);
}

document.querySelector('.countrydata2').addEventListener('change', updateCountry2, false);
});
});
