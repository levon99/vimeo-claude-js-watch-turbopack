{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v1.createContext)({
      folderShareLinkId: void 0,
      itemHref: void 0,
      fileHref: void 0
    }),
    _v5 = () => (0, _v1.useContext)(_v4);
  _v0.s(["FolderShareLinkProvider", 0, ({
    folderShareLinkId: _v0,
    itemHref: _v1,
    fileHref: _v2,
    onItemClick: _v3,
    children: _v4
  }) => {
    let _v5 = (0, _v1.useMemo)(() => ({
      folderShareLinkId: _v0,
      itemHref: _v1,
      fileHref: _v2,
      onItemClick: _v3
    }), [_v0, _v1, _v2, _v3]);
    return (0, _v3.jsx)(_v4.Provider, {
      value: _v5,
      children: _v4
    });
  }, "useFolderShareLink", 0, _v5], 0), _v0.s(["useIsLinkRecipient", 0, () => {
    let {
        reviewId: _v0
      } = (0, _v1.useContext)(_v2.ReviewLinkContext),
      {
        folderShareLinkId: _v1
      } = _v5();
    return !!_v0 || !!_v1;
  }], 0);
}