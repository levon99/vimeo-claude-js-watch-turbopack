{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["useBrandKits", 0, () => {
    let _v0 = (0, _v6.useAppDispatch)(),
      _v1 = (0, _v6.useAppSelector)(_v5.storyboardIdSelector),
      _v2 = (0, _v6.useAppSelector)(_v5.videoSessionIdSelector),
      _v3 = (0, _v6.useAppSelector)(_v5.orientationSelector),
      [_v4] = (0, _v4.useLazyCreateMediaSourceQuery)();
    return {
      createLogoImageElementAndSource: async (_v0, _v1 = !1, _v2 = _v2.DEFAULT_IMAGE_ELEMENT_DURATION) => {
        let _v3 = (0, _v1.extractLogoHash)(_v0.url);
        if (!_v3) throw Error("Could not extract logo hash from URL");
        let _v4 = await _v4({
          storyboardId: _v1,
          vsid: _v2,
          fileName: _v0.fileName,
          fileSize: _v0.size,
          storageObjectId: _v3,
          isHotspot: _v1,
          caller: "addToStoryboard",
          storageObjectType: "brand_logo",
          saveInLibrary: !1
        }).unwrap();
        if (!_v4 || !_v4.source) throw Error(_v3.SOURCE_NOT_FOUND);
        _v0((0, _v5.addSourceAction)(_v4.source));
        let {
          element: _v5
        } = await (0, _v7.brandLogoToElement)({
          logo: {
            hash: _v4.source.hash,
            url: _v0.url,
            name: _v0.fileName
          },
          orientation: _v3,
          end: _v2,
          isCrossOrigin: !0
        });
        return {
          element: _v5,
          source: _v4.source
        };
      }
    };
  }]);
}