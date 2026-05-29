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
    _v9 = _v0.i(0);
  _v0.s(["default", 0, function ({
    onDismiss: _v0
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v6.ModalHeader, {
        children: _v9.default.ThanksForYourReport
      }), (0, _v1.jsx)(_v5.ModalCloseButton, {
        "aria-label": _v9.default.Dismiss,
        onClick: _v0
      }), (0, _v1.jsxs)(_v4.ModalBody, {
        children: [(0, _v1.jsx)(_v2.Header, {
          size: "xs",
          children: _v9.default.WeLookingIntoIt
        }), (0, _v1.jsx)(_v7.Paragraph, {
          size: "md",
          children: (0, _v8.translate)({
            singular: "For more information about what Vimeo does and does not allow, please see our {LINK}Guidelines{/LINK}.",
            replacements: {
              LINK: _v0 => (0, _v1.jsx)(_v3.Link, {
                href: "/help/guidelines",
                target: "_blank",
                textDecoration: "underline",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Para obtener más información sobre lo que Vimeo permite y no permite, echa un vistazo a nuestras {LINK}Directrices{/LINK}."
              },
              "de-DE": {
                singular: "Weitere Informationen darüber, was bei Vimeo zulässig beziehungsweise nicht zulässig ist, findest du in unseren {LINK}Leitlinien{/LINK}."
              },
              "fr-FR": {
                singular: "Pour en savoir plus sur ce qui est autorisé et interdit sur Vimeo, consultez nos {LINK}Règles{/LINK}."
              },
              "ja-JP": {
                singular: "Vimeoの規定に関する詳細を確認したい場合は、{LINK}ガイドライン{/LINK}をご覧ください。"
              },
              "ko-KR": {
                singular: "Vimeo가 허용하거나 허용하지 않는 내용에 관한 자세한 정보는 {LINK}Vimeo 지침{/LINK}을 확인해주세요."
              },
              "pt-BR": {
                singular: "Para obter mais informações sobre o que é e o que não é permitido no Vimeo, confira as nossas {LINK}Regras{/LINK}."
              },
              "zh-CN": {
                singular: "详细了解 Vimeo 允许和不允许的操作，请参阅我们的{LINK}指南{/LINK}。"
              }
            }
          })
        })]
      })]
    });
  }], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  function _v16({
    label: _v0,
    description: _v1
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.Header, {
        as: "h3",
        size: "xs",
        mb: (0, _v15.rem)(5),
        children: _v0
      }), (0, _v1.jsx)(_v7.Paragraph, {
        size: "sm",
        children: _v1
      })]
    });
  }
  function _v17({
    onChange: _v0
  }) {
    let _v1 = [{
      value: "inappropriate avatar",
      label: _v9.default.InappropriateAvatar,
      description: _v9.default.InappropriateAvatarDescription
    }, {
      value: "spammy",
      label: _v9.default.Spammy,
      description: _v9.default.SpammyDescription
    }, {
      value: "bad videos",
      label: _v9.default.BadVideos,
      description: (0, _v8.translate)({
        singular: "This person has uploaded videos that violate {GUIDELINES_LINK}Vimeo's Guidelines{/GUIDELINES_LINK}. {MORE_LINK}Learn more about reporting videos.{/MORE_LINK}",
        replacements: {
          GUIDELINES_LINK: _v0 => (0, _v1.jsx)(_v3.Link, {
            href: "/help/guidelines",
            target: "_blank",
            textDecoration: "underline",
            children: _v0
          }),
          MORE_LINK: _v0 => (0, _v1.jsx)(_v3.Link, {
            href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/224969908",
            target: "_blank",
            rel: "noopener noreferrer",
            textDecoration: "underline",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Esta persona ha subido videos que infringen las {GUIDELINES_LINK}Directrices de Vimeo{/GUIDELINES_LINK}. {MORE_LINK}Obtén más información sobre la denuncia de videos.{/MORE_LINK}"
          },
          "de-DE": {
            singular: "Diese Person hat Videos hochgeladen, die gegen {GUIDELINES_LINK}Vimeos Leitlinien{/GUIDELINES_LINK} verstoßen. {MORE_LINK}Lies weiter, um mehr darüber zu erfahren, wie man Videos meldet.{/MORE_LINK}"
          },
          "fr-FR": {
            singular: "Cette personne a mis en ligne des vidéos qui enfreignent les {GUIDELINES_LINK}Règles de Vimeo{/GUIDELINES_LINK}. {MORE_LINK}En savoir plus sur le signalement de vidéos.{/MORE_LINK}"
          },
          "ja-JP": {
            singular: "{GUIDELINES_LINK}Vimeoのガイドライン{/GUIDELINES_LINK}に反する動画をアップロードしている。 {MORE_LINK}動画の通報に関する詳細はこちら。{/MORE_LINK}"
          },
          "ko-KR": {
            singular: "이 사용자는 {GUIDELINES_LINK}Vimeo 지침{/GUIDELINES_LINK}을 위반하는 동영상을 업로드했습니다. {MORE_LINK}동영상 신고하기에 대해 자세히 알아보세요.{/MORE_LINK}"
          },
          "pt-BR": {
            singular: "Esta pessoa carregou vídeos que violam as {GUIDELINES_LINK}Regras do Vimeo{/GUIDELINES_LINK}. {MORE_LINK}Saiba mais sobre como denunciar vídeos.{/MORE_LINK}"
          },
          "zh-CN": {
            singular: "此人上传的视频违反了 {GUIDELINES_LINK}Vimeo 指南{/GUIDELINES_LINK}。{MORE_LINK}详细了如何举报视频。{/MORE_LINK}"
          }
        }
      })
    }, {
      value: "creepy",
      label: _v9.default.Creepy,
      description: _v9.default.CreepyDescription
    }, {
      value: "not playing nice",
      label: _v9.default.NotPlayingNice,
      description: _v9.default.NotPlayingNiceDescription
    }, {
      value: "impersonation",
      label: _v9.default.Impersonation,
      description: _v9.default.ImpersonationDescription
    }];
    return (0, _v1.jsx)(_v13.RadioGroup, {
      onChange: _v0,
      name: "user_flag",
      children: (0, _v1.jsx)(_v14.VStack, {
        align: "stretch",
        spacing: "lg",
        mt: 5,
        children: _v1.map(_v0 => (0, _v1.jsx)(_v12.Radio, {
          value: _v0.value,
          children: (0, _v1.jsx)(_v16, {
            label: _v0.label,
            description: _v0.description
          })
        }, _v0.value))
      })
    });
  }
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  function _v23({
    enableSubmit: _v0,
    submitting: _v1,
    onSubmit: _v2,
    onCancel: _v3
  }) {
    return (0, _v1.jsx)(_v21.ModalFooter, {
      borderTop: "1px solid",
      borderColor: "stroke",
      children: (0, _v1.jsxs)(_v19.Flex, {
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v3.Link, {
          href: "/help/violations",
          target: "_blank",
          textDecoration: "underline",
          children: (0, _v1.jsx)(_v22.Text, {
            size: "sm",
            children: _v9.default.LearnReportViolations
          })
        }), (0, _v1.jsxs)(_v20.HStack, {
          spacing: (0, _v15.rem)(5),
          children: [(0, _v1.jsx)(_v18.Button, {
            variant: "destructive",
            onClick: _v2,
            isDisabled: !_v0,
            isLoading: _v1,
            children: _v9.default.ReportThePerson
          }), (0, _v1.jsx)(_v18.Button, {
            variant: "tertiary",
            onClick: _v3,
            isDisabled: _v1,
            children: _v9.default.Cancel
          })]
        })]
      })
    });
  }
  _v0.s(["default", 0, function ({
    submitting: _v0,
    onDismiss: _v1,
    onSubmit: _v2
  }) {
    let [_v3, _v4] = (0, _v10.useState)(null),
      [_v5, _v6] = (0, _v10.useState)(!1);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v6.ModalHeader, {
        children: _v9.default.FlagUserTitle
      }), (0, _v1.jsx)(_v5.ModalCloseButton, {
        "aria-label": _v9.default.Dismiss,
        onClick: _v1
      }), (0, _v1.jsxs)(_v4.ModalBody, {
        children: [(0, _v1.jsx)(_v2.Header, {
          size: "xs",
          children: _v9.default.WhyReportingUser
        }), (0, _v1.jsx)(_v17, {
          onChange: _v4
        }), (0, _v1.jsx)(_v11.Checkbox, {
          mt: "lg",
          onChange: _v0 => _v6(_v0.target.checked),
          children: (0, _v1.jsx)(_v7.Paragraph, {
            size: "md",
            children: (0, _v8.translate)({
              singular: "Check this box to block this person in addition to reporting them. {A}Learn more about blocking people on Vimeo.{/A}",
              replacements: {
                A: _v0 => (0, _v1.jsx)(_v3.Link, {
                  href: "https://vimeo.com/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12425418952977-How-to-block-someone-on-Vimeo",
                  target: "_blank",
                  textDecoration: "underline",
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "Marca esta casilla para bloquear y denunciar a esta persona. {A}Obtén más información sobre el bloqueo de personas en Vimeo.{/A}"
                },
                "de-DE": {
                  singular: "Kreuze diese Option an, um diese Person zu blockieren und sie zu melden. {A}Lies weiter darüber, wie Leute auf Vimeo blockiert werden können.{/A}"
                },
                "fr-FR": {
                  singular: "Cochez cette case pour signaler cette personne ET la bloquer. {A}En savoir plus sur la manière de bloquer les personnes sur Vimeo.{/A}"
                },
                "ja-JP": {
                  singular: "通報に伴ってこの人物をブロックしたい場合は、こちらをチェック。{A}Vimeoメンバーのブロックについてはこちら。{/A}"
                },
                "ko-KR": {
                  singular: "신고한 다음 이 사용자를 차단하려면 이 상자를 체크하세요. {A}Vimeo에서 사용자를 차단하는 방법에 대해 자세히 알아보세요.{/A}"
                },
                "pt-BR": {
                  singular: "Marque esta caixa para bloquear esta pessoa e também denunciá-la. {A}Saiba mais sobre como bloquear pessoas no Vimeo.{/A}"
                },
                "zh-CN": {
                  singular: "选中此框除了举报此人外，还可以将其屏蔽。{A}详细了解如何在 Vimeo 上屏蔽他人。{/A}"
                }
              }
            })
          })
        })]
      }), (0, _v1.jsx)(_v23, {
        enableSubmit: null != _v3,
        submitting: _v0,
        onSubmit: () => {
          _v3 && _v2(_v3, _v5);
        },
        onCancel: _v1
      })]
    });
  }], 0);
}