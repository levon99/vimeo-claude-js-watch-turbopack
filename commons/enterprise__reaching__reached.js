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
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = () => {
    let _v0 = (0, _v2.useContext)(_v9.ViewerContext),
      {
        open: _v1,
        close: _v2
      } = (0, _v16.useUpsellModal)(),
      _v3 = (0, _v17.useWayfinderPageName)();
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
          enterpriseTitle: _v18.enterpriseHeader[_v4]?.[_v0] || "",
          enterpriseSubtitle: (_v2 = _v0, "default" === _v4 ? _v18.enterpriseDefaultDescription : "ai_token" === _v2 ? _v18.enterpriseAiDescription : _v18.enterpriseStorageDescription),
          customFeaturesList: "default" === _v4 ? (0, _v1.jsx)(_v15.UpsellFeaturesList, {
            featuresList: _v18.enterpriseDefaultFeaturesList
          }) : "ai_token" === _v0 ? (0, _v1.jsx)(_v15.UpsellFeaturesList, {
            featuresList: _v18.enterpriseAiFeaturesList
          }) : (0, _v1.jsx)(_v15.UpsellFeaturesList, {
            featuresList: _v18.enterpriseStorageFeaturesList
          })
        } : _v5 ? _v14.quotaModalAtLimitConfig : _v14.quotaModalConfig,
        onClose: _v2
      });
    };
  };
  _v0.s(["useSideNavUpgradeClick", 0, _v19], 0);
  var _v20 = _v0.i(0);
  let _v21 = _v6.COLLAPSED_RAIL_WIDTH + 244;
  _v0.s(["SECONDARY_SIDE_NAV_WIDTH", 0, _v21, "SecondarySideNav", 0, ({
    isOpen: _v0,
    isMobile: _v1,
    onResize: _v2,
    onClose: _v3,
    collapsed: _v4 = !1,
    children: _v5,
    hideWhatsNew: _v6 = !1
  }) => {
    let _v7 = (0, _v2.useContext)(_v9.ViewerContext),
      _v8 = (0, _v2.useContext)(_v20.VideoLibraryLayoutContext),
      _v9 = _v19(),
      _v10 = (0, _v12.useTrackSidebarToggled)(),
      _v11 = (0, _v2.useCallback)(() => {
        _v10("open", _v1), _v3();
      }, [_v1, _v3, _v10]),
      _v12 = (0, _v2.useMemo)(() => ({
        ..._v8,
        setIsSideNavOpen: _v3
      }), [_v8, _v3]),
      _v13 = _v7?.teamUser?.ownerId ?? _v7?.user?.id,
      {
        capabilities: _v14
      } = (0, _v7.useCapability)(["hasTotalStorageCap", "canUpgrade"], _v13),
      {
        uploadQuota: _v15,
        aiCreditsQuota: _v16,
        drmLicensesQuota: _v17,
        isLoading: _v18
      } = (0, _v8.useUserQuotaApi)(),
      _v19 = _v7?.user?.id != null && _v7?.user?.id === _v13,
      _v20 = _v7?.teamUser?.plainTextPermissionLevel === "Admin",
      _v21 = !!((_v19 || _v20) && _v15),
      _v22 = _v7?.isSimplifiedSite ?? !1;
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
      onCollapsedRailClick: _v11,
      role: "group",
      children: [(0, _v1.jsx)(_v11.SideNavHeader, {
        onClose: _v3,
        isMobile: _v1,
        bg: "fill-background",
        collapsed: _v4,
        paddingRight: _v1 ? (0, _v5.rem)(16) : (0, _v5.rem)(0)
      }), (0, _v1.jsxs)(_v4.Flex, {
        direction: "row",
        flexGrow: 1,
        minHeight: 0,
        width: "100%",
        bg: "fill-background",
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
            children: (0, _v1.jsx)(_v20.VideoLibraryLayoutContext.Provider, {
              value: _v12,
              children: (0, _v1.jsx)(_v13.HomePrimaryNavbar, {
                variant: "icons"
              })
            })
          }), (0, _v1.jsx)(_v10.SideNavFooter, {
            variant: "icons",
            isMobile: _v1,
            showWatchMenuItem: !!_v7?.isFromCopyrightRestrictedRegion,
            showWhatsNew: !_v22 && !_v6,
            hideWhatsNewIntroPopover: !_v4,
            showQuota: _v21,
            isLoadingQuota: _v18,
            quota: {
              uploadQuota: _v15,
              aiCreditsQuota: _v16,
              drmLicensesQuota: _v17,
              showTotal: _v14.hasTotalStorageCap,
              showUpgrade: _v14.canUpgrade
            },
            onUpgradeClick: _v9
          })]
        }), !_v4 && (0, _v1.jsx)(_v3.Box, {
          flexGrow: 1,
          minWidth: 0,
          overflowY: "auto",
          bg: "fill-surface",
          marginBottom: (0, _v5.rem)(16),
          marginRight: _v1 ? (0, _v5.rem)(16) : void 0,
          padding: (0, _v5.rem)(12),
          borderRadius: (0, _v5.rem)(20),
          children: _v5
        })]
      })]
    });
  }], 0);
}