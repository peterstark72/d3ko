"use strict";
/*global define: true */


/*
    
    


*/


define(['d3'], function (d3) {

    var width,
        height;

    /* Creates the SVG element*/
    function init(element) {

        width = element.offsetWidth;
        height = element.offsetHeight;

        d3.select(element)
            .append("svg")
            .attr("width", width)
            .attr("height", height);
    }

    /* Updates data and redraws the bars*/
    function update(element, data) {

        if (data.length === 0) {
            return;
        }

        var svg = d3.select(element).select("svg");

        // Remove old elements, if any
        svg.selectAll("g").remove();

        var barWidth = width / data.length,
            bar = svg.selectAll("g")
                    .data(data)
                    .enter()
                    .append("g")
                    .attr("transform", function (d, i) { return "translate(" + i * barWidth + ",0)"; });

        // Y scale
        var y = d3.scale.linear();
        y.range([height, 0]);
        y.domain([0, d3.max(data, function (d) { return d; })]);

        // Draw the rectangles
        bar.append("rect")
            .attr("y", function (d) { return y(d); })
            .attr("height", function (d) { return height - y(d); })
            .attr("width", barWidth - 1);
    }

    return {init: init, update: update};
});