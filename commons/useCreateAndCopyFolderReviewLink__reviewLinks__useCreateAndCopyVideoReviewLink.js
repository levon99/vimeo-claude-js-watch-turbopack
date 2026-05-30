{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["useCreateAndCopyFolderReviewLink", 0, _v0 => {
    let [_v1, {
        data: _v2
      }] = (0, _v2.usePostFolderReviewLinks)(),
      _v3 = (0, _v6.default)(),
      _v4 = (0, _v1.useRef)(_v3);
    _v4.current = _v3;
    let _v5 = (0, _v1.useRef)(_v0);
    _v5.current = _v0;
    let _v6 = (0, _v1.useRef)(null);
    return (0, _v1.useEffect)(() => {
      if (_v2?.uri && _v6.current) {
        let {
          folderId: _v0,
          folderOwnerId: _v1,
          folderUri: _v2
        } = _v6.current;
        (0, _v5.default)((0, _v4.getFolderReviewPageUrl)(_v2.uri, _v0, _v1)), _v4.current("reviewLinks"), _v5.current(_v2, _v2.uri), _v6.current = null;
      }
    }, [_v2]), (0, _v1.useCallback)((_v0, _v1, _v2) => {
      _v6.current = {
        folderId: _v0,
        folderOwnerId: _v1,
        folderUri: _v2
      }, _v1({
        where: {
          projectId: _v0
        },
        select: ["uri"],
        variables: {}
      });
    }, [_v1]);
  }, "useCreateAndCopyVideoReviewLink", 0, _v0 => {
    let [_v1, {
        data: _v2
      }] = (0, _v3.usePostVideoReviewLinks)(),
      _v3 = (0, _v6.default)(),
      _v4 = (0, _v1.useRef)(_v3);
    _v4.current = _v3;
    let _v5 = (0, _v1.useRef)(_v0);
    _v5.current = _v0;
    let _v6 = (0, _v1.useRef)(null);
    return (0, _v1.useEffect)(() => {
      if (_v2?.uri && _v6.current) {
        let {
          videoId: _v0,
          videoUri: _v1
        } = _v6.current;
        (0, _v5.default)((0, _v7.getVideoReviewPageUrl)(_v2.uri, _v0)), _v4.current("reviewLinks"), _v5.current(_v1, _v2.uri), _v6.current = null;
      }
    }, [_v2]), (0, _v1.useCallback)((_v0, _v1) => {
      _v6.current = {
        videoId: _v0,
        videoUri: _v1
      }, _v1({
        where: {
          videoId: _v0
        },
        select: ["uri"],
        variables: {}
      });
    }, [_v1]);
  }]);
}