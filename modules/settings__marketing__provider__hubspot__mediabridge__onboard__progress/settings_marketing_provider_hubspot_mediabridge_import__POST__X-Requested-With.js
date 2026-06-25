{
  "use strict";

  let _v1 = async (_v0, _v1, _v2) => {
      let _v3 = {};
      if (!_v0 || !_v1 || !_v2) return _v3;
      try {
        let _v0 = await fetch("/settings/marketing/provider/hubspot/mediabridge/import", {
          body: JSON.stringify({
            token: _v2,
            team_owner_id: _v0,
            folder_ids: _v1.join(",")
          }),
          method: "POST",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          }
        });
        _v3 = await _v0.json();
      } catch (_v0) {
        _v3 = {
          error: !0
        };
      }
      return _v3;
    },
    _v2 = async (_v0, _v1) => {
      let _v2 = {};
      if (!_v0 || !_v1) return _v2;
      try {
        let _v0 = await fetch(`/settings/marketing/provider/hubspot/mediabridge/status/${_v0}`, {
          method: "GET",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          }
        });
        _v2 = await _v0.json();
      } catch (_v0) {
        _v2 = {
          error: !0
        };
      }
      return _v2;
    };
  _v0.s(["getHubSpotMediaBridgeJob", 0, _v2, "postHubSpotMediaBridgeImport", 0, _v1]);
}