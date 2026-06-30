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
    _v16 = _v0.i(0);
  function _v17() {
    return (0, _v1.jsxs)(_v2.default, {
      children: [(0, _v1.jsx)("title", {
        children: (0, _v11.translate)("Vimeo")
      }), (0, _v1.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      }), (0, _v1.jsx)("meta", {
        name: "description",
        content: (0, _v11.translate)({
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
  }
  let _v18 = ({
    folderData: _v0,
    folderId: _v1,
    playerAssetUrls: _v2,
    reviewId: _v3,
    userId: _v4,
    showPasswordPage: _v5
  }) => {
    let _v6 = (0, _v16.useViewer)(),
      _v7 = (0, _v1.jsx)(_v17, {});
    if (!_v6) return _v7;
    (0, _v8.setCdnUrl)(_v6.viewmasterCdnUrl);
    let _v8 = {
      locale: _v6.locale
    };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v7, (0, _v1.jsx)(_v3.SWRConfig, {
        value: {
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        },
        children: (0, _v1.jsx)(_v6.ConfigContext.Provider, {
          value: _v8,
          children: (0, _v1.jsx)(_v12.ReviewLinkContextProvider, {
            resourceId: _v1,
            resourceType: "folder",
            reviewId: _v3,
            children: (0, _v1.jsx)(_v5.App, {
              folderId: _v1,
              playerAssetUrls: _v2,
              userId: _v4,
              viewer: _v6,
              reviewId: _v3,
              folderData: _v0,
              showPasswordPage: _v5
            })
          })
        })
      })]
    });
  };
  (0, _v4.withPageSetup)(async _v0 => {
    let _v1,
      _v2 = _v0.params?.userId,
      _v3 = _v0.params?.folderId,
      _v4 = _v0.query?.reviewId;
    if (_v0.res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0"), !_v2 || !_v3 || !_v4) return {
      notFound: !0
    };
    let _v5 = parseInt(_v2, 10),
      _v6 = parseInt(_v3, 10);
    if (isNaN(_v5) || isNaN(_v6) || !_v4) return {
      notFound: !0
    };
    let _v7 = !1,
      _v8 = !1,
      _v9 = _v0.req.cookies;
    _v9[`${_v4}_password`] && (_v1 = _v9[`${_v4}_password`]);
    try {
      _v7 = (await (0, _v9.getFolderReviewLink)({
        headers: _v0.headers,
        baseUrl: _v0.baseUrl,
        where: {
          projectId: _v6,
          reviewLinkId: _v4
        },
        query: {
          password: _v1
        },
        select: ["isDark", "isEnabled"]
      })).isDark;
    } catch (_v0) {
      if (!_v0?.res || "function" != typeof _v0?.res?.json) return {
        notFound: !0
      };
      let _v1 = await _v0.res.json();
      if (0 === _v1.error_code || 0 === _v1.error_code) _v8 = !0;else if (0 === _v1.error_code) return {
        props: {
          folderData: null,
          folderId: _v6,
          playerAssetUrls: "",
          bypassAgeVerification: !0,
          reviewId: _v4,
          userId: _v5,
          showPasswordPage: _v8,
          isDisabledOrExpired: !0,
          omitEsi: !0
        }
      };else return {
        notFound: !0
      };
    }
    let _v10 = _v8 ? {
        reviewId: _v4
      } : {
        reviewId: _v4,
        password: _v1
      },
      _v11 = null,
      _v12 = {
        folderData: null,
        folderId: _v6,
        hasThemeSupport: !0,
        bypassAgeVerification: !0,
        ...(_v7 ? {
          forceTheme: "dark"
        } : {}),
        isReviewLinkDarkMode: _v7,
        omitEsi: !0,
        reviewId: _v4,
        showPasswordPage: _v8,
        userId: _v5
      };
    try {
      if (!(_v11 = await (0, _v10.getUserProject)({
        headers: _v0.headers,
        baseUrl: _v0.baseUrl,
        where: {
          userId: _v5,
          projectId: _v6
        },
        query: _v10,
        select: _v7.DEFAULT_FOLDER_API_FIELDS
      })) || !_v11?.metadata?.interactions?.allowMultipleReviewLinks) return {
        notFound: !0
      };
    } catch (_v0) {
      if (_v8) return {
        props: {
          ..._v12,
          layoutOptions: {
            enableReviewEditAccessBanner: !0
          }
        }
      };
      return {
        notFound: !0
      };
    }
    return {
      props: {
        ..._v12,
        folderData: _v11,
        layoutOptions: {
          enableReviewEditAccessBanner: !0
        }
      }
    };
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0
  }), _v18.getLayout = (_v0, _v1) => _v1.isDisabledOrExpired ? (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v17, {}), (0, _v1.jsx)(_v14.default, {}), (0, _v1.jsx)(_v13.DisabledReviewLinkErrorPage, {})]
  }) : (0, _v1.jsx)(_v15.VideoLibraryLayout, {
    isReviewPage: !0,
    hasThemeSupport: !_v1.isReviewLinkDarkMode,
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v18], 0);
}