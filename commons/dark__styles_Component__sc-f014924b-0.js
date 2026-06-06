{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v3.keyframes`
    0% { background-position: -100% 0; }
    100% { background-position: 100% 0; }
`,
    _v6 = _v3.css`
  background: linear-gradient(
    290deg,
    ${_v4.bokehTheme.colors.gray["100"]} 10%,
    ${_v4.bokehTheme.colors.gray["50"]} 50%,
    ${_v4.bokehTheme.colors.gray["100"]} 90%
  );
  background-size: 200%;
`,
    _v7 = _v3.css`
  background: linear-gradient(
    290deg,
    ${_v4.bokehTheme.colors.gray["800"]} 10%,
    ${_v4.bokehTheme.colors.gray["700"]} 50%,
    ${_v4.bokehTheme.colors.gray["800"]} 90%
  );
  background-size: 200%;
`,
    _v8 = _v3.css`
  ${({
      theme: _v0
    }) => "dark" === _v0.name ? _v7 : _v6}
  animation: ${_v5} 3s linear infinite;
`,
    _v9 = _v3.default.div.withConfig({
      displayName: "styles__Component",
      componentId: "sc-f014924b-0"
    })`
  ${_v8};
`;
  _v0.s(["BokehSkeleton", 0, ({
    w: _v0 = "100%",
    h: _v1 = "2xs",
    ..._v2
  }) => (0, _v1.jsx)(_v2.Skeleton, {
    w: _v0,
    h: _v1,
    bgSize: "200%",
    ..._v2
  }), "Skeleton", 0, _v0 => (0, _v1.jsx)(_v9, {
    ..._v0
  })], 0);
}