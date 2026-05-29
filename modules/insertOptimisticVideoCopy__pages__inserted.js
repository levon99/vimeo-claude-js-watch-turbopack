{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["insertOptimisticVideoCopy", 0, (_v0, _v1, _v2) => {
    if (!_v0) return {
      pages: _v0,
      inserted: !1
    };
    let _v3 = !1;
    return {
      pages: _v0.map(_v0 => {
        if (_v3) return _v0;
        let _v1 = _v0.data.findIndex(_v0 => _v0.video?.uri === _v1);
        if (-1 === _v1) return _v0;
        let _v2 = _v0.data[_v1];
        if (!_v2?.video) return _v0;
        _v3 = !0;
        let _v3 = `/manage/videos/${(0, _v1.idFromUri)(_v2.uri)}`,
          _v4 = {
            ..._v2,
            video: {
              ..._v2.video,
              uri: _v2.uri,
              name: _v2.name,
              link: _v3,
              manageLink: _v3,
              configUrl: void 0,
              reviewPage: void 0
            }
          },
          _v5 = [..._v0.data];
        return _v5.splice(_v1 + 1, 0, _v4), {
          ..._v0,
          data: _v5
        };
      }),
      inserted: _v3
    };
  }]);
}