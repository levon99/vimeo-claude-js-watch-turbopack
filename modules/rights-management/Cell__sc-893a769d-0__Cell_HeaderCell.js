{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (0, _v4.rem)(12),
    _v6 = (0, _v4.rem)(8),
    _v7 = _v3.css`
  white-space: nowrap;
  vertical-align: middle;
  text-align: start;
  position: relative;

  padding: ${_v5} 0;

  &:first-child {
    border-top-left-radius: ${_v6};
    border-bottom-left-radius: ${_v6};

    padding-left: ${_v5};
  }

  &:last-child {
    border-bottom-right-radius: ${_v6};
    border-top-right-radius: ${_v6};

    padding-right: ${_v5};
  }

  ${({
      hideAtWidth: _v0
    }) => _v0 && `
    @media only screen and (max-width: ${_v0}) {
      display: none;
    }
  `};
`,
    _v8 = _v3.default.td.withConfig({
      displayName: "Cell",
      componentId: "sc-893a769d-0"
    })`
  ${_v7}
`,
    _v9 = _v3.default.th.withConfig({
      displayName: "Cell__HeaderCell",
      componentId: "sc-893a769d-1"
    })`
  ${_v7}
`,
    _v10 = (0, _v3.default)(_v8).withConfig({
      displayName: "Cell__ActionsCell",
      componentId: "sc-893a769d-2"
    })`
  min-width: ${(0, _v4.rem)(32)};
`,
    _v11 = (0, _v3.default)(_v8).withConfig({
      displayName: "Cell__CheckboxCell",
      componentId: "sc-893a769d-3"
    })`
  min-width: ${(0, _v4.rem)(44)};
`,
    _v12 = (0, _v3.default)(_v8).withConfig({
      displayName: "Cell__ThumbnailCell",
      componentId: "sc-893a769d-4"
    })`
  min-width: ${(0, _v4.rem)(120)};
  box-sizing: content-box;
  padding-left: 0;
  padding-right: ${(0, _v4.rem)(24)};
`,
    _v13 = _v3.default.thead.withConfig({
      displayName: "Head__THead",
      componentId: "sc-662997a3-0"
    })`
  height: ${(0, _v2.rem)(68)};
`;
  var _v14 = _v0.i(0);
  let _v15 = {
      dark: _v14.bokehTheme.colors.gray["800"],
      light: _v14.bokehTheme.colors.gray["50"]
    },
    _v16 = _v3.default.tr.withConfig({
      displayName: "Row",
      componentId: "sc-c482806-0"
    })`
  transition: background 0.25s;

  background: ${({
      isSelected: _v0,
      theme: _v1
    }) => _v0 && ("dark" === _v1.name ? _v15.dark : _v15.light)};

  ${({
      isLoading: _v0,
      onClick: _v1
    }) => !_v0 && _v1 && "cursor: pointer"};

  &:hover {
    background: ${({
      theme: _v0
    }) => "dark" === _v0.name ? _v15.dark : _v15.light};
    ${({
      isLoading: _v0
    }) => _v0 && "background: transparent"};
  }
`,
    _v17 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v18, {
      children: _v0
    }),
    _v18 = _v3.default.table.withConfig({
      displayName: "Table__TableBase",
      componentId: "sc-9f292280-0"
    })`
  border-spacing: 0 ${(0, _v2.rem)(8)};
  width: 100%;
`;
  _v17.TableBase = _v18, _v17.Body = ({
    children: _v0
  }) => (0, _v1.jsx)("tbody", {
    children: _v0
  }), _v17.Head = ({
    children: _v0
  }) => (0, _v1.jsx)(_v13, {
    children: (0, _v1.jsx)("tr", {
      children: _v0
    })
  }), _v17.Row = _v16, _v17.Cell = _v8, _v17.ActionsCell = _v10, _v17.HeaderCell = _v9, _v17.CheckboxCell = _v11, _v17.ThumbnailCell = _v12, _v0.s(["Table", 0, _v17], 0);
}