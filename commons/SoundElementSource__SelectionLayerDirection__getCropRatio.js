{
  "use strict";

  _v0.s(["SoundElementSource", 0, {
    LIBRARY: "LIB",
    USER_UPLOAD: "UPL"
  }], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    TOP_RIGHT: "tr",
    TOP_LEFT: "tl",
    BOTTOM_RIGHT: "br",
    BOTTOM_LEFT: "bl",
    LEFT: "l",
    RIGHT: "r",
    TOP: "t",
    BOTTOM: "b"
  };
  _v0.s(["SelectionLayerDirection", 0, _v3], 0), _v0.s(["getCropRatio", 0, _v0 => {
    let _v1 = "freeform",
      _v2 = (0, _v1.default)(_v0.width / _v0.height, 2);
    return Object.entries(_v2.OrientationRatio).forEach(([_v0, _v1]) => {
      (0, _v1.default)(_v1, 2) === _v2 && (_v1 = _v0);
    }), _v1;
  }, "isLeftDrag", 0, _v0 => _v0 === _v3.LEFT || _v0 === _v3.BOTTOM_LEFT || _v0 === _v3.TOP_LEFT, "isTopDrag", 0, _v0 => _v0 === _v3.TOP || _v0 === _v3.TOP_LEFT || _v0 === _v3.TOP_RIGHT, "rectToSourceFootageRect", 0, (_v0, _v1, _v2) => {
    let _v3 = _v0.width * _v2.width,
      _v4 = _v0.height * _v2.height,
      _v5 = _v2.width / _v3,
      _v6 = _v2.height / _v4,
      _v7 = _v0.width - _v1.width,
      _v8 = _v0.height - _v1.height,
      _v9 = _v0.x + _v0.width - (_v1.x + _v1.width),
      _v10 = _v0.y + _v0.height - (_v1.y + _v1.height);
    return {
      x: (0, _v1.default)((_v7 - _v9) * _v5, 5),
      y: (0, _v1.default)((_v8 - _v10) * _v6, 5),
      width: (0, _v1.default)(_v1.width * _v5, 5),
      height: (0, _v1.default)(_v1.height * _v6, 5)
    };
  }, "wrappingRectsFromRect", 0, (_v0, _v1) => {
    let _v2 = {
        x: _v1.x,
        y: _v1.y,
        width: _v0.x - _v1.x,
        height: _v1.height
      },
      _v3 = {
        x: _v0.x,
        y: _v1.y,
        height: _v0.y - _v1.y,
        width: _v0.width
      };
    return {
      left: _v2,
      right: {
        x: _v0.x + _v0.width,
        y: _v1.y,
        height: _v1.height,
        width: _v1.x + _v1.width - (_v0.x + _v0.width)
      },
      top: _v3,
      bottom: {
        x: _v0.x,
        y: _v0.y + _v0.height,
        height: _v1.y + _v1.height - (_v0.y + _v0.height),
        width: _v0.width
      }
    };
  }], 0), _v0.s(["isInclusiveRange", 0, (_v0, _v1, _v2) => _v0 >= Math.min(_v1, _v2) && _v0 <= Math.max(_v1, _v2), "truncateFloat", 0, (_v0, _v1 = 4) => parseFloat(_v0.toFixed(_v1))], 0);
}