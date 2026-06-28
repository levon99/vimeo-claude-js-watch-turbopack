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
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  _v0.s(["UserCard", 0, function ({
    onProfileClick: _v0,
    openDelay: _v1,
    placement: _v2 = "top-start",
    profileUrl: _v3,
    hasFollow: _v4,
    followSource: _v5 = "",
    user: _v6,
    children: _v7,
    ..._v8
  }) {
    let [_v9, _v10] = _v2.default.useState(!1),
      _v11 = _v24.T.followersCount(_v6?.metadata?.connections?.followers?.total),
      _v12 = _v24.T.videosCount(_v6?.metadata?.publicVideos?.total),
      _v13 = void 0 !== _v6?.metadata?.publicVideos?.total,
      _v14 = _v6?.skills ?? [],
      [_v15, _v16] = (0, _v25.getAvatarImages)(_v6?.pictures?.sizes),
      _v17 = (0, _v18.translate)({
        singular: "Link to user profile",
        dictionary: {
          es: {
            singular: "Enlace al perfil del usuario"
          },
          "de-DE": {
            singular: "Link zum Benutzerprofil"
          },
          "fr-FR": {
            singular: "Lien vers le profil de l'utilisateur"
          },
          "ja-JP": {
            singular: "ユーザーのプロフィールにリンク"
          },
          "ko-KR": {
            singular: "사용자 프로필 바로가기"
          },
          "pt-BR": {
            singular: "Link para o perfil do usuário"
          },
          "zh-CN": {
            singular: "链接到用户个人资料"
          }
        }
      }),
      _v18 = _v6?.backgroundVideo?.[0];
    return (0, _v1.jsxs)(_v7.Popover, {
      placement: _v2,
      trigger: "hover",
      openDelay: _v1,
      onOpen: () => _v10(!0),
      onClose: () => _v10(!1),
      ..._v8,
      children: [(0, _v1.jsx)(_v11.PopoverTrigger, {
        children: _v7
      }), (0, _v1.jsxs)(_v9.PopoverContent, {
        w: 320,
        borderRadius: "drawer",
        p: 0,
        onClick: _v0 => _v0.stopPropagation(),
        children: [_v18 && window.playerAssetUrls ? (0, _v1.jsx)(_v19.PlayerContextProvider, {
          type: _v20.PlayerType.BarebonePlayer,
          assetUrls: window.playerAssetUrls,
          children: (0, _v1.jsx)(_v10.PopoverHeader, {
            textStyle: "heading-sm",
            display: "flex",
            justifyContent: "space-between",
            children: (0, _v1.jsx)(_v23.default, {
              backgroundVideo: _v18,
              elemWidth: 320,
              isVisible: _v9
            })
          })
        }) : null, (0, _v1.jsx)(_v8.PopoverBody, {
          px: 50,
          pb: 50,
          children: (0, _v1.jsxs)(_v14.VStack, {
            w: "100%",
            p: 200,
            pt: 400,
            spacing: 200,
            children: [(0, _v1.jsx)(_v22.LinkOrStaticElem, {
              label: _v17,
              newTab: !0,
              onClick: _v0,
              url: _v3,
              children: (0, _v1.jsx)(_v3.Avatar, {
                size: "2xl",
                alt: _v6.name,
                src: _v15,
                srcSet: _v16,
                nameProps: {
                  name: _v6.name
                }
              })
            }), (0, _v1.jsxs)(_v14.VStack, {
              children: [(0, _v1.jsx)(_v22.LinkOrStaticElem, {
                label: _v17,
                newTab: !0,
                onClick: _v0,
                url: _v3,
                children: (0, _v1.jsx)(_v13.Text, {
                  as: "h4",
                  variant: "heading-md",
                  align: "center",
                  children: _v6.name
                })
              }), _v6.locationDetails?.formattedAddress && (0, _v1.jsxs)(_v6.HStack, {
                spacing: 50,
                textAlign: "center",
                children: [(0, _v1.jsx)(_v17.UserLocation, {
                  color: "text-secondary"
                }), (0, _v1.jsx)(_v13.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: _v6.locationDetails?.formattedAddress
                })]
              })]
            }), _v14.length > 0 ? (0, _v1.jsx)(_v6.HStack, {
              wrap: "wrap",
              justify: "center",
              children: _v14.map(_v0 => (0, _v1.jsx)(_v12.Tag, {
                size: "sm",
                fontSize: "text-sm",
                fontWeight: "regular",
                cursor: "default",
                px: 200,
                children: _v0.name
              }, _v0.name))
            }) : null, (0, _v1.jsxs)(_v14.VStack, {
              w: "100%",
              spacing: 100,
              children: [(0, _v1.jsx)(_v5.Divider, {
                borderColor: "stroke",
                _dark: {
                  borderColor: "stroke"
                }
              }), (0, _v1.jsxs)(_v6.HStack, {
                spacing: 200,
                children: [_v13 ? (0, _v1.jsxs)(_v6.HStack, {
                  spacing: 75,
                  children: [(0, _v1.jsx)(_v15.VideosStack, {}), (0, _v1.jsx)(_v13.Text, {
                    variant: "body-xl",
                    fontSize: "text-sm",
                    children: _v12
                  })]
                }) : null, (0, _v1.jsxs)(_v6.HStack, {
                  spacing: 75,
                  children: [(0, _v1.jsx)(_v16.PersonUser, {}), (0, _v1.jsx)(_v13.Text, {
                    variant: "body-xl",
                    fontSize: "text-sm",
                    children: _v11
                  })]
                })]
              }), (0, _v1.jsx)(_v5.Divider, {
                borderColor: "stroke",
                _dark: {
                  borderColor: "stroke"
                }
              })]
            }), _v3 ? (0, _v1.jsx)(_v4.Button, {
              as: "a",
              href: _v3,
              rel: "noopener noreferrer",
              target: "_blank",
              "aria-label": (0, _v18.translate)({
                singular: "View profile",
                dictionary: {
                  es: {
                    singular: "Ver perfil"
                  },
                  "de-DE": {
                    singular: "Profil anzeigen"
                  },
                  "fr-FR": {
                    singular: "Voir le profil"
                  },
                  "ja-JP": {
                    singular: "プロフィールを見る"
                  },
                  "ko-KR": {
                    singular: "프로필 보기"
                  },
                  "pt-BR": {
                    singular: "Ver perfil"
                  },
                  "zh-CN": {
                    singular: "查看个人资料"
                  }
                }
              }),
              size: "sm",
              w: "100%",
              onClick: _v0,
              variant: "primary",
              children: (0, _v18.translate)({
                singular: "View profile",
                dictionary: {
                  es: {
                    singular: "Ver perfil"
                  },
                  "de-DE": {
                    singular: "Profil anzeigen"
                  },
                  "fr-FR": {
                    singular: "Voir le profil"
                  },
                  "ja-JP": {
                    singular: "プロフィールを見る"
                  },
                  "ko-KR": {
                    singular: "프로필 보기"
                  },
                  "pt-BR": {
                    singular: "Ver perfil"
                  },
                  "zh-CN": {
                    singular: "查看个人资料"
                  }
                }
              })
            }) : null, _v4 && _v6 && (0, _v1.jsx)(_v21.FollowButton, {
              user: _v6,
              source: _v5
            })]
          })
        })]
      })]
    });
  }]);
}