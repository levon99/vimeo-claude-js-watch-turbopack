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
    _v10 = _v0.i(474),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  _v0.s(["default", 0, ({
    disabled: _v0 = !1,
    onClick: _v1,
    privacy: _v2
  }) => {
    let _v3 = (0, _v2.useRouter)(),
      _v4 = (0, _v14.useViewer)(),
      _v5 = (0, _v12.useDefaultPrivacyOptions)(_v4, !1).find(_v0 => _v0.privacy === _v2),
      _v6 = (0, _v10.useMediaQueryVisibility)(`screen and (min-width: ${(0, _v7.rem)(_v15.BREAKPOINTS.large)})`),
      {
        icon: _v7,
        label: _v8
      } = (0, _v3.useMemo)(() => ({
        icon: _v13.VIDEO_PRIVACY_ICON_MAP[_v2]?.icon ?? ("ptv" === _v2 || "ptvhide" === _v2 ? (0, _v1.jsx)(_v8.OnDemand, {}) : (0, _v1.jsx)(_v9.Lock, {})),
        label: _v5?.title ?? ("ptv" === _v2 || "ptvhide" === _v2 ? "VOD" : "Privacy")
      }), [_v2, _v5?.title]);
    return (0, _v1.jsx)(_v6.Tooltip, {
      placement: "bottom",
      label: (0, _v11.translate)({
        singular: "Manage privacy",
        dictionary: {
          es: {
            singular: "Gestionar privacidad"
          },
          "de-DE": {
            singular: "Datenschutzeinstellungen verwalten"
          },
          "fr-FR": {
            singular: "Gérer la confidentialité"
          },
          "ja-JP": {
            singular: "プライバシーを管理"
          },
          "ko-KR": {
            singular: "프라이버시 관리"
          },
          "pt-BR": {
            singular: "Gerenciar privacidade"
          },
          "zh-CN": {
            singular: "管理隐私"
          }
        }
      }),
      children: (0, _v1.jsx)(_v1.Fragment, {
        children: _v6 ? (0, _v1.jsx)(_v5.Button, {
          isDisabled: _v0,
          leftIcon: _v7,
          onClick: _v1,
          variant: _v3.pathname.includes("/privacy") ? "secondary" : "tertiary",
          id: "privacy-status-button",
          "data-id": "header_video_privacy_button",
          "aria-label": "privacy-status",
          children: _v8
        }) : (0, _v1.jsx)(_v4.IconButton, {
          isDisabled: _v0,
          icon: _v7,
          onClick: _v1,
          variant: _v3.pathname.includes("/privacy") ? "secondary" : "tertiary",
          id: "privacy-status-button",
          "data-id": "header_video_privacy_button",
          "aria-label": "privacy-status"
        })
      })
    });
  }], 0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = `${_v20.Duration.xl}s cubic-bezier(${_v20.Easing["basic-entrance"].join(", ")})`;
  _v0.s(["SideDrawer", 0, ({
    children: _v0,
    side: _v1 = "left",
    isTwoColumn: _v2,
    portalRef: _v3,
    isOpen: _v4,
    onClose: _v5
  }) => {
    let _v6,
      _v7 = (0, _v16.useBreakpointValue)({
        base: "bottom",
        md: _v1
      }),
      _v8 = _v3?.current ? _v3.current.getBoundingClientRect().top : 64,
      _v9 = (_v6 = _v3?.current ? _v3.current.getBoundingClientRect().left : 80, {
        right: {
          margin: (0, _v7.rem)(16),
          top: `${(0, _v7.rem)(_v8)} !important`
        },
        left: {
          margin: (0, _v7.rem)(16),
          ml: 0,
          top: `${(0, _v7.rem)(_v8)} !important`,
          left: `${(0, _v7.rem)(_v6)} !important`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "transparent"
        },
        bottom: {
          maxW: "100vw",
          mb: 0,
          top: `${(0, _v7.rem)(_v8)} !important`
        },
        landscape: {
          top: (0, _v7.rem)(64)
        }
      }),
      _v10 = {
        '&[data-placement="right"]': _v9.right,
        '&[data-placement="left"]': _v9.left,
        '&[data-placement="bottom"]': _v9.bottom,
        "@media screen and (max-width: 767px) and (orientation: landscape)": {
          '&[data-placement="bottom"]': _v9.landscape
        },
        "z-index": "var(--vimeo-zIndices-dropdown)"
      },
      _v11 = (0, _v1.jsx)(_v17.Drawer, {
        isOpen: _v4,
        placement: _v7,
        onClose: _v5,
        blockScrollOnMount: !1,
        trapFocus: !1,
        children: (0, _v1.jsx)(_v18.DrawerContent, {
          maxW: _v2 ? (0, _v7.rem)(720) : (0, _v7.rem)(360),
          sx: _v10,
          transition: `max-width ${_v21}`,
          containerProps: {
            zIndex: "var(--vimeo-zIndices-dropdown)"
          },
          children: _v0
        })
      });
    return _v3 && _v3.current ? (0, _v1.jsx)(_v19.Portal, {
      containerRef: _v3,
      children: _v11
    }) : _v11;
  }], 0);
}