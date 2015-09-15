# Dashboard Gauges made with d3js

Gauges indicates measurement values in a data visualization dashboard. 

* Percentage Gauge - shows a percentage value (0 - 100%) inside a circle. A segment of the circle, same share of the circle as the percentage value, has a different color. Ie, the percentage value is shown both as text and visually.
* Bars Gauge - used to show values as a simple bar chart without axises; typically used to show Before and After, as two bars. 
* Donut Gauge - a donut chart that shows the percentage of each value in the relation to the sum of all values. 

The Gauges are implemented using [d3](http://d3js.org/).

## Getting started
```
> git clone git@github.com:peterstark72/d3gauges.git
> cd d3gauges
> python -m SimpleHTTPServer 8000
```
See a demo at `localhost:8000`.

## As KnockoutJS Bindings
It’s simple to use the gauges as KnockoutJS bindnings.
```
<span data-bind=”donut: [1, 2, 4]” class=”gauge”></span>
```

To set this up you need to register the ”donut” binding as such:
```
ko.bindingHandlers.donut = {
	update: function (element, valueAccessor) {
	    donut.update(element, ko.unwrap(valueAccessor()));
},
init: function (element) {
    donut.init(element);
}
};
```
## AMD
The gauges are implemented as AMD modules,       