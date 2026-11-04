{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["LocalizationTrackingProvider", 0, ({
    resourceType: _v0,
    resourceId: _v1,
    surface: _v2,
    children: _v3
  }) => {
    let _v4 = (0, _v2.useMemo)(() => ({
      resourceType: _v0,
      resourceId: _v1,
      surface: _v2
    }), [_v0, _v1, _v2]);
    return (0, _v1.jsx)(_v3.LocalizationTrackingContext.Provider, {
      value: _v4,
      children: _v3
    });
  }]);
}