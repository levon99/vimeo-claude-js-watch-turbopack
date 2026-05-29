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
  let _v10 = _v3.default.div.withConfig({
      displayName: "FlagConfirmation__ConfirmationContent",
      componentId: "sc-6d64316c-0"
    })`
  padding: ${(0, _v2.rem)(36)};
  background: ${({
      theme: _v0
    }) => _v0.content.background};
`,
    _v11 = (0, _v3.default)(_v5.Header).attrs({
      format: "soft",
      size: "4"
    }).withConfig({
      displayName: "FlagConfirmation__ThankYouText",
      componentId: "sc-6d64316c-1"
    })`
  margin-bottom: ${(0, _v2.rem)(20)};
`,
    _v12 = (0, _v3.default)(_v7.Paragraph).withConfig({
      displayName: "FlagConfirmation__GuidelinesText",
      componentId: "sc-6d64316c-2"
    })`
  margin-bottom: 0;
  display: block;
`,
    _v13 = (0, _v3.default)(_v9.default).withConfig({
      displayName: "FlagConfirmation__DismissFlagContent",
      componentId: "sc-6d64316c-3"
    })`
  position: absolute;
  right: ${(0, _v2.rem)(16)};
  top: ${(0, _v2.rem)(16)};
`;
  _v0.s(["default", 0, function ({
    onDismiss: _v0
  }) {
    return (0, _v1.jsxs)(_v10, {
      children: [(0, _v1.jsx)(_v13, {
        size: "lg",
        onClick: _v0
      }), (0, _v1.jsx)(_v11, {
        children: _v8.default.ThanksForYourReport
      }), (0, _v1.jsx)(_v5.Header, {
        format: "soft",
        size: "6",
        children: _v8.default.WeLookingIntoIt
      }), (0, _v1.jsx)(_v12, {
        format: "soft",
        size: "2",
        children: (0, _v4.translate)({
          singular: "For more information about what Vimeo does and does not allow, please see our {LINK}Guidelines{/LINK}.",
          replacements: {
            LINK: _v0 => (0, _v1.jsx)(_v6.Link, {
              variant: "minimal",
              href: "/help/guidelines",
              target: "_blank",
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
    });
  }], 0);
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  function _v18({
    label: _v0,
    description: _v1
  }) {
    return (0, _v1.jsxs)(_v19, {
      children: [(0, _v1.jsx)(_v20, {
        children: _v0
      }), (0, _v1.jsx)(_v21, {
        format: "alternative",
        children: _v1
      })]
    });
  }
  let _v19 = _v3.default.article.withConfig({
      displayName: "Label__LabelContainer",
      componentId: "sc-8ea8c73b-0"
    })`
  display: block;
`,
    _v20 = (0, _v3.default)(_v5.Header).attrs({
      size: "6",
      format: "soft"
    }).withConfig({
      displayName: "Label__OptionHeader",
      componentId: "sc-8ea8c73b-1"
    })`
  margin-bottom: ${(0, _v2.rem)(5)};
  font-weight: 700;
`,
    _v21 = (0, _v3.default)(_v7.Paragraph).attrs({
      size: "3"
    }).withConfig({
      displayName: "Label__OptionDescription",
      componentId: "sc-8ea8c73b-2"
    })`
  display: block;
  margin-bottom: 0;
`;
  function _v22({
    onChange: _v0
  }) {
    let _v1 = [{
      value: "inappropriate avatar",
      label: _v8.default.InappropriateAvatar,
      description: _v8.default.InappropriateAvatarDescription
    }, {
      value: "spammy",
      label: _v8.default.Spammy,
      description: _v8.default.SpammyDescription
    }, {
      value: "bad videos",
      label: _v8.default.BadVideos,
      description: (0, _v4.translate)({
        singular: "This person has uploaded videos that violate {GUIDELINES_LINK}Vimeo's Guidelines{/GUIDELINES_LINK}. {MORE_LINK}Learn more about reporting videos.{/MORE_LINK}",
        replacements: {
          GUIDELINES_LINK: _v0 => (0, _v1.jsx)(_v25, {
            href: "/help/guidelines",
            target: "_blank",
            children: _v0
          }),
          MORE_LINK: _v0 => (0, _v1.jsx)(_v25, {
            href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/224969908",
            target: "_blank",
            rel: "noopener noreferrer",
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
      label: _v8.default.Creepy,
      description: _v8.default.CreepyDescription
    }, {
      value: "not playing nice",
      label: _v8.default.NotPlayingNice,
      description: _v8.default.NotPlayingNiceDescription
    }, {
      value: "impersonation",
      label: _v8.default.Impersonation,
      description: _v8.default.ImpersonationDescription
    }];
    return (0, _v1.jsx)(_v23, {
      children: _v1.map(_v0 => (0, _v1.jsx)(_v24, {
        children: (0, _v1.jsx)(_v17.Radio, {
          label: (0, _v1.jsx)(_v18, {
            label: _v0.label,
            description: _v0.description
          }),
          value: _v0.value,
          name: "user_flag",
          onChange: _v0 => _v0(_v0.target.value)
        })
      }, _v0.value))
    });
  }
  let _v23 = _v3.default.ul.withConfig({
      displayName: "FlagOptions__RadioOptionsList",
      componentId: "sc-cadfa1ad-0"
    })`
  list-style: none;
  padding: 0;
`,
    _v24 = _v3.default.li.withConfig({
      displayName: "FlagOptions__OptionContainer",
      componentId: "sc-cadfa1ad-1"
    })`
  margin: ${(0, _v2.rem)(8)} ${(0, _v2.rem)(15)} 0 0;
  &:first-child {
    margin-top: ${(0, _v2.rem)(20)};
  }
`,
    _v25 = _v3.default.a.withConfig({
      displayName: "FlagOptions__OptionAnchor",
      componentId: "sc-cadfa1ad-2"
    })`
  color: inherit;
  border-bottom: ${(0, _v2.rem)(1)} solid;
  text-decoration: none;
`;
  var _v26 = _v0.i(0);
  function _v27({
    enableSubmit: _v0,
    submitting: _v1,
    onSubmit: _v2,
    onCancel: _v3
  }) {
    return (0, _v1.jsxs)(_v28, {
      children: [(0, _v1.jsx)(_v30, {
        href: "/help/violations",
        target: "_blank",
        children: (0, _v1.jsx)(_v29, {
          element: "span",
          children: _v8.default.LearnReportViolations
        })
      }), (0, _v1.jsxs)(_v31, {
        children: [(0, _v1.jsx)(_v26.Button, {
          status: "negative",
          onClick: _v2,
          disabled: !_v0,
          loading: _v1,
          children: _v8.default.ReportThePerson
        }), (0, _v1.jsx)(_v26.Button, {
          format: "alternative",
          onClick: _v3,
          disabled: _v1,
          children: _v8.default.Cancel
        })]
      })]
    });
  }
  let _v28 = _v3.default.footer.withConfig({
      displayName: "Footer__Container",
      componentId: "sc-b7d96355-0"
    })`
  margin: ${(0, _v2.rem)(20)} 0;
`,
    _v29 = (0, _v3.default)(_v7.Paragraph).attrs({
      size: "3",
      element: "span"
    }).withConfig({
      displayName: "Footer__LinkText",
      componentId: "sc-b7d96355-1"
    })`
  display: inline-block;
`,
    _v30 = _v3.default.a.withConfig({
      displayName: "Footer__Link",
      componentId: "sc-b7d96355-2"
    })`
  color: inherit;
  border-bottom: ${(0, _v2.rem)(1)} solid;
  text-decoration: none;
`,
    _v31 = _v3.default.article.withConfig({
      displayName: "Footer__ButtonContainer",
      componentId: "sc-b7d96355-3"
    })`
  display: flex;
  justify-content: flex-end;

  button:first-child {
    margin-right: ${(0, _v2.rem)(5)};
  }

  @media (min-width: ${(0, _v2.rem)(600)}) {
    float: right;
    display: inline-flex;
  }
`,
    _v32 = (0, _v3.default)(_v5.Header).attrs({
      size: "4",
      format: "soft"
    }).withConfig({
      displayName: "FlagUserContent__Title",
      componentId: "sc-517018f-0"
    })`
  background-color: ${_v15.bokehTheme.colors.gray["100"]};
  padding: ${(0, _v2.rem)(25)} ${(0, _v2.rem)(50)};
  position: relative;
  font-weight: 700;
  border-bottom: ${(0, _v2.rem)(1)} solid ${_v15.bokehTheme.colors.gray["200"]};
  margin-bottom: 0;
`,
    _v33 = (0, _v3.default)(_v9.default).withConfig({
      displayName: "FlagUserContent__DismissFlagContent",
      componentId: "sc-517018f-1"
    })`
  position: absolute;
  right: ${(0, _v2.rem)(20)};
  top: 50%;
  transform: translateY(-50%);
`,
    _v34 = _v3.default.section.withConfig({
      displayName: "FlagUserContent__ContentContainer",
      componentId: "sc-517018f-2"
    })`
  padding: ${(0, _v2.rem)(25)};
  background: ${({
      theme: _v0
    }) => _v0.content.background};
`,
    _v35 = (0, _v3.default)(_v5.Header).attrs({
      size: "6",
      format: "soft"
    }).withConfig({
      displayName: "FlagUserContent__ContentHeader",
      componentId: "sc-517018f-3"
    })`
  margin-bottom: 0;
  font-weight: 700;
`,
    _v36 = _v3.default.a.withConfig({
      displayName: "FlagUserContent__Link",
      componentId: "sc-517018f-4"
    })`
  color: inherit;
  border-bottom: ${(0, _v2.rem)(1)} solid;
  text-decoration: none;
`,
    _v37 = _v3.default.article.withConfig({
      displayName: "FlagUserContent__BlockContainer",
      componentId: "sc-517018f-5"
    })`
  margin-bottom: ${(0, _v2.rem)(20)};
`,
    _v38 = (0, _v3.default)(_v7.Paragraph).attrs({
      size: "2",
      format: "soft"
    }).withConfig({
      displayName: "FlagUserContent__BlockLabel",
      componentId: "sc-517018f-6"
    })`
  display: block;
  margin-bottom: 0;
`,
    _v39 = _v3.default.article.withConfig({
      displayName: "FlagUserContent__Wrapper",
      componentId: "sc-517018f-7"
    })`
  border-bottom: ${(0, _v2.rem)(1)} solid ${_v15.bokehTheme.colors.gray["200"]};
`;
  _v0.s(["default", 0, function ({
    submitting: _v0,
    onDismiss: _v1,
    onSubmit: _v2
  }) {
    let [_v3, _v4] = (0, _v14.useState)(null),
      [_v5, _v6] = (0, _v14.useState)(!1);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v32, {
        children: [_v8.default.FlagUserTitle, (0, _v1.jsx)(_v33, {
          size: "lg",
          onClick: _v1
        })]
      }), (0, _v1.jsxs)(_v34, {
        children: [(0, _v1.jsxs)(_v39, {
          children: [(0, _v1.jsx)(_v35, {
            children: _v8.default.WhyReportingUser
          }), (0, _v1.jsx)(_v22, {
            onChange: _v0 => _v4(_v0)
          }), (0, _v1.jsx)(_v37, {
            children: (0, _v1.jsx)(_v16.Checkbox, {
              label: (0, _v1.jsx)(_v38, {
                children: (0, _v4.translate)({
                  singular: "Check this box to block this person in addition to reporting them. {A}Learn more about blocking people on Vimeo.{/A}",
                  replacements: {
                    A: _v0 => (0, _v1.jsx)(_v36, {
                      href: "https://vimeo.com/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12425418952977-How-to-block-someone-on-Vimeo",
                      target: "_blank",
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
              }),
              onChange: _v0 => _v6(_v0.target.checked)
            })
          })]
        }), (0, _v1.jsx)(_v27, {
          enableSubmit: null != _v3,
          submitting: _v0,
          onSubmit: () => {
            _v3 && _v2(_v3, _v5);
          },
          onCancel: _v1
        })]
      })]
    });
  }], 0);
}