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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = ({
    children: _v0 = (0, _v5.translate)({
      singular: "Upgrade",
      dictionary: {
        es: {
          singular: "Actualizar"
        },
        "de-DE": {
          singular: "Upgraden"
        },
        "fr-FR": {
          singular: "Mettre à niveau"
        },
        "ja-JP": {
          singular: "アップグレード"
        },
        "ko-KR": {
          singular: "업그레이드"
        },
        "zh-CN": {
          singular: "升级"
        }
      }
    }),
    href: _v1,
    target: _v2,
    onClick: _v3,
    noMargin: _v4 = !1,
    size: _v5 = "xs",
    style: _v6,
    tracking: _v7,
    modalConfig: _v8,
    modalTracking: _v9,
    name: _v10,
    location: _v11,
    ..._v12
  }) => {
    let _v13,
      _v14,
      _v15,
      _v16,
      _v17,
      _v18,
      _v19,
      _v20,
      {
        sendUpsellEvent: _v21
      } = (_v13 = (0, _v17.useViewer)(), _v14 = (0, _v2.useCallback)(() => (0, _v9.buildActionBpContext)({
        action_type: "click",
        feature: null
      }), []), _v15 = (0, _v2.useCallback)(() => (0, _v14.buildViewBpContext)({
        view_type: "impression",
        feature: null
      }), []), _v16 = (0, _v2.useCallback)(() => (0, _v13.buildWebBpContext)({
        page_name: "other"
      }), []), _v17 = (0, _v2.useCallback)(() => (0, _v10.buildProductAnalyticsBpContext)({
        product: "monetization",
        feature: "not_applicable_pageview",
        location: "not_applicable_pageview"
      }), []), _v18 = (0, _v2.useCallback)(() => (0, _v11.buildTeamBpContextFromTeamUser)(_v13?.teamUser), [_v13?.teamUser]), _v19 = (0, _v2.useCallback)(() => (0, _v12.buildThirdPartyIntegrationBpContext)({
        is_integration: !1,
        integration_name: null,
        integration_id: null,
        is_partner: null
      }), []), _v20 = (0, _v2.useCallback)(({
        upsell_feature_category: _v0,
        upsell_specific_feature: _v1,
        upsell_badge_location: _v2
      }) => {
        let _v3;
        return _v3 = {
          upsell_feature_category: _v0,
          upsell_specific_feature: _v1,
          upsell_badge_location: _v2
        }, {
          upsell_context: new _v15.EventContext("upsell_context", 4, _v3)
        };
      }, []), {
        sendUpsellEvent: (0, _v2.useCallback)(({
          eventName: _v0,
          isAction: _v1,
          upsell_feature_category: _v2,
          upsell_specific_feature: _v3,
          upsell_badge_location: _v4
        }) => {
          let _v5 = {
            ...(_v1 ? _v14() : _v15()),
            ..._v16(),
            ..._v18(),
            ..._v17(),
            ..._v19(),
            ..._v20({
              upsell_feature_category: _v2,
              upsell_specific_feature: _v3,
              upsell_badge_location: _v4
            })
          };
          (0, _v16.sendBpEventWithContexts)(_v0, _v5);
        }, [_v14, _v17, _v16, _v18, _v19, _v15, _v20])
      }),
      {
        trackUpgradeButtonClicked: _v22
      } = (0, _v6.useUpgradeTracking)(),
      _v23 = (0, _v2.useContext)(_v8.ViewerContext),
      [_v24, _v25] = (0, _v2.useState)(!1),
      _v26 = {
        onClick: _v0 => {
          _v22({
            name: _v10 ?? _v9?.paywallTracking?.paywallTrigger ?? "upgrade_badge_unconfigured_button",
            location: _v11 ?? _v9?.paywallTracking?.paywallLocation ?? window.location.pathname,
            targetUrl: _v1 ?? void 0
          }), _v7 && _v21({
            eventName: "vimeo.trigger_upsell",
            isAction: !0,
            ..._v7
          }), _v8 && _v25(!0), _v3?.(_v0);
        },
        variant: "upsell",
        margin: _v4 ? 0 : `0 ${(0, _v4.rem)(8)}`,
        size: _v5,
        sx: {
          bgColor: "upsell-primary",
          color: "white",
          _loading: {
            bgColor: "upsell-primary/50",
            _disabled: {
              bgColor: "upsell-primary/50",
              _hover: {
                bgColor: "red/50"
              }
            }
          },
          _disabled: {
            bgColor: "upsell-primary",
            _hover: {
              bgColor: "upsell-primary"
            }
          },
          _hover: {
            bgColor: "purple.500"
          },
          _active: {
            bgColor: "purple.500"
          },
          ..._v6
        },
        ..._v12
      };
    return ((0, _v2.useEffect)(() => {
      _v7 && _v21({
        eventName: "vimeo.upsell_trigger_impression",
        isAction: !1,
        ..._v7
      });
    }, []), _v8) ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v24 && (0, _v1.jsx)(_v7.default, {
        apiUrl: _v23?.apiUrl,
        userConfig: {
          jwt: _v23?.jwt,
          userId: _v23?.user?.id
        },
        templateType: "default",
        modalConfig: _v8,
        onClose: () => _v25(!1),
        tracking: _v9 ?? {
          params: {
            page: "single_video_view",
            feature: "quota",
            location: "file_menu",
            upsell_name: "at_limit_quota_make_copy"
          },
          paywallTracking: {
            paywallTrigger: "upgrade_badge_unconfigured_button",
            paywallLocation: "single_video_view",
            paywallType: "popup",
            paywallFeature: "quota"
          }
        }
      }), (0, _v1.jsx)(_v3.Button, {
        ..._v26,
        children: _v0
      })]
    }) : _v3 && !_v1 ? (0, _v1.jsx)(_v3.Button, {
      ..._v26,
      as: "button",
      children: _v0
    }) : _v1 ? (0, _v1.jsx)(_v3.Button, {
      ..._v26,
      as: "a",
      href: _v1,
      target: _v2 || "_self",
      children: _v0
    }) : (0, _v1.jsx)(_v3.Button, {
      ..._v26,
      as: "span",
      children: _v0
    });
  };
  _v0.s(["UpgradeButton", 0, _v18, "default", 0, _v18], 0);
}