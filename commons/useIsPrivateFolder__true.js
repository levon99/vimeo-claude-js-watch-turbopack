{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useIsPrivateFolder", 0, () => {
    let {
        isPrivateToUser: _v0
      } = (0, _v2.useContext)(_v3.VideoLibraryLayoutContext),
      {
        query: _v1
      } = (0, _v1.useRouter)();
    if (void 0 !== _v0) return _v0;
    let {
      isPrivate: _v2
    } = _v1;
    return void 0 === _v2 ? void 0 : "true" === _v2;
  }]);
}