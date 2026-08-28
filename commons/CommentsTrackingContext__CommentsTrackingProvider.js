{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (0, _v2.createContext)({
    collaboratorUnreadCommentsIds: [],
    viewerUnreadCommentsIds: [],
    unreadCommentsCount: 0,
    setUnreadCommentsData: () => void 0,
    markCommentsAsRead: () => void 0,
    markAllCommentsAsRead: () => void 0
  });
  _v0.s(["CommentsTrackingContext", 0, _v3, "CommentsTrackingProvider", 0, ({
    children: _v0,
    initialCollaboratorUnreadCommentIds: _v1 = [],
    initialViewerUnreadCommentIds: _v2 = [],
    initialUnreadCommentsCount: _v3 = 0
  }) => {
    let [_v4, _v5] = (0, _v2.useState)(_v1),
      [_v6, _v7] = (0, _v2.useState)(_v2),
      [_v8, _v9] = (0, _v2.useState)(_v3),
      _v10 = (0, _v2.useCallback)(_v0 => {
        _v5(_v0.collaboratorUnreadCommentsIds), _v7(_v0.viewerUnreadCommentsIds), _v9(_v0.unreadCommentsCount);
      }, []),
      _v11 = (0, _v2.useCallback)(_v0 => {
        let _v1 = new Set(_v0),
          _v2 = 0;
        _v5(_v0 => {
          let _v1 = _v0.filter(_v0 => !_v1.has(_v0));
          return _v2 += _v0.length - _v1.length, _v1;
        }), _v7(_v0 => {
          let _v1 = _v0.filter(_v0 => !_v1.has(_v0));
          return _v2 += _v0.length - _v1.length, _v1;
        }), _v2 > 0 && _v9(_v0 => Math.max(0, _v0 - _v2));
      }, []),
      _v12 = (0, _v2.useCallback)(() => {
        _v5([]), _v7([]), _v9(0);
      }, []);
    return (0, _v1.jsx)(_v3.Provider, {
      value: {
        collaboratorUnreadCommentsIds: _v4,
        viewerUnreadCommentsIds: _v6,
        unreadCommentsCount: _v8,
        setUnreadCommentsData: _v10,
        markCommentsAsRead: _v11,
        markAllCommentsAsRead: _v12
      },
      children: _v0
    });
  }]);
}