{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useLiveEventDeleteModal", 0, () => {
    let _v0 = (0, _v1.useContext)(_v2.LiveEventDeleteModalDispatchContext);
    if (!_v0) throw Error("useLiveEventDeleteModal must be used within LiveEventDeleteModalProvider");
    let _v1 = (0, _v1.useCallback)(() => _v0({
      isOpen: !1,
      modalProps: null
    }), [_v0]);
    return {
      close: _v1,
      open: (0, _v1.useCallback)(_v0 => _v0(_v0 => ({
        isOpen: !0,
        modalProps: {
          ..._v0,
          isLoading: _v0.modalProps?.isLoading ?? !1
        }
      })), [_v0]),
      setIsLoading: (0, _v1.useCallback)(_v0 => {
        _v0(_v0 => _v0.modalProps ? {
          ..._v0,
          modalProps: {
            ..._v0.modalProps,
            isLoading: _v0
          }
        } : _v0);
      }, [_v0])
    };
  }]);
}