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
    _v14 = _v0.i(0);
  let _v15 = "Everything you need to make, manage, and share brilliant videos.";
  _v0.s(["LoggedOutBanner", 0, ({
    bpData: _v0 = _v14.staffPicksBpValues,
    page: _v1 = "watch"
  }) => {
    let _v2 = (0, _v2.useRef)(!1),
      _v3 = (0, _v2.useRef)(!1),
      [_v4, _v5] = (0, _v8.default)("watch-banner", !1),
      _v6 = (0, _v13.useViewer)(),
      _v7 = (0, _v10.usePico)(),
      {
        trackLoggedOutBannerDisplayed: _v8,
        trackLoggedOutBannerCtaClicked: _v9
      } = (0, _v11.useWatchTracking)();
    return ((0, _v2.useEffect)(() => {
      _v4 || _v2.current || (_v2.current = !0, (0, _v14.trackLoggedOutBannerEvent)({
        eventType: "impression",
        copy: _v15,
        ..._v0
      }));
    }, [_v4, _v6, _v0]), (0, _v2.useEffect)(() => {
      _v4 || _v3.current || null === _v7 || (_v3.current = !0, _v8({
        page: _v1
      }));
    }, [_v4, _v8, _v7, _v1]), _v4) ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsxs)(_v4.Flex, {
      position: "absolute",
      left: "0",
      bottom: "0",
      borderRadius: "0",
      justifyContent: "center",
      backgroundColor: "fill-surface",
      alignItems: "center",
      gap: "md",
      zIndex: "1003",
      direction: {
        base: "column",
        md: "row"
      },
      width: "100%",
      px: {
        base: "3xl",
        md: "md"
      },
      py: "md",
      children: [(0, _v1.jsx)(_v6.Text, {
        variant: "body-xl",
        textAlign: "center",
        children: (0, _v9.translate)({
          singular: "Everything you need to make, manage, and share brilliant videos.",
          dictionary: {
            es: {
              singular: "Todo lo que necesita para crear, administrar y compartir videos increíbles."
            },
            "de-DE": {
              singular: "Alles, was Sie zum Erstellen, Verwalten und Teilen erstklassiger Videos brauchen."
            },
            "fr-FR": {
              singular: "Tout ce dont vous avez besoin pour créer, gérer et partager de superbes vidéos."
            },
            "ja-JP": {
              singular: "高品質な動画の作成、管理、共有に必要なすべてがここに。"
            },
            "ko-KR": {
              singular: "고품질 동영상 제작, 관리, 공유를 위해 필요한 모든 것"
            },
            "pt-BR": {
              singular: "Tudo de que você precisa para fazer, gerenciar e compartilhar vídeos incríveis."
            },
            "zh-CN": {
              singular: "制作、管理和分享精彩视频所需的一切。"
            }
          }
        })
      }), (0, _v1.jsx)(_v3.Button, {
        onClick: () => {
          (0, _v14.trackLoggedOutBannerEvent)({
            eventType: "click",
            copy: _v15,
            ..._v0
          }), _v9({
            page: _v1
          }), (0, _v12.stashPostSurveyRedirect)(), window.location.href = "/join";
        },
        children: (0, _v9.translate)({
          singular: "Join for free",
          dictionary: {
            es: {
              singular: "Únase gratis"
            },
            "de-DE": {
              singular: "Kostenlos anmelden"
            },
            "fr-FR": {
              singular: "Inscription gratuite"
            },
            "ja-JP": {
              singular: "無料で登録"
            },
            "ko-KR": {
              singular: "무료 가입"
            },
            "pt-BR": {
              singular: "Inscrição grátis"
            },
            "zh-CN": {
              singular: "免费加入"
            }
          }
        })
      }), (0, _v1.jsx)(_v5.IconButton, {
        icon: (0, _v1.jsx)(_v7.CloseXSmall, {}),
        "aria-label": "close banner",
        variant: "tertiary",
        position: "absolute",
        right: "0",
        marginRight: "md",
        onClick: () => {
          _v5(!0);
        }
      })]
    });
  }]);
}