{
  "use strict";

  let _v1 = "https://help.vimeo.com",
    _v2 = new Map([["en", "en-us"], ["de-DE", "de"], ["es", "es"], ["fr-FR", "fr"], ["ja-JP", "ja"], ["ko-KR", "ko"], ["pt-BR", "pt-br"], ["zh-CN", "zh-cn"]]),
    _v3 = _v0 => _v2.get(_v0) ?? "en-us";
  _v0.s(["HC_BASE_URL", 0, _v1, "getHelpCenterRequestsUrl", 0, _v0 => `https://vimeo.com/help/sso?redirect_to=${((_v0, _v1 = "") => `${_v1}/hc/${_v3(_v0)}${_v1}`)(_v0, "/requests")}`, "getZendeskLocale", 0, _v3], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["MAX_QUERY_LENGTH", 0, 500, "useAgenticHelp", 0, () => {
    let {
        baseUrl: _v0,
        jwt: _v1
      } = (0, _v5.useGctlConfig)(),
      _v2 = (0, _v4.useContext)(_v6.ViewerContext),
      _v3 = _v2?.user,
      [_v4, _v5] = (0, _v4.useState)(null),
      [_v6, _v7] = (0, _v4.useState)(!1),
      _v8 = (0, _v4.useRef)(null),
      _v9 = (0, _v4.useCallback)(async _v0 => {
        if (_v8.current?.abort(), _v8.current = null, null == _v3 || null == _v0 || null == _v1 || _v0.length > 500) return _v5(null), _v7(!1), null;
        let _v1 = new AbortController();
        _v8.current = _v1;
        let _v2 = setTimeout(() => _v1.abort(), 0);
        _v7(!0), _v5(null);
        try {
          let _v0 = await fetch(`${_v0}/search/agentic/help`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `jwt ${_v1}`
            },
            body: JSON.stringify({
              query: _v0
            }),
            signal: _v1.signal
          });
          if (!_v0.ok) throw Error(`Agentic help failed with status: ${_v0.status}`);
          let _v1 = await _v0.json();
          if (_v8.current !== _v1) return null;
          let _v2 = "object" == typeof _v1 && null !== _v1 && "capability" in _v1 && "help" === _v1.capability && "answer" in _v1 && "string" == typeof _v1.answer ? _v1 : null;
          return _v5(_v2), _v2;
        } catch {
          return _v8.current === _v1 && _v5(null), null;
        } finally {
          clearTimeout(_v2), _v8.current === _v1 && _v7(!1);
        }
      }, [_v0, _v1, _v3]),
      _v10 = (0, _v4.useCallback)(() => {
        _v8.current?.abort(), _v8.current = null, _v7(!1);
      }, []);
    return (0, _v4.useEffect)(() => () => {
      _v8.current?.abort(), _v8.current = null;
    }, []), {
      agenticHelp: _v4,
      isAgenticHelpLoading: _v6,
      fetchAgenticHelp: _v9,
      cancelAgenticHelp: _v10
    };
  }], 0);
}