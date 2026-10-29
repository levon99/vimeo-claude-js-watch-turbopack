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
    _v18 = _v0.i(0);
  let _v19 = ({
    isOpen: _v0,
    onClose: _v1,
    onSignUp: _v2
  }) => {
    let _v3 = (0, _v17.useColorModeValue)("https://i.vimeocdn.com/custom_asset/04b9034f20e4072138fdc6abeeac9689", "https://i.vimeocdn.com/custom_asset/eebe86843c3a0dfb0e65ec3b2868308e");
    return (0, _v1.jsxs)(_v11.Modal, {
      isOpen: _v0,
      onClose: _v1,
      isCentered: !0,
      children: [(0, _v1.jsx)(_v14.ModalOverlay, {}), (0, _v1.jsxs)(_v13.ModalContent, {
        "aria-label": (0, _v18.translate)({
          singular: "Don’t miss a reply",
          dictionary: {
            es: {
              singular: "No te pierdas una respuesta"
            },
            "de-DE": {
              singular: "Verpasse keine Antwort"
            },
            "fr-FR": {
              singular: "Ne manquez aucune réponse"
            },
            "ja-JP": {
              singular: "返信を見逃さないでください"
            },
            "ko-KR": {
              singular: "답글을 놓치지 마세요"
            },
            "pt-BR": {
              singular: "Não perca uma resposta"
            },
            "zh-CN": {
              singular: "别错过回复"
            }
          }
        }),
        bg: "surface",
        color: "text-primary",
        maxWidth: {
          base: "calc(100vw - 2rem)",
          md: (0, _v16.rem)(440)
        },
        borderRadius: "xl",
        paddingBottom: "lg",
        children: [(0, _v1.jsx)(_v12.ModalCloseButton, {
          "aria-label": (0, _v18.translate)({
            singular: "Close",
            dictionary: {
              es: {
                singular: "Cerrar"
              },
              "de-DE": {
                singular: "Schließen"
              },
              "fr-FR": {
                singular: "Fermer "
              },
              "ja-JP": {
                singular: "閉じる"
              },
              "ko-KR": {
                singular: "닫기"
              },
              "pt-BR": {
                singular: "Fechar"
              },
              "zh-CN": {
                singular: "关闭"
              }
            }
          })
        }), (0, _v1.jsx)(_v8.Box, {
          display: "flex",
          justifyContent: "center",
          paddingX: "lg",
          paddingTop: "lg",
          paddingBottom: "md",
          children: (0, _v1.jsx)(_v10.Image, {
            src: _v3,
            alt: "",
            width: (0, _v16.rem)(180),
            height: (0, _v16.rem)(144),
            objectFit: "contain"
          })
        }), (0, _v1.jsxs)(_v8.Box, {
          paddingX: "lg",
          children: [(0, _v1.jsx)(_v15.Text, {
            variant: "heading-md",
            textAlign: "left",
            children: (0, _v18.translate)({
              singular: "Don’t miss a reply",
              dictionary: {
                es: {
                  singular: "No te pierdas una respuesta"
                },
                "de-DE": {
                  singular: "Verpasse keine Antwort"
                },
                "fr-FR": {
                  singular: "Ne manquez aucune réponse"
                },
                "ja-JP": {
                  singular: "返信を見逃さないでください"
                },
                "ko-KR": {
                  singular: "답글을 놓치지 마세요"
                },
                "pt-BR": {
                  singular: "Não perca uma resposta"
                },
                "zh-CN": {
                  singular: "别错过回复"
                }
              }
            })
          }), (0, _v1.jsx)(_v15.Text, {
            variant: "body-sm",
            color: "text-secondary",
            marginTop: "sm",
            textAlign: "left",
            children: (0, _v18.translate)("Get an email when someone replies to your future comments. Create a free Vimeo account to keep the conversation going.")
          }), (0, _v1.jsx)(_v9.Button, {
            variant: "primary",
            width: "100%",
            height: "lg",
            marginTop: "lg",
            onClick: _v2,
            children: (0, _v18.translate)({
              singular: "Sign up for free",
              dictionary: {
                es: {
                  singular: "Regístrate gratis"
                },
                "de-DE": {
                  singular: "Kostenlos registrieren"
                },
                "fr-FR": {
                  singular: "Inscrivez-vous gratuitement"
                },
                "ja-JP": {
                  singular: "無料で登録"
                },
                "ko-KR": {
                  singular: "무료로 가입하세요"
                },
                "pt-BR": {
                  singular: "Cadastre-se gratuitamente"
                },
                "zh-CN": {
                  singular: "免费注册"
                }
              }
            })
          })]
        })]
      })]
    });
  };
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  _v0.s(["ReviewerSignupPromptProvider", 0, ({
    reviewId: _v0 = "",
    clipId: _v1,
    clipOwnerId: _v2,
    children: _v3
  }) => {
    let _v4 = (0, _v5.useOrionSetting)("enable_reviewer_signup_prompt"),
      _v5 = (0, _v4.useOrionLoading)(),
      _v6 = (0, _v5.useOrionSetting)("reviewer_signup_prompt_suppression_days"),
      _v7 = _v4 && !!_v0,
      {
        canShow: _v8,
        markShown: _v9
      } = (({
        reviewId: _v0,
        clipId: _v1,
        enabled: _v2,
        suppressionDays: _v3
      }) => {
        let _v4 = (0, _v21.useViewer)(),
          {
            dismiss: _v5,
            isDismissed: _v6
          } = (0, _v20.useDismissCooldown)({
            cooldownMs: 0 * Math.max(0, _v3),
            storageKey: `reviewer_signup_prompt:v1:${_v0}:${_v1}`
          }),
          _v7 = _v2 && !_v6 && null != _v4 && null == _v4.user;
        return (0, _v2.useMemo)(() => ({
          canShow: _v7,
          markShown: _v5
        }), [_v7, _v5]);
      })({
        reviewId: _v0,
        clipId: _v1,
        enabled: _v7,
        suppressionDays: _v6
      }),
      {
        toggleLoginModal: _v10,
        setRedirectUrl: _v11
      } = (0, _v3.useLoginModal)(),
      [_v12, _v13] = (0, _v2.useState)(null),
      _v14 = (0, _v2.useRef)(null),
      {
        trackReviewerSignupPromptShown: _v15,
        trackReviewerSignupPromptDismissed: _v16,
        trackReviewerSignupPromptClicked: _v17
      } = (0, _v6.useReviewTracking)(),
      _v18 = (0, _v2.useCallback)(_v0 => {
        _v9(), _v13(_v0), _v15({
          reviewId: _v0,
          clipId: _v1,
          clipOwnerId: _v2,
          promptSurface: _v0
        });
      }, [_v1, _v2, _v9, _v0, _v15]),
      _v19 = (0, _v2.useCallback)(_v0 => {
        if (null === _v12) {
          if (_v5) {
            _v14.current = _v0;
            return;
          }
          _v8 && _v18(_v0);
        }
      }, [_v8, _v5, _v18, _v12]);
    (0, _v2.useEffect)(() => {
      let _v0 = _v14.current;
      null !== _v0 && !_v5 && (_v14.current = null, _v8 && null === _v12 && _v18(_v0));
    }, [_v8, _v5, _v18, _v12]);
    let _v20 = (0, _v2.useCallback)(() => {
        null !== _v12 && (_v16({
          reviewId: _v0,
          clipId: _v1,
          clipOwnerId: _v2,
          promptSurface: _v12
        }), _v13(null));
      }, [_v1, _v2, _v12, _v0, _v16]),
      _v21 = (0, _v2.useCallback)(() => {
        if (null === _v12) return;
        _v17({
          reviewId: _v0,
          clipId: _v1,
          clipOwnerId: _v2,
          promptSurface: _v12
        }), _v13(null);
        let _v0 = window.location.pathname + window.location.search;
        void 0 !== _v0 && _v11(_v0), _v10(!0, "join", "guest_review_signup");
      }, [_v1, _v2, _v12, _v0, _v11, _v10, _v17]);
    return (0, _v1.jsxs)(_v7.ReviewerSignupPromptContext.Provider, {
      value: _v19,
      children: [_v3, (0, _v1.jsx)(_v19, {
        isOpen: null !== _v12,
        onClose: _v20,
        onSignUp: _v21
      }), _v7 && (0, _v1.jsx)(_v3.LoginModal, {})]
    });
  }], 0);
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = "rvto";
  _v0.s(["useIsReviewTourInCooldown", 0, function () {
    let _v0 = (0, _v25.useOptionalViewer)(),
      _v1 = _v0?.user?.id,
      [_v2, _v3] = (0, _v22.default)("review_tour_suppressed_until", 0),
      {
        data: _v4,
        error: _v5,
        mutate: _v6
      } = (0, _v23.useGetUserPreferences)(() => null == _v1 ? null : {
        where: {
          userId: _v1
        },
        select: [_v27]
      }),
      [_v7] = (0, _v23.usePatchUserPreferences)(),
      _v8 = (0, _v2.useRef)(new Set()),
      [_v9, _v10] = (0, _v2.useState)(() => new Set());
    !function ({
      onClose: _v0
    }) {
      let {
        registerOnClose: _v1,
        unregisterOnClose: _v2
      } = (0, _v24.useTourContext)();
      (0, _v2.useEffect)(() => {
        if (_v0) return _v1(_v0), () => _v2(_v0);
      }, [_v0, _v1, _v2]);
    }({
      onClose: (0, _v2.useCallback)((_v0, _v1) => {
        _v0 !== _v26.REVIEW_TOUR_NAME || "disabled" === _v1 || (null == _v1 ? _v3(Number.MAX_SAFE_INTEGER) : _v8.current.has(_v1) || (_v8.current.add(_v1), _v10(_v0 => {
          let _v1 = new Set(_v0);
          return _v1.add(_v1), _v1;
        }), _v6(_v0 => void 0 === _v0 ? _v0 : {
          ..._v0,
          [_v27]: !0
        }, {
          revalidate: !1
        }), _v7({
          where: {
            userId: _v1
          },
          select: [_v27],
          variables: {
            [_v27]: 1
          }
        }).then(() => {
          _v6();
        })));
      }, [_v1, _v6, _v7, _v3])
    });
    let _v11 = (0, _v2.useMemo)(() => Date.now() < _v2, [_v2]);
    return null != _v1 ? !!_v9.has(_v1) || !!_v11 || (void 0 === _v4 ? !_v5 : _v4[_v27] ?? !1) : _v11;
  }], 0);
}