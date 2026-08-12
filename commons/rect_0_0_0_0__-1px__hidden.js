{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    RouteAnnouncer: function () {
      return _v10;
    },
    default: function () {
      return _v11;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v5._(_v0.r(0)),
    _v8 = _v0.r(0),
    _v9 = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 0,
      width: "1px",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    },
    _v10 = () => {
      let {
          asPath: _v0
        } = (0, _v8.useRouter)(),
        [_v1, _v2] = _v7.default.useState(""),
        _v3 = _v7.default.useRef(_v0);
      return _v7.default.useEffect(() => {
        if (_v3.current !== _v0) if (_v3.current = _v0, document.title) _v2(document.title);else {
          let _v0 = document.querySelector("h1");
          _v2((_v0?.innerText ?? _v0?.textContent) || _v0);
        }
      }, [_v0]), (0, _v6.jsx)("p", {
        "aria-live": "assertive",
        id: "__next-route-announcer__",
        role: "alert",
        style: _v9,
        children: _v1
      });
    },
    _v11 = _v10;
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}