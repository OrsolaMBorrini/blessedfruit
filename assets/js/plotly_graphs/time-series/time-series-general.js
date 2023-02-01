$(document).ready(function() {
  Plotly.d3.csv('assets/js/plotly_graphs/time-series/full_time_series_edit.csv', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var allCountryNames = unpack(rows, 'Region'),
        allYear = unpack(rows, 'Time'),
        allReligion = unpack(rows, 'Religious observation'),
        allPregnancies = unpack(rows, 'Total'),
        allEducation = unpack(rows, 'Female Early Leavers'),
        listofCountries = [],
        currentCountry,
        currentReligion = [],
        currentPregnancies = [],
        currentEducation = [],
        currentYear = [];

    for (var i = 0; i < allCountryNames.length; i++ ){
        if (listofCountries.indexOf(allCountryNames[i]) === -1 ){
            listofCountries.push(allCountryNames[i]);
        }
    }

    function getCountryData(chosenCountry) {
        currentReligion = [];
        currentPregnancies = [];
        currentEducation = [];
        currentYear = [];
        for (var i = 0 ; i < allCountryNames.length ; i++){
            if ( allCountryNames[i] === chosenCountry ) {
                currentReligion.push(allReligion[i]);
                currentPregnancies.push(allPregnancies[i]);
                currentEducation.push(allEducation[i]);
                currentYear.push(parseInt(allYear[i], 10));

            }
        }
    };

    // Default Country Data
    setLinePlot('Piemonte');

    function setLinePlot(chosenCountry) {
        getCountryData(chosenCountry);

        var trace1 = {
            x: currentYear,
            y: currentReligion,
            mode: 'lines+markers',
            name: 'Religious observance',
            marker: {
                size: 12,
                opacity: 0.7
            },
            line: { color: '#C70C43',
                    width: 3}
        };
        var trace2 = {
            x: currentYear,
            y: currentPregnancies,
            mode: 'lines+markers',
            name: 'Pregnancies',
            marker: {
                size: 12,
                opacity: 0.7
            },
            line: { color: '#DD8301',
                    width: 3}
        };
        var trace3 = {
            x: currentYear,
            y: currentEducation,
            mode: 'lines+markers',
            name: 'Female Early Leavers of Education',
            marker: {
                size: 12,
                opacity: 0.7
            },
            line: { color: '#52A84C',
                    width: 3},
        };

        var data = [trace1, trace2, trace3];

        var layout = {

            title: {
              text:chosenCountry},


            legend: {
              "orientation": "h",
              x: -0.022,
              y: -0.2
              // automargin:false,
              // margin-left:12
              // position: "bottomright"
            }
        };

        Plotly.newPlot('time-series-general', data, layout, {showSendToCloud: true});
};

var innerContainer2 = document.querySelector('[data-num="2"'),
    plotEl = innerContainer2.querySelector('.time-series-plot'),
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
