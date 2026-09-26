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
  function _v19() {
    let {
        mutate: _v0
      } = (0, _v16.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v18.useGctlConfig)(),
      [_v5, _v6] = (0, _v17.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/interaction_rooms/${_v0.where.roomType}/${_v0.where.roomId}/embed_code${(0, _v17.serializeQuery)(_v0)}`, (0, _v14.getInteractionRoomRoomIdEmbedCode)({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v13.default.env.STORYBOOK && (0, _v17.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v18.useGctlConfig)();
    return (0, _v15.default)(_v2 ? `/interaction_rooms/${_v2.where.roomType}/${_v2.where.roomId}/embed_code${(0, _v17.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v14.getInteractionRoomRoomIdEmbedCode)({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/interaction_rooms/:roomType/:roomId/embed_code",
    method: "GET"
  }), "true" === _v13.default.env.STORYBOOK && (0, _v17.assignMswData)(_v19, {
    endpoint: "/interaction_rooms/:roomType/:roomId/embed_code",
    method: "GET"
  });
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  _v0.s(["InteractionToolsSubmenu", 0, function ({
    placement: _v0,
    onCloseParentMenu: _v1,
    interactionToolsContext: _v2
  }) {
    let {
        trackLiveStreamChatOverflowActionClicked: _v3,
        trackLiveStreamQaOverflowActionClicked: _v4
      } = (0, _v9.useLiveStreamBroadcasterTracking)(),
      {
        triggerRef: _v5,
        contentRef: _v6,
        isOpen: _v7,
        onOpenPopover: _v8,
        onClosePopover: _v9
      } = (0, _v10.useControlledPopover)(),
      {
        isLoading: _v10,
        value: _v11,
        hasCopied: _v12,
        onCopy: _v13,
        hasCopiedOverlay: _v14,
        onCopyOverlay: _v15
      } = function () {
        let {
            initialState: {
              sessionType: _v0,
              sessionId: _v1
            }
          } = (0, _v20.useLiveGlobals)(),
          {
            colorMode: _v2
          } = (0, _v11.useColorMode)(),
          {
            onCopy: _v3,
            value: _v4,
            setValue: _v5,
            hasCopied: _v6
          } = (0, _v12.useClipboard)(""),
          {
            onCopy: _v7,
            setValue: _v8,
            hasCopied: _v9
          } = (0, _v12.useClipboard)(""),
          [_v10, {
            called: _v11,
            loading: _v12,
            data: _v13,
            error: _v14
          }] = _v19();
        return (0, _v2.useEffect)(() => {
          _v0 && _v1 && _v10 && _v10({
            select: ["url"],
            where: {
              roomType: _v0,
              roomId: String(_v1)
            },
            query: {
              module: "auto",
              theme: _v2
            }
          });
        }, [_v2, _v10, _v1, _v0]), (0, _v2.useEffect)(() => {
          if (_v11 && !_v12 && !_v14 && _v13?.url) {
            var _v0;
            _v5(_v13.url), _v8((_v0 = _v13.url, `${_v0}${_v0.includes("?") ? "&" : "?"}${_v21.liveQueryConfig.INTERACTION.OVERLAY}=true`));
          }
        }, [_v11, _v13, _v14, _v12, _v5, _v8]), (0, _v2.useMemo)(() => ({
          isLoading: _v12,
          value: _v4,
          onCopy: _v3,
          hasCopied: _v6,
          onCopyOverlay: _v7,
          hasCopiedOverlay: _v9
        }), [_v12, _v4, _v6, _v3, _v9, _v7]);
      }(),
      _v16 = (0, _v22.useSimpleNotification)(),
      _v17 = (0, _v2.useCallback)(async () => {
        "chat" === _v2 ? _v3({
          liveStreamChatAction: "copy_link"
        }) : "qna" === _v2 && _v4({
          liveStreamQaAction: "copy_link"
        }), _v13();
      }, [_v2, _v13, _v3, _v4]),
      _v18 = (0, _v2.useCallback)(() => {
        _v15();
      }, [_v15]),
      _v19 = (0, _v2.useCallback)(async () => {
        "chat" === _v2 ? _v3({
          liveStreamChatAction: "open_in_new_tab"
        }) : "qna" === _v2 && _v4({
          liveStreamQaAction: "open_in_new_tab"
        }), (0, _v24.openNewFocusedTab)(_v11), _v9(), _v1();
      }, [_v2, _v1, _v9, _v3, _v4, _v11]);
    return (0, _v2.useEffect)(() => {
      (_v12 || _v14) && (_v9(), _v1(), _v16({
        message: _v23.T_LINK_COPIED
      }));
    }, [_v12, _v14, _v16, _v1, _v9]), (0, _v1.jsxs)(_v3.Menu, {
      isOpen: _v7,
      placement: _v0,
      closeOnSelect: !1,
      onOpen: _v8,
      onClose: _v9,
      children: [(0, _v1.jsx)(_v4.MenuButton, {
        as: _v5.MenuItem,
        ref: _v5,
        command: (0, _v1.jsx)(_v8.ChevronRightSmall, {
          boxSize: (0, _v7.rem)(20)
        }),
        commandSpacing: 0,
        children: _v23.T_ENGAGEMENT_TOOLS
      }), (0, _v1.jsxs)(_v6.MenuList, {
        ref: _v6,
        width: (0, _v7.rem)(168),
        children: [(0, _v1.jsx)(_v5.MenuItem, {
          isDisabled: _v10,
          onClick: _v17,
          children: _v23.T_COPY_LINK
        }), (0, _v1.jsx)(_v5.MenuItem, {
          isDisabled: _v10,
          onClick: _v18,
          children: _v23.T_COPY_OVERLAY_LINK
        }), (0, _v1.jsx)(_v5.MenuItem, {
          isDisabled: _v10,
          onClick: _v19,
          children: _v23.T_OPEN_IN_NEW_TAB
        })]
      })]
    });
  }], 0);
}