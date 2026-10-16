{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useCopyVideoLinkToast", 0, () => {
    let _v0 = (0, _v3.useLibraryCopyLinkToast)();
    return (0, _v1.useCallback)(({
      video: _v0,
      isSuccess: _v1 = !0,
      durationSuffix: _v2,
      onReset: _v3,
      onManage: _v4
    }) => {
      let _v5 = "unrated" === _v0.contentRatingClass;
      _v0({
        title: (0, _v2.getCopyLinkToastTitle)(_v0.privacy?.view, _v5, _v2),
        isSuccess: _v1,
        onReset: _v3,
        onManage: _v4
      });
    }, [_v0]);
  }]);
}