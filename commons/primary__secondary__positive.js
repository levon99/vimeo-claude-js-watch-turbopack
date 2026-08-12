{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = ({
    isActive: _v0,
    isIconOnRight: _v1,
    offIcon: _v2,
    offStateText: _v3,
    onIcon: _v4,
    onStateText: _v5,
    size: _v6,
    turnOffActionText: _v7,
    turnOffIcon: _v8,
    ..._v9
  }) => {
    let [_v10, _v11] = (0, _v5.useState)(!1),
      _v12 = "primary",
      _v13 = _v3,
      _v14 = _v2;
    _v0 && (_v12 = _v10 ? "secondary" : "positive", _v13 = _v10 ? _v7 : _v5, _v14 = _v10 ? _v8 : _v4);
    let {
      onMouseEnter: _v15,
      onMouseLeave: _v16
    } = _v9;
    return (0, _v1.jsx)(_v6.Button, {
      leftIcon: _v1 ? void 0 : _v14,
      rightIcon: _v1 ? _v14 : void 0,
      onMouseEnter: _v0 => {
        _v15?.(_v0), _v11(!0);
      },
      onMouseLeave: _v0 => {
        _v16?.(_v0), _v11(!1);
      },
      size: _v6,
      variant: _v12,
      _hover: _v0 ? {
        color: "text-primary",
        bgColor: "background-blur",
        svg: {
          "*": {
            fill: "text-primary"
          }
        }
      } : void 0,
      ..._v9,
      children: _v13
    });
  };
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  function _v15({
    user: _v0,
    showByline: _v1,
    showCard: _v2,
    showProfile: _v3,
    showProfileLink: _v4,
    onProfileClick: _v5,
    onProfileMouseOver: _v6
  }) {
    let [_v7, _v8] = (0, _v14.getAvatarImages)(_v0?.pictures?.sizes);
    if (!_v3 && !_v1) return null;
    let _v9 = (0, _v9.translate)({
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
      _v10 = _v4 ? _v0?.link : void 0,
      _v11 = (0, _v1.jsxs)(_v2.Flex, {
        align: "center",
        gap: 75,
        onMouseOver: _v6,
        children: [_v3 ? (0, _v1.jsx)(_v13.LinkOrStaticElem, {
          label: _v9,
          newTab: !0,
          onClick: _v5,
          url: _v10,
          children: (0, _v1.jsx)(_v10.Avatar, {
            src: _v7,
            srcSet: _v8,
            size: "sm",
            alt: _v0?.name,
            nameProps: {
              name: _v0?.name ?? ""
            }
          })
        }) : null, _v1 ? (0, _v1.jsx)(_v13.LinkOrStaticElem, {
          label: _v9,
          newTab: !0,
          onClick: _v5,
          url: _v10,
          children: (0, _v1.jsx)(_v11.Text, {
            as: "span",
            variant: "heading-xs",
            children: _v0?.name
          })
        }) : null]
      });
    return _v2 ? (0, _v1.jsx)(_v12.UserCard, {
      user: _v0,
      profileUrl: _v10,
      onProfileClick: _v5,
      openDelay: 500,
      children: _v11
    }) : _v11;
  }
  _v0.s(["default", 0, function ({
    user: _v0,
    videoId: _v1,
    isFollowing: _v2,
    isLoadingFollow: _v3,
    onFollowClick: _v4,
    onProfileClick: _v5,
    onProfileMouseOver: _v6,
    showByline: _v7,
    showCard: _v8,
    showFollow: _v9,
    showProfile: _v10,
    showProfileLink: _v11,
    extraActions: _v12
  }) {
    return _v0 ? (0, _v1.jsxs)(_v2.Flex, {
      "data-testid": "uploader-details",
      align: "center",
      gap: "75",
      children: [(0, _v1.jsx)(_v15, {
        user: _v0,
        showByline: _v7,
        showCard: _v8,
        showProfile: _v10,
        showProfileLink: _v11,
        onProfileClick: _v5,
        onProfileMouseOver: _v6
      }), _v0.isStaffPicked && _v10 && _v7 && (0, _v1.jsx)(_v2.Flex, {
        gap: 10,
        children: (0, _v1.jsx)(_v8.StaffPickBadge, {
          href: "/watch",
          videoId: parseInt(_v1),
          userUri: _v0.uri,
          feature: "profile"
        })
      }), _v9 ? (0, _v1.jsx)(_v7, {
        isDisabled: _v3,
        isActive: _v2,
        offStateText: (0, _v9.translate)({
          singular: "Follow",
          dictionary: {
            es: {
              singular: "Seguir"
            },
            "de-DE": {
              singular: "Folgen"
            },
            "fr-FR": {
              singular: "Suivre"
            },
            "ja-JP": {
              singular: "フォロー"
            },
            "ko-KR": {
              singular: "팔로우"
            },
            "pt-BR": {
              singular: "Seguir"
            },
            "zh-CN": {
              singular: "关注"
            }
          }
        }),
        onClick: _v4,
        onIcon: (0, _v1.jsx)(_v3.Checkmark, {}),
        onStateText: (0, _v9.translate)({
          singular: "Following",
          dictionary: {
            es: {
              singular: "Siguiendo"
            },
            "de-DE": {
              singular: "Folgt"
            },
            "fr-FR": {
              singular: "Abonné"
            },
            "ja-JP": {
              singular: "フォロー中"
            },
            "ko-KR": {
              singular: "팔로잉"
            },
            "pt-BR": {
              singular: "Seguindo"
            },
            "zh-CN": {
              singular: "关注"
            }
          }
        }),
        turnOffActionText: (0, _v9.translate)({
          singular: "Unfollow",
          dictionary: {
            es: {
              singular: "Dejar de seguir"
            },
            "de-DE": {
              singular: "Nicht mehr folgen"
            },
            "fr-FR": {
              singular: "Ne plus suivre"
            },
            "ja-JP": {
              singular: "フォロー解除"
            },
            "ko-KR": {
              singular: "팔로우 취소"
            },
            "pt-BR": {
              singular: "Parar de seguir"
            },
            "zh-CN": {
              singular: "取消关注"
            }
          }
        }),
        turnOffIcon: (0, _v1.jsx)(_v4.CloseX, {}),
        size: "xs"
      }) : null, _v12]
    }) : null;
  }], 0);
}