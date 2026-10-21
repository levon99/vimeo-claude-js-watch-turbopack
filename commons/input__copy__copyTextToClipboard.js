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
  function _v19(_v0) {
    if (!document) return;
    let _v1 = document.createElement("input");
    _v1.value = _v0, document.body.appendChild(_v1), _v1.select(), document.execCommand("copy"), document.body.removeChild(_v1);
  }
  _v0.s(["copyTextToClipboard", 0, _v19], 0);
  var _v20 = _v0.i(0);
  function _v21({
    id: _v0,
    className: _v1 = (0, _v20.createDomName)("copy-field"),
    isDisabled: _v2,
    isPassword: _v3,
    title: _v4,
    value: _v5,
    placeholder: _v6,
    size: _v7,
    inputVariant: _v8 = "default",
    copiedMessage: _v9,
    onCopyClick: _v10,
    onAfterCopyClick: _v11,
    copyButton: _v12
  }) {
    let [_v13, _v14] = (0, _v3.useState)(!1),
      _v15 = (0, _v16.useToast)(),
      _v16 = "sm" === _v7 ? (0, _v5.rem)(20) : _v7,
      _v17 = !!(_v3 && !_v13),
      _v18 = (0, _v3.useCallback)(() => _v14(!0), []),
      _v19 = (0, _v3.useCallback)(() => _v14(!1), []),
      _v20 = (0, _v3.useCallback)(() => {
        _v10 ? _v10() : _v5 && _v19(_v5), _v9 && _v5 && _v15({
          title: _v9
        }), _v11 && _v11();
      }, [_v5, _v9, _v15, _v11, _v10]);
    return (0, _v1.jsxs)(_v6.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      alignItems: "flex-start",
      gap: (0, _v5.rem)(8),
      children: [_v4, (0, _v1.jsxs)(_v14.InputGroup, {
        id: (0, _v20.createDomName)(_v0, "input-group"),
        className: (0, _v20.createDomName)(_v1, "input-group"),
        display: "flex",
        borderRadius: "input-md",
        size: _v7,
        onFocus: _v18,
        onBlur: _v19,
        children: [(0, _v1.jsx)(_v13.Input, {
          id: (0, _v20.createDomName)(_v0, "input"),
          className: (0, _v20.createDomName)(_v1, "input"),
          isDisabled: !!_v2,
          value: _v17 && _v6 ? _v6 : _v5 ?? "",
          isReadOnly: !0,
          type: _v17 ? "password" : void 0,
          variant: _v8,
          textOverflow: _v3 ? void 0 : "ellipsis",
          size: _v7
        }), (0, _v1.jsx)(_v15.InputRightElement, {
          cursor: "pointer",
          overflow: "hidden",
          borderRightRadius: "sm" === _v7 ? (0, _v5.rem)(8) : (0, _v5.rem)(12),
          onClick: _v20,
          children: _v12 || (0, _v1.jsx)(_v17.Center, {
            width: "100%",
            height: "100%",
            _hover: {
              background: "text-primary",
              svg: {
                color: "background"
              }
            },
            borderRightRadius: (0, _v5.rem)("sm" === _v7 ? 2 : 4),
            children: (0, _v1.jsx)(_v18.CopyPortrait, {
              color: "text-primary",
              boxSize: _v16
            })
          })
        })]
      })]
    });
  }
  _v0.s(["CopyField", 0, _v21], 0);
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  _v0.s(["ShareButton", 0, function ({
    id: _v0 = (0, _v31.createLiveDomName)("share-button"),
    className: _v1 = (0, _v31.createLiveDomName)("share-button"),
    composerSessionContext: {
      sessionId: _v2
    } = (0, _v2.useManager)(_v25.ComposerSessionManager),
    eventSettingsContext: {
      settings: {
        value: _v3
      }
    } = (0, _v2.useManager)(_v26.EventSettingsManager)
  }) {
    let _v4 = (0, _v2.useScope)(),
      {
        trackLiveStreamShareLinkCopied: _v5,
        trackLiveStreamTopBarActionClicked: _v6
      } = (0, _v30.useLiveStreamBroadcasterTracking)(),
      {
        triggerRef: _v7,
        contentRef: _v8,
        isOpen: _v9,
        onTogglePopover: _v10,
        onClosePopover: _v11
      } = (0, _v24.useControlledPopover)(),
      _v12 = _v23.vimeoConfig.PATH.EVENT_VIEWER_PAGE(_v2, _v3?.streamPrivacy?.unlistedHash),
      _v13 = (0, _v3.useMemo)(() => {
        switch (_v3?.streamPrivacy?.view) {
          case _v29.EStreamPrivacy.ANYBODY:
            return _v28.T_LINK_SHARE_PUBLIC;
          case _v29.EStreamPrivacy.PASSWORD:
            return _v28.T_LINK_SHARE_PASSWORD;
          case _v29.EStreamPrivacy.UNLISTED:
            return _v28.T_LINK_SHARE_UNLISTED;
          case _v29.EStreamPrivacy.EMBED_ONLY:
            return _v28.T_LINK_SHARE_EMBED_ONLY;
          default:
            return _v28.T_LINK_SHARE_ONLY_ME;
        }
      }, [_v3?.streamPrivacy?.view]),
      _v14 = (0, _v3.useCallback)(() => {
        _v9 || _v6({
          liveStreamTopBarAction: "share"
        }), _v10();
      }, [_v9, _v10, _v6]),
      _v15 = (0, _v3.useCallback)(async () => {
        _v4.emitSignal({
          type: _v27.ELiveSignal.RIGHT_PANEL_TAB_CHANGE_REQUEST,
          data: _v22.ERightPanelId.EVENT_SETTINGS
        }), await (0, _v4.nextAsyncQueue)(), _v4.emitSignal({
          type: _v27.ELiveSignal.ACCORDION_ITEM_CHANGE_REQUEST,
          data: _v32.EAccordionItemId.PRIVACY
        }), _v11();
      }, [_v11, _v4]);
    return (0, _v1.jsx)(_v11.BokehPopover, {
      isOpen: _v9,
      gutter: 16,
      triggerContent: (0, _v1.jsx)("div", {
        children: (0, _v1.jsx)(_v12.BokehTooltip, {
          placement: "bottom",
          label: _v28.T_SHARE_LINK,
          children: (0, _v1.jsx)(_v10.BokehIconButton, {
            ref: _v7,
            id: _v0,
            className: _v1,
            icon: (0, _v1.jsx)(_v9.Link, {}),
            size: "md",
            variant: "secondary",
            "aria-label": _v28.T_LINK_SHARE,
            onClick: _v14
          })
        })
      }),
      content: (0, _v1.jsxs)(_v6.Flex, {
        ref: _v8,
        id: (0, _v31.createLiveDomName)(_v0, "content"),
        className: (0, _v31.createLiveDomName)(_v1, "content"),
        direction: "column",
        width: (0, _v5.rem)(312),
        padding: (0, _v5.rem)(12),
        gap: (0, _v5.rem)(12),
        children: [(0, _v1.jsx)(_v8.Paragraph, {
          id: (0, _v31.createLiveDomName)(_v0, "header"),
          className: (0, _v31.createLiveDomName)(_v1, "header"),
          size: "sm",
          children: _v13
        }), (0, _v1.jsx)(_v21, {
          id: (0, _v31.createLiveDomName)(_v0, "copy-field"),
          className: (0, _v31.createLiveDomName)(_v1, "copy-field"),
          value: _v12,
          inputVariant: "outlined",
          size: "sm",
          copiedMessage: _v28.T_LINK_COPIED,
          onAfterCopyClick: () => {
            _v5();
          }
        }), (0, _v1.jsxs)(_v6.Flex, {
          gap: (0, _v5.rem)(8),
          alignSelf: "end",
          children: [(0, _v1.jsx)(_v7.Button, {
            id: (0, _v31.createLiveDomName)(_v0, "settings-button"),
            className: (0, _v31.createLiveDomName)(_v1, "settings-button"),
            width: "100%",
            variant: "tertiary",
            onClick: _v15,
            children: _v28.T_PRIVACY
          }), (0, _v1.jsx)(_v7.Button, {
            id: (0, _v31.createLiveDomName)(_v0, "preview-button"),
            className: (0, _v31.createLiveDomName)(_v1, "preview-button"),
            width: "100%",
            variant: "secondary",
            onClick: () => window.open(_v12, "_blank"),
            children: _v28.T_PREVIEW
          })]
        })]
      }),
      placement: "bottom-end"
    });
  }], 0);
}