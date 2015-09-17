"use strict";
/*global define: true */

/*

    Areachart
    

*/

define(['d3'], function (d3) {

    var margin = {top: 20, right: 80, bottom: 50, left: 50},
        width,
        height;

    var x = d3.time.scale();
    var y = d3.scale.linear();

    function init(element) {

        width = element.offsetWidth  - margin.left - margin.right;
        height = element.offsetHeight - margin.top - margin.bottom;

        x.range([0, width]);
        y.range([height, 0]);

        d3.select(element).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);

    }

    function update(element, options) {

        var data = options.data,
            ticks = options.ticks || 'day',
            fmt = options.fmt || "%Y-%m-%d";

        console.log("Areachart Options", options);

        var xAxis = d3.svg.axis()
            .scale(x)
            .ticks(d3.time[ticks])
            .tickFormat(d3.time.format(fmt))
            .tickPadding(10)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .tickFormat(d3.format(","))
            .tickPadding(10)
            .orient("left");

        var area = d3.svg.area()
            .x(function (d) { return x(d.date); })
            .y0(height)
            .y1(function (d) { return y(d.value); });

        data.forEach(function (d) {
            d.date = new Date(d.date);
        });

        x.domain(d3.extent(data, function (d) { return d.date; }));
        y.domain([0, d3.max(data, function (d) { return d.value; })]);

        d3.select(element).select("svg")
            .selectAll("g").remove();

        var svg = d3.select(element).select("svg")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "middle")
            .attr("dx", "-.8em")
            .attr("dy", ".15em");

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Antal");

        svg.append("path")
            .datum(data)
            .attr("class", "area")
            .attr("d", area);
    }

    return {init: init, update: update};
});