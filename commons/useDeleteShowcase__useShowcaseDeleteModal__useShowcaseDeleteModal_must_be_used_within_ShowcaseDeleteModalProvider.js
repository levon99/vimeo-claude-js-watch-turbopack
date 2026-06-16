{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useDeleteShowcase", 0, ({
    onFailure: _v0,
    onSuccess: _v1
  }) => {
    let [_v2, _v3] = (0, _v1.useState)(null),
      [_v4, {
        called: _v5,
        callCount: _v6,
        data: _v7,
        error: _v8,
        loading: _v9
      }] = (0, _v2.useDeleteUserAlbum)(),
      _v10 = (0, _v1.useRef)(0);
    return (0, _v1.useEffect)(() => {
      if (!_v2) return;
      let {
          uri: _v0
        } = _v2,
        _v1 = (0, _v3.uriToShowcaseId)(_v0),
        _v2 = (0, _v3.uriToUserId)(_v0);
      _v1 && _v2 && _v4({
        where: {
          albumId: parseInt(_v1, 10),
          userId: parseInt(_v2, 10)
        }
      });
    }, [_v4, _v2]), (0, _v1.useEffect)(() => {
      !_v2 || !_v5 || _v9 || _v10.current !== _v6 && (_v10.current++, _v8 && (_v0(), _v3(null)), _v8 || (_v1(_v2), _v3(null)));
    }, [_v6, _v5, _v7, _v8, _v9, _v0, _v1, _v2]), _v3;
  }], 0);
  var _v4 = _v0.i(0);
  _v0.s(["useShowcaseDeleteModal", 0, () => {
    let _v0 = (0, _v1.useContext)(_v4.ShowcaseDeleteModalDispatchContext);
    if (!_v0) throw Error("useShowcaseDeleteModal must be used within ShowcaseDeleteModalProvider");
    let _v1 = (0, _v1.useCallback)(() => _v0({
      isOpen: !1,
      modalProps: null
    }), [_v0]);
    return {
      close: _v1,
      open: (0, _v1.useCallback)(_v0 => _v0({
        isOpen: !0,
        modalProps: _v0
      }), [_v0]),
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
  }], 0);
}