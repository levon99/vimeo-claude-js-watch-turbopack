{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  _v0.s(["MobileClipPrivacyFilter", 0, ({
    filter: _v0,
    options: _v1,
    isDisabled: _v2 = !1,
    page: _v3 = "",
    onChange: _v4
  }) => {
    let _v5,
      _v6 = (0, _v10.useViewer)(),
      _v7 = _v6?.teamUser,
      _v8 = (0, _v11.getPrivacyTypeFilterOptionsByValue)(_v7?.teamName, _v7?.isWorkspace),
      _v9 = 0 === _v0.length,
      _v10 = _v0.length > 1,
      _v11 = _v1.map(_v0 => ({
        label: _v8[_v0].label,
        value: _v8[_v0].value,
        icon: _v8[_v0].icon
      })),
      _v12 = _v2 ? (0, _v9.translate)({
        singular: "Doesn't apply to folders",
        dictionary: {
          es: {
            singular: "No se aplica a las carpetas"
          },
          "de-DE": {
            singular: "Gilt nicht für Ordner"
          },
          "fr-FR": {
            singular: "Ne s'applique pas aux dossiers."
          },
          "ja-JP": {
            singular: "フォルダーには適用されません"
          },
          "ko-KR": {
            singular: "폴더에는 적용되지 않습니다."
          },
          "pt-BR": {
            singular: "Não se aplica a pastas"
          },
          "zh-CN": {
            singular: "不适用于文件夹"
          }
        }
      }) : void 0;
    return (0, _v1.jsx)(_v13.MobileFilter, {
      label: (_v5 = (0, _v9.translate)({
        singular: "Privacy",
        dictionary: {
          es: {
            singular: "Privacidad"
          },
          "de-DE": {
            singular: "Datenschutz"
          },
          "fr-FR": {
            singular: "Confidentialité "
          },
          "ja-JP": {
            singular: "プライバシー"
          },
          "ko-KR": {
            singular: "프라이버시"
          },
          "pt-BR": {
            singular: "Privacidade"
          },
          "zh-CN": {
            singular: "隐私"
          }
        }
      }), _v10 ? _v5 + (" (" + _v0.length) + ")" : _v9 ? _v5 : _v8[_v0[0]].label),
      subtitle: _v12,
      onOpen: () => {
        _v12.FilterBPEvents.sendOpenFilterEvent("clip_privacy", _v3, _v7, "mobile");
      },
      children: (0, _v1.jsx)(_v7.Stack, {
        children: _v11.map(_v0 => (0, _v1.jsx)(_v3.Box, {
          children: (0, _v1.jsx)(_v4.Checkbox, {
            paddingX: "sm",
            borderRadius: "sm",
            width: "100%",
            size: "md",
            onChange: () => {
              _v4(_v0.value);
            },
            isChecked: _v0.includes(_v0.value),
            isDisabled: _v2,
            children: (0, _v1.jsxs)(_v5.HStack, {
              spacing: 10,
              padding: "sm",
              paddingLeft: "0",
              children: [_v0.icon && _v2.default.createElement(_v0.icon, {
                boxSize: (0, _v6.rem)(20)
              }), (0, _v1.jsx)(_v8.Text, {
                variant: "body-md",
                isTruncated: !0,
                children: _v0.label
              })]
            })
          })
        }, _v0.value))
      })
    });
  }]);
}