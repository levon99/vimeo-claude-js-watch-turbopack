{
  "use strict";

  var _v1,
    _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  async function _v8(_v0, _v1) {
    var _v2;
    _v0.log.info("Adding guest seat:", _v1), _v0.assertIsInitialized(), _v0.assertConnectionsAreInitialized();
    let _v3 = await (_v2 = {
      gctlConfig: (0, _v3.queryManagerGctlConfig)(_v0),
      connection: _v0.connections.guests
    }, (0, _v4.withConnectionSupport)(_v5.ERequestMethod.POST, _v2, ({
      liveEventId: _v0
    }) => ({
      path: `/live_events/${_v0}/guests`
    }), {
      body: _v1
    }));
    return _v0.log.info("Added guest seat", _v3), _v0.emitSignal({
      type: _v7.ELiveGraphicsSignal.GUEST_UPDATED,
      data: _v3.seat
    }), _v3;
  }
  async function _v9(_v0, _v1, _v2) {
    var _v3;
    _v0.log.info("Updating guest seat:", _v1, _v2), _v0.assertIsInitialized(), _v0.assertConnectionsAreInitialized();
    let _v4 = await (_v3 = {
      connection: (0, _v4.specifyConnectionId)(_v0.connections.guest, _v1),
      gctlConfig: (0, _v3.queryManagerGctlConfig)(_v0)
    }, (0, _v4.withConnectionSupport)(_v5.ERequestMethod.PATCH, _v3, ({
      liveEventId: _v0,
      guestId: _v1
    }) => ({
      path: `/live_events/${_v0}/guests/${_v1}`
    }), {
      body: _v2
    }));
    return _v0.emitSignal({
      type: _v7.ELiveGraphicsSignal.GUEST_UPDATED,
      data: _v4.seat
    }), _v4;
  }
  async function _v10(_v0, _v1) {
    var _v2;
    _v0.log.info("Removing guest seat:", _v1), _v0.assertIsInitialized(), _v0.assertConnectionsAreInitialized(), await (_v2 = {
      connection: (0, _v4.specifyConnectionId)(_v0.connections.guest, _v1),
      gctlConfig: (0, _v3.queryManagerGctlConfig)(_v0)
    }, (0, _v4.withConnectionSupport)(_v5.ERequestMethod.DELETE, _v2, ({
      liveEventId: _v0,
      guestId: _v1
    }) => ({
      path: `/live_events/${_v0}/guests/${_v1}`
    }))), _v0.emitSignal({
      type: _v7.ELiveGraphicsSignal.GUEST_DELETED,
      data: _v1
    });
  }
  async function _v11(_v0, _v1) {
    var _v2;
    _v0.log.info("Sending guest email invite:", _v1), _v0.assertIsInitialized(), _v0.assertConnectionsAreInitialized(), await (_v2 = {
      connection: _v0.connections.inviteGuest,
      gctlConfig: (0, _v3.queryManagerGctlConfig)(_v0)
    }, (0, _v4.withConnectionSupport)(_v5.ERequestMethod.POST, _v2, ({
      liveEventId: _v0
    }) => ({
      path: `/live_events/${_v0}/guests/${_v1}/invite`
    }), {
      body: {
        guestId: _v1
      }
    }));
    let {
      guestsEmailInvitesCreatedTimestamps: _v3
    } = _v0.context;
    _v0.setContext({
      guestsEmailInvitesCreatedTimestamps: {
        ..._v3,
        [_v1]: Date.now()
      }
    });
  }
  async function _v12(_v0, _v1) {
    _v0.log.info("Muting guest audio:", _v1), _v0.assertIsInitialized(), await (0, _v6.setRefValue)(_v0.firebase, (0, _v6.getRefChild)(_v0.firebase, _v0.guestsSettingsRef, `${_v1}/remoteRequest`), _v7.EGuestMuteSignal.GUEST_MUTE_REQUESTED);
  }
  async function _v13(_v0, _v1) {
    _v0.log.info("Un-muting guest audio:", _v1), _v0.assertIsInitialized(), await (0, _v6.setRefValue)(_v0.firebase, (0, _v6.getRefChild)(_v0.firebase, _v0.guestsSettingsRef, `${_v1}/remoteRequest`), _v7.EGuestMuteSignal.GUEST_UNMUTE_REQUESTED);
  }
  async function _v14(_v0) {
    _v0.log.info("Removing all guest seats"), _v0.assertIsInitialized();
    let {
      guests: _v1
    } = _v0.context;
    await Promise.all(Object.keys(_v1).map(_v0 => _v0.deleteGuest(_v0)));
  }
  _v0.s(["createGuest", 0, _v8, "deleteGuest", 0, _v10, "muteGuest", 0, _v12, "purgeGuests", 0, _v14, "sendGuestInvite", 0, _v11, "unmuteGuest", 0, _v13, "updateGuest", 0, _v9], 0);
  var _v15 = ((_v1 = {}).GUEST_MUTE_REQUESTED = "GUEST_MUTE_REQUESTED", _v1.GUEST_UNMUTE_REQUESTED = "GUEST_UNMUTE_REQUESTED", _v1),
    _v16 = ((_v2 = {})[_v2.BACKSTAGE = 0] = "BACKSTAGE", _v2[_v2.STREAM = 1] = "STREAM", _v2);
  _v0.s(["EGuestMuteState", () => _v15, "ESourcesSubTab", () => _v16], 0);
}