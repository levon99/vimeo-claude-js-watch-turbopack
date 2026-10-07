{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = Object.assign || function (_v0) {
      for (var _v1 = 1; _v1 < arguments.length; _v1++) {
        var _v2 = arguments[_v1];
        for (var _v3 in _v2) Object.prototype.hasOwnProperty.call(_v2, _v3) && (_v0[_v3] = _v2[_v3]);
      }
      return _v0;
    },
    _v4 = function () {
      function _v0(_v0, _v1) {
        for (var _v2 = 0; _v2 < _v1.length; _v2++) {
          var _v3 = _v1[_v2];
          _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
        }
      }
      return function (_v0, _v1, _v2) {
        return _v1 && _v0(_v0.prototype, _v1), _v2 && _v0(_v0, _v2), _v0;
      };
    }(),
    _v5 = _v9(_v0.r(0)),
    _v6 = _v9(_v0.r(0)),
    _v7 = _v9(_v0.r(0)),
    _v8 = _v9(_v0.r(0));
  function _v9(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  var _v10 = "_grecaptcha.element.id",
    _v11 = "_grecaptcha.data-callback",
    _v12 = "_grecaptcha.data-expired-callback",
    _v13 = function (_v0) {
      if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function, not " + typeof _v0);
      function _v1() {
        if (!(this instanceof _v1)) throw TypeError("Cannot call a class as a function");
        var _v0 = (_v1.__proto__ || Object.getPrototypeOf(_v1)).apply(this, arguments);
        if (!this) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return _v0 && ("object" == typeof _v0 || "function" == typeof _v0) ? _v0 : this;
      }
      return _v1.prototype = Object.create(_v0 && _v0.prototype, {
        constructor: {
          value: _v1,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), _v0 && (Object.setPrototypeOf ? Object.setPrototypeOf(_v1, _v0) : _v1.__proto__ = _v0), _v4(_v1, [{
        key: "componentDidMount",
        value: function () {
          var _v0 = this.props,
            _v1 = _v0.locale,
            _v2 = _v0.callback,
            _v3 = _v0.expiredCallback,
            _v4 = document.head || document.getElementsByTagName("head")[0],
            _v5 = document.createElement("script");
          _v5.id = _v10, _v5.src = "https://www.google.com/recaptcha/api.js?hl=" + _v1, _v5.type = "text/javascript", _v5.async = !0, _v5.defer = !0, _v5.onerror = function (_v0) {
            throw URIError("The script " + _v0.target.src + " is not accessible.");
          }, _v4.appendChild(_v5), window[_v11] = _v2, window[_v12] = _v3;
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          var _v0;
          (_v0 = document.getElementById(_v10)).parentNode && _v0.parentNode.removeChild(_v0);
        }
      }, {
        key: "render",
        value: function () {
          var _v0 = this.props,
            _v1 = _v0.className,
            _v2 = _v0.sitekey,
            _v3 = _v0.invisible,
            _v4 = function (_v0, _v1) {
              var _v2 = {};
              for (var _v3 in _v0) !(_v1.indexOf(_v3) >= 0) && Object.prototype.hasOwnProperty.call(_v0, _v3) && (_v2[_v3] = _v0[_v3]);
              return _v2;
            }(_v0, ["className", "sitekey", "invisible"]),
            _v5 = _v3({}, (0, _v8.default)(_v4, ["callback", "expiredCallback", "locale"]), {
              className: (0, _v7.default)("g-recaptcha", _v1),
              "data-sitekey": _v2,
              "data-callback": _v11,
              "data-expired-callback": _v12
            }, _v3 && {
              "data-size": "invisible"
            });
          return _v5.default.createElement("div", _v5);
        }
      }]), _v1;
    }(_v5.default.Component);
  _v13.propTypes = {
    sitekey: _v6.default.string.isRequired,
    callback: _v6.default.func.isRequired,
    expiredCallback: _v6.default.func.isRequired,
    className: _v6.default.string,
    invisible: _v6.default.bool,
    locale: _v6.default.string
  }, _v13.defaultProps = {
    locale: "en",
    className: void 0,
    invisible: !1
  }, _v2.default = _v13;
}