{
  "use strict";

  function _v3(_v0, _v1) {
    var _v2 = _v0.length;
    for (_v0.push(_v1); 0 < _v2;) {
      var _v3 = _v2 - 1 >>> 1,
        _v4 = _v0[_v3];
      if (0 < _v6(_v4, _v1)) _v0[_v3] = _v1, _v0[_v2] = _v4, _v2 = _v3;else break;
    }
  }
  function _v4(_v0) {
    return 0 === _v0.length ? null : _v0[0];
  }
  function _v5(_v0) {
    if (0 === _v0.length) return null;
    var _v1 = _v0[0],
      _v2 = _v0.pop();
    if (_v2 !== _v1) {
      _v0[0] = _v2;
      for (var _v3 = 0, _v4 = _v0.length, _v5 = _v4 >>> 1; _v3 < _v5;) {
        var _v6 = 2 * (_v3 + 1) - 1,
          _v7 = _v0[_v6],
          _v8 = _v6 + 1,
          _v9 = _v0[_v8];
        if (0 > _v6(_v7, _v2)) _v8 < _v4 && 0 > _v6(_v9, _v7) ? (_v0[_v3] = _v9, _v0[_v8] = _v2, _v3 = _v8) : (_v0[_v3] = _v7, _v0[_v6] = _v2, _v3 = _v6);else if (_v8 < _v4 && 0 > _v6(_v9, _v2)) _v0[_v3] = _v9, _v0[_v8] = _v2, _v3 = _v8;else break;
      }
    }
    return _v1;
  }
  function _v6(_v0, _v1) {
    var _v2 = _v0.sortIndex - _v1.sortIndex;
    return 0 !== _v2 ? _v2 : _v0.id - _v1.id;
  }
  if (_v2.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
    var _v7,
      _v8 = performance;
    _v2.unstable_now = function () {
      return _v8.now();
    };
  } else {
    var _v9 = Date,
      _v10 = _v9.now();
    _v2.unstable_now = function () {
      return _v9.now() - _v10;
    };
  }
  var _v11 = [],
    _v12 = [],
    _v13 = 1,
    _v14 = null,
    _v15 = 3,
    _v16 = !1,
    _v17 = !1,
    _v18 = !1,
    _v19 = !1,
    _v20 = "function" == typeof setTimeout ? setTimeout : null,
    _v21 = "function" == typeof clearTimeout ? clearTimeout : null,
    _v22 = "u" > typeof setImmediate ? setImmediate : null;
  function _v23(_v0) {
    for (var _v1 = _v4(_v12); null !== _v1;) {
      if (null === _v1.callback) _v5(_v12);else if (_v1.startTime <= _v0) _v5(_v12), _v1.sortIndex = _v1.expirationTime, _v3(_v11, _v1);else break;
      _v1 = _v4(_v12);
    }
  }
  function _v24(_v0) {
    if (_v18 = !1, _v23(_v0), !_v17) if (null !== _v4(_v11)) _v17 = !0, _v25 || (_v25 = !0, _v7());else {
      var _v1 = _v4(_v12);
      null !== _v1 && _v33(_v24, _v1.startTime - _v0);
    }
  }
  var _v25 = !1,
    _v26 = -1,
    _v27 = 5,
    _v28 = -1;
  function _v29() {
    return !!_v19 || !(_v2.unstable_now() - _v28 < _v27);
  }
  function _v30() {
    if (_v19 = !1, _v25) {
      var _v0 = _v2.unstable_now();
      _v28 = _v0;
      var _v1 = !0;
      try {
        e: {
          _v17 = !1, _v18 && (_v18 = !1, _v21(_v26), _v26 = -1), _v16 = !0;
          var _v2 = _v15;
          try {
            n: {
              for (_v23(_v0), _v14 = _v4(_v11); null !== _v14 && !(_v14.expirationTime > _v0 && _v29());) {
                var _v3 = _v14.callback;
                if ("function" == typeof _v3) {
                  _v14.callback = null, _v15 = _v14.priorityLevel;
                  var _v4 = _v3(_v14.expirationTime <= _v0);
                  if (_v0 = _v2.unstable_now(), "function" == typeof _v4) {
                    _v14.callback = _v4, _v23(_v0), _v1 = !0;
                    break n;
                  }
                  _v14 === _v4(_v11) && _v5(_v11), _v23(_v0);
                } else _v5(_v11);
                _v14 = _v4(_v11);
              }
              if (null !== _v14) _v1 = !0;else {
                var _v5 = _v4(_v12);
                null !== _v5 && _v33(_v24, _v5.startTime - _v0), _v1 = !1;
              }
            }
            break e;
          } finally {
            _v14 = null, _v15 = _v2, _v16 = !1;
          }
        }
      } finally {
        _v1 ? _v7() : _v25 = !1;
      }
    }
  }
  if ("function" == typeof _v22) _v7 = function () {
    _v22(_v30);
  };else if ("u" > typeof MessageChannel) {
    var _v31 = new MessageChannel(),
      _v32 = _v31.port2;
    _v31.port1.onmessage = _v30, _v7 = function () {
      _v32.postMessage(null);
    };
  } else _v7 = function () {
    _v20(_v30, 0);
  };
  function _v33(_v0, _v1) {
    _v26 = _v20(function () {
      _v0(_v2.unstable_now());
    }, _v1);
  }
  _v2.unstable_IdlePriority = 5, _v2.unstable_ImmediatePriority = 1, _v2.unstable_LowPriority = 4, _v2.unstable_NormalPriority = 3, _v2.unstable_Profiling = null, _v2.unstable_UserBlockingPriority = 2, _v2.unstable_cancelCallback = function (_v0) {
    _v0.callback = null;
  }, _v2.unstable_forceFrameRate = function (_v0) {
    0 > _v0 || 125 < _v0 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _v27 = 0 < _v0 ? Math.floor(0 / _v0) : 5;
  }, _v2.unstable_getCurrentPriorityLevel = function () {
    return _v15;
  }, _v2.unstable_next = function (_v0) {
    switch (_v15) {
      case 1:
      case 2:
      case 3:
        var _v1 = 3;
        break;
      default:
        _v1 = _v15;
    }
    var _v2 = _v15;
    _v15 = _v1;
    try {
      return _v0();
    } finally {
      _v15 = _v2;
    }
  }, _v2.unstable_requestPaint = function () {
    _v19 = !0;
  }, _v2.unstable_runWithPriority = function (_v0, _v1) {
    switch (_v0) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _v0 = 3;
    }
    var _v2 = _v15;
    _v15 = _v0;
    try {
      return _v1();
    } finally {
      _v15 = _v2;
    }
  }, _v2.unstable_scheduleCallback = function (_v0, _v1, _v2) {
    var _v3 = _v2.unstable_now();
    switch (_v2 = "object" == typeof _v2 && null !== _v2 && "number" == typeof (_v2 = _v2.delay) && 0 < _v2 ? _v3 + _v2 : _v3, _v0) {
      case 1:
        var _v4 = -1;
        break;
      case 2:
        _v4 = 250;
        break;
      case 5:
        _v4 = 0;
        break;
      case 4:
        _v4 = 0;
        break;
      default:
        _v4 = 0;
    }
    return _v4 = _v2 + _v4, _v0 = {
      id: _v13++,
      callback: _v1,
      priorityLevel: _v0,
      startTime: _v2,
      expirationTime: _v4,
      sortIndex: -1
    }, _v2 > _v3 ? (_v0.sortIndex = _v2, _v3(_v12, _v0), null === _v4(_v11) && _v0 === _v4(_v12) && (_v18 ? (_v21(_v26), _v26 = -1) : _v18 = !0, _v33(_v24, _v2 - _v3))) : (_v0.sortIndex = _v4, _v3(_v11, _v0), _v17 || _v16 || (_v17 = !0, _v25 || (_v25 = !0, _v7()))), _v0;
  }, _v2.unstable_shouldYield = _v29, _v2.unstable_wrapCallback = function (_v0) {
    var _v1 = _v15;
    return function () {
      var _v0 = _v15;
      _v15 = _v1;
      try {
        return _v0.apply(this, arguments);
      } finally {
        _v15 = _v0;
      }
    };
  };
}