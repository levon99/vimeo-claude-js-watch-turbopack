{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  async function _v6({
    baseUrl: _v0,
    select: _v1,
    where: {
      roomType: _v2,
      roomId: _v3
    },
    ..._v4
  }) {
    return (0, _v4.measureLatency)("getInteractionRoomRoomIdStatus", "GET", async () => {
      let _v0 = await fetch(`${_v0}/interaction_rooms/${_v2}/${_v3}/status?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  var _v7 = _v0.i(0);
  _v0.i(0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = (0, _v2.createContext)({
    isApplicationAvailableForModeration: !1,
    setIsApplicationAvailableForModeration: _v3.CallablePlaceholder
  });
  _v0.s(["InteractionToolsStatusObserver", 0, function ({
    isActive: _v0 = !1,
    isBypass: _v1 = !1,
    children: _v2,
    sessionId: _v3,
    sessionType: _v4,
    placeholder: _v5 = null,
    isAvailableForModeration: _v6 = !1
  }) {
    let [_v7, _v8] = (0, _v2.useState)(_v6),
      _v9 = function ({
        isActive: _v0,
        sessionId: _v1,
        sessionType: _v2
      }) {
        let [_v3, _v4] = (0, _v2.useState)(!1);
        return !function (_v0, _v1) {
          let _v2 = "function" == typeof _v0 ? _v0() : _v0,
            {
              baseUrl: _v3,
              jwt: _v4,
              xVimeoPage: _v5,
              locale: _v6
            } = (0, _v9.useGctlConfig)();
          (0, _v7.default)(_v2 ? `/interaction_rooms/${_v2.where.roomType}/${_v2.where.roomId}/status${(0, _v8.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v6({
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
        }((0, _v2.useCallback)(() => _v0 ? {
          where: {
            roomType: _v2,
            roomId: _v1
          },
          select: ["status.enabled"]
        } : null, [_v0, _v1, _v2]), {
          refreshInterval: _v10.interactionToolsConfig.INTERACTION_ROOM_STATUS_POLLING_INTERVAL,
          refreshWhenHidden: !0,
          onSuccess: _v0 => {
            _v0 && _v0.hasOwnProperty("status") && _v0.status.hasOwnProperty("enabled") && _v0.status.enabled !== _v3 && _v4(_v0.status.enabled);
          }
        }), _v3;
      }({
        isActive: _v0 && !_v1,
        sessionId: _v3,
        sessionType: _v4
      }),
      _v10 = (0, _v2.useMemo)(() => ({
        isApplicationAvailableForModeration: _v7,
        setIsApplicationAvailableForModeration: _v8
      }), [_v7]);
    return _v1 || _v9 || _v7 ? (0, _v1.jsx)(_v11.Provider, {
      value: _v10,
      children: _v2
    }) : _v5;
  }, "useInteractionToolsStatusObserverContext", 0, function () {
    return (0, _v2.useContext)(_v11);
  }], 0);
}