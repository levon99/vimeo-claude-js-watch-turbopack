{
  "use strict";

  _v0.s(["clipUriToId", 0, _v0 => {
    let _v1 = _v0 ? _v0.match(/videos\/(\d+)/) : null;
    return _v1 && _v1.length > 1 ? parseInt(_v1[1]) : null;
  }, "extensionUriToId", 0, _v0 => {
    let _v1 = _v0 ? _v0.match(/extensions\/(\d+)/) : null;
    return _v1 && _v1.length > 1 ? parseInt(_v1[1]) : null;
  }, "policyUriToId", 0, _v0 => {
    let _v1 = _v0 ? _v0.match(/policies\/(\d+)/) : null;
    return _v1 && _v1.length > 1 ? parseInt(_v1[1]) : null;
  }]);
}