{
  "use strict";

  let _v1 = Symbol("@vimeo/tour-ui/meta"),
    _v2 = 0;
  _v0.s(["defineTour", 0, function (_v0, _v1) {
    let _v2 = `tour-${_v2++}`,
      _v3 = {},
      _v4 = [];
    for (let _v0 of Object.keys(_v1)) {
      let _v0 = {
        ..._v1[_v0],
        _id: `${_v2}:${_v0}`,
        _tourId: _v2,
        _key: _v0
      };
      _v3[_v0] = _v0, _v4.push(_v0);
    }
    return Object.defineProperty(_v3, _v1, {
      value: {
        tourId: _v2,
        name: _v0,
        list: _v4
      },
      enumerable: !1
    }), _v3;
  }, "getTourMeta", 0, function (_v0) {
    return _v0[_v1];
  }]);
}