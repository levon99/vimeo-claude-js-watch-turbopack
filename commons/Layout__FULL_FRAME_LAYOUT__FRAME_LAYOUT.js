{
  "use strict";

  _v0.s(["Layout", 0, {
    FULL_FRAME: "FULL_FRAME_LAYOUT",
    FRAME: "FRAME_LAYOUT"
  }], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = ({
    rect: _v0,
    deltaRect: _v1
  }) => {
    let {
      x: _v2 = 0,
      y: _v3 = 0,
      width: _v4 = 0,
      height: _v5 = 0
    } = _v1;
    return {
      x: _v0.x + _v2,
      y: _v0.y + _v3,
      width: _v0.width + _v4,
      height: _v0.height + _v5
    };
  };
  _v0.s(["getDeltaRect", 0, ({
    prevRect: _v0,
    nextRect: _v1
  }) => ({
    x: _v1.x - (_v0.x ?? 0),
    y: _v1.y - (_v0.y ?? 0),
    width: _v1.width - (_v0.width ?? 0),
    height: _v1.height - (_v0.height ?? 0)
  }), "getRectFromResizableRect", 0, _v0 => ({
    x: _v0.left,
    y: _v0.top,
    width: _v0.width,
    height: _v0.height
  }), "getRectInPercentage", 0, (_v0, _v1) => ({
    x: _v0.x / _v1.width,
    y: _v0.y / _v1.height,
    width: _v0.width / _v1.width,
    height: _v0.height / _v1.height
  }), "getRectInPx", 0, (_v0, _v1) => ({
    x: _v0.x * _v1.width,
    y: _v0.y * _v1.height,
    width: _v0.width * _v1.width,
    height: _v0.height * _v1.height
  }), "getRectWithDelta", 0, _v3, "getRectWithPadding", 0, (_v0, _v1 = {}) => {
    let _v2 = _v0.width * (_v1.left || 0),
      _v3 = _v0.height * (_v1.top || 0);
    return {
      x: _v0.x - _v2,
      y: _v0.y - _v3,
      width: _v0.width * (1 + (_v1.left || 0) + (_v1.right || 0)),
      height: _v0.height * (1 + (_v1.top || 0) + (_v1.bottom || 0))
    };
  }, "getResizedRect", 0, (_v0, _v1, _v2) => {
    let _v3 = _v0.width / _v0.height,
      _v4 = _v1.width - _v0.width,
      _v5 = _v1.height - _v0.height,
      _v6 = {
        ..._v1
      };
    switch (_v2) {
      case _v2.SelectionLayerDirection.RIGHT:
      case _v2.SelectionLayerDirection.LEFT:
        _v6.height = _v0.height + _v4 / _v3, _v6.y = _v0.y - _v4 / _v3 / 2;
        break;
      case _v2.SelectionLayerDirection.TOP:
      case _v2.SelectionLayerDirection.BOTTOM:
        _v6.width = _v0.width + _v5 * _v3, _v6.x = _v0.x - _v5 * _v3 / 2;
        break;
      case _v2.SelectionLayerDirection.TOP_RIGHT:
      case _v2.SelectionLayerDirection.BOTTOM_RIGHT:
        _v6.width = _v0.width + _v5 * _v3;
        break;
      case _v2.SelectionLayerDirection.TOP_LEFT:
      case _v2.SelectionLayerDirection.BOTTOM_LEFT:
        _v6.width = _v0.width + _v5 * _v3, _v6.x = _v0.x - _v5 * _v3;
    }
    return _v6;
  }, "getResizedRectByResizedMultiRect", 0, ({
    originalRect: _v0,
    originalMultiRect: _v1,
    deltaMultiRect: _v2
  }) => {
    let _v3 = {
      x: (_v0.x - _v1.x) / _v1.width,
      y: (_v0.y - _v1.y) / _v1.height,
      width: _v0.width / _v1.width,
      height: _v0.height / _v1.height
    };
    return _v3({
      rect: _v0,
      deltaRect: {
        x: _v2.x + _v2.width * _v3.x,
        y: _v2.y + _v2.height * _v3.y,
        width: _v2.width * _v3.width,
        height: _v2.height * _v3.height
      }
    });
  }, "getRoundedRect", 0, _v0 => ({
    x: (0, _v1.default)(_v0.x, 5),
    y: (0, _v1.default)(_v0.y, 5),
    width: (0, _v1.default)(_v0.width, 5),
    height: (0, _v1.default)(_v0.height, 5)
  }), "getSourceFootageRectRelativeToStage", 0, (_v0, _v1) => ({
    width: _v0.width / _v1.width,
    height: _v0.height / _v1.height,
    x: _v0.x - _v1.x * _v0.width / _v1.width,
    y: _v0.y - _v1.y * _v0.height / _v1.height
  }), "pointInPolygon", 0, (_v0, _v1, _v2) => {
    let _v3 = !1;
    for (let _v0 = 0, _v1 = _v2.length - 1; _v0 < _v2.length; _v1 = _v0++) {
      let _v0 = _v2[_v0].x,
        _v1 = _v2[_v0].y,
        _v2 = _v2[_v1].x,
        _v3 = _v2[_v1].y;
      _v1 > _v1 != _v3 > _v1 && _v0 < (_v2 - _v0) * (_v1 - _v1) / (_v3 - _v1) + _v0 && (_v3 = !_v3);
    }
    return _v3;
  }, "rotate", 0, (_v0, _v1, _v2, _v3, _v4) => {
    let _v5 = _v4 * Math.PI / 180;
    return {
      x: (_v0 - _v2) * Math.cos(_v5) - (_v1 - _v3) * Math.sin(_v5) + _v2,
      y: (_v0 - _v2) * Math.sin(_v5) + (_v1 - _v3) * Math.cos(_v5) + _v3
    };
  }], 0);
}