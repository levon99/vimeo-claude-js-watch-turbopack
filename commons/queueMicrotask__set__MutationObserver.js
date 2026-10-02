{
  "use strict";

  var _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0).set,
    _v12 = _v0.r(0),
    _v13 = _v0.r(0),
    _v14 = _v0.r(0),
    _v15 = _v0.r(0),
    _v16 = _v0.r(0),
    _v17 = _v8.MutationObserver || _v8.WebKitMutationObserver,
    _v18 = _v8.document,
    _v19 = _v8.process,
    _v20 = _v8.Promise,
    _v21 = _v9("queueMicrotask");
  if (!_v21) {
    var _v22 = new _v12(),
      _v23 = function () {
        var _v0, _v1;
        for (_v16 && (_v0 = _v19.domain) && _v0.exit(); _v1 = _v22.get();) try {
          _v1();
        } catch (_v0) {
          throw _v22.head && _v3(), _v0;
        }
        _v0 && _v0.enter();
      };
    _v13 || _v16 || _v15 || !_v17 || !_v18 ? !_v14 && _v20 && _v20.resolve ? ((_v6 = _v20.resolve(void 0)).constructor = _v20, _v7 = _v10(_v6.then, _v6), _v3 = function () {
      _v7(_v23);
    }) : _v16 ? _v3 = function () {
      _v19.nextTick(_v23);
    } : (_v11 = _v10(_v11, _v8), _v3 = function () {
      _v11(_v23);
    }) : (_v4 = !0, _v5 = _v18.createTextNode(""), new _v17(_v23).observe(_v5, {
      characterData: !0
    }), _v3 = function () {
      _v5.data = _v4 = !_v4;
    }), _v21 = function (_v0) {
      _v22.head || _v3(), _v22.add(_v0);
    };
  }
  _v1.exports = _v21;
}