{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = {
    sm: {
      chipHeight: "sm",
      gap: "1",
      marginBottom: "2"
    },
    md: {
      chipHeight: "md",
      gap: "sm",
      marginBottom: "3"
    }
  };
  _v0.s(["PopularSearches", 0, ({
    entrypoint: _v0,
    surface: _v1,
    onSearch: _v2,
    size: _v3 = "sm",
    showHeading: _v4 = !0
  }) => {
    let {
        trackSupportPanelPopularSearchClicked: _v5
      } = (0, _v7.useSupportPanelTracking)({
        entrypoint: _v0,
        surface: _v1
      }),
      {
        chipHeight: _v6,
        gap: _v7,
        marginBottom: _v8
      } = _v8[_v3],
      _v9 = [(0, _v6.translate)({
        singular: "Library",
        dictionary: {
          es: {
            singular: "Biblioteca"
          },
          "de-DE": {
            singular: "Bibliothek"
          },
          "fr-FR": {
            singular: "Bibliothèque"
          },
          "ja-JP": {
            singular: "ライブラリ"
          },
          "ko-KR": {
            singular: "라이브러리"
          },
          "pt-BR": {
            singular: "Biblioteca"
          },
          "zh-CN": {
            singular: "视频库"
          }
        }
      }), (0, _v6.translate)({
        singular: "Player customization",
        dictionary: {
          es: {
            singular: "Reproductor personalizable"
          },
          "de-DE": {
            singular: "Individuelle Anpassung des Players"
          },
          "fr-FR": {
            singular: "Personnalisation du player"
          },
          "ja-JP": {
            singular: "プレーヤー カスタマイズ"
          },
          "ko-KR": {
            singular: "커스텀 플레이어"
          },
          "pt-BR": {
            singular: "Customização do player"
          },
          "zh-CN": {
            singular: "播放器定制"
          }
        }
      }), (0, _v6.translate)({
        singular: "Restore a video",
        dictionary: {
          es: {
            singular: "Restaurar un video"
          },
          "de-DE": {
            singular: "Ein Video wiederherstellen"
          },
          "fr-FR": {
            singular: "Restaurer une vidéo"
          },
          "ja-JP": {
            singular: "動画を復元する"
          },
          "ko-KR": {
            singular: "동영상 복원"
          },
          "pt-BR": {
            singular: "Restaurar um vídeo"
          },
          "zh-CN": {
            singular: "恢复视频"
          }
        }
      }), (0, _v6.translate)({
        singular: "Privacy and sharing",
        dictionary: {
          es: {
            singular: "Privacidad y uso compartido"
          },
          "de-DE": {
            singular: "Datenschutz und Freigabe"
          },
          "fr-FR": {
            singular: "Confidentialité et partage"
          },
          "ja-JP": {
            singular: "プライバシーと共有"
          },
          "ko-KR": {
            singular: "개인정보 및 공유"
          },
          "pt-BR": {
            singular: "Privacidade e compartilhamento"
          },
          "zh-CN": {
            singular: "隐私与分享"
          }
        }
      }), (0, _v6.translate)({
        singular: "Embed a video",
        dictionary: {
          es: {
            singular: "Insertar un video"
          },
          "de-DE": {
            singular: "Ein Video einbetten"
          },
          "fr-FR": {
            singular: "Intégrer une vidéo"
          },
          "ja-JP": {
            singular: "動画を埋め込む"
          },
          "ko-KR": {
            singular: "동영상 삽입"
          },
          "pt-BR": {
            singular: "Incorporar um vídeo"
          },
          "zh-CN": {
            singular: "嵌入视频"
          }
        }
      })];
    return (0, _v1.jsxs)(_v2.Box, {
      children: [_v4 && (0, _v1.jsx)(_v5.Text, {
        variant: "heading-2xs",
        color: "text-secondary",
        marginBottom: _v8,
        children: (0, _v6.translate)({
          singular: "Popular searches",
          dictionary: {
            es: {
              singular: "Búsquedas populares"
            },
            "de-DE": {
              singular: "Beliebte Suchanfragen"
            },
            "fr-FR": {
              singular: "Recherches populaires"
            },
            "ja-JP": {
              singular: "人気の検索"
            },
            "ko-KR": {
              singular: "인기 검색어"
            },
            "pt-BR": {
              singular: "Pesquisas populares"
            },
            "zh-CN": {
              singular: "热门搜索"
            }
          }
        })
      }), (0, _v1.jsx)(_v4.Flex, {
        flexWrap: "wrap",
        gap: _v7,
        children: _v9.map(_v0 => (0, _v1.jsx)(_v3.Button, {
          type: "button",
          height: _v6,
          px: "3",
          borderRadius: "full",
          border: "1px solid",
          borderColor: "stroke",
          bg: "surface",
          color: "text-primary",
          _hover: {
            bg: "fill-component-hover"
          },
          onClick: () => {
            _v5({
              search_term: _v0,
              panel_page: "home"
            }), _v2(_v0);
          },
          children: (0, _v1.jsx)(_v5.Text, {
            as: "span",
            variant: "body-md",
            whiteSpace: "nowrap",
            children: _v0
          })
        }, _v0))
      })]
    });
  }]);
}