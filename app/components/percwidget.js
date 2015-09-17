"use strict";
/*global define: true */

define(['ko', '../graphs/percwidget'], function (ko, percwidget) {

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

    return {
        template: html,
        viewModel: function (params) {this.options = params; }
    };
});