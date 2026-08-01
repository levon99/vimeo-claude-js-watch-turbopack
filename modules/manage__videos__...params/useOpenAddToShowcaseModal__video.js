{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useOpenAddToShowcaseModal", 0, function (_v0) {
    let _v1 = (0, _v1.useRouter)(),
      {
        data: _v2
      } = (0, _v5.useGetShareMenuVideoData)(_v0),
      {
        openAddToShowcaseModal: _v3,
        closeAddToShowcaseModal: _v4
      } = (0, _v3.useAddToShowcaseModal)();
    return {
      onOpenAddToShowcaseModal: (0, _v2.useCallback)(() => {
        _v3({
          onClose: _v4,
          showcaseItems: [{
            id: _v0,
            name: _v2?.name ?? "",
            type: "video"
          }],
          ownerId: (0, _v4.idFromUri)(_v2?.user?.uri),
          pageName: "svv",
          pageUrl: _v1.pathname
        });
      }, [_v0, _v2, _v1, _v3, _v4])
    };
  }]);
}