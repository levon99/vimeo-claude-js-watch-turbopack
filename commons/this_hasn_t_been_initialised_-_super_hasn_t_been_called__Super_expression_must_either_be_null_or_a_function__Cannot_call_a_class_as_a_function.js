{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.PlayerManager = void 0;
  var _v3 = _v7(_v0.r(0)),
    _v4 = _v7(_v0.r(0)),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  function _v7(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  function _v8(_v0) {
    return (_v8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v9(_v0) {
    return (_v9 = Object.setPrototypeOf ? Object.getPrototypeOf : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v10(_v0) {
    if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return _v0;
  }
  function _v11(_v0, _v1) {
    return (_v11 = Object.setPrototypeOf || function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v12(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  var _v13 = function (_v0) {
    var _v1;
    if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
    function _v2() {
      var _v0;
      if (!(this instanceof _v2)) throw TypeError("Cannot call a class as a function");
      for (var _v1, _v2, _v3 = arguments.length, _v4 = Array(_v3), _v5 = 0; _v5 < _v3; _v5++) _v4[_v5] = arguments[_v5];
      return _v2 = (_v0 = (_v1 = _v9(_v2)).call.apply(_v1, [this].concat(_v4))) && ("object" === _v8(_v0) || "function" == typeof _v0) ? _v0 : _v10(this), _v12(_v10(_v2), "state", {
        error: null
      }), _v12(_v10(_v2), "waitingForPlayer", {}), _v12(_v10(_v2), "isLoaded", !1), _v12(_v10(_v2), "getAssets", function (_v0) {
        switch (_v0) {
          case _v6.PlayerType.Chromeless:
            return {
              js: _v2.props.playerAssetUrls.chromeless_js,
              css: _v2.props.playerAssetUrls.chromeless_css
            };
          case _v6.PlayerType.Default:
            return {
              js: _v2.props.playerAssetUrls.js,
              css: _v2.props.playerAssetUrls.css
            };
          default:
            throw TypeError("Invalid PlayerType, must be either .Chromeless or .Default!");
        }
      }), _v12(_v10(_v2), "onPlayerReady", function (_v0, _v1) {
        _v2.isLoaded ? _v0() : _v2.waitingForPlayer[_v1] = _v0;
      }), _v2;
    }
    return _v2.prototype = Object.create(_v0 && _v0.prototype, {
      constructor: {
        value: _v2,
        writable: !0,
        configurable: !0
      }
    }), _v0 && _v11(_v2, _v0), _v1 = [{
      key: "getChildContext",
      value: function () {
        return {
          onPlayerReady: this.onPlayerReady,
          configUrl: this.props.configUrl
        };
      }
    }, {
      key: "componentDidMount",
      value: function () {
        var _v0, _v1;
        return regeneratorRuntime.async(function (_v0) {
          for (;;) switch (_v0.prev = _v0.next) {
            case 0:
              return _v0 = this.getAssets(this.props.type), _v0.prev = 1, _v0.next = 4, regeneratorRuntime.awrap((0, _v5.assetLoader)(_v0));
            case 4:
              for (_v1 in this.isLoaded = !0, this.waitingForPlayer) this.waitingForPlayer[_v1] && this.waitingForPlayer[_v1]();
              _v0.next = 11;
              break;
            case 8:
              _v0.prev = 8, _v0.t0 = _v0.catch(1), this.setState({
                error: _v0.t0.message
              });
            case 11:
            case "end":
              return _v0.stop();
          }
        }, null, this, [[1, 8]]);
      }
    }, {
      key: "render",
      value: function () {
        return this.props.children;
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
      }
    }(_v2.prototype, _v1), _v2;
  }(_v4.default.Component);
  _v2.PlayerManager = _v13, _v12(_v13, "childContextTypes", {
    onPlayerReady: _v3.default.func.isRequired,
    configUrl: _v3.default.string
  });
}