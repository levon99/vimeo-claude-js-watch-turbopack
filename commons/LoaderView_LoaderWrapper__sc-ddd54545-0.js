{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v2.default.div.withConfig({
    displayName: "LoaderView__LoaderWrapper",
    componentId: "sc-ddd54545-0"
  })`
  position: fixed;
  display: grid;
  place-content: center;
  inset: 0;
  background: ${({
    theme: _v0
  }) => _v0.content.background};
  z-index: 99;
`;
  _v0.s(["default", 0, () => (0, _v1.jsx)(_v4, {
    children: (0, _v1.jsx)(_v3.Spinner, {})
  })]);
}