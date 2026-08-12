{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5(_v0, _v1, _v2) {
    for (let _v0 of _v0.keys()) "string" == typeof _v0 && (_v0.includes(_v2) || _v0.includes("reviewLinks")) && _v1(_v0);
  }
  function _v6(_v0, _v1, _v2, _v3) {
    if (_v3.uri) for (let _v0 of _v0.keys()) "string" == typeof _v0 && _v0.includes(_v2) && _v1(_v0, _v0 => !_v0 || !Array.isArray(_v0.data) || _v0.data.some(_v0 => _v0?.uri === _v3.uri) ? _v0 : {
      ..._v0,
      total: "number" == typeof _v0.total ? _v0.total + 1 : _v0.total,
      data: [_v3, ..._v0.data]
    }, {
      revalidate: !1
    });
  }
  _v0.s(["useCreateFolderReviewLink", 0, function () {
    let [_v0, _v1] = (0, _v3.usePostFolderReviewLinks)(),
      {
        cache: _v2,
        mutate: _v3
      } = (0, _v2.useSWRConfig)(),
      _v4 = (0, _v1.useRef)(null),
      _v5 = (0, _v1.useRef)(null),
      _v6 = (0, _v1.useCallback)(async _v0 => {
        _v4.current = {
          projectId: _v0.where.projectId,
          variables: _v0.variables ?? {}
        };
        let _v1 = await _v0(_v0);
        return _v5(_v2, _v3, `/folders/${_v0.where.projectId}/review_links`), _v1;
      }, [_v0, _v2, _v3]),
      _v7 = _v1.data;
    return (0, _v1.useEffect)(() => {
      let _v0 = _v4.current;
      _v7?.uri && _v0 && _v5.current !== _v7.uri && (_v5.current = _v7.uri, _v6(_v2, _v3, `/folders/${_v0.projectId}/review_links`, {
        ..._v0.variables,
        ..._v7
      }));
    }, [_v7, _v2, _v3]), [_v6, _v1];
  }, "useCreateVideoReviewLink", 0, function () {
    let [_v0, _v1] = (0, _v4.usePostVideoReviewLinks)(),
      {
        cache: _v2,
        mutate: _v3
      } = (0, _v2.useSWRConfig)(),
      _v4 = (0, _v1.useRef)(null),
      _v5 = (0, _v1.useRef)(null),
      _v6 = (0, _v1.useCallback)(async _v0 => {
        _v4.current = {
          videoId: _v0.where.videoId,
          variables: _v0.variables ?? {}
        };
        let _v1 = await _v0(_v0);
        return _v5(_v2, _v3, `/videos/${_v0.where.videoId}/review_links`), _v1;
      }, [_v0, _v2, _v3]),
      _v7 = _v1.data;
    return (0, _v1.useEffect)(() => {
      let _v0 = _v4.current;
      _v7?.uri && _v0 && _v5.current !== _v7.uri && (_v5.current = _v7.uri, _v6(_v2, _v3, `/videos/${_v0.videoId}/review_links`, {
        ..._v0.variables,
        ..._v7
      }));
    }, [_v7, _v2, _v3]), [_v6, _v1];
  }]);
}