"use strict";
/*global define: true */

define(['ko', '../graphs/donut'], function (ko, donut) {

    var html = "<div style='width:100%;height:100%' data-bind='donutwidget: options'></div>";

    ko.bindingHandlers.donutwidget = {
        init: function (element) {
            donut.init(element);
        },
        update: function (element, valueAccessor) {

            var params = valueAccessor();
            var opts = {
                data: ko.unwrap(params.data),
                colors: ko.unwrap(params.colors)
            };

            donut.update(element, opts);
        }
    };

    function ViewModel(params) {
        this.options = params;
    }

    return {template: html, viewModel: ViewModel};
});