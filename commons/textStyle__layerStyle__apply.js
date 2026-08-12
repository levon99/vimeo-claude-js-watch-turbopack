{
  "use strict";

  var _v1 = new Set([..._v0.i(0).propNames, "textStyle", "layerStyle", "apply", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]),
    _v2 = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
  _v0.s(["shouldForwardProp", 0, function (_v0) {
    return _v2.has(_v0) || !_v1.has(_v0);
  }]);
}