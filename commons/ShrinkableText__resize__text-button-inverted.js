{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = _v0 => !!_v0 && _v0.scrollWidth > _v0.clientWidth;
  _v0.s(["ShrinkableText", 0, ({
    children: _v0,
    tooltipOpenDelay: _v1 = 500,
    ..._v2
  }) => {
    let _v3 = (0, _v2.useRef)(null),
      [_v4, _v5] = (0, _v2.useState)(!1);
    return (0, _v2.useEffect)(() => {
      let _v0 = () => {
        _v5(_v6(_v3.current));
      };
      return window.addEventListener("resize", _v0), () => {
        window.removeEventListener("resize", _v0);
      };
    }, []), (0, _v1.jsx)(_v4.Tooltip, {
      label: _v0,
      isDisabled: !_v4,
      openDelay: _v1,
      shouldWrapChildren: !1,
      maxWidth: (0, _v5.rem)(300),
      color: "text-button-inverted",
      sx: {
        a: {
          color: "text-button-inverted"
        }
      },
      children: (0, _v1.jsx)(_v3.Text, {
        variant: "body-xl",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        ..._v2,
        ref: _v0 => {
          _v3.current = _v0, _v5(_v6(_v3.current));
        },
        children: _v0
      })
    });
  }]);
}