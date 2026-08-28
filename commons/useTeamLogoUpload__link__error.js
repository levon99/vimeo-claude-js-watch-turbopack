{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["useTeamLogoUpload", 0, function (_v0, _v1, _v2, _v3) {
    let [_v4, _v5] = (0, _v1.useState)(!1),
      [_v6, {
        data: _v7,
        error: _v8
      }] = (0, _v3.usePostUserTeamLogos)(),
      [_v9, {
        data: _v10
      }] = (0, _v3.useGetUserTeamLogosLazy)(),
      {
        addLogoToCache: _v11
      } = (0, _v4.useLogoCache)(_v2),
      _v12 = (0, _v2.useToast)();
    return (0, _v1.useEffect)(() => {
      _v0 && (_v5(!0), _v6({
        where: {
          userId: _v3
        },
        select: ["link"]
      }));
    }, [_v0]), (0, _v1.useEffect)(() => {
      _v8 && (_v5(!1), _v12({
        title: _v6.default.UploadFailed,
        status: "error"
      }));
    }, [_v8]), (0, _v1.useEffect)(() => {
      _v7?.link && _v0 && (_v5(!0), (0, _v7.putFileUpload)(_v7.link, _v0).then(() => {
        _v9({
          where: {
            userId: _v3
          },
          select: ["uri", "sizes"],
          query: {
            sizes: _v5.logoFetchOptions.sizes
          }
        });
      }).catch(() => {
        _v5(!1), _v12({
          title: _v6.default.UploadFailed,
          status: "error"
        });
      }));
    }, [_v7?.link]), (0, _v1.useEffect)(() => {
      if (_v10?.data) {
        _v5(!1);
        let _v0 = (0, _v7.findLogoIndex)(_v10.data, _v7?.link),
          _v1 = _v10.data[_v0];
        _v1?.sizes.length > 0 && (_v11(_v1), _v1 && _v1(_v1));
      }
    }, [_v10]), {
      isUploading: _v4
    };
  }]);
}