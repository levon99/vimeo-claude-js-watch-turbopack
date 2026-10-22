{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6(_v0) {
    let _v1,
      _v2 = [],
      _v3 = 0,
      _v4 = 0,
      _v5 = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(~~(.+?)~~)|(`(.+?)`)|\[([^\]]+)\]\(([^)]+)\)/g;
    for (; null !== (_v1 = _v5.exec(_v0));) _v1.index > _v3 && _v2.push(_v0.slice(_v3, _v1.index)), _v1[1] ? _v2.push((0, _v1.jsx)("strong", {
      children: _v6(_v1[2])
    }, _v4++)) : _v1[3] ? _v2.push((0, _v1.jsx)("em", {
      children: _v6(_v1[4])
    }, _v4++)) : _v1[5] ? _v2.push((0, _v1.jsx)("del", {
      children: _v6(_v1[6])
    }, _v4++)) : _v1[7] ? _v2.push((0, _v1.jsx)(_v3.Box, {
      as: "code",
      px: "4px",
      py: "2px",
      fontSize: "0.9em",
      bg: "rgba(255, 255, 255, 0.08)",
      border: "1px solid",
      borderColor: "border-default",
      borderRadius: "2px",
      fontFamily: "monospace",
      children: _v1[8]
    }, _v4++)) : _v1[9] && _v2.push((0, _v1.jsx)(_v2.default.Fragment, {
      children: _v6(_v1[9])
    }, _v4++)), _v3 = _v1.index + _v1[0].length;
    return _v3 < _v0.length && _v2.push(_v0.slice(_v3)), 0 === _v2.length ? _v0 : (0, _v1.jsx)(_v1.Fragment, {
      children: _v2
    });
  }
  _v0.s(["MarkdownRenderer", 0, ({
    content: _v0,
    className: _v1
  }) => {
    let _v2 = (0, _v2.useMemo)(() => function (_v0) {
      if (!_v0) return [];
      let _v1 = _v0.split("\n"),
        _v2 = [],
        _v3 = [],
        _v4 = null,
        _v5 = !1,
        _v6 = [],
        _v7 = () => {
          if (_v3.length > 0) {
            let _v0 = _v3.join("\n");
            _v2.push((0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              whiteSpace: "pre-wrap",
              children: _v6(_v0)
            }, _v2.length)), _v3 = [];
          }
        },
        _v8 = () => {
          if (_v4) {
            let _v0 = "ul" === _v4.type ? "ul" : "ol";
            _v2.push((0, _v1.jsx)(_v3.Box, {
              as: _v0,
              pl: "20px",
              ml: "20px",
              my: "8px",
              sx: {
                listStyleType: "ul" === _v4.type ? "disc" : "decimal",
                listStylePosition: "outside",
                "& li": {
                  mb: "4px",
                  display: "list-item"
                }
              },
              children: _v4.items.map((_v0, _v1) => (0, _v1.jsx)(_v3.Box, {
                as: "li",
                children: _v6(_v0)
              }, _v1))
            }, _v2.length)), _v4 = null;
          }
        },
        _v9 = () => {
          _v6.length > 0 && (_v2.push((0, _v1.jsx)(_v3.Box, {
            as: "pre",
            p: "12px",
            borderRadius: "4px",
            bg: "rgba(255, 255, 255, 0.05)",
            border: "1px solid",
            borderColor: "border-default",
            whiteSpace: "pre",
            overflowX: "auto",
            fontFamily: "monospace",
            fontSize: "0.9em",
            children: (0, _v1.jsx)(_v3.Box, {
              as: "code",
              children: _v6.join("\n")
            })
          }, _v2.length)), _v6 = []);
        };
      for (let _v0 = 0; _v0 < _v1.length; _v0++) {
        let _v0 = _v1[_v0],
          _v1 = _v0.trim();
        if (_v1.startsWith("```")) {
          _v5 ? (_v9(), _v5 = !1) : (_v7(), _v8(), _v5 = !0, _v1.slice(3));
          continue;
        }
        if (_v5) {
          _v6.push(_v0);
          continue;
        }
        if ("---" === _v1 || "***" === _v1 || "___" === _v1) {
          _v7(), _v8(), _v2.push((0, _v1.jsx)(_v3.Box, {
            as: "hr",
            my: "16px",
            width: "100%",
            border: "none",
            borderTop: "1px solid",
            borderColor: "stroke"
          }, _v2.length));
          continue;
        }
        if (!_v1) {
          _v7(), _v8();
          continue;
        }
        let _v2 = _v1.match(/^(#{1,6})\s+(.+)$/);
        if (_v2) {
          _v7(), _v8();
          let _v0 = _v2[1].length,
            _v1 = _v2[2],
            _v2 = ["heading-xl", "heading-lg", "heading-md", "heading-sm", "heading-xs", "heading-xs"];
          _v2.push((0, _v1.jsx)(_v4.Text, {
            variant: _v2[_v0 - 1],
            mt: _v2.length > 0 ? "16px" : 0,
            children: _v6(_v1)
          }, _v2.length));
          continue;
        }
        let _v3 = _v1.match(/^[-*+]\s+(.+)$/);
        if (_v3) {
          _v7(), _v4 && "ul" === _v4.type || (_v8(), _v4 = {
            type: "ul",
            items: []
          }), _v4.items.push(_v3[1]);
          continue;
        }
        let _v4 = _v1.match(/^\d+\.\s+(.+)$/);
        if (_v4) {
          _v7(), _v4 && "ol" === _v4.type || (_v8(), _v4 = {
            type: "ol",
            items: []
          }), _v4.items.push(_v4[1]);
          continue;
        }
        _v8(), _v3.push(_v0);
      }
      return _v7(), _v8(), _v9(), _v2;
    }(_v0), [_v0]);
    return (0, _v1.jsx)(_v5.VStack, {
      className: _v1,
      gap: "12px",
      alignItems: "flex-start",
      width: "100%",
      children: _v2
    });
  }], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  _v0.s(["PromptInput", 0, ({
    onSubmit: _v0,
    placeholderText: _v1 = _v13.askQuestionAction,
    isDisabled: _v2 = !1,
    isUiRefresh: _v3 = !1
  }) => {
    let [_v4, _v5] = (0, _v2.useState)(""),
      [_v6, _v7] = (0, _v2.useState)(!1),
      _v8 = (0, _v2.useCallback)(_v0 => {
        _v5(_v0.target.value);
      }, []),
      _v9 = (0, _v2.useCallback)(() => {
        _v5(""), _v0(_v4);
      }, [_v0, _v4]),
      _v10 = (0, _v2.useCallback)(_v0 => {
        "Enter" !== _v0.key || _v6 || _v9();
      }, [_v9, _v6]);
    return (0, _v1.jsxs)(_v9.InputGroup, {
      mt: _v3 ? 0 : (0, _v11.rem)(8),
      children: [(0, _v1.jsx)(_v8.Input, {
        autoFocus: !0,
        onChange: _v8,
        onCompositionEnd: () => _v7(!1),
        onCompositionStart: () => _v7(!0),
        onKeyDown: _v10,
        maxLength: 500,
        placeholder: _v1,
        value: _v4,
        variant: "default",
        disabled: _v2,
        borderRadius: _v3 ? "12px" : void 0
      }), (0, _v1.jsx)(_v10.InputRightElement, {
        children: (0, _v1.jsx)(_v7.IconButton, {
          isDisabled: 0 === _v4.trim().length,
          "aria-label": "Submit question",
          variant: "tertiary",
          icon: (0, _v1.jsx)(_v12.ArrowUp, {
            color: _v4.length > 0 ? "text-primary" : "text-secondary"
          }),
          size: "xs",
          onClick: _v9
        })
      })]
    });
  }], 0);
}