{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2,
      versionId: _v3
    },
    ..._v4
  }) {
    return (0, _v2.measureLatency)("postVideoVersionRestore", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/versions/${_v3}/restore?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST"
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  _v0.s(["postVideoVersionRestore", 0, _v4], 0);
  let _v5 = ["active", "configUrl", "createdTime", "filename", "upload.status", "uri", "user.name", "versionTranscodeStatus"];
  async function _v6(_v0, _v1, _v2) {
    return _v4({
      ..._v2,
      where: {
        videoId: _v0,
        versionId: _v1
      },
      select: _v5
    });
  }
  _v0.s(["restoreVersion", 0, _v6], 0), _v0.s(["useRestoreVersionWorkflow", 0, function () {
    let [_v0, _v1] = (0, _v1.useState)(!1);
    return {
      restore: (0, _v1.useCallback)(async (_v0, _v1, _v2) => {
        _v1(!0);
        try {
          return await _v6(_v0, _v1, _v2);
        } finally {
          _v1(!1);
        }
      }, []),
      isRestoreInProgress: _v0
    };
  }], 0);
}