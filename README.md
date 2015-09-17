# Knockout Components made with d3 for Data Visualization Dashboards


Widgets indicates measurement values in a data visualization dashboard. 

* Percentage - shows a percentage value (0 - 100%) inside a circle. A segment of the circle, same share of the circle as the percentage value, has a different color. Ie, the percentage value is shown both as text and visually.
* Barwidget - used to show values as a simple bar chart without axises; typically used to show Before and After, as two bars. 
* Donutwidget - a donut chart that shows the percentage of each value in the relation to the sum of all values. 


Charts used for timeseries:
* Areachart
* Linechart


```
<percwidget params="value: value" class="widget md"></percwidget>
<barwidget params="data: bars" class="widget md"></barwidget>
<donutwidget params="data: shares, colors: colors" class="widget md">
	
</donutwidget>

<linechart params="data: ts" class="chart"></linechart>
<areachart params="data: ts" class="chart"></areachart>
```