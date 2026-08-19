{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2,
      versionId: _v3
    },
    ..._v4
  }) {
    return (0, _v3.measureLatency)("postVideoVersionRestore", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/versions/${_v3}/restore?fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  _v0.s(["postVideoVersionRestore", 0, _v5], 0);
  let _v6 = ["active", "configUrl", "createdTime", "filename", "upload.status", "uri", "user.name", "versionTranscodeStatus"];
  async function _v7(_v0, _v1, _v2) {
    return _v5({
      ..._v2,
      where: {
        videoId: _v0,
        versionId: _v1
      },
      select: _v6
    });
  }
  _v0.s(["restoreVersion", 0, _v7], 0), _v0.s(["useRestoreVersionWorkflow", 0, function () {
    let [_v0, _v1] = (0, _v1.useState)(!1),
      {
        baseUrl: _v2,
        jwt: _v3
      } = (0, _v2.useGctlConfig)();
    return {
      restore: async (_v0, _v1, _v2) => {
        _v1(!0);
        let {
            headers: _v3,
            ..._v4
          } = _v2 ?? {},
          _v5 = _v3 ? {
            Authorization: `jwt ${_v3}`
          } : {};
        try {
          return await _v7(_v0, _v1, {
            baseUrl: _v2,
            headers: {
              ..._v5,
              ..._v3
            },
            ..._v4
          });
        } finally {
          _v1(!1);
        }
      },
      isRestoreInProgress: _v0
    };
  }], 0);
}