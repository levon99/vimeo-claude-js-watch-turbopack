{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["LiveSourceStatusIndicator", 0, function ({
    id: _v0,
    className: _v1 = (0, _v7.createDomName)("source-status-indicator"),
    isConnected: _v2,
    networkQuality: _v3
  }) {
    let _v4 = (0, _v2.useMemo)(() => {
      if (_v3) {
        let _v0 = _v3.downlinkNetworkQuality !== _v6.EAgoraNetworkQuality.EXCELLENT && _v3.downlinkNetworkQuality !== _v6.EAgoraNetworkQuality.GOOD,
          _v1 = _v3.uplinkNetworkQuality !== _v6.EAgoraNetworkQuality.EXCELLENT && _v3.uplinkNetworkQuality !== _v6.EAgoraNetworkQuality.GOOD;
        return _v0 || _v1 ? _v8.IMPAIRED_STATUS_COLOR : _v8.CONNECTED_STATUS_COLOR;
      }
      return _v2 ? _v8.IMPAIRED_STATUS_COLOR : _v8.DISCONNECTED_STATUS_COLOR;
    }, [_v2, _v3]);
    return (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      marginRight: (0, _v3.rem)(4),
      children: (0, _v1.jsx)(_v5.CircleShapeFilled, {
        className: (0, _v7.createDomName)(_v1, "icon"),
        color: _v4,
        width: (0, _v3.rem)(8),
        height: (0, _v3.rem)(8),
        "data-color": _v4
      })
    });
  }]);
}