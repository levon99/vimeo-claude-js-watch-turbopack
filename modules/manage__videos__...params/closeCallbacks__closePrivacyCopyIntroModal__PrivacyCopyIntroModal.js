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
    _v16 = _v0.i(0);
  let _v17 = new Set();
  _v0.s(["closeCallbacks", 0, _v17, "closePrivacyCopyIntroModal", 0, function () {
    _v17.forEach(_v0 => _v0());
  }], 0), _v0.s(["PrivacyCopyIntroModal", 0, function ({
    children: _v0
  }) {
    let {
      isOpen: _v1,
      acknowledge: _v2,
      enabled: _v3
    } = function () {
      let _v0 = (0, _v16.useViewer)(),
        _v1 = _v0?.user?.id,
        {
          settings: _v2
        } = (0, _v15.useOrionSettings)(),
        _v3 = _v2.privacy_settings_new_copy,
        {
          data: _v4,
          mutate: _v5
        } = (0, _v13.useGetUserPreferences)(() => _v3 && _v1 ? {
          where: {
            userId: _v1
          },
          select: ["pcim"]
        } : null),
        [_v6, _v7] = (0, _v2.useState)(!1),
        [_v8] = (0, _v13.usePatchUserPreferences)(),
        _v9 = void 0 !== _v4,
        _v10 = !!_v4?.pcim,
        _v11 = (0, _v2.useCallback)(() => _v7(!0), []),
        _v12 = (0, _v2.useCallback)(() => {
          _v7(!0), _v1 && _v8({
            where: {
              userId: _v1
            },
            select: ["pcim"],
            variables: {
              pcim: 1
            }
          }).then(() => _v5());
        }, [_v1, _v8, _v5]);
      return (0, _v2.useEffect)(() => (_v17.add(_v11), () => {
        _v17.delete(_v11);
      }), [_v11]), {
        isOpen: _v9 && !_v10 && !_v6,
        acknowledge: _v12,
        close: _v11,
        enabled: _v3
      };
    }();
    return _v3 ? (0, _v1.jsxs)(_v6.Popover, {
      isOpen: _v1,
      placement: "left-start",
      gutter: 16,
      strategy: "fixed",
      isLazy: !0,
      closeOnBlur: !1,
      children: [(0, _v1.jsx)(_v9.PopoverTrigger, {
        children: _v0
      }), (0, _v1.jsx)(_v10.Portal, {
        children: (0, _v1.jsxs)(_v8.PopoverContent, {
          width: (0, _v12.rem)(320),
          backgroundColor: "fill-surface",
          borderRadius: (0, _v12.rem)(8),
          boxShadow: "0px 4px 32px 0px rgba(11, 26, 41, 0.12)",
          padding: (0, _v12.rem)(16),
          border: "none",
          rootProps: {
            zIndex: "tooltip"
          },
          sx: {
            "--popper-arrow-shadow-color": "transparent"
          },
          _focus: {
            outline: "none",
            boxShadow: "0px 4px 32px 0px rgba(11, 26, 41, 0.12)"
          },
          children: [(0, _v1.jsx)(_v7.PopoverArrow, {
            backgroundColor: "fill-surface"
          }), (0, _v1.jsxs)(_v5.Flex, {
            direction: "column",
            gap: (0, _v12.rem)(24),
            alignItems: "stretch",
            children: [(0, _v1.jsxs)(_v5.Flex, {
              direction: "column",
              gap: (0, _v12.rem)(16),
              alignItems: "flex-start",
              children: [(0, _v1.jsx)(_v3.Badge, {
                variant: "new",
                size: "sm",
                children: (0, _v1.jsx)(_v11.Text, {
                  color: "text-primary",
                  variant: "heading-2xs",
                  children: (0, _v14.translate)({
                    singular: "Update",
                    dictionary: {
                      es: {
                        singular: "Actualizar"
                      },
                      "de-DE": {
                        singular: "Aktualisieren"
                      },
                      "fr-FR": {
                        singular: "Mettre à jour"
                      },
                      "ja-JP": {
                        singular: "アップデート"
                      },
                      "ko-KR": {
                        singular: "업데이트"
                      },
                      "pt-BR": {
                        singular: "Atualizar"
                      },
                      "zh-CN": {
                        singular: "更新"
                      }
                    }
                  })
                })
              }), (0, _v1.jsxs)(_v5.Flex, {
                direction: "column",
                gap: (0, _v12.rem)(8),
                alignItems: "flex-start",
                width: "100%",
                children: [(0, _v1.jsx)(_v11.Text, {
                  variant: "heading-sm",
                  color: "text-primary",
                  children: (0, _v14.translate)({
                    singular: "{EM}Hide from Vimeo{/EM} is now {EM}Embed only{/EM}",
                    replacements: {
                      EM: _v0 => (0, _v1.jsx)("em", {
                        children: _v0
                      })
                    },
                    dictionary: {
                      es: {
                        singular: "{EM}Ocultar de Vimeo{/EM} ahora es {EM}Solo para incrustar{/EM}"
                      },
                      "de-DE": {
                        singular: "{EM}Auf Vimeo verbergen{/EM} ist jetzt {EM}Nur Einbetten{/EM}"
                      },
                      "fr-FR": {
                        singular: "{EM}Masquer sur Vimeo{/EM} est désormais {EM}Uniquement intégrable{/EM}"
                      },
                      "ja-JP": {
                        singular: "{EM}Vimeoで非表示{/EM} は現在 {EM}埋め込みのみ{/EM}"
                      },
                      "ko-KR": {
                        singular: "{EM}Hide from Vimeo{/EM}은 이제 {EM}임베드 전용{/EM}입니다."
                      },
                      "pt-BR": {
                        singular: "{EM}Ocultar do Vimeo{/EM} agora é {EM}Somente por incorporação{/EM}"
                      },
                      "zh-CN": {
                        singular: "{EM}从 Vimeo 隐藏{/EM} 现为 {EM}仅限嵌入{/EM}"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v11.Text, {
                  variant: "body-sm",
                  color: "text-primary",
                  children: (0, _v14.translate)({
                    singular: "Same settings, clearer names. We've updated our privacy labels so it's easier to understand where your videos are shared.",
                    dictionary: {
                      es: {
                        singular: "Mismos ajustes, nombres más claros. Hemos actualizado nuestras etiquetas de privacidad para que sea más fácil comprender dónde se comparten tus videos."
                      },
                      "de-DE": {
                        singular: "Gleiche Einstellungen, klarere Bezeichnungen. Wir haben unsere Datenschutzkennzeichnungen aktualisiert, damit Sie leichter nachvollziehen können, wo Ihre Videos geteilt werden."
                      },
                      "fr-FR": {
                        singular: "Paramètres inchangés, noms clarifiés. Nous avons mis à jour nos libellés de confidentialité pour faciliter la compréhension des lieux où vos vidéos sont partagées."
                      },
                      "ja-JP": {
                        singular: "設定はそのまま、名称はより明確に。プライバシーラベルを更新し、動画がどこで共有されているかをより分かりやすくしました。"
                      },
                      "ko-KR": {
                        singular: "설정은 동일하지만, 이름을 더 명확하게 바꿨습니다. 개인정보 라벨을 업데이트하여 동영상이 어디에 공유되는지 더 쉽게 파악할 수 있습니다."
                      },
                      "pt-BR": {
                        singular: "Mesmas configurações, nomes mais claros. Atualizamos nossos rótulos de privacidade para facilitar a compreensão de onde seus vídeos são compartilhados."
                      },
                      "zh-CN": {
                        singular: "设置保持不变，名称更清晰。我们已更新隐私标签，使您更容易理解视频的共享位置。"
                      }
                    }
                  })
                })]
              })]
            }), (0, _v1.jsx)(_v5.Flex, {
              justifyContent: "flex-end",
              width: "100%",
              children: (0, _v1.jsx)(_v4.Button, {
                variant: "primary",
                size: "md",
                onClick: _v2,
                children: (0, _v14.translate)({
                  singular: "Got it",
                  dictionary: {
                    es: {
                      singular: "Entendido"
                    },
                    "de-DE": {
                      singular: "Alles klar"
                    },
                    "fr-FR": {
                      singular: "J'ai compris"
                    },
                    "ja-JP": {
                      singular: "了解"
                    },
                    "ko-KR": {
                      singular: "확인"
                    },
                    "pt-BR": {
                      singular: "Entendi"
                    },
                    "zh-CN": {
                      singular: "明白"
                    }
                  }
                })
              })
            })]
          })]
        })
      })]
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v0
    });
  }], 0);
}