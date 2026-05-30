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
  _v0.s(["CreatedByFilter", 0, ({
    filter: _v0,
    options: _v1,
    isDisabled: _v2 = !1,
    page: _v3 = "",
    setFilter: _v4,
    searchQuery: _v5 = "",
    setSearchQuery: _v6,
    isLoadingMore: _v7 = !1,
    isLoadingInitialData: _v8 = !1,
    onLoadMore: _v9,
    isDone: _v10 = !1
  }) => {
    let _v11,
      _v12 = (0, _v19.useViewer)(),
      _v13 = _v12?.teamUser,
      _v14 = 0 === _v0.length,
      _v15 = _v0.length > 1,
      _v16 = _v1.map(_v0 => ({
        name: _v0.name,
        userId: _v0.userId,
        avatarLink: _v0.avatarLink
      })),
      _v17 = 0 === _v16.length && "" !== _v5,
      _v18 = _v16.map(_v0 => (0, _v1.jsx)(_v9.Box, {
        "data-testid": `created-by-filter-${_v0.userId}`,
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
            _v0.some(_v0 => _v0.userId === _v0.userId) ? _v4(_v0?.filter(_v0 => _v0.userId !== _v0.userId)) : _v4([..._v0, _v0]), _v20.FilterBPEvents.sendApplyFilterEvent("clip_created_by", _v3, _v13, "desktop");
          },
          children: (0, _v1.jsxs)(_v11.HStack, {
            spacing: "sm",
            maxWidth: (0, _v8.rem)(210),
            overflow: "ellipsis",
            whiteSpace: "nowrap",
            children: [(0, _v1.jsx)(_v9.Box, {
              children: (0, _v1.jsx)(_v12.Avatar, {
                size: "sm",
                alt: (0, _v18.translate)({
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
      onOpen: () => {
        _v20.FilterBPEvents.sendOpenFilterEvent("clip_created_by", _v3, _v13, "desktop");
      },
      children: [(0, _v1.jsx)(_v13.Tooltip, {
        label: (0, _v18.translate)({
          singular: "Doesn't apply to folders",
          dictionary: {
            es: {
              singular: "No se aplica a las carpetas"
            },
            "de-DE": {
              singular: "Gilt nicht für Ordner"
            },
            "fr-FR": {
              singular: "Ne s'applique pas aux dossiers."
            },
            "ja-JP": {
              singular: "フォルダーには適用されません"
            },
            "ko-KR": {
              singular: "폴더에는 적용되지 않습니다."
            },
            "pt-BR": {
              singular: "Não se aplica a pastas"
            },
            "zh-CN": {
              singular: "不适用于文件夹"
            }
          }
        }),
        placement: "top",
        isDisabled: !_v2,
        children: (0, _v1.jsx)(_v4.MenuButton, {
          as: _v6.Button,
          variant: "tertiary",
          paddingX: (0, _v8.rem)(18),
          isDisabled: _v2,
          rightIcon: (0, _v1.jsx)(_v16.ChevronDown, {
            paddingLeft: (0, _v8.rem)(6),
            boxSize: "2xs"
          }),
          "data-id": "created-by-filter",
          children: (_v11 = (0, _v18.translate)({
            singular: "Created by",
            dictionary: {
              es: {
                singular: "Creado por"
              },
              "de-DE": {
                singular: "Erstellt von"
              },
              "fr-FR": {
                singular: "Créé par"
              },
              "ja-JP": {
                singular: "作成者"
              },
              "ko-KR": {
                singular: "제작:"
              },
              "pt-BR": {
                singular: "Criado por"
              },
              "zh-CN": {
                singular: "创建者"
              }
            }
          }), _v15 ? _v11 + (" (" + _v0.length) + ")" : _v14 ? _v11 : _v0[0].name)
        })
      }), (0, _v1.jsxs)(_v5.MenuList, {
        width: (0, _v8.rem)(276),
        maxHeight: (0, _v8.rem)(500),
        "data-testid": "created-by-filter-menu",
        paddingBottom: "0",
        children: [(0, _v1.jsx)(_v9.Box, {
          paddingBottom: "sm",
          children: (0, _v1.jsx)(_v21.FilterSearch, {
            searchTerm: _v5,
            setSearchTerm: _v6,
            placeholderText: (0, _v18.translate)({
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
        }), _v8 ? (0, _v1.jsx)(_v2.Flex, {
          justifyContent: "center",
          alignItems: "center",
          margin: "sm",
          children: (0, _v1.jsx)(_v14.Spinner, {
            size: "sm"
          })
        }) : (0, _v1.jsxs)(_v9.Box, {
          maxHeight: (0, _v8.rem)(384),
          position: "relative",
          paddingBottom: "sm",
          overflow: "hidden",
          overflowY: "auto",
          children: [_v18, (0, _v1.jsxs)(_v2.Flex, {
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "sm",
            children: [!_v10 && !_v7 && !_v17 && (0, _v1.jsx)(_v6.Button, {
              variant: "tertiary",
              rightIcon: (0, _v1.jsx)(_v17.ChevronDownSmall, {}),
              onClick: () => {
                _v7 || _v10 || !_v9 || _v9();
              },
              isLoading: _v7,
              children: (0, _v18.translate)({
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
            }), _v7 && (0, _v1.jsx)(_v2.Flex, {
              justifyContent: "center",
              alignItems: "center",
              children: (0, _v1.jsx)(_v14.Spinner, {
                size: "sm",
                margin: (0, _v8.rem)(8)
              })
            })]
          }), _v17 && !_v7 && (0, _v1.jsx)(_v2.Flex, {
            height: (0, _v8.rem)(140),
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            children: (0, _v1.jsxs)(_v15.Stack, {
              spacing: 8,
              children: [(0, _v1.jsx)(_v7.Text, {
                variant: "heading-sm",
                children: (0, _v18.translate)({
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
                children: (0, _v18.translate)({
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