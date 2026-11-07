{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
    [_v3.ShareModalState.CustomEmbed]: _v3.ShareModalState.Embed,
    [_v3.ShareModalState.CreateReviewLink]: _v3.ShareModalState.Review
  };
  _v0.s(["useParentScreen", 0, _v0 => {
    let {
      header: _v1
    } = (0, _v1.useContext)(_v2.ResourceConfigContext);
    return _v1.getParentScreen?.(_v0) ?? _v4[_v0] ?? _v3.ShareModalState.Default;
  }]);
}