{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["useStarMenuItem", 0, () => {
    let {
        starredItemsUri: _v0
      } = (0, _v9.useStarredItemUriContext)(),
      {
        markItemAsStarred: _v1,
        removeItemAsStarred: _v2
      } = (0, _v8.useStarredItem)(),
      _v3 = (0, _v5.useViewer)();
    return {
      handleStarMenuState: (_v0, _v1, _v2) => {
        if (!_v1.uri) return {};
        let {
            uri: _v3
          } = _v1,
          _v4 = !!_v0?.[_v0]?.has(_v3),
          _v5 = _v4 ? _v7.REMOVE_FROM_STARRED : _v7.ADD_TO_STARRED,
          _v6 = _v4 ? (0, _v1.jsx)(_v4.StarFilled, {
            boxSize: (0, _v2.rem)(14)
          }) : (0, _v1.jsx)(_v3.Star, {
            boxSize: (0, _v2.rem)(14)
          });
        return {
          starIconLabel: _v5,
          starIcon: _v6,
          onStarClick: () => {
            let _v0 = "video" === _v0 ? (0, _v6.getVideoBpProps)(_v1) : (0, _v6.getFolderBpProps)(_v1);
            _v4 ? ((0, _v6.trackAddRemoveStarredEntity)("vimeo.remove_from_starred", _v0, _v0, _v3, "remove"), _v2(_v3, _v0?.[_v0]?.get(_v3), _v0, _v2), _v5 = _v7.ADD_TO_STARRED, _v6 = (0, _v1.jsx)(_v3.Star, {})) : ((0, _v6.trackAddRemoveStarredEntity)("vimeo.add_content_to_starred", _v0, _v0, _v3, "add"), _v1(_v3, _v0, _v1, _v2), _v5 = _v7.REMOVE_FROM_STARRED, _v6 = (0, _v1.jsx)(_v4.StarFilled, {
              boxSize: (0, _v2.rem)(14)
            }));
          },
          isItemStarred: _v4
        };
      }
    };
  }]);
}