"use strict";
/*global define:true*/

define(['ko', 'd3', './widgets/bars', './widgets/donut', './widgets/percentage', './charts/areachart', './charts/linechart'], function (ko, d3, bars, donut, percentage, areachart, linechart) {

    return (function () {

        function createBinding(module) {
            return {
                update: function (element, valueAccessor, allBindings) {
                    module.update(element, ko.unwrap(valueAccessor()), allBindings);
                },
                init: function (element) {
                    module.init(element);
                }
            };
        }

        ko.bindingHandlers.barwidget = createBinding(bars);
        ko.bindingHandlers.donutwidget = createBinding(donut);
        ko.bindingHandlers.percwidget = createBinding(percentage);

        ko.bindingHandlers.areachart = createBinding(areachart);
        ko.bindingHandlers.linechart = createBinding(linechart);


        /*
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

        /*
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

        /** Helper function to create component registration object with an HTML template*/
        function createComponent(bindings) {
            return {template: "<div style='width:100%;height:100%' data-bind='" + bindings + "'></div>"};
        }

        ko.components.register("barwidget", createComponent('barwidget: data'));
        ko.components.register("percwidget", createComponent('percwidget: value'));
        ko.components.register("donutwidget", createComponent('donutwidget: data, colors: colors'));

        ko.components.register("linechart", createComponent('linechart: data'));
        ko.components.register("areachart", createComponent('areachart: data'));

        console.log("Knockout is ready!");
    }());
});