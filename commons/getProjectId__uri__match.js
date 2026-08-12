{
  "use strict";

  _v0.s(["getProjectId", 0, _v0 => {
    let _v1 = _v0.uri.match(/.*\/([0-9]+)$/);
    return _v1 && _v1.length > 1 ? parseInt(_v1[1], 10) : null;
  }]);
}