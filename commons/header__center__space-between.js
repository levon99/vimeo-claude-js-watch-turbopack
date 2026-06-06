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
  let _v17 = (0, _v5.default)(() => _v0.A(0), {
    loadableGenerated: {
      modules: [0]
    }
  });
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  function _v25({
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
  _v25.LeftContent = ({
    children: _v0,
    align: _v1 = "center",
    gap: _v2 = "sm",
    ..._v3
  }) => (0, _v1.jsx)(_v2.Flex, {
    align: _v1,
    gap: _v2,
    ..._v3,
    children: _v0
  }), _v25.RightContent = ({
    children: _v0,
    align: _v1 = "center",
    gap: _v2 = "md",
    ..._v3
  }) => (0, _v1.jsx)(_v2.Flex, {
    align: _v1,
    gap: _v2,
    ..._v3,
    children: _v0
  }), _v25.GoBackButton = ({
    icon: _v0 = (0, _v1.jsx)(_v4.ArrowLeft, {}),
    variant: _v1 = "secondary",
    ..._v2
  }) => (0, _v1.jsx)(_v3.IconButton, {
    icon: _v0,
    variant: _v1,
    ..._v2
  }), _v25.VimeoLogo = ({
    display: _v0 = "flex"
  }) => {
    let _v1 = (0, _v6.useContext)(_v24.ViewerContext),
      _v2 = _v1?.isSimplifiedSite,
      _v3 = _v2 ? (0, _v8.translate)({
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
      }) : (0, _v8.translate)({
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
      _v4 = (0, _v20.useBreakpointValue)({
        base: (0, _v1.jsx)(_v21.VimeoV, {
          boxSize: "xs",
          color: "text-primary"
        }),
        md: (0, _v1.jsx)(_v22.default, {
          color: "text-primary",
          width: (0, _v19.rem)(78)
        })
      }),
      _v5 = !_v1?.user && _v2,
      _v6 = (0, _v16.useTrackNavigationEvent)();
    return void 0 === _v2 ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsx)(_v18.Link, {
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
      children: _v2 ? (0, _v1.jsx)(_v23.default, {
        "data-testid": "videoji-logo"
      }) : _v4
    });
  }, _v25.Upgrade = ({
    viewer: _v0
  }) => {
    let _v1 = _v0 && _v0.user,
      _v2 = _v0 && _v0.teamUser,
      _v3 = (0, _v6.useRef)(!1),
      {
        getShouldShowUpsellModal: _v4
      } = (() => {
        let _v0 = (0, _v15.useViewer)(),
          {
            getEppoAssignment: _v1
          } = (0, _v14.useGetEppoAssignment)();
        return {
          getShouldShowUpsellModal: (_v0, _v1, _v2, _v3) => ((_v0, _v1, _v2, _v3, _v4, _v5) => {
            let _v6 = _v1?.user?.id || 0;
            if ("function" == typeof _v2) {
              let {
                assignment: _v0
              } = _v2({
                flagKey: _v3,
                subject: {
                  key: _v6,
                  keyType: _v13.SubjectKeyTypes.CUID,
                  additionalData: {
                    upsell_description: _v0,
                    ..._v5
                  }
                },
                bigPictureOverrides: _v4,
                assignmentType: _v13.VariationTypes.BOOLEAN,
                defaultAssignment: !1
              });
              return _v0;
            }
            return !1;
          })(_v0, _v0, _v1, _v1, _v2, _v3)
        };
      })(),
      [_v5, _v6] = (0, _v6.useState)(!1),
      {
        capabilities: {
          hasEnterprise: _v7
        },
        loading: _v8
      } = (0, _v7.useCapability)(["hasEnterprise"], _v2?.ownerId),
      {
        capabilities: {
          canUpgrade: _v9
        },
        loading: _v10
      } = (0, _v7.useCapability)(["canUpgrade"], _v1?.id),
      _v11 = _v0 && !(_v10 || _v8) && _v9 && !_v7 && !_v0.isSimplifiedSite;
    if ((0, _v6.useEffect)(() => {
      _v0 && _v11 && !_v3.current && (_v3.current = !0, (0, _v16.trackNavigationViewEvent)({
        copy: "upgrade",
        element: "button",
        eventName: "vimeo.upsell_trigger_impression",
        additionalFields: {
          upsell_name: "top_nav_bar_upgrade"
        },
        viewer: _v0,
        version: 5
      }));
    }, [_v11, _v0]), !_v11) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v12 = (0, _v10.buildUpgradePlanUrl)({
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
    return (0, _v1.jsxs)("div", {
      children: [(0, _v1.jsx)(_v9.UpgradeBadge, {
        noMargin: !0,
        href: _v12,
        name: "top_nav_upgrade_button",
        location: "top_navigation",
        onClick: _v0 => {
          if (!_v0.defaultPrevented) {
            let _v0, _v1, _v2, _v3;
            _v4("top_nav_bar_upgrade", "top-nav-upgrade-badge", (_v0 = "other", _v1 = null, _v2 = null, _v3 = null, window.location?.pathname && (_v1 = window.location.pathname, _v0 = (0, _v11.getPageNameFromPath)(window.location.pathname, _v1)), "u" > typeof document && document.referrer && (_v3 = new URL(document.referrer).pathname, _v2 = (0, _v11.getPageNameFromPath)(new URL(document.referrer).pathname, _v1)), {
              product_analytics_context: {
                device_type: (0, _v12.default)()
              },
              web_context: {
                path: _v1,
                page_name: _v0,
                referrer: _v3,
                referrer_page_name: _v2
              }
            }), {
              location: _v0?.location || "unknown"
            }) && (_v0.preventDefault(), _v6(!0));
          }
          (0, _v16.trackNavigationActionEvent)({
            copy: "upgrade",
            eventName: "vimeo.trigger_upsell",
            element: "button",
            viewer: _v0,
            version: 7,
            additionalFields: {
              upsell_name: "top_nav_bar_upgrade"
            }
          }), (0, _v16.trackNavigationActionEvent)({
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
      }), _v5 && (0, _v1.jsx)(_v17, {
        apiUrl: _v0?.apiUrl,
        userConfig: {
          jwt: _v0?.jwt,
          userId: _v0?.user?.id
        },
        templateType: "default",
        onClose: () => _v6(!1),
        modalConfig: {
          hidePlansSummary: !0,
          hasFreeFeaturedBanner: !0,
          headerText: "",
          subHeaderText: "",
          featuredBannerText: (0, _v8.translate)({
            singular: "Upgrade to unlock more features",
            dictionary: {
              es: {
                singular: "Actualice su plan para desbloquear más funciones"
              },
              "de-DE": {
                singular: "Upgrade vornehmen, um weitere Funktionen freizuschalten"
              },
              "fr-FR": {
                singular: "Mettez votre abonnement à niveau pour débloquer plus de fonctionnalités"
              },
              "ja-JP": {
                singular: "アップグレードでさらに多くの機能にアクセス"
              },
              "ko-KR": {
                singular: "업그레이드하여 더 많은 기능을 이용해 보세요."
              },
              "pt-BR": {
                singular: "Faça upgrade para ter acesso a mais recursos"
              },
              "zh-CN": {
                singular: "升级以解锁更多功能"
              }
            }
          })
        },
        tracking: {
          params: {
            feature: "pricing"
          },
          paywallTracking: {
            paywallTrigger: "top_navigation_upgrade_button",
            paywallLocation: "top_navigation",
            paywallType: "popup",
            paywallFeature: "general"
          }
        }
      })]
    });
  }, _v0.s(["Navigation", 0, _v25], 0);
}