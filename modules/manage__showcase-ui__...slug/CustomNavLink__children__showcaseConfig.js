{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["CustomNavLink", 0, ({
    children: _v0,
    to: _v1,
    ..._v2
  }) => {
    let {
        showcaseConfig: {
          showcaseId: _v3
        }
      } = (0, _v3.useStore)(_v0 => _v0.commonStore),
      _v4 = `${_v4.ShowcaseRouteMap.BASE_URL}${_v3}${_v1}`;
    return (0, _v1.jsx)(_v2.NavLink, {
      to: _v4,
      ..._v2,
      children: _v0
    });
  }]);
}