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
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  _v0.s(["ChatSettingsButton", 0, function ({
    id: _v0 = (0, _v18.createDomName)("chat-settings-button"),
    className: _v1 = (0, _v18.createDomName)("chat-settings-button"),
    withInteractionSubmenu: _v2 = !1,
    buttonIcon: _v3,
    chatContext: {
      chatSessionsHistory: _v4,
      isEnabled: _v5,
      chatActions: {
        enableChat: _v6,
        disableChat: _v7
      }
    } = (0, _v2.useManager)(_v15.ChatManager)
  }) {
    let {
        trackLiveStreamChatToggled: _v8,
        trackLiveStreamChatOverflowActionClicked: _v9
      } = (0, _v13.useLiveStreamBroadcasterTracking)(),
      [_v10, _v11] = (0, _v3.useState)(!1),
      {
        triggerRef: _v12,
        contentRef: _v13,
        isOpen: _v14,
        onOpenPopover: _v15,
        onClosePopover: _v16
      } = (0, _v14.useControlledPopover)(),
      _v17 = (0, _v3.useCallback)(() => {
        _v8({
          liveStreamNewStatus: !_v5
        }), _v5 ? ((0, _v16.trackDisableAudienceChat)(), _v7()) : ((0, _v16.trackEnableAudienceChat)(), _v6());
      }, [_v7, _v6, _v5, _v8]),
      _v18 = (0, _v3.useCallback)(() => {
        _v15();
      }, [_v15]),
      _v19 = (0, _v3.useCallback)(() => {
        _v11(!0), _v16();
      }, [_v16]),
      _v20 = (0, _v3.useCallback)(() => _v11(!1), []),
      _v21 = (0, _v3.useCallback)(() => {
        _v9({
          liveStreamChatAction: "download"
        }), (0, _v16.trackExportChat)(), _v11(!1);
      }, [_v9]),
      _v22 = (0, _v3.useCallback)(_v0 => {
        _v0.preventDefault();
      }, []);
    return (0, _v1.jsxs)(_v20.LiveErrorBoundary, {
      component: "ChatSettingsButton",
      isDetailed: !1,
      children: [(0, _v1.jsxs)(_v5.Menu, {
        isOpen: _v14,
        placement: "bottom",
        closeOnSelect: !1,
        onOpen: _v18,
        onClose: _v16,
        children: [(0, _v1.jsx)(_v19.BokehTooltip, {
          label: _v14 ? null : _v17.T_SETTINGS,
          placement: "bottom",
          children: (0, _v1.jsx)(_v6.MenuButton, {
            as: _v4.IconButton,
            ref: _v12,
            id: _v0,
            className: _v1,
            "aria-label": "settings",
            icon: _v3,
            size: "sm",
            variant: "tertiary",
            onFocus: _v22
          })
        }), (0, _v1.jsxs)(_v7.MenuList, {
          ref: _v13,
          overflow: "unset",
          width: (0, _v12.rem)(240),
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: (0, _v12.rem)(4)
          },
          children: [(0, _v1.jsx)(_v8.MenuItem, {
            children: (0, _v1.jsxs)(_v9.FormControl, {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              children: [(0, _v1.jsx)(_v10.FormLabel, {
                htmlFor: "audience-chat",
                marginBottom: 0,
                children: _v17.T_AUDIENCE_CHAT
              }), (0, _v1.jsx)(_v11.Switch, {
                id: "audience-chat",
                size: "sm",
                isChecked: !!_v5,
                onChange: _v17
              })]
            })
          }), (0, _v1.jsx)(_v8.MenuItem, {
            onClick: _v19,
            children: _v17.T_DOWNLOAD
          }), _v2 ? (0, _v1.jsx)(_v1.Fragment, {
            children: (0, _v1.jsx)(_v22.InteractionToolsSubmenu, {
              interactionToolsContext: "chat",
              placement: "left-start",
              onCloseParentMenu: _v16
            })
          }) : null]
        })]
      }), (0, _v1.jsx)(_v21.DownloadModal, {
        header: _v17.T_DOWNLOAD,
        prefix: "export_chat",
        history: _v4,
        isOpen: _v10,
        onClose: _v20,
        onDownload: _v21
      })]
    });
  }]);
}