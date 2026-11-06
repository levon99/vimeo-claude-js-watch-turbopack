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
  let _v11 = ({
    state: _v0,
    eventUrl: _v1
  }) => (0, _v1.jsxs)(_v8.Flex, {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "md",
    p: "lg",
    minHeight: "100vh",
    "data-testid": "live-event-embed-notice",
    children: [(0, _v1.jsx)(_v9.Text, {
      variant: "heading-md",
      textAlign: "center",
      children: (_v0 => {
        switch (_v0) {
          case "blocked":
            return (0, _v10.translate)({
              singular: "This event can't be embedded on this site",
              dictionary: {
                es: {
                  singular: "Este evento no se puede incrustar en este sitio"
                },
                "de-DE": {
                  singular: "Dieses Event kann auf dieser Website nicht eingebettet werden"
                },
                "fr-FR": {
                  singular: "Cet événement ne peut pas être intégré sur ce site"
                },
                "ja-JP": {
                  singular: "このイベントはこのサイトに埋め込めません"
                },
                "ko-KR": {
                  singular: "이 이벤트는 이 사이트에 임베드할 수 없습니다"
                },
                "pt-BR": {
                  singular: "Este evento não pode ser incorporado neste site"
                },
                "zh-CN": {
                  singular: "此活动无法嵌入到此站点"
                }
              }
            });
          case "not-found":
            return (0, _v10.translate)({
              singular: "This event isn't available",
              dictionary: {
                es: {
                  singular: "Este evento no está disponible"
                },
                "de-DE": {
                  singular: "Dieses Event ist nicht verfügbar"
                },
                "fr-FR": {
                  singular: "Cet événement n'est pas disponible"
                },
                "ja-JP": {
                  singular: "このイベントは利用できません"
                },
                "ko-KR": {
                  singular: "이 이벤트를 이용할 수 없습니다"
                },
                "pt-BR": {
                  singular: "Este evento não está disponível"
                },
                "zh-CN": {
                  singular: "此活动不可用"
                }
              }
            });
          case "error":
            return (0, _v10.translate)({
              singular: "This event can't be loaded right now",
              dictionary: {
                es: {
                  singular: "Este evento no se puede cargar en este momento"
                },
                "de-DE": {
                  singular: "Dieses Ereignis kann gerade nicht geladen werden."
                },
                "fr-FR": {
                  singular: "Cet événement ne peut pas être chargé pour le moment"
                },
                "ja-JP": {
                  singular: "このイベントは現在読み込めません"
                },
                "ko-KR": {
                  singular: "이 이벤트를 지금 불러올 수 없습니다"
                },
                "pt-BR": {
                  singular: "Este evento não pode ser carregado no momento"
                },
                "zh-CN": {
                  singular: "该活动当前无法加载"
                }
              }
            });
          default:
            return (0, _v10.translate)({
              singular: "Watch this event on Vimeo",
              dictionary: {
                es: {
                  singular: "Ver este evento en Vimeo"
                },
                "de-DE": {
                  singular: "Dieses Event auf Vimeo ansehen"
                },
                "fr-FR": {
                  singular: "Regarder cet événement sur Vimeo"
                },
                "ja-JP": {
                  singular: "Vimeoでこのイベントを視聴する"
                },
                "ko-KR": {
                  singular: "Vimeo에서 이 이벤트 보기"
                },
                "pt-BR": {
                  singular: "Assista a este evento no Vimeo"
                },
                "zh-CN": {
                  singular: "在 Vimeo 观看此活动"
                }
              }
            });
        }
      })(_v0)
    }), (0, _v1.jsx)(_v7.Button, {
      variant: "primary",
      as: "a",
      href: _v1,
      target: "_blank",
      rel: "noopener noreferrer",
      children: (0, _v10.translate)({
        singular: "Open on Vimeo",
        dictionary: {
          es: {
            singular: "Abrir en Vimeo"
          },
          "de-DE": {
            singular: "Auf Vimeo öffnen"
          },
          "fr-FR": {
            singular: "Ouvrir sur Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoで開く"
          },
          "ko-KR": {
            singular: "Vimeo에서 열기"
          },
          "pt-BR": {
            singular: "Abrir no Vimeo"
          },
          "zh-CN": {
            singular: "在 Vimeo 上打开"
          }
        }
      })
    })]
  });
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = ["vimeo.com", "vimeows.com", "vimeo.dev"];
  (0, _v4.withPageSetup)(async _v0 => {
    var _v1, _v2;
    let _v3 = _v0.params?.params;
    if (!_v3 || "string" == typeof _v3) return {
      notFound: !0
    };
    let {
      eventId: _v4,
      eventHash: _v5,
      path: _v6
    } = (0, _v13.getRouteParams)(_v3);
    if ("" === _v6 || "videos" === _v3[1] || !/^\d+$/.test(_v4)) return {
      notFound: !0
    };
    _v0.res.removeHeader("X-Frame-Options"), _v0.res.setHeader("Cache-Control", "private, no-store"), _v0.res.setHeader("CDN-Cache-Control", "no-store");
    let _v7 = (_v1 = _v0.req.headers.referer, _v2 = _v0.query?.referrer, ((_v0, _v1) => {
        if (void 0 === _v0 || "" === _v0) return !1;
        try {
          let {
            hostname: _v0,
            host: _v1
          } = new URL(_v0);
          if (_v1 === _v1) return !1;
          return !_v17.some(_v0 => _v0 === _v0 || _v0.endsWith(`.${_v0}`));
        } catch {
          return !1;
        }
      })(_v1, _v0.req.headers.host) ? _v1 : void 0 === _v1 || "" === _v1 ? null : "string" == typeof _v2 && "" !== _v2 ? _v2 : null),
      _v8 = _v0.req.headers["crossroads-language"],
      _v9 = ("string" == typeof _v8 && "" !== _v8 ? _v8 : _v0.locale) ?? null,
      _v10 = "content";
    try {
      let _v0 = await (0, _v6.getInternalPageEvent)({
        where: {
          eventId: parseInt(_v4, 10)
        },
        query: {
          embed: !0,
          ...(null !== _v5 && {
            eventHash: _v5
          }),
          ...(null !== _v7 && {
            referrer: _v7
          })
        },
        select: ["embedStatus"],
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      });
      switch (_v0?.embedStatus) {
        case "blocked":
          _v10 = "blocked";
          break;
        case "open_on_vimeo":
          _v10 = "open-on-vimeo";
          break;
        case "ok":
        case void 0:
          _v10 = "content";
      }
    } catch (_v0) {
      _v0 instanceof _v5.NetworkError && 404 === _v0.status ? _v10 = "not-found" : (_v3.serverLogger.error({
        err: _v0,
        event_id: _v4,
        status: _v0 instanceof _v5.NetworkError ? _v0.status : null
      }, "Embed landing page check failed"), _v10 = "error");
    }
    return {
      props: {
        eventId: _v4,
        eventHash: _v5,
        path: _v6,
        contentLocale: _v9,
        referrer: _v7,
        embedState: _v10,
        isIframe: !0,
        bypassAgeVerification: !0,
        bypassEmailVerification: !0,
        isThemePersistent: !1,
        hasThemeSupport: !0,
        layoutOptions: {
          hideGlobalBanners: !0
        }
      }
    };
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0,
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v0 => {
    let _v1,
      _v2,
      {
        referrer: _v3,
        embedState: _v4,
        ..._v5
      } = _v0,
      _v6 = (0, _v16.useViewer)(),
      _v7 = (0, _v14.useOrionLoading)(),
      {
        enable_landing_page_embed: _v8
      } = (0, _v15.useOrionSettingsFields)(["enable_landing_page_embed"]),
      _v9 = (_v1 = _v5.eventId, null !== (_v2 = _v5.eventHash) && "" !== _v2 ? `${_v1}/${_v2}` : _v1),
      _v10 = `/event/${_v9}`,
      _v11 = null;
    return "content" !== _v4 ? _v11 = (0, _v1.jsx)(_v11, {
      state: _v4,
      eventUrl: _v10
    }) : _v6?.user && _v6.strictAgeRestricted && _v6.requiresAgeVerification ? _v11 = (0, _v1.jsx)(_v11, {
      state: "open-on-vimeo",
      eventUrl: _v10
    }) : _v7 || (_v8 ? _v6 && _v5.playerAssetUrls && (_v11 = (0, _v1.jsx)(_v12.LiveEventRecipientView, {
      ..._v5
    })) : _v11 = (0, _v1.jsx)(_v11, {
      state: "open-on-vimeo",
      eventUrl: _v10
    })), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v2.default, {
        children: [(0, _v1.jsx)("title", {
          children: "Vimeo"
        }), (0, _v1.jsx)("meta", {
          name: "robots",
          content: "noindex"
        }), (0, _v1.jsx)("link", {
          rel: "canonical",
          href: `https://vimeo.com/event/${_v5.eventId}`
        })]
      }), _v11]
    });
  }], 0);
}