{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  (0, _v1.withPageSetup)(async _v0 => {
    let _v1,
      _v2 = _v0.params?.token;
    if ("string" != typeof _v2 || 0 === _v2.length) return {
      notFound: !0
    };
    try {
      let _v0 = await fetch(`${_v0.baseUrl}/sharing_links/${encodeURIComponent(_v2)}/resolve`, {
        headers: {
          ..._v0.headers,
          Accept: "application/json"
        }
      });
      if (!_v0.ok) return {
        notFound: !0
      };
      _v1 = await _v0.json();
    } catch {
      return {
        notFound: !0
      };
    }
    if (!_v1.clip_id) return {
      notFound: !0
    };
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
      _v4 = await (0, _v3.clipPageGetServerSideProps)(_v3);
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
    return _v4;
  });
  let _v4 = _v2.default;
  _v0.s(["__N_SSP", 0, !0, "default", 0, _v4], 0);
}