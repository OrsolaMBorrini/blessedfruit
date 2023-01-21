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


    function getCountryData(chosenCountry, chosenYear) {
        currentLiveBirths = [];
        currentAbortions = [];
        currentMiscarriages = [];
        for (var i = 0 ; i < allCountryNames.length ; i++){
            if ( allCountryNames[i] === chosenCountry && allYear[i] === chosenYear) {
                currentLiveBirths.push(allLiveBirths[i]);
                currentAbortions.push(allAbortions[i]);
                currentMiscarriages.push(allMiscarriages[i]);
            }
        }
    }

    // Default Country Data
    setPiePlot('Piemonte', '2017', 'pie-preg-17');
    setPiePlot('Piemonte', '2018', 'pie-preg-18');
    setPiePlot('Piemonte', '2019', 'pie-preg-19');

    function setPiePlot(chosenCountry, chosenYear, plotId) {
        getCountryData(chosenCountry, chosenYear);

        var trace1 = {
            values: [currentLiveBirths, currentAbortions, currentMiscarriages],
            labels: ['Religious observance', 'Pregnancies', 'Female Early Leavers of Education'],
            type: 'pie'
        };

        var data = [trace1];

        var layout = {
            title: 'Data for ' + chosenCountry + ' in ' + chosenYear
        };

        Plotly.newPlot(plotId, data, layout, {showSendToCloud: true});
    }

    var innerContainer4 = document.querySelector('[data-num="4"');
    var innerContainer5 = document.querySelector('[data-num="5"');
    var innerContainer6 = document.querySelector('[data-num="6"');

    var regionSelector4 = innerContainer4.querySelector('.countrydata-pie');
    var yearSelector4 = innerContainer4.querySelector('.yeardata-pie');

    var regionSelector5 = innerContainer5.querySelector('.countrydata-pie');
    var yearSelector5 = innerContainer5.querySelector('.yeardata-pie');

    var regionSelector6 = innerContainer6.querySelector('.countrydata-pie');
    var yearSelector6 = innerContainer6.querySelector('.yeardata-pie');

    assignOptions(listofYears1, yearSelector4);
    assignOptions(listofYears1, yearSelector5);
    assignOptions(listofYears1, yearSelector6);

    assignOptions(listofRegions, regionSelector4);
    assignOptions(listofRegions, regionSelector5);
    assignOptions(listofRegions, regionSelector6);

    function updateRegion4(){
        setPiePlot(regionSelector4.value, yearSelector4.value, 'pie-preg-17');
    }

    function updateRegion5(){
        setPiePlot(regionSelector5.value, yearSelector5.value, 'pie-preg-18');
    }

    function updateRegion6(){
        setPiePlot(regionSelector6.value, yearSelector6.value, 'pie-preg-19');
    }

    regionSelector4.addEventListener('change', updateRegion4, false);
    yearSelector4.addEventListener('change', updateRegion4, false);

    regionSelector5.addEventListener('change', updateRegion5, false);
    yearSelector5.addEventListener('change', updateRegion5, false);

    regionSelector6.addEventListener('change', updateRegion6, false);
    yearSelector6.addEventListener('change', updateRegion6, false);


// Plotly.d3.csv('visualisations/scripts/full_time_series.csv', function(err, rows){
//
//     function unpack(rows, key) {
//         return rows.map(function(row) { return row[key]; });
//     }
//
// var allCountryNames = unpack(rows, 'Region'),
//     allYear = unpack(rows, 'Time'),
//     allEarlyLeavers = unpack(rows, 'Early leavers absolute value'),
//     allPregnancies = unpack(rows, 'Total'),
//     allReligion = unpack(rows, 'Religious Observation'),
//     listofCountries = [],
//     currentCountry,
//     currentEarlyLeavers = [],
//     currentReligion = [],
//     currentPregnancy = [],
//
//
//     currentYear = [];
//
//   for (var i = 0; i < allCountryNames.length; i++ ){
//     if (listofCountries.indexOf(allCountryNames[i]) === -1 ){
//       listofCountries.push(allCountryNames[i]);
//     }
//   }
//
//   function getCountryData(chosenCountry) {
//     currentReligion = [];
//     currentPregnancy =[];
//     currentEarlyLeavers = [];
//     currentYear = [];
//     for (var i = 0 ; i < allCountryNames.length ; i++){
//       if ( allCountryNames[i] === chosenCountry ) {
//         currentReligion.push(allReligion[i]);
//         currentPregnancy.push(allPregnancy[i]);
//         currentEarlyLeavers.push(allEarlyLeavers[i])
//         currentYear.push(allYear[i]);
//       }
//     }
//   };
//
// // Default Country Data
// setBubblePlot('Piemonte');
//
// function setBubblePlot(chosenCountry) {
//     getCountryData(chosenCountry);
//
//     var trace1 = {
//       x: currentYear,
//       y: currentReligion,
//       mode: 'lines+markers',
//       marker: {
//         size: 12,
//         opacity: 0.5
//       },
//       line: { color: '#DD8301' }
//     };
//
//     var trace2={
//       x: currentYear,
//       y: currentPregnancy,
//       mode: 'lines+markers',
//       marker: {
//         size: 12,
//         opacity: 0.5
//       },
//       line: { color: '#DD8301' }
//     };
//
//
//     var trace3={
//       x: currentYear,
//       y: currentEarlyLeavers,
//       mode: 'lines+markers',
//       marker: {
//         size: 12,
//         opacity: 0.5
//       },
//       line: { color: '#DD8301' }
//     };
//     }
//
//     var data = [trace1, trace2, trace3];
//
//     var layout = {
//       title: 'Early leavers of education<br>'+ chosenCountry
//     };
//
//     Plotly.newPlot('plotdiv-education', data, layout, {showSendToCloud: true});
// });
//
// var innerContainer3 = document.querySelector('[data-num="3"'),
//     plotEl = innerContainer3.querySelector('.plot'),
//     countrySelector3 = innerContainer3.querySelector('.countrydata3');
//
// function assignOptions(textArray, selector) {
//   for (var i = 0; i < textArray.length;  i++) {
//       var currentOption = document.createElement('option');
//       currentOption.text = textArray[i];
//       selector.appendChild(currentOption);
//   }
// }
//
// assignOptions(listofCountries, countrySelector3);
//
// function updateCountry3(){
//     setBubblePlot(countrySelector3.value);
// }
//
// document.querySelector('.countrydata3').addEventListener('change', updateCountry3, false);
});
