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
  _v0.s(["PollSettingsButton", 0, function ({
    id: _v0 = (0, _v13.createDomName)("poll-settings-button"),
    className: _v1 = (0, _v13.createDomName)("poll-settings-button"),
    withInteractionSubmenu: _v2 = !1,
    buttonIcon: _v3,
    pollContext: {
      pollsHistory: _v4
    } = (0, _v2.useManager)(_v11.PollManager, ({
      pollsHistory: _v0
    }) => [_v0])
  }) {
    let {
        triggerRef: _v5,
        contentRef: _v6,
        isOpen: _v7,
        onOpenPopover: _v8,
        onClosePopover: _v9
      } = (0, _v10.useControlledPopover)(),
      [_v10, _v11] = (0, _v3.useState)(!1),
      _v12 = (0, _v3.useCallback)(() => _v11(!1), []),
      _v13 = (0, _v3.useCallback)(() => {
        _v11(!0), _v9();
      }, [_v9]),
      _v14 = (0, _v3.useCallback)(() => {
        _v11(!1);
      }, []),
      _v15 = (0, _v3.useCallback)(_v0 => {
        _v0.preventDefault();
      }, []);
    return (0, _v1.jsxs)(_v15.LiveErrorBoundary, {
      component: "PollSettingsButton",
      isDetailed: !1,
      children: [(0, _v1.jsxs)(_v5.Menu, {
        isOpen: _v7,
        placement: "bottom",
        closeOnSelect: !1,
        onOpen: _v8,
        onClose: _v9,
        children: [(0, _v1.jsx)(_v14.BokehTooltip, {
          label: _v7 ? null : _v12.T_SETTINGS,
          placement: "bottom",
          children: (0, _v1.jsx)(_v6.MenuButton, {
            as: _v4.IconButton,
            ref: _v5,
            id: _v0,
            className: _v1,
            "aria-label": "settings",
            icon: _v3,
            size: "sm",
            variant: "tertiary",
            onFocus: _v15
          })
        }), (0, _v1.jsxs)(_v8.MenuList, {
          ref: _v6,
          overflow: "unset",
          width: (0, _v9.rem)(240),
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: (0, _v9.rem)(4)
          },
          children: [(0, _v1.jsx)(_v7.MenuItem, {
            onClick: _v13,
            children: _v12.T_DOWNLOAD
          }), _v2 ? (0, _v1.jsx)(_v17.InteractionToolsSubmenu, {
            placement: "right-start",
            onCloseParentMenu: _v9
          }) : null]
        })]
      }), (0, _v1.jsx)(_v16.DownloadModal, {
        header: _v12.T_DOWNLOAD,
        prefix: "export_poll",
        history: _v4,
        isOpen: _v10,
        onClose: _v12,
        onDownload: _v14
      })]
    });
  }]);
}