{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v1.generateCategoricalChart)({
      chartName: "PieChart",
      GraphicalChild: _v5.Pie,
      validateTooltipEventTypes: ["item"],
      defaultTooltipEventType: "item",
      legendContent: "children",
      axisComponents: [{
        axisType: "angleAxis",
        AxisComp: _v2.PolarAngleAxis
      }, {
        axisType: "radiusAxis",
        AxisComp: _v3.PolarRadiusAxis
      }],
      formatAxisMap: _v4.formatAxisMap,
      defaultProps: {
        layout: "centric",
        startAngle: 0,
        endAngle: 360,
        cx: "50%",
        cy: "50%",
        innerRadius: 0,
        outerRadius: "80%"
      }
    });
  _v0.s(["PieChart", 0, _v6]);
}