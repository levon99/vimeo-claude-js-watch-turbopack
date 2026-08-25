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
    _v12 = _v0.i(0);
  let _v13 = (0, _v4.keyframes)({
      "0%, 50%": {
        opacity: 0
      },
      "100%": {
        opacity: 1
      }
    }),
    _v14 = (0, _v4.keyframes)({
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
    footerVariant: _v12 = "full",
    collapsed: _v13 = !1
  }) => {
    let _v14 = (0, _v2.useContext)(_v9.ViewerContext),
      {
        capabilities: _v15
      } = (0, _v7.useCapability)(["hasTotalStorageCap", "canUpgrade"], _v14?.teamUser?.ownerId),
      _v16 = _v9 || _v14?.teamUser?.ownerId || _v14?.user?.id,
      _v17 = _v14?.user?.id != null && _v14?.user?.id === _v16,
      _v18 = _v14?.teamUser?.plainTextPermissionLevel === "Admin",
      {
        uploadQuota: _v19,
        aiCreditsQuota: _v20,
        drmLicensesQuota: _v21,
        isLoading: _v22
      } = (0, _v8.useUserQuotaApi)(),
      _v23 = !!((_v17 || _v18) && _v19 && !_v10),
      [_v24, _v25] = (0, _v2.useState)(!1),
      _v26 = (0, _v2.useRef)(_v13);
    (0, _v2.useLayoutEffect)(() => {
      if (_v26.current === _v13) return;
      _v26.current = _v13, _v25(!0);
      let _v0 = setTimeout(() => _v25(!1), 360);
      return () => clearTimeout(_v0);
    }, [_v13]);
    let _v27 = _v14?.isSimplifiedSite ?? !1;
    return (0, _v1.jsx)(_v10.SideNavCollapsedContext.Provider, {
      value: _v13,
      children: (0, _v1.jsxs)(_v6.ResizableSideNav, {
        active: _v2 || _v13,
        collapsed: _v13,
        dragConstraint: _v1,
        isFixed: _v3,
        onResize: (_v0, {
          current: _v1
        }) => _v6?.(_v1),
        role: "group",
        children: [(0, _v1.jsx)(_v6.ResizableSideNav.Header, {
          children: (0, _v1.jsx)(_v12.SideNavHeader, {
            onClose: _v5,
            isMobile: _v4,
            collapsed: _v13
          })
        }), (0, _v1.jsx)(_v3.Box, {
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          flexGrow: 1,
          minHeight: _v13 ? 0 : void 0,
          alignItems: _v13 ? "center" : void 0,
          px: _v13 ? 0 : (0, _v5.rem)(16),
          sx: _v13 ? {
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          } : void 0,
          children: _v0
        }), (0, _v1.jsx)(_v6.ResizableSideNav.Footer, {
          children: (0, _v1.jsx)(_v3.Box, {
            opacity: +!_v24,
            sx: _v24 ? {
              animation: _v13 ? `${_v13} 360ms ease-in-out forwards` : `${_v14} 180ms ease-in-out forwards`
            } : void 0,
            paddingBottom: _v13 ? (0, _v5.rem)(16) : void 0,
            children: (0, _v1.jsx)(_v11.SideNavFooter, {
              variant: _v13 ? "icons" : _v12,
              isMobile: _v4,
              showWatchMenuItem: _v8,
              showWhatsNew: !_v11 && !_v27,
              showQuota: _v23,
              isLoadingQuota: _v22,
              quota: {
                uploadQuota: _v19,
                aiCreditsQuota: _v20,
                drmLicensesQuota: _v21,
                showTotal: _v15.hasTotalStorageCap,
                showUpgrade: _v15.canUpgrade
              },
              onUpgradeClick: _v7
            })
          })
        })]
      })
    });
  }]);
}