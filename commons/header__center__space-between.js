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
  function _v18({
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
  _v18.LeftContent = ({
    children: _v0,
    align: _v1 = "center",
    gap: _v2 = "sm",
    ..._v3
  }) => (0, _v1.jsx)(_v2.Flex, {
    align: _v1,
    gap: _v2,
    ..._v3,
    children: _v0
  }), _v18.RightContent = ({
    children: _v0,
    align: _v1 = "center",
    gap: _v2 = "md",
    ..._v3
  }) => (0, _v1.jsx)(_v2.Flex, {
    align: _v1,
    gap: _v2,
    ..._v3,
    children: _v0
  }), _v18.GoBackButton = ({
    icon: _v0 = (0, _v1.jsx)(_v4.ArrowLeft, {}),
    variant: _v1 = "secondary",
    ..._v2
  }) => (0, _v1.jsx)(_v3.IconButton, {
    icon: _v0,
    variant: _v1,
    ..._v2
  }), _v18.VimeoLogo = ({
    display: _v0 = "flex"
  }) => {
    let _v1 = (0, _v5.useContext)(_v17.ViewerContext),
      _v2 = _v1?.isSimplifiedSite,
      _v3 = _v2 ? (0, _v14.translate)({
        singular: "Go to Videoji home page",
        dictionary: {
          es: {
            singular: "Ir a la página de inicio de Videoji"
          },
          "de-DE": {
            singular: "Zur Videoji-Startseite"
          },
          "fr-FR": {
            singular: "Accéder à la page d'accueil de Videoji"
          },
          "ja-JP": {
            singular: "Videojiホームページに移動"
          },
          "ko-KR": {
            singular: "Videoji 홈페이지로 이동"
          },
          "pt-BR": {
            singular: "Ir para a página inicial do Videoji"
          },
          "zh-CN": {
            singular: "前往 Videoji 主页"
          }
        }
      }) : (0, _v14.translate)({
        singular: "Go to Vimeo home page",
        dictionary: {
          es: {
            singular: "Ir a la página de inicio de Vimeo"
          },
          "de-DE": {
            singular: "Zur Startseite von Vimeo"
          },
          "fr-FR": {
            singular: "Aller à la page d'accueil Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoホームページに移動"
          },
          "ko-KR": {
            singular: "Vimeo 홈페이지로 이동"
          },
          "pt-BR": {
            singular: "Ir para a página inicial do Vimeo"
          },
          "zh-CN": {
            singular: "前往 Vimeo 主页"
          }
        }
      }),
      _v4 = (0, _v12.useBreakpointValue)({
        base: (0, _v1.jsx)(_v13.VimeoV, {
          boxSize: "xs",
          color: "text-primary"
        }),
        md: (0, _v1.jsx)(_v15.default, {
          color: "text-primary",
          width: (0, _v11.rem)(78)
        })
      }),
      _v5 = !_v1?.user && _v2,
      _v6 = (0, _v9.useTrackNavigationEvent)();
    return void 0 === _v2 ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsx)(_v10.Link, {
      href: _v5 ? "javascript:void(0);" : "/",
      onClick: () => _v6({
        feature: "general",
        copy: "vimeo_logo",
        element: "button"
      }),
      id: "header-vimeo-logo",
      title: _v3,
      maxWidth: "max-content",
      display: _v0,
      variant: "secondary",
      children: _v2 ? (0, _v1.jsx)(_v16.default, {
        "data-testid": "videoji-logo"
      }) : _v4
    });
  }, _v18.Upgrade = ({
    viewer: _v0
  }) => {
    let _v1 = _v0 && _v0.user,
      _v2 = _v0 && _v0.teamUser,
      _v3 = (0, _v5.useRef)(!1),
      {
        capabilities: {
          hasEnterprise: _v4
        },
        loading: _v5
      } = (0, _v6.useCapability)(["hasEnterprise"], _v2?.ownerId),
      {
        capabilities: {
          canUpgrade: _v6
        },
        loading: _v7
      } = (0, _v6.useCapability)(["canUpgrade"], _v1?.id),
      _v8 = _v0 && !(_v7 || _v5) && _v6 && !_v4 && !_v0.isSimplifiedSite;
    if ((0, _v5.useEffect)(() => {
      _v0 && _v8 && !_v3.current && (_v3.current = !0, (0, _v9.trackNavigationViewEvent)({
        copy: "upgrade",
        element: "button",
        eventName: "vimeo.upsell_trigger_impression",
        additionalFields: {
          upsell_name: "top_nav_bar_upgrade"
        },
        viewer: _v0,
        version: 5
      }));
    }, [_v8, _v0]), !_v8) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v9 = (0, _v8.buildUpgradePlanUrl)({
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
    return (0, _v1.jsx)("div", {
      children: (0, _v1.jsx)(_v7.UpgradeBadge, {
        noMargin: !0,
        href: _v9,
        name: "top_nav_upgrade_button",
        location: "top_navigation",
        onClick: () => {
          (0, _v9.trackNavigationActionEvent)({
            copy: "upgrade",
            eventName: "vimeo.trigger_upsell",
            element: "button",
            viewer: _v0,
            version: 7,
            additionalFields: {
              upsell_name: "top_nav_bar_upgrade"
            }
          }), (0, _v9.trackNavigationActionEvent)({
            copy: "upgrade",
            element: "button",
            feature: "pricing",
            viewer: _v0,
            version: 7,
            additionalFields: {
              upsell_name: "top_nav_bar_upgrade"
            }
          });
        }
      })
    });
  }, _v0.s(["Navigation", 0, _v18], 0);
}