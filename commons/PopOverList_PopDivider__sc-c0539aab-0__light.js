{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v1.default)(_v3.Pop.Divider).withConfig({
      displayName: "PopOverList__PopDivider",
      componentId: "sc-c0539aab-0"
    })`
  border-color: ${({
      theme: _v0
    }) => "light" === _v0.name ? _v2.bokehTheme.colors.gray["100"] : _v2.bokehTheme.colors.gray["600"]};
`,
    _v5 = (0, _v1.default)(_v3.Pop.Item).withConfig({
      displayName: "PopOverList__PopItem",
      componentId: "sc-c0539aab-1"
    })`
  font-size: 0.9rem;
  display: flex;
`,
    _v6 = _v1.default.a.withConfig({
      displayName: "PopOverList__Link",
      componentId: "sc-c0539aab-2"
    })`
  text-decoration: none;
`;
  _v0.s(["Link", 0, _v6, "PopDivider", 0, _v4, "PopItem", 0, _v5]);
}