"use strict";
/*global require: true, requirejs: true, window: true */

requirejs.config({
    paths: {
        d3: "/lib/d3.min",
        ko: "/lib/knockout-3.3.0"
    }
});

require(['ko', 'd3', './ko-config'], function (ko, d3) {

    var vm = {
        today: new Date(),
        ts: ko.observableArray([]),
        shares: ko.observableArray([]),
        value: ko.observable(null),
        bars: ko.observableArray([]),
        colors: ["#d7191c", "#fdae61", "#ffffbf", "#abd9e9", "#2c7bb6"],
        areaopts: {
            ticks: d3.time.week
        }
    };

    console.log("Lets go");

    ko.applyBindings(vm);

    window.setTimeout(function () {vm.value(Math.random()); }, 1000);
    window.setTimeout(function () {vm.value(Math.random()); }, 3000);
    window.setTimeout(function () {vm.value(Math.random()); }, 5000);


    window.setTimeout(function () {vm.shares([Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]); }, 1000);
    window.setTimeout(function () {vm.shares([Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]); }, 3000);
    window.setTimeout(function () {vm.shares([Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]); }, 5000);


    window.setTimeout(function () {vm.bars([100 * Math.random(), 100 * Math.random()]); }, 1000);
    window.setTimeout(function () {vm.bars([100 * Math.random(), 100 * Math.random()]); }, 3000);
    window.setTimeout(function () {vm.bars([100 * Math.random(), 100 * Math.random()]); }, 5000);

    window.setTimeout(function () {vm.ts([{date: "2015-05-01", value: 100 * Math.random()}, {date: "2015-05-02", value: 100 * Math.random()}, {date: "2015-05-03", value: 100 * Math.random()}, {date: "2015-05-04", value: 100 * Math.random()}, {date: "2015-05-05", value: 100 * Math.random()}]); }, 1000);
    window.setTimeout(function () {vm.ts([{date: "2015-05-01", value: 100 * Math.random()}, {date: "2015-05-02", value: 100 * Math.random()}, {date: "2015-05-03", value: 100 * Math.random()}, {date: "2015-05-04", value: 100 * Math.random()}, {date: "2015-05-05", value: 100 * Math.random()}]); }, 3000);
    window.setTimeout(function () {vm.ts([{date: "2015-05-01", value: 100 * Math.random()}, {date: "2015-05-02", value: 100 * Math.random()}, {date: "2015-05-03", value: 100 * Math.random()}, {date: "2015-05-04", value: 100 * Math.random()}, {date: "2015-05-05", value: 100 * Math.random()}]); }, 5000);
});

