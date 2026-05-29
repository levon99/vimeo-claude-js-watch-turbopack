{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v0.i(0).create)(() => ({
    entityId: null,
    entityType: null,
    canCompleteEvent: !1
  }));
  _v0.s(["useConfigStore", 0, _v6], 0);
  let _v7 = {
      uri: "",
      title: "",
      schedule: null,
      watchEventUri: null,
      metadata: null,
      privacy: null,
      completedOn: null,
      status: null,
      emailQuota: null
    },
    _v8 = (0, _v2.createContext)(_v7);
  _v0.s(["default", 0, ({
    children: _v0
  }) => {
    let _v1 = (() => {
      let [_v0, {
          data: _v1
        }] = (0, _v3.useGetLiveEventLazy)(),
        _v2 = _v6(_v0 => _v0.isRegistrationOn),
        _v3 = _v6(_v0 => _v0.entityType),
        _v4 = _v6(_v0 => _v0.entityId),
        _v5 = (0, _v2.useCallback)(() => {
          _v3 === _v4.ENTITY_TYPE.EVENT ? _v0({
            select: _v5.LIVE_EVENT_API_FIELDS,
            where: {
              liveEventId: Number(_v4)
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4.9"
            }
          }) : console.error(`Entity type ${_v3} not supported EC1`);
        }, [_v3, _v2, _v0]);
      (0, _v2.useEffect)(_v5, [_v5]);
      let _v6 = (0, _v2.useMemo)(() => {
        if (_v3 === _v4.ENTITY_TYPE.EVENT) {
          if (_v1) return {
            user: _v1.user,
            uri: _v1.uri,
            title: _v1.title,
            watchEventUri: _v1.link,
            metadata: _v1.metadata,
            privacy: _v1.streamPrivacy,
            schedule: _v1.schedule,
            emailQuota: _v1.emailQuota,
            completedOn: _v1.completedOn,
            status: _v1.status
          };
        } else console.error(`Entity type ${_v3} not supported EC0`);
      }, [_v1, _v3]);
      return (0, _v2.useEffect)(() => {
        document.title = _v6?.title || "";
      }, [_v6?.title]), _v6;
    })();
    return (0, _v1.jsx)(_v8.Provider, {
      value: _v1 || _v7,
      children: _v0
    });
  }, "useEntityStore", 0, () => (0, _v2.useContext)(_v8)], 0);
}