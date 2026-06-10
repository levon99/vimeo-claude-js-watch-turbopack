{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = [".*\\/folders\\/root.*", ".*\\/projects\\/\\d+\\/items.*", ".*\\/videos\\/\\d+.*"],
    _v5 = _v0 => "object" == typeof _v0 && null !== _v0,
    _v6 = /^\/videos\/\d+(?::[a-zA-Z0-9]+)?$/,
    _v7 = (_v0, {
      uri: _v1,
      patch: _v2
    }) => {
      var _v3;
      if (Array.isArray(_v0)) {
        let _v0 = !1,
          _v1 = _v0.map(_v0 => {
            let _v1 = _v7(_v0, {
              uri: _v1,
              patch: _v2
            });
            return _v1 !== _v0 && (_v0 = !0), _v1;
          });
        return _v0 ? _v1 : _v0;
      }
      if (!_v5(_v0)) return _v0;
      let _v4 = _v0,
        _v5 = !1;
      if ("string" == typeof _v0.uri && ((_v3 = _v0.uri) === _v1 || _v6.test(_v3) && _v6.test(_v1) && (0, _v3.idFromUri)(_v3) === (0, _v3.idFromUri)(_v1))) {
        let _v0 = _v5(_v0.privacy) ? _v0.privacy : {};
        _v0.view !== _v2.privacy && (_v4 = {
          ..._v4,
          privacy: {
            ..._v0,
            view: _v2.privacy
          }
        }, _v5 = !0);
        let _v1 = _v2.password,
          _v2 = _v0.password,
          _v3 = null === _v1 && null != _v2,
          _v4 = "string" == typeof _v1 && _v1 !== _v2;
        (_v3 || _v4) && (_v4 = {
          ..._v4,
          password: _v1
        }, _v5 = !0);
      }
      for (let [_v0, _v1] of Object.entries(_v4)) {
        let _v0 = _v7(_v1, {
          uri: _v1,
          patch: _v2
        });
        _v0 !== _v1 && (_v5 || (_v4 = {
          ..._v4
        }, _v5 = !0), _v4[_v0] = _v0);
      }
      return _v5 ? _v4 : _v0;
    };
  _v0.s(["useUpdateVideoPrivacyCache", 0, function () {
    let _v0 = (0, _v2.default)();
    return (0, _v1.useCallback)(({
      uri: _v0,
      ..._v1
    }) => {
      let _v2 = _v0 => ((_v0, {
        uri: _v1,
        patch: _v2
      }) => _v7(_v0, {
        uri: _v1,
        patch: _v2
      }))(_v0, {
        uri: _v0,
        patch: _v1
      });
      return Promise.all(_v4.map(_v0 => _v0(_v0, _v2, !1)));
    }, [_v0]);
  }]);
}