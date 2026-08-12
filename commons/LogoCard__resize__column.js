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
  _v0.s(["LogoCard", 0, function ({
    url: _v0,
    name: _v1,
    isSelected: _v2,
    isLoading: _v3
  }) {
    let [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(!1),
      _v8 = (0, _v2.useRef)(null);
    return (0, _v2.useEffect)(() => {
      let _v0 = () => {
        let _v0 = _v8.current;
        _v0 && _v5(_v0.scrollWidth > _v0.clientWidth);
      };
      return _v0(), window.addEventListener("resize", _v0), () => window.removeEventListener("resize", _v0);
    }, [_v1]), (0, _v2.useEffect)(() => {
      _v7(!1);
    }, [_v0]), (0, _v1.jsxs)(_v4.Flex, {
      flexDirection: "column",
      gap: "xs",
      width: "110px",
      height: "90px",
      paddingBottom: "xs",
      children: [(0, _v1.jsx)(_v6.Center, {
        borderRadius: "sm",
        backgroundColor: "fill-surface",
        padding: "xs",
        border: _v2 ? "2px solid black" : "none",
        height: "70px",
        width: "110px",
        children: _v3 ? (0, _v1.jsx)(_v7.Spinner, {
          size: "sm"
        }) : _v0 && !_v6 ? (0, _v1.jsx)(_v3.Image, {
          maxHeight: "60px",
          maxWidth: "90px",
          objectFit: "contain",
          src: _v0,
          alt: _v1,
          onError: () => _v7(!0)
        }) : (0, _v1.jsx)(_v9.LogoBrand, {})
      }), _v1 && (0, _v1.jsx)(_v8.Tooltip, {
        isDisabled: !_v4,
        label: _v1,
        children: (0, _v1.jsx)(_v5.Text, {
          variant: "body-xs",
          paddingLeft: "xs",
          ref: _v8,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          children: _v1
        })
      })]
    });
  }]);
}