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
  _v0.s(["ContentBreadcrumbs", 0, ({
    ancestorPath: _v0,
    title: _v1,
    ownerUri: _v2,
    page: _v3,
    onClick: _v4
  }) => {
    let {
      contentSpaceEnabled: _v5,
      notTeamGatedContentSpaceEnabled: _v6,
      loading: _v7
    } = (0, _v8.useContentSpaceEnabled)(_v2);
    if (void 0 === _v0 || _v7 && "manage" === _v3) return (0, _v1.jsx)(_v5.Skeleton, {
      borderRadius: (0, _v7.rem)(8),
      height: (0, _v7.rem)(30),
      ml: (0, _v7.rem)(12),
      maxW: "91vw",
      w: "200px"
    });
    if (0 === _v0.length) return null;
    let _v8 = _v5 ? (0, _v9.translate)({
        singular: "Team library",
        dictionary: {
          es: {
            singular: "Biblioteca del equipo"
          },
          "de-DE": {
            singular: "Teambibliothek"
          },
          "fr-FR": {
            singular: "Bibliothèque de l'équipe"
          },
          "ja-JP": {
            singular: "チームライブラリ"
          },
          "ko-KR": {
            singular: "팀 라이브러리"
          },
          "pt-BR": {
            singular: "Biblioteca da equipe"
          },
          "zh-CN": {
            singular: "团队视频库"
          }
        }
      }) : (0, _v9.translate)({
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
      }),
      _v9 = _v0[0],
      _v10 = 1 === _v0.length,
      _v11 = _v10 && !_v7 && _v6 && !_v5 && "manage" === _v3 ? {
        ..._v9,
        name: (0, _v9.translate)({
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
        }),
        link: "/library"
      } : "manage" === _v3 && _v10 && _v9.name === _v8 && "/home" === _v9.link ? {
        ..._v9,
        link: "/library"
      } : _v9;
    return (0, _v1.jsxs)(_v3.Breadcrumb, {
      "data-testid": "breadcrumbs-path",
      lineHeight: "text-lg",
      maxWidth: "500px",
      overflow: "hidden",
      children: [(0, _v1.jsx)(_v3.BreadcrumbItem, {
        sx: {
          span: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        },
        children: (0, _v1.jsx)(_v4.BreadcrumbLink, {
          as: _v2.default,
          href: _v11.link,
          onClick: _v4,
          children: _v11.name
        })
      }), (0, _v1.jsx)(_v3.BreadcrumbItem, {
        overflow: "hidden",
        whiteSpace: "nowrap",
        maxWidth: "200px",
        children: (0, _v1.jsx)(_v10.OverflowToolTip, {
          labelToolTip: _v1,
          placement: "bottom",
          children: (0, _v1.jsx)(_v6.Text, {
            variant: "body-md",
            overflow: "hidden",
            textOverflow: "ellipsis",
            children: _v1
          })
        })
      })]
    });
  }]);
}