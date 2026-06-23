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
  let _v10 = ({
    children: _v0,
    label: _v1,
    info: _v2,
    isDisabled: _v3,
    ..._v4
  }) => {
    let _v5 = (0, _v8.useColorModeValue)("blackAlpha.500", "whiteAlpha.500"),
      _v6 = _v3 ? _v5 : "text-primary";
    return (0, _v1.jsxs)(_v3.FormControl, {
      w: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: _v6,
      cursor: _v3 ? "not-allowed" : "pointer",
      ..._v4,
      children: [(0, _v1.jsxs)(_v5.HStack, {
        gap: "xs",
        alignItems: "center",
        justifyContent: "start",
        children: [(0, _v1.jsx)(_v4.FormLabel, {
          cursor: "inherit",
          my: "0",
          children: "string" == typeof _v1 ? (0, _v1.jsx)(_v6.Text, {
            variant: "body-xl",
            color: _v6,
            fontSize: "inherit",
            children: _v1
          }) : _v1
        }), _v2 && (0, _v1.jsx)(_v7.Tooltip, {
          label: _v2,
          shouldWrapChildren: !0,
          children: (0, _v1.jsx)(_v9.InfoCircle, {
            boxSize: "2xs",
            display: "flex"
          })
        })]
      }), (0, _v1.jsx)(_v5.HStack, {
        children: _v0
      })]
    });
  };
  _v0.s(["LabeledControl", 0, _v10], 0), _v0.s(["Toggle", 0, ({
    label: _v0,
    info: _v1,
    isDisabled: _v2,
    size: _v3 = "sm",
    onChange: _v4,
    ..._v5
  }) => (0, _v1.jsx)(_v10, {
    label: _v0,
    isDisabled: _v2,
    info: _v1,
    ..._v5,
    children: (0, _v1.jsx)(_v2.Switch, {
      cursor: "inherit",
      size: _v3,
      isDisabled: _v2,
      onChange: _v4,
      ..._v5
    })
  })], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  _v0.s(["DefaultFooterContent", 0, ({
    isLoading: _v0 = !1,
    isSaveDisabled: _v1,
    onSave: _v2,
    onApplyToAll: _v3,
    disableApplyToAll: _v4 = !1
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v11.Checkbox, {
      size: "md",
      onChange: _v0 => _v3(_v0.target.checked),
      disabled: _v4,
      children: (0, _v13.translate)({
        singular: "Apply to all existing videos",
        dictionary: {
          es: {
            singular: "Aplicar a todos los videos existentes"
          },
          "de-DE": {
            singular: "Auf alle vorhandenen Videos anwenden"
          },
          "fr-FR": {
            singular: "Appliquer à toutes les vidéos existantes"
          },
          "ja-JP": {
            singular: "既存のすべての動画に適用"
          },
          "ko-KR": {
            singular: "기존 동영상 전체에 적용"
          },
          "pt-BR": {
            singular: "Aplicar a todos os vídeos existentes"
          },
          "zh-CN": {
            singular: "应用于所有现有视频"
          }
        }
      })
    }), (0, _v1.jsx)(_v12.Button, {
      variant: "primary",
      onClick: _v2,
      isLoading: _v0,
      isDisabled: _v1,
      children: (0, _v13.translate)({
        singular: "Save",
        dictionary: {
          es: {
            singular: "Guardar"
          },
          "de-DE": {
            singular: "Speichern"
          },
          "fr-FR": {
            singular: "Enregistrer"
          },
          "ja-JP": {
            singular: "保存"
          },
          "ko-KR": {
            singular: "저장"
          },
          "pt-BR": {
            singular: "Salvar"
          },
          "zh-CN": {
            singular: "保存"
          }
        }
      })
    })]
  })], 0);
}