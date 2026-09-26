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
  function _v15() {
    return (0, _v1.jsxs)(_v10.AlertRoot, {
      variant: "info",
      size: "sm",
      mt: (0, _v7.rem)(16),
      children: [(0, _v1.jsx)(_v13.AlertIcon, {
        boxSize: "xl",
        h: "fit-content",
        mt: (0, _v7.rem)(4)
      }), (0, _v1.jsxs)(_v3.Box, {
        children: [(0, _v1.jsx)(_v11.AlertTitle, {
          children: (0, _v14.translate)({
            singular: "Team member can view videos in China",
            dictionary: {
              es: {
                singular: "Los miembros del equipo pueden ver videos en China"
              },
              "de-DE": {
                singular: "Teammitglieder können Videos in China ansehen"
              },
              "fr-FR": {
                singular: "Le collaborateur peut regarder des vidéos en Chine"
              },
              "ja-JP": {
                singular: "チームメンバーは中国の動画を視聴できます"
              },
              "ko-KR": {
                singular: "중국에 있는 팀원은 동영상을 볼 수 있습니다."
              },
              "pt-BR": {
                singular: "Os integrantes da equipe podem ver vídeos na China"
              },
              "zh-CN": {
                singular: "团队成员可在中国观看视频"
              }
            }
          })
        }), (0, _v1.jsx)(_v12.AlertDescription, {
          children: (0, _v14.translate)({
            singular: "This user has been granted access to all of the content on this page, and can view it on Vimeo.com. When they access videoji.jk, they will only see videos that have been shared in China",
            dictionary: {
              es: {
                singular: "Este usuario tiene acceso a todo el contenido de esta página y puede verlo en Vimeo.com. Cuando acceda a videoji.jk, solo verá los videos que se hayan compartido en China."
              },
              "de-DE": {
                singular: "Diesem Benutzer wurde Zugriff auf den gesamten Inhalt dieser Seite gewährt und er kann ihn auf Vimeo.com ansehen. Wenn sie auf videoji.jk zugreifen, sehen sie nur Videos, die in China geteilt wurden"
              },
              "fr-FR": {
                singular: "Cet utilisateur s'est vu accorder l'accès à l'ensemble du contenu de cette page et peut le consulter sur Vimeo.com. En accédant à videoji.jk, il ne verra que les vidéos qui ont été partagées en Chine."
              },
              "ja-JP": {
                singular: "このユーザーはこのページのすべてのコンテンツにアクセスして、Vimeo.comで視聴可能できます。videoji.jkにアクセスすると、中国で共有された動画のみが表示されます"
              },
              "ko-KR": {
                singular: "이 사용자에게는 이 페이지의 모든 콘텐츠에 대한 액세스 권한이 부여되었으며, Vimeo.com에서 해당 콘텐츠를 볼 수 있습니다. videoji.jk에 액세스하는 경우 중국에서 공유된 동영상만 볼 수 있습니다."
              },
              "pt-BR": {
                singular: "Este usuário recebeu acesso a todo o conteúdo desta página e pode assistir no Vimeo.com. Ao acessar videoji.jk, ele só verá os vídeos disponibilizados na China"
              },
              "zh-CN": {
                singular: "此用户已被授予访问此页面上所有内容的权限，并可以在 Vimeo.com 上查看。当他们访问 videoji.jk 时，他们只能看到在中国分享的视频"
              }
            }
          })
        })]
      })]
    });
  }
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  function _v23({
    avatarLink: _v0,
    name: _v1,
    role: _v2,
    email: _v3
  }) {
    return (0, _v1.jsxs)(_v20.VStack, {
      bgColor: "background",
      borderWidth: (0, _v7.rem)(1),
      borderStyle: "solid",
      borderColor: "stroke",
      borderRadius: (0, _v7.rem)(12),
      alignItems: "stretch",
      spacing: 0,
      children: [(0, _v1.jsxs)(_v20.VStack, {
        p: (0, _v7.rem)(16),
        alignItems: "flex-start",
        spacing: 0,
        children: [(0, _v1.jsx)(_v16.Avatar, {
          src: _v0,
          alt: _v1,
          nameProps: {
            name: _v1
          },
          size: "lg"
        }), (0, _v1.jsx)(_v4.Header, {
          "data-id": "teamMemberNameOrEmail",
          size: "sm",
          fontWeight: 500,
          mt: (0, _v7.rem)(16),
          children: _v1
        }), (0, _v1.jsxs)(_v18.HStack, {
          gap: 2,
          w: "100%",
          mt: (0, _v7.rem)(4),
          children: [(0, _v1.jsx)(_v22.Envelope, {}), (0, _v1.jsx)(_v21.Tooltip, {
            label: _v3,
            children: (0, _v1.jsx)(_v19.Text, {
              "data-id": "teamMemberEmail",
              variant: "body-md",
              color: "text-secondary",
              noOfLines: 1,
              cursor: "pointer",
              children: _v3
            })
          })]
        })]
      }), (0, _v1.jsx)(_v17.Divider, {
        borderColor: "stroke",
        opacity: .6
      }), (0, _v1.jsxs)(_v20.VStack, {
        p: (0, _v7.rem)(16),
        alignItems: "flex-start",
        gap: (0, _v7.rem)(2),
        children: [(0, _v1.jsx)(_v19.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: (0, _v14.translate)({
            singular: "Role",
            dictionary: {
              es: {
                singular: "Rol"
              },
              "de-DE": {
                singular: "Rolle"
              },
              "fr-FR": {
                singular: "Rôle"
              },
              "ja-JP": {
                singular: "肩書き"
              },
              "ko-KR": {
                singular: "역할"
              },
              "pt-BR": {
                singular: "Função"
              },
              "zh-CN": {
                singular: "职位"
              }
            }
          })
        }), (0, _v1.jsx)(_v19.Text, {
          "data-id": "teamMemberRole",
          variant: "body-lg",
          fontWeight: 500,
          children: _v2
        })]
      })]
    });
  }
  var _v24 = _v0.i(0);
  function _v25() {
    return (0, _v1.jsxs)(_v18.HStack, {
      "data-testid": "team-user-placeholder-loader",
      children: [(0, _v1.jsx)(_v24.Skeleton, {
        variant: "circle"
      }), (0, _v1.jsxs)(_v20.VStack, {
        alignItems: "flex-start",
        children: [(0, _v1.jsx)(_v24.Skeleton, {
          variant: "text",
          w: "75%",
          h: (0, _v7.rem)(18)
        }), (0, _v1.jsx)(_v24.Skeleton, {
          variant: "text",
          w: "50%",
          h: (0, _v7.rem)(16)
        }), (0, _v1.jsx)(_v24.Skeleton, {
          variant: "text",
          w: (0, _v7.rem)(180),
          h: (0, _v7.rem)(16)
        })]
      })]
    });
  }
  function _v26({
    isLoading: _v0,
    email: _v1,
    role: _v2,
    name: _v3,
    region: _v4,
    avatar: _v5
  }) {
    return _v0 ? (0, _v1.jsx)(_v25, {}) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v23, {
        avatarLink: _v5,
        role: _v2,
        email: _v1,
        name: _v3
      }), "CN" === _v4 && (0, _v1.jsx)(_v15, {})]
    });
  }
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v28 = _v28,
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  _v0.s(["PageContent", 0, ({
    teamOwnerId: _v0,
    memberId: _v1,
    viewer: _v2,
    pageTitle: _v3,
    pageDescription: _v4,
    children: _v5
  }) => {
    let {
        data: _v6,
        isLoading: _v7,
        error: _v8
      } = (0, _v9.useGetUserTeamUser)(() => _v0 && _v1 ? {
        select: ["role", "region", "user.name", "user.pictures", "user.uri", "email", "permissionLevel", "metadata.connections.personalTeamFolder.uri", "status"],
        where: {
          userId: _v0,
          teamUserId: _v1
        }
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1,
        revalidateIfStale: !1,
        errorRetryCount: 3
      }),
      _v9 = (0, _v2.useContext)(_v27.TeamUserInfoDispatcher);
    if ((0, _v2.useEffect)(() => {
      if (_v6) {
        let _v0 = parseInt(_v6.user?.uri?.split("/").pop());
        _v9({
          permissionLevel: _v6.permissionLevel,
          userId: _v0,
          email: _v6.email,
          personalTeamFolderUri: _v6?.metadata?.connections?.personalTeamFolder?.uri,
          isLoaded: !0
        });
      }
    }, [_v6, _v9]), _v8 || _v6?.status === "pending") return (0, _v1.jsx)(_v30.ErrorPage, {
      error: new _v8.ResourceNotFoundError()
    });
    let _v10 = _v6?.user?.pictures?.sizes && _v6.user.pictures.sizes.length > 1 && _v6.user.pictures.sizes[1]?.link ? _v6.user.pictures.sizes[1].link : "https://i.vimeocdn.com/portrait/defaults-blue_72x72.png",
      _v11 = {
        name: _v6?.user?.name || "",
        email: _v6?.email || "",
        role: _v6?.role || _v6?.permissionLevel || "",
        region: _v6?.region || "",
        avatar: _v10
      };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v3.Box, {
        pl: {
          base: (0, _v7.rem)(16),
          sm: (0, _v7.rem)(25)
        },
        pr: {
          base: (0, _v7.rem)(16),
          sm: (0, _v7.rem)(94)
        },
        children: [(0, _v1.jsx)(_v28.default, {}), _v3 && (0, _v1.jsxs)(_v3.Box, {
          mt: {
            base: (0, _v7.rem)(24),
            sm: (0, _v7.rem)(32)
          },
          children: [(0, _v1.jsx)(_v4.Header, {
            variant: "heading-lg",
            size: "xl",
            children: _v3
          }), _v4 && (0, _v1.jsx)(_v5.Paragraph, {
            variant: "body-md",
            color: "text-secondary",
            marginTop: "75",
            children: _v4
          })]
        }), (0, _v1.jsxs)(_v6.Stack, {
          direction: ["column", "row"],
          gap: (0, _v7.rem)(28.5),
          mt: (0, _v7.rem)(48),
          children: [(0, _v1.jsx)(_v3.Box, {
            flex: 1,
            maxW: (0, _v7.rem)(350),
            h: "fit-content",
            children: (0, _v1.jsx)(_v26, {
              isLoading: _v7,
              ..._v11
            })
          }), (0, _v1.jsx)(_v3.Box, {
            flex: 2,
            bgColor: "background",
            borderWidth: (0, _v7.rem)(1),
            borderStyle: "solid",
            borderColor: "stroke",
            p: (0, _v7.rem)(16),
            borderRadius: (0, _v7.rem)(12),
            children: _v5
          })]
        })]
      }), (0, _v1.jsx)(_v3.Box, {
        sx: {
          "& > footer": {
            height: (0, _v7.rem)(60)
          }
        },
        children: _v2 && (0, _v1.jsx)(_v29.EssentialFooter, {
          ..._v2,
          enableQuotaMenu: !1
        })
      })]
    });
  }], 0);
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  _v0.s(["Spinner", 0, () => (0, _v1.jsx)(_v31.Center, {
    h: "100vh",
    children: (0, _v1.jsx)(_v32.Spinner, {})
  })], 0);
}