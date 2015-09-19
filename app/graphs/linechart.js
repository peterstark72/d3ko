"use strict";
/*global define: true */
/*

LINECHART

Draws a multi-line linechart.  


*/

var d3 = require('d3');


var margin = {top: 20, right: 80, bottom: 50, left: 50},
    width,
    height;

var x = d3.time.scale(),
    y = d3.scale.linear();

function init(element) {

    // Sizes
    width = element.offsetWidth - margin.left - margin.right;
    height = element.offsetHeight - margin.top - margin.bottom;

    // Scales
    x.range([0, width]);
    y.range([height, 0]);

    d3.select(element).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
}

function update(element, options) {

    var data = options.data;

    var color = d3.scale.category10();

    if (data.length === 0) {
        return;
    }

    data.forEach(function (d) {
        d.date = new Date(d.date);
    });

    // Axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .ticks(d3.time.day)
        .tickFormat(d3.time.format("%Y-%m-%d"))
        .tickPadding(10)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .tickFormat(d3.format(","))
        .tickPadding(10)
        .orient("left");

    color.domain(d3.keys(data[0]).filter(function (key) { return key !== "date"; }));

    // We call the different lines categories
    var categories = color.domain().map(function (name) {
        return {
            name: name,
            values: data.map(function (d) {
                return {date: d.date, value: +d[name]};
            })
        };
    });

    // Set x and u domains
    x.domain(d3.extent(data, function (d) { return d.date; }));
    y.domain([
        d3.min(categories, function (c) { return d3.min(c.values, function (v) { return v.value; }); }),
        d3.max(categories, function (c) { return d3.max(c.values, function (v) { return v.value; }); })
    ]);

    // Define an SVG line with interpolation
    var line = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.value); });


    d3.select(element).select("svg")
        .selectAll("g")
        .remove();

    var svg = d3.select(element).select("svg")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Draw x axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "middle")
        .attr("dy", ".15em");

    // Draw y axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Antal");

    // Map categories to lines
    var cat = svg.selectAll(".cat")
        .data(categories)
        .enter()
        .append("g")
        .attr("class", "cat");

    // Draw the line
    cat.append("path")
        .attr("class", "line")
        .attr("d", function (d) { return line(d.values); })
        .style("stroke", function (d) { return color(d.name); });

    // Add labels
    cat.append("text")
        .datum(function (d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
        .attr("transform", function (d) { return "translate(" + x(d.value.date) + "," + y(d.value.value) + ")"; })
        .attr("x", 3)
        .attr("dy", ".35em")
        .text(function (d) { return d.name; });
}

exports.init = init;
exports.update = update;