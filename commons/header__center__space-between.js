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
    _v16 = _v0.i(0);
  function _v17({
    children: _v0,
    ..._v1
  }) {
    return (0, _v1.jsx)(_v2.Flex, {
      as: "header",
      align: "center",
      justify: "space-between",
      width: "100%",
      paddingX: "lg",
      bgColor: "background",
      backdropFilter: "var(--vimeo-blur-lg)",
      minH: "2xl",
      ..._v1,
      sx: {
        ..._v1.sx
      },
      children: _v0
    });
  }
  _v17.LeftContent = ({
    children: _v0,
    align: _v1 = "center",
    gap: _v2 = "sm",
    ..._v3
  }) => (0, _v1.jsx)(_v2.Flex, {
    align: _v1,
    gap: _v2,
    ..._v3,
    children: _v0
  }), _v17.RightContent = ({
    children: _v0,
    align: _v1 = "center",
    gap: _v2 = "md",
    ..._v3
  }) => (0, _v1.jsx)(_v2.Flex, {
    align: _v1,
    gap: _v2,
    ..._v3,
    children: _v0
  }), _v17.GoBackButton = ({
    icon: _v0 = (0, _v1.jsx)(_v4.ArrowLeft, {}),
    variant: _v1 = "secondary",
    ..._v2
  }) => (0, _v1.jsx)(_v3.IconButton, {
    icon: _v0,
    variant: _v1,
    ..._v2
  }), _v17.VimeoLogo = _v16.VimeoLogo, _v17.Logo = _v5.NavbarLogo, _v17.Upgrade = ({
    viewer: _v0
  }) => {
    let _v1 = _v0 && _v0.user,
      _v2 = _v0 && _v0.teamUser,
      _v3 = (0, _v6.useRef)(!1),
      {
        capabilities: {
          hasEnterprise: _v4
        },
        loading: _v5
      } = (0, _v9.useCapability)(["hasEnterprise"], _v2?.ownerId),
      {
        capabilities: {
          canUpgrade: _v6
        },
        loading: _v7
      } = (0, _v9.useCapability)(["canUpgrade"], _v1?.id),
      _v8 = (0, _v8.useBreakpointValue)({
        base: !1,
        md: !0
      }),
      {
        isShown: _v9,
        billingPeriod: _v10,
        productId: _v11,
        renewalDate: _v12
      } = (0, _v13.useIsRenewalOfferShown)(),
      _v13 = (0, _v14.useIsSecondFreeTrialShown)(),
      _v14 = _v0 && !(_v7 || _v5) && _v6 && !_v4 && !_v0.isSimplifiedSite;
    if ((0, _v6.useEffect)(() => {
      !_v0 || !_v14 || _v9 || _v13 || _v3.current || (_v3.current = !0, (0, _v15.trackNavigationViewEvent)({
        copy: "upgrade",
        element: "button",
        eventName: "vimeo.upsell_trigger_impression",
        additionalFields: {
          upsell_name: "top_nav_bar_upgrade"
        },
        viewer: _v0,
        version: 5
      }));
    }, [_v14, _v9, _v13, _v0]), !_v14) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v15 = (0, _v12.buildUpgradePlanUrl)({
      paywallTrigger: "top_navigation_upgrade_button",
      paywallLocation: "top_navigation",
      paywallFeature: "general"
    }, {
      upsell: "top_nav_bar_upgrade",
      integration: "none",
      feature: "general",
      paywall: "1",
      mkc: "global_top_nav"
    });
    return (0, _v1.jsx)(_v2.Flex, {
      alignItems: "center",
      gap: "8px",
      children: _v9 && !_v13 ? (0, _v1.jsx)(_v13.RenewalOfferCta, {
        viewer: _v0,
        isAnnual: "month" !== _v10,
        renewalDate: _v12,
        scheduledProductId: _v11
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v11.UpgradeBadge, {
          noMargin: !0,
          href: _v15,
          name: "top_nav_upgrade_button",
          location: "top_navigation",
          onClick: () => {
            (0, _v15.trackNavigationActionEvent)({
              copy: "upgrade",
              eventName: "vimeo.trigger_upsell",
              element: "button",
              viewer: _v0,
              version: 7,
              additionalFields: {
                upsell_name: "top_nav_bar_upgrade"
              }
            }), (0, _v15.trackNavigationActionEvent)({
              copy: "upgrade",
              element: "button",
              feature: "pricing",
              viewer: _v0,
              version: 7,
              additionalFields: {
                upsell_name: "top_nav_bar_upgrade"
              }
            });
          },
          children: _v13 ? (0, _v10.translate)({
            singular: "Reactivate Free Trial",
            dictionary: {
              es: {
                singular: "Reactivar la prueba gratuita"
              },
              "de-DE": {
                singular: "Kostenlose Testversion reaktivieren"
              },
              "fr-FR": {
                singular: "Réactiver l'essai gratuit"
              },
              "ja-JP": {
                singular: "無料トライアルを再開"
              },
              "ko-KR": {
                singular: "무료 체험 다시 활성화"
              },
              "pt-BR": {
                singular: "Reativar teste gratuito"
              },
              "zh-CN": {
                singular: "重新激活免费试用"
              }
            }
          }) : void 0
        }), _v8 && (0, _v1.jsx)(_v7.AccessEndingBadge, {
          surface: "top_nav_cta"
        })]
      })
    });
  }, _v0.s(["Navigation", 0, _v17], 0);
}