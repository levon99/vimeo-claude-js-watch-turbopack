{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (_v0, _v1) => _v0 ? "disable" === _v0 && ("video" === _v1 || "workspace_default" === _v1) || "embed_only" === _v0 && ("live_event" === _v1 || "showcase" === _v1) ? "hide" : "anybody" === _v0 ? "public" : "team" === _v0 && "showcase" === _v1 || "nobody" === _v0 && ("video" === _v1 || "workspace_default" === _v1 || "live_event" === _v1) ? "private" : "team" === _v0 && ("video" === _v1 || "workspace_default" === _v1 || "live_event" === _v1) ? "team" : _v0 : _v0;
  _v0.s(["mapPrivacyToStandardizedName", 0, _v3, "useViewPrivacyChangeTracking", 0, () => {
    let _v0 = (0, _v2.usePico)();
    return {
      trackPrivacyChanged: (0, _v1.useCallback)(({
        entityType: _v0,
        previousPrivacy: _v1,
        newPrivacy: _v2
      }) => {
        _v0?.track("privacy_changed", {
          entity_type: _v0,
          previous_privacy: _v3(_v1, _v0),
          new_privacy: _v3(_v2, _v0)
        });
      }, [_v0])
    };
  }]);
}