"use strict";
/*global define: true */

/**
 * Percentage Widget
 * 
 * The module provides two function:
 * 
 * init() - Initializes the widget element, sets size and creates SVG
 * 
 * update() - Updates the widget with new data
 *
 */

var d3 = require('d3');

var pie = d3.layout.pie().sort(null),
    arc = d3.svg.arc();

/**
 * Creates inital markup
 * 
 * @param element {DOMElement}
 */
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
        .data(pie([0, 1])) // Init data
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

/**
 * Updates the widget with new data
 * 
 * @param element {DOMElemernt} - the element
 * @param value {float} - value between 0 and 1
 *
 */
function update(element, value) {

    console.log("Percentage: ", value);

    // All above 1 is 
    var p = value > 1 ? 1 : value;

    var svg = d3.select(element).select("svg");

    svg.selectAll(".arc")
        .select("path")
        .data(pie([p, 1 - p]))
        .attr("d", arc);

    var textItems = [Math.round(100 * p), '%'];

    svg.select("text")
        .selectAll("tspan")
        .text(function (d, i) {return textItems[i]; });
}

exports.init = init;
exports.update = update;
