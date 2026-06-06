{
  "use strict";

  let _v1 = null,
    _v2 = {
      activities: [],
      hidden_activities: []
    },
    _v3 = async (_v0, _v1 = "GET", _v2) => {
      try {
        let _v0 = await fetch(_v0, {
          method: _v1,
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          body: _v2 ? JSON.stringify(_v2) : null
        });
        if (!_v0.ok) return new Promise(_v0 => _v0(_v2));
        return _v0.json();
      } catch (_v0) {
        return new Promise(_v0 => _v0(_v2));
      }
    };
  _v0.s(["getActivitySummary", 0, (_v0, _v1, _v2) => _v3(`/activity/json?${(_v0 => {
    let _v1 = [];
    for (let _v0 in _v0) _v0.hasOwnProperty(_v0) && null != _v0[_v0] && _v1.push(`${encodeURIComponent(_v0)}=${encodeURIComponent(String(_v0[_v0]))}`);
    return _v1.join("&");
  })({
    count: _v0,
    before: _v1,
    after: _v2
  })}`), "postActivityAcknowledged", 0, _v0 => _v3(`/activity/json/mark_seen/${_v0}`, "POST", {
    token: _v1
  }), "postPriorActivitiesDisplayed", 0, _v0 => _v3(`/activity/json/mark_old/${_v0}`, "POST", {
    token: _v1
  }), "postToggleFollow", 0, _v0 => _v3(`/user${_v0}/toggle_follow`, "POST", {
    token: _v1,
    body: {
      subject_id: _v0
    }
  }), "setToken", 0, _v0 => {
    _v1 = _v0;
  }]);
}