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
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  _v0.s(["ShareButton", 0, function ({
    id: _v0 = (0, _v23.createLiveDomName)("share-button"),
    className: _v1 = (0, _v23.createLiveDomName)("share-button"),
    composerSessionContext: {
      sessionId: _v2
    } = (0, _v2.useManager)(_v17.ComposerSessionManager),
    eventSettingsContext: {
      settings: {
        value: _v3
      }
    } = (0, _v2.useManager)(_v18.EventSettingsManager)
  }) {
    let _v4 = (0, _v2.useScope)(),
      {
        trackLiveStreamShareLinkCopied: _v5,
        trackLiveStreamTopBarActionClicked: _v6
      } = (0, _v22.useLiveStreamBroadcasterTracking)(),
      {
        triggerRef: _v7,
        contentRef: _v8,
        isOpen: _v9,
        onTogglePopover: _v10,
        onClosePopover: _v11
      } = (0, _v16.useControlledPopover)(),
      _v12 = _v15.vimeoConfig.PATH.EVENT_VIEWER_PAGE(_v2, _v3?.streamPrivacy?.unlistedHash),
      _v13 = (0, _v3.useMemo)(() => {
        switch (_v3?.streamPrivacy?.view) {
          case _v21.EStreamPrivacy.ANYBODY:
            return _v20.T_LINK_SHARE_PUBLIC;
          case _v21.EStreamPrivacy.PASSWORD:
            return _v20.T_LINK_SHARE_PASSWORD;
          case _v21.EStreamPrivacy.UNLISTED:
            return _v20.T_LINK_SHARE_UNLISTED;
          case _v21.EStreamPrivacy.EMBED_ONLY:
            return _v20.T_LINK_SHARE_EMBED_ONLY;
          default:
            return _v20.T_LINK_SHARE_ONLY_ME;
        }
      }, [_v3?.streamPrivacy?.view]),
      _v14 = (0, _v3.useCallback)(() => {
        _v9 || _v6({
          liveStreamTopBarAction: "share"
        }), _v10();
      }, [_v9, _v10, _v6]),
      _v15 = (0, _v3.useCallback)(async () => {
        _v4.emitSignal({
          type: _v19.ELiveSignal.RIGHT_PANEL_TAB_CHANGE_REQUEST,
          data: _v14.ERightPanelId.EVENT_SETTINGS
        }), await (0, _v4.nextAsyncQueue)(), _v4.emitSignal({
          type: _v19.ELiveSignal.ACCORDION_ITEM_CHANGE_REQUEST,
          data: _v24.EAccordionItemId.PRIVACY
        }), _v11();
      }, [_v11, _v4]);
    return (0, _v1.jsx)(_v11.BokehPopover, {
      isOpen: _v9,
      gutter: 16,
      triggerContent: (0, _v1.jsx)("div", {
        children: (0, _v1.jsx)(_v12.BokehTooltip, {
          placement: "bottom",
          label: _v20.T_SHARE_LINK,
          children: (0, _v1.jsx)(_v10.BokehIconButton, {
            ref: _v7,
            id: _v0,
            className: _v1,
            icon: (0, _v1.jsx)(_v9.Link, {}),
            size: "md",
            variant: "secondary",
            "aria-label": _v20.T_LINK_SHARE,
            onClick: _v14
          })
        })
      }),
      content: (0, _v1.jsxs)(_v6.Flex, {
        ref: _v8,
        id: (0, _v23.createLiveDomName)(_v0, "content"),
        className: (0, _v23.createLiveDomName)(_v1, "content"),
        direction: "column",
        width: (0, _v5.rem)(312),
        padding: (0, _v5.rem)(12),
        gap: (0, _v5.rem)(12),
        children: [(0, _v1.jsx)(_v8.Paragraph, {
          id: (0, _v23.createLiveDomName)(_v0, "header"),
          className: (0, _v23.createLiveDomName)(_v1, "header"),
          size: "sm",
          children: _v13
        }), (0, _v1.jsx)(_v13.CopyField, {
          id: (0, _v23.createLiveDomName)(_v0, "copy-field"),
          className: (0, _v23.createLiveDomName)(_v1, "copy-field"),
          value: _v12,
          inputVariant: "outlined",
          size: "sm",
          copiedMessage: _v20.T_LINK_COPIED,
          onAfterCopyClick: () => {
            _v5();
          }
        }), (0, _v1.jsxs)(_v6.Flex, {
          gap: (0, _v5.rem)(8),
          alignSelf: "end",
          children: [(0, _v1.jsx)(_v7.Button, {
            id: (0, _v23.createLiveDomName)(_v0, "settings-button"),
            className: (0, _v23.createLiveDomName)(_v1, "settings-button"),
            width: "100%",
            variant: "tertiary",
            onClick: _v15,
            children: _v20.T_PRIVACY
          }), (0, _v1.jsx)(_v7.Button, {
            id: (0, _v23.createLiveDomName)(_v0, "preview-button"),
            className: (0, _v23.createLiveDomName)(_v1, "preview-button"),
            width: "100%",
            variant: "secondary",
            onClick: () => window.open(_v12, "_blank"),
            children: _v20.T_PREVIEW
          })]
        })]
      }),
      placement: "bottom-end"
    });
  }], 0), _v0.s(["useIsLiveDemoSubscription", 0, function () {
    let {
      sessionInfo: _v0
    } = (0, _v2.useManager)(_v17.ComposerSessionManager);
    return !!(!_v0.isLoading && !_v0?.value?.owner?.capabilities?.hasLiveSubscription);
  }], 0);
}