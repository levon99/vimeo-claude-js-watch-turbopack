{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = () => {
    let {
        reviewId: _v0
      } = (0, _v1.useContext)(_v2.ReviewLinkContext),
      {
        state: _v1,
        openShareFolderModal: _v2
      } = (0, _v3.useShareFolderModal)();
    return (0, _v1.useCallback)(({
      canEdit: _v0,
      entityUri: _v1,
      location: _v2,
      panel: _v3
    }) => {
      if (_v0 && !_v0 && !_v1?.isOpen) return () => _v2?.(_v1, _v2, _v3);
    }, [_v0, _v2, _v1?.isOpen]);
  };
  _v0.s(["useManageShareAction", 0, ({
    canEdit: _v0,
    entityUri: _v1,
    location: _v2,
    panel: _v3
  }) => {
    let _v4 = _v4();
    return (0, _v1.useMemo)(() => _v4({
      canEdit: _v0,
      entityUri: _v1,
      location: _v2,
      panel: _v3
    }), [_v4, _v0, _v1, _v2, _v3]);
  }, "useManageShareActionBuilder", 0, _v4]);
}