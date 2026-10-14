{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["useStarMenuItem", 0, () => {
    let {
        starredItemsUri: _v0
      } = (0, _v7.useStarredItemUriContext)(),
      {
        markItemAsStarred: _v1,
        removeItemAsStarred: _v2
      } = (0, _v6.useStarredItem)();
    return {
      handleStarMenuState: (_v0, _v1, _v2) => {
        if (!_v1.uri) return {};
        let {
            uri: _v3
          } = _v1,
          _v4 = !!_v0?.[_v0]?.has(_v3),
          _v5 = _v4 ? _v5.REMOVE_FROM_STARRED : _v5.ADD_TO_STARRED,
          _v6 = _v4 ? (0, _v1.jsx)(_v4.StarFilled, {
            boxSize: (0, _v2.rem)(14)
          }) : (0, _v1.jsx)(_v3.Star, {
            boxSize: (0, _v2.rem)(14)
          });
        return {
          starIconLabel: _v5,
          starIcon: _v6,
          onStarClick: () => {
            _v4 ? (_v2(_v3, _v0?.[_v0]?.get(_v3), _v0, _v2), _v5 = _v5.ADD_TO_STARRED, _v6 = (0, _v1.jsx)(_v3.Star, {})) : (_v1(_v3, _v0, _v1, _v2), _v5 = _v5.REMOVE_FROM_STARRED, _v6 = (0, _v1.jsx)(_v4.StarFilled, {
              boxSize: (0, _v2.rem)(14)
            }));
          },
          isItemStarred: _v4
        };
      }
    };
  }]);
}