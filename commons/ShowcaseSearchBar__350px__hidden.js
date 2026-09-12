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
  _v0.s(["ShowcaseSearchBar", 0, ({
    searchQuery: _v0,
    onSearchChange: _v1,
    onOpenChange: _v2,
    searchLabel: _v3,
    clearSearchLabel: _v4,
    width: _v5 = "350px"
  }) => {
    let _v6 = (0, _v2.useRef)(null),
      [_v7, _v8] = (0, _v2.useState)(!1);
    return (0, _v2.useEffect)(() => {
      _v7 && _v6.current?.focus();
    }, [_v7]), (0, _v1.jsx)(_v3.Box, {
      flexShrink: "0",
      overflow: "hidden",
      transition: "width 150ms ease-out",
      width: _v7 ? _v5 : "40px",
      children: _v7 ? (0, _v1.jsxs)(_v6.InputGroup, {
        minWidth: "0",
        width: _v5,
        children: [(0, _v1.jsx)(_v7.InputLeftElement, {
          pointerEvents: "none",
          children: (0, _v1.jsx)(_v9.SearchMagnifier, {
            boxSize: "1.25rem",
            color: "text-secondary"
          })
        }), (0, _v1.jsx)(_v5.Input, {
          ref: _v6,
          size: "md",
          placeholder: _v3,
          value: _v0,
          onChange: _v0 => _v1(_v0.currentTarget.value),
          onBlur: () => {
            _v0 || (_v8(!1), _v2?.(!1));
          },
          variant: "filled"
        }), _v0 && (0, _v1.jsx)(_v7.InputRightElement, {
          children: (0, _v1.jsx)(_v4.IconButton, {
            "aria-label": _v4,
            icon: (0, _v1.jsx)(_v8.CloseXCircleFilled, {}),
            onMouseDown: _v0 => _v0.preventDefault(),
            onClick: () => {
              _v1(""), _v6.current?.focus();
            },
            variant: "ghost",
            size: "xs"
          })
        })]
      }) : (0, _v1.jsx)(_v4.IconButton, {
        "aria-label": _v3,
        icon: (0, _v1.jsx)(_v9.SearchMagnifier, {}),
        onClick: () => {
          _v8(!0), _v2?.(!0);
        },
        variant: "tertiary"
      })
    });
  }]);
}