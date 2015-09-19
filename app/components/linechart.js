"use strict";

var ko = require('knockout');
var linechart = require('../graphs/linechart');

var html = "<div style='width:100%;height:100%' data-bind='linechart: options'></div>";

ko.bindingHandlers.linechart = {
    init: function (element) {
        linechart.init(element);
    },
    update: function (element, valueAccessor) {

        var params = valueAccessor();
        var opts = {
            data: ko.unwrap(params.data)
        };

        linechart.update(element, opts);
    }
};

function ViewModel(params) {
    this.options = params;
}

module.exports = function () {
    return {template: html, viewModel: ViewModel};
};