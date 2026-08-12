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
    _v9 = _v0.i(0);
  let _v10 = {
      PRESET_MANAGEMENT_PAGEVIEW: "vimeo.preset_management_pageview",
      REGISTRANTS_EXPORT_CSV: "vimeo.registrants_export_csv",
      UPDATE_PRESET: "vimeo.update_preset"
    },
    _v11 = {
      "vimeo.preset_management_pageview": 1,
      "vimeo.registrants_export_csv": 13,
      "vimeo.update_preset": 13
    },
    _v12 = {
      BUTTON: "button"
    },
    _v13 = {
      GATES: "gates"
    },
    _v14 = {
      PRESET: "preset"
    },
    _v15 = {
      CLICK: "click"
    },
    _v16 = {
      PAGE_VIEW: "pageview"
    },
    _v17 = {
      EXPORT_REGISTRANTS_CSV: "export_registrants_csv",
      DELETE_PRESET: "delete_preset"
    };
  _v0.s(["ACTION_NAME", 0, _v17, "ACTION_TYPE", 0, _v15, "BP_EVENT_NAMES", 0, _v10, "COPY", 0, {
    DELETE: "delete",
    EXPORT_CSV: "export csv"
  }, "ELEMENT", 0, _v12, "FEATURE", 0, _v14, "LOCATION", 0, {
    PAGE_AREA: "page_area",
    NOTIFICATION: "notification",
    TOP_TOOLBAR: "top_toolbar"
  }, "PAGE_NAMES", 0, {
    USER_SETTINGS: "user_settings",
    REGISTRATION_MANAGER: "registration_manager"
  }, "PRODUCT", 0, _v13, "VERSION_MAP", 0, _v11, "VIEW_TYPE", 0, _v16], 0), _v0.s(["useAnalytics", 0, () => {
    let _v0 = (0, _v9.useViewer)()?.teamUser;
    return {
      sendBpEvent: ({
        eventName: _v0,
        location: _v1,
        copy: _v2,
        pageName: _v3,
        path: _v4 = window.location.pathname,
        element: _v5 = _v12.BUTTON,
        flow: _v6 = null,
        formId: _v7 = null
      }) => {
        let _v8 = {
            ...(_v0 !== _v10.PRESET_MANAGEMENT_PAGEVIEW && (0, _v3.buildActionBpContext)({
              action_type: _v15.CLICK,
              feature: null
            })),
            ...(_v0 === _v10.PRESET_MANAGEMENT_PAGEVIEW && (0, _v4.buildViewBpContext)({
              view_type: _v16.PAGE_VIEW,
              feature: null
            })),
            ...(0, _v5.buildWebBpContext)({
              page_name: _v3,
              path: _v4,
              target: null,
              copy: null,
              location: null
            }),
            ...(0, _v6.buildTeamBpContextFromTeamUser)(_v0 ?? void 0),
            ...(0, _v8.buildThirdPartyIntegrationBpContext)({
              is_integration: !1,
              integration_id: null,
              integration_name: null,
              is_partner: null
            }),
            ...(0, _v7.buildProductAnalyticsBpContext)({
              feature: _v14.PRESET,
              product: _v13.GATES,
              element: _v5,
              location: _v1,
              copy: _v2,
              modal_name: null,
              device_type: (0, _v1.default)(),
              flow: _v6,
              entity_type: null
            })
          },
          _v9 = _v0 === _v10.PRESET_MANAGEMENT_PAGEVIEW ? {
            form_id: null
          } : {
            action_name: _v0 === _v10.REGISTRANTS_EXPORT_CSV ? _v17.EXPORT_REGISTRANTS_CSV : _v17.DELETE_PRESET,
            form_id: _v7,
            provider_name: null,
            provider_list_id: null,
            action_value: null,
            type: null
          },
          _v10 = _v11[_v0];
        (0, _v2.sendBpEventWithContexts)(_v0, _v8, _v10, _v9);
      }
    };
  }], 0);
}