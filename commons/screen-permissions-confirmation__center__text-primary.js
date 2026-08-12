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
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  function _v26({
    id: _v0 = (0, _v24.createLiveDomName)("screen-permissions-confirmation"),
    roomScreenShareContext: {
      pendingScreenShareId: _v1,
      roomScreenShareActions: _v2,
      canModerateActiveSharing: _v3
    } = (0, _v2.useManager)(_v21.RoomScreenShareManager),
    guestsContext: {
      guests: _v4
    } = (0, _v2.useManager)(_v20.GuestsManager)
  }) {
    let [_v5, _v6] = (0, _v19.useState)(!1),
      _v7 = (0, _v19.useCallback)(() => {
        _v6(!0), _v2.confirmPermissions(_v1).finally(() => {
          _v6(!1), (0, _v22.trackAllowSpeakerToScreenshare)();
        });
      }, [_v1, _v2]),
      _v8 = !!_v1,
      _v9 = (0, _v23.parseUidFromAgora)(_v1),
      _v10 = _v9 ? _v4[_v9] : null,
      _v11 = _v10 ? _v10.name : "?";
    return _v8 && _v3 ? (0, _v1.jsxs)(_v4.Modal, {
      id: _v0,
      isOpen: !0,
      size: "sm",
      onClose: _v17.CallablePlaceholder,
      children: [(0, _v1.jsx)(_v6.ModalOverlay, {}), (0, _v1.jsxs)(_v5.ModalContent, {
        alignItems: "center",
        justifyContent: "center",
        color: "text-primary",
        padding: (0, _v3.rem)(24),
        gap: (0, _v3.rem)(12),
        children: [(0, _v1.jsx)(_v7.Header, {
          width: "100%",
          size: "md",
          children: _v25.translations.guestScreenShareRequest(_v11)
        }), (0, _v1.jsxs)(_v10.Flex, {
          width: "100%",
          justifyContent: "flex-end",
          gap: (0, _v3.rem)(8),
          children: [(0, _v1.jsx)(_v9.Button, {
            size: "sm",
            variant: "secondary",
            isLoading: _v5,
            onClick: _v2.declinePermissions,
            children: _v15.T_CANCEL
          }), (0, _v1.jsx)(_v9.Button, {
            size: "sm",
            variant: "primary",
            isLoading: _v5,
            onClick: _v7,
            children: _v25.translations.allow
          })]
        })]
      })]
    }) : null;
  }
  _v0.s(["GlobalConfirmations", 0, function ({
    notificationContext: {
      notificationActions: _v0,
      confirmationNotification: _v1
    } = (0, _v2.useManager)(_v14.NotificationManager)
  }) {
    let {
      initialState: {
        sessionApplicationType: _v2
      }
    } = (0, _v13.useLiveGlobals)();
    return _v1?.variant === _v18.EConfirmationVariant.GLOBAL ? (0, _v1.jsxs)(_v4.Modal, {
      id: (0, _v24.createLiveDomName)("global-notification"),
      isOpen: !0,
      onClose: _v17.CallablePlaceholder,
      children: [(0, _v1.jsx)(_v6.ModalOverlay, {}), (0, _v1.jsxs)(_v5.ModalContent, {
        alignItems: "center",
        justifyContent: "flex-start",
        color: "text-primary",
        padding: (0, _v3.rem)(24),
        gap: (0, _v3.rem)(12),
        width: _v1?.modalWidth ? (0, _v3.rem)(_v1.modalWidth) : (0, _v3.rem)(340),
        children: [_v1?.showDismissButton ? (0, _v1.jsx)(_v11.IconButton, {
          "aria-label": "dismiss",
          position: "absolute",
          variant: "tertiary",
          size: "sm",
          top: (0, _v3.rem)(16),
          right: (0, _v3.rem)(16),
          icon: (0, _v1.jsx)(_v12.CloseX, {}),
          onClick: _v0.declineConfirmationNotification
        }) : null, "string" == typeof _v1?.header ? (0, _v1.jsx)(_v7.Header, {
          width: "100%",
          size: "md",
          children: _v1?.header
        }) : _v1?.header, "string" == typeof _v1?.body ? (0, _v1.jsx)(_v8.Paragraph, {
          width: "100%",
          size: "md",
          children: _v1?.body
        }) : _v1?.body, (0, _v1.jsxs)(_v10.Flex, {
          justifyContent: "flex-end",
          width: "100%",
          marginTop: (0, _v3.rem)(8),
          gap: (0, _v3.rem)(8),
          children: [_v1?.declineMessage !== null ? (0, _v1.jsx)(_v9.Button, {
            variant: "secondary",
            onClick: _v0.declineConfirmationNotification,
            children: _v1?.declineMessage || _v15.T_CANCEL
          }) : null, (0, _v1.jsx)(_v9.Button, {
            variant: "primary",
            onClick: _v0.confirmConfirmationNotification,
            children: _v1?.confirmMessage || _v25.translations.confirm
          })]
        })]
      })]
    }) : _v2 === _v16.EComposerApplicationType.BROADCASTER ? (0, _v1.jsx)(_v26, {
      id: (0, _v24.createLiveDomName)("screen-permission-notification")
    }) : null;
  }], 0);
}