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
    _v18 = _v0.i(0);
  _v0.s(["DeletedByFilter", 0, ({
    filter: _v0,
    options: _v1,
    isDisabled: _v2 = !1,
    setFilter: _v3,
    searchQuery: _v4 = "",
    setSearchQuery: _v5,
    isLoadingMore: _v6 = !1,
    isLoadingInitialData: _v7 = !1,
    onLoadMore: _v8,
    isDone: _v9 = !1
  }) => {
    let _v10,
      _v11 = 0 === _v0.length,
      _v12 = _v0.length > 1,
      _v13 = _v1.map(_v0 => ({
        name: _v0.name,
        userId: _v0.userId,
        avatarLink: _v0.avatarLink
      })),
      _v14 = 0 === _v13.length && "" !== _v4,
      _v15 = _v13.map(_v0 => (0, _v1.jsx)(_v9.Box, {
        padding: "sm",
        alignContent: "center",
        _hover: {
          backgroundColor: "fill-component-hover",
          borderRadius: "0.5rem"
        },
        children: (0, _v1.jsx)(_v10.Checkbox, {
          borderRadius: "sm",
          width: "100%",
          size: "md",
          isChecked: _v0.some(_v0 => _v0.userId === _v0.userId),
          onChange: () => {
            _v0.some(_v0 => _v0.userId === _v0.userId) ? _v3(_v0?.filter(_v0 => _v0.userId !== _v0.userId)) : _v3([..._v0, _v0]);
          },
          children: (0, _v1.jsxs)(_v11.HStack, {
            spacing: "sm",
            maxWidth: (0, _v8.rem)(210),
            overflow: "ellipsis",
            whiteSpace: "nowrap",
            children: [(0, _v1.jsx)(_v9.Box, {
              children: (0, _v1.jsx)(_v12.Avatar, {
                size: "sm",
                alt: (0, _v17.translate)({
                  singular: "Display picture",
                  dictionary: {
                    es: {
                      singular: "Mostrar imagen"
                    },
                    "de-DE": {
                      singular: "Bild anzeigen"
                    },
                    "fr-FR": {
                      singular: "Image à afficher"
                    },
                    "ja-JP": {
                      singular: "画像を表示"
                    },
                    "ko-KR": {
                      singular: "사진 표시"
                    },
                    "pt-BR": {
                      singular: "Exibir imagem"
                    },
                    "zh-CN": {
                      singular: "显示图片"
                    }
                  }
                }),
                src: _v0.avatarLink,
                nameProps: {
                  name: _v0.name
                }
              })
            }), (0, _v1.jsx)(_v7.Text, {
              variant: "body-md",
              isTruncated: !0,
              children: _v0.name
            })]
          })
        })
      }, _v0.userId));
    return (0, _v1.jsxs)(_v3.Menu, {
      isLazy: !0,
      placement: "bottom-end",
      children: [(0, _v1.jsx)(_v4.MenuButton, {
        as: _v6.Button,
        variant: "tertiary",
        paddingX: (0, _v8.rem)(18),
        isDisabled: _v2,
        rightIcon: (0, _v1.jsx)(_v15.ChevronDown, {
          paddingLeft: (0, _v8.rem)(6),
          boxSize: "2xs"
        }),
        children: (_v10 = (0, _v17.translate)({
          singular: "Deleted by",
          dictionary: {
            es: {
              singular: "Eliminado por"
            },
            "de-DE": {
              singular: "Gelöscht von"
            },
            "fr-FR": {
              singular: "Supprimé par"
            },
            "ja-JP": {
              singular: "削除者"
            },
            "ko-KR": {
              singular: "삭제한 사용자"
            },
            "pt-BR": {
              singular: "Excluído por"
            },
            "zh-CN": {
              singular: "删除者"
            }
          }
        }), _v12 ? _v10 + (" (" + _v0.length) + ")" : _v11 ? _v10 : _v0[0].name)
      }), (0, _v1.jsxs)(_v5.MenuList, {
        width: (0, _v8.rem)(276),
        maxHeight: (0, _v8.rem)(500),
        paddingBottom: "0",
        children: [(0, _v1.jsx)(_v9.Box, {
          paddingBottom: "sm",
          children: (0, _v1.jsx)(_v18.FilterSearch, {
            searchTerm: _v4,
            setSearchTerm: _v5,
            placeholderText: (0, _v17.translate)({
              singular: "Search people",
              dictionary: {
                es: {
                  singular: "Buscar personas"
                },
                "de-DE": {
                  singular: "Personen suchen"
                },
                "fr-FR": {
                  singular: "Rechercher parmi les personnes"
                },
                "ja-JP": {
                  singular: "メンバーを検索"
                },
                "ko-KR": {
                  singular: "인물 검색"
                },
                "pt-BR": {
                  singular: "Pesquisar pessoas"
                },
                "zh-CN": {
                  singular: "搜索人物"
                }
              }
            })
          })
        }), _v7 ? (0, _v1.jsx)(_v2.Flex, {
          justifyContent: "center",
          alignItems: "center",
          margin: "sm",
          children: (0, _v1.jsx)(_v13.Spinner, {
            size: "sm"
          })
        }) : (0, _v1.jsxs)(_v9.Box, {
          maxHeight: (0, _v8.rem)(384),
          position: "relative",
          paddingBottom: "sm",
          overflow: "hidden",
          overflowY: "auto",
          children: [_v15, (0, _v1.jsxs)(_v2.Flex, {
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "sm",
            children: [!_v9 && !_v6 && !_v14 && (0, _v1.jsx)(_v6.Button, {
              variant: "tertiary",
              rightIcon: (0, _v1.jsx)(_v16.ChevronDownSmall, {}),
              onClick: () => {
                _v6 || _v9 || !_v8 || _v8();
              },
              isLoading: _v6,
              children: (0, _v17.translate)({
                singular: "Load more",
                dictionary: {
                  es: {
                    singular: "Cargar más"
                  },
                  "de-DE": {
                    singular: "Mehr laden"
                  },
                  "fr-FR": {
                    singular: "Afficher plus"
                  },
                  "ja-JP": {
                    singular: "もっとロードする"
                  },
                  "ko-KR": {
                    singular: "동영상 더 보기"
                  },
                  "pt-BR": {
                    singular: "Carregar mais"
                  },
                  "zh-CN": {
                    singular: "加载更多"
                  }
                }
              })
            }), _v6 && (0, _v1.jsx)(_v2.Flex, {
              justifyContent: "center",
              alignItems: "center",
              children: (0, _v1.jsx)(_v13.Spinner, {
                size: "sm",
                margin: (0, _v8.rem)(8)
              })
            })]
          }), _v14 && !_v6 && (0, _v1.jsx)(_v2.Flex, {
            height: (0, _v8.rem)(140),
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            children: (0, _v1.jsxs)(_v14.Stack, {
              spacing: 8,
              children: [(0, _v1.jsx)(_v7.Text, {
                variant: "heading-sm",
                children: (0, _v17.translate)({
                  singular: "No matching results",
                  dictionary: {
                    es: {
                      singular: "No hay resultados coincidentes"
                    },
                    "de-DE": {
                      singular: "Keine übereinstimmenden Ergebnisse"
                    },
                    "fr-FR": {
                      singular: "Aucun résultat correspondant"
                    },
                    "ja-JP": {
                      singular: "一致する結果がありません"
                    },
                    "ko-KR": {
                      singular: "일치하는 결과가 없습니다."
                    },
                    "pt-BR": {
                      singular: "Nenhum resultado correspondente"
                    },
                    "zh-CN": {
                      singular: "无匹配结果"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v7.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: (0, _v17.translate)({
                  singular: "Try another search",
                  dictionary: {
                    es: {
                      singular: "Pruebe con otra búsqueda"
                    },
                    "de-DE": {
                      singular: "Versuchen Sie eine andere Suche"
                    },
                    "fr-FR": {
                      singular: "Essayez une autre recherche"
                    },
                    "ja-JP": {
                      singular: "別の検索をお試しください"
                    },
                    "ko-KR": {
                      singular: "다르게 검색해 보세요"
                    },
                    "pt-BR": {
                      singular: "Tente outra pesquisa"
                    },
                    "zh-CN": {
                      singular: "尝试其他搜索"
                    }
                  }
                })
              })]
            })
          })]
        })]
      })]
    });
  }]);
}