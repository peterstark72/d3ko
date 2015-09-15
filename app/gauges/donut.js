"use strict";
/*global define: true */

/*

    Donut chart

*/

define(['d3'], function (d3) {

    var arc = d3.svg.arc(),
        labelarc = d3.svg.arc(),
        pie = d3.layout.pie().sort(null);

    function init(element) {

        var width   = element.offsetWidth,
            height  = element.offsetHeight,
            radius  = Math.min(width, height) / 2;

        arc.outerRadius(radius).innerRadius(radius * 0.6);
        labelarc.outerRadius(radius * 0.6).innerRadius(radius * 0.3);

        d3.select(element).append("svg")
                .attr("width", width)
                .attr("height", height)
            .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    }

    function update(element, data, colors) {

        var color = d3.scale.ordinal().range(colors),
            svg = d3.select(element).select("svg");
        svg.select("g").selectAll(".arc").remove();

        var shares,
            total = d3.sum(data);
        if (total === 0) {
            shares = [1, 0];
        } else {
            shares = data.map(function (d) {return d / total; });
        }

        var g = svg.select("g")
                .selectAll(".arc")
                .data(pie(shares))
                .enter().append("g")
                .attr("class", "arc");

        g.append("path")
            .attr("d", arc)
            .style("fill", function (d, i) { return color(i); });

        g.append("text")
            .attr("transform", function (d) { return "translate(" + labelarc.centroid(d) + ")"; })
            .style("text-anchor", "middle")
            .attr("dx", "-13px")
            .attr("style", "font-size: 1em; font-weight: bold; font-family: sans-serif")
            .attr("fill", "black")
            .text(function (d) { return d.data > 0 ? parseInt(100 * d.data, 10) + "%" : ""; });
    }

    return {
        init: init,
        update: update
    };
});