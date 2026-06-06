{
  "use strict";

  function _v1(_v0, _v1, _v2) {
    return Math.min(Math.max(_v0, _v2), _v1);
  }
  var _v2 = class extends Error {
    constructor(_v0) {
      super(`Failed to parse color: "${_v0}"`);
    }
  };
  function _v3(_v0) {
    if ("string" != typeof _v0) throw new _v2(_v0);
    if ("transparent" === _v0.trim().toLowerCase()) return [0, 0, 0, 0];
    let _v1 = _v0.trim();
    _v1 = _v11.test(_v0) ? function (_v0) {
      let _v1 = _v5[function (_v0) {
        let _v1 = 0,
          _v2 = _v0.length;
        for (; _v2;) _v1 = 33 * _v1 ^ _v0.charCodeAt(--_v2);
        return (_v1 >>> 0) % 0;
      }(_v0.toLowerCase().trim())];
      if (!_v1) throw new _v2(_v0);
      return `#${_v1}`;
    }(_v0) : _v0;
    let _v2 = _v7.exec(_v1);
    if (_v2) {
      let _v0 = Array.from(_v2).slice(1);
      return [..._v0.slice(0, 3).map(_v0 => parseInt(_v6(_v0, 2), 16)), parseInt(_v6(_v0[3] || "f", 2), 16) / 255];
    }
    let _v3 = _v8.exec(_v1);
    if (_v3) {
      let _v0 = Array.from(_v3).slice(1);
      return [..._v0.slice(0, 3).map(_v0 => parseInt(_v0, 16)), parseInt(_v0[3] || "ff", 16) / 255];
    }
    let _v4 = _v9.exec(_v1);
    if (_v4) {
      let _v0 = Array.from(_v4).slice(1);
      return [..._v0.slice(0, 3).map(_v0 => parseInt(_v0, 10)), parseFloat(_v0[3] || "1")];
    }
    let _v5 = _v10.exec(_v1);
    if (_v5) {
      let [_v0, _v1, _v2, _v3] = Array.from(_v5).slice(1).map(parseFloat);
      if (_v1(0, 100, _v1) !== _v1 || _v1(0, 100, _v2) !== _v2) throw new _v2(_v0);
      return [..._v13(_v0, _v1, _v2), Number.isNaN(_v3) ? 1 : _v3];
    }
    throw new _v2(_v0);
  }
  let _v4 = _v0 => parseInt(_v0.replace(/_/g, ""), 36),
    _v5 = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((_v0, _v1) => {
      let _v2 = _v4(_v1.substring(0, 3)),
        _v3 = _v4(_v1.substring(3)).toString(16),
        _v4 = "";
      for (let _v0 = 0; _v0 < 6 - _v3.length; _v0++) _v4 += "0";
      return _v0[_v2] = `${_v4}${_v3}`, _v0;
    }, {}),
    _v6 = (_v0, _v1) => Array.from(Array(_v1)).map(() => _v0).join(""),
    _v7 = RegExp(`^#${_v6("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
    _v8 = RegExp(`^#${_v6("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
    _v9 = RegExp(`^rgba?\\(\\s*(\\d+)\\s*${_v6(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
    _v10 = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
    _v11 = /^[a-z]+$/i,
    _v12 = _v0 => Math.round(255 * _v0),
    _v13 = (_v0, _v1, _v2) => {
      let _v3 = _v2 / 100;
      if (0 === _v1) return [_v3, _v3, _v3].map(_v12);
      let _v4 = (_v0 % 360 + 360) % 360 / 60,
        _v5 = _v1 / 100 * (1 - Math.abs(2 * _v3 - 1)),
        _v6 = _v5 * (1 - Math.abs(_v4 % 2 - 1)),
        _v7 = 0,
        _v8 = 0,
        _v9 = 0;
      _v4 >= 0 && _v4 < 1 ? (_v7 = _v5, _v8 = _v6) : _v4 >= 1 && _v4 < 2 ? (_v7 = _v6, _v8 = _v5) : _v4 >= 2 && _v4 < 3 ? (_v8 = _v5, _v9 = _v6) : _v4 >= 3 && _v4 < 4 ? (_v8 = _v6, _v9 = _v5) : _v4 >= 4 && _v4 < 5 ? (_v7 = _v6, _v9 = _v5) : _v4 >= 5 && _v4 < 6 && (_v7 = _v5, _v9 = _v6);
      let _v10 = _v3 - _v5 / 2;
      return [_v7 + _v10, _v8 + _v10, _v9 + _v10].map(_v12);
    };
  function _v14(_v0) {
    let [_v1, _v2, _v3, _v4] = _v3(_v0).map((_v0, _v1) => 3 === _v1 ? _v0 : _v0 / 255),
      _v5 = Math.max(_v1, _v2, _v3),
      _v6 = Math.min(_v1, _v2, _v3),
      _v7 = (_v5 + _v6) / 2;
    if (_v5 === _v6) return [0, 0, _v7, _v4];
    let _v8 = _v5 - _v6;
    return [60 * (_v1 === _v5 ? (_v2 - _v3) / _v8 + 6 * (_v2 < _v3) : _v2 === _v5 ? (_v3 - _v1) / _v8 + 2 : (_v1 - _v2) / _v8 + 4), _v7 > .5 ? _v8 / (2 - _v5 - _v6) : _v8 / (_v5 + _v6), _v7, _v4];
  }
  function _v15(_v0, _v1, _v2, _v3) {
    return `hsla(${(_v0 % 360).toFixed()}, ${_v1(0, 100, 100 * _v1).toFixed()}%, ${_v1(0, 100, 100 * _v2).toFixed()}%, ${parseFloat(_v1(0, 1, _v3).toFixed(3))})`;
  }
  function _v16(_v0, _v1) {
    let [_v2, _v3, _v4, _v5] = _v14(_v0);
    return _v15(_v2, _v3, _v4 - _v1, _v5);
  }
  function _v17(_v0) {
    if ("transparent" === _v0) return 0;
    function _v1(_v0) {
      let _v1 = _v0 / 255;
      return _v1 <= .04045 ? _v1 / 12.92 : Math.pow((_v1 + .055) / 1.055, 2.4);
    }
    let [_v2, _v3, _v4] = _v3(_v0);
    return .2126 * _v1(_v2) + .7152 * _v1(_v3) + .0722 * _v1(_v4);
  }
  function _v18(_v0, _v1, _v2, _v3) {
    return `rgba(${_v1(0, 255, _v0).toFixed()}, ${_v1(0, 255, _v1).toFixed()}, ${_v1(0, 255, _v2).toFixed()}, ${parseFloat(_v1(0, 1, _v3).toFixed(3))})`;
  }
  _v0.s(["darken", 0, _v16, "getContrast", 0, function (_v0, _v1) {
    let _v2 = _v17(_v0),
      _v3 = _v17(_v1);
    return _v2 > _v3 ? (_v2 + .05) / (_v3 + .05) : (_v3 + .05) / (_v2 + .05);
  }, "getLuminance", 0, _v17, "hsla", 0, _v15, "lighten", 0, function (_v0, _v1) {
    return _v16(_v0, -_v1);
  }, "mix", 0, function (_v0, _v1, _v2) {
    let _v3 = (_v0, _v1) => 3 === _v1 ? _v0 : _v0 / 255,
      [_v4, _v5, _v6, _v7] = _v3(_v0).map(_v3),
      [_v8, _v9, _v10, _v11] = _v3(_v1).map(_v3),
      _v12 = _v11 - _v7,
      _v13 = 2 * _v2 - 1,
      _v14 = ((_v13 * _v12 == -1 ? _v13 : _v13 + _v12 / (1 + _v13 * _v12)) + 1) / 2,
      _v15 = 1 - _v14;
    return _v18((_v4 * _v15 + _v8 * _v14) * 255, (_v5 * _v15 + _v9 * _v14) * 255, (_v6 * _v15 + _v10 * _v14) * 255, _v11 * _v2 + _v7 * (1 - _v2));
  }, "parseToHsla", 0, _v14, "parseToRgba", 0, _v3, "readableColor", 0, function (_v0) {
    return _v17(_v0) > .179 ? "#000" : "#fff";
  }, "rgba", 0, _v18, "toHex", 0, function (_v0) {
    let [_v1, _v2, _v3, _v4] = _v3(_v0),
      _v5 = _v0 => {
        let _v1 = _v1(0, 255, _v0).toString(16);
        return 1 === _v1.length ? `0${_v1}` : _v1;
      };
    return `#${_v5(_v1)}${_v5(_v2)}${_v5(_v3)}${_v4 < 1 ? _v5(Math.round(255 * _v4)) : ""}`;
  }, "toHsla", 0, function (_v0) {
    return _v15(..._v14(_v0));
  }, "toRgba", 0, function (_v0) {
    return _v18(..._v3(_v0));
  }, "transparentize", 0, function (_v0, _v1) {
    let [_v2, _v3, _v4, _v5] = _v3(_v0);
    return _v18(_v2, _v3, _v4, _v5 - _v1);
  }]);
}