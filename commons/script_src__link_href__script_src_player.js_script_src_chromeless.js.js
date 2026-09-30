{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.assetLoader = void 0;
  var _v3 = function (_v0) {
      var _v1 = document.querySelector('script[src="'.concat(_v0.js, '"]')),
        _v2 = document.querySelector('link[href="'.concat(_v0.css, '"]'));
      return !!_v1 && !!_v2;
    },
    _v4 = function () {
      var _v0 = document.querySelector('script[src$="player.js"], script[src$="chromeless.js"]');
      _v0 && _v0.parentNode.removeChild(_v0);
      var _v1 = document.querySelector('link[href$="player.css"], link[href$="chromeless.css"]');
      _v1 && _v1.parentNode.removeChild(_v1);
    };
  _v2.assetLoader = function (_v0) {
    var _v1 = [];
    for (var _v2 in _v3(_v0) || _v4(), _v0) Object.hasOwnProperty.call(_v0, _v2) && function () {
      var _v0,
        _v1 = void 0;
      switch (_v2) {
        case "js":
          (_v1 = document.createElement("script")).src = _v0[_v2], document.body.appendChild(_v1);
          break;
        case "css":
          (_v1 = document.createElement("link")).rel = "stylesheet", _v1.type = "text/css", _v1.media = "screen", _v1.href = _v0[_v2], document.getElementsByTagName("head")[0].appendChild(_v1);
      }
      var _v2 = new Promise(function (_v0, _v1) {
        _v1.onload = _v0, _v1.onabort = _v1, _v1.onerror = _v1;
      });
      _v1 = [].concat(function (_v0) {
        if (Array.isArray(_v0)) {
          for (var _v1 = 0, _v2 = Array(_v0.length); _v1 < _v0.length; _v1++) _v2[_v1] = _v0[_v1];
          return _v2;
        }
      }(_v0 = _v1) || function (_v0) {
        if (Symbol.iterator in Object(_v0) || "[object Arguments]" === Object.prototype.toString.call(_v0)) return Array.from(_v0);
      }(_v0) || function () {
        throw TypeError("Invalid attempt to spread non-iterable instance");
      }(), [_v2]);
    }();
    return Promise.all(_v1);
  };
}