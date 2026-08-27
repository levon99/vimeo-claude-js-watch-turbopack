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
    _v17 = _v0.i(0);
  function _v18({
    contentRating: _v0,
    isDisabled: _v1 = !1,
    onChange: _v2
  }) {
    let _v3 = (0, _v4.useMemo)(() => {
        let _v0 = _v17.GeneralContentRatingVariants.Unrated;
        return _v0.some(_v0 => _v17.MatureContentRatingArray.includes(_v0)) && (_v0 = _v17.GeneralContentRatingVariants.Mature), _v0.includes(_v17.GeneralContentRatingVariants.Safe) && (_v0 = _v17.GeneralContentRatingVariants.Safe), _v17.ContentRatingOptions.find(_v0 => _v0.value === _v0);
      }, [_v0]),
      _v4 = (0, _v4.useMemo)(() => _v0.includes(_v17.EventContentRating.Advertisement), [_v0]),
      _v5 = (0, _v4.useCallback)(_v0 => {
        let _v1 = _v4 ? [_v17.EventContentRating.Advertisement] : [];
        _v0 === _v17.GeneralContentRatingVariants.Safe ? _v1.push(_v17.EventContentRating.Safe) : _v0 === _v17.GeneralContentRatingVariants.Mature ? _v1 = [..._v1, ..._v17.MatureContentRatingArray] : _v1.push(_v17.EventContentRating.Unrated), _v2(_v1);
      }, [_v4, _v2]),
      _v6 = (0, _v4.useCallback)(_v0 => {
        let _v1 = [..._v0],
          _v2 = _v1.indexOf(_v0);
        _v2 > -1 ? _v1.splice(_v2, 1) : _v1.push(_v0), _v1.length === +!!_v4 && _v1.push(_v17.EventContentRating.Safe), _v2(_v1);
      }, [_v0, _v4, _v2]),
      _v7 = (0, _v4.useCallback)(() => {
        let _v0 = [..._v0],
          _v1 = _v0.indexOf(_v17.EventContentRating.Advertisement);
        _v1 > -1 ? _v0.splice(_v1, 1) : _v0.push(_v17.EventContentRating.Advertisement), _v2(_v0);
      }, [_v0, _v2]);
    return (0, _v1.jsxs)(_v8.Flex, {
      position: "relative",
      direction: "column",
      "data-testid": "event-content-rating",
      children: [(0, _v1.jsx)(_v12.Header, {
        size: "xs",
        marginBottom: (0, _v9.rem)(8),
        color: "text-primary",
        children: (0, _v16.translate)({
          singular: "Select content rating",
          dictionary: {
            es: {
              singular: "Selecciona la clasificación de contenido"
            },
            "de-DE": {
              singular: "Inhaltseinstufung wählen"
            },
            "fr-FR": {
              singular: "Sélectionnez la classification du contenu"
            },
            "ja-JP": {
              singular: "コンテンツ評価を選択"
            },
            "ko-KR": {
              singular: "콘텐츠 등급 선택"
            },
            "pt-BR": {
              singular: "Selecione a classificação de conteúdo"
            },
            "zh-CN": {
              singular: "选择内容分级"
            }
          }
        })
      }), (0, _v1.jsx)(_v13.Paragraph, {
        size: "sm",
        color: "text-secondary",
        marginBottom: (0, _v9.rem)(12),
        children: (0, _v16.translate)({
          singular: "Content ratings are required. They help keep Vimeo safe and ensure your intended audience can view your video. {A}Learn more{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v10.Text, {
              variant: "body-xl",
              color: "blue.500",
              cursor: "pointer",
              as: "a",
              textDecoration: "underline",
              fontSize: "text-xs",
              target: "_blank",
              href: "https://vimeo.zendesk.com/hc/en-us/articles/224818087-Content-ratings",
              children: _v0
            }, "rating-help-message")
          },
          dictionary: {
            es: {
              singular: "Las clasificaciones de contenido son obligatorias. Ayudan a mantener Vimeo seguro y a garantizar que tu audiencia prevista pueda ver tu video. {A}Más información{/A}"
            },
            "de-DE": {
              singular: "Inhaltseinstufungen sind erforderlich. Sie tragen dazu bei, Vimeo sicher zu halten und sicherzustellen, dass Ihre Zielgruppe Ihr Video sehen kann. {A}Mehr erfahren{/A}"
            },
            "fr-FR": {
              singular: "Les classifications de contenu sont obligatoires. Elles aident à maintenir Vimeo sûr et à garantir que votre public ciblé puisse visionner votre vidéo. {A}En savoir plus{/A}"
            },
            "ja-JP": {
              singular: "コンテンツ評価は必須です。Vimeoを安全に保ち、意図した視聴者が動画を視聴できるようにします。{A}詳細はこちら{/A}"
            },
            "ko-KR": {
              singular: "콘텐츠 등급이 필요합니다. 이는 Vimeo를 안전하게 유지하고 의도한 대상이 비디오를 볼 수 있도록 합니다. {A}자세히 알아보기{/A}"
            },
            "pt-BR": {
              singular: "As classificações de conteúdo são obrigatórias. Elas ajudam a manter o Vimeo seguro e garantem que seu público-alvo possa assistir ao seu vídeo. {A}Saiba mais{/A}"
            },
            "zh-CN": {
              singular: "需要内容分级。它们有助于保持 Vimeo 的安全并确保您的目标观众可以观看您的视频。{A}了解更多{/A}"
            }
          }
        })
      }), (0, _v1.jsx)(_v15.Select, {
        onValueChange: _v0 => _v5(_v0.value[0]),
        items: _v17.ContentRatingOptions.filter(_v0 => _v0.visible),
        placeholder: (0, _v16.translate)({
          singular: "Select rating",
          dictionary: {
            es: {
              singular: "Seleccionar clasificación"
            },
            "de-DE": {
              singular: "Bewertung auswählen"
            },
            "fr-FR": {
              singular: "Sélectionner la classification"
            },
            "ja-JP": {
              singular: "レーティングを選択"
            },
            "ko-KR": {
              singular: "등급 선택"
            },
            "pt-BR": {
              singular: "Selecionar classificação"
            },
            "zh-CN": {
              singular: "选择分级"
            }
          }
        }),
        size: "sm",
        variant: "withCheck",
        value: [_v3.value]
      }), _v3.value === _v17.GeneralContentRatingVariants.Mature ? (0, _v1.jsxs)(_v8.Flex, {
        direction: "column",
        paddingTop: (0, _v9.rem)(18),
        paddingBottom: (0, _v9.rem)(20),
        gap: (0, _v9.rem)(16),
        borderBottom: "1px solid",
        borderColor: "stroke",
        children: [(0, _v1.jsx)(_v13.Paragraph, {
          size: "sm",
          color: "text-secondary",
          background: "transparent",
          children: (0, _v16.translate)({
            singular: "Select one or more of the following:",
            dictionary: {
              es: {
                singular: "Selecciona una o más de las siguientes:"
              },
              "de-DE": {
                singular: "Wählen Sie eine oder mehrere der folgenden Optionen:"
              },
              "fr-FR": {
                singular: "Sélectionnez une ou plusieurs des options suivantes :"
              },
              "ja-JP": {
                singular: "以下のいずれか1つ以上を選択してください："
              },
              "ko-KR": {
                singular: "다음 항목 중 하나 이상을 선택하세요:"
              },
              "pt-BR": {
                singular: "Selecione uma ou mais das seguintes opções:"
              },
              "zh-CN": {
                singular: "选择以下一项或多项："
              }
            }
          })
        }), _v17.MatureContentRatingOptions.map(_v0 => (0, _v1.jsx)(_v14.Checkbox, {
          isDisabled: _v1,
          onChange: () => _v6(_v0.value),
          isChecked: _v0.includes(_v0.value),
          name: _v0.value,
          id: `${_v0.value}-checkbox`,
          value: _v0.value,
          children: (0, _v1.jsx)(_v10.Text, {
            variant: "body-xl",
            fontSize: (0, _v9.rem)(14),
            color: "text-primary",
            children: _v0.label
          })
        }, `${_v0.value}-checkbox`))]
      }) : null, (0, _v1.jsxs)(_v8.Flex, {
        direction: "column",
        children: [(0, _v1.jsx)(_v14.Checkbox, {
          isDisabled: _v1,
          name: "ads",
          margin: `${(0, _v9.rem)(8)} 0`,
          value: _v17.EventContentRating.Advertisement,
          isChecked: _v4,
          onChange: _v7,
          children: (0, _v1.jsx)(_v10.Text, {
            variant: "body-xl",
            fontSize: (0, _v9.rem)(12),
            color: "text-primary",
            children: (0, _v16.translate)({
              singular: "This video contains an advertisement",
              dictionary: {
                es: {
                  singular: "Este video contiene un anuncio"
                },
                "de-DE": {
                  singular: "Dieses Video enthält eine Werbung"
                },
                "fr-FR": {
                  singular: "Cette vidéo contient une publicité"
                },
                "ja-JP": {
                  singular: "この動画には広告が含まれています"
                },
                "ko-KR": {
                  singular: "이 비디오는 광고를 포함하고 있습니다"
                },
                "pt-BR": {
                  singular: "Este vídeo contém um anúncio"
                },
                "zh-CN": {
                  singular: "此视频包含广告"
                }
              }
            })
          })
        }), _v4 ? null : (0, _v1.jsx)(_v5.Alert, {
          children: (0, _v1.jsx)(_v6.AlertDescription, {
            children: (0, _v16.translate)({
              singular: "If this video contains advertisements, you are required to indicate so",
              dictionary: {
                es: {
                  singular: "Si este video contiene anuncios, debes indicarlo"
                },
                "de-DE": {
                  singular: "Wenn dieses Video Werbung enthält, müssen Sie dies angeben"
                },
                "fr-FR": {
                  singular: "Si cette vidéo contient des publicités, vous devez l'indiquer"
                },
                "ja-JP": {
                  singular: "この動画に広告が含まれる場合は、その旨を明示する必要があります"
                },
                "ko-KR": {
                  singular: "이 비디오에 광고가 포함된 경우 이를 표시해야 합니다"
                },
                "pt-BR": {
                  singular: "Se este vídeo contém anúncios, você é obrigado a indicá‑lo."
                },
                "zh-CN": {
                  singular: "如果此视频包含广告，您需要予以说明"
                }
              }
            })
          })
        })]
      })]
    });
  }
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = {
      EMBED_PRIVACY_NOWHERE: "private",
      EMBED_PRIVACY_ANYWHERE: "public",
      EMBED_PRIVACY_SPECIFIC_DOMAINS: "whitelist"
    },
    _v28 = {
      [_v27.EMBED_PRIVACY_NOWHERE]: (0, _v16.translate)({
        singular: "Nowhere",
        dictionary: {
          es: {
            singular: "En ningún sitio"
          },
          "de-DE": {
            singular: "Nirgendwo"
          },
          "fr-FR": {
            singular: "Nulle part"
          },
          "ja-JP": {
            singular: "いっさい許可しない"
          },
          "ko-KR": {
            singular: "불가"
          },
          "pt-BR": {
            singular: "Em nenhum lugar"
          },
          "zh-CN": {
            singular: "无处"
          }
        }
      }),
      [_v27.EMBED_PRIVACY_ANYWHERE]: (0, _v16.translate)({
        singular: "Anywhere",
        dictionary: {
          es: {
            singular: "En cualquier sitio"
          },
          "de-DE": {
            singular: "Überall"
          },
          "fr-FR": {
            singular: "N'importe où"
          },
          "ja-JP": {
            singular: "すべてのサイト"
          },
          "ko-KR": {
            singular: "어디에나"
          },
          "pt-BR": {
            singular: "Em qualquer lugar"
          },
          "zh-CN": {
            singular: "任何位置"
          }
        }
      }),
      [_v27.EMBED_PRIVACY_SPECIFIC_DOMAINS]: (0, _v16.translate)({
        singular: "Specific domains",
        dictionary: {
          es: {
            singular: "En dominios específicos"
          },
          "de-DE": {
            singular: "Bestimmte Domains"
          },
          "fr-FR": {
            singular: "Domaines spécifiques"
          },
          "ja-JP": {
            singular: "特定のドメイン"
          },
          "ko-KR": {
            singular: "특정 도메인"
          },
          "pt-BR": {
            singular: "Domínios específicos"
          },
          "zh-CN": {
            singular: "特定域"
          }
        }
      })
    };
  var _v29 = _v0.i(0);
  function _v30({
    embedPrivacy: _v0,
    domains: _v1,
    showNotice: _v2 = !1,
    isVertical: _v3 = !0,
    isDisabled: _v4,
    isSelectDisabled: _v5 = !1,
    disabledTip: _v6,
    onChange: _v7
  }) {
    let [_v8, _v9] = (0, _v4.useState)(""),
      [_v10, _v11] = (0, _v4.useState)(!1),
      _v12 = (0, _v4.useRef)(null),
      _v13 = !!(!_v4 && _v8),
      _v14 = (0, _v4.useCallback)(_v0 => {
        _v7(_v0, _v1), _v11(!1);
      }, [_v1, _v7]),
      _v15 = (0, _v4.useCallback)(() => {
        -1 === _v1.indexOf(_v8) && (_v7(_v0, [..._v1, _v8]), _v9(""));
      }, [_v8, _v1, _v0, _v7]),
      _v16 = (0, _v4.useCallback)(_v0 => {
        let _v1 = [..._v1],
          _v2 = _v1.indexOf(_v0);
        _v1.splice(_v2, 1), _v7(_v0, _v1);
      }, [_v1, _v0, _v7]),
      _v17 = (0, _v4.useMemo)(() => Object.values(_v27).map(_v0 => ({
        label: _v28[_v0],
        value: _v0
      })), []);
    return (0, _v23.useOutsideClick)({
      enabled: _v10,
      ref: _v12,
      handler: () => {
        _v10 && _v11(!1);
      }
    }), (0, _v1.jsx)(_v8.Flex, {
      direction: "column",
      gap: (0, _v9.rem)(8),
      width: "100%",
      "data-testid": "event-embed-privacy",
      children: (0, _v1.jsxs)(_v8.Flex, {
        direction: _v3 ? "column" : "row",
        alignItems: "baseline",
        gap: (0, _v9.rem)(4),
        children: [(0, _v1.jsxs)(_v8.Flex, {
          marginBottom: _v3 ? (0, _v9.rem)(8) : 0,
          width: _v3 ? "100%" : (0, _v9.rem)(120),
          flexShrink: 0,
          alignItems: "center",
          gap: (0, _v9.rem)(4),
          children: [(0, _v1.jsx)(_v12.Header, {
            size: "xs",
            color: "text-primary",
            letterSpacing: "-0.03em",
            children: (0, _v16.translate)({
              singular: "Embed privacy",
              dictionary: {
                es: {
                  singular: "Privacidad de las inserciones"
                },
                "de-DE": {
                  singular: "Datenschutz einbetten"
                },
                "fr-FR": {
                  singular: "Confidentialité de l'intégration"
                },
                "ja-JP": {
                  singular: "プライバシー設定を埋め込む"
                },
                "ko-KR": {
                  singular: "임베드 프라이버시"
                },
                "pt-BR": {
                  singular: "Incorporar privacidade"
                },
                "zh-CN": {
                  singular: "嵌入式隐私"
                }
              }
            })
          }), (0, _v1.jsx)(_v29.BokehTooltip, {
            label: _v5 && _v6 ? _v6 : (0, _v16.translate)({
              singular: "Where can the video be embedded?",
              dictionary: {
                es: {
                  singular: "¿Dónde se puede embeber el video?"
                },
                "de-DE": {
                  singular: "Wo kann das Video eingebettet werden?"
                },
                "fr-FR": {
                  singular: "Où la vidéo peut‑elle être intégrée ?"
                },
                "ja-JP": {
                  singular: "動画はどこに埋め込めますか？"
                },
                "ko-KR": {
                  singular: "비디오는 어디에 임베드할 수 있나요?"
                },
                "pt-BR": {
                  singular: "Onde o vídeo pode ser incorporado?"
                },
                "zh-CN": {
                  singular: "视频可以嵌入到哪里？"
                }
              }
            }),
            maxWidth: (0, _v9.rem)(300),
            shouldWrapChildren: !1,
            children: (0, _v1.jsx)(_v8.Flex, {
              height: (0, _v9.rem)(16),
              width: (0, _v9.rem)(16),
              cursor: "pointer",
              children: (0, _v1.jsx)(_v25.InfoCircle, {
                boxSize: (0, _v9.rem)(16),
                color: "text-tertiary"
              })
            })
          })]
        }), (0, _v1.jsxs)(_v24.Box, {
          width: "100%",
          children: [(0, _v1.jsx)(_v24.Box, {
            position: "relative",
            children: (0, _v1.jsx)(_v15.Select, {
              onValueChange: _v0 => _v14(_v0.value[0]),
              items: _v17,
              withPortal: !1,
              placeholder: (0, _v16.translate)({
                singular: "Select rating",
                dictionary: {
                  es: {
                    singular: "Seleccionar clasificación"
                  },
                  "de-DE": {
                    singular: "Bewertung auswählen"
                  },
                  "fr-FR": {
                    singular: "Sélectionner la classification"
                  },
                  "ja-JP": {
                    singular: "レーティングを選択"
                  },
                  "ko-KR": {
                    singular: "등급 선택"
                  },
                  "pt-BR": {
                    singular: "Selecionar classificação"
                  },
                  "zh-CN": {
                    singular: "选择分级"
                  }
                }
              }),
              size: "sm",
              variant: "withCheck",
              value: [_v0],
              disabled: _v5,
              children: ({
                label: _v0
              }) => (0, _v1.jsx)(_v15.SelectItem, {
                display: "flex",
                width: "100%",
                children: (0, _v1.jsx)(_v29.BokehTooltip, {
                  shouldWrapChildren: !1,
                  placement: "bottom",
                  maxWidth: (0, _v9.rem)(300),
                  label: _v6,
                  isDisabled: !_v4 || _v4 && !_v6,
                  children: (0, _v1.jsx)(_v15.SelectItemText, {
                    children: _v0
                  })
                })
              })
            })
          }), _v0 === _v27.EMBED_PRIVACY_SPECIFIC_DOMAINS ? (0, _v1.jsxs)(_v8.Flex, {
            position: "relative",
            direction: "column",
            width: "100%",
            marginTop: (0, _v9.rem)(8),
            children: [(0, _v1.jsxs)(_v20.InputGroup, {
              size: "sm",
              children: [(0, _v1.jsx)(_v21.Input, {
                onChange: _v0 => {
                  _v9(_v0.target.value);
                },
                value: _v8,
                isDisabled: !!_v4,
                placeholder: "domain.com",
                onKeyDown: _v0 => {
                  "Enter" === _v0.key && _v15();
                }
              }), (0, _v1.jsx)(_v22.InputRightElement, {
                cursor: _v13 ? "pointer" : "not-allowed",
                onClick: _v13 ? _v15 : void 0,
                children: (0, _v1.jsx)(_v26.PlusCircle, {
                  color: _v13 ? "text-primary" : "text-secondary"
                })
              })]
            }), (0, _v1.jsx)(_v8.Flex, {
              flexWrap: "wrap",
              gap: (0, _v9.rem)(4),
              marginTop: (0, _v9.rem)(8),
              children: _v1.map((_v0, _v1) => (0, _v1.jsxs)(_v19.Tag, {
                size: "sm",
                children: [(0, _v1.jsx)(_v19.TagLabel, {
                  fontSize: (0, _v9.rem)(14),
                  children: _v0
                }), !_v5 && (0, _v1.jsx)(_v19.TagCloseButton, {
                  onClick: () => _v16(_v0)
                })]
              }, `${_v0}-idx:${_v1}`))
            })]
          }, `domains-${_v1.length}`) : null, _v2 ? (0, _v1.jsx)(_v5.Alert, {
            marginTop: (0, _v9.rem)(8),
            children: (0, _v1.jsx)(_v6.AlertDescription, {
              children: (0, _v16.translate)({
                singular: "When link privacy is set to Private, the embedded event won’t be visible to everyone",
                dictionary: {
                  es: {
                    singular: "Cuando la privacidad del enlace está establecida en Privado, el evento embebido no será visible para todos"
                  },
                  "de-DE": {
                    singular: "Wenn die Link‑Privatsphäre auf Privat gesetzt ist, ist die eingebettete Veranstaltung nicht für alle sichtbar"
                  },
                  "fr-FR": {
                    singular: "Lorsque la confidentialité du lien est définie sur Privé, l'événement intégré ne sera pas visible de tous"
                  },
                  "ja-JP": {
                    singular: "リンクのプライバシーが非公開に設定されている場合、埋め込みイベントは誰も見られません"
                  },
                  "ko-KR": {
                    singular: "링크 개인정보가 비공개로 설정되면 임베드된 이벤트가 모두에게 보이지 않습니다"
                  },
                  "pt-BR": {
                    singular: "Quando a privacidade do link estiver definida como Privado, o evento incorporado não ficará visível para todos"
                  },
                  "zh-CN": {
                    singular: "当链接隐私设置为私密时，嵌入的活动不会对所有人可见"
                  }
                }
              })
            })
          }) : null]
        })]
      })
    });
  }
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = "safe",
    _v38 = "advertisement";
  function _v39(_v0) {
    return {
      ...(0, _v35.newTeamCtx)(),
      ...(0, _v35.newWebCtx)(),
      ...(0, _v35.newThirdPartyIntegrationCtx)(),
      ...(0, _v35.newActionCtx)("click"),
      ...(0, _v35.newLiveCtx)({
        live_feature: "content_rating"
      }),
      ...(0, _v35.newProductAnalyticsCtx)({
        product: "events",
        feature: "privacy",
        location: "drawer",
        element: _v0
      })
    };
  }
  function _v40() {
    return {
      ...(0, _v35.newTeamCtx)(),
      ...(0, _v35.newWebCtx)(),
      ...(0, _v35.newThirdPartyIntegrationCtx)(),
      ...(0, _v35.newActionCtx)("click"),
      ...(0, _v35.newLiveCtx)({
        live_feature: "event_privacy"
      }),
      ...(0, _v35.newProductAnalyticsCtx)({
        product: "events",
        feature: "privacy",
        location: "drawer",
        element: "dropdown"
      })
    };
  }
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  function _v47({
    privacy: _v0,
    allowedPrivacies: _v1,
    password: _v2,
    disabledTip: _v3,
    isDisabled: _v4,
    onChange: _v5
  }) {
    let [_v6, _v7] = (0, _v4.useState)(_v0),
      [_v8, _v9] = (0, _v4.useState)(_v2 || "");
    (0, _v4.useEffect)(() => _v7(_v0), [_v0]), (0, _v4.useEffect)(() => _v9(_v2 || ""), [_v2]);
    let _v10 = (0, _v4.useCallback)(_v0 => {
        _v7(_v0), _v5(_v0, _v8);
      }, [_v8, _v5]),
      _v11 = (0, _v4.useCallback)(_v0 => {
        _v9(_v0), _v5(_v6, _v0);
      }, [_v6, _v5]);
    return (0, _v1.jsxs)(_v8.Flex, {
      direction: "column",
      gap: (0, _v9.rem)(8),
      children: [(0, _v1.jsx)(_v46.EventPrivacy, {
        selectedPrivacy: _v6,
        allowedPrivacies: _v1,
        isDisabled: _v4,
        disabledTip: _v3,
        onPrivacySelect: _v10
      }, `view-${_v6}`), _v6 === _v41.EStreamPrivacy.PASSWORD && (0, _v1.jsx)(_v45.EventPassword, {
        isDisabled: _v4,
        onChange: _v11,
        password: _v8
      }, `pass-${_v2}`)]
    });
  }
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = ["link", "embed.chatEmbedSource", "embed.embedProperties.sourceUrl", "streamPrivacy.unlistedHash"];
  _v0.s(["PrivacySettings", 0, function ({
    id: _v0 = (0, _v48.createLiveDomName)("privacy-settings"),
    eventSettingsContext: {
      settings: _v1,
      embedWhitelist: _v2,
      actions: {
        updateLiveEventSettings: _v3,
        updateEmbedWhitelist: _v4
      }
    } = (0, _v2.useManager)(_v33.EventSettingsManager),
    onlyShowStreamPrivacy: _v5 = !1
  }) {
    let _v6 = _v1.value?.allowedPrivacies ?? [],
      _v7 = _v1.value?.streamPrivacy?.view,
      _v8 = _v1.value?.streamPrivacy?.embed,
      _v9 = _v1.value?.streamPassword,
      _v10 = _v1.value?.contentRating,
      _v11 = (0, _v32.useIsLiveDemoSubscription)(),
      {
        trackPrivacyChanged: _v12
      } = (0, _v43.useViewPrivacyChangeTracking)(),
      {
        trackLiveStreamPrivacyChanged: _v13
      } = (0, _v42.useLiveStreamBroadcasterTracking)(),
      _v14 = !!_v1.value?.fromShowcase,
      _v15 = _v1.value?.album?.id,
      _v16 = !_v14 && !_v6.find(_v0 => _v0 === _v7),
      _v17 = (0, _v4.useMemo)(() => _v2.value || [], [_v2.value]),
      _v18 = (0, _v4.useCallback)((_v0, _v1) => {
        if ((_v7 !== _v0 || _v9 !== _v1) && (_v0 !== _v41.EStreamPrivacy.PASSWORD || _v1.length)) {
          var _v2;
          _v3({
            streamPrivacy: {
              view: _v0
            },
            streamPassword: _v0 === _v41.EStreamPrivacy.PASSWORD ? _v1 : void 0
          }, _v51).then(() => {
            _v7 !== _v0 && (_v12({
              entityType: "live_event",
              previousPrivacy: _v7 ?? null,
              newPrivacy: _v0
            }), _v13({
              liveStreamPrivacyType: "link_privacy",
              liveStreamPrivacyValue: String(_v0)
            }));
          }), _v2 = _v0 === _v41.EStreamPrivacy.PASSWORD, (0, _v36.createBPv2EventFactory)("vimeo.change_link_privacy", 5, () => ({
            ..._v40()
          }), () => ({
            device_type: _v34.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
            privacy_field_name: "old_video_privacy",
            privacy_field_value: _v0,
            is_video_password_protected: _v2,
            is_preset_applied: null
          }))({
            value: null
          });
        }
      }, [_v3, _v7, _v9, _v12, _v13]),
      _v19 = (0, _v4.useCallback)((_v0, _v1) => {
        if (_v8 !== _v0) {
          var _v2;
          _v3({
            streamPrivacy: {
              embed: _v0
            }
          }, _v51), _v2 = _v7 === _v41.EStreamPrivacy.PASSWORD, (0, _v36.createBPv2EventFactory)("vimeo.change_embed_privacy", 5, () => ({
            ..._v40()
          }), () => ({
            device_type: _v34.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
            privacy_field_name: "old_embed_privacy",
            privacy_field_value: _v0,
            is_video_password_protected: _v2,
            is_preset_applied: null
          }))({
            value: null
          }), _v13({
            liveStreamPrivacyType: "embed_privacy",
            liveStreamPrivacyValue: String(_v0)
          });
        }
        _v1 !== _v17 && _v4(_v1);
      }, [_v8, _v17, _v3, _v4, _v7, _v13]),
      _v20 = (0, _v4.useCallback)(_v0 => {
        _v3({
          contentRating: _v0
        }), function (_v0, _v1, _v2 = !1) {
          let _v3 = !!_v0?.includes(_v37),
            _v4 = !!_v1?.includes(_v37);
          _v3 !== _v4 && (0, _v36.createBPv2EventFactory)("vimeo.change_content_rating", 5, () => ({
            ..._v39("dropdown")
          }), () => ({
            device_type: _v34.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
            privacy_field_name: "rating",
            privacy_field_value: _v4 ? "safe" : "mature",
            is_video_password_protected: _v2,
            is_preset_applied: null
          }))({
            value: null
          });
          let _v5 = !!_v0?.includes(_v38),
            _v6 = !!_v1?.includes(_v38);
          _v5 !== _v6 && (0, _v36.createBPv2EventFactory)("vimeo.change_content_notice", 5, () => ({
            ..._v39("check_box")
          }), () => ({
            device_type: _v34.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
            privacy_field_name: "contains_ad",
            privacy_field_value: String(_v6),
            is_video_password_protected: _v2,
            is_preset_applied: null
          }))({
            value: null
          });
        }(_v10, _v0, _v7 === _v41.EStreamPrivacy.PASSWORD), _v13({
          liveStreamPrivacyType: "content_rating",
          liveStreamPrivacyValue: JSON.stringify(_v0)
        });
      }, [_v3, _v10, _v7, _v13]),
      {
        tooltip: _v21,
        isDisabled: _v22
      } = (0, _v44.useGetEditEmbedPrivacyDisabled)();
    return (0, _v1.jsxs)(_v8.Flex, {
      id: _v0,
      direction: "column",
      maxWidth: "100%",
      width: "100%",
      children: [_v14 && _v15 ? (0, _v1.jsx)(_v5.Alert, {
        children: (0, _v1.jsxs)(_v6.AlertDescription, {
          margin: 0,
          children: [_v50.sharedTranslations.showcasePrivacyNotice, " ", (0, _v1.jsx)(_v10.Text, {
            href: _v31.vimeoConfig.PATH.SHOWCASE_MANAGE_URL(_v15),
            target: "_blank",
            variant: "body-md",
            color: "blue.500",
            textDecoration: "underline",
            as: "a",
            children: _v50.sharedTranslations.manageShowcase
          })]
        })
      }) : null, _v16 ? (0, _v1.jsx)(_v5.Alert, {
        children: (0, _v1.jsx)(_v6.AlertDescription, {
          margin: 0,
          children: _v50.sharedTranslations.eventPrivacyFrozen
        })
      }) : null, _v7 && _v6 ? (0, _v1.jsx)(_v47, {
        isDisabled: _v11 || _v14,
        disabledTip: _v11 ? _v49.rtmpTranslations.viewPrivacyDemoDisabledTip : void 0,
        privacy: _v7,
        allowedPrivacies: _v6,
        password: _v9,
        onChange: (0, _v3.default)(_v18, 0)
      }) : (0, _v1.jsx)(_v11.BokehSkeleton, {
        height: (0, _v9.rem)(110),
        borderRadius: (0, _v9.rem)(4),
        marginBottom: (0, _v9.rem)(16)
      }), !_v5 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v7.Divider, {
          borderColor: "stroke",
          margin: `${(0, _v9.rem)(24)} 0`
        }), _v8 ? (0, _v1.jsx)(_v30, {
          isDisabled: _v11 || _v14 || _v22,
          isSelectDisabled: _v22,
          disabledTip: _v11 ? _v49.rtmpTranslations.embedPrivacyDemoDisabledTip : _v22 ? _v21 : void 0,
          embedPrivacy: _v8,
          domains: _v17,
          showNotice: _v7 === _v41.EStreamPrivacy.NOBODY,
          onChange: _v19
        }) : (0, _v1.jsx)(_v11.BokehSkeleton, {
          height: (0, _v9.rem)(200),
          borderRadius: (0, _v9.rem)(4)
        }), (0, _v1.jsx)(_v7.Divider, {
          borderColor: "stroke",
          margin: `${(0, _v9.rem)(24)} 0`
        }), _v10 ? (0, _v1.jsx)(_v18, {
          contentRating: _v10,
          isDisabled: !1,
          onChange: _v20
        }) : (0, _v1.jsx)(_v11.BokehSkeleton, {
          height: (0, _v9.rem)(200),
          borderRadius: (0, _v9.rem)(4)
        })]
      })]
    });
  }], 0);
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  _v0.s(["useFailsafeUpgradeModal", 0, function ({
    canOpen: _v0 = !0
  } = {}) {
    return (0, _v54.useUpgradeModal)({
      canOpen: _v0,
      tracking: {
        params: {
          feature: "live_event_settings",
          target: "enterprise_contact_us_page",
          page: "live_event_stream_settings",
          upsell_name: "fail_safe_stream",
          location: window.location.href
        },
        paywallTracking: {
          paywallTrigger: "live_event_failsafe_toggle_button",
          paywallLocation: "live_event",
          paywallType: "popup",
          paywallFeature: "live"
        }
      },
      templateType: "enterprise",
      modalConfig: {
        mkcCode: "109813",
        enterpriseTitle: _v52.T_GO_LIVE_WITH_PEACE_OF_MIND,
        enterpriseSubtitle: _v52.T_ADD_FAIL_SAFE_STREAMING,
        customFeaturesList: (0, _v1.jsx)(_v53.UpsellFeaturesList, {
          featuresList: _v52.T_FAIL_SAFE_STREAMING_FEATURES
        })
      }
    });
  }], 0), _v0.s(["useUnlimitedStreamUpgradeModal", 0, function ({
    canOpen: _v0 = !0
  } = {}) {
    return (0, _v54.useUpgradeModal)({
      canOpen: _v0,
      tracking: {
        params: {
          feature: "extended_stream",
          target: "enterprise_contact_us_page",
          page: "live_event_stream_settings",
          upsell_name: "live_event_24_7_stream",
          location: window.location.href
        },
        paywallTracking: {
          paywallTrigger: "live_event_unlimited_stream_toggle_button",
          paywallLocation: "live_event",
          paywallType: "popup",
          paywallFeature: "live"
        }
      },
      templateType: "enterprise",
      modalConfig: {
        mkcCode: "109754",
        enterpriseTitle: _v52.T_STREAM_WITHOUT_INTERRUPTIONS,
        enterpriseSubtitle: _v52.T_CREATE_CONTINUOUS_STREAM,
        customFeaturesList: (0, _v1.jsx)(_v53.UpsellFeaturesList, {
          featuresList: _v52.T_UNLIMITED_DURATION_FEATURES
        })
      }
    });
  }], 0);
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  _v0.s(["useTimeBasedDismissableNotification", 0, function ({
    storedKey: _v0,
    cooldownMs: _v1 = 0,
    forceHide: _v2 = !1
  }) {
    let [_v3, _v4] = (0, _v4.useState)(() => {
      if (_v2) return !1;
      let _v0 = (0, _v55.getFromLocalStorage)(_v0),
        _v1 = _v0 ? Number(_v0) : null;
      return !_v1 || _v1 < (0, _v56.getAbsoluteNow)() - _v1;
    });
    return [_v3, (0, _v4.useCallback)(() => {
      (0, _v55.setLocalStorageItem)(_v0, (0, _v56.getAbsoluteNow)()), _v4(!1);
    }, [_v0])];
  }], 0);
}