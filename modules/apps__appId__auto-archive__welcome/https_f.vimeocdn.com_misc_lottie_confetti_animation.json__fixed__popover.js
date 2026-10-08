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
    _v20 = _v0.i(0);
  _v0.i(0), _v0.i(0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = () => {
      let _v0 = (0, _v19.useRef)(null);
      return (0, _v19.useEffect)(() => {
        _v0 && _v26.default.loadAnimation({
          container: _v0?.current,
          loop: !1,
          autoplay: !0,
          path: "https://f.vimeocdn.com/_misc/lottie_confetti_animation.json"
        });
      }, [_v0]), (0, _v1.jsx)(_v27.Box, {
        ref: _v0,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: "popover",
        pointerEvents: "none"
      });
    },
    _v29 = ({
      folderId: _v0,
      config: _v1,
      appId: _v2,
      teamOwnerId: _v3,
      viewer: _v4,
      hasIntegrationCenter: _v5
    }) => {
      let _v6 = _v4.user?.id,
        {
          data: _v7,
          error: _v8,
          isValidating: _v9
        } = function (_v0) {
          let _v1 = "function" == typeof _v0 ? _v0() : _v0,
            {
              baseUrl: _v2,
              jwt: _v3,
              xVimeoPage: _v4,
              locale: _v5
            } = (0, _v21.useGctlConfig)();
          return (0, _v20.default)(_v1 ? `/teams/${_v1.where.userId}/auto_archive${(0, _v17.serializeQuery)(_v1)}` : () => null, _v1 ? () => (0, _v18.getTeamAutoArchive)({
            ..._v1,
            headers: {
              ..._v1.headers,
              "Content-Type": "application/json",
              Authorization: _v3 ? `jwt ${_v3}` : "",
              "Vimeo-Page": `${_v4}`,
              "Accept-Language": _v5 ?? "en"
            },
            baseUrl: _v2
          }) : null, void 0);
        }(() => _v3 ? {
          select: ["userId"],
          where: {
            userId: Number(_v3)
          }
        } : null);
      return !_v6 || _v9 ? (0, _v1.jsx)(_v15.LoadingPage, {}) : !_v3 || _v8 ? (0, _v1.jsx)(_v25.ErrorPage, {
        error: new _v16.ResourceNotFoundError()
      }) : _v0 ? (0, _v1.jsx)(_v31, {
        userId: _v6,
        ownerId: _v3,
        folderId: _v0,
        total: _v7?.total ?? 0,
        appId: _v2,
        config: _v1,
        hasIntegrationCenter: _v5
      }) : (0, _v1.jsx)(_v30, {
        ownerId: _v3,
        total: _v7?.total ?? 0,
        appId: _v2,
        config: _v1,
        hasIntegrationCenter: _v5
      });
    },
    _v30 = ({
      ownerId: _v0,
      config: _v1,
      hasIntegrationCenter: _v2
    }) => {
      let {
        data: _v3,
        error: _v4,
        isValidating: _v5
      } = (0, _v22.useGetUserAutoArchiveMsTeams)(() => _v0 ? {
        select: ["userInviteUrl"],
        where: {
          userId: _v0
        }
      } : null);
      return _v5 ? (0, _v1.jsx)(_v15.LoadingPage, {}) : _v4 ? (0, _v1.jsx)(_v25.ErrorPage, {
        error: new _v16.ResourceNotFoundError()
      }) : (0, _v1.jsx)(_v32, {
        config: _v1,
        adminOnboarding: !0,
        buttons: [{
          label: (0, _v24.translate)({
            singular: "Connect my account",
            dictionary: {
              es: {
                singular: "Conecte mi cuenta"
              },
              "de-DE": {
                singular: "Mein Konto verbinden"
              },
              "fr-FR": {
                singular: "Connecter mon compte"
              },
              "ja-JP": {
                singular: "アカウントを接続"
              },
              "ko-KR": {
                singular: "내 계정 연결"
              },
              "pt-BR": {
                singular: "Conectar minha conta"
              },
              "zh-CN": {
                singular: "关联我的账户"
              }
            }
          }),
          href: _v3?.userInviteUrl ?? "",
          variant: "primary"
        }, {
          label: (0, _v24.translate)({
            singular: "Done",
            dictionary: {
              es: {
                singular: "Hecho"
              },
              "de-DE": {
                singular: "Fertig"
              },
              "fr-FR": {
                singular: "Terminé"
              },
              "ja-JP": {
                singular: "完了"
              },
              "ko-KR": {
                singular: "완료"
              },
              "pt-BR": {
                singular: "Feito"
              },
              "zh-CN": {
                singular: "已存档"
              }
            }
          }),
          href: _v2 && _v1 ? `/integrations-center/${_v1.appUUID}/details/manage` : "/settings/apps",
          variant: "tertiary"
        }]
      });
    },
    _v31 = ({
      userId: _v0,
      folderId: _v1,
      config: _v2,
      hasIntegrationCenter: _v3
    }) => {
      let {
        isValidating: _v4
      } = (0, _v23.useGetUserTeams)(() => _v0 ? {
        select: ["teamData.ownerId", "teamMembership.role"],
        where: {
          userId: _v0
        }
      } : null);
      return _v4 ? (0, _v1.jsx)(_v15.LoadingPage, {}) : (0, _v1.jsx)(_v32, {
        config: _v2,
        adminOnboarding: !1,
        buttons: [{
          label: (0, _v24.translate)({
            singular: "Done",
            dictionary: {
              es: {
                singular: "Hecho"
              },
              "de-DE": {
                singular: "Fertig"
              },
              "fr-FR": {
                singular: "Terminé"
              },
              "ja-JP": {
                singular: "完了"
              },
              "ko-KR": {
                singular: "완료"
              },
              "pt-BR": {
                singular: "Feito"
              },
              "zh-CN": {
                singular: "已存档"
              }
            }
          }),
          href: _v3 && _v2 ? `/integrations-center/${_v2.appUUID}/details/manage` : "/settings/apps",
          variant: "primary"
        }, {
          label: (0, _v24.translate)({
            singular: "Go to folder",
            dictionary: {
              es: {
                singular: "Ir a la carpeta"
              },
              "de-DE": {
                singular: "Zum Ordner"
              },
              "fr-FR": {
                singular: "Accéder au dossier"
              },
              "ja-JP": {
                singular: "フォルダーに移動"
              },
              "ko-KR": {
                singular: "폴더로 이동하기"
              },
              "pt-BR": {
                singular: "Ir para a pasta"
              },
              "zh-CN": {
                singular: "前往文件夹"
              }
            }
          }),
          href: `/manage/folders/${_v1}`,
          variant: "tertiary"
        }]
      });
    },
    _v32 = ({
      adminOnboarding: _v0,
      buttons: _v1,
      config: _v2
    }) => (0, _v1.jsxs)(_v6.Flex, {
      alignItems: "center",
      justifyContent: "center",
      height: "90vh",
      backgroundColor: "backgroundSubtle",
      children: [(0, _v1.jsx)(_v28, {}), (0, _v1.jsxs)(_v7.Card, {
        padding: "lg",
        width: (0, _v10.rem)(420),
        boxShadow: "lg",
        height: "auto",
        borderRadius: "lg",
        children: [(0, _v1.jsx)(_v6.Flex, {
          alignItems: "center",
          justifyContent: "center",
          gap: "sm",
          mb: "md",
          children: (0, _v1.jsx)(_v12.CircleCheckFilled, {
            boxSize: "sm"
          })
        }), (0, _v1.jsx)(_v8.Header, {
          size: "md",
          textAlign: "center",
          mb: "3",
          color: "text-primary",
          children: _v2?.getHeaderText(_v0)
        }), (0, _v1.jsx)(_v9.Paragraph, {
          size: "lg",
          color: "text-secondary",
          mb: "lg",
          textAlign: "center",
          children: _v2?.getSubHeaderText(_v0)
        }), (0, _v1.jsx)(_v6.Flex, {
          gap: "sm",
          justifyContent: "center",
          flexDirection: "column",
          children: _v1.map(({
            label: _v0,
            href: _v1,
            variant: _v2
          }, _v3) => (0, _v1.jsx)(_v11.Button, {
            variant: _v2,
            as: "a",
            href: _v1,
            width: "100%",
            children: _v0
          }, _v3))
        })]
      })]
    });
  var _v33 = _v0.i(0);
  let _v34 = [_v5.PARTNER_APP_ID.MSTeamProduction, _v5.PARTNER_APP_ID.MSTeamDevelopment],
    _v35 = ({
      folderId: _v0,
      appId: _v1,
      teamOwnerId: _v2
    }) => {
      let _v3 = (0, _v33.useViewer)(),
        {
          capabilities: _v4
        } = (0, _v13.useCapability)(["hasIntegrationCenter"]),
        _v5 = _v5.PARTNER_CONFIG[_v1],
        _v6 = _v34.includes(_v1);
      return _v3 ? _v6 ? (0, _v1.jsx)(_v29, {
        folderId: _v0,
        config: _v5,
        appId: _v1,
        teamOwnerId: _v2,
        viewer: _v3,
        hasIntegrationCenter: !!_v4.hasIntegrationCenter
      }) : (0, _v1.jsxs)(_v6.Flex, {
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        backgroundColor: "backgroundSubtle",
        children: [(0, _v1.jsx)(_v28, {}), (0, _v1.jsxs)(_v7.Card, {
          padding: "xl",
          width: (0, _v10.rem)(420),
          boxShadow: "lg",
          height: "auto",
          borderRadius: "lg",
          children: [(0, _v1.jsx)(_v6.Flex, {
            alignItems: "center",
            justifyContent: "center",
            gap: "sm",
            mb: "lg",
            children: (0, _v1.jsx)(_v12.CircleCheckFilled, {
              boxSize: "sm"
            })
          }), (0, _v1.jsx)(_v8.Header, {
            size: "md",
            textAlign: "center",
            mb: "3",
            color: "text-primary",
            children: _v5?.getHeaderText()
          }), (0, _v1.jsx)(_v9.Paragraph, {
            size: "lg",
            color: "text-secondary",
            mb: "lg",
            textAlign: "center",
            children: _v5?.getSubHeaderText()
          }), (0, _v1.jsxs)(_v6.Flex, {
            gap: "sm",
            justifyContent: "center",
            flexDirection: "column",
            children: [(0, _v1.jsx)(_v11.Button, {
              variant: "primary",
              as: "a",
              href: _v4.hasIntegrationCenter ? `/integrations-center/${_v5.appUUID}/details/manage` : "/settings/apps",
              width: "100%",
              children: (0, _v14.translate)({
                singular: "Done",
                dictionary: {
                  es: {
                    singular: "Hecho"
                  },
                  "de-DE": {
                    singular: "Fertig"
                  },
                  "fr-FR": {
                    singular: "Terminé"
                  },
                  "ja-JP": {
                    singular: "完了"
                  },
                  "ko-KR": {
                    singular: "완료"
                  },
                  "pt-BR": {
                    singular: "Feito"
                  },
                  "zh-CN": {
                    singular: "已存档"
                  }
                }
              })
            }), (0, _v1.jsx)(_v11.Button, {
              variant: "tertiary",
              as: "a",
              href: `/manage/folders/${_v0}`,
              width: "100%",
              children: (0, _v14.translate)({
                singular: "Go to folder",
                dictionary: {
                  es: {
                    singular: "Ir a la carpeta"
                  },
                  "de-DE": {
                    singular: "Zum Ordner"
                  },
                  "fr-FR": {
                    singular: "Accéder au dossier"
                  },
                  "ja-JP": {
                    singular: "フォルダーに移動"
                  },
                  "ko-KR": {
                    singular: "폴더로 이동하기"
                  },
                  "pt-BR": {
                    singular: "Ir para a pasta"
                  },
                  "zh-CN": {
                    singular: "前往文件夹"
                  }
                }
              })
            })]
          })]
        })]
      }) : (0, _v1.jsx)(_v15.LoadingPage, {});
    },
    _v36 = ({
      folderId: _v0,
      appId: _v1,
      teamOwnerId: _v2
    }) => (0, _v1.jsx)(_v35, {
      appId: _v1,
      folderId: _v0,
      teamOwnerId: _v2
    });
  (0, _v2.withPageSetup)(async ({
    params: _v0,
    query: _v1
  }) => {
    let _v2 = Number(_v0?.appId),
      _v3 = String(_v1?.folderId ?? ""),
      _v4 = Number(_v1?.teamOwnerId) || null;
    return _v2 && (0, _v5.isValidAppId)(_v2) ? {
      props: {
        hasThemeSupport: !0,
        appId: _v2,
        folderId: _v3,
        teamOwnerId: _v4
      }
    } : {
      notFound: !0
    };
  }, {
    requireLogin: !0,
    inlineViewer: !0
  }), _v36.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v3.DefaultNavigation, {
      hasSearch: !1,
      isSideNavActive: !1
    }), _v0, (0, _v1.jsx)(_v4.MinimalFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v36], 0);
}