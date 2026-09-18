{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useCommentsTracking", 0, () => {
    let _v0 = (0, _v1.useContext)(_v2.CommentsTrackingContext);
    if (!_v0) throw Error("useCommentsTracking must be used within a CommentsTrackingProvider");
    return _v0;
  }]);
}