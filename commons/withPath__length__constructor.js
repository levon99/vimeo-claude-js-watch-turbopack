{
  "use strict";

  let _v1 = Math.PI,
    _v2 = 2 * _v1,
    _v3 = _v2 - 1e-6;
  function _v4(_v0) {
    this._ += _v0[0];
    for (let _v0 = 1, _v1 = _v0.length; _v0 < _v1; ++_v0) this._ += arguments[_v0] + _v0[_v0];
  }
  class _v5 {
    constructor(_v0) {
      this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == _v0 ? _v4 : function (_v0) {
        let _v1 = Math.floor(_v0);
        if (!(_v1 >= 0)) throw Error(`invalid digits: ${_v0}`);
        if (_v1 > 15) return _v4;
        let _v2 = 10 ** _v1;
        return function (_v0) {
          this._ += _v0[0];
          for (let _v0 = 1, _v1 = _v0.length; _v0 < _v1; ++_v0) this._ += Math.round(arguments[_v0] * _v2) / _v2 + _v0[_v0];
        };
      }(_v0);
    }
    moveTo(_v0, _v1) {
      this._append`M${this._x0 = this._x1 = +_v0},${this._y0 = this._y1 = +_v1}`;
    }
    closePath() {
      null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
    }
    lineTo(_v0, _v1) {
      this._append`L${this._x1 = +_v0},${this._y1 = +_v1}`;
    }
    quadraticCurveTo(_v0, _v1, _v2, _v3) {
      this._append`Q${+_v0},${+_v1},${this._x1 = +_v2},${this._y1 = +_v3}`;
    }
    bezierCurveTo(_v0, _v1, _v2, _v3, _v4, _v5) {
      this._append`C${+_v0},${+_v1},${+_v2},${+_v3},${this._x1 = +_v4},${this._y1 = +_v5}`;
    }
    arcTo(_v0, _v1, _v2, _v3, _v4) {
      if (_v0 *= 1, _v1 *= 1, _v2 *= 1, _v3 *= 1, (_v4 *= 1) < 0) throw Error(`negative radius: ${_v4}`);
      let _v5 = this._x1,
        _v6 = this._y1,
        _v7 = _v2 - _v0,
        _v8 = _v3 - _v1,
        _v9 = _v5 - _v0,
        _v10 = _v6 - _v1,
        _v11 = _v9 * _v9 + _v10 * _v10;
      if (null === this._x1) this._append`M${this._x1 = _v0},${this._y1 = _v1}`;else if (_v11 > 1e-6) if (Math.abs(_v10 * _v7 - _v8 * _v9) > 1e-6 && _v4) {
        let _v0 = _v2 - _v5,
          _v1 = _v3 - _v6,
          _v2 = _v7 * _v7 + _v8 * _v8,
          _v3 = Math.sqrt(_v2),
          _v4 = Math.sqrt(_v11),
          _v5 = _v4 * Math.tan((_v1 - Math.acos((_v2 + _v11 - (_v0 * _v0 + _v1 * _v1)) / (2 * _v3 * _v4))) / 2),
          _v6 = _v5 / _v4,
          _v7 = _v5 / _v3;
        Math.abs(_v6 - 1) > 1e-6 && this._append`L${_v0 + _v6 * _v9},${_v1 + _v6 * _v10}`, this._append`A${_v4},${_v4},0,0,${+(_v10 * _v0 > _v9 * _v1)},${this._x1 = _v0 + _v7 * _v7},${this._y1 = _v1 + _v7 * _v8}`;
      } else this._append`L${this._x1 = _v0},${this._y1 = _v1}`;
    }
    arc(_v0, _v1, _v2, _v3, _v4, _v5) {
      if (_v0 *= 1, _v1 *= 1, _v2 *= 1, _v5 = !!_v5, _v2 < 0) throw Error(`negative radius: ${_v2}`);
      let _v6 = _v2 * Math.cos(_v3),
        _v7 = _v2 * Math.sin(_v3),
        _v8 = _v0 + _v6,
        _v9 = _v1 + _v7,
        _v10 = 1 ^ _v5,
        _v11 = _v5 ? _v3 - _v4 : _v4 - _v3;
      null === this._x1 ? this._append`M${_v8},${_v9}` : (Math.abs(this._x1 - _v8) > 1e-6 || Math.abs(this._y1 - _v9) > 1e-6) && this._append`L${_v8},${_v9}`, _v2 && (_v11 < 0 && (_v11 = _v11 % _v2 + _v2), _v11 > _v3 ? this._append`A${_v2},${_v2},0,1,${_v10},${_v0 - _v6},${_v1 - _v7}A${_v2},${_v2},0,1,${_v10},${this._x1 = _v8},${this._y1 = _v9}` : _v11 > 1e-6 && this._append`A${_v2},${_v2},0,${+(_v11 >= _v1)},${_v10},${this._x1 = _v0 + _v2 * Math.cos(_v4)},${this._y1 = _v1 + _v2 * Math.sin(_v4)}`);
    }
    rect(_v0, _v1, _v2, _v3) {
      this._append`M${this._x0 = this._x1 = +_v0},${this._y0 = this._y1 = +_v1}h${_v2 *= 1}v${+_v3}h${-_v2}Z`;
    }
    toString() {
      return this._;
    }
  }
  _v5.prototype, _v0.s(["withPath", 0, function (_v0) {
    let _v1 = 3;
    return _v0.digits = function (_v0) {
      if (!arguments.length) return _v1;
      if (null == _v0) _v1 = null;else {
        let _v0 = Math.floor(_v0);
        if (!(_v0 >= 0)) throw RangeError(`invalid digits: ${_v0}`);
        _v1 = _v0;
      }
      return _v0;
    }, () => new _v5(_v1);
  }], 0);
}