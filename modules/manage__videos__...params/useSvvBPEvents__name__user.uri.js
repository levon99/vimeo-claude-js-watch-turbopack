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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  _v0.s(["useSvvBPEvents", 0, () => {
    let _v0 = (0, _v15.useAppSelector)(_v14.clipIdSelector),
      _v1 = (0, _v1.useContext)(_v13.ViewerContext),
      _v2 = _v1?.teamUser,
      {
        data: _v3
      } = (0, _v2.useGetVideo)({
        where: {
          videoId: _v0
        },
        select: ["name", "user.uri", "privacy.embed", "privacy.view", "duration", "height", "width"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      }),
      _v4 = _v0 => {
        let {
          target: _v1,
          feature: _v2,
          location: _v3,
          modal_name: _v4,
          copy: _v5,
          element: _v6,
          product: _v7
        } = _v0;
        return {
          ...(0, _v10.buildWebBpContext)({
            page_name: "single_video_view_manage",
            target: _v1 ?? null,
            location: null,
            referrer_page_name: "single_video_view_manage",
            referrer: (0, _v11.getEntryPage)(document.referrer || ""),
            path: window.location.pathname,
            copy: null
          }),
          ...(0, _v6.buildTeamBpContextFromTeamUser)(_v2 ?? void 0),
          ...("number" == typeof _v0 ? (0, _v8.buildVideoBpContext)({
            video_id: _v0,
            title: _v3?.name ?? "",
            video_owner_id: parseInt(_v3?.user?.uri.split("/")[2] ?? ""),
            is_demo: !1,
            video_privacy: _v3?.privacy?.view || null,
            video_embed_privacy: _v3?.privacy?.embed || null,
            upload_method_api: null,
            upload_method_api_id: null,
            duration: _v3?.duration ?? 0,
            resolution: null,
            video_height: _v3?.height ?? 0,
            video_width: _v3?.width ?? 0,
            orientation: null
          }) : void 0),
          ...(0, _v5.buildProductAnalyticsBpContext)({
            product: _v7 ?? "single_video_view",
            feature: _v2,
            location: _v3,
            modal_name: _v4 ?? null,
            flow: null,
            element: _v6 ?? null,
            copy: _v5 ?? null,
            device_type: (0, _v3.default)()
          }),
          ...(0, _v7.buildThirdPartyIntegrationBpContext)({
            integration_id: null,
            integration_name: null,
            is_partner: null
          })
        };
      };
    function _v5(_v0, _v1, _v2 = {}) {
      let {
          value: _v3,
          action_type: _v4,
          target: _v5,
          feature: _v6,
          location: _v7,
          modal_name: _v8,
          copy: _v9,
          element: _v10,
          product: _v11,
          ..._v12
        } = _v1,
        _v13 = _v4({
          target: _v5,
          feature: _v6,
          location: _v7,
          modal_name: _v8,
          copy: _v9,
          element: _v10,
          product: _v11
        });
      (0, _v12.sendBpEventWithContexts)(_v0, {
        ..._v13,
        ...(0, _v4.buildActionBpContext)({
          action_type: _v4,
          feature: null
        })
      }, 1, {
        value: _v3,
        ...(_v2.addDeviceTypeToFields ? {
          device_type: (0, _v3.default)()
        } : {}),
        ..._v12
      });
    }
    return {
      sendSvvEvent: function (_v0, _v1) {
        _v5(_v0, _v1, {
          addDeviceTypeToFields: !0
        });
      },
      sendThemeSwitchEvent: _v0 => {
        let {
            action_type: _v1,
            selection_name: _v2,
            target: _v3,
            feature: _v4,
            location: _v5,
            modal_name: _v6
          } = _v0,
          _v7 = _v4({
            target: _v3,
            feature: _v4,
            location: _v5,
            modal_name: _v6
          });
        (0, _v12.sendBpEventWithContexts)("vimeo.change_screen_mode", {
          ..._v7,
          ...(0, _v4.buildActionBpContext)({
            action_type: _v1,
            feature: null
          })
        }, 1, {
          selection_name: _v2,
          third_party_integration: null
        });
      },
      sendViewEvent: (_v0, _v1, _v2) => {
        let {
            value: _v3,
            loading_time: _v4,
            target: _v5,
            feature: _v6,
            location: _v7,
            modal_name: _v8,
            view_type: _v9,
            element: _v10,
            product: _v11,
            copy: _v12
          } = _v1,
          _v13 = _v4({
            target: _v5,
            feature: _v6,
            location: _v7,
            modal_name: _v8,
            element: _v10,
            product: _v11,
            copy: _v12
          });
        (0, _v12.sendBpEventWithContexts)(_v0, {
          ..._v13,
          ...(0, _v9.buildViewBpContext)({
            view_type: _v9 ?? "impression",
            feature: null
          })
        }, _v2 ?? 1, {
          value: _v3,
          loading_time: _v4 ?? null,
          service_version: null
        });
      },
      sendEvent: _v5,
      sendCardsEvent: function (_v0, _v1 = {}) {
        _v5(_v0, {
          feature: "cards",
          location: "drawer",
          interactivity_element: "card",
          interactivity_element_number: null,
          action_type: "click",
          value: null,
          ...(_v1 ?? {})
        });
      }
    };
  }]);
}