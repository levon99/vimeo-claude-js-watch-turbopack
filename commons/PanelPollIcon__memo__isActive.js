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
  let _v9 = (0, _v3.memo)(function ({
    isActive: _v0,
    pollContext: {
      polls: _v1,
      activePollId: _v2
    } = (0, _v2.useManager)(_v6.PollManager, ({
      polls: _v0,
      activePollId: _v1
    }) => [_v0, _v1])
  }) {
    let {
        initialState: {
          renderAt: _v3
        }
      } = (0, _v8.useLiveGlobals)(),
      _v4 = (0, _v3.useRef)(_v3 + 100),
      _v5 = (0, _v3.useRef)(_v7.EPollState.OPENED),
      [_v6, _v7] = (0, _v3.useState)(!1),
      _v8 = _v2 ? _v1[_v2] : null;
    return (0, _v3.useEffect)(() => {
      _v7(() => !!_v8 && (_v0 ? (_v4.current = _v8?.updatedAt ? _v8?.updatedAt : _v8.createdAt, _v5.current = _v8.state, !1) : _v8.createdAt > _v4.current || _v8?.updatedAt > _v4.current || _v8.state !== _v5.current));
    }, [_v0, _v8]), (0, _v1.jsx)(_v5.IconNotification, {
      isVisible: _v6,
      children: (0, _v1.jsx)(_v4.ChartGrowthAlt, {})
    });
  });
  _v0.s(["PanelPollIcon", 0, _v9]);
}