{
  "use strict";

  _v0.s(["default", () => _v6]);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
    let {
        setIsTyping: _v6
      } = (0, _v1.useContext)(_v3.CustomUrlDispatcherCtx),
      {
        changesSaved: _v7,
        savedUrlEvent: _v8,
        resourceId: _v9
      } = (0, _v1.useContext)(_v4.CustomizeLinkContext),
      [_v10, {
        data: _v11,
        called: _v12,
        loading: _v13,
        error: _v14
      }] = (0, _v2.usePatchAlbum)();
    (0, _v1.useEffect)(() => {
      let _v0 = _v11 ? {
        link: _v11.url,
        customUrl: _v11.url
      } : void 0;
      (0, _v5.updatePatchData)(_v12, _v7, _v14, _v13, _v0, _v8, _v6, _v0);
    }, [_v11, _v14, _v13, _v12]);
    let _v15 = !_v4 && _v2 && _v11 && !_v13 && "" !== _v1;
    return (0, _v1.useEffect)(() => {
      _v3 && _v10({
        where: {
          albumId: _v9
        },
        select: ["url"],
        variables: {
          url: _v5
        }
      });
    }, [_v5]), {
      urlSaved: _v15,
      loading: _v13
    };
  };
}