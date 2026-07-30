{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5(_v0) {
    return _v0.res.setHeader("X-Robots-Tag", "noindex, nofollow"), (0, _v1.setCacheHeaders)(_v0.req, _v0.res, {
      ttl: 0
    }), {
      notFound: !0
    };
  }
  (0, _v2.withPageSetup)(async _v0 => {
    let _v1,
      _v2 = _v0.params?.token;
    if ("string" != typeof _v2 || 0 === _v2.length) return _v5(_v0);
    try {
      let _v0 = await fetch(`${_v0.baseUrl}/sharing_links/${encodeURIComponent(_v2)}/resolve`, {
        headers: {
          ..._v0.headers,
          Accept: "application/json"
        }
      });
      if (!_v0.ok) return _v5(_v0);
      _v1 = await _v0.json();
    } catch {
      return _v5(_v0);
    }
    if (!_v1.clip_id) return _v5(_v0);
    let _v3 = {
        ..._v0,
        params: {
          ..._v0.params,
          clipId: String(_v1.clip_id),
          ...(_v1.clip_hash ? {
            clipHash: _v1.clip_hash
          } : {})
        }
      },
      _v4 = await (0, _v4.clipPageGetServerSideProps)(_v3, {
        notFoundHandling: "caller"
      });
    if ("props" in _v4 && _v4.props) {
      let _v0 = await Promise.resolve(_v4.props);
      return {
        ..._v4,
        props: {
          ..._v0,
          isExpiredShareLink: !0 === _v1.has_expired,
          pageMetadata: {
            ..._v0.pageMetadata,
            shouldHaveRobotsMeta: !0
          }
        }
      };
    }
    return "notFound" in _v4 ? _v5(_v0) : _v4;
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0,
    inlineModbox: !0
  });
  let _v6 = _v3.default;
  _v0.s(["__N_SSP", 0, !0, "default", 0, _v6], 0);
}