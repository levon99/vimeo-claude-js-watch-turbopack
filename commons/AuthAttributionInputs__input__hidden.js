{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["AuthAttributionInputs", 0, function ({
    attribution: _v0
  }) {
    return _v0 ? (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v2.authAttributionFields)(_v0).map(([_v0, _v1]) => (0, _v1.jsx)("input", {
        type: "hidden",
        name: _v0,
        value: _v1
      }, _v0))
    }) : null;
  }]);
}