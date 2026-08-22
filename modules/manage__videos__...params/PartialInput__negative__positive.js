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
  _v0.s(["PartialInput", 0, function (_v0) {
    let {
        prefix: _v1,
        dismissOnClick: _v2,
        onChange: _v3,
        value: _v4,
        messages: _v5,
        focusInputOnPrefixClick: _v6,
        variant: _v7 = "default"
      } = _v0,
      [_v8, _v9] = (0, _v2.useState)(_v4),
      _v10 = (0, _v2.useRef)(null),
      _v11 = (0, _v2.useRef)(null),
      _v12 = _v5?.type === "negative",
      _v13 = _v5?.type === "positive",
      _v14 = () => {
        if (_v6 && _v10.current) {
          _v10.current.focus();
          let _v0 = document.createRange(),
            _v1 = window.getSelection();
          _v0.selectNodeContents(_v10.current), _v0.collapse(!1), _v1?.removeAllRanges(), _v1?.addRange(_v0), _v11.current?.scrollTo?.({
            left: _v11.current.scrollWidth,
            behavior: "auto"
          });
        }
      };
    return (0, _v2.useEffect)(() => () => {
      _v9(_v4);
    }, []), (0, _v2.useEffect)(() => {
      _v14();
    }, []), (0, _v1.jsxs)(_v5.FormControl, {
      isInvalid: _v12,
      children: [(0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v3.Box, {
          tabIndex: 0,
          position: "relative",
          fontSize: "body-md",
          border: "1px solid",
          borderColor: _v12 ? "red.400" : _v13 ? "green.400" : "input-stroke",
          borderRadius: "input-md",
          pr: (0, _v8.rem)(32),
          py: "sm",
          h: (0, _v8.rem)(40),
          transition: "all 120ms ease-in-out 0s",
          _hover: {
            borderColor: _v12 ? "status-destructive-primary" : _v13 ? "status-positive-primary" : "input-stroke-hover"
          },
          _focusWithin: {
            outlineOffset: "-2px",
            outline: "2px solid",
            outlineColor: _v12 ? "red.400" : _v13 ? "green.400" : "focus-alt"
          },
          ...("default" === _v7 && {
            bgColor: "input-fill"
          }),
          children: [(0, _v1.jsxs)(_v4.Flex, {
            ref: _v11,
            justifyContent: "flex-start",
            overflowX: "auto",
            whiteSpace: "nowrap",
            sx: {
              "&::-webkit-scrollbar": {
                display: "none"
              }
            },
            px: "sm",
            children: [(0, _v1.jsx)(_v3.Box, {
              as: "span",
              display: "inline-block",
              color: "text-secondary",
              onClick: _v14,
              "data-testid": "prefix",
              children: _v1
            }), (0, _v1.jsx)(_v3.Box, {
              as: "span",
              display: "inline-block",
              minW: "lg",
              flex: "1",
              ..._v0,
              ref: _v10,
              onInput: _v0 => {
                _v3?.(_v0, _v0?.target?.textContent ?? "");
              },
              onKeyDown: _v0 => {
                if ("Backspace" === _v0.key && _v0.target.innerText === _v1 || "Enter" === _v0.key) return _v0.preventDefault(), !1;
              },
              role: "textbox",
              "data-testid": "input",
              _active: {
                outline: "none",
                border: "none"
              },
              _focus: {
                outline: "none",
                border: "none"
              },
              contentEditable: !0,
              suppressContentEditableWarning: !0,
              children: _v8
            })]
          }), _v4 && (0, _v1.jsx)(_v7.IconButton, {
            icon: (0, _v1.jsx)(_v9.CloseX, {}),
            "aria-label": (0, _v10.translate)({
              singular: "Dismiss",
              dictionary: {
                es: {
                  singular: "Descartar"
                },
                "de-DE": {
                  singular: "Information verwerfen"
                },
                "fr-FR": {
                  singular: "Ignorer"
                },
                "ja-JP": {
                  singular: "閉じる"
                },
                "ko-KR": {
                  singular: "닫기"
                },
                "pt-BR": {
                  singular: "Ignorar"
                },
                "zh-CN": {
                  singular: "拒绝"
                }
              }
            }),
            variant: "tertiary",
            position: "absolute",
            size: "xs",
            top: "20%",
            right: (0, _v8.rem)(4),
            onClick: _v0 => {
              _v10.current && (_v9(""), _v10.current.innerText = ""), _v2?.(_v0);
            }
          })]
        })
      }), _v5 && (_v12 ? (0, _v1.jsx)(_v6.FormErrorMessage, {
        fontSize: "text-xs",
        children: _v5.message
      }) : (0, _v1.jsx)(_v5.FormHelperText, {
        fontSize: "text-xs",
        color: _v13 ? "status-positive-primary" : "text-secondary",
        children: _v5.message
      }))]
    });
  }]);
}