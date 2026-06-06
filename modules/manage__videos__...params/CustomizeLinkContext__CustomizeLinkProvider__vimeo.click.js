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
    _v14 = _v0.i(0);
  _v0.s(["CustomizeLinkContext", () => _v28, "CustomizeLinkProvider", () => _v29], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  ({
    ..._v22.nullVideoContextData,
    ..._v22.nullTeamContext,
    ..._v22.nullUploadContextData
  });
  let _v23 = _v0 => _v21.BigPictureClient.sendEvent(new _v21.Event("vimeo.click", 41, {
      name: "svv_custom_url_upsell",
      location: _v0,
      page: "manage",
      type: "upsell",
      feature: "custom_url",
      target: "/upgrade",
      copy: "Upgrade"
    })),
    _v24 = {
      availableLinkUpsell: (0, _v8.translate)({
        singular: "Your custom link is available. Upgrade to claim it.",
        dictionary: {
          es: {
            singular: "Tu enlace personalizado está disponible. Cambia de plan para acceder a él."
          },
          "de-DE": {
            singular: "Dein benutzerdefinierter Link ist verfügbar. Upgrade, um ihn dir zu sichern."
          },
          "fr-FR": {
            singular: "Votre lien personnalisé est disponible. Effectuez la mise à niveau pour en profiter."
          },
          "ja-JP": {
            singular: "このカスタムリンクは利用可能です。アップグレードして利用しましょう。"
          },
          "ko-KR": {
            singular: "사용할 수 있는 커스텀 링크입니다. 이 링크를 확보하려면 업그레이드하세요."
          },
          "pt-BR": {
            singular: "O link customizado está disponível. Faça o upgrade para reivindicá-lo."
          },
          "zh-CN": {
            singular: "您的自定义链接可用。升级即可领取。"
          }
        }
      }),
      invalidChars: (0, _v8.translate)({
        singular: "Use only numbers, letters, and hyphens",
        dictionary: {
          es: {
            singular: "Utilice solo números, letras y guiones."
          },
          "de-DE": {
            singular: "Verwenden Sie nur Zahlen, Buchstaben und Bindestriche."
          },
          "fr-FR": {
            singular: "Veuillez utiliser uniquement des chiffres, des lettres et des tirets"
          },
          "ja-JP": {
            singular: "数字、文字、ハイフンのみを使用してください"
          },
          "ko-KR": {
            singular: "숫자, 문자, 하이픈만 사용해 주세요."
          },
          "pt-BR": {
            singular: "Use apenas números, letras e hifens"
          },
          "zh-CN": {
            singular: "仅使用数字、字母和连字符"
          }
        }
      }),
      unavailableLink: (0, _v8.translate)({
        singular: "Custom link not available. Please try another one.",
        dictionary: {
          es: {
            singular: "Enlace personalizado no disponible. Intenta con otro."
          },
          "de-DE": {
            singular: "Benutzerdefinierter Link nicht verfügbar. Versuche es mit einem anderen Link."
          },
          "fr-FR": {
            singular: "Le lien personnalisé n'est pas disponible. Veuillez en essayer un autre."
          },
          "ja-JP": {
            singular: "カスタムリンクが利用できません。別のものでお試しください。"
          },
          "ko-KR": {
            singular: "사용할 수 없는 커스텀 링크입니다. 다른 링크로 다시 시도하세요."
          },
          "pt-BR": {
            singular: "Link customizado não disponível. Tente outro vídeo."
          },
          "zh-CN": {
            singular: "自定义链接不可用。请尝试其他链接。"
          }
        }
      }),
      saved: (0, _v8.translate)({
        singular: "Saved",
        dictionary: {
          es: {
            singular: "Guardado"
          },
          "de-DE": {
            singular: "Gespeichert"
          },
          "fr-FR": {
            singular: "Enregistrée"
          },
          "ja-JP": {
            singular: "保存しました"
          },
          "ko-KR": {
            singular: "저장됨"
          },
          "pt-BR": {
            singular: "Salvo"
          },
          "zh-CN": {
            singular: "已保存"
          }
        }
      })
    };
  var _v25 = _v0.i(0);
  let _v26 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
      let {
          setIsTyping: _v6
        } = (0, _v2.useContext)(_v14.CustomUrlDispatcherCtx),
        {
          changesSaved: _v7,
          savedUrlEvent: _v8,
          resourceId: _v9
        } = (0, _v2.useContext)(_v28),
        [_v10, {
          data: _v11,
          called: _v12,
          loading: _v13,
          error: _v14
        }] = (0, _v25.usePatchVideo)();
      (0, _v2.useEffect)(() => {
        let _v0 = _v11 ? {
          link: _v11.link,
          customUrl: _v11.customUrl
        } : void 0;
        (0, _v20.updatePatchData)(_v12, _v7, _v14, _v13, _v0, _v8, _v6, _v0);
      }, [_v11, _v14, _v13, _v12]);
      let _v15 = !_v4 && _v2 && _v11 && !_v13 && "" !== _v1;
      return (0, _v2.useEffect)(() => {
        _v3 && _v10({
          where: {
            videoId: _v9
          },
          select: ["customUrl", "link"],
          variables: {
            customUrl: _v5
          }
        });
      }, [_v5]), {
        urlSaved: _v15,
        loading: _v13
      };
    },
    _v27 = (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => {
      let [_v8, {
          data: _v9,
          called: _v10,
          loading: _v11,
          error: _v12
        }] = (0, _v25.usePatchVideo)(),
        {
          apiCallEvent: _v13,
          resourceId: _v14
        } = (0, _v2.useContext)(_v28);
      return (0, _v2.useEffect)(() => {
        (0, _v20.updateValidateData)(_v13, _v10, _v0, _v1, _v12, _v11, _v2, _v3, _v4, _v5);
      }, [_v10, _v12, _v11, _v9]), (0, _v2.useEffect)(() => {
        _v6 && _v8({
          where: {
            videoId: _v14
          },
          headers: {
            "X-HTTP-METHOD-OVERRIDE": "VALIDATE"
          },
          select: ["customUrl"],
          variables: {
            customUrl: _v7
          }
        });
      }, [_v7]), _v11;
    },
    _v28 = (0, _v2.createContext)({
      changesSaved: () => void 0,
      inputAriaLabel: "",
      noticeLabel: "",
      originalLink: "",
      resourceId: 0,
      usePatchCall: (..._v0) => _v26(..._v0),
      useValidateCall: (..._v0) => _v27(..._v0),
      validationMessages: {
        availableLinkUpsell: "",
        invalidChars: "",
        unavailableLink: "",
        saved: ""
      },
      xsrft: ""
    }),
    _v29 = ({
      children: _v0,
      xsrft: _v1 = "",
      ..._v2
    }) => {
      var _v3;
      let {
          teamUsersRole: _v4
        } = (0, _v2.useContext)(_v14.CustomUrlStateCtx),
        _v5 = {
          video: (({
            changesSaved: _v0,
            customResourceLink: _v1,
            eventTriggerPage: _v2,
            resourceId: _v3,
            teamUsersRole: _v4,
            xsrft: _v5
          }) => ({
            apiCallEvent: _v0 => {
              _v2 && _v21.BigPictureClient.sendEvent(new _v21.Event("vimeo.svv_api_call", 1, {
                endpoint: "video/",
                http_method: "PUT",
                status: _v0 ? "success" : "failure",
                page: _v2,
                http_response_code: _v0 ? 204 : 400
              }));
            },
            changesSaved: _v0,
            customResourceLink: _v1,
            inputAriaLabel: (0, _v8.translate)({
              singular: "Customize the share link for this video.",
              dictionary: {
                es: {
                  singular: "Personaliza el enlace para compartir este video."
                },
                "de-DE": {
                  singular: "Personalisiere den Freigabelink für dieses Video."
                },
                "fr-FR": {
                  singular: "Personnalisez le lien de partage pour cette vidéo."
                },
                "ja-JP": {
                  singular: "この動画の共有リンクをカスタマイズ。"
                },
                "ko-KR": {
                  singular: "이 동영상의 공유 링크를 커스텀합니다."
                },
                "pt-BR": {
                  singular: "Customize o link de compartilhamento deste vídeo."
                },
                "zh-CN": {
                  singular: "自定义此视频的分享链接。"
                }
              }
            }),
            noticeLabel: (0, _v8.translate)({
              singular: "Custom link is now a paid feature, but you can continue to use this link for free. However, if you edit this link, or want to add custom links to other videos, you’ll need to {A}upgrade{/A}.",
              replacements: {
                A: _v0 => (0, _v1.jsx)(_v15.Link, {
                  href: (0, _v16.buildUpgradePlanUrl)({
                    paywallTrigger: "video_link_share_custom_url_upgrade_link",
                    paywallLocation: "video_link_share",
                    paywallFeature: "custom_url"
                  }, {
                    paywall: "1"
                  }),
                  target: "_blank",
                  onClick: () => _v2 && _v23(_v2),
                  children: _v0
                }, "custom-url-upsell")
              },
              dictionary: {
                es: {
                  singular: "Los enlaces personalizados ahora son una función paga, pero puedes seguir utilizando este enlace de forma gratuita. Sin embargo, si editas este enlace, o quieres agregar enlaces personalizados a otros videos, deberás {A}actualizar{/A} tu cuenta."
                },
                "de-DE": {
                  singular: "Benutzerdefinierte Links sind jetzt eine kostenpflichtige Funktion, aber du kannst diesen Link weiterhin kostenlos nutzen. Wenn du diesen Link allerdings bearbeiten oder benutzerdefinierte Links zu anderen Videos hinzufügen möchtest, musst du {A}upgraden{/A}."
                },
                "fr-FR": {
                  singular: "Les liens personnalisés sont désormais une fonctionnalité payante, mais vous pouvez continuer d'utiliser ce lien gratuitement. Cependant, si vous modifiez ce lien ou souhaitez ajouter des liens personnalisés à d'autres vidéos, vous devrez {A}mettre à niveau{/A} votre abonnement."
                },
                "ja-JP": {
                  singular: "カスタムリンクは有料プランの機能になりましたが、引き続きこのリンクは無料でご使用いただけます。ただし、このリンクを編集する場合、または他の動画にカスタムリンクを追加する場合は、{A}アップグレード{/A}する必要があります。"
                },
                "ko-KR": {
                  singular: "커스텀 링크는 이제 유료 기능이지만, 이 링크를 계속 무료로 사용할 수 있습니다. 그러나 이 링크를 수정하거나 다른 동영상에 커스텀 링크를 추가하려면 {A}업그레이드{/A}해야 합니다."
                },
                "pt-BR": {
                  singular: "Customizar link agora é um recurso pago, mas você pode continuar usando este link gratuitamente. No entanto, se você editar o link ou quiser adicionar links customizados a outros vídeos, precisará {A}fazer upgrade{/A}."
                },
                "zh-CN": {
                  singular: "目前，自定义链接是一项付费功能，但您可以继续免费使用此链接。但是，如果您想要编辑此链接，或将自定义链接添加到其他视频，则需要{A}升级{/A}。"
                }
              }
            }),
            originalLink: _v1 ? _v1.split("/")[1] : "",
            resetUrlEvent: () => _v2 && void _v21.BigPictureClient.sendEvent(new _v21.Event("vimeo.svv_click", 6, {
              name: "action",
              location: _v2,
              component: "remove_custom_link",
              page: "manage",
              role: _v4,
              video_id: _v3,
              feature: "",
              team_owner_id: null,
              team_subscription_type: null,
              copy: null
            })),
            resourceId: _v3,
            savedUrlEvent: () => _v2 && _v21.BigPictureClient.sendEvent(new _v21.Event("vimeo.svv_click", 1, {
              name: "action",
              location: _v2,
              component: "save_custom_link",
              page: "manage"
            })),
            showUpsellButton: !0,
            upsell: {
              onClick: () => _v2 && _v23(_v2)
            },
            usePatchCall: (..._v0) => _v26(..._v0),
            useValidateCall: (..._v0) => _v27(..._v0),
            validationMessages: _v24,
            xsrft: _v5
          }))(_v3 = {
            teamUsersRole: _v4,
            xsrft: _v1,
            ..._v2
          }),
          album: (({
            changesSaved: _v0,
            customResourceLink: _v1,
            resourceId: _v2,
            xsrft: _v3
          }) => ({
            changesSaved: _v0,
            customResourceLink: _v1,
            inputAriaLabel: (0, _v8.translate)({
              singular: "Customize the share link for this showcase.",
              dictionary: {
                es: {
                  singular: "Personalice el enlace para compartir de esta presentación."
                },
                "de-DE": {
                  singular: "Passen Sie den Freigabelink für dieses Showcase an."
                },
                "fr-FR": {
                  singular: "Personnalisez le lien de partage de cette présentation."
                },
                "ja-JP": {
                  singular: "このショーケースの共有リンクをカスタマイズします。"
                },
                "ko-KR": {
                  singular: "이 쇼케이스의 공유 링크를 커스텀합니다."
                },
                "pt-BR": {
                  singular: "Personalize o link de compartilhamento para esta vitrine."
                },
                "zh-CN": {
                  singular: "自定义此展示的共享链接。"
                }
              }
            }),
            noticeLabel: (0, _v8.translate)({
              singular: "To use your own URL, {A}upgrade{/A} your membership.",
              replacements: {
                A: _v0 => (0, _v1.jsx)(_v15.Link, {
                  href: (0, _v16.buildUpgradePlanUrl)({
                    paywallTrigger: "album_link_share_custom_url_upgrade_link",
                    paywallLocation: "album_link_share",
                    paywallFeature: "custom_url"
                  }, {
                    paywall: "1"
                  }),
                  target: "_blank",
                  children: _v0
                }, "custom-url-upsell")
              },
              dictionary: {
                es: {
                  singular: "Para usar su propia URL, {A}actualice{/A} su membresía."
                },
                "de-DE": {
                  singular: "Nehmen Sie ein Upgrade{/A} {A}Ihre Mitgliedschaft vor, um Ihre eigene URL zu verwenden."
                },
                "fr-FR": {
                  singular: "Pour utiliser votre URL, {A}mettez votre abonnement à niveau{/A}."
                },
                "ja-JP": {
                  singular: "独自のURLを使用するには、メンバーシップを{A}アップグレード{/A}してください。"
                },
                "ko-KR": {
                  singular: "자신의 URL을 사용하려면 멤버십을 {A}업그레이드{/A}하세요."
                },
                "pt-BR": {
                  singular: "Para usar seu próprio URL, {A}faça upgrade{/A} da sua assinatura."
                },
                "zh-CN": {
                  singular: "要使用您自己的 URL，请{A}升级{/A}您的会员资格。"
                }
              }
            }),
            originalLink: _v1 || "",
            resourceId: _v2,
            usePatchCall: (..._v0) => (0, _v18.default)(..._v0),
            useValidateCall: (..._v0) => ((_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => {
              let {
                  apiCallEvent: _v8,
                  resourceId: _v9,
                  xsrft: _v10
                } = (0, _v2.useContext)(_v28),
                [_v11, {
                  data: _v12,
                  called: _v13,
                  loading: _v14,
                  error: _v15
                }] = (0, _v19.default)(_v0 => `/showcase/${_v9}/check-url?url=${_v0}&token=${_v10}`, _v0 => _v0);
              return (0, _v2.useEffect)(() => {
                (0, _v20.updateValidateData)(_v8, _v13, _v0, _v1, _v15, _v14, _v2, _v3, _v4, _v5);
              }, [_v13, _v15, _v14, _v12]), (0, _v2.useEffect)(() => {
                _v6 && _v11(_v7);
              }, [_v7]), _v14;
            })(..._v0),
            validationMessages: _v17.VALIDATION_MESSAGES,
            xsrft: _v3
          }))(_v3)
        }[_v3.resourceType];
      return (0, _v1.jsx)(_v28.Provider, {
        value: _v5,
        children: _v0
      });
    };
  _v0.s(["CustomizeLinkInput", 0, ({
    changesSaving: _v0,
    showUpsell: _v1,
    placeholderLink: _v2,
    onUpsellClick: _v3
  }) => {
    let {
        dispatch: _v4,
        handleChange: _v5,
        clean: _v6,
        state: _v7
      } = (0, _v9.useCharacterCount)({
        maxCharacters: _v13.MAX_URL_LENGTH
      }),
      {
        customResourceLink: _v8,
        inputAriaLabel: _v9,
        noticeLabel: _v10,
        originalLink: _v11,
        resetUrlEvent: _v12,
        showUpsellButton: _v13,
        upsell: _v14,
        usePatchCall: _v15,
        useValidateCall: _v16,
        validationMessages: _v17
      } = (0, _v2.useContext)(_v28),
      {
        isLoading: _v18,
        isTyping: _v19
      } = (0, _v2.useContext)(_v14.CustomUrlStateCtx),
      {
        setIsTyping: _v20,
        setIsLoading: _v21
      } = (0, _v2.useContext)(_v14.CustomUrlDispatcherCtx),
      [_v22, _v23] = (0, _v2.useState)(""),
      [_v24, _v25] = (0, _v2.useState)(!1),
      [_v26, _v27] = (0, _v2.useState)(_v11),
      [_v28, _v29] = (0, _v2.useState)(_v11),
      [_v30, _v31] = (0, _v2.useState)(_v11),
      _v32 = (0, _v2.useRef)(!1),
      _v33 = _v1 && _v8 && _v11 === _v26,
      _v34 = _v1 && (!_v8 || _v8 && _v26 !== _v11),
      _v35 = () => {
        _v23(""), _v25(!1);
      },
      _v36 = _v16(_v35, _v26, _v29, _v25, _v23, _v1, _v32.current, _v30),
      {
        urlSaved: _v37,
        loading: _v38
      } = _v15(_v23, _v26, _v24, _v32.current, _v22, _v28),
      _v39 = _v24 && !_v38 && _v1,
      _v40 = _v2.replace(/^https?:\/\//, ""),
      {
        debouncedCallback: _v41,
        cancel: _v42
      } = (0, _v11.useDebouncedCallback)(_v0 => _v31(_v0), 500);
    (0, _v2.useEffect)(() => {
      _v4({
        type: "SET_REMAINING_CHARACTERS",
        payload: _v13.MAX_URL_LENGTH - _v26.length
      });
    }, []), (0, _v2.useEffect)(() => {
      let _v0 = _v38 || _v36;
      _v0 !== _v18 && _v21(_v0);
    }, [_v38, _v36, _v18, _v21]), (0, _v2.useEffect)(() => {
      _v37 && _v19 && _v20(!1);
    }, [_v19, _v37, _v20]);
    let _v43 = () => {
      _v4({
        type: "SET_REMAINING_CHARACTERS",
        payload: _v13.MAX_URL_LENGTH
      }), _v6(), _v27(""), _v35(), _v12?.(), _v29(""), _v32.current = !0;
    };
    return (0, _v1.jsxs)(_v5.Flex, {
      flexDirection: "column",
      gap: "md",
      children: [(0, _v1.jsx)(_v7.PartialInput, {
        "aria-label": _v9,
        variant: "outlined",
        "data-testid": "partial-input",
        dismissOnClick: _v43,
        value: _v26,
        prefix: _v40,
        messages: (() => {
          if (_v39) return {
            message: _v17.availableLinkUpsell,
            type: "positive"
          };
          if (_v37) return {
            message: _v17.saved,
            type: "positive"
          };
          if (_v22) return {
            message: "invalidCharacters" === _v22 ? _v17.invalidChars : _v17.unavailableLink,
            type: "negative"
          };
          let {
            remainingCharacters: _v0,
            error: _v1,
            warning: _v2
          } = _v7;
          return {
            message: (0, _v1.jsxs)(_v6.Text, {
              variant: "body-sm",
              textAlign: "right",
              color: _v1 ? "red.500" : _v2 ? "yellow.600" : "text-primary",
              children: [_v0, " / ", _v13.MAX_URL_LENGTH]
            })
          };
        })(),
        onChange: (_v0, _v1) => {
          _v32.current = !0, _v20(!0), _v0?.(!0), "" === _v1 ? _v43() : (_v27(_v1), _v5(_v1), _v1.length > _v13.MAX_URL_LENGTH ? (_v20(!1), _v35(), _v42()) : (0, _v20.isUrlValid)(_v1) ? (_v35(), _v11 === _v1 ? (_v20(!1), _v42()) : _v41(_v1)) : (_v20(!1), _v23("invalidCharacters"), _v42()));
        },
        focusInputOnPrefixClick: !0
      }), _v33 && (0, _v1.jsx)(_v3.Alert, {
        "data-testid": "custom-url-error-message",
        status: "info",
        children: (0, _v1.jsx)(_v4.AlertDescription, {
          children: _v10
        })
      }), _v34 && _v13 && (0, _v1.jsx)(_v10.UpgradeBadge, {
        "data-testid": "upgrade-button",
        size: "md",
        onClick: _v3 || _v14?.onClick,
        href: _v3 ? void 0 : "/upgrade",
        noMargin: !0,
        tracking: {
          upsell_feature_category: "privacy",
          upsell_specific_feature: "privacy_customize_link",
          upsell_badge_location: "svv_share_edit_link"
        },
        modalConfig: {
          ..._v12.includedInAllPlansModalConfig,
          planOverrides: {
            ..._v12.includedInAllPlansModalConfig.planOverrides,
            [_v12.PLANS.STARTER]: {
              featuresList: [(0, _v8.translate)({
                singular: "Custom video link",
                dictionary: {
                  es: {
                    singular: "Enlaces a videos personalizados"
                  },
                  "de-DE": {
                    singular: "Benutzerdefinierter Video-Link"
                  },
                  "fr-FR": {
                    singular: "Liens vidéo personnalisés"
                  },
                  "ja-JP": {
                    singular: "カスタム動画リンク"
                  },
                  "ko-KR": {
                    singular: "동영상 커스텀 링크"
                  },
                  "pt-BR": {
                    singular: "Customização de link de vídeo"
                  },
                  "zh-CN": {
                    singular: "自定义视频链接"
                  }
                }
              }), (0, _v8.translate)({
                singular: "Password privacy & unlisted links",
                dictionary: {
                  es: {
                    singular: "Privacidad de la contraseña y enlaces sin listar"
                  },
                  "de-DE": {
                    singular: "Passwortschutz und nicht gelistete Links"
                  },
                  "fr-FR": {
                    singular: "Confidentialité des mots de passe et liens non répertoriés"
                  },
                  "ja-JP": {
                    singular: "パスワードのプライバシーと限定公開リンク"
                  },
                  "ko-KR": {
                    singular: "비밀번호 보호 및 일부 공개 링크"
                  },
                  "pt-BR": {
                    singular: "Privacidade de senha e links não listados"
                  },
                  "zh-CN": {
                    singular: "密码隐私与未公开发布的链接"
                  }
                }
              }), (0, _v8.translate)({
                singular: "Customizable video player",
                dictionary: {
                  es: {
                    singular: "Reproductor de video personalizable"
                  },
                  "de-DE": {
                    singular: "Individuell anpassbarer Video-Player "
                  },
                  "fr-FR": {
                    singular: "Player vidéo personnalisable"
                  },
                  "ja-JP": {
                    singular: "カスタマイズ可能な動画プレーヤー"
                  },
                  "ko-KR": {
                    singular: "사용자 지정 가능한 동영상 플레이어"
                  },
                  "pt-BR": {
                    singular: "Video Player customizável"
                  },
                  "zh-CN": {
                    singular: "可定制的视频播放器"
                  }
                }
              })]
            }
          }
        },
        modalTracking: {
          params: {
            page: "video_share",
            feature: "privacy",
            location: "custom_url_input",
            upsell_name: "privacy_customize_link"
          },
          paywallTracking: {
            paywallTrigger: "video_share_custom_url_upgrade_button",
            paywallLocation: "video_share",
            paywallType: "popup",
            paywallFeature: "privacy"
          }
        },
        children: _v13.customUrlTransations.upgradeToSave
      }, "custom-url-upsell")]
    });
  }], 0);
}