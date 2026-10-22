{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["FolderShareLinkUnavailableTracking", 0, ({
    folderId: _v0 = null
  }) => {
    let {
      trackFolderShareLinkUnavailableDisplayed: _v1
    } = (0, _v1.useFolderShareTracking)();
    return (0, _v2.usePicoEffect)(() => {
      _v1({
        folderId: _v0
      });
    }, [_v0, _v1], {
      once: !0
    }), null;
  }]);
}