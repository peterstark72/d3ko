"use strict";
/*global define: true */

define(['ko', '../graphs/areachart'], function (ko, areachart) {

    var html = "<div style='width:100%;height:100%' data-bind='areachart: options'></div>";

    ko.bindingHandlers.areachart = {
        init: function (element) {
            areachart.init(element);
        },
        update: function (element, valueAccessor) {

            var params = valueAccessor();
            var opts = {
                data: ko.unwrap(params.data),
                ticks: ko.unwrap(params.ticks),
                fmt: ko.unwrap(params.fmt)
            };

            areachart.update(element, opts);
        }
    };

    function ViewModel(params) {
        this.options = params;
    }

    return {template: html, viewModel: ViewModel};
});