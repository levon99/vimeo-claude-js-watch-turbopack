{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["LandingPagePreviewButton", 0, function () {
    let {
        sessionId: _v0
      } = (0, _v2.useManager)(_v7.ComposerSessionManager),
      {
        settings: {
          value: _v1
        }
      } = (0, _v2.useManager)(_v8.EventSettingsManager),
      _v2 = ((..._v0) => _v6.vimeoConfig.PATH.EVENT_VIEWER_PAGE(..._v0))(_v0, _v1?.streamPrivacy?.unlistedHash);
    return (0, _v1.jsx)(_v3.Button, {
      flexShrink: 0,
      leftIcon: (0, _v1.jsx)(_v4.Play, {}),
      onClick: () => {
        window.open(_v2, "_blank");
      },
      size: "md",
      variant: "secondary",
      width: "100%",
      children: (0, _v5.translate)({
        singular: "Preview page",
        dictionary: {
          es: {
            singular: "Página de vista previa"
          },
          "de-DE": {
            singular: "Vorschauseite"
          },
          "fr-FR": {
            singular: "Page d’aperçu"
          },
          "ja-JP": {
            singular: "プレビューページ"
          },
          "ko-KR": {
            singular: "미리보기 페이지"
          },
          "pt-BR": {
            singular: "Página de pré-visualização"
          },
          "zh-CN": {
            singular: "预览页面"
          }
        }
      })
    });
  }], 0);
  var _v9 = _v0.i(0),
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
    _v20 = _v0.i(0);
  let _v21 = ({
    resourceType: _v0,
    resourceId: _v1,
    children: _v2
  }) => {
    let _v3 = (0, _v9.useMemo)(() => ({
      resourceType: _v0,
      resourceId: _v1
    }), [_v0, _v1]);
    return (0, _v1.jsx)(_v20.LocalizationTrackingContext.Provider, {
      value: _v3,
      children: _v2
    });
  };
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = Object.values(_v31.Locales).filter(_v0 => _v0 !== _v31.Locales.zh),
    _v33 = "title",
    _v34 = "streamDescription",
    _v35 = [_v33, _v34],
    _v36 = "speakers",
    _v37 = ["name", "role", "description"],
    _v38 = /^[1-9][0-9]*$/,
    _v39 = (_v0, _v1) => `${_v36}.${_v0}.${_v1}`,
    _v40 = _v0 => null !== _v0 && "object" == typeof _v0 && !Array.isArray(_v0),
    _v41 = _v0 => {
      let _v1;
      return _v40(_v0) && "string" == typeof _v0.value && ("manual" === (_v1 = _v0.provenance) || "ai" === _v1);
    },
    _v42 = _v0 => _v32.find(_v0 => _v0 === _v0) ?? null,
    _v43 = (_v0, _v1) => {
      let _v2 = (0, _v30.foreignDocumentEntries)(_v1, [_v33, _v34, _v36]);
      _v35.forEach(_v0 => {
        let _v1 = _v0[_v0];
        void 0 !== _v1 && (_v2[_v0] = _v1);
      });
      let _v3 = {};
      return Object.entries(_v0).forEach(([_v0, _v1]) => {
        let [_v2, _v3, _v4] = _v0.split("."),
          _v5 = _v37.find(_v0 => _v0 === _v4);
        _v2 === _v36 && void 0 !== _v3 && void 0 !== _v5 && (_v3[_v3] = {
          ..._v3[_v3],
          [_v5]: _v1
        });
      }), Object.keys(_v3).length > 0 && (_v2[_v36] = _v3), _v2;
    },
    _v44 = _v0 => "" !== _v0.title || "" !== _v0.streamDescription;
  function _v45({
    localizations: _v0,
    source: _v1,
    isSourceLoading: _v2,
    onEditLocale: _v3,
    onAddLanguages: _v4
  }) {
    let _v5 = (0, _v28.useLocale)(),
      [_v6, _v7] = (0, _v9.useState)(null),
      {
        trackLocalizationAddLanguagesClicked: _v8,
        trackLocalizationDeleted: _v9
      } = (0, _v20.useLocalizationResourceTracking)(),
      {
        isLoading: _v10,
        savedLocales: _v11,
        sourceLocale: _v12,
        isSubmittingSourceLocale: _v13,
        changeSourceLocale: _v14,
        isSubmitting: _v15,
        setPublished: _v16,
        removeLocale: _v17
      } = _v0,
      _v18 = _v12 ?? (_v10 ? null : _v42(_v5)),
      {
        translatedLocales: _v19,
        untranslatedLocales: _v20
      } = (0, _v9.useMemo)(() => {
        let _v0 = _v32.filter(_v0 => _v0 !== _v18),
          _v1 = _v0 => void 0 !== _v11[_v0];
        return {
          translatedLocales: _v0.filter(_v1),
          untranslatedLocales: _v0.filter(_v0 => !_v1(_v0))
        };
      }, [_v18, _v11]),
      _v21 = (0, _v9.useCallback)(_v0 => {
        _v17(_v0).then(_v0 => {
          _v0 && (_v9({
            locale: _v0
          }), _v7(null));
        });
      }, [_v17, _v9]),
      _v22 = null == _v18,
      _v23 = _v22 || _v13 || _v2 || 0 === _v20.length || !(_v44(_v1) || _v1.visibleSpeakers.length > 0);
    return (0, _v1.jsxs)(_v15.Flex, {
      direction: "column",
      gap: "md",
      width: "100%",
      children: [(0, _v1.jsx)(_v17.Text, {
        color: "text-secondary",
        variant: "body-sm",
        children: (0, _v5.translate)({
          singular: "You can customize translations for any content you add. For non-customizable content, such as section titles, translations are provided automatically.",
          dictionary: {
            es: {
              singular: "Puedes personalizar las traducciones de cualquier contenido que añadas. Para el contenido no personalizable, como los títulos de sección, las traducciones se proporcionan automáticamente."
            },
            "de-DE": {
              singular: "Sie können Übersetzungen für alle Inhalte, die Sie hinzufügen, anpassen. Für nicht anpassbare Inhalte, wie Abschnittstitel, werden Übersetzungen automatisch bereitgestellt."
            },
            "fr-FR": {
              singular: "Vous pouvez personnaliser les traductions pour tout contenu que vous ajoutez. Pour le contenu non personnalisable, comme les titres de section, les traductions sont fournies automatiquement."
            },
            "ja-JP": {
              singular: "追加したコンテンツの翻訳はカスタマイズできます。セクションタイトルなどカスタマイズできないコンテンツについては、翻訳が自動的に提供されます。"
            },
            "ko-KR": {
              singular: "추가하는 모든 콘텐츠에 대해 번역을 사용자 지정할 수 있습니다. 섹션 제목과 같이 사용자 지정이 불가능한 콘텐츠의 번역은 자동으로 제공됩니다."
            },
            "pt-BR": {
              singular: "Você pode personalizar as traduções de qualquer conteúdo que adicionar. Para conteúdo não personalizável, como títulos de seção, as traduções são fornecidas automaticamente."
            },
            "zh-CN": {
              singular: "您可以为您添加的任何内容自定义翻译。对于不可自定义的内容（例如部分标题），翻译会自动提供。"
            }
          }
        })
      }), (0, _v1.jsx)(_v27.MainLanguageSection, {
        isDisabled: _v19.length > 0 || _v13,
        locales: _v32,
        onChange: _v0 => void _v14(_v0),
        sourceLocale: _v18
      }), (0, _v1.jsxs)(_v15.Flex, {
        direction: "column",
        gap: (0, _v16.rem)(8),
        width: "100%",
        children: [(0, _v1.jsxs)(_v15.Flex, {
          align: "center",
          gap: (0, _v16.rem)(8),
          children: [(0, _v1.jsx)(_v17.Text, {
            color: "text-primary",
            variant: "heading-xs",
            children: (0, _v5.translate)({
              singular: "Translations",
              dictionary: {
                es: {
                  singular: "Traducciones"
                },
                "de-DE": {
                  singular: "Übersetzungen"
                },
                "fr-FR": {
                  singular: "Traductions"
                },
                "ja-JP": {
                  singular: "翻訳"
                },
                "ko-KR": {
                  singular: "번역"
                },
                "pt-BR": {
                  singular: "Traduções"
                },
                "zh-CN": {
                  singular: "翻译"
                }
              }
            })
          }), (0, _v1.jsx)(_v17.Text, {
            color: "text-secondary",
            variant: "body-md",
            children: (0, _v5.translate)({
              singular: "{COUNT} of {MAX}",
              replacements: {
                COUNT: _v19.length,
                MAX: _v19.length + _v20.length
              },
              dictionary: {
                es: {
                  singular: "{COUNT} de {MAX}"
                },
                "de-DE": {
                  singular: "{COUNT} von {MAX}"
                },
                "fr-FR": {
                  singular: "{COUNT} sur {MAX}"
                },
                "ja-JP": {
                  singular: "{COUNT}／{MAX}"
                },
                "ko-KR": {
                  singular: "{COUNT}/{MAX}"
                },
                "pt-BR": {
                  singular: "{COUNT} de {MAX}"
                },
                "zh-CN": {
                  singular: "{COUNT} / {MAX}"
                }
              }
            })
          })]
        }), _v19.map(_v0 => (0, _v1.jsx)(_v26.LocaleRow, {
          isSubmitting: _v15,
          locale: _v0,
          onEdit: () => _v3(_v0),
          onPublishedChange: _v0 => _v16(_v0, _v0),
          onRemove: () => _v7(_v0),
          savedLocale: _v11[_v0]
        }, _v0))]
      }), (0, _v1.jsx)(_v24.Tooltip, {
        isDisabled: !_v22 && _v20.length > 0,
        label: _v22 ? (0, _v5.translate)({
          singular: "Choose a main language first",
          dictionary: {
            es: {
              singular: "Elige primero un idioma principal"
            },
            "de-DE": {
              singular: "Wählen Sie zuerst eine Hauptsprache aus"
            },
            "fr-FR": {
              singular: "Choisissez d’abord une langue principale"
            },
            "ja-JP": {
              singular: "まずメイン言語を選択してください"
            },
            "ko-KR": {
              singular: "먼저 기본 언어를 선택하세요"
            },
            "pt-BR": {
              singular: "Escolha um idioma principal primeiro"
            },
            "zh-CN": {
              singular: "请先选择主语言"
            }
          }
        }) : (0, _v5.translate)({
          singular: "Other languages are not supported",
          dictionary: {
            es: {
              singular: "No se admiten otros idiomas"
            },
            "de-DE": {
              singular: "Andere Sprachen werden nicht unterstützt"
            },
            "fr-FR": {
              singular: "Les autres langues ne sont pas prises en charge"
            },
            "ja-JP": {
              singular: "他の言語はサポートされていません"
            },
            "ko-KR": {
              singular: "다른 언어는 지원되지 않습니다"
            },
            "pt-BR": {
              singular: "Outros idiomas não são suportados"
            },
            "zh-CN": {
              singular: "不支持其他语言"
            }
          }
        }),
        children: (0, _v1.jsx)(_v3.Button, {
          isDisabled: _v23,
          onClick: () => {
            _v8({
              availableLocaleCount: _v20.length
            }), _v4();
          },
          size: "sm",
          variant: "secondary",
          width: "100%",
          children: (0, _v5.translate)({
            singular: "Add languages",
            dictionary: {
              es: {
                singular: "Añadir idiomas"
              },
              "de-DE": {
                singular: "Sprachen hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter des langues"
              },
              "ja-JP": {
                singular: "言語を追加"
              },
              "ko-KR": {
                singular: "언어 추가"
              },
              "pt-BR": {
                singular: "Adicionar idiomas"
              },
              "zh-CN": {
                singular: "添加语言"
              }
            }
          })
        })
      }), null == _v6 ? null : (0, _v1.jsx)(_v25.DeleteTranslationModal, {
        isDeleting: _v15,
        isPublished: _v11[_v6]?.isPublished ?? !1,
        onCancel: () => _v7(null),
        onConfirm: () => _v21(_v6),
        targetLocale: _v6
      })]
    });
  }
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  async function _v51({
    baseUrl: _v0,
    where: {
      liveEventId: _v1,
      speakerProfileId: _v2
    },
    ..._v3
  }) {
    return (0, _v49.measureLatency)("deleteLiveEventSpeakerProfile", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v1}/speaker_profiles/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  async function _v52({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      liveEventId: _v3,
      speakerProfileId: _v4
    },
    ..._v5
  }) {
    return (0, _v49.measureLatency)("patchLiveEventSpeakerProfile", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v3}/speaker_profiles/${_v4}?fields=${_v1.map(_v50.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v50.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  let _v81 = _v0 => (0, _v1.jsx)(_v80.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.348 10.41a11.002 11.002 0 0 1 10-6.41c4.438 0 8.26 2.63 9.999 6.41a3.807 3.807 0 0 1 0 3.18 11.002 11.002 0 0 1-10 6.41 11.002 11.002 0 0 1-10-6.41 3.808 3.808 0 0 1 0-3.18ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
      fill: "currentColor"
    })
  });
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  async function _v89({
    baseUrl: _v0,
    where: {
      personProfileId: _v1
    },
    ..._v2
  }) {
    return (0, _v49.measureLatency)("deletePersonProfile", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v1}`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  async function _v90({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      personProfileId: _v3
    },
    ..._v4
  }) {
    return (0, _v49.measureLatency)("patchPersonProfile", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v3}?fields=${_v1.map(_v50.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v50.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  async function _v91({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v49.measureLatency)("getUserPersonProfiles", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/person_profiles?${(0, _v50.searchQueryString)(_v3)}&fields=${_v1.map(_v50.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  async function _v92({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v49.measureLatency)("postUserPersonProfiles", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/person_profiles?fields=${_v1.map(_v50.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v50.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  var _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0);
  async function _v106({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      personProfileId: _v3,
      pictureId: _v4
    },
    ..._v5
  }) {
    return (0, _v49.measureLatency)("patchPersonProfilePicture", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v3}/pictures/${_v4}?fields=${_v1.map(_v50.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v50.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  async function _v107({
    baseUrl: _v0,
    select: _v1,
    where: {
      personProfileId: _v2
    },
    ..._v3
  }) {
    return (0, _v49.measureLatency)("postPersonProfilePictures", "POST", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v2}/pictures?fields=${_v1.map(_v50.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST"
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  var _v108 = _v0.i(0),
    _v109 = _v0.i(0);
  let _v110 = ["uri", "link", "baseLink"];
  async function _v111({
    baseUrl: _v0,
    headers: _v1,
    personProfileId: _v2,
    upload: _v3,
    activate: _v4 = !0
  }) {
    let _v5 = await _v107({
      baseUrl: _v0,
      headers: _v1,
      where: {
        personProfileId: _v2
      },
      select: _v110
    });
    if (!_v5?.link) throw new _v109.LiveError("Thumbnail upload link missing in create response.", {
      code: _v108.ELiveErrorCode.API_ERROR
    });
    let _v6 = await fetch(_v5.link, {
      method: "PUT",
      body: _v3.body,
      headers: {
        "Content-Type": _v3.contentType
      }
    });
    if (!_v6.ok) throw new _v50.NetworkError("Thumbnail upload failed.", _v6.status, _v6);
    let _v7 = _v5.uri.split("/").pop() ?? "";
    if ("" === _v7) throw new _v109.LiveError("Could not resolve picture uid from created picture.", {
      code: _v108.ELiveErrorCode.API_ERROR
    });
    return _v4 && (await _v106({
      baseUrl: _v0,
      headers: _v1,
      where: {
        personProfileId: _v2,
        pictureId: _v7
      },
      select: ["uri", "active"],
      variables: {
        active: !0
      }
    })), {
      picture: _v5,
      pictureId: _v7
    };
  }
  let _v112 = ({
    title: _v0,
    body: _v1,
    confirmLabel: _v2,
    cancelLabel: _v3,
    isConfirmLoading: _v4 = !1,
    confirmVariant: _v5 = "destructive",
    onCancel: _v6,
    onConfirm: _v7
  }) => (0, _v1.jsxs)(_v63.Modal, {
    isOpen: !0,
    onClose: _v6,
    children: [(0, _v1.jsx)(_v68.ModalOverlay, {}), (0, _v1.jsxs)(_v65.ModalContent, {
      children: [(0, _v1.jsx)(_v67.ModalHeader, {
        children: _v0
      }), (0, _v1.jsx)(_v64.ModalBody, {
        children: _v1
      }), (0, _v1.jsxs)(_v66.ModalFooter, {
        children: [(0, _v1.jsx)(_v3.Button, {
          onClick: _v6,
          variant: "tertiary",
          children: _v3 ?? (0, _v5.translate)({
            singular: "Cancel",
            dictionary: {
              es: {
                singular: "Cancelar"
              },
              "de-DE": {
                singular: "Abbrechen"
              },
              "fr-FR": {
                singular: "Annuler"
              },
              "ja-JP": {
                singular: "キャンセル"
              },
              "ko-KR": {
                singular: "취소"
              },
              "pt-BR": {
                singular: "Cancelar"
              },
              "zh-CN": {
                singular: "取消"
              }
            }
          })
        }), (0, _v1.jsx)(_v3.Button, {
          isLoading: _v4,
          onClick: _v7,
          variant: _v5,
          children: _v2 ?? (0, _v5.translate)({
            singular: "Delete",
            dictionary: {
              es: {
                singular: "Eliminar"
              },
              "de-DE": {
                singular: "Löschen"
              },
              "fr-FR": {
                singular: "Supprimer"
              },
              "ja-JP": {
                singular: "削除"
              },
              "ko-KR": {
                singular: "삭제"
              },
              "pt-BR": {
                singular: "Excluir"
              },
              "zh-CN": {
                singular: "删除"
              }
            }
          })
        })]
      })]
    })]
  });
  var _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0);
  function _v119({
    image: _v0,
    isOpen: _v1,
    onDismiss: _v2,
    onSaved: _v3
  }) {
    let [_v4, _v5] = (0, _v9.useState)(),
      [_v6, _v7] = (0, _v9.useState)(50),
      {
        width: _v8
      } = (0, _v118.useWindowSize)(),
      _v9 = (0, _v9.useRef)(null),
      _v10 = (0, _v115.useBreakpointValue)({
        base: 160,
        md: 200
      }) || 200,
      _v11 = (0, _v9.useMemo)(() => _v4 ? 100 * _v10 / Math.min(_v4.naturalHeight, _v4.naturalWidth) : 0, [_v10, _v4]);
    return (0, _v9.useEffect)(() => {
      let _v0 = !1,
        _v1 = new FileReader();
      return _v1.onload = () => {
        if (_v0 || "string" != typeof _v1.result) return;
        let _v0 = new Image();
        _v0.onload = () => {
          _v0 || _v5(_v0);
        }, _v0.src = _v1.result;
      }, _v1.readAsDataURL(_v0), () => {
        _v0 = !0;
      };
    }, [_v0]), (0, _v1.jsxs)(_v63.Modal, {
      closeOnOverlayClick: !1,
      size: "lg",
      isCentered: !0,
      isOpen: _v1,
      onClose: _v2,
      children: [(0, _v1.jsx)(_v68.ModalOverlay, {}), (0, _v1.jsxs)(_v65.ModalContent, {
        children: [(0, _v1.jsx)(_v67.ModalHeader, {
          children: (0, _v5.translate)({
            singular: "Upload speaker photo",
            dictionary: {
              es: {
                singular: "Subir foto del ponente"
              },
              "de-DE": {
                singular: "Sprecherfoto hochladen"
              },
              "fr-FR": {
                singular: "Téléverser la photo de l'intervenant"
              },
              "ja-JP": {
                singular: "スピーカーの写真をアップロード"
              },
              "ko-KR": {
                singular: "발표자 사진 업로드"
              },
              "pt-BR": {
                singular: "Carregar foto do palestrante"
              },
              "zh-CN": {
                singular: "上传演讲者照片"
              }
            }
          })
        }), (0, _v1.jsx)(_v64.ModalBody, {
          px: 0,
          display: "flex",
          flexDirection: "column",
          gap: "md",
          children: _v4 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v116.ImageCrop, {
              ref: _v9,
              image: _v4,
              zoomRatio: (_v6 + _v11) / 100,
              imageCropCircleDiameter: _v10,
              windowWidth: _v8,
              cropShape: "square"
            }), (0, _v1.jsx)(_v117.ImageCropSlider, {
              value: _v6,
              onChange: _v7
            })]
          }) : (0, _v1.jsx)(_v15.Flex, {
            align: "center",
            justify: "center",
            h: {
              base: (0, _v16.rem)(366),
              md: (0, _v16.rem)(284)
            },
            children: (0, _v1.jsx)(_v114.Spinner, {
              size: "md"
            })
          })
        }), (0, _v1.jsxs)(_v66.ModalFooter, {
          justifyContent: "flex-end",
          children: [(0, _v1.jsx)(_v3.Button, {
            onClick: _v2,
            variant: "secondary",
            children: (0, _v5.translate)({
              singular: "Cancel",
              dictionary: {
                es: {
                  singular: "Cancelar"
                },
                "de-DE": {
                  singular: "Abbrechen"
                },
                "fr-FR": {
                  singular: "Annuler"
                },
                "ja-JP": {
                  singular: "キャンセル"
                },
                "ko-KR": {
                  singular: "취소"
                },
                "pt-BR": {
                  singular: "Cancelar"
                },
                "zh-CN": {
                  singular: "取消"
                }
              }
            })
          }), (0, _v1.jsx)(_v3.Button, {
            isDisabled: !_v4,
            onClick: () => {
              let _v0 = _v9.current?.calculateCropSize();
              _v0 && _v3({
                x: _v0.xMin,
                y: _v0.yMin,
                width: _v0.xMax - _v0.xMin,
                height: _v0.yMax - _v0.yMin
              });
            },
            variant: "primary",
            children: (0, _v5.translate)({
              singular: "Save",
              dictionary: {
                es: {
                  singular: "Guardar"
                },
                "de-DE": {
                  singular: "Speichern"
                },
                "fr-FR": {
                  singular: "Enregistrer"
                },
                "ja-JP": {
                  singular: "保存"
                },
                "ko-KR": {
                  singular: "저장"
                },
                "pt-BR": {
                  singular: "Salvar"
                },
                "zh-CN": {
                  singular: "保存"
                }
              }
            })
          })]
        })]
      })]
    });
  }
  function _v120({
    id: _v0,
    fileName: _v1,
    fileSize: _v2,
    previewSrc: _v3,
    onCropSaved: _v4,
    onRemove: _v5
  }) {
    let [_v6, _v7] = (0, _v9.useState)(!1),
      [_v8, _v9] = (0, _v9.useState)(),
      _v10 = (0, _v18.useToast)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v113.ImageUploader, {
        id: _v0,
        label: (0, _v5.translate)({
          singular: "Upload picture",
          dictionary: {
            es: {
              singular: "Subir imagen"
            },
            "de-DE": {
              singular: "Bild hochladen"
            },
            "fr-FR": {
              singular: "Téléverser l'image"
            },
            "ja-JP": {
              singular: "画像をアップロード"
            },
            "ko-KR": {
              singular: "사진 업로드"
            },
            "pt-BR": {
              singular: "Enviar imagem"
            },
            "zh-CN": {
              singular: "上传图片"
            }
          }
        }),
        accept: "image/jpeg,image/png,image/webp,image/gif",
        acceptedFormats: (0, _v5.translate)({
          singular: "JPEG, PNG, WebP, or GIF",
          dictionary: {
            es: {
              singular: "JPEG, PNG, WebP o GIF"
            },
            "de-DE": {
              singular: "JPEG, PNG, WebP oder GIF"
            },
            "fr-FR": {
              singular: "JPEG, PNG, WebP ou GIF"
            },
            "ja-JP": {
              singular: "JPEG、PNG、WebP、またはGIF"
            },
            "ko-KR": {
              singular: "JPEG, PNG, WebP, 또는 GIF"
            },
            "pt-BR": {
              singular: "JPEG, PNG, WebP, ou GIF"
            },
            "zh-CN": {
              singular: "JPEG、PNG、WebP 或 GIF"
            }
          }
        }),
        fileName: _v1,
        fileSize: _v2,
        previewSrc: _v3,
        status: _v3 ? "uploaded" : "default",
        helperText: (0, _v5.translate)({
          singular: "Max size 2MB",
          dictionary: {
            es: {
              singular: "Tamaño máximo 2 MB"
            },
            "de-DE": {
              singular: "Max. Größe 2 MB"
            },
            "fr-FR": {
              singular: "Taille max 2MB"
            },
            "ja-JP": {
              singular: "最大サイズ 2MB"
            },
            "ko-KR": {
              singular: "최대 크기 2MB"
            },
            "pt-BR": {
              singular: "Tamanho máximo 2MB"
            },
            "zh-CN": {
              singular: "最大 2MB"
            }
          }
        }),
        size: "xs",
        onRemove: _v5,
        onSelect: _v0 => {
          if (0 === _v0.length) return;
          let _v1 = _v0[0];
          _v1.size > 0 ? _v10({
            status: "error",
            duration: 0,
            title: (0, _v5.translate)({
              singular: "Your file can’t be uploaded because it exceeds the size limit of {FILE_SIZE_LIMIT}MB",
              replacements: {
                FILE_SIZE_LIMIT: 2
              },
              dictionary: {
                es: {
                  singular: "Tu archivo no se puede subir porque excede el límite de {FILE_SIZE_LIMIT}MB"
                },
                "de-DE": {
                  singular: "Ihre Datei kann nicht hochgeladen werden, da sie die Größengrenze von {FILE_SIZE_LIMIT}MB überschreitet"
                },
                "fr-FR": {
                  singular: "Votre fichier ne peut pas être téléchargé car il dépasse la taille maximale autorisée de {FILE_SIZE_LIMIT}MB"
                },
                "ja-JP": {
                  singular: "ファイルをアップロードできません。{FILE_SIZE_LIMIT}MBのサイズ制限を超えています"
                },
                "ko-KR": {
                  singular: "{FILE_SIZE_LIMIT}MB의 크기 제한을 초과하여 파일을 업로드할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Seu arquivo não pode ser enviado porque excede o limite de tamanho de {FILE_SIZE_LIMIT}MB"
                },
                "zh-CN": {
                  singular: "您的文件无法上传，因为其超过了 {FILE_SIZE_LIMIT}MB 的大小限制"
                }
              }
            })
          }) : (_v9(_v1), _v7(!0));
        }
      }), _v8 ? (0, _v1.jsx)(_v119, {
        image: _v8,
        isOpen: _v6,
        onDismiss: () => {
          _v7(!1), _v9(void 0);
        },
        onSaved: _v0 => {
          _v8 && _v4(_v8, _v0), _v7(!1), _v9(void 0);
        }
      }) : null]
    });
  }
  let _v121 = async (_v0, _v1) => {
    try {
      let _v0 = await createImageBitmap(_v0),
        _v1 = document.createElement("canvas");
      _v1.width = 48, _v1.height = 48;
      let _v2 = _v1.getContext("2d");
      if (!_v2) return _v0.close(), URL.createObjectURL(_v0);
      _v2.drawImage(_v0, _v1.x, _v1.y, _v1.width, _v1.height, 0, 0, 48, 48), _v0.close();
      let _v3 = await new Promise(_v0 => _v1.toBlob(_v0));
      return URL.createObjectURL(_v3 ?? _v0);
    } catch {
      return URL.createObjectURL(_v0);
    }
  };
  function _v122({
    initialSpeaker: _v0,
    isOpen: _v1,
    mode: _v2,
    speakerSection: _v3,
    onClose: _v4,
    onSaved: _v5,
    onSavedAndTranslate: _v6
  }) {
    let [_v7, _v8] = (0, _v9.useState)(_v0),
      [_v9, _v10] = (0, _v9.useState)(!1),
      [_v11, _v12] = (0, _v9.useState)(null),
      [_v13, _v14] = (0, _v9.useState)(null),
      _v15 = (0, _v9.useRef)(!1),
      [_v16, _v17] = (0, _v9.useState)(!1),
      _v18 = (0, _v94.useSessionOwnerId)(),
      {
        baseUrl: _v19,
        jwt: _v20
      } = (0, _v53.useGctlConfig)(),
      _v21 = (0, _v18.useToast)(),
      {
        trackSingleEventCustomizationSpeakerSaved: _v22
      } = (0, _v23.useSingleEventCustomizationTracking)(),
      [_v23, {
        data: _v24,
        error: _v25,
        loading: _v26
      }] = function () {
        let {
            baseUrl: _v0,
            jwt: _v1,
            xVimeoPage: _v2,
            locale: _v3
          } = (0, _v53.useGctlConfig)(),
          [_v4, _v5] = (0, _v86.useInternalState)();
        return [(0, _v9.useCallback)(async _v0 => {
          _v5({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v92({
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
      }(),
      [_v27, {
        data: _v28,
        error: _v29,
        loading: _v30
      }] = function () {
        let {
            mutate: _v0
          } = (0, _v88.useSWRConfig)(),
          {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v53.useGctlConfig)(),
          [_v5, _v6] = (0, _v86.useInternalState)();
        return [(0, _v9.useCallback)(async _v0 => {
          _v6({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v0(`/person_profiles/${_v0.where.personProfileId}${(0, _v86.serializeQuery)(_v0)}`, _v90({
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
      }(),
      _v31 = _v0 => {
        _v21({
          status: "error",
          duration: 0,
          title: (0, _v56.getErrorToastTitle)(_v0, (0, _v5.translate)({
            singular: "Something went wrong saving, please check the input blanks and try again.",
            dictionary: {
              es: {
                singular: "Se produjo un error al guardar, por favor revise los campos y vuelva a intentarlo."
              },
              "de-DE": {
                singular: "Beim Speichern ist ein Fehler aufgetreten. Bitte überprüfen Sie die Eingabefelder und versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Une erreur est survenue lors de l'enregistrement, veuillez vérifier les champs laissés vides et réessayer."
              },
              "ja-JP": {
                singular: "保存中に問題が発生しました。入力欄をご確認のうえ、もう一度お試しください。"
              },
              "ko-KR": {
                singular: "저장하는 동안 문제가 발생했습니다. 입력란을 확인한 후 다시 시도하세요."
              },
              "pt-BR": {
                singular: "Ocorreu um erro ao salvar, por favor, verifique os campos de entrada e tente novamente."
              },
              "zh-CN": {
                singular: "保存时发生错误，请检查输入项并重试。"
              }
            }
          }))
        });
      },
      _v32 = (0, _v9.useEffectEvent)(async _v0 => {
        if (_v11 && null != _v19) try {
          await _v111({
            baseUrl: _v19,
            headers: {
              Authorization: null != _v20 ? `jwt ${_v20}` : "",
              "Content-Type": "application/json"
            },
            personProfileId: _v0,
            upload: {
              body: _v11.file,
              contentType: _v11.file.type
            }
          });
        } catch (_v0) {
          _v21({
            status: "error",
            duration: 0,
            title: (0, _v56.getErrorToastTitle)(_v0, (0, _v5.translate)({
              singular: "Your speaker was saved, but the photo failed to upload.",
              dictionary: {
                es: {
                  singular: "El orador se guardó, pero no se pudo subir la foto."
                },
                "de-DE": {
                  singular: "Ihr Sprecher wurde gespeichert, aber das Foto konnte nicht hochgeladen werden."
                },
                "fr-FR": {
                  singular: "Votre intervenant a été enregistré, mais la photo n'a pas pu être téléversée."
                },
                "ja-JP": {
                  singular: "スピーカーは保存されましたが、写真のアップロードに失敗しました。"
                },
                "ko-KR": {
                  singular: "연사가 저장되었지만, 사진 업로드에 실패했습니다."
                },
                "pt-BR": {
                  singular: "Seu palestrante foi salvo, mas a foto não pôde ser enviada."
                },
                "zh-CN": {
                  singular: "您的演讲者已保存，但照片上传失败。"
                }
              }
            }))
          });
        }
        _v22({
          speakerAction: "add" === _v2 ? "created" : "edited",
          speakerSection: "add" === _v2 ? _v3 ?? null : null
        }), _v5(_v0);
        try {
          _v15.current && (await _v6?.(_v0));
        } finally {
          _v4();
        }
      }),
      _v33 = _v24 ?? _v28,
      _v34 = _v26 || _v30 || null != _v33,
      _v35 = _v7.name !== _v0.name || _v7.role !== _v0.role || _v7.description !== _v0.description || null !== _v11;
    (0, _v9.useEffect)(() => {
      _v33 && _v32(_v33.id);
    }, [_v33]);
    let _v36 = _v25 ?? _v29,
      _v37 = (0, _v9.useRef)(null),
      _v38 = (0, _v9.useEffectEvent)(_v0 => _v31(_v0));
    (0, _v9.useEffect)(() => {
      null !== _v36 && _v37.current !== _v36 && (_v37.current = _v36, _v38(_v36));
    }, [_v36]);
    let _v39 = (0, _v9.useMemo)(() => null !== _v11 ? URL.createObjectURL(_v11.file) : null, [_v11]);
    (0, _v9.useEffect)(() => () => {
      null !== _v39 && URL.revokeObjectURL(_v39);
    }, [_v39]), (0, _v9.useEffect)(() => {
      if (null === _v11) return;
      let _v0 = null,
        _v1 = !1;
      return _v121(_v11.file, _v11.crop).then(_v0 => {
        _v1 ? URL.revokeObjectURL(_v0) : (_v0 = _v0, _v14(_v0));
      }), () => {
        _v1 = !0, null !== _v0 && URL.revokeObjectURL(_v0);
      };
    }, [_v11]);
    let _v40 = (_v0, _v1) => {
        "name" === _v0 && "" !== _v1.trim() && _v10(!1), _v8({
          ..._v7,
          [_v0]: _v1
        });
      },
      _v41 = (_v0 = !1) => {
        if (_v34) return;
        let _v1 = _v7.name.trim();
        if ("" === _v1) return void _v10(!0);
        _v15.current = _v0;
        let _v2 = {
          name: _v1,
          role: _v7.role.trim() || null,
          description: _v7.description.trim() || null,
          ...(null !== _v11 ? {
            avatarCrop: _v11.crop
          } : {})
        };
        if ("edit" === _v2) {
          let _v0 = _v0.id;
          return null == _v0 ? void _v31(null) : void _v27({
            select: ["id"],
            where: {
              personProfileId: _v0
            },
            variables: _v2
          });
        }
        _v18 <= 0 ? _v31(null) : _v23({
          select: ["id"],
          where: {
            userId: _v18
          },
          variables: _v2
        });
      };
    return (0, _v1.jsxs)(_v63.Modal, {
      closeOnOverlayClick: !1,
      size: "lg",
      isCentered: !0,
      isOpen: _v1,
      onClose: _v4,
      children: [(0, _v1.jsx)(_v68.ModalOverlay, {}), (0, _v1.jsxs)(_v65.ModalContent, {
        children: [(0, _v1.jsx)(_v67.ModalHeader, {
          children: "edit" === _v2 ? (0, _v5.translate)({
            singular: "Edit speaker",
            dictionary: {
              es: {
                singular: "Editar orador"
              },
              "de-DE": {
                singular: "Redner bearbeiten"
              },
              "fr-FR": {
                singular: "Modifier l'intervenant"
              },
              "ja-JP": {
                singular: "スピーカーを編集"
              },
              "ko-KR": {
                singular: "발표자 편집"
              },
              "pt-BR": {
                singular: "Editar palestrante"
              },
              "zh-CN": {
                singular: "编辑演讲人"
              }
            }
          }) : (0, _v5.translate)({
            singular: "New speaker",
            dictionary: {
              es: {
                singular: "Nuevo ponente"
              },
              "de-DE": {
                singular: "Neuer Sprecher"
              },
              "fr-FR": {
                singular: "Nouvel intervenant"
              },
              "ja-JP": {
                singular: "新しいスピーカー"
              },
              "ko-KR": {
                singular: "새 스피커"
              },
              "pt-BR": {
                singular: "Novo palestrante"
              },
              "zh-CN": {
                singular: "新增演讲者"
              }
            }
          })
        }), (0, _v1.jsx)(_v64.ModalBody, {
          display: "flex",
          flexDirection: "column",
          children: (0, _v1.jsxs)(_v15.Flex, {
            gap: "xl",
            justify: "space-between",
            children: [(0, _v1.jsxs)(_v15.Flex, {
              direction: "column",
              flex: "1",
              gap: "md",
              minWidth: 0,
              children: [(0, _v1.jsx)(_v15.Flex, {
                direction: "column",
                children: (0, _v1.jsxs)(_v46.FormControl, {
                  isInvalid: _v9,
                  children: [(0, _v1.jsx)(_v47.FormLabel, {
                    htmlFor: "speaker-name",
                    children: (0, _v1.jsx)(_v17.Text, {
                      as: "span",
                      variant: "heading-sm",
                      children: (0, _v5.translate)({
                        singular: "Name",
                        dictionary: {
                          es: {
                            singular: "Nombre"
                          },
                          "fr-FR": {
                            singular: "Nom"
                          },
                          "ja-JP": {
                            singular: "名前"
                          },
                          "ko-KR": {
                            singular: "이름"
                          },
                          "pt-BR": {
                            singular: "Nome"
                          },
                          "zh-CN": {
                            singular: "姓名"
                          }
                        }
                      })
                    })
                  }), (0, _v1.jsx)(_v98.Input, {
                    id: "speaker-name",
                    isInvalid: _v9,
                    maxLength: 120,
                    onChange: _v0 => _v40("name", _v0.target.value),
                    placeholder: (0, _v5.translate)({
                      singular: "Add name",
                      dictionary: {
                        es: {
                          singular: "Agregar nombre"
                        },
                        "de-DE": {
                          singular: "Name hinzufügen"
                        },
                        "fr-FR": {
                          singular: "Ajouter un nom"
                        },
                        "ja-JP": {
                          singular: "名前を追加"
                        },
                        "ko-KR": {
                          singular: "이름 추가"
                        },
                        "pt-BR": {
                          singular: "Adicionar nome"
                        },
                        "zh-CN": {
                          singular: "添加姓名"
                        }
                      }
                    }),
                    value: _v7.name
                  }), (0, _v1.jsx)(_v95.AnimatePresence, {
                    children: _v9 ? (0, _v1.jsx)(_v15.Flex, {
                      as: _v96.motion.div,
                      initial: {
                        height: 0,
                        opacity: 0
                      },
                      animate: {
                        height: "auto",
                        opacity: 1
                      },
                      exit: {
                        height: 0,
                        opacity: 0
                      },
                      transition: {
                        duration: "2",
                        type: "spring",
                        stiffness: "600",
                        damping: "32"
                      },
                      overflow: "hidden",
                      mt: "xs",
                      children: (0, _v1.jsx)(_v97.FormErrorMessage, {
                        variant: "error",
                        fontSize: "body-sm",
                        lineHeight: "body-sm",
                        mt: "0",
                        children: (0, _v5.translate)({
                          singular: "Required",
                          dictionary: {
                            es: {
                              singular: "Requerido"
                            },
                            "de-DE": {
                              singular: "Erforderlich"
                            },
                            "fr-FR": {
                              singular: "Obligatoire"
                            },
                            "ja-JP": {
                              singular: "必須"
                            },
                            "ko-KR": {
                              singular: "필수"
                            },
                            "pt-BR": {
                              singular: "Obrigatório"
                            },
                            "zh-CN": {
                              singular: "必填"
                            }
                          }
                        })
                      })
                    }) : null
                  })]
                })
              }), (0, _v1.jsxs)(_v15.Flex, {
                direction: "column",
                children: [(0, _v1.jsx)(_v47.FormLabel, {
                  htmlFor: "speaker-role",
                  children: (0, _v1.jsxs)(_v15.Flex, {
                    as: "span",
                    align: "center",
                    gap: (0, _v16.rem)(4),
                    children: [(0, _v1.jsx)(_v17.Text, {
                      as: "span",
                      variant: "heading-sm",
                      children: (0, _v5.translate)({
                        singular: "Role",
                        dictionary: {
                          es: {
                            singular: "Rol"
                          },
                          "de-DE": {
                            singular: "Rolle"
                          },
                          "fr-FR": {
                            singular: "Rôle"
                          },
                          "ja-JP": {
                            singular: "肩書き"
                          },
                          "ko-KR": {
                            singular: "역할"
                          },
                          "pt-BR": {
                            singular: "Função"
                          },
                          "zh-CN": {
                            singular: "职位"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v24.Tooltip, {
                      label: (0, _v5.translate)({
                        singular: "Role appears on the event page",
                        dictionary: {
                          es: {
                            singular: "El rol aparece en la página del evento"
                          },
                          "de-DE": {
                            singular: "Rolle erscheint auf der Veranstaltungsseite"
                          },
                          "fr-FR": {
                            singular: "Le rôle apparaît sur la page de l'événement"
                          },
                          "ja-JP": {
                            singular: "肩書きはイベントページに表示されます"
                          },
                          "ko-KR": {
                            singular: "역할은 이벤트 페이지에 표시됩니다"
                          },
                          "pt-BR": {
                            singular: "A função aparece na página do evento"
                          },
                          "zh-CN": {
                            singular: "职位会显示在活动页面上"
                          }
                        }
                      }),
                      children: (0, _v1.jsx)(_v104.InfoCircle, {
                        boxSize: (0, _v16.rem)(16)
                      })
                    })]
                  })
                }), (0, _v1.jsx)(_v98.Input, {
                  id: "speaker-role",
                  maxLength: 120,
                  onChange: _v0 => _v40("role", _v0.target.value),
                  placeholder: (0, _v5.translate)({
                    singular: "Add role",
                    dictionary: {
                      es: {
                        singular: "Agregar rol"
                      },
                      "de-DE": {
                        singular: "Rolle hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter un rôle"
                      },
                      "ja-JP": {
                        singular: "肩書きを追加"
                      },
                      "ko-KR": {
                        singular: "역할 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar função"
                      },
                      "zh-CN": {
                        singular: "添加职位"
                      }
                    }
                  }),
                  value: _v7.role
                })]
              }), (0, _v1.jsxs)(_v15.Flex, {
                direction: "column",
                children: [(0, _v1.jsx)(_v47.FormLabel, {
                  htmlFor: "speaker-photo",
                  children: (0, _v1.jsxs)(_v15.Flex, {
                    as: "span",
                    align: "center",
                    gap: (0, _v16.rem)(4),
                    children: [(0, _v1.jsx)(_v17.Text, {
                      as: "span",
                      variant: "heading-sm",
                      children: (0, _v5.translate)({
                        singular: "Photo",
                        dictionary: {
                          es: {
                            singular: "Foto"
                          },
                          "ja-JP": {
                            singular: "写真"
                          },
                          "ko-KR": {
                            singular: "사진"
                          },
                          "pt-BR": {
                            singular: "Foto"
                          },
                          "zh-CN": {
                            singular: "照片"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v24.Tooltip, {
                      label: (0, _v5.translate)({
                        singular: "Photo appears on the event page",
                        dictionary: {
                          es: {
                            singular: "La foto aparece en la página del evento"
                          },
                          "de-DE": {
                            singular: "Foto erscheint auf der Veranstaltungsseite"
                          },
                          "fr-FR": {
                            singular: "La photo apparaît sur la page de l'événement"
                          },
                          "ja-JP": {
                            singular: "写真はイベントページに表示されます"
                          },
                          "ko-KR": {
                            singular: "사진은 이벤트 페이지에 표시됩니다"
                          },
                          "pt-BR": {
                            singular: "A foto aparece na página do evento"
                          },
                          "zh-CN": {
                            singular: "照片会显示在活动页面上"
                          }
                        }
                      }),
                      children: (0, _v1.jsx)(_v104.InfoCircle, {
                        boxSize: (0, _v16.rem)(16)
                      })
                    })]
                  })
                }), (0, _v1.jsx)(_v120, {
                  id: "speaker-photo",
                  fileName: _v11?.file.name,
                  fileSize: _v11 ? (_v0 => {
                    if (_v0 < 0) return `${_v0} B`;
                    if (_v0 < 0) return `${Math.max(1, Math.round(_v0 / 0))} KB`;
                    let _v1 = _v0 / 0;
                    return _v1 < 10 ? `${_v1.toFixed(1)} MB` : `${Math.round(_v1)} MB`;
                  })(_v11.file.size) : void 0,
                  previewSrc: _v13 || _v39 || void 0,
                  onCropSaved: (_v0, _v1) => {
                    _v12({
                      file: _v0,
                      crop: _v1
                    }), _v14(null);
                  },
                  onRemove: () => {
                    _v12(null), _v14(null);
                  }
                })]
              }), (0, _v1.jsxs)(_v15.Flex, {
                direction: "column",
                children: [(0, _v1.jsx)(_v47.FormLabel, {
                  htmlFor: "speaker-description",
                  children: (0, _v1.jsxs)(_v15.Flex, {
                    as: "span",
                    align: "center",
                    gap: (0, _v16.rem)(4),
                    children: [(0, _v1.jsx)(_v17.Text, {
                      as: "span",
                      variant: "heading-sm",
                      children: (0, _v5.translate)({
                        singular: "Description",
                        dictionary: {
                          es: {
                            singular: "Descripción"
                          },
                          "de-DE": {
                            singular: "Beschreibung"
                          },
                          "ja-JP": {
                            singular: "説明"
                          },
                          "ko-KR": {
                            singular: "설명"
                          },
                          "pt-BR": {
                            singular: "Descrição"
                          },
                          "zh-CN": {
                            singular: "描述"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v24.Tooltip, {
                      label: (0, _v5.translate)({
                        singular: "Description appears on the event page",
                        dictionary: {
                          es: {
                            singular: "La descripción aparece en la página del evento"
                          },
                          "de-DE": {
                            singular: "Beschreibung erscheint auf der Veranstaltungsseite"
                          },
                          "fr-FR": {
                            singular: "La description apparaît sur la page de l'événement"
                          },
                          "ja-JP": {
                            singular: "説明はイベントページに表示されます"
                          },
                          "ko-KR": {
                            singular: "설명은 이벤트 페이지에 표시됩니다"
                          },
                          "pt-BR": {
                            singular: "A descrição aparece na página do evento"
                          },
                          "zh-CN": {
                            singular: "描述会显示在活动页面上"
                          }
                        }
                      }),
                      children: (0, _v1.jsx)(_v104.InfoCircle, {
                        boxSize: (0, _v16.rem)(16)
                      })
                    })]
                  })
                }), (0, _v1.jsx)(_v103.Textarea, {
                  id: "speaker-description",
                  minHeight: (0, _v16.rem)(120),
                  onChange: _v0 => _v40("description", _v0.target.value),
                  placeholder: (0, _v5.translate)({
                    singular: "Add description",
                    dictionary: {
                      es: {
                        singular: "Agregar descripción"
                      },
                      "de-DE": {
                        singular: "Beschreibung hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter une description"
                      },
                      "ja-JP": {
                        singular: "説明を追加"
                      },
                      "ko-KR": {
                        singular: "설명 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar descrição"
                      },
                      "zh-CN": {
                        singular: "添加描述"
                      }
                    }
                  }),
                  maxLength: 255,
                  resize: "none",
                  value: _v7.description
                })]
              })]
            }), (0, _v1.jsxs)(_v15.Flex, {
              direction: "column",
              px: "xs",
              children: [(0, _v1.jsx)(_v17.Text, {
                variant: "heading-sm",
                children: (0, _v5.translate)({
                  singular: "Preview",
                  dictionary: {
                    es: {
                      singular: "Vista previa"
                    },
                    "de-DE": {
                      singular: "Vorschau"
                    },
                    "fr-FR": {
                      singular: "Aperçu"
                    },
                    "ja-JP": {
                      singular: "プレビュー"
                    },
                    "ko-KR": {
                      singular: "미리 보기"
                    },
                    "pt-BR": {
                      singular: "Visualização"
                    },
                    "zh-CN": {
                      singular: "预览"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v105.SpeakerProfileCard, {
                name: _v7.name.trim() || "Name (required)",
                role: _v7.role,
                description: _v7.description,
                thumbnailUrl: _v39 ?? _v7.picture?.baseLink
              })]
            })]
          })
        }), (0, _v1.jsxs)(_v66.ModalFooter, {
          justifyContent: "flex-end",
          children: [(0, _v1.jsx)(_v3.Button, {
            isDisabled: _v34,
            onClick: _v4,
            variant: "secondary",
            children: (0, _v5.translate)({
              singular: "Cancel",
              dictionary: {
                es: {
                  singular: "Cancelar"
                },
                "de-DE": {
                  singular: "Abbrechen"
                },
                "fr-FR": {
                  singular: "Annuler"
                },
                "ja-JP": {
                  singular: "キャンセル"
                },
                "ko-KR": {
                  singular: "취소"
                },
                "pt-BR": {
                  singular: "Cancelar"
                },
                "zh-CN": {
                  singular: "取消"
                }
              }
            })
          }), void 0 !== _v6 ? (0, _v1.jsxs)(_v99.Menu, {
            placement: "top-end",
            children: [(0, _v1.jsx)(_v100.MenuButton, {
              as: _v3.Button,
              isDisabled: !_v35,
              isLoading: _v34,
              rightIcon: (0, _v1.jsx)(_v76.ChevronDownSmall, {}),
              variant: "primary",
              children: (0, _v5.translate)({
                singular: "Save",
                dictionary: {
                  es: {
                    singular: "Guardar"
                  },
                  "de-DE": {
                    singular: "Speichern"
                  },
                  "fr-FR": {
                    singular: "Enregistrer"
                  },
                  "ja-JP": {
                    singular: "保存"
                  },
                  "ko-KR": {
                    singular: "저장"
                  },
                  "pt-BR": {
                    singular: "Salvar"
                  },
                  "zh-CN": {
                    singular: "保存"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v102.MenuList, {
              children: [(0, _v1.jsx)(_v101.MenuItem, {
                onClick: () => _v41(),
                children: (0, _v5.translate)({
                  singular: "Save",
                  dictionary: {
                    es: {
                      singular: "Guardar"
                    },
                    "de-DE": {
                      singular: "Speichern"
                    },
                    "fr-FR": {
                      singular: "Enregistrer"
                    },
                    "ja-JP": {
                      singular: "保存"
                    },
                    "ko-KR": {
                      singular: "저장"
                    },
                    "pt-BR": {
                      singular: "Salvar"
                    },
                    "zh-CN": {
                      singular: "保存"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v101.MenuItem, {
                onClick: () => _v17(!0),
                children: (0, _v1.jsxs)(_v15.Flex, {
                  align: "center",
                  gap: "sm",
                  justify: "space-between",
                  width: "100%",
                  children: [(0, _v5.translate)({
                    singular: "Save and translate with AI",
                    dictionary: {
                      es: {
                        singular: "Guardar y traducir con IA"
                      },
                      "de-DE": {
                        singular: "Speichern und mit KI übersetzen"
                      },
                      "fr-FR": {
                        singular: "Enregistrer et traduire avec l'IA"
                      },
                      "ja-JP": {
                        singular: "保存してAIで翻訳"
                      },
                      "ko-KR": {
                        singular: "저장 및 AI로 번역"
                      },
                      "pt-BR": {
                        singular: "Salvar e traduzir com IA"
                      },
                      "zh-CN": {
                        singular: "保存并使用 AI 翻译"
                      }
                    }
                  }), (0, _v1.jsx)(_v55.CircleTip, {
                    as: "span",
                    label: (0, _v5.translate)({
                      singular: "Automatically translate changes to this speaker’s role and description into the languages enabled for each event where they appear.",
                      dictionary: {
                        es: {
                          singular: "Traducir automáticamente los cambios en el rol y la descripción de este ponente a los idiomas habilitados para cada evento en el que aparezca."
                        },
                        "de-DE": {
                          singular: "Änderungen an der Rolle und Beschreibung dieses Sprechers automatisch in die für jede Veranstaltung aktivierten Sprachen übersetzen, in denen er bzw. sie auftritt."
                        },
                        "fr-FR": {
                          singular: "Traduire automatiquement les modifications apportées au rôle et à la description de cet intervenant dans les langues activées pour chaque événement où il apparaît."
                        },
                        "ja-JP": {
                          singular: "このスピーカーの役割と説明への変更を、そのスピーカーが登場する各イベントで有効になっている言語に自動的に翻訳します。"
                        },
                        "ko-KR": {
                          singular: "이 발표자의 역할 및 설명에 대한 변경 사항을 해당 발표자가 등장하는 각 이벤트에서 활성화된 언어로 자동으로 번역합니다."
                        },
                        "pt-BR": {
                          singular: "Traduzir automaticamente as alterações no papel e na descrição deste palestrante para os idiomas habilitados em cada evento em que ele(a) aparecer."
                        },
                        "zh-CN": {
                          singular: "自动将对该演讲者的角色和简介所做的更改翻译为其出现在每个活动中所启用的语言。"
                        }
                      }
                    })
                  })]
                })
              })]
            })]
          }) : (0, _v1.jsx)(_v3.Button, {
            isDisabled: !_v35,
            isLoading: _v34,
            onClick: () => _v41(),
            variant: "primary",
            children: (0, _v5.translate)({
              singular: "Save",
              dictionary: {
                es: {
                  singular: "Guardar"
                },
                "de-DE": {
                  singular: "Speichern"
                },
                "fr-FR": {
                  singular: "Enregistrer"
                },
                "ja-JP": {
                  singular: "保存"
                },
                "ko-KR": {
                  singular: "저장"
                },
                "pt-BR": {
                  singular: "Salvar"
                },
                "zh-CN": {
                  singular: "保存"
                }
              }
            })
          })]
        })]
      }), _v16 ? (0, _v1.jsx)(_v112, {
        body: (0, _v5.translate)({
          singular: "Your changes will be saved, then the speaker's name, role and description will be translated with AI in every event they're on. Published languages update right away, and the speaker's existing translations are replaced, including ones edited by hand.",
          dictionary: {
            es: {
              singular: "Tus cambios se guardarán y, a continuación, el nombre, el cargo y la descripción del ponente se traducirán con IA en cada evento en el que participe. Los idiomas publicados se actualizarán de inmediato y las traducciones existentes del ponente serán reemplazadas, incluidas las editadas manualmente."
            },
            "de-DE": {
              singular: "Ihre Änderungen werden gespeichert, danach werden der Name, die Rolle und die Beschreibung des Sprechers in jeder Veranstaltung, an der er teilnimmt, mit KI übersetzt. Veröffentlichte Sprachen werden sofort aktualisiert, und die vorhandenen Übersetzungen des Sprechers werden ersetzt, einschließlich der manuell bearbeiteten."
            },
            "fr-FR": {
              singular: "Vos modifications seront enregistrées, puis le nom, le rôle et la description de l'intervenant seront traduits avec l'IA dans chaque événement auquel il participe. Les langues publiées sont mises à jour immédiatement, et les traductions existantes de l'intervenant sont remplacées, y compris celles modifiées manuellement."
            },
            "ja-JP": {
              singular: "変更は保存され、その後スピーカーが参加しているすべてのイベントで名前・役割・説明がAIで翻訳されます。公開済みの言語はすぐに更新され、手動で編集されたものを含め既存の翻訳は上書きされます。"
            },
            "ko-KR": {
              singular: "변경 사항이 저장된 후, 해당 발표자가 참여한 모든 이벤트에서 발표자의 이름, 직함 및 설명이 AI로 번역됩니다. 게시된 언어는 즉시 업데이트되며, 수동으로 편집된 항목을 포함해 발표자의 기존 번역이 모두 대체됩니다."
            },
            "pt-BR": {
              singular: "Suas alterações serão salvas e, em seguida, o nome, o cargo e a descrição do palestrante serão traduzidos com IA em todos os eventos em que participa. Os idiomas publicados são atualizados imediatamente, e as traduções existentes do palestrante serão substituídas, inclusive as editadas manualmente."
            },
            "zh-CN": {
              singular: "您的更改将被保存，然后该演讲者在其参与的每个活动中的姓名、角色和简介都将使用 AI 进行翻译。已发布的语言会立即更新，且该演讲者现有的翻译（包括手动编辑过的）将被替换。"
            }
          }
        }),
        confirmLabel: (0, _v5.translate)({
          singular: "Save and translate",
          dictionary: {
            es: {
              singular: "Guardar y traducir"
            },
            "de-DE": {
              singular: "Speichern und übersetzen"
            },
            "fr-FR": {
              singular: "Enregistrer et traduire"
            },
            "ja-JP": {
              singular: "保存して翻訳"
            },
            "ko-KR": {
              singular: "저장 및 번역"
            },
            "pt-BR": {
              singular: "Salvar e traduzir"
            },
            "zh-CN": {
              singular: "保存并翻译"
            }
          }
        }),
        confirmVariant: "primary",
        onCancel: () => _v17(!1),
        onConfirm: () => {
          _v17(!1), _v41(!0);
        },
        title: (0, _v5.translate)({
          singular: "Translate this speaker with AI?",
          dictionary: {
            es: {
              singular: "¿Traducir a este ponente con IA?"
            },
            "de-DE": {
              singular: "Diesen Sprecher mit KI übersetzen?"
            },
            "fr-FR": {
              singular: "Traduire cet intervenant avec l'IA ?"
            },
            "ja-JP": {
              singular: "このスピーカーをAIで翻訳しますか？"
            },
            "ko-KR": {
              singular: "이 발표자를 AI로 번역하시겠습니까?"
            },
            "pt-BR": {
              singular: "Traduzir este palestrante com IA?"
            },
            "zh-CN": {
              singular: "使用 AI 翻译此演讲者吗？"
            }
          }
        })
      }) : null]
    });
  }
  async function _v123({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      personProfileId: _v3
    },
    ..._v4
  }) {
    return (0, _v49.measureLatency)("postPersonProfileLocalizationsTranslate", "POST", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v3}/localizations/translate?fields=${_v1.map(_v50.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v50.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  let _v124 = ["results.liveEventId", "results.locale", "results.status", "results.reason"],
    _v125 = ["published", "drafted"],
    _v126 = (0, _v16.rem)(56),
    _v127 = ["id", "name", "role", "description", "pictures.baseLink", "avatarCrop"],
    _v128 = ["id", "personProfile.id", "personProfile.name", "personProfile.role", "personProfile.description", "personProfile.pictures.baseLink", "personProfile.avatarCrop"];
  function _v129({
    isOpen: _v0,
    onClose: _v1,
    eventId: _v2,
    isAiTranslationEnabled: _v3 = !1,
    onSpeakerTranslated: _v4
  }) {
    let _v5 = (() => {
        let {
            baseUrl: _v0,
            jwt: _v1,
            xVimeoPage: _v2,
            locale: _v3
          } = (0, _v53.useGctlConfig)(),
          _v4 = (0, _v18.useToast)();
        return (0, _v9.useCallback)(async (_v0, _v1) => {
          let _v2,
            _v3 = () => {
              _v4({
                isClosable: !0,
                title: (0, _v5.translate)({
                  singular: "Something went wrong. Your translations were not created.",
                  dictionary: {
                    es: {
                      singular: "Algo salió mal. No se crearon tus traducciones."
                    },
                    "de-DE": {
                      singular: "Etwas ist schiefgelaufen. Ihre Übersetzungen wurden nicht erstellt."
                    },
                    "fr-FR": {
                      singular: "Une erreur s'est produite. Vos traductions n'ont pas été créées."
                    },
                    "ja-JP": {
                      singular: "問題が発生しました。翻訳は作成されませんでした。"
                    },
                    "ko-KR": {
                      singular: "문제가 발생했습니다. 번역이 생성되지 않았습니다."
                    },
                    "pt-BR": {
                      singular: "Algo deu errado. Suas traduções não foram criadas."
                    },
                    "zh-CN": {
                      singular: "出现问题。未能创建翻译。"
                    }
                  }
                }),
                variant: "warning"
              });
            };
          try {
            ({
              results: _v2
            } = await _v123({
              baseUrl: _v0,
              headers: {
                "Content-Type": "application/json",
                Authorization: null != _v1 && "" !== _v1 ? `jwt ${_v1}` : "",
                "Vimeo-Page": `${_v2}`,
                "Accept-Language": _v3 ?? "en"
              },
              select: _v124,
              where: {
                personProfileId: _v0
              },
              variables: null != _v1 ? {
                liveEventId: _v1
              } : void 0
            }));
          } catch {
            _v3();
            return;
          }
          if (!Array.isArray(_v2)) return void _v3();
          let _v4 = _v2.filter(({
              status: _v0
            }) => "failed" === _v0).length,
            _v5 = new Set(_v2.filter(({
              status: _v0
            }) => _v125.includes(_v0)).map(_v0 => _v0.liveEventId)).size,
            _v6 = _v2.filter(({
              reason: _v0
            }) => "too_many_events" === _v0).length;
          _v5 > 0 && _v4({
            isClosable: !0,
            title: (0, _v5.translate)({
              singular: "Speaker translated in {COUNT} event",
              plural: "Speaker translated in {COUNT} events",
              count: _v5,
              replacements: {
                COUNT: _v5
              },
              dictionary: {
                es: {
                  singular: "Ponente traducido en {COUNT} evento",
                  plural: "Ponente traducido en {COUNT} eventos"
                },
                "de-DE": {
                  singular: "Sprecher in {COUNT} Veranstaltung übersetzt",
                  plural: "Sprecher in {COUNT} Veranstaltungen übersetzt"
                },
                "fr-FR": {
                  singular: "Intervenant traduit dans {COUNT} événement",
                  plural: "Intervenant traduit dans {COUNT} événements"
                },
                "ja-JP": {
                  singular: "スピーカーは{COUNT}件のイベントで翻訳されました",
                  plural: "スピーカーは{COUNT}件のイベントで翻訳されました"
                },
                "ko-KR": {
                  singular: "{COUNT}개의 이벤트에서 발표자가 번역되었습니다.",
                  plural: "{COUNT}개의 이벤트에서 발표자가 번역되었습니다."
                },
                "pt-BR": {
                  singular: "Palestrante traduzido em {COUNT} evento",
                  plural: "Palestrante traduzido em {COUNT} eventos"
                },
                "zh-CN": {
                  singular: "已在 {COUNT} 个活动中翻译该演讲者",
                  plural: "已在 {COUNT} 个活动中翻译该演讲者"
                }
              }
            }),
            variant: "success"
          }), _v4 > 0 && _v4({
            isClosable: !0,
            title: (0, _v5.translate)({
              singular: '{COUNT} translation could not be saved. Edit the speaker and choose "Save and translate with AI" to retry.',
              plural: '{COUNT} translations could not be saved. Edit the speaker and choose "Save and translate with AI" to retry.',
              count: _v4,
              replacements: {
                COUNT: _v4
              },
              dictionary: {
                es: {
                  singular: '{COUNT} traducción no se pudo guardar. Edita al ponente y elige "Guardar y traducir con IA" para reintentar.',
                  plural: '{COUNT} traducciones no se pudieron guardar. Edita al ponente y elige "Guardar y traducir con IA" para reintentar.'
                },
                "de-DE": {
                  singular: '{COUNT} Übersetzung konnte nicht gespeichert werden. Bearbeite den Sprecher und wähle "Speichern und mit KI übersetzen", um es erneut zu versuchen.',
                  plural: '{COUNT} Übersetzungen konnten nicht gespeichert werden. Bearbeite den Sprecher und wähle "Speichern und mit KI übersetzen", um es erneut zu versuchen.'
                },
                "fr-FR": {
                  singular: "{COUNT} traduction n'a pas pu être enregistrée. Modifiez l'intervenant et choisissez \"Enregistrer et traduire avec l'IA\" pour réessayer.",
                  plural: "{COUNT} traductions n'ont pas pu être enregistrées. Modifiez l'intervenant et choisissez \"Enregistrer et traduire avec l'IA\" pour réessayer."
                },
                "ja-JP": {
                  singular: '{COUNT}件の翻訳を保存できませんでした。スピーカーを編集して"保存してAIで翻訳"を選択して再試行してください。',
                  plural: '{COUNT}件の翻訳を保存できませんでした。スピーカーを編集して"保存してAIで翻訳"を選択して再試行してください。'
                },
                "ko-KR": {
                  singular: '{COUNT}개의 번역을 저장하지 못했습니다. 발표자를 편집한 다음 재시도하려면 "저장 및 AI로 번역"을 선택하세요.',
                  plural: '{COUNT}개의 번역을 저장하지 못했습니다. 발표자를 편집한 다음 재시도하려면 "저장 및 AI로 번역"을 선택하세요.'
                },
                "pt-BR": {
                  singular: '{COUNT} tradução não pôde ser salva. Edite o palestrante e escolha "Salvar e traduzir com IA" para tentar novamente.',
                  plural: '{COUNT} traduções não puderam ser salvas. Edite o palestrante e escolha "Salvar e traduzir com IA" para tentar novamente.'
                },
                "zh-CN": {
                  singular: '{COUNT} 个翻译未能保存。编辑该演讲者并选择 "保存并使用 AI 翻译" 以重试。',
                  plural: '{COUNT} 个翻译未能保存。编辑该演讲者并选择 "保存并使用 AI 翻译" 以重试。'
                }
              }
            }),
            variant: "warning"
          }), _v6 > 0 && _v4({
            isClosable: !0,
            title: (0, _v5.translate)({
              singular: "{COUNT} more event was not updated. Translate this speaker from that event’s settings.",
              plural: "{COUNT} more events were not updated. Translate this speaker from those events’ settings.",
              count: _v6,
              replacements: {
                COUNT: _v6
              },
              dictionary: {
                es: {
                  singular: "{COUNT} evento más no se actualizó. Traduce a este ponente desde la configuración de ese evento.",
                  plural: "{COUNT} eventos más no se actualizaron. Traduce a este ponente desde la configuración de esos eventos."
                },
                "de-DE": {
                  singular: "{COUNT} weitere Veranstaltung wurde nicht aktualisiert. Übersetze diesen Sprecher in den Einstellungen dieser Veranstaltung.",
                  plural: "{COUNT} weitere Veranstaltungen wurden nicht aktualisiert. Übersetze diesen Sprecher in den Einstellungen dieser Veranstaltungen."
                },
                "fr-FR": {
                  singular: "{COUNT} autre événement n'a pas été mis à jour. Traduisez cet intervenant depuis les paramètres de cet événement.",
                  plural: "{COUNT} autres événements n'ont pas été mis à jour. Traduisez cet intervenant depuis les paramètres de ces événements."
                },
                "ja-JP": {
                  singular: "{COUNT}件のイベントは更新されませんでした。該当イベントの設定からこのスピーカーを翻訳してください。",
                  plural: "{COUNT}件のイベントは更新されませんでした。該当イベントの設定からこのスピーカーを翻訳してください。"
                },
                "ko-KR": {
                  singular: "{COUNT}개의 추가 이벤트가 업데이트되지 않았습니다. 해당 이벤트의 설정에서 이 발표자를 번역하세요.",
                  plural: "{COUNT}개의 추가 이벤트가 업데이트되지 않았습니다. 해당 이벤트들의 설정에서 이 발표자를 번역하세요."
                },
                "pt-BR": {
                  singular: "{COUNT} outro evento não foi atualizado. Traduza este palestrante nas configurações desse evento.",
                  plural: "{COUNT} outros eventos não foram atualizados. Traduza este palestrante nas configurações desses eventos."
                },
                "zh-CN": {
                  singular: "另有 {COUNT} 个活动未更新。请从该活动的设置中翻译此演讲者。",
                  plural: "另有 {COUNT} 个活动未更新。请从那些活动的设置中翻译此演讲者。"
                }
              }
            }),
            variant: "warning"
          }), _v5 > 0 || _v4 > 0 || _v6 > 0 || _v4({
            isClosable: !0,
            title: (0, _v5.translate)({
              singular: "This speaker isn't on any event with translations to update.",
              dictionary: {
                es: {
                  singular: "Este ponente no participa en ningún evento con traducciones para actualizar."
                },
                "de-DE": {
                  singular: "Dieser Sprecher ist bei keiner Veranstaltung, bei der Übersetzungen aktualisiert werden könnten."
                },
                "fr-FR": {
                  singular: "Cet intervenant n'est présent dans aucun événement avec des traductions à mettre à jour."
                },
                "ja-JP": {
                  singular: "このスピーカーは、翻訳を更新するイベントに含まれていません。"
                },
                "ko-KR": {
                  singular: "이 발표자는 번역을 업데이트할 이벤트에 등록되어 있지 않습니다."
                },
                "pt-BR": {
                  singular: "Este palestrante não está em nenhum evento com traduções para atualizar."
                },
                "zh-CN": {
                  singular: "该演讲者未出现在任何需要更新翻译的活动中。"
                }
              }
            }),
            variant: "warning"
          });
        }, [_v0, _v1, _v2, _v3, _v4]);
      })(),
      _v6 = _v2 > 0,
      _v7 = (0, _v94.useSessionOwnerId)(),
      _v8 = (0, _v18.useToast)(),
      {
        trackSingleEventCustomizationSpeakerVisibilityChanged: _v9,
        trackSingleEventCustomizationSpeakerDeleted: _v10
      } = (0, _v23.useSingleEventCustomizationTracking)(),
      [_v11, _v12] = (0, _v9.useState)(null),
      [_v13, _v14] = (0, _v9.useState)(null),
      [_v15, _v16] = (0, _v9.useState)(null),
      {
        data: _v17,
        isValidating: _v18,
        mutate: _v19,
        setSize: _v20
      } = function (_v0, _v1) {
        let _v2 = "function" == typeof _v0 ? _v0() : _v0,
          {
            baseUrl: _v3,
            jwt: _v4,
            xVimeoPage: _v5,
            locale: _v6
          } = (0, _v53.useGctlConfig)();
        return (0, _v93.default)((_v0, _v1) => {
          if (null === _v2 || _v1 && !_v1.paging.next) return null;
          let {
              perPage: _v2 = 25,
              page: _v3,
              ..._v4
            } = _v2.query ?? {},
            _v5 = {
              page: _v0 + 1,
              perPage: _v2,
              ..._v4
            };
          return [`/users/${_v2.where.userId}/person_profiles${(0, _v86.serializeQuery)({
            query: _v5,
            select: _v2.select
          })}`, _v0];
        }, null !== _v2 ? ([_v0, _v1]) => _v91({
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
      }(() => _v7 <= 0 ? null : {
        select: _v127,
        where: {
          userId: _v7
        },
        query: {
          perPage: 25
        }
      }, {
        revalidateOnFocus: !1
      }),
      _v21 = (0, _v9.useMemo)(() => _v17?.flatMap(_v0 => _v0.data), [_v17]),
      _v22 = _v17?.[_v17.length - 1]?.paging.next != null,
      {
        data: _v23,
        mutate: _v24
      } = (0, _v54.useGetLiveEventSpeakerProfiles)(() => _v6 ? {
        select: _v128,
        where: {
          liveEventId: _v2
        },
        query: {
          perPage: 100
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v25 = (0, _v9.useMemo)(() => {
        let _v0 = new Map();
        return _v23?.data.forEach(_v0 => {
          _v0.set(_v0.personProfile.id, _v0.id);
        }), _v0;
      }, [_v23]),
      _v26 = (0, _v9.useMemo)(() => _v23?.data.map(_v0 => _v0.personProfile) ?? [], [_v23]),
      _v27 = (0, _v9.useMemo)(() => _v21?.filter(_v0 => !_v25.has(_v0.id)) ?? [], [_v21, _v25]),
      _v28 = _v23?.total ?? _v26.length,
      _v29 = _v28 >= 25,
      _v30 = _v0 => null === _v0 ? void 0 : _v26.find(_v0 => _v0.id === _v0) ?? _v21?.find(_v0 => _v0.id === _v0),
      _v31 = _v30(_v13),
      _v32 = _v30(_v15),
      [_v33] = (0, _v54.usePostLiveEventSpeakerProfiles)(),
      [_v34] = function () {
        let {
            mutate: _v0
          } = (0, _v88.useSWRConfig)(),
          {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v53.useGctlConfig)(),
          [_v5, _v6] = (0, _v86.useInternalState)();
        return [(0, _v9.useCallback)(async _v0 => {
          _v6({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v0(`/live_events/${_v0.where.liveEventId}/speaker_profiles/${_v0.where.speakerProfileId}${(0, _v86.serializeQuery)(_v0)}`, _v51({
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
      }(),
      [_v35] = function () {
        let {
            mutate: _v0
          } = (0, _v88.useSWRConfig)(),
          {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v53.useGctlConfig)(),
          [_v5, _v6] = (0, _v86.useInternalState)();
        return [(0, _v9.useCallback)(async _v0 => {
          _v6({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v0(`/person_profiles/${_v0.where.personProfileId}${(0, _v86.serializeQuery)(_v0)}`, _v89({
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
      }(),
      [_v36, _v37] = (0, _v9.useState)(new Set()),
      [_v38, _v39] = (0, _v9.useState)(new Set()),
      _v40 = (_v0, _v1) => {
        if (!_v6 || _v36.has(_v0)) return;
        let _v2 = null !== _v1;
        !_v2 && _v29 ? _v8({
          title: (0, _v5.translate)({
            singular: "You can show up to {MAX} speakers on the event landing page. Hide one to show another.",
            replacements: {
              MAX: 25
            },
            dictionary: {
              es: {
                singular: "Puede mostrar hasta {MAX} oradores en la página del evento. Oculte uno para mostrar otro."
              },
              "de-DE": {
                singular: "Sie können bis zu {MAX} Sprecher auf der Event-Landingpage anzeigen. Blenden Sie einen aus, um einen anderen anzuzeigen."
              },
              "fr-FR": {
                singular: "Vous pouvez afficher jusqu'à {MAX} intervenants sur la page de présentation de l'événement. Masquez-en un pour en afficher un autre."
              },
              "ja-JP": {
                singular: "イベントのランディングページには最大{MAX}名のスピーカーを表示できます。別のスピーカーを表示するには、1人を非表示にしてください。"
              },
              "ko-KR": {
                singular: "이벤트 랜딩 페이지에는 최대 {MAX}명의 발표자를 표시할 수 있습니다. 하나를 숨기면 다른 발표자를 표시할 수 있습니다."
              },
              "pt-BR": {
                singular: "Você pode exibir até {MAX} palestrantes na página do evento. Oculte um para mostrar outro."
              },
              "zh-CN": {
                singular: "您可以在活动着陆页上显示最多 {MAX} 位演讲者。隐藏一个即可显示另一个。"
              }
            }
          })
        }) : (_v37(_v0 => new Set(_v0).add(_v0)), (_v2 ? _v34({
          where: {
            liveEventId: _v2,
            speakerProfileId: _v1
          }
        }) : _v33({
          select: ["id"],
          where: {
            liveEventId: _v2
          },
          variables: {
            personProfileId: _v0
          }
        })).then(() => {
          _v9({
            newStatus: !_v2
          }), _v24(), _v8({
            status: "success",
            duration: 0,
            title: _v2 ? (0, _v5.translate)({
              singular: "Speaker hidden from the event landing page.",
              dictionary: {
                es: {
                  singular: "Ponente oculto en la página de destino del evento."
                },
                "de-DE": {
                  singular: "Sprecher auf der Landingpage der Veranstaltung ausgeblendet."
                },
                "fr-FR": {
                  singular: "L'intervenant est masqué sur la page de destination de l'événement."
                },
                "ja-JP": {
                  singular: "イベントのランディングページでスピーカーが非表示になりました。"
                },
                "ko-KR": {
                  singular: "발표자가 이벤트 랜딩 페이지에서 숨겨졌습니다."
                },
                "pt-BR": {
                  singular: "Palestrante oculto na landing page do evento."
                },
                "zh-CN": {
                  singular: "演讲者已从活动着陆页隐藏。"
                }
              }
            }) : (0, _v5.translate)({
              singular: "Speaker shown on the event landing page.",
              dictionary: {
                es: {
                  singular: "Ponente visible en la página de destino del evento."
                },
                "de-DE": {
                  singular: "Sprecher auf der Landingpage der Veranstaltung angezeigt."
                },
                "fr-FR": {
                  singular: "L'intervenant est affiché sur la page de destination de l'événement."
                },
                "ja-JP": {
                  singular: "イベントのランディングページでスピーカーが表示されました。"
                },
                "ko-KR": {
                  singular: "발표자가 이벤트 랜딩 페이지에 표시되었습니다."
                },
                "pt-BR": {
                  singular: "Palestrante exibido na landing page do evento."
                },
                "zh-CN": {
                  singular: "演讲者已在活动着陆页上显示。"
                }
              }
            })
          });
        }).catch(_v0 => {
          _v8({
            status: "error",
            duration: 0,
            title: (0, _v56.getErrorToastTitle)(_v0, (0, _v5.translate)({
              singular: "Something went wrong updating speaker visibility. Try again.",
              dictionary: {
                es: {
                  singular: "Se produjo un error al actualizar la visibilidad del ponente. Inténtelo de nuevo."
                },
                "de-DE": {
                  singular: "Beim Aktualisieren der Sichtbarkeit des Sprechers ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Une erreur est survenue lors de la mise à jour de la visibilité de l'intervenant. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "スピーカーの表示設定の更新中に問題が発生しました。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "발표자 가시성 업데이트 중 오류가 발생했습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Ocorreu um erro ao atualizar a visibilidade do palestrante. Tente novamente."
                },
                "zh-CN": {
                  singular: "更新演讲者可见性时出错。请重试。"
                }
              }
            }))
          });
        }).finally(() => {
          _v37(_v0 => {
            let _v1 = new Set(_v0);
            return _v1.delete(_v0), _v1;
          });
        }));
      },
      _v41 = () => {
        _v12(null), _v14(null), _v16(null), _v1();
      },
      _v42 = _v0 => {
        _v14(null), _v12(_v0);
      },
      _v43 = _v0 => {
        _v12(null), _v14(_v0);
      },
      _v44 = async _v0 => {
        await _v5(_v0, _v6 ? _v2 : void 0), _v4?.();
      },
      _v45 = _v0 => {
        _v16(_v0);
      };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v63.Modal, {
        closeOnOverlayClick: !1,
        size: "lg",
        isCentered: !0,
        isOpen: _v0,
        onClose: _v41,
        children: [(0, _v1.jsx)(_v68.ModalOverlay, {}), (0, _v1.jsxs)(_v65.ModalContent, {
          minWidth: (0, _v16.rem)(990),
          children: [(0, _v1.jsxs)(_v67.ModalHeader, {
            children: [(0, _v5.translate)({
              singular: "Manage visible speakers",
              dictionary: {
                es: {
                  singular: "Administrar ponentes visibles"
                },
                "de-DE": {
                  singular: "Sichtbare Sprecher verwalten"
                },
                "fr-FR": {
                  singular: "Gérer les intervenants visibles"
                },
                "ja-JP": {
                  singular: "表示されるスピーカーを管理"
                },
                "ko-KR": {
                  singular: "표시되는 스피커 관리"
                },
                "pt-BR": {
                  singular: "Gerenciar palestrantes visíveis"
                },
                "zh-CN": {
                  singular: "管理可见演讲者"
                }
              }
            }), (0, _v1.jsx)(_v69.ModalCloseButton, {
              onClick: _v41
            })]
          }), (0, _v1.jsxs)(_v64.ModalBody, {
            display: "flex",
            flexDirection: "column",
            gap: "md",
            children: [(0, _v1.jsx)(_v57.Alert, {
              status: "info",
              overflow: "unset",
              children: (0, _v1.jsx)(_v58.AlertDescription, {
                children: (0, _v1.jsx)(_v17.Text, {
                  variant: "body-sm",
                  children: (0, _v5.translate)({
                    singular: "If you add speakers from the Speakers tab, they’ll automatically appear here. However, you still need to manually enable them to be displayed on the event landing page.",
                    dictionary: {
                      es: {
                        singular: "Si agregas ponentes desde la pestaña Ponentes, aparecerán automáticamente aquí. Sin embargo, aún debes habilitarlos manualmente para que se muestren en la página de aterrizaje del evento."
                      },
                      "de-DE": {
                        singular: "Wenn Sie Sprecher im Tab „Sprecher“ hinzufügen, erscheinen sie hier automatisch. Sie müssen sie jedoch weiterhin manuell aktivieren, damit sie auf der Event-Landingpage angezeigt werden."
                      },
                      "fr-FR": {
                        singular: "Si vous ajoutez des intervenants depuis l'onglet Speakers, ils apparaîtront automatiquement ici. Cependant, vous devez toujours les activer manuellement pour qu'ils s'affichent sur la page de présentation de l'événement."
                      },
                      "ja-JP": {
                        singular: "「Speakers」タブからスピーカーを追加すると、ここに自動的に表示されます。ただし、イベントのランディングページに表示するには、手動で有効化する必要があります。"
                      },
                      "ko-KR": {
                        singular: "Speakers 탭에서 스피커를 추가하면 이곳에 자동으로 나타납니다. 그러나 이벤트 랜딩 페이지에 표시하려면 수동으로 활성화해야 합니다."
                      },
                      "pt-BR": {
                        singular: "Se você adicionar palestrantes na aba Palestrantes, eles aparecerão automaticamente aqui. Entretanto, você ainda precisa habilitá‑los manualmente para que sejam exibidos na página de destino do evento."
                      },
                      "zh-CN": {
                        singular: "如果您从 Speakers 选项卡添加演讲者，他们会自动出现在此处。不过，您仍需手动启用他们，以便在活动着陆页上显示。"
                      }
                    }
                  })
                })
              })
            }), (0, _v1.jsx)(_v130, {
              title: (0, _v5.translate)({
                singular: "Visible speaker ({COUNT}/{MAX})",
                plural: "Visible speakers ({COUNT}/{MAX})",
                count: _v28,
                replacements: {
                  COUNT: _v28,
                  MAX: 25
                },
                dictionary: {
                  es: {
                    singular: "Orador visible ({COUNT}/{MAX})",
                    plural: "Oradores visibles ({COUNT}/{MAX})"
                  },
                  "de-DE": {
                    singular: "Sichtbarer Sprecher ({COUNT}/{MAX})",
                    plural: "Sichtbare Sprecher ({COUNT}/{MAX})"
                  },
                  "fr-FR": {
                    singular: "Intervenant visible ({COUNT}/{MAX})",
                    plural: "Intervenants visibles ({COUNT}/{MAX})"
                  },
                  "ja-JP": {
                    singular: "表示中のスピーカー ({COUNT}/{MAX})",
                    plural: "表示中のスピーカー ({COUNT}/{MAX})"
                  },
                  "ko-KR": {
                    singular: "표시된 발표자 ({COUNT}/{MAX})",
                    plural: "표시된 발표자 ({COUNT}/{MAX})"
                  },
                  "pt-BR": {
                    singular: "Palestrante visível ({COUNT}/{MAX})",
                    plural: "Palestrantes visíveis ({COUNT}/{MAX})"
                  },
                  "zh-CN": {
                    singular: "可见演讲者 ({COUNT}/{MAX})",
                    plural: "可见演讲者 ({COUNT}/{MAX})"
                  }
                }
              }),
              speakersCount: _v26.length,
              emptyStateText: (0, _v5.translate)({
                singular: "No speakers are visible on the event landing page yet.",
                dictionary: {
                  es: {
                    singular: "Aún no hay ponentes visibles en la página de inicio del evento."
                  },
                  "de-DE": {
                    singular: "Auf der Event-Landingpage sind noch keine Sprecher sichtbar."
                  },
                  "fr-FR": {
                    singular: "Aucun intervenant n'est encore visible sur la page de destination de l'événement."
                  },
                  "ja-JP": {
                    singular: "イベントのランディングページにはまだ登壇者が表示されていません。"
                  },
                  "ko-KR": {
                    singular: "아직 이벤트 랜딩 페이지에 표시되는 발표자가 없습니다."
                  },
                  "pt-BR": {
                    singular: "Ainda não há palestrantes visíveis na página de destino do evento."
                  },
                  "zh-CN": {
                    singular: "目前活动登录页面尚未显示任何演讲者。"
                  }
                }
              }),
              isAddDisabled: _v29,
              onAddClick: () => _v42("visible"),
              children: _v26.map(_v0 => (0, _v1.jsx)(_v131, {
                profile: _v0,
                attachedSpeakerId: _v25.get(_v0.id) ?? null,
                onOpenEditSpeakerModal: _v43,
                onToggleAddedToEvent: _v40,
                onSetDeleteCandidateId: _v45,
                isAtSpeakerLimit: _v29,
                isDeleting: _v38.has(_v0.id),
                isToggling: _v36.has(_v0.id)
              }, _v0.id))
            }), (0, _v1.jsx)(_v130, {
              title: (0, _v5.translate)({
                singular: "Available speaker ({COUNT})",
                plural: "Available speakers ({COUNT})",
                count: _v27.length,
                replacements: {
                  COUNT: _v27.length
                },
                dictionary: {
                  es: {
                    singular: "Orador disponible ({COUNT})",
                    plural: "Oradores disponibles ({COUNT})"
                  },
                  "de-DE": {
                    singular: "Verfügbarer Sprecher ({COUNT})",
                    plural: "Verfügbare Sprecher ({COUNT})"
                  },
                  "fr-FR": {
                    singular: "Intervenant disponible ({COUNT})",
                    plural: "Intervenants disponibles ({COUNT})"
                  },
                  "ja-JP": {
                    singular: "利用可能な発言者 ({COUNT})",
                    plural: "利用可能な発言者 ({COUNT})"
                  },
                  "ko-KR": {
                    singular: "사용 가능한 발표자 ({COUNT})",
                    plural: "사용 가능한 발표자들 ({COUNT})"
                  },
                  "pt-BR": {
                    singular: "Orador disponível ({COUNT})",
                    plural: "Oradores disponíveis ({COUNT})"
                  },
                  "zh-CN": {
                    singular: "可用发言者 ({COUNT})",
                    plural: "可用发言者 ({COUNT})"
                  }
                }
              }),
              speakersCount: _v27.length,
              emptyStateText: (0, _v5.translate)({
                singular: "All added speakers are currently visible on the event landing page.",
                dictionary: {
                  es: {
                    singular: "Todos los ponentes añadidos están actualmente visibles en la página de inicio del evento."
                  },
                  "de-DE": {
                    singular: "Alle hinzugefügten Sprecher sind derzeit auf der Event-Landingpage sichtbar."
                  },
                  "fr-FR": {
                    singular: "Tous les intervenants ajoutés sont actuellement visibles sur la page de destination de l'événement."
                  },
                  "ja-JP": {
                    singular: "追加されたすべての登壇者は現在イベントのランディングページに表示されています。"
                  },
                  "ko-KR": {
                    singular: "추가된 모든 발표자가 현재 이벤트 랜딩 페이지에 표시됩니다."
                  },
                  "pt-BR": {
                    singular: "Todos os palestrantes adicionados estão atualmente visíveis na página de destino do evento."
                  },
                  "zh-CN": {
                    singular: "所有已添加的演讲者目前都在活动登录页面可见。"
                  }
                }
              }),
              onAddClick: () => _v42("available"),
              children: _v27.map(_v0 => (0, _v1.jsx)(_v131, {
                profile: _v0,
                attachedSpeakerId: null,
                onOpenEditSpeakerModal: _v43,
                onToggleAddedToEvent: _v40,
                onSetDeleteCandidateId: _v45,
                isAtSpeakerLimit: _v29,
                isDeleting: _v38.has(_v0.id),
                isToggling: _v36.has(_v0.id)
              }, _v0.id))
            }), _v22 ? (0, _v1.jsx)(_v15.Flex, {
              justify: "center",
              children: (0, _v1.jsx)(_v3.Button, {
                isLoading: _v18,
                onClick: () => {
                  _v20(_v0 => _v0 + 1);
                },
                size: "sm",
                variant: "secondary",
                children: (0, _v5.translate)({
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
              })
            }) : null]
          }), (0, _v1.jsx)(_v66.ModalFooter, {})]
        })]
      }), null !== _v11 ? (0, _v1.jsx)(_v122, {
        initialSpeaker: {
          name: "",
          role: "",
          description: "",
          picture: null,
          avatarCrop: null
        },
        isOpen: !0,
        mode: "add",
        speakerSection: _v11,
        onClose: () => {
          _v12(null);
        },
        onSaved: _v0 => {
          if (_v19(), _v6 && "visible" === _v11) {
            if (_v29) return void _v8({
              title: (0, _v5.translate)({
                singular: "Speaker added to Available speakers. You can show up to {MAX} speakers on the event landing page.",
                replacements: {
                  MAX: 25
                },
                dictionary: {
                  es: {
                    singular: "Orador añadido a los oradores disponibles. Puede mostrar hasta {MAX} oradores en la página del evento."
                  },
                  "de-DE": {
                    singular: "Sprecher zu den verfügbaren Sprechern hinzugefügt. Auf der Event-Landingpage können Sie bis zu {MAX} Sprecher anzeigen."
                  },
                  "fr-FR": {
                    singular: "Intervenant ajouté aux intervenants disponibles. Vous pouvez afficher jusqu'à {MAX} intervenants sur la page de présentation de l'événement."
                  },
                  "ja-JP": {
                    singular: "スピーカーが「利用可能なスピーカー」に追加されました。イベントのランディングページには最大{MAX}名のスピーカーを表示できます。"
                  },
                  "ko-KR": {
                    singular: "발표자가 사용 가능한 발표자 목록에 추가되었습니다. 이벤트 랜딩 페이지에는 최대 {MAX}명의 발표자를 표시할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Palestrante adicionado aos Palestrantes disponíveis. Você pode exibir até {MAX} palestrantes na página do evento."
                  },
                  "zh-CN": {
                    singular: "演讲者已添加到可用演讲者。您可以在活动着陆页上显示最多 {MAX} 位演讲者。"
                  }
                }
              })
            });
            _v33({
              select: ["id"],
              where: {
                liveEventId: _v2
              },
              variables: {
                personProfileId: _v0
              }
            }).then(() => (_v9({
              newStatus: !0
            }), _v24()));
          }
        }
      }, "add-speaker-modal") : null, _v31 ? (0, _v1.jsx)(_v122, {
        initialSpeaker: {
          id: _v31.id,
          name: _v31.name,
          role: _v31.role || "",
          description: _v31.description || "",
          picture: _v31.pictures,
          avatarCrop: _v31.avatarCrop
        },
        isOpen: null !== _v31,
        mode: "edit",
        onClose: () => {
          _v14(null);
        },
        onSaved: () => {
          _v19(), _v24();
        },
        onSavedAndTranslate: _v3 ? _v44 : void 0
      }, `edit-speaker-modal-${_v31.id}`) : null, _v32 ? (0, _v1.jsx)(_v112, {
        title: (0, _v5.translate)({
          singular: 'Delete "{NAME}"?',
          replacements: {
            NAME: _v32.name
          },
          dictionary: {
            es: {
              singular: '¿Eliminar "{NAME}"?'
            },
            "de-DE": {
              singular: '"{NAME}" löschen?'
            },
            "fr-FR": {
              singular: 'Supprimer "{NAME}" ?'
            },
            "ja-JP": {
              singular: '"{NAME}"を削除しますか?'
            },
            "ko-KR": {
              singular: '"{NAME}"을(를) 삭제하시겠습니까?'
            },
            "pt-BR": {
              singular: 'Excluir "{NAME}"?'
            },
            "zh-CN": {
              singular: '删除 "{NAME}"?'
            }
          }
        }),
        body: (0, _v5.translate)({
          singular: "This speaker will be deleted and removed from every event. This action can't be undone.",
          dictionary: {
            es: {
              singular: "Este ponente será eliminado y retirado de todos los eventos. Esta acción no se puede deshacer."
            },
            "de-DE": {
              singular: "Dieser Sprecher wird gelöscht und aus allen Veranstaltungen entfernt. Diese Aktion kann nicht rückgängig gemacht werden."
            },
            "fr-FR": {
              singular: "Cet intervenant sera supprimé et retiré de tous les événements. Cette action est irréversible."
            },
            "ja-JP": {
              singular: "このスピーカーを削除すると、すべてのイベントからも削除されます。この操作は取り消せません。"
            },
            "ko-KR": {
              singular: "이 발표자는 삭제되어 모든 이벤트에서 제거됩니다. 이 작업은 되돌릴 수 없습니다."
            },
            "pt-BR": {
              singular: "Este palestrante será excluído e removido de todos os eventos. Esta ação não pode ser desfeita."
            },
            "zh-CN": {
              singular: "此发言人将被删除，并从每个活动中移除。此操作无法撤销。"
            }
          }
        }),
        onCancel: () => _v16(null),
        onConfirm: () => {
          null !== _v15 && (_v38.has(_v15) || (_v39(_v0 => new Set(_v0).add(_v15)), _v35({
            where: {
              personProfileId: _v15
            }
          }).then(() => {
            _v10(), _v19(), _v24();
          }).finally(() => {
            _v39(_v0 => {
              let _v1 = new Set(_v0);
              return _v1.delete(_v15), _v1;
            });
          })), _v16(null));
        }
      }) : null]
    });
  }
  let _v130 = ({
      title: _v0,
      speakersCount: _v1,
      emptyStateText: _v2,
      children: _v3,
      isAddDisabled: _v4 = !1,
      onAddClick: _v5
    }) => {
      let [_v6, _v7] = (0, _v9.useState)(!0);
      return (0, _v1.jsxs)(_v15.Flex, {
        direction: "column",
        gap: "sm",
        children: [(0, _v1.jsxs)(_v15.Flex, {
          align: "center",
          justify: "space-between",
          gap: (0, _v16.rem)(16),
          children: [(0, _v1.jsxs)(_v15.Flex, {
            align: "center",
            appearance: "none",
            "aria-expanded": _v6,
            "aria-label": _v6 ? (0, _v5.translate)({
              singular: "Collapse section",
              dictionary: {
                es: {
                  singular: "Contraer sección"
                },
                "de-DE": {
                  singular: "Abschnitt einklappen"
                },
                "fr-FR": {
                  singular: "Réduire la section"
                },
                "ja-JP": {
                  singular: "セクションを折りたたむ"
                },
                "ko-KR": {
                  singular: "섹션 접기"
                },
                "pt-BR": {
                  singular: "Recolher seção"
                },
                "zh-CN": {
                  singular: "折叠部分"
                }
              }
            }) : (0, _v5.translate)({
              singular: "Expand section",
              dictionary: {
                es: {
                  singular: "Expandir sección"
                },
                "de-DE": {
                  singular: "Abschnitt aufklappen"
                },
                "fr-FR": {
                  singular: "Développer la section"
                },
                "ja-JP": {
                  singular: "セクションを展開する"
                },
                "ko-KR": {
                  singular: "섹션 펼치기"
                },
                "pt-BR": {
                  singular: "Expandir seção"
                },
                "zh-CN": {
                  singular: "展开部分"
                }
              }
            }),
            as: "button",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            flex: "1",
            gap: "xs",
            minWidth: "0",
            onClick: () => _v7(_v0 => !_v0),
            padding: "0",
            textAlign: "left",
            type: "button",
            children: [(0, _v1.jsx)(_v17.Text, {
              noOfLines: 1,
              variant: "heading-xs",
              children: _v0
            }), (0, _v1.jsx)(_v76.ChevronDownSmall, {
              color: "icon-primary",
              transform: _v6 ? void 0 : "rotate(-90deg)"
            })]
          }), (0, _v1.jsx)(_v24.Tooltip, {
            label: _v4 ? (0, _v5.translate)({
              singular: "You can show up to {MAX} speakers on the event landing page. Hide one to show another.",
              replacements: {
                MAX: 25
              },
              dictionary: {
                es: {
                  singular: "Puede mostrar hasta {MAX} oradores en la página del evento. Oculte uno para mostrar otro."
                },
                "de-DE": {
                  singular: "Sie können bis zu {MAX} Sprecher auf der Event-Landingpage anzeigen. Blenden Sie einen aus, um einen anderen anzuzeigen."
                },
                "fr-FR": {
                  singular: "Vous pouvez afficher jusqu'à {MAX} intervenants sur la page de présentation de l'événement. Masquez-en un pour en afficher un autre."
                },
                "ja-JP": {
                  singular: "イベントのランディングページには最大{MAX}名のスピーカーを表示できます。別のスピーカーを表示するには、1人を非表示にしてください。"
                },
                "ko-KR": {
                  singular: "이벤트 랜딩 페이지에는 최대 {MAX}명의 발표자를 표시할 수 있습니다. 하나를 숨기면 다른 발표자를 표시할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Você pode exibir até {MAX} palestrantes na página do evento. Oculte um para mostrar outro."
                },
                "zh-CN": {
                  singular: "您可以在活动着陆页上显示最多 {MAX} 位演讲者。隐藏一个即可显示另一个。"
                }
              }
            }) : "",
            isDisabled: !_v4,
            shouldWrapChildren: !0,
            children: (0, _v1.jsx)(_v3.Button, {
              isDisabled: _v4,
              leftIcon: (0, _v1.jsx)(_v78.PlusCircle, {}),
              onClick: _v5,
              size: "sm",
              variant: "secondary",
              children: (0, _v5.translate)({
                singular: "Add speaker",
                dictionary: {
                  es: {
                    singular: "Agregar orador"
                  },
                  "de-DE": {
                    singular: "Redner hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter un(e) intervenant(e)"
                  },
                  "ja-JP": {
                    singular: "スピーカーを追加"
                  },
                  "ko-KR": {
                    singular: "발표자 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar palestrante"
                  },
                  "zh-CN": {
                    singular: "添加演讲人"
                  }
                }
              })
            })
          })]
        }), (0, _v1.jsx)(_v60.Collapse, {
          in: _v6,
          children: _v1 > 0 ? (0, _v1.jsxs)(_v70.Table, {
            variant: "unstyled",
            children: [(0, _v1.jsx)(_v74.Thead, {
              children: (0, _v1.jsxs)(_v75.Tr, {
                color: "text-secondary",
                children: [(0, _v1.jsx)(_v73.Th, {
                  backgroundColor: "fill-component",
                  borderStartRadius: "input-md",
                  px: "2",
                  py: "2",
                  width: "27%",
                  children: (0, _v1.jsx)(_v15.Flex, {
                    align: "center",
                    gap: (0, _v16.rem)(8),
                    minWidth: 0,
                    children: (0, _v1.jsx)(_v17.Text, {
                      noOfLines: 1,
                      variant: "heading-xs",
                      children: (0, _v5.translate)({
                        singular: "Name",
                        dictionary: {
                          es: {
                            singular: "Nombre"
                          },
                          "fr-FR": {
                            singular: "Nom"
                          },
                          "ja-JP": {
                            singular: "名前"
                          },
                          "ko-KR": {
                            singular: "이름"
                          },
                          "pt-BR": {
                            singular: "Nome"
                          },
                          "zh-CN": {
                            singular: "姓名"
                          }
                        }
                      })
                    })
                  })
                }), (0, _v1.jsx)(_v73.Th, {
                  backgroundColor: "fill-component",
                  px: "2",
                  py: "2",
                  width: "13%",
                  children: (0, _v1.jsx)(_v17.Text, {
                    variant: "heading-xs",
                    children: (0, _v5.translate)({
                      singular: "Visible",
                      dictionary: {
                        "de-DE": {
                          singular: "Sichtbar"
                        },
                        "ja-JP": {
                          singular: "表示"
                        },
                        "ko-KR": {
                          singular: "표시됨"
                        },
                        "pt-BR": {
                          singular: "Visível"
                        },
                        "zh-CN": {
                          singular: "可见"
                        }
                      }
                    })
                  })
                }), (0, _v1.jsx)(_v73.Th, {
                  backgroundColor: "fill-component",
                  px: "2",
                  py: "2",
                  width: "17%",
                  children: (0, _v1.jsx)(_v17.Text, {
                    variant: "heading-xs",
                    children: (0, _v5.translate)({
                      singular: "Role",
                      dictionary: {
                        es: {
                          singular: "Rol"
                        },
                        "de-DE": {
                          singular: "Rolle"
                        },
                        "fr-FR": {
                          singular: "Rôle"
                        },
                        "ja-JP": {
                          singular: "肩書き"
                        },
                        "ko-KR": {
                          singular: "역할"
                        },
                        "pt-BR": {
                          singular: "Função"
                        },
                        "zh-CN": {
                          singular: "职位"
                        }
                      }
                    })
                  })
                }), (0, _v1.jsx)(_v73.Th, {
                  backgroundColor: "fill-component",
                  px: "2",
                  py: "2",
                  width: "29%",
                  children: (0, _v1.jsx)(_v17.Text, {
                    variant: "heading-xs",
                    children: (0, _v5.translate)({
                      singular: "Description",
                      dictionary: {
                        es: {
                          singular: "Descripción"
                        },
                        "de-DE": {
                          singular: "Beschreibung"
                        },
                        "ja-JP": {
                          singular: "説明"
                        },
                        "ko-KR": {
                          singular: "설명"
                        },
                        "pt-BR": {
                          singular: "Descrição"
                        },
                        "zh-CN": {
                          singular: "描述"
                        }
                      }
                    })
                  })
                }), (0, _v1.jsx)(_v73.Th, {
                  backgroundColor: "fill-component",
                  borderEndRadius: "input-md",
                  px: "2",
                  py: "2",
                  width: "14%"
                })]
              })
            }), (0, _v1.jsx)(_v71.Tbody, {
              children: _v3
            })]
          }) : (0, _v1.jsx)(_v17.Text, {
            color: "text-secondary",
            py: (0, _v16.rem)(16),
            variant: "body-md",
            children: _v2
          })
        })]
      });
    },
    _v131 = ({
      profile: _v0,
      attachedSpeakerId: _v1,
      onOpenEditSpeakerModal: _v2,
      onToggleAddedToEvent: _v3,
      onSetDeleteCandidateId: _v4,
      isAtSpeakerLimit: _v5,
      isDeleting: _v6,
      isToggling: _v7
    }) => {
      let _v8 = null !== _v1,
        _v9 = !_v8 && _v5,
        _v10 = _v8 ? (0, _v5.translate)({
          singular: "Hide from the event landing page",
          dictionary: {
            es: {
              singular: "Ocultar de la página de aterrizaje del evento"
            },
            "de-DE": {
              singular: "Auf der Event-Landingpage ausblenden"
            },
            "fr-FR": {
              singular: "Masquer de la page de présentation de l'événement"
            },
            "ja-JP": {
              singular: "イベントのランディングページから非表示にする"
            },
            "ko-KR": {
              singular: "이벤트 랜딩 페이지에서 숨기기"
            },
            "pt-BR": {
              singular: "Ocultar da página de destino do evento"
            },
            "zh-CN": {
              singular: "从活动着陆页隐藏"
            }
          }
        }) : (0, _v5.translate)({
          singular: "Show on the event landing page",
          dictionary: {
            es: {
              singular: "Mostrar en la página de aterrizaje del evento"
            },
            "de-DE": {
              singular: "Auf der Event-Landingpage anzeigen"
            },
            "fr-FR": {
              singular: "Afficher sur la page de présentation de l'événement"
            },
            "ja-JP": {
              singular: "イベントのランディングページに表示する"
            },
            "ko-KR": {
              singular: "이벤트 랜딩 페이지에 표시"
            },
            "pt-BR": {
              singular: "Exibir na página de destino do evento"
            },
            "zh-CN": {
              singular: "在活动着陆页显示"
            }
          }
        }),
        _v11 = _v0.pictures?.baseLink,
        _v12 = _v0.avatarCrop && _v0.avatarCrop.width > 0 ? _v0.avatarCrop : null;
      return (0, _v1.jsxs)(_v75.Tr, {
        children: [(0, _v1.jsx)(_v72.Td, {
          px: "2",
          py: (0, _v16.rem)(10),
          width: "27%",
          children: (0, _v1.jsxs)(_v15.Flex, {
            align: "center",
            gap: (0, _v16.rem)(16),
            minWidth: 0,
            children: [_v11 ? (0, _v1.jsx)(_v59.Box, {
              borderRadius: "input-md",
              flexShrink: 0,
              height: _v126,
              overflow: "hidden",
              width: _v126,
              children: (0, _v1.jsx)(_v62.Image, {
                alt: _v0.name || "",
                src: _v11,
                ...(_v12 ? {
                  maxWidth: "none",
                  transform: `scale(${56 / _v12.width}) translate(${-_v12.x}px, ${-_v12.y}px)`,
                  transformOrigin: "top left"
                } : {
                  height: "100%",
                  objectFit: "cover",
                  width: "100%"
                })
              })
            }) : (0, _v1.jsx)(_v59.Box, {
              width: _v126,
              height: _v126,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "input-md",
              backgroundColor: "fill-component",
              color: "icon-secondary",
              children: (0, _v1.jsx)(_v79.PersonUserFilled, {})
            }), (0, _v1.jsx)(_v17.Text, {
              noOfLines: 1,
              variant: "heading-xs",
              children: _v0.name
            })]
          })
        }), (0, _v1.jsx)(_v72.Td, {
          px: "2",
          py: (0, _v16.rem)(10),
          width: "13%",
          children: (0, _v1.jsx)(_v59.Box, {
            "aria-label": _v8 ? (0, _v5.translate)({
              singular: "Show on the event landing page",
              dictionary: {
                es: {
                  singular: "Mostrar en la página de aterrizaje del evento"
                },
                "de-DE": {
                  singular: "Auf der Event-Landingpage anzeigen"
                },
                "fr-FR": {
                  singular: "Afficher sur la page de présentation de l'événement"
                },
                "ja-JP": {
                  singular: "イベントのランディングページに表示する"
                },
                "ko-KR": {
                  singular: "이벤트 랜딩 페이지에 표시"
                },
                "pt-BR": {
                  singular: "Exibir na página de destino do evento"
                },
                "zh-CN": {
                  singular: "在活动着陆页显示"
                }
              }
            }) : (0, _v5.translate)({
              singular: "Hide from the event landing page",
              dictionary: {
                es: {
                  singular: "Ocultar de la página de aterrizaje del evento"
                },
                "de-DE": {
                  singular: "Auf der Event-Landingpage ausblenden"
                },
                "fr-FR": {
                  singular: "Masquer de la page de présentation de l'événement"
                },
                "ja-JP": {
                  singular: "イベントのランディングページから非表示にする"
                },
                "ko-KR": {
                  singular: "이벤트 랜딩 페이지에서 숨기기"
                },
                "pt-BR": {
                  singular: "Ocultar da página de destino do evento"
                },
                "zh-CN": {
                  singular: "从活动着陆页隐藏"
                }
              }
            }),
            backgroundColor: "fill-component",
            borderRadius: "sm",
            display: "inline-flex",
            p: (0, _v16.rem)(6),
            children: _v8 ? (0, _v1.jsx)(_v81, {
              boxSize: (0, _v16.rem)(20),
              color: "text-tertiary"
            }) : (0, _v1.jsx)(_v82.CloseXCircleFilled, {
              boxSize: (0, _v16.rem)(20),
              color: "text-tertiary"
            })
          })
        }), (0, _v1.jsx)(_v72.Td, {
          px: "2",
          py: (0, _v16.rem)(10),
          width: "17%",
          children: (0, _v1.jsx)(_v17.Text, {
            noOfLines: 1,
            variant: "body-md",
            color: "text-secondary",
            children: _v0.role || "-"
          })
        }), (0, _v1.jsx)(_v72.Td, {
          px: "2",
          py: (0, _v16.rem)(10),
          width: "29%",
          children: (0, _v1.jsx)(_v17.Text, {
            noOfLines: 1,
            variant: "body-md",
            color: "text-secondary",
            children: _v0.description || "-"
          })
        }), (0, _v1.jsx)(_v72.Td, {
          px: "2",
          py: (0, _v16.rem)(10),
          width: "14%",
          children: (0, _v1.jsxs)(_v15.Flex, {
            gap: "1",
            justify: "flex-end",
            children: [(0, _v1.jsx)(_v24.Tooltip, {
              label: (0, _v5.translate)({
                singular: "Edit speaker details",
                dictionary: {
                  es: {
                    singular: "Editar detalles del ponente"
                  },
                  "de-DE": {
                    singular: "Sprecherdetails bearbeiten"
                  },
                  "fr-FR": {
                    singular: "Modifier les détails de l'intervenant"
                  },
                  "ja-JP": {
                    singular: "スピーカーの詳細を編集"
                  },
                  "ko-KR": {
                    singular: "연사 세부 정보 편집"
                  },
                  "pt-BR": {
                    singular: "Editar detalhes do palestrante"
                  },
                  "zh-CN": {
                    singular: "编辑演讲者详细信息"
                  }
                }
              }),
              children: (0, _v1.jsx)(_v61.IconButton, {
                "aria-label": (0, _v5.translate)({
                  singular: "Edit speaker details",
                  dictionary: {
                    es: {
                      singular: "Editar detalles del ponente"
                    },
                    "de-DE": {
                      singular: "Sprecherdetails bearbeiten"
                    },
                    "fr-FR": {
                      singular: "Modifier les détails de l'intervenant"
                    },
                    "ja-JP": {
                      singular: "スピーカーの詳細を編集"
                    },
                    "ko-KR": {
                      singular: "연사 세부 정보 편집"
                    },
                    "pt-BR": {
                      singular: "Editar detalhes do palestrante"
                    },
                    "zh-CN": {
                      singular: "编辑演讲者详细信息"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v77.EditSheet, {}),
                onClick: () => _v2(_v0.id),
                size: "sm",
                variant: "tertiary"
              })
            }), (0, _v1.jsx)(_v24.Tooltip, {
              label: _v9 ? (0, _v5.translate)({
                singular: "You can show up to {MAX} speakers on the event landing page. Hide one to show another.",
                replacements: {
                  MAX: 25
                },
                dictionary: {
                  es: {
                    singular: "Puede mostrar hasta {MAX} oradores en la página del evento. Oculte uno para mostrar otro."
                  },
                  "de-DE": {
                    singular: "Sie können bis zu {MAX} Sprecher auf der Event-Landingpage anzeigen. Blenden Sie einen aus, um einen anderen anzuzeigen."
                  },
                  "fr-FR": {
                    singular: "Vous pouvez afficher jusqu'à {MAX} intervenants sur la page de présentation de l'événement. Masquez-en un pour en afficher un autre."
                  },
                  "ja-JP": {
                    singular: "イベントのランディングページには最大{MAX}名のスピーカーを表示できます。別のスピーカーを表示するには、1人を非表示にしてください。"
                  },
                  "ko-KR": {
                    singular: "이벤트 랜딩 페이지에는 최대 {MAX}명의 발표자를 표시할 수 있습니다. 하나를 숨기면 다른 발표자를 표시할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Você pode exibir até {MAX} palestrantes na página do evento. Oculte um para mostrar outro."
                  },
                  "zh-CN": {
                    singular: "您可以在活动着陆页上显示最多 {MAX} 位演讲者。隐藏一个即可显示另一个。"
                  }
                }
              }) : _v10,
              children: (0, _v1.jsx)(_v61.IconButton, {
                "aria-label": _v10,
                icon: _v8 ? (0, _v1.jsx)(_v83.EyeShut, {}) : (0, _v1.jsx)(_v84.Eye, {}),
                isDisabled: _v9,
                isLoading: _v7,
                onClick: () => _v3(_v0.id, _v1),
                size: "sm",
                variant: "tertiary"
              })
            }), (0, _v1.jsx)(_v24.Tooltip, {
              label: (0, _v5.translate)({
                singular: "Delete speaker",
                dictionary: {
                  es: {
                    singular: "Eliminar orador"
                  },
                  "de-DE": {
                    singular: "Sprecher löschen"
                  },
                  "fr-FR": {
                    singular: "Supprimer l'intervenant"
                  },
                  "ja-JP": {
                    singular: "スピーカーを削除"
                  },
                  "ko-KR": {
                    singular: "발표자 삭제"
                  },
                  "pt-BR": {
                    singular: "Excluir palestrante"
                  },
                  "zh-CN": {
                    singular: "删除演讲者"
                  }
                }
              }),
              children: (0, _v1.jsx)(_v61.IconButton, {
                "aria-label": (0, _v5.translate)({
                  singular: "Delete speaker",
                  dictionary: {
                    es: {
                      singular: "Eliminar orador"
                    },
                    "de-DE": {
                      singular: "Sprecher löschen"
                    },
                    "fr-FR": {
                      singular: "Supprimer l'intervenant"
                    },
                    "ja-JP": {
                      singular: "スピーカーを削除"
                    },
                    "ko-KR": {
                      singular: "발표자 삭제"
                    },
                    "pt-BR": {
                      singular: "Excluir palestrante"
                    },
                    "zh-CN": {
                      singular: "删除演讲者"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v85.TrashBin, {}),
                isLoading: _v6,
                onClick: () => _v4(_v0.id),
                size: "sm",
                variant: "tertiary"
              })
            })]
          })
        })]
      }, _v0.id);
    },
    _v132 = "manage-speakers-field-show-speakers",
    _v133 = ["id", "visibilityStatus"];
  function _v134({
    onSpeakersChange: _v0,
    isAiTranslationEnabled: _v1
  } = {}) {
    let [_v2, _v3] = (0, _v9.useState)(!1),
      [_v4, _v5] = (0, _v9.useState)(null),
      [_v6, _v7] = (0, _v9.useState)(!1),
      {
        sessionId: _v8
      } = (0, _v2.useManager)(_v7.ComposerSessionManager),
      _v9 = Number(_v8),
      _v10 = _v9 > 0,
      _v11 = (0, _v18.useToast)(),
      {
        trackSingleEventCustomizationSpeakersToggled: _v12,
        trackSingleEventCustomizationManageSpeakersClicked: _v13
      } = (0, _v23.useSingleEventCustomizationTracking)(),
      {
        data: _v14,
        mutate: _v15
      } = (0, _v54.useGetLiveEventSpeakerProfiles)(() => _v10 ? {
        select: _v133,
        where: {
          liveEventId: _v9
        },
        query: {
          perPage: 100
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v16 = _v14?.data,
      {
        baseUrl: _v17,
        jwt: _v18,
        xVimeoPage: _v19,
        locale: _v20
      } = (0, _v53.useGctlConfig)(),
      _v21 = _v6;
    return null !== _v4 ? _v21 = "visible" === _v4 : _v16 && _v16.length > 0 && (_v21 = _v16.some(_v0 => "visible" === _v0.visibilityStatus)), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v15.Flex, {
        direction: "column",
        gap: "md",
        width: "100%",
        children: [(0, _v1.jsx)(_v46.FormControl, {
          children: (0, _v1.jsxs)(_v47.FormLabel, {
            alignItems: "center",
            cursor: "pointer",
            display: "flex",
            htmlFor: _v132,
            justifyContent: "space-between",
            margin: "0",
            children: [(0, _v1.jsxs)(_v15.Flex, {
              align: "center",
              gap: (0, _v16.rem)(4),
              children: [(0, _v1.jsx)(_v17.Text, {
                variant: "heading-xs",
                children: (0, _v5.translate)({
                  singular: "Show speakers",
                  dictionary: {
                    es: {
                      singular: "Mostrar oradores"
                    },
                    "de-DE": {
                      singular: "Redner einblenden"
                    },
                    "fr-FR": {
                      singular: "Montrer les intervenants"
                    },
                    "ja-JP": {
                      singular: "スピーカーを表示する"
                    },
                    "ko-KR": {
                      singular: "발표자 표시"
                    },
                    "pt-BR": {
                      singular: "Exibir palestrantes"
                    },
                    "zh-CN": {
                      singular: "显示演讲人"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v55.CircleTip, {
                as: "span",
                label: (0, _v5.translate)({
                  singular: "Speakers are shown in the event page with a dedicated section.",
                  dictionary: {
                    es: {
                      singular: "Los ponentes se muestran en la página del evento con una sección dedicada."
                    },
                    "de-DE": {
                      singular: "Sprecher werden auf der Veranstaltungsseite in einem eigenen Abschnitt angezeigt."
                    },
                    "fr-FR": {
                      singular: "Les intervenants sont affichés sur la page de l'événement dans une section dédiée."
                    },
                    "ja-JP": {
                      singular: "スピーカーはイベントページの専用セクションに表示されます。"
                    },
                    "ko-KR": {
                      singular: "스피커는 전용 섹션과 함께 이벤트 페이지에 표시됩니다."
                    },
                    "pt-BR": {
                      singular: "Os palestrantes são exibidos na página do evento em uma seção dedicada."
                    },
                    "zh-CN": {
                      singular: "演讲者在活动页面中以专门的区域展示。"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v48.Switch, {
              id: _v132,
              isChecked: _v21,
              isDisabled: null !== _v4,
              onChange: () => {
                if (null !== _v4) return;
                let _v0 = _v21 ? "hidden" : "visible";
                (_v7("visible" === _v0), _v16 && 0 !== _v16.length) ? (_v5(_v0), Promise.all(_v16.map(_v0 => _v52({
                  baseUrl: _v17,
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: _v18 ? `jwt ${_v18}` : "",
                    "Vimeo-Page": `${_v19}`,
                    "Accept-Language": _v20 ?? "en"
                  },
                  select: _v133,
                  where: {
                    liveEventId: _v9,
                    speakerProfileId: _v0.id
                  },
                  variables: {
                    visibilityStatus: _v0
                  }
                }))).then(() => (_v12({
                  newStatus: "visible" === _v0
                }), _v0?.(), _v15())).catch(_v0 => {
                  _v11({
                    status: "error",
                    duration: 0,
                    title: (0, _v56.getErrorToastTitle)(_v0, (0, _v5.translate)({
                      singular: "Something went wrong updating speaker visibility. Try again.",
                      dictionary: {
                        es: {
                          singular: "Se produjo un error al actualizar la visibilidad del ponente. Inténtelo de nuevo."
                        },
                        "de-DE": {
                          singular: "Beim Aktualisieren der Sichtbarkeit des Sprechers ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
                        },
                        "fr-FR": {
                          singular: "Une erreur est survenue lors de la mise à jour de la visibilité de l'intervenant. Veuillez réessayer."
                        },
                        "ja-JP": {
                          singular: "スピーカーの表示設定の更新中に問題が発生しました。もう一度お試しください。"
                        },
                        "ko-KR": {
                          singular: "발표자 가시성 업데이트 중 오류가 발생했습니다. 다시 시도해 주세요."
                        },
                        "pt-BR": {
                          singular: "Ocorreu um erro ao atualizar a visibilidade do palestrante. Tente novamente."
                        },
                        "zh-CN": {
                          singular: "更新演讲者可见性时出错。请重试。"
                        }
                      }
                    }))
                  });
                }).finally(() => {
                  _v5(null);
                })) : _v12({
                  newStatus: "visible" === _v0
                });
              }
            })]
          })
        }), (0, _v1.jsx)(_v3.Button, {
          isDisabled: !_v21 || !_v10,
          onClick: () => {
            _v13(), _v3(!0);
          },
          size: "sm",
          variant: "secondary",
          width: "100%",
          children: (0, _v5.translate)({
            singular: "Manage visible speakers",
            dictionary: {
              es: {
                singular: "Administrar ponentes visibles"
              },
              "de-DE": {
                singular: "Sichtbare Sprecher verwalten"
              },
              "fr-FR": {
                singular: "Gérer les intervenants visibles"
              },
              "ja-JP": {
                singular: "表示されるスピーカーを管理"
              },
              "ko-KR": {
                singular: "표시되는 스피커 관리"
              },
              "pt-BR": {
                singular: "Gerenciar palestrantes visíveis"
              },
              "zh-CN": {
                singular: "管理可见演讲者"
              }
            }
          })
        })]
      }), _v2 ? (0, _v1.jsx)(_v129, {
        isOpen: _v2,
        onClose: () => {
          _v3(!1), _v0?.();
        },
        eventId: _v9,
        isAiTranslationEnabled: _v1,
        onSpeakerTranslated: _v0
      }) : null]
    });
  }
  var _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0);
  let _v138 = {
    type: "vimeo",
    uri: null,
    url: null
  };
  function _v139() {
    let {
        settings: {
          value: _v0
        },
        actions: {
          updateLiveEventSettings: _v1
        }
      } = (0, _v2.useManager)(_v8.EventSettingsManager),
      [_v2, _v3] = (0, _v9.useState)(!1),
      {
        trackSingleEventCustomizationLogoChanged: _v4
      } = (0, _v23.useSingleEventCustomizationTracking)(),
      _v5 = _v0?.landingPageLogo ?? _v138,
      _v6 = [{
        label: (0, _v5.translate)({
          singular: "None",
          dictionary: {
            es: {
              singular: "Ninguno"
            },
            "de-DE": {
              singular: "Kein"
            },
            "fr-FR": {
              singular: "Aucune"
            },
            "ja-JP": {
              singular: "なし"
            },
            "ko-KR": {
              singular: "없음"
            },
            "pt-BR": {
              singular: "Nenhum"
            },
            "zh-CN": {
              singular: "无"
            }
          }
        }),
        value: "none"
      }, {
        label: (0, _v5.translate)({
          singular: "Custom logo",
          dictionary: {
            es: {
              singular: "Logotipo personalizado"
            },
            "de-DE": {
              singular: "Benutzerdefiniertes Logo"
            },
            "fr-FR": {
              singular: "Logo personnalisé"
            },
            "ja-JP": {
              singular: "カスタムロゴ"
            },
            "ko-KR": {
              singular: "사용자 지정 로고"
            },
            "pt-BR": {
              singular: "Logotipo personalizado"
            },
            "zh-CN": {
              singular: "自定义徽标"
            }
          }
        }),
        value: "custom"
      }, {
        label: (0, _v5.translate)({
          singular: "Vimeo logo",
          dictionary: {
            es: {
              singular: "Logotipo de Vimeo"
            },
            "de-DE": {
              singular: "Vimeo-Logo"
            },
            "fr-FR": {
              singular: "Logo Vimeo"
            },
            "ja-JP": {
              singular: "Vimeo ロゴ"
            },
            "ko-KR": {
              singular: "Vimeo 로고"
            },
            "pt-BR": {
              singular: "Logotipo do Vimeo"
            },
            "zh-CN": {
              singular: "Vimeo 徽标"
            }
          }
        }),
        value: "vimeo"
      }];
    return (0, _v1.jsxs)(_v15.Flex, {
      direction: "column",
      gap: (0, _v16.rem)(16),
      width: "100%",
      children: [(0, _v1.jsx)(_v135.Select, {
        defaultValue: [_v5.type],
        items: _v6,
        onValueChange: _v0 => {
          var _v1;
          _v1({
            landingPageLogo: "custom" === (_v1 = _v0.value[0]) ? {
              type: _v1,
              uri: _v5.uri,
              url: _v5.url
            } : {
              type: _v1,
              uri: null,
              url: null
            }
          }).then(() => _v4({
            logoType: _v1
          }));
        },
        withPortal: !1
      }), "custom" === _v5.type ? (0, _v1.jsx)(_v137.LogoPickerBrandKit, {
        LogoPickerControlComponent: () => (0, _v1.jsxs)(_v15.Flex, {
          align: "center",
          as: "button",
          backgroundColor: "surface",
          borderColor: "input-stroke",
          borderRadius: (0, _v16.rem)(8),
          borderStyle: "solid",
          borderWidth: (0, _v16.rem)(1),
          gap: (0, _v16.rem)(12),
          onClick: () => _v3(_v0 => !_v0),
          padding: (0, _v16.rem)(8),
          type: "button",
          width: "100%",
          children: [(0, _v1.jsx)(_v59.Box, {
            alignItems: "center",
            backgroundColor: "fill-component",
            borderRadius: (0, _v16.rem)(6),
            display: "flex",
            flexShrink: 0,
            height: (0, _v16.rem)(48),
            justifyContent: "center",
            overflow: "hidden",
            width: (0, _v16.rem)(48),
            children: _v5.url ? (0, _v1.jsx)(_v59.Box, {
              alt: (0, _v5.translate)({
                singular: "Custom logo",
                dictionary: {
                  es: {
                    singular: "Logotipo personalizado"
                  },
                  "de-DE": {
                    singular: "Benutzerdefiniertes Logo"
                  },
                  "fr-FR": {
                    singular: "Logo personnalisé"
                  },
                  "ja-JP": {
                    singular: "カスタムロゴ"
                  },
                  "ko-KR": {
                    singular: "사용자 지정 로고"
                  },
                  "pt-BR": {
                    singular: "Logotipo personalizado"
                  },
                  "zh-CN": {
                    singular: "自定义徽标"
                  }
                }
              }),
              as: "img",
              height: "100%",
              objectFit: "contain",
              src: _v5.url,
              width: "100%"
            }) : (0, _v1.jsx)(_v136.Upload, {
              boxSize: 20,
              color: "text-primary"
            })
          }), (0, _v1.jsx)(_v17.Text, {
            color: "text-primary",
            textAlign: "left",
            variant: "heading-xs",
            children: _v5.url ? (0, _v5.translate)({
              singular: "Change picture",
              dictionary: {
                es: {
                  singular: "Cambiar imagen"
                },
                "de-DE": {
                  singular: "Bild ändern"
                },
                "fr-FR": {
                  singular: "Changer l'image"
                },
                "ja-JP": {
                  singular: "画像を変更"
                },
                "ko-KR": {
                  singular: "사진 변경"
                },
                "pt-BR": {
                  singular: "Alterar imagem"
                },
                "zh-CN": {
                  singular: "更换图片"
                }
              }
            }) : (0, _v5.translate)({
              singular: "Upload picture",
              dictionary: {
                es: {
                  singular: "Subir imagen"
                },
                "de-DE": {
                  singular: "Bild hochladen"
                },
                "fr-FR": {
                  singular: "Téléverser l'image"
                },
                "ja-JP": {
                  singular: "画像をアップロード"
                },
                "ko-KR": {
                  singular: "사진 업로드"
                },
                "pt-BR": {
                  singular: "Enviar imagem"
                },
                "zh-CN": {
                  singular: "上传图片"
                }
              }
            })
          })]
        }),
        initialLogo: _v5.url ? {
          url: _v5.url,
          uri: _v5.uri ?? void 0
        } : void 0,
        isPickerOpen: _v2,
        onClose: () => _v3(!1),
        onLogoSelect: ({
          logoUri: _v0,
          logoUrl: _v1
        }) => {
          _v1({
            landingPageLogo: {
              type: "custom",
              uri: _v0,
              url: _v1
            }
          }), _v3(!1);
        },
        popoverPlacement: "bottom-start",
        visualMatchingEnabled: !0
      }) : null]
    });
  }
  let _v140 = {
    _active: {
      bgColor: "whiteAlpha.900"
    },
    _disabled: {
      color: "black",
      opacity: .5,
      cursor: "not-allowed"
    },
    _hover: {
      bgColor: "whiteAlpha.900"
    },
    bgColor: "whiteAlpha.700",
    color: "gray.900",
    size: "xs"
  };
  function _v141({
    isAiEnabled: _v0,
    isTranslating: _v1,
    isSubmitting: _v2,
    onTranslate: _v3,
    onMarkUpToDate: _v4
  }) {
    let _v5 = _v1 || _v2;
    return (0, _v1.jsxs)(_v57.Alert, {
      size: "sm",
      status: "warning",
      width: "100%",
      children: [(0, _v1.jsx)(_v58.AlertDescription, {
        textStyle: "body-sm",
        children: (0, _v5.translate)({
          singular: "Some speakers have missing or outdated translations.",
          dictionary: {
            es: {
              singular: "Algunos ponentes tienen traducciones faltantes o desactualizadas."
            },
            "de-DE": {
              singular: "Bei einigen Sprechern fehlen Übersetzungen oder sie sind veraltet."
            },
            "fr-FR": {
              singular: "Certains intervenants ont des traductions manquantes ou obsolètes."
            },
            "ja-JP": {
              singular: "一部のスピーカーの翻訳が不足しているか古くなっています。"
            },
            "ko-KR": {
              singular: "일부 발표자의 번역이 누락되었거나 오래되었습니다."
            },
            "pt-BR": {
              singular: "Alguns palestrantes têm traduções ausentes ou desatualizadas."
            },
            "zh-CN": {
              singular: "部分演讲者的翻译缺失或已过时。"
            }
          }
        })
      }), (0, _v1.jsxs)(_v15.Flex, {
        gap: "xs",
        mt: "xs",
        flexWrap: "wrap",
        children: [_v0 ? (0, _v1.jsx)(_v3.Button, {
          ..._v140,
          isDisabled: _v5,
          isLoading: _v1,
          onClick: _v3,
          children: (0, _v5.translate)({
            singular: "Translate with AI",
            dictionary: {
              es: {
                singular: "Traducir con IA"
              },
              "de-DE": {
                singular: "Mit KI übersetzen"
              },
              "fr-FR": {
                singular: "Traduire avec l'IA"
              },
              "ja-JP": {
                singular: "AIで翻訳"
              },
              "ko-KR": {
                singular: "AI로 번역"
              },
              "pt-BR": {
                singular: "Traduzir com IA"
              },
              "zh-CN": {
                singular: "使用 AI 翻译"
              }
            }
          })
        }) : null, (0, _v1.jsx)(_v3.Button, {
          ..._v140,
          isDisabled: _v5,
          isLoading: _v2,
          onClick: _v4,
          children: (0, _v5.translate)({
            singular: "Mark as up to date",
            dictionary: {
              es: {
                singular: "Marcar como actualizado"
              },
              "de-DE": {
                singular: "Als aktuell markieren"
              },
              "fr-FR": {
                singular: "Marquer comme étant à jour"
              },
              "ja-JP": {
                singular: "最新としてマーク"
              },
              "ko-KR": {
                singular: "최신 상태로 표시"
              },
              "pt-BR": {
                singular: "Marcar como atualizado"
              },
              "zh-CN": {
                singular: "标记为最新"
              }
            }
          })
        })]
      })]
    });
  }
  var _v142 = _v0.i(0);
  let _v143 = ["id", "personProfile.name", "personProfile.role", "personProfile.description"],
    _v144 = {
      perPage: 100,
      visibilityStatus: "visible"
    },
    _v145 = _v0 => _v0?.data?.map(({
      id: _v0,
      personProfile: _v1
    }) => ({
      id: _v0,
      name: _v1.name,
      role: _v1.role ?? "",
      description: _v1.description ?? ""
    })) ?? [];
  var _v146 = _v0.i(0),
    _v147 = _v0.i(0);
  async function _v148({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      liveEventId: _v3,
      locale: _v4
    },
    ..._v5
  }) {
    return (0, _v49.measureLatency)("putLiveEventLocalization", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v3}/localizations/${_v4}?fields=${_v1.map(_v50.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PUT",
        body: JSON.stringify((0, _v50.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  async function _v149({
    baseUrl: _v0,
    where: {
      liveEventId: _v1,
      locale: _v2
    },
    ..._v3
  }) {
    return (0, _v49.measureLatency)("deleteLiveEventLocalization", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v1}/localizations/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  async function _v150({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      liveEventId: _v3,
      locale: _v4
    },
    ..._v5
  }) {
    return (0, _v49.measureLatency)("patchLiveEventLocalization", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v3}/localizations/${_v4}?fields=${_v1.map(_v50.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v50.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  async function _v151({
    baseUrl: _v0,
    select: _v1,
    where: {
      liveEventId: _v2
    },
    ..._v3
  }) {
    return (0, _v49.measureLatency)("getLiveEventLocalizations", "GET", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v2}/localizations?fields=${_v1.map(_v50.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  async function _v152({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      liveEventId: _v3
    },
    ..._v4
  }) {
    return (0, _v49.measureLatency)("patchLiveEventLocalizations", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v3}/localizations?fields=${_v1.map(_v50.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v50.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  async function _v153({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      liveEventId: _v3
    },
    ..._v4
  }) {
    return (0, _v49.measureLatency)("postLiveEventLocalizationsTranslate", "POST", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v3}/localizations/translate?fields=${_v1.map(_v50.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v50.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v50.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v50.deepCamelCase)(_v1);
    });
  }
  var _v154 = _v0.i(0);
  let _v155 = ["sourceLocale", "availableLocales", "locales.locale", "locales.isPublished", "locales.values", "locales.draftValues", "locales.hasDraft", "locales.isOutOfSync", "locales.version", "locales.outOfSyncPaths", "aiTranslationEnabled"],
    _v156 = ["locale", "isPublished", "values", "draftValues", "hasDraft", "isOutOfSync", "version", "outOfSyncPaths"],
    _v157 = {
      sourceLocale: null,
      availableLocales: [],
      locales: [],
      aiTranslationEnabled: !1
    },
    _v158 = (_v0, _v1) => {
      let _v2 = _v0 ?? _v157,
        _v3 = _v2.locales.some(_v0 => _v0.locale === _v1.locale);
      return {
        ..._v2,
        availableLocales: _v3 ? _v2.availableLocales : [..._v2.availableLocales, _v1.locale],
        locales: _v3 ? _v2.locales.map(_v0 => _v0.locale === _v1.locale ? _v1 : _v0) : [..._v2.locales, _v1]
      };
    };
  var _v159 = _v0.i(0);
  let _v160 = new Set(["translations"]);
  _v0.s(["LandingPageSettings", 0, function () {
    let _v0 = (0, _v22.useOrionSettingsFields)(["release_single_event_customization", "enable_single_event_localization", "enable_event_series_in_dev_features"]),
      _v1 = _v0.release_single_event_customization,
      _v2 = _v0.enable_single_event_localization,
      _v3 = _v0.enable_event_series_in_dev_features,
      {
        sessionId: _v4
      } = (0, _v2.useManager)(_v7.ComposerSessionManager),
      _v5 = Number(_v4),
      _v6 = _v2 && _v5 > 0,
      _v7 = ["navbar", ...(_v1 ? ["speakers"] : []), ...(_v2 ? ["translations"] : [])],
      [_v8, _v9] = (0, _v9.useState)(_v160),
      _v10 = _v7.flatMap((_v0, _v1) => _v8.has(_v0) ? [_v1] : []),
      _v11 = ((_v0, _v1 = !0) => {
        let {
            baseUrl: _v2,
            jwt: _v3,
            xVimeoPage: _v4,
            locale: _v5
          } = (0, _v53.useGctlConfig)(),
          _v6 = (0, _v9.useMemo)(() => ({
            baseUrl: _v2,
            headers: {
              "Content-Type": "application/json",
              Authorization: null != _v3 && "" !== _v3 ? `jwt ${_v3}` : "",
              "Vimeo-Page": `${_v4}`,
              "Accept-Language": _v5 ?? "en"
            }
          }), [_v2, _v3, _v4, _v5]),
          _v7 = (0, _v9.useMemo)(() => ({
            liveEventId: _v0
          }), [_v0]),
          {
            data: _v8,
            isLoading: _v9,
            mutate: _v10
          } = function (_v0, _v1) {
            let _v2 = "function" == typeof _v0 ? _v0() : _v0,
              {
                baseUrl: _v3,
                jwt: _v4,
                xVimeoPage: _v5,
                locale: _v6
              } = (0, _v53.useGctlConfig)();
            return (0, _v87.default)(_v2 ? `/live_events/${_v2.where.liveEventId}/localizations${(0, _v86.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v151({
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
          }(() => _v1 && _v0 > 0 ? {
            select: _v155,
            where: _v7
          } : null, {
            shouldRetryOnError: !1,
            revalidateOnFocus: !1
          }),
          _v11 = _v8?.locales ?? _v157.locales,
          _v12 = (0, _v9.useMemo)(() => {
            let _v0;
            return _v0 = {}, _v11.forEach(_v0 => {
              let _v1 = _v42(_v0.locale);
              null !== _v1 && (_v0[_v1] = {
                isPublished: _v0.isPublished,
                hasDraft: _v0.hasDraft,
                isOutOfSync: _v0.isOutOfSync,
                leaves: (_v0 => {
                  if (!_v40(_v0)) return _v29.EMPTY_LEAVES;
                  let _v1 = {};
                  _v35.forEach(_v0 => {
                    let _v1 = _v0[_v0];
                    _v41(_v1) && (_v1[_v0] = {
                      value: _v1.value,
                      provenance: _v1.provenance
                    });
                  });
                  let _v2 = _v0[_v36];
                  return _v40(_v2) && Object.entries(_v2).forEach(([_v0, _v1]) => {
                    _v38.test(_v0) && _v40(_v1) && _v37.forEach(_v0 => {
                      let _v1 = _v1[_v0];
                      _v41(_v1) && (_v1[_v39(_v0, _v0)] = {
                        value: _v1.value,
                        provenance: _v1.provenance
                      });
                    });
                  }), _v1;
                })(_v0.hasDraft ? _v0.draftValues : _v0.values),
                version: _v0.version
              });
            }), _v0;
          }, [_v11]),
          _v13 = (0, _v9.useMemo)(() => {
            let _v0 = {};
            return _v11.forEach(_v0 => {
              let _v1 = _v42(_v0.locale),
                _v2 = _v0.outOfSyncPaths;
              if (null === _v1 || !_v0.isPublished || !_v0.isOutOfSync || null === _v2) return;
              let _v3 = [..._v2.added, ..._v2.changed].filter(_v0 => _v0.startsWith("speakers."));
              _v3.length > 0 && (_v0[_v1] = _v3);
            }), _v0;
          }, [_v11]),
          _v14 = (0, _v9.useCallback)(_v0 => _v11.find(_v0 => _v0.locale === _v0)?.version, [_v11]),
          _v15 = (0, _v9.useCallback)(_v0 => {
            let _v1 = _v11.find(_v0 => _v0.locale === _v0);
            return void 0 === _v1 ? void 0 : _v1.hasDraft ? _v1.draftValues : _v1.values;
          }, [_v11]),
          _v16 = (0, _v18.useToast)(),
          _v17 = (0, _v9.useCallback)(_v0 => {
            _v16({
              isClosable: !0,
              title: _v0,
              variant: "warning"
            });
          }, [_v16]),
          _v18 = (0, _v9.useCallback)(() => {
            _v17((0, _v5.translate)({
              singular: "Something went wrong. Your changes were not saved.",
              dictionary: {
                es: {
                  singular: "Algo salió mal. Tus cambios no se guardaron."
                },
                "de-DE": {
                  singular: "Etwas ist schiefgegangen. Ihre Änderungen wurden nicht gespeichert."
                },
                "fr-FR": {
                  singular: "Une erreur s’est produite. Vos modifications n’ont pas été enregistrées."
                },
                "ja-JP": {
                  singular: "問題が発生しました。変更は保存されませんでした。"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다. 변경 내용이 저장되지 않았습니다."
                },
                "pt-BR": {
                  singular: "Algo deu errado. Suas alterações não foram salvas."
                },
                "zh-CN": {
                  singular: "出错了。您的更改未被保存。"
                }
              }
            }));
          }, [_v17]),
          _v19 = (0, _v9.useCallback)(() => {
            _v10();
          }, [_v10]),
          [_v20, _v21] = (0, _v9.useState)(null),
          _v22 = null !== _v20,
          _v23 = _v42(_v8?.sourceLocale),
          _v24 = _v20 ?? _v23,
          _v25 = (0, _v9.useCallback)(_v0 => _v0 === _v24 ? Promise.resolve(!0) : _v22 || _v0 <= 0 ? Promise.resolve(!1) : (_v21(_v0), _v152({
            ..._v6,
            where: _v7,
            select: _v155,
            variables: {
              sourceLocale: _v0
            }
          }).then(_v0 => _v10(_v0, {
            revalidate: !1
          })).then(() => !0).catch(() => (_v18(), !1)).finally(() => _v21(null))), [_v24, _v22, _v0, _v6, _v7, _v10, _v18]),
          [_v26, _v27] = (0, _v9.useState)(!1),
          _v28 = (0, _v9.useCallback)(async (_v0, _v1, _v2) => {
            if (null === _v23 || _v26) return !1;
            _v27(!0);
            try {
              let _v0 = _v14(_v0),
                _v1 = await _v148({
                  ..._v6,
                  where: {
                    ..._v7,
                    locale: _v0
                  },
                  select: _v156,
                  variables: {
                    values: _v43(_v1, _v15(_v0)),
                    publish: _v2,
                    ...(void 0 === _v0 ? {} : {
                      version: _v0
                    })
                  }
                });
              return await _v10(_v0 => _v158(_v0, _v1), {
                revalidate: !1
              }), _v16({
                isClosable: !0,
                title: _v2 ? (0, _v5.translate)({
                  singular: "Translation published",
                  dictionary: {
                    es: {
                      singular: "Traducción publicada"
                    },
                    "de-DE": {
                      singular: "Übersetzung veröffentlicht"
                    },
                    "fr-FR": {
                      singular: "Traduction publiée"
                    },
                    "ja-JP": {
                      singular: "翻訳が公開されました"
                    },
                    "ko-KR": {
                      singular: "번역이 게시되었습니다"
                    },
                    "pt-BR": {
                      singular: "Tradução publicada"
                    },
                    "zh-CN": {
                      singular: "翻译已发布"
                    }
                  }
                }) : (0, _v5.translate)({
                  singular: "Draft saved",
                  dictionary: {
                    es: {
                      singular: "Borrador guardado"
                    },
                    "de-DE": {
                      singular: "Entwurf gespeichert"
                    },
                    "fr-FR": {
                      singular: "Brouillon enregistré"
                    },
                    "ja-JP": {
                      singular: "下書きが保存されました"
                    },
                    "ko-KR": {
                      singular: "임시 저장됨"
                    },
                    "pt-BR": {
                      singular: "Rascunho salvo"
                    },
                    "zh-CN": {
                      singular: "草稿已保存"
                    }
                  }
                }),
                variant: "success"
              }), !0;
            } catch {
              return _v18(), _v10(), !1;
            } finally {
              _v27(!1);
            }
          }, [_v23, _v26, _v14, _v15, _v6, _v7, _v10, _v16, _v18]),
          _v29 = (0, _v9.useCallback)(async _v0 => {
            if (void 0 === _v14(_v0)) return !0;
            if (_v26) return !1;
            _v27(!0);
            try {
              return await _v149({
                ..._v6,
                where: {
                  ..._v7,
                  locale: _v0
                }
              }), await _v10(_v0 => void 0 === _v0 ? _v0 : {
                ..._v0,
                availableLocales: _v0.availableLocales.filter(_v0 => _v0 !== _v0),
                locales: _v0.locales.filter(_v0 => _v0.locale !== _v0)
              }, {
                revalidate: !1
              }), !0;
            } catch {
              return _v18(), !1;
            } finally {
              _v27(!1);
            }
          }, [_v14, _v26, _v6, _v7, _v10, _v18]),
          _v30 = (0, _v9.useCallback)((_v0, _v1) => {
            let _v2 = _v14(_v0);
            void 0 === _v2 || _v26 || (_v27(!0), _v150({
              ..._v6,
              where: {
                ..._v7,
                locale: _v0
              },
              select: _v156,
              variables: {
                state: _v1 ? "published" : "unpublished",
                version: _v2
              }
            }).then(_v0 => _v10(_v0 => _v158(_v0, _v0), {
              revalidate: !1
            })).catch(() => {
              _v18(), _v10();
            }).finally(() => _v27(!1)));
          }, [_v14, _v26, _v6, _v7, _v10, _v18]),
          _v31 = (0, _v9.useCallback)(async () => {
            let _v0 = Object.keys(_v12).filter(_v0 => {
              let _v1 = _v12[_v0];
              return void 0 !== _v1 && _v1.isPublished && _v1.isOutOfSync && !_v1.hasDraft;
            });
            if (null === _v23 || _v26 || 0 === _v0.length) return !1;
            _v27(!0);
            try {
              let _v0 = await Promise.all(_v0.map(_v0 => {
                let _v1 = _v14(_v0);
                return _v148({
                  ..._v6,
                  where: {
                    ..._v7,
                    locale: _v0
                  },
                  select: _v156,
                  variables: {
                    values: _v43(_v12[_v0]?.leaves ?? {}, _v15(_v0)),
                    publish: !0,
                    ...(void 0 === _v1 ? {} : {
                      version: _v1
                    })
                  }
                });
              }));
              return await _v10(_v0 => _v0.reduce(_v158, _v0 ?? _v157), {
                revalidate: !1
              }), !0;
            } catch {
              return _v18(), _v10(), !1;
            } finally {
              _v27(!1);
            }
          }, [_v12, _v23, _v26, _v14, _v15, _v6, _v7, _v10, _v18]),
          [_v32, _v33] = (0, _v9.useState)(!1),
          _v34 = (0, _v9.useCallback)(async (_v0, _v1, _v2) => {
            let _v3,
              _v4,
              _v5 = (_v3 = {}, (_v4 = (_v0, _v1) => {
                "" !== _v1.trim() && (_v3[_v0] = _v1);
              })(_v33, _v0.title), _v4(_v34, _v0.streamDescription), _v0.visibleSpeakers.forEach(_v0 => {
                _v37.forEach(_v0 => _v4(_v39(_v0.id, _v0), _v0[_v0]));
              }), _v3),
              _v6 = void 0 === _v2 ? _v5 : Object.fromEntries(Object.entries(_v5).filter(([_v0]) => _v2.includes(_v0))),
              _v7 = Object.keys(_v6);
            if (0 === _v1.length || _v32) return null;
            if (0 === _v7.length) return _v17((0, _v5.translate)({
              singular: "There is no text to translate yet.",
              dictionary: {
                es: {
                  singular: "Aún no hay texto para traducir."
                },
                "de-DE": {
                  singular: "Es gibt noch keinen Text zum Übersetzen."
                },
                "fr-FR": {
                  singular: "Il n'y a pas encore de texte à traduire."
                },
                "ja-JP": {
                  singular: "まだ翻訳するテキストがありません。"
                },
                "ko-KR": {
                  singular: "아직 번역할 텍스트가 없습니다."
                },
                "pt-BR": {
                  singular: "Ainda não há texto para traduzir."
                },
                "zh-CN": {
                  singular: "当前没有可翻译的文本。"
                }
              }
            })), null;
            if (null === _v23) return _v17((0, _v5.translate)({
              singular: "Please set a main language before translating.",
              dictionary: {
                es: {
                  singular: "Por favor, establece un idioma principal antes de traducir."
                },
                "de-DE": {
                  singular: "Bitte legen Sie eine Hauptsprache fest, bevor Sie übersetzen."
                },
                "fr-FR": {
                  singular: "Veuillez définir une langue principale avant de traduire."
                },
                "ja-JP": {
                  singular: "翻訳する前にメイン言語を設定してください。"
                },
                "ko-KR": {
                  singular: "번역하기 전에 기본 언어를 설정해 주세요."
                },
                "pt-BR": {
                  singular: "Defina um idioma principal antes de traduzir."
                },
                "zh-CN": {
                  singular: "请在翻译之前设置主语言。"
                }
              }
            })), null;
            _v33(!0);
            try {
              let _v0 = await _v153({
                  ..._v6,
                  where: _v7,
                  select: ["requestId", "translations"],
                  variables: {
                    strings: _v6,
                    targetLocales: _v1
                  }
                }),
                {
                  edits: _v1,
                  incomplete: _v2
                } = (0, _v154.parseAITranslationResults)(_v0.translations, _v1, _v7);
              if (!_v1.some(_v0 => void 0 !== _v1[_v0])) return _v17((0, _v5.translate)({
                singular: "Something went wrong. Your translations were not created.",
                dictionary: {
                  es: {
                    singular: "Algo salió mal. No se crearon tus traducciones."
                  },
                  "de-DE": {
                    singular: "Etwas ist schiefgelaufen. Ihre Übersetzungen wurden nicht erstellt."
                  },
                  "fr-FR": {
                    singular: "Une erreur s'est produite. Vos traductions n'ont pas été créées."
                  },
                  "ja-JP": {
                    singular: "問題が発生しました。翻訳は作成されませんでした。"
                  },
                  "ko-KR": {
                    singular: "문제가 발생했습니다. 번역이 생성되지 않았습니다."
                  },
                  "pt-BR": {
                    singular: "Algo deu errado. Suas traduções não foram criadas."
                  },
                  "zh-CN": {
                    singular: "出现问题。未能创建翻译。"
                  }
                }
              })), null;
              return _v2 && _v17((0, _v5.translate)({
                singular: "Some text could not be translated. Check it before publishing.",
                dictionary: {
                  es: {
                    singular: "Algunos textos no se pudieron traducir. Revísalos antes de publicar."
                  },
                  "de-DE": {
                    singular: "Einige Texte konnten nicht übersetzt werden. Prüfen Sie diese vor der Veröffentlichung."
                  },
                  "fr-FR": {
                    singular: "Une partie du texte n'a pas pu être traduite. Vérifiez-la avant la publication."
                  },
                  "ja-JP": {
                    singular: "一部のテキストは翻訳できませんでした。公開前に確認してください。"
                  },
                  "ko-KR": {
                    singular: "일부 텍스트를 번역할 수 없습니다. 게시하기 전에 확인하세요."
                  },
                  "pt-BR": {
                    singular: "Algum texto não pôde ser traduzido. Verifique antes de publicar."
                  },
                  "zh-CN": {
                    singular: "部分文本无法翻译。请在发布前检查。"
                  }
                }
              })), _v1;
            } catch {
              return _v17((0, _v5.translate)({
                singular: "Something went wrong. Your translations were not created.",
                dictionary: {
                  es: {
                    singular: "Algo salió mal. No se crearon tus traducciones."
                  },
                  "de-DE": {
                    singular: "Etwas ist schiefgelaufen. Ihre Übersetzungen wurden nicht erstellt."
                  },
                  "fr-FR": {
                    singular: "Une erreur s'est produite. Vos traductions n'ont pas été créées."
                  },
                  "ja-JP": {
                    singular: "問題が発生しました。翻訳は作成されませんでした。"
                  },
                  "ko-KR": {
                    singular: "문제가 발생했습니다. 번역이 생성되지 않았습니다."
                  },
                  "pt-BR": {
                    singular: "Algo deu errado. Suas traduções não foram criadas."
                  },
                  "zh-CN": {
                    singular: "出现问题。未能创建翻译。"
                  }
                }
              })), null;
            } finally {
              _v33(!1);
            }
          }, [_v32, _v23, _v6, _v7, _v17]),
          _v35 = (0, _v9.useCallback)(async _v0 => {
            let _v1 = Object.keys(_v13),
              _v2 = [...new Set(_v1.flatMap(_v0 => _v13[_v0] ?? []))],
              _v3 = await _v34(_v0, _v1, _v2);
            if (null === _v3) return null;
            let _v4 = {};
            _v1.forEach(_v0 => {
              let _v1 = _v13[_v0] ?? [],
                _v2 = Object.entries(_v3[_v0] ?? {}).filter(([_v0]) => _v1.includes(_v0));
              _v2.length > 0 && (_v4[_v0] = Object.fromEntries(_v2));
            });
            let _v5 = _v1.filter(_v0 => void 0 !== _v4[_v0]);
            return 0 === _v5.length ? (_v17((0, _v5.translate)({
              singular: "Something went wrong. Your translations were not created.",
              dictionary: {
                es: {
                  singular: "Algo salió mal. No se crearon tus traducciones."
                },
                "de-DE": {
                  singular: "Etwas ist schiefgelaufen. Ihre Übersetzungen wurden nicht erstellt."
                },
                "fr-FR": {
                  singular: "Une erreur s'est produite. Vos traductions n'ont pas été créées."
                },
                "ja-JP": {
                  singular: "問題が発生しました。翻訳は作成されませんでした。"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다. 번역이 생성되지 않았습니다."
                },
                "pt-BR": {
                  singular: "Algo deu errado. Suas traduções não foram criadas."
                },
                "zh-CN": {
                  singular: "出现问题。未能创建翻译。"
                }
              }
            })), null) : {
              locales: _v5,
              edits: _v4
            };
          }, [_v13, _v34, _v17]);
        return {
          isLoading: _v9,
          savedLocales: _v12,
          sourceLocale: _v24,
          isSubmittingSourceLocale: _v22,
          changeSourceLocale: _v25,
          isSubmitting: _v26,
          saveLocale: _v28,
          setPublished: _v30,
          removeLocale: _v29,
          isAiEnabled: _v8?.aiTranslationEnabled ?? !1,
          isAITranslating: _v32,
          translateLocales: _v34,
          hasSpeakerOutOfSync: Object.keys(_v13).length > 0,
          translateOutOfSyncSpeakers: _v35,
          republishLocales: _v31,
          revalidate: _v19
        };
      })(_v5, _v6),
      {
        isAiEnabled: _v12,
        isAITranslating: _v13,
        isSubmitting: _v14,
        hasSpeakerOutOfSync: _v15,
        translateOutOfSyncSpeakers: _v16,
        republishLocales: _v17,
        revalidate: _v18
      } = _v11,
      {
        source: _v19,
        isSourceLoading: _v20,
        revalidateSpeakers: _v21,
        getLiveEventLocalizationSource: _v22
      } = ((_v0, _v1 = !0) => {
        let {
            settings: {
              value: _v2
            }
          } = (0, _v2.useManager)(_v8.EventSettingsManager),
          {
            baseUrl: _v3,
            jwt: _v4,
            xVimeoPage: _v5,
            locale: _v6
          } = (0, _v53.useGctlConfig)(),
          {
            data: _v7,
            isLoading: _v8,
            mutate: _v9
          } = (0, _v54.useGetLiveEventSpeakerProfiles)(() => _v1 ? {
            select: _v143,
            where: {
              liveEventId: _v0
            },
            query: _v144
          } : null, {
            revalidateOnFocus: !1
          }),
          _v10 = _v2?.title ?? "",
          _v11 = _v2?.streamDescription ?? "",
          _v12 = (0, _v9.useMemo)(() => _v145(_v7), [_v7]);
        return {
          source: (0, _v9.useMemo)(() => ({
            title: _v10,
            streamDescription: _v11,
            visibleSpeakers: _v12
          }), [_v10, _v11, _v12]),
          isSourceLoading: _v8,
          revalidateSpeakers: _v9,
          getLiveEventLocalizationSource: (0, _v9.useCallback)(async () => ({
            title: _v10,
            streamDescription: _v11,
            visibleSpeakers: _v145(await (0, _v142.getLiveEventSpeakerProfiles)({
              baseUrl: _v3,
              headers: {
                "Content-Type": "application/json",
                Authorization: null != _v4 && "" !== _v4 ? `jwt ${_v4}` : "",
                "Vimeo-Page": `${_v5}`,
                "Accept-Language": _v6 ?? "en"
              },
              select: _v143,
              where: {
                liveEventId: _v0
              },
              query: _v144
            }))
          }), [_v3, _v4, _v5, _v6, _v0, _v10, _v11])
        };
      })(_v5, _v6 && _v8.has("translations")),
      {
        openEditor: _v23,
        openLocalePicker: _v24,
        modals: _v25
      } = (({
        localizations: _v0,
        source: _v1,
        revalidateSpeakers: _v2
      }) => {
        let _v3 = (0, _v28.useLocale)(),
          {
            isLoading: _v4,
            savedLocales: _v5,
            sourceLocale: _v6,
            isSubmittingSourceLocale: _v7,
            changeSourceLocale: _v8,
            isSubmitting: _v9,
            saveLocale: _v10,
            isAiEnabled: _v11,
            isAITranslating: _v12,
            translateLocales: _v13
          } = _v0,
          _v14 = _v6 ?? (_v4 ? null : _v42(_v3)),
          [_v15, _v16] = (0, _v9.useState)(!1),
          [_v17, _v18] = (0, _v9.useState)(null),
          [_v19, _v20] = (0, _v9.useState)([]),
          [_v21, _v22] = (0, _v9.useState)({}),
          [_v23, _v24] = (0, _v9.useState)(null),
          _v25 = _v23 ?? _v1,
          _v26 = (0, _v9.useMemo)(() => [{
            id: "details",
            label: (0, _v5.translate)({
              singular: "Event details",
              dictionary: {
                es: {
                  singular: "Detalles del evento"
                },
                "de-DE": {
                  singular: "Veranstaltungsdetails"
                },
                "fr-FR": {
                  singular: "Détails de l’événement"
                },
                "ja-JP": {
                  singular: "イベントの詳細"
                },
                "ko-KR": {
                  singular: "이벤트 세부 정보"
                },
                "pt-BR": {
                  singular: "Detalhes do evento"
                },
                "zh-CN": {
                  singular: "活动详情"
                }
              }
            }),
            isDisabled: !_v44(_v25),
            fields: [{
              path: _v33,
              label: (0, _v5.translate)({
                singular: "Title",
                dictionary: {
                  es: {
                    singular: "Título"
                  },
                  "de-DE": {
                    singular: "Titel"
                  },
                  "fr-FR": {
                    singular: "Titre"
                  },
                  "ja-JP": {
                    singular: "タイトル"
                  },
                  "ko-KR": {
                    singular: "제목"
                  },
                  "pt-BR": {
                    singular: "Título"
                  },
                  "zh-CN": {
                    singular: "标题"
                  }
                }
              }),
              sourceAriaLabel: (0, _v5.translate)({
                singular: "Title in the original language",
                dictionary: {
                  es: {
                    singular: "Título en el idioma original"
                  },
                  "de-DE": {
                    singular: "Titel in der Originalsprache"
                  },
                  "fr-FR": {
                    singular: "Titre dans la langue d’origine"
                  },
                  "ja-JP": {
                    singular: "元の言語のタイトル"
                  },
                  "ko-KR": {
                    singular: "원본 언어의 제목"
                  },
                  "pt-BR": {
                    singular: "Título no idioma original"
                  },
                  "zh-CN": {
                    singular: "原始语言的标题"
                  }
                }
              }),
              targetAriaLabel: (0, _v5.translate)({
                singular: "Translated title",
                dictionary: {
                  es: {
                    singular: "Título traducido"
                  },
                  "de-DE": {
                    singular: "Übersetzter Titel"
                  },
                  "fr-FR": {
                    singular: "Titre traduit"
                  },
                  "ja-JP": {
                    singular: "翻訳済みのタイトル"
                  },
                  "ko-KR": {
                    singular: "번역된 제목"
                  },
                  "pt-BR": {
                    singular: "Título traduzido"
                  },
                  "zh-CN": {
                    singular: "翻译后的标题"
                  }
                }
              }),
              sourceValue: _v25.title,
              maxLength: 128
            }, {
              path: _v34,
              label: (0, _v5.translate)({
                singular: "Description",
                dictionary: {
                  es: {
                    singular: "Descripción"
                  },
                  "de-DE": {
                    singular: "Beschreibung"
                  },
                  "ja-JP": {
                    singular: "説明"
                  },
                  "ko-KR": {
                    singular: "설명"
                  },
                  "pt-BR": {
                    singular: "Descrição"
                  },
                  "zh-CN": {
                    singular: "描述"
                  }
                }
              }),
              sourceAriaLabel: (0, _v5.translate)({
                singular: "Description in the original language",
                dictionary: {
                  es: {
                    singular: "Descripción en el idioma original"
                  },
                  "de-DE": {
                    singular: "Beschreibung in der Originalsprache"
                  },
                  "fr-FR": {
                    singular: "Description dans la langue d’origine"
                  },
                  "ja-JP": {
                    singular: "元の言語の説明"
                  },
                  "ko-KR": {
                    singular: "원본 언어의 설명"
                  },
                  "pt-BR": {
                    singular: "Descrição no idioma original"
                  },
                  "zh-CN": {
                    singular: "原始语言的描述"
                  }
                }
              }),
              targetAriaLabel: (0, _v5.translate)({
                singular: "Translated description",
                dictionary: {
                  es: {
                    singular: "Descripción traducida"
                  },
                  "de-DE": {
                    singular: "Übersetzte Beschreibung"
                  },
                  "fr-FR": {
                    singular: "Description traduite"
                  },
                  "ja-JP": {
                    singular: "翻訳済みの説明"
                  },
                  "ko-KR": {
                    singular: "번역된 설명"
                  },
                  "pt-BR": {
                    singular: "Descrição traduzida"
                  },
                  "zh-CN": {
                    singular: "翻译后的描述"
                  }
                }
              }),
              sourceValue: _v25.streamDescription,
              maxLength: 0,
              isMultiline: !0
            }]
          }, {
            id: "speakers",
            label: (0, _v5.translate)({
              singular: "Visible speakers",
              dictionary: {
                es: {
                  singular: "Ponentes visibles"
                },
                "de-DE": {
                  singular: "Sichtbare Sprecher"
                },
                "fr-FR": {
                  singular: "Intervenants visibles"
                },
                "ja-JP": {
                  singular: "表示されるスピーカー"
                },
                "ko-KR": {
                  singular: "표시되는 연사"
                },
                "pt-BR": {
                  singular: "Palestrantes visíveis"
                },
                "zh-CN": {
                  singular: "可见发言人"
                }
              }
            }),
            isDisabled: 0 === _v25.visibleSpeakers.length,
            fields: [],
            groups: _v25.visibleSpeakers.map((_v0, _v1) => {
              let _v2;
              return {
                id: String(_v0.id),
                label: (0, _v5.translate)({
                  singular: "Speaker {NUMBER}",
                  replacements: {
                    NUMBER: _v1 + 1
                  },
                  dictionary: {
                    es: {
                      singular: "Ponente {NUMBER}"
                    },
                    "de-DE": {
                      singular: "Sprecher {NUMBER}"
                    },
                    "fr-FR": {
                      singular: "Intervenant {NUMBER}"
                    },
                    "ja-JP": {
                      singular: "スピーカー {NUMBER}"
                    },
                    "ko-KR": {
                      singular: "연사 {NUMBER}"
                    },
                    "pt-BR": {
                      singular: "Palestrante {NUMBER}"
                    },
                    "zh-CN": {
                      singular: "发言人 {NUMBER}"
                    }
                  }
                }),
                fields: (_v2 = {
                  NUMBER: _v1 + 1
                }, [{
                  path: _v39(_v0.id, "name"),
                  label: (0, _v5.translate)({
                    singular: "Name",
                    dictionary: {
                      es: {
                        singular: "Nombre"
                      },
                      "fr-FR": {
                        singular: "Nom"
                      },
                      "ja-JP": {
                        singular: "名前"
                      },
                      "ko-KR": {
                        singular: "이름"
                      },
                      "pt-BR": {
                        singular: "Nome"
                      },
                      "zh-CN": {
                        singular: "姓名"
                      }
                    }
                  }),
                  sourceAriaLabel: (0, _v5.translate)({
                    singular: "Speaker {NUMBER} name in the original language",
                    replacements: _v2,
                    dictionary: {
                      es: {
                        singular: "Nombre del ponente {NUMBER} en el idioma original"
                      },
                      "de-DE": {
                        singular: "Name von Sprecher {NUMBER} in der Originalsprache"
                      },
                      "fr-FR": {
                        singular: "Nom de l'intervenant {NUMBER} dans la langue d'origine"
                      },
                      "ja-JP": {
                        singular: "スピーカー {NUMBER} の名前（原語）"
                      },
                      "ko-KR": {
                        singular: "연사 {NUMBER}의 원본 언어 이름"
                      },
                      "pt-BR": {
                        singular: "Nome do palestrante {NUMBER} no idioma original"
                      },
                      "zh-CN": {
                        singular: "发言人 {NUMBER} 的原文姓名"
                      }
                    }
                  }),
                  targetAriaLabel: (0, _v5.translate)({
                    singular: "Translated speaker {NUMBER} name",
                    replacements: _v2,
                    dictionary: {
                      es: {
                        singular: "Nombre traducido del ponente {NUMBER}"
                      },
                      "de-DE": {
                        singular: "Übersetzter Name von Sprecher {NUMBER}"
                      },
                      "fr-FR": {
                        singular: "Nom traduit de l'intervenant {NUMBER}"
                      },
                      "ja-JP": {
                        singular: "翻訳されたスピーカー {NUMBER} の名前"
                      },
                      "ko-KR": {
                        singular: "번역된 연사 {NUMBER} 이름"
                      },
                      "pt-BR": {
                        singular: "Nome traduzido do palestrante {NUMBER}"
                      },
                      "zh-CN": {
                        singular: "发言人 {NUMBER} 的译名"
                      }
                    }
                  }),
                  sourceValue: _v0.name,
                  maxLength: 120
                }, {
                  path: _v39(_v0.id, "role"),
                  label: (0, _v5.translate)({
                    singular: "Role",
                    dictionary: {
                      es: {
                        singular: "Rol"
                      },
                      "de-DE": {
                        singular: "Rolle"
                      },
                      "fr-FR": {
                        singular: "Rôle"
                      },
                      "ja-JP": {
                        singular: "肩書き"
                      },
                      "ko-KR": {
                        singular: "역할"
                      },
                      "pt-BR": {
                        singular: "Função"
                      },
                      "zh-CN": {
                        singular: "职位"
                      }
                    }
                  }),
                  sourceAriaLabel: (0, _v5.translate)({
                    singular: "Speaker {NUMBER} role in the original language",
                    replacements: _v2,
                    dictionary: {
                      es: {
                        singular: "Rol del ponente {NUMBER} en el idioma original"
                      },
                      "de-DE": {
                        singular: "Rolle von Sprecher {NUMBER} in der Originalsprache"
                      },
                      "fr-FR": {
                        singular: "Rôle de l'intervenant {NUMBER} dans la langue d'origine"
                      },
                      "ja-JP": {
                        singular: "スピーカー {NUMBER} の役割（原語）"
                      },
                      "ko-KR": {
                        singular: "연사 {NUMBER}의 원본 언어 역할"
                      },
                      "pt-BR": {
                        singular: "Função do palestrante {NUMBER} no idioma original"
                      },
                      "zh-CN": {
                        singular: "发言人 {NUMBER} 的原始语言职务"
                      }
                    }
                  }),
                  targetAriaLabel: (0, _v5.translate)({
                    singular: "Translated speaker {NUMBER} role",
                    replacements: _v2,
                    dictionary: {
                      es: {
                        singular: "Rol traducido del ponente {NUMBER}"
                      },
                      "de-DE": {
                        singular: "Übersetzte Rolle von Sprecher {NUMBER}"
                      },
                      "fr-FR": {
                        singular: "Rôle traduit de l'intervenant {NUMBER}"
                      },
                      "ja-JP": {
                        singular: "翻訳されたスピーカー {NUMBER} の役割"
                      },
                      "ko-KR": {
                        singular: "번역된 연사 {NUMBER} 역할"
                      },
                      "pt-BR": {
                        singular: "Função traduzida do palestrante {NUMBER}"
                      },
                      "zh-CN": {
                        singular: "发言人 {NUMBER} 的翻译职务"
                      }
                    }
                  }),
                  sourceValue: _v0.role,
                  maxLength: 120
                }, {
                  path: _v39(_v0.id, "description"),
                  label: (0, _v5.translate)({
                    singular: "Description",
                    dictionary: {
                      es: {
                        singular: "Descripción"
                      },
                      "de-DE": {
                        singular: "Beschreibung"
                      },
                      "ja-JP": {
                        singular: "説明"
                      },
                      "ko-KR": {
                        singular: "설명"
                      },
                      "pt-BR": {
                        singular: "Descrição"
                      },
                      "zh-CN": {
                        singular: "描述"
                      }
                    }
                  }),
                  sourceAriaLabel: (0, _v5.translate)({
                    singular: "Speaker {NUMBER} description in the original language",
                    replacements: _v2,
                    dictionary: {
                      es: {
                        singular: "Descripción del ponente {NUMBER} en el idioma original"
                      },
                      "de-DE": {
                        singular: "Beschreibung von Sprecher {NUMBER} in der Originalsprache"
                      },
                      "fr-FR": {
                        singular: "Description de l'intervenant {NUMBER} dans la langue d'origine"
                      },
                      "ja-JP": {
                        singular: "スピーカー {NUMBER} の説明（原語）"
                      },
                      "ko-KR": {
                        singular: "연사 {NUMBER}의 원본 언어 설명"
                      },
                      "pt-BR": {
                        singular: "Descrição do palestrante {NUMBER} no idioma original"
                      },
                      "zh-CN": {
                        singular: "发言人 {NUMBER} 的原始语言描述"
                      }
                    }
                  }),
                  targetAriaLabel: (0, _v5.translate)({
                    singular: "Translated speaker {NUMBER} description",
                    replacements: _v2,
                    dictionary: {
                      es: {
                        singular: "Descripción traducida del ponente {NUMBER}"
                      },
                      "de-DE": {
                        singular: "Übersetzte Beschreibung von Sprecher {NUMBER}"
                      },
                      "fr-FR": {
                        singular: "Description traduite de l'intervenant {NUMBER}"
                      },
                      "ja-JP": {
                        singular: "翻訳されたスピーカー {NUMBER} の説明"
                      },
                      "ko-KR": {
                        singular: "번역된 연사 {NUMBER} 설명"
                      },
                      "pt-BR": {
                        singular: "Descrição traduzida do palestrante {NUMBER}"
                      },
                      "zh-CN": {
                        singular: "发言人 {NUMBER} 的翻译描述"
                      }
                    }
                  }),
                  sourceValue: _v0.description,
                  maxLength: 255,
                  isMultiline: !0
                }].filter(_v0 => "" !== _v0.sourceValue.trim()))
              };
            })
          }], [_v25]),
          {
            untranslatedLocales: _v27,
            selectableLocales: _v28
          } = (0, _v9.useMemo)(() => {
            let _v0 = _v32.filter(_v0 => _v0 !== _v14),
              _v1 = _v0 => void 0 !== _v5[_v0];
            return {
              untranslatedLocales: _v0.filter(_v0 => !_v1(_v0)),
              selectableLocales: _v0.filter(_v0 => _v1(_v0) || _v19.includes(_v0))
            };
          }, [_v14, _v5, _v19]),
          _v29 = (0, _v9.useCallback)((_v0, _v1 = {}, _v2 = null) => {
            null === _v2 && _v2(), _v24(_v2), _v20(_v0), _v22(_v1), _v18(_v0[0] ?? null);
          }, [_v2]),
          _v30 = (0, _v9.useCallback)(() => {
            _v16(!0), null === _v6 && null !== _v14 && _v8(_v14).then(_v0 => {
              _v0 || _v16(!1);
            });
          }, [_v6, _v14, _v8]),
          _v31 = (0, _v9.useCallback)((_v0, _v1) => {
            if ("ai" !== _v1 || !_v11) {
              _v16(!1), _v29(_v0);
              return;
            }
            _v13(_v1, _v0).then(_v0 => {
              null !== _v0 && (_v16(!1), _v29(_v0, _v0));
            });
          }, [_v11, _v1, _v13, _v29]),
          _v32 = (0, _v9.useCallback)(() => {
            _v18(null), _v20([]), _v22({}), _v24(null);
          }, []),
          _v33 = (0, _v9.useCallback)((_v0, _v1, _v2) => {
            _v22(_v0 => ({
              ..._v0,
              [_v0]: (0, _v29.withTypedValue)(_v0[_v0], _v5[_v0]?.leaves, _v1, _v2)
            }));
          }, [_v5]),
          _v34 = (0, _v9.useCallback)(async _v0 => {
            let _v1 = await _v13(_v25, [_v0]),
              _v2 = _v1?.[_v0];
            return void 0 !== _v2 && (_v22(_v0 => ({
              ..._v0,
              [_v0]: {
                ..._v0[_v0],
                ..._v2
              }
            })), !0);
          }, [_v25, _v13]);
        return {
          openEditor: _v29,
          openLocalePicker: _v30,
          modals: (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v15 ? (0, _v1.jsx)(_v146.AddLocalizationModal, {
              aiStartModeDescription: (0, _v5.translate)({
                singular: "Create a draft of your event page content. You can review and edit it before it’s public.",
                dictionary: {
                  es: {
                    singular: "Crea un borrador del contenido de la página de tu evento. Puedes revisarlo y editarlo antes de que sea público."
                  },
                  "de-DE": {
                    singular: "Erstellen Sie einen Entwurf für den Inhalt Ihrer Veranstaltungsseite. Sie können ihn überprüfen und bearbeiten, bevor er veröffentlicht wird."
                  },
                  "fr-FR": {
                    singular: "Créez un brouillon du contenu de la page de votre événement. Vous pouvez le relire et le modifier avant sa publication."
                  },
                  "ja-JP": {
                    singular: "イベントページのコンテンツの下書きを作成します。公開前に確認・編集できます。"
                  },
                  "ko-KR": {
                    singular: "이벤트 페이지 콘텐츠 초안을 만드세요. 공개되기 전에 검토하고 편집할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Crie um rascunho do conteúdo da página do seu evento. Você pode revisar e editar antes de torná-lo público."
                  },
                  "zh-CN": {
                    singular: "创建您的活动页面内容草稿。您可以在公开发布之前审核并编辑。"
                  }
                }
              }),
              availableLocales: _v27,
              description: (0, _v5.translate)({
                singular: "Add a language to translate the title, description and visible speakers of this event. Empty fields will use the main language.",
                dictionary: {
                  es: {
                    singular: "Añade un idioma para traducir el título, la descripción y los ponentes visibles de este evento. Los campos vacíos usarán el idioma principal."
                  },
                  "de-DE": {
                    singular: "Fügen Sie eine Sprache hinzu, um den Titel, die Beschreibung und die sichtbaren Sprecher dieser Veranstaltung zu übersetzen. Für leere Felder wird die Hauptsprache verwendet."
                  },
                  "fr-FR": {
                    singular: "Ajoutez une langue pour traduire le titre, la description et les intervenants visibles de cet événement. Les champs vides utiliseront la langue principale."
                  },
                  "ja-JP": {
                    singular: "このイベントのタイトル、説明、表示されるスピーカーを翻訳する言語を追加してください。空欄の項目はメイン言語が使用されます。"
                  },
                  "ko-KR": {
                    singular: "이 이벤트의 제목, 설명 및 표시되는 연사를 번역할 언어를 추가하세요. 빈 필드는 기본 언어를 사용합니다."
                  },
                  "pt-BR": {
                    singular: "Adicione um idioma para traduzir o título, a descrição e os palestrantes visíveis deste evento. Campos vazios usarão o idioma principal."
                  },
                  "zh-CN": {
                    singular: "添加一种语言以翻译本活动的标题、描述和可见发言人。留空字段将使用主要语言。"
                  }
                }
              }),
              isAiEnabled: _v11,
              isTranslating: _v12 || _v7,
              onClose: () => _v16(!1),
              onConfirm: _v31
            }) : null, null == _v17 || null == _v14 ? null : (0, _v1.jsx)(_v147.LocalizationModal, {
              edits: _v21,
              isAiEnabled: _v11,
              isSaving: _v9,
              isTranslating: _v12,
              onClose: _v32,
              onFieldChange: _v33,
              onSave: _v10,
              onTargetLocaleChange: _v18,
              onTranslateAgain: () => _v34(_v17),
              savedLocales: _v5,
              sections: _v26,
              selectableLocales: _v28,
              sourceLocale: _v14,
              targetLocale: _v17
            })]
          })
        };
      })({
        localizations: _v11,
        source: _v19,
        revalidateSpeakers: _v21
      }),
      _v26 = _v1 && _v15,
      _v27 = (0, _v9.useCallback)(() => {
        _v6 && (_v18(), _v21());
      }, [_v6, _v18, _v21]),
      _v28 = (0, _v18.useToast)(),
      {
        trackSingleEventCustomizationSpeakersTranslateAiClicked: _v29,
        trackSingleEventCustomizationSpeakersMarkedUpToDate: _v30
      } = (0, _v23.useSingleEventCustomizationTracking)(),
      [_v31, _v32] = (0, _v9.useState)(!1),
      _v33 = (0, _v9.useCallback)(async () => {
        _v32(!0);
        let _v0 = null;
        try {
          _v0 = await _v22();
        } catch {
          _v28({
            isClosable: !0,
            title: (0, _v5.translate)({
              singular: "Something went wrong. Your translations were not created.",
              dictionary: {
                es: {
                  singular: "Algo salió mal. No se crearon tus traducciones."
                },
                "de-DE": {
                  singular: "Etwas ist schiefgelaufen. Ihre Übersetzungen wurden nicht erstellt."
                },
                "fr-FR": {
                  singular: "Une erreur s'est produite. Vos traductions n'ont pas été créées."
                },
                "ja-JP": {
                  singular: "問題が発生しました。翻訳は作成されませんでした。"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다. 번역이 생성되지 않았습니다."
                },
                "pt-BR": {
                  singular: "Algo deu errado. Suas traduções não foram criadas."
                },
                "zh-CN": {
                  singular: "出现问题。未能创建翻译。"
                }
              }
            }),
            variant: "warning"
          });
          return;
        } finally {
          _v32(!1);
        }
        let _v1 = await _v16(_v0);
        null !== _v1 && _v23(_v1.locales, _v1.edits, _v0);
      }, [_v22, _v28, _v16, _v23]);
    return (0, _v1.jsxs)(_v15.Flex, {
      direction: "column",
      gap: (0, _v16.rem)(16),
      width: "100%",
      children: [(0, _v1.jsx)(_v17.Text, {
        color: "text-secondary",
        variant: "body-sm",
        children: (0, _v5.translate)({
          singular: "The event landing page is what users see when you share the link to this event.",
          dictionary: {
            es: {
              singular: "La página de destino del evento es lo que ven los usuarios cuando compartes el enlace a este evento."
            },
            "de-DE": {
              singular: "Die Event-Landingpage ist die Seite, die Nutzer sehen, wenn Sie den Link zu dieser Veranstaltung teilen."
            },
            "fr-FR": {
              singular: "La page de destination de l'événement est ce que voient les utilisateurs lorsque vous partagez le lien vers cet événement."
            },
            "ja-JP": {
              singular: "イベントのランディングページは、このイベントへのリンクを共有したときにユーザーが見るページです。"
            },
            "ko-KR": {
              singular: "이벤트 랜딩 페이지는 이 이벤트의 링크를 공유했을 때 사용자가 보게 되는 페이지입니다."
            },
            "pt-BR": {
              singular: "A página de destino do evento é o que os usuários veem quando você compartilha o link deste evento."
            },
            "zh-CN": {
              singular: "活动着陆页是在您分享该活动链接时用户看到的页面。"
            }
          }
        })
      }), (0, _v1.jsxs)(_v10.Accordion, {
        allowMultiple: !0,
        index: _v10,
        onChange: _v0 => {
          _v9(new Set((Array.isArray(_v0) ? _v0 : [_v0]).flatMap(_v0 => {
            let _v1 = _v7[_v0];
            return void 0 === _v1 ? [] : [_v1];
          })));
        },
        width: "100%",
        reduceMotion: !0,
        children: [(0, _v1.jsxs)(_v13.AccordionItem, {
          children: [(0, _v1.jsx)(_v17.Text, {
            variant: "heading-xs",
            children: (0, _v1.jsxs)(_v11.AccordionButton, {
              children: [(0, _v5.translate)({
                singular: "Navbar logo",
                dictionary: {
                  es: {
                    singular: "Logotipo de la barra de navegación"
                  },
                  "de-DE": {
                    singular: "Navbar-Logo"
                  },
                  "fr-FR": {
                    singular: "Logo de la barre de navigation"
                  },
                  "ja-JP": {
                    singular: "ナビゲーションバーのロゴ"
                  },
                  "ko-KR": {
                    singular: "네비게이션 바 로고"
                  },
                  "pt-BR": {
                    singular: "Logotipo da barra de navegação"
                  },
                  "zh-CN": {
                    singular: "导航栏徽标"
                  }
                }
              }), (0, _v1.jsx)(_v12.AccordionIcon, {})]
            })
          }), (0, _v1.jsx)(_v14.AccordionPanel, {
            children: (0, _v1.jsx)(_v139, {})
          })]
        }), _v1 ? (0, _v1.jsxs)(_v13.AccordionItem, {
          children: [(0, _v1.jsx)(_v17.Text, {
            variant: "heading-xs",
            children: (0, _v1.jsxs)(_v11.AccordionButton, {
              children: [(0, _v1.jsxs)(_v15.Flex, {
                align: "center",
                gap: (0, _v16.rem)(6),
                children: [_v26 ? (0, _v1.jsx)(_v19.CircleExclamation, {
                  boxSize: (0, _v16.rem)(24),
                  color: "status-caution-primary"
                }) : null, _v159.translations.speakers]
              }), (0, _v1.jsx)(_v12.AccordionIcon, {})]
            })
          }), (0, _v1.jsx)(_v14.AccordionPanel, {
            children: (0, _v1.jsxs)(_v15.Flex, {
              direction: "column",
              gap: "md",
              width: "100%",
              children: [_v26 ? (0, _v1.jsx)(_v141, {
                isAiEnabled: _v12,
                isSubmitting: _v14,
                isTranslating: _v31 || _v13,
                onMarkUpToDate: () => {
                  _v30({
                    liveEventId: String(_v5)
                  }), _v17();
                },
                onTranslate: () => {
                  _v29({
                    liveEventId: String(_v5)
                  }), _v33();
                }
              }) : null, (0, _v1.jsx)(_v134, {
                isAiTranslationEnabled: _v3 && _v6 && _v12,
                onSpeakersChange: _v27
              })]
            })
          })]
        }) : null, _v2 ? (0, _v1.jsxs)(_v13.AccordionItem, {
          children: [(0, _v1.jsx)(_v17.Text, {
            variant: "heading-xs",
            children: (0, _v1.jsxs)(_v11.AccordionButton, {
              children: [(0, _v5.translate)({
                singular: "Translations",
                dictionary: {
                  es: {
                    singular: "Traducciones"
                  },
                  "de-DE": {
                    singular: "Übersetzungen"
                  },
                  "fr-FR": {
                    singular: "Traductions"
                  },
                  "ja-JP": {
                    singular: "翻訳"
                  },
                  "ko-KR": {
                    singular: "번역"
                  },
                  "pt-BR": {
                    singular: "Traduções"
                  },
                  "zh-CN": {
                    singular: "翻译"
                  }
                }
              }), (0, _v1.jsx)(_v12.AccordionIcon, {})]
            })
          }), (0, _v1.jsx)(_v14.AccordionPanel, {
            children: _v6 ? (0, _v1.jsx)(_v21, {
              resourceId: String(_v5),
              resourceType: "event",
              children: (0, _v1.jsx)(_v45, {
                isSourceLoading: _v20,
                localizations: _v11,
                onAddLanguages: _v24,
                onEditLocale: _v0 => _v23([_v0]),
                source: _v19
              })
            }) : null
          })]
        }) : null]
      }), _v25]
    });
  }], 0);
}