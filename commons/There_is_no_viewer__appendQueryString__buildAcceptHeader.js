{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = Error("There is no viewer"),
    _v4 = {
      resource: "*",
      version: "3.4.1"
    };
  _v0.s(["appendQueryString", 0, function (_v0, _v1) {
    if (_v0.includes("?")) {
      let _v0 = `&${_v1.substring(1)}`;
      return `${_v0}${_v0}`;
    }
    return `${_v0}${_v1}`;
  }, "buildAcceptHeader", 0, function (_v0 = _v4) {
    if (Array.isArray(_v0)) return _v0.map(({
      resource: _v0 = _v4.resource,
      version: _v1 = _v4.version
    }) => `application/vnd.vimeo.${_v0};version=${_v1}`).join(",");
    let {
      resource: _v1 = _v4.resource,
      version: _v2 = _v4.version
    } = _v0;
    return `application/vnd.vimeo.${_v1};version=${_v2}`;
  }, "buildQueryString", 0, function (_v0) {
    return "?" + Object.keys(_v0).reduce((_v0, _v1) => (_v0.push(`${encodeURIComponent(_v1)}=${encodeURIComponent(function _v0(_v1) {
      if ("string" == typeof _v1) return _v1;
      if ("number" == typeof _v1 || "boolean" == typeof _v1) return _v1.toString();
      if (Array.isArray(_v1)) return _v1.map(_v0).join(",");
      throw Error(`Unable to encode ${typeof _v1} to query string`);
    }(_v0[_v1]).toString())}`), _v0), []).join("&");
  }, "noViewerError", 0, _v3, "standardizeResponseObject", 0, function (_v0) {
    if ((0, _v2.isRecord)(_v0) && _v0.data && Array.isArray(_v0.data)) {
      let _v0 = _v0.data;
      delete _v0.data, Object.assign(_v0, {
        items: _v0
      });
    }
    return (0, _v1.camelize)(_v0);
  }]);
}