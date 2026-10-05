{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = [],
    _v8 = new Set(),
    _v9 = (0, _v2.createContext)(null);
  function _v10(_v0, _v1) {
    return _v0.includes(_v1);
  }
  function _v11({
    id: _v0,
    isEligible: _v1 = !0
  }) {
    let _v2 = (0, _v2.useContext)(_v9),
      _v3 = (0, _v2.useId)(),
      _v4 = _v2?.registerCandidate,
      _v5 = _v2?.unregisterCandidate,
      _v6 = _v2?.acknowledge,
      _v7 = _v2?.acknowledgeAndWait;
    (0, _v2.useEffect)(() => void 0 === _v4 || void 0 === _v5 ? () => void 0 : (_v4({
      announcementId: _v0,
      isEligible: _v1,
      registrationId: _v3
    }), () => _v5(_v3)), [_v0, _v1, _v4, _v3, _v5]);
    let _v8 = (0, _v2.useCallback)(() => {
        void 0 !== _v6 && _v6(_v0);
      }, [_v6, _v0]),
      _v9 = (0, _v2.useCallback)(() => _v7?.(_v0) ?? Promise.resolve(!1), [_v7, _v0]),
      _v10 = _v2?.forcedAnnouncementId === _v0 || _v2?.isLoaded === !0;
    return {
      acknowledge: _v8,
      acknowledgeAndWait: _v9,
      isActive: _v2?.activeRegistrationId === _v3 && _v10,
      isLoaded: _v10
    };
  }
  let _v12 = () => void 0;
  _v0.s(["AnnouncementManagerProvider", 0, function ({
    children: _v0,
    routeKey: _v1
  }) {
    let _v2 = (0, _v5.useViewer)(),
      _v3 = _v2?.user?.id,
      _v4 = _v2?.user?.createdTime,
      {
        data: _v5,
        mutate: _v6
      } = (0, _v4.useGetUserAnnouncementPreferences)(() => null != _v3 ? {
        where: {
          userId: _v3
        },
        select: ["preferences", "modifiedOn"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1
      }),
      [_v7] = (0, _v3.usePutUserAnnouncementPreference)(),
      [_v8, _v9] = (0, _v2.useState)(() => new Map()),
      [_v10, _v11] = (0, _v2.useState)(() => new Set()),
      [_v12, _v13] = (0, _v2.useState)(() => Date.now()),
      [_v14, _v15] = (0, _v2.useState)(null),
      _v16 = (0, _v2.useCallback)(_v0 => {
        _v9(_v0 => {
          let _v1 = new Map(_v0);
          return _v1.set(_v0.registrationId, _v0), _v1;
        });
      }, []),
      _v17 = (0, _v2.useCallback)(_v0 => {
        _v9(_v0 => {
          if (!_v0.has(_v0)) return _v0;
          let _v1 = new Map(_v0);
          return _v1.delete(_v0), _v1;
        });
      }, []),
      _v18 = (0, _v2.useCallback)(_v0 => {
        _v11(_v0 => {
          if (_v0.has(_v0)) return _v0;
          let _v1 = new Set(_v0);
          return _v1.add(_v0), _v1;
        });
      }, []),
      _v19 = (0, _v2.useCallback)(_v0 => {
        _v11(_v0 => {
          if (!_v0.has(_v0)) return _v0;
          let _v1 = new Set(_v0);
          return _v1.delete(_v0), _v1;
        });
      }, []),
      _v20 = (0, _v2.useCallback)(_v0 => {
        _v15(_v0);
      }, []),
      _v21 = (0, _v2.useCallback)(() => {
        _v15(null);
      }, []),
      _v22 = _v5?.preferences ?? _v7,
      _v23 = void 0 !== _v5,
      _v24 = (0, _v2.useMemo)(() => new Set([..._v8.values()].map(_v0 => _v0.announcementId)), [_v8]),
      _v25 = (0, _v2.useRef)(_v1);
    (0, _v2.useEffect)(() => {
      _v25.current !== _v1 && (_v25.current = _v1, _v13(Date.now()), null != _v3 && _v6());
    }, [_v6, _v1, _v3]);
    let _v26 = (0, _v2.useMemo)(() => {
        var _v0;
        let _v1;
        if (null !== _v14) {
          let _v0 = [..._v8.values()].find(_v0 => _v0.announcementId === _v14);
          return _v0?.registrationId ?? null;
        }
        if (!_v23 || _v10.size > 0) return null;
        let _v2 = [..._v8.values()].filter(_v0 => {
          var _v1, _v2;
          let _v3;
          return _v0.isEligible && (_v1 = _v0.announcementId, !Number.isFinite(_v3 = Date.parse(_v4 ?? "")) || _v3 <= Date.parse(_v6.ANNOUNCEMENTS[_v1].latestEligibleAccountCreationDate)) && (_v2 = _v0.announcementId, !(_v12 > Date.parse(_v6.ANNOUNCEMENTS[_v2].expirationDate))) && !_v10(_v22, _v0.announcementId);
        }).sort((_v0, _v1) => {
          let _v2 = _v6.ANNOUNCEMENTS[_v0.announcementId],
            _v3 = _v6.ANNOUNCEMENTS[_v1.announcementId],
            _v4 = _v6.PRIORITY_RANK[_v3.priority] - _v6.PRIORITY_RANK[_v2.priority];
          return 0 !== _v4 ? _v4 : _v2.order !== _v3.order ? _v3.order - _v2.order : _v0.announcementId.localeCompare(_v1.announcementId);
        })[0];
        return void 0 !== _v2 && (_v0 = _v5?.modifiedOn, Number.isFinite(_v1 = Date.parse(_v0 ?? "")) && _v12 - _v1 < 0) && "critical" !== _v6.ANNOUNCEMENTS[_v2.announcementId].priority ? null : _v2?.registrationId ?? null;
      }, [_v22, _v10, _v8, _v4, _v5?.modifiedOn, _v14, _v23, _v12]),
      _v27 = (0, _v2.useCallback)(async _v0 => {
        if (_v0 === _v14 || null == _v3 || !_v23) return !1;
        if (_v10(_v22, _v0)) return !0;
        _v6({
          modifiedOn: new Date().toISOString(),
          preferences: [..._v22, _v0]
        }, {
          revalidate: !1
        });
        try {
          await _v7({
            where: {
              announcementId: _v0,
              userId: _v3
            }
          });
          let _v0 = await _v6();
          return _v10(_v0?.preferences ?? [], _v0);
        } catch {
          return !1;
        }
      }, [_v22, _v14, _v23, _v6, _v7, _v3]),
      _v28 = (0, _v2.useCallback)(_v0 => {
        _v27(_v0);
      }, [_v27]),
      _v29 = (0, _v2.useCallback)(_v0 => _v10(_v22, _v0), [_v22]),
      _v30 = (0, _v2.useMemo)(() => ({
        activeRegistrationId: _v26,
        acknowledge: _v28,
        acknowledgeAndWait: _v27,
        clearForcedAnnouncement: _v21,
        forceAnnouncement: _v20,
        forcedAnnouncementId: _v14,
        isAcknowledged: _v29,
        isLoaded: _v23,
        registeredAnnouncementIds: _v24,
        registerBlocker: _v18,
        registerCandidate: _v16,
        unregisterBlocker: _v19,
        unregisterCandidate: _v17
      }), [_v28, _v27, _v26, _v21, _v20, _v14, _v29, _v23, _v24, _v18, _v16, _v19, _v17]);
    return (0, _v1.jsx)(_v9.Provider, {
      value: _v30,
      children: _v0
    });
  }, "useAcknowledgeAnnouncement", 0, function () {
    let _v0 = (0, _v2.useContext)(_v9);
    return _v0?.acknowledge ?? _v12;
  }, "useAnnouncement", 0, _v11, "useAnnouncementOnDisplay", 0, function ({
    id: _v0,
    isEligible: _v1 = !0
  }) {
    let {
        acknowledge: _v2,
        isActive: _v3,
        isLoaded: _v4
      } = _v11({
        id: _v0,
        isEligible: _v1
      }),
      [_v5, _v6] = (0, _v2.useState)(!1);
    return (0, _v2.useEffect)(() => {
      _v4 && _v3 && (_v6(!0), _v2());
    }, [_v2, _v3, _v4]), {
      dismiss: (0, _v2.useCallback)(() => _v6(!1), []),
      isVisible: _v5
    };
  }, "useAnnouncementPreview", 0, function () {
    let _v0 = (0, _v2.useContext)(_v9),
      _v1 = _v0?.clearForcedAnnouncement ?? _v12,
      _v2 = _v0?.forceAnnouncement ?? _v12,
      _v3 = _v0?.forcedAnnouncementId ?? null,
      _v4 = _v0?.registeredAnnouncementIds ?? _v8;
    return (0, _v2.useMemo)(() => ({
      clearForcedAnnouncement: _v1,
      forceAnnouncement: _v2,
      forcedAnnouncementId: _v3,
      registeredAnnouncementIds: _v4
    }), [_v1, _v2, _v3, _v4]);
  }, "useIsAnnouncementAcknowledged", 0, function (_v0) {
    let _v1 = (0, _v2.useContext)(_v9);
    return _v1?.isAcknowledged(_v0) ?? !1;
  }]);
}