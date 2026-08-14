{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useDisclosure", 0, function (_v0 = {}) {
    var _v1;
    let _v2,
      {
        onClose: _v3,
        onOpen: _v4,
        isOpen: _v5,
        id: _v6
      } = _v0,
      _v7 = (0, _v3.useCallbackRef)(_v4),
      _v8 = (0, _v3.useCallbackRef)(_v3),
      [_v9, _v10] = (0, _v1.useState)(_v0.defaultIsOpen || !1),
      [_v11, _v12] = (0, _v2.useControllableProp)(_v5, _v9),
      _v13 = (_v1 = "disclosure", _v2 = (0, _v1.useId)(), (0, _v1.useMemo)(() => _v6 || [_v1, _v2].filter(Boolean).join("-"), [_v6, _v1, _v2])),
      _v14 = (0, _v1.useCallback)(() => {
        _v11 || _v10(!1), null == _v8 || _v8();
      }, [_v11, _v8]),
      _v15 = (0, _v1.useCallback)(() => {
        _v11 || _v10(!0), null == _v7 || _v7();
      }, [_v11, _v7]),
      _v16 = (0, _v1.useCallback)(() => {
        (_v12 ? _v14 : _v15)();
      }, [_v12, _v15, _v14]);
    return {
      isOpen: !!_v12,
      onOpen: _v15,
      onClose: _v14,
      onToggle: _v16,
      isControlled: _v11,
      getButtonProps: (_v0 = {}) => ({
        ..._v0,
        "aria-expanded": _v12,
        "aria-controls": _v13,
        onClick: (0, _v4.callAllHandlers)(_v0.onClick, _v16)
      }),
      getDisclosureProps: (_v0 = {}) => ({
        ..._v0,
        hidden: !_v12,
        id: _v13
      })
    };
  }], 0);
}