{
  "use strict";

  function _v1(_v0) {
    this._context = _v0;
  }
  _v1.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function (_v0, _v1) {
      switch (_v0 *= 1, _v1 *= 1, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(_v0, _v1) : this._context.moveTo(_v0, _v1);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(_v0, _v1);
      }
    }
  }, _v0.s(["default", 0, function (_v0) {
    return new _v1(_v0);
  }]);
}