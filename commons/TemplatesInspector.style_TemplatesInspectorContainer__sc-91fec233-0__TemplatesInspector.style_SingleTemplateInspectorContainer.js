{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (0, _v1.default)(_v2.InspectorPaddedRow).withConfig({
      displayName: "TemplatesInspector.style__TemplatesInspectorContainer",
      componentId: "sc-91fec233-0"
    })`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  padding-top: ${({
      paddingTop: _v0
    }) => _v0}px;
`,
    _v4 = _v1.default.div.withConfig({
      displayName: "TemplatesInspector.style__SingleTemplateInspectorContainer",
      componentId: "sc-91fec233-1"
    })`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`,
    _v5 = _v1.default.div.withConfig({
      displayName: "TemplatesInspector.style__TemplatesFiltersContainer",
      componentId: "sc-91fec233-2"
    })`
  padding-top: ${({
      top: _v0
    }) => _v0 && "8px"};
`,
    _v6 = (0, _v1.default)(_v2.InspectorPaddedRow).withConfig({
      displayName: "TemplatesInspector.style__TopBarContainer",
      componentId: "sc-91fec233-3"
    })`
  width: 100%;
  margin-bottom: 16px;
`,
    _v7 = (0, _v1.default)(_v2.InspectorPaddedRow).withConfig({
      displayName: "TemplatesInspector.style__ItemsContainer",
      componentId: "sc-91fec233-4"
    })`
  height: 100%;
`,
    _v8 = _v1.default.div.withConfig({
      displayName: "TemplatesInspector.style__TopBarNavigation",
      componentId: "sc-91fec233-5"
    })`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`,
    _v9 = _v1.default.div.withConfig({
      displayName: "TemplatesInspector.style__AlertContainer",
      componentId: "sc-91fec233-6"
    })`
  padding-left: ${({
      paddingLeft: _v0
    }) => _v0 || "23px"};
  padding-right: ${({
      paddingRight: _v0
    }) => _v0 || "23px"};
  padding-top: ${({
      paddingTop: _v0
    }) => _v0 || "10px"};
  padding-bottom: ${({
      paddingBottom: _v0
    }) => _v0 || "0px"};
`;
  _v0.s(["AlertContainer", 0, _v9, "ItemsContainer", 0, _v7, "SingleTemplateInspectorContainer", 0, _v4, "TemplatesFiltersContainer", 0, _v5, "TemplatesInspectorContainer", 0, _v3, "TopBarContainer", 0, _v6, "TopBarNavigation", 0, _v8], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = (0, _v1.default)(_v2.InspectorPaddedRow).withConfig({
    displayName: "LibraryTemplatesFilters__FiltersRow",
    componentId: "sc-fd811cd-0"
  })`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-flow: column;
  margin-top: ${({
    marginTop: _v0
  }) => _v0 ? "8px" : 0};

  ${({
    gap: _v0
  }) => _v0 && _v1.css`
      gap: ${_v0};
    `};
`;
  _v0.s(["default", 0, ({
    onChange: _v0,
    onSearch: _v1,
    keywords: _v2,
    orientation: _v3,
    category: _v4,
    categories: _v5
  }) => {
    let _v6 = [_v16.Orientation.LANDSCAPE, _v16.Orientation.SQUARE, _v16.Orientation.PORTRAIT],
      _v7 = (0, _v12.useCallback)(({
        filter: _v0,
        value: _v1
      }) => {
        _v0(_v0, _v1);
      }, [_v0]);
    return (0, _v10.jsxs)(_v10.Fragment, {
      children: [(0, _v10.jsxs)(_v20, {
        ...(_v2.length > 0 && {
          gap: "8px"
        }),
        children: [(0, _v10.jsx)(_v18.default, {
          placeholder: (0, _v14.translate)({
            singular: "Search",
            dictionary: {
              es: {
                singular: "Buscar"
              },
              "de-DE": {
                singular: "Suchen"
              },
              "fr-FR": {
                singular: "Chercher"
              },
              "ja-JP": {
                singular: "検索"
              },
              "ko-KR": {
                singular: "검색"
              },
              "pt-BR": {
                singular: "Pesquisar"
              },
              "zh-CN": {
                singular: "搜索"
              }
            }
          }),
          variant: "minimal",
          size: "sm",
          value: _v2,
          onChange: _v0 => _v1(_v0.target.value),
          "data-testid": "templates-inspector-search-filter"
        }), _v2.length > 0 && (0, _v10.jsx)(_v13.Select, {
          style: {
            minWidth: 70
          },
          onValueChange: _v0 => _v7({
            filter: _v15.LibraryTemplatesFilters.ORIENTATION,
            value: _v0.value[0]
          }),
          value: [_v3],
          placeholder: _v17.OrientationRatioString[_v3],
          "data-testid": "templates-orientation-filter",
          items: _v6.map(_v0 => ({
            value: _v0,
            label: (0, _v11.default)(_v17.OrientationRatioString[_v0])
          })),
          size: "sm"
        })]
      }), 0 === _v2.length && (0, _v10.jsxs)(_v20, {
        gap: "8px",
        marginTop: !0,
        children: [(0, _v10.jsx)(_v19.MaxHeightSelect, {
          "data-testid": "templates-categories-filter",
          onValueChange: _v0 => _v7({
            filter: "category",
            value: _v0.value[0]
          }),
          placeholder: Object.values(_v5).find(_v0 => _v0.keyword === _v4)?.localName,
          items: Object.values(_v5).map(_v0 => ({
            value: _v0.keyword,
            label: _v0.localName
          })),
          size: "sm"
        }), (0, _v10.jsx)(_v13.Select, {
          style: {
            minWidth: 70
          },
          onValueChange: _v0 => _v7({
            filter: _v15.LibraryTemplatesFilters.ORIENTATION,
            value: _v0.value[0]
          }),
          value: [_v3],
          "data-testid": "templates-orientation-filter",
          placeholder: _v17.OrientationRatioString[_v3],
          items: _v6.map(_v0 => ({
            value: _v0,
            label: (0, _v11.default)(_v17.OrientationRatioString[_v0])
          })),
          size: "sm"
        })]
      })]
    });
  }], 0);
}