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
  _v0.s(["MobileClipPrivacyFilter", 0, ({
    filter: _v0,
    options: _v1,
    isDisabled: _v2 = !1,
    page: _v3 = "",
    onChange: _v4
  }) => {
    let _v5,
      _v6 = (0, _v12.useViewer)(),
      _v7 = _v6?.teamUser,
      _v8 = (0, _v11.useDefaultPrivacyOptions)(_v6),
      _v9 = Object.fromEntries(Object.entries(_v10.DEFAULT_PRIVACY_VALUES).map(([_v0, _v1]) => [_v1, _v0.toLowerCase()])),
      _v10 = {
        ...(0, _v13.getPrivacyTypeFilterOptionsByValue)(_v7?.teamName, _v7?.isWorkspace),
        ..._v8.reduce((_v0, _v1) => {
          let _v2 = _v9[_v1.privacy] ?? _v1.privacy;
          return _v0[_v2] = {
            label: _v1.title,
            value: _v2,
            icon: _v2.default.isValidElement(_v1.icon) ? _v1.icon.type : _v1.icon
          }, _v0;
        }, {})
      },
      _v11 = 0 === _v0.length,
      _v12 = _v0.length > 1,
      _v13 = _v1.map(_v0 => ({
        label: _v10[_v0].label,
        value: _v10[_v0].value,
        icon: _v10[_v0].icon
      })),
      _v14 = _v2 ? (0, _v9.translate)({
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
      }) : void 0;
    return (0, _v1.jsx)(_v15.MobileFilter, {
      label: (_v5 = (0, _v9.translate)({
        singular: "Privacy",
        dictionary: {
          es: {
            singular: "Privacidad"
          },
          "de-DE": {
            singular: "Datenschutz"
          },
          "fr-FR": {
            singular: "Confidentialité "
          },
          "ja-JP": {
            singular: "プライバシー"
          },
          "ko-KR": {
            singular: "프라이버시"
          },
          "pt-BR": {
            singular: "Privacidade"
          },
          "zh-CN": {
            singular: "隐私"
          }
        }
      }), _v12 ? _v5 + (" (" + _v0.length) + ")" : _v11 ? _v5 : _v10[_v0[0]].label),
      subtitle: _v14,
      onOpen: () => {
        _v14.FilterBPEvents.sendOpenFilterEvent("clip_privacy", _v3, _v7, "mobile");
      },
      children: (0, _v1.jsx)(_v7.Stack, {
        children: _v13.map(_v0 => (0, _v1.jsx)(_v3.Box, {
          children: (0, _v1.jsx)(_v4.Checkbox, {
            paddingX: "sm",
            borderRadius: "sm",
            width: "100%",
            size: "md",
            onChange: () => {
              _v4(_v0.value);
            },
            isChecked: _v0.includes(_v0.value),
            isDisabled: _v2,
            children: (0, _v1.jsxs)(_v5.HStack, {
              spacing: 10,
              padding: "sm",
              paddingLeft: "0",
              children: [_v0.icon && _v2.default.createElement(_v0.icon, {
                boxSize: (0, _v6.rem)(20)
              }), (0, _v1.jsx)(_v8.Text, {
                variant: "body-md",
                isTruncated: !0,
                children: _v0.label
              })]
            })
          })
        }, _v0.value))
      })
    });
  }], 0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  _v0.s(["MobileCreatedByFilter", 0, ({
    filter: _v0,
    options: _v1,
    isDisabled: _v2 = !1,
    searchQuery: _v3 = "",
    page: _v4 = "",
    onChange: _v5,
    setSearchQuery: _v6,
    isLoadingMore: _v7 = !1,
    isLoadingInitialData: _v8 = !1,
    onLoadMore: _v9,
    isDone: _v10 = !1
  }) => {
    let _v11,
      _v12 = (0, _v12.useViewer)(),
      _v13 = _v12?.teamUser,
      _v14 = 0 === _v0.length,
      _v15 = _v0.length > 1,
      _v16 = _v1.map(_v0 => ({
        name: _v0.name,
        userId: _v0.userId,
        avatarLink: _v0.avatarLink
      })),
      _v17 = 0 === _v16.length && "" !== _v3,
      _v18 = _v2 ? (0, _v9.translate)({
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
      }) : void 0,
      _v19 = _v16.map(_v0 => (0, _v1.jsx)(_v3.Box, {
        "data-testid": `created-by-filter-${_v0.userId}`,
        padding: "sm",
        alignContent: "center",
        _hover: {
          backgroundColor: "fill-component-hover",
          borderRadius: "0.5rem"
        },
        children: (0, _v1.jsx)(_v4.Checkbox, {
          borderRadius: "sm",
          width: "100%",
          size: "md",
          isChecked: _v0.some(_v0 => _v0.userId === _v0.userId),
          onChange: () => {
            _v5(_v0);
          },
          isDisabled: _v2,
          children: (0, _v1.jsxs)(_v5.HStack, {
            spacing: "sm",
            maxWidth: (0, _v6.rem)(210),
            overflow: "ellipsis",
            whiteSpace: "nowrap",
            children: [(0, _v1.jsx)(_v3.Box, {
              children: (0, _v1.jsx)(_v16.Avatar, {
                size: "sm",
                alt: (0, _v9.translate)({
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
            }), (0, _v1.jsx)(_v8.Text, {
              variant: "body-md",
              isTruncated: !0,
              children: _v0.name
            })]
          })
        })
      }, _v0.userId));
    return (0, _v1.jsxs)(_v15.MobileFilter, {
      label: (_v11 = (0, _v9.translate)({
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
      }), _v15 ? _v11 + (" (" + _v0.length) + ")" : _v14 ? _v11 : _v0[0].name),
      subtitle: _v18,
      onOpen: () => {
        _v14.FilterBPEvents.sendOpenFilterEvent("clip_created_by", _v4, _v13, "mobile");
      },
      children: [(0, _v1.jsx)(_v21.FilterSearch, {
        searchTerm: _v3,
        setSearchTerm: _v6,
        placeholderText: (0, _v9.translate)({
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
      }), _v8 ? (0, _v1.jsx)(_v18.Flex, {
        justifyContent: "center",
        alignItems: "center",
        margin: "sm",
        children: (0, _v1.jsx)(_v19.Spinner, {
          size: "sm"
        })
      }) : (0, _v1.jsx)(_v7.Stack, {
        maxHeight: (0, _v6.rem)(400),
        overflowY: "scroll",
        overflowX: "hidden",
        marginTop: "sm",
        children: (0, _v1.jsxs)(_v3.Box, {
          paddingTop: "sm",
          position: "relative",
          children: [_v19, (0, _v1.jsxs)(_v18.Flex, {
            alignItems: "center",
            justifyContent: "center",
            children: [!_v10 && !_v7 && !_v17 && (0, _v1.jsx)(_v17.Button, {
              variant: "tertiary",
              rightIcon: (0, _v1.jsx)(_v20.ChevronDownSmall, {}),
              onClick: () => {
                _v7 || _v10 || !_v9 || _v9();
              },
              isLoading: _v7,
              children: (0, _v9.translate)({
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
            }), _v7 && (0, _v1.jsx)(_v18.Flex, {
              justifyContent: "center",
              alignItems: "center",
              children: (0, _v1.jsx)(_v19.Spinner, {
                size: "sm",
                margin: (0, _v6.rem)(8)
              })
            })]
          }), _v17 && !_v7 && (0, _v1.jsx)(_v18.Flex, {
            height: (0, _v6.rem)(140),
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            children: (0, _v1.jsxs)(_v7.Stack, {
              spacing: 8,
              children: [(0, _v1.jsx)(_v8.Text, {
                variant: "heading-sm",
                children: (0, _v9.translate)({
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
              }), (0, _v1.jsx)(_v8.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: (0, _v9.translate)({
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
        })
      })]
    });
  }], 0);
}