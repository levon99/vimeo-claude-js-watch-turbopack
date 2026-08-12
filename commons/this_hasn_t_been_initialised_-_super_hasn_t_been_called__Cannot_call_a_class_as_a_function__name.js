{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.Get = void 0;
  var _v3 = _v6(_v0.r(0)),
    _v4 = _v6(_v0.r(0)),
    _v5 = _v0.r(0);
  function _v6(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  function _v7(_v0) {
    return (_v7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v8(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v9(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v8(Object(_v2), !0).forEach(function (_v0) {
        _v14(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v8(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v10(_v0) {
    return (_v10 = Object.setPrototypeOf ? Object.getPrototypeOf : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v11(_v0) {
    if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return _v0;
  }
  function _v12(_v0, _v1) {
    return (_v12 = Object.setPrototypeOf || function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v13(_v0, _v1) {
    if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
  }
  function _v14(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  var _v15 = function _v0(_v1) {
    _v13(this, _v0), _v14(this, "name", void 0), _v14(this, "message", void 0), this.name = "GetError", this.message = _v1 || "";
  };
  _v15.prototype = Error.prototype;
  var _v16 = function (_v0) {
    var _v1;
    if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
    function _v2(_v0, _v1) {
      var _v2, _v3;
      return _v13(this, _v2), _v2 = (_v3 = _v10(_v2).call(this, _v0, _v1)) && ("object" === _v7(_v3) || "function" == typeof _v3) ? _v3 : _v11(this), _v14(_v11(_v2), "state", {
        data: null,
        error: null,
        loading: !1
      }), _v14(_v11(_v2), "cache", void 0), _v14(_v11(_v2), "fetch", function () {
        _v2.setState(function (_v0) {
          return _v9({}, _v0, {
            loading: !0
          });
        });
        var _v0 = _v2.props.failOnError;
        return Promise.all(_v2.props.requests.map(function (_v0) {
          return fetch(_v0.uri, {
            credentials: _v0.credentials || "include",
            headers: _v0.headers || {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest"
            }
          }).then(function (_v0) {
            if (200 !== _v0.status && !_v0) return null;
            if (!_v0.ok || _v0.status < 200 || _v0.status > 300) throw new _v15(_v0.statusText);
            return _v2.props.onRequestComplete && _v2.props.onRequestComplete(_v0), _v0.json();
          });
        })).then(function (_v0) {
          var _v1 = _v0.length > 1 ? _v0 : _v0[0];
          _v2.setState(function (_v0) {
            return _v9({}, _v0, {
              data: _v1,
              error: null,
              loading: !1
            });
          }, function () {
            _v2.cache.setItem(_v2.props.cacheKey, _v1);
          });
        }).catch(function (_v0) {
          "GetError" === _v0.name && _v2.setState(function (_v0) {
            return _v9({}, _v0, {
              error: _v0.message
            });
          });
        });
      }), _v14(_v11(_v2), "cacheDidChange", function (_v0) {
        _v2.setState(function (_v0) {
          return _v9({}, _v0, {
            data: _v0
          });
        });
      }), _v2.cache = _v1.cache, _v2;
    }
    return _v2.prototype = Object.create(_v0 && _v0.prototype, {
      constructor: {
        value: _v2,
        writable: !0,
        configurable: !0
      }
    }), _v0 && _v12(_v2, _v0), _v1 = [{
      key: "componentDidMount",
      value: function () {
        var _v0;
        return regeneratorRuntime.async(function (_v0) {
          for (;;) switch (_v0.prev = _v0.next) {
            case 0:
              this.cache.subscribe(this.props.cacheKey, this.cacheDidChange), (_v0 = this.cache.getItem(this.props.cacheKey)) && this.setState(function (_v0) {
                return _v9({}, _v0, {
                  data: _v0
                });
              }), this.fetch();
            case 4:
            case "end":
              return _v0.stop();
          }
        }, null, this);
      }
    }, {
      key: "componentDidUpdate",
      value: function (_v0) {
        var _v1 = !(0, _v5.equals)(_v0.requests.map(function (_v0) {
          return _v0.uri;
        }), this.props.requests.map(function (_v0) {
          return _v0.uri;
        }));
        (_v0.cacheKey !== this.props.cacheKey || _v1) && this.fetch();
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.cache.unsubscribe(this.cacheDidChange);
      }
    }, {
      key: "render",
      value: function () {
        return this.props.children(this.state, this.fetch);
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
      }
    }(_v2.prototype, _v1), _v2;
  }(_v4.default.Component);
  _v2.Get = _v16, _v14(_v16, "contextTypes", {
    cache: _v3.default.object.isRequired
  });
}