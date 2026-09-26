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
    _v13 = _v0.i(0);
  let _v14 = (0, _v4.keyframes)({
      "0%, 50%": {
        opacity: 0
      },
      "100%": {
        opacity: 1
      }
    }),
    _v15 = (0, _v4.keyframes)({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    });
  _v0.s(["WayfinderSideNav", 0, ({
    children: _v0,
    dragConstraint: _v1,
    isOpen: _v2,
    isFixed: _v3,
    isMobile: _v4,
    onClose: _v5,
    onResize: _v6,
    onUpgradeClick: _v7,
    showWatchMenuItem: _v8 = !1,
    teamOwnerId: _v9,
    hideQuotaMeter: _v10 = !1,
    hideWhatsNew: _v11 = !1,
    hideWhatsNewAnnouncementCount: _v12 = !1,
    footerVariant: _v13 = "full",
    collapsed: _v14 = !1,
    bundlePromo: _v15
  }) => {
    let _v16 = (0, _v2.useContext)(_v9.ViewerContext),
      {
        capabilities: _v17
      } = (0, _v7.useCapability)(["hasTotalStorageCap", "canUpgrade"], _v16?.teamUser?.ownerId),
      _v18 = _v9 || _v16?.teamUser?.ownerId || _v16?.user?.id,
      _v19 = _v16?.user?.id != null && _v16?.user?.id === _v18,
      _v20 = _v16?.teamUser?.plainTextPermissionLevel === "Admin",
      {
        uploadQuota: _v21,
        aiCreditsQuota: _v22,
        drmLicensesQuota: _v23,
        isLoading: _v24
      } = (0, _v8.useUserQuotaApi)(),
      _v25 = !!((_v19 || _v20) && _v21 && !_v10),
      [_v26, _v27] = (0, _v2.useState)(!1),
      _v28 = (0, _v2.useRef)(_v14);
    (0, _v2.useLayoutEffect)(() => {
      if (_v28.current === _v14) return;
      _v28.current = _v14, _v27(!0);
      let _v0 = setTimeout(() => _v27(!1), 360);
      return () => clearTimeout(_v0);
    }, [_v14]);
    let _v29 = _v16?.isSimplifiedSite ?? !1,
      _v30 = (0, _v13.useTrackSidebarToggled)(),
      _v31 = (0, _v2.useCallback)(() => {
        _v30("open", _v4), _v5();
      }, [_v4, _v5, _v30]);
    return (0, _v1.jsx)(_v10.SideNavCollapsedContext.Provider, {
      value: _v14,
      children: (0, _v1.jsxs)(_v6.ResizableSideNav, {
        active: _v2 || _v14,
        collapsed: _v14,
        dragConstraint: _v1,
        isFixed: _v3,
        onResize: (_v0, {
          current: _v1
        }) => _v6?.(_v1),
        onCollapsedRailClick: _v31,
        role: "group",
        children: [(0, _v1.jsx)(_v6.ResizableSideNav.Header, {
          children: (0, _v1.jsx)(_v12.SideNavHeader, {
            onClose: _v5,
            isMobile: _v4,
            collapsed: _v14
          })
        }), (0, _v1.jsx)(_v3.Box, {
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          flexGrow: 1,
          minHeight: _v14 ? 0 : void 0,
          alignItems: _v14 ? "center" : void 0,
          px: _v14 ? 0 : (0, _v5.rem)(16),
          sx: _v14 ? {
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          } : void 0,
          children: _v0
        }), (0, _v1.jsx)(_v6.ResizableSideNav.Footer, {
          children: (0, _v1.jsx)(_v3.Box, {
            opacity: +!_v26,
            sx: _v26 ? {
              animation: _v14 ? `${_v14} 360ms ease-in-out forwards` : `${_v15} 180ms ease-in-out forwards`
            } : void 0,
            paddingBottom: _v14 ? (0, _v5.rem)(16) : void 0,
            children: (0, _v1.jsx)(_v11.SideNavFooter, {
              variant: _v14 ? "icons" : _v13,
              isMobile: _v4,
              showWatchMenuItem: _v8,
              showWhatsNew: !_v11 && !_v29,
              hideWhatsNewAnnouncementCount: _v12,
              showQuota: _v25,
              isLoadingQuota: _v24,
              quota: {
                uploadQuota: _v21,
                aiCreditsQuota: _v22,
                drmLicensesQuota: _v23,
                showTotal: _v17.hasTotalStorageCap,
                showUpgrade: _v17.canUpgrade
              },
              onUpgradeClick: _v7,
              bundlePromo: _v15
            })
          })
        })]
      })
    });
  }]);
}