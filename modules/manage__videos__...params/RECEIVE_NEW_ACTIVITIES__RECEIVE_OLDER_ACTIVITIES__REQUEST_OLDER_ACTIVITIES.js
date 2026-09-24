{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = (_v0, _v1) => _v0.filter(_v0 => !(0, _v7.default)(_v1, {
      id: _v0.id
    })),
    _v12 = (_v0, {
      type: _v1,
      payload: _v2,
      error: _v3,
      meta: _v4
    }) => {
      switch (_v1) {
        case "RECEIVE_NEW_ACTIVITIES":
          return _v3 ? _v0 : ((_v0, {
            activities: _v1
          }) => {
            let _v2 = _v11(_v1, _v0.activities),
              _v3 = (0, _v6.default)({
                activities: _v2.concat(_v0.activities)
              }, _v0),
              _v4 = _v0.shouldIndicateUndisplayedActivities,
              _v5 = !!_v2.find(_v0 => !_v0.displayed);
            return (0, _v6.default)({
              shouldIndicateUndisplayedActivities: _v4 || _v5
            }, _v3);
          })(_v0, _v2);
        case "RECEIVE_OLDER_ACTIVITIES":
          return _v3 ? _v0 : ((_v0, {
            activities: _v1,
            pageSize: _v2
          }) => {
            let _v3 = _v11(_v1, _v0.activities),
              _v4 = (0, _v6.default)({
                activities: _v0.activities.concat(_v3)
              }, _v0),
              _v5 = _v0.shouldIndicateUndisplayedActivities,
              _v6 = !!_v3.find(_v0 => !_v0.displayed);
            return (0, _v6.default)({
              noOlderActivitiesExist: _v1.length < _v2,
              isRequestingOlderActivities: !1,
              shouldIndicateUndisplayedActivities: _v5 || _v6
            }, _v4);
          })(_v0, _v2);
        case "REQUEST_OLDER_ACTIVITIES":
          return (0, _v6.default)({
            isRequestingOlderActivities: !0
          }, _v0);
        case "DONE_REQUESTING_OLDER_ACTIVITIES":
          return (0, _v6.default)({
            isRequestingOlderActivities: !1
          }, _v0);
        case "ACTIVITY_ACKNOWLEDGED":
          return ((_v0, {
            id: _v1
          }) => {
            var _v2, _v3;
            let _v4,
              _v5,
              _v6,
              _v7 = (_v2 = _v0.activities, _v3 = {
                acknowledged: !0
              }, _v4 = (0, _v8.default)(_v2, _v0 => _v0.id === _v1), _v5 = (0, _v10.default)(_v2, 0, _v4), _v6 = (0, _v10.default)(_v2, _v4 + 1), [..._v5, (0, _v6.default)(_v3, _v2[_v4]), ..._v6]);
            return (0, _v6.default)({
              activites: _v7
            }, _v0);
          })(_v0, _v2);
        case "ACTIVITIES_DISPLAYED":
          return (0, _v6.default)({
            activities: _v0.activities.map(_v0 => (0, _v6.default)({
              displayed: !0
            }, _v0)),
            shouldIndicateUndisplayedActivities: !1
          }, _v0);
        case "START_TOGGLE_FOLLOW":
          let _v0;
          return _v0 = (0, _v6.default)({
            [_v2]: !0
          }, _v0.pendingFollows), (0, _v6.default)({
            pendingFollows: _v0
          }, _v0);
        case "COMPLETE_TOGGLE_FOLLOW":
          return (0, _v6.default)({
            activities: _v0.activities.map(_v0 => _v0.cta_follower_id !== _v2 ? _v0 : (0, _v6.default)({
              cta_is_following: !_v0.cta_is_following
            }, _v0)),
            pendingFollows: (0, _v9.default)(_v0.pendingFollows, [_v2])
          }, _v0);
        default:
          return _v0;
      }
    };
  var _v13 = _v0.i(0);
  _v0.s(["default", 0, _v0 => {
    let _v1 = (0, _v4.createStore)(_v12, _v0, (0, _v4.applyMiddleware)(_v5.default));
    return _v0 => ((0, _v2.useEffect)(() => {
      _v0.token && (0, _v13.setToken)(_v0.token);
    }, [_v0.token]), (0, _v1.jsx)(_v3.Provider, {
      store: _v1,
      children: _v0.children
    }));
  }], 0);
}