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
    _v9 = _v0.i(0);
  let _v10 = () => (0, _v1.jsx)(_v3.Box, {
    width: "1px",
    background: "stroke",
    height: "1.25rem",
    margin: "0 1rem"
  });
  _v0.s(["CheckboxItemCount", 0, ({
    hasCheckbox: _v0 = !1,
    isChecked: _v1 = !1,
    isDisabled: _v2 = !1,
    isIndeterminate: _v3 = !1,
    isLoading: _v4 = !1,
    onChange: _v5,
    selectedItemCount: _v6,
    subtitle: _v7
  }) => {
    let _v8 = (0, _v9.usePageName)();
    return _v4 ? (0, _v1.jsx)(_v6.Skeleton, {
      variant: "text",
      width: "12.5rem"
    }) : (0, _v1.jsxs)(_v5.Flex, {
      alignItems: "center",
      children: [_v0 && (0, _v1.jsxs)(_v5.Flex, {
        display: {
          base: "none",
          md: "flex"
        },
        paddingLeft: "3",
        children: [(0, _v1.jsx)(_v4.Checkbox, {
          "data-testid": "select-all-checkbox",
          isChecked: _v1,
          isDisabled: _v2,
          isIndeterminate: _v3,
          onChange: () => {
            _v2.BigPictureClient.sendEvent(new _v2.Event("vimeo.click", 137, {
              copy: `${_v6}`,
              feature: "video_library",
              location: "select_all_top",
              name: "select_item",
              page: _v8,
              target: _v1 ? "de-selected" : "selected",
              type: "general",
              target_path: null,
              click_type: null,
              device_type: null,
              path: window.location.pathname,
              third_party_integration: null
            })), _v5?.();
          },
          size: "md",
          children: (0, _v1.jsx)(_v7.Text, {
            as: "span",
            color: "text-secondary",
            variant: "body-md",
            children: (0, _v8.translate)({
              singular: "Select all",
              dictionary: {
                es: {
                  singular: "Seleccionar todo"
                },
                "de-DE": {
                  singular: "Alles auswählen"
                },
                "fr-FR": {
                  singular: "Tout sélectionner"
                },
                "ja-JP": {
                  singular: "すべて選択"
                },
                "ko-KR": {
                  singular: "모두 선택"
                },
                "pt-BR": {
                  singular: "Selecionar tudo"
                },
                "zh-CN": {
                  singular: "选择所有"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v10, {})]
      }), (0, _v1.jsx)(_v7.Text, {
        color: "text-secondary",
        variant: "body-md",
        children: _v7
      })]
    });
  }]);
}