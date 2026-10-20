{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useControlledPopover", 0, function (_v0) {
    let _v1 = (0, _v1.useRef)(null),
      _v2 = (0, _v1.useRef)(null),
      [_v3, _v4] = (0, _v1.useState)(!1),
      _v5 = (0, _v1.useCallback)(() => _v4(_v0 => !_v0), []),
      _v6 = (0, _v1.useCallback)(() => _v4(!0), []),
      _v7 = (0, _v1.useCallback)(() => _v4(!1), []);
    return (0, _v2.useOutsideClick)({
      enabled: _v3,
      ref: _v2,
      handler: (0, _v1.useMemo)(() => _v0 || (_v0 => {
        _v0.target && _v1?.current?.contains(_v0.target) || _v4(!1);
      }), [_v0])
    }), {
      isOpen: _v3,
      setIsOpen: _v4,
      contentRef: _v2,
      triggerRef: _v1,
      onTogglePopover: _v5,
      onOpenPopover: _v6,
      onClosePopover: _v7
    };
  }]);
}