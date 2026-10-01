{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["SearchNoResultsEmptyState", 0, () => (0, _v1.jsxs)(_v5.VStack, {
    py: (0, _v4.rem)(200),
    children: [(0, _v1.jsx)(_v6.SearchMagnifier, {
      boxSize: "lg"
    }), (0, _v1.jsx)(_v2.Header, {
      py: (0, _v4.rem)(16),
      fontWeight: "medium",
      size: "md",
      children: (0, _v7.translate)({
        singular: "No results found",
        dictionary: {
          es: {
            singular: "No encontramos resultados."
          },
          "de-DE": {
            singular: "Keine Ergebnisse"
          },
          "fr-FR": {
            singular: "Aucun résultat trouvé"
          },
          "ja-JP": {
            singular: "検索結果がありません"
          },
          "ko-KR": {
            singular: "검색 결과가 없습니다"
          },
          "pt-BR": {
            singular: "Nenhum resultado encontrado."
          },
          "zh-CN": {
            singular: "未找到结果"
          }
        }
      })
    }), (0, _v1.jsx)(_v3.Paragraph, {
      color: "text-secondary",
      textAlign: "center",
      size: "md",
      children: (0, _v7.translate)({
        singular: "No results found for the given search",
        dictionary: {
          es: {
            singular: "No se han encontrado resultados para la búsqueda indicada"
          },
          "de-DE": {
            singular: "Für die angegebene Suche wurden keine Ergebnisse gefunden"
          },
          "fr-FR": {
            singular: "Aucun résultat trouvé pour la recherche indiquée"
          },
          "ja-JP": {
            singular: "指定された検索では結果が見つかりませんでした"
          },
          "ko-KR": {
            singular: "해당 검색에 대한 결과가 없습니다"
          },
          "pt-BR": {
            singular: "Nenhum resultado encontrado para a pesquisa informada"
          },
          "zh-CN": {
            singular: "未找到与给定搜索匹配的结果"
          }
        }
      })
    })]
  })], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  _v0.s(["FolderSearch", 0, ({
    searchTerm: _v0,
    onSearch: _v1
  }) => (0, _v1.jsxs)(_v9.InputGroup, {
    size: "md",
    width: "100%",
    mb: (0, _v4.rem)(16),
    children: [(0, _v1.jsx)(_v10.InputLeftElement, {
      children: (0, _v1.jsx)(_v6.SearchMagnifier, {
        height: (0, _v4.rem)(20),
        width: (0, _v4.rem)(20),
        color: "text-secondary"
      })
    }), (0, _v1.jsx)(_v8.Input, {
      placeholder: (0, _v7.translate)({
        singular: "Search folder",
        dictionary: {
          es: {
            singular: "Carpeta de búsqueda"
          },
          "de-DE": {
            singular: "Ordner durchsuchen"
          },
          "fr-FR": {
            singular: "Rechercher un dossier"
          },
          "ja-JP": {
            singular: "検索フォルダ"
          },
          "ko-KR": {
            singular: "검색 폴더"
          },
          "pt-BR": {
            singular: "Pasta de pesquisa"
          },
          "zh-CN": {
            singular: "搜索文件夹"
          }
        }
      }),
      onChange: _v0 => _v1(_v0.currentTarget.value),
      role: "search",
      width: "100%",
      size: "md",
      variant: "filled",
      value: _v0
    }), !!_v0 && (0, _v1.jsx)(_v10.InputRightElement, {
      children: (0, _v1.jsx)(_v11.CloseXCircleFilled, {
        height: (0, _v4.rem)(20),
        width: (0, _v4.rem)(20),
        "aria-label": (0, _v7.translate)({
          singular: "Clear all",
          dictionary: {
            es: {
              singular: "Borrar todo"
            },
            "de-DE": {
              singular: "Alle löschen"
            },
            "fr-FR": {
              singular: "Tout supprimer"
            },
            "ja-JP": {
              singular: "すべて削除"
            },
            "ko-KR": {
              singular: "모두 지우기"
            },
            "pt-BR": {
              singular: "Limpar tudo"
            },
            "zh-CN": {
              singular: "清除全部"
            }
          }
        }),
        onClick: () => _v1(""),
        cursor: "pointer"
      })
    })]
  })], 0);
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  _v0.s(["LoadMore", 0, ({
    isLoadingMore: _v0,
    canLoadMore: _v1 = !1,
    onClick: _v2
  }) => _v1 ? (0, _v1.jsx)(_v12.Button, {
    w: "100%",
    variant: "secondary",
    isDisabled: _v0,
    onClick: _v2,
    mt: "sm",
    children: _v0 ? (0, _v1.jsx)(_v13.Spinner, {}) : (0, _v7.translate)({
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
  var _v14 = _v0.i(0);
  _v0.s(["ErrorState", 0, function () {
    return (0, _v1.jsx)(_v14.Box, {
      padding: "20%",
      children: (0, _v1.jsx)(_v2.Header, {
        as: "h3",
        size: "lg",
        textAlign: "center",
        transform: "translateY(-100%)",
        children: (0, _v7.translate)({
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
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  _v0.s(["TableItemPlaceholder", 0, () => (0, _v1.jsxs)(_v17.Tr, {
    children: [(0, _v1.jsx)(_v18.Td, {
      colSpan: 3,
      p: "sm",
      children: (0, _v1.jsxs)(_v15.HStack, {
        w: "50%",
        children: [(0, _v1.jsx)(_v19.Skeleton, {
          minW: (0, _v4.rem)(123),
          maxW: (0, _v4.rem)(123),
          h: (0, _v4.rem)(70)
        }), (0, _v1.jsxs)(_v5.VStack, {
          w: "100%",
          alignItems: "flex-start",
          children: [(0, _v1.jsx)(_v19.Skeleton, {
            variant: "text",
            h: (0, _v4.rem)(16)
          }), (0, _v1.jsx)(_v19.Skeleton, {
            variant: "text",
            w: "50%",
            h: (0, _v4.rem)(16)
          })]
        })]
      })
    }), (0, _v1.jsx)(_v16.Hide, {
      breakpoint: `(max-width: ${(0, _v4.rem)(_v20.HIDE_PERMISSION_COLUMN_BREAKPOINT)})`,
      children: (0, _v1.jsx)(_v18.Td, {
        py: "sm",
        children: (0, _v1.jsx)(_v19.Skeleton, {
          variant: "text",
          w: "50%",
          h: (0, _v4.rem)(16)
        })
      })
    }), (0, _v1.jsx)(_v18.Td, {
      px: 0,
      py: "sm",
      children: (0, _v1.jsx)(_v19.Skeleton, {
        variant: "text",
        w: "50%",
        h: (0, _v4.rem)(16)
      })
    })]
  })], 0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = ({
    manageLink: _v0,
    onClickManageLink: _v1
  }) => {
    let _v2 = () => {
      _v1(), _v0 && window.open(_v0, "_blank");
    };
    return (0, _v28.isTabbedView)() ? (0, _v1.jsx)(_v12.Button, {
      size: "md",
      variant: "secondary",
      leftIcon: (0, _v1.jsx)(_v27.PopOut, {}),
      onClick: _v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v2();
      },
      children: (0, _v7.translate)({
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
    }) : (0, _v1.jsxs)(_v22.Menu, {
      children: [(0, _v1.jsx)(_v23.MenuButton, {
        as: _v21.IconButton,
        variant: "tertiary",
        icon: (0, _v1.jsx)(_v26.EllipsisH, {}),
        onClick: _v0 => {
          _v0.stopPropagation();
        },
        "aria-label": (0, _v7.translate)({
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
      }), (0, _v1.jsx)(_v25.MenuList, {
        children: (0, _v1.jsx)(_v24.MenuItem, {
          onClick: _v0 => {
            _v0.stopPropagation(), _v2();
          },
          children: (0, _v7.translate)({
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
  }) => (0, _v1.jsx)(_v18.Td, {
    px: 0,
    py: "sm",
    children: (0, _v1.jsx)(_v29, {
      manageLink: _v0,
      onClickManageLink: _v1
    })
  })], 0);
  var _v30 = _v0.i(0);
  _v0.s(["ItemPermission", 0, ({
    permission: _v0
  }) => (0, _v1.jsx)(_v16.Hide, {
    breakpoint: `(max-width: ${(0, _v4.rem)(_v20.HIDE_PERMISSION_COLUMN_BREAKPOINT)})`,
    children: (0, _v1.jsx)(_v18.Td, {
      py: "sm",
      children: (0, _v1.jsx)(_v30.Text, {
        variant: "body-md",
        children: _v0
      })
    })
  })], 0);
  var _v31 = _v0.i(0);
  let _v32 = ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v14.Box, {
    minW: (0, _v4.rem)(123),
    maxW: (0, _v4.rem)(123),
    h: (0, _v4.rem)(70),
    borderRadius: (0, _v4.rem)(8),
    p: "sm",
    boxSizing: "border-box",
    ..._v1,
    children: _v0
  });
  _v0.s(["ItemThumbnail", 0, ({
    thumbnailSrc: _v0,
    color: _v1,
    name: _v2,
    type: _v3,
    isLoading: _v4 = !1
  }) => {
    if (_v0) return (0, _v1.jsx)(_v32, {
      backgroundImage: _v0,
      backgroundSize: "cover"
    });
    let _v5 = _v1 || "gray.400";
    return "folder" === _v3 ? (0, _v1.jsx)(_v32, {
      bgColor: _v5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      children: _v4 ? (0, _v1.jsx)(_v13.Spinner, {
        size: "sm"
      }) : (0, _v1.jsx)(_v31.Folder, {
        boxSize: (0, _v4.rem)(24),
        color: "text-secondary",
        opacity: .5
      })
    }) : (0, _v1.jsxs)(_v32, {
      bgColor: _v5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      children: [_v4 && (0, _v1.jsx)(_v13.Spinner, {
        size: "sm"
      }), (0, _v1.jsx)(_v2.Header, {
        size: "sm",
        maxW: "90%",
        textShadow: `0 ${(0, _v4.rem)(.96)} ${(0, _v4.rem)(3.2)} rgba(0, 0, 0, 0.06)`,
        whiteSpace: "wrap",
        fontWeight: 500,
        children: _v2
      })]
    });
  }], 0), _v0.s(["ItemTitle", 0, ({
    title: _v0,
    subtitle: _v1
  }) => (0, _v1.jsxs)(_v5.VStack, {
    alignItems: "flex-start",
    children: [(0, _v1.jsx)(_v2.Header, {
      variant: "heading-xs",
      noOfLines: 1,
      children: _v0
    }), (0, _v1.jsx)(_v30.Text, {
      variant: "body-md",
      color: "text-secondary",
      noOfLines: 1,
      children: _v1
    })]
  })], 0);
}