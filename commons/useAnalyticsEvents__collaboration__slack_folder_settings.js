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
  _v0.s(["useAnalyticsEvents", 0, () => {
    let _v0 = (0, _v1.useContext)(_v9.ViewerContext),
      _v1 = _v0?.teamUser;
    return {
      sendEvent: (_v0, _v1, _v2) => {
        let {
            additionalFields: _v3,
            feature: _v4,
            folderId: _v5,
            location: _v6,
            element: _v7 = null,
            includeActionContext: _v8 = !1,
            includeViewContext: _v9 = !1,
            integrationType: _v10 = null,
            isPrivateToMe: _v11 = null,
            parentFolderId: _v12 = null,
            isPinned: _v13 = null
          } = _v2,
          _v14 = {
            ...(0, _v3.buildProductAnalyticsBpContext)({
              product: "collaboration",
              feature: _v4,
              modal_name: "slack_folder_settings",
              location: _v6,
              element: _v7
            }),
            ...(0, _v4.buildTeamBpContextFromTeamUser)(_v1),
            ...(0, _v5.buildThirdPartyIntegrationBpContext)({
              is_integration: !0,
              integration_name: "slack",
              is_partner: !0,
              integration_id: null,
              integration_type: _v10
            }),
            ...(0, _v6.buildFolderBpContext)({
              folder_id: _v5,
              is_subfolder: !!_v12,
              parent_folder_id: _v12,
              is_private_to_me: _v11,
              is_pinned: _v13
            })
          };
        _v8 && (_v14 = {
          ..._v14,
          ...(0, _v2.buildActionBpContext)({
            action_type: "click",
            feature: null
          })
        }), _v9 && (_v14 = {
          ..._v14,
          ...(0, _v7.buildViewBpContext)({
            view_type: "impression",
            feature: null
          })
        }), (0, _v8.sendBpEventWithContexts)(_v0, _v14, _v1, {
          ..._v3
        });
      },
      sendOpenIntegrationEvent: () => {
        let _v0 = {
          ...(0, _v2.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          ...(0, _v4.buildTeamBpContextFromTeamUser)(_v1),
          ...(0, _v3.buildProductAnalyticsBpContext)({
            product: "integrations",
            feature: "integrations_settings",
            location: "sidebar",
            copy: "Integrations"
          }),
          ...(0, _v5.buildThirdPartyIntegrationBpContext)({
            is_integration: !1,
            integration_id: null,
            integration_name: null,
            is_partner: !1
          })
        };
        (0, _v8.sendBpEventWithContexts)("vimeo.open_integrations_center", _v0, 2);
      }
    };
  }]);
}