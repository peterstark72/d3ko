"use strict";

var ko = require('knockout');
var percwidget = require('../graphs/percwidget');


var html = "<div style='width:100%;height:100%' data-bind='percwidget: options'></div>";

ko.bindingHandlers.percwidget = {
    init: function (element) {
        percwidget.init(element);
    },
    update: function (element, valueAccessor) {

        var params = valueAccessor();

        console.log("Update Params ", params);

        percwidget.update(element, ko.unwrap(params.value));
    }
};

module.exports = function () {
    return {
        template: html,
        viewModel: function (params) {this.options = params; }
    };
};