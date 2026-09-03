{
  "use strict";

  var _v3,
    _v4,
    _v5,
    _v6,
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    _v13 = _v0.r(0),
    _v14 = _v0.r(0),
    _v15 = _v0.r(0),
    _v16 = _v0.r(0),
    _v17 = _v0.r(0),
    _v18 = _v0.r(0),
    _v19 = _v7.setImmediate,
    _v20 = _v7.clearImmediate,
    _v21 = _v7.process,
    _v22 = _v7.Dispatch,
    _v23 = _v7.Function,
    _v24 = _v7.MessageChannel,
    _v25 = _v7.String,
    _v26 = 0,
    _v27 = {},
    _v28 = "onreadystatechange";
  _v12(function () {
    _v3 = _v7.location;
  });
  var _v29 = function (_v0) {
      if (_v11(_v27, _v0)) {
        var _v1 = _v27[_v0];
        delete _v27[_v0], _v1();
      }
    },
    _v30 = function (_v0) {
      return function () {
        _v29(_v0);
      };
    },
    _v31 = function (_v0) {
      _v29(_v0.data);
    },
    _v32 = function (_v0) {
      _v7.postMessage(_v25(_v0), _v3.protocol + "//" + _v3.host);
    };
  _v19 && _v20 || (_v19 = function (_v0) {
    _v16(arguments.length, 1);
    var _v1 = _v10(_v0) ? _v0 : _v23(_v0),
      _v2 = _v14(arguments, 1);
    return _v27[++_v26] = function () {
      _v8(_v1, void 0, _v2);
    }, _v4(_v26), _v26;
  }, _v20 = function (_v0) {
    delete _v27[_v0];
  }, _v18 ? _v4 = function (_v0) {
    _v21.nextTick(_v30(_v0));
  } : _v22 && _v22.now ? _v4 = function (_v0) {
    _v22.now(_v30(_v0));
  } : _v24 && !_v17 ? (_v6 = (_v5 = new _v24()).port2, _v5.port1.onmessage = _v31, _v4 = _v9(_v6.postMessage, _v6)) : _v7.addEventListener && _v10(_v7.postMessage) && !_v7.importScripts && _v3 && "file:" !== _v3.protocol && !_v12(_v32) ? (_v4 = _v32, _v7.addEventListener("message", _v31, !1)) : _v4 = _v28 in _v15("script") ? function (_v0) {
    _v13.appendChild(_v15("script"))[_v28] = function () {
      _v13.removeChild(this), _v29(_v0);
    };
  } : function (_v0) {
    setTimeout(_v30(_v0), 0);
  }), _v1.exports = {
    set: _v19,
    clear: _v20
  };
}