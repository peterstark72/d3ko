"use strict";
/*global define: true */

var ko = require('knockout');
var barswidget = require('../graphs/barswidget');

var html = "<div style='width:100%;height:100%' data-bind='barswidget: options'></div>";

ko.bindingHandlers.barswidget = {
    init: function (element) {
        barswidget.init(element);
    },
    update: function (element, valueAccessor) {
        var params = ko.unwrap(valueAccessor());

        console.log("Update Params ", params);

        if (params.hasOwnProperty("data")) {
            barswidget.update(element, params.data());
        }
    }
};

function ViewModel(params) {
    this.options = params;
}

module.exports = function () {
    return {template: html, viewModel: ViewModel};
};
