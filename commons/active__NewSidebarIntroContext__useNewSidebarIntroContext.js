{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = (0, _v8.createContext)({
      active: !1,
      anchor: "active"
    }),
    _v10 = () => (0, _v8.useContext)(_v9);
  _v0.s(["NewSidebarIntroContext", 0, _v9, "useNewSidebarIntroContext", 0, _v10], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = new Date("2026-07-20T00:00:00Z");
  function _v18() {
    let _v0 = (0, _v16.useViewer)()?.user?.createdTime;
    return !!_v0 && new Date(_v0) > _v17;
  }
  _v0.s(["useIsNewSidebarUser", 0, _v18], 0);
  let _v19 = [-8, 16],
    _v20 = [-8, 280];
  function _v21({
    children: _v0
  }) {
    let {
        isOpen: _v1,
        acknowledge: _v2
      } = function () {
        let _v0 = (0, _v16.useViewer)(),
          _v1 = _v0?.user?.id,
          _v2 = _v18(),
          {
            data: _v3,
            mutate: _v4
          } = (0, _v14.useGetUserPreferences)(() => _v1 && !_v2 ? {
            where: {
              userId: _v1
            },
            select: ["nsim"]
          } : null, {
            revalidateOnFocus: !1,
            revalidateIfStale: !1
          }),
          [_v5] = (0, _v14.usePatchUserPreferences)(),
          _v6 = void 0 !== _v3,
          _v7 = !!_v3?.nsim;
        return {
          isOpen: _v6 && !_v7 && !_v2,
          acknowledge: (0, _v8.useCallback)(() => {
            _v1 && (_v4({
              nsim: !0
            }, {
              revalidate: !1
            }), _v5({
              where: {
                userId: _v1
              },
              select: ["nsim"],
              variables: {
                nsim: 1
              }
            }).then(() => _v4()));
          }, [_v1, _v5, _v4])
        };
      }(),
      {
        anchor: _v3
      } = _v10();
    return _v1 ? (0, _v1.jsx)(_v11.AnnouncementPopover, {
      isOpen: _v1,
      onAcknowledge: _v2,
      placement: "right-start",
      offset: "first" === _v3 ? _v20 : _v19,
      badge: (0, _v1.jsx)(_v12.Badge, {
        variant: "new",
        size: "sm",
        children: (0, _v1.jsx)(_v13.Text, {
          color: "text-primary",
          variant: "heading-2xs",
          children: (0, _v15.translate)({
            singular: "New",
            dictionary: {
              es: {
                singular: "Nuevo"
              },
              "de-DE": {
                singular: "Neu"
              },
              "fr-FR": {
                singular: "Nouveau"
              },
              "ja-JP": {
                singular: "新規作成"
              },
              "ko-KR": {
                singular: "신규"
              },
              "pt-BR": {
                singular: "Novo"
              },
              "zh-CN": {
                singular: "新"
              }
            }
          })
        })
      }),
      title: (0, _v15.translate)({
        singular: "We made it easier to get around",
        dictionary: {
          es: {
            singular: "Hemos facilitado la navegación"
          },
          "de-DE": {
            singular: "Wir haben die Navigation vereinfacht"
          },
          "fr-FR": {
            singular: "Nous avons facilité la navigation"
          },
          "ja-JP": {
            singular: "サイト内の移動をより簡単にしました"
          },
          "ko-KR": {
            singular: "이동이 더 쉬워졌습니다"
          },
          "pt-BR": {
            singular: "Facilitamos a navegação"
          },
          "zh-CN": {
            singular: "我们让导航更简单了"
          }
        }
      }),
      body: (0, _v15.translate)({
        singular: "You can now use your sidebar from any page in Vimeo.",
        dictionary: {
          es: {
            singular: "Ahora puedes usar tu barra lateral desde cualquier página de Vimeo."
          },
          "de-DE": {
            singular: "Sie können Ihre Seitenleiste jetzt von jeder Seite in Vimeo aus verwenden."
          },
          "fr-FR": {
            singular: "Vous pouvez désormais utiliser votre barre latérale depuis n'importe quelle page sur Vimeo."
          },
          "ja-JP": {
            singular: "Vimeoのどのページからでもサイドバーを使用できるようになりました。"
          },
          "ko-KR": {
            singular: "이제 Vimeo의 모든 페이지에서 사이드바를 사용할 수 있습니다."
          },
          "pt-BR": {
            singular: "Agora você pode usar sua barra lateral em qualquer página do Vimeo."
          },
          "zh-CN": {
            singular: "现在您可以在 Vimeo 的任何页面使用侧边栏。"
          }
        }
      }),
      children: (0, _v1.jsx)(_v3.Box, {
        children: _v0
      })
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v0
    });
  }
  _v0.s(["NewSidebarIntroPopover", 0, _v21], 0);
  let _v22 = (0, _v6.rem)(24),
    _v23 = (0, _v6.rem)(12),
    _v24 = (0, _v6.rem)(12),
    _v25 = (0, _v6.rem)(8),
    _v26 = (0, _v6.rem)(6);
  _v0.s(["PrimaryNavItem", 0, ({
    item: _v0,
    variant: _v1,
    isFirst: _v2 = !1
  }) => {
    let {
        active: _v3,
        anchor: _v4
      } = _v10(),
      _v5 = _v3 && ("active" === _v4 ? !!_v0.active : _v2),
      _v6 = _v0 => _v5 ? (0, _v1.jsx)(_v21, {
        children: _v0
      }) : _v0;
    if ("icons" === _v1) {
      let _v0 = !!_v0.href;
      return _v6((0, _v1.jsx)(_v5.Tooltip, {
        label: _v0.label,
        placement: "right",
        children: (0, _v1.jsxs)(_v3.Box, {
          position: "relative",
          display: "inline-flex",
          children: [(0, _v1.jsx)(_v4.IconButton, {
            as: _v0 ? _v2.default : "button",
            ...(_v0 ? {
              href: _v0.href,
              prefetch: _v0.prefetch
            } : {}),
            "aria-label": _v0.label,
            icon: _v0.icon,
            variant: "tertiary",
            size: "md",
            borderRadius: _v24,
            onClick: _v0.onClick,
            "data-id": _v0.dataId,
            sx: {
              "> svg": {
                width: _v22,
                height: _v22
              },
              ...(_v0.active && {
                backgroundColor: "button-tertiary-hover",
                _dark: {
                  backgroundColor: "button-tertiary-hover"
                }
              })
            }
          }), _v0.action && (0, _v1.jsx)(_v3.Box, {
            position: "absolute",
            top: (0, _v6.rem)(2),
            right: (0, _v6.rem)(2),
            pointerEvents: "none",
            children: _v0.action
          })]
        })
      }));
    }
    return (0, _v1.jsx)(_v3.Box, {
      as: "li",
      listStyleType: "none",
      children: _v6((0, _v1.jsx)(_v7.MenuItem, {
        icon: _v0.icon,
        iconSize: _v22,
        iconMarginRight: _v23,
        borderRadius: _v24,
        paddingX: _v25,
        paddingLeft: _v26,
        label: _v0.label,
        href: _v0.href,
        active: _v0.active,
        prefetch: _v0.prefetch,
        dataId: _v0.dataId,
        action: _v0.action,
        showActionOnHover: _v0.showActionOnHover,
        onClick: _v0.onClick
      }))
    });
  }], 0);
}