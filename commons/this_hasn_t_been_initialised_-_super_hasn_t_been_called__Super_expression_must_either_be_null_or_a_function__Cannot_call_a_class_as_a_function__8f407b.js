{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.Upload = void 0;
  var _v3,
    _v4 = (_v3 = _v0.r(0)) && _v3.__esModule ? _v3 : {
      default: _v3
    };
  function _v5(_v0) {
    return (_v5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v6(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v7(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v6(Object(_v2), !0).forEach(function (_v0) {
        _v11(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v6(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v8(_v0) {
    return (_v8 = Object.setPrototypeOf ? Object.getPrototypeOf : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v9(_v0) {
    if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return _v0;
  }
  function _v10(_v0, _v1) {
    return (_v10 = Object.setPrototypeOf || function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v11(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  _v2.Upload = function (_v0) {
    var _v1;
    if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
    function _v2() {
      var _v0;
      if (!(this instanceof _v2)) throw TypeError("Cannot call a class as a function");
      for (var _v1, _v2, _v3 = arguments.length, _v4 = Array(_v3), _v5 = 0; _v5 < _v3; _v5++) _v4[_v5] = arguments[_v5];
      return _v2 = (_v0 = (_v1 = _v8(_v2)).call.apply(_v1, [this].concat(_v4))) && ("object" === _v5(_v0) || "function" == typeof _v0) ? _v0 : _v9(this), _v11(_v9(_v2), "state", {
        loading: !1,
        data: null,
        error: null
      }), _v11(_v9(_v2), "upload", function (_v0) {
        var _v1, _v2, _v3;
        return regeneratorRuntime.async(function (_v0) {
          for (;;) switch (_v0.prev = _v0.next) {
            case 0:
              return _v1 = null, _v2.setState(function (_v0) {
                return _v7({}, _v0, {
                  loading: !0
                });
              }), _v0.prev = 2, _v0.next = 5, regeneratorRuntime.awrap(fetch("/upload/_get_image_url", {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                  "X-Requested-With": "XMLHttpRequest"
                },
                body: JSON.stringify({
                  type: _v0.type,
                  id: _v0.id
                })
              }).then(function (_v0) {
                return _v0.json();
              }));
            case 5:
              return _v3 = _v0.sent, _v0.next = 8, regeneratorRuntime.awrap(fetch(_v3, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  "X-Requested-With": "XMLHttpRequest"
                },
                body: _v0.file
              }).then(function (_v0) {
                return _v0.json();
              }));
            case 8:
              _v2 = _v0.sent, _v0.next = 15;
              break;
            case 11:
              _v0.prev = 11, _v0.t0 = _v0.catch(2), _v1 = _v0.t0, _v0.onError && _v1 && _v0.onError(_v1);
            case 15:
              _v0.onSuccess && _v0.onSuccess(_v2), _v2.setState(function (_v0) {
                return _v7({}, _v0, {
                  data: _v2,
                  error: _v1,
                  loading: !1
                });
              });
            case 17:
            case "end":
              return _v0.stop();
          }
        }, null, null, [[2, 11]]);
      }), _v2;
    }
    return _v2.prototype = Object.create(_v0 && _v0.prototype, {
      constructor: {
        value: _v2,
        writable: !0,
        configurable: !0
      }
    }), _v0 && _v10(_v2, _v0), _v1 = [{
      key: "render",
      value: function () {
        return this.props.children(_v7({
          upload: this.upload
        }, this.state));
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
      }
    }(_v2.prototype, _v1), _v2;
  }(_v4.default.Component);
}