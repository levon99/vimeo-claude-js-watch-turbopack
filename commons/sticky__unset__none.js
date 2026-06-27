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
  _v0.i(0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = ({
    fixed: _v0 = !0,
    hasThemeSupport: _v1 = !0,
    isSideNavActive: _v2,
    setIsSideNavActive: _v3,
    children: _v4
  }) => {
    let _v5 = (0, _v14.useBreakpointValue)({
        base: !0,
        sm: !1
      }),
      _v6 = (0, _v12.useViewer)(),
      _v7 = _v6?.user,
      _v8 = _v6?.isSimplifiedSite,
      _v9 = _v6?.isEnterpriseSite;
    return (0, _v1.jsxs)(_v15.Navigation, {
      position: _v0 ? "sticky" : "unset",
      top: "0",
      gap: {
        base: "sm",
        md: "md",
        lg: "5"
      },
      px: {
        base: "3",
        md: "lg"
      },
      zIndex: "1001",
      children: [(0, _v1.jsxs)(_v15.Navigation.LeftContent, {
        children: [_v3 && (0, _v1.jsx)(_v19.SideNavToggle, {
          isSideNavActive: !!_v2,
          setIsSideNavActive: _v3
        }), (0, _v1.jsx)(_v15.Navigation.VimeoLogo, {
          display: _v2 ? "none" : "flex"
        }), _v2 && _v4]
      }), (0, _v1.jsxs)(_v15.Navigation.RightContent, {
        justifyContent: "end",
        width: "100%",
        gap: {
          base: "sm",
          md: "md"
        },
        children: [(0, _v1.jsxs)(_v5.Flex, {
          alignItems: "center",
          gap: {
            base: "xs",
            md: "sm"
          },
          flexGrow: "1",
          justifyContent: "end",
          children: [!_v5 && (0, _v1.jsx)(_v15.Navigation.Upgrade, {
            viewer: _v6
          }), !_v8 && (0, _v1.jsx)(_v17.HelpCTA, {}), _v6 && !_v7 && !_v5 && !_v9 && (0, _v1.jsx)(_v18.PricingCTA, {})]
        }), (0, _v1.jsx)(_v16.AccountMenu, {
          hasThemeSupport: _v1
        })]
      })]
    });
  };
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).OrganizationSettingsSideNavContent
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v28 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).WorkspaceSettingsSideNavContent
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v29 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).PersonalSettingsSideNavContent
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v30 = ({
      children: _v0,
      organizationUuid: _v1,
      workspaceUuid: _v2,
      workspaceInternalId: _v3
    }) => {
      let _v4 = (0, _v4.useRef)(!1),
        [_v5, _v6] = (0, _v4.useState)(!1),
        {
          pathname: _v7
        } = (0, _v3.useRouter)(),
        _v8 = (0, _v12.useViewer)(),
        _v9 = (0, _v26.getTranslations)(),
        _v10 = (0, _v4.useMemo)(() => {
          switch (_v7?.split("/")?.at(2)) {
            case _v22.PATH.WORKSPACE:
              return _v22.PATH.WORKSPACE;
            case _v22.PATH.ORGANIZATION:
              return _v22.PATH.ORGANIZATION;
            default:
              return;
          }
        }, [_v7]),
        _v11 = (0, _v23.useWindowSize)().width <= _v24.BreakPoints.sm,
        [_v12, _v13] = (0, _v4.useState)(!_v11),
        {
          isOrganizationOutOfCredits: _v14,
          isAtLeastOneWorkspaceOutOfCredits: _v15,
          isOrganizationOutOfStorage: _v16
        } = (0, _v25.useOrganizationUsage)({
          organizationUuid: _v1
        });
      return (0, _v4.useEffect)(() => {
        _v6(!0);
      }, []), (0, _v4.useEffect)(() => {
        if (_v10 === _v22.PATH.ORGANIZATION && !_v4.current) {
          if (_v16 && _v14) {
            _v10.PendoClient.showGuideById(_v21.USAGE_PENDO_IDS.ORG_OUT_OF_CREDITS_AND_OUT_OF_STORAGE_ID), _v4.current = !0;
            return;
          }
          _v16 ? (_v10.PendoClient.showGuideById(_v21.USAGE_PENDO_IDS.ORG_OUT_OF_STORAGE_ID), _v4.current = !0) : _v14 ? (_v10.PendoClient.showGuideById(_v21.USAGE_PENDO_IDS.ORG_OUT_OF_CREDITS_ID), _v4.current = !0) : _v15 && (_v10.PendoClient.showGuideById(_v21.USAGE_PENDO_IDS.WORKSPACE_OUT_OF_CREDITS_ID), _v4.current = !0);
        }
      }, [_v10, _v15, _v14, _v16]), (0, _v1.jsxs)(_v5.Flex, {
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        children: [(0, _v1.jsxs)(_v13.WayfinderSideNav, {
          isOpen: _v12,
          onClose: () => _v13(() => !1),
          isMobile: _v11,
          teamOwnerId: _v10 === _v22.PATH.WORKSPACE ? _v8?.team?.ownerId ?? 0 : 0,
          hideQuotaMeter: _v10 === _v22.PATH.ORGANIZATION,
          hideWhatsNew: !0,
          children: [_v10 === _v22.PATH.WORKSPACE ? (0, _v1.jsx)(_v28, {
            workspaceUuid: _v2,
            workspaceInternalId: _v3
          }) : (0, _v1.jsx)(_v27, {
            organizationUuid: _v1
          }), _v10 === _v22.PATH.WORKSPACE && (0, _v1.jsx)(_v29, {})]
        }), (0, _v1.jsx)(_v5.Flex, {
          flexDirection: "column",
          flex: "1 1 auto",
          width: "50%",
          children: (0, _v1.jsxs)(_v6.Box, {
            overflowY: "auto",
            children: [_v10 === _v22.PATH.WORKSPACE ? (0, _v1.jsx)(_v9.DefaultNavigation, {
              setIsSideNavActive: () => _v13(!0),
              isSideNavActive: _v12,
              fixed: !1
            }) : (0, _v1.jsx)(_v20, {
              setIsSideNavActive: () => _v13(!0),
              isSideNavActive: _v12,
              fixed: !1,
              children: (0, _v1.jsx)(_v7.Text, {
                variant: "heading-xs",
                color: "text-secondary",
                children: _v9.Organization
              })
            }), (0, _v1.jsx)(_v6.Box, {
              width: "100%",
              maxWidth: (0, _v8.rem)(0),
              margin: "0 auto",
              backgroundColor: "background",
              children: _v5 ? _v0 : (0, _v1.jsx)(_v11.default, {})
            })]
          })
        })]
      });
    };
  _v0.s(["getLayout", 0, function (_v0, _v1) {
    return (0, _v1.jsx)(_v30, {
      organizationUuid: _v1.organizationUuid,
      workspaceUuid: _v1.workspaceUuid,
      workspaceInternalId: _v1.workspaceInternalId,
      children: _v0
    });
  }], 0);
}