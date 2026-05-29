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
  let _v20 = () => {
      let _v0 = (0, _v19.useViewer)();
      return (0, _v1.jsxs)(_v15.Navigation, {
        borderBottom: "1px solid",
        borderColor: "stroke",
        children: [(0, _v1.jsx)(_v15.Navigation.LeftContent, {
          children: (0, _v1.jsx)(_v18.default, {})
        }), (0, _v1.jsxs)(_v15.Navigation.RightContent, {
          children: [(0, _v1.jsx)(_v21, {}), (0, _v1.jsx)(_v11.Divider, {
            orientation: "vertical",
            bgColor: "stroke",
            h: "1.875rem",
            mr: "3.125rem"
          }), (0, _v1.jsx)(_v6.Flex, {
            children: _v0 ? (0, _v1.jsx)(_v17.Search, {
              withToggle: !0
            }) : (0, _v1.jsx)(_v14.SearchMagnifier, {})
          }), (0, _v1.jsx)(_v6.Flex, {
            minW: (0, _v5.rem)(80),
            children: (0, _v1.jsx)(_v16.AccountMenu, {})
          })]
        })]
      });
    },
    _v21 = () => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7.Button, {
        display: {
          base: "none",
          xl: "flex"
        },
        isDisabled: !0,
        leftIcon: (0, _v1.jsx)(_v13.Lock, {}),
        variant: "tertiary",
        id: "privacy-status-button",
        "data-id": "header_video_privacy_button",
        "aria-label": "privacy-status",
        children: (0, _v10.translate)({
          singular: "Private",
          dictionary: {
            es: {
              singular: "Privado"
            },
            "de-DE": {
              singular: "Privat"
            },
            "fr-FR": {
              singular: "Privé"
            },
            "ja-JP": {
              singular: "プライベート"
            },
            "ko-KR": {
              singular: "비공개"
            },
            "pt-BR": {
              singular: "Privado"
            },
            "zh-CN": {
              singular: "私密"
            }
          }
        })
      }), (0, _v1.jsx)(_v12.IconButton, {
        display: {
          base: "flex",
          xl: "none"
        },
        isDisabled: !0,
        icon: (0, _v1.jsx)(_v13.Lock, {}),
        variant: "tertiary",
        id: "privacy-status-button",
        "data-id": "header_video_privacy_button",
        "aria-label": "privacy-status"
      })]
    }),
    _v22 = () => (0, _v1.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "77",
      height: "64",
      viewBox: "0 0 77 64",
      children: (0, _v1.jsx)("g", {
        fill: "none",
        fillRule: "evenodd",
        stroke: "none",
        strokeWidth: "1",
        children: (0, _v1.jsx)("g", {
          fill: "var(--vimeo-colors-text-primary)",
          transform: "translate(-688 -252)",
          children: (0, _v1.jsxs)("g", {
            transform: "translate(688 252)",
            children: [(0, _v1.jsx)("path", {
              d: "M36 8L40 8 40 0 36 0z"
            }), (0, _v1.jsx)("path", {
              d: "M47 9.45460659L50.8283516 11 54 3.54337592 50.1716484 2z"
            }), (0, _v1.jsx)("path", {
              d: "M23 3.54539341L26.1716484 11 30 9.45662408 26.8283516 2z"
            }), (0, _v1.jsx)("path", {
              d: "M27.904 52.595c-2.777 3.906-7.33 6.24-12.177 6.24h-.33c-6.153 0-11.158-4.915-11.158-10.957V25.505c.767 0 1.476.215 2.097.567 1.274.718 2.143 2.054 2.143 3.6v8.333h4.24V17.172c2.338 0 4.24 1.868 4.24 4.166v12.5h4.24v-12.5c1.564 0 2.915.844 3.65 2.084.365.614.59 1.32.59 2.083v19.97l3.618-3.558a4.136 4.136 0 015.436-.3l.78.613-7.369 10.365zm9.233-14.234a8.428 8.428 0 00-7.458-1.479V25.505c0-4.596-3.804-8.333-8.48-8.333h-1.175a8.47 8.47 0 00-7.305-4.167h-2.12c-1.17 0-2.12.931-2.12 2.083v7.405c-1.25-.715-2.686-1.155-4.24-1.155H2.12c-1.17 0-2.12.932-2.12 2.084v24.456C0 56.218 6.906 63 15.396 63h.331c6.23 0 12.084-2.998 15.654-8.019l9.648-13.57-3.892-3.05z"
            }), (0, _v1.jsx)("path", {
              d: "M72.062 38.004v9.875c0 6.04-5.005 10.954-11.155 10.954h-.33c-4.85 0-9.4-2.333-12.18-6.24l-7.369-10.362.78-.612a4.133 4.133 0 015.436.3l3.619 3.558V25.504c0-.762.224-1.469.589-2.083a4.24 4.24 0 013.65-2.084v12.5h4.24v-12.5c0-2.297 1.902-4.166 4.24-4.166V38.004h4.24v-8.333c0-1.544.87-2.881 2.143-3.6a4.257 4.257 0 012.097-.567v12.5zm2.12-16.666h-2.12c-1.552 0-2.989.44-4.24 1.156v-7.406c0-1.153-.95-2.084-2.12-2.084h-2.12a8.467 8.467 0 00-7.303 4.167h-1.177c-4.676 0-8.48 3.737-8.48 8.333v11.377a8.42 8.42 0 00-7.457 1.48l-3.893 3.05 9.65 13.57C48.495 60.002 54.346 63 60.576 63h.33c8.49 0 15.396-6.783 15.396-15.12V23.42c0-1.152-.95-2.084-2.12-2.084z"
            })]
          })
        })
      })
    });
  (0, _v9.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, function () {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v20, {}), (0, _v1.jsx)(_v6.Flex, {
        direction: "column",
        align: "center",
        pos: "relative",
        flexGrow: "1",
        bgColor: "background-body",
        children: (0, _v1.jsx)(_v6.Flex, {
          direction: "column",
          flexGrow: "1",
          w: "100%",
          overflow: {
            base: "hidden",
            sm: "auto"
          },
          children: (0, _v1.jsx)(_v6.Flex, {
            justify: "center",
            w: "100%",
            pb: {
              base: (0, _v5.rem)(100),
              md: (0, _v5.rem)(0)
            },
            children: (0, _v1.jsxs)(_v6.Flex, {
              direction: "column",
              align: "center",
              justify: "center",
              w: (0, _v5.rem)(901),
              h: (0, _v5.rem)(523),
              children: [(0, _v1.jsx)(_v6.Flex, {
                align: "center",
                justify: "center",
                h: (0, _v5.rem)(150),
                w: (0, _v5.rem)(170),
                children: (0, _v1.jsx)(_v22, {})
              }), (0, _v1.jsxs)(_v6.Flex, {
                align: "center",
                direction: "column",
                children: [(0, _v1.jsx)(_v4.Text, {
                  variant: "body-xl",
                  display: "block",
                  textAlign: "center",
                  width: (0, _v5.rem)(450),
                  fontSize: "2.8rem",
                  fontWeight: 700,
                  letterSpacing: "-0.075rem",
                  mb: (0, _v5.rem)(20),
                  children: (0, _v10.translate)({
                    singular: "Upload Complete!",
                    dictionary: {
                      es: {
                        singular: "Subida completa"
                      },
                      "de-DE": {
                        singular: "Hochladen abgeschlossen!"
                      },
                      "fr-FR": {
                        singular: "Mise en ligne complète !"
                      },
                      "ja-JP": {
                        singular: "アップロード完了！"
                      },
                      "ko-KR": {
                        singular: "업로드가 완료되었습니다!"
                      },
                      "pt-BR": {
                        singular: "Carregamento Concluído!"
                      },
                      "zh-CN": {
                        singular: "上传完成！"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v4.Text, {
                  variant: "body-lg",
                  color: "slate.350",
                  children: (0, _v10.translate)({
                    singular: "Your team now has access to this video",
                    dictionary: {
                      es: {
                        singular: "Tu equipo ahora tiene acceso a este video"
                      },
                      "de-DE": {
                        singular: "Ihr Team hat jetzt Zugang zu diesem Video"
                      },
                      "fr-FR": {
                        singular: "Votre équipe a désormais accès à cette vidéo"
                      },
                      "ja-JP": {
                        singular: "チームがこの動画にアクセスできるようになりました"
                      },
                      "ko-KR": {
                        singular: "이제 팀에 이 동영상에 대한 액세스 권한이 있습니다"
                      },
                      "pt-BR": {
                        singular: "Agora sua equipe tem acesso a este vídeo"
                      },
                      "zh-CN": {
                        singular: "您的团队现可访问此视频"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v3.Link, {
                  textDecoration: "none",
                  as: _v2.default,
                  href: "/upload/videos",
                  children: (0, _v1.jsx)(_v7.Button, {
                    m: `${(0, _v5.rem)(22)} 0 ${(0, _v5.rem)(15)}`,
                    minW: (0, _v5.rem)(248),
                    rightIcon: (0, _v1.jsx)(_v8.Plus, {}),
                    variant: "tertiary",
                    size: "lg",
                    borderRadius: "pill",
                    children: (0, _v1.jsx)(_v4.Text, {
                      variant: "body-sm",
                      fontWeight: 800,
                      children: (0, _v10.translate)({
                        singular: "Upload more videos",
                        dictionary: {
                          es: {
                            singular: "Subir más videos"
                          },
                          "de-DE": {
                            singular: "Weitere Videos hochladen"
                          },
                          "fr-FR": {
                            singular: "Mettre en ligne d'autres vidéos"
                          },
                          "ja-JP": {
                            singular: "動画をさらにアップロード"
                          },
                          "ko-KR": {
                            singular: "동영상 더 업로드하기"
                          },
                          "pt-BR": {
                            singular: "Carregar mais vídeos"
                          },
                          "zh-CN": {
                            singular: "上传更多视频"
                          }
                        }
                      })
                    })
                  })
                }), (0, _v1.jsx)(_v3.Link, {
                  as: _v2.default,
                  textDecoration: "none",
                  _hover: {
                    textDecoration: "underline"
                  },
                  href: "/manage/videos",
                  children: (0, _v1.jsx)(_v4.Text, {
                    variant: "body-xl",
                    fontWeight: 500,
                    color: "vimeoBlue.500",
                    children: (0, _v10.translate)({
                      singular: "Manage Videos",
                      dictionary: {
                        es: {
                          singular: "Gestionar videos"
                        },
                        "de-DE": {
                          singular: "Videos verwalten"
                        },
                        "fr-FR": {
                          singular: "Gérer les vidéos"
                        },
                        "ja-JP": {
                          singular: "動画の管理"
                        },
                        "ko-KR": {
                          singular: "동영상 관리"
                        },
                        "pt-BR": {
                          singular: "Gerenciar Vídeos"
                        },
                        "zh-CN": {
                          singular: "管理视频"
                        }
                      }
                    })
                  })
                })]
              })]
            })
          })
        })
      })]
    });
  }], 0);
}