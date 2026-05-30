{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = (0, _v7.default)(_v9.Button).withConfig({
      displayName: "TeamListDropdown.style__Button",
      componentId: "sc-9f098395-0"
    })`
  width: ${({
      width: _v0
    }) => (0, _v6.rem)(_v0 || 210)};
  border: ${(0, _v6.rem)(1)} solid ${({
      theme: _v0
    }) => _v0.formats.secondary};
  border-radius: ${(0, _v6.rem)(3)};
  padding: ${(0, _v6.rem)(7)} ${(0, _v6.rem)(12)};
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  height: ${(0, _v6.rem)(42)};
  svg {
    width: ${(0, _v6.rem)(17)};
  }
  span {
    display: flex;
    justify-content: space-between;
  }
  &:hover,
  &:focus-within,
  &:focus,
  &:active {
    background-color: ${({
      theme: _v0
    }) => _v0.item.bg};
  }
`,
    _v13 = (0, _v7.default)(_v10.ChevronDown).withConfig({
      displayName: "TeamListDropdown.style__ChevronDown",
      componentId: "sc-9f098395-1"
    })`
  width: ${(0, _v6.rem)(22)};
  path {
    fill: ${(0, _v8.slate)(500)};
  }
`,
    _v14 = _v7.default.div.withConfig({
      displayName: "TeamListDropdown.style__IconWrapper",
      componentId: "sc-9f098395-2"
    })`
  margin-right: ${(0, _v6.rem)(10)};
  display: flex;
  align-items: center;
`,
    _v15 = _v7.default.div.withConfig({
      displayName: "TeamListDropdown.style__ItemWrapper",
      componentId: "sc-9f098395-3"
    })`
  display: flex;
  align-items: center;
  overflow: hidden;
  p {
    margin: 0;
  }
`,
    _v16 = _v7.default.div.withConfig({
      displayName: "TeamListDropdown.style__ListWrapper",
      componentId: "sc-9f098395-4"
    })`
  max-height: ${(0, _v6.rem)(185)};
  overflow-y: auto;
`,
    _v17 = (0, _v7.default)(_v11.Paragraph).withConfig({
      displayName: "TeamListDropdown.style__Paragraph",
      componentId: "sc-9f098395-5"
    })`
  margin: ${(0, _v6.rem)(1)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,
    _v18 = (0, _v7.default)(_v17).withConfig({
      displayName: "TeamListDropdown.style__ParagraphLabel",
      componentId: "sc-9f098395-6"
    })`
  color: ${({
      theme: _v0
    }) => _v0.description.color1};
`,
    _v19 = _v7.default.div.withConfig({
      displayName: "TeamListDropdown.style__TextWrapper",
      componentId: "sc-9f098395-7"
    })`
  display: flex;
  flex-direction: column;
`,
    _v20 = (0, _v7.default)(_v3.Pop.Item).withConfig({
      displayName: "TeamListDropdown.style__PopItem",
      componentId: "sc-9f098395-8"
    })`
  width: ${({
      width: _v0
    }) => (0, _v6.rem)(_v0 || 210)};
  display: flex;
  align-items: center;
  min-height: ${(0, _v6.rem)(45)};
  background-color: ${({
      theme: _v0
    }) => _v0.item.bg};
  svg {
    top: auto;
    width: ${(0, _v6.rem)(20)};
  }

  p {
    padding-left: ${(0, _v6.rem)(8)};
  }
`;
  _v0.s(["TeamListDropdown", 0, ({
    selectedId: _v0,
    items: _v1,
    selectItem: _v2,
    icon: _v3,
    isLoading: _v4,
    disabled: _v5 = !1,
    popOverAttach: _v6 = "top",
    onDropdownHidden: _v7,
    onDropdownShown: _v8,
    dropdownWidth: _v9,
    ..._v10
  }) => {
    let [_v11, _v12] = (0, _v2.useState)(!1),
      _v13 = (0, _v2.useRef)(null),
      _v14 = (0, _v2.useRef)(null),
      _v15 = (0, _v2.useMemo)(() => _v1.filter(_v0 => _v0.id === _v0)[0], [_v1, _v0]),
      _v16 = _v0 => {
        _v0 ? _v8?.() : _v7?.(), _v12(_v0);
      };
    (0, _v5.useOutsideClick)([_v13, _v14], () => {
      _v11 && _v16(!1);
    });
    let _v17 = (0, _v1.jsx)(_v3.Pop.List, {
      children: (0, _v1.jsx)(_v16, {
        onClick: () => _v16(!1),
        ref: _v14,
        children: _v1.map(_v0 => {
          let _v1 = _v15.id === _v0.id;
          return (0, _v1.jsx)("div", {
            onClick: () => _v2(_v0.id),
            children: (0, _v1.jsx)(_v20, {
              selected: _v1,
              "data-testid": _v1 && _v10["data-testid"] ? `${_v10["data-testid"]}-item-selected` : void 0,
              width: _v9,
              children: (0, _v1.jsxs)(_v19, {
                children: [(0, _v1.jsx)(_v17, {
                  size: "2",
                  children: _v0.title
                }), _v0.role && (0, _v1.jsx)(_v18, {
                  size: "3",
                  children: _v0.role
                })]
              })
            })
          }, _v0.id);
        })
      })
    });
    return (0, _v1.jsx)("div", {
      ref: _v13,
      children: (0, _v1.jsx)(_v4.PopOver, {
        content: _v17,
        attach: _v6,
        active: _v11,
        children: (0, _v1.jsx)(_v12, {
          disabled: _v5,
          icon: (0, _v1.jsx)(_v13, {}),
          iconPosition: "right",
          onClick: () => _v16(!_v11),
          format: "soft",
          variant: "outline",
          "aria-busy": _v4,
          "aria-expanded": _v11,
          "data-testid": _v10["data-testid"],
          "data-id": "select_team_dropdown_box",
          width: _v9,
          children: _v4 ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsxs)(_v15, {
            children: [(0, _v1.jsx)(_v14, {
              children: _v3
            }), (0, _v1.jsx)(_v17, {
              size: "2",
              children: _v15.title
            })]
          })
        })
      })
    });
  }], 0);
}