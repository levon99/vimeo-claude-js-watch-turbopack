{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8({
    children: _v0,
    ..._v1
  }) {
    return (0, _v1.jsx)(_v7.Box, {
      as: "span",
      position: "relative",
      ..._v1,
      children: _v0
    });
  }
  var _v9 = _v0.i(0);
  _v0.s(["ChatTabLabel", 0, function ({
    className: _v0,
    isSelected: _v1,
    chatType: _v2,
    label: _v3
  }) {
    let {
        [_v2]: {
          messages: _v4
        }
      } = (0, _v2.useManager)(_v9.ChatManager),
      _v5 = (0, _v6.useChatHistoryMessages)(_v4),
      _v6 = (0, _v3.useRef)(Date.now()),
      [_v7, _v8] = (0, _v3.useState)(!1),
      _v9 = _v5[_v5.length - 1];
    return (0, _v3.useEffect)(() => {
      _v9 && (_v1 ? (_v6.current = _v9.createdAt, _v8(!1)) : _v8(_v9.createdAt > _v6.current));
    }, [_v1, _v9]), (0, _v1.jsxs)(_v8, {
      className: _v0,
      lineHeight: (0, _v4.rem)(16),
      children: [_v3, (0, _v1.jsx)(_v5.CircleShapeFilled, {
        position: "absolute",
        boxSize: `${(0, _v4.rem)(16)}!important`,
        minWidth: `${(0, _v4.rem)(16)}!important`,
        top: (0, _v4.rem)(-10),
        right: (0, _v4.rem)(-16),
        color: _v7 ? "blue.500" : "transparent"
      })]
    });
  }], 0);
}