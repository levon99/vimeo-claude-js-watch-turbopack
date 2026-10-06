{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2,
      pictureId: _v3
    },
    ..._v4
  }) {
    return (0, _v1.measureLatency)("getVideoAnimatedThumbsetStatus", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/animated_thumbsets/${_v3}/status?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  _v0.i(0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["usePollGif", 0, function (_v0, _v1) {
    let _v2,
      _v3 = _v0?.find(_v0 => _v0?.status === "started"),
      [_v4, {
        data: _v5,
        called: _v6
      }] = function () {
        let {
            mutate: _v0
          } = (0, _v4.useSWRConfig)(),
          {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v7.useGctlConfig)(),
          [_v5, _v6] = (0, _v5.useInternalState)();
        return [(0, _v6.useCallback)(async _v0 => {
          _v6({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v0(`/videos/${_v0.where.videoId}/animated_thumbsets/${_v0.where.pictureId}/status${(0, _v5.serializeQuery)(_v0)}`, _v3({
              ..._v0,
              baseUrl: _v1,
              headers: {
                ..._v0.headers,
                "Content-Type": "application/json",
                Authorization: _v2 ? `jwt ${_v2}` : "",
                "Vimeo-Page": `${_v3}`,
                "Accept-Language": _v4 ?? "en"
              }
            }));
            _v6({
              type: "SUCCESS",
              payload: _v0
            });
          } catch (_v0) {
            _v6({
              type: "FAILURE",
              payload: _v0
            });
          }
        }, [_v1, _v3, _v2, _v4, _v6]), _v5];
      }(),
      _v7 = !!_v3,
      _v8 = (_v2 = _v3?.clipUri) ? parseInt(_v2.split("/")[2], 10) : 0;
    (0, _v8.usePoll)(() => {
      if (_v8) {
        if (_v6 && _v5?.status !== "started" && _v3?.uri === _v5?.uri) return void _v1();
        _v4({
          where: {
            videoId: _v8,
            pictureId: _v3?.uri.split("animated_thumbsets/")[1] || ""
          },
          select: ["status", "uri"]
        });
      }
    }, _v7);
  }], 0);
}