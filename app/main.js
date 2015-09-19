"use strict";

var ko = require('knockout');

var barswidget = require('./components/barswidget');
var percwidget = require('./components/percwidget');
var donutwidget = require('./components/donutwidget');
var areachart = require('./components/areachart');
var linechart = require('./components/linechart');

ko.components.register("barswidget", barswidget());
ko.components.register("percwidget", percwidget());
ko.components.register("donutwidget", donutwidget());
ko.components.register("areachart", areachart());
ko.components.register("linechart", linechart());


var vm = {
    today: new Date(),
    ts: ko.observableArray([]),
    shares: ko.observableArray([]),
    value: ko.observable(null),
    bars: ko.observableArray([]),
    colors: ["#d7191c", "#fdae61", "#ffffbf", "#abd9e9", "#2c7bb6"]
};

ko.applyBindings(vm);

console.log("Lets go");

/*
    
    Generate some random data

*/

vm.value(Math.random());
vm.value(Math.random());
vm.value(Math.random());


vm.shares([Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]);
vm.shares([Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]);
vm.shares([Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]);


vm.bars([100 * Math.random(), 100 * Math.random()]);
vm.bars([100 * Math.random(), 100 * Math.random()]);
vm.bars([100 * Math.random(), 100 * Math.random()]);

vm.ts([{date: "2015-05-01", value: 100 * Math.random()}, {date: "2015-05-02", value: 100 * Math.random()}, {date: "2015-05-03", value: 100 * Math.random()}, {date: "2015-05-04", value: 100 * Math.random()}, {date: "2015-05-05", value: 100 * Math.random()}]);
vm.ts([{date: "2015-05-01", value: 100 * Math.random()}, {date: "2015-05-02", value: 100 * Math.random()}, {date: "2015-05-03", value: 100 * Math.random()}, {date: "2015-05-04", value: 100 * Math.random()}, {date: "2015-05-05", value: 100 * Math.random()}]);
vm.ts([{date: "2015-05-01", value: 100 * Math.random()}, {date: "2015-05-02", value: 100 * Math.random()}, {date: "2015-05-03", value: 100 * Math.random()}, {date: "2015-05-04", value: 100 * Math.random()}, {date: "2015-05-05", value: 100 * Math.random()}]);

