{
  "use strict";

  var _v1,
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
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = (_v0, _v1, _v2 = {}, _v3 = _v54) => ({
      eventName: _v0,
      version: _v1,
      fields: _v2,
      defaultEventFields: _v3
    }),
    _v54 = {
      ..._v46.nullVideoContextData,
      ..._v46.nullTeamContext,
      ..._v46.nullUploadContextData
    },
    _v55 = {
      ..._v54,
      location: null
    },
    _v56 = _v0 => _v53("workflow.click_svv_upsell", 2, _v0, _v55),
    _v57 = _v0 => {
      ((_v0, _v1 = 1) => _v18.BigPictureClient.sendEvent(new _v18.Event("vimeo.svv_click", _v1 ?? 1, _v0)))({
        component: "open_upload_defaults",
        location: "privacy_drawer",
        name: "open",
        page: _v0
      });
    },
    _v58 = _v0 => _v53("vimeo.change_content_rating", 2, {
      location: "privacy drawer",
      ..._v0
    }),
    _v59 = _v0 => _v53("vimeo.change_content_notice", 2, {
      location: "privacy drawer",
      ..._v0
    }),
    _v60 = _v0 => _v53("workflow.change_link_privacy", 2, {
      ..._v0,
      is_video_password_protected: "password" === _v0.video_privacy
    }, _v55),
    _v61 = _v0 => _v18.BigPictureClient.sendEvent(new _v18.Event("vimeo.svv_click", 1, {
      name: "action",
      location: "privacy_drawer",
      component: "toggle_showcase_privacy",
      page: _v0
    })),
    _v62 = () => _v18.BigPictureClient.sendEvent(new _v18.Event("vimeo.svv_click", 1, {
      name: "action",
      location: "privacy_drawer",
      component: "save_comments_privacy",
      page: "upload"
    })),
    _v63 = _v0 => _v53("workflow.change_embed_privacy", 2, _v0, _v55);
  _v0.s(["changeContainsAdsCheckbox", 0, _v59, "changeEmbedPrivacy", 0, _v63, "changeGeneralContentRating", 0, _v58, "changeLinkPrivacy", 0, _v60, "clickSVVUpsell", 0, _v56, "sendPrivacyDrawerEvent", 0, (_v0, _v1, _v2, _v3) => {
    let _v4 = {
      ...(0, _v52.buildProductAnalyticsBpContext)({
        product: "single_video_view",
        feature: "privacy",
        location: "header"
      }),
      ...(0, _v49.buildActionBpContext)({
        feature: "privacy",
        action_type: "click"
      }),
      ...(0, _v50.buildWebBpContext)({
        page_name: "single_video_view_manage",
        location: _v3 ?? "sidebar",
        referrer_page_name: "single_video_view_manage",
        referrer: (0, _v43.getEntryPage)(document.referrer || ""),
        path: window.location.pathname,
        target: null,
        copy: null
      }),
      ...(0, _v48.buildTeamBpContextFromTeamUser)(_v1 ?? void 0),
      ...("number" == typeof _v2 ? (0, _v51.buildVideoBpContext)({
        video_id: _v2
      }) : void 0)
    };
    (0, _v47.sendBpEventWithContexts)(_v0 ? "vimeo.close_privacy_drawer" : "vimeo.open_privacy_drawer", _v4);
  }, "sendUploadDefaultsClickEvent", 0, _v57, "toggleCommentsPrivacyEvent", 0, _v62, "toggleShowcasePrivacyEvent", 0, _v61], 0);
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = ((_v1 = {}).Safe = "safe", _v1.Mature = "mature", _v1.Unrated = "unrated", _v1.Ads = "advertisement", _v1);
  let _v69 = {
      violence: (0, _v13.translate)({
        singular: "Violence",
        dictionary: {
          es: {
            singular: "Violencia"
          },
          "de-DE": {
            singular: "Gewalt"
          },
          "ja-JP": {
            singular: "暴力"
          },
          "ko-KR": {
            singular: "폭력"
          },
          "pt-BR": {
            singular: "Violência"
          },
          "zh-CN": {
            singular: "暴力"
          }
        }
      }),
      language: (0, _v13.translate)({
        singular: "Profanity",
        dictionary: {
          es: {
            singular: "Lenguaje vulgar"
          },
          "de-DE": {
            singular: "Vulgäre Ausdrucksweise"
          },
          "fr-FR": {
            singular: "Contenu à caractère injurieux"
          },
          "ja-JP": {
            singular: "冒涜"
          },
          "ko-KR": {
            singular: "욕설"
          },
          "pt-BR": {
            singular: "Linguagem imprópria"
          },
          "zh-CN": {
            singular: "粗言秽语"
          }
        }
      }),
      nudity: (0, _v13.translate)({
        singular: "Nudity",
        dictionary: {
          es: {
            singular: "Desnudez"
          },
          "de-DE": {
            singular: "Nacktheit"
          },
          "fr-FR": {
            singular: "Nudité"
          },
          "ja-JP": {
            singular: "ヌード"
          },
          "ko-KR": {
            singular: "나체"
          },
          "pt-BR": {
            singular: "Nudez"
          },
          "zh-CN": {
            singular: "裸露"
          }
        }
      }),
      drugs: (0, _v13.translate)({
        singular: "Drug or alcohol use",
        dictionary: {
          es: {
            singular: "Consumo de drogas o alcohol"
          },
          "de-DE": {
            singular: "Drogen- oder Alkoholkonsum"
          },
          "fr-FR": {
            singular: "Consommation de drogues ou d'alcool"
          },
          "ja-JP": {
            singular: "ドラッグ、アルコールの使用"
          },
          "ko-KR": {
            singular: "약물 복용 또는 음주"
          },
          "pt-BR": {
            singular: "Uso de drogas ou álcool"
          },
          "zh-CN": {
            singular: "吸毒或酗酒"
          }
        }
      }),
      safe: (0, _v13.translate)({
        singular: "All audiences",
        dictionary: {
          es: {
            singular: "Para todos los públicos"
          },
          "de-DE": {
            singular: "Alle Zuschauergruppen"
          },
          "fr-FR": {
            singular: "Tout public"
          },
          "ja-JP": {
            singular: "すべての視聴者"
          },
          "ko-KR": {
            singular: "모든 시청자"
          },
          "pt-BR": {
            singular: "Para todas as idades"
          },
          "zh-CN": {
            singular: "所有观众"
          }
        }
      }),
      mature: (0, _v13.translate)({
        singular: "Mature",
        dictionary: {
          es: {
            singular: "Para adultos"
          },
          "de-DE": {
            singular: "Nicht jugendfrei"
          },
          "fr-FR": {
            singular: "Adulte"
          },
          "ja-JP": {
            singular: "成人向け"
          },
          "ko-KR": {
            singular: "성인"
          },
          "pt-BR": {
            singular: "Adulto"
          },
          "zh-CN": {
            singular: "成人"
          }
        }
      }),
      unrated: (0, _v13.translate)({
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
      })
    },
    _v70 = {
      contentRatings: _v68.Unrated,
      generalRating: _v68.Unrated,
      matureCheckboxes: {
        drugs: !1,
        violence: !1,
        nudity: !1,
        language: !1
      },
      containsAds: !1
    },
    _v71 = (_v0, _v1) => {
      switch (_v1.type) {
        case "HYDRATE":
          return _v1.payload;
        case "CHANGE_CONTENT_RATING":
          return {
            ..._v0,
            contentRatings: _v1.payload
          };
        case "CHANGE_GENERAL_RATING":
          let _v0 = {
              ..._v0.matureCheckboxes
            },
            _v1 = [..._v0.contentRatings];
          return _v1.payload === _v68.Mature && (_v1 = Object.keys(_v0 = {
            drugs: !0,
            violence: !0,
            language: !0,
            nudity: !0
          })), _v1.payload !== _v68.Safe || _v1.includes(_v68.Safe) || (_v1 = [_v68.Safe]), _v0.containsAds && _v1.push(_v68.Ads), {
            ..._v0,
            generalRating: _v1.payload,
            matureCheckboxes: _v0,
            contentRatings: _v1
          };
        case "CHANGE_MATURE_CHECKBOXES":
          return {
            ..._v0,
            matureCheckboxes: _v1.payload
          };
        case "TOGGLE_MATURE_RATING":
          let _v2 = _v0.matureCheckboxes[_v1.payload],
            _v3 = _v0.generalRating,
            _v4 = {
              ..._v0.matureCheckboxes,
              [_v1.payload]: !_v2
            },
            _v5 = Object.keys(_v4).filter(_v0 => _v4[_v0]),
            _v6 = _v5.length ? _v5 : [_v68.Safe];
          return _v5.length || (_v3 = _v68.Safe), _v0.containsAds && _v6.push(_v68.Ads), {
            ..._v0,
            matureCheckboxes: _v4,
            contentRatings: _v6,
            generalRating: _v3
          };
        case "TOGGLE_CONTAINS_ADS":
          let _v7 = [..._v0.contentRatings],
            _v8 = !_v0.containsAds;
          return _v8 ? _v7.push(_v68.Ads) : _v7 = _v7.filter(_v0 => _v0 !== _v68.Ads), {
            ..._v0,
            containsAds: _v8,
            contentRatings: _v7
          };
        default:
          return _v0;
      }
    };
  var _v72 = _v0.i(0);
  let _v73 = [{
      value: "safe",
      label: _v69.safe
    }, {
      value: "mature",
      label: _v69.mature
    }],
    _v74 = ({
      onRatingChange: _v0,
      isRatingModlocked: _v1,
      selectedGeneralRating: _v2
    }) => (0, _v2.jsx)(_v72.Select, {
      placeholder: (0, _v13.translate)({
        singular: "Select a rating...",
        dictionary: {
          es: {
            singular: "Seleccione una calificación..."
          },
          "de-DE": {
            singular: "Wählen Sie eine Bewertung aus ..."
          },
          "fr-FR": {
            singular: "Sélectionner une classification..."
          },
          "ja-JP": {
            singular: "レーティングを選択してください..."
          },
          "ko-KR": {
            singular: "등급 선택..."
          },
          "pt-BR": {
            singular: "Selecione uma classificação..."
          },
          "zh-CN": {
            singular: "选择分级..."
          }
        }
      }),
      items: _v73,
      value: [_v2 ?? ""],
      disabled: _v1,
      onValueChange: _v0 => {
        _v0(_v0.value[0]);
      },
      variant: "outlined",
      children: _v0 => (0, _v2.jsx)(_v72.SelectItem, {
        display: "flex",
        "data-testid": `${_v0.value}-option`,
        children: (0, _v2.jsx)(_v72.SelectItemText, {
          children: _v0.label
        })
      })
    }),
    _v75 = "violence",
    _v76 = "language",
    _v77 = "nudity",
    _v78 = "drugs",
    _v79 = [_v76, _v78, _v75, _v77],
    _v80 = ["unrated"],
    _v81 = ({
      video: _v0,
      updateContentRating: _v1
    }) => {
      let _v2 = _v0?.id,
        _v3 = _v0?.contentRating ?? _v80,
        _v4 = _v0?.ratingModLocked ?? !1,
        [_v5, _v6] = (0, _v17.useState)(!1),
        _v7 = (0, _v17.useRef)(null),
        _v8 = (0, _v43.useAnalyticsEvent)(),
        _v9 = (0, _v17.useRef)(!1),
        _v10 = () => ({
          ..._v70,
          contentRatings: _v3,
          containsAds: _v3.includes(_v68.Ads),
          generalRating: _v3.includes(_v68.Safe) ? _v68.Safe : _v3.includes(_v68.Unrated) ? _v68.Unrated : _v68.Mature,
          matureCheckboxes: {
            drugs: _v3.includes(_v78),
            violence: _v3.includes(_v75),
            language: _v3.includes(_v76),
            nudity: _v3.includes(_v77)
          }
        }),
        _v11 = _v10(),
        [_v12, _v13] = (0, _v17.useReducer)(_v71, _v11);
      return (0, _v17.useEffect)(() => {
        _v2 || _v13({
          type: "HYDRATE",
          payload: _v10()
        });
      }, [_v3]), (0, _v67.default)([_v7], () => {
        _v6(!1);
      }, null, [_v5]), (0, _v17.useEffect)(() => {
        _v9.current && _v1?.(_v12.contentRatings), _v9.current = !0;
      }, [_v12.contentRatings]), (0, _v2.jsxs)(_v10.VStack, {
        alignItems: "stretch",
        children: [(0, _v2.jsxs)(_v24.Flex, {
          alignItems: "center",
          gap: "sm",
          children: [(0, _v2.jsx)(_v29.Text, {
            variant: "heading-xs",
            color: "text-primary",
            children: (0, _v13.translate)({
              singular: "Content rating",
              dictionary: {
                es: {
                  singular: "Calificación del contenido"
                },
                "de-DE": {
                  singular: "Inhaltsbewertung"
                },
                "fr-FR": {
                  singular: "Classification des contenus"
                },
                "ja-JP": {
                  singular: "コンテンツ レーティング"
                },
                "ko-KR": {
                  singular: "콘텐츠 등급"
                },
                "pt-BR": {
                  singular: "Classificação de conteúdo"
                },
                "zh-CN": {
                  singular: "内容分级"
                }
              }
            })
          }), (0, _v2.jsx)(_v19.Tooltip, {
            label: (0, _v13.translate)({
              singular: "Labeling the contents of your video keeps Vimeo safe and accessible to as many audiences as possible",
              dictionary: {
                es: {
                  singular: "Etiquetar el contenido de su video hace que Vimeo sea seguro y accesible para la mayor cantidad de audiencia posible"
                },
                "de-DE": {
                  singular: "Die Kennzeichnung der Inhalte Ihres Videos sorgt dafür, dass Vimeo sicher und für möglichst viele Zielgruppen zugänglich ist."
                },
                "fr-FR": {
                  singular: "L'étiquetage du contenu de votre vidéo contribue à assurer la sécurité de Vimeo et à le rendre accessible au plus grand nombre de publics possibles"
                },
                "ja-JP": {
                  singular: "動画に含まれるコンテンツにラベル付けすると、Vimeoに安全にアクセス可能なオーディエンス数を最大化できます"
                },
                "ko-KR": {
                  singular: "동영상 콘텐츠에 라벨을 추가하면 최대한 많은 시청자가 Vimeo를 안전하게 이용할 수 있습니다."
                },
                "pt-BR": {
                  singular: "O rótulo com o conteúdo do seu vídeo mantém o Vimeo seguro e acessível para o maior público possível"
                },
                "zh-CN": {
                  singular: "给您的视频内容贴上标签有助于保证 Vimeo 的安全，让尽可能多的观众可以访问"
                }
              }
            }),
            placement: "top",
            maxWidth: (0, _v20.rem)(240),
            children: (0, _v2.jsx)(_v24.Flex, {
              children: (0, _v2.jsx)(_v30.InfoCircle, {
                boxSize: "2xs"
              })
            })
          })]
        }), _v12.generalRating === _v68.Unrated ? (0, _v2.jsx)(_v22.Alert, {
          status: "info",
          children: (0, _v2.jsx)(_v23.AlertDescription, {
            children: (0, _v2.jsx)(_v21.Paragraph, {
              size: "md",
              children: (0, _v2.jsx)("span", {
                children: (0, _v13.translate)({
                  singular: "Videos without a content rating can't be watched by some viewers. {LINK}Learn more{/LINK}",
                  replacements: {
                    LINK: _v0 => (0, _v2.jsx)(_v64.Link, {
                      target: "_blank",
                      href: "https://vimeo.zendesk.com/hc/en-us/articles/224818087-Content-ratings",
                      fontSize: 14,
                      textDecoration: "underline",
                      children: _v0
                    }, "rating-help-message")
                  },
                  dictionary: {
                    es: {
                      singular: "Algunos espectadores no pueden ver los videos sin calificación del contenido. {LINK}Conocer más{/LINK}"
                    },
                    "de-DE": {
                      singular: "Videos ohne Inhaltsbewertung können von einigen Zuschauern nicht angesehen werden. {LINK}Mehr erfahren{/LINK}"
                    },
                    "fr-FR": {
                      singular: "Les vidéos sans classification de contenu ne peuvent pas être visionnées par certains spectateurs. {LINK}En savoir plus{/LINK}"
                    },
                    "ja-JP": {
                      singular: "コンテンツレーティングのない動画は、一部の視聴者にはご覧いただけません。{LINK}詳細はこちら{/LINK}"
                    },
                    "ko-KR": {
                      singular: "일부 시청자는 콘텐츠 등급이 없는 동영상을 시청할 수 없습니다. {LINK}자세히 보기{/LINK}"
                    },
                    "pt-BR": {
                      singular: "Alguns espectadores não podem assistir a vídeos sem classificação de conteúdo. {LINK}Saiba mais{/LINK}"
                    },
                    "zh-CN": {
                      singular: "有些观众无法观看内容未分级的视频。{LINK}了解更多{/LINK}"
                    }
                  }
                })
              })
            })
          })
        }) : null, (0, _v2.jsx)(_v74, {
          onRatingChange: _v0 => {
            _v13({
              type: "CHANGE_GENERAL_RATING",
              payload: _v0
            }), _v6(!1), _v8(_v58({
              rating: _v0.toString()
            }));
          },
          isRatingModlocked: _v4,
          selectedGeneralRating: _v12.generalRating
        }), _v4 && (0, _v2.jsx)(_v22.Alert, {
          status: "info",
          children: (0, _v2.jsx)(_v23.AlertDescription, {
            children: (0, _v2.jsx)(_v21.Paragraph, {
              size: "md",
              children: (0, _v13.translate)({
                singular: "The moderator has locked this content rating, and it cannot be changed.",
                dictionary: {
                  es: {
                    singular: "El moderador ha asegurado esta calificación del contenido y no se puede modificar."
                  },
                  "de-DE": {
                    singular: "Der Moderator hat diese Inhaltsbewertung endgültig festgelegt und sie kann nicht bearbeitet werden."
                  },
                  "fr-FR": {
                    singular: "Le modérateur a verrouillé la classification de ce contenu, et celle-ci ne peut pas être modifiée."
                  },
                  "ja-JP": {
                    singular: "モデレータがこのコンテンツ レーティングをロックしたので、変更できません。"
                  },
                  "ko-KR": {
                    singular: "관리자가 이 콘텐츠 등급을 잠궈 변경할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "O moderador bloqueou esta classificação de conteúdo e ela não pode ser alterada."
                  },
                  "zh-CN": {
                    singular: "版主已锁定此内容分级，无法更改。"
                  }
                }
              })
            })
          })
        }), _v12.generalRating === _v68.Mature && (0, _v2.jsxs)(_v2.Fragment, {
          children: [(0, _v2.jsxs)(_v3.Box, {
            children: [(0, _v2.jsx)(_v6.Header, {
              size: "xs",
              id: "mature-selection-text",
              display: "inline-block",
              mb: (0, _v20.rem)(8),
              mt: (0, _v20.rem)(6),
              children: (0, _v13.translate)({
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
            }), (0, _v2.jsx)(_v24.Flex, {
              direction: "column",
              gap: "2",
              mt: (0, _v20.rem)(8),
              children: _v79.map(_v0 => (0, _v2.jsx)(_v2.Fragment, {
                children: (0, _v2.jsx)(_v65.Checkbox, {
                  isDisabled: _v4,
                  onChange: () => {
                    _v13({
                      type: "TOGGLE_MATURE_RATING",
                      payload: _v0
                    });
                  },
                  isChecked: _v12.matureCheckboxes[_v0],
                  name: _v0,
                  id: `${_v0}-checkbox`,
                  value: _v0,
                  children: _v69[_v0]
                }, `${_v0}-checkbox`)
              }))
            })]
          }), (0, _v2.jsx)(_v66.Divider, {
            borderColor: "stroke",
            _dark: {
              borderColor: "stroke"
            }
          })]
        }), (0, _v2.jsx)(_v3.Box, {
          children: (0, _v2.jsx)(_v65.Checkbox, {
            disabled: _v4,
            name: "ads",
            "data-testid": "ads-checkbox",
            value: "ads",
            isChecked: _v12.containsAds,
            onChange: _v0 => {
              _v8(_v59({
                contains_ad: _v0.target.checked
              })), _v13({
                type: "TOGGLE_CONTAINS_ADS"
              });
            },
            children: (0, _v13.translate)({
              singular: "Contains advertisement",
              dictionary: {
                es: {
                  singular: "Contiene publicidad"
                },
                "de-DE": {
                  singular: "Enthält Werbung"
                },
                "fr-FR": {
                  singular: "Contient une publicité"
                },
                "ja-JP": {
                  singular: "広告が含まれています"
                },
                "ko-KR": {
                  singular: "광고 포함"
                },
                "pt-BR": {
                  singular: "Contém anúncios"
                },
                "zh-CN": {
                  singular: "包含广告"
                }
              }
            })
          })
        })]
      });
    };
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  let _v89 = ({
      domain: _v0,
      removeDomain: _v1,
      canBeRemoved: _v2 = !0
    }) => (0, _v2.jsxs)(_v88.Tag, {
      size: "sm",
      children: [(0, _v2.jsxs)(_v88.TagLabel, {
        children: [" ", _v0.slice(0, 56)]
      }), _v2 && (0, _v2.jsx)(_v88.TagCloseButton, {
        onClick: _v1
      })]
    }),
    _v90 = /^(http(s)?\:)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(localhost|(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?))(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
    _v91 = _v0 => _v0.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").replace(/\s/g, "").split("/")[0].toLowerCase(),
    _v92 = ({
      onPrivacyChange: _v0,
      initialPrivacy: _v1,
      onDeletingLastDomain: _v2,
      onEmbedDomainsChange: _v3,
      initialDomains: _v4,
      isDisabled: _v5 = !1
    }) => {
      let [_v6, _v7] = (0, _v17.useState)(""),
        [_v8, _v9] = (0, _v17.useState)(!0),
        [_v10, _v11] = (0, _v17.useState)(null),
        _v12 = _v1 === _v87.EmbedPrivacy.Whitelist,
        _v13 = _v4 ?? [],
        _v14 = _v13.map(_v0 => _v0.domain),
        _v15 = _v13.length > 0,
        _v16 = _v0 => {
          _v9(_v0);
        },
        _v17 = async () => {
          _v10 && (await _v19(_v10), _v11(null), _v2(null));
        },
        _v18 = async _v0 => {
          if (!(_v0 => {
            if (_v0.trim().length < 1) return !1;
            if (!(_v0 => {
              let _v1;
              if (!_v0) return;
              let _v2 = ((_v1 = _v0.trim()) && !_v1.match(/^(http(s)?\:)?\/\//) && (_v1 = `https://${_v1}`), _v1);
              return _v2.length < 250 && _v90.test(_v2);
            })(_v0)) return _v16(!1), !1;
            let _v1 = _v91(_v0);
            return !(_v14.indexOf(_v1) > -1);
          })(_v0)) return;
          _v8 || _v16(!0);
          let _v1 = _v91(_v0);
          _v7(""), _v3?.([..._v13, {
            domain: _v1,
            allowHd: !1,
            uri: _v1
          }]), await _v17(), _v12 || (await _v0("whitelist"));
        },
        _v19 = async (_v0, _v1) => {
          if (_v3?.(_v13.filter(_v0 => _v0.domain !== _v0.domain)), _v13.length > 1 || _v1) ;else _v11(_v0), _v2(_v0);
        };
      return (0, _v17.useEffect)(() => {
        _v15 && !_v12 && _v0("whitelist");
      }, [_v15, _v0, _v12]), (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v29.Text, {
          variant: "heading-xs",
          color: "text-primary",
          children: (0, _v13.translate)({
            singular: "Allowed domains",
            dictionary: {
              es: {
                singular: "Dominios permitidos"
              },
              "de-DE": {
                singular: "Zulässige Domains"
              },
              "fr-FR": {
                singular: "Domaines autorisés"
              },
              "ja-JP": {
                singular: "許可ドメイン"
              },
              "ko-KR": {
                singular: "허용되는 도메인"
              },
              "pt-BR": {
                singular: "Domínios permitidos"
              },
              "zh-CN": {
                singular: "允许的域名"
              }
            }
          })
        }), (0, _v2.jsxs)(_v26.FormControl, {
          isInvalid: !_v8,
          children: [(0, _v2.jsxs)(_v82.InputGroup, {
            size: "md",
            children: [(0, _v2.jsx)(_v83.Input, {
              placeholder: (0, _v13.translate)({
                singular: "domain.com",
                dictionary: {
                  es: {
                    singular: "dominio.com"
                  }
                }
              }),
              value: _v6,
              isDisabled: _v5,
              onBlur: () => {
                _v18(_v6);
              },
              onChange: _v0 => {
                _v8 || _v16(!0), _v7(_v0.target.value);
              },
              onKeyDown: _v0 => {
                "Enter" === _v0.key && _v18(_v6);
              },
              variant: "outlined"
            }), (0, _v2.jsx)(_v84.InputRightElement, {
              children: (0, _v2.jsx)(_v8.IconButton, {
                "aria-label": "add domain",
                icon: (0, _v2.jsx)(_v86.PlusCircle, {
                  cursor: "pointer"
                }),
                onClick: () => {
                  _v18(_v6);
                },
                isDisabled: _v5,
                variant: "tertiary",
                size: "sm"
              })
            })]
          }), !_v8 && (0, _v2.jsx)(_v85.FormErrorMessage, {
            children: (0, _v13.translate)({
              singular: "Enter a valid URL.",
              dictionary: {
                es: {
                  singular: "Ingresar una URL válida."
                },
                "de-DE": {
                  singular: "Gib eine gültige URL ein."
                },
                "fr-FR": {
                  singular: "Saisissez une URL valide."
                },
                "ja-JP": {
                  singular: "正しいURLを入力してください。"
                },
                "ko-KR": {
                  singular: "유효한 URL을 입력하세요."
                },
                "pt-BR": {
                  singular: "Insira um URL válido."
                },
                "zh-CN": {
                  singular: "输入有效的 URL。"
                }
              }
            })
          })]
        }), (0, _v2.jsx)(_v7.HStack, {
          flexWrap: "wrap",
          maxH: "initial",
          overflowY: "initial",
          children: _v13.map((_v0, _v1) => (0, _v2.jsx)(_v89, {
            domain: _v0.domain,
            removeDomain: () => _v19(_v0),
            canBeRemoved: !_v5
          }, `${_v0.domain}${_v1}`))
        })]
      });
    };
  var _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = [{
      value: "public",
      label: (0, _v13.translate)({
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
      })
    }, {
      value: "private",
      label: (0, _v13.translate)({
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
      })
    }, {
      value: "whitelist",
      label: (0, _v13.translate)({
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
    }],
    _v97 = {
      public: {
        icon: (0, _v2.jsx)(_v94.Globe, {})
      },
      private: {
        icon: (0, _v2.jsx)(_v93.EyeShut, {})
      },
      whitelist: {
        icon: (0, _v2.jsx)(_v95.Lock, {})
      }
    },
    _v98 = ({
      shouldDisableAll: _v0,
      selectedEmbedPrivacy: _v1,
      hasExtraEmbedOptions: _v2,
      onEmbedChangeClick: _v3,
      onEmbedUpsellClick: _v4,
      hidePrivateOption: _v5
    }) => {
      let _v6 = _v5 ? _v96.filter(_v0 => "private" !== _v0.value) : _v96;
      return (0, _v2.jsx)(_v72.Select, {
        "data-testid": "embed-dropdown",
        placeholder: "",
        items: _v6,
        value: [_v1 ?? ""],
        disabled: _v0,
        onValueChange: _v0 => {
          let _v1 = _v0.value[0];
          "whitelist" !== _v1 || _v2 ? _v3(_v1) : _v4?.();
        },
        leftIcon: _v97[_v1]?.icon,
        variant: "outlined",
        children: _v0 => "whitelist" !== _v0.value || _v2 ? (0, _v2.jsxs)(_v72.SelectItem, {
          display: "flex",
          "data-testid": `embed-privacy-${_v0.value}`,
          children: [_v97[_v0.value].icon, (0, _v2.jsx)(_v72.SelectItemText, {
            children: _v0.label
          })]
        }) : (0, _v2.jsxs)(_v72.SelectItem, {
          "data-testid": `embed-privacy-${_v0.value}`,
          children: [(0, _v2.jsx)(_v3.Box, {
            children: _v97[_v0.value].icon
          }), (0, _v2.jsx)(_v3.Box, {
            children: (0, _v2.jsx)(_v72.SelectItemText, {
              children: _v0.label
            })
          }), (0, _v2.jsx)(_v33.UpgradeBadge, {
            "data-testid": "embed-domains-upsell",
            name: "upload_home_embed_domains_upgrade_button",
            location: "upload_home_privacy_drawer"
          })]
        })
      });
    },
    _v99 = {
      activeLinkPrivacyOption: "",
      showEmbedInput: !1,
      allowDownloads: !1,
      allowShareLink: !0,
      allowShowcase: !1,
      activeEmbedPrivacy: "",
      allowComments: !0
    },
    _v100 = (_v0, _v1) => {
      switch (_v1.type) {
        case "PRIVACY_DRAWER.HYDRATE":
          return _v1.payload;
        case "PRIVACY_DRAWER.SET_ACTIVE_LINK_PRIVACY_OPTION":
          return {
            ..._v0,
            activeLinkPrivacyOption: _v1.payload
          };
        case "PRIVACY_DRAWER.TOGGLE_ALLOW_DOWNLOADS":
          return {
            ..._v0,
            allowDownloads: !_v0.allowDownloads
          };
        case "PRIVACY_DRAWER.TOGGLE_ALLOW_SHARE_LINK":
          return {
            ..._v0,
            allowShareLink: !_v0.allowShareLink
          };
        case "PRIVACY_DRAWER.TOGGLE_ALLOW_SHOWCASE":
          return {
            ..._v0,
            allowShowcase: !_v0.allowShowcase
          };
        case "PRIVACY_DRAWER.TOGGLE_ALLOW_COMMENTS":
          return {
            ..._v0,
            allowComments: !_v0.allowComments
          };
        default:
          return _v0;
      }
    },
    _v101 = ({
      linkText: _v0,
      privacyMessageOnClick: _v1,
      showLink: _v2 = !1
    }) => (0, _v2.jsx)(_v22.Alert, {
      status: "info",
      mb: 0,
      children: (0, _v2.jsxs)(_v23.AlertDescription, {
        children: [(0, _v2.jsx)(_v21.Paragraph, {
          size: "md",
          children: (0, _v13.translate)({
            singular: "This video is set to Private. Only people with access can view the embedded video.",
            dictionary: {
              es: {
                singular: "Este video está configurado como Privado. Solo las personas que tienen acceso pueden ver el video insertado."
              },
              "de-DE": {
                singular: "Dieses Video ist auf „Privat“ eingestellt. Nur Personen mit Zugriffsrechten können das eingebettete Video ansehen."
              },
              "fr-FR": {
                singular: "Cette vidéo est définie sur le mode Privé. Le visionnage de la vidéo intégrée est réservé aux utilisateurs disposant d'un accès."
              },
              "ja-JP": {
                singular: "この動画は「プライベート」に設定されています。アクセス権を持つ人のみ埋め込み動画を視聴できます。"
              },
              "ko-KR": {
                singular: "이 동영상은 '비공개'로 설정되어 있습니다. 액세스 권한이 있는 사람만 임베드된 동영상을 볼 수 있습니다."
              },
              "pt-BR": {
                singular: "O vídeo está definido como Privado. Somente pessoas com acesso podem ver o vídeo incorporado."
              },
              "zh-CN": {
                singular: "此视频已设置为私密。只有具有访问权限的人员才能查看嵌入的视频。"
              }
            }
          })
        }), _v2 && (0, _v2.jsx)(_v64.Link, {
          textDecoration: "none",
          onClick: () => {
            _v1 && _v1();
          },
          children: _v0
        })]
      })
    }),
    _v102 = (0, _v13.translate)({
      singular: "People I follow",
      dictionary: {
        es: {
          singular: "Las personas que sigo"
        },
        "de-DE": {
          singular: "Leute, denen ich folge"
        },
        "fr-FR": {
          singular: "Les personnes que je suis"
        },
        "ja-JP": {
          singular: "自分がフォローしている人"
        },
        "ko-KR": {
          singular: "내가 팔로우하는 사람"
        },
        "pt-BR": {
          singular: "Pessoas que eu sigo"
        },
        "zh-CN": {
          singular: "我关注的人"
        }
      }
    }),
    _v103 = {
      contacts: _v102,
      users: (0, _v13.translate)({
        singular: "People I choose",
        dictionary: {
          es: {
            singular: "Las personas que elijo"
          },
          "de-DE": {
            singular: "Von mir ausgewählte Leute"
          },
          "fr-FR": {
            singular: "Personnes de mon choix"
          },
          "ja-JP": {
            singular: "選択した人のみ"
          },
          "ko-KR": {
            singular: "내가 선택한 사람"
          },
          "pt-BR": {
            singular: "Pessoas que eu escolher"
          },
          "zh-CN": {
            singular: "我选择的人"
          }
        }
      }),
      disable: (0, _v13.translate)({
        singular: "Hide this video from vimeo.com",
        dictionary: {
          es: {
            singular: "Ocultar este video de vimeo.com"
          },
          "de-DE": {
            singular: "Dieses Video auf Vimeo.com ausblenden"
          },
          "fr-FR": {
            singular: "Masquer cette vidéo sur Vimeo.com"
          },
          "ja-JP": {
            singular: "この動画をVimeo.comで非表示にする"
          },
          "ko-KR": {
            singular: "vimeo.com에서 이 동영상 숨기기"
          },
          "pt-BR": {
            singular: "Ocultar este vídeo do vimeo.com"
          },
          "zh-CN": {
            singular: "对 vimeo.com 隐藏此视频"
          }
        }
      })
    },
    _v104 = {
      legacy: _v0 => (0, _v13.translate)({
        singular: 'Based on community feedback, we improved privacy settings. This video\'s current setting, "{PRIVACY}," is no longer supported. Instead, we recommend "Private" below. Your embeds won\'t be affected, and your video won\'t be searchable.',
        replacements: {
          PRIVACY: _v103[_v0]
        },
        dictionary: {
          es: {
            singular: 'Mejoramos la configuración de privacidad en función de los comentarios de la comunidad. Ya no se admite la configuración actual de este video, "{PRIVACY}". En su lugar, te recomendamos la opción "Privado" que aparece debajo. No se verán afectadas las inserciones, y el video no se podrá buscar.'
          },
          "de-DE": {
            singular: "Basierend auf Feedback unserer Community haben wir die Privatsphäreeinstellungen verbessert. Die aktuelle Einstellung dieses Videos „{PRIVACY}“ wird nicht mehr unterstützt. Wir empfehlen stattdessen die untenstehende Option „Privat“. Das betrifft deine Einbettungen nicht und dein Video kann nicht gesucht werden."
          },
          "fr-FR": {
            singular: "Nous avons pris en compte les avis de la communauté et avons amélioré nos paramètres de confidentialité. Par conséquent, le paramètre « {PRIVACY} » défini pour cette vidéo n'est plus pris en charge. Nous vous recommandons le paramètre « Privé » ci-dessous. Ce changement n'aura pas d'impact sur vos intégrations et vos vidéos ne pourront pas être recherchées."
          },
          "ja-JP": {
            singular: "コミュニティからのフィードバックを受け、プライバシー設定を改善しました。この動画の現在の設定「{PRIVACY}」のサポートは終了しました。代わりに、以下の「プライベート」設定をお勧めします。埋め込み動画に影響はなく、動画も検索できなくなります。"
          },
          "ko-KR": {
            singular: "커뮤니티 피드백을 바탕으로 프라이버시 설정이 개선되었습니다. 이 동영상에 현재 적용된 '{PRIVACY}' 설정은 더 이상 지원되지 않습니다. 대신 아래의 '비공개' 설정 사용을 권장합니다. 임베드에는 영향을 주지 않으며 동영상은 검색 결과에 나타나지 않습니다."
          },
          "pt-BR": {
            singular: 'Com base nos comentários da comunidade, melhoramos as configurações de privacidade. A configuração atual deste vídeo "{PRIVACY}" não é mais suportada. Em vez disso, recomendamos "Privado" como abaixo. Suas incorporações não serão afetadas e seu vídeo não será pesquisável.'
          },
          "zh-CN": {
            singular: "我们根据社区反馈改进了隐私设置。本视频的当前设置“{PRIVACY}”已不再支持。因此，我们建议在下方使用“私密”(Private)。您嵌入的内容不会受到影响，您的视频也不会被搜索到。"
          }
        }
      }),
      vod: _v0 => (0, _v13.translate)({
        singular: "Vimeo On Demand videos are automatically private. Edit VOD settings {A}here{/A}.",
        replacements: {
          A: _v0 => (0, _v2.jsx)(_v64.Link, {
            href: _v0,
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Los videos de VOD son privados de manera automática. Edita la configuración de VOD {A}aquí{/A}."
          },
          "de-DE": {
            singular: "Vimeo On Demand-Videos sind automatisch privat. VOD-Einstellungen {A}hier{/A} bearbeiten."
          },
          "fr-FR": {
            singular: "Les vidéos Vimeo On Demand sont automatiquement privées. Modifiez les paramètres VOD {A}ici{/A}."
          },
          "ja-JP": {
            singular: "Vimeoオンデマンド動画は自動的にプライベート公開となります。VOD設定の編集は{A}こちら{/A}から。"
          },
          "ko-KR": {
            singular: "Vimeo 온디맨드 동영상은 자동으로 비공개됩니다. {A}여기{/A}에서 VOD 설정을 편집하세요."
          },
          "pt-BR": {
            singular: "Vídeos do Vimeo On Demand são automaticamente privados. Edite as configurações do VOD {A}aqui{/A}."
          },
          "zh-CN": {
            singular: "Vimeo On Demand 视频将自动设为私人视频。在{A}此处{/A}编辑 VOD 设置。"
          }
        }
      }),
      stock: (0, _v13.translate)({
        singular: "Privacy can’t be changed on Vimeo Stock clips.",
        dictionary: {
          es: {
            singular: "No puedes cambiar la privacidad en los videos de archivo de Vimeo."
          },
          "de-DE": {
            singular: "Die Datenschutzbestimmungen können bei Vimeo-Stock-Clips nicht geändert werden."
          },
          "fr-FR": {
            singular: "La confidentialité ne peut pas être changée pour les clips de Vimeo Stock."
          },
          "ja-JP": {
            singular: "Vimeo Stockのクリップでプライバシー情報は変更できません。"
          },
          "ko-KR": {
            singular: "Vimeo Stock 클립에서는 프라이버시 설정을 변경할 수 없습니다."
          },
          "pt-BR": {
            singular: "A privacidade não pode ser alterada nos Clipes do Vimeo Stock."
          },
          "zh-CN": {
            singular: "无法更改 Vimeo Stock 剪辑的隐私。"
          }
        }
      }),
      unlicensedMusic: (0, _v13.translate)({
        singular: "Videos containing your own uploaded music cannot be public. To go public, use music available on Vimeo.",
        dictionary: {
          es: {
            singular: "Los videos en los que hayas subido música no pueden establecerse como públicos. Para ello, usa la música que está disponible en Vimeo."
          },
          "de-DE": {
            singular: "Videos, die von dir hochgeladene Musik enthalten, können nicht öffentlich geteilt werden. Wenn du sie öffentlich teilen möchtest, verwende Musik, die auf Vimeo verfügbar ist."
          },
          "fr-FR": {
            singular: "Les vidéos contenant votre propre musique ne peuvent pas être publiques. Pour les rendre publiques, utilisez la musique disponible sur Vimeo."
          },
          "ja-JP": {
            singular: "自分でアップロードした音楽を含む動画は公開できません。公開するには、Vimeoで利用可能な音楽を使用して下さい。"
          },
          "ko-KR": {
            singular: "자신이 업로드한 음악을 사용한 동영상은 공개할 수 없습니다. 모두에게 공개하려면 Vimeo에서 찾을 수 있는 음악을 사용하세요."
          },
          "pt-BR": {
            singular: "Os vídeos que contêm suas próprias músicas carregadas não podem ser públicos. Para ser público, use as músicas disponíveis no Vimeo."
          },
          "zh-CN": {
            singular: "包含您自己上传的音乐的视频不能公开。若要公开，可使用 Vimeo 上的音乐。"
          }
        }
      })
    },
    _v105 = _v0 => {
      let {
        privacy: _v1,
        privacySettingLink: _v2,
        isMusicLicensed: _v3
      } = _v0;
      return (0, _v2.jsx)(_v22.Alert, {
        status: "info",
        children: (0, _v2.jsx)(_v23.AlertDescription, {
          children: (0, _v2.jsx)(_v21.Paragraph, {
            size: "md",
            children: (0, _v2.jsx)("span", {
              children: (() => {
                if (!_v3) return _v104.unlicensedMusic;
                switch (_v1) {
                  case "contacts":
                  case "disable":
                  case "users":
                    return _v104.legacy(_v1);
                  case "ptv":
                  case "ptvhide":
                    return _v104.vod(_v2);
                  case "stock":
                  case "stock_purchased":
                    return _v104.stock;
                }
              })()
            })
          })
        })
      });
    },
    _v106 = {
      privacy: {
        feature: "teams",
        upsell_name: "video_share",
        location: "privacy drawer"
      },
      download: {
        feature: "privacy",
        upsell_name: "privacy_settings_allow_downloads",
        location: "privacy drawer"
      },
      embed: {
        feature: "privacy",
        upsell_name: "privacy_settings_embed_specific_domains",
        location: "privacy drawer"
      },
      storage_limit: {
        feature: "storage",
        upsell_name: "embed_storage_limit",
        location: "privacy drawer"
      }
    },
    _v107 = {
      privacy: {
        paywallTrigger: "upload_privacy_drawer_share_button",
        paywallLocation: "privacy_drawer",
        paywallType: "popup",
        paywallFeature: "privacy"
      },
      download: {
        paywallTrigger: "upload_privacy_drawer_download_button",
        paywallLocation: "privacy_drawer",
        paywallType: "popup",
        paywallFeature: "privacy"
      },
      embed: {
        paywallTrigger: "upload_privacy_drawer_embed_button",
        paywallLocation: "privacy_drawer",
        paywallType: "popup",
        paywallFeature: "privacy"
      },
      storage_limit: {
        paywallTrigger: "upload_embed_toggle_storage_limit",
        paywallLocation: "privacy_drawer",
        paywallType: "popup",
        paywallFeature: "storage_limit"
      }
    },
    _v108 = {
      privacy: "password privacy",
      download: "allow video download",
      embed: "embed domain privacy",
      storage_limit: "embed domain privacy"
    },
    _v109 = ["contacts", "users"],
    _v110 = ["ptv", "ptvhide", "stock", "stock_purchased"],
    _v111 = ({
      video: _v0,
      show: _v1,
      capabilities: _v2,
      canUpdatePrivacyToPublic: _v3,
      privacySettingLink: _v4,
      hasRestrictedPrivacyOptions: _v5,
      uploadingFileSize: _v6,
      quotaTargetUserId: _v7,
      onAllowDownloadsChange: _v8,
      onAllowShowcaseChange: _v9,
      onAllowCommentsChange: _v10,
      onPrivacyChange: _v11,
      onEmbedPrivacyChange: _v12,
      onEmbedDomainsChange: _v13,
      updateContentRating: _v14
    }) => {
      let _v15 = _v0?.id,
        _v16 = (0, _v43.useAnalyticsEvent)(),
        {
          user: _v17,
          vuid: _v18
        } = (0, _v17.useContext)(_v44.ConfigContext),
        _v19 = (0, _v17.useContext)(_v45.ViewerContext),
        {
          uploadQuota: _v20,
          isValidating: _v21
        } = (0, _v39.useUserQuotaApi)(_v7 ?? void 0),
        _v22 = _v20?.restricted,
        _v23 = (0, _v41.useHasMounted)(),
        _v24 = (0, _v17.useRef)(_v0?.privacy?.view),
        {
          tooltip: _v25,
          isDisabled: _v26
        } = (0, _v37.useGetEditEmbedPrivacyDisabled)(),
        [_v27, _v28] = (0, _v17.useState)(),
        [_v29, _v30] = (0, _v17.useState)(null),
        [_v31, _v32] = (0, _v17.useState)(_v0?.password ?? ""),
        [_v33, _v34] = (0, _v17.useState)(!1),
        [_v35, _v36] = (0, _v17.useState)(null),
        [_v37, _v38] = (0, _v17.useState)(!1),
        _v39 = (0, _v17.useMemo)(() => ({
          privacy: {
            headerText: (0, _v13.translate)({
              singular: "Upgrade to share",
              dictionary: {
                es: {
                  singular: "Cambia de membresía para compartir"
                },
                "de-DE": {
                  singular: "Zum Teilen Upgrade vornehmen"
                },
                "fr-FR": {
                  singular: "Passez au niveau supérieur pour partager"
                },
                "ja-JP": {
                  singular: "共有するにはアップグレード"
                },
                "ko-KR": {
                  singular: "업그레이드하고 공유하세요"
                },
                "pt-BR": {
                  singular: "Faça o upgrade para compartilhar"
                },
                "zh-CN": {
                  singular: "升级后即可分享"
                }
              }
            }),
            subHeaderText: (0, _v13.translate)({
              singular: "Get full access to robust collaboration and privacy tools",
              dictionary: {
                es: {
                  singular: "Obtenga acceso total a herramientas potentes de colaboración y privacidad"
                },
                "de-DE": {
                  singular: "Erhalten Sie vollen Zugriff auf zuverlässige Tools für Zusammenarbeit und Datenschutz"
                },
                "fr-FR": {
                  singular: "Accédez à tous les outils performants pour la collaboration et la confidentialité"
                },
                "ja-JP": {
                  singular: "強力な共同作業ツールとプライバシーツールにフルアクセス"
                },
                "ko-KR": {
                  singular: "강력한 협업 및 개인정보 보호 도구 모두 이용"
                },
                "pt-BR": {
                  singular: "Tenha acesso total a ferramentas robustas de colaboração e privacidade"
                },
                "zh-CN": {
                  singular: "获取对强大协作和隐私工具的完整访问权限"
                }
              }
            })
          },
          download: {
            headerText: (0, _v13.translate)({
              singular: "Upgrade to allow downloads",
              dictionary: {
                es: {
                  singular: "Actualice para permitir descargas"
                },
                "de-DE": {
                  singular: "Upgrade vornehmen, um Downloads zu ermöglichen"
                },
                "fr-FR": {
                  singular: "Mettez à niveau pour autoriser les téléchargements"
                },
                "ja-JP": {
                  singular: "アップグレードしてダウンロード可能に"
                },
                "ko-KR": {
                  singular: "다운로드를 허용하려면 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Faça upgrade para permitir downloads"
                },
                "zh-CN": {
                  singular: "升级以允许下载功能"
                }
              }
            }),
            subHeaderText: (0, _v13.translate)({
              singular: "Get full access to robust privacy and engagement tools",
              dictionary: {
                es: {
                  singular: "Obtenga acceso total a herramientas potentes de privacidad e interacción"
                },
                "de-DE": {
                  singular: "Sie erhalten vollen Zugang zu leistungsstarken Datenschutz- und Interaktionstools."
                },
                "fr-FR": {
                  singular: "Accédez à tous les outils performants pour la confidentialité et l'engagement"
                },
                "ja-JP": {
                  singular: "強力なプライバシー機能とエンゲージメントツールにフルアクセス"
                },
                "ko-KR": {
                  singular: "강력한 개인정보 보호 및 참여 도구를 모두 활용하세요."
                },
                "pt-BR": {
                  singular: "Tenha acesso total a ferramentas robustas de privacidade e engajamento"
                },
                "zh-CN": {
                  singular: "获取对强大的隐私和参与工具的完整访问权限"
                }
              }
            })
          },
          embed: {
            headerText: (0, _v13.translate)({
              singular: "Upgrade to restrict domains",
              dictionary: {
                es: {
                  singular: "Actualice para restringir dominios"
                },
                "de-DE": {
                  singular: "Upgrade vornehmen, um Domains einzuschränken"
                },
                "fr-FR": {
                  singular: "Mettez à niveau pour restreindre les domaines"
                },
                "ja-JP": {
                  singular: "アップグレードしてドメイン制限可能に"
                },
                "ko-KR": {
                  singular: "도메인을 제한하려면 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Faça upgrade para restringir domínios"
                },
                "zh-CN": {
                  singular: "升级以限制域"
                }
              }
            }),
            subHeaderText: (0, _v13.translate)({
              singular: "Get full access to robust privacy and engagement tools",
              dictionary: {
                es: {
                  singular: "Obtenga acceso total a herramientas potentes de privacidad e interacción"
                },
                "de-DE": {
                  singular: "Sie erhalten vollen Zugang zu leistungsstarken Datenschutz- und Interaktionstools."
                },
                "fr-FR": {
                  singular: "Accédez à tous les outils performants pour la confidentialité et l'engagement"
                },
                "ja-JP": {
                  singular: "強力なプライバシー機能とエンゲージメントツールにフルアクセス"
                },
                "ko-KR": {
                  singular: "강력한 개인정보 보호 및 참여 도구를 모두 활용하세요."
                },
                "pt-BR": {
                  singular: "Tenha acesso total a ferramentas robustas de privacidade e engajamento"
                },
                "zh-CN": {
                  singular: "获取对强大的隐私和参与工具的完整访问权限"
                }
              }
            })
          },
          storage_limit: {
            headerText: (0, _v13.translate)({
              singular: "You've reached your storage limit",
              dictionary: {
                es: {
                  singular: "Alcanzaste el límite de almacenamiento."
                },
                "de-DE": {
                  singular: "Du hast dein Speicherlimit erreicht."
                },
                "fr-FR": {
                  singular: "Vous avez atteint votre limite de stockage"
                },
                "ja-JP": {
                  singular: "ストレージ容量の上限に達しました"
                },
                "ko-KR": {
                  singular: "저장소 한도에 도달했습니다."
                },
                "pt-BR": {
                  singular: "Você atingiu seu limite de armazenamento"
                }
              }
            }),
            subHeaderText: (0, _v13.translate)({
              singular: "Upgrade your plan to get more storage",
              dictionary: {
                es: {
                  singular: "Actualiza tu plan para obtener más espacio de almacenamiento"
                },
                "de-DE": {
                  singular: "Aktualisieren Sie Ihren Tarif, um mehr Speicherplatz zu erhalten"
                },
                "fr-FR": {
                  singular: "Passez à un forfait supérieur pour obtenir plus d'espace de stockage"
                },
                "ja-JP": {
                  singular: "ストレージを増やすにはプランをアップグレードしてください"
                },
                "ko-KR": {
                  singular: "저장 공간을 늘리려면 요금제를 업그레이드하세요"
                },
                "pt-BR": {
                  singular: "Atualize seu plano para obter mais armazenamento"
                },
                "zh-CN": {
                  singular: "升级您的套餐以获得更多存储空间"
                }
              }
            })
          }
        }), []),
        _v40 = _v33 && !(_v31 && _v31.trim().length > 0 && _v31.trim().length <= 32),
        {
          canAllowDownloads: _v41,
          canHideVideos: _v42,
          canUnlistVideo: _v43,
          hasVideoPasswordPrivacyUpsell: _v44,
          hasPrivateModeOff: _v45
        } = _v2 ?? {},
        [_v46] = (0, _v32.useDeleteVideoPrivacyDomain)(),
        _v47 = async (_v0, _v1) => {
          _v28(_v0), ("whitelist" !== _v0 || _v1) && (_v29 && _v15 && (await _v46({
            where: {
              videoId: _v15,
              domain: _v29.domain
            }
          }), _v30(null)), _v0 !== _v52 && _v16(_v63({
            old_embed_privacy: _v52,
            video_embed_privacy: _v0
          })), _v12(_v0));
        },
        _v48 = async _v0 => {
          _v47(_v0, !1);
        },
        _v49 = async _v0 => {
          _v47(_v0, !0);
        },
        _v50 = _v0?.privacy?.add ?? !1,
        _v51 = _v0?.privacy?.allowShareLink ?? !0,
        _v52 = _v0?.privacy?.embed ?? "private",
        _v53 = _v0?.editSession?.isMusicLicensed ?? !0,
        _v54 = _v0?.metadata?.isScreenRecord,
        _v55 = _v2?.hasSunsetHideFromVimeo ?? !1,
        _v56 = _v2?.hasUpsellsForFlatRateTiers ?? !1,
        _v57 = _v2?.enterprise ?? !1,
        _v58 = _v0?.privacy?.download ?? !1,
        _v59 = _v0?.privacy?.comments === "anybody",
        _v60 = {
          ..._v99,
          activeLinkPrivacyOption: _v0?.privacy?.view,
          allowDownloads: _v58,
          allowShareLink: _v51,
          allowShowcase: _v50,
          activeEmbedPrivacy: _v52,
          allowComments: _v59
        },
        [_v61, _v62] = (0, _v17.useReducer)(_v100, _v60);
      (0, _v17.useEffect)(() => {
        _v0?.privacy?.view && _v61?.activeLinkPrivacyOption !== _v0?.privacy?.view && (_v32(""), _v62({
          type: "PRIVACY_DRAWER.SET_ACTIVE_LINK_PRIVACY_OPTION",
          payload: _v0?.privacy?.view
        }));
      }, [_v0?.privacy?.view]);
      let _v63 = void 0 !== _v45 && !_v45,
        _v64 = _v0?.allowedPrivacies && _v0?.privacy?.view && !_v0.allowedPrivacies.includes(_v0?.privacy?.view),
        _v65 = !_v0?.privacy?.view || _v110.indexOf(_v0?.privacy?.view) > -1 || _v64,
        _v66 = _v0?.privacy?.view && _v109.indexOf(_v0?.privacy?.view) > -1,
        _v67 = _v0?.privacy?.view && ["stock", "stock_purchased"].indexOf(_v0?.privacy?.view) > -1,
        {
          privacyOptions: _v68
        } = (0, _v35.useClipPrivacyOptions)(_v15, !1),
        _v69 = (0, _v36.useDefaultPrivacyOptions)(_v19, _v43 && !_v44 && _v42, !1),
        _v70 = (0, _v17.useMemo)(() => _v68?.length ? _v68 : _v69, [_v68, _v69]),
        _v71 = (0, _v17.useMemo)(() => _v70.filter(_v0 => "unlisted" !== _v0.privacy || !_v55).map(_v0 => ({
          ..._v0,
          showUpsell: _v0.showUpsell ?? (!_v57 && !!_v0?.allowedPrivacies && !_v0?.allowedPrivacies?.includes(_v0.privacy)),
          isDisabled: _v0.isDisabled || !_v53 || "unlisted" === _v0.privacy && !_v43 && !_v54 || "disable" === _v0.privacy && (!_v42 && !_v63 || _v63 && _v55) || "anybody" === _v0.privacy && !!_v5 && !!_v3
        })), [_v42, _v43, _v3, _v63, _v5, _v55, _v57, _v53, _v54, _v70, _v0?.allowedPrivacies]);
      (0, _v17.useEffect)(() => {
        _v1 && _v62({
          type: "PRIVACY_DRAWER.HYDRATE",
          payload: _v60
        });
      }, [_v1]);
      let _v72 = (0, _v40.useDebouncedCallback)(_v0 => {
          !_v40 && (_v24.current && _v16(_v60({
            old_video_privacy: _v24.current,
            video_privacy: "password"
          })), _v11("password", _v0 ?? void 0), _v24.current = "password");
        }, 600),
        _v73 = (0, _v17.useRef)({
          notification_name: "embed_privacy_notification",
          product: "vimeo create",
          location: "video page",
          path: window.location.pathname,
          session_id: null,
          client_timestamp: null,
          platform: window.navigator.platform,
          user_id: `${_v17 && _v17.id}`,
          vsid: null,
          user_package_type: null,
          third_party_integration: "none",
          flow: "create_homepage",
          device_id: _v18,
          clients_session_start_ts: null,
          client_ver: null,
          debug_mode: null,
          in_background: null,
          is_guest: null,
          lang: _v19?.locale || "en"
        });
      (0, _v17.useEffect)(() => {
        _v0?.privacy?.view === "nobody" && _v23 && _v18.BigPictureClient.sendEvent(new _v18.Event("view_notification", 1, {
          ..._v73.current
        }));
      }, [_v0?.privacy?.view, _v73]), (0, _v17.useEffect)(() => {
        _v0?.privacy?.embed && _v28(_v0?.privacy?.embed);
      }, [_v0?.privacy?.embed]);
      let _v74 = (_v0, _v1) => {
          _v16(_v56({
            upsell: _v1 ?? _v108[_v0],
            tier: _v56 ? "plus" : "starter",
            target: "/upgrade"
          })), _v36(_v0);
        },
        _v75 = _v26 && _v25 ? (0, _v2.jsx)(_v19.Tooltip, {
          shouldWrapChildren: !0,
          label: _v25,
          children: (0, _v2.jsx)(_v30.InfoCircle, {
            display: "block",
            width: "2xs",
            height: "2xs"
          })
        }) : null;
      return _v61.activeLinkPrivacyOption ? (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsxs)(_v10.VStack, {
          alignItems: "stretch",
          gap: "lg",
          children: [(0, _v2.jsxs)(_v10.VStack, {
            alignItems: "stretch",
            gap: "2",
            children: [(0, _v2.jsx)(_v29.Text, {
              variant: "heading-xs",
              color: "text-primary",
              children: (0, _v13.translate)({
                singular: "Link privacy",
                dictionary: {
                  es: {
                    singular: "Privacidad de los enlaces"
                  },
                  "de-DE": {
                    singular: "Link-Datenschutz"
                  },
                  "fr-FR": {
                    singular: "Confidentialité du lien"
                  },
                  "ja-JP": {
                    singular: "リンクのプライバシー"
                  },
                  "ko-KR": {
                    singular: "링크 프라이버시"
                  },
                  "pt-BR": {
                    singular: "Link de Privacidade"
                  },
                  "zh-CN": {
                    singular: "链接隐私"
                  }
                }
              })
            }), _v0?.privacy?.view && (_v65 || _v66 || !_v53) && !_v64 && (0, _v2.jsx)(_v105, {
              privacy: _v0?.privacy?.view,
              privacySettingLink: _v4,
              isMusicLicensed: _v53
            }), (0, _v2.jsx)(_v31.PrivacyDropdown, {
              isVideoPrivacy: !0,
              privacyOptions: _v71,
              activePrivacy: _v61.activeLinkPrivacyOption,
              onSelect: _v0 => {
                if (null != _v22 && "anybody" !== _v0) {
                  let _v0 = _v20?.restricted?.max,
                    _v1 = _v20?.restricted?.used;
                  if (null != _v0 && null != _v1 && _v1 + (_v6 ?? 0) > _v0) return void _v36("storage_limit");
                }
                _v62({
                  type: "PRIVACY_DRAWER.SET_ACTIVE_LINK_PRIVACY_OPTION",
                  payload: _v0
                }), _v0 !== _v34.DEFAULT_PRIVACY_VALUES.PASSWORD && _v0 !== _v24.current && (_v24.current && _v16(_v60({
                  old_video_privacy: _v24.current,
                  video_privacy: _v0
                })), _v11(_v0), _v32(""), _v24.current = _v0);
              },
              onUpsellClick: _v0 => _v74("privacy", _v0),
              isRedirectUpsell: !1,
              variant: "outlined"
            }), _v61.activeLinkPrivacyOption !== _v34.DEFAULT_PRIVACY_VALUES.PASSWORD || _v64 ? null : (0, _v2.jsxs)(_v10.VStack, {
              alignItems: "stretch",
              gap: "2",
              children: [(0, _v2.jsx)(_v28.Password, {
                name: "upload-page-password-input",
                size: "md",
                variant: "outlined",
                autoFocus: _v61.activeLinkPrivacyOption === _v34.DEFAULT_PRIVACY_VALUES.PASSWORD && _v0?.privacy?.view !== _v34.DEFAULT_PRIVACY_VALUES.PASSWORD,
                autoComplete: "new-password",
                isInvalid: _v40,
                value: _v31,
                placeholder: (0, _v13.translate)({
                  singular: "Enter password",
                  dictionary: {
                    es: {
                      singular: "Ingresar la contraseña"
                    },
                    "de-DE": {
                      singular: "Bitte Kennwort eingeben"
                    },
                    "fr-FR": {
                      singular: "Saisir mot de passe"
                    },
                    "ja-JP": {
                      singular: "パスワードを入力"
                    },
                    "ko-KR": {
                      singular: "비밀번호 입력"
                    },
                    "pt-BR": {
                      singular: "Digite a senha"
                    },
                    "zh-CN": {
                      singular: "输入密码"
                    }
                  }
                }),
                "data-lpignore": "true",
                "data-1p-ignore": "true",
                onChange: _v0 => {
                  _v33 || _v34(!0), _v32(_v0.target.value), _v72.debouncedCallback(_v0.target.value);
                },
                onFocus: () => _v38(!0),
                onBlur: () => _v38(!1)
              }), (0, _v2.jsx)(_v15.AnimatePresence, {
                children: _v37 ? (0, _v2.jsx)(_v24.Flex, {
                  as: _v16.motion.div,
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
                  children: (0, _v2.jsxs)(_v29.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    flex: "1",
                    textAlign: "right",
                    mt: "0",
                    children: [_v31.length, " / ", 32]
                  })
                }) : null
              })]
            })]
          }), null != _v22 ? (0, _v2.jsxs)(_v10.VStack, {
            alignItems: "stretch",
            gap: "lg",
            children: [(0, _v2.jsx)(_v38.EmbeddableQuotaMeter, {
              isChecked: _v27 !== _v34.EMBED_PRIVACY_VALUES.PRIVATE,
              isDisabled: !!_v67 || _v26,
              viewPrivacy: _v61.activeLinkPrivacyOption,
              onChange: () => {
                if (_v27 === _v34.EMBED_PRIVACY_VALUES.PRIVATE) {
                  let _v0 = _v20?.restricted?.max,
                    _v1 = _v20?.restricted?.used;
                  if (null != _v0 && null != _v1 && _v1 + (_v6 ?? 0) > _v0) return void _v36("storage_limit");
                }
                _v48(_v27 === _v34.EMBED_PRIVACY_VALUES.PRIVATE ? _v34.EMBED_PRIVACY_VALUES.PUBLIC : _v34.EMBED_PRIVACY_VALUES.PRIVATE);
              },
              quota: _v20 ?? null,
              isQuotaLoading: _v21,
              highlightedValue: _v6,
              isHighlightedAdditional: !0
            }), _v27 !== _v34.EMBED_PRIVACY_VALUES.PRIVATE && (0, _v2.jsxs)(_v10.VStack, {
              alignItems: "stretch",
              gap: "2",
              children: [(0, _v2.jsxs)(_v24.Flex, {
                alignItems: "center",
                gap: "1",
                children: [(0, _v2.jsx)(_v29.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v13.translate)({
                    singular: "Where can this be embedded?",
                    dictionary: {
                      es: {
                        singular: "¿Dónde pueden insertarlo?"
                      },
                      "de-DE": {
                        singular: "Wo kann das eingebettet werden?"
                      },
                      "fr-FR": {
                        singular: "Où est-ce que cette vidéo peut être intégrée ?"
                      },
                      "ja-JP": {
                        singular: "どこに動画の埋め込みを許可しますか？"
                      },
                      "ko-KR": {
                        singular: "어디에 임베드할 수 있나요?"
                      },
                      "pt-BR": {
                        singular: "Onde este vídeo pode ser incorporado?"
                      },
                      "zh-CN": {
                        singular: "可以在哪里嵌入？"
                      }
                    }
                  })
                }), _v75]
              }), _v0?.privacy?.view === "nobody" && (0, _v2.jsx)(_v101, {}), (0, _v2.jsx)(_v98, {
                selectedEmbedPrivacy: _v67 ? _v34.EMBED_PRIVACY_VALUES.PRIVATE : _v27,
                shouldDisableAll: !!_v67 || _v26,
                hasUpsellsForFlatRateTiers: _v2?.hasUpsellsForFlatRateTiers,
                hasExtraEmbedOptions: _v2?.hasExtraEmbedOptions,
                onEmbedChangeClick: _v48,
                onEmbedUpsellClick: () => _v74("embed"),
                hidePrivateOption: !0
              }), !_v53 && (0, _v2.jsx)(_v22.Alert, {
                status: "info",
                mb: 0,
                "data-testid": "embed-music-notice",
                children: (0, _v2.jsx)(_v23.AlertDescription, {
                  children: (0, _v2.jsx)(_v21.Paragraph, {
                    size: "md",
                    children: (0, _v13.translate)({
                      singular: "Videos with your own uploaded music will be visible only to you on Vimeo and anywhere you embed them. If you wish for your video to be publicly viewable on Vimeo or as an embed, please use licensed music available on Vimeo.",
                      dictionary: {
                        es: {
                          singular: "Los videos en los que hayas subido música serán visibles solo para ti tanto en Vimeo como en todos los lugares en los que los insertes. Si deseas que tu video se pueda ver de forma pública en Vimeo o en los lugares en los que lo insertes, usa la música con licencia que está disponible en Vimeo."
                        },
                        "de-DE": {
                          singular: "Videos, die von dir hochgeladene Musik enthalten, sind nur für dich auf Vimeo und überall dort, wo du sie einbettest, sichtbar. Wenn du möchtest, dass dein Video auf Vimeo, oder wo auch immer du es einbettest, öffentlich zu sehen ist, verwende bitte lizenzierte Musik, die auf Vimeo verfügbar ist."
                        },
                        "fr-FR": {
                          singular: "Les vidéos contenant votre propre musique ne seront visibles que par vous sur Vimeo et partout où vous les intégrez. Si vous voulez que votre vidéo soit visible publiquement sur Vimeo ou en tant qu'intégration, veuillez utiliser des musiques sous licence disponibles sur Vimeo."
                        },
                        "ja-JP": {
                          singular: "自分でアップロードした音楽を含む動画は、Vimeo上と埋め込んだすべての場所で自分にのみ表示されます。Vimeo上と埋め込み動画として動画を一般公開したい場合は、Vimeoで利用可能なライセンスされた音楽を使用してください。"
                        },
                        "ko-KR": {
                          singular: "자신이 업로드한 음악을 사용한 동영상은 Vimeo 및 임베드 장소에서 나만 볼 수 있습니다. Vimeo와 임베드 장소에서 모두가 동영상을 볼 수 있도록 하려면 Vimeo에서 이용 가능한 라이선스 음악을 사용하시기 바랍니다."
                        },
                        "pt-BR": {
                          singular: "Os vídeos com sua própria música carregada serão visíveis apenas para você no Vimeo e em qualquer lugar que você incorporá-los. Se você deseja que seu vídeo seja visível publicamente no Vimeo ou como uma incorporação, use as músicas licenciadas disponíveis no Vimeo."
                        },
                        "zh-CN": {
                          singular: "如果视频中使用了您自己上传的音乐，则只能在 Vimeo 和您嵌入视频之处看到。如果希望您的视频能在 Vimeo 上公开观看或嵌入，请使用 Vimeo 上提供的授权音乐。"
                        }
                      }
                    })
                  })
                })
              })]
            }), _v0?.privacy?.embed && _v27 === _v34.EMBED_PRIVACY_VALUES.WHITELIST && (0, _v2.jsx)(_v10.VStack, {
              align: "stetch",
              gap: "2",
              children: (0, _v2.jsx)(_v92, {
                initialPrivacy: _v0?.privacy?.embed,
                onPrivacyChange: _v49,
                onDeletingLastDomain: _v0 => {
                  _v30(_v0);
                },
                onEmbedDomainsChange: _v0 => {
                  _v13(_v0);
                },
                initialDomains: _v0?.privacy?.embedDomains,
                isDisabled: _v26
              })
            })]
          }) : (0, _v2.jsxs)(_v10.VStack, {
            alignItems: "stretch",
            gap: "lg",
            children: [(0, _v2.jsxs)(_v10.VStack, {
              alignItems: "stretch",
              gap: "2",
              children: [(0, _v2.jsxs)(_v24.Flex, {
                alignItems: "center",
                gap: "1",
                children: [(0, _v2.jsx)(_v29.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v13.translate)({
                    singular: "Where can this be embedded?",
                    dictionary: {
                      es: {
                        singular: "¿Dónde pueden insertarlo?"
                      },
                      "de-DE": {
                        singular: "Wo kann das eingebettet werden?"
                      },
                      "fr-FR": {
                        singular: "Où est-ce que cette vidéo peut être intégrée ?"
                      },
                      "ja-JP": {
                        singular: "どこに動画の埋め込みを許可しますか？"
                      },
                      "ko-KR": {
                        singular: "어디에 임베드할 수 있나요?"
                      },
                      "pt-BR": {
                        singular: "Onde este vídeo pode ser incorporado?"
                      },
                      "zh-CN": {
                        singular: "可以在哪里嵌入？"
                      }
                    }
                  })
                }), _v75]
              }), _v0?.privacy?.view === "nobody" && (0, _v2.jsx)(_v101, {}), (0, _v2.jsx)(_v98, {
                selectedEmbedPrivacy: _v67 ? _v34.EMBED_PRIVACY_VALUES.PRIVATE : _v27,
                shouldDisableAll: !!_v67 || _v26,
                hasUpsellsForFlatRateTiers: _v2?.hasUpsellsForFlatRateTiers,
                hasExtraEmbedOptions: _v2?.hasExtraEmbedOptions,
                onEmbedChangeClick: _v48,
                onEmbedUpsellClick: () => _v74("embed")
              }), _v27 !== _v34.EMBED_PRIVACY_VALUES.PRIVATE && !_v53 && (0, _v2.jsx)(_v22.Alert, {
                status: "info",
                mb: 0,
                "data-testid": "embed-music-notice",
                children: (0, _v2.jsx)(_v23.AlertDescription, {
                  children: (0, _v2.jsx)(_v21.Paragraph, {
                    size: "md",
                    children: (0, _v13.translate)({
                      singular: "Videos with your own uploaded music will be visible only to you on Vimeo and anywhere you embed them. If you wish for your video to be publicly viewable on Vimeo or as an embed, please use licensed music available on Vimeo.",
                      dictionary: {
                        es: {
                          singular: "Los videos en los que hayas subido música serán visibles solo para ti tanto en Vimeo como en todos los lugares en los que los insertes. Si deseas que tu video se pueda ver de forma pública en Vimeo o en los lugares en los que lo insertes, usa la música con licencia que está disponible en Vimeo."
                        },
                        "de-DE": {
                          singular: "Videos, die von dir hochgeladene Musik enthalten, sind nur für dich auf Vimeo und überall dort, wo du sie einbettest, sichtbar. Wenn du möchtest, dass dein Video auf Vimeo, oder wo auch immer du es einbettest, öffentlich zu sehen ist, verwende bitte lizenzierte Musik, die auf Vimeo verfügbar ist."
                        },
                        "fr-FR": {
                          singular: "Les vidéos contenant votre propre musique ne seront visibles que par vous sur Vimeo et partout où vous les intégrez. Si vous voulez que votre vidéo soit visible publiquement sur Vimeo ou en tant qu'intégration, veuillez utiliser des musiques sous licence disponibles sur Vimeo."
                        },
                        "ja-JP": {
                          singular: "自分でアップロードした音楽を含む動画は、Vimeo上と埋め込んだすべての場所で自分にのみ表示されます。Vimeo上と埋め込み動画として動画を一般公開したい場合は、Vimeoで利用可能なライセンスされた音楽を使用してください。"
                        },
                        "ko-KR": {
                          singular: "자신이 업로드한 음악을 사용한 동영상은 Vimeo 및 임베드 장소에서 나만 볼 수 있습니다. Vimeo와 임베드 장소에서 모두가 동영상을 볼 수 있도록 하려면 Vimeo에서 이용 가능한 라이선스 음악을 사용하시기 바랍니다."
                        },
                        "pt-BR": {
                          singular: "Os vídeos com sua própria música carregada serão visíveis apenas para você no Vimeo e em qualquer lugar que você incorporá-los. Se você deseja que seu vídeo seja visível publicamente no Vimeo ou como uma incorporação, use as músicas licenciadas disponíveis no Vimeo."
                        },
                        "zh-CN": {
                          singular: "如果视频中使用了您自己上传的音乐，则只能在 Vimeo 和您嵌入视频之处看到。如果希望您的视频能在 Vimeo 上公开观看或嵌入，请使用 Vimeo 上提供的授权音乐。"
                        }
                      }
                    })
                  })
                })
              })]
            }), _v0?.privacy?.embed && _v27 === _v34.EMBED_PRIVACY_VALUES.WHITELIST && (0, _v2.jsx)(_v10.VStack, {
              align: "stetch",
              gap: "2",
              children: (0, _v2.jsx)(_v92, {
                initialPrivacy: _v0?.privacy?.embed,
                onPrivacyChange: _v49,
                onDeletingLastDomain: _v0 => {
                  _v30(_v0);
                },
                onEmbedDomainsChange: _v0 => {
                  _v13(_v0);
                },
                initialDomains: _v0?.privacy?.embedDomains,
                isDisabled: _v26
              })
            })]
          }), (0, _v2.jsx)(_v81, {
            video: _v0,
            updateContentRating: _v14
          }), (0, _v2.jsxs)(_v10.VStack, {
            alignItems: "stretch",
            gap: "3",
            children: [(0, _v2.jsx)(_v29.Text, {
              variant: "heading-xs",
              color: "text-primary",
              children: (0, _v13.translate)({
                singular: "Viewer permissions",
                dictionary: {
                  es: {
                    singular: "Permisos de los espectadores"
                  },
                  "de-DE": {
                    singular: "Zuschauerberechtigungen"
                  },
                  "fr-FR": {
                    singular: "Autorisations du spectateur"
                  },
                  "ja-JP": {
                    singular: "視聴者権限"
                  },
                  "ko-KR": {
                    singular: "뷰어 권한"
                  },
                  "pt-BR": {
                    singular: "Permissões do espectador"
                  },
                  "zh-CN": {
                    singular: "观众权限"
                  }
                }
              })
            }), (0, _v2.jsxs)(_v26.FormControl, {
              display: "flex",
              justifyContent: "space-between",
              variant: "success",
              children: [(0, _v2.jsx)(_v27.FormLabel, {
                htmlFor: "allow-downloads-toggle",
                size: "sm",
                fontFamily: "body",
                mb: 0,
                children: (0, _v13.translate)({
                  singular: "Downloads",
                  dictionary: {
                    es: {
                      singular: "Descargas"
                    },
                    "fr-FR": {
                      singular: "Téléchargements"
                    },
                    "ja-JP": {
                      singular: "ダウンロード"
                    },
                    "ko-KR": {
                      singular: "다운로드"
                    },
                    "zh-CN": {
                      singular: "下载"
                    }
                  }
                })
              }), (0, _v2.jsxs)(_v3.Box, {
                children: [_v41 ? null : (0, _v2.jsx)(_v33.UpgradeBadge, {
                  onClick: () => _v74("download"),
                  name: "upload_home_downloads_upgrade_button",
                  location: "upload_home_privacy_drawer",
                  children: (0, _v13.translate)({
                    singular: "Upgrade",
                    dictionary: {
                      es: {
                        singular: "Actualizar"
                      },
                      "de-DE": {
                        singular: "Upgraden"
                      },
                      "fr-FR": {
                        singular: "Mettre à niveau"
                      },
                      "ja-JP": {
                        singular: "アップグレード"
                      },
                      "ko-KR": {
                        singular: "업그레이드"
                      },
                      "zh-CN": {
                        singular: "升级"
                      }
                    }
                  })
                }), (0, _v2.jsx)(_v25.Switch, {
                  isChecked: _v61.allowDownloads,
                  isDisabled: _v65 || !_v41,
                  id: "allow-downloads-toggle",
                  size: "md",
                  onChange: () => {
                    _v62({
                      type: "PRIVACY_DRAWER.TOGGLE_ALLOW_DOWNLOADS"
                    }), _v8(!_v61.allowDownloads);
                  },
                  placeContent: "space-between"
                })]
              })]
            }), (0, _v2.jsxs)(_v26.FormControl, {
              display: "flex",
              justifyContent: "space-between",
              children: [(0, _v2.jsx)(_v27.FormLabel, {
                htmlFor: "allow-comments-toggle",
                color: "text-primary",
                size: "sm",
                fontFamily: "body",
                mb: 0,
                children: (0, _v13.translate)({
                  singular: "Comments",
                  dictionary: {
                    es: {
                      singular: "Comentarios"
                    },
                    "de-DE": {
                      singular: "Kommentare"
                    },
                    "fr-FR": {
                      singular: "Commentaires"
                    },
                    "ja-JP": {
                      singular: "コメント"
                    },
                    "ko-KR": {
                      singular: "소감"
                    },
                    "pt-BR": {
                      singular: "Comentários"
                    },
                    "zh-CN": {
                      singular: "评论"
                    }
                  }
                })
              }), (0, _v2.jsx)(_v25.Switch, {
                isChecked: _v61.allowComments,
                isDisabled: _v65,
                id: "allow-comments-toggle",
                size: "md",
                onChange: () => {
                  _v62({
                    type: "PRIVACY_DRAWER.TOGGLE_ALLOW_COMMENTS"
                  }), _v10 && _v10(!_v61.allowComments), _v62();
                }
              })]
            }), (0, _v2.jsxs)(_v26.FormControl, {
              display: "flex",
              justifyContent: "space-between",
              children: [(0, _v2.jsxs)(_v24.Flex, {
                alignItems: "center",
                gap: "sm",
                children: [(0, _v2.jsx)(_v27.FormLabel, {
                  htmlFor: "allow-showcase-toggle",
                  color: "text-primary",
                  size: "sm",
                  fontFamily: "body",
                  mb: 0,
                  children: (0, _v13.translate)({
                    singular: "Add to collections",
                    dictionary: {
                      es: {
                        singular: "Agregar a las colecciones"
                      },
                      "de-DE": {
                        singular: "Zu Sammlungen hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter aux collections"
                      },
                      "ja-JP": {
                        singular: "コレクションに追加"
                      },
                      "ko-KR": {
                        singular: "컬렉션에 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar às coleções"
                      },
                      "zh-CN": {
                        singular: "添加到合集中"
                      }
                    }
                  })
                }), (0, _v2.jsx)(_v19.Tooltip, {
                  label: (0, _v13.translate)({
                    singular: "Showcases, channels, or groups",
                    dictionary: {
                      es: {
                        singular: "Presentaciones, canales o grupos"
                      },
                      "de-DE": {
                        singular: "Präsentationen, Kanäle oder Gruppen"
                      },
                      "fr-FR": {
                        singular: "Présentations, chaînes ou groupes"
                      },
                      "ja-JP": {
                        singular: "ショーケース、チャンネル、またはグループ"
                      },
                      "ko-KR": {
                        singular: "쇼케이스, 채널 또는 그룹"
                      },
                      "pt-BR": {
                        singular: "Vitrines, canais ou grupos"
                      },
                      "zh-CN": {
                        singular: "展示、频道或群组"
                      }
                    }
                  }),
                  placement: "top",
                  maxWidth: (0, _v20.rem)(240),
                  children: (0, _v2.jsx)(_v24.Flex, {
                    children: (0, _v2.jsx)(_v30.InfoCircle, {
                      boxSize: "2xs"
                    })
                  })
                })]
              }), (0, _v2.jsx)(_v25.Switch, {
                isChecked: _v61.allowShowcase,
                isDisabled: _v65,
                id: "allow-showcase-toggle",
                size: "md",
                onChange: () => {
                  _v62({
                    type: "PRIVACY_DRAWER.TOGGLE_ALLOW_SHOWCASE"
                  }), _v9 && _v9(!_v61.allowShowcase), _v61("number" == typeof _v15 ? "manage" : "upload");
                }
              })]
            })]
          })]
        }), !!_v35 && (0, _v2.jsx)(_v42.default, {
          apiUrl: _v19?.apiUrl,
          userConfig: {
            jwt: _v19?.jwt,
            userId: _v19?.user?.id
          },
          templateType: "default",
          onClose: () => _v36(null),
          modalConfig: _v39[_v35],
          tracking: {
            params: _v106[_v35],
            paywallTracking: _v107[_v35]
          }
        })]
      }) : null;
    },
    _v112 = ({
      video: _v0,
      capabilities: _v1,
      hasRestrictedPrivacyOptions: _v2,
      uploadingFileSize: _v3,
      quotaTargetUserId: _v4,
      onAllowDownloadsChange: _v5,
      onAllowShareLinkChange: _v6,
      onAllowShowcaseChange: _v7,
      onAllowCommentsChange: _v8,
      onEmbedPrivacyChange: _v9,
      onPrivacyChange: _v10,
      canUpdatePrivacyToPublic: _v11,
      page: _v12,
      privacySettingLink: _v13,
      show: _v14,
      updateContentRating: _v15,
      onEmbedDomainsChange: _v16
    }) => (0, _v2.jsxs)(_v10.VStack, {
      width: "100%",
      height: "100%",
      minH: "0",
      children: [(0, _v2.jsx)(_v10.VStack, {
        flex: "1",
        overflowY: "auto",
        p: "4",
        gap: "md",
        w: "100%",
        alignItems: "stretch",
        children: (0, _v2.jsx)(_v111, {
          video: _v0,
          show: _v14,
          capabilities: _v1,
          canUpdatePrivacyToPublic: _v11,
          privacySettingLink: _v13,
          hasRestrictedPrivacyOptions: _v2,
          uploadingFileSize: _v3,
          quotaTargetUserId: _v4,
          page: _v12,
          onAllowDownloadsChange: _v5,
          onAllowShareLinkChange: _v6,
          onAllowShowcaseChange: _v7,
          onAllowCommentsChange: _v8,
          onPrivacyChange: _v10,
          onEmbedPrivacyChange: _v9,
          onEmbedDomainsChange: _v16,
          updateContentRating: _v15
        })
      }), (0, _v2.jsx)(_v3.Box, {
        p: "4",
        w: "100%",
        children: (0, _v2.jsxs)(_v4.Button, {
          variant: "secondary",
          width: "100%",
          as: "a",
          href: "/settings/videos/upload_defaults",
          target: "_blank",
          onClick: () => _v57(_v12),
          children: [(0, _v2.jsx)(_v12.PopOut, {
            fontSize: 20
          }), (0, _v2.jsx)("span", {
            children: (0, _v13.translate)({
              singular: "Set defaults",
              dictionary: {
                es: {
                  singular: "Establecer valores predeterminados"
                },
                "de-DE": {
                  singular: "Standardwerte festlegen"
                },
                "fr-FR": {
                  singular: "Définir les paramètres par défaut"
                },
                "ja-JP": {
                  singular: "デフォルトを設定"
                },
                "ko-KR": {
                  singular: "기본값 설정"
                },
                "pt-BR": {
                  singular: "Definir padrões"
                },
                "zh-CN": {
                  singular: "设置默认值"
                }
              }
            })
          })]
        })
      })]
    }),
    _v113 = _v0 => {
      let {
        onClose: _v1,
        show: _v2
      } = _v0;
      return (0, _v2.jsxs)(_v10.VStack, {
        alignItems: "start",
        h: "100%",
        children: [(0, _v2.jsxs)(_v7.HStack, {
          justifyContent: "space-between",
          width: "100%",
          p: "4",
          children: [(0, _v2.jsx)(_v6.Header, {
            size: "sm",
            children: (0, _v13.translate)({
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
            })
          }), (0, _v2.jsx)(_v8.IconButton, {
            "aria-label": "close-icon",
            variant: "tertiary",
            size: "sm",
            icon: (0, _v2.jsx)(_v11.CloseX, {}),
            onClick: _v1
          })]
        }), _v2 ? (0, _v2.jsx)(_v112, {
          ..._v0
        }) : (0, _v2.jsx)(_v5.Center, {
          h: "100%",
          w: "100%",
          children: (0, _v2.jsx)(_v9.Spinner, {})
        })]
      });
    };
  _v0.s(["PrivacyDrawer", 0, _v0 => (0, _v2.jsx)(_v14.AnalyticsEventProvider, {
    eventData: {
      location: "privacy drawer",
      product: "privacy settings"
    },
    children: (0, _v2.jsx)(_v113, {
      ..._v0
    })
  })], 0);
}