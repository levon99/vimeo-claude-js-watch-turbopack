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
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = () => {
      let _v0 = (0, _v20.useColorModeValue)("slate.800", "white");
      return (0, _v1.jsx)(_v22.VimeoV, {
        height: (0, _v21.rem)(26.7),
        color: _v0
      });
    },
    _v24 = ({
      name: _v0
    }) => {
      let _v1 = (0, _v11.useRef)(null);
      return (0, _v1.jsxs)(_v16.Navigation, {
        id: "header",
        children: [(0, _v1.jsx)(_v16.Navigation.LeftContent, {
          children: (0, _v1.jsx)("div", {
            ref: _v1,
            children: (0, _v1.jsxs)(_v4.Flex, {
              alignItems: "center",
              gap: "sm",
              children: [(0, _v1.jsx)(_v18.default, {
                vimeoLogo: (0, _v1.jsx)(_v23, {})
              }), (0, _v1.jsx)(_v13.Text, {
                variant: "body-md",
                children: (0, _v15.translate)({
                  singular: "My library",
                  dictionary: {
                    es: {
                      singular: "Mi biblioteca"
                    },
                    "de-DE": {
                      singular: "Meine Bibliothek"
                    },
                    "fr-FR": {
                      singular: "Ma bibliothèque"
                    },
                    "ja-JP": {
                      singular: "マイ ライブラリ"
                    },
                    "ko-KR": {
                      singular: "내 라이브러리"
                    },
                    "pt-BR": {
                      singular: "Minha Biblioteca"
                    },
                    "zh-CN": {
                      singular: "我的视频库"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v13.Text, {
                variant: "body-md",
                children: "/"
              }), (0, _v1.jsx)(_v13.Text, {
                variant: "body-md",
                children: _v0
              })]
            })
          })
        }), (0, _v1.jsx)(_v16.Navigation.RightContent, {
          children: (0, _v1.jsxs)(_v4.Flex, {
            alignItems: "center",
            gap: "sm",
            children: [(0, _v1.jsx)(_v12.Button, {
              variant: "primary",
              leftIcon: (0, _v1.jsx)(_v14.Share, {}),
              children: (0, _v15.translate)({
                singular: "Share",
                dictionary: {
                  es: {
                    singular: "Compartir"
                  },
                  "de-DE": {
                    singular: "Teilen"
                  },
                  "fr-FR": {
                    singular: "Partager"
                  },
                  "ja-JP": {
                    singular: "共有"
                  },
                  "ko-KR": {
                    singular: "공유"
                  },
                  "pt-BR": {
                    singular: "Compartilhar"
                  },
                  "zh-CN": {
                    singular: "分享"
                  }
                }
              })
            }), (0, _v1.jsx)(_v19.SearchField, {
              fadeOutLeftNav: !0,
              leftNavbarRef: _v1,
              withToggle: !0
            }), (0, _v1.jsx)(_v17.AccountMenu, {})]
          })
        })]
      });
    },
    _v25 = ({
      publicId: _v0
    }) => {
      let _v1 = (0, _v10.useViewer)(),
        _v2 = (0, _v5.useIsStaff)(),
        {
          isLoadingResponse: _v3
        } = (0, _v8.useOrionSettings)(),
        _v4 = (0, _v9.useUniversalHostingEnabled)(),
        _v5 = (_v0 => {
          let _v1 = (0, _v10.useViewer)(),
            [_v2, _v3] = (0, _v11.useState)({
              status: "loading"
            });
          return (0, _v11.useEffect)(() => {
            let _v0 = !1;
            return _v1?.user && fetch(`https://${_v1.apiUrl}/users/${_v1.user.id}/files/${_v0}`, {
              headers: {
                Authorization: `jwt ${_v1.jwt}`,
                Accept: "application/json"
              }
            }).then(_v0 => {
              if (!_v0.ok) throw Error(`Request failed with status ${_v0.status}`);
              return _v0.json();
            }).then(_v0 => {
              _v0 || _v3({
                status: "success",
                name: _v0.name ?? ""
              });
            }).catch(() => {
              _v0 || _v3({
                status: "error"
              });
            }), () => {
              _v0 = !0;
            };
          }, [_v1, _v0]), _v2;
        })(_v0);
      return _v1?.user && (_v2 || !_v3) && "loading" !== _v5.status ? _v4 && "error" !== _v5.status ? (0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        minHeight: "100vh",
        children: [(0, _v1.jsx)(_v24, {
          name: _v5.name
        }), (0, _v1.jsx)(_v3.Box, {
          as: "main",
          paddingX: "lg",
          paddingY: "lg",
          children: (0, _v1.jsx)(_v4.Flex, {
            background: "black",
            borderRadius: "md",
            marginX: "auto",
            maxWidth: "1118px",
            sx: {
              aspectRatio: "16 / 9",
              width: "100%"
            }
          })
        })]
      }) : (0, _v1.jsx)(_v7.ErrorPageWithHeader, {
        error: new _v6.ForbiddenError(),
        shouldShowSearch: !1
      }) : (0, _v1.jsx)(_v3.Box, {
        minHeight: "100vh"
      });
    };
  (0, _v2.withPageSetup)(_v0 => {
    let _v1 = _v0.query.publicId;
    return {
      props: {
        publicId: (Array.isArray(_v1) ? _v1[0] : _v1) ?? ""
      }
    };
  }, {
    noIndex: !0,
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    publicId: _v0
  }) => (0, _v1.jsx)(_v25, {
    publicId: _v0
  }, _v0)], 0);
}