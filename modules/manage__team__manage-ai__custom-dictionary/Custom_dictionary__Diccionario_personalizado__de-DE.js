{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = () => {
    let {
      translations: _v0,
      sections: _v1
    } = (0, _v2.useMemo)(() => {
      let _v0 = {
        title: (0, _v7.translate)({
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
        description: (0, _v7.translate)({
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
        notice: (0, _v7.translate)({
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
        glossaryTitle: (0, _v7.translate)({
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
        glossaryDescription: (0, _v7.translate)({
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
        replacementsTitle: (0, _v7.translate)({
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
        replacementsDescription: (0, _v7.translate)({
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
        rulesTitle: (0, _v7.translate)({
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
        rulesDescription: (0, _v7.translate)({
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
          title: _v0.glossaryTitle,
          description: _v0.glossaryDescription
        }, {
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
        title: _v0.title,
        description: _v0.description,
        notice: {
          status: "info",
          message: _v0.notice
        }
      }), (0, _v1.jsx)(_v3.Flex, {
        flexDirection: "column",
        children: _v1.map(({
          title: _v0,
          description: _v1
        }) => (0, _v1.jsx)(_v6.TeamSettingsPageCategory, {
          title: _v0,
          description: _v1,
          headingAs: "h2"
        }, _v0))
      })]
    });
  };
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  _v0.s(["AccountDictionaryRoute", 0, () => {
    let {
      settings: _v0,
      isLoadingResponse: _v1
    } = (0, _v11.useOrionSettings)();
    return _v1 ? (0, _v1.jsx)(_v10.Spinner, {}) : _v0.enable_account_wide_dictionary_management ? (0, _v1.jsx)(_v8, {}) : (0, _v1.jsx)(_v12.ErrorPage, {
      error: new _v9.ResourceNotFoundError()
    });
  }], 0);
}