{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7({
    children: _v0,
    isVisible: _v1
  }) {
    let _v2 = (0, _v3.useMemo)(() => ({
      "&::after": {
        content: '""',
        position: "absolute",
        top: (0, _v5.rem)(-4),
        right: (0, _v5.rem)(-4),
        width: (0, _v5.rem)(8),
        height: (0, _v5.rem)(8),
        borderRadius: (0, _v5.rem)(4),
        background: "red.500",
        display: _v1 ? "block" : "none"
      }
    }), [_v1]);
    return (0, _v1.jsx)(_v6.Box, {
      position: "relative",
      width: (0, _v5.rem)(24),
      height: (0, _v5.rem)(24),
      sx: _v2,
      children: _v0
    });
  }
  _v0.s(["IconNotification", 0, _v7], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = (0, _v3.memo)(function ({
    isActive: _v0,
    isGlobal: _v1 = !0,
    isManagementAccessed: _v2,
    chatContext: {
      isEnabled: _v3,
      isBackstageEnabled: _v4,
      enabledAt: _v5,
      hydratedAt: _v6,
      [_v9.EChatType.BACKSTAGE]: {
        messages: _v7
      },
      [_v9.EChatType.PUBLIC]: {
        messages: _v8
      }
    } = (0, _v2.useManager)(_v8.ChatManager)
  }) {
    let {
        initialState: {
          renderAt: _v9
        }
      } = (0, _v11.useLiveGlobals)(),
      _v10 = (0, _v3.useRef)((_v1 ? _v9 : (0, _v10.getAbsoluteNow)()) + 500),
      [_v11, _v12] = (0, _v3.useState)(!1),
      _v13 = Object.values(_v2 && _v4 ? {
        ..._v7,
        ..._v8
      } : _v8).reduce((_v0, _v1) => _v0 && _v0.createdAt > _v1.createdAt ? _v0 : _v1, null);
    return (0, _v3.useEffect)(() => {
      _v12(() => _v0 ? (_v10.current = (0, _v10.getAbsoluteNow)(), !1) : !!(_v3 && ((_v13?.createdAt || 0) > _v10.current || _v5 && _v5 > _v10.current)));
    }, [_v0, _v13, _v3, _v5]), (0, _v3.useEffect)(() => {
      _v6 && (_v10.current = Math.max(_v6 + 100, _v10.current));
    }, [_v6]), (0, _v1.jsx)(_v7, {
      isVisible: _v11,
      children: (0, _v1.jsx)(_v4.Chats, {})
    });
  });
  _v0.s(["PanelChatIcon", 0, _v12], 0);
  var _v13 = _v0.i(0);
  _v0.s(["getElementVerticalScroll", 0, function (_v0) {
    return _v0.scrollHeight - (_v0.scrollTop + _v0.clientHeight);
  }, "scrollElementIntoView", 0, function (_v0, _v1 = {}) {
    let _v2 = (0, _v13.detectBrowser)(),
      _v3 = _v2?.name === "firefox",
      _v4 = {
        ..._v1,
        ...(_v3 && {
          behavior: "auto"
        })
      };
    _v0.scrollIntoView(_v4);
  }, "scrollToVerticalEnd", 0, function (_v0, _v1 = "smooth") {
    _v0.scrollTo({
      left: 0,
      top: _v0.scrollHeight,
      behavior: _v1
    });
  }, "transformHorizontalScrollsToVertical", 0, function (_v0) {
    let _v1 = _v0 => {
      let {
        deltaY: _v1
      } = _v0;
      0 !== _v1 && -0 !== _v1 && (_v0.scrollLeft = _v0.scrollLeft + _v1, _v0.stopPropagation(), _v0.preventDefault());
    };
    return _v0.addEventListener("mousewheel", _v1), () => _v0.removeEventListener("mousewheel", _v1);
  }], 0);
}