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
    _v13 = _v0.i(0);
  _v0.s(["SearchInput", 0, ({
    value: _v0,
    onChange: _v1,
    onSubmit: _v2,
    height: _v3,
    isLoading: _v4 = !1,
    inputRef: _v5
  }) => {
    let [_v6, _v7] = (0, _v2.useState)(!1),
      _v8 = (0, _v2.useRef)(null),
      _v9 = _v5 ?? _v8;
    return (0, _v1.jsxs)(_v3.Box, {
      position: "relative",
      width: "100%",
      minWidth: 0,
      borderRadius: "md",
      border: "1px solid",
      borderColor: "stroke",
      bg: "surface",
      boxShadow: _v6 && !_v4 ? "0 0 0 3px rgba(110, 220, 245, 0.14)" : "0 2px 10px rgba(78, 205, 234, 0.13)",
      sx: _v4 ? {
        ..._v12.FLOW_GRADIENT_KEYFRAMES
      } : {
        ..._v12.FLOW_GRADIENT_KEYFRAMES,
        ..._v12.FLOW_GRADIENT_LAYERS_SX
      },
      children: [!_v4 && (0, _v1.jsx)(_v3.Box, {
        "aria-hidden": !0,
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        pointerEvents: "none",
        zIndex: 0,
        sx: {
          ..._v12.FLOW_INNER_GLOW_SX
        }
      }), (0, _v1.jsxs)(_v6.InputGroup, {
        position: "relative",
        zIndex: 1,
        children: [(0, _v1.jsx)(_v5.Input, {
          placeholder: (0, _v11.translate)({
            singular: "Search for help or ask a question",
            dictionary: {
              es: {
                singular: "Buscar ayuda o hacer una pregunta"
              },
              "de-DE": {
                singular: "Nach Hilfe suchen oder eine Frage stellen"
              },
              "fr-FR": {
                singular: "Recherchez de l'aide ou posez une question"
              },
              "ja-JP": {
                singular: "ヘルプを検索するか、質問する"
              },
              "ko-KR": {
                singular: "도움말 검색 또는 질문하기"
              },
              "pt-BR": {
                singular: "Pesquisar ajuda ou fazer uma pergunta"
              },
              "zh-CN": {
                singular: "搜索帮助或提问"
              }
            }
          }),
          value: _v0,
          onChange: _v0 => _v1(_v0.target.value),
          onKeyDown: _v0 => {
            "Enter" === _v0.key && (_v2(), _v0.preventDefault());
          },
          isDisabled: _v4,
          onFocus: () => _v7(!0),
          onBlur: () => _v7(!1),
          maxLength: _v13.MAX_QUERY_LENGTH,
          height: (0, _v8.rem)(_v3),
          borderRadius: "sm",
          border: "none",
          bg: "surface",
          pr: "calc(var(--vimeo-sizes-sm) * 2 + var(--vimeo-space-md))",
          _focus: {
            boxShadow: "none"
          },
          ref: _v9
        }), (0, _v1.jsxs)(_v7.InputRightElement, {
          width: "auto",
          height: "calc(100% - 2 * var(--vimeo-space-xs))",
          margin: "xs",
          gap: "xs",
          children: ["" !== _v0 && (0, _v1.jsx)(_v4.IconButton, {
            icon: (0, _v1.jsx)(_v9.CloseXCircleFilled, {}),
            "aria-label": (0, _v11.translate)({
              singular: "Clear search",
              dictionary: {
                es: {
                  singular: "Borrar búsqueda"
                },
                "de-DE": {
                  singular: "Suche löschen"
                },
                "fr-FR": {
                  singular: "Effacer la recherche"
                },
                "ja-JP": {
                  singular: "検索をクリア"
                },
                "ko-KR": {
                  singular: "검색 지우기"
                },
                "pt-BR": {
                  singular: "Limpar pesquisa"
                },
                "zh-CN": {
                  singular: "清除搜索"
                }
              }
            }),
            variant: "tertiary",
            size: "sm",
            borderRadius: "md",
            isDisabled: _v4,
            onClick: () => {
              _v1(""), _v9.current?.focus();
            }
          }), (0, _v1.jsx)(_v4.IconButton, {
            icon: (0, _v1.jsx)(_v10.SearchMagnifierAi, {}),
            "aria-label": (0, _v11.translate)({
              singular: "Search",
              dictionary: {
                es: {
                  singular: "Buscar"
                },
                "de-DE": {
                  singular: "Suchen"
                },
                "fr-FR": {
                  singular: "Chercher"
                },
                "ja-JP": {
                  singular: "検索"
                },
                "ko-KR": {
                  singular: "검색"
                },
                "pt-BR": {
                  singular: "Pesquisar"
                },
                "zh-CN": {
                  singular: "搜索"
                }
              }
            }),
            variant: "tertiary",
            size: "sm",
            borderRadius: "md",
            isDisabled: _v4,
            onClick: _v2
          })]
        })]
      })]
    });
  }], 0);
  let _v14 = _v0 => _v0.filter(_v0 => (_v0 => {
    try {
      let _v0 = new URL(_v0);
      return "https:" === _v0.protocol && "help.vimeo.com" === _v0.hostname;
    } catch {
      return !1;
    }
  })(_v0.url));
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = ({
    sources: _v0,
    panelPage: _v1,
    gap: _v2 = 2,
    entrypoint: _v3,
    surface: _v4
  }) => {
    let {
      trackSupportPanelSourceClicked: _v5
    } = (0, _v20.useSupportPanelTracking)({
      entrypoint: _v3,
      surface: _v4
    });
    return (0, _v1.jsxs)(_v3.Box, {
      children: [(0, _v1.jsx)(_v17.Text, {
        variant: "heading-2xs",
        color: "text-secondary",
        marginBottom: (0, _v8.rem)(9),
        children: (0, _v11.translate)({
          singular: "Related articles",
          dictionary: {
            es: {
              singular: "Artículos relacionados"
            },
            "de-DE": {
              singular: "Verwandte Artikel"
            },
            "fr-FR": {
              singular: "Articles associés"
            },
            "ja-JP": {
              singular: "関連記事"
            },
            "ko-KR": {
              singular: "관련 문서"
            },
            "pt-BR": {
              singular: "Artigos relacionados"
            },
            "zh-CN": {
              singular: "相关文章"
            }
          }
        })
      }), (0, _v1.jsx)(_v16.Flex, {
        direction: "column",
        gap: (0, _v8.rem)(_v2),
        children: _v0.slice(0, 3).map(_v0 => (0, _v1.jsxs)(_v16.Flex, {
          as: "a",
          href: _v0.url,
          target: "_blank",
          rel: "noopener noreferrer",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "sm",
          minHeight: "48px",
          transitionProperty: "common",
          transitionDuration: "fast",
          transitionTimingFunction: "ease-out",
          _hover: {
            textDecoration: "underline"
          },
          _focusVisible: {
            boxShadow: "outline"
          },
          onClick: () => _v5({
            title: _v0.title,
            url: _v0.url,
            panel_page: _v1
          }),
          children: [(0, _v1.jsx)(_v17.Text, {
            variant: "body-md",
            children: _v0.title
          }), (0, _v1.jsx)(_v19.PopOut, {
            boxSize: 16
          })]
        }, _v0.url))
      })]
    });
  };
  _v0.s(["SearchErrorState", 0, ({
    agenticHelp: _v0,
    searchQuery: _v1,
    onRetry: _v2,
    entrypoint: _v3,
    surface: _v4
  }) => {
    let _v5 = (0, _v2.useMemo)(() => _v14(_v0?.sources ?? []), [_v0]),
      _v6 = _v5.length > 0;
    return (0, _v1.jsxs)(_v16.Flex, {
      direction: "column",
      children: [(0, _v1.jsxs)(_v16.Flex, {
        direction: "column",
        alignItems: "center",
        textAlign: "center",
        paddingX: "5",
        paddingY: "xl",
        children: [(0, _v1.jsx)(_v16.Flex, {
          alignItems: "center",
          justifyContent: "center",
          boxSize: "md",
          marginBottom: "3",
          children: (0, _v1.jsx)(_v18.AiSparkles, {
            boxSize: "xs"
          })
        }), (0, _v1.jsx)(_v17.Text, {
          variant: "heading-sm",
          children: (0, _v11.translate)({
            singular: "Smart overview is unavailable",
            dictionary: {
              es: {
                singular: "Resumen inteligente no está disponible"
              },
              "de-DE": {
                singular: "Smart-Übersicht ist nicht verfügbar"
              },
              "fr-FR": {
                singular: "L’aperçu intelligent est indisponible"
              },
              "ja-JP": {
                singular: "スマート概要は利用できません"
              },
              "ko-KR": {
                singular: "스마트 개요를 사용할 수 없습니다"
              },
              "pt-BR": {
                singular: "Visão geral inteligente indisponível"
              },
              "zh-CN": {
                singular: "智能概览不可用"
              }
            }
          })
        }), (0, _v1.jsx)(_v17.Text, {
          variant: "body-md",
          color: "text-secondary",
          maxWidth: (0, _v8.rem)(290),
          marginTop: "3",
          children: _v6 ? (0, _v11.translate)({
            singular: "We couldn't create an overview right now. These Help Center articles can still help.",
            dictionary: {
              es: {
                singular: "No pudimos crear un resumen en este momento. Estos artículos del Centro de ayuda aún pueden ayudar."
              },
              "de-DE": {
                singular: "Wir konnten gerade keine Übersicht erstellen. Diese Help Center-Artikel können Ihnen trotzdem helfen."
              },
              "fr-FR": {
                singular: "Nous n’avons pas pu créer un aperçu pour le moment. Ces articles du Centre d’aide peuvent néanmoins vous aider."
              },
              "ja-JP": {
                singular: "現在、概要を作成できませんでした。これらのヘルプセンターの記事がお役に立つ場合があります。"
              },
              "ko-KR": {
                singular: "지금은 개요를 생성할 수 없습니다. 이 도움말 센터 문서들이 여전히 도움이 될 수 있습니다."
              },
              "pt-BR": {
                singular: "Não conseguimos criar uma visão geral neste momento. Estes artigos da Central de Ajuda ainda podem ajudar."
              },
              "zh-CN": {
                singular: "我们暂时无法生成概览。这些帮助中心文章仍然可以提供帮助。"
              }
            }
          }) : (0, _v11.translate)({
            singular: "We couldn't create an overview right now. Please try again.",
            dictionary: {
              es: {
                singular: "No pudimos crear un resumen en este momento. Por favor, inténtelo de nuevo."
              },
              "de-DE": {
                singular: "Wir konnten derzeit keine Übersicht erstellen. Bitte versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Nous n'avons pas pu créer un aperçu pour le moment. Veuillez réessayer."
              },
              "ja-JP": {
                singular: "現在、概要を作成できませんでした。もう一度お試しください。"
              },
              "ko-KR": {
                singular: "지금 개요를 생성할 수 없습니다. 다시 시도해 주세요."
              },
              "pt-BR": {
                singular: "Não foi possível criar uma visão geral agora. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "我们目前无法创建概览。请再试一次。"
              }
            }
          })
        })]
      }), "" !== _v1 && (0, _v1.jsx)(_v15.Button, {
        variant: "secondary",
        size: "sm",
        alignSelf: "center",
        onClick: () => _v2(_v1),
        children: (0, _v11.translate)({
          singular: "Try again",
          dictionary: {
            es: {
              singular: "Intentar de nuevo"
            },
            "de-DE": {
              singular: "Nochmal versuchen"
            },
            "fr-FR": {
              singular: "Veuillez réessayer"
            },
            "ja-JP": {
              singular: "再試行してください"
            },
            "ko-KR": {
              singular: "다시 시도하세요"
            },
            "pt-BR": {
              singular: "Tente de novo"
            },
            "zh-CN": {
              singular: "再试一次"
            }
          }
        })
      }), _v6 && (0, _v1.jsx)(_v3.Box, {
        marginTop: "4",
        children: (0, _v1.jsx)(_v21, {
          sources: _v5,
          panelPage: "search_error",
          gap: 12,
          entrypoint: _v3,
          surface: _v4
        })
      })]
    });
  }], 0);
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  _v0.s(["SearchResults", 0, ({
    agenticHelp: _v0,
    isLoading: _v1,
    entrypoint: _v2,
    surface: _v3,
    fill: _v4 = !1
  }) => {
    let _v5 = (0, _v2.useMemo)(() => _v14(_v0?.sources ?? []), [_v0]);
    return _v1 || null == _v0 ? (0, _v1.jsx)(_v16.Flex, {
      direction: "column",
      flex: _v4 ? "1" : void 0,
      minHeight: _v4 ? 0 : void 0,
      children: (0, _v1.jsx)(_v23.CardShell, {
        variant: "panel",
        fill: _v4,
        title: (0, _v11.translate)({
          singular: "Preparing your smart overview",
          dictionary: {
            es: {
              singular: "Preparando tu resumen inteligente"
            },
            "de-DE": {
              singular: "Vorbereitung Ihrer Smart-Übersicht"
            },
            "fr-FR": {
              singular: "Préparation de votre aperçu intelligent"
            },
            "ja-JP": {
              singular: "スマート概要を準備しています"
            },
            "ko-KR": {
              singular: "스마트 개요 준비 중"
            },
            "pt-BR": {
              singular: "Preparando seu resumo inteligente"
            },
            "zh-CN": {
              singular: "正在准备您的智能概览"
            }
          }
        }),
        isLoading: !0,
        children: (0, _v1.jsx)(_v22.CardLoading, {
          fill: _v4,
          caption: (0, _v11.translate)({
            singular: "Finding the most useful help for your question…",
            dictionary: {
              es: {
                singular: "Buscando la ayuda más útil para tu pregunta…"
              },
              "de-DE": {
                singular: "Die nützlichste Hilfe für Ihre Frage wird gesucht…"
              },
              "fr-FR": {
                singular: "Recherche de l'aide la plus utile pour votre question…"
              },
              "ja-JP": {
                singular: "質問に最も役立つヘルプを探しています…"
              },
              "ko-KR": {
                singular: "질문에 가장 유용한 도움을 찾는 중…"
              },
              "pt-BR": {
                singular: "Encontrando a ajuda mais útil para sua pergunta…"
              },
              "zh-CN": {
                singular: "为您的问题查找最有用的帮助…"
              }
            }
          })
        })
      })
    }) : (0, _v1.jsxs)(_v3.Box, {
      children: [(0, _v1.jsx)(_v23.CardShell, {
        variant: "panel",
        title: (0, _v11.translate)({
          singular: "Smart overview",
          dictionary: {
            es: {
              singular: "Resumen inteligente"
            },
            "de-DE": {
              singular: "Smart-Übersicht"
            },
            "fr-FR": {
              singular: "Aperçu intelligent"
            },
            "ja-JP": {
              singular: "スマート概要"
            },
            "ko-KR": {
              singular: "스마트 개요"
            },
            "pt-BR": {
              singular: "Resumo inteligente"
            },
            "zh-CN": {
              singular: "智能概览"
            }
          }
        }),
        children: (0, _v1.jsx)(_v24.HelpBody, {
          result: _v0,
          sourceCaption: (0, _v11.translate)({
            singular: "Based on Help Center articles",
            dictionary: {
              es: {
                singular: "Basado en artículos del Centro de ayuda"
              },
              "de-DE": {
                singular: "Basierend auf Artikeln des Help Centers"
              },
              "fr-FR": {
                singular: "Basé sur des articles du Centre d'aide"
              },
              "ja-JP": {
                singular: "ヘルプセンターの記事に基づく"
              },
              "ko-KR": {
                singular: "도움말 센터 문서를 기반으로 함"
              },
              "pt-BR": {
                singular: "Com base em artigos do Centro de Ajuda"
              },
              "zh-CN": {
                singular: "根据帮助中心文章"
              }
            }
          }),
          hideContactSupport: !0
        })
      }), _v5.length > 0 && (0, _v1.jsx)(_v3.Box, {
        mt: "xl",
        children: (0, _v1.jsx)(_v21, {
          sources: _v5,
          panelPage: "search",
          entrypoint: _v2,
          surface: _v3
        })
      })]
    });
  }], 0);
}