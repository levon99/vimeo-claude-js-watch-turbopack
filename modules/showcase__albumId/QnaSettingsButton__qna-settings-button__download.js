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
    _v20 = _v0.i(0);
  _v0.s(["QnaSettingsButton", 0, function ({
    id: _v0 = (0, _v16.createDomName)("qna-settings-button"),
    className: _v1 = (0, _v16.createDomName)("qna-settings-button"),
    buttonIcon: _v2,
    withInteractionSubmenu: _v3 = !1,
    qnaContext: {
      isEventModerated: _v4,
      activeSessionId: _v5,
      qnaSessionsHistory: _v6,
      qnaActions: {
        createQnASession: _v7,
        openQnASession: _v8,
        closeQnASession: _v9
      }
    } = (0, _v2.useManager)(_v13.QnAManager)
  }) {
    let {
        trackLiveStreamQaEnded: _v10,
        trackLiveStreamQaOverflowActionClicked: _v11,
        trackLiveStreamQaStarted: _v12
      } = (0, _v11.useLiveStreamBroadcasterTracking)(),
      _v13 = (0, _v2.useScope)(),
      [_v14, _v15] = (0, _v3.useState)(!1),
      [_v16, _v17] = (0, _v3.useState)(!1),
      {
        triggerRef: _v18,
        contentRef: _v19,
        isOpen: _v20,
        onOpenPopover: _v21,
        onClosePopover: _v22
      } = (0, _v12.useControlledPopover)(),
      _v23 = (0, _v3.useCallback)(() => {
        _v21();
      }, [_v21]),
      _v24 = (0, _v3.useCallback)(() => {
        _v17(!0), _v22();
      }, [_v22]),
      _v25 = (0, _v3.useCallback)(() => _v17(!1), []),
      _v26 = (0, _v3.useCallback)(() => {
        _v11({
          liveStreamQaAction: "download"
        }), (0, _v14.trackExportQna)(), _v17(!1);
      }, [_v11]),
      _v27 = (0, _v3.useCallback)(async () => {
        let {
          activeSessionQuestions: _v0,
          activeSessionPendingQuestions: _v1
        } = _v13.getContextOf(_v13.QnAManager);
        await _v9(), _v10(), (0, _v14.trackClickEndQna)(_v4, Object.keys(_v0).length + Object.keys(_v1).length);
      }, [_v13, _v9, _v4, _v10]),
      _v28 = (0, _v3.useCallback)(async () => {
        if (null !== _v4) try {
          _v15(!0);
          let _v0 = await _v7(_v4);
          await _v8(_v0), _v12();
        } catch (_v0) {
          _v15(!1), _v10.Logger.getGlobal().error("Failed to start qna session:", _v0);
        } finally {
          _v15(!1), (0, _v14.trackClickStartQna)(_v4);
        }
      }, [_v4, _v7, _v8, _v12]),
      _v29 = (0, _v3.useCallback)(() => {
        _v5 ? _v27() : _v28();
      }, [_v5, _v27, _v28]),
      _v30 = (0, _v3.useCallback)(_v0 => {
        _v0.preventDefault();
      }, []);
    return (0, _v1.jsxs)(_v18.LiveErrorBoundary, {
      component: "QnaSettingsButton",
      isDetailed: !1,
      children: [(0, _v1.jsxs)(_v5.Menu, {
        isOpen: _v20,
        placement: "bottom",
        closeOnSelect: !1,
        onOpen: _v23,
        onClose: _v22,
        children: [(0, _v1.jsx)(_v17.BokehTooltip, {
          label: _v20 ? null : _v15.T_SETTINGS,
          placement: "bottom",
          children: (0, _v1.jsx)(_v6.MenuButton, {
            as: _v4.IconButton,
            ref: _v18,
            id: _v0,
            className: _v1,
            "aria-label": "settings",
            icon: _v2,
            size: "sm",
            variant: "tertiary",
            onFocus: _v30
          })
        }), (0, _v1.jsxs)(_v8.MenuList, {
          ref: _v19,
          overflow: "unset",
          width: (0, _v9.rem)(240),
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: (0, _v9.rem)(4)
          },
          children: [(0, _v1.jsx)(_v7.MenuItem, {
            isDisabled: !_v5 && _v14,
            onClick: _v29,
            children: _v5 ? _v15.T_STOP_QNA : _v15.T_START_QNA
          }), (0, _v1.jsx)(_v7.MenuItem, {
            onClick: _v24,
            children: _v15.T_DOWNLOAD
          }), _v3 ? (0, _v1.jsx)(_v1.Fragment, {
            children: (0, _v1.jsx)(_v20.InteractionToolsSubmenu, {
              interactionToolsContext: "qna",
              placement: "right-start",
              onCloseParentMenu: _v22
            })
          }) : null]
        })]
      }), (0, _v1.jsx)(_v19.DownloadModal, {
        header: _v15.T_DOWNLOAD_QNA,
        prefix: "export_qna",
        history: _v6,
        isOpen: _v16,
        onClose: _v25,
        onDownload: _v26
      })]
    });
  }]);
}