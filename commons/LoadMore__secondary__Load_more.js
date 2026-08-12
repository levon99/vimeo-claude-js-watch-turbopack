{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["LoadMore", 0, ({
    isLoadingMore: _v0,
    canLoadMore: _v1 = !1,
    onClick: _v2
  }) => _v1 ? (0, _v1.jsx)(_v2.Button, {
    w: "100%",
    variant: "secondary",
    isDisabled: _v0,
    onClick: _v2,
    mt: "sm",
    children: _v0 ? (0, _v1.jsx)(_v3.Spinner, {}) : (0, _v4.translate)({
      singular: "Load more…",
      dictionary: {
        es: {
          singular: "Cargar más…"
        },
        "de-DE": {
          singular: "Mehr Videos laden.."
        },
        "fr-FR": {
          singular: "Afficher plus…"
        },
        "ja-JP": {
          singular: "もっとロードする…"
        },
        "ko-KR": {
          singular: "더 보기"
        },
        "pt-BR": {
          singular: "Carregar mais…"
        },
        "zh-CN": {
          singular: "加载更多..."
        }
      }
    })
  }) : null], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["ErrorState", 0, function () {
    return (0, _v1.jsx)(_v5.Box, {
      padding: "20%",
      children: (0, _v1.jsx)(_v6.Header, {
        as: "h3",
        size: "lg",
        textAlign: "center",
        transform: "translateY(-100%)",
        children: (0, _v4.translate)({
          singular: "Try refreshing the page to load this user's content.",
          dictionary: {
            es: {
              singular: "Intente actualizar la página para subir el contenido de este usuario."
            },
            "de-DE": {
              singular: "Versuchen Sie, die Seite zu aktualisieren, um den Inhalt dieses Benutzenden zu laden."
            },
            "fr-FR": {
              singular: "Actualisez la page pour charger le contenu de cet utilisateur."
            },
            "ja-JP": {
              singular: "このユーザーのコンテンツを読み込むにはページを更新してください。"
            },
            "ko-KR": {
              singular: "페이지를 새로 고침하여 이 사용자의 콘텐츠를 로드해 보세요."
            },
            "pt-BR": {
              singular: "Tente atualizar a página para carregar o conteúdo desse usuário."
            },
            "zh-CN": {
              singular: "尝试刷新页面以加载此用户的内容。"
            }
          }
        })
      })
    });
  }], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  _v0.s(["TableItemPlaceholder", 0, () => (0, _v1.jsxs)(_v10.Tr, {
    children: [(0, _v1.jsx)(_v11.Td, {
      colSpan: 3,
      p: "sm",
      children: (0, _v1.jsxs)(_v7.HStack, {
        w: "50%",
        children: [(0, _v1.jsx)(_v13.Skeleton, {
          minW: (0, _v12.rem)(123),
          maxW: (0, _v12.rem)(123),
          h: (0, _v12.rem)(70)
        }), (0, _v1.jsxs)(_v8.VStack, {
          w: "100%",
          alignItems: "flex-start",
          children: [(0, _v1.jsx)(_v13.Skeleton, {
            variant: "text",
            h: (0, _v12.rem)(16)
          }), (0, _v1.jsx)(_v13.Skeleton, {
            variant: "text",
            w: "50%",
            h: (0, _v12.rem)(16)
          })]
        })]
      })
    }), (0, _v1.jsx)(_v9.Hide, {
      breakpoint: `(max-width: ${(0, _v12.rem)(_v14.HIDE_PERMISSION_COLUMN_BREAKPOINT)})`,
      children: (0, _v1.jsx)(_v11.Td, {
        py: "sm",
        children: (0, _v1.jsx)(_v13.Skeleton, {
          variant: "text",
          w: "50%",
          h: (0, _v12.rem)(16)
        })
      })
    }), (0, _v1.jsx)(_v11.Td, {
      px: 0,
      py: "sm",
      children: (0, _v1.jsx)(_v13.Skeleton, {
        variant: "text",
        w: "50%",
        h: (0, _v12.rem)(16)
      })
    })]
  })], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  let _v22 = ({
    manageLink: _v0,
    onClickManageLink: _v1
  }) => {
    let _v2 = () => {
      _v1(), _v0 && window.open(_v0, "_blank");
    };
    return (0, _v21.isTabbedView)() ? (0, _v1.jsx)(_v2.Button, {
      size: "md",
      variant: "secondary",
      onClick: _v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v2();
      },
      children: (0, _v4.translate)({
        singular: "Manage",
        dictionary: {
          es: {
            singular: "Administrar"
          },
          "de-DE": {
            singular: "Verwalten"
          },
          "fr-FR": {
            singular: "Gérer"
          },
          "ja-JP": {
            singular: "管理"
          },
          "ko-KR": {
            singular: "관리"
          },
          "pt-BR": {
            singular: "Gerenciar"
          },
          "zh-CN": {
            singular: "管理"
          }
        }
      })
    }) : (0, _v1.jsxs)(_v16.Menu, {
      children: [(0, _v1.jsx)(_v17.MenuButton, {
        as: _v15.IconButton,
        variant: "tertiary",
        icon: (0, _v1.jsx)(_v20.EllipsisH, {}),
        onClick: _v0 => {
          _v0.stopPropagation();
        },
        "aria-label": (0, _v4.translate)({
          singular: "Menu",
          dictionary: {
            es: {
              singular: "Menú"
            },
            "de-DE": {
              singular: "Menü"
            },
            "ja-JP": {
              singular: "メニュー"
            },
            "ko-KR": {
              singular: "메뉴"
            },
            "zh-CN": {
              singular: "菜单"
            }
          }
        })
      }), (0, _v1.jsx)(_v19.MenuList, {
        children: (0, _v1.jsx)(_v18.MenuItem, {
          onClick: _v0 => {
            _v0.stopPropagation(), _v2();
          },
          children: (0, _v4.translate)({
            singular: "Manage",
            dictionary: {
              es: {
                singular: "Administrar"
              },
              "de-DE": {
                singular: "Verwalten"
              },
              "fr-FR": {
                singular: "Gérer"
              },
              "ja-JP": {
                singular: "管理"
              },
              "ko-KR": {
                singular: "관리"
              },
              "pt-BR": {
                singular: "Gerenciar"
              },
              "zh-CN": {
                singular: "管理"
              }
            }
          })
        })
      })]
    });
  };
  _v0.s(["ItemActions", 0, ({
    manageLink: _v0,
    onClickManageLink: _v1
  }) => (0, _v1.jsx)(_v11.Td, {
    px: 0,
    py: "sm",
    children: (0, _v1.jsx)(_v22, {
      manageLink: _v0,
      onClickManageLink: _v1
    })
  })], 0);
  var _v23 = _v0.i(0);
  _v0.s(["ItemPermission", 0, ({
    permission: _v0
  }) => (0, _v1.jsx)(_v9.Hide, {
    breakpoint: `(max-width: ${(0, _v12.rem)(_v14.HIDE_PERMISSION_COLUMN_BREAKPOINT)})`,
    children: (0, _v1.jsx)(_v11.Td, {
      py: "sm",
      children: (0, _v1.jsx)(_v23.Text, {
        variant: "body-md",
        children: _v0
      })
    })
  })], 0);
  let _v24 = ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v5.Box, {
    minW: (0, _v12.rem)(123),
    maxW: (0, _v12.rem)(123),
    h: (0, _v12.rem)(70),
    borderRadius: (0, _v12.rem)(8),
    p: "sm",
    boxSizing: "border-box",
    ..._v1,
    children: _v0
  });
  _v0.s(["ItemThumbnail", 0, ({
    thumbnailSrc: _v0,
    color: _v1,
    name: _v2,
    isLoading: _v3 = !1
  }) => _v0 ? (0, _v1.jsx)(_v24, {
    backgroundImage: _v0,
    backgroundSize: "cover"
  }) : (0, _v1.jsxs)(_v24, {
    bgColor: _v1 || "gray.400",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    children: [_v3 && (0, _v1.jsx)(_v3.Spinner, {
      size: "sm"
    }), (0, _v1.jsx)(_v6.Header, {
      size: "sm",
      maxW: "90%",
      textShadow: `0 ${(0, _v12.rem)(.96)} ${(0, _v12.rem)(3.2)} rgba(0, 0, 0, 0.06)`,
      whiteSpace: "wrap",
      fontWeight: 500,
      children: _v2
    })]
  })], 0), _v0.s(["ItemTitle", 0, ({
    title: _v0,
    subtitle: _v1
  }) => (0, _v1.jsxs)(_v8.VStack, {
    alignItems: "flex-start",
    children: [(0, _v1.jsx)(_v6.Header, {
      size: "sm",
      noOfLines: 1,
      fontWeight: 500,
      children: _v0
    }), (0, _v1.jsx)(_v23.Text, {
      variant: "body-md",
      color: "text-secondary",
      noOfLines: 1,
      children: _v1
    })]
  })], 0);
}