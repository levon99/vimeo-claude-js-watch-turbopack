{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.createContext)({
    editMode: !1,
    idOrUserName: "",
    userId: -1
  });
  _v0.s(["default", 0, _v2], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8(_v0) {
    if ((0, _v7.isRecord)(_v0) && Array.isArray(_v0.data)) {
      let _v0 = _v0.data;
      delete _v0.data, Object.assign(_v0, {
        items: _v0
      });
    }
    return (0, _v6.camelize)(_v0);
  }
  function _v9(_v0) {
    return "?" + Object.keys(_v0).reduce((_v0, _v1) => (_v0.push(`${encodeURIComponent(_v1)}=${encodeURIComponent(function _v0(_v1) {
      if ("string" == typeof _v1) return _v1;
      if ("number" == typeof _v1 || "boolean" == typeof _v1) return _v1.toString();
      if (Array.isArray(_v1)) return _v1.map(_v0).join(",");
      throw Error(`Unable to encode ${typeof _v1} to query string`);
    }(_v0[_v1]).toString())}`), _v0), []).join("&");
  }
  async function _v10(_v0, _v1, _v2, _v3, _v4, _v5 = _v4.HTTPMethods.GET, _v6, _v7) {
    let _v8 = `//${_v0}/${_v3}${_v4 ? _v9((0, _v5.decamelizeDeep)(_v4)) : ""}`,
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
    (_v5 === _v4.HTTPMethods.PUT || _v5 === _v4.HTTPMethods.PATCH || _v5 === _v4.HTTPMethods.POST) && (_v9.body = JSON.stringify(_v6));
    let _v10 = await fetch(_v8, _v9);
    return _v10.ok ? _v5 === _v4.HTTPMethods.DELETE ? Promise.resolve() : _v10.json().then(_v0 => _v8(_v0)).catch(() => {}) : Promise.reject(_v10);
  }
  _v0.s(["buildQueryString", 0, _v9, "standardizeResponseObject", 0, _v8], 0), _v0.s(["default", 0, function () {
    let _v0 = (0, _v3.useViewer)(),
      _v1 = _v0?.apiUrl,
      _v2 = _v0?.jwt,
      _v3 = _v0?.locale,
      _v4 = (0, _v1.useRef)(new Map());
    return _v1 && _v2 && _v3 && (_v4.current.set("apiUrl", _v1), _v4.current.set("jwt", _v2), _v4.current.set("locale", _v3)), (0, _v1.useCallback)((_v0, _v1, _v2 = _v4.HTTPMethods.GET, _v3, _v4) => {
      let _v5 = _v4.current.get("apiUrl"),
        _v6 = _v4.current.get("jwt"),
        _v7 = _v4.current.get("locale");
      return _v5 && _v6 && _v7 ? _v10(_v5, _v6, _v7, _v0, _v1, _v2, _v3, _v4) : Promise.reject(Error("not ready yet"));
    }, [_v4, _v2, _v1, _v3]);
  }], 0);
}