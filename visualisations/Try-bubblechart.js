// create svg element for the char

//var svg = d3.select("bubble").append("svg")
//            .attr("width", "70vw")
//            .attr("height", "40vh");
    
//    var data = [
//        {x: 10, y: 20, r: 5, name: "Bubble 1", color: "red"},
//        {x: 20, y: 30, r: 10, name: "Bubble 2", color: "blue"},
//        {x: 30, y: 40, r: 15, name: "Bubble 3", color: "green"}
//    ];

// to convert the strings to numbers, you can use the d3.csvParse()
var religiousPerc = "Percentage"
var earlyLeavPerc = "Female Early Leavers"
var pregPerc = "Total"

d3.queue()
    .defer(d3.csv, "../data/mashupDS/MD1_17.csv")
    .defer(d3.csv, "../data/mashupDS/MD2_17.csv")
    .defer(d3.csv, "../data/mashupDS/MD3_17.csv")
    .await(function(error, data1, data2, data3) {
        if (error) { console.error(error); return; }


        // select specific columns from each file
        var data = data1.map(function(d, i) {
            return {x: +d.religiousPerc, y: +data2[i].earlyLeavPerc, r: +data3[i].pregPerc};
        });

        // use the data to create the chart
        var svg = d3.select("bubble")
                    .append("svg")
                    .attr("width", "70vw")
                    .attr("height", "40vh");


        var bubbles = svg.selectAll("circle")
                        .data(data)
                        .enter()
                        .append("circle")
                        .attr("cx", function(d) { return d.x; })
                        .attr("cy", function(d) { return d.y; })
                        .attr("r", function(d) { return d.r; });
    });

