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
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  _v0.s(["ClipPrivacyTypeFilter", 0, ({
    filter: _v0,
    options: _v1,
    isDisabled: _v2 = !1,
    page: _v3 = "",
    setFilter: _v4
  }) => {
    let _v5,
      _v6 = (0, _v15.useViewer)(),
      _v7 = _v6?.teamUser,
      _v8 = (0, _v16.getPrivacyTypeFilterOptionsByValue)(_v6?.teamUser?.teamName, _v6?.teamUser?.isWorkspace),
      _v9 = 0 === _v0.length,
      _v10 = _v0.length > 1,
      _v11 = _v1.map(_v0 => ({
        label: _v8[_v0].label,
        value: _v8[_v0].value,
        icon: _v8[_v0].icon
      })).map(_v0 => (0, _v1.jsx)(_v11.Box, {
        _hover: {
          backgroundColor: "fill-component-hover",
          borderRadius: "0.5rem"
        },
        "data-testid": `clip-privacy-filter-${_v0.value}`,
        children: (0, _v1.jsx)(_v10.Checkbox, {
          paddingX: "sm",
          borderRadius: "sm",
          width: "100%",
          size: "md",
          onChange: () => {
            _v4(_v0.value), _v17.FilterBPEvents.sendApplyFilterEvent("clip_privacy", _v3, _v7, "desktop");
          },
          isChecked: _v0.includes(_v0.value),
          children: (0, _v1.jsxs)(_v9.HStack, {
            spacing: 4,
            padding: "sm",
            children: [_v0.icon && _v2.default.createElement(_v0.icon), (0, _v1.jsx)(_v7.Text, {
              variant: "body-md",
              flex: "1",
              minWidth: 0,
              children: _v0.label
            })]
          })
        })
      }, _v0.value));
    return (0, _v1.jsxs)(_v3.Menu, {
      isLazy: !0,
      placement: "bottom-end",
      onOpen: () => {
        _v17.FilterBPEvents.sendOpenFilterEvent("clip_privacy", _v3, _v7, "desktop");
      },
      children: [(0, _v1.jsx)(_v12.Tooltip, {
        label: (0, _v14.translate)({
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
        }),
        placement: "top",
        isDisabled: !_v2,
        children: (0, _v1.jsx)(_v4.MenuButton, {
          as: _v6.Button,
          variant: "tertiary",
          isDisabled: _v2,
          rightIcon: (0, _v1.jsx)(_v13.ChevronDownSmall, {}),
          "data-id": "clip-privacy-filter",
          children: (_v5 = (0, _v14.translate)({
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
          }), _v10 ? _v5 + (" (" + _v0.length) + ")" : _v9 ? _v5 : _v8[_v0[0]].label)
        })
      }), (0, _v1.jsx)(_v5.MenuList, {
        minWidth: (0, _v8.rem)(268),
        maxHeight: "70vh",
        overflowY: "auto",
        "data-testid": "clip-privacy-filter-menu",
        children: (0, _v1.jsx)(_v11.Box, {
          children: _v11
        })
      })]
    });
  }]);
}