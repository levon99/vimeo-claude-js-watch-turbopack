{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = async _v0 => (0, _v3.hasInvalidNameParameter)(await _v0.json()) ? "invalid_name" : void 0;
  _v0.s(["useCopyShowcase", 0, ({
    onFailure: _v0,
    onSuccess: _v1
  }) => {
    let {
        baseUrl: _v2,
        jwt: _v3,
        xVimeoPage: _v4,
        locale: _v5
      } = (0, _v2.useGctlConfig)(),
      [_v6, _v7] = (0, _v1.useState)(!1),
      _v8 = (0, _v1.useRef)(!1);
    return [(0, _v1.useCallback)(async (_v0, _v1) => {
      if (!_v8.current) {
        if (!_v2) return void _v0();
        _v8.current = !0, _v7(!0);
        try {
          let _v0 = await fetch(`${_v2}${_v0}/copy`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/vnd.vimeo.*+json;version=3.4.1",
              Authorization: _v3 ? `jwt ${_v3}` : "",
              "Vimeo-Page": `${_v4}`,
              "Accept-Language": _v5 ?? "en"
            },
            body: JSON.stringify(_v1 ? {
              name: _v1
            } : {})
          });
          if (!_v0.ok) return void _v0(await _v4(_v0));
          let _v1 = await _v0.json();
          if (!_v1?.uri) return void _v0();
          _v1({
            uri: _v1.uri,
            name: _v1?.name ?? _v1
          });
        } catch {
          _v0();
        } finally {
          _v8.current = !1, _v7(!1);
        }
      }
    }, [_v2, _v3, _v5, _v0, _v1, _v4]), {
      loading: _v6
    }];
  }]);
}