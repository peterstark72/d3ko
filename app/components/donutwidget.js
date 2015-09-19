"use strict";

var ko = require('knockout');
var donutwidget = require('../graphs/donut');

var html = "<div style='width:100%;height:100%' data-bind='donutwidget: options'></div>";

ko.bindingHandlers.donutwidget = {
    init: function (element) {
        donutwidget.init(element);
    },
    update: function (element, valueAccessor) {

        var params = valueAccessor();
        var opts = {
            data: ko.unwrap(params.data),
            colors: ko.unwrap(params.colors)
        };

        donutwidget.update(element, opts);
    }
};

function ViewModel(params) {
    this.options = params;
}

module.exports = function () {
    return {template: html, viewModel: ViewModel};
};