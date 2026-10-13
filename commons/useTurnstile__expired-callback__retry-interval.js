{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useTurnstile", 0, function (_v0 = !1, _v1, _v2 = {}) {
    let _v3 = (0, _v1.useRef)(void 0),
      _v4 = (0, _v1.useRef)(!1),
      {
        successCb: _v5,
        beforeInteractiveCb: _v6,
        errorCb: _v7
      } = _v2,
      [_v8, _v9] = (0, _v1.useState)(""),
      [_v10, _v11] = (0, _v1.useState)(""),
      [_v12, _v13] = (0, _v1.useState)(""),
      _v14 = (0, _v1.useContext)(_v2.ViewerContext),
      _v15 = _v14?.isTurnstileEnabled || !1,
      _v16 = (0, _v1.useCallback)(() => {
        _v11(turnstile.render(`#${_v1}`, {
          sitekey: _v0 ? _v14?.turnstileSiteKeyInvisible : _v14?.turnstileSiteKey,
          language: _v14?.locale ?? "en",
          callback: function (_v0) {
            _v9(_v0), _v5 && _v5(_v0);
          },
          "expired-callback": function () {
            _v9(""), turnstile.reset(`#${_v1}`), turnstile.execute(`#${_v1}`);
          },
          "retry-interval": 0,
          "error-callback": function (_v0) {
            _v13(_v0), _v7 && _v7("widget_error");
          },
          "before-interactive-callback": function () {
            _v6 && _v6();
          }
        }));
      }, [_v6, _v1, _v7, _v0, _v5, _v14?.locale, _v14?.turnstileSiteKey, _v14?.turnstileSiteKeyInvisible]);
    return ((0, _v1.useEffect)(() => {
      if (_v15 && !_v3?.current) {
        _v4.current = !1;
        let _v0 = _v0 => {
            !_v4.current && (_v4.current = !0, _v13(_v0), _v7 && _v7(_v0));
          },
          _v1 = document.createElement("script");
        _v1.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", _v1.async = !0, _v1.defer = !0, _v1.onload = () => {
          _v4.current = !0, _v16();
        }, _v1.onerror = () => _v0("script_load_error");
        let _v2 = window.setTimeout(() => _v0("script_timeout"), 0);
        return document.body.appendChild(_v1), _v3.current = _v1, () => {
          clearTimeout(_v2), _v3?.current && document.body.removeChild(_v3?.current);
        };
      }
      _v15 || _v9("turnstile_disabled");
    }, [_v15]), _v15) ? {
      turnstileError: _v12,
      turnstileToken: _v8,
      setTurnstileToken: _v9,
      turnstileWidgetId: _v10,
      setTurnstileWidgetId: _v11,
      prepareTurnstileWidget: _v16
    } : {
      turnstileToken: _v8
    };
  }]);
}