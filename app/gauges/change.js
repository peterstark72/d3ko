"use strict";
/*global define: true */

define(['d3'], function (d3) {

    var y = d3.scale.linear();

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

    function update(element, data, colors) {

        if (data.length === 0) {
            // No data, return
            return;
        }

        var color = d3.scale.ordinal().range(colors),
            width = element.offsetWidth,
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
            .attr("width", barWidth - 1)
            .attr("fill", function (d, i) {return color(i); });

    }

    return {init: init, update: update};
});