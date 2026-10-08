{
  "use strict";

  let _v1 = _v0 => _v0.replace(/[A-Z]/g, _v0 => `_${_v0.toLowerCase()}`);
  _v0.s(["buildResponse", 0, (_v0, _v1) => {
    let _v2 = Object.create(null);
    return _v0.forEach(_v0 => {
      let _v1 = _v0.split(".").map(_v1),
        _v2 = _v1;
      for (let _v0 of _v1) if (_v2 && "object" == typeof _v2 && _v0 in _v2) _v2 = _v2[_v0];else {
        _v2 = void 0;
        break;
      }
      var _v3 = _v2;
      let _v4 = _v2;
      for (let _v0 = 0; _v0 < _v1.length - 1; _v0++) {
        let _v0 = _v1[_v0];
        _v4[_v0] || (_v4[_v0] = Object.create(null)), _v4 = _v4[_v0];
      }
      _v4[_v1[_v1.length - 1]] = _v3;
    }), _v2;
  }], 0);
  var _v2 = _v0.i(0);
  let _v3 = _v0 => {
    let _v1 = {};
    for (let _v0 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v0) && ("object" == typeof _v0[_v0] && null !== _v0[_v0] ? _v1[(0, _v2.intoSnakeCase)(_v0)] = _v3(_v0[_v0]) : _v1[(0, _v2.intoSnakeCase)(_v0)] = _v0[_v0]);
    return _v1;
  };
  _v0.s(["fieldsToSnakeCase", 0, _v0 => _v0.map(_v0 => (0, _v2.intoSnakeCase)(_v0)), "isCIEnv", 0, () => window.location.host.endsWith(".ci.vimeows.com") || window.location.host.endsWith(".cikube.vimeows.com"), "patchFieldsToSnakeCase", 0, _v3], 0);
}