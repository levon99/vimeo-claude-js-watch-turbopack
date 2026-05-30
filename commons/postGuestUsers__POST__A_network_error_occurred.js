{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v3.measureLatency)("postGuestUsers", "POST", async () => {
      let _v0 = await fetch(`${_v0}/guest_users?fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v4.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9() {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/guest_users${(0, _v2.serializeQuery)(_v0)}`, _v5({
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
  "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v9, {
    endpoint: "/guest_users",
    method: "POST"
  }), _v0.s(["usePostGuestUsers", 0, _v9], 0);
  var _v10 = _v0.i(0),
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
    _v26 = _v0.i(0);
  let _v27 = window.location.pathname.substring(1),
    _v28 = ({
      text: _v0,
      href: _v1
    }) => (0, _v10.jsx)(_v14.Link, {
      href: _v1,
      target: "_blank",
      rel: "noopener noreferrer",
      color: "text-teritary",
      variant: "inline-secondary",
      fontSize: "inherit",
      children: _v0
    }, _v1),
    _v29 = ({
      xsrft: _v0,
      closeModal: _v1,
      onSuccessfulLogin: _v2,
      submitCommentAsGuest: _v3,
      isSubmitLoading: _v4,
      apiErrorCode: _v5,
      resetApiErrorCode: _v6,
      titleText: _v7,
      submitButtonText: _v8,
      namePlaceholderText: _v9,
      isCompact: _v10 = !1,
      canReactToCollabComments: _v11,
      onLoginModalOpenChange: _v12
    }) => {
      let [_v13, _v14] = (0, _v6.useState)(""),
        [_v15, _v16] = (0, _v6.useState)(!0);
      (0, _v6.useEffect)(() => {
        _v16(!_v13.trim());
      }, [_v13]);
      let _v17 = () => {
          _v6?.(0), _v14("");
        },
        _v18 = () => {
          _v13.trim() && (_v6?.(0), _v3(_v13));
        },
        _v19 = (0, _v6.useCallback)(_v0 => {
          _v2(_v0);
        }, []);
      return (0, _v10.jsxs)(_v20.Box, {
        borderRadius: "xl",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: _v10 ? "24px" : "48px",
        position: _v10 ? "relative" : void 0,
        children: [_v10 ? (0, _v10.jsx)(_v18.CloseButton, {
          variant: "tertiary",
          size: "xs",
          position: "absolute",
          top: "16px",
          right: "16px",
          "aria-label": "close button",
          onClick: _v1
        }) : (0, _v10.jsx)(_v22.ModalCloseButton, {
          size: "lg",
          "aria-label": "close button",
          onClick: () => {
            _v17(), _v1();
          }
        }), (0, _v10.jsxs)(_v20.Box, {
          width: _v10 ? "100%" : ["310px", "322px"],
          children: [(0, _v10.jsx)(_v19.Text, {
            variant: _v10 ? "heading-sm" : "heading-md",
            sx: {
              mb: _v10 ? "4" : "2"
            },
            children: _v7 ?? (0, _v25.translate)({
              singular: "Let others know who you are",
              dictionary: {
                es: {
                  singular: "Deje que los demás sepan quién es usted"
                },
                "de-DE": {
                  singular: "Lassen Sie andere wissen, wer Sie sind"
                },
                "fr-FR": {
                  singular: "Faites savoir aux autres qui vous êtes"
                },
                "ja-JP": {
                  singular: "あなたが誰であるかを他の人に知らせましょう"
                },
                "ko-KR": {
                  singular: "회원님을 널리 알리세요"
                },
                "pt-BR": {
                  singular: "Permita que os outros saibam quem você é"
                },
                "zh-CN": {
                  singular: "让他人了解您的身份"
                }
              }
            })
          }), (0, _v10.jsxs)(_v23.FormControl, {
            mb: "4",
            children: [(0, _v10.jsx)(_v24.FormLabel, {
              mb: "2",
              fontFamily: "heading",
              fontSize: _v10 ? "12px" : "14px",
              children: (0, _v25.translate)({
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
            }), (0, _v10.jsx)(_v21.Input, {
              id: "name",
              size: "md",
              placeholder: _v9 ?? (0, _v25.translate)({
                singular: "First and last name",
                dictionary: {
                  es: {
                    singular: "Nombre y apellido"
                  },
                  "de-DE": {
                    singular: "Vor- und Nachname"
                  },
                  "fr-FR": {
                    singular: "Nom et prénom"
                  },
                  "ja-JP": {
                    singular: "お名前"
                  },
                  "ko-KR": {
                    singular: "성과 이름"
                  },
                  "pt-BR": {
                    singular: "Nome e sobrenome"
                  },
                  "zh-CN": {
                    singular: "名字和姓氏"
                  }
                }
              }),
              value: _v13,
              type: "text",
              _placeholder: {
                color: "text-secondary"
              },
              onChange: _v0 => {
                _v14(_v0.target.value);
              },
              onKeyDown: _v0 => {
                "Enter" === _v0.key && _v18();
              }
            })]
          }), [0, 0, 0].includes(_v5 ?? 0) && (0, _v10.jsx)(_v15.Alert, {
            status: "error",
            my: "4",
            children: (0, _v10.jsx)(_v16.AlertDescription, {
              fontSize: "body-sm",
              pt: "1",
              children: (0, _v25.translate)({
                singular: "Unable to process your request. Try again later.",
                dictionary: {
                  es: {
                    singular: "No se puede procesar su solicitud. Vuelva a intentarlo más tarde."
                  },
                  "de-DE": {
                    singular: "Ihre Anfrage kann nicht bearbeitet werden. Versuchen Sie es später noch einmal."
                  },
                  "fr-FR": {
                    singular: "Impossible de traiter votre demande. Veuillez réessayer plus tard."
                  },
                  "ja-JP": {
                    singular: "リクエストを処理できませんでした。しばらくしてから、再試行してください。"
                  },
                  "ko-KR": {
                    singular: "요청을 처리할 수 없습니다. 나중에 다시 시도하세요."
                  },
                  "pt-BR": {
                    singular: "Não é possível processar a sua solicitação. Tente de novo depois."
                  },
                  "zh-CN": {
                    singular: "无法处理您的请求。请稍后再试。"
                  }
                }
              })
            })
          }), (0, _v10.jsx)(_v17.Button, {
            variant: "primary",
            padding: "5px 0px",
            width: "100%",
            onClick: _v18,
            isDisabled: _v15,
            isLoading: _v4,
            children: _v8 ?? (0, _v25.translate)({
              singular: "Post comment",
              dictionary: {
                es: {
                  singular: "Publicar comentario"
                },
                "de-DE": {
                  singular: "Kommentare posten"
                },
                "fr-FR": {
                  singular: "Publier un commentaire"
                },
                "ja-JP": {
                  singular: "コメントを投稿"
                },
                "ko-KR": {
                  singular: "댓글 게시"
                },
                "pt-BR": {
                  singular: "Publicar comentário"
                },
                "zh-CN": {
                  singular: "发布评论"
                }
              }
            })
          })]
        }), (0, _v10.jsx)(_v26.LoginJoinModal, {
          type: "login",
          xsrft: _v0,
          onSuccess: _v0 => {
            _v12?.(!1), _v19(_v0);
          },
          onDismiss: () => _v12?.(!1),
          redirectUrl: _v27,
          children: _v0 => (0, _v10.jsx)(_v19.Text, {
            variant: _v10 ? "body-sm" : "body-lg",
            textAlign: "center",
            mt: 16,
            children: (0, _v25.translate)({
              singular: "Have a Vimeo account? {LINK}Log in{/LINK}",
              replacements: {
                LINK: _v0 => (0, _v10.jsx)(_v14.Link, {
                  cursor: "pointer",
                  tabIndex: 0,
                  variant: "inline-primary",
                  textUnderlineOffset: "2px",
                  onClick: () => {
                    _v17(), _v12?.(!0), _v0();
                  },
                  onKeyDown: _v0 => {
                    "Enter" === _v0.key && (_v17(), _v12?.(!0), _v0());
                  },
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "¿Tiene una cuenta de Vimeo? {LINK}Inicie sesión{/LINK}"
                },
                "de-DE": {
                  singular: "Haben Sie ein Vimeo Konto? {LINK}Anmelden{/LINK}"
                },
                "fr-FR": {
                  singular: "Vous avez un compte Vimeo ? {LINK}Connectez-vous{/LINK}"
                },
                "ja-JP": {
                  singular: "Vimeoアカウントをお持ちですか？{LINK}ログイン{/LINK}"
                },
                "ko-KR": {
                  singular: "Vimeo 계정이 있으신가요? {LINK}로그인{/LINK}"
                },
                "pt-BR": {
                  singular: "Já tem uma conta Vimeo ? {LINK}Faça login{/LINK}."
                },
                "zh-CN": {
                  singular: "已有 Vimeo 帐户？{LINK}登录{/LINK}"
                }
              }
            })
          })
        }), (0, _v10.jsx)(_v19.Text, {
          color: "text-tertiary",
          variant: _v10 ? "body-sm" : "heading-xs",
          mt: "4",
          children: _v11 ? (0, _v25.translate)({
            singular: "By posting a comment or reacting to a comment, you agree to our {TERMS_OF_SERVICE} Terms of Service {/TERMS_OF_SERVICE} and acknowledge our {PRIVACY_POLICY} Privacy Policy {/PRIVACY_POLICY}",
            replacements: {
              TERMS_OF_SERVICE: _v0 => (0, _v10.jsx)(_v28, {
                text: _v0,
                href: "/terms"
              }),
              PRIVACY_POLICY: _v0 => (0, _v10.jsx)(_v28, {
                text: _v0,
                href: "/privacy"
              })
            },
            dictionary: {
              es: {
                singular: "Al publicar un comentario o reaccionar a un comentario, acepta nuestros {TERMS_OF_SERVICE} Términos de servicio {/TERMS_OF_SERVICE} y reconoce nuestra {PRIVACY_POLICY} Política de privacidad {/PRIVACY_POLICY}"
              },
              "de-DE": {
                singular: "Indem Sie einen Kommentar veröffentlichen oder auf einen Kommentar reagieren, stimmen Sie unseren {TERMS_OF_SERVICE} Nutzungsbedingungen {/TERMS_OF_SERVICE} zu und erkennen unsere {PRIVACY_POLICY} Datenschutzerklärung {/PRIVACY_POLICY} an"
              },
              "fr-FR": {
                singular: "En publiant un commentaire ou en réagissant à un commentaire, vous acceptez nos {TERMS_OF_SERVICE} Conditions d'utilisation {/TERMS_OF_SERVICE} et reconnaissez notre {PRIVACY_POLICY} Politique de confidentialité {/PRIVACY_POLICY}"
              },
              "ja-JP": {
                singular: "コメントを投稿するかコメントにリアクションすることで、当社の {TERMS_OF_SERVICE} 利用規約 {/TERMS_OF_SERVICE} に同意し、当社の {PRIVACY_POLICY} プライバシーポリシー {/PRIVACY_POLICY} を確認したことを承認します。"
              },
              "ko-KR": {
                singular: "댓글을 게시하거나 댓글에 반응함으로써 귀하는 당사의 {TERMS_OF_SERVICE} 이용약관 {/TERMS_OF_SERVICE}에 동의하고 {PRIVACY_POLICY} 개인정보처리방침 {/PRIVACY_POLICY}을 확인하였음을 인정합니다"
              },
              "pt-BR": {
                singular: "Ao publicar um comentário ou reagir a um comentário, você concorda com nossos {TERMS_OF_SERVICE} Termos de Serviço {/TERMS_OF_SERVICE} e reconhece nossa {PRIVACY_POLICY} Política de Privacidade {/PRIVACY_POLICY}"
              },
              "zh-CN": {
                singular: "通过发布评论或对评论作出反应，您同意我们的 {TERMS_OF_SERVICE} 服务条款 {/TERMS_OF_SERVICE}，并已知悉我们的 {PRIVACY_POLICY} 隐私政策 {/PRIVACY_POLICY}"
              }
            }
          }) : (0, _v25.translate)({
            singular: "By posting a comment, you agree to our {TERMS_OF_SERVICE} Terms of Service {/TERMS_OF_SERVICE} and acknowledge our {PRIVACY_POLICY} Privacy Policy {/PRIVACY_POLICY}",
            replacements: {
              TERMS_OF_SERVICE: _v0 => (0, _v10.jsx)(_v28, {
                text: _v0,
                href: "/terms"
              }),
              PRIVACY_POLICY: _v0 => (0, _v10.jsx)(_v28, {
                text: _v0,
                href: "/privacy"
              })
            },
            dictionary: {
              es: {
                singular: "Al publicar un comentario, acepta nuestros {TERMS_OF_SERVICE}Términos de servicio{/TERMS_OF_SERVICE} y reconoce nuestra {PRIVACY_POLICY}Política de privacidad{/PRIVACY_POLICY}."
              },
              "de-DE": {
                singular: "Wenn Sie einen Kommentar hinzufügen, erklären Sie sich mit unseren {TERMS_OF_SERVICE}Nutzungsbedingungen{/TERMS_OF_SERVICE} einverstanden und erkennen unsere {PRIVACY_POLICY}Datenschutzerklärung{/PRIVACY_POLICY} an."
              },
              "fr-FR": {
                singular: "En publiant un commentaire, vous acceptez nos {TERMS_OF_SERVICE}Conditions d'utilisation{/TERMS_OF_SERVICE} et confirmez avoir pris connaissance de notre {PRIVACY_POLICY}Politique de confidentialité{/PRIVACY_POLICY}."
              },
              "ja-JP": {
                singular: "コメントを投稿することにより、{TERMS_OF_SERVICE}利用規約{/TERMS_OF_SERVICE}に同意し、 {PRIVACY_POLICY}プライバシーポリシー{/PRIVACY_POLICY}を承認したことになります。"
              },
              "ko-KR": {
                singular: "댓글을 게시하면 {TERMS_OF_SERVICE}이용 약관{/TERMS_OF_SERVICE}에 동의하고 {PRIVACY_POLICY}개인정보보호 정책{/PRIVACY_POLICY}을 인정하는 것입니다."
              },
              "pt-BR": {
                singular: "Ao postar um comentário, você concorda com nossos {TERMS_OF_SERVICE}Termos de Serviço{/TERMS_OF_SERVICE} e aceita nossa {PRIVACY_POLICY}Política de Privacidade{/PRIVACY_POLICY}."
              },
              "zh-CN": {
                singular: "发布评论即表示您同意我们的{TERMS_OF_SERVICE}服务条款{/TERMS_OF_SERVICE}，并确认已了解我们的{PRIVACY_POLICY}隐私政策{/PRIVACY_POLICY}。"
              }
            }
          })
        })]
      });
    };
  _v0.s(["default", 0, ({
    xsrft: _v0,
    closeModal: _v1,
    onSuccessfulLogin: _v2,
    submitCommentAsGuest: _v3,
    isActive: _v4,
    isSubmitLoading: _v5 = !1,
    apiErrorCode: _v6 = null,
    resetApiErrorCode: _v7,
    titleText: _v8,
    submitButtonText: _v9,
    canReactToCollabComments: _v10
  }) => (0, _v10.jsxs)(_v11.Modal, {
    isOpen: _v4,
    onClose: _v1,
    size: "sm",
    children: [(0, _v10.jsx)(_v12.ModalOverlay, {}), (0, _v10.jsx)(_v13.ModalContent, {
      maxW: "418px",
      children: (0, _v10.jsx)(_v29, {
        closeModal: _v1,
        xsrft: _v0,
        onSuccessfulLogin: _v2,
        submitCommentAsGuest: _v3,
        isSubmitLoading: _v5,
        apiErrorCode: _v6,
        resetApiErrorCode: _v7,
        titleText: _v8,
        submitButtonText: _v9,
        canReactToCollabComments: _v10
      })
    })]
  })], 0), _v0.s(["default", 0, ({
    xsrft: _v0,
    isActive: _v1,
    onDismiss: _v2,
    onSuccessfulLogin: _v3,
    submitCommentAsGuest: _v4,
    isSubmitLoading: _v5 = !1,
    apiErrorCode: _v6 = null,
    resetApiErrorCode: _v7,
    titleText: _v8,
    submitButtonText: _v9,
    namePlaceholderText: _v10,
    isCompact: _v11 = !1,
    canReactToCollabComments: _v12
  }) => {
    let _v13 = (0, _v6.useRef)(null),
      _v14 = (0, _v6.useRef)(!1),
      _v15 = (0, _v6.useCallback)(_v0 => {
        _v14.current = _v0;
      }, []);
    return (0, _v6.useEffect)(() => {
      if (!_v1) return;
      let _v0 = _v0 => {
        _v14.current || _v13.current?.contains(_v0.target) || _v2();
      };
      return document.addEventListener("pointerdown", _v0, !0), () => document.removeEventListener("pointerdown", _v0, !0);
    }, [_v1, _v2]), (0, _v10.jsx)(_v20.Box, {
      ref: _v13,
      width: "100%",
      display: _v1 ? void 0 : "none",
      bg: "fill-surface",
      borderRadius: "input-md",
      border: "1px solid",
      borderColor: "input-stroke",
      children: (0, _v10.jsx)(_v29, {
        closeModal: _v2,
        xsrft: _v0,
        onSuccessfulLogin: _v3,
        submitCommentAsGuest: _v4,
        isSubmitLoading: _v5,
        apiErrorCode: _v6,
        resetApiErrorCode: _v7,
        titleText: _v8,
        submitButtonText: _v9,
        namePlaceholderText: _v10,
        isCompact: _v11,
        canReactToCollabComments: _v12,
        onLoginModalOpenChange: _v15
      })
    });
  }], 0);
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  _v0.s(["DismissConfirmationModal", 0, ({
    isOpen: _v0,
    onContinue: _v1,
    onGoBack: _v2,
    canReactToCollabComments: _v3
  }) => (0, _v10.jsxs)(_v11.Modal, {
    isOpen: _v0,
    onClose: _v2,
    isCentered: !0,
    size: "sm",
    closeOnOverlayClick: !1,
    closeOnEsc: !1,
    children: [(0, _v10.jsx)(_v12.ModalOverlay, {}), (0, _v10.jsxs)(_v13.ModalContent, {
      maxW: "368px",
      children: [(0, _v10.jsx)(_v32.ModalHeader, {
        textAlign: "center",
        pb: "6px",
        children: (0, _v25.translate)({
          singular: "Add your name",
          dictionary: {
            es: {
              singular: "Añade tu nombre"
            },
            "de-DE": {
              singular: "Ihren Namen hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter votre nom"
            },
            "ja-JP": {
              singular: "名前を追加"
            },
            "ko-KR": {
              singular: "이름 추가"
            },
            "pt-BR": {
              singular: "Adicione seu nome"
            },
            "zh-CN": {
              singular: "添加您的姓名"
            }
          }
        })
      }), (0, _v10.jsx)(_v30.ModalBody, {
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "normal",
        color: "text-secondary",
        pt: 0,
        pb: "24px",
        children: _v3 ? (0, _v25.translate)({
          singular: "Enter your name to comment or react and let others know who you are.",
          dictionary: {
            es: {
              singular: "Introduce tu nombre para comentar o reaccionar y permite que otros sepan quién eres."
            },
            "de-DE": {
              singular: "Gib deinen Namen ein, um zu kommentieren oder zu reagieren und anderen mitzuteilen, wer du bist."
            },
            "fr-FR": {
              singular: "Entrez votre nom pour commenter ou réagir et indiquez aux autres qui vous êtes."
            },
            "ja-JP": {
              singular: "コメントやリアクションを行うには名前を入力し、他のユーザーにあなたが誰であるかを知らせてください。"
            },
            "ko-KR": {
              singular: "댓글을 달거나 반응하려면 이름을 입력하여 다른 사람들에게 누구인지 알려주세요."
            },
            "pt-BR": {
              singular: "Digite seu nome para comentar ou reagir e deixe que os outros saibam quem você é."
            },
            "zh-CN": {
              singular: "输入您的姓名以便评论或回应，让其他人知道您是谁。"
            }
          }
        }) : (0, _v25.translate)({
          singular: "Enter your name to comment and let others know who you are.",
          dictionary: {
            es: {
              singular: "Introduce tu nombre para comentar y deja que los demás sepan quién eres."
            },
            "de-DE": {
              singular: "Geben Sie Ihren Namen ein, um zu kommentieren und anderen mitzuteilen, wer Sie sind."
            },
            "fr-FR": {
              singular: "Saisissez votre nom pour commenter et permettre aux autres de savoir qui vous êtes."
            },
            "ja-JP": {
              singular: "コメントするには名前を入力し、他の人にあなたが誰であるかを知らせてください。"
            },
            "ko-KR": {
              singular: "댓글을 달기 위해 이름을 입력하여 다른 사람들이 당신이 누구인지 알 수 있도록 하세요."
            },
            "pt-BR": {
              singular: "Digite seu nome para comentar e deixar que os outros saibam quem você é."
            },
            "zh-CN": {
              singular: "输入您的姓名以发表评论，让其他人知道您是谁。"
            }
          }
        })
      }), (0, _v10.jsx)(_v31.ModalFooter, {
        pt: 0,
        children: (0, _v10.jsxs)(_v33.Stack, {
          spacing: 2,
          width: "100%",
          children: [(0, _v10.jsx)(_v17.Button, {
            variant: "primary",
            width: "100%",
            onClick: _v1,
            children: (0, _v25.translate)({
              singular: "Enter name",
              dictionary: {
                es: {
                  singular: "Escribe un nombre "
                },
                "de-DE": {
                  singular: "Namen eingeben"
                },
                "fr-FR": {
                  singular: "Saisissez un nom"
                },
                "ja-JP": {
                  singular: "名前を入力"
                },
                "ko-KR": {
                  singular: "이름 입력"
                },
                "pt-BR": {
                  singular: "Digite um nome"
                },
                "zh-CN": {
                  singular: "输入名称"
                }
              }
            })
          }), (0, _v10.jsx)(_v17.Button, {
            variant: "tertiary",
            width: "100%",
            onClick: _v2,
            children: (0, _v25.translate)({
              singular: "Go back to draft",
              dictionary: {
                es: {
                  singular: "Volver al borrador"
                },
                "de-DE": {
                  singular: "Zurück zum Entwurf"
                },
                "fr-FR": {
                  singular: "Revenir au brouillon"
                },
                "ja-JP": {
                  singular: "下書きに戻る"
                },
                "ko-KR": {
                  singular: "초안으로 돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar ao rascunho"
                },
                "zh-CN": {
                  singular: "返回草稿"
                }
              }
            })
          })]
        })
      })]
    })]
  })], 0);
}