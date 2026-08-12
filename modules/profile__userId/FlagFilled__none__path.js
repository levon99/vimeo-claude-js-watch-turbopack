{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["FlagFilled", 0, _v0 => (0, _v1.jsx)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M19.65 3.999c-1.294.97-2.448 1.186-3.563 1.07-1.18-.121-2.351-.614-3.693-1.19l-.065-.027c-1.267-.543-2.699-1.157-4.21-1.313-1.605-.166-3.263.18-4.969 1.46a1 1 0 0 0-.4.8v15.75a1 1 0 1 0 2 0v-3.98c1.134-.732 2.164-.894 3.163-.791 1.181.122 2.351.615 3.693 1.19l.065.028c1.267.543 2.699 1.157 4.21 1.313 1.605.166 3.263-.18 4.97-1.46a1 1 0 0 0 .4-.8V4.799a1 1 0 0 0-1.6-.8Z",
      fill: "currentColor"
    })
  })], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = () => (0, _v11.translate)({
    singular: "Learn more about blocking",
    dictionary: {
      es: {
        singular: "Más información sobre el bloqueo"
      },
      "de-DE": {
        singular: "Mehr über das Blockieren erfahren"
      },
      "fr-FR": {
        singular: "En savoir plus sur le blocage"
      },
      "ja-JP": {
        singular: "ブロックについて詳しくはこちら"
      },
      "ko-KR": {
        singular: "차단에 대해 자세히 알아보기"
      },
      "pt-BR": {
        singular: "Saiba mais sobre como bloquear"
      },
      "zh-CN": {
        singular: "了解有关屏蔽的更多信息"
      }
    }
  });
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  async function _v21({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v19.measureLatency)("postUserReport", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/report`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v20.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v20.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v20.deepCamelCase)(_v1);
    });
  }
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  function _v24() {
    let {
        mutate: _v0
      } = (0, _v22.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v23.useGctlConfig)(),
      [_v5, _v6] = (0, _v18.useInternalState)();
    return [(0, _v13.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/report${(0, _v18.serializeQuery)(_v0)}`, _v21({
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
  "true" === _v17.default.env.STORYBOOK && (0, _v18.assignMswData)(_v24, {
    endpoint: "/users/:userId/report",
    method: "POST"
  });
  let _v25 = ({
    userId: _v0,
    isOpen: _v1,
    onClose: _v2,
    onSubmitReport: _v3
  }) => {
    let _v4 = function ({
        userId: _v0,
        onClose: _v1,
        onSubmitted: _v2
      }) {
        let [_v3, _v4] = (0, _v13.useState)(!1);
        return {
          ...(0, _v14.useReport)({
            onClose: _v1,
            discovery: (0, _v15.useReportReasonsDiscovery)({
              contentType: "user",
              headerTitle: (0, _v11.translate)({
                singular: "Report this person",
                dictionary: {
                  es: {
                    singular: "Reportar a esta persona"
                  },
                  "de-DE": {
                    singular: "Diese Person melden"
                  },
                  "fr-FR": {
                    singular: "Signaler cette personne"
                  },
                  "ja-JP": {
                    singular: "このユーザーを報告する"
                  },
                  "ko-KR": {
                    singular: "이 사용자를 신고"
                  },
                  "pt-BR": {
                    singular: "Denunciar essa pessoa"
                  },
                  "zh-CN": {
                    singular: "举报此人"
                  }
                }
              })
            }),
            submitAdapter: function ({
              userId: _v0,
              block: _v1
            }) {
              let [_v2, {
                callCount: _v3,
                error: _v4,
                loading: _v5
              }] = _v24();
              return {
                postReport: _v0 => {
                  _v0 && _v0 && _v2({
                    where: {
                      userId: _v0
                    },
                    variables: {
                      reason: _v0,
                      block: _v1
                    }
                  });
                },
                status: (0, _v13.useMemo)(() => 0 === _v3 ? {
                  state: "idle"
                } : _v5 ? {
                  state: "posting"
                } : {
                  state: null != _v4 ? "failed" : "succeeded"
                }, [_v3, _v4, _v5])
              };
            }({
              userId: _v0,
              block: _v3
            }),
            confirmationMode: "inline",
            onSubmitted: _v2,
            submitFailureMessage: (0, _v11.translate)({
              singular: "This person could not be reported",
              dictionary: {
                es: {
                  singular: "No se pudo denunciar a esta persona"
                },
                "de-DE": {
                  singular: "Diese Person konnte nicht gemeldet werden"
                },
                "fr-FR": {
                  singular: "Cette personne n'a pas pu être signalée"
                },
                "ja-JP": {
                  singular: "このユーザーを通報できませんでした"
                },
                "ko-KR": {
                  singular: "이 사용자를 신고할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Não foi possível denunciar esta pessoa"
                },
                "zh-CN": {
                  singular: "无法举报此人"
                }
              }
            }),
            resolveExternalUrl: _v0 => (0, _v16.withReportedContentUrl)(_v0, _v0)
          }),
          blockUser: _v3,
          setBlockUser: _v4
        };
      }({
        userId: _v0,
        onClose: _v2,
        onSubmitted: _v3
      }),
      _v5 = _v4.selected?.kind === "external" ? void 0 : (0, _v1.jsxs)(_v4.Flex, {
        align: "center",
        gap: "50",
        minW: "0",
        flexWrap: "wrap",
        children: [(0, _v1.jsx)(_v3.Checkbox, {
          isChecked: _v4.blockUser,
          onChange: _v0 => _v4.setBlockUser(_v0.target.checked),
          children: (0, _v1.jsx)(_v6.Text, {
            variant: "body-sm",
            children: (0, _v11.translate)({
              singular: "Also block this person",
              dictionary: {
                es: {
                  singular: "Bloquear también a esta persona"
                },
                "de-DE": {
                  singular: "Auch diese Person blockieren"
                },
                "fr-FR": {
                  singular: "Bloquer également cette personne"
                },
                "ja-JP": {
                  singular: "このユーザーもブロックする"
                },
                "ko-KR": {
                  singular: "이 사람도 차단"
                },
                "pt-BR": {
                  singular: "Bloquear também essa pessoa"
                },
                "zh-CN": {
                  singular: "同时屏蔽此人"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v7.Tooltip, {
          label: _v12(),
          children: (0, _v1.jsx)(_v5.IconButton, {
            as: "a",
            href: "https://vimeo.com/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12425418952977-How-to-block-someone-on-Vimeo",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": _v12(),
            variant: "tertiary",
            size: "xs",
            color: "text-secondary",
            icon: (0, _v1.jsx)(_v8.QuestionCircle, {})
          })
        })]
      });
    return (0, _v1.jsx)(_v9.ReportFlowModal, {
      report: _v4,
      isOpen: _v1,
      headerAction: (0, _v1.jsx)(_v10.ReportHelpLink, {}),
      footerAction: _v5
    });
  };
  _v0.s(["ReportUserModal", 0, _v0 => _v0.isOpen ? (0, _v1.jsx)(_v25, {
    ..._v0
  }) : null], 0);
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  _v0.s(["default", 0, function ({
    onDismiss: _v0
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v30.ModalHeader, {
        children: _v32.default.ThanksForYourReport
      }), (0, _v1.jsx)(_v29.ModalCloseButton, {
        "aria-label": _v32.default.Dismiss,
        onClick: _v0
      }), (0, _v1.jsxs)(_v28.ModalBody, {
        children: [(0, _v1.jsx)(_v26.Header, {
          size: "xs",
          children: _v32.default.WeLookingIntoIt
        }), (0, _v1.jsx)(_v31.Paragraph, {
          size: "md",
          children: (0, _v11.translate)({
            singular: "For more information about what Vimeo does and does not allow, please see our {LINK}Guidelines{/LINK}.",
            replacements: {
              LINK: _v0 => (0, _v1.jsx)(_v27.Link, {
                href: "/help/guidelines",
                target: "_blank",
                textDecoration: "underline",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Para más información sobre lo que Vimeo permite y no permite, consulta nuestras {LINK}Normas{/LINK}."
              },
              "de-DE": {
                singular: "Weitere Informationen darüber, was Vimeo erlaubt und was nicht, finden Sie in unseren {LINK}Richtlinien{/LINK}."
              },
              "fr-FR": {
                singular: "Pour plus d'informations sur ce que Vimeo autorise ou n'autorise pas, veuillez consulter nos {LINK}Règles{/LINK}."
              },
              "ja-JP": {
                singular: "Vimeoが許可するものと許可しないものの詳細については、{LINK}ガイドライン{/LINK}をご覧ください。"
              },
              "ko-KR": {
                singular: "Vimeo에서 허용하는 것과 허용하지 않는 항목에 대한 자세한 내용은 {LINK}지침{/LINK}을 참조하세요."
              },
              "pt-BR": {
                singular: "Para mais informações sobre o que o Vimeo permite ou não, consulte nossas {LINK}Diretrizes{/LINK}."
              },
              "zh-CN": {
                singular: "有关 Vimeo 允许和不允许内容的更多信息，请参阅我们的 {LINK}Guidelines{/LINK}。"
              }
            }
          })
        })]
      })]
    });
  }], 0);
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  function _v37({
    label: _v0,
    description: _v1
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v26.Header, {
        as: "h3",
        size: "xs",
        mb: (0, _v36.rem)(5),
        children: _v0
      }), (0, _v1.jsx)(_v31.Paragraph, {
        size: "sm",
        children: _v1
      })]
    });
  }
  function _v38({
    onChange: _v0
  }) {
    let _v1 = [{
      value: "inappropriate avatar",
      label: _v32.default.InappropriateAvatar,
      description: _v32.default.InappropriateAvatarDescription
    }, {
      value: "spammy",
      label: _v32.default.Spammy,
      description: _v32.default.SpammyDescription
    }, {
      value: "bad videos",
      label: _v32.default.BadVideos,
      description: (0, _v11.translate)({
        singular: "This person has uploaded videos that violate {GUIDELINES_LINK}Vimeo's Guidelines{/GUIDELINES_LINK}. {MORE_LINK}Learn more about reporting videos.{/MORE_LINK}",
        replacements: {
          GUIDELINES_LINK: _v0 => (0, _v1.jsx)(_v27.Link, {
            href: "/help/guidelines",
            target: "_blank",
            textDecoration: "underline",
            children: _v0
          }),
          MORE_LINK: _v0 => (0, _v1.jsx)(_v27.Link, {
            href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/224969908",
            target: "_blank",
            rel: "noopener noreferrer",
            textDecoration: "underline",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Esta persona ha subido vídeos que violan las {GUIDELINES_LINK}Normas de Vimeo{/GUIDELINES_LINK}. {MORE_LINK}Más información sobre cómo denunciar vídeos.{/MORE_LINK}"
          },
          "de-DE": {
            singular: "Diese Person hat Videos hochgeladen, die gegen die {GUIDELINES_LINK}Richtlinien von Vimeo{/GUIDELINES_LINK} verstoßen. {MORE_LINK}Erfahren Sie mehr darüber, wie Sie Videos melden.{/MORE_LINK}"
          },
          "fr-FR": {
            singular: "Cette personne a mis en ligne des vidéos qui violent les {GUIDELINES_LINK}Règles de Vimeo{/GUIDELINES_LINK}. {MORE_LINK}En savoir plus sur le signalement de vidéos.{/MORE_LINK}"
          },
          "ja-JP": {
            singular: "この人物は{GUIDELINES_LINK}Vimeoのガイドライン{/GUIDELINES_LINK}に違反する動画をアップロードしました。{MORE_LINK}動画の通報方法について詳しく知る{/MORE_LINK}"
          },
          "ko-KR": {
            singular: "이 사람은 {GUIDELINES_LINK}Vimeo의 지침{/GUIDELINES_LINK}을 위반하는 동영상을 업로드했습니다. {MORE_LINK}동영상 신고에 대해 자세히 알아보기{/MORE_LINK}"
          },
          "pt-BR": {
            singular: "Esta pessoa enviou vídeos que violam as {GUIDELINES_LINK}Diretrizes do Vimeo{/GUIDELINES_LINK}. {MORE_LINK}Saiba mais sobre como denunciar vídeos.{/MORE_LINK}"
          },
          "zh-CN": {
            singular: "此人上传的视频违反了{GUIDELINES_LINK}Vimeo 指南{/GUIDELINES_LINK}。{MORE_LINK}了解有关举报视频的更多信息。{/MORE_LINK}"
          }
        }
      })
    }, {
      value: "creepy",
      label: _v32.default.Creepy,
      description: _v32.default.CreepyDescription
    }, {
      value: "not playing nice",
      label: _v32.default.NotPlayingNice,
      description: _v32.default.NotPlayingNiceDescription
    }, {
      value: "impersonation",
      label: _v32.default.Impersonation,
      description: _v32.default.ImpersonationDescription
    }];
    return (0, _v1.jsx)(_v34.RadioGroup, {
      onChange: _v0,
      name: "user_flag",
      children: (0, _v1.jsx)(_v35.VStack, {
        align: "stretch",
        spacing: "lg",
        mt: 5,
        children: _v1.map(_v0 => (0, _v1.jsx)(_v33.Radio, {
          value: _v0.value,
          children: (0, _v1.jsx)(_v37, {
            label: _v0.label,
            description: _v0.description
          })
        }, _v0.value))
      })
    });
  }
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  function _v42({
    enableSubmit: _v0,
    submitting: _v1,
    onSubmit: _v2,
    onCancel: _v3
  }) {
    return (0, _v1.jsx)(_v41.ModalFooter, {
      borderTop: "1px solid",
      borderColor: "stroke",
      children: (0, _v1.jsxs)(_v4.Flex, {
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v27.Link, {
          href: "/help/violations",
          target: "_blank",
          textDecoration: "underline",
          children: (0, _v1.jsx)(_v6.Text, {
            size: "sm",
            children: _v32.default.LearnReportViolations
          })
        }), (0, _v1.jsxs)(_v40.HStack, {
          spacing: (0, _v36.rem)(5),
          children: [(0, _v1.jsx)(_v39.Button, {
            variant: "destructive",
            onClick: _v2,
            isDisabled: !_v0,
            isLoading: _v1,
            children: _v32.default.ReportThePerson
          }), (0, _v1.jsx)(_v39.Button, {
            variant: "tertiary",
            onClick: _v3,
            isDisabled: _v1,
            children: _v32.default.Cancel
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
    let [_v3, _v4] = (0, _v13.useState)(null),
      [_v5, _v6] = (0, _v13.useState)(!1);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v30.ModalHeader, {
        children: _v32.default.FlagUserTitle
      }), (0, _v1.jsx)(_v29.ModalCloseButton, {
        "aria-label": _v32.default.Dismiss,
        onClick: _v1
      }), (0, _v1.jsxs)(_v28.ModalBody, {
        children: [(0, _v1.jsx)(_v26.Header, {
          size: "xs",
          children: _v32.default.WhyReportingUser
        }), (0, _v1.jsx)(_v38, {
          onChange: _v4
        }), (0, _v1.jsx)(_v3.Checkbox, {
          mt: "lg",
          onChange: _v0 => _v6(_v0.target.checked),
          children: (0, _v1.jsx)(_v31.Paragraph, {
            size: "md",
            children: (0, _v11.translate)({
              singular: "Check this box to block this person in addition to reporting them. {A}Learn more about blocking people on Vimeo.{/A}",
              replacements: {
                A: _v0 => (0, _v1.jsx)(_v27.Link, {
                  href: "https://vimeo.com/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12425418952977-How-to-block-someone-on-Vimeo",
                  target: "_blank",
                  textDecoration: "underline",
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "Marca esta casilla para bloquear a esta persona además de denunciarla. {A}Más información sobre cómo bloquear usuarios en Vimeo.{/A}"
                },
                "de-DE": {
                  singular: "Aktivieren Sie dieses Kontrollkästchen, um diese Person zusätzlich zur Meldung zu blockieren. {A}Erfahren Sie mehr darüber, wie Sie Nutzer auf Vimeo blockieren.{/A}"
                },
                "fr-FR": {
                  singular: "Cochez cette case pour bloquer cette personne en plus de la signaler. {A}En savoir plus sur le blocage des personnes sur Vimeo.{/A}"
                },
                "ja-JP": {
                  singular: "このチェックボックスをオンにすると、この人物を通報するだけでなくブロックします。{A}Vimeoでのブロックについて詳しく知る{/A}"
                },
                "ko-KR": {
                  singular: "이 사람을 신고하는 것과 별개로 차단하려면 이 확인란을 선택하세요. {A}Vimeo에서 사람 차단에 대해 자세히 알아보기{/A}"
                },
                "pt-BR": {
                  singular: "Marque esta caixa para bloquear esta pessoa além de denunciá‑la. {A}Saiba mais sobre como bloquear pessoas no Vimeo.{/A}"
                },
                "zh-CN": {
                  singular: "勾选此框可在举报此人外同时屏蔽他们。{A}了解有关在 Vimeo 上屏蔽用户的更多信息。{/A}"
                }
              }
            })
          })
        })]
      }), (0, _v1.jsx)(_v42, {
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