{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["SidebarDrawerLoading", 0, ({
    location: _v0
  }) => (0, _v1.jsx)(_v3.DrawerContainer, {
    isLoading: !0,
    location: _v0,
    children: (0, _v1.jsx)(_v2.Skeleton, {
      "aria-live": "polite",
      "aria-busy": !0,
      h: "calc(100vh - 6rem)",
      children: (0, _v1.jsx)(_v4.LoadingContent, {})
    })
  })]);
}