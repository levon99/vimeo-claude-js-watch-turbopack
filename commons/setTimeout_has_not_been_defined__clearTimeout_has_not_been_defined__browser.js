{
  var _v3 = {
      229: function (_v0) {
        var _v1,
          _v2,
          _v3,
          _v4 = _v0.exports = {};
        function _v5() {
          throw Error("setTimeout has not been defined");
        }
        function _v6() {
          throw Error("clearTimeout has not been defined");
        }
        try {
          _v1 = "function" == typeof setTimeout ? setTimeout : _v5;
        } catch (_v0) {
          _v1 = _v5;
        }
        try {
          _v2 = "function" == typeof clearTimeout ? clearTimeout : _v6;
        } catch (_v0) {
          _v2 = _v6;
        }
        function _v7(_v0) {
          if (_v1 === setTimeout) return setTimeout(_v0, 0);
          if ((_v1 === _v5 || !_v1) && setTimeout) return _v1 = setTimeout, setTimeout(_v0, 0);
          try {
            return _v1(_v0, 0);
          } catch (_v0) {
            try {
              return _v1.call(null, _v0, 0);
            } catch (_v0) {
              return _v1.call(this, _v0, 0);
            }
          }
        }
        var _v8 = [],
          _v9 = !1,
          _v10 = -1;
        function _v11() {
          _v9 && _v3 && (_v9 = !1, _v3.length ? _v8 = _v3.concat(_v8) : _v10 = -1, _v8.length && _v12());
        }
        function _v12() {
          if (!_v9) {
            var _v0 = _v7(_v11);
            _v9 = !0;
            for (var _v1 = _v8.length; _v1;) {
              for (_v3 = _v8, _v8 = []; ++_v10 < _v1;) _v3 && _v3[_v10].run();
              _v10 = -1, _v1 = _v8.length;
            }
            _v3 = null, _v9 = !1, function (_v0) {
              if (_v2 === clearTimeout) return clearTimeout(_v0);
              if ((_v2 === _v6 || !_v2) && clearTimeout) return _v2 = clearTimeout, clearTimeout(_v0);
              try {
                _v2(_v0);
              } catch (_v0) {
                try {
                  return _v2.call(null, _v0);
                } catch (_v0) {
                  return _v2.call(this, _v0);
                }
              }
            }(_v0);
          }
        }
        function _v13(_v0, _v1) {
          this.fun = _v0, this.array = _v1;
        }
        function _v14() {}
        _v4.nextTick = function (_v0) {
          var _v1 = Array(arguments.length - 1);
          if (arguments.length > 1) for (var _v2 = 1; _v2 < arguments.length; _v2++) _v1[_v2 - 1] = arguments[_v2];
          _v8.push(new _v13(_v0, _v1)), 1 !== _v8.length || _v9 || _v7(_v12);
        }, _v13.prototype.run = function () {
          this.fun.apply(null, this.array);
        }, _v4.title = "browser", _v4.browser = !0, _v4.env = {}, _v4.argv = [], _v4.version = "", _v4.versions = {}, _v4.on = _v14, _v4.addListener = _v14, _v4.once = _v14, _v4.off = _v14, _v4.removeListener = _v14, _v4.removeAllListeners = _v14, _v4.emit = _v14, _v4.prependListener = _v14, _v4.prependOnceListener = _v14, _v4.listeners = function (_v0) {
          return [];
        }, _v4.binding = function (_v0) {
          throw Error("process.binding is not supported");
        }, _v4.cwd = function () {
          return "/";
        }, _v4.chdir = function (_v0) {
          throw Error("process.chdir is not supported");
        }, _v4.umask = function () {
          return 0;
        };
      }
    },
    _v4 = {};
  function _v5(_v0) {
    var _v1 = _v4[_v0];
    if (void 0 !== _v1) return _v1.exports;
    var _v2 = _v4[_v0] = {
        exports: {}
      },
      _v3 = !0;
    try {
      _v3[_v0](_v2, _v2.exports, _v5), _v3 = !1;
    } finally {
      _v3 && delete _v4[_v0];
    }
    return _v2.exports;
  }
  _v5.ab = "/ROOT/node_modules/.pnpm/next@16.2.2_patch_hash=azmwsfw62nldxl7c4qn2ybcrje_@babel+core@7.29.0_@opentelemetry+api@1.9.1_bqhbchi3mg4jxn645j7xepdoua/node_modules/next/dist/compiled/process/", _v1.exports = _v5(229);
}