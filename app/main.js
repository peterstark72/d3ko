"use strict";
/*global require: true, requirejs: true */

requirejs.config({
    paths: {
        d3: "//cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min"
    }
});

require(['./gauges/percentage', './gauges/bars', './gauges/donut'], function (prcnt, bars, donut) {

    var COLOR_SCHEME = ["#d7191c", "#fdae61", "#ffffbf", "#abd9e9", "#2c7bb6"],
        CONTRAST_COLORS = ["#d7191c", "gray"];


    var e1 = document.getElementById("percentage");
    prcnt.init(e1);
    prcnt.update(e1, Math.random(), CONTRAST_COLORS);

    var e2 = document.getElementById("bars");
    bars.init(e2);
    bars.update(e2, [Math.random() * 100, Math.random() * 100], CONTRAST_COLORS);


    var e3 = document.getElementById("donut");
    donut.init(e3);
    donut.update(e3, [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100], COLOR_SCHEME);
});

