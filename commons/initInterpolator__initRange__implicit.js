{
  "use strict";

  function _v1(_v0, _v1) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(_v0);
        break;
      default:
        this.range(_v1).domain(_v0);
    }
    return this;
  }
  _v0.s(["initInterpolator", 0, function (_v0, _v1) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        "function" == typeof _v0 ? this.interpolator(_v0) : this.range(_v0);
        break;
      default:
        this.domain(_v0), "function" == typeof _v1 ? this.interpolator(_v1) : this.range(_v1);
    }
    return this;
  }, "initRange", 0, _v1], 0);
  class _v2 extends Map {
    constructor(_v0, _v1 = _v4) {
      if (super(), Object.defineProperties(this, {
        _intern: {
          value: new Map()
        },
        _key: {
          value: _v1
        }
      }), null != _v0) for (const [_v0, _v1] of _v0) this.set(_v0, _v1);
    }
    get(_v0) {
      return super.get(_v3(this, _v0));
    }
    has(_v0) {
      return super.has(_v3(this, _v0));
    }
    set(_v0, _v1) {
      return super.set(function ({
        _intern: _v0,
        _key: _v1
      }, _v2) {
        let _v3 = _v1(_v2);
        return _v0.has(_v3) ? _v0.get(_v3) : (_v0.set(_v3, _v2), _v2);
      }(this, _v0), _v1);
    }
    delete(_v0) {
      return super.delete(function ({
        _intern: _v0,
        _key: _v1
      }, _v2) {
        let _v3 = _v1(_v2);
        return _v0.has(_v3) && (_v2 = _v0.get(_v3), _v0.delete(_v3)), _v2;
      }(this, _v0));
    }
  }
  function _v3({
    _intern: _v0,
    _key: _v1
  }, _v2) {
    let _v3 = _v1(_v2);
    return _v0.has(_v3) ? _v0.get(_v3) : _v2;
  }
  function _v4(_v0) {
    return null !== _v0 && "object" == typeof _v0 ? _v0.valueOf() : _v0;
  }
  let _v5 = Symbol("implicit");
  function _v6() {
    var _v0 = new _v2(),
      _v1 = [],
      _v2 = [],
      _v3 = _v5;
    function _v4(_v0) {
      let _v1 = _v0.get(_v0);
      if (void 0 === _v1) {
        if (_v3 !== _v5) return _v3;
        _v0.set(_v0, _v1 = _v1.push(_v0) - 1);
      }
      return _v2[_v1 % _v2.length];
    }
    return _v4.domain = function (_v0) {
      if (!arguments.length) return _v1.slice();
      for (let _v0 of (_v1 = [], _v0 = new _v2(), _v0)) _v0.has(_v0) || _v0.set(_v0, _v1.push(_v0) - 1);
      return _v4;
    }, _v4.range = function (_v0) {
      return arguments.length ? (_v2 = Array.from(_v0), _v4) : _v2.slice();
    }, _v4.unknown = function (_v0) {
      return arguments.length ? (_v3 = _v0, _v4) : _v3;
    }, _v4.copy = function () {
      return _v6(_v1, _v2).unknown(_v3);
    }, _v1.apply(_v4, arguments), _v4;
  }
  function _v7() {
    var _v0,
      _v1,
      _v2 = _v6().unknown(void 0),
      _v3 = _v2.domain,
      _v4 = _v2.range,
      _v5 = 0,
      _v6 = 1,
      _v7 = !1,
      _v8 = 0,
      _v9 = 0,
      _v10 = .5;
    function _v11() {
      var _v0 = _v3().length,
        _v1 = _v6 < _v5,
        _v2 = _v1 ? _v6 : _v5,
        _v3 = _v1 ? _v5 : _v6;
      _v0 = (_v3 - _v2) / Math.max(1, _v0 - _v8 + 2 * _v9), _v7 && (_v0 = Math.floor(_v0)), _v2 += (_v3 - _v2 - _v0 * (_v0 - _v8)) * _v10, _v1 = _v0 * (1 - _v8), _v7 && (_v2 = Math.round(_v2), _v1 = Math.round(_v1));
      var _v4 = function (_v0, _v1, _v2) {
        _v0 *= 1, _v1 *= 1, _v2 = (_v4 = arguments.length) < 2 ? (_v1 = _v0, _v0 = 0, 1) : _v4 < 3 ? 1 : +_v2;
        for (var _v3 = -1, _v4 = 0 | Math.max(0, Math.ceil((_v1 - _v0) / _v2)), _v5 = Array(_v4); ++_v3 < _v4;) _v5[_v3] = _v0 + _v3 * _v2;
        return _v5;
      }(_v0).map(function (_v0) {
        return _v2 + _v0 * _v0;
      });
      return _v4(_v1 ? _v4.reverse() : _v4);
    }
    return delete _v2.unknown, _v2.domain = function (_v0) {
      return arguments.length ? (_v3(_v0), _v11()) : _v3();
    }, _v2.range = function (_v0) {
      return arguments.length ? ([_v5, _v6] = _v0, _v5 *= 1, _v6 *= 1, _v11()) : [_v5, _v6];
    }, _v2.rangeRound = function (_v0) {
      return [_v5, _v6] = _v0, _v5 *= 1, _v6 *= 1, _v7 = !0, _v11();
    }, _v2.bandwidth = function () {
      return _v1;
    }, _v2.step = function () {
      return _v0;
    }, _v2.round = function (_v0) {
      return arguments.length ? (_v7 = !!_v0, _v11()) : _v7;
    }, _v2.padding = function (_v0) {
      return arguments.length ? (_v8 = Math.min(1, _v9 = +_v0), _v11()) : _v8;
    }, _v2.paddingInner = function (_v0) {
      return arguments.length ? (_v8 = Math.min(1, _v0), _v11()) : _v8;
    }, _v2.paddingOuter = function (_v0) {
      return arguments.length ? (_v9 = +_v0, _v11()) : _v9;
    }, _v2.align = function (_v0) {
      return arguments.length ? (_v10 = Math.max(0, Math.min(1, _v0)), _v11()) : _v10;
    }, _v2.copy = function () {
      return _v7(_v3(), [_v5, _v6]).round(_v7).paddingInner(_v8).paddingOuter(_v9).align(_v10);
    }, _v1.apply(_v11(), arguments);
  }
  _v0.s(["default", 0, _v6, "implicit", 0, _v5], 0), _v0.s(["default", 0, _v7, "point", 0, function () {
    return function _v0(_v1) {
      var _v2 = _v1.copy;
      return _v1.padding = _v1.paddingOuter, delete _v1.paddingInner, delete _v1.paddingOuter, _v1.copy = function () {
        return _v0(_v2());
      }, _v1;
    }(_v7.apply(null, arguments).paddingInner(1));
  }], 0);
}