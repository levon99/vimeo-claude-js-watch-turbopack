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
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  async function _v28({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v26.measureLatency)("getUserAccountDictionaryGlossaryTerms", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/account_dictionary/glossary_terms?${(0, _v27.searchQueryString)(_v3)}&fields=${_v1.map(_v27.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v27.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v27.deepCamelCase)(_v1);
    });
  }
  async function _v29({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v26.measureLatency)("postUserAccountDictionaryGlossaryTerms", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/account_dictionary/glossary_terms?fields=${_v1.map(_v27.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v27.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v27.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v27.deepCamelCase)(_v1);
    });
  }
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  function _v34(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v33.useGctlConfig)();
    return (0, _v30.default)(_v2 ? `/users/${_v2.where.userId}/account_dictionary/glossary_terms${(0, _v25.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v28({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  "true" === _v24.default.env.STORYBOOK && (0, _v25.assignMswData)(_v34, {
    endpoint: "/users/:userId/account_dictionary/glossary_terms",
    method: "GET"
  }), "true" === _v24.default.env.STORYBOOK && (0, _v25.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v31.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v33.useGctlConfig)(),
      [_v5, _v6] = (0, _v25.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/account_dictionary/glossary_terms${(0, _v25.serializeQuery)(_v0)}`, _v28({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/users/:userId/account_dictionary/glossary_terms",
    method: "GET"
  }), "true" === _v24.default.env.STORYBOOK && (0, _v25.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v33.useGctlConfig)();
    return (0, _v32.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/account_dictionary/glossary_terms?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v28({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/account_dictionary/glossary_terms",
    method: "GET"
  }), "true" === _v24.default.env.STORYBOOK && (0, _v25.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v33.useGctlConfig)(),
      [_v4, _v5] = (0, _v25.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v29({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }, {
    endpoint: "/users/:userId/account_dictionary/glossary_terms",
    method: "POST"
  });
  let _v35 = ({
    ownerUserId: _v0,
    translations: _v1
  }) => {
    let _v2,
      _v3,
      _v4,
      [_v5, _v6] = (0, _v2.useState)(1),
      {
        terms: _v7,
        total: _v8,
        page: _v9,
        perPage: _v10,
        quota: _v11,
        isLoading: _v12,
        error: _v13,
        retry: _v14
      } = (_v2 = _v34(() => ({
        select: ["uri", "sourceText"],
        where: {
          userId: _v0
        },
        query: {
          page: _v5,
          perPage: 100
        }
      })), _v3 = (0, _v23.useGetUser)(() => ({
        select: ["accountDictionaryQuota.glossaryTerms.used", "accountDictionaryQuota.glossaryTerms.limit"],
        where: {
          userId: _v0
        }
      })), _v4 = (0, _v2.useCallback)(async () => {
        await Promise.all([_v2.mutate(), _v3.mutate()]);
      }, [_v2, _v3]), {
        terms: _v2.data?.data ?? [],
        total: _v2.data?.total ?? 0,
        page: _v2.data?.page ?? _v5,
        perPage: _v2.data?.perPage ?? 100,
        quota: _v3.data?.accountDictionaryQuota?.glossaryTerms,
        isLoading: _v2.isLoading || _v3.isLoading && !_v2.error,
        error: _v2.error,
        retry: _v4
      }),
      _v15 = _v11?.used ?? _v8,
      _v16 = _v11?.limit ?? 0;
    return (0, _v1.jsx)(_v6.TeamSettingsPageCategory, {
      title: _v1.glossaryTitle,
      description: _v1.glossaryDescription,
      headingAs: "h2",
      children: _v12 ? (0, _v1.jsx)(_v3.Flex, {
        minHeight: (0, _v4.rem)(140),
        alignItems: "center",
        justifyContent: "center",
        children: (0, _v1.jsx)(_v22.Spinner, {})
      }) : _v13 ? (0, _v1.jsxs)(_v7.Alert, {
        status: "error",
        marginTop: "300",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v9.AlertIcon, {}), (0, _v1.jsx)(_v8.AlertDescription, {
          flex: "1",
          children: _v1.glossaryLoadingError
        }), (0, _v1.jsx)(_v11.Button, {
          variant: "secondary",
          size: "sm",
          onClick: _v14,
          children: _v1.tryAgain
        })]
      }) : 0 === _v8 ? (0, _v1.jsxs)(_v3.Flex, {
        minHeight: (0, _v4.rem)(140),
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        children: [(0, _v1.jsx)(_v21.ClipboardNotes, {
          boxSize: 24
        }), (0, _v1.jsx)(_v16.Text, {
          variant: "heading-sm",
          marginTop: "100",
          children: _v1.glossaryEmptyTitle
        }), (0, _v1.jsx)(_v16.Text, {
          variant: "body-sm",
          color: "text-secondary",
          marginTop: "50",
          children: _v1.glossaryEmptyDescription
        })]
      }) : (0, _v1.jsxs)(_v10.Box, {
        marginTop: "300",
        children: [_v16 > 0 && (0, _v1.jsxs)(_v10.Box, {
          marginBottom: "200",
          children: [(0, _v1.jsx)(_v16.Text, {
            variant: "body-sm",
            color: "text-secondary",
            marginBottom: "75",
            children: _v1.glossaryCount(_v15, _v16)
          }), (0, _v1.jsx)(_v13.Progress, {
            value: Math.min(_v15 / _v16 * 100, 100),
            size: "sm"
          })]
        }), (0, _v1.jsxs)(_v20.Table, {
          width: "100%",
          children: [(0, _v1.jsx)(_v18.Thead, {
            children: (0, _v1.jsx)(_v19.Tr, {
              children: (0, _v1.jsx)(_v17.Th, {
                children: _v1.glossaryTerm
              })
            })
          }), (0, _v1.jsx)(_v14.Tbody, {
            children: _v7.map(_v0 => (0, _v1.jsx)(_v19.Tr, {
              children: (0, _v1.jsx)(_v15.Td, {
                children: _v0.sourceText
              })
            }, _v0.uri))
          })]
        }), _v8 > _v10 && (0, _v1.jsx)(_v3.Flex, {
          justifyContent: "center",
          marginTop: "300",
          children: (0, _v1.jsx)(_v12.Pagination, {
            size: "sm",
            count: _v8,
            pageSize: _v10,
            page: _v9,
            onPageChange: ({
              page: _v0
            }) => _v6(_v0)
          })
        })]
      })
    });
  };
  var _v36 = _v0.i(0);
  let _v37 = ({
    ownerUserId: _v0
  }) => {
    let {
      translations: _v1,
      sections: _v2
    } = (0, _v2.useMemo)(() => {
      let _v0 = {
        title: (0, _v36.translate)({
          singular: "Custom dictionary",
          dictionary: {
            es: {
              singular: "Diccionario personalizado"
            },
            "de-DE": {
              singular: "Benutzerdefiniertes Wörterbuch"
            },
            "fr-FR": {
              singular: "Dictionnaire personnalisé"
            },
            "ja-JP": {
              singular: "カスタム辞書"
            },
            "ko-KR": {
              singular: "사용자 지정 사전"
            },
            "pt-BR": {
              singular: "Dicionário personalizado"
            },
            "zh-CN": {
              singular: "自定义词典"
            }
          }
        }),
        description: (0, _v36.translate)({
          singular: "Define your brand names, product terms, and acronyms once, and they will be applied consistently across AI-generated content.",
          dictionary: {
            es: {
              singular: "Defina los nombres de su marca, términos de producto y acrónimos una vez, y se aplicarán de forma coherente en todo el contenido generado por IA."
            },
            "de-DE": {
              singular: "Definieren Sie Ihre Markennamen, Produktbegriffe und Akronyme einmal, und sie werden konsistent in KI-generierten Inhalten angewendet."
            },
            "fr-FR": {
              singular: "Définissez une fois vos noms de marque, termes produits et acronymes, et ils seront appliqués de manière cohérente à l'ensemble du contenu généré par l'IA."
            },
            "ja-JP": {
              singular: "ブランド名、製品用語、頭字語を一度定義すれば、AI生成コンテンツ全体に一貫して適用されます。"
            },
            "ko-KR": {
              singular: "브랜드 이름, 제품 용어 및 약어를 한 번 정의하면 AI 생성 콘텐츠 전반에 걸쳐 일관되게 적용됩니다."
            },
            "pt-BR": {
              singular: "Defina os nomes da sua marca, termos de produto e siglas uma vez, e eles serão aplicados de forma consistente em conteúdos gerados por IA."
            },
            "zh-CN": {
              singular: "一次性定义您的品牌名称、产品术语和首字母缩略词，它们将在 AI 生成的所有内容中保持一致应用。"
            }
          }
        }),
        notice: (0, _v36.translate)({
          singular: "Dictionary support for dubbing is coming soon. For now, your terms apply to transcripts, captions, and translations.",
          dictionary: {
            es: {
              singular: "El soporte de diccionario para doblaje llegará pronto. Por ahora, sus términos se aplican a transcripciones, subtítulos y traducciones."
            },
            "de-DE": {
              singular: "Wörterbuchunterstützung für das Dubbing kommt bald. Bis dahin gelten Ihre Begriffe für Transkripte, Untertitel und Übersetzungen."
            },
            "fr-FR": {
              singular: "La prise en charge d'un dictionnaire pour le doublage arrive bientôt. Pour l'instant, vos termes s'appliquent aux transcriptions, aux sous-titres et aux traductions."
            },
            "ja-JP": {
              singular: "吹替（ダビング）向けの辞書サポートはまもなく提供されます。現時点では、用語は書き起こし、キャプション、および翻訳に適用されます。"
            },
            "ko-KR": {
              singular: "더빙을 위한 사전 지원이 곧 제공될 예정입니다. 현재로서는 용어가 전사, 자막 및 번역에 적용됩니다."
            },
            "pt-BR": {
              singular: "O suporte a dicionário para dublagem chegará em breve. Por enquanto, seus termos se aplicam a transcrições, legendas e traduções."
            },
            "zh-CN": {
              singular: "配音词典支持即将推出。目前，您的术语适用于转录、字幕和翻译。"
            }
          }
        }),
        glossaryTitle: (0, _v36.translate)({
          singular: "Glossary",
          dictionary: {
            es: {
              singular: "Glosario"
            },
            "de-DE": {
              singular: "Glossar"
            },
            "fr-FR": {
              singular: "Glossaire"
            },
            "ja-JP": {
              singular: "用語集"
            },
            "ko-KR": {
              singular: "용어집"
            },
            "pt-BR": {
              singular: "Glossário"
            },
            "zh-CN": {
              singular: "术语表"
            }
          }
        }),
        glossaryDescription: (0, _v36.translate)({
          singular: "Ensures specific terms are spelled and capitalized correctly during AI generation.",
          dictionary: {
            es: {
              singular: "Garantiza que los términos específicos estén escritos y capitalizados correctamente durante la generación por IA."
            },
            "de-DE": {
              singular: "Stellt sicher, dass bestimmte Begriffe während der KI-Generierung korrekt geschrieben und bezüglich der Groß-/Kleinschreibung korrekt sind."
            },
            "fr-FR": {
              singular: "Garantit que les termes spécifiques sont orthographiés et capitalisés correctement lors de la génération par l'IA."
            },
            "ja-JP": {
              singular: "AI生成時に特定の用語の綴りや大文字・小文字の表記が正しく維持されることを保証します。"
            },
            "ko-KR": {
              singular: "AI 생성 과정에서 특정 용어의 철자와 대소문자가 올바르게 적용되도록 합니다."
            },
            "pt-BR": {
              singular: "Garante que termos específicos sejam soletrados e capitalizados corretamente durante a geração por IA."
            },
            "zh-CN": {
              singular: "确保在 AI 生成过程中特定术语的拼写和大小写正确。"
            }
          }
        }),
        glossaryCount: (_v0, _v1) => (0, _v36.translate)({
          singular: "{USED}/{LIMIT} terms",
          replacements: {
            USED: _v0,
            LIMIT: _v1
          },
          dictionary: {
            es: {
              singular: "{USED}/{LIMIT} términos"
            },
            "de-DE": {
              singular: "{USED}/{LIMIT} Begriffe"
            },
            "fr-FR": {
              singular: "{USED}/{LIMIT} termes"
            },
            "ja-JP": {
              singular: "{USED}/{LIMIT} 件の用語"
            },
            "ko-KR": {
              singular: "{USED}/{LIMIT}개의 용어"
            },
            "pt-BR": {
              singular: "{USED}/{LIMIT} termos"
            },
            "zh-CN": {
              singular: "{USED}/{LIMIT} 个术语"
            }
          }
        }),
        glossaryEmptyTitle: (0, _v36.translate)({
          singular: "No terms added yet.",
          dictionary: {
            es: {
              singular: "Aún no se han añadido términos."
            },
            "de-DE": {
              singular: "Noch keine Begriffe hinzugefügt."
            },
            "fr-FR": {
              singular: "Aucun terme ajouté pour le moment."
            },
            "ja-JP": {
              singular: "用語がまだ追加されていません。"
            },
            "ko-KR": {
              singular: "아직 용어가 추가되지 않았습니다."
            },
            "pt-BR": {
              singular: "Nenhum termo adicionado ainda."
            },
            "zh-CN": {
              singular: "尚未添加任何术语。"
            }
          }
        }),
        glossaryEmptyDescription: (0, _v36.translate)({
          singular: "Start adding your custom glossary.",
          dictionary: {
            es: {
              singular: "Comience a añadir su glosario personalizado."
            },
            "de-DE": {
              singular: "Beginnen Sie mit dem Hinzufügen Ihres benutzerdefinierten Glossars."
            },
            "fr-FR": {
              singular: "Commencez à ajouter votre glossaire personnalisé."
            },
            "ja-JP": {
              singular: "カスタム用語集の追加を開始してください。"
            },
            "ko-KR": {
              singular: "맞춤 용어집 추가를 시작하세요."
            },
            "pt-BR": {
              singular: "Comece a adicionar seu glossário personalizado."
            },
            "zh-CN": {
              singular: "开始添加您的自定义词汇表。"
            }
          }
        }),
        glossaryTerm: (0, _v36.translate)({
          singular: "Term",
          dictionary: {
            es: {
              singular: "Término"
            },
            "de-DE": {
              singular: "Begriff"
            },
            "fr-FR": {
              singular: "Terme"
            },
            "ja-JP": {
              singular: "用語"
            },
            "ko-KR": {
              singular: "용어"
            },
            "pt-BR": {
              singular: "Termo"
            },
            "zh-CN": {
              singular: "术语"
            }
          }
        }),
        glossaryLoadingError: (0, _v36.translate)({
          singular: "Unable to load the glossary.",
          dictionary: {
            es: {
              singular: "No se pudo cargar el glosario."
            },
            "de-DE": {
              singular: "Das Glossar konnte nicht geladen werden."
            },
            "fr-FR": {
              singular: "Impossible de charger le glossaire."
            },
            "ja-JP": {
              singular: "用語集を読み込めませんでした。"
            },
            "ko-KR": {
              singular: "용어집을 불러올 수 없습니다."
            },
            "pt-BR": {
              singular: "Não foi possível carregar o glossário."
            },
            "zh-CN": {
              singular: "无法加载词汇表。"
            }
          }
        }),
        tryAgain: (0, _v36.translate)({
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
        }),
        replacementsTitle: (0, _v36.translate)({
          singular: "Language replacements",
          dictionary: {
            es: {
              singular: "Reemplazos de idioma"
            },
            "de-DE": {
              singular: "Sprachersetzungen"
            },
            "fr-FR": {
              singular: "Remplacements linguistiques"
            },
            "ja-JP": {
              singular: "言語置換"
            },
            "ko-KR": {
              singular: "언어 대체"
            },
            "pt-BR": {
              singular: "Substituições de idioma"
            },
            "zh-CN": {
              singular: "语言替换"
            }
          }
        }),
        replacementsDescription: (0, _v36.translate)({
          singular: "Controls how specific terms are translated, or kept unchanged, across languages.",
          dictionary: {
            es: {
              singular: "Controla cómo se traducen términos específicos, o se mantienen sin cambios, entre idiomas."
            },
            "de-DE": {
              singular: "Steuert, wie bestimmte Begriffe über Sprachen hinweg übersetzt oder unverändert beibehalten werden."
            },
            "fr-FR": {
              singular: "Contrôle la manière dont des termes spécifiques sont traduits ou maintenus inchangés d'une langue à l'autre."
            },
            "ja-JP": {
              singular: "特定の用語を各言語でどのように翻訳するか、あるいは原語のままにするかを制御します。"
            },
            "ko-KR": {
              singular: "특정 용어가 여러 언어에서 어떻게 번역되거나 변경 없이 유지될지를 제어합니다."
            },
            "pt-BR": {
              singular: "Controla como termos específicos são traduzidos, ou mantidos inalterados, entre idiomas."
            },
            "zh-CN": {
              singular: "控制特定术语在各语言中的翻译方式或是否保持不变。"
            }
          }
        }),
        rulesTitle: (0, _v36.translate)({
          singular: "Custom rules",
          dictionary: {
            es: {
              singular: "Reglas personalizadas"
            },
            "de-DE": {
              singular: "Benutzerdefinierte Regeln"
            },
            "fr-FR": {
              singular: "Règles personnalisées"
            },
            "ja-JP": {
              singular: "カスタムルール"
            },
            "ko-KR": {
              singular: "사용자 지정 규칙"
            },
            "pt-BR": {
              singular: "Regras personalizadas"
            },
            "zh-CN": {
              singular: "自定义规则"
            }
          }
        }),
        rulesDescription: (0, _v36.translate)({
          singular: "Adds plain-language instructions for AI translations.",
          dictionary: {
            es: {
              singular: "Añade instrucciones en lenguaje sencillo para las traducciones por IA."
            },
            "de-DE": {
              singular: "Fügt leicht verständliche Anweisungen für KI-Übersetzungen hinzu."
            },
            "fr-FR": {
              singular: "Ajoute des instructions en langage clair pour les traductions par l'IA."
            },
            "ja-JP": {
              singular: "AI 翻訳向けにわかりやすい指示を追加します。"
            },
            "ko-KR": {
              singular: "AI 번역을 위한 평이한 언어 지침을 추가합니다."
            },
            "pt-BR": {
              singular: "Adiciona instruções em linguagem simples para traduções por IA."
            },
            "zh-CN": {
              singular: "为 AI 翻译添加通俗易懂的说明。"
            }
          }
        })
      };
      return {
        translations: _v0,
        sections: [{
          title: _v0.replacementsTitle,
          description: _v0.replacementsDescription
        }, {
          title: _v0.rulesTitle,
          description: _v0.rulesDescription
        }]
      };
    }, []);
    return (0, _v1.jsxs)(_v3.Flex, {
      width: "100%",
      maxWidth: (0, _v4.rem)(640),
      margin: "0 auto",
      flexDirection: "column",
      paddingBottom: "600",
      children: [(0, _v1.jsx)(_v5.SettingsPageContentHeader, {
        title: _v1.title,
        description: _v1.description,
        notice: {
          status: "info",
          message: _v1.notice
        }
      }), (0, _v1.jsxs)(_v3.Flex, {
        flexDirection: "column",
        children: [(0, _v1.jsx)(_v35, {
          ownerUserId: _v0,
          translations: _v1
        }), _v2.map(({
          title: _v0,
          description: _v1
        }) => (0, _v1.jsx)(_v6.TeamSettingsPageCategory, {
          title: _v0,
          description: _v1,
          headingAs: "h2"
        }, _v0))]
      })]
    });
  };
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  _v0.s(["AccountDictionaryRoute", 0, ({
    ownerUserId: _v0
  }) => {
    let {
      settings: _v1,
      isLoadingResponse: _v2
    } = (0, _v39.useOrionSettings)();
    return _v2 ? (0, _v1.jsx)(_v22.Spinner, {}) : _v1.enable_account_wide_dictionary_management ? (0, _v1.jsx)(_v37, {
      ownerUserId: _v0
    }) : (0, _v1.jsx)(_v40.ErrorPage, {
      error: new _v38.ResourceNotFoundError()
    });
  }], 0);
}