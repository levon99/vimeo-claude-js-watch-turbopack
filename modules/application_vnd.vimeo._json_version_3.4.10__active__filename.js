{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = ({
    playerAssetUrls: _v0,
    embedPlayerConfigUrl: _v1,
    isDeleted: _v2
  }) => (0, _v1.jsx)(_v7.VideoVersionContentPage, {
    playerAssetUrls: _v0,
    embedPlayerConfigUrl: _v1,
    isDeleted: _v2
  });
  _v8.getLayout = _v0 => (0, _v1.jsx)(_v1.Fragment, {
    children: _v0
  }), (0, _v3.withPageSetup)(async _v0 => {
    if (!_v0.query.clipId || Array.isArray(_v0.query.clipId) || !_v0.query.versionId) return {
      notFound: !0
    };
    if ((0, _v4.isLoggedOut)(_v0.req)) return {
      redirect: {
        destination: `/log_in?redirect=/videos/${_v0.query.clipId}/${_v0.query.clipHash}/versions/${_v0.query.versionId}`,
        statusCode: 302
      }
    };
    let _v1 = Number(_v0.query.clipId),
      _v2 = Number(_v0.query.versionId);
    if (isNaN(_v1) || isNaN(_v2)) return {
      notFound: !0
    };
    let _v3 = {
      ..._v0.headers,
      Accept: "application/vnd.vimeo.*+json;version=3.4.10"
    };
    try {
      let [_v0, _v1] = await Promise.all([(0, _v6.getVideoVersion)({
        headers: _v3,
        baseUrl: _v0.baseUrl,
        where: {
          videoId: _v1,
          versionId: _v2
        },
        select: ["active", "uri", "filename", "isPlayable", "isDeleted", "embedPlayerConfigUrl"]
      }), (0, _v5.getVideo)({
        headers: _v0.headers,
        baseUrl: _v0.baseUrl,
        where: {
          videoId: _v1
        },
        select: ["privacy", "metadata.interactions.edit.uri", "user.uri"]
      })]);
      if (!_v1.metadata?.interactions?.edit?.uri || !_v0?.isDeleted && !_v0?.isPlayable) return {
        notFound: !0
      };
      let {
        hasDetailedVideoVersionHistory: _v2
      } = await (0, _v2.fetchAndFormatCapabilties)({
        userId: Number(_v1.user.uri.split("/").pop()),
        capabilities: ["hasDetailedVideoVersionHistory"],
        jwt: _v0.jwt ?? "",
        apiUrl: _v0.baseUrl ?? ""
      });
      if (!_v2) return {
        notFound: !0
      };
      let _v3 = _v1.metadata.interactions.edit.uri.split(":").pop();
      if (_v1.privacy?.view === "unlisted" && _v3 !== _v0.query.clipHash) return {
        redirect: {
          destination: _v0.active ? `/manage/videos/${_v1}/${_v3}` : `/videos/${_v1}/${_v3}/versions/${_v2}`,
          statusCode: 302
        }
      };
      if (_v1.privacy?.view !== "unlisted" && _v0.query.clipHash) return {
        redirect: {
          destination: _v0.active ? `/manage/videos/${_v1}` : `/videos/${_v1}/versions/${_v2}`,
          statusCode: 302
        }
      };
      if (_v0.active) return {
        redirect: {
          destination: `/manage/videos/${_v1}/${_v3}`,
          statusCode: 302
        }
      };
      return {
        props: {
          hasThemeSupport: !0,
          hasUploader: !0,
          versionFileName: _v0.filename || "",
          embedPlayerConfigUrl: _v0.embedPlayerConfigUrl || "",
          isDeleted: _v0.isDeleted
        }
      };
    } catch (_v0) {
      return {
        notFound: !0
      };
    }
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v8], 0);
}