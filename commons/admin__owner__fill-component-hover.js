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
    _v21 = _v0.i(0);
  let _v22 = ({
    item: _v0
  }) => {
    let {
        uri: _v1,
        name: _v2,
        permission: _v3,
        rowLink: _v4,
        manageLink: _v5,
        thumbnailSrc: _v6,
        color: _v7,
        type: _v8,
        itemsCount: _v9
      } = _v0,
      _v10 = (0, _v12.useContext)(_v15.ViewerContext),
      _v11 = _v10?.teamUser?.ownerId ?? _v10?.user?.id,
      _v12 = _v10?.teamUser ? "admin" : "owner",
      {
        permissionLevel: _v13,
        email: _v14,
        userId: _v15
      } = (0, _v12.useContext)(_v14.TeamUserInfoState),
      [_v16, _v17] = (0, _v12.useState)(!1),
      _v18 = (0, _v11.useRouter)(),
      _v19 = {
        role: _v13,
        email: _v14,
        userId: _v15
      },
      _v20 = {
        type: _v8,
        id: parseInt(_v1.split("/").pop())
      },
      _v21 = !!_v4,
      _v22 = (0, _v21.isTabbedView)(),
      _v23 = () => {
        (0, _v20.sendClickManageLinkEvent)({
          teamOwnerId: _v11,
          currentTeamUserRole: _v12,
          member: _v19,
          resource: _v20
        });
      },
      _v24 = _v0 => {
        _v21 && _v22 && _v17(_v0);
      },
      _v25 = (0, _v1.jsx)(_v16.ItemActions, {
        manageLink: _v5,
        onClickManageLink: _v23
      });
    return _v22 && (_v25 = _v16 ? (0, _v1.jsx)(_v16.ItemActions, {
      manageLink: _v5,
      onClickManageLink: _v23
    }) : (0, _v1.jsx)(_v5.Td, {
      px: 0,
      py: "sm"
    })), (0, _v1.jsxs)(_v4.Tr, {
      onClick: () => {
        (0, _v20.sendClickUserAccessHierarchyEvent)({
          teamOwnerId: _v11,
          currentTeamUserRole: _v12,
          member: _v19,
          resource: _v20
        }), _v4 && _v18.push(_v4);
      },
      onMouseOver: () => _v24(!0),
      onMouseLeave: () => _v24(!1),
      _hover: {
        bgColor: "fill-component-hover"
      },
      borderRadius: "md",
      cursor: _v21 ? "pointer" : "default",
      children: [(0, _v1.jsx)(_v5.Td, {
        colSpan: 3,
        p: "sm",
        children: (0, _v1.jsxs)(_v13.HStack, {
          columnGap: "md",
          overflow: "hidden",
          children: [(0, _v1.jsx)(_v18.ItemThumbnail, {
            name: _v2,
            thumbnailSrc: _v6,
            color: _v7
          }), (0, _v1.jsx)(_v19.ItemTitle, {
            title: _v2,
            subtitle: (() => {
              if (_v9) return (0, _v8.translate)({
                singular: "{ITEMS} item",
                plural: "{ITEMS} items",
                count: _v9,
                replacements: {
                  ITEMS: _v9
                },
                dictionary: {
                  es: {
                    singular: "{ITEMS} elemento",
                    plural: "{ITEMS} elementos"
                  },
                  "de-DE": {
                    singular: "{ITEMS} Element",
                    plural: "{ITEMS} Elemente"
                  },
                  "fr-FR": {
                    singular: "{ITEMS} élément",
                    plural: "{ITEMS} éléments"
                  },
                  "ja-JP": {
                    singular: "{ITEMS} 件のアイテム",
                    plural: "{ITEMS} 件のアイテム"
                  },
                  "ko-KR": {
                    singular: "{ITEMS}개 항목",
                    plural: "{ITEMS}개 항목"
                  },
                  "pt-BR": {
                    singular: "{ITEMS} iten",
                    plural: "{ITEMS} itens"
                  },
                  "zh-CN": {
                    singular: "{ITEMS} 项",
                    plural: "{ITEMS} 项"
                  }
                }
              });
              {
                let _v0 = (0, _v21.removeUnderscoreAndCapitalize)(_v8);
                return `${_v0}`;
              }
            })()
          })]
        })
      }), (0, _v1.jsx)(_v17.ItemPermission, {
        permission: _v3
      }), _v25]
    });
  };
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = ({
      children: _v0,
      headerRow: _v1
    }) => (0, _v1.jsxs)(_v23.Table, {
      variant: "unstyled",
      children: [(0, _v1.jsx)(_v24.Thead, {
        children: _v1
      }), (0, _v1.jsx)(_v25.Tbody, {
        children: _v0
      })]
    }),
    _v27 = ({
      items: _v0,
      isLoading: _v1
    }) => (0, _v1.jsx)(_v26, {
      headerRow: (0, _v1.jsx)(_v28, {}),
      children: _v1 ? Array.from({
        length: 10
      }).map((_v0, _v1) => (0, _v1.jsx)(_v10.TableItemPlaceholder, {}, _v1)) : _v0.map(_v0 => (0, _v1.jsx)(_v22, {
        item: _v0
      }, `${_v0.uri} - ${_v0.name}`))
    }),
    _v28 = () => (0, _v1.jsxs)(_v4.Tr, {
      children: [(0, _v1.jsx)(_v5.Td, {
        colSpan: 3,
        px: "sm",
        children: (0, _v1.jsx)(_v3.Header, {
          size: "xs",
          fontWeight: 500,
          children: (0, _v8.translate)({
            singular: "Title",
            dictionary: {
              es: {
                singular: "Título"
              },
              "de-DE": {
                singular: "Titel"
              },
              "fr-FR": {
                singular: "Titre"
              },
              "ja-JP": {
                singular: "タイトル"
              },
              "ko-KR": {
                singular: "제목"
              },
              "pt-BR": {
                singular: "Título"
              },
              "zh-CN": {
                singular: "标题"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v6.Hide, {
        breakpoint: `(max-width: ${(0, _v7.rem)(_v9.HIDE_PERMISSION_COLUMN_BREAKPOINT)})`,
        children: (0, _v1.jsx)(_v5.Td, {
          children: (0, _v1.jsx)(_v3.Header, {
            size: "xs",
            fontWeight: 500,
            children: (0, _v8.translate)({
              singular: "Permissions",
              dictionary: {
                es: {
                  singular: "Permisos"
                },
                "de-DE": {
                  singular: "Berechtigungen"
                },
                "fr-FR": {
                  singular: "Autorisations"
                },
                "ja-JP": {
                  singular: "使用許可"
                },
                "ko-KR": {
                  singular: "허가"
                },
                "pt-BR": {
                  singular: "Permissões"
                },
                "zh-CN": {
                  singular: "权限"
                }
              }
            })
          })
        })
      }), (0, _v1.jsx)(_v5.Td, {
        px: 0
      })]
    });
  _v0.s(["StateManager", 0, ({
    items: _v0,
    isLoading: _v1,
    error: _v2,
    emptyState: _v3
  }) => _v2 ? (0, _v1.jsx)(_v2.ErrorState, {}) : !_v1 && _v0.length < 1 ? _v3 : (0, _v1.jsx)(_v27, {
    items: _v0,
    isLoading: _v1
  })], 0);
}