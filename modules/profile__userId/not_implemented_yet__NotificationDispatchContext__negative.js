{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v2.default.createContext({
      showing: !1
    }),
    _v6 = _v2.default.createContext(() => Promise.reject(Error("not implemented yet")));
  _v0.s(["NotificationDispatchContext", 0, _v6, "default", 0, function ({
    children: _v0
  }) {
    let _v1 = (0, _v3.useToast)(),
      _v2 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v0 ?? {
          content: (0, _v1.jsx)(_v1.Fragment, {
            children: _v4.default.SavedChanges
          })
        };
        _v1({
          title: _v1.content,
          status: "negative" === _v1.status ? "warning" : _v1.status ?? "info",
          duration: _v1.duration ?? 0,
          onCloseComplete: _v1.onComplete
        });
      }, [_v1]);
    return (0, _v1.jsx)(_v6.Provider, {
      value: _v2,
      children: (0, _v1.jsx)(_v5.Provider, {
        value: {
          showing: !1
        },
        children: _v0
      })
    });
  }], 0);
  let _v7 = (0, _v2.createContext)({
    editMode: !1,
    idOrUserName: "",
    userId: -1
  });
  _v0.s(["default", 0, _v7], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  function _v13(_v0) {
    if ((0, _v12.isRecord)(_v0) && Array.isArray(_v0.data)) {
      let _v0 = _v0.data;
      delete _v0.data, Object.assign(_v0, {
        items: _v0
      });
    }
    return (0, _v11.camelize)(_v0);
  }
  function _v14(_v0) {
    return "?" + Object.keys(_v0).reduce((_v0, _v1) => (_v0.push(`${encodeURIComponent(_v1)}=${encodeURIComponent(function _v0(_v1) {
      if ("string" == typeof _v1) return _v1;
      if ("number" == typeof _v1 || "boolean" == typeof _v1) return _v1.toString();
      if (Array.isArray(_v1)) return _v1.map(_v0).join(",");
      throw Error(`Unable to encode ${typeof _v1} to query string`);
    }(_v0[_v1]).toString())}`), _v0), []).join("&");
  }
  async function _v15(_v0, _v1, _v2, _v3, _v4, _v5 = _v10.HTTPMethods.GET, _v6, _v7) {
    let _v8 = `//${_v0}/${_v3}${_v4 ? _v14((0, _v9.decamelizeDeep)(_v4)) : ""}`,
      _v9 = {
        method: _v5,
        headers: {
          Authorization: `jwt ${_v1}`,
          Accept: "application/vnd.vimeo.*; version=3.4.2",
          "Content-Type": "application/json",
          "Accept-Language": _v2,
          ...(_v7 || {})
        }
      };
    (_v5 === _v10.HTTPMethods.PUT || _v5 === _v10.HTTPMethods.PATCH || _v5 === _v10.HTTPMethods.POST) && (_v9.body = JSON.stringify(_v6));
    let _v10 = await fetch(_v8, _v9);
    return _v10.ok ? _v5 === _v10.HTTPMethods.DELETE ? Promise.resolve() : _v10.json().then(_v0 => _v13(_v0)).catch(() => {}) : Promise.reject(_v10);
  }
  _v0.s(["buildQueryString", 0, _v14, "standardizeResponseObject", 0, _v13], 0);
  var _v16 = _v10;
  _v0.s(["default", 0, function () {
    let _v0 = (0, _v8.useViewer)(),
      _v1 = _v0?.apiUrl,
      _v2 = _v0?.jwt,
      _v3 = _v0?.locale,
      _v4 = (0, _v2.useRef)(new Map());
    return _v1 && _v2 && _v3 && (_v4.current.set("apiUrl", _v1), _v4.current.set("jwt", _v2), _v4.current.set("locale", _v3)), (0, _v2.useCallback)((_v0, _v1, _v2 = _v16.HTTPMethods.GET, _v3, _v4) => {
      let _v5 = _v4.current.get("apiUrl"),
        _v6 = _v4.current.get("jwt"),
        _v7 = _v4.current.get("locale");
      return _v5 && _v6 && _v7 ? _v15(_v5, _v6, _v7, _v0, _v1, _v2, _v3, _v4) : Promise.reject(Error("not ready yet"));
    }, [_v4, _v2, _v1, _v3]);
  }], 0);
}