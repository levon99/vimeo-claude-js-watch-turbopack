{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = ((_v1 = _v8 || {})[_v1.Enter = 13] = "Enter", _v1);
  let _v9 = (0, _v5.default)(_v7.ChevronDown).withConfig({
      displayName: "ExpandableList__BigChevronIcon",
      componentId: "sc-97e0a1aa-0"
    })`
  width: ${(0, _v3.rem)(24)};
  height: ${(0, _v3.rem)(24)};
  margin-right: ${(0, _v3.rem)(20)};
  path {
    fill: ${_v6.bokehTheme.colors.gray["200"]};
  }
`,
    _v10 = _v5.default.div.withConfig({
      displayName: "ExpandableList__ExpandableSection",
      componentId: "sc-97e0a1aa-1"
    })`
  display: flex;
  flex-direction: column;
  margin: 0 ${(0, _v3.rem)(20)};
  ${({
      location: _v0
    }) => "minimalFooter" === _v0 && _v5.css`
      border-bottom: solid ${(0, _v3.rem)(1)} ${_v6.bokehTheme.colors.gray["50"]};
    `};
`,
    _v11 = _v5.default.div.withConfig({
      displayName: "ExpandableList__SectionTitle",
      componentId: "sc-97e0a1aa-2"
    })`
  padding: ${(0, _v3.rem)(15)} 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({
      location: _v0,
      isExpanded: _v1
    }) => _v5.css`
    color: ${_v1 || "header" === _v0 ? _v6.bokehTheme.colors.gray["800"] : _v6.bokehTheme.colors.white};
  `}
  &:hover {
    color: ${_v6.bokehTheme.colors.gray["200"]};
    cursor: pointer;
  }
`,
    _v12 = _v5.default.p.withConfig({
      displayName: "ExpandableList__Text",
      componentId: "sc-97e0a1aa-3"
    })`
  letter-spacing: ${(0, _v3.rem)(.1)};
  margin: 0;
  font-weight: bold;
  ${({
      location: _v0
    }) => _v5.css`
    color: ${"footer" === _v0 ? _v6.bokehTheme.colors.white : "minimalFooter" === _v0 ? _v6.bokehTheme.colors.gray["200"] : _v6.bokehTheme.colors.gray["800"]};
    font-weight: ${"header" === _v0 ? "bold" : "normal"};
  `}
`,
    _v13 = _v5.default.div.withConfig({
      displayName: "ExpandableList__Section",
      componentId: "sc-97e0a1aa-4"
    })`
  margin: 0;
`,
    _v14 = _v5.default.li.withConfig({
      displayName: "ExpandableList__ListItem",
      componentId: "sc-97e0a1aa-5"
    })`
  color: ${_v6.bokehTheme.colors.gray["800"]};
`,
    _v15 = _v5.default.ul.withConfig({
      displayName: "ExpandableList__List",
      componentId: "sc-97e0a1aa-6"
    })`
  ${({
      padded: _v0
    }) => _v0 && "padding-left: 20px;"}
`;
  _v0.s(["default", 0, function ({
    title: _v0,
    items: _v1,
    location: _v2,
    defaultExpanded: _v3 = !1,
    canToggle: _v4 = !0,
    padded: _v5 = !1,
    onClick: _v6
  }) {
    let [_v7, _v8] = (0, _v4.useState)(_v3);
    return (0, _v2.jsxs)(_v10, {
      location: _v2,
      children: [(0, _v2.jsx)(_v13, {
        children: (0, _v2.jsxs)(_v11, {
          location: _v2,
          isExpanded: _v7,
          onClick: _v0 => {
            _v4 && _v8(!_v7), _v6 && _v6(_v0, _v7);
          },
          tabIndex: 0,
          onKeyDown: _v0 => 13 === _v0.keyCode ? _v8(!_v7) : null,
          children: [(0, _v2.jsx)(_v12, {
            location: _v2,
            children: _v0
          }), _v4 ? (0, _v2.jsx)(_v9, {
            style: {
              transform: `rotate(${_v7 ? "180deg" : "0"})`
            }
          }) : null]
        })
      }), _v7 && _v1 ? (0, _v2.jsx)(_v15, {
        padded: _v5,
        children: _v1.map((_v0, _v1) => (0, _v2.jsx)(_v13, {
          children: (0, _v2.jsx)(_v14, {
            children: _v0
          })
        }, `${_v0}footer-list-item-${_v1}`))
      }) : null]
    });
  }]);
}