"use strict";
/*global define: true */

/*

    Donut chart

*/

var d3 = require('d3');


var arc = d3.svg.arc(),
    labelarc = d3.svg.arc(),
    pie = d3.layout.pie().sort(null);

var width,
    height,
    radius;

function init(element) {

    width = element.offsetWidth;
    height = element.offsetHeight;
    radius = Math.min(width, height) / 2;

    arc.outerRadius(radius).innerRadius(radius * 0.6);
    labelarc.outerRadius(radius * 0.6).innerRadius(radius * 0.3);

    d3.select(element).append("svg")
            .attr("width", width)
            .attr("height", height)
        .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
}

function update(element, options) {

    console.log("Donut options = ", options);

    var data = options.data,
        color = options.colors ? d3.scale.ordinal().range(options.colors) : d3.scale.category10();

    var svg = d3.select(element).select("svg");

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
        .attr("font-family", "sans-serif")
        .attr("font-weight", "bold")
        .attr("font-size", 0.12 * radius + "px")
        .attr("fill", "black")
        .text(function (d) { return d.data > 0 ? parseInt(100 * d.data, 10) + "%" : ""; });
}

exports.init = init;
exports.update = update;