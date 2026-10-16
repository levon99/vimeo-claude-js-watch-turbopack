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
    _v10 = _v0.i(0);
  let _v11 = ({
    id: _v0,
    value: _v1,
    isDisabled: _v2 = !1,
    showButton: _v3 = !1,
    ..._v4
  }) => {
    let _v5 = (0, _v6.useRef)(null),
      {
        width: _v6
      } = (0, _v10.useSize)(_v5) ?? {
        width: 39
      };
    return (0, _v1.jsxs)(_v7.InputGroup, {
      children: [(0, _v1.jsx)(_v8.Input, {
        id: _v0,
        variant: "outlined",
        value: _v1,
        isReadOnly: !0,
        isDisabled: _v2,
        ...(_v3 && {
          pr: _v6 + 16
        })
      }), _v3 && (0, _v1.jsx)(_v9.InputRightElement, {
        width: _v6 + 16,
        children: (0, _v1.jsx)(_v4.Button, {
          variant: "secondary",
          size: "xs",
          ref: _v5,
          isDisabled: _v2,
          ..._v4
        })
      })]
    });
  };
  _v0.s(["ReadOnlyInput", 0, _v11], 0), _v0.s(["CopyLinkSection", 0, ({
    value: _v0,
    isDisabled: _v1 = !1,
    showEditButton: _v2 = !1,
    onEditButtonClick: _v3,
    onCopyLinkButtonClick: _v4
  }) => (0, _v1.jsxs)(_v2.Flex, {
    role: "group",
    "aria-labelledby": "link-heading",
    flexDirection: "column",
    gap: "sm",
    children: [(0, _v1.jsx)(_v3.Text, {
      id: "link-heading",
      variant: "heading-xs",
      color: "text-primary",
      opacity: _v1 ? .5 : 1,
      children: (0, _v5.translate)({
        singular: "Link",
        dictionary: {
          es: {
            singular: "Vínculo"
          },
          "fr-FR": {
            singular: "Lien"
          },
          "ja-JP": {
            singular: "リンク"
          },
          "ko-KR": {
            singular: "링크"
          },
          "zh-CN": {
            singular: "链接"
          }
        }
      })
    }), (0, _v1.jsx)(_v11, {
      id: "custom-link",
      "data-panel-type": "CUSTOMIZE_LINK_PANEL",
      value: _v0,
      showButton: _v2,
      isDisabled: _v1,
      onClick: _v3,
      children: (0, _v5.translate)({
        singular: "Edit",
        dictionary: {
          es: {
            singular: "Editar"
          },
          "de-DE": {
            singular: "Bearbeiten"
          },
          "fr-FR": {
            singular: "Modifier"
          },
          "ja-JP": {
            singular: "編集"
          },
          "ko-KR": {
            singular: "편집"
          },
          "pt-BR": {
            singular: "Editar"
          },
          "zh-CN": {
            singular: "编辑"
          }
        }
      })
    }), (0, _v1.jsx)(_v4.Button, {
      variant: "primary",
      isDisabled: _v1,
      onClick: _v4,
      children: (0, _v5.translate)({
        singular: "Copy link",
        dictionary: {
          es: {
            singular: "Copiar vínculo"
          },
          "de-DE": {
            singular: "Link kopieren"
          },
          "fr-FR": {
            singular: "Copier le lien"
          },
          "ja-JP": {
            singular: "リンクをコピー"
          },
          "ko-KR": {
            singular: "링크 복사"
          },
          "pt-BR": {
            singular: "Copiar link"
          },
          "zh-CN": {
            singular: "复制链接"
          }
        }
      })
    })]
  })], 0);
}