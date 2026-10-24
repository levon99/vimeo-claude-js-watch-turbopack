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
  _v0.s(["EventTitle", 0, function ({
    title: _v0,
    required: _v1 = !1,
    isVertical: _v2 = !0,
    isInModal: _v3 = !1,
    children: _v4,
    onChange: _v5,
    onSetTitleInvalid: _v6
  }) {
    let [_v7, _v8] = (0, _v2.useState)(!1),
      [_v9, _v10] = (0, _v10.useControllableState)({
        defaultValue: _v0 ?? ""
      }),
      _v11 = _v9.length > 128,
      _v12 = (0, _v2.useCallback)(({
        target: {
          value: _v0
        }
      }) => {
        _v0 !== _v0 && (_v5(_v0), _v10(_v0), _v6 && _v6(_v0.length > 128));
      }, [_v0, _v5, _v10, _v6]),
      _v13 = (0, _v2.useCallback)(() => _v8(!0), []),
      _v14 = (0, _v2.useCallback)(() => {
        _v11 || _v8(!1);
      }, [_v11]);
    return (0, _v1.jsx)(_v3.FormControl, {
      display: "flex",
      flexDirection: "column",
      children: (0, _v1.jsxs)(_v9.Flex, {
        flexDirection: _v2 ? "column" : "row",
        alignItems: _v2 ? void 0 : "baseline",
        gap: (0, _v6.rem)(4),
        width: "100%",
        marginTop: "1px",
        children: [(0, _v1.jsx)(_v4.FormLabel, {
          color: "text-primary",
          fontWeight: "bold",
          role: "heading",
          minWidth: (0, _v6.rem)(120),
          marginBottom: _v2 ? (0, _v6.rem)(8) : 0,
          display: "flex",
          alignItems: "center",
          children: (0, _v1.jsxs)(_v8.Paragraph, {
            size: "md",
            color: "text-primary",
            fontWeight: "bold",
            children: [(0, _v13.translate)({
              singular: "Title",
              dictionary: {
                es: {
                  singular: "Título"
                },
                "de-DE": {
                  singular: "Titel"
                },
                "fr-FR": {
                  singular: "Titre"
                },
                "ja-JP": {
                  singular: "タイトル"
                },
                "ko-KR": {
                  singular: "제목"
                },
                "pt-BR": {
                  singular: "Título"
                },
                "zh-CN": {
                  singular: "标题"
                }
              }
            }), " ", _v1 && "*"]
          })
        }), (0, _v1.jsxs)(_v9.Flex, {
          width: "100%",
          direction: "column",
          position: "relative",
          marginBottom: _v3 ? (0, _v6.rem)(12) : 0,
          gap: (0, _v6.rem)(8),
          children: [(0, _v1.jsx)(_v5.Input, {
            "data-testid": "event-title",
            size: "sm",
            marginBottom: _v3 ? (0, _v6.rem)(8) : 0,
            backgroundColor: "surface",
            value: _v0 ?? "",
            isInvalid: _v11,
            onChange: _v12,
            onFocus: _v13,
            onBlur: _v14
          }), (0, _v1.jsxs)(_v11.Grid, {
            templateColumns: "repeat(2, 1fr)",
            position: _v3 ? "absolute" : "relative",
            width: "100%",
            top: "100%",
            children: [(0, _v1.jsx)(_v12.GridItem, {
              children: _v7 ? (0, _v1.jsxs)(_v7.Text, {
                "data-testid": "character-counter",
                variant: "body-sm",
                lineHeight: (0, _v6.rem)(14),
                color: _v11 ? "status-destructive-primary" : "text-secondary",
                children: [_v9.length, " / ", 128]
              }) : null
            }), (0, _v1.jsx)(_v12.GridItem, {
              children: _v4
            })]
          })]
        })]
      })
    });
  }], 0);
}