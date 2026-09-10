{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.i(0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  async function _v13({
    baseUrl: _v0,
    select: _v1,
    ..._v2
  }) {
    return (0, _v11.measureLatency)("postWhatsNewSeen", "POST", async () => {
      let _v0 = await fetch(`${_v0}/whats_new/seen?fields=${_v1.map(_v12.intoSnakeCase).join(",")}`, {
        ..._v2,
        method: "POST"
      });
      if (!_v0.ok) throw new _v12.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v12.deepCamelCase)(_v1);
    });
  }
  var _v14 = _v0.i(0);
  function _v15() {
    let {
        mutate: _v0
      } = (0, _v14.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v9.useGctlConfig)(),
      [_v5, _v6] = (0, _v10.useInternalState)();
    return [(0, _v5.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/whats_new/seen${(0, _v10.serializeQuery)(_v0)}`, _v13({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v1.default.env.STORYBOOK && (0, _v10.assignMswData)(_v15, {
    endpoint: "/whats_new/seen",
    method: "POST"
  });
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = ["released", "up_next"],
    _v51 = {
      released: [],
      up_next: []
    };
  function _v52(_v0) {
    return "string" == typeof _v0 ? _v0 : "";
  }
  let _v53 = () => {
      let _v0 = (0, _v4.useRouter)(),
        _v1 = (0, _v21.useViewer)(),
        _v2 = _v1?.apiUrl,
        _v3 = _v1?.jwt,
        _v4 = (0, _v49.usePico)(),
        _v5 = (0, _v44.useToast)(),
        _v6 = (0, _v43.useDisclosure)(),
        [_v7, _v8] = (0, _v5.useState)(_v51),
        _v9 = "up_next" === _v52(_v0.query.tab) ? "up_next" : "released",
        _v10 = _v52(_v0.query.product_area),
        _v11 = _v52(_v0.query.category),
        _v12 = _v52(_v0.query.plan),
        _v13 = _v52(_v0.query.q),
        _v14 = Math.max(Number(_v52(_v0.query.page)) || 1, 1);
      (0, _v5.useEffect)(() => {
        if (!_v2 || !_v3) return;
        let _v0 = !0;
        return fetch(`//${_v2}/whats_new`, {
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4",
            Authorization: `jwt ${_v3}`
          }
        }).then(_v0 => _v0.ok ? _v0.json() : Promise.reject(_v0)).then(_v0 => {
          _v0 && "object" == typeof _v0 && null !== _v0 && _v50.every(_v0 => Array.isArray(_v0[_v0]) && _v0[_v0].every(_v0 => {
            var _v1;
            return "object" == typeof (_v1 = _v0) && null !== _v1 && "string" == typeof _v1.id && "string" == typeof _v1.title && "string" == typeof _v1.description && "string" == typeof _v1.published_on && "boolean" == typeof _v1.is_new && (void 0 === _v1.product_area || "string" == typeof _v1.product_area) && (void 0 === _v1.category || "string" == typeof _v1.category) && (void 0 === _v1.plan || "string" == typeof _v1.plan) && (void 0 === _v1.media_url || "string" == typeof _v1.media_url) && (void 0 === _v1.vote || null === _v1.vote || -1 === _v1.vote || 1 === _v1.vote);
          })) && _v8(_v0);
        }).catch(() => void 0), () => {
          _v0 = !1;
        };
      }, [_v2, _v3]);
      let _v15 = (0, _v5.useCallback)(_v0 => {
          let _v1 = Object.fromEntries(Object.entries({
            ..._v0.query,
            ..._v0
          }).filter(([, _v0]) => "" !== _v0));
          _v0.replace({
            pathname: _v0.pathname,
            query: _v1
          }, void 0, {
            shallow: !0
          });
        }, [_v0]),
        _v16 = (0, _v5.useMemo)(() => {
          let _v0 = _v50.flatMap(_v0 => _v7[_v0]),
            _v1 = _v0 => [...new Set(_v0.map(_v0 => _v0[_v0]).filter(_v0 => !!_v0))];
          return {
            productAreas: _v1("product_area"),
            categories: _v1("category"),
            plans: _v1("plan")
          };
        }, [_v7]),
        _v17 = (0, _v5.useMemo)(() => _v7[_v9].filter(_v0 => {
          let _v1 = `${_v0.title} ${_v0.description}`.toLocaleLowerCase();
          return (!_v10 || _v0.product_area === _v10) && (!_v11 || _v0.category === _v11) && (!_v12 || _v0.plan === _v12) && (!_v13 || _v1.includes(_v13.toLocaleLowerCase()));
        }), [_v11, _v7, _v12, _v10, _v13, _v9]),
        _v18 = _v17.slice((_v14 - 1) * 10, 10 * _v14),
        _v19 = Math.max(Math.ceil(_v17.length / 10), 1),
        _v20 = (0, _v5.useMemo)(() => "released" !== _v9 ? [[void 0, _v18]] : Object.entries(_v18.reduce((_v0, _v1) => {
          var _v2;
          let _v3 = (_v2 = _v1.published_on, new Intl.DateTimeFormat(void 0, {
            month: "long",
            year: "numeric"
          }).format(new Date(_v2)));
          return _v0[_v3] = [...(_v0[_v3] ?? []), _v1], _v0;
        }, {})), [_v18, _v9]),
        _v21 = (0, _v5.useCallback)(async (_v0, _v1) => {
          if (!_v2 || !_v3) return;
          let _v2 = null === _v0.vote ? "POST" : _v0.vote === _v1 ? "DELETE" : "PATCH";
          (await fetch(`//${_v2}/whats_new/${_v0.id}/vote`, {
            method: _v2,
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4",
              Authorization: `jwt ${_v3}`,
              "Content-Type": "application/json"
            },
            ...("DELETE" === _v2 ? {} : {
              body: JSON.stringify({
                value: _v1
              })
            })
          })).ok && _v8(_v0 => ({
            ..._v0,
            released: _v0.released.map(_v0 => _v0.id === _v0.id ? {
              ..._v0,
              vote: "DELETE" === _v2 ? null : _v1
            } : _v0),
            up_next: _v0.up_next.map(_v0 => _v0.id === _v0.id ? {
              ..._v0,
              vote: "DELETE" === _v2 ? null : _v1
            } : _v0)
          }));
        }, [_v2, _v3]),
        _v22 = (0, _v5.useCallback)((_v0, _v1) => {
          _v4.track("whats_new_feedback_submitted", {
            entry_id: _v0,
            comment: _v1
          }), _v5({
            variant: "success",
            title: (0, _v16.translate)({
              singular: "Thanks for your feedback",
              dictionary: {
                es: {
                  singular: "Gracias por tus comentarios"
                },
                "de-DE": {
                  singular: "Vielen Dank für Ihr Feedback"
                },
                "fr-FR": {
                  singular: "Merci pour votre retour"
                },
                "ja-JP": {
                  singular: "フィードバックありがとうございます"
                },
                "ko-KR": {
                  singular: "피드백 감사합니다"
                },
                "pt-BR": {
                  singular: "Obrigado pelo seu feedback"
                },
                "zh-CN": {
                  singular: "感谢您的反馈"
                }
              }
            })
          });
        }, [_v4, _v5]),
        _v23 = (0, _v2.jsxs)(_v30.Flex, {
          direction: "column",
          gap: "200",
          children: [(0, _v2.jsx)(_v36.Select, {
            items: _v16.productAreas.map(_v0 => ({
              label: _v0,
              value: _v0
            })),
            label: (0, _v16.translate)({
              singular: "Product area",
              dictionary: {
                es: {
                  singular: "Área de producto"
                },
                "de-DE": {
                  singular: "Produktbereich"
                },
                "fr-FR": {
                  singular: "Domaine produit"
                },
                "ja-JP": {
                  singular: "製品領域"
                },
                "ko-KR": {
                  singular: "제품 영역"
                },
                "pt-BR": {
                  singular: "Área de produto"
                },
                "zh-CN": {
                  singular: "产品领域"
                }
              }
            }),
            placeholder: (0, _v16.translate)({
              singular: "All product areas",
              dictionary: {
                es: {
                  singular: "Todas las áreas de producto"
                },
                "de-DE": {
                  singular: "Alle Produktbereiche"
                },
                "fr-FR": {
                  singular: "Tous les domaines de produit"
                },
                "ja-JP": {
                  singular: "すべての製品領域"
                },
                "ko-KR": {
                  singular: "모든 제품 영역"
                },
                "pt-BR": {
                  singular: "Todas as áreas de produto"
                },
                "zh-CN": {
                  singular: "所有产品领域"
                }
              }
            }),
            value: _v10 ? [_v10] : [],
            onValueChange: ({
              value: _v0
            }) => _v15({
              product_area: _v0[0] ?? "",
              page: ""
            })
          }), (0, _v2.jsx)(_v36.Select, {
            items: _v16.categories.map(_v0 => ({
              label: _v0,
              value: _v0
            })),
            label: (0, _v16.translate)({
              singular: "Category",
              dictionary: {
                es: {
                  singular: "Categoría"
                },
                "de-DE": {
                  singular: "Kategorie"
                },
                "fr-FR": {
                  singular: "Catégorie"
                },
                "ja-JP": {
                  singular: "カテゴリー"
                },
                "ko-KR": {
                  singular: "카테고리"
                },
                "pt-BR": {
                  singular: "Categoria"
                },
                "zh-CN": {
                  singular: "类别"
                }
              }
            }),
            placeholder: (0, _v16.translate)({
              singular: "All categories",
              dictionary: {
                es: {
                  singular: "Todas las categorías"
                },
                "de-DE": {
                  singular: "Alle Kategorien"
                },
                "fr-FR": {
                  singular: "Toutes les catégories"
                },
                "ja-JP": {
                  singular: "全カテゴリー"
                },
                "ko-KR": {
                  singular: "모든 카테고리"
                },
                "pt-BR": {
                  singular: "Todas as categorias"
                },
                "zh-CN": {
                  singular: "所有类别"
                }
              }
            }),
            value: _v11 ? [_v11] : [],
            onValueChange: ({
              value: _v0
            }) => _v15({
              category: _v0[0] ?? "",
              page: ""
            })
          }), (0, _v2.jsx)(_v36.Select, {
            items: _v16.plans.map(_v0 => ({
              label: _v0,
              value: _v0
            })),
            label: (0, _v16.translate)({
              singular: "Plan",
              dictionary: {
                "de-DE": {
                  singular: "Tarif"
                },
                "fr-FR": {
                  singular: "Offre"
                },
                "ja-JP": {
                  singular: "プラン"
                },
                "ko-KR": {
                  singular: "요금제"
                },
                "pt-BR": {
                  singular: "Plano"
                },
                "zh-CN": {
                  singular: "订阅计划"
                }
              }
            }),
            placeholder: (0, _v16.translate)({
              singular: "All plans",
              dictionary: {
                es: {
                  singular: "Todos los planes"
                },
                "de-DE": {
                  singular: "Alle Pläne"
                },
                "fr-FR": {
                  singular: "Tous les forfaits"
                },
                "ja-JP": {
                  singular: "すべてのプラン"
                },
                "ko-KR": {
                  singular: "모든 요금제"
                },
                "pt-BR": {
                  singular: "Todos os planos"
                },
                "zh-CN": {
                  singular: "所有计划"
                }
              }
            }),
            value: _v12 ? [_v12] : [],
            onValueChange: ({
              value: _v0
            }) => _v15({
              plan: _v0[0] ?? "",
              page: ""
            })
          })]
        });
      return (0, _v2.jsxs)(_v23.Box, {
        maxWidth: "1440px",
        margin: "0 auto",
        padding: {
          base: "300",
          md: "600"
        },
        children: [(0, _v2.jsxs)(_v30.Flex, {
          justify: "space-between",
          align: "start",
          gap: "300",
          direction: {
            base: "column",
            md: "row"
          },
          children: [(0, _v2.jsxs)(_v23.Box, {
            children: [(0, _v2.jsx)(_v41.Text, {
              as: "h1",
              variant: "heading-2xl",
              children: (0, _v16.translate)({
                singular: "What's new",
                dictionary: {
                  es: {
                    singular: "Novedades"
                  },
                  "de-DE": {
                    singular: "Was gibt es Neues?"
                  },
                  "fr-FR": {
                    singular: "Quoi de neuf ?"
                  },
                  "ja-JP": {
                    singular: "新着情報"
                  },
                  "ko-KR": {
                    singular: "새로운 기능"
                  },
                  "pt-BR": {
                    singular: "Novidades"
                  },
                  "zh-CN": {
                    singular: "新增内容"
                  }
                }
              })
            }), (0, _v2.jsx)(_v41.Text, {
              color: "text-secondary",
              variant: "body-md",
              children: (0, _v16.translate)({
                singular: "Discover the latest Vimeo updates and help shape what comes next.",
                dictionary: {
                  es: {
                    singular: "Descubre las últimas actualizaciones de Vimeo y ayuda a dar forma a lo que viene."
                  },
                  "de-DE": {
                    singular: "Entdecken Sie die neuesten Vimeo-Updates und helfen Sie mit, das Kommende mitzugestalten."
                  },
                  "fr-FR": {
                    singular: "Découvrez les dernières mises à jour de Vimeo et contribuez à façonner la suite."
                  },
                  "ja-JP": {
                    singular: "最新のVimeoアップデートを確認し、今後の開発にご意見をお寄せください。"
                  },
                  "ko-KR": {
                    singular: "최신 Vimeo 업데이트를 확인하고 앞으로의 방향을 함께 만들어 가세요."
                  },
                  "pt-BR": {
                    singular: "Descubra as últimas atualizações do Vimeo e ajude a moldar o que vem a seguir."
                  },
                  "zh-CN": {
                    singular: "了解最新的 Vimeo 更新，并帮助塑造未来发展。"
                  }
                }
              })
            })]
          }), (0, _v2.jsx)(_v24.Button, {
            as: "a",
            href: "#feedback-form",
            variant: "secondary",
            children: (0, _v16.translate)({
              singular: "Provide feedback",
              dictionary: {
                es: {
                  singular: "Enviar comentarios"
                },
                "de-DE": {
                  singular: "Feedback geben"
                },
                "fr-FR": {
                  singular: "Donner votre avis"
                },
                "ja-JP": {
                  singular: "フィードバックを送信"
                },
                "ko-KR": {
                  singular: "피드백 보내기"
                },
                "pt-BR": {
                  singular: "Enviar feedback"
                },
                "zh-CN": {
                  singular: "提供反馈"
                }
              }
            })
          })]
        }), (0, _v2.jsxs)(_v30.Flex, {
          marginTop: "500",
          gap: "300",
          align: "start",
          children: [(0, _v2.jsx)(_v23.Box, {
            width: "240px",
            display: {
              base: "none",
              md: "block"
            },
            children: _v23
          }), (0, _v2.jsxs)(_v23.Box, {
            flex: "1",
            minWidth: "0",
            children: [(0, _v2.jsxs)(_v30.Flex, {
              justify: "space-between",
              gap: "200",
              direction: {
                base: "column",
                sm: "row"
              },
              children: [(0, _v2.jsx)(_v39.Tabs, {
                index: +("released" !== _v9),
                onChange: _v0 => _v15({
                  tab: 0 === _v0 ? "" : "up_next",
                  page: ""
                }),
                children: (0, _v2.jsxs)(_v40.TabList, {
                  children: [(0, _v2.jsx)(_v38.Tab, {
                    children: (0, _v16.translate)({
                      singular: "Released ({count})",
                      replacements: {
                        count: _v7.released.length
                      },
                      dictionary: {
                        es: {
                          singular: "Publicado ({count})"
                        },
                        "de-DE": {
                          singular: "Veröffentlicht ({count})"
                        },
                        "fr-FR": {
                          singular: "Publié ({count})"
                        },
                        "ja-JP": {
                          singular: "公開済み ({count})"
                        },
                        "ko-KR": {
                          singular: "공개됨 ({count})"
                        },
                        "pt-BR": {
                          singular: "Lançado ({count})"
                        },
                        "zh-CN": {
                          singular: "已发布 ({count})"
                        }
                      }
                    })
                  }), (0, _v2.jsx)(_v38.Tab, {
                    children: (0, _v16.translate)({
                      singular: "Up next ({count})",
                      replacements: {
                        count: _v7.up_next.length
                      },
                      dictionary: {
                        es: {
                          singular: "Próximamente ({count})"
                        },
                        "de-DE": {
                          singular: "Als Nächstes ({count})"
                        },
                        "fr-FR": {
                          singular: "À venir ({count})"
                        },
                        "ja-JP": {
                          singular: "今後の予定 ({count})"
                        },
                        "ko-KR": {
                          singular: "다음 항목 ({count})"
                        },
                        "pt-BR": {
                          singular: "A seguir ({count})"
                        },
                        "zh-CN": {
                          singular: "接下来 ({count})"
                        }
                      }
                    })
                  }), (0, _v2.jsx)(_v39.TabIndicator, {})]
                })
              }), (0, _v2.jsxs)(_v30.Flex, {
                gap: "100",
                children: [(0, _v2.jsxs)(_v34.InputGroup, {
                  children: [(0, _v2.jsx)(_v35.InputLeftElement, {
                    pointerEvents: "none",
                    children: (0, _v2.jsx)(_v46.SearchMagnifier, {})
                  }), (0, _v2.jsx)(_v33.Input, {
                    value: _v13,
                    onChange: _v0 => _v15({
                      q: _v0.target.value,
                      page: ""
                    }),
                    placeholder: (0, _v16.translate)({
                      singular: "Search updates",
                      dictionary: {
                        es: {
                          singular: "Buscar actualizaciones"
                        },
                        "de-DE": {
                          singular: "Updates durchsuchen"
                        },
                        "fr-FR": {
                          singular: "Rechercher des mises à jour"
                        },
                        "ja-JP": {
                          singular: "更新を検索"
                        },
                        "ko-KR": {
                          singular: "업데이트 검색"
                        },
                        "pt-BR": {
                          singular: "Pesquisar atualizações"
                        },
                        "zh-CN": {
                          singular: "搜索更新"
                        }
                      }
                    })
                  })]
                }), (0, _v2.jsx)(_v31.IconButton, {
                  display: {
                    base: "inline-flex",
                    md: "none"
                  },
                  "aria-label": (0, _v16.translate)({
                    singular: "Open filters",
                    dictionary: {
                      es: {
                        singular: "Abrir filtros"
                      },
                      "de-DE": {
                        singular: "Filter öffnen"
                      },
                      "fr-FR": {
                        singular: "Ouvrir les filtres"
                      },
                      "ja-JP": {
                        singular: "フィルターを開く"
                      },
                      "ko-KR": {
                        singular: "필터 열기"
                      },
                      "pt-BR": {
                        singular: "Abrir filtros"
                      },
                      "zh-CN": {
                        singular: "打开筛选"
                      }
                    }
                  }),
                  icon: (0, _v2.jsx)(_v45.Filter, {}),
                  onClick: _v6.onOpen
                })]
              })]
            }), (0, _v2.jsxs)(_v30.Flex, {
              direction: "column",
              gap: "500",
              marginTop: "500",
              children: [_v20.map(([_v0, _v1]) => (0, _v2.jsxs)(_v23.Box, {
                children: [_v0 && (0, _v2.jsx)(_v41.Text, {
                  as: "h2",
                  variant: "heading-md",
                  marginBottom: "200",
                  children: _v0
                }), (0, _v2.jsx)(_v37.SimpleGrid, {
                  columns: {
                    base: 1,
                    lg: 2
                  },
                  gap: "300",
                  children: _v1.map(_v0 => (0, _v2.jsx)(_v54, {
                    entry: _v0,
                    section: _v9,
                    onVote: _v21,
                    onFeedback: _v22
                  }, _v0.id))
                })]
              }, _v0 ?? _v9)), 0 === _v18.length && (0, _v2.jsx)(_v41.Text, {
                color: "text-secondary",
                children: (0, _v16.translate)({
                  singular: "No updates match these filters.",
                  dictionary: {
                    es: {
                      singular: "No hay actualizaciones que coincidan con estos filtros."
                    },
                    "de-DE": {
                      singular: "Keine Updates entsprechen diesen Filtern."
                    },
                    "fr-FR": {
                      singular: "Aucune mise à jour ne correspond à ces filtres."
                    },
                    "ja-JP": {
                      singular: "これらのフィルターに一致する更新はありません。"
                    },
                    "ko-KR": {
                      singular: "선택한 필터에 일치하는 업데이트가 없습니다."
                    },
                    "pt-BR": {
                      singular: "Nenhuma atualização corresponde a esses filtros."
                    },
                    "zh-CN": {
                      singular: "没有符合这些筛选条件的更新。"
                    }
                  }
                })
              }), _v19 > 1 && (0, _v2.jsxs)(_v30.Flex, {
                justify: "center",
                gap: "200",
                children: [(0, _v2.jsx)(_v24.Button, {
                  variant: "secondary",
                  isDisabled: 1 === _v14,
                  onClick: () => _v15({
                    page: String(_v14 - 1)
                  }),
                  children: (0, _v16.translate)({
                    singular: "Previous",
                    dictionary: {
                      es: {
                        singular: "Anterior"
                      },
                      "de-DE": {
                        singular: "Zurück"
                      },
                      "fr-FR": {
                        singular: "Précédent"
                      },
                      "ja-JP": {
                        singular: "前"
                      },
                      "ko-KR": {
                        singular: "이전"
                      },
                      "pt-BR": {
                        singular: "Anterior"
                      },
                      "zh-CN": {
                        singular: "上一个"
                      }
                    }
                  })
                }), (0, _v2.jsx)(_v41.Text, {
                  alignSelf: "center",
                  children: (0, _v16.translate)({
                    singular: "Page {page} of {pageCount}",
                    replacements: {
                      page: _v14,
                      pageCount: _v19
                    },
                    dictionary: {
                      es: {
                        singular: "Página {page} de {pageCount}"
                      },
                      "de-DE": {
                        singular: "Seite {page} von {pageCount}"
                      },
                      "fr-FR": {
                        singular: "Page {page} sur {pageCount}"
                      },
                      "ja-JP": {
                        singular: "ページ {page} / {pageCount}"
                      },
                      "ko-KR": {
                        singular: "페이지 {page} / {pageCount}"
                      },
                      "pt-BR": {
                        singular: "Página {page} de {pageCount}"
                      },
                      "zh-CN": {
                        singular: "第 {page} 页，共 {pageCount} 页"
                      }
                    }
                  })
                }), (0, _v2.jsx)(_v24.Button, {
                  variant: "secondary",
                  isDisabled: _v14 === _v19,
                  onClick: () => _v15({
                    page: String(_v14 + 1)
                  }),
                  children: (0, _v16.translate)({
                    singular: "Next",
                    dictionary: {
                      es: {
                        singular: "Siguiente"
                      },
                      "de-DE": {
                        singular: "Weiter"
                      },
                      "fr-FR": {
                        singular: "Suivant"
                      },
                      "ja-JP": {
                        singular: "次へ"
                      },
                      "ko-KR": {
                        singular: "다음"
                      },
                      "pt-BR": {
                        singular: "Próxima"
                      },
                      "zh-CN": {
                        singular: "下一步"
                      }
                    }
                  })
                })]
              })]
            })]
          })]
        }), (0, _v2.jsxs)(_v25.Drawer, {
          isOpen: _v6.isOpen,
          placement: "bottom",
          onClose: _v6.onClose,
          children: [(0, _v2.jsx)(_v29.DrawerOverlay, {}), (0, _v2.jsxs)(_v27.DrawerContent, {
            children: [(0, _v2.jsxs)(_v28.DrawerHeader, {
              children: [(0, _v16.translate)({
                singular: "Filters",
                dictionary: {
                  es: {
                    singular: "Filtros"
                  },
                  "de-DE": {
                    singular: "Filter"
                  },
                  "fr-FR": {
                    singular: "Filtres"
                  },
                  "ja-JP": {
                    singular: "フィルター"
                  },
                  "ko-KR": {
                    singular: "필터"
                  },
                  "pt-BR": {
                    singular: "Filtros"
                  },
                  "zh-CN": {
                    singular: "过滤器"
                  }
                }
              }), (0, _v2.jsx)(_v27.DrawerCloseButton, {})]
            }), (0, _v2.jsx)(_v26.DrawerBody, {
              paddingBottom: "400",
              children: _v23
            })]
          })]
        })]
      });
    },
    _v54 = ({
      entry: _v0,
      section: _v1,
      onVote: _v2,
      onFeedback: _v3
    }) => {
      let [_v4, _v5] = (0, _v5.useState)(""),
        [_v6, _v7] = (0, _v5.useState)(!1),
        _v8 = "up_next" === _v1;
      return (0, _v2.jsxs)(_v23.Box, {
        borderWidth: "1px",
        borderColor: "stroke",
        borderRadius: "md",
        overflow: "hidden",
        bg: "surface",
        children: [(0, _v2.jsx)(_v23.Box, {
          aspectRatio: 16 / 9,
          bg: "fill-component",
          overflow: "hidden",
          children: _v0.media_url && (0, _v2.jsx)(_v32.Image, {
            src: _v0.media_url,
            alt: "",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: _v8 ? "blur(8px)" : void 0,
            transform: _v8 ? "scale(1.04)" : void 0
          })
        }), (0, _v2.jsxs)(_v30.Flex, {
          direction: "column",
          gap: "200",
          padding: "300",
          children: [(0, _v2.jsxs)(_v30.Flex, {
            justify: "space-between",
            gap: "100",
            children: [(0, _v2.jsx)(_v41.Text, {
              as: "h3",
              variant: "heading-sm",
              children: _v0.title
            }), _v0.is_new && (0, _v2.jsx)(_v22.Badge, {
              variant: "new",
              children: (0, _v16.translate)({
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
            })]
          }), (0, _v2.jsx)(_v41.Text, {
            color: "text-secondary",
            children: _v0.description
          }), (0, _v2.jsxs)(_v30.Flex, {
            gap: "100",
            children: [(0, _v2.jsx)(_v31.IconButton, {
              "aria-label": (0, _v16.translate)({
                singular: "Vote up for {title}",
                replacements: {
                  title: _v0.title
                },
                dictionary: {
                  es: {
                    singular: "Votar a favor de {title}"
                  },
                  "de-DE": {
                    singular: "Für {title} stimmen"
                  },
                  "fr-FR": {
                    singular: "Votez pour {title}"
                  },
                  "ja-JP": {
                    singular: "「{title}」に賛成票を投じる"
                  },
                  "ko-KR": {
                    singular: "{title}에 찬성"
                  },
                  "pt-BR": {
                    singular: "Votar a favor de {title}"
                  },
                  "zh-CN": {
                    singular: "为 {title} 投赞成票"
                  }
                }
              }),
              icon: (0, _v2.jsx)(_v48.ThumbUp, {}),
              variant: 1 === _v0.vote ? "primary" : "secondary",
              onClick: () => void _v2(_v0, 1)
            }), (0, _v2.jsx)(_v31.IconButton, {
              "aria-label": (0, _v16.translate)({
                singular: "Vote down for {title}",
                replacements: {
                  title: _v0.title
                },
                dictionary: {
                  es: {
                    singular: "Votar en contra de {title}"
                  },
                  "de-DE": {
                    singular: "Gegen {title} stimmen"
                  },
                  "fr-FR": {
                    singular: "Votez contre {title}"
                  },
                  "ja-JP": {
                    singular: "「{title}」に反対票を投じる"
                  },
                  "ko-KR": {
                    singular: "{title}에 반대"
                  },
                  "pt-BR": {
                    singular: "Votar contra {title}"
                  },
                  "zh-CN": {
                    singular: "为 {title} 投反对票"
                  }
                }
              }),
              icon: (0, _v2.jsx)(_v47.ThumbDown, {}),
              variant: -1 === _v0.vote ? "primary" : "secondary",
              onClick: () => void _v2(_v0, -1)
            })]
          }), (0, _v2.jsx)(_v24.Button, {
            variant: "secondary",
            onClick: () => _v7(!0),
            children: (0, _v16.translate)({
              singular: "Feedback",
              dictionary: {
                es: {
                  singular: "Comentarios"
                },
                "fr-FR": {
                  singular: "Commentaires"
                },
                "ja-JP": {
                  singular: "フィードバック"
                },
                "ko-KR": {
                  singular: "피드백"
                },
                "zh-CN": {
                  singular: "反馈"
                }
              }
            })
          }), _v6 && (0, _v2.jsxs)(_v30.Flex, {
            gap: "100",
            children: [(0, _v2.jsx)(_v42.Textarea, {
              value: _v4,
              onChange: _v0 => _v5(_v0.target.value),
              placeholder: (0, _v16.translate)({
                singular: "Share feedback",
                dictionary: {
                  es: {
                    singular: "Compartir comentarios"
                  },
                  "de-DE": {
                    singular: "Feedback teilen"
                  },
                  "fr-FR": {
                    singular: "Partager votre avis"
                  },
                  "ja-JP": {
                    singular: "フィードバックを共有"
                  },
                  "ko-KR": {
                    singular: "피드백 공유"
                  },
                  "pt-BR": {
                    singular: "Compartilhar feedback"
                  },
                  "zh-CN": {
                    singular: "分享反馈"
                  }
                }
              })
            }), (0, _v2.jsx)(_v24.Button, {
              variant: "secondary",
              isDisabled: "" === _v4.trim(),
              onClick: () => {
                _v3(_v0.id, _v4.trim()), _v5(""), _v7(!1);
              },
              children: (0, _v16.translate)({
                singular: "Send",
                dictionary: {
                  es: {
                    singular: "Enviar"
                  },
                  "de-DE": {
                    singular: "Senden"
                  },
                  "fr-FR": {
                    singular: "Envoyer"
                  },
                  "ja-JP": {
                    singular: "送信"
                  },
                  "ko-KR": {
                    singular: "전송"
                  },
                  "pt-BR": {
                    singular: "Enviar"
                  },
                  "zh-CN": {
                    singular: "发送"
                  }
                }
              })
            })]
          })]
        })]
      });
    },
    _v55 = () => {
      let _v0 = (0, _v4.useRouter)(),
        _v1 = (0, _v21.useViewer)(),
        {
          settings: _v2,
          isLoadingResponse: _v3
        } = (0, _v17.useOrionSettings)(),
        {
          baseUrl: _v4,
          jwt: _v5
        } = (0, _v9.useGctlConfig)(),
        [_v6] = _v15(),
        {
          mutate: _v7
        } = (0, _v6.useSWRConfig)(),
        _v8 = (0, _v5.useRef)(!1),
        _v9 = (0, _v5.useRef)(!1);
      return ((0, _v5.useEffect)(() => {
        if ("true" === _v0.query.changelog) {
          let _v0 = {
            ..._v0.query
          };
          delete _v0.changelog, _v0.replace({
            pathname: _v0.pathname,
            query: _v0
          }, void 0, {
            shallow: !0
          });
        }
      }, [_v0]), (0, _v5.useEffect)(() => {
        _v8.current || _v9.current || _v2.enable_whats_new_page && _v4 && _v5 && (_v9.current = !0, _v6({
          baseUrl: _v4,
          select: ["lastSeenAt"],
          headers: {
            Authorization: `jwt ${_v5}`
          }
        }).then(() => {
          _v8.current = !0, _v7(_v0 => "string" == typeof _v0 && _v0.startsWith("/whats_new?"));
        }).finally(() => {
          _v9.current = !1;
        }));
      }, [_v4, _v5, !1, _v7, _v6, _v2.enable_whats_new_page]), _v3 || !_v1) ? null : _v2.enable_whats_new_page ? (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v3.default, {
          children: (0, _v2.jsx)("title", {
            children: (0, _v16.translate)({
              singular: "What's new",
              dictionary: {
                es: {
                  singular: "Novedades"
                },
                "de-DE": {
                  singular: "Was gibt es Neues?"
                },
                "fr-FR": {
                  singular: "Quoi de neuf ?"
                },
                "ja-JP": {
                  singular: "新着情報"
                },
                "ko-KR": {
                  singular: "새로운 기능"
                },
                "pt-BR": {
                  singular: "Novidades"
                },
                "zh-CN": {
                  singular: "新增内容"
                }
              }
            })
          })
        }), (0, _v2.jsx)(_v53, {})]
      }) : (0, _v2.jsx)(_v18.ErrorPage, {
        error: new _v7.ResourceNotFoundError()
      });
    };
  _v55.getLayout = (_v0, _v1) => (0, _v2.jsx)(_v20.VideoLibraryLayout, {
    hasSideNav: !0,
    sideNavSurface: "home",
    hideWhatsNewAnnouncementCount: !0,
    hasUploader: _v1.hasUploader,
    sideNavContent: (0, _v2.jsx)(_v19.SideNavContent, {
      surface: "home"
    }),
    children: _v0
  }), (0, _v8.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !0
    }
  }), {
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v55], 0);
}