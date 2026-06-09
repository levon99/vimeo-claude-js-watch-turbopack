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
    _v12 = _v0.i(0);
  function _v13() {
    return (0, _v1.jsxs)(_v8.AlertRoot, {
      variant: "info",
      size: "sm",
      mt: (0, _v5.rem)(16),
      children: [(0, _v1.jsx)(_v11.AlertIcon, {
        boxSize: "xl",
        h: "fit-content",
        mt: (0, _v5.rem)(4)
      }), (0, _v1.jsxs)(_v3.Box, {
        children: [(0, _v1.jsx)(_v9.AlertTitle, {
          children: (0, _v12.translate)({
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
        }), (0, _v1.jsx)(_v10.AlertDescription, {
          children: (0, _v12.translate)({
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
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  function _v21({
    avatarLink: _v0,
    name: _v1,
    role: _v2,
    email: _v3
  }) {
    return (0, _v1.jsxs)(_v15.HStack, {
      p: (0, _v5.rem)(16),
      columnGap: (0, _v5.rem)(16),
      bgColor: "background",
      borderWidth: (0, _v5.rem)(1),
      borderStyle: "solid",
      borderColor: "stroke",
      borderRadius: (0, _v5.rem)(12),
      children: [(0, _v1.jsx)(_v14.Avatar, {
        src: _v0,
        alt: _v1,
        nameProps: {
          name: _v1
        }
      }), (0, _v1.jsxs)(_v18.VStack, {
        alignItems: "flex-start",
        overflow: "hidden",
        gap: 0,
        children: [(0, _v1.jsx)(_v16.Header, {
          "data-id": "teamMemberNameOrEmail",
          size: "sm",
          fontWeight: 500,
          children: _v1
        }), (0, _v1.jsx)(_v17.Text, {
          "data-id": "teamMemberRole",
          variant: "body-lg",
          color: "text-secondary",
          children: _v2
        }), (0, _v1.jsxs)(_v15.HStack, {
          gap: 2,
          w: "100%",
          children: [(0, _v1.jsx)(_v20.Envelope, {}), (0, _v1.jsx)(_v19.Tooltip, {
            label: _v3,
            children: (0, _v1.jsx)(_v17.Text, {
              "data-id": "teamMemberEmail",
              variant: "body-md",
              color: "text-secondary",
              noOfLines: 1,
              cursor: "pointer",
              children: _v3
            })
          })]
        })]
      })]
    });
  }
  var _v22 = _v0.i(0);
  function _v23() {
    return (0, _v1.jsxs)(_v15.HStack, {
      "data-testid": "team-user-placeholder-loader",
      children: [(0, _v1.jsx)(_v22.Skeleton, {
        variant: "circle"
      }), (0, _v1.jsxs)(_v18.VStack, {
        alignItems: "flex-start",
        children: [(0, _v1.jsx)(_v22.Skeleton, {
          variant: "text",
          w: "75%",
          h: (0, _v5.rem)(18)
        }), (0, _v1.jsx)(_v22.Skeleton, {
          variant: "text",
          w: "50%",
          h: (0, _v5.rem)(16)
        }), (0, _v1.jsx)(_v22.Skeleton, {
          variant: "text",
          w: (0, _v5.rem)(180),
          h: (0, _v5.rem)(16)
        })]
      })]
    });
  }
  function _v24({
    isLoading: _v0,
    email: _v1,
    role: _v2,
    name: _v3,
    region: _v4,
    avatar: _v5
  }) {
    return _v0 ? (0, _v1.jsx)(_v23, {}) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v21, {
        avatarLink: _v5,
        role: _v2,
        email: _v1,
        name: _v3
      }), "CN" === _v4 && (0, _v1.jsx)(_v13, {})]
    });
  }
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v26 = _v26,
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  _v0.s(["PageContent", 0, ({
    teamOwnerId: _v0,
    memberId: _v1,
    viewer: _v2,
    children: _v3
  }) => {
    let {
        data: _v4,
        isLoading: _v5,
        error: _v6
      } = (0, _v7.useGetUserTeamUser)(() => _v0 && _v1 ? {
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
      _v7 = (0, _v2.useContext)(_v25.TeamUserInfoDispatcher);
    if ((0, _v2.useEffect)(() => {
      if (_v4) {
        let _v0 = parseInt(_v4.user?.uri?.split("/").pop());
        _v7({
          permissionLevel: _v4.permissionLevel,
          userId: _v0,
          email: _v4.email,
          personalTeamFolderUri: _v4?.metadata?.connections?.personalTeamFolder?.uri,
          isLoaded: !0
        });
      }
    }, [_v4, _v7]), _v6 || _v4?.status === "pending") return (0, _v1.jsx)(_v28.ErrorPage, {
      error: new _v6.ResourceNotFoundError()
    });
    let _v8 = _v4?.user?.pictures?.sizes && _v4.user.pictures.sizes.length > 1 && _v4.user.pictures.sizes[1]?.link ? _v4.user.pictures.sizes[1].link : "https://i.vimeocdn.com/portrait/defaults-blue_72x72.png",
      _v9 = {
        name: _v4?.user?.name || "",
        email: _v4?.email || "",
        role: _v4?.role || "",
        region: _v4?.region || "",
        avatar: _v8
      };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v3.Box, {
        pl: {
          base: (0, _v5.rem)(16),
          sm: (0, _v5.rem)(25)
        },
        pr: {
          base: (0, _v5.rem)(16),
          sm: (0, _v5.rem)(94)
        },
        children: [(0, _v1.jsx)(_v26.default, {}), (0, _v1.jsxs)(_v4.Stack, {
          direction: ["column", "row"],
          gap: (0, _v5.rem)(28.5),
          mt: (0, _v5.rem)(48),
          children: [(0, _v1.jsx)(_v3.Box, {
            flex: 1,
            maxW: (0, _v5.rem)(350),
            h: "fit-content",
            children: (0, _v1.jsx)(_v24, {
              isLoading: _v5,
              ..._v9
            })
          }), (0, _v1.jsx)(_v3.Box, {
            flex: 2,
            bgColor: "background",
            borderWidth: (0, _v5.rem)(1),
            borderStyle: "solid",
            borderColor: "stroke",
            p: (0, _v5.rem)(16),
            borderRadius: (0, _v5.rem)(12),
            children: _v3
          })]
        })]
      }), (0, _v1.jsx)(_v3.Box, {
        sx: {
          "& > footer": {
            height: (0, _v5.rem)(60)
          }
        },
        children: _v2 && (0, _v1.jsx)(_v27.EssentialFooter, {
          ..._v2,
          enableQuotaMenu: !1
        })
      })]
    });
  }], 0);
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  _v0.s(["Spinner", 0, () => (0, _v1.jsx)(_v29.Center, {
    h: "100vh",
    children: (0, _v1.jsx)(_v30.Spinner, {})
  })], 0);
}