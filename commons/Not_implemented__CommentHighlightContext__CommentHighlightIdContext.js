{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = () => Error("Not implemented"),
    _v4 = (0, _v2.createContext)({
      setHighlightedCommentId: _v3,
      highlightedCommentId: null
    }),
    _v5 = (0, _v2.createContext)(null),
    _v6 = (0, _v2.createContext)(_v3),
    _v7 = _v0 => {
      let [_v1, _v2] = (0, _v2.useState)(null),
        _v3 = (0, _v2.useMemo)(() => ({
          highlightedCommentId: _v1,
          setHighlightedCommentId: _v2
        }), [_v1]);
      return (0, _v1.jsx)(_v4.Provider, {
        value: _v3,
        children: (0, _v1.jsx)(_v6.Provider, {
          value: _v2,
          children: (0, _v1.jsx)(_v5.Provider, {
            value: _v1,
            children: _v0.children
          })
        })
      });
    };
  _v0.s(["CommentHighlightContext", 0, _v4, "CommentHighlightIdContext", 0, _v5, "CommentHighlightProvider", 0, _v7, "SetCommentHighlightContext", 0, _v6], 0);
  let _v8 = () => Error("Not implemented"),
    _v9 = (0, _v2.createContext)({
      comments: [],
      setComments: _v8,
      setActiveComment: _v8,
      isCommentsShowing: !1,
      setIsCommentsShowing: _v8,
      commentAnnotationFormShown: !1,
      setCommentAnnotationFormShown: _v8
    });
  _v0.s(["CommentContextProvider", 0, _v0 => {
    let [_v1, _v2] = (0, _v2.useState)([]),
      [_v3, _v4] = (0, _v2.useState)(),
      [_v5, _v6] = (0, _v2.useState)(!1),
      [_v7, _v8] = (0, _v2.useState)(!1);
    return (0, _v1.jsx)(_v7, {
      children: (0, _v1.jsx)(_v9.Provider, {
        value: {
          comments: _v1,
          setComments: _v2,
          activeComment: _v3,
          setActiveComment: _v4,
          isCommentsShowing: _v5,
          setIsCommentsShowing: _v6,
          commentAnnotationFormShown: _v7,
          setCommentAnnotationFormShown: _v8
        },
        children: _v0.children
      })
    });
  }, "CommentsContext", 0, _v9], 0);
}