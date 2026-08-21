{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["sendTrackChangeMediaFilter", 0, ({
    copy: _v0,
    mediaTab: _v1,
    selectionName: _v2
  }) => {
    _v1.default.send({
      eventName: "vimeo.filter_media",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "media"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "media",
          location: "drawer",
          element: "dropdown",
          copy: _v0 ?? null
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action_state: _v1,
        selection_format: null,
        selection_name: _v2,
        third_party_integration: _v1.default.getThirdPartyIntegration(),
        action_cta: null,
        number_of_elements: null,
        selection_id: null
      }
    });
  }, "sendTrackChangeStockMediaFilter", 0, ({
    mediaFilter: _v0,
    selectedValue: _v1
  }) => {
    _v1.default.send({
      eventName: "vimeo.filter_media",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "media"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "media",
          location: "drawer",
          element: "dropdown"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action_state: "stick",
        selection_format: _v1,
        selection_name: _v0,
        third_party_integration: _v1.default.getThirdPartyIntegration(),
        action_cta: null,
        number_of_elements: null,
        selection_id: null
      }
    });
  }, "sendTrackSearchFocused", 0, ({
    mediaFilter: _v0,
    stockMediaFilter: _v1
  }) => {
    _v1.default.send({
      eventName: "vimeo.media_search_interaction",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "media"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "media",
          location: "drawer"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action_state: null,
        selection_format: _v1,
        selection_name: _v0,
        third_party_integration: _v1.default.getThirdPartyIntegration(),
        action_cta: null,
        number_of_elements: null,
        selection_id: null
      }
    });
  }, "sendTrackSelectMediaTab", 0, ({
    mediaTab: _v0,
    prevMediaTab: _v1,
    tabsNumber: _v2
  }) => {
    _v1.default.send({
      eventName: "vimeo.media_tab_selection",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "media"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "media",
          location: "drawer",
          copy: _v0
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action_cta: null,
        action_state: _v1 ?? null,
        selection_id: null,
        selection_name: null,
        selection_format: null,
        number_of_elements: _v2,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackSortEditorialMedia", 0, ({
    mediaFilter: _v0,
    stockMediaFilter: _v1,
    selectedSort: _v2
  }) => {
    _v1.default.send({
      eventName: "vimeo.sort_search_results",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "media"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "media",
          location: "drawer",
          copy: _v2
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action_state: null,
        selection_format: _v1,
        selection_name: _v0,
        third_party_integration: _v1.default.getThirdPartyIntegration(),
        action_cta: null,
        number_of_elements: null,
        selection_id: null
      }
    });
  }, "sendTrackUploadMediaFromComputer", 0, ({
    location: _v0,
    copy: _v1,
    element: _v2
  }) => {
    _v1.default.send({
      eventName: "vimeo.upload_media",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "media"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "media",
          location: _v0,
          copy: _v1,
          element: _v2
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