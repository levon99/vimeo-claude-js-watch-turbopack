{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = () => () => void 0;
  _v0.s(["useLibraryMergeAnnouncement", 0, function (_v0, {
    enabled: _v1 = !0
  } = {}) {
    let {
        settings: _v2
      } = (0, _v4.useOrionSettings)(),
      _v3 = (0, _v6.useViewer)(),
      _v4 = _v3?.user?.id,
      _v5 = _v3?.teamUser?.ownerId == null || _v3.teamUser.ownerId === _v4,
      _v6 = _v3?.user?.teamUserPermissionLevel,
      _v7 = void 0 !== _v4 && _v5 && (null == _v6 || _v6 === _v5.TeamUserPermissionLevel.Owner),
      {
        capabilities: _v8
      } = (0, _v3.useCapability)(["hasContentSpaceEnabled", "hasContentSpaceEnabledTeamGated"], _v4),
      _v9 = !!_v8?.hasContentSpaceEnabled && !_v8?.hasContentSpaceEnabledTeamGated,
      _v10 = _v2.enable_content_space_team_gate ?? !1,
      _v11 = (_v0 => {
        if (!_v0) return "";
        let _v1 = new Date(/^\d{8}$/.test(_v0) ? `${_v0.slice(0, 4)}-${_v0.slice(4, 6)}-${_v0.slice(6, 8)}` : _v0);
        return Number.isNaN(_v1.getTime()) ? "" : _v1.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC"
        });
      })(_v2.pre_libraries_merge_date),
      _v12 = (0, _v2.useIsAnnouncementAcknowledged)("library_merge_complete"),
      _v13 = (0, _v1.useSyncExternalStore)(_v7, () => !0, () => !1),
      _v14 = _v1 && _v13 && _v7 && _v9,
      {
        acknowledge: _v15,
        acknowledgeAndWait: _v16,
        isActive: _v17
      } = (0, _v2.useAnnouncement)({
        id: "library_merge_complete",
        isEligible: "home" === _v0 && _v14 && _v10
      }),
      {
        acknowledge: _v18,
        acknowledgeAndWait: _v19,
        isActive: _v20
      } = (0, _v2.useAnnouncement)({
        id: "library_merge_start",
        isEligible: "library" === _v0 && _v14 && !!_v11 && !(_v10 && !_v12)
      }),
      _v21 = "home" === _v0 ? _v17 ? "now" : null : _v20 ? "becoming" : null,
      _v22 = (0, _v1.useRef)(!1);
    return (0, _v1.useEffect)(() => {
      if (_v21) {
        try {
          let _v0 = window.pendo;
          "function" == typeof _v0?.stopGuides && (_v0.stopGuides(), _v22.current = !0);
        } catch {}
        return () => {
          if (_v22.current) {
            try {
              let _v0 = window.pendo;
              "function" == typeof _v0?.startGuides && _v0.startGuides();
            } catch {}
            _v22.current = !1;
          }
        };
      }
    }, [_v21]), {
      active: _v21,
      mergeDate: _v11,
      dismiss: (0, _v1.useCallback)(_v0 => {
        "now" === _v0 ? _v15() : _v18();
      }, [_v15, _v18]),
      dismissAndWait: (0, _v1.useCallback)(_v0 => "now" === _v0 ? _v16() : _v19(), [_v16, _v19])
    };
  }]);
}