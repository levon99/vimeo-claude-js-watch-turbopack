{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["changeButtonFontSizeByOrientation", 0, (_v0, _v1, _v2) => _v1 === _v2 ? _v0 : _v0 * (_v2.ORIENTATION_MAP[_v1].width / _v2.ORIENTATION_MAP[_v2].width), "changeRectByOrientation", 0, (_v0 = _v1.DEFAULT_RECT, _v1, _v2, _v3) => {
    let _v4 = _v2.ORIENTATION_MAP[_v1].width / _v2.ORIENTATION_MAP[_v2].width,
      _v5 = _v2.ORIENTATION_MAP[_v1].height / _v2.ORIENTATION_MAP[_v2].height,
      _v6 = {
        width: _v0.width * _v4,
        height: _v0.height * _v5,
        x: _v0.x,
        y: _v0.y
      };
    if (_v3) {
      let _v0 = _v0.width - _v6.width,
        _v1 = _v0.height - _v6.height;
      _v6.x = _v0.x + _v0 / 2, _v6.y = _v0.y + _v1 / 2;
    }
    return _v6;
  }, "changeTextFontSizeByOrientation", 0, (_v0, _v1, _v2) => _v0 * (_v2.ORIENTATION_MAP[_v1].height / _v2.ORIENTATION_MAP[_v2].height), "getOrientation", 0, (_v0, _v1) => {
    if (_v0 === _v1) return _v3.Orientation.SQUARE;
    let _v2 = _v0 / _v1;
    return .05 > Math.abs(_v2 - .8) ? _v3.Orientation.OR_4_5 : .05 > Math.abs(_v2 - 4 / 3) ? _v3.Orientation.OR_4_3 : .05 > Math.abs(_v2 - 3 / 4) ? _v3.Orientation.OR_3_4 : .05 > Math.abs(_v2 - 2 / 3) ? _v3.Orientation.OR_2_3 : .05 > Math.abs(_v2 - 1.6) ? _v3.Orientation.OR_16_10 : .05 > Math.abs(_v2 - 2) ? _v3.Orientation.OR_2_1 : _v0 > _v1 ? _v3.Orientation.LANDSCAPE : _v3.Orientation.PORTRAIT;
  }, "toBaseOrientation", 0, function (_v0) {
    switch (_v0) {
      case "landscape":
      case "16-10":
      case "4-3":
      case "2-1":
      default:
        return "landscape";
      case "square":
        return "square";
      case "portrait":
      case "4-5":
      case "2-3":
      case "3-4":
        return "portrait";
    }
  }]);
}