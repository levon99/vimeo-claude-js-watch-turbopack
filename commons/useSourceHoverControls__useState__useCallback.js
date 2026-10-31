{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useSourceHoverControls", 0, function () {
    let [_v0, _v1] = (0, _v1.useState)(!1),
      [_v2, _v3] = (0, _v1.useState)(!1),
      [_v4, _v5] = (0, _v1.useState)(!1),
      _v6 = (0, _v1.useCallback)(() => {
        _v5(!0), _v3(!0);
      }, []),
      _v7 = (0, _v1.useCallback)(() => {
        _v5(!0), _v3(!0);
      }, []),
      _v8 = (0, _v1.useCallback)(() => {
        _v3(!1), _v0 || _v5(!1);
      }, [_v0]);
    return {
      onMouseEnter: _v6,
      onMouseLeave: _v8,
      onMouseHover: _v7,
      onCloseMenu: (0, _v1.useCallback)(() => {
        _v1(!1), _v2 || _v5(!1);
      }, [_v2]),
      onToggleMenu: (0, _v1.useCallback)(() => {
        let _v0 = !_v0;
        _v1(_v0), !_v0 && _v2 && _v5(!1);
      }, [_v2, _v0]),
      isMenuOpen: _v0,
      isItemHovered: _v4
    };
  }]);
}