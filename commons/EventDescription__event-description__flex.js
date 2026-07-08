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
    _v16 = _v0.i(0);
  _v0.s(["EventDescription", 0, function ({
    id: _v0 = (0, _v15.createDomName)("event-description"),
    className: _v1 = (0, _v15.createDomName)("event-description"),
    children: _v2,
    description: _v3,
    isVertical: _v4 = !0,
    isInModal: _v5 = !1,
    fieldHeight: _v6 = (0, _v9.rem)(32),
    onChange: _v7,
    onSetDescriptionInvalid: _v8
  }) {
    let [_v9, _v10] = (0, _v2.useState)(!1),
      [_v11, _v12] = (0, _v11.useControllableState)({
        defaultValue: _v3 ?? ""
      }),
      _v13 = _v11.length > 0,
      _v14 = (0, _v2.useCallback)(({
        target: {
          value: _v0
        }
      }) => {
        _v0 !== _v3 && (_v7(_v0), _v12(_v0), _v8 && _v8(_v0.length > 0));
      }, [_v3, _v7, _v12, _v8]),
      _v15 = (0, _v2.useCallback)(() => _v10(!0), []),
      _v16 = (0, _v2.useCallback)(() => {
        _v13 || _v10(!1);
      }, [_v13]);
    return (0, _v1.jsxs)(_v3.FormControl, {
      id: _v0,
      className: _v1,
      display: "flex",
      flexDirection: _v4 ? "column" : "row",
      alignItems: "flex-start",
      gap: (0, _v9.rem)(4),
      children: [(0, _v1.jsxs)(_v7.FormLabel, {
        color: "text-primary",
        fontWeight: "bold",
        role: "heading",
        minWidth: (0, _v9.rem)(120),
        marginBottom: _v4 ? (0, _v9.rem)(8) : 0,
        marginTop: _v4 ? 0 : (0, _v9.rem)(8),
        display: "flex",
        alignItems: "center",
        gap: (0, _v9.rem)(4),
        children: [(0, _v1.jsx)(_v10.Paragraph, {
          size: "md",
          fontWeight: "bold",
          color: "text-primary",
          children: (0, _v14.translate)({
            singular: "Description",
            dictionary: {
              es: {
                singular: "Descripción"
              },
              "de-DE": {
                singular: "Beschreibung"
              },
              "ja-JP": {
                singular: "概要"
              },
              "ko-KR": {
                singular: "설명"
              },
              "pt-BR": {
                singular: "Descrição"
              },
              "zh-CN": {
                singular: "描述"
              }
            }
          })
        }), (0, _v1.jsx)(_v16.BokehTooltip, {
          label: (0, _v14.translate)({
            singular: "Description appears on your event page on Vimeo",
            dictionary: {
              es: {
                singular: "La descripción aparece en la página de tu evento en Vimeo"
              },
              "de-DE": {
                singular: "Die Beschreibung erscheint auf Ihrer Veranstaltungsseite auf Vimeo"
              },
              "fr-FR": {
                singular: "La description apparaît sur la page de votre événement sur Vimeo"
              },
              "ja-JP": {
                singular: "説明はイベントページ（Vimeo）に表示されます"
              },
              "ko-KR": {
                singular: "설명은 이벤트의 Vimeo 페이지에 표시됩니다"
              },
              "pt-BR": {
                singular: "A descrição aparece na página do seu evento no Vimeo"
              },
              "zh-CN": {
                singular: "描述将显示在您在 Vimeo 的活动页面上"
              }
            }
          }),
          shouldWrapChildren: !1,
          children: (0, _v1.jsx)(_v4.Flex, {
            height: (0, _v9.rem)(16),
            width: (0, _v9.rem)(16),
            cursor: "pointer",
            children: (0, _v1.jsx)(_v13.InfoCircle, {
              boxSize: (0, _v9.rem)(16),
              color: "text-tertiary"
            })
          })
        })]
      }), (0, _v1.jsxs)(_v4.Flex, {
        width: "100%",
        direction: "column",
        position: "relative",
        marginBottom: _v5 ? (0, _v9.rem)(24) : 0,
        gap: (0, _v9.rem)(8),
        children: [(0, _v1.jsx)(_v8.Textarea, {
          id: (0, _v15.createDomName)(_v0, "textarea"),
          className: (0, _v15.createDomName)(_v1, "textarea"),
          padding: `${(0, _v9.rem)(6)} ${(0, _v9.rem)(12)}`,
          width: "100%",
          rows: 3,
          minHeight: _v6,
          resize: "vertical",
          backgroundColor: "surface",
          borderColor: "input-stroke",
          borderRadius: "sm",
          outlineColor: "input-stroke",
          _focus: {
            outlineWidth: (0, _v9.rem)(2),
            outlineColor: "text-primary"
          },
          _dark: {
            "&:hover": {
              outlineColor: "input-stroke-hover"
            },
            "&:focus": {
              outlineColor: "gray.50"
            }
          },
          value: _v3 ?? void 0,
          isInvalid: _v13,
          verticalAlign: "top",
          onChange: _v14,
          onFocus: _v15,
          onBlur: _v16
        }), (0, _v1.jsxs)(_v5.Grid, {
          templateColumns: "repeat(2, 1fr)",
          position: _v5 ? "absolute" : "relative",
          paddingTop: _v5 ? (0, _v9.rem)(8) : 0,
          width: "100%",
          top: "100%",
          children: [(0, _v1.jsx)(_v6.GridItem, {
            children: _v9 ? (0, _v1.jsxs)(_v12.Text, {
              id: (0, _v15.createDomName)(_v0, "character-counter"),
              className: (0, _v15.createDomName)(_v1, "character-counter"),
              variant: "body-sm",
              lineHeight: (0, _v9.rem)(14),
              color: _v13 ? "status-destructive-primary" : "text-secondary",
              children: [_v11.length, " / ", 0]
            }) : null
          }), (0, _v1.jsx)(_v6.GridItem, {
            children: _v2
          })]
        })]
      })]
    });
  }], 0);
}