{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useCopyFolderLinkToast", 0, () => {
    let _v0 = (0, _v2.useLibraryCopyLinkToast)();
    return (0, _v1.useCallback)(({
      isSuccess: _v0 = !0,
      onManage: _v1
    }) => {
      _v0({
        title: _v0 ? _v3.linkCopySuccess : "",
        isSuccess: _v0,
        onManage: _v1
      });
    }, [_v0]);
  }]);
}