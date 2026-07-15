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
  let _v16 = (0, _v5.rem)(12),
    _v17 = ({
      width: _v0
    }) => (0, _v1.jsx)(_v12.Skeleton, {
      height: (0, _v5.rem)(40),
      margin: `${(0, _v5.rem)(1)} 0`,
      borderRadius: _v16,
      width: _v0
    }),
    _v18 = () => (0, _v1.jsx)(_v12.Skeleton, {
      height: (0, _v5.rem)(40),
      width: (0, _v5.rem)(40),
      borderRadius: _v16
    }),
    _v19 = () => (0, _v1.jsx)(_v3.Box, {
      width: (0, _v5.rem)(40),
      height: "1px",
      bg: "lightBlueAlpha.300",
      marginY: (0, _v5.rem)(8)
    }),
    _v20 = ({
      variant: _v0
    }) => {
      let _v1 = "icons" === _v0,
        {
          appSections: _v2,
          hasStarredItems: _v3,
          isInitialLoading: _v4
        } = (0, _v14.useHomePrimaryNavItems)(),
        _v5 = (0, _v2.useCallback)(_v0 => _v1 ? _v0.map(_v0 => (0, _v1.jsx)(_v13.PrimaryNavItem, {
          item: _v0,
          variant: "icons"
        }, _v0.key)) : (0, _v1.jsx)(_v6.ResizableSideNav.MenuItems, {
          customStyles: {
            gap: (0, _v5.rem)(2)
          },
          children: _v0.map(_v0 => (0, _v1.jsx)(_v13.PrimaryNavItem, {
            item: _v0,
            variant: "full"
          }, _v0.key))
        }), [_v1]);
      return (0, _v1.jsx)(_v3.Box, {
        style: {
          flexGrow: 1,
          display: "flex",
          flexDirection: "column"
        },
        ...(_v1 ? {
          alignItems: "center"
        } : {}),
        children: (0, _v1.jsxs)(_v4.Flex, {
          flexDirection: "column",
          gap: (0, _v5.rem)(2),
          paddingBottom: (0, _v5.rem)(8),
          alignItems: _v1 ? "center" : void 0,
          children: [_v4 ? Array.from({
            length: 6
          }).map((_v0, _v1) => _v1 ? (0, _v1.jsx)(_v18, {}, _v1) : (0, _v1.jsx)(_v17, {
            width: "75%"
          }, _v1)) : _v2.map((_v0, _v1) => (0, _v1.jsxs)(_v2.Fragment, {
            children: [_v1 > 0 && (_v1 ? (0, _v1.jsx)(_v19, {}) : (0, _v1.jsx)(_v6.ResizableSideNav.Divider, {
              my: (0, _v5.rem)(8)
            })), _v5(_v0)]
          }, _v1)), !_v1 && _v3 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v6.ResizableSideNav.Divider, {
              my: (0, _v5.rem)(8)
            }), (0, _v1.jsx)(_v6.ResizableSideNav.Section, {
              children: (0, _v1.jsx)(_v15.StarredItemListContainer, {
                isNewSidebar: !0
              })
            })]
          })]
        })
      });
    };
  _v0.s(["HomePrimaryNavbar", 0, _v20], 0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  function _v23({
    featuresList: _v0
  }) {
    return (0, _v1.jsx)(_v4.Flex, {
      direction: "column",
      children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v4.Flex, {
        margin: `${(0, _v5.rem)(8)} 0`,
        color: "white",
        fontWeight: 500,
        children: [(0, _v1.jsx)(_v22.Checkmark, {
          position: "relative",
          top: (0, _v5.rem)(4),
          width: (0, _v5.rem)(20),
          height: (0, _v5.rem)(20),
          marginRight: (0, _v5.rem)(8),
          color: "white"
        }), _v0]
      }, `feature-${_v1}`))
    });
  }
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = () => {
    let _v0 = (0, _v2.useContext)(_v9.ViewerContext),
      {
        open: _v1,
        close: _v2
      } = (0, _v24.useUpsellModal)(),
      _v3 = (0, _v25.useWayfinderPageName)();
    return (_v0, _v1 = 0) => {
      let _v2,
        _v3 = _v0?.user?.account === "enterprise",
        _v4 = null === _v1 || _v1 < 75 ? "default" : _v1 < 95 ? "reaching" : "reached",
        _v5 = null !== _v1 && _v1 >= 100,
        _v6 = "video_size" === _v0 && null !== _v1 && _v1 >= 95;
      _v0 = "ai_token" === (_v0 = "default" === _v4 ? "default" : _v0 || "default") ? "ai_token" : "storage", _v1({
        tracking: {
          params: {
            feature: _v5 ? "Storage_at_limit" : "Storage_general",
            location: "sidebar",
            page: _v3,
            upsell_name: "quota_meter"
          },
          paywallTracking: {
            paywallTrigger: _v5 ? "sidenav_quota_meter_at_limit_button" : "sidenav_quota_meter_general_button",
            paywallLocation: "sidenav_quota_meter",
            paywallType: "popup",
            paywallFeature: _v6 ? "storage_limit" : "quota"
          }
        },
        templateType: _v3 ? "enterprise" : "default",
        modalConfig: _v3 ? {
          mkcCode: "108877",
          enterpriseTitle: _v26.enterpriseHeader[_v4]?.[_v0] || "",
          enterpriseSubtitle: (_v2 = _v0, "default" === _v4 ? _v26.enterpriseDefaultDescription : "ai_token" === _v2 ? _v26.enterpriseAiDescription : _v26.enterpriseStorageDescription),
          customFeaturesList: "default" === _v4 ? (0, _v1.jsx)(_v23, {
            featuresList: _v26.enterpriseDefaultFeaturesList
          }) : "ai_token" === _v0 ? (0, _v1.jsx)(_v23, {
            featuresList: _v26.enterpriseAiFeaturesList
          }) : (0, _v1.jsx)(_v23, {
            featuresList: _v26.enterpriseStorageFeaturesList
          })
        } : _v5 ? _v21.quotaModalAtLimitConfig : _v21.quotaModalConfig,
        onClose: _v2
      });
    };
  };
  _v0.s(["useSideNavUpgradeClick", 0, _v27], 0);
  var _v28 = _v0.i(0);
  _v0.s(["SecondarySideNav", 0, ({
    isOpen: _v0,
    isMobile: _v1,
    onResize: _v2,
    onClose: _v3,
    collapsed: _v4 = !1,
    children: _v5,
    hideWhatsNew: _v6 = !1
  }) => {
    let _v7 = (0, _v2.useContext)(_v9.ViewerContext),
      _v8 = (0, _v2.useContext)(_v28.VideoLibraryLayoutContext),
      _v9 = _v27(),
      _v10 = (0, _v2.useMemo)(() => ({
        ..._v8,
        setIsSideNavOpen: _v3
      }), [_v8, _v3]),
      _v11 = _v7?.teamUser?.ownerId ?? _v7?.user?.id,
      {
        capabilities: _v12
      } = (0, _v7.useCapability)(["hasTotalStorageCap", "canUpgrade"], _v11),
      {
        uploadQuota: _v13,
        aiCreditsQuota: _v14,
        drmLicensesQuota: _v15,
        isLoading: _v16
      } = (0, _v8.useUserQuotaApi)(),
      _v17 = _v7?.user?.id != null && _v7?.user?.id === _v11,
      _v18 = _v7?.teamUser?.plainTextPermissionLevel === "Admin",
      _v19 = !!((_v17 || _v18) && _v13),
      _v20 = _v7?.isSimplifiedSite ?? !1,
      _v21 = _v6.COLLAPSED_RAIL_WIDTH + 244;
    return (0, _v1.jsxs)(_v6.ResizableSideNav, {
      active: _v0 || _v4,
      collapsed: _v4,
      isFixed: !0,
      dragConstraint: {
        min: _v21,
        max: _v21
      },
      onResize: (_v0, {
        current: _v1
      }) => _v2?.(_v1),
      role: "group",
      children: [(0, _v1.jsx)(_v11.SideNavHeader, {
        onClose: _v3,
        isMobile: _v1,
        bg: "fill-background",
        collapsed: _v4,
        paddingRight: (0, _v5.rem)(0)
      }), (0, _v1.jsxs)(_v4.Flex, {
        direction: "row",
        flexGrow: 1,
        minHeight: 0,
        width: "100%",
        children: [(0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          flexShrink: 0,
          width: (0, _v5.rem)(_v6.COLLAPSED_RAIL_WIDTH),
          alignItems: "center",
          paddingTop: (0, _v5.rem)(12),
          paddingBottom: (0, _v5.rem)(16),
          paddingX: (0, _v5.rem)(8),
          bg: "fill-background",
          children: [(0, _v1.jsx)(_v3.Box, {
            flexGrow: 1,
            width: "100%",
            overflowY: "auto",
            children: (0, _v1.jsx)(_v28.VideoLibraryLayoutContext.Provider, {
              value: _v10,
              children: (0, _v1.jsx)(_v20, {
                variant: "icons"
              })
            })
          }), (0, _v1.jsx)(_v10.SideNavFooter, {
            variant: "icons",
            isMobile: _v1,
            showWatchMenuItem: !!_v7?.isFromCopyrightRestrictedRegion,
            showWhatsNew: !_v20 && !_v6,
            showQuota: _v19,
            isLoadingQuota: _v16,
            quota: {
              uploadQuota: _v13,
              aiCreditsQuota: _v14,
              drmLicensesQuota: _v15,
              showTotal: _v12.hasTotalStorageCap,
              showUpgrade: _v12.canUpgrade
            },
            onUpgradeClick: _v9
          })]
        }), !_v4 && (0, _v1.jsx)(_v3.Box, {
          flexGrow: 1,
          minWidth: 0,
          overflowY: "auto",
          bg: "fill-surface",
          marginBottom: (0, _v5.rem)(16),
          padding: (0, _v5.rem)(12),
          borderRadius: (0, _v5.rem)(20),
          children: _v5
        })]
      })]
    });
  }], 0);
}