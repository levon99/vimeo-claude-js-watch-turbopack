{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v1.generateCategoricalChart)({
      chartName: "BarChart",
      GraphicalChild: _v2.Bar,
      defaultTooltipEventType: "axis",
      validateTooltipEventTypes: ["axis", "item"],
      axisComponents: [{
        axisType: "xAxis",
        AxisComp: _v3.XAxis
      }, {
        axisType: "yAxis",
        AxisComp: _v4.YAxis
      }],
      formatAxisMap: _v5.formatAxisMap
    });
  _v0.s(["BarChart", 0, _v6]);
}