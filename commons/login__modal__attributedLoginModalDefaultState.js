{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {
    type: "login",
    isShowing: !1,
    xsrft: "",
    onDismiss: () => void 0,
    onSuccess: () => void 0
  };
  function _v6({
    entry: _v0,
    type: _v1 = "login"
  } = {}) {
    let _v2 = (0, _v3.useAuthEntry)(),
      [_v3, _v4] = (0, _v1.useState)(() => ({
        ..._v5,
        type: _v1
      })),
      _v5 = (0, _v1.useRef)(!1),
      _v6 = (0, _v1.useCallback)(_v0 => _v4(_v0 => ({
        ..._v0,
        ..._v0
      })), []),
      _v7 = (0, _v1.useCallback)(({
        entry: _v0 = _v0,
        type: _v1 = _v1
      } = {}) => {
        _v5.current || (_v5.current = !0, _v6({
          isShowing: !0,
          type: _v1,
          attribution: void 0 === _v0 ? (0, _v2.adoptAuthAttribution)("", _v1, "modal") : _v2(_v0, _v1)
        }));
      }, [_v6, _v2, _v0, _v1]),
      _v8 = (0, _v1.useCallback)(() => {
        _v5.current = !1, _v6({
          isShowing: !1,
          attribution: void 0
        });
      }, [_v6]);
    return {
      modalState: _v3,
      setModalState: _v6,
      open: _v7,
      close: _v8
    };
  }
  _v0.s(["attributedLoginModalDefaultState", 0, _v5, "useAttributedLoginModal", 0, _v6, "useLoginModalSession", 0, function () {
    let _v0 = (0, _v4.useViewer)(),
      {
        modalState: _v1,
        setModalState: _v2,
        open: _v3,
        close: _v4
      } = _v6(),
      _v5 = (0, _v1.useCallback)((_v0, _v1 = "login", _v2) => _v0 ? _v3({
        entry: _v2,
        type: _v1
      }) : _v4(), [_v3, _v4]),
      _v6 = (0, _v1.useCallback)(_v0 => _v2({
        redirectUrl: _v0
      }), [_v2]),
      _v7 = _v1.redirectUrl;
    return (0, _v1.useEffect)(() => {
      _v0 && _v2({
        xsrft: _v0.xsrft,
        onDismiss: () => _v5(!1),
        onSuccess: () => {
          void 0 !== _v7 && "" !== _v7 ? window.location.assign(_v7) : window.location.reload();
        }
      });
    }, [_v0, _v2, _v5, _v7]), (0, _v1.useMemo)(() => ({
      modalState: _v1,
      toggleLoginModal: _v5,
      setRedirectUrl: _v6
    }), [_v1, _v5, _v6]);
  }]);
}