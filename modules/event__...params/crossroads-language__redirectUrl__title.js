{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  (0, _v4.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.params;
    if (!_v1 || "string" == typeof _v1) return {
      notFound: !0
    };
    let {
        eventId: _v2,
        eventHash: _v3,
        path: _v4
      } = (0, _v9.getRouteParams)(_v1),
      _v5 = _v0.req.headers.referer,
      _v6 = _v0.req.headers["crossroads-language"],
      _v7 = ("string" == typeof _v6 && "" !== _v6 ? _v6 : _v0.locale) ?? null;
    try {
      let _v0 = await (0, _v6.getInternalPageEvent)({
        where: {
          eventId: parseInt(_v2, 10)
        },
        query: {
          ...(_v3 && {
            eventHash: _v3
          }),
          ...(_v5 && {
            referrer: _v5
          })
        },
        select: ["redirectUrl"],
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      });
      if (_v0.redirectUrl) return {
        redirect: {
          destination: _v0.redirectUrl,
          permanent: !1
        }
      };
    } catch {
      return {
        notFound: !0
      };
    }
    let _v8 = _v3 ? `${_v2}:${_v3}` : _v2,
      _v9 = null;
    try {
      let _v0 = await (0, _v7.getLiveEvent)({
        where: {
          liveEventId: _v8
        },
        select: ["title", "streamDescription", "streamPrivacy", "pictures.baseLink", "pictures.defaultPicture"],
        ...(_v7 && {
          query: {
            contentLocale: _v7
          }
        }),
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      });
      _v9 = {
        title: _v0.title ?? "",
        description: function (_v0) {
          if (!_v0) return "";
          let _v1 = 160;
          !/[a-z]/.test(_v0) && /[A-Z]/.test(_v0) && (_v1 = Math.floor(_v1 / 2));
          let _v2 = _v0;
          return _v0.length > _v1 && (_v2 = `${_v0.slice(0, _v1).replace(/\s+\S*$/, "")}…`), _v2.replace(/[\r\n]+/g, " ").trim();
        }(_v0.streamDescription),
        isUnlisted: _v0.streamPrivacy?.view === "unlisted",
        ogImage: _v0.pictures && !_v0.pictures.defaultPicture ? _v0.pictures.baseLink : null
      };
    } catch {
      _v9 = null;
    }
    return {
      props: {
        eventId: _v2,
        eventHash: _v3,
        path: _v4,
        contentLocale: _v7,
        hasThemeSupport: !0,
        eventMetadata: _v9
      }
    };
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v0 => {
    let {
        eventMetadata: _v1,
        ..._v2
      } = _v0,
      _v3 = (0, _v3.useContext)(_v10.ViewerContext);
    return (0, _v5.useEnterpriseSiteRedirect)(_v3?.teamUser?.enterpriseSiteDomain), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.default, {
        children: _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)("title", {
            children: _v1.title || "Vimeo"
          }), (0, _v1.jsx)("meta", {
            name: "description",
            content: _v1.description
          }), (0, _v1.jsx)("meta", {
            property: "og:title",
            content: _v1.title
          }), (0, _v1.jsx)("meta", {
            property: "og:description",
            content: _v1.description
          }), _v1.ogImage && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)("meta", {
              property: "og:image",
              content: _v1.ogImage
            }), (0, _v1.jsx)("meta", {
              property: "og:image:secure_url",
              content: _v1.ogImage
            }), (0, _v1.jsx)("meta", {
              property: "og:image:type",
              content: "image/jpeg"
            })]
          }), _v1.isUnlisted && (0, _v1.jsx)("meta", {
            name: "robots",
            content: "noindex, nofollow"
          }), (0, _v1.jsx)("link", {
            rel: "canonical",
            href: `https://vimeo.com/event/${_v2.eventId}`
          })]
        }) : (0, _v1.jsx)("title", {
          children: "Vimeo"
        })
      }), _v3 && _v2.playerAssetUrls ? (0, _v1.jsx)(_v8.LiveEventRecipientView, {
        ..._v2
      }) : null]
    });
  }], 0);
}