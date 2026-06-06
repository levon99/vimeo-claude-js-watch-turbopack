{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useDisclosure", 0, function (_v0 = {}) {
    let {
        onClose: _v1,
        onOpen: _v2,
        isOpen: _v3,
        id: _v4
      } = _v0,
      _v5 = (0, _v1.useCallbackRef)(_v2),
      _v6 = (0, _v1.useCallbackRef)(_v1),
      [_v7, _v8] = (0, _v2.useState)(_v0.defaultIsOpen || !1),
      _v9 = void 0 !== _v3 ? _v3 : _v7,
      _v10 = void 0 !== _v3,
      _v11 = (0, _v2.useId)(),
      _v12 = null != _v4 ? _v4 : `disclosure-${_v11}`,
      _v13 = (0, _v2.useCallback)(() => {
        _v10 || _v8(!1), null == _v6 || _v6();
      }, [_v10, _v6]),
      _v14 = (0, _v2.useCallback)(() => {
        _v10 || _v8(!0), null == _v5 || _v5();
      }, [_v10, _v5]),
      _v15 = (0, _v2.useCallback)(() => {
        _v9 ? _v13() : _v14();
      }, [_v9, _v14, _v13]);
    return {
      isOpen: _v9,
      onOpen: _v14,
      onClose: _v13,
      onToggle: _v15,
      isControlled: _v10,
      getButtonProps: function (_v0 = {}) {
        return {
          ..._v0,
          "aria-expanded": _v9,
          "aria-controls": _v12,
          onClick(_v0) {
            var _v1;
            null == (_v1 = _v0.onClick) || _v1.call(_v0, _v0), _v15();
          }
        };
      },
      getDisclosureProps: function (_v0 = {}) {
        return {
          ..._v0,
          hidden: !_v9,
          id: _v12
        };
      }
    };
  }]);
}