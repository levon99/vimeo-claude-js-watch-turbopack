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
    _v15 = _v0.i(0);
  let _v16 = _v0 => (0, _v1.jsx)(_v15.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsxs)("g", {
        fill: "currentColor",
        children: [(0, _v1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.015 3a4.265 4.265 0 1 0 0 8.53 4.265 4.265 0 0 0 0-8.53ZM10.203 12.48c-1.82 0-3.586.62-4.913 1.642C3.965 15.142 3 16.634 3 18.377c0 1.51 1.282 2.633 2.734 2.633h10.532c1.452 0 2.734-1.122 2.734-2.633 0-1.743-.965-3.234-2.29-4.255-1.327-1.022-3.093-1.643-4.913-1.643l-.466.004c-.403.005-.886.01-1.059-.001l-.034-.002h-.035Z"
        }), (0, _v1.jsx)("path", {
          d: "M20.9 8.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3.2 3.2c-.4.4-1 .4-1.4 0L16 11.2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1 1 2.5-2.5Z"
        })]
      })
    }),
    _v17 = () => (0, _v1.jsx)(_v14.HStack, {
      justifyContent: "center",
      boxSize: (0, _v7.rem)(32),
      borderRadius: (0, _v7.rem)(10),
      children: (0, _v1.jsx)(_v16, {
        color: "text-secondary"
      })
    }),
    _v18 = _v3.default.div.withConfig({
      displayName: "AllOwnerAdminItem__TipContent",
      componentId: "sc-5dfa1824-0"
    })`
  text-align: left;
  padding: ${(0, _v7.rem)(1)} ${(0, _v7.rem)(6)};
  font-size: ${(0, _v7.rem)(14)};
  overflow-wrap: break-word;
  line-height: 1.5;
`,
    _v19 = (0, _v2.memo)(() => {
      let {
          modalRef: _v0
        } = (0, _v2.useContext)(_v12.RefsState),
        {
          userId: _v1,
          user: _v2
        } = (0, _v13.useGlobalStore)((0, _v4.useShallow)(({
          resourceProps: _v0
        }) => ({
          userId: _v0.data.userId,
          user: _v0.data.user
        }))),
        {
          data: _v3
        } = (0, _v8.useGetUserTeammembers)({
          query: {
            roles: "admin",
            page: 1,
            perPage: 12,
            teamInviteStatuses: "accepted",
            teamStatuses: "active"
          },
          where: {
            userId: _v1
          },
          select: ["email", "user.name"]
        }),
        _v4 = _v3 ? _v3.total - _v3.data.length : 0,
        _v5 = _v3 ? _v3.total + 1 : 1;
      return (0, _v1.jsxs)(_v6.Flex, {
        position: "relative",
        justifyContent: "space-between",
        columnGap: (0, _v7.rem)(10),
        alignItems: "center",
        w: "100%",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          alignItems: "center",
          columnGap: (0, _v7.rem)(8),
          children: [(0, _v1.jsx)(_v17, {}), (0, _v1.jsx)(_v5.Tooltip, {
            placement: "right",
            label: (0, _v1.jsxs)(_v18, {
              children: [(0, _v1.jsx)("p", {
                children: _v2.name
              }), _v3?.data && _v3?.data.length > 0 && _v3.data.map(_v0 => (0, _v1.jsx)("p", {
                children: _v0.user?.name ?? _v0.email
              }, _v0.email)), _v4 > 0 ? (0, _v1.jsxs)("div", {
                children: ["+", _v4, " ", (0, _v9.translate)({
                  singular: "more",
                  dictionary: {
                    es: {
                      singular: "más"
                    },
                    "de-DE": {
                      singular: "mehr"
                    },
                    "fr-FR": {
                      singular: "plus"
                    },
                    "ja-JP": {
                      singular: "もっと"
                    },
                    "ko-KR": {
                      singular: "더 보기"
                    },
                    "pt-BR": {
                      singular: "mais"
                    },
                    "zh-CN": {
                      singular: "更多"
                    }
                  }
                })]
              }) : (0, _v1.jsx)(_v1.Fragment, {})]
            }),
            portalProps: {
              containerRef: _v0
            },
            shouldWrapChildren: !0,
            children: (0, _v1.jsx)(_v10.ItemBox, {
              headerTitle: (0, _v9.translate)({
                singular: "All admins",
                dictionary: {
                  es: {
                    singular: "Todos los administradores"
                  },
                  "de-DE": {
                    singular: "Alle Administratoren"
                  },
                  "fr-FR": {
                    singular: "Tous les administrateurs"
                  },
                  "ja-JP": {
                    singular: "すべての管理者"
                  },
                  "ko-KR": {
                    singular: "모든 관리자"
                  },
                  "pt-BR": {
                    singular: "Todos os administradores"
                  },
                  "zh-CN": {
                    singular: "所有管理员"
                  }
                }
              }),
              subHeaderTitle: !!_v3 && (0, _v9.translate)({
                singular: "{COUNT} member",
                plural: "{COUNT} members",
                count: _v5,
                replacements: {
                  COUNT: _v5
                },
                dictionary: {
                  es: {
                    singular: "{COUNT} miembro",
                    plural: "{COUNT} miembros"
                  },
                  "de-DE": {
                    singular: "{COUNT} Mitglied",
                    plural: "{COUNT} Mitglieder"
                  },
                  "fr-FR": {
                    singular: " {COUNT} membre",
                    plural: "{COUNT} membres"
                  },
                  "ja-JP": {
                    singular: "{COUNT} 人のメンバー",
                    plural: "メンバー{COUNT}人"
                  },
                  "ko-KR": {
                    singular: "회원 {COUNT}명",
                    plural: "멤버 {COUNT}명"
                  },
                  "pt-BR": {
                    singular: "{COUNT} membro",
                    plural: "{COUNT} membros"
                  },
                  "zh-CN": {
                    singular: "{COUNT} 名成员",
                    plural: "{COUNT} 名成员"
                  }
                }
              }),
              subHeaderLoading: !_v3
            })
          })]
        }), (0, _v1.jsx)(_v11.RoleMenuHeader, {
          children: (0, _v9.translate)({
            singular: "Can manage",
            dictionary: {
              es: {
                singular: "Puede administrar"
              },
              "de-DE": {
                singular: "Kann verwalten"
              },
              "fr-FR": {
                singular: "Peut gérer"
              },
              "ja-JP": {
                singular: "管理可能"
              },
              "ko-KR": {
                singular: "관리 가능"
              },
              "pt-BR": {
                singular: "Pode gerenciar"
              },
              "zh-CN": {
                singular: "可以管理"
              }
            }
          })
        })]
      });
    });
  _v0.s(["AllOwnerAdminItem", 0, _v19], 0);
}