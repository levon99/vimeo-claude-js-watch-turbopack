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
  _v0.s(["useTracking", 0, () => {
    let _v0 = (0, _v9.useViewer)(),
      _v1 = (0, _v1.useCallback)(() => (0, _v2.buildActionBpContext)({
        action_type: "click",
        feature: null
      }), []),
      _v2 = (0, _v1.useCallback)(() => (0, _v6.buildViewBpContext)({
        view_type: "impression",
        feature: null
      }), []),
      _v3 = (0, _v1.useCallback)(({
        copy: _v0,
        feature: _v1,
        location: _v2
      }) => (0, _v3.buildProductAnalyticsBpContext)({
        product: "integrations",
        feature: _v1,
        location: _v2,
        copy: _v0
      }), []),
      _v4 = (0, _v1.useCallback)(() => (0, _v7.buildWebBpContext)({
        page_name: "integrations_center"
      }), []),
      _v5 = (0, _v1.useCallback)(() => (0, _v4.buildTeamBpContextFromTeamUser)(_v0?.teamUser), [_v0?.teamUser]),
      _v6 = (0, _v1.useCallback)(({
        is_integration: _v0,
        integration_name: _v1 = null,
        integration_id: _v2 = null
      }) => (0, _v5.buildThirdPartyIntegrationBpContext)({
        is_integration: _v0,
        integration_name: _v1,
        integration_id: _v2,
        is_partner: null
      }), []);
    return {
      sendFilterEvent: ({
        eventName: _v0,
        copy: _v1
      }) => {
        let _v2 = {
          ..._v1(),
          ..._v5(),
          ..._v3({
            copy: _v1,
            feature: "integrations_settings",
            location: "top_navigation_bar"
          }),
          ..._v6({
            is_integration: !1
          }),
          ..._v4()
        };
        (0, _v8.sendBpEventWithContexts)(_v0, _v2);
      },
      sendAppClickEvent: ({
        appName: _v0,
        isConnected: _v1
      }) => {
        let _v2 = {
            ..._v1(),
            ..._v5(),
            ..._v3({
              copy: _v0,
              location: "widget",
              feature: "integrations_settings"
            }),
            ..._v6({
              is_integration: !1
            }),
            ..._v4()
          },
          _v3 = {
            field_name: "is_connected",
            field_value: String(_v1),
            integration_name: _v0
          };
        (0, _v8.sendBpEventWithContexts)("vimeo.open_integration_info_page", _v2, 2, _v3);
      },
      sendConnectionEvent: ({
        isConnect: _v0,
        buttonText: _v1,
        integrationId: _v2,
        integrationName: _v3
      }) => {
        let _v4 = {
          ..._v1(),
          ..._v5(),
          ..._v3({
            copy: _v1,
            location: "content_area",
            feature: _v0 ? "integrations_onboarding" : "integrations_settings"
          }),
          ..._v6({
            is_integration: !0,
            integration_id: _v2,
            integration_name: _v3
          }),
          ..._v4()
        };
        (0, _v8.sendBpEventWithContexts)("vimeo.integrations_connect_disconnect_event", _v4, 5, {
          interaction_type: _v0 ? "connect_intent" : "core_disconnect"
        });
      },
      sendUpsellEvent: (0, _v1.useCallback)(({
        eventName: _v0,
        integrationId: _v1,
        integrationName: _v2,
        copy: _v3,
        isAction: _v4
      }) => {
        let _v5 = {
          ...(_v4 ? _v1() : _v2()),
          ..._v5(),
          ..._v3({
            copy: _v3,
            feature: "integrations_connections",
            location: "content_area"
          }),
          ..._v6({
            is_integration: !0,
            integration_id: _v1,
            integration_name: _v2
          }),
          ..._v4()
        };
        (0, _v8.sendBpEventWithContexts)(_v0, _v5);
      }, [_v1, _v3, _v5, _v6, _v2, _v4]),
      sendManageEvents: ({
        eventName: _v0,
        integrationId: _v1,
        integrationName: _v2,
        copy: _v3
      }) => {
        let _v4 = {
          ..._v1(),
          ..._v5(),
          ..._v3({
            feature: "integrations_settings",
            location: "content_area",
            copy: _v3
          }),
          ..._v6({
            is_integration: !0,
            integration_id: _v1,
            integration_name: _v2
          }),
          ..._v4()
        };
        (0, _v8.sendBpEventWithContexts)(_v0, _v4);
      }
    };
  }]);
}