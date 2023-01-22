$(document).ready(function() {
  Plotly.d3.csv('full_df_17_1.csv', function(err, rows) {


        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }
      var allRegions = unpack(rows, 'Region'),
        allYear1 = unpack(rows, 'Time'),
        allBirths = unpack(rows, 'Live_births'),
        allAbort = unpack(rows, 'Abortions'),
        allMiscar = unpack(rows, 'Miscarriages'),
        listofRegions = [],
        listofYears1 = [],
        currentRegion,
        currentBirths = [],
        currentAbort = [],
        currentMiscar = [];
        // chosenYear=2017;
    //Multiply
        //
        // allRegions.forEach((value,index)=>allRegions[index]*=100);
        // allBirths.forEach((value,index)=>allBirths[index]*=100);
        // allAbort.forEach((value,index)=>allAbort[index]*=100);
        // allMiscar.forEach((value,index)=>allMiscar[index]*=100);

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

      function getData(chosenRegion, chosenYear) {
        currentBirths = [];
        currentAbort = [];
        currentMiscar = [];
        for (var i = 0; i < allRegions.length; i++) {
          if (allRegions[i] === chosenRegion && allYear1[i] === chosenYear) {
            currentBirths.push(allBirths[i]);
            currentAbort.push(allAbort[i]);
            currentMiscar.push(allMiscar[i]);
            console.log(currentAbort);
            console.log(chosenRegion);
      }
    }
  };

  // Default Country Data
  setPiePlot('Piemonte',2017);


  function setPiePlot(chosenRegion, chosenYear) {
    var tracePie;
    getData(chosenRegion, chosenYear);
    tracePie = {
      values: [currentBirths.map(value => value * 100), currentAbort.map(value => value * 100), currentMiscar.map(value => value * 100)],
      labels: ['Live Births', 'Abortions', 'Miscarriages'],
      type: 'pie'
    };

    console.log(tracePie);



    var dataPreg = [tracePie];

    var layoutPie = {

      title: '<b>Pregnancy statistics <br>'+ chosenRegion + ' ' + chosenYear,
      showlegend: true
    };

    Plotly.plot('pie-pregnancies', dataPreg, layoutPie);
};

var innerContainer4 = document.querySelector('[data-num="4"'),
    pieEl = innerContainer4.querySelector('.pie'),
    regionSelector = innerContainer4.querySelector('.countrydata-pie'),
    yearSelector1= innerContainer4.querySelector('.yeardata-pie');


// FIX THIS!!!!!!!!!
function assignOptions(textArray, selector) {
  for (var i = 0; i < textArray.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
      console.log(regionSelector);
      console.log(pieEl);
  }
}

assignOptions(listofYears1, yearSelector1);
assignOptions(listofRegions, regionSelector);


function updateRegion(){
      setPiePlot(regionSelector.value, yearSelector1.value);
  };

//
function updateYear1(){
      setPiePlot(regionSelector.value, yearSelector1.value);

};

document.querySelector('.countrydata-pie').addEventListener('change', updateRegion, false);
document.querySelector('.yeardata-pie').addEventListener('change', updateYear1, false);
});
});
// });


// Plotly.d3.csv('visualisations/scripts/full_df_17.csv', function(err, rows){
//   function unpack(rows, key) {
//       return rows.map(function(row) { return row[key]; });
//   }
//
// var data = [{
//   values: [19, 26, 55],
//   labels: ['Residential', 'Non-Residential', 'Utility'],
//   type: 'pie'
// }];
//
// var layout = {
//   height: 400,
//   width: 500
// };
//
// Plotly.newPlot('pie-pregnancies', data, layout);
