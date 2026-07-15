{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = (_v0, _v1) => _v1 ? `${_v0}.${_v1}, ${_v1}` : void 0;
  function _v6(_v0) {
    var _v1;
    let {
        bg: _v2,
        bgColor: _v3,
        backgroundColor: _v4,
        shadow: _v5,
        boxShadow: _v6,
        shadowColor: _v7
      } = _v0,
      {
        getArrowProps: _v8,
        getArrowInnerProps: _v9
      } = (0, _v1.usePopoverContext)(),
      _v10 = (0, _v1.usePopoverStyles)(),
      _v11 = null != (_v1 = null != _v2 ? _v2 : _v3) ? _v1 : _v4;
    return (0, _v4.jsx)(_v2.chakra.div, {
      ..._v8(),
      className: "chakra-popover__arrow-positioner",
      children: (0, _v4.jsx)(_v2.chakra.div, {
        className: (0, _v3.cx)("chakra-popover__arrow", _v0.className),
        ..._v9(_v0),
        __css: {
          "--popper-arrow-shadow-color": _v5("colors", _v7),
          "--popper-arrow-bg": _v5("colors", _v11),
          "--popper-arrow-shadow": _v5("shadows", null != _v5 ? _v5 : _v6),
          ..._v10.arrow
        }
      })
    });
  }
  _v6.displayName = "PopoverArrow", _v0.s(["PopoverArrow", 0, _v6]);
}