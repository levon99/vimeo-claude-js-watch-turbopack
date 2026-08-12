{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = ((_v1 = {}).VIDEO_PICKER_MODAL = "VIDEO_PICKER_MODAL", _v1);
  class _v10 extends _v3.ContextManager {
    context = {
      notificationActions: (0, _v3.createActions)({
        clearConfirmationNotification: () => this.clearConfirmationNotification(),
        openModalWithId: _v0 => this.openModalWithId(_v0),
        closeModalWithId: _v0 => this.closeModalWithId(_v0),
        declineConfirmationNotification: () => this.declineConfirmationNotification(),
        confirmConfirmationNotification: () => this.confirmConfirmationNotification(),
        showSimpleNotification: _v0 => this.showSimpleNotification(_v0),
        clearSimpleNotification: () => this.clearSimpleNotification(),
        setNoticeVisibility: (_v0, _v1) => this.setNoticeVisibility(_v0, _v1)
      }),
      confirmationNotification: null,
      simpleNotification: null,
      openedModalsIds: [],
      notices: {
        VIDEO_PLAY_CONTROLS: null
      }
    };
    log = new _v4.Logger("🦍NM");
    openModalWithId(_v0) {
      this.log.info("Opening global modal:", _v0), this.setContext({
        openedModalsIds: [...this.context.openedModalsIds, _v0]
      });
    }
    closeModalWithId(_v0) {
      this.log.info("Closing global modal:", _v0), this.setContext({
        openedModalsIds: this.context.openedModalsIds.filter(_v0 => _v0 !== _v0)
      });
    }
    clearConfirmationNotification() {
      this.setContext({
        confirmationNotification: null
      });
    }
    clearSimpleNotification() {
      this.setContext({
        simpleNotification: null
      });
    }
    declineConfirmationNotification() {
      let {
        confirmationNotification: _v0
      } = this.context;
      _v0 && (setTimeout(_v0.onDecline || _v7.CallablePlaceholder), this.setContext({
        confirmationNotification: null
      }));
    }
    confirmConfirmationNotification() {
      let {
        confirmationNotification: _v0
      } = this.context;
      _v0 && (setTimeout(_v0.onConfirm), this.setContext({
        confirmationNotification: null
      }));
    }
    showSimpleNotification(_v0) {
      this.setContext({
        simpleNotification: _v0
      });
    }
    setNoticeVisibility(_v0, _v1) {
      this.setContext({
        notices: {
          ...this.context.notices,
          [_v0]: _v1
        }
      });
    }
    showConfirmationNotification(_v0) {
      this.setContext({
        confirmationNotification: {
          ..._v0,
          variant: _v0.variant || _v8.EConfirmationVariant.GLOBAL
        }
      });
    }
    onConfirmationNeeded(_v0) {
      let {
        data: _v1
      } = _v0;
      _v1 ? (this.log.info("Confirmation notification received:", _v1), this.showConfirmationNotification(_v1)) : this.log.error("Tried to show invalid notification with a signal");
    }
    onShowNotification(_v0) {
      let {
        data: _v1
      } = _v0;
      _v1 ? this.showSimpleNotification(_v1) : this.log.error("Tried to show invalid notification with a signal");
    }
    onConfirmationClear(_v0) {
      let {
          data: _v1
        } = _v0,
        {
          confirmationNotification: _v2
        } = this.context;
      _v2 && (_v1 && _v2.type !== _v1 || this.setContext({
        confirmationNotification: null
      }));
    }
    onLocalMediaDeviceOccupied() {
      let _v0 = {
        type: _v8.EConfirmationType.MEDIA_DEVICE_OCCUPIED_BY_ANOTHER_APPLICATION,
        body: _v6.T_CANT_CONNECT_TO_DEVICES,
        header: _v6.T_DEVICES_IN_USE,
        declineMessage: null,
        confirmMessage: _v6.T_OK,
        modalWidth: 390
      };
      this.showConfirmationNotification(_v0);
    }
    onAdminConnectionTypeDetected(_v0) {
      let {
          data: {
            switchToBroadcasterMode: _v1
          }
        } = _v0,
        _v2 = {
          type: _v8.EConfirmationType.ADMIN_CONNECTION_DETECTED,
          body: _v6.T_YOU_CAN_MANAGE_EVENT,
          onDecline: _v1,
          header: _v6.T_YOU_ARE_OFF_CAMERA_AND_MUTED,
          confirmMessage: _v6.T_GOT_IT,
          declineMessage: _v6.T_SWITCH_CAMERA,
          modalWidth: 390
        };
      this.showConfirmationNotification(_v2);
    }
    onShowVideoActionButtonsDisabledNotice() {
      null === this.context.notices.VIDEO_PLAY_CONTROLS && this.setNoticeVisibility("VIDEO_PLAY_CONTROLS", !0);
    }
  }
  (0, _v2._)([(0, _v3.OnSignal)(_v5.ELiveSignal.CONFIRMATION_NOTIFICATION)], _v10.prototype, "onConfirmationNeeded", null), (0, _v2._)([(0, _v3.OnSignal)(_v5.ELiveSignal.SHOW_SIMPLE_NOTIFICATION)], _v10.prototype, "onShowNotification", null), (0, _v2._)([(0, _v3.OnSignal)(_v5.ELiveSignal.CONFIRMATION_NOTIFICATION_CLEAR)], _v10.prototype, "onConfirmationClear", null), (0, _v2._)([(0, _v3.OnSignal)(_v5.EAgoraSignal.LOCAL_MEDIA_DEVICE_OCCUPIED_BY_ANOTHER_APP)], _v10.prototype, "onLocalMediaDeviceOccupied", null), (0, _v2._)([(0, _v3.OnSignal)(_v5.ELiveSignal.ADMIN_CONNECTION_TYPE_DETECTED)], _v10.prototype, "onAdminConnectionTypeDetected", null), (0, _v2._)([(0, _v3.OnSignal)(_v5.ELiveGraphicsSignal.SHOW_VIDEO_PLAY_CONTROLS_DISABLED_NOTICE)], _v10.prototype, "onShowVideoActionButtonsDisabledNotice", null), _v0.s(["EGlobalModalId", () => _v9, "NotificationManager", 0, _v10]);
}