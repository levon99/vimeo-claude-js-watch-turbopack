{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.Player = void 0;
  var _v3 = _v5(_v0.r(0)),
    _v4 = _v5(_v0.r(0));
  function _v5(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  function _v6(_v0) {
    return (_v6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v7(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v8(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v7(Object(_v2), !0).forEach(function (_v0) {
        _v12(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v7(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
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
      return _v2 = (_v0 = (_v1 = _v9(_v2)).call.apply(_v1, [this].concat(_v4))) && ("object" === _v6(_v0) || "function" == typeof _v0) ? _v0 : _v10(this), _v12(_v10(_v2), "state", {
        api: null
      }), _v12(_v10(_v2), "playerObject", {
        element: _v4.default.createElement("div", {
          className: "player_container js-player_container_".concat(_v2.props.clipId),
          style: {
            width: "100%",
            height: "100%"
          }
        }, _v4.default.createElement("div", {
          id: _v2.props.playerId,
          className: "player js-player"
        }))
      }), _v12(_v10(_v2), "configurePlayer", function () {
        _v2.context.onPlayerReady(function () {
          var _v0 = window.VimeoPlayer || window.ChromelessPlayer,
            _v1 = _v2.props.configUrl || _v2.context.configUrl,
            _v2 = new _v0(document.getElementById(_v2.props.playerId), _v1, !0, {});
          _v2.ready(function () {
            _v2.setState(function (_v0) {
              return _v8({}, _v0, {
                api: _v2,
                ready: !0
              });
            }, function () {
              _v2.props.onReady && _v2.props.onReady(_v2);
            });
          });
        }, _v2.props.playerId);
      }), _v2;
    }
    return _v2.prototype = Object.create(_v0 && _v0.prototype, {
      constructor: {
        value: _v2,
        writable: !0,
        configurable: !0
      }
    }), _v0 && _v11(_v2, _v0), _v1 = [{
      key: "componentDidMount",
      value: function () {
        this.props.transcodeComplete && this.configurePlayer();
      }
    }, {
      key: "componentDidUpdate",
      value: function (_v0) {
        (_v0.configUrl !== this.props.configUrl || !_v0.transcodeComplete && this.props.transcodeComplete) && this.configurePlayer();
      }
    }, {
      key: "render",
      value: function () {
        return "function" == typeof this.props.children ? this.props.children(_v8({}, this.state, {}, this.playerObject, {
          configurePlayer: this.configurePlayer
        })) : this.playerObject.element;
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
      }
    }(_v2.prototype, _v1), _v2;
  }(_v4.default.Component);
  _v2.Player = _v13, _v12(_v13, "Events", ["play", "pause", "ended", "timeupdate", "progress", "seeked", "texttrackchange", "cuechange", "cuepoint", "volumechange", "error", "loaded"]), _v12(_v13, "contextTypes", {
    onPlayerReady: _v3.default.func.isRequired,
    configUrl: _v3.default.string.isRequired
  }), _v12(_v13, "defaultProps", {
    transcodeComplete: !0
  });
}