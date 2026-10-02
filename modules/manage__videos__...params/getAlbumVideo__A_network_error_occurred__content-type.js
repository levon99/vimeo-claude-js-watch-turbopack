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
      albumId: _v2,
      videoId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v3.measureLatency)("getAlbumVideo", "GET", async () => {
      let _v0 = await fetch(`${_v0}/albums/${_v2}/videos/${_v3}?${(0, _v4.searchQueryString)(_v4)}&fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  async function _v6({
    baseUrl: _v0,
    where: {
      albumId: _v1,
      videoId: _v2
    },
    ..._v3
  }) {
    return (0, _v3.measureLatency)("putAlbumVideo", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/albums/${_v1}/videos/${_v2}`, {
        ..._v3,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  async function _v7({
    baseUrl: _v0,
    where: {
      albumId: _v1,
      videoId: _v2
    },
    ..._v3
  }) {
    return (0, _v3.measureLatency)("deleteAlbumVideo", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/albums/${_v1}/videos/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  function _v12(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v11.useGctlConfig)();
    return (0, _v9.default)(_v2 ? `/albums/${_v2.where.albumId}/videos/${_v2.where.videoId}${(0, _v2.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v5({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  function _v13() {
    let {
        mutate: _v0
      } = (0, _v10.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v11.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/albums/${_v0.where.albumId}/videos/${_v0.where.videoId}${(0, _v2.serializeQuery)(_v0)}`, _v5({
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
  }
  "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v12, {
    endpoint: "/albums/:albumId/videos/:videoId",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v13, {
    endpoint: "/albums/:albumId/videos/:videoId",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v10.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v11.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/albums/${_v0.where.albumId}/videos/${_v0.where.videoId}${(0, _v2.serializeQuery)(_v0)}`, _v6({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  }, {
    endpoint: "/albums/:albumId/videos/:videoId",
    method: "PUT"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v10.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v11.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/albums/${_v0.where.albumId}/videos/${_v0.where.videoId}${(0, _v2.serializeQuery)(_v0)}`, _v7({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  }, {
    endpoint: "/albums/:albumId/videos/:videoId",
    method: "DELETE"
  }), _v0.s(["useGetAlbumVideo", 0, _v12, "useGetAlbumVideoLazy", 0, _v13], 0);
  var _v14 = _v0.i(0);
  let _v15 = {
      forceCollectionUri: !0
    },
    _v16 = () => {
      try {
        if (document?.referrer) return document.referrer;
        return document?.querySelector('meta[name="referrer"]')?.getAttribute("content") || "";
      } catch (_v0) {
        return "";
      }
    },
    _v17 = async _v0 => {
      let _v1 = await fetch(_v0);
      if (404 === _v1.status) throw new _v4.NetworkError("Not found", _v1.status, _v1);
      if (!_v1.ok) {
        let _v0 = await _v1.json();
        throw new _v4.NetworkError("A network error occurred", _v1.status, (0, _v4.deepCamelCase)(_v0));
      }
      let _v2 = await _v1.json();
      return (0, _v4.deepCamelCase)(_v2);
    };
  _v0.s(["useGetAlbumVideoData", 0, (_v0, _v1, _v2, _v3 = !1, _v4 = {}) => {
    let _v5,
      _v6 = (0, _v14.useViewer)(),
      _v7 = (_v5 = `album-signature-${_v0}`, document.querySelector(`meta[name=${_v5}]`)?.getAttribute("content")),
      _v8 = _v16(),
      {
        data: _v9,
        error: _v10,
        isLoading: _v11
      } = ((_v0, _v1, _v2 = !1) => {
        let _v3 = (0, _v14.useViewer)(),
          _v4 = new URLSearchParams(window.location.search).get("sh");
        return (0, _v9.default)(() => {
          let _v0;
          if (!_v3 || _v2) return null;
          let _v1 = {
            ...(_v4 && {
              sh: _v4
            }),
            ...(_v1?.isShowcaseEmbedded && {
              referrer: encodeURIComponent(_v16() || ""),
              is_embed: !0
            })
          };
          return _v0 ? `/showcase/${_v0}/auth${(_v0 = Object.entries(_v1).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&")) ? `?${_v0}` : ""}` : "/auth";
        }, _v17, {
          revalidateOnFocus: !1,
          shouldRetryOnError: !1
        });
      })(Number(_v0), {
        isShowcaseEmbedded: !1
      }, _v3),
      _v12 = _v10 || _v11 ? "" : _v9?.hashedPass,
      _v13 = {
        referrer: _v8
      };
    return _v12(() => !_v3 && _v6 && _v0 && _v1 && null !== _v7 ? {
      where: {
        albumId: _v0,
        videoId: _v1
      },
      select: _v2,
      query: {
        ..._v15,
        ..._v13,
        ...(_v12 && {
          password: _v12
        }),
        ...(_v7 && {
          albumSignature: _v7,
          albumUri: `albums/${_v0}`
        }),
        ...(_v4 && {
          ..._v4
        })
      },
      headers: {
        Accept: "application/vnd.vimeo.albumvideo;version=3.4.12"
      }
    } : null, {
      revalidateOnFocus: !1
    });
  }], 0);
}