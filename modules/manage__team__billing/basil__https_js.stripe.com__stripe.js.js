{
  "use strict";

  var _v1,
    _v2 = "basil",
    _v3 = "https://js.stripe.com",
    _v4 = "".concat(_v3, "/").concat(_v2, "/stripe.js"),
    _v5 = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    _v6 = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
    _v7 = function () {
      for (var _v0 = document.querySelectorAll('script[src^="'.concat(_v3, '"]')), _v1 = 0; _v1 < _v0.length; _v1++) {
        var _v2,
          _v3 = _v0[_v1];
        if (_v2 = _v3.src, _v5.test(_v2) || _v6.test(_v2)) return _v3;
      }
      return null;
    },
    _v8 = function (_v0) {
      var _v1 = _v0 && !_v0.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
        _v2 = document.createElement("script");
      _v2.src = "".concat(_v4).concat(_v1);
      var _v3 = document.head || document.body;
      if (!_v3) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
      return _v3.appendChild(_v2), _v2;
    },
    _v9 = function (_v0, _v1) {
      _v0 && _v0._registerWrapper && _v0._registerWrapper({
        name: "stripe-js",
        version: "7.9.0",
        startTime: _v1
      });
    },
    _v10 = null,
    _v11 = null,
    _v12 = null,
    _v13 = function (_v0, _v1, _v2) {
      if (null === _v0) return null;
      var _v3,
        _v4 = _v1[0].match(/^pk_test/),
        _v5 = 3 === (_v3 = _v0.version) ? "v3" : _v3;
      _v4 && _v5 !== _v2 && console.warn("Stripe.js@".concat(_v5, " was loaded on the page, but @stripe/stripe-js@").concat("7.9.0", " expected Stripe.js@").concat(_v2, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
      var _v6 = _v0.apply(void 0, _v1);
      return _v9(_v6, _v2), _v6;
    },
    _v14 = !1,
    _v15 = function () {
      return _v1 || (_v1 = (null !== _v10 ? _v10 : (_v10 = new Promise(function (_v0, _v1) {
        if ("u" < typeof window || "u" < typeof document) return void _v0(null);
        if (window.Stripe, window.Stripe) return void _v0(window.Stripe);
        try {
          var _v2,
            _v3 = _v7();
          _v3 ? _v3 && null !== _v12 && null !== _v11 && (_v3.removeEventListener("load", _v12), _v3.removeEventListener("error", _v11), null == (_v2 = _v3.parentNode) || _v2.removeChild(_v3), _v3 = _v8(null)) : _v3 = _v8(null), _v12 = function () {
            window.Stripe ? _v0(window.Stripe) : _v1(Error("Stripe.js not available"));
          }, _v11 = function (_v0) {
            _v1(Error("Failed to load Stripe.js", {
              cause: _v0
            }));
          }, _v3.addEventListener("load", _v12), _v3.addEventListener("error", _v11);
        } catch (_v0) {
          _v1(_v0);
          return;
        }
      })).catch(function (_v0) {
        return _v10 = null, Promise.reject(_v0);
      })).catch(function (_v0) {
        return _v1 = null, Promise.reject(_v0);
      }));
    };
  Promise.resolve().then(function () {
    return _v15();
  }).catch(function (_v0) {
    _v14 || console.warn(_v0);
  }), _v0.s(["loadStripe", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    _v14 = !0;
    var _v3 = Date.now();
    return _v15().then(function (_v0) {
      return _v13(_v0, _v1, _v3);
    });
  }], 0), _v0.s([], 0);
}