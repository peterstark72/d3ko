"use strict";
/*global define: true */

/**
 * Bars
*/
define(['d3'], function (d3) {

    var y = d3.scale.linear();

    /**Init bars at the ement*/
    function init(element) {
        // Inititalizes the SVG element with size
        var width = element.offsetWidth,
            height = element.offsetHeight;

        y.range([height, 0]);

        d3.select(element)
            .append("svg")
            .attr("width", width)
            .attr("height", height);
    }

    /**
     * Update bars with data and a color array
     * @params element - The DOM element
     * @params {Array} data - An array of values
     * @params {Array} colors - An array of CSS colors
    */
    function update(element, data) {

        console.log("Bars: ", data);

        if (data.length === 0) {
            // No data, return
            return;
        }

        var width = element.offsetWidth,
            height = element.offsetHeight,
            barWidth = width / data.length;

        var svg = d3.select(element).select("svg");

        // Remove old elements, if any
        svg.selectAll("g").remove();

        var bar = svg.selectAll("g")
                    .data(data)
                    .enter()
                    .append("g")
                    .attr("transform", function (d, i) { return "translate(" + i * barWidth + ",0)"; });

        y.domain([0, d3.max(data, function (d) { return d; })]);

        bar.append("rect")
            .attr("y", function (d) { return y(d); })
            .attr("height", function (d) { return height - y(d); })
            .attr("width", barWidth - 1);

    }

    return {init: init, update: update};
});