{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useLoginJoinModalState", 0, () => {
    let {
        modalState: _v0,
        open: _v1,
        close: _v2
      } = (0, _v2.useAttributedLoginModal)(),
      _v3 = (0, _v1.useCallback)((_v0, _v1) => {
        void 0 === _v0 ? _v2() : _v1({
          type: _v0,
          entry: _v1
        });
      }, [_v1, _v2]);
    return (0, _v1.useMemo)(() => ({
      modal: _v0.isShowing ? _v0.type : void 0,
      attribution: _v0.attribution,
      originUrl: _v0.originUrl,
      setModal: _v3
    }), [_v0.isShowing, _v0.type, _v0.attribution, _v0.originUrl, _v3]);
  }]);
}