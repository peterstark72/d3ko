"use strict";
/*global define:true*/

define(['ko', 'd3'], function (ko, d3) {

    return (function () {

        /**
         * Creates 'number' and 'fmt' binding to format numbers
         * 'number' is a string that will get converted to JS Float
         * 'fmt' is d3.format specifier, see d3
         */
        ko.bindingHandlers.number = {
            //Formatted numbers
            update: function (element, valueAccessor, allBindings) {
                var t = parseFloat(ko.unwrap(valueAccessor()), 10);
                var f = allBindings.get('fmt') || "s";
                console.log(t, f, d3.format(f)(t));
                element.innerHTML = d3.format(f)(t);
            }
        };

        /**
         * Creates 'time' and 'fmt' binding to format time
         * 'time' is a string that will get converted to a date
         * 'fmt' is d3.time.format specifier, see d3
         */
        ko.bindingHandlers.time = {
            update: function (element, valueAccessor, allBindings) {
                var t = new Date(ko.unwrap(valueAccessor()));
                var f = allBindings.get('fmt') || "%Y-%m-%d";
                console.log(t, f, d3.format(f)(t));
                element.innerHTML = d3.time.format(f)(t);
            }
        };


        /**
         * Register components
         */
        ko.components.register("barswidget", {require: "./components/barswidget"});
        ko.components.register("percwidget", {require: "./components/percwidget"});
        ko.components.register("donutwidget", {require: "./components/donut"});
        ko.components.register("areachart", {require: "./components/areachart"});
        ko.components.register("linechart", {require: "./components/linechart"});
        console.log("Knockout is ready!");
    }());
});