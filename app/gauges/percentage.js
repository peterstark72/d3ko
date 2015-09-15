"use strict";
/*global define: true */

define(['d3'], function (d3) {

    var pie = d3.layout.pie().sort(null),
        arc = d3.svg.arc();

    function init(element) {

        var width = element.offsetWidth,
            height = element.offsetHeight,
            radius = Math.min(width, height) / 2;

        var svg = d3.select(element).append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        arc.outerRadius(radius).innerRadius(0.75 * radius);

        var g = svg.selectAll(".arc")
            .data(pie([0, 1]))
            .enter()
            .append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", arc);


        // Text for value and %-sign
        var t = svg.append("text")
            .attr("font-family", "sans-serif")
            .attr("x", 0)
            .attr("y", 0)
            .attr("dy", radius * 0.2)
            .attr("text-anchor", "middle");

        // Value
        t.append("tspan")
            .attr("font-size", radius * 0.6 + "px")
            .attr("font-weight", "bold");

        // Percentage-sign
        t.append("tspan")
            .attr("font-size", radius * 0.5 + "px")
            .attr("font-weight", "normal");
    }

    function update(element, value, colors) {

        var color = d3.scale.ordinal().range(colors);

        // Everything more than 1 is 1
        var p = value > 1 ? 1 : value,
            data = [p, 1 - p];

        var svg = d3.select(element);

        svg.selectAll(".arc")
            .data(pie(data))
            .select("path")
            .attr("d", arc)
            .attr("fill", function (d, i) {return color(i); });

        var textItems = [Math.round(100 * p), '%'];

        svg.select("text")
            .selectAll("tspan")
            .text(function (d, i) {return textItems[i]; });
    }

    return {init: init, update: update};
});
