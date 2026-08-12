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
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = ({
    playerAssetUrls: _v0,
    userId: _v1,
    folderId: _v2,
    folderData: _v3
  }) => {
    let _v4 = (0, _v3.useContext)(_v19.ViewerContext),
      _v5 = (0, _v1.jsxs)(_v2.default, {
        children: [(0, _v1.jsx)("title", {
          children: _v3?.name ? (0, _v13.translate)({
            singular: "{PAGE_TITLE} on Vimeo",
            replacements: {
              PAGE_TITLE: _v3.name
            },
            dictionary: {
              es: {
                singular: "{PAGE_TITLE} en Vimeo"
              },
              "de-DE": {
                singular: "{PAGE_TITLE} auf Vimeo"
              },
              "fr-FR": {
                singular: "{PAGE_TITLE} sur Vimeo"
              },
              "ja-JP": {
                singular: "{PAGE_TITLE} — Vimeo上"
              },
              "ko-KR": {
                singular: "{PAGE_TITLE} — Vimeo에서"
              },
              "pt-BR": {
                singular: "{PAGE_TITLE} no Vimeo"
              },
              "zh-CN": {
                singular: "{PAGE_TITLE} 在 Vimeo 上"
              }
            }
          }) : (0, _v13.translate)("Vimeo")
        }), (0, _v1.jsx)("meta", {
          name: "robots",
          content: "noindex, nofollow"
        }), (0, _v1.jsx)("meta", {
          name: "description",
          content: (0, _v13.translate)({
            singular: "Join the web’s most supportive community of creators and get high-quality tools for hosting, sharing, and streaming videos in gorgeous HD and 4K with no ads.",
            dictionary: {
              es: {
                singular: "Únete a la comunidad de creadores más acogedora de la red y obtén herramientas de alta calidad para alojar, compartir y emitir videos en continuo en alta definición y 4K sin anuncios."
              },
              "de-DE": {
                singular: "Komm an Board zu der hilfreichsten Community im ganzen Internet und erhalte qualitativ hochwertige Tools für Hosten, Teilen und Streamen von Videos in wunderschönem HD und 4K ganz ohne Werbung."
              },
              "fr-FR": {
                singular: "Rejoignez la communauté de créateurs de vidéos la plus passionnée du Web, et bénéficiez d'outils de grande qualité pour héberger, partager et streamer vos vidéos en sublime HD et 4k sans pubs."
              },
              "ja-JP": {
                singular: " ウェブで最も協力的なクリエイターコミュニティで、HDや4K動画のホスティング、共有、ストリーミングなど、たくさんのパワフルなツールを広告無しで活用しよう。"
              },
              "ko-KR": {
                singular: "웹에서 가장 풍부한 지원을 제공하는 창작가 커뮤니티와 함께하여 광고 없는 멋진 HD 및 4K 동영상을 호스팅, 공유 및 스트리밍할 수 있는 고품질 도구들을 만나보세요."
              },
              "pt-BR": {
                singular: "Junte-se à comunidade de criadores mais prestativa da web e obtenha ferramentas de alta qualidade para hospedar, compartilhar e transmitir vídeos, em incrível Alta Definição (HD) e em 4K, sem anúncios."
              },
              "zh-CN": {
                singular: "加入网络上最有支持力的创作者社区，获取优质工具来托管、分享和直播精美的高清和 4K 视频，而且没有广告。"
              }
            }
          })
        })]
      });
    if (!_v4) return _v5;
    if (!_v3) return _v4?.user ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v5, (0, _v1.jsx)(_v15.ErrorPage, {
        error: new _v5.ResourceNotFoundError()
      })]
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v5, (0, _v1.jsx)(_v14.BrandedLogin, {
        metaUrl: `/sso/project/${_v2}/meta`,
        errorConstructor: _v5.UnauthorizedError
      })]
    });
    (0, _v9.setCdnUrl)(_v4.viewmasterCdnUrl);
    let _v6 = {
      locale: _v4.locale
    };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v5, (0, _v1.jsx)(_v4.SWRConfig, {
        value: {
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        },
        children: (0, _v1.jsxs)(_v8.ConfigContext.Provider, {
          value: _v6,
          children: [(0, _v1.jsx)(_v7.App, {
            folderId: _v2,
            folderData: _v3,
            playerAssetUrls: _v0,
            userId: _v1,
            viewer: _v4
          }), (0, _v1.jsx)(_v18.VimeoReviewUpsellPromo, {})]
        })
      })]
    });
  };
  (0, _v6.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.userId,
      _v2 = _v0.params?.folderId;
    if (!_v1 || !_v2) return {
      notFound: !0
    };
    let _v3 = parseInt(_v1, 10),
      _v4 = parseInt(_v2, 10),
      _v5 = {
        userId: _v3,
        folderId: _v4,
        hasThemeSupport: !0,
        hasUploader: !0
      },
      _v6 = (0, _v12.getUserProject)({
        where: {
          userId: _v3,
          projectId: _v4
        },
        select: _v10.DEFAULT_FOLDER_API_FIELDS,
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      }),
      _v7 = (0, _v11.getMePreferences)({
        select: ["toid"],
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      });
    try {
      let _v0 = (await _v7).toid;
      _v0 && _v0 !== _v3 && (await (0, _v11.patchMePreferences)({
        variables: {
          teamUri: `/users/${_v3}`
        },
        select: ["toid"],
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      }));
    } catch (_v0) {
      console.error("Failed to update preferred team owner:", _v0);
    }
    try {
      let _v0 = await _v6,
        _v1 = _v0.isPrivateToUser ? "true" : "false",
        _v2 = _v0.metadata.interactions.reviewRedirectLink;
      if (_v2) return {
        redirect: {
          destination: _v2,
          permanent: !0
        }
      };
      if (_v0.query.isPrivate !== _v1) {
        let _v0 = {
          ..._v0.query
        };
        delete _v0.userId, delete _v0.folderId, _v0.isPrivate = _v1;
        let _v1 = new URLSearchParams(_v0);
        return {
          redirect: {
            destination: `/user/${_v3}/folder/${_v4}?${_v1.toString()}`,
            permanent: !1
          }
        };
      }
      return {
        props: {
          ..._v5,
          folderData: _v0
        }
      };
    } catch (_v0) {
      console.log("Failed to fetch folder data:", _v0);
    }
    return {
      props: _v5
    };
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0
  }), _v20.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v17.VideoLibraryLayout, {
    hasUploader: _v1.hasUploader,
    sideNavContent: (0, _v1.jsx)(_v16.SideNavContent, {
      surface: "library"
    }),
    sideNavSurface: "library",
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v20], 0);
}