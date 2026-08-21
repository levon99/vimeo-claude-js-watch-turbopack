{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    default: function () {
      return _v15;
    },
    defaultHead: function () {
      return _v11;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v6._(_v0.r(0)),
    _v9 = _v5._(_v0.r(0)),
    _v10 = _v0.r(0);
  function _v11() {
    return [(0, _v7.jsx)("meta", {
      charSet: "utf-8"
    }, "charset"), (0, _v7.jsx)("meta", {
      name: "viewport",
      content: "width=device-width"
    }, "viewport")];
  }
  function _v12(_v0, _v1) {
    return "string" == typeof _v1 || "number" == typeof _v1 ? _v0 : _v1.type === _v8.default.Fragment ? _v0.concat(_v8.default.Children.toArray(_v1.props.children).reduce((_v0, _v1) => "string" == typeof _v1 || "number" == typeof _v1 ? _v0 : _v0.concat(_v1), [])) : _v0.concat(_v1);
  }
  let _v13 = ["name", "httpEquiv", "charSet", "itemProp"];
  function _v14(_v0) {
    let _v1, _v2, _v3, _v4;
    return _v0.reduce(_v12, []).reverse().concat(_v11().reverse()).filter((_v1 = new Set(), _v2 = new Set(), _v3 = new Set(), _v4 = {}, _v0 => {
      let _v1 = !0,
        _v2 = !1;
      if (_v0.key && "number" != typeof _v0.key && _v0.key.indexOf("$") > 0) {
        _v2 = !0;
        let _v0 = _v0.key.slice(_v0.key.indexOf("$") + 1);
        _v1.has(_v0) ? _v1 = !1 : _v1.add(_v0);
      }
      switch (_v0.type) {
        case "title":
        case "base":
          _v2.has(_v0.type) ? _v1 = !1 : _v2.add(_v0.type);
          break;
        case "meta":
          for (let _v0 = 0, _v1 = _v13.length; _v0 < _v1; _v0++) {
            let _v0 = _v13[_v0];
            if (_v0.props.hasOwnProperty(_v0)) if ("charSet" === _v0) _v3.has(_v0) ? _v1 = !1 : _v3.add(_v0);else {
              let _v0 = _v0.props[_v0],
                _v1 = _v4[_v0] || new Set();
              ("name" !== _v0 || !_v2) && _v1.has(_v0) ? _v1 = !1 : (_v1.add(_v0), _v4[_v0] = _v1);
            }
          }
      }
      return _v1;
    })).reverse().map((_v0, _v1) => {
      let _v2 = _v0.key || _v1;
      return _v8.default.cloneElement(_v0, {
        key: _v2
      });
    });
  }
  let _v15 = function ({
    children: _v0
  }) {
    let _v1 = (0, _v8.useContext)(_v10.HeadManagerContext);
    return (0, _v7.jsx)(_v9.default, {
      reduceComponentsToState: _v14,
      headManager: _v1,
      children: _v0
    });
  };
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}