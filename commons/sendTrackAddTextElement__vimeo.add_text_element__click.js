{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["sendTrackAddTextElement", 0, ({
    copy: _v0
  }) => {
    _v1.default.send({
      eventName: "vimeo.add_text_element",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "text"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "text",
          location: "drawer",
          copy: _v0
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action_cta: null,
        action_state: null,
        selection_id: null,
        selection_name: null,
        selection_format: null,
        number_of_elements: null,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackClickTextHighlightButton", 0, () => {
    _v1.default.send({
      eventName: "vimeo.select_text_highlight",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "text"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "text",
          location: "drawer",
          copy: "Highlight",
          element: "button"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        third_party_integration: _v1.default.getThirdPartyIntegration(),
        action_cta: null,
        action_state: null,
        number_of_elements: null,
        selection_format: null,
        selection_id: null,
        selection_name: null
      }
    });
  }]);
}