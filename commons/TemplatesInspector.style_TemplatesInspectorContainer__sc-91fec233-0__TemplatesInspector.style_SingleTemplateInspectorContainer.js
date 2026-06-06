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
    _v15 = _v0.i(0);
  let _v16 = {
    TEMPLATES: "templates",
    TEAM_TEMPLATES: "team_templates"
  };
  _v0.s(["FEATURE", 0, _v16], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = {
    LIBRARY: "library",
    TEAM_TEMPLATES: "team_templates"
  };
  _v0.s(["ACTION_STATE", 0, _v20], 0);
  let _v21 = () => {
      _v19.default.send({
        eventName: "vimeo.templates_search_interaction",
        version: 3,
        contexts: {
          ..._v19.default.buildActionContext("click"),
          ..._v19.default.buildEditorContext({
            via: null,
            editorFeature: ""
          }),
          ..._v19.default.buildProductAnalyticsContext({
            feature: "templates",
            location: "drawer",
            element: "dropdown"
          }),
          ..._v19.default.buildWebContext(),
          ..._v19.default.buildTeamContext()
        },
        additionalFields: {
          action_state: null,
          selection_format: null,
          selection_id: null,
          selection_name: null,
          action_cta: null,
          action: null,
          number_of_elements: null,
          third_party_integration: _v19.default.getThirdPartyIntegration()
        }
      });
    },
    _v22 = ({
      selectionName: _v0,
      feature: _v1
    }) => {
      _v19.default.send({
        eventName: "vimeo.change_templates_search_orientation",
        version: 4,
        contexts: {
          ..._v19.default.buildActionContext("click"),
          ..._v19.default.buildEditorContext({
            via: null,
            editorFeature: ""
          }),
          ..._v19.default.buildProductAnalyticsContext({
            feature: _v1,
            location: "drawer",
            element: "dropdown"
          }),
          ..._v19.default.buildWebContext(),
          ..._v19.default.buildTeamContext()
        },
        additionalFields: {
          action_state: null,
          action: null,
          selection_format: null,
          selection_id: null,
          selection_name: _v0 || null,
          selection_value: null,
          action_cta: null,
          number_of_elements: null,
          third_party_integration: _v19.default.getThirdPartyIntegration()
        }
      });
    },
    _v23 = _v0 => {
      _v19.default.send({
        eventName: "vimeo.select_template_category",
        version: 3,
        contexts: {
          ..._v19.default.buildActionContext("click"),
          ..._v19.default.buildEditorContext({
            via: null,
            editorFeature: ""
          }),
          ..._v19.default.buildProductAnalyticsContext({
            feature: "templates",
            location: "drawer",
            element: "dropdown"
          }),
          ..._v19.default.buildWebContext(),
          ..._v19.default.buildTeamContext()
        },
        additionalFields: {
          action_state: null,
          selection_format: null,
          selection_id: null,
          selection_name: _v0 || null,
          action_cta: null,
          action: null,
          number_of_elements: null,
          third_party_integration: _v19.default.getThirdPartyIntegration()
        }
      });
    },
    _v24 = () => {
      _v19.default.send({
        eventName: "vimeo.open_templates_categories_dropdown",
        version: 3,
        contexts: {
          ..._v19.default.buildActionContext("click"),
          ..._v19.default.buildEditorContext({
            via: null,
            editorFeature: ""
          }),
          ..._v19.default.buildProductAnalyticsContext({
            feature: "templates",
            location: "drawer",
            element: "dropdown"
          }),
          ..._v19.default.buildWebContext(),
          ..._v19.default.buildTeamContext()
        },
        additionalFields: {
          action_state: null,
          selection_format: null,
          selection_id: null,
          selection_name: null,
          action_cta: null,
          action: null,
          number_of_elements: null,
          third_party_integration: _v19.default.getThirdPartyIntegration()
        }
      });
    };
  _v0.s(["sendTrackAddAllTemplatesScenes", 0, ({
    format: _v0,
    selectionName: _v1,
    selectionId: _v2,
    numberOfElements: _v3
  }) => {
    _v19.default.send({
      eventName: "vimeo.add_all_templates_scenes",
      version: 3,
      contexts: {
        ..._v19.default.buildActionContext("click"),
        ..._v19.default.buildEditorContext({
          via: null,
          editorFeature: ""
        }),
        ..._v19.default.buildProductAnalyticsContext({
          feature: "templates",
          location: "drawer",
          copy: "use_all_scenes"
        }),
        ..._v19.default.buildWebContext(),
        ..._v19.default.buildTeamContext()
      },
      additionalFields: {
        action_state: null,
        selection_format: _v0,
        selection_id: _v2 || null,
        selection_name: _v1 || null,
        action_cta: null,
        action: null,
        number_of_elements: _v3,
        third_party_integration: _v19.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackChangeTemplatesSearchOrientation", 0, _v22, "sendTrackExpandTemplate", 0, ({
    format: _v0,
    selectionName: _v1,
    selectionId: _v2,
    feature: _v3
  }) => {
    _v19.default.send({
      eventName: "vimeo.expand_template",
      version: 4,
      contexts: {
        ..._v19.default.buildActionContext("click"),
        ..._v19.default.buildEditorContext({
          via: null,
          editorFeature: ""
        }),
        ..._v19.default.buildProductAnalyticsContext({
          feature: _v3,
          location: "drawer",
          element: "dropdown",
          copy: _v1
        }),
        ..._v19.default.buildWebContext(),
        ..._v19.default.buildTeamContext()
      },
      additionalFields: {
        action_state: null,
        selection_format: _v0,
        selection_id: _v2 || null,
        selection_name: _v1 || null,
        selection_value: null,
        action_cta: null,
        action: null,
        number_of_elements: null,
        third_party_integration: _v19.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackOpenTemplatesCategoriesDropdown", 0, _v24, "sendTrackSelectTemplate", 0, ({
    format: _v0,
    selectionName: _v1,
    selectionId: _v2,
    feature: _v3
  }) => {
    _v19.default.send({
      eventName: "vimeo.select_template",
      version: 4,
      contexts: {
        ..._v19.default.buildActionContext("click"),
        ..._v19.default.buildEditorContext({
          via: null,
          editorFeature: ""
        }),
        ..._v19.default.buildProductAnalyticsContext({
          feature: _v3,
          location: "drawer",
          copy: _v1
        }),
        ..._v19.default.buildWebContext(),
        ..._v19.default.buildTeamContext()
      },
      additionalFields: {
        action_state: null,
        selection_format: _v0 || null,
        selection_id: _v2 || null,
        selection_name: _v1 || null,
        selection_value: null,
        action_cta: null,
        action: null,
        number_of_elements: null,
        third_party_integration: _v19.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackSelectTemplateCategory", 0, _v23, "sendTrackSelectTemplateScene", 0, ({
    format: _v0,
    selectionName: _v1,
    selectionId: _v2,
    numberOfElements: _v3
  }) => {
    _v19.default.send({
      eventName: "vimeo.select_template_scene",
      version: 3,
      contexts: {
        ..._v19.default.buildActionContext("click"),
        ..._v19.default.buildEditorContext({
          via: null,
          editorFeature: ""
        }),
        ..._v19.default.buildProductAnalyticsContext({
          feature: "templates",
          location: "drawer",
          copy: _v1
        }),
        ..._v19.default.buildWebContext(),
        ..._v19.default.buildTeamContext()
      },
      additionalFields: {
        action_state: null,
        selection_format: _v0,
        selection_id: _v2 || null,
        selection_name: _v1 || null,
        action_cta: null,
        action: null,
        number_of_elements: _v3,
        third_party_integration: _v19.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackTemplatesSearchInteraction", 0, _v21, "sendTrackTemplatesTabSelection", 0, _v0 => {
    _v19.default.send({
      eventName: "vimeo.templates_tab_selection",
      version: 4,
      contexts: {
        ..._v19.default.buildActionContext("click"),
        ..._v19.default.buildEditorContext({
          via: null,
          editorFeature: ""
        }),
        ..._v19.default.buildProductAnalyticsContext({
          feature: "templates",
          location: "drawer",
          copy: _v0
        }),
        ..._v19.default.buildWebContext(),
        ..._v19.default.buildTeamContext()
      },
      additionalFields: {
        action_state: _v0 === _v20.TEAM_TEMPLATES ? _v20.LIBRARY : _v20.TEAM_TEMPLATES,
        selection_format: null,
        selection_id: null,
        selection_name: null,
        selection_value: null,
        action_cta: null,
        action: null,
        number_of_elements: null,
        third_party_integration: _v19.default.getThirdPartyIntegration()
      }
    });
  }], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = (0, _v1.default)(_v2.InspectorPaddedRow).withConfig({
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
    let _v6 = [_v17.Orientation.LANDSCAPE, _v17.Orientation.SQUARE, _v17.Orientation.PORTRAIT],
      _v7 = (0, _v12.useCallback)(({
        filter: _v0,
        value: _v1
      }) => {
        switch (_v0(_v0, _v1), _v0) {
          case _v15.LibraryTemplatesFilters.ORIENTATION:
            _v22({
              selectionName: _v1,
              feature: _v16.TEMPLATES
            });
            break;
          case _v15.LibraryTemplatesFilters.CATEGORY:
            _v23(_v1);
        }
      }, [_v0]);
    return (0, _v10.jsxs)(_v10.Fragment, {
      children: [(0, _v10.jsxs)(_v27, {
        ...(_v2.length > 0 && {
          gap: "8px"
        }),
        children: [(0, _v10.jsx)(_v25.default, {
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
          onClick: _v21,
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
          onOpenChange: _v0 => _v0.open && _v24(),
          placeholder: _v18.OrientationRatioString[_v3],
          "data-testid": "templates-orientation-filter",
          items: _v6.map(_v0 => ({
            value: _v0,
            label: (0, _v11.default)(_v18.OrientationRatioString[_v0])
          })),
          size: "sm"
        })]
      }), 0 === _v2.length && (0, _v10.jsxs)(_v27, {
        gap: "8px",
        marginTop: !0,
        children: [(0, _v10.jsx)(_v26.MaxHeightSelect, {
          "data-testid": "templates-categories-filter",
          onValueChange: _v0 => _v7({
            filter: "category",
            value: _v0.value[0]
          }),
          onOpenChange: _v0 => _v0.open && _v24(),
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
          placeholder: _v18.OrientationRatioString[_v3],
          items: _v6.map(_v0 => ({
            value: _v0,
            label: (0, _v11.default)(_v18.OrientationRatioString[_v0])
          })),
          size: "sm"
        })]
      })]
    });
  }], 0);
}