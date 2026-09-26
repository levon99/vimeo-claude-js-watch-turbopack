{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v0 => _v0 ? _v0.deleteVideo ? (0, _v3.translate)({
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
    }) : _v0.edit ? (0, _v3.translate)({
      singular: "Can edit",
      dictionary: {
        es: {
          singular: "Puede editar"
        },
        "de-DE": {
          singular: "Kann bearbeiten"
        },
        "fr-FR": {
          singular: "Peut modifier"
        },
        "ja-JP": {
          singular: "編集可能"
        },
        "ko-KR": {
          singular: "편집 가능"
        },
        "pt-BR": {
          singular: "Pode editar"
        },
        "zh-CN": {
          singular: "可以编辑"
        }
      }
    }) : _v0.canComment ? (0, _v3.translate)({
      singular: "Can comment",
      dictionary: {
        es: {
          singular: "Puede comentar"
        },
        "de-DE": {
          singular: "Kann kommentieren"
        },
        "fr-FR": {
          singular: "Peut commenter"
        },
        "ja-JP": {
          singular: "コメント可能"
        },
        "ko-KR": {
          singular: "댓글 달기 가능"
        },
        "pt-BR": {
          singular: "Pode comentar"
        },
        "zh-CN": {
          singular: "可以评论"
        }
      }
    }) : (0, _v3.translate)({
      singular: "Can view",
      dictionary: {
        es: {
          singular: "Puede ver"
        },
        "de-DE": {
          singular: "Kann anschauen"
        },
        "fr-FR": {
          singular: "Peut regarder"
        },
        "ja-JP": {
          singular: "視聴可能"
        },
        "ko-KR": {
          singular: "시청 가능"
        },
        "pt-BR": {
          singular: "Pode visualizar"
        },
        "zh-CN": {
          singular: "可以查看"
        }
      }
    }) : (0, _v3.translate)({
      singular: "No access",
      dictionary: {
        es: {
          singular: "Sin acceso"
        },
        "de-DE": {
          singular: "Kein Zugang"
        },
        "fr-FR": {
          singular: "Pas d'accès"
        },
        "ja-JP": {
          singular: "アクセスできません"
        },
        "ko-KR": {
          singular: "접근 권한 없음"
        },
        "pt-BR": {
          singular: "Sem acesso"
        },
        "zh-CN": {
          singular: "无访问权限"
        }
      }
    }),
    _v6 = (_v0, _v1) => {
      let _v2,
        _v3 = "";
      _v1 && (_v3 = `/folders/${(_v2 = _v1.split("/"))[_v2.length - 1]}`);
      let _v4 = "shared-resources";
      return location.pathname.includes(_v4.ROUTE_SEGMENT.TEAM_LIBRARY) && (_v4 = _v4.ROUTE_SEGMENT.TEAM_LIBRARY), location.pathname.includes(_v4.ROUTE_SEGMENT.MY_LIBRARY) && (_v4 = _v4.ROUTE_SEGMENT.MY_LIBRARY), new URL(`${_v4.TEAM_MEMBERS_ROUTE}/${_v0}/${_v4}${_v3}`, window.location.origin).href;
    };
  _v0.s(["getLoadMoreStates", 0, (_v0, _v1, _v2) => {
    let _v3 = !_v0 && !_v2,
      _v4 = _v3 || _v1 > 0 && _v0 && void 0 === _v0[_v1 - 1];
    return {
      isLoadingInitialData: _v3,
      isLoadingMore: _v4,
      isDone: !_v0?.[_v0?.length - 1]?.paging?.next
    };
  }, "getSharedResourceLink", 0, _v6, "isTabbedView", 0, () => !!(location.pathname.includes(_v4.ROUTE_SEGMENT.TEAM_LIBRARY) || location.pathname.includes(_v4.ROUTE_SEGMENT.ACCESS)) || location.pathname.includes(_v4.ROUTE_SEGMENT.MY_LIBRARY), "itemsAdapter", 0, _v0 => _v0 => {
    switch (_v0.type) {
      case "folder":
        return {
          uri: _v0?.folder?.uri,
          name: _v0?.folder?.name || "",
          permission: _v5(_v0?.folder?.metadata?.interactions),
          manageLink: _v0?.folder?.manageLink || _v0?.folder?.link || "",
          rowLink: _v6(Number(_v0), _v0?.folder?.uri),
          color: _v0?.folder?.settings?.color,
          itemsCount: _v0?.folder?.metadata?.connections?.items?.total,
          type: "folder"
        };
      case "live_event":
        return {
          uri: _v0?.liveEvent?.uri,
          name: _v0?.liveEvent?.title || "",
          permission: _v5(_v0?.liveEvent?.metadata.interactions),
          manageLink: _v0?.liveEvent?.link || "",
          rowLink: _v0?.liveEvent?.link || "",
          thumbnailSrc: _v0?.liveEvent?.pictures?.sizes[0].link,
          type: "live_event"
        };
      default:
        return {
          uri: _v0?.video?.uri,
          name: _v0?.video?.name || "",
          permission: _v5(_v0?.video?.metadata?.interactions),
          manageLink: _v0?.video?.manageLink || _v0?.video?.link || "",
          rowLink: _v0?.video?.manageLink || _v0?.video?.link || "",
          thumbnailSrc: _v0?.video?.pictures?.sizes[0].link,
          type: "video"
        };
    }
  }, "removeUnderscoreAndCapitalize", 0, _v0 => _v0 ? _v0.split("_").map(_v0 => _v0.charAt(0).toUpperCase() + _v0.slice(1)).join(" ") : "", "useFlattenedResponse", 0, _v0 => (0, _v1.useMemo)(() => {
    if (_v0) return _v0?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data?.filter(_v0 => _v0[(0, _v2.camelizeString)(_v0?.type)]?.uri));
  }, [_v0])], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = ({
      items: _v0
    }) => (0, _v7.jsxs)(_v12.Menu, {
      isLazy: !0,
      children: [(0, _v7.jsx)(_v13.MenuButton, {
        as: _v11.IconButton,
        size: "xs",
        variant: "tertiary",
        "aria-label": (0, _v3.translate)({
          singular: "Expand parent folders list",
          dictionary: {
            es: {
              singular: "Ampliar la lista de carpetas principales"
            },
            "de-DE": {
              singular: "Liste der übergeordneten Ordner erweitern"
            },
            "fr-FR": {
              singular: "Développer la liste des dossiers parents"
            },
            "ja-JP": {
              singular: "親フォルダーのリストを展開する"
            },
            "ko-KR": {
              singular: "상위 폴더 목록 확장"
            },
            "pt-BR": {
              singular: "Expandir a lista de pastas principais"
            },
            "zh-CN": {
              singular: "展开父文件夹列表"
            }
          }
        }),
        icon: (0, _v7.jsx)(_v16.EllipsisH, {})
      }), (0, _v7.jsx)(_v15.MenuList, {
        children: (0, _v7.jsx)(_v18, {
          items: _v0
        })
      })]
    }),
    _v18 = ({
      items: _v0
    }) => (0, _v7.jsx)(_v7.Fragment, {
      children: _v0.map(({
        name: _v0,
        link: _v1
      }) => _v1 ? (0, _v7.jsx)(_v14.MenuItem, {
        children: (0, _v7.jsx)(_v10.default, {
          href: _v1,
          children: _v0
        })
      }, _v1) : (0, _v7.jsx)(_v14.MenuItem, {
        isDisabled: !0,
        children: _v0
      }, _v0))
    });
  var _v19 = _v0.i(0);
  let _v20 = ({
    name: _v0,
    link: _v1
  }) => _v1 ? (0, _v7.jsx)(_v19.Header, {
    size: "xs",
    color: "text-secondary",
    cursor: "pointer",
    fontWeight: 500,
    children: (0, _v7.jsx)(_v10.default, {
      href: _v1,
      children: _v0
    })
  }) : (0, _v7.jsx)(_v19.Header, {
    size: "xs",
    fontWeight: 500,
    children: _v0
  });
  _v0.s(["Breadcrumbs", 0, ({
    pathItems: _v0
  }) => {
    let _v1 = _v0[0],
      _v2 = _v0.slice(1, _v0.length - 1);
    return (0, _v7.jsxs)(_v8.HStack, {
      gap: "0",
      flexWrap: "nowrap",
      children: [(0, _v7.jsx)(_v20, {
        name: _v1.name,
        link: _v0.length > 1 ? _v1.link : null
      }), _v0.length > 1 && (0, _v7.jsx)(_v9.ChevronRightSmall, {}), _v0.length > 3 && (0, _v7.jsx)(_v17, {
        items: _v2
      }), 3 === _v0.length && (0, _v7.jsx)(_v20, {
        name: _v0[1].name,
        link: _v0[1].link
      }), _v0.length > 2 && (0, _v7.jsx)(_v9.ChevronRightSmall, {}), _v0.length > 1 && (0, _v7.jsx)(_v20, {
        name: _v0[_v0.length - 1].name
      })]
    });
  }], 0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  _v0.s(["EmptyStateBase", 0, ({
    description: _v0,
    buttonText: _v1,
    onButtonClick: _v2
  }) => (0, _v7.jsxs)(_v22.VStack, {
    py: (0, _v23.rem)(200),
    children: [(0, _v7.jsx)(_v26.TeamLibrary, {
      h: "lg",
      w: "lg",
      boxSize: "lg"
    }), (0, _v7.jsx)(_v19.Header, {
      py: (0, _v23.rem)(16),
      fontWeight: "medium",
      size: "md",
      children: (0, _v3.translate)({
        singular: "This space is empty",
        dictionary: {
          es: {
            singular: "Este espacio está vacío"
          },
          "de-DE": {
            singular: "Dieser Bereich ist leer"
          },
          "fr-FR": {
            singular: "Cet espace est vide"
          },
          "ja-JP": {
            singular: "このスペースは空です"
          },
          "ko-KR": {
            singular: "이 공간은 비어 있습니다."
          },
          "pt-BR": {
            singular: "Este espaço está vazio"
          },
          "zh-CN": {
            singular: "这个空间是空的"
          }
        }
      })
    }), (0, _v7.jsx)(_v24.Paragraph, {
      paddingBottom: (0, _v23.rem)(24),
      color: "text-secondary",
      textAlign: "center",
      size: "md",
      children: _v0
    }), (0, _v7.jsx)(_v21.Button, {
      variant: "primary",
      leftIcon: (0, _v7.jsx)(_v25.FolderPlus, {}),
      onClick: _v2,
      children: _v1
    })]
  })], 0);
}