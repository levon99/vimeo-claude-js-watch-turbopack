{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = new _v1.Logger("🔥FB", _v5.liveApplicationConfig.TRACKING.IS_FIREBASE_LOG_ENABLED),
    _v7 = new _v1.Logger("🔥FB_SDK", _v5.liveApplicationConfig.TRACKING.IS_FIREBASE_SDK_LOG_ENABLED),
    _v8 = new Map();
  function _v9(_v0, _v1, _v2) {
    return _v6.info("Set ref value:", _v1.toString(), _v2), _v0.database.set(_v1, _v2);
  }
  async function _v10(_v0, _v1) {
    _v1 ? await _v9(_v0, _v1[0], _v1[1]) : _v6.info("Set ref value skip, null received");
  }
  async function _v11(_v0, _v1) {
    return _v6.info("Get ref value:", _v1.toString()), (await _v0.database.get(_v1).catch(_v0 => {
      throw _v6.error("Get ref value error:", _v0, _v1.toString()), _v0;
    })).val();
  }
  _v0.s(["firebaseListenersRegistry", 0, _v8, "firebaseLog", 0, _v6, "firebaseSDKLog", 0, _v7], 0), _v0.s(["batchedDatabaseUpdate", 0, function (_v0, _v1, _v2) {
    let _v3,
      _v4 = (_v3 = _v1.toString(), _v2.reduce((_v0, _v1) => {
        if (_v1) {
          let [_v0, _v1] = _v1,
            _v2 = decodeURIComponent(_v0.toString()).substring(_v3.length);
          if (_v2 in _v0) throw new _v2.LiveError(`Duplicated ref update supplied for batch updater: '${_v2}'.`);
          _v0[_v2] = _v1;
        }
        return _v0;
      }, {}));
    return (_v6.info("Batched update:", _v4), Object.keys(_v4).length) ? _v0.database.update(_v1, _v4) : Promise.resolve();
  }, "collectObjectBatchPrescribers", 0, function ({
    firebase: _v0,
    ref: _v1,
    object: _v2,
    keys: _v3
  }) {
    return _v3.map(_v0 => [_v0.database.child(_v1, String(_v0)), _v2[_v0]]);
  }, "getDatabaseRef", 0, function (_v0, _v1, _v2) {
    return _v0.database.ref(_v1, _v2);
  }, "getDatabaseRootRef", 0, function (_v0, _v1) {
    return _v0.database.ref(_v1).root;
  }, "getFirestore", 0, function (_v0, _v1) {
    return _v0.getFirestore(_v1);
  }, "getFirestoreCollectionRef", 0, function (_v0, _v1, _v2) {
    return _v0.collection(_v1, _v2);
  }, "getFirestoreFilterConstraint", 0, function (_v0, _v1, _v2, _v3) {
    return _v0.where(_v1, _v2, _v3);
  }, "getFirestoreFilteredQuery", 0, function (_v0, _v1, _v2) {
    return _v0.query(_v1, _v2);
  }, "getRealtimeDatabase", 0, function (_v0, _v1) {
    return _v0.database.getDatabase(_v1);
  }, "getRefChild", 0, function (_v0, _v1, _v2) {
    return _v0.database.child(_v1, _v2);
  }, "getRefValue", 0, _v11, "offRefEvent", 0, function (_v0, _v1, _v2, _v3) {
    let _v4 = `${_v2}#${_v1.toString()}`,
      _v5 = _v8.get(_v4) || 0;
    _v5 > 1 ? _v8.set(_v4, _v5 - 1) : _v8.delete(_v4), _v6.info("Un-subscribing from:", _v2, "🔗", _v1.toString()), _v0.database.off(_v1, _v2, _v3);
  }, "onFirestoreQuerySnapshot", 0, function (_v0, _v1, _v2) {
    return _v0.onSnapshot(_v1, _v2);
  }, "onRefDisconnect", 0, function (_v0, _v1) {
    return _v0.database.onDisconnect(_v1);
  }, "onRefEvent", 0, function (_v0, _v1, _v2, _v3, _v4 = "") {
    let _v5 = `${_v2}#${_v1.toString()}`;
    _v8.has(_v5) ? _v8.set(_v5, _v8.get(_v5) + 1) : _v8.set(_v5, 1), _v6.info("Subscribing to:", _v4, _v2, "🔗", _v1.toString());
    let _v6 = _v0 => {
      _v1.Logger.getGlobal().error("Subscription cancel:", _v4, _v0, "🔗", _v1.toString()), _v6.error("Subscription cancel:", _v4, _v0, "🔗", _v1.toString()), _v0?.message?.startsWith("permission_denied at /") ? (0, _v4.trackLiveAction)("fb_permission_denied", {
        message: _v0.message,
        key: _v5,
        event: _v2,
        comment: _v4
      }) : (0, _v4.trackLiveError)(_v0, {
        category: _v3.ELiveErrorCategory.FIREBASE,
        data: {
          key: _v5,
          event: _v2,
          comment: _v4
        }
      });
    };
    switch (_v2) {
      case "child_added":
        return _v0.database.onChildAdded(_v1, _v3, _v6);
      case "child_changed":
        return _v0.database.onChildChanged(_v1, _v3, _v6);
      case "child_moved":
        return _v0.database.onChildMoved(_v1, _v3, _v6);
      case "child_removed":
        return _v0.database.onChildRemoved(_v1, _v3, _v6);
      case "value":
        return _v0.database.onValue(_v1, _v3, _v6);
    }
  }, "pushRefValue", 0, function (_v0, _v1, _v2) {
    return _v6.info("Push ref value:", _v1.toString()), _v0.database.push(_v1, _v2);
  }, "removeRefValue", 0, function (_v0, _v1) {
    return _v6.info("Remove ref value:", _v1.toString()), _v0.database.remove(_v1);
  }, "runRefTransaction", 0, function (_v0, _v1, _v2, _v3) {
    return _v6.info("Run transaction:", _v1.toString(), _v3), _v0.database.runTransaction(_v1, _v2, _v3);
  }, "setRefPrescriberValue", 0, _v10, "setRefValue", 0, _v9, "updateRefValue", 0, function (_v0, _v1, _v2) {
    return _v6.info("Update ref value:", _v1.toString(), _v2), _v0.database.update(_v1, _v2);
  }], 0);
}