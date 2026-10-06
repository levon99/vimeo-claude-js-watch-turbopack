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
    let _v2 = (0, _v4.useOrionSetting)("enable_content_space_team_gate"),
      _v3 = (0, _v4.useOrionSetting)("pre_libraries_merge_date"),
      _v4 = (0, _v6.useViewer)(),
      _v5 = _v4?.user?.id,
      _v6 = _v4?.teamUser?.ownerId == null || _v4.teamUser.ownerId === _v5,
      _v7 = _v4?.user?.teamUserPermissionLevel,
      _v8 = void 0 !== _v5 && _v6 && (null == _v7 || _v7 === _v5.TeamUserPermissionLevel.Owner),
      {
        capabilities: _v9
      } = (0, _v3.useCapability)(["hasContentSpaceEnabled", "hasContentSpaceEnabledTeamGated"], _v5),
      _v10 = !!_v9?.hasContentSpaceEnabled && !_v9?.hasContentSpaceEnabledTeamGated,
      _v11 = _v2 ?? !1,
      _v12 = (_v0 => {
        if (!_v0) return "";
        let _v1 = new Date(/^\d{8}$/.test(_v0) ? `${_v0.slice(0, 4)}-${_v0.slice(4, 6)}-${_v0.slice(6, 8)}` : _v0);
        return Number.isNaN(_v1.getTime()) ? "" : _v1.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC"
        });
      })(_v3),
      _v13 = (0, _v2.useIsAnnouncementAcknowledged)("library_merge_complete"),
      _v14 = (0, _v1.useSyncExternalStore)(_v7, () => !0, () => !1),
      _v15 = _v1 && _v14 && _v8 && _v10,
      {
        acknowledge: _v16,
        acknowledgeAndWait: _v17,
        isActive: _v18
      } = (0, _v2.useAnnouncement)({
        id: "library_merge_complete",
        isEligible: "home" === _v0 && _v15 && _v11
      }),
      {
        acknowledge: _v19,
        acknowledgeAndWait: _v20,
        isActive: _v21
      } = (0, _v2.useAnnouncement)({
        id: "library_merge_start",
        isEligible: "library" === _v0 && _v15 && !!_v12 && !(_v11 && !_v13)
      }),
      _v22 = "home" === _v0 ? _v18 ? "now" : null : _v21 ? "becoming" : null,
      _v23 = (0, _v1.useRef)(!1);
    return (0, _v1.useEffect)(() => {
      if (_v22) {
        try {
          let _v0 = window.pendo;
          "function" == typeof _v0?.stopGuides && (_v0.stopGuides(), _v23.current = !0);
        } catch {}
        return () => {
          if (_v23.current) {
            try {
              let _v0 = window.pendo;
              "function" == typeof _v0?.startGuides && _v0.startGuides();
            } catch {}
            _v23.current = !1;
          }
        };
      }
    }, [_v22]), {
      active: _v22,
      mergeDate: _v12,
      dismiss: (0, _v1.useCallback)(_v0 => {
        "now" === _v0 ? _v16() : _v19();
      }, [_v16, _v19]),
      dismissAndWait: (0, _v1.useCallback)(_v0 => "now" === _v0 ? _v17() : _v20(), [_v17, _v20])
    };
  }]);
}