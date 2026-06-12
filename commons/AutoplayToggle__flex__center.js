{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["AutoplayToggle", 0, ({
    id: _v0,
    ttl: _v1 = 1,
    defaultChecked: _v2 = !1,
    onChange: _v3,
    onCheckedChange: _v4,
    ..._v5
  }) => {
    let _v6 = (0, _v2.useRef)({
        value: _v2,
        expiry: new Date().getTime() + 0 * _v1
      }),
      [_v7, _v8] = (0, _v6.default)(_v0, _v6.current);
    (0, _v2.useEffect)(() => {
      if (_v7.expiry < new Date().getTime()) {
        _v8(_v6.current), _v4?.(_v6.current.value);
        return;
      }
      _v4?.(_v7.value);
    }, [_v7, _v4, _v8]);
    let _v9 = (0, _v2.useCallback)(_v0 => {
      _v8({
        value: _v0.target.checked,
        expiry: new Date().getTime() + 0 * _v1
      }), _v3?.(_v0);
    }, [_v1, _v3, _v8]);
    return (0, _v1.jsxs)(_v3.FormControl, {
      display: "flex",
      alignItems: "center",
      gap: "75",
      children: [(0, _v1.jsx)(_v4.FormLabel, {
        htmlFor: _v0,
        color: "text-primary",
        fontSize: "body-md",
        my: "0",
        children: (0, _v7.translate)({
          singular: "Autoplay next",
          dictionary: {
            es: {
              singular: "Reproducir de forma automática el siguiente video"
            },
            "de-DE": {
              singular: "Nächstes Video automatisch abspielen"
            },
            "fr-FR": {
              singular: "Lecture automatique de la vidéo suivante"
            },
            "ja-JP": {
              singular: "次を自動再生"
            },
            "ko-KR": {
              singular: "다음 항목 자동 재생"
            },
            "pt-BR": {
              singular: "Reprodução automática do próximo vídeo"
            },
            "zh-CN": {
              singular: "自动播放下一个"
            }
          }
        })
      }), (0, _v1.jsx)(_v5.Switch, {
        id: _v0,
        size: "sm",
        defaultChecked: _v7.value,
        onChange: _v9,
        ..._v5
      })]
    });
  }]);
}