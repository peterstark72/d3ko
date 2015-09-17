# Knockout Components made with d3 for Data Visualization Dashboards

Widgets and Charts, created with [d3](http://d3js.org), are defined as [Knockout Components](http://knockoutjs.com/documentation/component-overview.html) so they can be embedded with customer elements and dynamic data.  

With this Knockout Viewmodel: 
```
{
	clickrate: ko.observable(),
	users: ko.observableArray(),
	dailymessages: ko.observableArray(),
  dailyActiveUsers: ko.observableArray(),
}
```
You can create the following widgets and charts:
```
<percwidget params="value: clickRate”></percwidget>
<barwidget params="data: bars" ></barwidget>
<donutwidget params="data: users, colors: colors"></donutwidget>

<linechart params="data: dailymessages”></linechart>
<areachart params="data: dailyActiveUsers”></areachart>
```

## Percentage Widget
Shows a percentage value inside an circle. One arc in the circle represents the percentage (full circle is 100%). 
```
<percwidget params="value: value"></percwidget>
```
Where `value` is a number between 0 and 1, i.e. 0% - 100%. 

Example usage: Any %-ratio, such as click-rate, opening-rate, ration between new and returning visitors. 


## Bars Widget
Shows naked bars, without axis or labels, based on an array of values. 
```
<barwidget params="data: values”></barwidget> 
```
Where `values´ is an array of numbers. 

Example usage: Two bars representing a measurement value before and after a specific period. 

## Donut Widget
```
<donutwidget params=”data: users, colors: colorScheme”></donutwidget>
```
