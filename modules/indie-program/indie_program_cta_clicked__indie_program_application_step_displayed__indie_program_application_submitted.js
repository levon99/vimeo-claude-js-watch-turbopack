{
  "use strict";

  let _v1, _v2, _v3, _v4, _v5;
  var _v6,
    _v7,
    _v8,
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = () => "u" > typeof crypto && "function" == typeof crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    _v19 = _v0 => {
      let _v1 = (0, _v17.usePico)(),
        _v2 = (0, _v15.useCallback)((_v0, _v1) => {
          null !== _v1 && _v1.track(_v0, _v1);
        }, [_v1]),
        _v3 = (0, _v15.useCallback)(_v0 => {
          _v2("indie_program_cta_clicked", {
            indie_program_flow_id: _v0,
            indie_program_cta_location: _v0.location,
            indie_program_auth_status: _v0.authStatus
          });
        }, [_v0, _v2]),
        _v4 = (0, _v15.useCallback)(_v0 => {
          _v2("indie_program_application_step_displayed", {
            indie_program_flow_id: _v0,
            indie_program_step: _v0.step
          });
        }, [_v0, _v2]),
        _v5 = (0, _v15.useCallback)(_v0 => {
          _v2("indie_program_application_submitted", {
            indie_program_flow_id: _v0,
            indie_program_links: _v0.links,
            indie_program_bio: _v0.bio,
            indie_program_declarations: _v0.declarations
          });
        }, [_v0, _v2]),
        _v6 = (0, _v15.useCallback)(_v0 => {
          _v2("indie_program_eligibility_result", {
            indie_program_flow_id: _v0,
            indie_program_eligibility_outcome: _v0.outcome,
            indie_program_eligibility_mode: "stub",
            indie_program_error_category: _v0.errorCategory
          });
        }, [_v0, _v2]),
        _v7 = (0, _v15.useCallback)(_v0 => {
          _v2("indie_program_state_displayed", {
            indie_program_flow_id: _v0,
            indie_program_surface: _v0.surface,
            indie_program_state: _v0.state
          });
        }, [_v0, _v2]),
        _v8 = (0, _v15.useCallback)(_v0 => {
          _v2("indie_program_action_clicked", {
            indie_program_flow_id: _v0,
            indie_program_surface: _v0.surface,
            indie_program_action: _v0.action
          });
        }, [_v0, _v2]),
        _v9 = (0, _v15.useCallback)(_v0 => {
          _v2("indie_program_plan_change_submitted", {
            indie_program_flow_id: _v0,
            indie_program_target_billing_plan_id: _v0.targetBillingPlanId
          });
        }, [_v0, _v2]),
        _v10 = (0, _v15.useCallback)(_v0 => {
          _v2("indie_program_plan_change_result", {
            indie_program_flow_id: _v0,
            indie_program_result: _v0.result,
            indie_program_error_category: _v0.errorCategory
          });
        }, [_v0, _v2]);
      return {
        trackActionClicked: _v8,
        trackApplicationSubmitted: _v5,
        trackCtaClicked: _v3,
        trackEligibilityResult: _v6,
        trackFlowClosed: (0, _v15.useCallback)(_v0 => {
          _v2("indie_program_flow_closed", {
            indie_program_flow_id: _v0,
            indie_program_surface: _v0.surface,
            indie_program_close_reason: _v0.reason
          });
        }, [_v0, _v2]),
        trackPlanChangeResult: _v10,
        trackPlanChangeSubmitted: _v9,
        trackStateDisplayed: _v7,
        trackStepDisplayed: _v4
      };
    };
  var _v20 = _v0.i(0),
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
    _v33 = _v0.i(0);
  let _v34 = ({
    flowId: _v0,
    isOpen: _v1,
    onClose: _v2
  }) => {
    let {
      trackActionClicked: _v3,
      trackFlowClosed: _v4,
      trackStateDisplayed: _v5
    } = _v19(_v0);
    return (0, _v32.usePicoEffect)(() => {
      if (!_v1) return !1;
      _v5({
        surface: "sold_out",
        state: "sold_out"
      });
    }, [_v1]), (0, _v10.jsxs)(_v23.Modal, {
      closeOnOverlayClick: !1,
      isCentered: !0,
      isOpen: _v1,
      onClose: () => {
        _v4({
          surface: "sold_out",
          reason: "dismissed"
        }), _v2();
      },
      scrollBehavior: "inside",
      size: "lg",
      children: [(0, _v10.jsx)(_v29.ModalOverlay, {
        backdropFilter: {
          base: "none",
          md: "blur(5px)"
        },
        bg: {
          base: "rgba(14, 18, 22, 0.8)",
          md: "rgba(0, 0, 0, 0.8)"
        }
      }), (0, _v10.jsx)(_v22.LightMode, {
        children: (0, _v10.jsxs)(_v26.ModalContent, {
          containerProps: {
            p: {
              base: "16px",
              md: "sm"
            }
          },
          "data-theme": "light",
          bg: "white",
          borderRadius: "20px",
          boxShadow: "0 4px 16px rgba(11, 26, 41, 0.12)",
          h: "auto",
          maxH: {
            base: "calc(100svh - 32px)",
            md: "calc(100svh - 48px)"
          },
          maxW: {
            base: "361px",
            md: "480px"
          },
          m: "0",
          overflow: "hidden",
          w: "100%",
          children: [(0, _v10.jsx)(_v25.ModalCloseButton, {
            borderRadius: "12px",
            boxSize: "40px",
            right: "12px",
            top: "12px"
          }), (0, _v10.jsx)(_v28.ModalHeader, {
            pb: "0",
            pt: "24px",
            px: "24px",
            children: (0, _v10.jsx)(_v30.Text, {
              as: "h2",
              color: "text-primary",
              fontFamily: "heading",
              fontSize: "20px",
              letterSpacing: "-0.8px",
              lineHeight: "28px",
              pr: "40px",
              children: (0, _v31.translate)({
                singular: "All indie spots have been claimed",
                dictionary: {
                  es: {
                    singular: "Todas las plazas indie han sido reclamadas"
                  },
                  "de-DE": {
                    singular: "Alle Indie-Plätze wurden vergeben"
                  },
                  "fr-FR": {
                    singular: "Toutes les places Indie ont été prises"
                  },
                  "ja-JP": {
                    singular: "インディ枠はすべて埋まりました"
                  },
                  "ko-KR": {
                    singular: "모든 indie 자리(spot)가 마감되었습니다"
                  },
                  "pt-BR": {
                    singular: "Todas as vagas indie foram preenchidas"
                  },
                  "zh-CN": {
                    singular: "所有独立名额已被认领"
                  }
                }
              })
            })
          }), (0, _v10.jsx)(_v24.ModalBody, {
            px: "24px",
            pb: "24px",
            pt: "20px",
            children: (0, _v10.jsx)(_v30.Text, {
              color: "text-secondary",
              fontSize: "14px",
              letterSpacing: "-0.42px",
              lineHeight: "21px",
              children: (0, _v31.translate)({
                singular: "This round of the Indie Program is full. Thank you for being part of this community.",
                dictionary: {
                  es: {
                    singular: "Esta convocatoria del Indie Program está completa. Gracias por ser parte de esta comunidad."
                  },
                  "de-DE": {
                    singular: "Diese Runde des Indie‑Programms ist voll. Danke, dass Sie Teil dieser Community sind."
                  },
                  "fr-FR": {
                    singular: "Cette session de l'Indie Program est complète. Merci de faire partie de cette communauté."
                  },
                  "ja-JP": {
                    singular: "今回のIndie Programの枠は満了しました。コミュニティの一員でいてくれてありがとうございます。"
                  },
                  "ko-KR": {
                    singular: "이번 Indie Program 라운드는 마감되었습니다. 커뮤니티의 일원이 되어주셔서 감사합니다."
                  },
                  "pt-BR": {
                    singular: "Esta edição do Indie Program está completa. Obrigado por fazer parte desta comunidade."
                  },
                  "zh-CN": {
                    singular: "本轮 Indie Program 名额已满。感谢您成为该社区的一员。"
                  }
                }
              })
            })
          }), (0, _v10.jsx)(_v27.ModalFooter, {
            alignItems: "stretch",
            flexDirection: "column",
            px: "24px",
            pb: "24px",
            pt: "0",
            children: (0, _v10.jsx)(_v21.Button, {
              onClick: () => {
                _v3({
                  surface: "sold_out",
                  action: "explore_plans"
                }), window.location.assign(_v33.INDIE_SOLD_OUT_URL);
              },
              children: (0, _v31.translate)({
                singular: "Explore plans",
                dictionary: {
                  es: {
                    singular: "Explorar planes"
                  },
                  "de-DE": {
                    singular: "Pläne erkunden"
                  },
                  "fr-FR": {
                    singular: "Explorer les offres"
                  },
                  "ja-JP": {
                    singular: "プランを確認する"
                  },
                  "ko-KR": {
                    singular: "요금제 살펴보기"
                  },
                  "pt-BR": {
                    singular: "Explore os planos"
                  },
                  "zh-CN": {
                    singular: "查看方案"
                  }
                }
              })
            })
          })]
        })
      })]
    });
  };
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = ({
      onLeave: _v0,
      onStay: _v1
    }) => (0, _v10.jsxs)(_v23.Modal, {
      closeOnOverlayClick: !1,
      isCentered: !0,
      isOpen: !0,
      onClose: _v1,
      scrollBehavior: "inside",
      size: "sm",
      children: [(0, _v10.jsx)(_v29.ModalOverlay, {
        backdropFilter: "blur(2px)",
        bg: "rgba(14, 18, 22, 0.55)"
      }), (0, _v10.jsxs)(_v26.ModalContent, {
        bg: "white",
        borderRadius: "20px",
        boxShadow: "0 4px 32px rgba(11, 26, 41, 0.18)",
        maxW: "440px",
        m: "0",
        p: {
          base: "32px 20px 20px",
          md: "32px 24px 24px"
        },
        position: "relative",
        w: "100%",
        children: [(0, _v10.jsx)(_v25.ModalCloseButton, {
          right: "15px",
          size: "sm",
          top: "15px"
        }), (0, _v10.jsx)(_v30.Text, {
          as: "h2",
          fontFamily: "heading",
          fontSize: "24px",
          letterSpacing: "-0.8px",
          lineHeight: "30px",
          mr: "22px",
          children: (0, _v31.translate)({
            singular: "Leave your application?",
            dictionary: {
              es: {
                singular: "¿Abandonar tu solicitud?"
              },
              "de-DE": {
                singular: "Möchten Sie Ihre Bewerbung verlassen?"
              },
              "fr-FR": {
                singular: "Quitter votre candidature?"
              },
              "ja-JP": {
                singular: "申請を中止してよろしいですか？"
              },
              "ko-KR": {
                singular: "신청서를 나가시겠습니까?"
              },
              "pt-BR": {
                singular: "Deseja sair da sua inscrição?"
              },
              "zh-CN": {
                singular: "要离开申请吗？"
              }
            }
          })
        }), (0, _v10.jsxs)(_v30.Text, {
          color: "text-secondary",
          fontSize: "14px",
          lineHeight: "21px",
          mt: "12px",
          children: [(0, _v31.translate)({
            singular: "Your progress will be lost.",
            dictionary: {
              es: {
                singular: "Tu progreso se perderá."
              },
              "de-DE": {
                singular: "Ihr Fortschritt geht verloren."
              },
              "fr-FR": {
                singular: "Votre progression sera perdue."
              },
              "ja-JP": {
                singular: "進行状況は失われます。"
              },
              "ko-KR": {
                singular: "진행 중인 내용이 사라집니다."
              },
              "pt-BR": {
                singular: "Seu progresso será perdido."
              },
              "zh-CN": {
                singular: "您的进度将丢失。"
              }
            }
          }), (0, _v10.jsx)("br", {}), (0, _v31.translate)({
            singular: "You can always start again when you’re ready.",
            dictionary: {
              es: {
                singular: "Siempre puedes empezar de nuevo cuando estés listo."
              },
              "de-DE": {
                singular: "Sie können jederzeit neu beginnen, wenn Sie bereit sind."
              },
              "fr-FR": {
                singular: "Vous pouvez toujours recommencer lorsque vous êtes prêt."
              },
              "ja-JP": {
                singular: "準備ができたらいつでも再開できます。"
              },
              "ko-KR": {
                singular: "준비가 되면 언제든 다시 시작할 수 있습니다."
              },
              "pt-BR": {
                singular: "Você sempre pode começar de novo quando estiver pronto."
              },
              "zh-CN": {
                singular: "准备好时您可以随时重新开始。"
              }
            }
          })]
        }), (0, _v10.jsxs)(_v38.Flex, {
          direction: {
            base: "column-reverse",
            md: "row"
          },
          gap: "10px",
          mt: "28px",
          children: [(0, _v10.jsx)(_v21.Button, {
            borderRadius: "12px",
            flex: {
              base: "0 0 auto",
              md: "1"
            },
            fontSize: "14px",
            onClick: _v0,
            size: "lg",
            variant: "secondary",
            w: {
              base: "100%",
              md: "auto"
            },
            children: (0, _v31.translate)({
              singular: "Leave application",
              dictionary: {
                es: {
                  singular: "Abandonar solicitud"
                },
                "de-DE": {
                  singular: "Bewerbung verlassen"
                },
                "fr-FR": {
                  singular: "Quitter la candidature"
                },
                "ja-JP": {
                  singular: "申請を中止する"
                },
                "ko-KR": {
                  singular: "신청서 나가기"
                },
                "pt-BR": {
                  singular: "Sair da inscrição"
                },
                "zh-CN": {
                  singular: "离开申请"
                }
              }
            })
          }), (0, _v10.jsx)(_v21.Button, {
            borderRadius: "12px",
            flex: {
              base: "0 0 auto",
              md: "1"
            },
            fontSize: "14px",
            onClick: _v1,
            size: "lg",
            variant: "primary",
            w: {
              base: "100%",
              md: "auto"
            },
            children: (0, _v31.translate)({
              singular: "Keep applying",
              dictionary: {
                es: {
                  singular: "Seguir aplicando"
                },
                "de-DE": {
                  singular: "Bewerbung fortsetzen"
                },
                "fr-FR": {
                  singular: "Poursuivre la candidature"
                },
                "ja-JP": {
                  singular: "申請を続ける"
                },
                "ko-KR": {
                  singular: "계속 신청하기"
                },
                "pt-BR": {
                  singular: "Continuar a se candidatar"
                },
                "zh-CN": {
                  singular: "继续申请"
                }
              }
            })
          })]
        })]
      })]
    }),
    _v42 = ["Portfolio / website", "Instagram", "Vimeo profile", "LinkedIn", "Letterboxd", "IMDb", "YouTube", "Other"],
    _v43 = {
      links: [{
        id: 1,
        platform: "Portfolio / website",
        url: ""
      }],
      bio: "",
      declarations: [!1, !1, !1]
    },
    _v44 = _v0 => {
      try {
        let _v0 = new URL(_v0.trim());
        return ["https:", "http:"].includes(_v0.protocol) && /\.[a-z]{2,}$/i.test(_v0.hostname) && !/\s/.test(_v0.trim());
      } catch {
        return !1;
      }
    };
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = {
      pending: (0, _v31.translate)({
        singular: "Analyzing your request",
        dictionary: {
          es: {
            singular: "Analizando tu solicitud"
          },
          "de-DE": {
            singular: "Wir prüfen Ihre Anfrage"
          },
          "fr-FR": {
            singular: "Analyse de votre demande"
          },
          "ja-JP": {
            singular: "申請内容を確認しています"
          },
          "ko-KR": {
            singular: "요청을 분석 중입니다"
          },
          "pt-BR": {
            singular: "Analisando sua solicitação"
          },
          "zh-CN": {
            singular: "正在分析您的请求"
          }
        }
      }),
      approved: (0, _v31.translate)({
        singular: "You're approved for the Indie Program",
        dictionary: {
          es: {
            singular: "Has sido aprobado para el Indie Program"
          },
          "de-DE": {
            singular: "Sie wurden für das Indie‑Programm zugelassen."
          },
          "fr-FR": {
            singular: "Vous êtes approuvé pour l'Indie Program"
          },
          "ja-JP": {
            singular: "あなたはIndie Programに承認されました"
          },
          "ko-KR": {
            singular: "Indie Program 승인이 완료되었습니다"
          },
          "pt-BR": {
            singular: "Você foi aprovado para o Indie Program"
          },
          "zh-CN": {
            singular: "您已获得 Indie Program 批准"
          }
        }
      }),
      claiming: (0, _v31.translate)({
        singular: "Claiming your discount",
        dictionary: {
          es: {
            singular: "Aplicando tu descuento"
          },
          "de-DE": {
            singular: "Rabatt wird angewendet"
          },
          "fr-FR": {
            singular: "Application de votre remise"
          },
          "ja-JP": {
            singular: "割引を適用しています"
          },
          "ko-KR": {
            singular: "할인을 적용하는 중입니다"
          },
          "pt-BR": {
            singular: "Aplicando seu desconto"
          },
          "zh-CN": {
            singular: "正在应用您的折扣"
          }
        }
      }),
      ineligible: (0, _v31.translate)({
        singular: "You are not eligible for Indie Program",
        dictionary: {
          es: {
            singular: "No eres elegible para el Indie Program"
          },
          "de-DE": {
            singular: "Sie sind nicht für das Indie‑Programm berechtigt"
          },
          "fr-FR": {
            singular: "Vous n'êtes pas éligible à l'Indie Program"
          },
          "ja-JP": {
            singular: "あなたはIndie Programの対象ではありません"
          },
          "ko-KR": {
            singular: "귀하는 Indie Program 자격이 없습니다"
          },
          "pt-BR": {
            singular: "Você não é elegível para o Indie Program"
          },
          "zh-CN": {
            singular: "您不符合 Indie Program 的资格"
          }
        }
      }),
      error: (0, _v31.translate)({
        singular: "Something went wrong",
        dictionary: {
          es: {
            singular: "Se ha producido un error"
          },
          "de-DE": {
            singular: "Hier ist etwas schief gelaufen"
          },
          "fr-FR": {
            singular: "Quelque chose a planté"
          },
          "ja-JP": {
            singular: "エラーが発生しました"
          },
          "ko-KR": {
            singular: "문제가 발생했습니다"
          },
          "pt-BR": {
            singular: "Alguma coisa deu errado"
          },
          "zh-CN": {
            singular: "出错了"
          }
        }
      }),
      unsupported: (0, _v31.translate)("We couldn't apply your discount")
    },
    _v51 = {
      pending: (0, _v31.translate)({
        singular: "Our system is reviewing the details you provided. This usually takes less than a minute, please don't close this window.",
        dictionary: {
          es: {
            singular: "Nuestro sistema está revisando los detalles que proporcionaste. Esto suele tomar menos de un minuto, por favor no cierres esta ventana."
          },
          "de-DE": {
            singular: "Unser System überprüft die von Ihnen angegebenen Daten. Dies dauert in der Regel weniger als eine Minute. Bitte schließen Sie dieses Fenster nicht."
          },
          "fr-FR": {
            singular: "Notre système vérifie les informations que vous avez fournies. Cela prend généralement moins d'une minute, merci de ne pas fermer cette fenêtre."
          },
          "ja-JP": {
            singular: "当システムはご提供いただいた情報を確認しています。通常は1分未満で完了しますので、このウィンドウを閉じないでください。"
          },
          "ko-KR": {
            singular: "제공하신 정보를 시스템에서 검토 중입니다. 보통 1분 미만이 소요되니 이 창을 닫지 마세요."
          },
          "pt-BR": {
            singular: "Nosso sistema está revisando os detalhes que você forneceu. Isso geralmente leva menos de um minuto, por favor não feche esta janela."
          },
          "zh-CN": {
            singular: "我们的系统正在审核您提供的详情。通常少于一分钟，请不要关闭此窗口。"
          }
        }
      }),
      approved: (0, _v31.translate)({
        singular: "Great news—our automated review found that you’re eligible for the Indie Program. If a follow-up manual review finds that the eligibility criteria aren’t met, your approval may be updated or withdrawn.",
        dictionary: {
          es: {
            singular: "Buenas noticias: nuestra revisión automatizada determinó que eres elegible para el Indie Program. Si una revisión manual posterior concluye que no se cumplen los criterios de elegibilidad, tu aprobación podría modificarse o retirarse."
          },
          "de-DE": {
            singular: "Großartige Neuigkeiten — unsere automatisierte Überprüfung hat ergeben, dass Sie für das Indie‑Programm berechtigt sind. Falls eine anschließende manuelle Überprüfung ergibt, dass die Zulassungskriterien nicht erfüllt sind, kann Ihre Genehmigung angepasst oder zurückgenommen werden."
          },
          "fr-FR": {
            singular: "Bonne nouvelle — notre examen automatisé a déterminé que vous êtes éligible à l'Indie Program. Si un examen manuel ultérieur constate que les critères d'éligibilité ne sont pas remplis, votre approbation peut être modifiée ou retirée."
          },
          "ja-JP": {
            singular: "良いお知らせです—自動審査の結果、あなたはIndie Programの対象と判断されました。追って行われる手動審査で適格基準を満たしていないと判断された場合、承認が変更または取り消されることがあります。"
          },
          "ko-KR": {
            singular: "좋은 소식입니다—자동 심사 결과 Indie Program 자격이 있다고 판단되었습니다. 이후 수동 심사에서 자격 요건을 충족하지 않는 것으로 판정되면 승인 상태가 변경되거나 철회될 수 있습니다."
          },
          "pt-BR": {
            singular: "Boas notícias — nossa análise automatizada constatou que você é elegível para o Indie Program. Se uma revisão manual complementar concluir que os critérios de elegibilidade não foram atendidos, sua aprovação pode ser atualizada ou revogada."
          },
          "zh-CN": {
            singular: "好消息——我们的自动审核发现您符合 Indie Program 的资格。如果后续人工复审发现不符合资格，您的批准可能会被更改或撤销。"
          }
        }
      }),
      ineligible: (0, _v10.jsxs)(_v10.Fragment, {
        children: [(0, _v31.translate)({
          singular: "We have reviewed your request and your account is not eligible for the Indie Program.",
          dictionary: {
            es: {
              singular: "Hemos revisado tu solicitud y tu cuenta no es elegible para el Indie Program."
            },
            "de-DE": {
              singular: "Wir haben Ihre Anfrage geprüft; Ihr Konto ist nicht für das Indie‑Programm berechtigt."
            },
            "fr-FR": {
              singular: "Nous avons examiné votre demande et votre compte n'est pas éligible à l'Indie Program."
            },
            "ja-JP": {
              singular: "申請内容を確認しましたが、あなたのアカウントはIndie Programの対象ではありません。"
            },
            "ko-KR": {
              singular: "요청을 검토한 결과 귀하의 계정은 Indie Program 자격이 없습니다."
            },
            "pt-BR": {
              singular: "Revisamos sua solicitação e sua conta não é elegível para o Indie Program."
            },
            "zh-CN": {
              singular: "我们已审核您的请求，您的账户不符合 Indie Program 的资格。"
            }
          }
        }), (0, _v10.jsx)("br", {}), (0, _v31.translate)({
          singular: "If you think you should be eligible for the Indie Program and you want to request a deeper analysis, contact customer support.",
          dictionary: {
            es: {
              singular: "Si crees que deberías ser elegible para el Indie Program y quieres solicitar un análisis más profundo, contacta al soporte al cliente."
            },
            "de-DE": {
              singular: "Wenn Sie glauben, dass Sie für das Indie‑Programm berechtigt sein sollten und eine genauere Prüfung wünschen, kontaktieren Sie den Kundensupport."
            },
            "fr-FR": {
              singular: "Si vous pensez devoir être éligible à l'Indie Program et souhaitez demander une analyse plus approfondie, contactez le support client."
            },
            "ja-JP": {
              singular: "自分がIndie Programの対象であるべきだと思い、より詳細な審査を希望する場合は、カスタマーサポートにお問い合わせください。"
            },
            "ko-KR": {
              singular: "본인이 Indie Program 자격이 있어야 한다고 판단되며 추가 심사를 요청하려면 고객 지원에 문의하세요."
            },
            "pt-BR": {
              singular: "Se você acha que deveria ser elegível para o Indie Program e deseja solicitar uma análise mais aprofundada, entre em contato com o suporte ao cliente."
            },
            "zh-CN": {
              singular: "如果您认为自己应符合 Indie Program 的资格并希望申请更深入的审核，请联系客服。"
            }
          }
        })]
      }),
      claiming: (0, _v31.translate)({
        singular: "Hang tight while we take you to checkout.",
        dictionary: {
          es: {
            singular: "Un momento, te llevamos al pago."
          },
          "de-DE": {
            singular: "Einen Moment, wir bringen Sie zur Kasse."
          },
          "fr-FR": {
            singular: "Un instant, nous vous emmenons vers le paiement."
          },
          "ja-JP": {
            singular: "そのままお待ちください。お支払いページに移動します。"
          },
          "ko-KR": {
            singular: "잠시만 기다려 주세요. 결제 페이지로 이동합니다."
          },
          "pt-BR": {
            singular: "Só um instante, estamos levando você ao pagamento."
          },
          "zh-CN": {
            singular: "请稍候，我们正在带您前往付款页面。"
          }
        }
      }),
      error: (0, _v31.translate)("We couldn't check your eligibility. Try again."),
      unsupported: (0, _v31.translate)({
        singular: "We couldn't apply the Indie Program discount to your current plan. Contact support.",
        dictionary: {
          es: {
            singular: "No pudimos aplicar el descuento del Programa Indie a tu plan actual. Contacta con el equipo de soporte."
          },
          "de-DE": {
            singular: "Wir konnten den Indie Program-Rabatt auf Ihren aktuellen Plan nicht anwenden. Kontaktieren Sie den Support."
          },
          "fr-FR": {
            singular: "Nous n'avons pas pu appliquer la remise du programme Indie à votre forfait actuel. Contactez l'assistance."
          },
          "ja-JP": {
            singular: "現在のプランにIndie Programの割引を適用できませんでした。サポートにお問い合わせください。"
          },
          "ko-KR": {
            singular: "현재 플랜에 Indie Program 할인을 적용할 수 없습니다. 지원팀에 문의하세요."
          },
          "pt-BR": {
            singular: "Não foi possível aplicar o desconto do Indie Program ao seu plano atual. Entre em contato com o suporte."
          },
          "zh-CN": {
            singular: "我们无法将 Indie Program 的折扣应用到您当前的计划. 请联系支持."
          }
        }
      })
    },
    _v52 = {
      approved: (0, _v10.jsx)(_v46.CircleCheckFilled, {
        boxSize: "53px",
        color: "status-positive-primary"
      }),
      ineligible: (0, _v10.jsx)(_v48.CloseXCircleFilled, {
        boxSize: "53px",
        color: "status-destructive-primary"
      }),
      error: (0, _v10.jsx)(_v47.CircleExclamationFilled, {
        boxSize: "53px",
        color: "status-destructive-primary"
      }),
      unsupported: (0, _v10.jsx)(_v49.CreditCard, {
        boxSize: "53px",
        color: "status-destructive-primary"
      })
    },
    _v53 = ({
      isClaimDisabled: _v0,
      onAction: _v1,
      onClaim: _v2,
      onClose: _v3,
      onRetry: _v4,
      result: _v5,
      state: _v6
    }) => {
      switch (_v6) {
        case "approved":
          return (0, _v10.jsx)(_v21.Button, {
            isDisabled: _v0 || null === _v5,
            onClick: () => {
              null !== _v5 && (_v1("claim_offer"), _v2(_v5));
            },
            size: "lg",
            children: (0, _v31.translate)({
              singular: "Claim offer",
              dictionary: {
                es: {
                  singular: "Reclamar oferta"
                },
                "de-DE": {
                  singular: "Angebot beanspruchen"
                },
                "fr-FR": {
                  singular: "Réclamer l'offre"
                },
                "ja-JP": {
                  singular: "オファーを受け取る"
                },
                "ko-KR": {
                  singular: "오퍼 받기"
                },
                "pt-BR": {
                  singular: "Resgatar oferta"
                },
                "zh-CN": {
                  singular: "领取优惠"
                }
              }
            })
          });
        case "ineligible":
          return (0, _v10.jsxs)(_v10.Fragment, {
            children: [(0, _v10.jsx)(_v21.Button, {
              onClick: () => {
                _v1("explore_plans"), window.location.assign(_v33.INDIE_INELIGIBLE_URL);
              },
              size: "lg",
              children: (0, _v31.translate)({
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
            }), (0, _v10.jsx)(_v21.Button, {
              as: "a",
              href: _v33.SUPPORT_URL,
              onClick: () => _v1("contact_support"),
              rel: "noreferrer",
              size: "sm",
              target: "_blank",
              variant: "tertiary",
              children: (0, _v31.translate)({
                singular: "Contact Support",
                dictionary: {
                  es: {
                    singular: "Contactar con soporte"
                  },
                  "de-DE": {
                    singular: "Support kontaktieren"
                  },
                  "fr-FR": {
                    singular: "Contacter l'assistance"
                  },
                  "ja-JP": {
                    singular: "サポートにお問い合わせ"
                  },
                  "ko-KR": {
                    singular: "지원팀에 문의"
                  },
                  "pt-BR": {
                    singular: "Fale com o suporte"
                  },
                  "zh-CN": {
                    singular: "联系客服"
                  }
                }
              })
            })]
          });
        case "unsupported":
          return (0, _v10.jsx)(_v21.Button, {
            as: "a",
            href: _v33.SUPPORT_URL,
            onClick: () => _v1("contact_support"),
            rel: "noreferrer",
            size: "lg",
            target: "_blank",
            width: "100%",
            children: (0, _v31.translate)({
              singular: "Contact Support",
              dictionary: {
                es: {
                  singular: "Contactar con soporte"
                },
                "de-DE": {
                  singular: "Support kontaktieren"
                },
                "fr-FR": {
                  singular: "Contacter l'assistance"
                },
                "ja-JP": {
                  singular: "サポートにお問い合わせ"
                },
                "ko-KR": {
                  singular: "지원팀에 문의"
                },
                "pt-BR": {
                  singular: "Fale com o suporte"
                },
                "zh-CN": {
                  singular: "联系客服"
                }
              }
            })
          });
        case "error":
          return (0, _v10.jsxs)(_v10.Fragment, {
            children: [(0, _v10.jsx)(_v21.Button, {
              onClick: () => {
                _v1("retry"), _v4();
              },
              size: "lg",
              children: (0, _v31.translate)({
                singular: "Try again",
                dictionary: {
                  es: {
                    singular: "Intentar de nuevo"
                  },
                  "de-DE": {
                    singular: "Nochmal versuchen"
                  },
                  "fr-FR": {
                    singular: "Veuillez réessayer"
                  },
                  "ja-JP": {
                    singular: "再試行してください"
                  },
                  "ko-KR": {
                    singular: "다시 시도하세요"
                  },
                  "pt-BR": {
                    singular: "Tente de novo"
                  },
                  "zh-CN": {
                    singular: "再试一次"
                  }
                }
              })
            }), (0, _v10.jsx)(_v21.Button, {
              onClick: _v3,
              size: "sm",
              variant: "tertiary",
              children: (0, _v31.translate)({
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
            })]
          });
        default:
          throw Error(`Unhandled review state: ${String(_v6)}`);
      }
    },
    _v54 = _v0 => {
      let {
          flowId: _v1,
          state: _v2
        } = _v0,
        {
          trackActionClicked: _v3
        } = _v19(_v1);
      return (0, _v10.jsxs)(_v10.Fragment, {
        children: [(0, _v10.jsx)(_v25.ModalCloseButton, {
          _disabled: {
            cursor: "default",
            opacity: .4
          },
          borderRadius: "12px",
          boxSize: "40px",
          isDisabled: "pending" === _v2 || "claiming" === _v2,
          right: "16px",
          top: "16px"
        }), (0, _v10.jsx)(_v28.ModalHeader, {
          pb: "0",
          pt: {
            base: "28px",
            md: "32px"
          },
          px: {
            base: "24px",
            md: "32px"
          },
          children: (0, _v10.jsx)(_v30.Text, {
            as: "h2",
            color: "text-primary",
            fontFamily: "heading",
            fontSize: "20px",
            letterSpacing: "-0.8px",
            lineHeight: "28px",
            pr: "40px",
            children: _v50[_v2]
          })
        }), (0, _v10.jsx)(_v24.ModalBody, {
          px: {
            base: "24px",
            md: "32px"
          },
          pb: "20px",
          pt: "32px",
          children: (0, _v10.jsxs)(_v38.Flex, {
            direction: "column",
            gap: "16px",
            children: [(0, _v10.jsx)(_v38.Flex, {
              align: "center",
              boxSize: "64px",
              justify: "center",
              mx: "auto",
              children: "pending" === _v2 || "claiming" === _v2 ? (0, _v10.jsx)(_v45.Spinner, {
                color: "fill-brand",
                size: "lg"
              }) : _v52[_v2]
            }), (0, _v10.jsx)(_v30.Text, {
              color: "text-secondary",
              fontSize: "14px",
              letterSpacing: "-0.42px",
              lineHeight: "19.6px",
              children: _v51[_v2]
            })]
          })
        }), "pending" === _v2 || "claiming" === _v2 ? null : (0, _v10.jsx)(_v27.ModalFooter, {
          alignItems: "stretch",
          flexDirection: "column",
          gap: "8px",
          pb: "24px",
          pt: "16px",
          px: {
            base: "24px",
            md: "32px"
          },
          children: (0, _v10.jsx)(_v53, {
            ..._v0,
            onAction: _v0 => _v3({
              surface: "review",
              action: _v0
            }),
            state: _v2
          })
        })]
      });
    };
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = ({
    data: _v0,
    touch: _v1,
    touched: _v2,
    update: _v3
  }) => {
    let _v4 = _v0.bio.trim().length;
    return (0, _v10.jsxs)(_v55.FormControl, {
      isInvalid: (_v2.all || _v2.bio) && _v4 < 100,
      children: [(0, _v10.jsxs)(_v38.Flex, {
        direction: "column",
        gap: "12px",
        children: [(0, _v10.jsxs)(_v38.Flex, {
          direction: "column",
          gap: "4px",
          children: [(0, _v10.jsx)(_v57.FormLabel, {
            color: "text-primary",
            fontSize: "14px",
            fontWeight: "medium",
            letterSpacing: "-0.42px",
            lineHeight: "19.6px",
            mb: "0",
            children: (0, _v31.translate)({
              singular: "Tell us about you and your work",
              dictionary: {
                es: {
                  singular: "Cuéntanos sobre ti y tu trabajo"
                },
                "de-DE": {
                  singular: "Erzählen Sie uns von sich und Ihrer Arbeit"
                },
                "fr-FR": {
                  singular: "Parlez-nous de vous et de votre travail"
                },
                "ja-JP": {
                  singular: "あなたとあなたの作品について教えてください"
                },
                "ko-KR": {
                  singular: "본인 및 작품에 대해 알려주세요"
                },
                "pt-BR": {
                  singular: "Conte-nos sobre você e seu trabalho"
                },
                "zh-CN": {
                  singular: "告诉我们关于您和您的作品"
                }
              }
            })
          }), (0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            fontSize: "14px",
            letterSpacing: "-0.42px",
            lineHeight: "19.6px",
            children: (0, _v31.translate)({
              singular: "What do you make, and what drives you? At least 100 characters.",
              dictionary: {
                es: {
                  singular: "¿Qué haces y qué te motiva? Al menos 100 caracteres."
                },
                "de-DE": {
                  singular: "Was machen Sie, und was treibt Sie an? Mindestens 100 Zeichen."
                },
                "fr-FR": {
                  singular: "Que créez-vous et qu'est-ce qui vous motive? Au moins 100 caractères."
                },
                "ja-JP": {
                  singular: "あなたは何を作り、何があなたを突き動かしますか？少なくとも100文字。"
                },
                "ko-KR": {
                  singular: "무엇을 제작하며 무엇이 당신을 움직이게 하나요? 최소 100자 이상 입력하세요."
                },
                "pt-BR": {
                  singular: "O que você faz e o que te motiva? Pelo menos 100 caracteres."
                },
                "zh-CN": {
                  singular: "您创作什么？是什么驱动着您？至少 100 个字符。"
                }
              }
            })
          })]
        }), (0, _v10.jsxs)(_v38.Flex, {
          direction: "column",
          gap: "6px",
          children: [(0, _v10.jsx)(_v58.Textarea, {
            bg: "white",
            borderRadius: "12px",
            borderColor: "rgba(26, 54, 93, 0.16)",
            h: {
              base: "160px",
              md: "180px"
            },
            onBlur: () => _v1("bio"),
            onChange: _v0 => _v3("bio", _v0.target.value),
            placeholder: (0, _v31.translate)({
              singular: "I'm a documentary filmmaker based in Lisbon, working on…",
              dictionary: {
                es: {
                  singular: "Soy realizador de documentales con base en Lisboa, trabajando en…"
                },
                "de-DE": {
                  singular: "Ich bin Dokumentarfilmer mit Sitz in Lissabon und arbeite an…"
                },
                "fr-FR": {
                  singular: "Je suis réalisateur documentaire basé à Lisbonne, en train de travailler sur…"
                },
                "ja-JP": {
                  singular: "私はリスボン在住のドキュメンタリー映画作家で、現在…に取り組んでいます"
                },
                "ko-KR": {
                  singular: "저는 리스본 기반의 다큐멘터리 영화 제작자이며, 현재 … 작업 중입니다"
                },
                "pt-BR": {
                  singular: "Sou um cineasta documental baseado em Lisboa, trabalhando em…"
                },
                "zh-CN": {
                  singular: "我是驻里斯本的纪录片导演，目前正在制作…"
                }
              }
            }),
            value: _v0.bio
          }), (0, _v10.jsxs)(_v38.Flex, {
            align: "center",
            gap: "12px",
            justify: "space-between",
            children: [(0, _v10.jsx)(_v30.Text, {
              color: "text-secondary",
              fontSize: "14px",
              letterSpacing: "-0.42px",
              lineHeight: "19.6px",
              children: (0, _v31.translate)({
                singular: "Your words. Your perspective.",
                dictionary: {
                  es: {
                    singular: "Tus palabras. Tu perspectiva."
                  },
                  "de-DE": {
                    singular: "Ihre Worte. Ihre Perspektive."
                  },
                  "fr-FR": {
                    singular: "Vos mots. Votre perspective."
                  },
                  "ja-JP": {
                    singular: "あなたの言葉。あなたの視点。"
                  },
                  "ko-KR": {
                    singular: "당신의 말. 당신의 관점."
                  },
                  "pt-BR": {
                    singular: "Suas palavras. Sua perspectiva."
                  },
                  "zh-CN": {
                    singular: "您的文字。您的视角。"
                  }
                }
              })
            }), (0, _v10.jsx)(_v30.Text, {
              color: _v4 >= 100 ? "status-positive-primary" : "text-secondary",
              fontSize: "14px",
              letterSpacing: "-0.42px",
              lineHeight: "19.6px",
              sx: {
                fontVariantNumeric: "tabular-nums"
              },
              children: (0, _v31.translate)({
                singular: "{count} / 100 min",
                replacements: {
                  count: _v4
                },
                dictionary: {
                  "de-DE": {
                    singular: "{count} / 100 Min."
                  },
                  "ko-KR": {
                    singular: "{count} / 100 최소"
                  }
                }
              })
            })]
          })]
        })]
      }), (0, _v10.jsx)(_v56.FormErrorMessage, {
        children: (0, _v31.translate)({
          singular: "Please write at least 100 characters ({remaining} more to go)",
          replacements: {
            remaining: 100 - _v4
          },
          dictionary: {
            es: {
              singular: "Escribe al menos 100 caracteres (faltan {remaining})"
            },
            "de-DE": {
              singular: "Bitte schreiben Sie mindestens 100 Zeichen (noch {remaining} erforderlich)"
            },
            "fr-FR": {
              singular: "Veuillez écrire au moins 100 caractères (encore {remaining} nécessaires)"
            },
            "ja-JP": {
              singular: "少なくとも100文字を入力してください ({remaining}文字)"
            },
            "ko-KR": {
              singular: "최소 100자 이상 입력하세요({remaining}자 남음)"
            },
            "pt-BR": {
              singular: "Por favor, escreva pelo menos 100 caracteres (faltam {remaining})"
            },
            "zh-CN": {
              singular: "请至少输入 100 个字符（还需 {remaining} 个）"
            }
          }
        })
      })]
    });
  };
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = ({
    children: _v0
  }) => (0, _v10.jsxs)(_v61.HStack, {
    align: "flex-start",
    color: "status-destructive-primary",
    spacing: "6px",
    children: [(0, _v10.jsx)(_v62.CircleExclamation, {
      "aria-hidden": "true",
      boxSize: "15px",
      mt: "1px"
    }), (0, _v10.jsx)(_v30.Text, {
      fontSize: "12px",
      lineHeight: "18px",
      children: _v0
    })]
  });
  var _v64 = _v0.i(0);
  let _v65 = ({
      pricing: _v0
    }) => (0, _v10.jsxs)(_v38.Flex, {
      align: "center",
      bg: "rgba(26, 54, 93, 0.04)",
      borderRadius: "12px",
      justify: "space-between",
      minH: "100px",
      p: "20px",
      children: [(0, _v10.jsxs)(_v38.Flex, {
        direction: "column",
        gap: "4px",
        children: [(0, _v10.jsx)(_v30.Text, {
          color: "text-primary",
          fontFamily: "heading",
          fontSize: "16px",
          letterSpacing: "-0.48px",
          lineHeight: "22.4px",
          children: (0, _v31.translate)("Vimeo Professional")
        }), (0, _v10.jsx)(_v30.Text, {
          color: "text-secondary",
          fontSize: "12px",
          letterSpacing: "-0.24px",
          lineHeight: "14.4px",
          children: (0, _v31.translate)({
            singular: "Unlimited public storage and bandwidth · 7 TB managed storage",
            dictionary: {
              es: {
                singular: "Almacenamiento público y ancho de banda ilimitados · 7 TB de almacenamiento gestionado"
              },
              "de-DE": {
                singular: "Unbegrenzter öffentlicher Speicherplatz und unbegrenzte Bandbreite · 7 TB verwalteter Speicher"
              },
              "fr-FR": {
                singular: "Stockage public et bande passante illimités · 7 TB de stockage géré"
              },
              "ja-JP": {
                singular: "公開ストレージと帯域幅が無制限 · 7 TB の管理済みストレージ"
              },
              "ko-KR": {
                singular: "무제한 공개 스토리지 및 대역폭 · 7 TB 관리형 스토리지"
              },
              "pt-BR": {
                singular: "Armazenamento público e largura de banda ilimitados · 7 TB de armazenamento gerenciado"
              },
              "zh-CN": {
                singular: "无限公共存储和带宽 · 7 TB 托管存储"
              }
            }
          })
        }), (0, _v10.jsx)(_v30.Text, {
          color: "text-secondary",
          fontSize: "12px",
          letterSpacing: "-0.24px",
          lineHeight: "14.4px",
          children: (0, _v31.translate)({
            singular: "2 TB/mo managed bandwidth",
            dictionary: {
              es: {
                singular: "2 TB/mes de ancho de banda gestionado"
              },
              "de-DE": {
                singular: "2 TB/Monat verwaltete Bandbreite"
              },
              "fr-FR": {
                singular: "2 TB/mo de bande passante gérée"
              },
              "ja-JP": {
                singular: "2 TB/月 の管理帯域幅"
              },
              "ko-KR": {
                singular: "2 TB/월 관리형 대역폭"
              },
              "pt-BR": {
                singular: "2 TB/mês de largura de banda gerenciada"
              },
              "zh-CN": {
                singular: "每月 2 TB 托管带宽"
              }
            }
          })
        })]
      }), (0, _v10.jsx)(_v38.Flex, {
        align: "flex-end",
        direction: "column",
        gap: "2px",
        children: _v0 ? (0, _v10.jsxs)(_v10.Fragment, {
          children: [(0, _v10.jsxs)(_v38.Flex, {
            align: "baseline",
            gap: "2px",
            children: [(0, _v10.jsx)(_v30.Text, {
              color: "text-secondary",
              fontSize: "12px",
              letterSpacing: "-0.24px",
              lineHeight: "14.4px",
              textDecoration: "line-through",
              children: _v0.listMonthly
            }), (0, _v10.jsx)(_v30.Text, {
              color: "text-primary",
              fontFamily: "heading",
              fontSize: "36px",
              letterSpacing: "-1.44px",
              lineHeight: "43.2px",
              children: _v0.indieMonthly
            }), (0, _v10.jsx)(_v30.Text, {
              color: "text-secondary",
              fontSize: "12px",
              letterSpacing: "-0.24px",
              lineHeight: "14.4px",
              children: (0, _v31.translate)({
                singular: "/mo",
                dictionary: {
                  "de-DE": {
                    singular: "/Monat"
                  },
                  "ja-JP": {
                    singular: "/月"
                  },
                  "pt-BR": {
                    singular: "/mês"
                  },
                  "zh-CN": {
                    singular: "/月"
                  }
                }
              })
            })]
          }), (0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            fontSize: "11px",
            letterSpacing: "-0.22px",
            lineHeight: "14px",
            children: (0, _v31.translate)({
              singular: "{price}/year, billed annually",
              replacements: {
                price: _v0.indieAnnual
              },
              dictionary: {
                es: {
                  singular: "{price}/año, facturado anualmente"
                },
                "de-DE": {
                  singular: "{price}/Jahr, jährlich abgerechnet"
                },
                "fr-FR": {
                  singular: "{price}/an, facturé annuellement"
                },
                "ja-JP": {
                  singular: "{price}/年、年額請求"
                },
                "ko-KR": {
                  singular: "연 {price}, 연간 청구"
                },
                "pt-BR": {
                  singular: "{price}/ano, cobrado anualmente"
                },
                "zh-CN": {
                  singular: "{price}/年，按年计费"
                }
              }
            })
          })]
        }) : (0, _v10.jsx)(_v64.Skeleton, {
          h: "43.2px",
          w: "7rem"
        })
      })]
    }),
    _v66 = [(0, _v31.translate)({
      singular: "I make original films as my main pursuit, whether as a career, professional practice, or field of study, and I'm applying as an individual",
      dictionary: {
        es: {
          singular: "Hago películas originales como mi principal actividad, ya sea como carrera, práctica profesional o campo de estudio, y solicito como individuo"
        },
        "de-DE": {
          singular: "Ich mache eigene Filme als meine Haupttätigkeit, sei es beruflich, in praktischer Ausübung oder im Studium, und bewerbe mich als Einzelperson"
        },
        "fr-FR": {
          singular: "Je réalise des films originaux comme activité principale, que ce soit comme carrière, pratique professionnelle ou domaine d'études, et je postule en tant qu'individu"
        },
        "ja-JP": {
          singular: "私は職業、専門的な実践、あるいは学業として映画制作を主に行っており、個人として申請します"
        },
        "ko-KR": {
          singular: "저는 경력, 전문 활동, 혹은 학업으로서 주로 창작 영화를 제작하며, 개인 자격으로 신청합니다"
        },
        "pt-BR": {
          singular: "Faço filmes originais como minha atividade principal, seja como carreira, prática profissional ou área de estudo, e estou me inscrevendo como indivíduo"
        },
        "zh-CN": {
          singular: "我以创作原创影片为主要追求，无论是作为职业、专业实践或学习领域，我以个人身份申请"
        }
      }
    }), (0, _v31.translate)({
      singular: "I won't primarily use Vimeo for commercial client work or to operate or support a business",
      dictionary: {
        es: {
          singular: "No usaré Vimeo principalmente para trabajo comercial por encargo ni para operar o respaldar un negocio"
        },
        "de-DE": {
          singular: "Ich werde Vimeo nicht hauptsächlich für kommerzielle Kundenprojekte oder zum Betrieb bzw. zur Unterstützung eines Unternehmens nutzen"
        },
        "fr-FR": {
          singular: "Je n'utiliserai pas principalement Vimeo pour du travail commercial pour des clients ni pour exploiter ou soutenir une entreprise"
        },
        "ja-JP": {
          singular: "私は主に商業クライアント向けの仕事やビジネスの運営・サポートのためにVimeoを使用しません"
        },
        "ko-KR": {
          singular: "주로 Vimeo를 상업적 고객 작업이나 사업 운영·지원 용도로 사용하지 않습니다"
        },
        "pt-BR": {
          singular: "Não usarei o Vimeo principalmente para trabalhos comerciais para clientes nem para operar ou apoiar um negócio"
        },
        "zh-CN": {
          singular: "我不会主要将 Vimeo 用于商业客户工作或经营/支持企业"
        }
      }
    }), (0, _v31.translate)({
      singular: "I understand Vimeo may verify my eligibility",
      dictionary: {
        es: {
          singular: "Entiendo que Vimeo puede verificar mi elegibilidad"
        },
        "de-DE": {
          singular: "Ich verstehe, dass Vimeo meine Berechtigung überprüfen kann"
        },
        "fr-FR": {
          singular: "Je comprends que Vimeo peut vérifier mon éligibilité"
        },
        "ja-JP": {
          singular: "Vimeoが私の適格性を確認する場合があることを理解しています"
        },
        "ko-KR": {
          singular: "Vimeo가 제 자격을 확인할 수 있음에 동의합니다"
        },
        "pt-BR": {
          singular: "Entendo que o Vimeo pode verificar minha elegibilidade"
        },
        "zh-CN": {
          singular: "我理解 Vimeo 可能会核实我的资格"
        }
      }
    })],
    _v67 = ({
      data: _v0,
      touch: _v1,
      touched: _v2,
      update: _v3,
      pricing: _v4
    }) => {
      let _v5 = _v0.declarations.every(Boolean);
      return (0, _v10.jsxs)(_v38.Flex, {
        direction: "column",
        gap: "32px",
        children: [(0, _v10.jsxs)(_v38.Flex, {
          direction: "column",
          gap: "16px",
          children: [_v66.map((_v0, _v1) => (0, _v10.jsx)(_v60.Checkbox, {
            isChecked: _v0.declarations[_v1],
            isInvalid: (_v2.all || _v2.declarations) && !_v0.declarations[_v1],
            onChange: _v0 => {
              _v3("declarations", _v0.declarations.map((_v0, _v1) => _v1 === _v1 ? _v0.target.checked : _v0)), _v1("declarations");
            },
            children: (0, _v10.jsx)(_v30.Text, {
              fontSize: "12px",
              letterSpacing: "-0.24px",
              lineHeight: "14.4px",
              children: _v0
            })
          }, _v0)), (_v2.all || _v2.declarations) && !_v5 ? (0, _v10.jsx)(_v63, {
            children: (0, _v31.translate)({
              singular: "Please confirm all three statements to continue",
              dictionary: {
                es: {
                  singular: "Por favor confirma las tres afirmaciones para continuar"
                },
                "de-DE": {
                  singular: "Bitte bestätigen Sie alle drei Aussagen, um fortzufahren"
                },
                "fr-FR": {
                  singular: "Veuillez confirmer les trois affirmations pour continuer"
                },
                "ja-JP": {
                  singular: "続行するには3つすべての項目を確認してください。"
                },
                "ko-KR": {
                  singular: "계속하려면 세 가지 항목 모두 확인해주세요"
                },
                "pt-BR": {
                  singular: "Por favor, confirme todas as três declarações para continuar"
                },
                "zh-CN": {
                  singular: "请确认以下三项声明以继续"
                }
              }
            })
          }) : null]
        }), (0, _v10.jsxs)(_v38.Flex, {
          direction: "column",
          gap: "12px",
          children: [(0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            fontSize: "12px",
            letterSpacing: "-0.24px",
            lineHeight: "18px",
            children: (0, _v31.translate)({
              singular: "If you don't qualify or no longer qualify, Vimeo may end your discount, refund prepaid fees for the unused portion, and offer you another available plan. If you provide false or misleading information or misuse the discount, Vimeo may end it without a refund.",
              dictionary: {
                es: {
                  singular: "Si no calificas o dejas de calificar, Vimeo puede terminar tu descuento, reembolsar las tarifas prepago por la porción no utilizada y ofrecerte otro plan disponible. Si proporcionas información falsa o engañosa o haces un uso indebido del descuento, Vimeo puede cancelarlo sin reembolso."
                },
                "de-DE": {
                  singular: "Wenn Sie nicht qualifiziert sind oder nicht mehr qualifiziert sind, kann Vimeo Ihren Rabatt beenden, im Voraus bezahlte Gebühren für den ungenutzten Zeitraum erstatten und Ihnen einen anderen verfügbaren Tarif anbieten. Wenn Sie falsche oder irreführende Angaben machen oder den Rabatt missbrauchen, kann Vimeo ihn ohne Rückerstattung beenden."
                },
                "fr-FR": {
                  singular: "Si vous ne remplissez pas les conditions d'éligibilité ou ne les remplissez plus, Vimeo peut mettre fin à votre remise, rembourser les frais prépayés pour la partie non utilisée et vous proposer un autre forfait disponible. Si vous fournissez des informations fausses ou trompeuses ou utilisez la remise de manière abusive, Vimeo peut y mettre fin sans remboursement."
                },
                "ja-JP": {
                  singular: "基準に該当しない、あるいは該当しなくなった場合、Vimeoはあなたの割引を終了し、未使用分の前払い料金を返金し、別の利用可能なプランを提案することがあります。虚偽または誤解を招く情報を提供したり、割引を不正に使用した場合、Vimeoは返金なしで割引を終了することがあります。"
                },
                "ko-KR": {
                  singular: "자격이 없거나 더 이상 자격이 충족되지 않는 경우 Vimeo는 할인을 종료하거나 사용하지 않은 기간에 대해 선결제된 비용을 환불하고 다른 이용 가능한 플랜을 제안할 수 있습니다. 허위 또는 오해의 소지가 있는 정보를 제공하거나 할인을 오용하는 경우 Vimeo는 환불 없이 할인을 종료할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Se você não se qualificar ou deixar de se qualificar, o Vimeo pode encerrar seu desconto, reembolsar taxas pré-pagas pela parte não utilizada e oferecer outro plano disponível. Se você fornecer informações falsas ou enganosas ou usar o desconto de forma indevida, o Vimeo poderá encerrá-lo sem reembolso."
                },
                "zh-CN": {
                  singular: "如果您不符合资格或不再符合资格，Vimeo 可能会终止您的折扣，退还未使用部分的预付费用，并为您提供其他可用方案。如果您提供虚假或误导性信息或滥用折扣，Vimeo 可能会在不退款的情况下终止折扣。"
                }
              }
            })
          }), (0, _v10.jsx)(_v65, {
            pricing: _v4
          }), (0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            fontSize: "12px",
            letterSpacing: "-0.24px",
            lineHeight: "14.4px",
            children: (0, _v31.translate)({
              singular: "You'll review billing details at checkout. No payment is taken here.",
              dictionary: {
                es: {
                  singular: "Revisarás los detalles de facturación al finalizar la compra. No se realiza ningún pago aquí."
                },
                "de-DE": {
                  singular: "Sie prüfen die Rechnungsdetails beim Checkout. Hier wird keine Zahlung vorgenommen."
                },
                "fr-FR": {
                  singular: "Vous examinerez les détails de facturation au moment du paiement. Aucun paiement n'est effectué ici."
                },
                "ja-JP": {
                  singular: "請求の詳細はチェックアウト時に確認します。ここでは支払いは行われません。"
                },
                "ko-KR": {
                  singular: "결제 단계에서 청구 정보를 검토합니다. 이 단계에서는 결제가 이루어지지 않습니다."
                },
                "pt-BR": {
                  singular: "Você revisará os detalhes de cobrança na finalização da compra. Nenhum pagamento é realizado aqui."
                },
                "zh-CN": {
                  singular: "您将在结账时查看计费详情。此处不收款。"
                }
              }
            })
          })]
        })]
      });
    };
  var _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = ({
      changeLink: _v0,
      data: _v1,
      touch: _v2,
      touched: _v3,
      update: _v4
    }) => (0, _v10.jsxs)(_v38.Flex, {
      direction: "column",
      gap: "12px",
      children: [(0, _v10.jsxs)(_v38.Flex, {
        direction: "column",
        gap: "4px",
        children: [(0, _v10.jsx)(_v30.Text, {
          color: "text-primary",
          fontSize: "14px",
          fontWeight: "medium",
          letterSpacing: "-0.42px",
          lineHeight: "19.6px",
          children: (0, _v31.translate)({
            singular: "Your profiles & portfolio",
            dictionary: {
              es: {
                singular: "Tus perfiles & portafolio"
              },
              "de-DE": {
                singular: "Ihre Profile & Ihr Portfolio"
              },
              "fr-FR": {
                singular: "Vos profils et portfolio"
              },
              "ja-JP": {
                singular: "あなたのプロフィール & ポートフォリオ"
              },
              "ko-KR": {
                singular: "프로필 및 포트폴리오"
              },
              "pt-BR": {
                singular: "Seus perfis & portfólio"
              },
              "zh-CN": {
                singular: "您的个人资料与作品集"
              }
            }
          })
        }), (0, _v10.jsx)(_v30.Text, {
          color: "text-secondary",
          fontSize: "14px",
          letterSpacing: "-0.42px",
          lineHeight: "19.6px",
          children: (0, _v31.translate)({
            singular: "Add at least one link, up to three.",
            dictionary: {
              es: {
                singular: "Agrega al menos un enlace, hasta tres."
              },
              "de-DE": {
                singular: "Fügen Sie mindestens einen Link hinzu, bis zu drei."
              },
              "fr-FR": {
                singular: "Ajoutez au moins un lien, jusqu'à trois."
              },
              "ja-JP": {
                singular: "1つ以上、最大3つまでのリンクを追加してください。"
              },
              "ko-KR": {
                singular: "최소 한 개, 최대 세 개의 링크를 추가하세요."
              },
              "pt-BR": {
                singular: "Adicione pelo menos um link, até três."
              },
              "zh-CN": {
                singular: "至少添加一个链接，最多三个。"
              }
            }
          })
        })]
      }), (0, _v10.jsxs)(_v38.Flex, {
        direction: "column",
        gap: "17px",
        children: [(0, _v10.jsx)(_v38.Flex, {
          direction: "column",
          gap: "17px",
          children: _v1.links.map((_v0, _v1) => {
            let _v2 = (_v3.all || _v3[`url-${_v0.id}`]) && (!_v0.url.trim() && 0 === _v1 && !_v1.links.some(_v0 => _v44(_v0.url)) || !!_v0.url.trim() && !_v44(_v0.url));
            return (0, _v10.jsxs)(_v38.Flex, {
              direction: "column",
              gap: "4px",
              children: [(0, _v10.jsxs)(_v38.Flex, {
                bg: "rgba(26, 54, 93, 0.04)",
                borderRadius: "20px",
                direction: "column",
                gap: "4px",
                p: "8px",
                children: [(0, _v10.jsxs)(_v38.Flex, {
                  align: "center",
                  gap: "4px",
                  children: [(0, _v10.jsx)(_v16.Box, {
                    flex: "1",
                    minW: "0",
                    children: (0, _v10.jsx)(_v70.Select, {
                      items: _v42.map(_v0 => ({
                        label: _v0,
                        value: _v0
                      })),
                      leftIcon: (0, _v10.jsx)(_v71.Link, {}),
                      onValueChange: _v0 => _v0(_v0.id, {
                        platform: _v0.value[0]
                      }),
                      value: [_v0.platform],
                      withPortal: !1,
                      children: ({
                        label: _v0
                      }) => (0, _v10.jsx)(_v70.SelectItem, {
                        children: (0, _v10.jsx)(_v70.SelectItemText, {
                          children: _v0
                        })
                      })
                    })
                  }), _v1.links.length > 1 ? (0, _v10.jsx)(_v68.IconButton, {
                    "aria-label": (0, _v31.translate)({
                      singular: "Remove link",
                      dictionary: {
                        es: {
                          singular: "Eliminar enlace"
                        },
                        "de-DE": {
                          singular: "Link entfernen"
                        },
                        "fr-FR": {
                          singular: "Supprimer le lien"
                        },
                        "ja-JP": {
                          singular: "リンクを削除"
                        },
                        "ko-KR": {
                          singular: "링크 제거"
                        },
                        "pt-BR": {
                          singular: "Remover link"
                        },
                        "zh-CN": {
                          singular: "移除链接"
                        }
                      }
                    }),
                    color: "text-secondary",
                    icon: (0, _v10.jsx)(_v73.TrashBin, {}),
                    mr: "4px",
                    onClick: () => _v4("links", _v1.links.filter(_v0 => _v0.id !== _v0.id)),
                    variant: "tertiary"
                  }) : null]
                }), (0, _v10.jsx)(_v69.Input, {
                  bg: "white",
                  borderRadius: "12px",
                  borderColor: _v2 ? "status-destructive-primary" : "rgba(26, 54, 93, 0.16)",
                  name: "portfolio-link",
                  onBlur: () => _v2(`url-${_v0.id}`),
                  onChange: _v0 => _v0(_v0.id, {
                    url: _v0.target.value
                  }),
                  placeholder: "Vimeo profile" === _v0.platform ? "https://vimeo.com/yourname" : "https://",
                  type: "url",
                  value: _v0.url
                })]
              }), _v2 ? (0, _v10.jsx)(_v63, {
                children: _v0.url.trim() ? (0, _v31.translate)({
                  singular: "Please enter a valid URL",
                  dictionary: {
                    es: {
                      singular: "Introduce una URL válida"
                    },
                    "de-DE": {
                      singular: "Bitte geben Sie eine gültige URL ein"
                    },
                    "fr-FR": {
                      singular: "Veuillez saisir une URL valide"
                    },
                    "ja-JP": {
                      singular: "有効なURLを入力してください"
                    },
                    "ko-KR": {
                      singular: "유효한 URL을 입력하세요"
                    },
                    "pt-BR": {
                      singular: "Por favor, insira uma URL válida"
                    },
                    "zh-CN": {
                      singular: "请输入有效的 URL"
                    }
                  }
                }) : (0, _v31.translate)({
                  singular: "Add at least one link to your work",
                  dictionary: {
                    es: {
                      singular: "Agrega al menos un enlace a tu trabajo"
                    },
                    "de-DE": {
                      singular: "Fügen Sie mindestens einen Link zu Ihrer Arbeit hinzu"
                    },
                    "fr-FR": {
                      singular: "Ajoutez au moins un lien vers votre travail"
                    },
                    "ja-JP": {
                      singular: "作品へのリンクを少なくとも1つ追加してください"
                    },
                    "ko-KR": {
                      singular: "작품 링크를 최소 하나 추가하세요"
                    },
                    "pt-BR": {
                      singular: "Adicione pelo menos um link do seu trabalho"
                    },
                    "zh-CN": {
                      singular: "至少添加一个作品链接"
                    }
                  }
                })
              }) : null]
            }, _v0.id);
          })
        }), _v1.links.length < 3 ? (0, _v10.jsxs)(_v38.Flex, {
          align: "center",
          gap: "8px",
          children: [(0, _v10.jsx)(_v21.Button, {
            borderRadius: "8px",
            color: "text-primary",
            leftIcon: (0, _v10.jsx)(_v72.Plus, {}),
            size: "sm",
            variant: "tertiary",
            onClick: () => _v4("links", [..._v1.links, {
              id: Date.now(),
              platform: "Portfolio / website",
              url: ""
            }]),
            children: (0, _v31.translate)({
              singular: "Add another link",
              dictionary: {
                es: {
                  singular: "Agregar otro enlace"
                },
                "de-DE": {
                  singular: "Einen weiteren Link hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter un lien supplémentaire"
                },
                "ja-JP": {
                  singular: "リンクをもう1つ追加"
                },
                "ko-KR": {
                  singular: "링크 추가"
                },
                "pt-BR": {
                  singular: "Adicionar outro link"
                },
                "zh-CN": {
                  singular: "添加另一个链接"
                }
              }
            })
          }), (0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            fontSize: "12px",
            letterSpacing: "-0.24px",
            lineHeight: "14.4px",
            children: `${_v1.links.length} / 3`
          })]
        }) : null]
      })]
    }),
    _v75 = _v0 => ({
      links: _v0.links.filter(_v0 => "" !== _v0.url.trim()).map(({
        platform: _v0,
        url: _v1
      }) => ({
        platform: _v0,
        url: _v1
      })),
      bio: _v0.bio,
      declarations: _v0.declarations
    }),
    _v76 = async (_v0, _v1) => {
      let _v2 = _v0 => ({
        outcome: "error",
        errorCategory: _v0
      });
      try {
        var _v3;
        let _v0,
          _v1 = await fetch(`${_v1.baseUrl}/me/indie_program/eligibility`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `jwt ${_v1.jwt}`,
              "Vimeo-Page": _v1.xVimeoPage,
              "Accept-Language": _v1.locale ?? "en"
            },
            body: JSON.stringify(_v75(_v0))
          });
        if (!_v1.ok) return _v2("http");
        try {
          _v0 = await _v1.json();
        } catch {
          return _v2("invalid_response");
        }
        return _v3 = _v0, !1 === _v3.eligible ? {
          outcome: "ineligible"
        } : !0 === _v3.eligible && "string" == typeof _v3.billing_plan_id && "number" == typeof _v3.discount_percent ? {
          outcome: "approved",
          billingPlanId: _v3.billing_plan_id,
          discountPercent: _v3.discount_percent
        } : {
          outcome: "error",
          errorCategory: "invalid_response"
        };
      } catch {
        return _v2("network");
      }
    },
    _v77 = async (_v0, _v1) => {
      let [_v2] = await Promise.allSettled([_v76(_v0, _v1), new Promise(_v0 => {
        setTimeout(_v0, 0);
      })]);
      return "fulfilled" === _v2.status ? _v2.value : {
        outcome: "error",
        errorCategory: "network"
      };
    },
    _v78 = () => structuredClone(_v43),
    _v79 = [(0, _v31.translate)({
      singular: "Confirm eligibility",
      dictionary: {
        es: {
          singular: "Confirmar elegibilidad"
        },
        "de-DE": {
          singular: "Berechtigung bestätigen"
        },
        "fr-FR": {
          singular: "Confirmer l'éligibilité"
        },
        "ja-JP": {
          singular: "適格性を確認する"
        },
        "ko-KR": {
          singular: "자격 확인"
        },
        "pt-BR": {
          singular: "Confirmar elegibilidade"
        },
        "zh-CN": {
          singular: "确认资格"
        }
      }
    }), (0, _v31.translate)({
      singular: "Show us your work",
      dictionary: {
        es: {
          singular: "Muéstranos tu trabajo"
        },
        "de-DE": {
          singular: "Zeigen Sie uns Ihre Arbeit"
        },
        "fr-FR": {
          singular: "Montrez-nous votre travail"
        },
        "ja-JP": {
          singular: "作品を見せてください"
        },
        "ko-KR": {
          singular: "작품을 보여주세요"
        },
        "pt-BR": {
          singular: "Mostre-nos seu trabalho"
        },
        "zh-CN": {
          singular: "展示您的作品"
        }
      }
    }), (0, _v31.translate)({
      singular: "Tell us about yourself",
      dictionary: {
        es: {
          singular: "Cuéntenos sobre usted"
        },
        "de-DE": {
          singular: "Erzählen Sie uns etwas über sich"
        },
        "fr-FR": {
          singular: "Parlez-nous de vous"
        },
        "ja-JP": {
          singular: "あなたについて教えてください"
        },
        "ko-KR": {
          singular: "귀하에 대해 알려주세요"
        },
        "pt-BR": {
          singular: "Conte-nos sobre você"
        },
        "zh-CN": {
          singular: "请介绍您自己"
        }
      }
    })],
    _v80 = ["eligibility", "work", "about_you"],
    _v81 = [(0, _v31.translate)({
      singular: "This discount makes more room for independent voices. To qualify, you must meet all three requirements below.",
      dictionary: {
        es: {
          singular: "Este descuento crea más espacio para voces independientes. Para calificar, debes cumplir los tres requisitos a continuación."
        },
        "de-DE": {
          singular: "Dieser Rabatt schafft mehr Raum für unabhängige Stimmen. Um sich zu qualifizieren, müssen Sie alle drei untenstehenden Anforderungen erfüllen."
        },
        "fr-FR": {
          singular: "Cette remise crée davantage d'espace pour les voix indépendantes. Pour être éligible, vous devez satisfaire aux trois exigences ci-dessous."
        },
        "ja-JP": {
          singular: "この割引は独立系の声にもっと場を与えるためのものです。資格を得るには、以下の3つの要件すべてを満たす必要があります。"
        },
        "ko-KR": {
          singular: "이 할인은 독립적인 목소리를 위한 더 많은 공간을 만듭니다. 자격을 얻으려면 아래 세 가지 요건을 모두 충족해야 합니다."
        },
        "pt-BR": {
          singular: "Este desconto abre mais espaço para vozes independentes. Para se qualificar, você deve atender aos três requisitos abaixo."
        },
        "zh-CN": {
          singular: "该折扣为独立声音提供更多空间。要符合资格，您必须满足下面的三项要求。"
        }
      }
    }), (0, _v31.translate)({
      singular: "Every filmmaker starts somewhere. Share a place where we can get to know your work.",
      dictionary: {
        es: {
          singular: "Todo cineasta empieza en algún lugar. Comparte un sitio donde podamos conocer tu trabajo."
        },
        "de-DE": {
          singular: "Jede Filmemacherin und jeder Filmemacher fängt irgendwo an. Teilen Sie einen Ort, an dem wir Ihre Arbeit kennenlernen können."
        },
        "fr-FR": {
          singular: "Chaque cinéaste commence quelque part. Indiquez un endroit où nous pouvons découvrir votre travail."
        },
        "ja-JP": {
          singular: "すべての映画制作者はどこかから始まります。あなたの作品を知るためのプロフィールやページを教えてください。"
        },
        "ko-KR": {
          singular: "모든 영화 제작자는 어딘가에서 시작합니다. 작품을 알 수 있는 링크를 공유하세요."
        },
        "pt-BR": {
          singular: "Todos os cineastas começam em algum lugar. Compartilhe um lugar onde possamos conhecer seu trabalho."
        },
        "zh-CN": {
          singular: "每位电影制作人都有起点。分享一个我们可以了解您作品的地方。"
        }
      }
    }), (0, _v31.translate)({
      singular: "The person behind the camera matters. Tell us your story, in your own words.",
      dictionary: {
        es: {
          singular: "La persona detrás de la cámara importa. Cuéntanos tu historia, con tus propias palabras."
        },
        "de-DE": {
          singular: "Die Person hinter der Kamera zählt. Erzählen Sie uns Ihre Geschichte mit eigenen Worten."
        },
        "fr-FR": {
          singular: "La personne derrière la caméra compte. Racontez-nous votre histoire, avec vos propres mots."
        },
        "ja-JP": {
          singular: "カメラの背後にいる人物が重要です。あなた自身の言葉で物語を聞かせてください。"
        },
        "ko-KR": {
          singular: "카메라 뒤의 사람이 중요합니다. 당신만의 말로 이야기를 들려주세요."
        },
        "pt-BR": {
          singular: "A pessoa por trás da câmera importa. Conte-nos sua história, com suas próprias palavras."
        },
        "zh-CN": {
          singular: "镜头背后的人很重要。用您自己的话讲述您的故事。"
        }
      }
    })],
    _v82 = ({
      canRedeem: _v0,
      flowId: _v1,
      hasActivePsSub: _v2,
      isClaimContextError: _v3,
      isClaimContextLoading: _v4,
      isOpen: _v5,
      onCheckout: _v6,
      onClose: _v7,
      onUpgrade: _v8,
      onRetryClaimContext: _v9,
      pricing: _v10
    }) => {
      let _v11 = (0, _v40.useGctlConfig)(),
        {
          trackActionClicked: _v12,
          trackApplicationSubmitted: _v13,
          trackEligibilityResult: _v14,
          trackFlowClosed: _v15,
          trackStateDisplayed: _v16,
          trackStepDisplayed: _v17
        } = _v19(_v1),
        {
          changeLink: _v18,
          data: _v19,
          dirty: _v20,
          isValidForStep: _v21,
          reset: _v22,
          touch: _v23,
          touched: _v24,
          update: _v25
        } = (() => {
          let [_v0, _v1] = (0, _v15.useState)(_v78),
            [_v2, _v3] = (0, _v15.useState)({}),
            _v4 = (0, _v15.useCallback)((_v0, _v1) => _v1(_v0 => ({
              ..._v0,
              [_v0]: _v1
            })), []),
            _v5 = (0, _v15.useCallback)((_v0, _v1) => _v1(_v0 => ({
              ..._v0,
              links: _v0.links.map(_v0 => _v0.id === _v0 ? {
                ..._v0,
                ..._v1
              } : _v0)
            })), []),
            _v6 = (0, _v15.useCallback)(_v0 => _v3(_v0 => ({
              ..._v0,
              [_v0]: !0
            })), []),
            _v7 = (0, _v15.useCallback)(() => {
              _v1(_v78()), _v3({});
            }, []),
            _v8 = (0, _v15.useCallback)(_v0 => 1 === _v0 ? _v0.declarations.every(Boolean) : 2 === _v0 ? _v0.links.some(_v0 => _v44(_v0.url)) && _v0.links.every(_v0 => !_v0.url.trim() || _v44(_v0.url)) : 3 === _v0 && _v0.bio.trim().length >= 100, [_v0]);
          return {
            changeLink: _v5,
            data: _v0,
            dirty: JSON.stringify(_v0) !== JSON.stringify(_v43),
            isValidForStep: _v8,
            reset: _v7,
            touch: _v6,
            touched: _v2,
            update: _v4
          };
        })(),
        [_v26, _v27] = (0, _v15.useState)(1),
        [_v28, _v29] = (0, _v15.useState)(!1),
        [_v30, _v31] = (0, _v15.useState)(null),
        [_v32, _v33] = (0, _v15.useState)(!1),
        [_v34, _v35] = (0, _v15.useState)(!1),
        _v36 = (0, _v15.useRef)(0),
        _v37 = (0, _v39.useBreakpointValue)({
          base: !1,
          md: !0
        }, {
          fallback: "md"
        }),
        _v38 = _v28 && _v37,
        _v39 = _v21(_v26),
        _v40 = _v32 ? "claiming" : null === _v30 ? "pending" : "approved" !== _v30.outcome ? _v30.outcome : _v3 ? "error" : _v4 || _v0 ? "approved" : "unsupported",
        _v41 = _v28 && "pending" === _v40;
      (0, _v32.usePicoEffect)(() => {
        if (!_v5 || _v28) return !1;
        _v17({
          step: _v80[_v26 - 1]
        });
      }, [_v5, _v28, _v26]), (0, _v32.usePicoEffect)(() => {
        if (!_v5 || !_v28 || "pending" === _v40 || "claiming" === _v40) return !1;
        _v16({
          surface: "review",
          state: _v40
        });
      }, [_v5, _v28, _v40]), (0, _v32.usePicoEffect)(() => {
        if (null === _v30) return !1;
        _v14({
          outcome: _v30.outcome,
          errorCategory: "error" === _v30.outcome ? _v30.errorCategory : null
        });
      }, [_v30]);
      let _v42 = (0, _v15.useCallback)(() => {
          _v36.current += 1, _v27(1), _v29(!1), _v31(null), _v33(!1), _v35(!1), _v22();
        }, [_v22]),
        _v43 = (0, _v15.useCallback)(() => {
          if (!_v41 && !_v32) {
            if (_v28 || !_v20) {
              _v15({
                surface: _v28 ? "review" : "application",
                reason: "dismissed"
              }), _v7(), _v42();
              return;
            }
            _v35(!0);
          }
        }, [_v32, _v20, _v7, _v41, _v42, _v28, _v15]),
        _v44 = (0, _v15.useCallback)(async () => {
          _v36.current += 1;
          let _v0 = _v36.current;
          _v29(!0), _v31(null), _v13(_v75(_v19));
          let _v1 = {
            outcome: "error",
            errorCategory: "network"
          };
          try {
            _v1 = await _v77(_v19, {
              baseUrl: _v11.baseUrl ?? "",
              jwt: _v11.jwt ?? "",
              xVimeoPage: _v11.xVimeoPage ?? "",
              locale: _v11.locale
            });
          } catch {
            _v1 = {
              outcome: "error",
              errorCategory: "network"
            };
          } finally {
            _v36.current === _v0 && _v31(_v1);
          }
        }, [_v19, _v11.baseUrl, _v11.jwt, _v11.locale, _v11.xVimeoPage, _v13]),
        _v45 = (0, _v15.useCallback)(_v0 => {
          var _v1;
          let _v2 = (_v1 = {
            canRedeem: _v0,
            hasActivePsSub: _v2
          }).canRedeem ? _v1.hasActivePsSub ? "upgrade" : "checkout" : "unsupported";
          if (_v33(!0), "upgrade" === _v2) {
            _v8(_v0), _v42();
            return;
          }
          "checkout" === _v2 && _v6(_v0);
        }, [_v0, _v2, _v6, _v8, _v42]),
        _v46 = (0, _v15.useCallback)(() => {
          _v9(), _v30?.outcome !== "approved" && _v44();
        }, [_v30, _v9, _v44]),
        _v47 = {
          changeLink: _v18,
          data: _v19,
          touch: _v23,
          touched: _v24,
          update: _v25
        };
      return (0, _v10.jsxs)(_v10.Fragment, {
        children: [(0, _v10.jsxs)(_v23.Modal, {
          closeOnEsc: !_v32 && !_v34 && !_v41,
          closeOnOverlayClick: !1,
          isCentered: !0,
          isOpen: _v5,
          onClose: _v43,
          scrollBehavior: "inside",
          size: "lg",
          children: [(0, _v10.jsx)(_v29.ModalOverlay, {
            backdropFilter: {
              base: "none",
              md: "blur(5px)"
            },
            bg: {
              base: "white",
              md: "rgba(0, 0, 0, 0.8)"
            },
            display: _v38 ? "none" : void 0
          }), (0, _v10.jsx)(_v22.LightMode, {
            children: (0, _v10.jsxs)(_v26.ModalContent, {
              containerProps: {
                display: _v38 ? "none" : void 0,
                p: {
                  base: 0,
                  md: "sm"
                }
              },
              "data-theme": "light",
              bg: "white",
              borderRadius: {
                base: "0",
                md: "20px"
              },
              boxShadow: {
                base: "none",
                md: "0 4px 16px rgba(11, 26, 41, 0.12)"
              },
              h: {
                base: "100dvh",
                md: "672px"
              },
              maxH: {
                base: "100dvh",
                md: "calc(100svh - 48px)"
              },
              maxW: {
                base: "100vw",
                md: "560px"
              },
              m: "0",
              overflow: "hidden",
              w: "100%",
              children: [_v28 ? null : (0, _v10.jsx)(_v25.ModalCloseButton, {
                borderRadius: "12px",
                boxSize: "40px",
                right: "16px",
                top: "16px"
              }), (0, _v10.jsx)(_v28.ModalHeader, {
                pb: "24px",
                pt: "36px",
                px: {
                  base: "24px",
                  md: "32px"
                },
                children: (0, _v10.jsxs)(_v38.Flex, {
                  direction: "column",
                  gap: "17px",
                  children: [(0, _v10.jsxs)(_v38.Flex, {
                    direction: "column",
                    gap: "12px",
                    children: [(0, _v10.jsx)(_v16.Box, {
                      pr: "40px",
                      children: (0, _v10.jsx)(_v30.Text, {
                        color: "text-primary",
                        fontSize: "14px",
                        fontWeight: "medium",
                        letterSpacing: "-0.42px",
                        lineHeight: "19.6px",
                        children: (0, _v31.translate)({
                          singular: "Step {step} of {total}",
                          replacements: {
                            step: _v26,
                            total: _v79.length
                          },
                          dictionary: {
                            es: {
                              singular: "Paso {step} de {total}"
                            },
                            "de-DE": {
                              singular: "Schritt {step} von {total}"
                            },
                            "fr-FR": {
                              singular: "Étape {step} sur {total}"
                            },
                            "ja-JP": {
                              singular: "ステップ {step}／{total}"
                            },
                            "ko-KR": {
                              singular: "{total}단계 중 {step}단계"
                            },
                            "pt-BR": {
                              singular: "Etapa {step} de {total}"
                            },
                            "zh-CN": {
                              singular: "第 {step} 步，共 {total} 步"
                            }
                          }
                        })
                      })
                    }), (0, _v10.jsx)(_v38.Flex, {
                      gap: "8px",
                      children: _v79.map((_v0, _v1) => (0, _v10.jsx)(_v16.Box, {
                        bg: _v1 + 1 <= _v26 ? "fill-brand" : "#e4e9ef",
                        borderRadius: "2px",
                        flex: "1",
                        h: "4px"
                      }, _v0))
                    })]
                  }), (0, _v10.jsxs)(_v38.Flex, {
                    direction: "column",
                    gap: "8px",
                    children: [(0, _v10.jsx)(_v30.Text, {
                      as: "h2",
                      color: "text-primary",
                      fontFamily: "heading",
                      fontSize: "20px",
                      letterSpacing: "-0.8px",
                      lineHeight: "28px",
                      children: _v79[_v26 - 1]
                    }), (0, _v10.jsx)(_v30.Text, {
                      color: "text-secondary",
                      fontSize: "14px",
                      letterSpacing: "-0.42px",
                      lineHeight: "19.6px",
                      children: _v81[_v26 - 1]
                    })]
                  })]
                })
              }), (0, _v10.jsxs)(_v24.ModalBody, {
                px: {
                  base: "24px",
                  md: "32px"
                },
                py: "12px",
                children: [1 === _v26 ? (0, _v10.jsx)(_v67, {
                  ..._v47,
                  pricing: _v10
                }) : null, 2 === _v26 ? (0, _v10.jsx)(_v74, {
                  ..._v47
                }) : null, 3 === _v26 ? (0, _v10.jsx)(_v59, {
                  ..._v47
                }) : null]
              }), (0, _v10.jsxs)(_v27.ModalFooter, {
                borderColor: "rgba(26, 54, 93, 0.16)",
                borderTopWidth: "1px",
                justifyContent: "space-between",
                pb: {
                  base: "calc(24px + env(safe-area-inset-bottom))",
                  md: "24px"
                },
                pt: "19px",
                px: {
                  base: "24px",
                  md: "32px"
                },
                children: [(0, _v10.jsx)(_v21.Button, {
                  borderRadius: "12px",
                  color: "text-primary",
                  fontSize: "14px",
                  isDisabled: 1 === _v26,
                  onClick: () => _v27(_v26 - 1),
                  size: "lg",
                  variant: "tertiary",
                  children: (0, _v31.translate)({
                    singular: "Back",
                    dictionary: {
                      es: {
                        singular: "Atrás"
                      },
                      "de-DE": {
                        singular: "Zurück"
                      },
                      "fr-FR": {
                        singular: "Retour"
                      },
                      "ja-JP": {
                        singular: "戻る"
                      },
                      "ko-KR": {
                        singular: "뒤로"
                      },
                      "pt-BR": {
                        singular: "Voltar"
                      },
                      "zh-CN": {
                        singular: "返回"
                      }
                    }
                  })
                }), (0, _v10.jsx)(_v21.Button, {
                  borderRadius: "12px",
                  flex: {
                    base: "1",
                    md: "0 0 auto"
                  },
                  fontSize: "14px",
                  isDisabled: !_v39,
                  minW: {
                    base: "auto",
                    md: "150px"
                  },
                  onClick: () => {
                    if (_v39) {
                      if (_v26 < _v79.length) return void _v27(_v26 + 1);
                      _v44();
                    }
                  },
                  size: "lg",
                  variant: "primary",
                  children: _v26 === _v79.length ? (0, _v31.translate)({
                    singular: "Submit & claim my discount",
                    dictionary: {
                      es: {
                        singular: "Enviar & reclamar mi descuento"
                      },
                      "de-DE": {
                        singular: "Absenden & meinen Rabatt beanspruchen"
                      },
                      "fr-FR": {
                        singular: "Soumettre et obtenir ma remise"
                      },
                      "ja-JP": {
                        singular: "送信して割引を申請する"
                      },
                      "ko-KR": {
                        singular: "제출하고 할인 받기"
                      },
                      "pt-BR": {
                        singular: "Enviar & resgatar meu desconto"
                      },
                      "zh-CN": {
                        singular: "提交并领取我的折扣"
                      }
                    }
                  }) : (0, _v31.translate)({
                    singular: "Continue",
                    dictionary: {
                      es: {
                        singular: "Continuar"
                      },
                      "de-DE": {
                        singular: "Weiter"
                      },
                      "fr-FR": {
                        singular: "Continuer"
                      },
                      "ja-JP": {
                        singular: "次へ"
                      },
                      "ko-KR": {
                        singular: "계속"
                      },
                      "pt-BR": {
                        singular: "Continuar"
                      },
                      "zh-CN": {
                        singular: "继续"
                      }
                    }
                  })
                })]
              }), _v34 ? (0, _v10.jsx)(_v41, {
                onLeave: () => {
                  _v15({
                    surface: "application",
                    reason: "confirmed_leave"
                  }), _v7(), _v42();
                },
                onStay: () => {
                  _v12({
                    surface: "application",
                    action: "keep_applying"
                  }), _v35(!1);
                }
              }) : null]
            })
          })]
        }), (0, _v10.jsxs)(_v23.Modal, {
          closeOnEsc: !_v32 && !_v41,
          closeOnOverlayClick: !1,
          isCentered: !0,
          isOpen: _v5 && _v28,
          onClose: _v43,
          scrollBehavior: "inside",
          size: "lg",
          children: [(0, _v10.jsx)(_v29.ModalOverlay, {
            backdropFilter: {
              base: "none",
              md: "blur(5px)"
            },
            bg: {
              base: "rgba(14, 18, 22, 0.8)",
              md: "rgba(0, 0, 0, 0.8)"
            }
          }), (0, _v10.jsx)(_v22.LightMode, {
            children: (0, _v10.jsx)(_v26.ModalContent, {
              containerProps: {
                p: {
                  base: "16px",
                  md: "sm"
                }
              },
              "data-theme": "light",
              bg: "white",
              borderRadius: "20px",
              boxShadow: "0 4px 16px rgba(11, 26, 41, 0.12)",
              h: "auto",
              maxH: {
                base: "calc(100svh - 32px)",
                md: "calc(100svh - 48px)"
              },
              maxW: {
                base: "361px",
                md: "560px"
              },
              m: "0",
              overflow: "hidden",
              w: "100%",
              children: (0, _v10.jsx)(_v54, {
                flowId: _v1,
                isClaimDisabled: _v4,
                onClaim: _v45,
                onClose: _v43,
                onRetry: _v46,
                result: _v30?.outcome === "approved" ? _v30 : null,
                state: _v40
              })
            })
          })]
        })]
      });
    };
  var _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0);
  let _v91 = (0, _v84.rem)(20),
    _v92 = [{
      icon: (0, _v10.jsx)(_v89.Users, {
        "aria-hidden": "true",
        boxSize: _v91
      }),
      label: (0, _v31.translate)("10 seats included (up to 20)")
    }, {
      icon: (0, _v10.jsx)(_v87.Globe, {
        "aria-hidden": "true",
        boxSize: _v91
      }),
      label: (0, _v31.translate)({
        singular: "Unlimited public storage and bandwidth",
        dictionary: {
          es: {
            singular: "Almacenamiento y ancho de banda públicos ilimitados"
          },
          "de-DE": {
            singular: "Unbegrenzter öffentlicher Speicherplatz und Bandbreite"
          },
          "fr-FR": {
            singular: "Stockage public illimité et bande passante illimitée"
          },
          "ja-JP": {
            singular: "無制限の公開ストレージと帯域幅"
          },
          "ko-KR": {
            singular: "공개 저장 공간 및 대역폭 무제한"
          },
          "pt-BR": {
            singular: "Armazenamento público e largura de banda ilimitados"
          },
          "zh-CN": {
            singular: "无限公共存储和带宽"
          }
        }
      })
    }, {
      icon: (0, _v10.jsx)(_v86.Database, {
        "aria-hidden": "true",
        boxSize: _v91
      }),
      label: (0, _v31.translate)({
        singular: "7 TB managed storage",
        dictionary: {
          es: {
            singular: "7 TB de almacenamiento gestionado"
          },
          "de-DE": {
            singular: "7 TB verwalteter Speicher"
          },
          "fr-FR": {
            singular: "7 TB de stockage géré"
          },
          "ja-JP": {
            singular: "7 TB の管理済みストレージ"
          },
          "ko-KR": {
            singular: "7 TB 관리형 스토리지"
          },
          "pt-BR": {
            singular: "7 TB de armazenamento gerenciado"
          },
          "zh-CN": {
            singular: "7 TB 托管存储"
          }
        }
      })
    }, {
      icon: (0, _v10.jsx)(_v88.Speedometer, {
        "aria-hidden": "true",
        boxSize: _v91
      }),
      label: (0, _v31.translate)({
        singular: "2 TB/mo managed bandwidth",
        dictionary: {
          es: {
            singular: "2 TB/mes de ancho de banda gestionado"
          },
          "de-DE": {
            singular: "2 TB/Monat verwaltete Bandbreite"
          },
          "fr-FR": {
            singular: "2 TB/mo de bande passante gérée"
          },
          "ja-JP": {
            singular: "2 TB/月 の管理帯域幅"
          },
          "ko-KR": {
            singular: "2 TB/월 관리형 대역폭"
          },
          "pt-BR": {
            singular: "2 TB/mês de largura de banda gerenciada"
          },
          "zh-CN": {
            singular: "每月 2 TB 托管带宽"
          }
        }
      })
    }],
    _v93 = _v0 => (0, _v10.jsx)(_v83.Link, {
      href: "/terms",
      variant: "inline-secondary",
      children: _v0
    }, "terms"),
    _v94 = _v0 => (0, _v10.jsx)(_v83.Link, {
      href: "/privacy",
      variant: "inline-secondary",
      children: _v0
    }, "privacy"),
    _v95 = ({
      onClose: _v0
    }) => (0, _v10.jsxs)(_v10.Fragment, {
      children: [(0, _v10.jsx)(_v28.ModalHeader, {
        p: "0",
        pr: "40px",
        children: (0, _v10.jsx)(_v30.Text, {
          as: "h2",
          fontFamily: "heading",
          fontSize: "20px",
          letterSpacing: "-0.8px",
          children: (0, _v31.translate)("You're moving to Professional")
        })
      }), (0, _v10.jsx)(_v24.ModalBody, {
        p: "0",
        pt: "16px",
        children: (0, _v10.jsx)(_v30.Text, {
          color: "text-secondary",
          fontSize: "14px",
          letterSpacing: "-0.42px",
          lineHeight: "1.4",
          children: (0, _v31.translate)("We'll switch you to Professional at the end of your current billing period. You won't be charged today.")
        })
      }), (0, _v10.jsx)(_v27.ModalFooter, {
        mt: "24px",
        pb: "0",
        px: "0",
        children: (0, _v10.jsx)(_v21.Button, {
          onClick: _v0,
          size: "lg",
          width: "100%",
          children: (0, _v31.translate)({
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
    }),
    _v96 = ({
      discountPercent: _v0,
      isAutorenewOff: _v1,
      onClose: _v2,
      onConfirm: _v3,
      onManageAutorenew: _v4,
      pricing: _v5,
      renewalDate: _v6,
      status: _v7
    }) => (0, _v10.jsxs)(_v10.Fragment, {
      children: [(0, _v10.jsx)(_v16.Box, {
        left: "16px",
        position: "absolute",
        top: "16px",
        zIndex: 1,
        children: (0, _v10.jsx)(_v68.IconButton, {
          "aria-label": (0, _v31.translate)({
            singular: "Back",
            dictionary: {
              es: {
                singular: "Atrás"
              },
              "de-DE": {
                singular: "Zurück"
              },
              "fr-FR": {
                singular: "Retour"
              },
              "ja-JP": {
                singular: "戻る"
              },
              "ko-KR": {
                singular: "뒤로"
              },
              "pt-BR": {
                singular: "Voltar"
              },
              "zh-CN": {
                singular: "返回"
              }
            }
          }),
          icon: (0, _v10.jsx)(_v85.ChevronLeft, {
            boxSize: "24px"
          }),
          onClick: _v2,
          size: "sm",
          variant: "tertiary"
        })
      }), (0, _v10.jsx)(_v28.ModalHeader, {
        px: {
          base: "24px",
          md: "32px"
        },
        pb: "12px",
        pt: {
          base: "56px",
          md: "64px"
        },
        children: (0, _v10.jsx)(_v30.Text, {
          as: "h2",
          fontFamily: "heading",
          fontSize: "24px",
          letterSpacing: "-0.96px",
          lineHeight: "1.2",
          children: (0, _v31.translate)("Move to Professional?")
        })
      }), (0, _v10.jsx)(_v24.ModalBody, {
        px: {
          base: "24px",
          md: "32px"
        },
        py: "12px",
        children: (0, _v10.jsxs)(_v38.Flex, {
          direction: "column",
          gap: "20px",
          children: [(0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            fontSize: "14px",
            letterSpacing: "-0.42px",
            lineHeight: "1.4",
            children: null === _v6 ? (0, _v31.translate)("Your current plan stays active until your next renewal. Professional starts then, with no charge today.") : (0, _v31.translate)({
              singular: "Your current plan stays active until {DATE}. Professional starts at your next renewal, with no charge today.",
              replacements: {
                DATE: _v6
              }
            })
          }), null === _v5 ? (0, _v10.jsx)(_v64.Skeleton, {
            h: "48px",
            w: "220px"
          }) : (0, _v10.jsxs)(_v38.Flex, {
            align: "baseline",
            gap: "8px",
            wrap: "wrap",
            children: [(0, _v10.jsx)(_v30.Text, {
              fontFamily: "heading",
              fontSize: "36px",
              letterSpacing: "-1.44px",
              lineHeight: "1.2",
              children: _v5.indieMonthly
            }), (0, _v10.jsx)(_v30.Text, {
              color: "text-secondary",
              fontSize: "16px",
              letterSpacing: "-0.48px",
              textDecoration: "line-through",
              children: _v5.listMonthly
            }), (0, _v10.jsx)(_v16.Box, {
              bg: "fill-component",
              borderRadius: "full",
              px: "8px",
              py: "2px",
              children: (0, _v10.jsx)(_v30.Text, {
                fontSize: "12px",
                letterSpacing: "-0.24px",
                children: (0, _v31.translate)({
                  singular: "Save {PERCENT}%",
                  replacements: {
                    PERCENT: _v0
                  },
                  dictionary: {
                    es: {
                      singular: "Ahorre {PERCENT}%"
                    },
                    "de-DE": {
                      singular: "Sparen Sie {PERCENT}%"
                    },
                    "fr-FR": {
                      singular: "Économisez {PERCENT}%"
                    },
                    "ja-JP": {
                      singular: "{PERCENT}%節約"
                    },
                    "ko-KR": {
                      singular: "{PERCENT}% 절약"
                    },
                    "pt-BR": {
                      singular: "Economize {PERCENT}%"
                    },
                    "zh-CN": {
                      singular: "节省 {PERCENT}%"
                    }
                  }
                })
              })
            })]
          }), (0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            fontSize: "12px",
            letterSpacing: "-0.24px",
            lineHeight: "1.4",
            children: null === _v5 ? (0, _v31.translate)("Per month, billed annually plus taxes.") : (0, _v31.translate)({
              singular: "Per month, billed annually at {PRICE}/year plus taxes.",
              replacements: {
                PRICE: _v5.indieAnnual
              }
            })
          }), (0, _v10.jsx)(_v38.Flex, {
            direction: "column",
            gap: "12px",
            children: _v92.map(_v0 => (0, _v10.jsxs)(_v38.Flex, {
              align: "center",
              gap: "12px",
              children: [(0, _v10.jsx)(_v16.Box, {
                color: "text-primary",
                flexShrink: 0,
                children: _v0.icon
              }), (0, _v10.jsx)(_v30.Text, {
                fontSize: "14px",
                letterSpacing: "-0.42px",
                lineHeight: "1.4",
                children: _v0.label
              })]
            }, _v0.label))
          }), null === _v5 ? null : (0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            fontSize: "12px",
            letterSpacing: "-0.24px",
            lineHeight: "1.4",
            children: null === _v6 ? (0, _v31.translate)({
              singular: "Your Professional plan renews at {PRICE}/year. By moving to Professional, you agree to our {TERMS}Terms{/TERMS} and {PRIVACY}Privacy Policy{/PRIVACY}.",
              replacements: {
                PRICE: _v5.indieAnnual,
                TERMS: _v93,
                PRIVACY: _v94
              }
            }) : (0, _v31.translate)({
              singular: "Your Professional plan renews at {PRICE}/year on {DATE}, unless you cancel before then. By moving to Professional, you agree to our {TERMS}Terms{/TERMS} and {PRIVACY}Privacy Policy{/PRIVACY}.",
              replacements: {
                DATE: _v6,
                PRICE: _v5.indieAnnual,
                TERMS: _v93,
                PRIVACY: _v94
              }
            })
          })]
        })
      }), (0, _v10.jsxs)(_v27.ModalFooter, {
        alignItems: "stretch",
        flexDirection: "column",
        gap: "8px",
        pb: "24px",
        pt: "16px",
        px: {
          base: "24px",
          md: "32px"
        },
        children: [_v1 ? (0, _v10.jsxs)(_v30.Text, {
          color: "status-destructive-primary",
          fontSize: "13px",
          lineHeight: "1.4",
          children: [(0, _v31.translate)("Turn on auto-renew to change your plan."), " ", (0, _v10.jsx)(_v83.Link, {
            href: "/settings/billing/membership_plan",
            onClick: _v4,
            variant: "inline-secondary",
            children: (0, _v31.translate)("Manage auto-renew")
          })]
        }) : null, "error" === _v7 ? (0, _v10.jsx)(_v30.Text, {
          color: "status-destructive-primary",
          fontSize: "13px",
          lineHeight: "1.4",
          children: (0, _v31.translate)("Something went wrong. We couldn't schedule your plan change. Try again.")
        }) : null, (0, _v10.jsx)(_v21.Button, {
          isDisabled: _v1,
          isLoading: "submitting" === _v7,
          onClick: _v3,
          size: "lg",
          width: "100%",
          children: (0, _v31.translate)("Move to Professional")
        }), (0, _v10.jsx)(_v21.Button, {
          onClick: _v2,
          size: "sm",
          variant: "tertiary",
          children: (0, _v31.translate)({
            singular: "No thanks",
            dictionary: {
              es: {
                singular: "No, gracias"
              },
              "de-DE": {
                singular: "Nein, danke"
              },
              "fr-FR": {
                singular: "Non merci"
              },
              "ja-JP": {
                singular: "いいえ、結構です"
              },
              "ko-KR": {
                singular: "괜찮습니다"
              },
              "pt-BR": {
                singular: "Não, obrigado"
              },
              "zh-CN": {
                singular: "不用，谢谢"
              }
            }
          })
        })]
      })]
    }),
    _v97 = ({
      billingPlanId: _v0,
      discountPercent: _v1,
      flowId: _v2,
      isOpen: _v3,
      membership: _v4,
      onClose: _v5,
      pricing: _v6
    }) => {
      let {
          baseUrl: _v7,
          jwt: _v8,
          locale: _v9,
          xVimeoPage: _v10
        } = (0, _v40.useGctlConfig)(),
        {
          trackActionClicked: _v11,
          trackFlowClosed: _v12,
          trackPlanChangeResult: _v13,
          trackPlanChangeSubmitted: _v14,
          trackStateDisplayed: _v15
        } = _v19(_v2),
        [_v16, _v17] = (0, _v15.useState)("idle"),
        _v18 = ((_v0, _v1) => {
          if (void 0 === _v0) return null;
          let _v2 = new Date(_v0);
          return Number.isNaN(_v2.getTime()) ? null : new Intl.DateTimeFormat(_v1 ?? "en", {
            month: "long",
            day: "numeric",
            year: "numeric"
          }).format(_v2);
        })(_v4.endDate, _v9),
        _v19 = !1 === _v4.hasAutorenew,
        _v20 = "success" === _v16;
      (0, _v32.usePicoEffect)(() => "submitting" !== _v16 && ("success" === _v16 ? void _v15({
        surface: "upgrade",
        state: "request_accepted"
      }) : "error" === _v16 ? void _v15({
        surface: "upgrade",
        state: "error"
      }) : void _v15({
        surface: "upgrade",
        state: _v19 ? "autorenew_off" : "confirmation"
      })), [_v19, _v16]);
      let _v21 = (0, _v15.useCallback)(() => {
          "submitting" !== _v16 && ("success" !== _v16 && _v12({
            surface: "upgrade",
            reason: "declined_upgrade"
          }), _v17("idle"), _v5());
        }, [_v5, _v16, _v12]),
        _v22 = (0, _v15.useCallback)(async () => {
          if (!_v19) {
            _v17("submitting"), _v14({
              targetBillingPlanId: _v0
            });
            try {
              await (0, _v90.putMeSubscriptionScheduledOrder)({
                where: {
                  subscriptionId: _v4.subscriptionId
                },
                variables: {
                  billingPlanId: _v0
                },
                baseUrl: _v7,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: _v8 ? `jwt ${_v8}` : "",
                  "Vimeo-Page": `${_v10}`,
                  "Accept-Language": _v9 ?? "en"
                }
              }), _v17("success"), _v13({
                result: "request_accepted",
                errorCategory: null
              });
            } catch {
              _v17("error"), _v13({
                result: "error",
                errorCategory: null
              });
            }
          }
        }, [_v0, _v7, _v19, _v8, _v9, _v4.subscriptionId, _v13, _v14, _v10]);
      return (0, _v10.jsxs)(_v23.Modal, {
        isOpen: _v3,
        onClose: _v21,
        size: "lg",
        children: [(0, _v10.jsx)(_v29.ModalOverlay, {}), (0, _v10.jsx)(_v22.LightMode, {
          children: (0, _v10.jsx)(_v26.ModalContent, {
            bg: "white",
            "data-theme": "light",
            maxW: {
              base: "100vw",
              md: "560px"
            },
            p: _v20 ? {
              base: "24px",
              md: "32px"
            } : void 0,
            children: _v20 ? (0, _v10.jsx)(_v95, {
              onClose: _v21
            }) : (0, _v10.jsx)(_v96, {
              discountPercent: _v1,
              isAutorenewOff: _v19,
              onClose: _v21,
              onConfirm: () => void _v22(),
              onManageAutorenew: () => _v11({
                surface: "upgrade",
                action: "manage_autorenew"
              }),
              pricing: _v6,
              renewalDate: _v18,
              status: _v16
            })
          })
        })]
      });
    };
  var _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0);
  let _v102 = ({
      flowId: _v0,
      isOpen: _v1,
      onClose: _v2,
      pricing: _v3
    }) => {
      let {
          canRedeem: _v4,
          hasActivePsSub: _v5,
          hasIndieScheduledChange: _v6,
          isClaimContextError: _v7,
          isClaimContextLoading: _v8,
          revalidate: _v9,
          subscription: _v10
        } = (() => {
          var _v0;
          let _v1,
            _v2 = (0, _v20.useViewer)(),
            _v3 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
            _v4 = !!_v2?.user,
            {
              data: _v5,
              error: _v6,
              isLoading: _v7,
              mutate: _v8
            } = (0, _v98.useGetMeCapabilities)(() => _v4 ? {
              select: ["usePaymentsService"]
            } : null),
            {
              data: _v9,
              error: _v10,
              isLoading: _v11,
              mutate: _v12
            } = (0, _v100.useGetUserSettingsBillingMembership)(() => null == _v3 ? null : {
              select: ["subscriptionId", "vendor", "endDate", "hasAutorenew"],
              where: {
                userId: _v3
              }
            }),
            _v13 = _v9?.subscriptionId,
            _v14 = "" === _v13 ? void 0 : _v13,
            {
              data: _v15,
              error: _v16,
              isLoading: _v17,
              mutate: _v18
            } = (0, _v99.useGetMeSubscriptionScheduledOrder)(() => null == _v14 ? null : {
              select: ["billingPlanId", "renewalDate"],
              where: {
                subscriptionId: _v14
              }
            }),
            {
              canRedeem: _v19,
              hasActivePsSub: _v20
            } = (_v0 = _v5?.usePaymentsService, {
              canRedeem: (_v1 = !!_v9?.subscriptionId && _v9?.vendor === "juno") || !0 === _v0,
              hasActivePsSub: _v1
            }),
            _v21 = (0, _v15.useCallback)(() => {
              _v12(), _v8(), _v18();
            }, [_v8, _v12, _v18]);
          return {
            canRedeem: _v19,
            hasActivePsSub: _v20,
            hasIndieScheduledChange: _v15?.billingPlanId === _v101.INDIE_PROGRAM_BILLING_PLAN_ID,
            isClaimContextError: !!(_v10 ?? _v6 ?? _v16),
            isClaimContextLoading: _v11 || _v7 || _v17,
            subscription: null == _v14 ? null : {
              subscriptionId: _v14,
              endDate: _v9?.endDate,
              hasAutorenew: _v9?.hasAutorenew
            },
            revalidate: _v21
          };
        })(),
        {
          trackStateDisplayed: _v11
        } = _v19(_v0),
        [_v12, _v13] = (0, _v15.useState)(null),
        [_v14, _v15] = (0, _v15.useState)(!1),
        [, _v16] = (0, _v35.default)(_v37.SELECTED_BILLING_PLAN_ID_STORAGE_KEY, void 0);
      (0, _v32.usePicoEffect)(() => {
        if (!_v14) return !1;
        _v11({
          surface: "scheduled_change",
          state: "already_scheduled"
        });
      }, [_v14]);
      let _v17 = (0, _v15.useCallback)(_v0 => {
          _v16(_v0.billingPlanId), window.location.assign((0, _v36.buildCheckoutUrl)({
            ..._v33.INDIE_PAYWALL,
            tier: "professional",
            paywallTrigger: "indie_program_claim_offer"
          }, {
            indie_offer: "1"
          }));
        }, [_v16]),
        _v18 = (0, _v15.useCallback)(() => {
          _v15(!1), _v2();
        }, [_v2]),
        _v19 = (0, _v15.useCallback)(_v0 => {
          if (_v18(), _v6) {
            _v15(!0), window.setTimeout(() => _v15(!1), 0);
            return;
          }
          _v13({
            billingPlanId: _v0.billingPlanId,
            discountPercent: _v0.discountPercent
          });
        }, [_v18, _v6]),
        _v20 = (0, _v15.useCallback)(() => _v13(null), []),
        _v21 = null !== _v12 && null !== _v10 ? {
          billingPlanId: _v12.billingPlanId,
          discountPercent: _v12.discountPercent,
          membership: _v10
        } : null;
      return (0, _v10.jsxs)(_v10.Fragment, {
        children: [_v14 && !_v1 ? (0, _v10.jsx)(_v22.LightMode, {
          children: (0, _v10.jsx)(_v16.Box, {
            bg: "white",
            borderRadius: "12px",
            bottom: "24px",
            boxShadow: "0 4px 16px rgba(11, 26, 41, 0.12)",
            color: "text-primary",
            "data-theme": "light",
            left: "50%",
            p: "16px 24px",
            position: "fixed",
            role: "status",
            transform: "translateX(-50%)",
            zIndex: 2,
            children: (0, _v10.jsx)(_v30.Text, {
              fontSize: "14px",
              children: (0, _v31.translate)("You already have a scheduled plan change")
            })
          })
        }) : null, (0, _v10.jsx)(_v82, {
          canRedeem: _v4,
          flowId: _v0,
          hasActivePsSub: _v5,
          isClaimContextError: _v7,
          isClaimContextLoading: _v8,
          isOpen: _v1,
          onCheckout: _v17,
          onClose: _v18,
          onRetryClaimContext: _v9,
          onUpgrade: _v19,
          pricing: _v3
        }), null === _v21 ? null : (0, _v10.jsx)(_v97, {
          ..._v21,
          flowId: _v0,
          isOpen: !0,
          onClose: _v20,
          pricing: _v3
        })]
      });
    },
    _v103 = _v0 => (0, _v10.jsx)(_v16.Box, {
      w: "100%",
      maxW: "1440px",
      mx: "auto",
      px: {
        base: 6,
        md: "80px"
      },
      ..._v0
    });
  var _v104 = _v0.i(0),
    _v105 = _v0.i(0);
  let _v106 = "transform 350ms cubic-bezier(.33, 0, .25, 1)",
    _v107 = {
      primary: {
        bg: "fill-brand",
        fill: "vimeoBlue.600",
        ink: "black",
        glow: "drop-shadow(0 0 20px var(--vimeo-colors-vimeoBlueAlpha-500))"
      },
      secondary: {
        bg: "gray.350",
        fill: "gray.450",
        ink: "black",
        glow: void 0
      }
    },
    _v108 = {
      hero: {
        arrow: "26px",
        fontSize: "18px",
        gap: "20px",
        glow: !0,
        glyph: 13,
        height: "60px",
        width: {
          base: "100%",
          md: "320px"
        }
      },
      closing: {
        arrow: "20px",
        fontSize: "16px",
        gap: "20px",
        glow: !1,
        glyph: 10,
        height: "52px",
        width: "auto"
      },
      compact: {
        arrow: "22px",
        fontSize: "15px",
        gap: "12px",
        glow: !1,
        glyph: 11,
        height: "48px",
        width: "auto"
      }
    },
    _v109 = _v0 => `${1.5 * _v0}px`,
    _v110 = ({
      children: _v0,
      href: _v1,
      onClick: _v2,
      size: _v3,
      tone: _v4
    }) => {
      let {
          bg: _v5,
          fill: _v6,
          ink: _v7,
          glow: _v8
        } = _v107[_v4],
        _v9 = _v108[_v3];
      return (0, _v10.jsxs)(_v21.Button, {
        alignItems: "center",
        as: void 0 === _v1 ? void 0 : _v104.default,
        borderRadius: "12px",
        display: "inline-flex",
        filter: _v9.glow ? _v8 : void 0,
        fontFamily: "heading",
        fontSize: _v9.fontSize,
        gap: _v9.gap,
        h: _v9.height,
        href: _v1,
        justifyContent: "center",
        letterSpacing: "-0.4px",
        onClick: _v2,
        overflow: "hidden",
        position: "relative",
        px: "17px",
        sx: {
          bgColor: _v5,
          color: _v7,
          isolation: "isolate",
          "& svg": {
            height: _v109(_v9.glyph),
            width: _v109(_v9.glyph)
          },
          _active: {
            bgColor: _v5
          },
          _after: {
            bgColor: _v6,
            borderRadius: "inherit",
            content: '""',
            inset: 0,
            pointerEvents: "none",
            position: "absolute",
            transform: "translateX(100%)",
            transition: _v106,
            zIndex: 0
          },
          _hover: {
            bgColor: _v5,
            "& .indie-cta-arrows": {
              transform: "translateX(-50%)"
            },
            "&::after": {
              transform: "translateX(0)"
            }
          }
        },
        variant: "brand",
        w: _v9.width,
        children: [(0, _v10.jsx)(_v16.Box, {
          as: "span",
          zIndex: 1,
          children: _v0
        }), (0, _v10.jsx)(_v16.Box, {
          "aria-hidden": !0,
          flexShrink: 0,
          h: _v9.arrow,
          overflow: "hidden",
          w: _v9.arrow,
          zIndex: 1,
          children: (0, _v10.jsxs)(_v16.Box, {
            className: "indie-cta-arrows",
            display: "flex",
            h: "100%",
            transition: _v106,
            w: "200%",
            children: [(0, _v10.jsx)(_v16.Box, {
              alignItems: "center",
              display: "flex",
              flex: "0 0 50%",
              justifyContent: "center",
              minW: "0",
              children: (0, _v10.jsx)(_v105.ArrowRight, {})
            }), (0, _v10.jsx)(_v16.Box, {
              alignItems: "center",
              display: "flex",
              flex: "0 0 50%",
              justifyContent: "center",
              minW: "0",
              children: (0, _v10.jsx)(_v105.ArrowRight, {})
            })]
          })
        })]
      });
    },
    _v111 = ({
      onClaim: _v0
    }) => (0, _v10.jsx)(_v16.Box, {
      as: "section",
      bg: "background",
      pb: {
        base: "xl",
        md: "32px"
      },
      pt: {
        base: "3xl",
        md: "80px"
      },
      children: (0, _v10.jsx)(_v103, {
        children: (0, _v10.jsxs)(_v38.Flex, {
          align: "center",
          bg: "black",
          borderRadius: "lg",
          direction: "column",
          px: {
            base: "lg",
            md: "3xl"
          },
          py: {
            base: "2xl",
            md: "1200"
          },
          textAlign: "center",
          children: [(0, _v10.jsx)(_v30.Text, {
            as: "h2",
            maxW: "750px",
            variant: {
              base: "heading-xl",
              md: "heading-3xl"
            },
            children: (0, _v31.translate)({
              singular: "The next film is yours to make.",
              dictionary: {
                es: {
                  singular: "La próxima película es tuya para hacerla."
                },
                "de-DE": {
                  singular: "Der nächste Film liegt bei Ihnen."
                },
                "fr-FR": {
                  singular: "Le prochain film est à vous de réaliser."
                },
                "ja-JP": {
                  singular: "次の作品はあなたのものです。"
                },
                "ko-KR": {
                  singular: "다음 영화는 당신의 것입니다."
                },
                "pt-BR": {
                  singular: "O próximo filme é seu para fazer."
                },
                "zh-CN": {
                  singular: "下一部影片由您来创作。"
                }
              }
            })
          }), (0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            mt: "md",
            variant: {
              base: "body-lg",
              md: "body-xl"
            },
            children: (0, _v31.translate)({
              singular: "Claim your indie discount and get back to what matters: the work.",
              dictionary: {
                es: {
                  singular: "Reclama tu descuento indie y vuelve a lo que importa: el trabajo."
                },
                "de-DE": {
                  singular: "Beanspruchen Sie Ihren Indie‑Rabatt und widmen Sie sich wieder dem, was zählt: der Arbeit."
                },
                "fr-FR": {
                  singular: "Obtenez votre remise Indie et revenez à l'essentiel: le travail."
                },
                "ja-JP": {
                  singular: "インディ割引を申請して、本当に大切なこと——作品制作に戻りましょう。"
                },
                "ko-KR": {
                  singular: "indie 할인을 수령하고 중요한 일, 즉 제작에 집중하세요."
                },
                "pt-BR": {
                  singular: "Resgate seu desconto indie e volte ao que importa: o trabalho."
                },
                "zh-CN": {
                  singular: "领取您的 Indie Program 折扣，回到重要的事情上：创作本身。"
                }
              }
            })
          }), (0, _v10.jsx)(_v16.Box, {
            mt: "2xl",
            children: (0, _v10.jsx)(_v110, {
              onClick: _v0,
              size: "closing",
              tone: "primary",
              children: (0, _v31.translate)({
                singular: "Claim your indie discount",
                dictionary: {
                  es: {
                    singular: "Reclama tu descuento indie"
                  },
                  "de-DE": {
                    singular: "Beanspruchen Sie Ihren Indie‑Rabatt"
                  },
                  "fr-FR": {
                    singular: "Obtenez votre remise Indie"
                  },
                  "ja-JP": {
                    singular: "インディ割引を申請する"
                  },
                  "ko-KR": {
                    singular: "indie 할인 수령"
                  },
                  "pt-BR": {
                    singular: "Resgatar seu desconto indie"
                  },
                  "zh-CN": {
                    singular: "领取您的 Indie Program 折扣"
                  }
                }
              })
            })
          }), (0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            fontSize: "13px",
            letterSpacing: "-0.4px",
            lineHeight: "21.48px",
            mt: "md",
            children: (0, _v31.translate)({
              singular: "Limited spots available",
              dictionary: {
                es: {
                  singular: "Plazas limitadas disponibles"
                },
                "de-DE": {
                  singular: "Begrenzte Plätze verfügbar"
                },
                "fr-FR": {
                  singular: "Places limitées"
                },
                "ja-JP": {
                  singular: "枠に限りがあります"
                },
                "ko-KR": {
                  singular: "한정된 자리만 제공됩니다"
                },
                "pt-BR": {
                  singular: "Vagas limitadas"
                },
                "zh-CN": {
                  singular: "名额有限"
                }
              }
            })
          })]
        })
      })
    });
  var _v112 = _v0.i(0),
    _v113 = _v0.i(0);
  function _v114() {
    return (_v114 = Object.assign.bind()).apply(null, arguments);
  }
  let _v115 = function (_v0) {
      return _v15.createElement("svg", _v114({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 400 400"
      }, _v0), _v6 || (_v6 = _v15.createElement("circle", {
        cx: 200,
        cy: 200,
        r: 200
      })), _v7 || (_v7 = _v15.createElement("path", {
        d: "M123.2 51.8l10-11.2-15.2 1.6-10 11.2zm168.4 1.6l-10-11.2-14.8-1.6 10 11.2zM114 173.2V190h10.4v-30.8H110c-4.4 0-8-3.6-8-8v-36.4c0-4.4 3.2-8 7.6-8h19.2c4.4 0 8 3.2 8.4 7.6v20.4h-12.4v-16h-10.4v28h14.4c4.4 0 8 3.6 8.4 8v40c0 4.4-3.6 8-8.4 8H110c-4.4 0-8-3.6-8-8V174h12v-.8zm40.4-54.4h-10.8v-12.4h34v12.4h-10.8v83.6h-12.4v-83.6zm52.8 64.8h-13.6l-2 18.8h-12.4l10-95.6h22l10 95.6h-12l-2-18.8zm-12-12.4H206l-5.6-52.4-5.2 52.4zm33.6 31.2v-96h30.8v12.4h-18.4v26.4H254v12.4h-12.8v44.8h-12.4zm39.2 0v-96h30.8v12.4h-18.4v26.4h12.8v12.4h-12.8v44.8H268zm-140 12h26.8c4.4 0 8 3.6 8 8v36c0 4.4-3.6 8-8 8H140V310h-12v-95.6zm22.8 12.4H140v27.6h10.4l.4-27.6zm20.4-12.4h12.4V310h-12.4v-95.6zm45.6 28.8v-16.4h-10.4V298h10.4v-16.4h12.4v20.8c0 4.4-3.6 8-8.4 8H202c-4.4 0-8-3.6-8-8v-79.6c.4-4.4 3.6-7.6 8-8h18.8c4.4 0 8 3.6 8.4 8v20.4h-12.4zm34-28.8v36l9.6-36h12.8L260 258.8l14.8 51.2H262l-11.2-42v42h-12.4v-95.6h12.4zm21.7 135.5c-.9 2.1-1.9 4.2-2.6 5.6l.7-.3c.4-.2.9-.4 1.5-.7 1-.4 2.1-.9 3.1-1.5l5.9-3c.2-.1.3-.2.4-.2.3-.8 1.5-4 2.5-7l.9-2.6.9-3.2-.6.4c-.8.5-1.9 1.2-3 1.8l-1.2.7c-.6.3-1.1.6-1.7 1-.9.5-1.8 1-2.5 1.4l-1.8.9c-.1.6-1.2 3.7-2.5 6.7zm12.5 11.8l2-1c.8-.5 1.9-1.1 3-1.7.6-.3 1.1-.7 1.7-1l1.2-.7c1.3-.7 2.5-1.4 3.4-2.1l.8-.5-3.4-.4-2.9-.4c-3.4-.5-6.7-1.1-7.5-1.3-.1.1-.2.1-.4.2l-6.1 3.1c-1.1.6-2.2 1.1-3.2 1.5-.5.2-1 .4-1.4.7l-.7.3c1.4.4 3.8 1 6.1 1.6 3.1.9 6.5 1.6 7.4 1.7zm6.2-28.3c-.5.4-1 .7-1.3.9l-.3.2c-.2.8-1.1 3.9-2 7.1-.4 1.4-.9 2.7-1.3 3.9l-.7 2 2.7-1.6c.5-.3.9-.6 1.4-.9.3-.2.6-.4.8-.5l4.3-2.7c.6-.4 1-.7 1.4-.9l.4-.3c.2-.8 1.1-4.1 1.8-7.2.3-1.3.6-2.7.8-3.9.1-.4.1-.8.2-1.2l.2-.9-2.3 1.8c-.4.3-.9.6-1.3.9-.3.2-.5.4-.8.6l-4 2.7zm10 18.7l.4-.3c.4-.2.9-.6 1.5-1l4.4-3.1.9-.6c.5-.4 1-.7 1.5-1.1l2.7-2.1h-2.2c-1.3 0-2.7 0-4.2-.1-3.4-.2-6.8-.5-7.6-.5l-.4.3c-.5.3-.9.7-1.4 1l-4.3 2.8c-.3.2-.6.4-.8.5-.5.3-1 .7-1.5.9l-2.8 1.6.9.2c.4.1.8.1 1.2.2 1.3.2 2.7.5 4.1.6 3.3.3 6.8.6 7.6.7zm-33.2-5.5c-.6.3-1.2.5-1.7.8-.5.2-.9.4-1.4.6-1.1.5-2.1 1-3 1.3l-1.9.7-1.5 2.9c-.6 1.1-1.2 2.4-2 3.6-1.1 2-2.3 4-3.1 5.3l5.5-1.9 6.6-2.6c.2-.3.5-1 1-2 .6-1.3 1.4-3 2.2-4.8 1-2.1 1.9-4.2 2.4-5.5l-.6.3c-.6.5-1.5.9-2.5 1.3zm5.4 20.7c.5-.2 1-.5 1.5-.7.6-.3 1.2-.6 1.8-.8 1.1-.5 2.2-1 3.1-1.4l.8-.4c-1.5-.3-3.9-.9-6.3-1.5-1.9-.5-3.8-1-5.2-1.4-1-.3-1.8-.5-2.2-.6l-6.8 2.7-5.7 1.9c1.4.5 3.6 1.4 5.9 2.2 1.4.5 2.8 1 4 1.3.4.1.8.2 1.2.4l2.2.7 2.1-.8c1.1-.5 2.3-1 3.6-1.6zm-166.3-10l1.2.7c.6.3 1.2.7 1.7 1 1.1.6 2.1 1.2 3 1.7l2 1c.8-.2 4.3-.8 7.6-1.6 2.4-.6 4.7-1.2 6.1-1.6l-.7-.3c-.4-.2-.9-.4-1.5-.7-1-.4-2.1-.9-3.2-1.5l-6.1-3.1c-.2-.1-.3-.2-.4-.2-.8.2-4.1.8-7.5 1.3l-2.9.4-3.5.4.7.5c1 .6 2.2 1.3 3.5 2zm17.7-14.2l-1.7-.9c-.7-.4-1.6-.9-2.5-1.4-.5-.3-1.1-.6-1.7-1l-1.2-.7c-1.1-.6-2.2-1.2-3-1.8l-.6-.4.9 3.2.9 2.6c1 3.1 2.2 6.2 2.5 7 .1 0 .2.1.4.2l6 3.1c1 .6 2.1 1 3.1 1.5.5.2 1 .5 1.5.7l.7.3c-.6-1.3-1.6-3.5-2.6-5.6-1.3-3-2.4-6.1-2.7-6.8zm-27.9 7.8c.6.4 1.1.8 1.5 1l.4.3c.8-.1 4.4-.4 7.7-.8 1.4-.2 2.9-.4 4.1-.6.4-.1.8-.1 1.2-.2l.9-.2-2.8-1.6-1.5-.9c-.3-.2-.5-.4-.8-.5l-4.3-2.8c-.6-.4-1.1-.7-1.4-1l-.4-.2c-.8.1-4.2.3-7.7.5-1.5.1-2.9.1-4.2.1h-2.2l2.7 2.1c.5.4 1 .7 1.5 1.1l.9.6 4.4 3.1zm15.5-9.3c-.9-3.1-1.8-6.2-2-7.1l-.3-.2c-.3-.2-.8-.5-1.3-.9l-3.9-2.8c-.3-.2-.5-.4-.8-.5-.5-.3-.9-.6-1.3-1l-2.3-1.8.2.9c.1.3.1.7.2 1.2.2 1.2.5 2.6.8 3.9.7 3.1 1.6 6.4 1.8 7.2l.4.2c.3.2.8.6 1.4.9l4.3 2.7c.3.2.6.4.8.5.5.3 1 .6 1.4.9l2.7 1.6-.7-2c-.5-1-1-2.3-1.4-3.7zm27.2 25.6c2.3-.8 4.5-1.7 5.9-2.2l-5.6-1.9-6.8-2.7c-.3.1-1.1.4-2.2.6-1.4.4-3.3.9-5.2 1.4-2.4.6-4.7 1.2-6.3 1.5l.8.4c.9.4 1.9.9 3.1 1.4.6.3 1.2.5 1.8.8.5.2 1 .5 1.5.7 1.3.6 2.4 1.1 3.4 1.5l2.1.8 2.2-.7c.4-.1.7-.2 1.1-.4 1.4-.2 2.8-.6 4.2-1.2zm1.4-7.2l5.5 1.9c-.8-1.3-2-3.3-3.1-5.3-.7-1.2-1.4-2.5-2-3.6l-1.4-3-1.8-.7c-.9-.3-1.9-.8-3-1.3-.5-.2-.9-.4-1.4-.6-.6-.3-1.2-.5-1.8-.8-1-.4-1.9-.8-2.6-1.2l-.6-.3c.5 1.3 1.4 3.5 2.4 5.5.8 1.7 1.6 3.5 2.2 4.8.4 1 .8 1.6 1 2l6.6 2.6zm227.9-186.4l-.3-2.1-3.9-3.3-1.8-1.4c-1.9-1.4-3.7-2.8-4.9-3.6l1.2 5.4c.2 1.1.4 2.2.6 3.2.1.5.2 1 .2 1.5l.3 1.9 3.5 2.9c.5.4 1 .9 1.5 1.3l.6.5c1.7 1.6 3.4 3.2 4.4 4.3l-.5-5.8c-.1-1.2-.3-2.3-.5-3.4-.2-.4-.3-.9-.4-1.4zm10.9-8.9l-1.3-6.1c-.7 1.4-1.8 3.6-2.8 5.7l-1.3 2.5-2.4 4.2.3 2.1c.1.5.2 1 .2 1.6.2 1.1.4 2.3.5 3.5l.6 5.9c.8-1.2 2.2-3.2 3.5-5.2l.5-.7c.4-.6.8-1.2 1.1-1.8l2.4-4.2-.3-2.2c-.1-.5-.2-1.1-.3-1.7-.2-1.1-.4-2.3-.7-3.6zm-14.9-10.4c-.7-.5-3.5-2.3-6.2-4.1-1.2-.7-2.4-1.4-3.5-2-.4-.2-.7-.4-1-.6l-.8-.4 1 2.8c.2.5.3 1 .5 1.6.1.3.2.6.2.9l1.8 6.5c.3.2 1 .6 1.8 1.2 1.1.8 2.6 1.9 4.2 3 1.5 1.1 3.1 2.3 4.2 3.2.3.2.5.4.7.6l-1.2-5.7c-.1-.5-.2-1.1-.3-1.6-.3-1.2-.5-2.4-.8-3.3l-.6-2.1zm3.2-.9l.6 2c.3.9.6 2.2.8 3.4.1.5.2 1.1.3 1.6l1.3 5.8c.1-.2.3-.5.4-.8.7-1.3 1.6-3 2.5-4.8.9-1.8 1.8-3.6 2.4-4.9.5-1 .8-1.8 1-2.1l-2.1-7.4c-.1-.3-.2-.7-.3-1-.2-.6-.3-1.2-.5-1.7l-1.1-3.2-.3.9c-.1.4-.3.8-.4 1.2-.4 1.2-.9 2.5-1.5 3.9-1.4 3.3-2.8 6.4-3.1 7.1zm-8.5-15.4l-.2-.4c-.7-.4-3.8-2-6.7-3.4l-.9-.4c-1.4-.7-2.7-1.3-3.7-1.7l-.8-.3.3.6 3.7 8.8.7 1.9c.7.4 3.6 1.9 6.4 3.6l2.4 1.4 2.8 1.8-.2-.8c-.2-1-.6-2.1-1.1-3.3-.2-.5-.3-1-.5-1.5l-1.9-5.5c-.1-.3-.2-.6-.3-.8zm7.1-14.4l-.4-.8-.2.9c-.3 1.2-.7 2.7-1.2 4.4l-.3 1c-.9 3.3-2 6.5-2.2 7.3l.2.4.3.9 1.9 5.5c.2.5.3 1 .5 1.5.4 1.3.9 2.4 1.1 3.4l.2.7 1.4-3.2 1-2.7c1.2-3.2 2.3-6.5 2.6-7.3l-.8-2.1-4.1-9.9zm-16.6-2.9c-1.3-.5-3.1-1.2-4.9-1.8-2.2-.8-4.4-1.5-5.7-2l3.2 5.6c.3.5.5.9.8 1.4l1.8 3.8 3 1.2c1.1.5 2.5 1 3.8 1.7 2.1 1 4.2 2 5.5 2.7l-.3-.7c-.2-.4-.4-.9-.6-1.5-.4-1-.9-2.1-1.4-3.2l-3.2-6.4-2-.8zm12-6.6c-.3-.5-.6-1.1-.9-1.6l-3.6-6.4c-.2 1.5-.6 4-1 6.3-.3 2-.7 3.9-1 5.3l-.5 2.2 3.2 6.5c.5 1.1 1 2.3 1.4 3.3l.6 1.5.3.7c.4-1.4 1.1-3.7 1.8-6.1.4-1.4.7-2.8 1-4.1l.8-3.4-2.1-4.2zm-17.7-6.1l-1.1-1.8-2.9-.9c-1.3-.4-2.7-.8-4.2-1.1-2.3-.5-4.6-1-6-1.3l3.3 4.4 3.7 5.7c.8.2 4 1.1 7 2.2 2.2.7 4.4 1.6 5.8 2.1l-2.9-5.1c-.6-1.2-1.3-2.3-2-3.3-.3-.2-.5-.5-.7-.9zm6.4-12.5l-3.7-5c-.1 1.5-.1 4-.3 6.4-.1 1.6-.2 3.3-.4 4.6l-.3 3.1 1.2 1.8c.2.3.4.7.7 1 .7 1 1.4 2.1 2.1 3.4l2.9 5.2c.3-1.5.7-3.8 1.1-6.2.6-3.4.9-6.9 1-7.7l-4.3-6.6zM332.9 92c-.8-.2-4.1-.7-7.3-1.2-1.3-.2-2.7-.4-3.9-.5-.5 0-.9-.1-1.3-.1l-.9-.1 2 2.1c.4.4.7.8 1.1 1.3l4.9 5.9 2.1.4c1.4.3 3.2.7 5.1 1.1 1.9.4 3.7.9 5.2 1.2.3.1.6.2.9.2-.1-.2-.3-.4-.4-.6l-3-4.1c-.4-.5-.8-1.1-1.2-1.6-.7-.9-1.3-1.8-1.9-2.4l-1.4-1.6zm5.7-12.2c-.4-.5-.8-1-1.2-1.4l-2.3-2.5.1.9c0 .4.1.9.1 1.4.1 1.2.2 2.6.2 4.1.1 3.4.1 6.8.1 7.7l1.4 1.6c.6.7 1.2 1.6 1.9 2.5.4.5.8 1.1 1.2 1.6l3 4.1c.2.2.3.5.5.7 0-.3.1-.6.1-.9.1-1.4.2-3.4.3-5.3.1-2 .2-4 .2-5.5l.1-2.3-5.7-6.7zm-23.4 5.6l1.4 1.5c.8.1 4 .3 7.3.7l.8.1 2.1.3 3.3.5-.5-.6c-.7-.9-1.7-2-2.8-3.1l-5.4-5.8c-.8-.1-4.2-.3-7.5-.4h-1.2c-1.4-.1-2.8-.1-3.9-.1h-.9l.5.4 6.8 6.5zm7.1-22.3l-.7-.6.2.9c.2 1.2.4 2.7.6 4.3l.2 1.2c.5 3.4.8 6.7.9 7.6l.8.8 4.8 5.1c1.1 1.2 2.1 2.3 2.9 3.3l.5.6v-3.4c0-.7-.1-1.3-.1-2v-.8c-.2-3.4-.5-6.9-.6-7.7l-1.6-1.7-7.9-7.6zm-21.2 9.7l3.2 2.7 3.1-.1h4.3c2.3.1 4.6.2 6.1.3l-.6-.5c-.3-.3-.7-.7-1.2-1.1-.8-.7-1.6-1.6-2.5-2.3l-5.5-4.6h-2.2c-1.4.1-3.4.2-5.3.3-2.3.2-4.6.4-6 .5l6.6 4.8zm13-16.6l-7.1-5.4c.4 1.5 1 3.9 1.6 6.2.5 1.9.9 3.8 1.2 5.2l.4 2.2 5.5 4.7c.9.8 1.8 1.7 2.6 2.4.4.4.8.8 1.2 1.1l.6.6c-.2-1.5-.5-3.9-.8-6.3-.2-1.5-.5-3-.8-4.3l-.6-3.3-3.8-3.1zm51.1 187.3c.3-.9.5-1.7.5-2-.4-.8-1.9-3.8-3.5-6.6-.8-1.6-1.8-3.1-2.6-4.5l-.5-.8-.1.7c-.2 1.3-.6 2.9-1 4.7l-1.1 4.6c-.2.9-.4 1.6-.5 1.9.4.8 1.8 3.6 3.2 6.6.6 1.4 1.2 2.8 1.7 4l.7 1.7.5-1.5c.4-1.2.9-2.6 1.3-4.1l1.4-4.7zm14.7-10l-.7.6c-1.2 1.1-2.7 2.3-4.2 3.5-2.7 2.1-5.4 4.1-6.1 4.7-.1.3-.3 1.1-.6 2.1l-1.4 4.9c-.4 1.5-.9 3-1.3 4.2l-.5 1.5 1.6-1c1.1-.7 2.5-1.5 3.8-2.4 2.8-1.9 5.6-4 6.3-4.5.1-.3.3-1.1.6-2.2l1.2-5.3c.4-1.8.9-3.8 1.1-5.3l.2-.8zm-11-7.2c.1-.7.2-1.2.2-1.6l.1-.4c-.5-.7-2.3-3.5-4.1-6.2-.8-1.2-1.6-2.3-2.4-3.3l-1.2-1.5-.2 2.9-.9 7.3c-.1.5-.1 1-.2 1.6l-.1.4c.5.7 2.2 3.4 3.8 6.3.8 1.3 1.4 2.5 2 3.6l.9 1.8.7-3.1 1.4-7.8zm9.1-6.9c-2.5 2.4-4.9 4.7-5.6 5.3l-.1.4c-.1.5-.1 1-.3 1.7l-1.4 7.7-.7 3.1 1.6-1.2c1-.8 2.2-1.7 3.3-2.7 2.6-2.2 5.2-4.6 5.9-5.1l.1-.5c.1-.6.2-1.2.3-1.7l1-8.3.3-3.4-1.4 1.5c-.8 1.1-1.9 2.2-3 3.2zm-7.3-10.6c0-.4 0-.8.1-1.2v-.9c-.5-.7-2.6-3.3-4.7-5.8-.8-1-1.8-2-2.6-2.9l-.9-.9-.6-.6.1 2.9-.2 7.4c0 .9-.1 1.6-.1 2 .5.7 2.5 3.2 4.4 5.8 1.2 1.6 2.3 3.2 3 4.3l.5.8.1-.8c.2-1.4.4-3.3.5-5l.4-5.1zm12.5-9.5l-.1-3.4-.5.7c-.3.3-.5.7-.8 1.1-.7 1-1.6 2.1-2.6 3.2-2.2 2.6-4.4 5.2-5 5.8v.9c0 .4 0 .8-.1 1.3l-.4 5.1a63 63 0 01-.5 5.1l-.2.9.7-.6c1.2-1.1 2.6-2.4 3.8-3.8 2.4-2.5 4.8-5.1 5.3-5.7 0-.3.1-1.2.1-2.2l.3-8.4zM370.6 189l-.3-.3-1.3-1.2c-1-1-2.4-2.4-3.8-3.7-1.4-1.3-2.7-2.6-3.8-3.5l-.6-.6c0 .2 0 .5.1.8l.4 4.7c.1.6.1 1.3.2 1.9.1 1.1.2 2.1.2 2.9l.1 2c.6.6 2.8 2.9 5 5.4 1.4 1.5 2.6 3 3.5 4l.6.7v-.8c.1-1.3 0-2.9 0-4.7l-.3-7.6zm12-3.6c-.1-.7-.1-1.4-.2-2.1l-.5-5.3c0-.3-.1-.6-.1-.9-.1.2-.3.5-.5.8-.8 1.3-1.9 3-3 4.6-1.1 1.7-2.2 3.3-3 4.5l-1 1.4c-.1.2-.2.3-.3.4l.2 7.6c.1 1.8.1 3.5 0 4.9v.8l.6-.7c.9-1 2.2-2.6 3.4-4.1 2.1-2.7 4.2-5.5 4.7-6.2l-.1-2.3c0-1-.1-2.1-.2-3.4zm-82.2 152.4l.7-.5c.9-.6 2-1.4 3.1-2.3l.9-.7 1.5-1.2c.9-.7 1.7-1.4 2.4-1.9l1.6-1.4c.1-.8.7-4.1 1.1-7.3.2-2.3.4-4.6.5-6.1l-.5.5c-.3.3-.7.7-1.1 1-.7.7-1.5 1.5-2.4 2.2l-4.8 4.1-.3.3c-.1.8-.7 4-1.3 7.2l-.6 2.8-.8 3.3zm21.8-1.9c1-.8 1.9-1.7 2.7-2.5l1.2-1.2.6-.6c-1.5.1-4 .4-6.4.5-3.4.2-6.8.2-7.7.2l-1.6 1.4c-.7.6-1.6 1.3-2.5 2l-1.5 1.2-.9.7c-1.2.9-2.3 1.8-3.2 2.4l-.6.5 4 .2 2.3.1c3.4.1 7 .1 7.8.1l.3-.3 5.5-4.7zm1.4-31.7l-3.6 4.2-4.7 4.9c0 .4 0 1.1-.1 2.2-.1 1.4-.3 3.3-.4 5.2-.2 2.3-.5 4.7-.7 6.2l.6-.5c.7-.6 1.4-1.3 2.3-2.1.5-.4.9-.9 1.4-1.3l.9-.8c1-1 2-1.9 2.7-2.7l1.5-1.5.1-2.7c.1-1.3.2-3 .1-4.7 0-2.6 0-4.9-.1-6.4zm12 18.4l4.1-4.7c-1.5.3-3.9.7-6.3 1.1-1.7.3-3.5.5-4.9.7l-2.7.3-1.5 1.5c-.7.8-1.7 1.8-2.8 2.8l-.9.8c-.5.5-1 .9-1.4 1.4-.8.8-1.6 1.6-2.3 2.2l-.6.5c1.5 0 3.9-.1 6.3-.4 2-.2 4-.3 5.5-.5 1.1-.1 1.9-.2 2.3-.3l5.2-5.4zm-5.2-12.7c1.2-1.3 2.2-2.6 3.2-3.9l1.3-1.7-.1-2.2c0-1.4-.2-3.4-.4-5.2-.2-1.9-.4-3.8-.5-5.1l-.1-.9-3.2 4.5c-.6.9-1.4 1.8-2 2.6-.3.4-.7.8-.9 1.2l-1.2 1.6.1 2.1c.1 1.4.1 3.2.1 5.2v6.2c.2-.2.3-.4.5-.6l3.2-3.8zm14.9 1c.7-.9 1.5-1.9 2.2-3l3.6-5.1-.9.3c-1.5.4-3.4 1-5.3 1.5s-3.8 1-5.3 1.3l-2.2.5-1.3 1.7c-1 1.3-2.1 2.7-3.3 4l-3.4 3.9c-.2.2-.4.4-.5.6.3 0 .6-.1.9-.1 1.4-.2 3.3-.5 5.3-.9s3.9-.7 5.4-1l2.2-.5 1.4-1.8c.5-.4.8-.9 1.2-1.4zM345 290l-.3-2.2c-.3-1.6-.7-3.7-1-5.2-.4-1.9-.7-3.7-1-5-.1-.3-.1-.6-.2-.8-.1.2-.2.4-.4.6l-2.8 4.9c-.3.5-.5 1-.8 1.4l-2.3 3.5.3 2.1c.2 1.2.4 2.9.6 5.2.2 1.9.4 3.8.5 5.2 0 .3.1.6.1.9l3.4-4.8c.7-1 1.3-2 1.9-2.9.3-.5.6-.9.9-1.3l1.1-1.6zm16.1-3.3c-.3.1-.5.2-.9.4-1.4.6-3.3 1.3-5.1 2-2 .8-3.8 1.4-5.1 1.9l-2.2.7-1.2 1.8c-.3.4-.6.9-.9 1.4-.6.9-1.2 2-2 3l-3.4 4.8c.3-.1.6-.1.9-.2 1.4-.4 3.3-.9 5.2-1.4 2.3-.6 4-1.2 5.2-1.6l2.2-.7 2.6-4c.3-.5.6-1 .9-1.6l3.2-5.6c.3-.4.4-.6.6-.9zm-8-14.2c-.4-1.4-.9-3.2-1.5-5.1l-.4-1.2c-.4-1.4-.8-2.7-1.2-3.7l-.3-.8-.3.7c-.3.8-.7 1.6-1.2 2.6-.3.6-.5 1.2-.8 1.8l-.5 1.2c-.5 1.2-1 2.3-1.5 3.2l-.9 1.7.7 2.8c.3 1.3.7 2.8 1 4.4.5 2.2.9 4.6 1.2 6l2.9-5.1 3.3-6.4c-.1-.4-.3-1.1-.5-2.1zm15.8-2l.3-.8-.8.5c-1 .6-2.3 1.3-3.8 2l-1.1.6c-1.8.9-3.5 1.8-4.9 2.4-1 .5-1.7.8-2.1.9l-3.3 6.5-3 5.2c1.4-.5 3.6-1.3 5.9-2.2 1.6-.6 3.1-1.3 4.3-1.8l2.8-1.3 1-2c.5-1 1.1-2.3 1.7-3.7l1.4-3.1c.7-1.2 1.2-2.3 1.6-3.2zm-11.1-19.1c-.8-1.8-1.5-3.5-2.1-4.7l-.4-.8-.2.7c-.2.8-.5 1.8-.9 2.8-.2.6-.4 1.1-.6 1.7l-.6 1.8c-.3 1-.7 2-.9 2.7l-.7 1.8c.3.8 1.4 3.8 2.5 6.9.7 2.2 1.3 4.5 1.8 5.9l.3-.7c.2-.4.4-.9.7-1.4.4-1 .9-2.1 1.4-3.2l2.6-6.7c-.5-.6-1.7-3.8-2.9-6.8zm17 1c-1.1.8-2.8 1.9-4.6 3.1-2.9 1.9-5.8 3.6-6.5 4l-2.7 6.8c-.4 1.2-1 2.3-1.4 3.3-.2.5-.5 1-.7 1.4l-.3.7c1.3-.7 3.5-1.7 5.7-2.8 3-1.6 6-3.4 6.7-3.8l.8-2.1c.3-.9.7-2 1.1-3.2.2-.6.4-1.3.7-1.9.8-2.2 1.5-4.5 1.9-6l-.7.5zM289.4 64.2l1.6 1.1c.8-.1 4-.5 7.3-.8l.8-.1c.7-.1 1.4-.1 2.1-.2l3.3-.1-.6-.5c-.9-.8-2.1-1.6-3.4-2.5l-6.5-4.6c-.8.1-4.2.6-7.4 1.1l-1.2.2c-1.4.2-2.8.5-3.8.7l-.9.2.6.3 8.1 5.2zm2.1-22.9c.5 1.1.9 2.5 1.5 4l.4 1.2c1.1 3.2 2.1 6.4 2.4 7.2l.9.6 5.8 4.1c1.3.9 2.6 1.8 3.5 2.6l.6.5-.7-3.4c-.1-.6-.3-1.3-.5-2l-.2-.8c-.9-3.3-1.9-6.7-2.1-7.5l-1.9-1.3-9.9-6.1.2.9zM119.1 58.7l-.9-.2c-1.1-.2-2.4-.5-3.8-.7l-1.2-.2c-3.2-.5-6.6-1-7.4-1.1l-.4.2-6.1 4.4c-1.3.9-2.5 1.8-3.4 2.5l-.6.5 3.3.1c.7 0 1.4.1 2.1.2l.8.1c3.3.3 6.5.7 7.3.8l1.6-1.1 8.7-5.5zM98.7 46.6l-1.8 1.3c-.2.8-1.3 4.2-2.1 7.5l-.2.8c-.2.7-.4 1.3-.5 2l-.7 3.4.6-.5c.9-.8 2.2-1.7 3.5-2.6l6.6-4.7c.3-.8 1.3-4 2.4-7.2l.4-1.2c.5-1.5 1-2.9 1.5-4l.3-.8-.8.4-9.2 5.6zM21.4 176.4c.3.6.7 1.2 1.1 1.8l.5.7c1.3 2 2.7 4 3.5 5.2l.6-5.9c.2-1.2.4-2.5.5-3.6.1-.6.2-1.1.2-1.5l.3-2.1-2.4-4.2-1.3-2.6c-1.1-2.1-2.2-4.3-2.8-5.7l-1.3 6.1c-.3 1.3-.5 2.5-.6 3.7-.1.6-.2 1.2-.3 1.7l-.3 2.2 2.3 4.2zm8.9 2.2l-.5 5.8c1.1-1 2.8-2.7 4.4-4.3l.6-.5c.5-.5 1-.9 1.5-1.3l3.5-3 .3-1.9c.1-.5.2-1 .2-1.5.1-1 .3-2.1.6-3.2l1.2-5.4c-1.2.8-3 2.2-4.9 3.6l-2.9 2.2-2.9 2.4-.3 2.1c-.1.5-.2 1-.2 1.6-.3 1-.4 2.2-.6 3.4zM27 141.3l-.3-.9-1.1 3.2c-.2.6-.4 1.2-.5 1.8-.1.3-.2.7-.3 1l-2.1 7.4c.1.3.5 1.1 1 2.1.7 1.4 1.5 3.2 2.4 4.9.9 1.8 1.8 3.5 2.5 4.8.1.3.3.6.4.8l.2-.8 1.1-5c.1-.5.2-1.1.3-1.6.3-1.3.5-2.5.8-3.5l.6-2c-.3-.8-1.7-3.9-3.1-7.1-.6-1.4-1.1-2.7-1.5-3.9-.2-.5-.3-.9-.4-1.2zm6.8 18.4c-.1.5-.2 1.1-.3 1.6l-1.2 5.7c.2-.2.5-.4.7-.6 1.2-.9 2.7-2.1 4.2-3.2s3-2.2 4.2-3c.8-.6 1.5-1 1.8-1.2l1.8-6.5.3-.9c.1-.5.3-1.1.5-1.6l1-2.8-.8.4c-.3.2-.7.4-1 .6-1.1.6-2.3 1.3-3.4 2-2.7 1.7-5.5 3.6-6.2 4.1l-.6 2c-.5 1-.8 2.1-1 3.4zm-4.7-26.1l-.8 2.1c.3.8 1.4 4.2 2.6 7.3l1 2.6 1.4 3.2.2-.8c.2-1 .7-2.2 1.1-3.4.2-.5.3-1 .5-1.5l1.9-5.5c.1-.4.2-.7.3-.9l.2-.4c-.3-.8-1.3-4-2.2-7.3l-.3-1c-.5-1.6-.9-3.1-1.2-4.3l-.2-.9-.4.8-4.1 10zm7.5 15.5l-.2.8 2.8-1.8 2.5-1.4c2.8-1.6 5.7-3.2 6.4-3.6l.6-1.8 4-9.5-.8.3c-1 .4-2.3 1.1-3.7 1.7l-1 .5c-2.9 1.4-5.9 3-6.7 3.4l-.2.4c-.1.2-.2.5-.3.9l-1.9 5.4c-.2.5-.3 1-.5 1.5-.3 1.1-.7 2.2-1 3.2zm0-27.3c.3 1.3.6 2.7 1 4.1.7 2.4 1.3 4.7 1.8 6.1l.3-.7c.2-.4.4-.9.6-1.5.4-1 .9-2.2 1.4-3.3l3.2-6.5-.5-2.2c-.3-1.4-.6-3.4-1-5.3-.4-2.4-.8-4.8-1-6.3l-3.6 6.4c-.3.5-.6 1.1-.9 1.6l-2.1 4.3.8 3.3zm8.1 6.1c-.5 1.1-1 2.2-1.4 3.1l-.6 1.5-.3.7c1.3-.7 3.4-1.7 5.5-2.7 1.3-.6 2.7-1.2 3.8-1.7l3-1.2 1.8-3.8c.3-.5.5-.9.8-1.4l3.2-5.6c-1.3.4-3.5 1.2-5.7 2-1.8.6-3.6 1.3-5 1.8l-2 .8-3.1 6.5zm.3-26c.1.8.4 4.3 1 7.7.4 2.4.8 4.8 1.1 6.2l2.9-5.2c.6-1.2 1.4-2.3 2-3.3.2-.4.5-.7.7-1l1.2-1.8-.3-3.1c-.1-1.3-.3-3-.4-4.6-.1-2.4-.2-4.8-.3-6.4l-3.7 5.1-4.2 6.4zm7.9 10.4l-2.9 5.1c1.4-.5 3.6-1.3 5.8-2.1 3-1.1 6.2-2 7-2.2l3.7-5.6 3.3-4.5c-1.4.3-3.7.8-5.9 1.3-1.5.3-3 .8-4.2 1.1l-2.9.8-1.1 1.8c-.2.3-.4.7-.7 1l-2.1 3.3zm3-25.8l.1 2.3c0 1.5.1 3.5.2 5.5s.2 3.9.3 5.4c0 .3.1.6.1.9.1-.2.3-.4.5-.7l3-4.1c.4-.5.8-1.1 1.2-1.6.7-.9 1.3-1.8 1.9-2.5l1.4-1.6c0-.9 0-4.2.1-7.7 0-1.5.1-2.9.2-4.1 0-.5.1-.9.1-1.4l.1-.9-2.3 2.5c-.4.4-.8.9-1.2 1.4l-5.7 6.6zm8 9.6c-.4.5-.8 1.1-1.2 1.6l-3 4.1c-.2.2-.3.4-.5.6.3-.1.6-.2.9-.2 1.4-.4 3.3-.8 5.2-1.2 1.9-.4 3.7-.8 5.1-1.1l2.1-.4 4.9-5.9c.4-.4.7-.9 1-1.2l2-2.2-.9.1c-.4 0-.8.1-1.3.1-1.2.1-2.6.3-3.9.5-3.2.5-6.5 1.1-7.3 1.2l-1.3 1.6c-.5.6-1.1 1.5-1.8 2.4zm5.9-25.5l-1.5 1.6c-.1.8-.4 4.4-.6 7.8v.8c0 .7-.1 1.4-.1 2.1v3.4l.5-.6c.7-1 1.8-2.1 2.9-3.3l5.5-5.9c.1-.8.4-4.2.9-7.6l.2-1.3c.2-1.6.4-3.1.6-4.2l.2-.9-.7.6-7.9 7.5zm21.6 7.8c-1.1 0-2.5 0-3.9.1h-1.2c-3.2.1-6.6.4-7.5.4l-.3.3-5.2 5.5c-1.1 1.1-2.1 2.2-2.8 3.1l-.5.6 3.3-.5 2.1-.3.8-.1c3.3-.4 6.5-.6 7.3-.7l1.3-1.4 7.5-7.1-.9.1zm-9.3-19l-.7 3.3c-.2 1.3-.5 2.8-.8 4.3-.3 2.4-.6 4.8-.8 6.3l.6-.6c.4-.3.7-.7 1.2-1.1.8-.8 1.7-1.6 2.6-2.4l5.5-4.7.4-2.2c.3-1.4.8-3.3 1.2-5.3.6-2.3 1.2-4.7 1.6-6.2l-7.3 5.5-3.5 3.1zm23.3 8.5c-1.4-.1-3.7-.3-6-.5-1.9-.1-3.8-.2-5.3-.3h-2.2l-5.5 4.6c-.9.8-1.8 1.6-2.5 2.3-.4.4-.8.8-1.2 1.1l-.6.5c1.5-.1 3.8-.2 6.1-.3h4.3l3.1.1 3.2-2.7 6.6-4.8zM22.5 245c.3 1 .5 1.8.6 2.2.7.5 3.5 2.6 6.3 4.5 1.3.9 2.6 1.7 3.7 2.4l1.6 1-.5-1.5c-.4-1.2-.9-2.7-1.3-4.2l-1.4-4.9c-.3-1-.5-1.7-.6-2.1-.7-.5-3.4-2.5-6.1-4.7-1.5-1.2-3-2.4-4.2-3.5l-.7-.6.2.9c.2 1.5.7 3.5 1.1 5.3l1.3 5.2zm15.5 9l.7-1.7c.5-1.2 1-2.6 1.7-4 1.4-3 2.8-5.9 3.2-6.6-.1-.3-.3-1-.5-1.9l-1.1-4.7c-.4-1.7-.8-3.4-1-4.7l-.1-.7-.5.8c-.8 1.3-1.7 2.9-2.6 4.5-1.5 2.8-3.1 5.9-3.5 6.6.1.3.2 1.1.5 2l1.4 4.9c.4 1.5.9 2.9 1.3 4.1l.5 1.4zm-18.9-25.8l.1.5c.6.6 3.3 2.9 5.9 5.1 1.1 1 2.3 1.9 3.3 2.7l1.6 1.2-.7-3.1-1.4-7.8c-.1-.7-.2-1.3-.3-1.7l-.1-.4c-.6-.6-3.1-2.9-5.6-5.3-1.1-1.1-2.1-2.1-3-3.1l-1.4-1.5.3 3.4 1 8.2.3 1.8zm13.4 5.7l.7 3 .9-1.8c.6-1.1 1.2-2.4 2-3.7 1.7-2.8 3.4-5.5 3.8-6.3l-.1-.4c-.1-.5-.2-1.1-.2-1.6l-.9-7.3-.2-3-1.2 1.5c-.8 1-1.6 2.2-2.4 3.3-1.8 2.7-3.6 5.5-4.1 6.2l.1.4c0 .4.1 1 .2 1.6l1.4 8.1zM17 207.7c0 1.1.1 1.9.1 2.2.6.6 3 3.2 5.3 5.7 1.4 1.5 2.8 2.9 3.8 3.8l.8.6-.1-.8a63 63 0 01-.5-5.1L26 209c0-.5-.1-.9-.1-1.2v-1c-.6-.6-2.8-3.2-5-5.8-1-1.1-1.8-2.2-2.5-3.2-.3-.4-.6-.8-.8-1.1l-.6-.7-.1 3.4.1 8.3zm13.3 11.9l.5-.8c.9-1.4 1.9-2.8 3-4.3 1.9-2.6 3.9-5.2 4.4-5.8 0-.3-.1-1.1-.1-2l-.2-7.3.1-3-.6.6c-.3.3-.5.6-.9.9-.8.9-1.8 1.9-2.6 2.9-2.1 2.5-4.2 5.1-4.7 5.8v.9c0 .3 0 .7.1 1.2l.4 5.1c.1 1.8.3 3.6.5 5l.1.8zm-13.1-30.8l-.1 2.3c.5.7 2.6 3.5 4.7 6.2 1.2 1.6 2.5 3.1 3.4 4.2l.6.7v-.8c-.1-1.3 0-3.1 0-4.9l.2-7.5c-.1-.1-.2-.2-.3-.4l-1-1.4c-.8-1.2-2-2.8-3.1-4.5-1.1-1.7-2.2-3.3-3-4.6-.2-.3-.4-.5-.5-.8 0 .3-.1.5-.1.8l-.5 5.4c-.1.7-.1 1.4-.2 2.1 0 1.1-.1 2.2-.1 3.2zm11.9 12.4v.8l.6-.7c.8-1 2.1-2.5 3.5-4 2.2-2.4 4.4-4.7 5-5.4l.1-2c0-.8.1-1.9.2-2.9.1-.6.1-1.2.2-1.9l.4-4.8c0-.3 0-.5.1-.7l-.6.6c-1 .9-2.4 2.2-3.8 3.5-1.4 1.3-2.7 2.6-3.8 3.7l-1.3 1.2-.3.3-.2 7.5c-.1 1.8-.2 3.5-.1 4.8zm54.1 139.4c.1.1.3.2.4.3.8 0 4.4 0 7.8-.1l2.9-.1 3.4-.2-.6-.5c-.9-.6-2-1.5-3.2-2.4l-.9-.7-1.5-1.2c-.9-.7-1.8-1.4-2.5-2l-1.6-1.4c-.9 0-4.2-.1-7.7-.2-2.4-.2-4.8-.4-6.4-.5l.6.6c.4.3.8.7 1.2 1.2.8.8 1.8 1.7 2.7 2.5l5.4 4.7zm13.5-16.3l-4.8-4.2c-.9-.7-1.7-1.5-2.4-2.2-.4-.4-.8-.7-1.1-1l-.5-.5c.1 1.4.3 3.7.5 6.1.4 3.2.9 6.5 1.1 7.3l1.6 1.4c.7.6 1.5 1.2 2.4 1.9l1.5 1.2.9.7c1.1.9 2.2 1.7 3.1 2.3l.7.5-.8-3.2-.6-2.8c-.6-3.2-1.2-6.4-1.3-7.2-.1-.1-.2-.1-.3-.3zm-27 3.9c.3 0 1.2.2 2.3.3 1.5.1 3.5.3 5.5.5 2.4.2 4.8.3 6.3.4l-.6-.5c-.7-.6-1.5-1.4-2.3-2.2-.5-.4-.9-.9-1.4-1.4l-.9-.8c-1.1-1-2.1-2-2.8-2.8l-1.5-1.5-2.7-.3c-1.4-.2-3.2-.4-4.9-.7-2.3-.4-4.8-.9-6.3-1.1l4.1 4.7 5.2 5.4zm6.7-24c0 1.4-.1 3.7 0 6.1 0 1.7.1 3.4.1 4.7l.1 2.7 1.4 1.5c.7.8 1.7 1.7 2.7 2.7l.9.8c.5.5 1 .9 1.4 1.4.8.8 1.6 1.5 2.2 2.1l.6.5c-.2-1.5-.5-3.8-.7-6.2-.2-1.9-.3-3.8-.4-5.2-.1-1-.1-1.8-.1-2.2l-4.6-4.9-3.6-4zm-21.7 6.7c.4.5.7.9 1 1.3l1.4 1.8 2.2.5c1.4.3 3.4.7 5.4 1 1.9.3 3.9.7 5.3.9.3 0 .6.1.9.1-.2-.2-.3-.4-.5-.6L67 312c-1.2-1.3-2.3-2.7-3.3-4l-1.3-1.7-2.2-.5c-1.5-.3-3.3-.8-5.3-1.3-1.9-.5-3.8-1.1-5.3-1.5l-.9-.3 3.6 5.1c.9 1.2 1.7 2.2 2.4 3.1zm18.6-2.7c0-1.9 0-3.8.1-5.2l.1-2.2-1.2-1.5-.9-1.2c-.6-.8-1.3-1.7-2-2.6l-3.2-4.5-.1.9c-.2 1.4-.4 3.2-.5 5.1-.2 1.8-.4 3.8-.4 5.2l-.1 2.2 1.3 1.7c1 1.3 2 2.6 3.2 3.9l3.3 3.8c.2.2.4.4.5.6v-.9c-.1-1.5-.1-3.4-.1-5.3zm-25-8.7c1.2.4 3 1 5.2 1.6 1.9.5 3.8 1 5.2 1.4.3.1.6.2.9.2l-3.5-4.9c-.7-1-1.4-2-2-3-.3-.5-.6-.9-.9-1.3l-1.2-1.8-2-.7c-1.3-.5-3-1.1-5.1-1.9-1.9-.7-3.7-1.5-5.1-2-.3-.1-.6-.3-.9-.4.1.2.3.5.4.7l3.2 5.6c.3.6.6 1.1.9 1.6l2.6 4 2.3.9zm15.1-10.1l.3-2.1-2.3-3.5c-.3-.5-.6-.9-.8-1.4l-2.8-4.9c-.1-.2-.3-.4-.4-.6-.1.3-.1.5-.2.9-.3 1.3-.7 3.2-1 5-.4 2-.7 3.9-1 5.2l-.2 2 1.1 1.8c.3.4.5.8.9 1.3.6.9 1.2 1.9 1.9 2.9l3.4 4.8c0-.3 0-.6.1-.9.1-1.4.3-3.4.5-5.2.1-2.4.3-4.1.5-5.3zm-13.7-1.7l-3-5.2-3.3-6.5c-.3-.1-1.1-.5-2.1-.9-1.3-.6-3.1-1.5-4.8-2.4l-1.1-.6c-1.4-.7-2.7-1.4-3.8-2l-.8-.5.3.8c.4.9.9 2 1.4 3.2l1.3 3c.6 1.4 1.2 2.7 1.7 3.7l1 2 2.8 1.3c1.2.5 2.7 1.2 4.3 1.8 2.4.9 4.7 1.8 6.1 2.3zm4-7.8c.3-1.5.7-3.1 1-4.4l.7-2.8-.9-1.7c-.5-.9-1-2-1.5-3.2l-.5-1.2c-.3-.6-.5-1.2-.8-1.8-.4-1-.8-1.8-1.2-2.6l-.3-.7-.3.8c-.4 1-.8 2.3-1.2 3.7l-.4 1.2c-.5 1.8-1.1 3.6-1.5 5-.3 1-.5 1.8-.6 2.1l3.3 6.4 2.9 5c.4-1.2.9-3.5 1.3-5.8zM28.2 263l.8 2.1c.7.4 3.8 2.2 6.7 3.8 2.2 1.1 4.3 2.2 5.7 2.8l-.3-.7c-.2-.4-.4-.9-.7-1.4-.5-1-1-2.1-1.4-3.3l-2.7-6.8c-.7-.4-3.6-2.2-6.5-4-1.8-1.2-3.5-2.2-4.6-3.1l-.7-.5c.4 1.5 1.1 3.7 1.9 6 .2.6.4 1.3.7 1.9.4 1.2.7 2.3 1.1 3.2zm15.9 6.6l.3.7c.4-1.4 1.1-3.7 1.8-5.9 1-3.1 2.2-6.1 2.5-6.9l-.7-1.8c-.3-.8-.6-1.7-1-2.7l-.6-1.8c-.2-.6-.4-1.2-.6-1.7-.4-1-.7-2-.9-2.9l-.2-.7-.4.8c-.6 1.2-1.3 2.9-2.1 4.7-1.2 3-2.5 6.1-2.8 6.9L42 265c.4 1.1.9 2.2 1.4 3.2.3.5.5 1 .7 1.4zM151.2 29c.8 0 1.5 1.2 2.2 3.7.6 2.3 1.2 4.6 1.9 6.8.9 2.5 2.1 3.7 3.4 3.7 2.2 0 4.8-2 8-6.1 2.2-2.8 3.6-5.2 4.3-7.2.9-.6 1.4-1 1.6-1 .6 0 .9.4.9 1.3 0 .2-.3 1.5-1 3.8-.7 2.4-1 4.1-1.1 5.3 0 1.1.2 2 .8 2.7.6.7 1.4 1 2.5 1 2.3 0 4.6-1 7-3l.6-.6c.2.8.5 1.4.9 1.9 1 1.1 2.7 1.6 5.1 1.5-.3-.8-.4-2.1-.4-4 .1-2.1.7-4.2 1.7-6.2s1.9-3 2.8-3c1 0 1.5.6 1.4 1.9 0 .9-.2 1.9-.5 3s-.5 2.2-.5 3.3c-.1 1.8.3 3 1.2 3.8 1 .9 2.7 1.3 5.1 1.2-.4-.8-.5-1.9-.4-3.4.1-2.1.8-4.3 2.1-6.5 1.2-2.1 2.3-3.2 3.2-3.2.8 0 1.2.7 1.2 2 0 .9-.3 2.1-.6 3.6-.4 1.6-.6 2.9-.6 4-.1 2.5 1 3.7 3.3 3.7s4.6-1 7-3l.1-.1c.1.1.1.3.2.4 1.2 1.9 3.2 2.8 6 2.8 3.8 0 7.5-1.1 11.2-3.2.4-.2.8-.5 1.2-.7.2.5.5.9.8 1.3 1.4 1.8 3.5 2.6 6.2 2.6 3.3 0 6-1.2 8.3-3.5 2.2-2.3 3.4-5.1 3.5-8.2.1-2.3-.4-4.3-1.6-5.8-1.2-1.6-3.1-2.4-5.5-2.4-3.8 0-6.9 1.4-9.4 4.1-2.3 2.5-3.4 5.2-3.2 8.2 0 .2.1.4.1.6-.1.1-.3.1-.4.2-2.9 1.3-5.7 1.9-8.1 1.9-1.3 0-2.2-.4-2.8-1.3 3.4-.6 6.1-1.8 8.4-3.9 2.1-1.9 3-3.7 2.9-5.4-.2-2.8-2-4.1-5.4-4.1-3.7 0-6.9 1.4-9.6 4.2-2.5 2.5-3.7 5.2-3.7 8 0 .5 0 .9.1 1.3-.6.4-1 .6-1.3.6-.7 0-1.1-.1-1.2-.4-.2-.3-.2-.8-.2-1.5 0-.3.2-1.3.7-3.2.4-1.8.7-3.3.7-4.2.1-1.4-.2-2.5-.8-3.3-.7-.9-1.9-1.3-3.6-1.2-1.4.1-2.7.6-4 1.6-.8.6-1.5 1.3-2.3 2.2-.3.2-.5.5-.8.7 0-1.4-.2-2.5-.8-3.3-.7-.9-1.9-1.3-3.6-1.2-2 .2-3.8 1-5.4 2.3-.7.6-1.3 1.3-1.8 2.1.1-.3.1-.6.1-1 0-1.1-.3-2-.8-2.8-.6-.8-1.3-1.2-2.2-1.1-.5 0-1.5.7-3 2.1-2 1.9-3.1 2.9-3.3 3l1.2 1.4c1-.7 1.6-1.1 1.8-1.1.4 0 .5.3.5.9 0 .9-.2 2.1-.5 3.8-.2 1-.3 1.8-.4 2.6h-.1c-1.2 1-2.1 1.5-2.6 1.5-1.1 0-1.6-.7-1.6-2.2.5-3.2 1-5.9 1.5-8 .1-1.2-.1-2.3-.6-3-.5-.8-1.4-1.1-2.5-1-.7.1-1.8.8-3.3 2.1-.5.5-1 .9-1.6 1.4-.1-2.5-1.2-3.7-3.3-3.8-3.2-.1-5.4 1.7-6.5 5.4.6-.3 1.2-.4 1.7-.4 1.2 0 1.7.7 1.6 2-.1.8-.6 2-1.6 3.5s-1.7 2.3-2.2 2.3c-.6 0-1.2-1.2-1.7-3.5-.2-.7-.5-2.5-.9-5.3-.4-2.6-1.5-3.9-3.3-3.7-.8.1-1.9.8-3.4 2.1-1.1 1-2.2 2-3.4 3l1.1 1.4c.5-.5 1.1-.8 1.3-.8zm88.6 1.6c1.1-1.9 2.6-2.9 4.4-2.9.6 0 1 .4 1.3 1.2.3.8.4 1.6.4 2.6-.1 1.7-.6 3.3-1.5 4.8-1.1 1.8-2.4 2.8-4 2.8-.7 0-1.2-.4-1.6-1.1-.3-.7-.5-1.4-.5-2.3 0-1.9.5-3.6 1.5-5.1zm-20 4c0-1.3.6-2.7 1.7-4.1 1.1-1.4 2.1-2.1 3.2-2.1.8 0 1.2.5 1.1 1.4 0 .7-.6 1.6-1.6 2.7-1.2 1.3-2.7 2.2-4.4 2.8v-.7zm-43.2-14c1.3 0 2.4-.4 3.3-1.3.8-.8 1.3-1.6 1.3-2.5 0-.6-.2-1.2-.7-1.7-.5-.6-1.1-.9-1.8-.9-1.2 0-2.4.4-3.4 1.2-1 .8-1.5 1.7-1.6 2.6-.1 1.7.9 2.6 2.9 2.6z",
        fill: "#fff"
      })), _v8 || (_v8 = _v15.createElement("path", {
        d: "M185 325.5c.2 0 .5 0 .7.1.2 0 .4.1.5.2.2.1.3.2.3.4.1.2.1.4.1.6 0 .2-.1.5-.2.7-.1.2-.3.3-.5.4.3.1.6.3.7.5.2.3.3.5.2.8 0 .2-.1.5-.2.7-.1.2-.2.4-.4.5l-.6.3c-.2.1-.5.1-.7.1h-2.6v-5.3h2.7zm-.2 2.1c.2 0 .4 0 .5-.2.1-.1.2-.3.2-.5 0-.1 0-.2-.1-.3 0-.1-.1-.1-.2-.2-.1 0-.2-.1-.3-.1h-1.4v1.2l1.3.1zm.1 2.2h.3c.1 0 .2-.1.3-.1l.2-.2c.1-.1.1-.2.1-.3 0-.2-.1-.4-.2-.6-.2-.1-.4-.2-.6-.2h-1.3v1.5l1.2-.1zm7.5-4.3v1h-2.8v1.1h2.6v.9h-2.6v1.3h2.9v1h-4v-5.3h3.9zm2.5 4c.1.1.1.2.3.3.1.1.2.1.4.2.1 0 .3 0 .4.1h.3c.1 0 .2-.1.3-.1.1 0 .2-.1.3-.2.1-.1.1-.2.1-.3s0-.3-.1-.3c-.1-.1-.2-.2-.4-.2-.2-.1-.3-.1-.5-.2l-.6-.2c-.2-.1-.4-.1-.6-.2-.2-.1-.4-.2-.5-.3-.2-.1-.3-.3-.4-.4-.1-.2-.1-.4-.1-.6 0-.3.1-.5.2-.7.1-.2.3-.4.5-.5.2-.1.4-.2.7-.3.2-.1.5-.1.7-.1.3 0 .5 0 .8.1.2.1.5.2.7.3.2.1.4.3.5.5.1.2.2.5.2.8H197c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.2-.1-.1-.2-.1-.3-.1h-.7c-.1 0-.2.1-.3.1-.1 0-.1.1-.2.2s-.1.2-.1.3 0 .2.1.3l.2.2c.2.1.3.1.5.2l.8.2c.1 0 .3.1.4.1.2.1.4.1.5.2.2.1.3.3.4.5.1.2.2.5.2.7s0 .5-.1.7c-.1.2-.2.4-.4.6-.2.2-.4.3-.7.3-.3.1-.7.1-1 .1-.3 0-.6 0-.9-.1s-.5-.2-.7-.3c-.5-.3-.7-.9-.7-1.4h1.1c0-.2.1-.1.1.1zm4.3-3v-1h4.4v1H202v4.3h-1.2v-4.3h-1.6zm8.5.5c.1-.3.3-.6.5-.9.2-.3.5-.5.8-.6s.7-.2 1.1-.2c.4 0 .8.1 1.1.2s.6.3.8.6c.2.3.4.6.5.9.1.4.2.7.2 1.1s-.1.7-.2 1.1c-.1.3-.3.6-.5.9-.2.2-.5.4-.8.6-.3.2-.7.2-1.1.2-.4 0-.8-.1-1.1-.2-.3-.1-.6-.3-.8-.6-.2-.3-.4-.6-.5-.9-.1-.4-.2-.7-.2-1.1 0-.3.1-.7.2-1.1zm1.1 1.8c0 .2.1.4.2.6.1.2.3.3.4.4.4.2.9.2 1.3 0 .2-.1.3-.2.4-.4.1-.2.2-.4.2-.6.1-.2.1-.4.1-.7 0-.2 0-.5-.1-.7 0-.2-.1-.4-.2-.6-.1-.2-.3-.3-.4-.4-.4-.2-.9-.2-1.3 0-.2.1-.3.2-.4.4-.1.2-.2.4-.2.6-.1.2-.1.5-.1.7 0 .3 0 .5.1.7zm9.3-3.3v1h-2.6v1.2h2.2v.9h-2.2v2.2h-1.2v-5.3h3.8zm-39.2 8.4v-1h4.4v1h-1.6v4.4h-1.2v-4.4h-1.6zm6.9-1v2.1h2.2v-2.1h1.2v5.3H188v-2.3h-2.2v2.3h-1.2v-5.3h1.2zm9.1 0v1h-2.8v1.1h2.6v.9h-2.6v1.3h2.9v1h-4v-5.3h3.9zm3.9 0h1.3l1.2 2.1 1.2-2.1h1.3l-2 3.3v2.1h-1.1v-2.1l-1.9-3.3zm10.3 0v1h-2.8v1.1h2.6v.9h-2.6v1.3h2.9v1h-4v-5.3h3.9zm4.2 0l2 5.3h-1.2l-.4-1.2h-2l-.4 1.2h-1.2l2-5.3h1.2zm.1 3.3l-.7-2-.7 2h1.4zm6-3.3c.2 0 .4 0 .6.1.4.1.7.4.8.8.1.2.1.4.1.6 0 .3-.1.6-.2.8-.1.2-.4.4-.6.5.1 0 .2.1.3.2.1.1.2.2.2.3.1.1.1.2.1.4v1.1l.1.3c0 .1.1.2.1.3h-1.1c-.1-.2-.1-.4-.1-.6s0-.4-.1-.7c0-.2-.1-.4-.3-.6-.2-.1-.4-.2-.6-.2h-1.2v2.1h-1.2V333l3.1-.1zm-.4 2.5c.2 0 .4 0 .6-.2.2-.2.2-.4.2-.6 0-.2-.1-.4-.2-.6-.2-.1-.4-.2-.6-.2h-1.3v1.5h1.3v.1z"
      })));
    },
    _v116 = () => (0, _v10.jsx)(_v16.Box, {
      as: "section",
      bg: "background",
      py: {
        base: "3xl",
        md: "124px"
      },
      children: (0, _v10.jsxs)(_v103, {
        children: [(0, _v10.jsxs)(_v38.Flex, {
          align: {
            lg: "flex-end"
          },
          direction: {
            base: "column",
            lg: "row"
          },
          gap: {
            base: "lg",
            lg: "2xl"
          },
          justify: "space-between",
          children: [(0, _v10.jsx)(_v30.Text, {
            as: "h2",
            variant: {
              base: "heading-xl",
              md: "heading-3xl"
            },
            children: (0, _v31.translate)({
              singular: "Made to be seen.",
              dictionary: {
                es: {
                  singular: "Hecho para ser visto."
                },
                "de-DE": {
                  singular: "Gemacht, um gesehen zu werden."
                },
                "fr-FR": {
                  singular: "Conçu pour être vu."
                },
                "ja-JP": {
                  singular: "見られるために作られた。"
                },
                "ko-KR": {
                  singular: "보이기 위해 만들어졌습니다."
                },
                "pt-BR": {
                  singular: "Feito para ser visto."
                },
                "zh-CN": {
                  singular: "为被观看而生。"
                }
              }
            })
          }), (0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            maxW: {
              lg: "32%"
            },
            variant: {
              base: "body-lg",
              md: "body-xl"
            },
            children: (0, _v31.translate)({
              singular: "For years, Vimeo Staff Picks has championed the makers who see the world a little differently.",
              dictionary: {
                es: {
                  singular: "Durante años, Vimeo Staff Picks ha defendido a quienes ven el mundo de forma algo distinta."
                },
                "de-DE": {
                  singular: "Seit Jahren setzt sich Vimeo Staff Picks für die Macher ein, die die Welt ein wenig anders sehen."
                },
                "fr-FR": {
                  singular: "Depuis des années, Vimeo Staff Picks défend les créateurs qui voient le monde un peu différemment."
                },
                "ja-JP": {
                  singular: "長年にわたり、Vimeo Staff Picksは世界を少し違った見方で見る制作者たちを支援してきました。"
                },
                "ko-KR": {
                  singular: "수년간 Vimeo Staff Picks는 세상을 조금 다르게 보는 제작자들을 응원해 왔습니다."
                },
                "pt-BR": {
                  singular: "Por anos, o Vimeo Staff Picks tem apoiado os criadores que veem o mundo de forma um pouco diferente."
                },
                "zh-CN": {
                  singular: "多年来，Vimeo Staff Picks 一直支持那些以不同视角看世界的创作者。"
                }
              }
            })
          })]
        }), (0, _v10.jsx)(_v112.Grid, {
          gap: "md",
          mt: {
            base: "xl",
            md: "2xl"
          },
          templateColumns: {
            base: "1fr",
            md: "repeat(3, 1fr)"
          },
          children: _v33.COMMUNITY_FILMS.map(({
            author: _v0,
            href: _v1,
            image: _v2,
            title: _v3
          }) => (0, _v10.jsxs)(_v83.Link, {
            _hover: {
              textDecoration: "none"
            },
            display: "block",
            href: _v1,
            isExternal: !0,
            children: [(0, _v10.jsxs)(_v16.Box, {
              aspectRatio: "416 / 248",
              bg: "fill-component",
              borderRadius: "md",
              overflow: "hidden",
              position: "relative",
              children: [(0, _v10.jsx)(_v113.Image, {
                alt: "",
                h: "100%",
                objectFit: "cover",
                src: _v2,
                w: "100%"
              }), (0, _v10.jsx)(_v16.Box, {
                bottom: "md",
                left: "md",
                lineHeight: 0,
                position: "absolute",
                sx: {
                  boxSize: "72px",
                  "@media (min-width: 768px) and (max-width: 1100px)": {
                    boxSize: "36px"
                  }
                },
                children: (0, _v10.jsx)(_v115, {
                  "aria-hidden": !0,
                  height: "100%",
                  width: "100%"
                })
              })]
            }), (0, _v10.jsx)(_v30.Text, {
              p: "sm",
              textAlign: "right",
              variant: "body-md",
              children: (0, _v31.translate)({
                singular: "{title} by {author}",
                replacements: {
                  title: _v3,
                  author: _v0
                },
                dictionary: {
                  es: {
                    singular: "{title} por {author}"
                  },
                  "de-DE": {
                    singular: "{title} von {author}"
                  },
                  "fr-FR": {
                    singular: "{title} par {author}"
                  },
                  "ja-JP": {
                    singular: "{author}による{title}"
                  },
                  "ko-KR": {
                    singular: "{author}의 {title}"
                  },
                  "pt-BR": {
                    singular: "{title} por {author}"
                  },
                  "zh-CN": {
                    singular: "{title} 由 {author}"
                  }
                }
              })
            })]
          }, _v2))
        }), (0, _v10.jsx)(_v38.Flex, {
          justify: "flex-end",
          mt: {
            base: "xl",
            md: "2xl"
          },
          children: (0, _v10.jsx)(_v110, {
            href: "/channels/staffpicks",
            size: "compact",
            tone: "secondary",
            children: (0, _v31.translate)({
              singular: "Discover Staff Picks",
              dictionary: {
                es: {
                  singular: "Descubre Staff Picks"
                },
                "de-DE": {
                  singular: "Staff Picks entdecken"
                },
                "fr-FR": {
                  singular: "Découvrez les Staff Picks"
                },
                "ja-JP": {
                  singular: "Staff Picksをチェックする"
                },
                "ko-KR": {
                  singular: "Staff Picks 둘러보기"
                },
                "pt-BR": {
                  singular: "Descubra Staff Picks"
                },
                "zh-CN": {
                  singular: "发现 Staff Picks"
                }
              }
            })
          })
        })]
      })
    });
  var _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0);
  let _v122 = [{
      question: (0, _v31.translate)({
        singular: "Who is the Indie Program for?",
        dictionary: {
          es: {
            singular: "¿Para quién es el Indie Program?"
          },
          "de-DE": {
            singular: "Für wen ist das Indie‑Programm?"
          },
          "fr-FR": {
            singular: "À qui s'adresse l'Indie Program?"
          },
          "ja-JP": {
            singular: "Indie Programは誰のためのものですか？"
          },
          "ko-KR": {
            singular: "Indie Program은 누구를 위한 프로그램인가요?"
          },
          "pt-BR": {
            singular: "Para quem é o Indie Program?"
          },
          "zh-CN": {
            singular: "Indie Program 适合谁？"
          }
        }
      }),
      answer: (0, _v31.translate)({
        singular: "Independent filmmakers and people working toward a filmmaking career. Your films must be your own: you hold the rights and have full creative control, including final cut. Company channels and work made to someone else’s brief aren’t eligible.",
        dictionary: {
          es: {
            singular: "Cineastas independientes y personas que trabajan para desarrollar una carrera cinematográfica. Tus películas deben ser de tu autoría: posees los derechos y tienes pleno control creativo, incluido el corte final. Los canales de empresa y los trabajos realizados por encargo no son elegibles."
          },
          "de-DE": {
            singular: "Unabhängige Filmemacher und Personen, die eine Filmemacherkarriere anstreben. Ihre Filme müssen Ihre eigenen sein: Sie halten die Rechte und haben die volle kreative Kontrolle, einschließlich des finalen Schnitts. Firmenkanäle und im Auftrag Dritter erstellte Arbeiten sind nicht teilnahmeberechtigt."
          },
          "fr-FR": {
            singular: "Réalisateurs indépendants et personnes en voie d'entrer dans une carrière cinématographique. Vos films doivent vous appartenir: vous détenez les droits et avez le contrôle créatif total, y compris le montage final. Les chaînes d'entreprise et les travaux réalisés pour le compte d'un tiers ne sont pas éligibles."
          },
          "ja-JP": {
            singular: "独立系の映画制作者や映画制作のキャリアを目指す人々が対象です。あなたの作品は自身のものでなければなりません：権利を保持し、ファイナルカットを含む完全なクリエイティブコントロールを持っていること。企業チャンネルや他者の指示に基づいて制作された仕事は対象外です。"
          },
          "ko-KR": {
            singular: "독립 영화 제작자 및 영화 제작 경력을 쌓아가는 사람들을 위한 프로그램입니다. 작품은 반드시 본인의 것이어야 하며 권리를 보유하고 최종 편집을 포함한 전적인 창작 통제권을 가져야 합니다. 회사 채널이나 타인의 의뢰로 제작된 작품은 자격이 없습니다."
          },
          "pt-BR": {
            singular: "Cineastas independentes e pessoas em busca de uma carreira no cinema. Seus filmes devem ser de sua autoria: você detém os direitos e tem controle criativo total, incluindo corte final. Canais de empresas e trabalhos feitos para um briefing de terceiros não são elegíveis."
          },
          "zh-CN": {
            singular: "独立电影制作人及正在朝电影制作职业努力的人士。您的影片必须为您原创：您持有权利并拥有完全的创作控制权，包括最终剪辑。公司频道和按他人要求制作的作品不符合资格。"
          }
        }
      })
    }, {
      question: (0, _v31.translate)({
        singular: "How do I apply?",
        dictionary: {
          es: {
            singular: "¿Cómo me inscribo?"
          },
          "de-DE": {
            singular: "Wie bewerbe ich mich?"
          },
          "fr-FR": {
            singular: "Comment postuler"
          },
          "ja-JP": {
            singular: "どうやって申請しますか？"
          },
          "ko-KR": {
            singular: "어떻게 신청하나요?"
          },
          "pt-BR": {
            singular: "Como me inscrevo?"
          },
          "zh-CN": {
            singular: "我如何申请？"
          }
        }
      }),
      answer: (0, _v31.translate)({
        singular: "Select “Claim your indie discount,” tell us about your filmmaking, share a profile or portfolio link, and confirm that you meet the eligibility requirements. No payment is taken when you apply.",
        dictionary: {
          es: {
            singular: "Selecciona “Claim your indie discount,” cuéntanos sobre tu labor cinematográfica, comparte un enlace de perfil o portafolio, y confirma que cumples los requisitos de elegibilidad. No se realiza ningún pago al solicitar."
          },
          "de-DE": {
            singular: "Wählen Sie „Beanspruchen Sie Ihren Indie‑Rabatt“, erzählen Sie uns von Ihrer Filmarbeit, teilen Sie einen Profil‑ oder Portfolio‑Link und bestätigen Sie, dass Sie die Teilnahmevoraussetzungen erfüllen. Bei der Bewerbung wird keine Zahlung vorgenommen."
          },
          "fr-FR": {
            singular: "Sélectionnez “Claim your indie discount,” parlez-nous de votre activité cinématographique, partagez un lien vers votre profil ou portfolio, et confirmez que vous remplissez les conditions d'éligibilité. Aucun paiement n'est prélevé lorsque vous postulez."
          },
          "ja-JP": {
            singular: "Select “Claim your indie discount,” を選択し、映画制作について教え、プロフィールやポートフォリオのリンクを共有し、適格要件を満たしていることを確認してください。申請時に支払いは発生しません。"
          },
          "ko-KR": {
            singular: "“Claim your indie discount”을 선택하고 제작 활동에 대해 알려주며 프로필 또는 포트폴리오 링크를 공유하고 자격 요건을 확인하세요. 신청 시 결제가 진행되지는 않습니다."
          },
          "pt-BR": {
            singular: "Selecione “Claim your indie discount,” conte-nos sobre sua produção cinematográfica, compartilhe um link de perfil ou portfólio e confirme que você atende aos requisitos de elegibilidade. Nenhum pagamento é cobrado quando você se inscreve."
          },
          "zh-CN": {
            singular: "选择 “Claim your indie discount”，告诉我们关于您的电影创作，分享个人资料或作品集链接，并确认您符合资格要求。申请时不收取费用。"
          }
        }
      })
    }, {
      question: (0, _v31.translate)({
        singular: "How long does the discount last?",
        dictionary: {
          es: {
            singular: "¿Cuánto dura el descuento?"
          },
          "de-DE": {
            singular: "Wie lange gilt der Rabatt?"
          },
          "fr-FR": {
            singular: "Combien de temps la remise est-elle valable?"
          },
          "ja-JP": {
            singular: "割引はどれくらい続きますか？"
          },
          "ko-KR": {
            singular: "할인은 얼마나 지속되나요?"
          },
          "pt-BR": {
            singular: "Quanto tempo dura o desconto?"
          },
          "zh-CN": {
            singular: "折扣有效期是多久？"
          }
        }
      }),
      answer: (0, _v31.translate)({
        singular: "Your indie discount has no expiry date. If you apply without meeting the program’s eligibility requirements, we may remove the discount.",
        dictionary: {
          es: {
            singular: "Tu descuento indie no tiene fecha de caducidad. Si solicitas sin cumplir los requisitos de elegibilidad del programa, podemos eliminar el descuento."
          },
          "de-DE": {
            singular: "Ihr Indie‑Rabatt hat kein Ablaufdatum. Wenn Sie sich ohne Erfüllung der Teilnahmebedingungen bewerben, können wir den Rabatt entfernen."
          },
          "fr-FR": {
            singular: "Votre remise Indie n'a pas de date d'expiration. Si vous postulez sans remplir les conditions d'éligibilité du programme, nous pouvons retirer la remise."
          },
          "ja-JP": {
            singular: "あなたのインディ割引に有効期限はありません。プログラムの適格要件を満たしていない状態で申請した場合、割引を取り消すことがあります。"
          },
          "ko-KR": {
            singular: "귀하의 indie 할인은 만료일이 없습니다. 프로그램 자격 요건을 충족하지 않고 신청한 경우 할인을 삭제할 수 있습니다."
          },
          "pt-BR": {
            singular: "Seu desconto indie não tem data de expiração. Se você se inscrever sem atender aos requisitos de elegibilidade do programa, podemos remover o desconto."
          },
          "zh-CN": {
            singular: "您的 Indie 计划折扣没有有效期。如果您在不符合计划资格要求的情况下申请，我们可能会取消折扣。"
          }
        }
      })
    }, {
      question: (0, _v31.translate)({
        singular: "I already have a Vimeo plan. Can I switch?",
        dictionary: {
          es: {
            singular: "Ya tengo un plan de Vimeo. ¿Puedo cambiar?"
          },
          "de-DE": {
            singular: "Ich habe bereits einen Vimeo‑Plan. Kann ich wechseln?"
          },
          "fr-FR": {
            singular: "J'ai déjà un forfait Vimeo. Puis-je changer?"
          },
          "ja-JP": {
            singular: "既にVimeoのプランに加入しています。切り替えはできますか？"
          },
          "ko-KR": {
            singular: "이미 Vimeo 플랜이 있습니다. 전환할 수 있나요?"
          },
          "pt-BR": {
            singular: "Já tenho um plano do Vimeo. Posso mudar?"
          },
          "zh-CN": {
            singular: "我已经有 Vimeo 套餐。我可以切换吗？"
          }
        }
      }),
      answer: (0, _v31.translate)({
        singular: "Yes. Eligible existing members can move to the indie price at their next renewal. Before switching, check that Professional’s managed storage and seat limits and features suit your needs.",
        dictionary: {
          es: {
            singular: "Sí. Los miembros existentes elegibles pueden cambiar al precio indie en su próxima renovación. Antes de cambiar, verifica que el almacenamiento gestionado, los límites de asientos y las funciones de Professional se ajusten a tus necesidades."
          },
          "de-DE": {
            singular: "Ja. Berechtigte bestehende Mitglieder können beim nächsten Verlängerungszeitraum zum Indie‑Preis wechseln. Prüfen Sie vor dem Wechsel, ob der verwaltete Speicher, die Sitzplatzbegrenzungen und die Funktionen von Professional Ihren Anforderungen entsprechen."
          },
          "fr-FR": {
            singular: "Oui. Les membres existants éligibles peuvent passer au tarif Indie lors de leur prochain renouvellement. Avant de changer, vérifiez que le stockage géré, les limites de sièges et les fonctionnalités de Professional correspondent à vos besoins."
          },
          "ja-JP": {
            singular: "はい。対象となる既存のメンバーは次回の更新時にインディ価格に移行できます。切り替える前に、Professionalの管理ストレージ、シート数制限、および機能がニーズに合っているか確認してください。"
          },
          "ko-KR": {
            singular: "예. 자격이 있는 기존 회원은 다음 갱신 시 indie 가격으로 전환할 수 있습니다. 전환 전에 Professional의 관리형 스토리지·좌석 수 제한 및 제공 기능이 필요에 맞는지 확인하세요."
          },
          "pt-BR": {
            singular: "Sim. Membros existentes elegíveis podem migrar para o preço indie na próxima renovação. Antes de mudar, verifique se o armazenamento gerenciado, os limites de assentos do Professional e os recursos atendem às suas necessidades."
          },
          "zh-CN": {
            singular: "是的。符合条件的现有会员可在下一次续订时切换到 indie 价格。切换前请检查 Professional 的托管存储、席位限制和功能是否满足您的需求。"
          }
        }
      })
    }, {
      question: (0, _v31.translate)({
        singular: "What happens when spots run out?",
        dictionary: {
          es: {
            singular: "¿Qué sucede cuando se acaban las plazas?"
          },
          "de-DE": {
            singular: "Was passiert, wenn die Plätze vergeben sind?"
          },
          "fr-FR": {
            singular: "Que se passe-t-il lorsque les places sont épuisées?"
          },
          "ja-JP": {
            singular: "枠がなくなったらどうなりますか？"
          },
          "ko-KR": {
            singular: "자리가 소진되면 어떻게 되나요?"
          },
          "pt-BR": {
            singular: "O que acontece quando as vagas acabam?"
          },
          "zh-CN": {
            singular: "名额用完后会怎样？"
          }
        }
      }),
      answer: (0, _v31.translate)({
        singular: "The Indie Program has a limited number of spots. Once they’re all claimed, the discount is no longer available. You can still explore Vimeo’s other plans.",
        dictionary: {
          es: {
            singular: "El Indie Program tiene un número limitado de plazas. Una vez que se agoten, el descuento ya no estará disponible. Aún puedes explorar los demás planes de Vimeo."
          },
          "de-DE": {
            singular: "Das Indie‑Programm hat nur eine begrenzte Anzahl an Plätzen. Sobald diese vergeben sind, ist der Rabatt nicht mehr verfügbar. Sie können weiterhin andere Vimeo‑Tarife ansehen."
          },
          "fr-FR": {
            singular: "L'Indie Program comporte un nombre limité de places. Une fois épuisées, la remise n'est plus disponible. Vous pouvez toujours consulter les autres offres de Vimeo."
          },
          "ja-JP": {
            singular: "Indie Programの枠には限りがあります。すべて埋まった場合、割引は利用できなくなります。他のVimeoのプランは引き続きご確認いただけます。"
          },
          "ko-KR": {
            singular: "Indie Program은 자리가 한정되어 있습니다. 모든 자리가 소진되면 할인을 받을 수 없습니다. 대신 Vimeo의 다른 플랜을 살펴보실 수 있습니다."
          },
          "pt-BR": {
            singular: "O Indie Program tem um número limitado de vagas. Uma vez todas preenchidas, o desconto não estará mais disponível. Você ainda pode explorar outros planos do Vimeo."
          },
          "zh-CN": {
            singular: "Indie Program 名额有限。一旦全部被认领，折扣将不再提供。您仍可查看 Vimeo 的其他方案。"
          }
        }
      })
    }, {
      question: (0, _v31.translate)({
        singular: "Can I upgrade later?",
        dictionary: {
          es: {
            singular: "¿Puedo actualizar más adelante?"
          },
          "de-DE": {
            singular: "Kann ich später upgraden?"
          },
          "fr-FR": {
            singular: "Puis-je évoluer vers un forfait supérieur plus tard"
          },
          "ja-JP": {
            singular: "後でアップグレードできますか？"
          },
          "ko-KR": {
            singular: "나중에 업그레이드할 수 있나요?"
          },
          "pt-BR": {
            singular: "Posso atualizar depois?"
          },
          "zh-CN": {
            singular: "我可以稍后升级吗？"
          }
        }
      }),
      answer: (0, _v31.translate)({
        singular: "Yes. You can move to another Vimeo plan if you need more storage or features. The Indie Program discount applies only to Vimeo Professional.",
        dictionary: {
          es: {
            singular: "Sí. Puedes pasarte a otro plan de Vimeo si necesitas más almacenamiento o funciones. El descuento del Indie Program se aplica únicamente a Vimeo Professional."
          },
          "de-DE": {
            singular: "Ja. Sie können zu einem anderen Vimeo‑Tarif wechseln, wenn Sie mehr Speicher oder Funktionen benötigen. Der Indie‑Programm‑Rabatt gilt nur für Vimeo Professional."
          },
          "fr-FR": {
            singular: "Oui. Vous pouvez passer à un autre forfait Vimeo si vous avez besoin de plus de stockage ou de fonctionnalités. La remise de l'Indie Program s'applique uniquement à Vimeo Professional."
          },
          "ja-JP": {
            singular: "はい。より多くのストレージや機能が必要な場合は、別のVimeoプランに移行できます。Indie Programの割引はVimeo Professionalにのみ適用されます。"
          },
          "ko-KR": {
            singular: "예. 더 많은 스토리지나 기능이 필요하면 다른 Vimeo 플랜으로 전환할 수 있습니다. Indie Program 할인은 Vimeo Professional에만 적용됩니다."
          },
          "pt-BR": {
            singular: "Sim. Você pode migrar para outro plano do Vimeo se precisar de mais armazenamento ou recursos. O desconto do Indie Program aplica-se somente ao Vimeo Professional."
          },
          "zh-CN": {
            singular: "是的。如果您需要更多存储或功能，可以切换到其他 Vimeo 方案。Indie Program 折扣仅适用于 Vimeo Professional。"
          }
        }
      })
    }],
    _v123 = () => (0, _v10.jsx)(_v16.Box, {
      as: "section",
      bg: "surface",
      py: {
        base: "3xl",
        md: "124px"
      },
      children: (0, _v10.jsx)(_v103, {
        children: (0, _v10.jsxs)(_v38.Flex, {
          align: {
            lg: "flex-start"
          },
          direction: {
            base: "column",
            lg: "row"
          },
          gap: {
            base: "xl",
            lg: "2xl",
            xl: "80px"
          },
          children: [(0, _v10.jsxs)(_v30.Text, {
            as: "h2",
            flex: {
              base: "0 0 auto",
              lg: "0 0 37.5%"
            },
            variant: {
              base: "heading-xl",
              md: "heading-3xl"
            },
            children: [(0, _v31.translate)({
              singular: "Questions,",
              dictionary: {
                es: {
                  singular: "Preguntas,"
                },
                "de-DE": {
                  singular: "Fragen,"
                },
                "fr-FR": {
                  singular: "Des questions,"
                },
                "ja-JP": {
                  singular: "ご質問、"
                },
                "ko-KR": {
                  singular: "질문,"
                },
                "pt-BR": {
                  singular: "Perguntas,"
                },
                "zh-CN": {
                  singular: "有问题，"
                }
              }
            }), (0, _v10.jsx)("br", {}), (0, _v31.translate)({
              singular: "answered.",
              dictionary: {
                es: {
                  singular: "respondido."
                },
                "de-DE": {
                  singular: "beantwortet."
                },
                "fr-FR": {
                  singular: "répondu."
                },
                "ja-JP": {
                  singular: "回答済み。"
                },
                "ko-KR": {
                  singular: "답변됨."
                },
                "pt-BR": {
                  singular: "respondido."
                },
                "zh-CN": {
                  singular: "已回复。"
                }
              }
            })]
          }), (0, _v10.jsx)(_v117.Accordion, {
            allowToggle: !0,
            borderColor: "rgba(193, 210, 223, 0.18)",
            borderTopWidth: "1px",
            defaultIndex: 0,
            flex: "1",
            gap: "0",
            minW: "0",
            children: _v122.map(_v0 => (0, _v10.jsxs)(_v119.AccordionItem, {
              bg: "transparent",
              borderBottomWidth: "1px",
              borderColor: "rgba(193, 210, 223, 0.18)",
              borderRadius: "0",
              children: [(0, _v10.jsxs)(_v118.AccordionButton, {
                _hover: {
                  bg: "transparent"
                },
                borderRadius: "0",
                fontFamily: "heading",
                fontSize: {
                  base: "18px",
                  md: "19px"
                },
                fontWeight: "medium",
                justifyContent: "space-between",
                letterSpacing: {
                  base: "-0.45px",
                  md: "-0.4px"
                },
                lineHeight: {
                  base: "25px",
                  md: "31.39px"
                },
                px: "0",
                py: "24px",
                children: [(0, _v10.jsx)(_v16.Box, {
                  flex: "1",
                  textAlign: "left",
                  children: _v0.question
                }), (0, _v10.jsxs)(_v16.Box, {
                  "aria-hidden": "true",
                  boxSize: "20px",
                  flex: "0 0 20px",
                  position: "relative",
                  children: [(0, _v10.jsx)(_v72.Plus, {
                    boxSize: "20px",
                    left: "0",
                    position: "absolute",
                    sx: {
                      "[aria-expanded=true] &": {
                        display: "none"
                      }
                    },
                    top: "0"
                  }), (0, _v10.jsx)(_v121.Minus, {
                    boxSize: "20px",
                    left: "0",
                    position: "absolute",
                    sx: {
                      "[aria-expanded=false] &": {
                        display: "none"
                      }
                    },
                    top: "0"
                  })]
                })]
              }), (0, _v10.jsx)(_v120.AccordionPanel, {
                pb: "24px",
                pt: "0",
                px: "0",
                children: (0, _v10.jsx)(_v30.Text, {
                  color: "text-secondary",
                  fontSize: "16px",
                  letterSpacing: "-0.4px",
                  lineHeight: "23.2px",
                  children: _v0.answer
                })
              })]
            }, _v0.question))
          })]
        })
      })
    }),
    _v124 = `url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 8' preserveAspectRatio='none'><path d='M2 4.8C22 3.5 40 5.6 62 4.4 84 3.4 104 5.5 126 4.3 148 3.4 166 5.4 186 4.2 191 4 195 4.2 198 5' fill='none' stroke='#13D4FE' stroke-linecap='round' stroke-width='1.5'/></svg>").replaceAll("'", "%27")}")`,
    _v125 = ({
      children: _v0
    }) => (0, _v10.jsx)(_v16.Box, {
      as: "span",
      style: {
        backgroundImage: _v124
      },
      sx: {
        "&": {
          backgroundPosition: "0 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 0.5em"
        },
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone"
      },
      children: _v0
    }),
    _v126 = "srgb",
    _v127 = "srgb-linear",
    _v128 = "linear",
    _v129 = "srgb",
    _v130 = "300 es";
  class _v131 {
    addEventListener(_v0, _v1) {
      void 0 === this._listeners && (this._listeners = {});
      let _v2 = this._listeners;
      void 0 === _v2[_v0] && (_v2[_v0] = []), -1 === _v2[_v0].indexOf(_v1) && _v2[_v0].push(_v1);
    }
    hasEventListener(_v0, _v1) {
      let _v2 = this._listeners;
      return void 0 !== _v2 && void 0 !== _v2[_v0] && -1 !== _v2[_v0].indexOf(_v1);
    }
    removeEventListener(_v0, _v1) {
      let _v2 = this._listeners;
      if (void 0 === _v2) return;
      let _v3 = _v2[_v0];
      if (void 0 !== _v3) {
        let _v0 = _v3.indexOf(_v1);
        -1 !== _v0 && _v3.splice(_v0, 1);
      }
    }
    dispatchEvent(_v0) {
      let _v1 = this._listeners;
      if (void 0 === _v1) return;
      let _v2 = _v1[_v0.type];
      if (void 0 !== _v2) {
        _v0.target = this;
        let _v0 = _v2.slice(0);
        for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) _v0[_v0].call(this, _v0);
        _v0.target = null;
      }
    }
  }
  let _v132 = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"],
    _v133 = Math.PI / 180,
    _v134 = 180 / Math.PI;
  function _v135() {
    let _v0 = 0 * Math.random() | 0,
      _v1 = 0 * Math.random() | 0,
      _v2 = 0 * Math.random() | 0,
      _v3 = 0 * Math.random() | 0;
    return (_v132[255 & _v0] + _v132[_v0 >> 8 & 255] + _v132[_v0 >> 16 & 255] + _v132[_v0 >> 24 & 255] + "-" + _v132[255 & _v1] + _v132[_v1 >> 8 & 255] + "-" + _v132[_v1 >> 16 & 15 | 64] + _v132[_v1 >> 24 & 255] + "-" + _v132[63 & _v2 | 128] + _v132[_v2 >> 8 & 255] + "-" + _v132[_v2 >> 16 & 255] + _v132[_v2 >> 24 & 255] + _v132[255 & _v3] + _v132[_v3 >> 8 & 255] + _v132[_v3 >> 16 & 255] + _v132[_v3 >> 24 & 255]).toLowerCase();
  }
  function _v136(_v0, _v1, _v2) {
    return Math.max(_v1, Math.min(_v2, _v0));
  }
  function _v137(_v0, _v1) {
    switch (_v1.constructor) {
      case Float32Array:
        return _v0;
      case Uint32Array:
        return _v0 / 0;
      case Uint16Array:
        return _v0 / 0;
      case Uint8Array:
        return _v0 / 255;
      case Int32Array:
        return Math.max(_v0 / 0, -1);
      case Int16Array:
        return Math.max(_v0 / 0, -1);
      case Int8Array:
        return Math.max(_v0 / 127, -1);
      default:
        throw Error("Invalid component type.");
    }
  }
  function _v138(_v0, _v1) {
    switch (_v1.constructor) {
      case Float32Array:
        return _v0;
      case Uint32Array:
        return Math.round(0 * _v0);
      case Uint16Array:
        return Math.round(0 * _v0);
      case Uint8Array:
        return Math.round(255 * _v0);
      case Int32Array:
        return Math.round(0 * _v0);
      case Int16Array:
        return Math.round(0 * _v0);
      case Int8Array:
        return Math.round(127 * _v0);
      default:
        throw Error("Invalid component type.");
    }
  }
  class _v139 {
    constructor(_v0 = 0, _v1 = 0) {
      _v139.prototype.isVector2 = !0, this.x = _v0, this.y = _v1;
    }
    get width() {
      return this.x;
    }
    set width(_v0) {
      this.x = _v0;
    }
    get height() {
      return this.y;
    }
    set height(_v0) {
      this.y = _v0;
    }
    set(_v0, _v1) {
      return this.x = _v0, this.y = _v1, this;
    }
    setScalar(_v0) {
      return this.x = _v0, this.y = _v0, this;
    }
    setX(_v0) {
      return this.x = _v0, this;
    }
    setY(_v0) {
      return this.y = _v0, this;
    }
    setComponent(_v0, _v1) {
      switch (_v0) {
        case 0:
          this.x = _v1;
          break;
        case 1:
          this.y = _v1;
          break;
        default:
          throw Error("index is out of range: " + _v0);
      }
      return this;
    }
    getComponent(_v0) {
      switch (_v0) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw Error("index is out of range: " + _v0);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(_v0) {
      return this.x = _v0.x, this.y = _v0.y, this;
    }
    add(_v0) {
      return this.x += _v0.x, this.y += _v0.y, this;
    }
    addScalar(_v0) {
      return this.x += _v0, this.y += _v0, this;
    }
    addVectors(_v0, _v1) {
      return this.x = _v0.x + _v1.x, this.y = _v0.y + _v1.y, this;
    }
    addScaledVector(_v0, _v1) {
      return this.x += _v0.x * _v1, this.y += _v0.y * _v1, this;
    }
    sub(_v0) {
      return this.x -= _v0.x, this.y -= _v0.y, this;
    }
    subScalar(_v0) {
      return this.x -= _v0, this.y -= _v0, this;
    }
    subVectors(_v0, _v1) {
      return this.x = _v0.x - _v1.x, this.y = _v0.y - _v1.y, this;
    }
    multiply(_v0) {
      return this.x *= _v0.x, this.y *= _v0.y, this;
    }
    multiplyScalar(_v0) {
      return this.x *= _v0, this.y *= _v0, this;
    }
    divide(_v0) {
      return this.x /= _v0.x, this.y /= _v0.y, this;
    }
    divideScalar(_v0) {
      return this.multiplyScalar(1 / _v0);
    }
    applyMatrix3(_v0) {
      let _v1 = this.x,
        _v2 = this.y,
        _v3 = _v0.elements;
      return this.x = _v3[0] * _v1 + _v3[3] * _v2 + _v3[6], this.y = _v3[1] * _v1 + _v3[4] * _v2 + _v3[7], this;
    }
    min(_v0) {
      return this.x = Math.min(this.x, _v0.x), this.y = Math.min(this.y, _v0.y), this;
    }
    max(_v0) {
      return this.x = Math.max(this.x, _v0.x), this.y = Math.max(this.y, _v0.y), this;
    }
    clamp(_v0, _v1) {
      return this.x = _v136(this.x, _v0.x, _v1.x), this.y = _v136(this.y, _v0.y, _v1.y), this;
    }
    clampScalar(_v0, _v1) {
      return this.x = _v136(this.x, _v0, _v1), this.y = _v136(this.y, _v0, _v1), this;
    }
    clampLength(_v0, _v1) {
      let _v2 = this.length();
      return this.divideScalar(_v2 || 1).multiplyScalar(_v136(_v2, _v0, _v1));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(_v0) {
      return this.x * _v0.x + this.y * _v0.y;
    }
    cross(_v0) {
      return this.x * _v0.y - this.y * _v0.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(_v0) {
      let _v1 = Math.sqrt(this.lengthSq() * _v0.lengthSq());
      return 0 === _v1 ? Math.PI / 2 : Math.acos(_v136(this.dot(_v0) / _v1, -1, 1));
    }
    distanceTo(_v0) {
      return Math.sqrt(this.distanceToSquared(_v0));
    }
    distanceToSquared(_v0) {
      let _v1 = this.x - _v0.x,
        _v2 = this.y - _v0.y;
      return _v1 * _v1 + _v2 * _v2;
    }
    manhattanDistanceTo(_v0) {
      return Math.abs(this.x - _v0.x) + Math.abs(this.y - _v0.y);
    }
    setLength(_v0) {
      return this.normalize().multiplyScalar(_v0);
    }
    lerp(_v0, _v1) {
      return this.x += (_v0.x - this.x) * _v1, this.y += (_v0.y - this.y) * _v1, this;
    }
    lerpVectors(_v0, _v1, _v2) {
      return this.x = _v0.x + (_v1.x - _v0.x) * _v2, this.y = _v0.y + (_v1.y - _v0.y) * _v2, this;
    }
    equals(_v0) {
      return _v0.x === this.x && _v0.y === this.y;
    }
    fromArray(_v0, _v1 = 0) {
      return this.x = _v0[_v1], this.y = _v0[_v1 + 1], this;
    }
    toArray(_v0 = [], _v1 = 0) {
      return _v0[_v1] = this.x, _v0[_v1 + 1] = this.y, _v0;
    }
    fromBufferAttribute(_v0, _v1) {
      return this.x = _v0.getX(_v1), this.y = _v0.getY(_v1), this;
    }
    rotateAround(_v0, _v1) {
      let _v2 = Math.cos(_v1),
        _v3 = Math.sin(_v1),
        _v4 = this.x - _v0.x,
        _v5 = this.y - _v0.y;
      return this.x = _v4 * _v2 - _v5 * _v3 + _v0.x, this.y = _v4 * _v3 + _v5 * _v2 + _v0.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class _v140 {
    constructor(_v0 = 0, _v1 = 0, _v2 = 0, _v3 = 1) {
      this.isQuaternion = !0, this._x = _v0, this._y = _v1, this._z = _v2, this._w = _v3;
    }
    static slerpFlat(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
      let _v7 = _v2[_v3 + 0],
        _v8 = _v2[_v3 + 1],
        _v9 = _v2[_v3 + 2],
        _v10 = _v2[_v3 + 3],
        _v11 = _v4[_v5 + 0],
        _v12 = _v4[_v5 + 1],
        _v13 = _v4[_v5 + 2],
        _v14 = _v4[_v5 + 3];
      if (0 === _v6) {
        _v0[_v1 + 0] = _v7, _v0[_v1 + 1] = _v8, _v0[_v1 + 2] = _v9, _v0[_v1 + 3] = _v10;
        return;
      }
      if (1 === _v6) {
        _v0[_v1 + 0] = _v11, _v0[_v1 + 1] = _v12, _v0[_v1 + 2] = _v13, _v0[_v1 + 3] = _v14;
        return;
      }
      if (_v10 !== _v14 || _v7 !== _v11 || _v8 !== _v12 || _v9 !== _v13) {
        let _v0 = 1 - _v6,
          _v1 = _v7 * _v11 + _v8 * _v12 + _v9 * _v13 + _v10 * _v14,
          _v2 = _v1 >= 0 ? 1 : -1,
          _v3 = 1 - _v1 * _v1;
        if (_v3 > Number.EPSILON) {
          let _v0 = Math.sqrt(_v3),
            _v1 = Math.atan2(_v0, _v1 * _v2);
          _v0 = Math.sin(_v0 * _v1) / _v0, _v6 = Math.sin(_v6 * _v1) / _v0;
        }
        let _v4 = _v6 * _v2;
        if (_v7 = _v7 * _v0 + _v11 * _v4, _v8 = _v8 * _v0 + _v12 * _v4, _v9 = _v9 * _v0 + _v13 * _v4, _v10 = _v10 * _v0 + _v14 * _v4, _v0 === 1 - _v6) {
          let _v0 = 1 / Math.sqrt(_v7 * _v7 + _v8 * _v8 + _v9 * _v9 + _v10 * _v10);
          _v7 *= _v0, _v8 *= _v0, _v9 *= _v0, _v10 *= _v0;
        }
      }
      _v0[_v1] = _v7, _v0[_v1 + 1] = _v8, _v0[_v1 + 2] = _v9, _v0[_v1 + 3] = _v10;
    }
    static multiplyQuaternionsFlat(_v0, _v1, _v2, _v3, _v4, _v5) {
      let _v6 = _v2[_v3],
        _v7 = _v2[_v3 + 1],
        _v8 = _v2[_v3 + 2],
        _v9 = _v2[_v3 + 3],
        _v10 = _v4[_v5],
        _v11 = _v4[_v5 + 1],
        _v12 = _v4[_v5 + 2],
        _v13 = _v4[_v5 + 3];
      return _v0[_v1] = _v6 * _v13 + _v9 * _v10 + _v7 * _v12 - _v8 * _v11, _v0[_v1 + 1] = _v7 * _v13 + _v9 * _v11 + _v8 * _v10 - _v6 * _v12, _v0[_v1 + 2] = _v8 * _v13 + _v9 * _v12 + _v6 * _v11 - _v7 * _v10, _v0[_v1 + 3] = _v9 * _v13 - _v6 * _v10 - _v7 * _v11 - _v8 * _v12, _v0;
    }
    get x() {
      return this._x;
    }
    set x(_v0) {
      this._x = _v0, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(_v0) {
      this._y = _v0, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(_v0) {
      this._z = _v0, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(_v0) {
      this._w = _v0, this._onChangeCallback();
    }
    set(_v0, _v1, _v2, _v3) {
      return this._x = _v0, this._y = _v1, this._z = _v2, this._w = _v3, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(_v0) {
      return this._x = _v0.x, this._y = _v0.y, this._z = _v0.z, this._w = _v0.w, this._onChangeCallback(), this;
    }
    setFromEuler(_v0, _v1 = !0) {
      let _v2 = _v0._x,
        _v3 = _v0._y,
        _v4 = _v0._z,
        _v5 = _v0._order,
        _v6 = Math.cos,
        _v7 = Math.sin,
        _v8 = _v6(_v2 / 2),
        _v9 = _v6(_v3 / 2),
        _v10 = _v6(_v4 / 2),
        _v11 = _v7(_v2 / 2),
        _v12 = _v7(_v3 / 2),
        _v13 = _v7(_v4 / 2);
      switch (_v5) {
        case "XYZ":
          this._x = _v11 * _v9 * _v10 + _v8 * _v12 * _v13, this._y = _v8 * _v12 * _v10 - _v11 * _v9 * _v13, this._z = _v8 * _v9 * _v13 + _v11 * _v12 * _v10, this._w = _v8 * _v9 * _v10 - _v11 * _v12 * _v13;
          break;
        case "YXZ":
          this._x = _v11 * _v9 * _v10 + _v8 * _v12 * _v13, this._y = _v8 * _v12 * _v10 - _v11 * _v9 * _v13, this._z = _v8 * _v9 * _v13 - _v11 * _v12 * _v10, this._w = _v8 * _v9 * _v10 + _v11 * _v12 * _v13;
          break;
        case "ZXY":
          this._x = _v11 * _v9 * _v10 - _v8 * _v12 * _v13, this._y = _v8 * _v12 * _v10 + _v11 * _v9 * _v13, this._z = _v8 * _v9 * _v13 + _v11 * _v12 * _v10, this._w = _v8 * _v9 * _v10 - _v11 * _v12 * _v13;
          break;
        case "ZYX":
          this._x = _v11 * _v9 * _v10 - _v8 * _v12 * _v13, this._y = _v8 * _v12 * _v10 + _v11 * _v9 * _v13, this._z = _v8 * _v9 * _v13 - _v11 * _v12 * _v10, this._w = _v8 * _v9 * _v10 + _v11 * _v12 * _v13;
          break;
        case "YZX":
          this._x = _v11 * _v9 * _v10 + _v8 * _v12 * _v13, this._y = _v8 * _v12 * _v10 + _v11 * _v9 * _v13, this._z = _v8 * _v9 * _v13 - _v11 * _v12 * _v10, this._w = _v8 * _v9 * _v10 - _v11 * _v12 * _v13;
          break;
        case "XZY":
          this._x = _v11 * _v9 * _v10 - _v8 * _v12 * _v13, this._y = _v8 * _v12 * _v10 - _v11 * _v9 * _v13, this._z = _v8 * _v9 * _v13 + _v11 * _v12 * _v10, this._w = _v8 * _v9 * _v10 + _v11 * _v12 * _v13;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + _v5);
      }
      return !0 === _v1 && this._onChangeCallback(), this;
    }
    setFromAxisAngle(_v0, _v1) {
      let _v2 = _v1 / 2,
        _v3 = Math.sin(_v2);
      return this._x = _v0.x * _v3, this._y = _v0.y * _v3, this._z = _v0.z * _v3, this._w = Math.cos(_v2), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(_v0) {
      let _v1 = _v0.elements,
        _v2 = _v1[0],
        _v3 = _v1[4],
        _v4 = _v1[8],
        _v5 = _v1[1],
        _v6 = _v1[5],
        _v7 = _v1[9],
        _v8 = _v1[2],
        _v9 = _v1[6],
        _v10 = _v1[10],
        _v11 = _v2 + _v6 + _v10;
      if (_v11 > 0) {
        let _v0 = .5 / Math.sqrt(_v11 + 1);
        this._w = .25 / _v0, this._x = (_v9 - _v7) * _v0, this._y = (_v4 - _v8) * _v0, this._z = (_v5 - _v3) * _v0;
      } else if (_v2 > _v6 && _v2 > _v10) {
        let _v0 = 2 * Math.sqrt(1 + _v2 - _v6 - _v10);
        this._w = (_v9 - _v7) / _v0, this._x = .25 * _v0, this._y = (_v3 + _v5) / _v0, this._z = (_v4 + _v8) / _v0;
      } else if (_v6 > _v10) {
        let _v0 = 2 * Math.sqrt(1 + _v6 - _v2 - _v10);
        this._w = (_v4 - _v8) / _v0, this._x = (_v3 + _v5) / _v0, this._y = .25 * _v0, this._z = (_v7 + _v9) / _v0;
      } else {
        let _v0 = 2 * Math.sqrt(1 + _v10 - _v2 - _v6);
        this._w = (_v5 - _v3) / _v0, this._x = (_v4 + _v8) / _v0, this._y = (_v7 + _v9) / _v0, this._z = .25 * _v0;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(_v0, _v1) {
      let _v2 = _v0.dot(_v1) + 1;
      return _v2 < 1e-8 ? (_v2 = 0, Math.abs(_v0.x) > Math.abs(_v0.z) ? (this._x = -_v0.y, this._y = _v0.x, this._z = 0) : (this._x = 0, this._y = -_v0.z, this._z = _v0.y)) : (this._x = _v0.y * _v1.z - _v0.z * _v1.y, this._y = _v0.z * _v1.x - _v0.x * _v1.z, this._z = _v0.x * _v1.y - _v0.y * _v1.x), this._w = _v2, this.normalize();
    }
    angleTo(_v0) {
      return 2 * Math.acos(Math.abs(_v136(this.dot(_v0), -1, 1)));
    }
    rotateTowards(_v0, _v1) {
      let _v2 = this.angleTo(_v0);
      if (0 === _v2) return this;
      let _v3 = Math.min(1, _v1 / _v2);
      return this.slerp(_v0, _v3), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(_v0) {
      return this._x * _v0._x + this._y * _v0._y + this._z * _v0._z + this._w * _v0._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let _v0 = this.length();
      return 0 === _v0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (_v0 = 1 / _v0, this._x = this._x * _v0, this._y = this._y * _v0, this._z = this._z * _v0, this._w = this._w * _v0), this._onChangeCallback(), this;
    }
    multiply(_v0) {
      return this.multiplyQuaternions(this, _v0);
    }
    premultiply(_v0) {
      return this.multiplyQuaternions(_v0, this);
    }
    multiplyQuaternions(_v0, _v1) {
      let _v2 = _v0._x,
        _v3 = _v0._y,
        _v4 = _v0._z,
        _v5 = _v0._w,
        _v6 = _v1._x,
        _v7 = _v1._y,
        _v8 = _v1._z,
        _v9 = _v1._w;
      return this._x = _v2 * _v9 + _v5 * _v6 + _v3 * _v8 - _v4 * _v7, this._y = _v3 * _v9 + _v5 * _v7 + _v4 * _v6 - _v2 * _v8, this._z = _v4 * _v9 + _v5 * _v8 + _v2 * _v7 - _v3 * _v6, this._w = _v5 * _v9 - _v2 * _v6 - _v3 * _v7 - _v4 * _v8, this._onChangeCallback(), this;
    }
    slerp(_v0, _v1) {
      if (0 === _v1) return this;
      if (1 === _v1) return this.copy(_v0);
      let _v2 = this._x,
        _v3 = this._y,
        _v4 = this._z,
        _v5 = this._w,
        _v6 = _v5 * _v0._w + _v2 * _v0._x + _v3 * _v0._y + _v4 * _v0._z;
      if (_v6 < 0 ? (this._w = -_v0._w, this._x = -_v0._x, this._y = -_v0._y, this._z = -_v0._z, _v6 = -_v6) : this.copy(_v0), _v6 >= 1) return this._w = _v5, this._x = _v2, this._y = _v3, this._z = _v4, this;
      let _v7 = 1 - _v6 * _v6;
      if (_v7 <= Number.EPSILON) {
        let _v0 = 1 - _v1;
        return this._w = _v0 * _v5 + _v1 * this._w, this._x = _v0 * _v2 + _v1 * this._x, this._y = _v0 * _v3 + _v1 * this._y, this._z = _v0 * _v4 + _v1 * this._z, this.normalize(), this;
      }
      let _v8 = Math.sqrt(_v7),
        _v9 = Math.atan2(_v8, _v6),
        _v10 = Math.sin((1 - _v1) * _v9) / _v8,
        _v11 = Math.sin(_v1 * _v9) / _v8;
      return this._w = _v5 * _v10 + this._w * _v11, this._x = _v2 * _v10 + this._x * _v11, this._y = _v3 * _v10 + this._y * _v11, this._z = _v4 * _v10 + this._z * _v11, this._onChangeCallback(), this;
    }
    slerpQuaternions(_v0, _v1, _v2) {
      return this.copy(_v0).slerp(_v1, _v2);
    }
    random() {
      let _v0 = 2 * Math.PI * Math.random(),
        _v1 = 2 * Math.PI * Math.random(),
        _v2 = Math.random(),
        _v3 = Math.sqrt(1 - _v2),
        _v4 = Math.sqrt(_v2);
      return this.set(_v3 * Math.sin(_v0), _v3 * Math.cos(_v0), _v4 * Math.sin(_v1), _v4 * Math.cos(_v1));
    }
    equals(_v0) {
      return _v0._x === this._x && _v0._y === this._y && _v0._z === this._z && _v0._w === this._w;
    }
    fromArray(_v0, _v1 = 0) {
      return this._x = _v0[_v1], this._y = _v0[_v1 + 1], this._z = _v0[_v1 + 2], this._w = _v0[_v1 + 3], this._onChangeCallback(), this;
    }
    toArray(_v0 = [], _v1 = 0) {
      return _v0[_v1] = this._x, _v0[_v1 + 1] = this._y, _v0[_v1 + 2] = this._z, _v0[_v1 + 3] = this._w, _v0;
    }
    fromBufferAttribute(_v0, _v1) {
      return this._x = _v0.getX(_v1), this._y = _v0.getY(_v1), this._z = _v0.getZ(_v1), this._w = _v0.getW(_v1), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(_v0) {
      return this._onChangeCallback = _v0, this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class _v141 {
    constructor(_v0 = 0, _v1 = 0, _v2 = 0) {
      _v141.prototype.isVector3 = !0, this.x = _v0, this.y = _v1, this.z = _v2;
    }
    set(_v0, _v1, _v2) {
      return void 0 === _v2 && (_v2 = this.z), this.x = _v0, this.y = _v1, this.z = _v2, this;
    }
    setScalar(_v0) {
      return this.x = _v0, this.y = _v0, this.z = _v0, this;
    }
    setX(_v0) {
      return this.x = _v0, this;
    }
    setY(_v0) {
      return this.y = _v0, this;
    }
    setZ(_v0) {
      return this.z = _v0, this;
    }
    setComponent(_v0, _v1) {
      switch (_v0) {
        case 0:
          this.x = _v1;
          break;
        case 1:
          this.y = _v1;
          break;
        case 2:
          this.z = _v1;
          break;
        default:
          throw Error("index is out of range: " + _v0);
      }
      return this;
    }
    getComponent(_v0) {
      switch (_v0) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw Error("index is out of range: " + _v0);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(_v0) {
      return this.x = _v0.x, this.y = _v0.y, this.z = _v0.z, this;
    }
    add(_v0) {
      return this.x += _v0.x, this.y += _v0.y, this.z += _v0.z, this;
    }
    addScalar(_v0) {
      return this.x += _v0, this.y += _v0, this.z += _v0, this;
    }
    addVectors(_v0, _v1) {
      return this.x = _v0.x + _v1.x, this.y = _v0.y + _v1.y, this.z = _v0.z + _v1.z, this;
    }
    addScaledVector(_v0, _v1) {
      return this.x += _v0.x * _v1, this.y += _v0.y * _v1, this.z += _v0.z * _v1, this;
    }
    sub(_v0) {
      return this.x -= _v0.x, this.y -= _v0.y, this.z -= _v0.z, this;
    }
    subScalar(_v0) {
      return this.x -= _v0, this.y -= _v0, this.z -= _v0, this;
    }
    subVectors(_v0, _v1) {
      return this.x = _v0.x - _v1.x, this.y = _v0.y - _v1.y, this.z = _v0.z - _v1.z, this;
    }
    multiply(_v0) {
      return this.x *= _v0.x, this.y *= _v0.y, this.z *= _v0.z, this;
    }
    multiplyScalar(_v0) {
      return this.x *= _v0, this.y *= _v0, this.z *= _v0, this;
    }
    multiplyVectors(_v0, _v1) {
      return this.x = _v0.x * _v1.x, this.y = _v0.y * _v1.y, this.z = _v0.z * _v1.z, this;
    }
    applyEuler(_v0) {
      return this.applyQuaternion(_v143.setFromEuler(_v0));
    }
    applyAxisAngle(_v0, _v1) {
      return this.applyQuaternion(_v143.setFromAxisAngle(_v0, _v1));
    }
    applyMatrix3(_v0) {
      let _v1 = this.x,
        _v2 = this.y,
        _v3 = this.z,
        _v4 = _v0.elements;
      return this.x = _v4[0] * _v1 + _v4[3] * _v2 + _v4[6] * _v3, this.y = _v4[1] * _v1 + _v4[4] * _v2 + _v4[7] * _v3, this.z = _v4[2] * _v1 + _v4[5] * _v2 + _v4[8] * _v3, this;
    }
    applyNormalMatrix(_v0) {
      return this.applyMatrix3(_v0).normalize();
    }
    applyMatrix4(_v0) {
      let _v1 = this.x,
        _v2 = this.y,
        _v3 = this.z,
        _v4 = _v0.elements,
        _v5 = 1 / (_v4[3] * _v1 + _v4[7] * _v2 + _v4[11] * _v3 + _v4[15]);
      return this.x = (_v4[0] * _v1 + _v4[4] * _v2 + _v4[8] * _v3 + _v4[12]) * _v5, this.y = (_v4[1] * _v1 + _v4[5] * _v2 + _v4[9] * _v3 + _v4[13]) * _v5, this.z = (_v4[2] * _v1 + _v4[6] * _v2 + _v4[10] * _v3 + _v4[14]) * _v5, this;
    }
    applyQuaternion(_v0) {
      let _v1 = this.x,
        _v2 = this.y,
        _v3 = this.z,
        _v4 = _v0.x,
        _v5 = _v0.y,
        _v6 = _v0.z,
        _v7 = _v0.w,
        _v8 = 2 * (_v5 * _v3 - _v6 * _v2),
        _v9 = 2 * (_v6 * _v1 - _v4 * _v3),
        _v10 = 2 * (_v4 * _v2 - _v5 * _v1);
      return this.x = _v1 + _v7 * _v8 + _v5 * _v10 - _v6 * _v9, this.y = _v2 + _v7 * _v9 + _v6 * _v8 - _v4 * _v10, this.z = _v3 + _v7 * _v10 + _v4 * _v9 - _v5 * _v8, this;
    }
    project(_v0) {
      return this.applyMatrix4(_v0.matrixWorldInverse).applyMatrix4(_v0.projectionMatrix);
    }
    unproject(_v0) {
      return this.applyMatrix4(_v0.projectionMatrixInverse).applyMatrix4(_v0.matrixWorld);
    }
    transformDirection(_v0) {
      let _v1 = this.x,
        _v2 = this.y,
        _v3 = this.z,
        _v4 = _v0.elements;
      return this.x = _v4[0] * _v1 + _v4[4] * _v2 + _v4[8] * _v3, this.y = _v4[1] * _v1 + _v4[5] * _v2 + _v4[9] * _v3, this.z = _v4[2] * _v1 + _v4[6] * _v2 + _v4[10] * _v3, this.normalize();
    }
    divide(_v0) {
      return this.x /= _v0.x, this.y /= _v0.y, this.z /= _v0.z, this;
    }
    divideScalar(_v0) {
      return this.multiplyScalar(1 / _v0);
    }
    min(_v0) {
      return this.x = Math.min(this.x, _v0.x), this.y = Math.min(this.y, _v0.y), this.z = Math.min(this.z, _v0.z), this;
    }
    max(_v0) {
      return this.x = Math.max(this.x, _v0.x), this.y = Math.max(this.y, _v0.y), this.z = Math.max(this.z, _v0.z), this;
    }
    clamp(_v0, _v1) {
      return this.x = _v136(this.x, _v0.x, _v1.x), this.y = _v136(this.y, _v0.y, _v1.y), this.z = _v136(this.z, _v0.z, _v1.z), this;
    }
    clampScalar(_v0, _v1) {
      return this.x = _v136(this.x, _v0, _v1), this.y = _v136(this.y, _v0, _v1), this.z = _v136(this.z, _v0, _v1), this;
    }
    clampLength(_v0, _v1) {
      let _v2 = this.length();
      return this.divideScalar(_v2 || 1).multiplyScalar(_v136(_v2, _v0, _v1));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(_v0) {
      return this.x * _v0.x + this.y * _v0.y + this.z * _v0.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(_v0) {
      return this.normalize().multiplyScalar(_v0);
    }
    lerp(_v0, _v1) {
      return this.x += (_v0.x - this.x) * _v1, this.y += (_v0.y - this.y) * _v1, this.z += (_v0.z - this.z) * _v1, this;
    }
    lerpVectors(_v0, _v1, _v2) {
      return this.x = _v0.x + (_v1.x - _v0.x) * _v2, this.y = _v0.y + (_v1.y - _v0.y) * _v2, this.z = _v0.z + (_v1.z - _v0.z) * _v2, this;
    }
    cross(_v0) {
      return this.crossVectors(this, _v0);
    }
    crossVectors(_v0, _v1) {
      let _v2 = _v0.x,
        _v3 = _v0.y,
        _v4 = _v0.z,
        _v5 = _v1.x,
        _v6 = _v1.y,
        _v7 = _v1.z;
      return this.x = _v3 * _v7 - _v4 * _v6, this.y = _v4 * _v5 - _v2 * _v7, this.z = _v2 * _v6 - _v3 * _v5, this;
    }
    projectOnVector(_v0) {
      let _v1 = _v0.lengthSq();
      if (0 === _v1) return this.set(0, 0, 0);
      let _v2 = _v0.dot(this) / _v1;
      return this.copy(_v0).multiplyScalar(_v2);
    }
    projectOnPlane(_v0) {
      return _v142.copy(this).projectOnVector(_v0), this.sub(_v142);
    }
    reflect(_v0) {
      return this.sub(_v142.copy(_v0).multiplyScalar(2 * this.dot(_v0)));
    }
    angleTo(_v0) {
      let _v1 = Math.sqrt(this.lengthSq() * _v0.lengthSq());
      return 0 === _v1 ? Math.PI / 2 : Math.acos(_v136(this.dot(_v0) / _v1, -1, 1));
    }
    distanceTo(_v0) {
      return Math.sqrt(this.distanceToSquared(_v0));
    }
    distanceToSquared(_v0) {
      let _v1 = this.x - _v0.x,
        _v2 = this.y - _v0.y,
        _v3 = this.z - _v0.z;
      return _v1 * _v1 + _v2 * _v2 + _v3 * _v3;
    }
    manhattanDistanceTo(_v0) {
      return Math.abs(this.x - _v0.x) + Math.abs(this.y - _v0.y) + Math.abs(this.z - _v0.z);
    }
    setFromSpherical(_v0) {
      return this.setFromSphericalCoords(_v0.radius, _v0.phi, _v0.theta);
    }
    setFromSphericalCoords(_v0, _v1, _v2) {
      let _v3 = Math.sin(_v1) * _v0;
      return this.x = _v3 * Math.sin(_v2), this.y = Math.cos(_v1) * _v0, this.z = _v3 * Math.cos(_v2), this;
    }
    setFromCylindrical(_v0) {
      return this.setFromCylindricalCoords(_v0.radius, _v0.theta, _v0.y);
    }
    setFromCylindricalCoords(_v0, _v1, _v2) {
      return this.x = _v0 * Math.sin(_v1), this.y = _v2, this.z = _v0 * Math.cos(_v1), this;
    }
    setFromMatrixPosition(_v0) {
      let _v1 = _v0.elements;
      return this.x = _v1[12], this.y = _v1[13], this.z = _v1[14], this;
    }
    setFromMatrixScale(_v0) {
      let _v1 = this.setFromMatrixColumn(_v0, 0).length(),
        _v2 = this.setFromMatrixColumn(_v0, 1).length(),
        _v3 = this.setFromMatrixColumn(_v0, 2).length();
      return this.x = _v1, this.y = _v2, this.z = _v3, this;
    }
    setFromMatrixColumn(_v0, _v1) {
      return this.fromArray(_v0.elements, 4 * _v1);
    }
    setFromMatrix3Column(_v0, _v1) {
      return this.fromArray(_v0.elements, 3 * _v1);
    }
    setFromEuler(_v0) {
      return this.x = _v0._x, this.y = _v0._y, this.z = _v0._z, this;
    }
    setFromColor(_v0) {
      return this.x = _v0.r, this.y = _v0.g, this.z = _v0.b, this;
    }
    equals(_v0) {
      return _v0.x === this.x && _v0.y === this.y && _v0.z === this.z;
    }
    fromArray(_v0, _v1 = 0) {
      return this.x = _v0[_v1], this.y = _v0[_v1 + 1], this.z = _v0[_v1 + 2], this;
    }
    toArray(_v0 = [], _v1 = 0) {
      return _v0[_v1] = this.x, _v0[_v1 + 1] = this.y, _v0[_v1 + 2] = this.z, _v0;
    }
    fromBufferAttribute(_v0, _v1) {
      return this.x = _v0.getX(_v1), this.y = _v0.getY(_v1), this.z = _v0.getZ(_v1), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      let _v0 = Math.random() * Math.PI * 2,
        _v1 = 2 * Math.random() - 1,
        _v2 = Math.sqrt(1 - _v1 * _v1);
      return this.x = _v2 * Math.cos(_v0), this.y = _v1, this.z = _v2 * Math.sin(_v0), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  let _v142 = new _v141(),
    _v143 = new _v140();
  class _v144 {
    constructor(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8) {
      _v144.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== _v0 && this.set(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8);
    }
    set(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8) {
      let _v9 = this.elements;
      return _v9[0] = _v0, _v9[1] = _v3, _v9[2] = _v6, _v9[3] = _v1, _v9[4] = _v4, _v9[5] = _v7, _v9[6] = _v2, _v9[7] = _v5, _v9[8] = _v8, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(_v0) {
      let _v1 = this.elements,
        _v2 = _v0.elements;
      return _v1[0] = _v2[0], _v1[1] = _v2[1], _v1[2] = _v2[2], _v1[3] = _v2[3], _v1[4] = _v2[4], _v1[5] = _v2[5], _v1[6] = _v2[6], _v1[7] = _v2[7], _v1[8] = _v2[8], this;
    }
    extractBasis(_v0, _v1, _v2) {
      return _v0.setFromMatrix3Column(this, 0), _v1.setFromMatrix3Column(this, 1), _v2.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(_v0) {
      let _v1 = _v0.elements;
      return this.set(_v1[0], _v1[4], _v1[8], _v1[1], _v1[5], _v1[9], _v1[2], _v1[6], _v1[10]), this;
    }
    multiply(_v0) {
      return this.multiplyMatrices(this, _v0);
    }
    premultiply(_v0) {
      return this.multiplyMatrices(_v0, this);
    }
    multiplyMatrices(_v0, _v1) {
      let _v2 = _v0.elements,
        _v3 = _v1.elements,
        _v4 = this.elements,
        _v5 = _v2[0],
        _v6 = _v2[3],
        _v7 = _v2[6],
        _v8 = _v2[1],
        _v9 = _v2[4],
        _v10 = _v2[7],
        _v11 = _v2[2],
        _v12 = _v2[5],
        _v13 = _v2[8],
        _v14 = _v3[0],
        _v15 = _v3[3],
        _v16 = _v3[6],
        _v17 = _v3[1],
        _v18 = _v3[4],
        _v19 = _v3[7],
        _v20 = _v3[2],
        _v21 = _v3[5],
        _v22 = _v3[8];
      return _v4[0] = _v5 * _v14 + _v6 * _v17 + _v7 * _v20, _v4[3] = _v5 * _v15 + _v6 * _v18 + _v7 * _v21, _v4[6] = _v5 * _v16 + _v6 * _v19 + _v7 * _v22, _v4[1] = _v8 * _v14 + _v9 * _v17 + _v10 * _v20, _v4[4] = _v8 * _v15 + _v9 * _v18 + _v10 * _v21, _v4[7] = _v8 * _v16 + _v9 * _v19 + _v10 * _v22, _v4[2] = _v11 * _v14 + _v12 * _v17 + _v13 * _v20, _v4[5] = _v11 * _v15 + _v12 * _v18 + _v13 * _v21, _v4[8] = _v11 * _v16 + _v12 * _v19 + _v13 * _v22, this;
    }
    multiplyScalar(_v0) {
      let _v1 = this.elements;
      return _v1[0] *= _v0, _v1[3] *= _v0, _v1[6] *= _v0, _v1[1] *= _v0, _v1[4] *= _v0, _v1[7] *= _v0, _v1[2] *= _v0, _v1[5] *= _v0, _v1[8] *= _v0, this;
    }
    determinant() {
      let _v0 = this.elements,
        _v1 = _v0[0],
        _v2 = _v0[1],
        _v3 = _v0[2],
        _v4 = _v0[3],
        _v5 = _v0[4],
        _v6 = _v0[5],
        _v7 = _v0[6],
        _v8 = _v0[7],
        _v9 = _v0[8];
      return _v1 * _v5 * _v9 - _v1 * _v6 * _v8 - _v2 * _v4 * _v9 + _v2 * _v6 * _v7 + _v3 * _v4 * _v8 - _v3 * _v5 * _v7;
    }
    invert() {
      let _v0 = this.elements,
        _v1 = _v0[0],
        _v2 = _v0[1],
        _v3 = _v0[2],
        _v4 = _v0[3],
        _v5 = _v0[4],
        _v6 = _v0[5],
        _v7 = _v0[6],
        _v8 = _v0[7],
        _v9 = _v0[8],
        _v10 = _v9 * _v5 - _v6 * _v8,
        _v11 = _v6 * _v7 - _v9 * _v4,
        _v12 = _v8 * _v4 - _v5 * _v7,
        _v13 = _v1 * _v10 + _v2 * _v11 + _v3 * _v12;
      if (0 === _v13) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      let _v14 = 1 / _v13;
      return _v0[0] = _v10 * _v14, _v0[1] = (_v3 * _v8 - _v9 * _v2) * _v14, _v0[2] = (_v6 * _v2 - _v3 * _v5) * _v14, _v0[3] = _v11 * _v14, _v0[4] = (_v9 * _v1 - _v3 * _v7) * _v14, _v0[5] = (_v3 * _v4 - _v6 * _v1) * _v14, _v0[6] = _v12 * _v14, _v0[7] = (_v2 * _v7 - _v8 * _v1) * _v14, _v0[8] = (_v5 * _v1 - _v2 * _v4) * _v14, this;
    }
    transpose() {
      let _v0,
        _v1 = this.elements;
      return _v0 = _v1[1], _v1[1] = _v1[3], _v1[3] = _v0, _v0 = _v1[2], _v1[2] = _v1[6], _v1[6] = _v0, _v0 = _v1[5], _v1[5] = _v1[7], _v1[7] = _v0, this;
    }
    getNormalMatrix(_v0) {
      return this.setFromMatrix4(_v0).invert().transpose();
    }
    transposeIntoArray(_v0) {
      let _v1 = this.elements;
      return _v0[0] = _v1[0], _v0[1] = _v1[3], _v0[2] = _v1[6], _v0[3] = _v1[1], _v0[4] = _v1[4], _v0[5] = _v1[7], _v0[6] = _v1[2], _v0[7] = _v1[5], _v0[8] = _v1[8], this;
    }
    setUvTransform(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
      let _v7 = Math.cos(_v4),
        _v8 = Math.sin(_v4);
      return this.set(_v2 * _v7, _v2 * _v8, -_v2 * (_v7 * _v5 + _v8 * _v6) + _v5 + _v0, -_v3 * _v8, _v3 * _v7, -_v3 * (-_v8 * _v5 + _v7 * _v6) + _v6 + _v1, 0, 0, 1), this;
    }
    scale(_v0, _v1) {
      return this.premultiply(_v145.makeScale(_v0, _v1)), this;
    }
    rotate(_v0) {
      return this.premultiply(_v145.makeRotation(-_v0)), this;
    }
    translate(_v0, _v1) {
      return this.premultiply(_v145.makeTranslation(_v0, _v1)), this;
    }
    makeTranslation(_v0, _v1) {
      return _v0.isVector2 ? this.set(1, 0, _v0.x, 0, 1, _v0.y, 0, 0, 1) : this.set(1, 0, _v0, 0, 1, _v1, 0, 0, 1), this;
    }
    makeRotation(_v0) {
      let _v1 = Math.cos(_v0),
        _v2 = Math.sin(_v0);
      return this.set(_v1, -_v2, 0, _v2, _v1, 0, 0, 0, 1), this;
    }
    makeScale(_v0, _v1) {
      return this.set(_v0, 0, 0, 0, _v1, 0, 0, 0, 1), this;
    }
    equals(_v0) {
      let _v1 = this.elements,
        _v2 = _v0.elements;
      for (let _v0 = 0; _v0 < 9; _v0++) if (_v1[_v0] !== _v2[_v0]) return !1;
      return !0;
    }
    fromArray(_v0, _v1 = 0) {
      for (let _v0 = 0; _v0 < 9; _v0++) this.elements[_v0] = _v0[_v0 + _v1];
      return this;
    }
    toArray(_v0 = [], _v1 = 0) {
      let _v2 = this.elements;
      return _v0[_v1] = _v2[0], _v0[_v1 + 1] = _v2[1], _v0[_v1 + 2] = _v2[2], _v0[_v1 + 3] = _v2[3], _v0[_v1 + 4] = _v2[4], _v0[_v1 + 5] = _v2[5], _v0[_v1 + 6] = _v2[6], _v0[_v1 + 7] = _v2[7], _v0[_v1 + 8] = _v2[8], _v0;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  let _v145 = new _v144();
  function _v146(_v0) {
    for (let _v0 = _v0.length - 1; _v0 >= 0; --_v0) if (_v0[_v0] >= 0) return !0;
    return !1;
  }
  function _v147(_v0) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", _v0);
  }
  Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;
  let _v148 = {};
  function _v149(_v0) {
    _v0 in _v148 || (_v148[_v0] = !0, console.warn(_v0));
  }
  let _v150 = new _v144().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322),
    _v151 = new _v144().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715),
    _v152 = (_v3 = [.64, .33, .3, .6, .15, .06], _v4 = [.2126, .7152, .0722], _v5 = [.3127, .329], (_v2 = {
      enabled: !0,
      workingColorSpace: _v127,
      spaces: {},
      convert: function (_v0, _v1, _v2) {
        return !1 !== this.enabled && _v1 !== _v2 && _v1 && _v2 && (this.spaces[_v1].transfer === _v129 && (_v0.r = _v153(_v0.r), _v0.g = _v153(_v0.g), _v0.b = _v153(_v0.b)), this.spaces[_v1].primaries !== this.spaces[_v2].primaries && (_v0.applyMatrix3(this.spaces[_v1].toXYZ), _v0.applyMatrix3(this.spaces[_v2].fromXYZ)), this.spaces[_v2].transfer === _v129 && (_v0.r = _v154(_v0.r), _v0.g = _v154(_v0.g), _v0.b = _v154(_v0.b))), _v0;
      },
      workingToColorSpace: function (_v0, _v1) {
        return this.convert(_v0, this.workingColorSpace, _v1);
      },
      colorSpaceToWorking: function (_v0, _v1) {
        return this.convert(_v0, _v1, this.workingColorSpace);
      },
      getPrimaries: function (_v0) {
        return this.spaces[_v0].primaries;
      },
      getTransfer: function (_v0) {
        return "" === _v0 ? _v128 : this.spaces[_v0].transfer;
      },
      getToneMappingMode: function (_v0) {
        return this.spaces[_v0].outputColorSpaceConfig.toneMappingMode || "standard";
      },
      getLuminanceCoefficients: function (_v0, _v1 = this.workingColorSpace) {
        return _v0.fromArray(this.spaces[_v1].luminanceCoefficients);
      },
      define: function (_v0) {
        Object.assign(this.spaces, _v0);
      },
      _getMatrix: function (_v0, _v1, _v2) {
        return _v0.copy(this.spaces[_v1].toXYZ).multiply(this.spaces[_v2].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (_v0) {
        return this.spaces[_v0].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (_v0 = this.workingColorSpace) {
        return this.spaces[_v0].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (_v0, _v1) {
        return _v149("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), _v2.workingToColorSpace(_v0, _v1);
      },
      toWorkingColorSpace: function (_v0, _v1) {
        return _v149("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), _v2.colorSpaceToWorking(_v0, _v1);
      }
    }).define({
      [_v127]: {
        primaries: _v3,
        whitePoint: _v5,
        transfer: _v128,
        toXYZ: _v150,
        fromXYZ: _v151,
        luminanceCoefficients: _v4,
        workingColorSpaceConfig: {
          unpackColorSpace: _v126
        },
        outputColorSpaceConfig: {
          drawingBufferColorSpace: _v126
        }
      },
      [_v126]: {
        primaries: _v3,
        whitePoint: _v5,
        transfer: _v129,
        toXYZ: _v150,
        fromXYZ: _v151,
        luminanceCoefficients: _v4,
        outputColorSpaceConfig: {
          drawingBufferColorSpace: _v126
        }
      }
    }), _v2);
  function _v153(_v0) {
    return _v0 < .04045 ? .0773993808 * _v0 : Math.pow(.9478672986 * _v0 + .0521327014, 2.4);
  }
  function _v154(_v0) {
    return _v0 < .0031308 ? 12.92 * _v0 : 1.055 * Math.pow(_v0, .41666) - .055;
  }
  class _v155 {
    static getDataURL(_v0, _v1 = "image/png") {
      let _v2;
      if (/^data:/i.test(_v0.src) || "u" < typeof HTMLCanvasElement) return _v0.src;
      if (_v0 instanceof HTMLCanvasElement) _v2 = _v0;else {
        void 0 === _v1 && (_v1 = _v147("canvas")), _v1.width = _v0.width, _v1.height = _v0.height;
        let _v0 = _v1.getContext("2d");
        _v0 instanceof ImageData ? _v0.putImageData(_v0, 0, 0) : _v0.drawImage(_v0, 0, 0, _v0.width, _v0.height), _v2 = _v1;
      }
      return _v2.toDataURL(_v1);
    }
    static sRGBToLinear(_v0) {
      if ("u" > typeof HTMLImageElement && _v0 instanceof HTMLImageElement || "u" > typeof HTMLCanvasElement && _v0 instanceof HTMLCanvasElement || "u" > typeof ImageBitmap && _v0 instanceof ImageBitmap) {
        let _v0 = _v147("canvas");
        _v0.width = _v0.width, _v0.height = _v0.height;
        let _v1 = _v0.getContext("2d");
        _v1.drawImage(_v0, 0, 0, _v0.width, _v0.height);
        let _v2 = _v1.getImageData(0, 0, _v0.width, _v0.height),
          _v3 = _v2.data;
        for (let _v0 = 0; _v0 < _v3.length; _v0++) _v3[_v0] = 255 * _v153(_v3[_v0] / 255);
        return _v1.putImageData(_v2, 0, 0), _v0;
      }
      if (!_v0.data) return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), _v0;
      {
        let _v0 = _v0.data.slice(0);
        for (let _v0 = 0; _v0 < _v0.length; _v0++) _v0 instanceof Uint8Array || _v0 instanceof Uint8ClampedArray ? _v0[_v0] = Math.floor(255 * _v153(_v0[_v0] / 255)) : _v0[_v0] = _v153(_v0[_v0]);
        return {
          data: _v0,
          width: _v0.width,
          height: _v0.height
        };
      }
    }
  }
  let _v156 = 0;
  class _v157 {
    constructor(_v0 = null) {
      this.isSource = !0, Object.defineProperty(this, "id", {
        value: _v156++
      }), this.uuid = _v135(), this.data = _v0, this.dataReady = !0, this.version = 0;
    }
    getSize(_v0) {
      let _v1 = this.data;
      return "u" > typeof HTMLVideoElement && _v1 instanceof HTMLVideoElement ? _v0.set(_v1.videoWidth, _v1.videoHeight, 0) : _v1 instanceof VideoFrame ? _v0.set(_v1.displayHeight, _v1.displayWidth, 0) : null !== _v1 ? _v0.set(_v1.width, _v1.height, _v1.depth || 0) : _v0.set(0, 0, 0), _v0;
    }
    set needsUpdate(_v0) {
      !0 === _v0 && this.version++;
    }
    toJSON(_v0) {
      let _v1 = void 0 === _v0 || "string" == typeof _v0;
      if (!_v1 && void 0 !== _v0.images[this.uuid]) return _v0.images[this.uuid];
      let _v2 = {
          uuid: this.uuid,
          url: ""
        },
        _v3 = this.data;
      if (null !== _v3) {
        let _v0;
        if (Array.isArray(_v3)) {
          _v0 = [];
          for (let _v0 = 0, _v1 = _v3.length; _v0 < _v1; _v0++) _v3[_v0].isDataTexture ? _v0.push(_v158(_v3[_v0].image)) : _v0.push(_v158(_v3[_v0]));
        } else _v0 = _v158(_v3);
        _v2.url = _v0;
      }
      return _v1 || (_v0.images[this.uuid] = _v2), _v2;
    }
  }
  function _v158(_v0) {
    return "u" > typeof HTMLImageElement && _v0 instanceof HTMLImageElement || "u" > typeof HTMLCanvasElement && _v0 instanceof HTMLCanvasElement || "u" > typeof ImageBitmap && _v0 instanceof ImageBitmap ? _v155.getDataURL(_v0) : _v0.data ? {
      data: Array.from(_v0.data),
      width: _v0.width,
      height: _v0.height,
      type: _v0.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let _v159 = 0,
    _v160 = new _v141();
  class _v161 extends _v131 {
    constructor(_v0 = _v161.DEFAULT_IMAGE, _v1 = _v161.DEFAULT_MAPPING, _v2 = 0, _v3 = 0, _v4 = 0, _v5 = 0, _v6 = 0, _v7 = 0, _v8 = _v161.DEFAULT_ANISOTROPY, _v9 = "") {
      super(), this.isTexture = !0, Object.defineProperty(this, "id", {
        value: _v159++
      }), this.uuid = _v135(), this.name = "", this.source = new _v157(_v0), this.mipmaps = [], this.mapping = _v1, this.channel = 0, this.wrapS = _v2, this.wrapT = _v3, this.magFilter = _v4, this.minFilter = _v5, this.anisotropy = _v8, this.format = _v6, this.internalFormat = null, this.type = _v7, this.offset = new _v139(0, 0), this.repeat = new _v139(1, 1), this.center = new _v139(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new _v144(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = _v9, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!_v0 && !!_v0.depth && _v0.depth > 1, this.pmremVersion = 0;
    }
    get width() {
      return this.source.getSize(_v160).x;
    }
    get height() {
      return this.source.getSize(_v160).y;
    }
    get depth() {
      return this.source.getSize(_v160).z;
    }
    get image() {
      return this.source.data;
    }
    set image(_v0 = null) {
      this.source.data = _v0;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    addUpdateRange(_v0, _v1) {
      this.updateRanges.push({
        start: _v0,
        count: _v1
      });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(_v0) {
      return this.name = _v0.name, this.source = _v0.source, this.mipmaps = _v0.mipmaps.slice(0), this.mapping = _v0.mapping, this.channel = _v0.channel, this.wrapS = _v0.wrapS, this.wrapT = _v0.wrapT, this.magFilter = _v0.magFilter, this.minFilter = _v0.minFilter, this.anisotropy = _v0.anisotropy, this.format = _v0.format, this.internalFormat = _v0.internalFormat, this.type = _v0.type, this.offset.copy(_v0.offset), this.repeat.copy(_v0.repeat), this.center.copy(_v0.center), this.rotation = _v0.rotation, this.matrixAutoUpdate = _v0.matrixAutoUpdate, this.matrix.copy(_v0.matrix), this.generateMipmaps = _v0.generateMipmaps, this.premultiplyAlpha = _v0.premultiplyAlpha, this.flipY = _v0.flipY, this.unpackAlignment = _v0.unpackAlignment, this.colorSpace = _v0.colorSpace, this.renderTarget = _v0.renderTarget, this.isRenderTargetTexture = _v0.isRenderTargetTexture, this.isArrayTexture = _v0.isArrayTexture, this.userData = JSON.parse(JSON.stringify(_v0.userData)), this.needsUpdate = !0, this;
    }
    setValues(_v0) {
      for (let _v0 in _v0) {
        let _v0 = _v0[_v0];
        if (void 0 === _v0) {
          console.warn(`THREE.Texture.setValues(): parameter '${_v0}' has value of undefined.`);
          continue;
        }
        let _v1 = this[_v0];
        if (void 0 === _v1) {
          console.warn(`THREE.Texture.setValues(): property '${_v0}' does not exist.`);
          continue;
        }
        _v1 && _v0 && _v1.isVector2 && _v0.isVector2 || _v1 && _v0 && _v1.isVector3 && _v0.isVector3 || _v1 && _v0 && _v1.isMatrix3 && _v0.isMatrix3 ? _v1.copy(_v0) : this[_v0] = _v0;
      }
    }
    toJSON(_v0) {
      let _v1 = void 0 === _v0 || "string" == typeof _v0;
      if (!_v1 && void 0 !== _v0.textures[this.uuid]) return _v0.textures[this.uuid];
      let _v2 = {
        metadata: {
          version: 4.7,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(_v0).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      return Object.keys(this.userData).length > 0 && (_v2.userData = this.userData), _v1 || (_v0.textures[this.uuid] = _v2), _v2;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
    transformUv(_v0) {
      if (300 !== this.mapping) return _v0;
      if (_v0.applyMatrix3(this.matrix), _v0.x < 0 || _v0.x > 1) switch (this.wrapS) {
        case 0:
          _v0.x = _v0.x - Math.floor(_v0.x);
          break;
        case 0:
          _v0.x = _v0.x < 0 ? 0 : 1;
          break;
        case 0:
          1 === Math.abs(Math.floor(_v0.x) % 2) ? _v0.x = Math.ceil(_v0.x) - _v0.x : _v0.x = _v0.x - Math.floor(_v0.x);
      }
      if (_v0.y < 0 || _v0.y > 1) switch (this.wrapT) {
        case 0:
          _v0.y = _v0.y - Math.floor(_v0.y);
          break;
        case 0:
          _v0.y = _v0.y < 0 ? 0 : 1;
          break;
        case 0:
          1 === Math.abs(Math.floor(_v0.y) % 2) ? _v0.y = Math.ceil(_v0.y) - _v0.y : _v0.y = _v0.y - Math.floor(_v0.y);
      }
      return this.flipY && (_v0.y = 1 - _v0.y), _v0;
    }
    set needsUpdate(_v0) {
      !0 === _v0 && (this.version++, this.source.needsUpdate = !0);
    }
    set needsPMREMUpdate(_v0) {
      !0 === _v0 && this.pmremVersion++;
    }
  }
  _v161.DEFAULT_IMAGE = null, _v161.DEFAULT_MAPPING = 300, _v161.DEFAULT_ANISOTROPY = 1;
  class _v162 {
    constructor(_v0 = 0, _v1 = 0, _v2 = 0, _v3 = 1) {
      _v162.prototype.isVector4 = !0, this.x = _v0, this.y = _v1, this.z = _v2, this.w = _v3;
    }
    get width() {
      return this.z;
    }
    set width(_v0) {
      this.z = _v0;
    }
    get height() {
      return this.w;
    }
    set height(_v0) {
      this.w = _v0;
    }
    set(_v0, _v1, _v2, _v3) {
      return this.x = _v0, this.y = _v1, this.z = _v2, this.w = _v3, this;
    }
    setScalar(_v0) {
      return this.x = _v0, this.y = _v0, this.z = _v0, this.w = _v0, this;
    }
    setX(_v0) {
      return this.x = _v0, this;
    }
    setY(_v0) {
      return this.y = _v0, this;
    }
    setZ(_v0) {
      return this.z = _v0, this;
    }
    setW(_v0) {
      return this.w = _v0, this;
    }
    setComponent(_v0, _v1) {
      switch (_v0) {
        case 0:
          this.x = _v1;
          break;
        case 1:
          this.y = _v1;
          break;
        case 2:
          this.z = _v1;
          break;
        case 3:
          this.w = _v1;
          break;
        default:
          throw Error("index is out of range: " + _v0);
      }
      return this;
    }
    getComponent(_v0) {
      switch (_v0) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw Error("index is out of range: " + _v0);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(_v0) {
      return this.x = _v0.x, this.y = _v0.y, this.z = _v0.z, this.w = void 0 !== _v0.w ? _v0.w : 1, this;
    }
    add(_v0) {
      return this.x += _v0.x, this.y += _v0.y, this.z += _v0.z, this.w += _v0.w, this;
    }
    addScalar(_v0) {
      return this.x += _v0, this.y += _v0, this.z += _v0, this.w += _v0, this;
    }
    addVectors(_v0, _v1) {
      return this.x = _v0.x + _v1.x, this.y = _v0.y + _v1.y, this.z = _v0.z + _v1.z, this.w = _v0.w + _v1.w, this;
    }
    addScaledVector(_v0, _v1) {
      return this.x += _v0.x * _v1, this.y += _v0.y * _v1, this.z += _v0.z * _v1, this.w += _v0.w * _v1, this;
    }
    sub(_v0) {
      return this.x -= _v0.x, this.y -= _v0.y, this.z -= _v0.z, this.w -= _v0.w, this;
    }
    subScalar(_v0) {
      return this.x -= _v0, this.y -= _v0, this.z -= _v0, this.w -= _v0, this;
    }
    subVectors(_v0, _v1) {
      return this.x = _v0.x - _v1.x, this.y = _v0.y - _v1.y, this.z = _v0.z - _v1.z, this.w = _v0.w - _v1.w, this;
    }
    multiply(_v0) {
      return this.x *= _v0.x, this.y *= _v0.y, this.z *= _v0.z, this.w *= _v0.w, this;
    }
    multiplyScalar(_v0) {
      return this.x *= _v0, this.y *= _v0, this.z *= _v0, this.w *= _v0, this;
    }
    applyMatrix4(_v0) {
      let _v1 = this.x,
        _v2 = this.y,
        _v3 = this.z,
        _v4 = this.w,
        _v5 = _v0.elements;
      return this.x = _v5[0] * _v1 + _v5[4] * _v2 + _v5[8] * _v3 + _v5[12] * _v4, this.y = _v5[1] * _v1 + _v5[5] * _v2 + _v5[9] * _v3 + _v5[13] * _v4, this.z = _v5[2] * _v1 + _v5[6] * _v2 + _v5[10] * _v3 + _v5[14] * _v4, this.w = _v5[3] * _v1 + _v5[7] * _v2 + _v5[11] * _v3 + _v5[15] * _v4, this;
    }
    divide(_v0) {
      return this.x /= _v0.x, this.y /= _v0.y, this.z /= _v0.z, this.w /= _v0.w, this;
    }
    divideScalar(_v0) {
      return this.multiplyScalar(1 / _v0);
    }
    setAxisAngleFromQuaternion(_v0) {
      this.w = 2 * Math.acos(_v0.w);
      let _v1 = Math.sqrt(1 - _v0.w * _v0.w);
      return _v1 < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = _v0.x / _v1, this.y = _v0.y / _v1, this.z = _v0.z / _v1), this;
    }
    setAxisAngleFromRotationMatrix(_v0) {
      let _v1,
        _v2,
        _v3,
        _v4,
        _v5 = _v0.elements,
        _v6 = _v5[0],
        _v7 = _v5[4],
        _v8 = _v5[8],
        _v9 = _v5[1],
        _v10 = _v5[5],
        _v11 = _v5[9],
        _v12 = _v5[2],
        _v13 = _v5[6],
        _v14 = _v5[10];
      if (.01 > Math.abs(_v7 - _v9) && .01 > Math.abs(_v8 - _v12) && .01 > Math.abs(_v11 - _v13)) {
        if (.1 > Math.abs(_v7 + _v9) && .1 > Math.abs(_v8 + _v12) && .1 > Math.abs(_v11 + _v13) && .1 > Math.abs(_v6 + _v10 + _v14 - 3)) return this.set(1, 0, 0, 0), this;
        _v1 = Math.PI;
        let _v0 = (_v6 + 1) / 2,
          _v1 = (_v10 + 1) / 2,
          _v2 = (_v14 + 1) / 2,
          _v3 = (_v7 + _v9) / 4,
          _v4 = (_v8 + _v12) / 4,
          _v5 = (_v11 + _v13) / 4;
        return _v0 > _v1 && _v0 > _v2 ? _v0 < .01 ? (_v2 = 0, _v3 = .707106781, _v4 = .707106781) : (_v3 = _v3 / (_v2 = Math.sqrt(_v0)), _v4 = _v4 / _v2) : _v1 > _v2 ? _v1 < .01 ? (_v2 = .707106781, _v3 = 0, _v4 = .707106781) : (_v2 = _v3 / (_v3 = Math.sqrt(_v1)), _v4 = _v5 / _v3) : _v2 < .01 ? (_v2 = .707106781, _v3 = .707106781, _v4 = 0) : (_v2 = _v4 / (_v4 = Math.sqrt(_v2)), _v3 = _v5 / _v4), this.set(_v2, _v3, _v4, _v1), this;
      }
      let _v15 = Math.sqrt((_v13 - _v11) * (_v13 - _v11) + (_v8 - _v12) * (_v8 - _v12) + (_v9 - _v7) * (_v9 - _v7));
      return .001 > Math.abs(_v15) && (_v15 = 1), this.x = (_v13 - _v11) / _v15, this.y = (_v8 - _v12) / _v15, this.z = (_v9 - _v7) / _v15, this.w = Math.acos((_v6 + _v10 + _v14 - 1) / 2), this;
    }
    setFromMatrixPosition(_v0) {
      let _v1 = _v0.elements;
      return this.x = _v1[12], this.y = _v1[13], this.z = _v1[14], this.w = _v1[15], this;
    }
    min(_v0) {
      return this.x = Math.min(this.x, _v0.x), this.y = Math.min(this.y, _v0.y), this.z = Math.min(this.z, _v0.z), this.w = Math.min(this.w, _v0.w), this;
    }
    max(_v0) {
      return this.x = Math.max(this.x, _v0.x), this.y = Math.max(this.y, _v0.y), this.z = Math.max(this.z, _v0.z), this.w = Math.max(this.w, _v0.w), this;
    }
    clamp(_v0, _v1) {
      return this.x = _v136(this.x, _v0.x, _v1.x), this.y = _v136(this.y, _v0.y, _v1.y), this.z = _v136(this.z, _v0.z, _v1.z), this.w = _v136(this.w, _v0.w, _v1.w), this;
    }
    clampScalar(_v0, _v1) {
      return this.x = _v136(this.x, _v0, _v1), this.y = _v136(this.y, _v0, _v1), this.z = _v136(this.z, _v0, _v1), this.w = _v136(this.w, _v0, _v1), this;
    }
    clampLength(_v0, _v1) {
      let _v2 = this.length();
      return this.divideScalar(_v2 || 1).multiplyScalar(_v136(_v2, _v0, _v1));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(_v0) {
      return this.x * _v0.x + this.y * _v0.y + this.z * _v0.z + this.w * _v0.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(_v0) {
      return this.normalize().multiplyScalar(_v0);
    }
    lerp(_v0, _v1) {
      return this.x += (_v0.x - this.x) * _v1, this.y += (_v0.y - this.y) * _v1, this.z += (_v0.z - this.z) * _v1, this.w += (_v0.w - this.w) * _v1, this;
    }
    lerpVectors(_v0, _v1, _v2) {
      return this.x = _v0.x + (_v1.x - _v0.x) * _v2, this.y = _v0.y + (_v1.y - _v0.y) * _v2, this.z = _v0.z + (_v1.z - _v0.z) * _v2, this.w = _v0.w + (_v1.w - _v0.w) * _v2, this;
    }
    equals(_v0) {
      return _v0.x === this.x && _v0.y === this.y && _v0.z === this.z && _v0.w === this.w;
    }
    fromArray(_v0, _v1 = 0) {
      return this.x = _v0[_v1], this.y = _v0[_v1 + 1], this.z = _v0[_v1 + 2], this.w = _v0[_v1 + 3], this;
    }
    toArray(_v0 = [], _v1 = 0) {
      return _v0[_v1] = this.x, _v0[_v1 + 1] = this.y, _v0[_v1 + 2] = this.z, _v0[_v1 + 3] = this.w, _v0;
    }
    fromBufferAttribute(_v0, _v1) {
      return this.x = _v0.getX(_v1), this.y = _v0.getY(_v1), this.z = _v0.getZ(_v1), this.w = _v0.getW(_v1), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  class _v163 extends _v131 {
    constructor(_v0 = 1, _v1 = 1, _v2 = {}) {
      super(), _v2 = Object.assign({
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: 0,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
        depth: 1,
        multiview: !1
      }, _v2), this.isRenderTarget = !0, this.width = _v0, this.height = _v1, this.depth = _v2.depth, this.scissor = new _v162(0, 0, _v0, _v1), this.scissorTest = !1, this.viewport = new _v162(0, 0, _v0, _v1);
      const _v3 = new _v161({
        width: _v0,
        height: _v1,
        depth: _v2.depth
      });
      this.textures = [];
      const _v4 = _v2.count;
      for (let _v0 = 0; _v0 < _v4; _v0++) this.textures[_v0] = _v3.clone(), this.textures[_v0].isRenderTargetTexture = !0, this.textures[_v0].renderTarget = this;
      this._setTextureOptions(_v2), this.depthBuffer = _v2.depthBuffer, this.stencilBuffer = _v2.stencilBuffer, this.resolveDepthBuffer = _v2.resolveDepthBuffer, this.resolveStencilBuffer = _v2.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = _v2.depthTexture, this.samples = _v2.samples, this.multiview = _v2.multiview;
    }
    _setTextureOptions(_v0 = {}) {
      let _v1 = {
        minFilter: 0,
        generateMipmaps: !1,
        flipY: !1,
        internalFormat: null
      };
      void 0 !== _v0.mapping && (_v1.mapping = _v0.mapping), void 0 !== _v0.wrapS && (_v1.wrapS = _v0.wrapS), void 0 !== _v0.wrapT && (_v1.wrapT = _v0.wrapT), void 0 !== _v0.wrapR && (_v1.wrapR = _v0.wrapR), void 0 !== _v0.magFilter && (_v1.magFilter = _v0.magFilter), void 0 !== _v0.minFilter && (_v1.minFilter = _v0.minFilter), void 0 !== _v0.format && (_v1.format = _v0.format), void 0 !== _v0.type && (_v1.type = _v0.type), void 0 !== _v0.anisotropy && (_v1.anisotropy = _v0.anisotropy), void 0 !== _v0.colorSpace && (_v1.colorSpace = _v0.colorSpace), void 0 !== _v0.flipY && (_v1.flipY = _v0.flipY), void 0 !== _v0.generateMipmaps && (_v1.generateMipmaps = _v0.generateMipmaps), void 0 !== _v0.internalFormat && (_v1.internalFormat = _v0.internalFormat);
      for (let _v0 = 0; _v0 < this.textures.length; _v0++) this.textures[_v0].setValues(_v1);
    }
    get texture() {
      return this.textures[0];
    }
    set texture(_v0) {
      this.textures[0] = _v0;
    }
    set depthTexture(_v0) {
      null !== this._depthTexture && (this._depthTexture.renderTarget = null), null !== _v0 && (_v0.renderTarget = this), this._depthTexture = _v0;
    }
    get depthTexture() {
      return this._depthTexture;
    }
    setSize(_v0, _v1, _v2 = 1) {
      if (this.width !== _v0 || this.height !== _v1 || this.depth !== _v2) {
        this.width = _v0, this.height = _v1, this.depth = _v2;
        for (let _v0 = 0, _v1 = this.textures.length; _v0 < _v1; _v0++) this.textures[_v0].image.width = _v0, this.textures[_v0].image.height = _v1, this.textures[_v0].image.depth = _v2, this.textures[_v0].isArrayTexture = this.textures[_v0].image.depth > 1;
        this.dispose();
      }
      this.viewport.set(0, 0, _v0, _v1), this.scissor.set(0, 0, _v0, _v1);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(_v0) {
      this.width = _v0.width, this.height = _v0.height, this.depth = _v0.depth, this.scissor.copy(_v0.scissor), this.scissorTest = _v0.scissorTest, this.viewport.copy(_v0.viewport), this.textures.length = 0;
      for (let _v0 = 0, _v1 = _v0.textures.length; _v0 < _v1; _v0++) {
        this.textures[_v0] = _v0.textures[_v0].clone(), this.textures[_v0].isRenderTargetTexture = !0, this.textures[_v0].renderTarget = this;
        let _v0 = Object.assign({}, _v0.textures[_v0].image);
        this.textures[_v0].source = new _v157(_v0);
      }
      return this.depthBuffer = _v0.depthBuffer, this.stencilBuffer = _v0.stencilBuffer, this.resolveDepthBuffer = _v0.resolveDepthBuffer, this.resolveStencilBuffer = _v0.resolveStencilBuffer, null !== _v0.depthTexture && (this.depthTexture = _v0.depthTexture.clone()), this.samples = _v0.samples, this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }
  class _v164 extends _v163 {
    constructor(_v0 = 1, _v1 = 1, _v2 = {}) {
      super(_v0, _v1, _v2), this.isWebGLRenderTarget = !0;
    }
  }
  class _v165 extends _v161 {
    constructor(_v0 = null, _v1 = 1, _v2 = 1, _v3 = 1) {
      super(null), this.isDataArrayTexture = !0, this.image = {
        data: _v0,
        width: _v1,
        height: _v2,
        depth: _v3
      }, this.magFilter = 0, this.minFilter = 0, this.wrapR = 0, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = new Set();
    }
    addLayerUpdate(_v0) {
      this.layerUpdates.add(_v0);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  }
  class _v166 {
    constructor(_v0 = new _v141(Infinity, Infinity, Infinity), _v1 = new _v141(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = !0, this.min = _v0, this.max = _v1;
    }
    set(_v0, _v1) {
      return this.min.copy(_v0), this.max.copy(_v1), this;
    }
    setFromArray(_v0) {
      this.makeEmpty();
      for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0 += 3) this.expandByPoint(_v168.fromArray(_v0, _v0));
      return this;
    }
    setFromBufferAttribute(_v0) {
      this.makeEmpty();
      for (let _v0 = 0, _v1 = _v0.count; _v0 < _v1; _v0++) this.expandByPoint(_v168.fromBufferAttribute(_v0, _v0));
      return this;
    }
    setFromPoints(_v0) {
      this.makeEmpty();
      for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) this.expandByPoint(_v0[_v0]);
      return this;
    }
    setFromCenterAndSize(_v0, _v1) {
      let _v2 = _v168.copy(_v1).multiplyScalar(.5);
      return this.min.copy(_v0).sub(_v2), this.max.copy(_v0).add(_v2), this;
    }
    setFromObject(_v0, _v1 = !1) {
      return this.makeEmpty(), this.expandByObject(_v0, _v1);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(_v0) {
      return this.min.copy(_v0.min), this.max.copy(_v0.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(_v0) {
      return this.isEmpty() ? _v0.set(0, 0, 0) : _v0.addVectors(this.min, this.max).multiplyScalar(.5);
    }
    getSize(_v0) {
      return this.isEmpty() ? _v0.set(0, 0, 0) : _v0.subVectors(this.max, this.min);
    }
    expandByPoint(_v0) {
      return this.min.min(_v0), this.max.max(_v0), this;
    }
    expandByVector(_v0) {
      return this.min.sub(_v0), this.max.add(_v0), this;
    }
    expandByScalar(_v0) {
      return this.min.addScalar(-_v0), this.max.addScalar(_v0), this;
    }
    expandByObject(_v0, _v1 = !1) {
      _v0.updateWorldMatrix(!1, !1);
      let _v2 = _v0.geometry;
      if (void 0 !== _v2) {
        let _v0 = _v2.getAttribute("position");
        if (!0 === _v1 && void 0 !== _v0 && !0 !== _v0.isInstancedMesh) for (let _v0 = 0, _v1 = _v0.count; _v0 < _v1; _v0++) !0 === _v0.isMesh ? _v0.getVertexPosition(_v0, _v168) : _v168.fromBufferAttribute(_v0, _v0), _v168.applyMatrix4(_v0.matrixWorld), this.expandByPoint(_v168);else void 0 !== _v0.boundingBox ? (null === _v0.boundingBox && _v0.computeBoundingBox(), _v169.copy(_v0.boundingBox)) : (null === _v2.boundingBox && _v2.computeBoundingBox(), _v169.copy(_v2.boundingBox)), _v169.applyMatrix4(_v0.matrixWorld), this.union(_v169);
      }
      let _v3 = _v0.children;
      for (let _v0 = 0, _v1 = _v3.length; _v0 < _v1; _v0++) this.expandByObject(_v3[_v0], _v1);
      return this;
    }
    containsPoint(_v0) {
      return _v0.x >= this.min.x && _v0.x <= this.max.x && _v0.y >= this.min.y && _v0.y <= this.max.y && _v0.z >= this.min.z && _v0.z <= this.max.z;
    }
    containsBox(_v0) {
      return this.min.x <= _v0.min.x && _v0.max.x <= this.max.x && this.min.y <= _v0.min.y && _v0.max.y <= this.max.y && this.min.z <= _v0.min.z && _v0.max.z <= this.max.z;
    }
    getParameter(_v0, _v1) {
      return _v1.set((_v0.x - this.min.x) / (this.max.x - this.min.x), (_v0.y - this.min.y) / (this.max.y - this.min.y), (_v0.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(_v0) {
      return _v0.max.x >= this.min.x && _v0.min.x <= this.max.x && _v0.max.y >= this.min.y && _v0.min.y <= this.max.y && _v0.max.z >= this.min.z && _v0.min.z <= this.max.z;
    }
    intersectsSphere(_v0) {
      return this.clampPoint(_v0.center, _v168), _v168.distanceToSquared(_v0.center) <= _v0.radius * _v0.radius;
    }
    intersectsPlane(_v0) {
      let _v1, _v2;
      return _v0.normal.x > 0 ? (_v1 = _v0.normal.x * this.min.x, _v2 = _v0.normal.x * this.max.x) : (_v1 = _v0.normal.x * this.max.x, _v2 = _v0.normal.x * this.min.x), _v0.normal.y > 0 ? (_v1 += _v0.normal.y * this.min.y, _v2 += _v0.normal.y * this.max.y) : (_v1 += _v0.normal.y * this.max.y, _v2 += _v0.normal.y * this.min.y), _v0.normal.z > 0 ? (_v1 += _v0.normal.z * this.min.z, _v2 += _v0.normal.z * this.max.z) : (_v1 += _v0.normal.z * this.max.z, _v2 += _v0.normal.z * this.min.z), _v1 <= -_v0.constant && _v2 >= -_v0.constant;
    }
    intersectsTriangle(_v0) {
      if (this.isEmpty()) return !1;
      this.getCenter(_v176), _v177.subVectors(this.max, _v176), _v170.subVectors(_v0.a, _v176), _v171.subVectors(_v0.b, _v176), _v172.subVectors(_v0.c, _v176), _v173.subVectors(_v171, _v170), _v174.subVectors(_v172, _v171), _v175.subVectors(_v170, _v172);
      let _v1 = [0, -_v173.z, _v173.y, 0, -_v174.z, _v174.y, 0, -_v175.z, _v175.y, _v173.z, 0, -_v173.x, _v174.z, 0, -_v174.x, _v175.z, 0, -_v175.x, -_v173.y, _v173.x, 0, -_v174.y, _v174.x, 0, -_v175.y, _v175.x, 0];
      return !!_v180(_v1, _v170, _v171, _v172, _v177) && !!_v180(_v1 = [1, 0, 0, 0, 1, 0, 0, 0, 1], _v170, _v171, _v172, _v177) && (_v178.crossVectors(_v173, _v174), _v180(_v1 = [_v178.x, _v178.y, _v178.z], _v170, _v171, _v172, _v177));
    }
    clampPoint(_v0, _v1) {
      return _v1.copy(_v0).clamp(this.min, this.max);
    }
    distanceToPoint(_v0) {
      return this.clampPoint(_v0, _v168).distanceTo(_v0);
    }
    getBoundingSphere(_v0) {
      return this.isEmpty() ? _v0.makeEmpty() : (this.getCenter(_v0.center), _v0.radius = .5 * this.getSize(_v168).length()), _v0;
    }
    intersect(_v0) {
      return this.min.max(_v0.min), this.max.min(_v0.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(_v0) {
      return this.min.min(_v0.min), this.max.max(_v0.max), this;
    }
    applyMatrix4(_v0) {
      return this.isEmpty() || (_v167[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(_v0), _v167[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(_v0), _v167[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(_v0), _v167[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(_v0), _v167[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(_v0), _v167[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(_v0), _v167[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(_v0), _v167[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(_v0), this.setFromPoints(_v167)), this;
    }
    translate(_v0) {
      return this.min.add(_v0), this.max.add(_v0), this;
    }
    equals(_v0) {
      return _v0.min.equals(this.min) && _v0.max.equals(this.max);
    }
    toJSON() {
      return {
        min: this.min.toArray(),
        max: this.max.toArray()
      };
    }
    fromJSON(_v0) {
      return this.min.fromArray(_v0.min), this.max.fromArray(_v0.max), this;
    }
  }
  let _v167 = [new _v141(), new _v141(), new _v141(), new _v141(), new _v141(), new _v141(), new _v141(), new _v141()],
    _v168 = new _v141(),
    _v169 = new _v166(),
    _v170 = new _v141(),
    _v171 = new _v141(),
    _v172 = new _v141(),
    _v173 = new _v141(),
    _v174 = new _v141(),
    _v175 = new _v141(),
    _v176 = new _v141(),
    _v177 = new _v141(),
    _v178 = new _v141(),
    _v179 = new _v141();
  function _v180(_v0, _v1, _v2, _v3, _v4) {
    for (let _v0 = 0, _v1 = _v0.length - 3; _v0 <= _v1; _v0 += 3) {
      _v179.fromArray(_v0, _v0);
      let _v0 = _v4.x * Math.abs(_v179.x) + _v4.y * Math.abs(_v179.y) + _v4.z * Math.abs(_v179.z),
        _v1 = _v1.dot(_v179),
        _v2 = _v2.dot(_v179),
        _v3 = _v3.dot(_v179);
      if (Math.max(-Math.max(_v1, _v2, _v3), Math.min(_v1, _v2, _v3)) > _v0) return !1;
    }
    return !0;
  }
  let _v181 = new _v166(),
    _v182 = new _v141(),
    _v183 = new _v141();
  class _v184 {
    constructor(_v0 = new _v141(), _v1 = -1) {
      this.isSphere = !0, this.center = _v0, this.radius = _v1;
    }
    set(_v0, _v1) {
      return this.center.copy(_v0), this.radius = _v1, this;
    }
    setFromPoints(_v0, _v1) {
      let _v2 = this.center;
      void 0 !== _v1 ? _v2.copy(_v1) : _v181.setFromPoints(_v0).getCenter(_v2);
      let _v3 = 0;
      for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) _v3 = Math.max(_v3, _v2.distanceToSquared(_v0[_v0]));
      return this.radius = Math.sqrt(_v3), this;
    }
    copy(_v0) {
      return this.center.copy(_v0.center), this.radius = _v0.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(_v0) {
      return _v0.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(_v0) {
      return _v0.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(_v0) {
      let _v1 = this.radius + _v0.radius;
      return _v0.center.distanceToSquared(this.center) <= _v1 * _v1;
    }
    intersectsBox(_v0) {
      return _v0.intersectsSphere(this);
    }
    intersectsPlane(_v0) {
      return Math.abs(_v0.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(_v0, _v1) {
      let _v2 = this.center.distanceToSquared(_v0);
      return _v1.copy(_v0), _v2 > this.radius * this.radius && (_v1.sub(this.center).normalize(), _v1.multiplyScalar(this.radius).add(this.center)), _v1;
    }
    getBoundingBox(_v0) {
      return this.isEmpty() ? _v0.makeEmpty() : (_v0.set(this.center, this.center), _v0.expandByScalar(this.radius)), _v0;
    }
    applyMatrix4(_v0) {
      return this.center.applyMatrix4(_v0), this.radius = this.radius * _v0.getMaxScaleOnAxis(), this;
    }
    translate(_v0) {
      return this.center.add(_v0), this;
    }
    expandByPoint(_v0) {
      if (this.isEmpty()) return this.center.copy(_v0), this.radius = 0, this;
      _v182.subVectors(_v0, this.center);
      let _v1 = _v182.lengthSq();
      if (_v1 > this.radius * this.radius) {
        let _v0 = Math.sqrt(_v1),
          _v1 = (_v0 - this.radius) * .5;
        this.center.addScaledVector(_v182, _v1 / _v0), this.radius += _v1;
      }
      return this;
    }
    union(_v0) {
      return _v0.isEmpty() || (this.isEmpty() ? this.copy(_v0) : !0 === this.center.equals(_v0.center) ? this.radius = Math.max(this.radius, _v0.radius) : (_v183.subVectors(_v0.center, this.center).setLength(_v0.radius), this.expandByPoint(_v182.copy(_v0.center).add(_v183)), this.expandByPoint(_v182.copy(_v0.center).sub(_v183)))), this;
    }
    equals(_v0) {
      return _v0.center.equals(this.center) && _v0.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      return {
        radius: this.radius,
        center: this.center.toArray()
      };
    }
    fromJSON(_v0) {
      return this.radius = _v0.radius, this.center.fromArray(_v0.center), this;
    }
  }
  let _v185 = new _v141(),
    _v186 = new _v141(),
    _v187 = new _v141(),
    _v188 = new _v141(),
    _v189 = new _v141(),
    _v190 = new _v141(),
    _v191 = new _v141();
  class _v192 {
    constructor(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15) {
      _v192.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== _v0 && this.set(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15);
    }
    set(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15) {
      let _v16 = this.elements;
      return _v16[0] = _v0, _v16[4] = _v1, _v16[8] = _v2, _v16[12] = _v3, _v16[1] = _v4, _v16[5] = _v5, _v16[9] = _v6, _v16[13] = _v7, _v16[2] = _v8, _v16[6] = _v9, _v16[10] = _v10, _v16[14] = _v11, _v16[3] = _v12, _v16[7] = _v13, _v16[11] = _v14, _v16[15] = _v15, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new _v192().fromArray(this.elements);
    }
    copy(_v0) {
      let _v1 = this.elements,
        _v2 = _v0.elements;
      return _v1[0] = _v2[0], _v1[1] = _v2[1], _v1[2] = _v2[2], _v1[3] = _v2[3], _v1[4] = _v2[4], _v1[5] = _v2[5], _v1[6] = _v2[6], _v1[7] = _v2[7], _v1[8] = _v2[8], _v1[9] = _v2[9], _v1[10] = _v2[10], _v1[11] = _v2[11], _v1[12] = _v2[12], _v1[13] = _v2[13], _v1[14] = _v2[14], _v1[15] = _v2[15], this;
    }
    copyPosition(_v0) {
      let _v1 = this.elements,
        _v2 = _v0.elements;
      return _v1[12] = _v2[12], _v1[13] = _v2[13], _v1[14] = _v2[14], this;
    }
    setFromMatrix3(_v0) {
      let _v1 = _v0.elements;
      return this.set(_v1[0], _v1[3], _v1[6], 0, _v1[1], _v1[4], _v1[7], 0, _v1[2], _v1[5], _v1[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(_v0, _v1, _v2) {
      return _v0.setFromMatrixColumn(this, 0), _v1.setFromMatrixColumn(this, 1), _v2.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(_v0, _v1, _v2) {
      return this.set(_v0.x, _v1.x, _v2.x, 0, _v0.y, _v1.y, _v2.y, 0, _v0.z, _v1.z, _v2.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(_v0) {
      let _v1 = this.elements,
        _v2 = _v0.elements,
        _v3 = 1 / _v193.setFromMatrixColumn(_v0, 0).length(),
        _v4 = 1 / _v193.setFromMatrixColumn(_v0, 1).length(),
        _v5 = 1 / _v193.setFromMatrixColumn(_v0, 2).length();
      return _v1[0] = _v2[0] * _v3, _v1[1] = _v2[1] * _v3, _v1[2] = _v2[2] * _v3, _v1[3] = 0, _v1[4] = _v2[4] * _v4, _v1[5] = _v2[5] * _v4, _v1[6] = _v2[6] * _v4, _v1[7] = 0, _v1[8] = _v2[8] * _v5, _v1[9] = _v2[9] * _v5, _v1[10] = _v2[10] * _v5, _v1[11] = 0, _v1[12] = 0, _v1[13] = 0, _v1[14] = 0, _v1[15] = 1, this;
    }
    makeRotationFromEuler(_v0) {
      let _v1 = this.elements,
        _v2 = _v0.x,
        _v3 = _v0.y,
        _v4 = _v0.z,
        _v5 = Math.cos(_v2),
        _v6 = Math.sin(_v2),
        _v7 = Math.cos(_v3),
        _v8 = Math.sin(_v3),
        _v9 = Math.cos(_v4),
        _v10 = Math.sin(_v4);
      if ("XYZ" === _v0.order) {
        let _v0 = _v5 * _v9,
          _v1 = _v5 * _v10,
          _v2 = _v6 * _v9,
          _v3 = _v6 * _v10;
        _v1[0] = _v7 * _v9, _v1[4] = -_v7 * _v10, _v1[8] = _v8, _v1[1] = _v1 + _v2 * _v8, _v1[5] = _v0 - _v3 * _v8, _v1[9] = -_v6 * _v7, _v1[2] = _v3 - _v0 * _v8, _v1[6] = _v2 + _v1 * _v8, _v1[10] = _v5 * _v7;
      } else if ("YXZ" === _v0.order) {
        let _v0 = _v7 * _v9,
          _v1 = _v7 * _v10,
          _v2 = _v8 * _v9,
          _v3 = _v8 * _v10;
        _v1[0] = _v0 + _v3 * _v6, _v1[4] = _v2 * _v6 - _v1, _v1[8] = _v5 * _v8, _v1[1] = _v5 * _v10, _v1[5] = _v5 * _v9, _v1[9] = -_v6, _v1[2] = _v1 * _v6 - _v2, _v1[6] = _v3 + _v0 * _v6, _v1[10] = _v5 * _v7;
      } else if ("ZXY" === _v0.order) {
        let _v0 = _v7 * _v9,
          _v1 = _v7 * _v10,
          _v2 = _v8 * _v9,
          _v3 = _v8 * _v10;
        _v1[0] = _v0 - _v3 * _v6, _v1[4] = -_v5 * _v10, _v1[8] = _v2 + _v1 * _v6, _v1[1] = _v1 + _v2 * _v6, _v1[5] = _v5 * _v9, _v1[9] = _v3 - _v0 * _v6, _v1[2] = -_v5 * _v8, _v1[6] = _v6, _v1[10] = _v5 * _v7;
      } else if ("ZYX" === _v0.order) {
        let _v0 = _v5 * _v9,
          _v1 = _v5 * _v10,
          _v2 = _v6 * _v9,
          _v3 = _v6 * _v10;
        _v1[0] = _v7 * _v9, _v1[4] = _v2 * _v8 - _v1, _v1[8] = _v0 * _v8 + _v3, _v1[1] = _v7 * _v10, _v1[5] = _v3 * _v8 + _v0, _v1[9] = _v1 * _v8 - _v2, _v1[2] = -_v8, _v1[6] = _v6 * _v7, _v1[10] = _v5 * _v7;
      } else if ("YZX" === _v0.order) {
        let _v0 = _v5 * _v7,
          _v1 = _v5 * _v8,
          _v2 = _v6 * _v7,
          _v3 = _v6 * _v8;
        _v1[0] = _v7 * _v9, _v1[4] = _v3 - _v0 * _v10, _v1[8] = _v2 * _v10 + _v1, _v1[1] = _v10, _v1[5] = _v5 * _v9, _v1[9] = -_v6 * _v9, _v1[2] = -_v8 * _v9, _v1[6] = _v1 * _v10 + _v2, _v1[10] = _v0 - _v3 * _v10;
      } else if ("XZY" === _v0.order) {
        let _v0 = _v5 * _v7,
          _v1 = _v5 * _v8,
          _v2 = _v6 * _v7,
          _v3 = _v6 * _v8;
        _v1[0] = _v7 * _v9, _v1[4] = -_v10, _v1[8] = _v8 * _v9, _v1[1] = _v0 * _v10 + _v3, _v1[5] = _v5 * _v9, _v1[9] = _v1 * _v10 - _v2, _v1[2] = _v2 * _v10 - _v1, _v1[6] = _v6 * _v9, _v1[10] = _v3 * _v10 + _v0;
      }
      return _v1[3] = 0, _v1[7] = 0, _v1[11] = 0, _v1[12] = 0, _v1[13] = 0, _v1[14] = 0, _v1[15] = 1, this;
    }
    makeRotationFromQuaternion(_v0) {
      return this.compose(_v195, _v0, _v196);
    }
    lookAt(_v0, _v1, _v2) {
      let _v3 = this.elements;
      return _v199.subVectors(_v0, _v1), 0 === _v199.lengthSq() && (_v199.z = 1), _v199.normalize(), _v197.crossVectors(_v2, _v199), 0 === _v197.lengthSq() && (1 === Math.abs(_v2.z) ? _v199.x += 1e-4 : _v199.z += 1e-4, _v199.normalize(), _v197.crossVectors(_v2, _v199)), _v197.normalize(), _v198.crossVectors(_v199, _v197), _v3[0] = _v197.x, _v3[4] = _v198.x, _v3[8] = _v199.x, _v3[1] = _v197.y, _v3[5] = _v198.y, _v3[9] = _v199.y, _v3[2] = _v197.z, _v3[6] = _v198.z, _v3[10] = _v199.z, this;
    }
    multiply(_v0) {
      return this.multiplyMatrices(this, _v0);
    }
    premultiply(_v0) {
      return this.multiplyMatrices(_v0, this);
    }
    multiplyMatrices(_v0, _v1) {
      let _v2 = _v0.elements,
        _v3 = _v1.elements,
        _v4 = this.elements,
        _v5 = _v2[0],
        _v6 = _v2[4],
        _v7 = _v2[8],
        _v8 = _v2[12],
        _v9 = _v2[1],
        _v10 = _v2[5],
        _v11 = _v2[9],
        _v12 = _v2[13],
        _v13 = _v2[2],
        _v14 = _v2[6],
        _v15 = _v2[10],
        _v16 = _v2[14],
        _v17 = _v2[3],
        _v18 = _v2[7],
        _v19 = _v2[11],
        _v20 = _v2[15],
        _v21 = _v3[0],
        _v22 = _v3[4],
        _v23 = _v3[8],
        _v24 = _v3[12],
        _v25 = _v3[1],
        _v26 = _v3[5],
        _v27 = _v3[9],
        _v28 = _v3[13],
        _v29 = _v3[2],
        _v30 = _v3[6],
        _v31 = _v3[10],
        _v32 = _v3[14],
        _v33 = _v3[3],
        _v34 = _v3[7],
        _v35 = _v3[11],
        _v36 = _v3[15];
      return _v4[0] = _v5 * _v21 + _v6 * _v25 + _v7 * _v29 + _v8 * _v33, _v4[4] = _v5 * _v22 + _v6 * _v26 + _v7 * _v30 + _v8 * _v34, _v4[8] = _v5 * _v23 + _v6 * _v27 + _v7 * _v31 + _v8 * _v35, _v4[12] = _v5 * _v24 + _v6 * _v28 + _v7 * _v32 + _v8 * _v36, _v4[1] = _v9 * _v21 + _v10 * _v25 + _v11 * _v29 + _v12 * _v33, _v4[5] = _v9 * _v22 + _v10 * _v26 + _v11 * _v30 + _v12 * _v34, _v4[9] = _v9 * _v23 + _v10 * _v27 + _v11 * _v31 + _v12 * _v35, _v4[13] = _v9 * _v24 + _v10 * _v28 + _v11 * _v32 + _v12 * _v36, _v4[2] = _v13 * _v21 + _v14 * _v25 + _v15 * _v29 + _v16 * _v33, _v4[6] = _v13 * _v22 + _v14 * _v26 + _v15 * _v30 + _v16 * _v34, _v4[10] = _v13 * _v23 + _v14 * _v27 + _v15 * _v31 + _v16 * _v35, _v4[14] = _v13 * _v24 + _v14 * _v28 + _v15 * _v32 + _v16 * _v36, _v4[3] = _v17 * _v21 + _v18 * _v25 + _v19 * _v29 + _v20 * _v33, _v4[7] = _v17 * _v22 + _v18 * _v26 + _v19 * _v30 + _v20 * _v34, _v4[11] = _v17 * _v23 + _v18 * _v27 + _v19 * _v31 + _v20 * _v35, _v4[15] = _v17 * _v24 + _v18 * _v28 + _v19 * _v32 + _v20 * _v36, this;
    }
    multiplyScalar(_v0) {
      let _v1 = this.elements;
      return _v1[0] *= _v0, _v1[4] *= _v0, _v1[8] *= _v0, _v1[12] *= _v0, _v1[1] *= _v0, _v1[5] *= _v0, _v1[9] *= _v0, _v1[13] *= _v0, _v1[2] *= _v0, _v1[6] *= _v0, _v1[10] *= _v0, _v1[14] *= _v0, _v1[3] *= _v0, _v1[7] *= _v0, _v1[11] *= _v0, _v1[15] *= _v0, this;
    }
    determinant() {
      let _v0 = this.elements,
        _v1 = _v0[0],
        _v2 = _v0[4],
        _v3 = _v0[8],
        _v4 = _v0[12],
        _v5 = _v0[1],
        _v6 = _v0[5],
        _v7 = _v0[9],
        _v8 = _v0[13],
        _v9 = _v0[2],
        _v10 = _v0[6],
        _v11 = _v0[10],
        _v12 = _v0[14];
      return _v0[3] * (_v4 * _v7 * _v10 - _v3 * _v8 * _v10 - _v4 * _v6 * _v11 + _v2 * _v8 * _v11 + _v3 * _v6 * _v12 - _v2 * _v7 * _v12) + _v0[7] * (_v1 * _v7 * _v12 - _v1 * _v8 * _v11 + _v4 * _v5 * _v11 - _v3 * _v5 * _v12 + _v3 * _v8 * _v9 - _v4 * _v7 * _v9) + _v0[11] * (_v1 * _v8 * _v10 - _v1 * _v6 * _v12 - _v4 * _v5 * _v10 + _v2 * _v5 * _v12 + _v4 * _v6 * _v9 - _v2 * _v8 * _v9) + _v0[15] * (-_v3 * _v6 * _v9 - _v1 * _v7 * _v10 + _v1 * _v6 * _v11 + _v3 * _v5 * _v10 - _v2 * _v5 * _v11 + _v2 * _v7 * _v9);
    }
    transpose() {
      let _v0,
        _v1 = this.elements;
      return _v0 = _v1[1], _v1[1] = _v1[4], _v1[4] = _v0, _v0 = _v1[2], _v1[2] = _v1[8], _v1[8] = _v0, _v0 = _v1[6], _v1[6] = _v1[9], _v1[9] = _v0, _v0 = _v1[3], _v1[3] = _v1[12], _v1[12] = _v0, _v0 = _v1[7], _v1[7] = _v1[13], _v1[13] = _v0, _v0 = _v1[11], _v1[11] = _v1[14], _v1[14] = _v0, this;
    }
    setPosition(_v0, _v1, _v2) {
      let _v3 = this.elements;
      return _v0.isVector3 ? (_v3[12] = _v0.x, _v3[13] = _v0.y, _v3[14] = _v0.z) : (_v3[12] = _v0, _v3[13] = _v1, _v3[14] = _v2), this;
    }
    invert() {
      let _v0 = this.elements,
        _v1 = _v0[0],
        _v2 = _v0[1],
        _v3 = _v0[2],
        _v4 = _v0[3],
        _v5 = _v0[4],
        _v6 = _v0[5],
        _v7 = _v0[6],
        _v8 = _v0[7],
        _v9 = _v0[8],
        _v10 = _v0[9],
        _v11 = _v0[10],
        _v12 = _v0[11],
        _v13 = _v0[12],
        _v14 = _v0[13],
        _v15 = _v0[14],
        _v16 = _v0[15],
        _v17 = _v10 * _v15 * _v8 - _v14 * _v11 * _v8 + _v14 * _v7 * _v12 - _v6 * _v15 * _v12 - _v10 * _v7 * _v16 + _v6 * _v11 * _v16,
        _v18 = _v13 * _v11 * _v8 - _v9 * _v15 * _v8 - _v13 * _v7 * _v12 + _v5 * _v15 * _v12 + _v9 * _v7 * _v16 - _v5 * _v11 * _v16,
        _v19 = _v9 * _v14 * _v8 - _v13 * _v10 * _v8 + _v13 * _v6 * _v12 - _v5 * _v14 * _v12 - _v9 * _v6 * _v16 + _v5 * _v10 * _v16,
        _v20 = _v13 * _v10 * _v7 - _v9 * _v14 * _v7 - _v13 * _v6 * _v11 + _v5 * _v14 * _v11 + _v9 * _v6 * _v15 - _v5 * _v10 * _v15,
        _v21 = _v1 * _v17 + _v2 * _v18 + _v3 * _v19 + _v4 * _v20;
      if (0 === _v21) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      let _v22 = 1 / _v21;
      return _v0[0] = _v17 * _v22, _v0[1] = (_v14 * _v11 * _v4 - _v10 * _v15 * _v4 - _v14 * _v3 * _v12 + _v2 * _v15 * _v12 + _v10 * _v3 * _v16 - _v2 * _v11 * _v16) * _v22, _v0[2] = (_v6 * _v15 * _v4 - _v14 * _v7 * _v4 + _v14 * _v3 * _v8 - _v2 * _v15 * _v8 - _v6 * _v3 * _v16 + _v2 * _v7 * _v16) * _v22, _v0[3] = (_v10 * _v7 * _v4 - _v6 * _v11 * _v4 - _v10 * _v3 * _v8 + _v2 * _v11 * _v8 + _v6 * _v3 * _v12 - _v2 * _v7 * _v12) * _v22, _v0[4] = _v18 * _v22, _v0[5] = (_v9 * _v15 * _v4 - _v13 * _v11 * _v4 + _v13 * _v3 * _v12 - _v1 * _v15 * _v12 - _v9 * _v3 * _v16 + _v1 * _v11 * _v16) * _v22, _v0[6] = (_v13 * _v7 * _v4 - _v5 * _v15 * _v4 - _v13 * _v3 * _v8 + _v1 * _v15 * _v8 + _v5 * _v3 * _v16 - _v1 * _v7 * _v16) * _v22, _v0[7] = (_v5 * _v11 * _v4 - _v9 * _v7 * _v4 + _v9 * _v3 * _v8 - _v1 * _v11 * _v8 - _v5 * _v3 * _v12 + _v1 * _v7 * _v12) * _v22, _v0[8] = _v19 * _v22, _v0[9] = (_v13 * _v10 * _v4 - _v9 * _v14 * _v4 - _v13 * _v2 * _v12 + _v1 * _v14 * _v12 + _v9 * _v2 * _v16 - _v1 * _v10 * _v16) * _v22, _v0[10] = (_v5 * _v14 * _v4 - _v13 * _v6 * _v4 + _v13 * _v2 * _v8 - _v1 * _v14 * _v8 - _v5 * _v2 * _v16 + _v1 * _v6 * _v16) * _v22, _v0[11] = (_v9 * _v6 * _v4 - _v5 * _v10 * _v4 - _v9 * _v2 * _v8 + _v1 * _v10 * _v8 + _v5 * _v2 * _v12 - _v1 * _v6 * _v12) * _v22, _v0[12] = _v20 * _v22, _v0[13] = (_v9 * _v14 * _v3 - _v13 * _v10 * _v3 + _v13 * _v2 * _v11 - _v1 * _v14 * _v11 - _v9 * _v2 * _v15 + _v1 * _v10 * _v15) * _v22, _v0[14] = (_v13 * _v6 * _v3 - _v5 * _v14 * _v3 - _v13 * _v2 * _v7 + _v1 * _v14 * _v7 + _v5 * _v2 * _v15 - _v1 * _v6 * _v15) * _v22, _v0[15] = (_v5 * _v10 * _v3 - _v9 * _v6 * _v3 + _v9 * _v2 * _v7 - _v1 * _v10 * _v7 - _v5 * _v2 * _v11 + _v1 * _v6 * _v11) * _v22, this;
    }
    scale(_v0) {
      let _v1 = this.elements,
        _v2 = _v0.x,
        _v3 = _v0.y,
        _v4 = _v0.z;
      return _v1[0] *= _v2, _v1[4] *= _v3, _v1[8] *= _v4, _v1[1] *= _v2, _v1[5] *= _v3, _v1[9] *= _v4, _v1[2] *= _v2, _v1[6] *= _v3, _v1[10] *= _v4, _v1[3] *= _v2, _v1[7] *= _v3, _v1[11] *= _v4, this;
    }
    getMaxScaleOnAxis() {
      let _v0 = this.elements;
      return Math.sqrt(Math.max(_v0[0] * _v0[0] + _v0[1] * _v0[1] + _v0[2] * _v0[2], _v0[4] * _v0[4] + _v0[5] * _v0[5] + _v0[6] * _v0[6], _v0[8] * _v0[8] + _v0[9] * _v0[9] + _v0[10] * _v0[10]));
    }
    makeTranslation(_v0, _v1, _v2) {
      return _v0.isVector3 ? this.set(1, 0, 0, _v0.x, 0, 1, 0, _v0.y, 0, 0, 1, _v0.z, 0, 0, 0, 1) : this.set(1, 0, 0, _v0, 0, 1, 0, _v1, 0, 0, 1, _v2, 0, 0, 0, 1), this;
    }
    makeRotationX(_v0) {
      let _v1 = Math.cos(_v0),
        _v2 = Math.sin(_v0);
      return this.set(1, 0, 0, 0, 0, _v1, -_v2, 0, 0, _v2, _v1, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(_v0) {
      let _v1 = Math.cos(_v0),
        _v2 = Math.sin(_v0);
      return this.set(_v1, 0, _v2, 0, 0, 1, 0, 0, -_v2, 0, _v1, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(_v0) {
      let _v1 = Math.cos(_v0),
        _v2 = Math.sin(_v0);
      return this.set(_v1, -_v2, 0, 0, _v2, _v1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(_v0, _v1) {
      let _v2 = Math.cos(_v1),
        _v3 = Math.sin(_v1),
        _v4 = 1 - _v2,
        _v5 = _v0.x,
        _v6 = _v0.y,
        _v7 = _v0.z,
        _v8 = _v4 * _v5,
        _v9 = _v4 * _v6;
      return this.set(_v8 * _v5 + _v2, _v8 * _v6 - _v3 * _v7, _v8 * _v7 + _v3 * _v6, 0, _v8 * _v6 + _v3 * _v7, _v9 * _v6 + _v2, _v9 * _v7 - _v3 * _v5, 0, _v8 * _v7 - _v3 * _v6, _v9 * _v7 + _v3 * _v5, _v4 * _v7 * _v7 + _v2, 0, 0, 0, 0, 1), this;
    }
    makeScale(_v0, _v1, _v2) {
      return this.set(_v0, 0, 0, 0, 0, _v1, 0, 0, 0, 0, _v2, 0, 0, 0, 0, 1), this;
    }
    makeShear(_v0, _v1, _v2, _v3, _v4, _v5) {
      return this.set(1, _v2, _v4, 0, _v0, 1, _v5, 0, _v1, _v3, 1, 0, 0, 0, 0, 1), this;
    }
    compose(_v0, _v1, _v2) {
      let _v3 = this.elements,
        _v4 = _v1._x,
        _v5 = _v1._y,
        _v6 = _v1._z,
        _v7 = _v1._w,
        _v8 = _v4 + _v4,
        _v9 = _v5 + _v5,
        _v10 = _v6 + _v6,
        _v11 = _v4 * _v8,
        _v12 = _v4 * _v9,
        _v13 = _v4 * _v10,
        _v14 = _v5 * _v9,
        _v15 = _v5 * _v10,
        _v16 = _v6 * _v10,
        _v17 = _v7 * _v8,
        _v18 = _v7 * _v9,
        _v19 = _v7 * _v10,
        _v20 = _v2.x,
        _v21 = _v2.y,
        _v22 = _v2.z;
      return _v3[0] = (1 - (_v14 + _v16)) * _v20, _v3[1] = (_v12 + _v19) * _v20, _v3[2] = (_v13 - _v18) * _v20, _v3[3] = 0, _v3[4] = (_v12 - _v19) * _v21, _v3[5] = (1 - (_v11 + _v16)) * _v21, _v3[6] = (_v15 + _v17) * _v21, _v3[7] = 0, _v3[8] = (_v13 + _v18) * _v22, _v3[9] = (_v15 - _v17) * _v22, _v3[10] = (1 - (_v11 + _v14)) * _v22, _v3[11] = 0, _v3[12] = _v0.x, _v3[13] = _v0.y, _v3[14] = _v0.z, _v3[15] = 1, this;
    }
    decompose(_v0, _v1, _v2) {
      let _v3 = this.elements,
        _v4 = _v193.set(_v3[0], _v3[1], _v3[2]).length(),
        _v5 = _v193.set(_v3[4], _v3[5], _v3[6]).length(),
        _v6 = _v193.set(_v3[8], _v3[9], _v3[10]).length();
      0 > this.determinant() && (_v4 = -_v4), _v0.x = _v3[12], _v0.y = _v3[13], _v0.z = _v3[14], _v194.copy(this);
      let _v7 = 1 / _v4,
        _v8 = 1 / _v5,
        _v9 = 1 / _v6;
      return _v194.elements[0] *= _v7, _v194.elements[1] *= _v7, _v194.elements[2] *= _v7, _v194.elements[4] *= _v8, _v194.elements[5] *= _v8, _v194.elements[6] *= _v8, _v194.elements[8] *= _v9, _v194.elements[9] *= _v9, _v194.elements[10] *= _v9, _v1.setFromRotationMatrix(_v194), _v2.x = _v4, _v2.y = _v5, _v2.z = _v6, this;
    }
    makePerspective(_v0, _v1, _v2, _v3, _v4, _v5, _v6 = 0, _v7 = !1) {
      let _v8,
        _v9,
        _v10 = this.elements;
      if (_v7) _v8 = _v4 / (_v5 - _v4), _v9 = _v5 * _v4 / (_v5 - _v4);else if (0 === _v6) _v8 = -(_v5 + _v4) / (_v5 - _v4), _v9 = -2 * _v5 * _v4 / (_v5 - _v4);else if (0 === _v6) _v8 = -_v5 / (_v5 - _v4), _v9 = -_v5 * _v4 / (_v5 - _v4);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + _v6);
      return _v10[0] = 2 * _v4 / (_v1 - _v0), _v10[4] = 0, _v10[8] = (_v1 + _v0) / (_v1 - _v0), _v10[12] = 0, _v10[1] = 0, _v10[5] = 2 * _v4 / (_v2 - _v3), _v10[9] = (_v2 + _v3) / (_v2 - _v3), _v10[13] = 0, _v10[2] = 0, _v10[6] = 0, _v10[10] = _v8, _v10[14] = _v9, _v10[3] = 0, _v10[7] = 0, _v10[11] = -1, _v10[15] = 0, this;
    }
    makeOrthographic(_v0, _v1, _v2, _v3, _v4, _v5, _v6 = 0, _v7 = !1) {
      let _v8,
        _v9,
        _v10 = this.elements;
      if (_v7) _v8 = 1 / (_v5 - _v4), _v9 = _v5 / (_v5 - _v4);else if (0 === _v6) _v8 = -2 / (_v5 - _v4), _v9 = -(_v5 + _v4) / (_v5 - _v4);else if (0 === _v6) _v8 = -1 / (_v5 - _v4), _v9 = -_v4 / (_v5 - _v4);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + _v6);
      return _v10[0] = 2 / (_v1 - _v0), _v10[4] = 0, _v10[8] = 0, _v10[12] = -(_v1 + _v0) / (_v1 - _v0), _v10[1] = 0, _v10[5] = 2 / (_v2 - _v3), _v10[9] = 0, _v10[13] = -(_v2 + _v3) / (_v2 - _v3), _v10[2] = 0, _v10[6] = 0, _v10[10] = _v8, _v10[14] = _v9, _v10[3] = 0, _v10[7] = 0, _v10[11] = 0, _v10[15] = 1, this;
    }
    equals(_v0) {
      let _v1 = this.elements,
        _v2 = _v0.elements;
      for (let _v0 = 0; _v0 < 16; _v0++) if (_v1[_v0] !== _v2[_v0]) return !1;
      return !0;
    }
    fromArray(_v0, _v1 = 0) {
      for (let _v0 = 0; _v0 < 16; _v0++) this.elements[_v0] = _v0[_v0 + _v1];
      return this;
    }
    toArray(_v0 = [], _v1 = 0) {
      let _v2 = this.elements;
      return _v0[_v1] = _v2[0], _v0[_v1 + 1] = _v2[1], _v0[_v1 + 2] = _v2[2], _v0[_v1 + 3] = _v2[3], _v0[_v1 + 4] = _v2[4], _v0[_v1 + 5] = _v2[5], _v0[_v1 + 6] = _v2[6], _v0[_v1 + 7] = _v2[7], _v0[_v1 + 8] = _v2[8], _v0[_v1 + 9] = _v2[9], _v0[_v1 + 10] = _v2[10], _v0[_v1 + 11] = _v2[11], _v0[_v1 + 12] = _v2[12], _v0[_v1 + 13] = _v2[13], _v0[_v1 + 14] = _v2[14], _v0[_v1 + 15] = _v2[15], _v0;
    }
  }
  let _v193 = new _v141(),
    _v194 = new _v192(),
    _v195 = new _v141(0, 0, 0),
    _v196 = new _v141(1, 1, 1),
    _v197 = new _v141(),
    _v198 = new _v141(),
    _v199 = new _v141(),
    _v200 = new _v192(),
    _v201 = new _v140();
  class _v202 {
    constructor(_v0 = 0, _v1 = 0, _v2 = 0, _v3 = _v202.DEFAULT_ORDER) {
      this.isEuler = !0, this._x = _v0, this._y = _v1, this._z = _v2, this._order = _v3;
    }
    get x() {
      return this._x;
    }
    set x(_v0) {
      this._x = _v0, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(_v0) {
      this._y = _v0, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(_v0) {
      this._z = _v0, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(_v0) {
      this._order = _v0, this._onChangeCallback();
    }
    set(_v0, _v1, _v2, _v3 = this._order) {
      return this._x = _v0, this._y = _v1, this._z = _v2, this._order = _v3, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(_v0) {
      return this._x = _v0._x, this._y = _v0._y, this._z = _v0._z, this._order = _v0._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(_v0, _v1 = this._order, _v2 = !0) {
      let _v3 = _v0.elements,
        _v4 = _v3[0],
        _v5 = _v3[4],
        _v6 = _v3[8],
        _v7 = _v3[1],
        _v8 = _v3[5],
        _v9 = _v3[9],
        _v10 = _v3[2],
        _v11 = _v3[6],
        _v12 = _v3[10];
      switch (_v1) {
        case "XYZ":
          this._y = Math.asin(_v136(_v6, -1, 1)), .9999999 > Math.abs(_v6) ? (this._x = Math.atan2(-_v9, _v12), this._z = Math.atan2(-_v5, _v4)) : (this._x = Math.atan2(_v11, _v8), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-_v136(_v9, -1, 1)), .9999999 > Math.abs(_v9) ? (this._y = Math.atan2(_v6, _v12), this._z = Math.atan2(_v7, _v8)) : (this._y = Math.atan2(-_v10, _v4), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(_v136(_v11, -1, 1)), .9999999 > Math.abs(_v11) ? (this._y = Math.atan2(-_v10, _v12), this._z = Math.atan2(-_v5, _v8)) : (this._y = 0, this._z = Math.atan2(_v7, _v4));
          break;
        case "ZYX":
          this._y = Math.asin(-_v136(_v10, -1, 1)), .9999999 > Math.abs(_v10) ? (this._x = Math.atan2(_v11, _v12), this._z = Math.atan2(_v7, _v4)) : (this._x = 0, this._z = Math.atan2(-_v5, _v8));
          break;
        case "YZX":
          this._z = Math.asin(_v136(_v7, -1, 1)), .9999999 > Math.abs(_v7) ? (this._x = Math.atan2(-_v9, _v8), this._y = Math.atan2(-_v10, _v4)) : (this._x = 0, this._y = Math.atan2(_v6, _v12));
          break;
        case "XZY":
          this._z = Math.asin(-_v136(_v5, -1, 1)), .9999999 > Math.abs(_v5) ? (this._x = Math.atan2(_v11, _v8), this._y = Math.atan2(_v6, _v4)) : (this._x = Math.atan2(-_v9, _v12), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + _v1);
      }
      return this._order = _v1, !0 === _v2 && this._onChangeCallback(), this;
    }
    setFromQuaternion(_v0, _v1, _v2) {
      return _v200.makeRotationFromQuaternion(_v0), this.setFromRotationMatrix(_v200, _v1, _v2);
    }
    setFromVector3(_v0, _v1 = this._order) {
      return this.set(_v0.x, _v0.y, _v0.z, _v1);
    }
    reorder(_v0) {
      return _v201.setFromEuler(this), this.setFromQuaternion(_v201, _v0);
    }
    equals(_v0) {
      return _v0._x === this._x && _v0._y === this._y && _v0._z === this._z && _v0._order === this._order;
    }
    fromArray(_v0) {
      return this._x = _v0[0], this._y = _v0[1], this._z = _v0[2], void 0 !== _v0[3] && (this._order = _v0[3]), this._onChangeCallback(), this;
    }
    toArray(_v0 = [], _v1 = 0) {
      return _v0[_v1] = this._x, _v0[_v1 + 1] = this._y, _v0[_v1 + 2] = this._z, _v0[_v1 + 3] = this._order, _v0;
    }
    _onChange(_v0) {
      return this._onChangeCallback = _v0, this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  _v202.DEFAULT_ORDER = "XYZ";
  class _v203 {
    constructor() {
      this.mask = 1;
    }
    set(_v0) {
      this.mask = 1 << _v0 >>> 0;
    }
    enable(_v0) {
      this.mask |= 1 << _v0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(_v0) {
      this.mask ^= 1 << _v0;
    }
    disable(_v0) {
      this.mask &= ~(1 << _v0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(_v0) {
      return (this.mask & _v0.mask) != 0;
    }
    isEnabled(_v0) {
      return (this.mask & 1 << _v0) != 0;
    }
  }
  let _v204 = 0,
    _v205 = new _v141(),
    _v206 = new _v140(),
    _v207 = new _v192(),
    _v208 = new _v141(),
    _v209 = new _v141(),
    _v210 = new _v141(),
    _v211 = new _v140(),
    _v212 = new _v141(1, 0, 0),
    _v213 = new _v141(0, 1, 0),
    _v214 = new _v141(0, 0, 1),
    _v215 = {
      type: "added"
    },
    _v216 = {
      type: "removed"
    },
    _v217 = {
      type: "childadded",
      child: null
    },
    _v218 = {
      type: "childremoved",
      child: null
    };
  class _v219 extends _v131 {
    constructor() {
      super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
        value: _v204++
      }), this.uuid = _v135(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _v219.DEFAULT_UP.clone();
      const _v0 = new _v141(),
        _v1 = new _v202(),
        _v2 = new _v140(),
        _v3 = new _v141(1, 1, 1);
      _v1._onChange(function () {
        _v2.setFromEuler(_v1, !1);
      }), _v2._onChange(function () {
        _v1.setFromQuaternion(_v2, void 0, !1);
      }), Object.defineProperties(this, {
        position: {
          configurable: !0,
          enumerable: !0,
          value: _v0
        },
        rotation: {
          configurable: !0,
          enumerable: !0,
          value: _v1
        },
        quaternion: {
          configurable: !0,
          enumerable: !0,
          value: _v2
        },
        scale: {
          configurable: !0,
          enumerable: !0,
          value: _v3
        },
        modelViewMatrix: {
          value: new _v192()
        },
        normalMatrix: {
          value: new _v144()
        }
      }), this.matrix = new _v192(), this.matrixWorld = new _v192(), this.matrixAutoUpdate = _v219.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _v219.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new _v203(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(_v0) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(_v0), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(_v0) {
      return this.quaternion.premultiply(_v0), this;
    }
    setRotationFromAxisAngle(_v0, _v1) {
      this.quaternion.setFromAxisAngle(_v0, _v1);
    }
    setRotationFromEuler(_v0) {
      this.quaternion.setFromEuler(_v0, !0);
    }
    setRotationFromMatrix(_v0) {
      this.quaternion.setFromRotationMatrix(_v0);
    }
    setRotationFromQuaternion(_v0) {
      this.quaternion.copy(_v0);
    }
    rotateOnAxis(_v0, _v1) {
      return _v206.setFromAxisAngle(_v0, _v1), this.quaternion.multiply(_v206), this;
    }
    rotateOnWorldAxis(_v0, _v1) {
      return _v206.setFromAxisAngle(_v0, _v1), this.quaternion.premultiply(_v206), this;
    }
    rotateX(_v0) {
      return this.rotateOnAxis(_v212, _v0);
    }
    rotateY(_v0) {
      return this.rotateOnAxis(_v213, _v0);
    }
    rotateZ(_v0) {
      return this.rotateOnAxis(_v214, _v0);
    }
    translateOnAxis(_v0, _v1) {
      return _v205.copy(_v0).applyQuaternion(this.quaternion), this.position.add(_v205.multiplyScalar(_v1)), this;
    }
    translateX(_v0) {
      return this.translateOnAxis(_v212, _v0);
    }
    translateY(_v0) {
      return this.translateOnAxis(_v213, _v0);
    }
    translateZ(_v0) {
      return this.translateOnAxis(_v214, _v0);
    }
    localToWorld(_v0) {
      return this.updateWorldMatrix(!0, !1), _v0.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(_v0) {
      return this.updateWorldMatrix(!0, !1), _v0.applyMatrix4(_v207.copy(this.matrixWorld).invert());
    }
    lookAt(_v0, _v1, _v2) {
      _v0.isVector3 ? _v208.copy(_v0) : _v208.set(_v0, _v1, _v2);
      let _v3 = this.parent;
      this.updateWorldMatrix(!0, !1), _v209.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? _v207.lookAt(_v209, _v208, this.up) : _v207.lookAt(_v208, _v209, this.up), this.quaternion.setFromRotationMatrix(_v207), _v3 && (_v207.extractRotation(_v3.matrixWorld), _v206.setFromRotationMatrix(_v207), this.quaternion.premultiply(_v206.invert()));
    }
    add(_v0) {
      if (arguments.length > 1) {
        for (let _v0 = 0; _v0 < arguments.length; _v0++) this.add(arguments[_v0]);
        return this;
      }
      return _v0 === this ? console.error("THREE.Object3D.add: object can't be added as a child of itself.", _v0) : _v0 && _v0.isObject3D ? (_v0.removeFromParent(), _v0.parent = this, this.children.push(_v0), _v0.dispatchEvent(_v215), _v217.child = _v0, this.dispatchEvent(_v217), _v217.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", _v0), this;
    }
    remove(_v0) {
      if (arguments.length > 1) {
        for (let _v0 = 0; _v0 < arguments.length; _v0++) this.remove(arguments[_v0]);
        return this;
      }
      let _v1 = this.children.indexOf(_v0);
      return -1 !== _v1 && (_v0.parent = null, this.children.splice(_v1, 1), _v0.dispatchEvent(_v216), _v218.child = _v0, this.dispatchEvent(_v218), _v218.child = null), this;
    }
    removeFromParent() {
      let _v0 = this.parent;
      return null !== _v0 && _v0.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(_v0) {
      return this.updateWorldMatrix(!0, !1), _v207.copy(this.matrixWorld).invert(), null !== _v0.parent && (_v0.parent.updateWorldMatrix(!0, !1), _v207.multiply(_v0.parent.matrixWorld)), _v0.applyMatrix4(_v207), _v0.removeFromParent(), _v0.parent = this, this.children.push(_v0), _v0.updateWorldMatrix(!1, !0), _v0.dispatchEvent(_v215), _v217.child = _v0, this.dispatchEvent(_v217), _v217.child = null, this;
    }
    getObjectById(_v0) {
      return this.getObjectByProperty("id", _v0);
    }
    getObjectByName(_v0) {
      return this.getObjectByProperty("name", _v0);
    }
    getObjectByProperty(_v0, _v1) {
      if (this[_v0] === _v1) return this;
      for (let _v0 = 0, _v1 = this.children.length; _v0 < _v1; _v0++) {
        let _v0 = this.children[_v0].getObjectByProperty(_v0, _v1);
        if (void 0 !== _v0) return _v0;
      }
    }
    getObjectsByProperty(_v0, _v1, _v2 = []) {
      this[_v0] === _v1 && _v2.push(this);
      let _v3 = this.children;
      for (let _v0 = 0, _v1 = _v3.length; _v0 < _v1; _v0++) _v3[_v0].getObjectsByProperty(_v0, _v1, _v2);
      return _v2;
    }
    getWorldPosition(_v0) {
      return this.updateWorldMatrix(!0, !1), _v0.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(_v0) {
      return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_v209, _v0, _v210), _v0;
    }
    getWorldScale(_v0) {
      return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_v209, _v211, _v0), _v0;
    }
    getWorldDirection(_v0) {
      this.updateWorldMatrix(!0, !1);
      let _v1 = this.matrixWorld.elements;
      return _v0.set(_v1[8], _v1[9], _v1[10]).normalize();
    }
    raycast() {}
    traverse(_v0) {
      _v0(this);
      let _v1 = this.children;
      for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) _v1[_v0].traverse(_v0);
    }
    traverseVisible(_v0) {
      if (!1 === this.visible) return;
      _v0(this);
      let _v1 = this.children;
      for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) _v1[_v0].traverseVisible(_v0);
    }
    traverseAncestors(_v0) {
      let _v1 = this.parent;
      null !== _v1 && (_v0(_v1), _v1.traverseAncestors(_v0));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
    }
    updateMatrixWorld(_v0) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || _v0) && (!0 === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, _v0 = !0);
      let _v1 = this.children;
      for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) _v1[_v0].updateMatrixWorld(_v0);
    }
    updateWorldMatrix(_v0, _v1) {
      let _v2 = this.parent;
      if (!0 === _v0 && null !== _v2 && _v2.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), !0 === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), !0 === _v1) {
        let _v0 = this.children;
        for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) _v0[_v0].updateWorldMatrix(!1, !0);
      }
    }
    toJSON(_v0) {
      let _v1 = void 0 === _v0 || "string" == typeof _v0,
        _v2 = {};
      _v1 && (_v0 = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      }, _v2.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      let _v3 = {};
      function _v4(_v0, _v1) {
        return void 0 === _v0[_v1.uuid] && (_v0[_v1.uuid] = _v1.toJSON(_v0)), _v1.uuid;
      }
      if (_v3.uuid = this.uuid, _v3.type = this.type, "" !== this.name && (_v3.name = this.name), !0 === this.castShadow && (_v3.castShadow = !0), !0 === this.receiveShadow && (_v3.receiveShadow = !0), !1 === this.visible && (_v3.visible = !1), !1 === this.frustumCulled && (_v3.frustumCulled = !1), 0 !== this.renderOrder && (_v3.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (_v3.userData = this.userData), _v3.layers = this.layers.mask, _v3.matrix = this.matrix.toArray(), _v3.up = this.up.toArray(), !1 === this.matrixAutoUpdate && (_v3.matrixAutoUpdate = !1), this.isInstancedMesh && (_v3.type = "InstancedMesh", _v3.count = this.count, _v3.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (_v3.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (_v3.type = "BatchedMesh", _v3.perObjectFrustumCulled = this.perObjectFrustumCulled, _v3.sortObjects = this.sortObjects, _v3.drawRanges = this._drawRanges, _v3.reservedRanges = this._reservedRanges, _v3.geometryInfo = this._geometryInfo.map(_v0 => ({
        ..._v0,
        boundingBox: _v0.boundingBox ? _v0.boundingBox.toJSON() : void 0,
        boundingSphere: _v0.boundingSphere ? _v0.boundingSphere.toJSON() : void 0
      })), _v3.instanceInfo = this._instanceInfo.map(_v0 => ({
        ..._v0
      })), _v3.availableInstanceIds = this._availableInstanceIds.slice(), _v3.availableGeometryIds = this._availableGeometryIds.slice(), _v3.nextIndexStart = this._nextIndexStart, _v3.nextVertexStart = this._nextVertexStart, _v3.geometryCount = this._geometryCount, _v3.maxInstanceCount = this._maxInstanceCount, _v3.maxVertexCount = this._maxVertexCount, _v3.maxIndexCount = this._maxIndexCount, _v3.geometryInitialized = this._geometryInitialized, _v3.matricesTexture = this._matricesTexture.toJSON(_v0), _v3.indirectTexture = this._indirectTexture.toJSON(_v0), null !== this._colorsTexture && (_v3.colorsTexture = this._colorsTexture.toJSON(_v0)), null !== this.boundingSphere && (_v3.boundingSphere = this.boundingSphere.toJSON()), null !== this.boundingBox && (_v3.boundingBox = this.boundingBox.toJSON())), this.isScene) this.background && (this.background.isColor ? _v3.background = this.background.toJSON() : this.background.isTexture && (_v3.background = this.background.toJSON(_v0).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (_v3.environment = this.environment.toJSON(_v0).uuid);else if (this.isMesh || this.isLine || this.isPoints) {
        _v3.geometry = _v4(_v0.geometries, this.geometry);
        let _v0 = this.geometry.parameters;
        if (void 0 !== _v0 && void 0 !== _v0.shapes) {
          let _v0 = _v0.shapes;
          if (Array.isArray(_v0)) for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
            let _v0 = _v0[_v0];
            _v4(_v0.shapes, _v0);
          } else _v4(_v0.shapes, _v0);
        }
      }
      if (this.isSkinnedMesh && (_v3.bindMode = this.bindMode, _v3.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (_v4(_v0.skeletons, this.skeleton), _v3.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        let _v0 = [];
        for (let _v0 = 0, _v1 = this.material.length; _v0 < _v1; _v0++) _v0.push(_v4(_v0.materials, this.material[_v0]));
        _v3.material = _v0;
      } else _v3.material = _v4(_v0.materials, this.material);
      if (this.children.length > 0) {
        _v3.children = [];
        for (let _v0 = 0; _v0 < this.children.length; _v0++) _v3.children.push(this.children[_v0].toJSON(_v0).object);
      }
      if (this.animations.length > 0) {
        _v3.animations = [];
        for (let _v0 = 0; _v0 < this.animations.length; _v0++) {
          let _v0 = this.animations[_v0];
          _v3.animations.push(_v4(_v0.animations, _v0));
        }
      }
      if (_v1) {
        let _v0 = _v5(_v0.geometries),
          _v1 = _v5(_v0.materials),
          _v2 = _v5(_v0.textures),
          _v3 = _v5(_v0.images),
          _v4 = _v5(_v0.shapes),
          _v5 = _v5(_v0.skeletons),
          _v6 = _v5(_v0.animations),
          _v7 = _v5(_v0.nodes);
        _v0.length > 0 && (_v2.geometries = _v0), _v1.length > 0 && (_v2.materials = _v1), _v2.length > 0 && (_v2.textures = _v2), _v3.length > 0 && (_v2.images = _v3), _v4.length > 0 && (_v2.shapes = _v4), _v5.length > 0 && (_v2.skeletons = _v5), _v6.length > 0 && (_v2.animations = _v6), _v7.length > 0 && (_v2.nodes = _v7);
      }
      return _v2.object = _v3, _v2;
      function _v5(_v0) {
        let _v1 = [];
        for (let _v0 in _v0) {
          let _v0 = _v0[_v0];
          delete _v0.metadata, _v1.push(_v0);
        }
        return _v1;
      }
    }
    clone(_v0) {
      return new this.constructor().copy(this, _v0);
    }
    copy(_v0, _v1 = !0) {
      if (this.name = _v0.name, this.up.copy(_v0.up), this.position.copy(_v0.position), this.rotation.order = _v0.rotation.order, this.quaternion.copy(_v0.quaternion), this.scale.copy(_v0.scale), this.matrix.copy(_v0.matrix), this.matrixWorld.copy(_v0.matrixWorld), this.matrixAutoUpdate = _v0.matrixAutoUpdate, this.matrixWorldAutoUpdate = _v0.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = _v0.matrixWorldNeedsUpdate, this.layers.mask = _v0.layers.mask, this.visible = _v0.visible, this.castShadow = _v0.castShadow, this.receiveShadow = _v0.receiveShadow, this.frustumCulled = _v0.frustumCulled, this.renderOrder = _v0.renderOrder, this.animations = _v0.animations.slice(), this.userData = JSON.parse(JSON.stringify(_v0.userData)), !0 === _v1) for (let _v0 = 0; _v0 < _v0.children.length; _v0++) {
        let _v0 = _v0.children[_v0];
        this.add(_v0.clone());
      }
      return this;
    }
  }
  _v219.DEFAULT_UP = new _v141(0, 1, 0), _v219.DEFAULT_MATRIX_AUTO_UPDATE = !0, _v219.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
  let _v220 = new _v141(),
    _v221 = new _v141(),
    _v222 = new _v141(),
    _v223 = new _v141(),
    _v224 = new _v141(),
    _v225 = new _v141(),
    _v226 = new _v141(),
    _v227 = new _v141(),
    _v228 = new _v141(),
    _v229 = new _v141(),
    _v230 = new _v162(),
    _v231 = new _v162(),
    _v232 = new _v162();
  class _v233 {
    constructor(_v0 = new _v141(), _v1 = new _v141(), _v2 = new _v141()) {
      this.a = _v0, this.b = _v1, this.c = _v2;
    }
    static getNormal(_v0, _v1, _v2, _v3) {
      _v3.subVectors(_v2, _v1), _v220.subVectors(_v0, _v1), _v3.cross(_v220);
      let _v4 = _v3.lengthSq();
      return _v4 > 0 ? _v3.multiplyScalar(1 / Math.sqrt(_v4)) : _v3.set(0, 0, 0);
    }
    static getBarycoord(_v0, _v1, _v2, _v3, _v4) {
      _v220.subVectors(_v3, _v1), _v221.subVectors(_v2, _v1), _v222.subVectors(_v0, _v1);
      let _v5 = _v220.dot(_v220),
        _v6 = _v220.dot(_v221),
        _v7 = _v220.dot(_v222),
        _v8 = _v221.dot(_v221),
        _v9 = _v221.dot(_v222),
        _v10 = _v5 * _v8 - _v6 * _v6;
      if (0 === _v10) return _v4.set(0, 0, 0), null;
      let _v11 = 1 / _v10,
        _v12 = (_v8 * _v7 - _v6 * _v9) * _v11,
        _v13 = (_v5 * _v9 - _v6 * _v7) * _v11;
      return _v4.set(1 - _v12 - _v13, _v13, _v12);
    }
    static containsPoint(_v0, _v1, _v2, _v3) {
      return null !== this.getBarycoord(_v0, _v1, _v2, _v3, _v223) && _v223.x >= 0 && _v223.y >= 0 && _v223.x + _v223.y <= 1;
    }
    static getInterpolation(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
      return null === this.getBarycoord(_v0, _v1, _v2, _v3, _v223) ? (_v7.x = 0, _v7.y = 0, "z" in _v7 && (_v7.z = 0), "w" in _v7 && (_v7.w = 0), null) : (_v7.setScalar(0), _v7.addScaledVector(_v4, _v223.x), _v7.addScaledVector(_v5, _v223.y), _v7.addScaledVector(_v6, _v223.z), _v7);
    }
    static getInterpolatedAttribute(_v0, _v1, _v2, _v3, _v4, _v5) {
      return _v230.setScalar(0), _v231.setScalar(0), _v232.setScalar(0), _v230.fromBufferAttribute(_v0, _v1), _v231.fromBufferAttribute(_v0, _v2), _v232.fromBufferAttribute(_v0, _v3), _v5.setScalar(0), _v5.addScaledVector(_v230, _v4.x), _v5.addScaledVector(_v231, _v4.y), _v5.addScaledVector(_v232, _v4.z), _v5;
    }
    static isFrontFacing(_v0, _v1, _v2, _v3) {
      return _v220.subVectors(_v2, _v1), _v221.subVectors(_v0, _v1), 0 > _v220.cross(_v221).dot(_v3);
    }
    set(_v0, _v1, _v2) {
      return this.a.copy(_v0), this.b.copy(_v1), this.c.copy(_v2), this;
    }
    setFromPointsAndIndices(_v0, _v1, _v2, _v3) {
      return this.a.copy(_v0[_v1]), this.b.copy(_v0[_v2]), this.c.copy(_v0[_v3]), this;
    }
    setFromAttributeAndIndices(_v0, _v1, _v2, _v3) {
      return this.a.fromBufferAttribute(_v0, _v1), this.b.fromBufferAttribute(_v0, _v2), this.c.fromBufferAttribute(_v0, _v3), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(_v0) {
      return this.a.copy(_v0.a), this.b.copy(_v0.b), this.c.copy(_v0.c), this;
    }
    getArea() {
      return _v220.subVectors(this.c, this.b), _v221.subVectors(this.a, this.b), .5 * _v220.cross(_v221).length();
    }
    getMidpoint(_v0) {
      return _v0.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(_v0) {
      return _v233.getNormal(this.a, this.b, this.c, _v0);
    }
    getPlane(_v0) {
      return _v0.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(_v0, _v1) {
      return _v233.getBarycoord(_v0, this.a, this.b, this.c, _v1);
    }
    getInterpolation(_v0, _v1, _v2, _v3, _v4) {
      return _v233.getInterpolation(_v0, this.a, this.b, this.c, _v1, _v2, _v3, _v4);
    }
    containsPoint(_v0) {
      return _v233.containsPoint(_v0, this.a, this.b, this.c);
    }
    isFrontFacing(_v0) {
      return _v233.isFrontFacing(this.a, this.b, this.c, _v0);
    }
    intersectsBox(_v0) {
      return _v0.intersectsTriangle(this);
    }
    closestPointToPoint(_v0, _v1) {
      let _v2,
        _v3,
        _v4 = this.a,
        _v5 = this.b,
        _v6 = this.c;
      _v224.subVectors(_v5, _v4), _v225.subVectors(_v6, _v4), _v227.subVectors(_v0, _v4);
      let _v7 = _v224.dot(_v227),
        _v8 = _v225.dot(_v227);
      if (_v7 <= 0 && _v8 <= 0) return _v1.copy(_v4);
      _v228.subVectors(_v0, _v5);
      let _v9 = _v224.dot(_v228),
        _v10 = _v225.dot(_v228);
      if (_v9 >= 0 && _v10 <= _v9) return _v1.copy(_v5);
      let _v11 = _v7 * _v10 - _v9 * _v8;
      if (_v11 <= 0 && _v7 >= 0 && _v9 <= 0) return _v2 = _v7 / (_v7 - _v9), _v1.copy(_v4).addScaledVector(_v224, _v2);
      _v229.subVectors(_v0, _v6);
      let _v12 = _v224.dot(_v229),
        _v13 = _v225.dot(_v229);
      if (_v13 >= 0 && _v12 <= _v13) return _v1.copy(_v6);
      let _v14 = _v12 * _v8 - _v7 * _v13;
      if (_v14 <= 0 && _v8 >= 0 && _v13 <= 0) return _v3 = _v8 / (_v8 - _v13), _v1.copy(_v4).addScaledVector(_v225, _v3);
      let _v15 = _v9 * _v13 - _v12 * _v10;
      if (_v15 <= 0 && _v10 - _v9 >= 0 && _v12 - _v13 >= 0) return _v226.subVectors(_v6, _v5), _v3 = (_v10 - _v9) / (_v10 - _v9 + (_v12 - _v13)), _v1.copy(_v5).addScaledVector(_v226, _v3);
      let _v16 = 1 / (_v15 + _v14 + _v11);
      return _v2 = _v14 * _v16, _v3 = _v11 * _v16, _v1.copy(_v4).addScaledVector(_v224, _v2).addScaledVector(_v225, _v3);
    }
    equals(_v0) {
      return _v0.a.equals(this.a) && _v0.b.equals(this.b) && _v0.c.equals(this.c);
    }
  }
  let _v234 = {
      aliceblue: 0,
      antiquewhite: 0,
      aqua: 0,
      aquamarine: 0,
      azure: 0,
      beige: 0,
      bisque: 0,
      black: 0,
      blanchedalmond: 0,
      blue: 255,
      blueviolet: 0,
      brown: 0,
      burlywood: 0,
      cadetblue: 0,
      chartreuse: 0,
      chocolate: 0,
      coral: 0,
      cornflowerblue: 0,
      cornsilk: 0,
      crimson: 0,
      cyan: 0,
      darkblue: 139,
      darkcyan: 0,
      darkgoldenrod: 0,
      darkgray: 0,
      darkgreen: 0,
      darkgrey: 0,
      darkkhaki: 0,
      darkmagenta: 0,
      darkolivegreen: 0,
      darkorange: 0,
      darkorchid: 0,
      darkred: 0,
      darksalmon: 0,
      darkseagreen: 0,
      darkslateblue: 0,
      darkslategray: 0,
      darkslategrey: 0,
      darkturquoise: 0,
      darkviolet: 0,
      deeppink: 0,
      deepskyblue: 0,
      dimgray: 0,
      dimgrey: 0,
      dodgerblue: 0,
      firebrick: 0,
      floralwhite: 0,
      forestgreen: 0,
      fuchsia: 0,
      gainsboro: 0,
      ghostwhite: 0,
      gold: 0,
      goldenrod: 0,
      gray: 0,
      green: 0,
      greenyellow: 0,
      grey: 0,
      honeydew: 0,
      hotpink: 0,
      indianred: 0,
      indigo: 0,
      ivory: 0,
      khaki: 0,
      lavender: 0,
      lavenderblush: 0,
      lawngreen: 0,
      lemonchiffon: 0,
      lightblue: 0,
      lightcoral: 0,
      lightcyan: 0,
      lightgoldenrodyellow: 0,
      lightgray: 0,
      lightgreen: 0,
      lightgrey: 0,
      lightpink: 0,
      lightsalmon: 0,
      lightseagreen: 0,
      lightskyblue: 0,
      lightslategray: 0,
      lightslategrey: 0,
      lightsteelblue: 0,
      lightyellow: 0,
      lime: 0,
      limegreen: 0,
      linen: 0,
      magenta: 0,
      maroon: 0,
      mediumaquamarine: 0,
      mediumblue: 205,
      mediumorchid: 0,
      mediumpurple: 0,
      mediumseagreen: 0,
      mediumslateblue: 0,
      mediumspringgreen: 0,
      mediumturquoise: 0,
      mediumvioletred: 0,
      midnightblue: 0,
      mintcream: 0,
      mistyrose: 0,
      moccasin: 0,
      navajowhite: 0,
      navy: 128,
      oldlace: 0,
      olive: 0,
      olivedrab: 0,
      orange: 0,
      orangered: 0,
      orchid: 0,
      palegoldenrod: 0,
      palegreen: 0,
      paleturquoise: 0,
      palevioletred: 0,
      papayawhip: 0,
      peachpuff: 0,
      peru: 0,
      pink: 0,
      plum: 0,
      powderblue: 0,
      purple: 0,
      rebeccapurple: 0,
      red: 0,
      rosybrown: 0,
      royalblue: 0,
      saddlebrown: 0,
      salmon: 0,
      sandybrown: 0,
      seagreen: 0,
      seashell: 0,
      sienna: 0,
      silver: 0,
      skyblue: 0,
      slateblue: 0,
      slategray: 0,
      slategrey: 0,
      snow: 0,
      springgreen: 0,
      steelblue: 0,
      tan: 0,
      teal: 0,
      thistle: 0,
      tomato: 0,
      turquoise: 0,
      violet: 0,
      wheat: 0,
      white: 0,
      whitesmoke: 0,
      yellow: 0,
      yellowgreen: 0
    },
    _v235 = {
      h: 0,
      s: 0,
      l: 0
    },
    _v236 = {
      h: 0,
      s: 0,
      l: 0
    };
  function _v237(_v0, _v1, _v2) {
    return (_v2 < 0 && (_v2 += 1), _v2 > 1 && (_v2 -= 1), _v2 < 1 / 6) ? _v0 + (_v1 - _v0) * 6 * _v2 : _v2 < .5 ? _v1 : _v2 < 2 / 3 ? _v0 + (_v1 - _v0) * 6 * (2 / 3 - _v2) : _v0;
  }
  class _v238 {
    constructor(_v0, _v1, _v2) {
      return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(_v0, _v1, _v2);
    }
    set(_v0, _v1, _v2) {
      return void 0 === _v1 && void 0 === _v2 ? _v0 && _v0.isColor ? this.copy(_v0) : "number" == typeof _v0 ? this.setHex(_v0) : "string" == typeof _v0 && this.setStyle(_v0) : this.setRGB(_v0, _v1, _v2), this;
    }
    setScalar(_v0) {
      return this.r = _v0, this.g = _v0, this.b = _v0, this;
    }
    setHex(_v0, _v1 = _v126) {
      return _v0 = Math.floor(_v0), this.r = (_v0 >> 16 & 255) / 255, this.g = (_v0 >> 8 & 255) / 255, this.b = (255 & _v0) / 255, _v152.colorSpaceToWorking(this, _v1), this;
    }
    setRGB(_v0, _v1, _v2, _v3 = _v152.workingColorSpace) {
      return this.r = _v0, this.g = _v1, this.b = _v2, _v152.colorSpaceToWorking(this, _v3), this;
    }
    setHSL(_v0, _v1, _v2, _v3 = _v152.workingColorSpace) {
      if (_v0 = (_v0 % 1 + 1) % 1, _v1 = _v136(_v1, 0, 1), _v2 = _v136(_v2, 0, 1), 0 === _v1) this.r = this.g = this.b = _v2;else {
        let _v0 = _v2 <= .5 ? _v2 * (1 + _v1) : _v2 + _v1 - _v2 * _v1,
          _v1 = 2 * _v2 - _v0;
        this.r = _v237(_v1, _v0, _v0 + 1 / 3), this.g = _v237(_v1, _v0, _v0), this.b = _v237(_v1, _v0, _v0 - 1 / 3);
      }
      return _v152.colorSpaceToWorking(this, _v3), this;
    }
    setStyle(_v0, _v1 = _v126) {
      let _v2;
      function _v3(_v0) {
        void 0 !== _v0 && 1 > parseFloat(_v0) && console.warn("THREE.Color: Alpha component of " + _v0 + " will be ignored.");
      }
      if (_v2 = /^(\w+)\(([^\)]*)\)/.exec(_v0)) {
        let _v0,
          _v1 = _v2[1],
          _v2 = _v2[2];
        switch (_v1) {
          case "rgb":
          case "rgba":
            if (_v0 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_v2)) return _v3(_v0[4]), this.setRGB(Math.min(255, parseInt(_v0[1], 10)) / 255, Math.min(255, parseInt(_v0[2], 10)) / 255, Math.min(255, parseInt(_v0[3], 10)) / 255, _v1);
            if (_v0 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_v2)) return _v3(_v0[4]), this.setRGB(Math.min(100, parseInt(_v0[1], 10)) / 100, Math.min(100, parseInt(_v0[2], 10)) / 100, Math.min(100, parseInt(_v0[3], 10)) / 100, _v1);
            break;
          case "hsl":
          case "hsla":
            if (_v0 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_v2)) return _v3(_v0[4]), this.setHSL(parseFloat(_v0[1]) / 360, parseFloat(_v0[2]) / 100, parseFloat(_v0[3]) / 100, _v1);
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + _v0);
        }
      } else if (_v2 = /^\#([A-Fa-f\d]+)$/.exec(_v0)) {
        let _v0 = _v2[1],
          _v1 = _v0.length;
        if (3 === _v1) return this.setRGB(parseInt(_v0.charAt(0), 16) / 15, parseInt(_v0.charAt(1), 16) / 15, parseInt(_v0.charAt(2), 16) / 15, _v1);
        if (6 === _v1) return this.setHex(parseInt(_v0, 16), _v1);
        console.warn("THREE.Color: Invalid hex color " + _v0);
      } else if (_v0 && _v0.length > 0) return this.setColorName(_v0, _v1);
      return this;
    }
    setColorName(_v0, _v1 = _v126) {
      let _v2 = _v234[_v0.toLowerCase()];
      return void 0 !== _v2 ? this.setHex(_v2, _v1) : console.warn("THREE.Color: Unknown color " + _v0), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(_v0) {
      return this.r = _v0.r, this.g = _v0.g, this.b = _v0.b, this;
    }
    copySRGBToLinear(_v0) {
      return this.r = _v153(_v0.r), this.g = _v153(_v0.g), this.b = _v153(_v0.b), this;
    }
    copyLinearToSRGB(_v0) {
      return this.r = _v154(_v0.r), this.g = _v154(_v0.g), this.b = _v154(_v0.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(_v0 = _v126) {
      return _v152.workingToColorSpace(_v239.copy(this), _v0), 0 * Math.round(_v136(255 * _v239.r, 0, 255)) + 256 * Math.round(_v136(255 * _v239.g, 0, 255)) + Math.round(_v136(255 * _v239.b, 0, 255));
    }
    getHexString(_v0 = _v126) {
      return ("000000" + this.getHex(_v0).toString(16)).slice(-6);
    }
    getHSL(_v0, _v1 = _v152.workingColorSpace) {
      let _v2, _v3;
      _v152.workingToColorSpace(_v239.copy(this), _v1);
      let _v4 = _v239.r,
        _v5 = _v239.g,
        _v6 = _v239.b,
        _v7 = Math.max(_v4, _v5, _v6),
        _v8 = Math.min(_v4, _v5, _v6),
        _v9 = (_v8 + _v7) / 2;
      if (_v8 === _v7) _v2 = 0, _v3 = 0;else {
        let _v0 = _v7 - _v8;
        switch (_v3 = _v9 <= .5 ? _v0 / (_v7 + _v8) : _v0 / (2 - _v7 - _v8), _v7) {
          case _v4:
            _v2 = (_v5 - _v6) / _v0 + 6 * (_v5 < _v6);
            break;
          case _v5:
            _v2 = (_v6 - _v4) / _v0 + 2;
            break;
          case _v6:
            _v2 = (_v4 - _v5) / _v0 + 4;
        }
        _v2 /= 6;
      }
      return _v0.h = _v2, _v0.s = _v3, _v0.l = _v9, _v0;
    }
    getRGB(_v0, _v1 = _v152.workingColorSpace) {
      return _v152.workingToColorSpace(_v239.copy(this), _v1), _v0.r = _v239.r, _v0.g = _v239.g, _v0.b = _v239.b, _v0;
    }
    getStyle(_v0 = _v126) {
      _v152.workingToColorSpace(_v239.copy(this), _v0);
      let _v1 = _v239.r,
        _v2 = _v239.g,
        _v3 = _v239.b;
      return _v0 !== _v126 ? `color(${_v0} ${_v1.toFixed(3)} ${_v2.toFixed(3)} ${_v3.toFixed(3)})` : `rgb(${Math.round(255 * _v1)},${Math.round(255 * _v2)},${Math.round(255 * _v3)})`;
    }
    offsetHSL(_v0, _v1, _v2) {
      return this.getHSL(_v235), this.setHSL(_v235.h + _v0, _v235.s + _v1, _v235.l + _v2);
    }
    add(_v0) {
      return this.r += _v0.r, this.g += _v0.g, this.b += _v0.b, this;
    }
    addColors(_v0, _v1) {
      return this.r = _v0.r + _v1.r, this.g = _v0.g + _v1.g, this.b = _v0.b + _v1.b, this;
    }
    addScalar(_v0) {
      return this.r += _v0, this.g += _v0, this.b += _v0, this;
    }
    sub(_v0) {
      return this.r = Math.max(0, this.r - _v0.r), this.g = Math.max(0, this.g - _v0.g), this.b = Math.max(0, this.b - _v0.b), this;
    }
    multiply(_v0) {
      return this.r *= _v0.r, this.g *= _v0.g, this.b *= _v0.b, this;
    }
    multiplyScalar(_v0) {
      return this.r *= _v0, this.g *= _v0, this.b *= _v0, this;
    }
    lerp(_v0, _v1) {
      return this.r += (_v0.r - this.r) * _v1, this.g += (_v0.g - this.g) * _v1, this.b += (_v0.b - this.b) * _v1, this;
    }
    lerpColors(_v0, _v1, _v2) {
      return this.r = _v0.r + (_v1.r - _v0.r) * _v2, this.g = _v0.g + (_v1.g - _v0.g) * _v2, this.b = _v0.b + (_v1.b - _v0.b) * _v2, this;
    }
    lerpHSL(_v0, _v1) {
      var _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10;
      this.getHSL(_v235), _v0.getHSL(_v236);
      let _v11 = (_v2 = _v235.h, _v3 = _v236.h, (1 - (_v4 = _v1)) * _v2 + _v4 * _v3),
        _v12 = (_v5 = _v235.s, _v6 = _v236.s, (1 - (_v7 = _v1)) * _v5 + _v7 * _v6),
        _v13 = (_v8 = _v235.l, _v9 = _v236.l, (1 - (_v10 = _v1)) * _v8 + _v10 * _v9);
      return this.setHSL(_v11, _v12, _v13), this;
    }
    setFromVector3(_v0) {
      return this.r = _v0.x, this.g = _v0.y, this.b = _v0.z, this;
    }
    applyMatrix3(_v0) {
      let _v1 = this.r,
        _v2 = this.g,
        _v3 = this.b,
        _v4 = _v0.elements;
      return this.r = _v4[0] * _v1 + _v4[3] * _v2 + _v4[6] * _v3, this.g = _v4[1] * _v1 + _v4[4] * _v2 + _v4[7] * _v3, this.b = _v4[2] * _v1 + _v4[5] * _v2 + _v4[8] * _v3, this;
    }
    equals(_v0) {
      return _v0.r === this.r && _v0.g === this.g && _v0.b === this.b;
    }
    fromArray(_v0, _v1 = 0) {
      return this.r = _v0[_v1], this.g = _v0[_v1 + 1], this.b = _v0[_v1 + 2], this;
    }
    toArray(_v0 = [], _v1 = 0) {
      return _v0[_v1] = this.r, _v0[_v1 + 1] = this.g, _v0[_v1 + 2] = this.b, _v0;
    }
    fromBufferAttribute(_v0, _v1) {
      return this.r = _v0.getX(_v1), this.g = _v0.getY(_v1), this.b = _v0.getZ(_v1), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  let _v239 = new _v238();
  _v238.NAMES = _v234;
  let _v240 = 0;
  class _v241 extends _v131 {
    constructor() {
      super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
        value: _v240++
      }), this.uuid = _v135(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new _v238(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 0, this.stencilZFail = 0, this.stencilZPass = 0, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(_v0) {
      this._alphaTest > 0 != _v0 > 0 && this.version++, this._alphaTest = _v0;
    }
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(_v0) {
      if (void 0 !== _v0) for (let _v0 in _v0) {
        let _v0 = _v0[_v0];
        if (void 0 === _v0) {
          console.warn(`THREE.Material: parameter '${_v0}' has value of undefined.`);
          continue;
        }
        let _v1 = this[_v0];
        if (void 0 === _v1) {
          console.warn(`THREE.Material: '${_v0}' is not a property of THREE.${this.type}.`);
          continue;
        }
        _v1 && _v1.isColor ? _v1.set(_v0) : _v1 && _v1.isVector3 && _v0 && _v0.isVector3 ? _v1.copy(_v0) : this[_v0] = _v0;
      }
    }
    toJSON(_v0) {
      let _v1 = void 0 === _v0 || "string" == typeof _v0;
      _v1 && (_v0 = {
        textures: {},
        images: {}
      });
      let _v2 = {
        metadata: {
          version: 4.7,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      function _v3(_v0) {
        let _v1 = [];
        for (let _v0 in _v0) {
          let _v0 = _v0[_v0];
          delete _v0.metadata, _v1.push(_v0);
        }
        return _v1;
      }
      if (_v2.uuid = this.uuid, _v2.type = this.type, "" !== this.name && (_v2.name = this.name), this.color && this.color.isColor && (_v2.color = this.color.getHex()), void 0 !== this.roughness && (_v2.roughness = this.roughness), void 0 !== this.metalness && (_v2.metalness = this.metalness), void 0 !== this.sheen && (_v2.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (_v2.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (_v2.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (_v2.emissive = this.emissive.getHex()), void 0 !== this.emissiveIntensity && 1 !== this.emissiveIntensity && (_v2.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (_v2.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (_v2.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (_v2.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (_v2.shininess = this.shininess), void 0 !== this.clearcoat && (_v2.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (_v2.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (_v2.clearcoatMap = this.clearcoatMap.toJSON(_v0).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (_v2.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(_v0).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (_v2.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(_v0).uuid, _v2.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (_v2.sheenColorMap = this.sheenColorMap.toJSON(_v0).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (_v2.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(_v0).uuid), void 0 !== this.dispersion && (_v2.dispersion = this.dispersion), void 0 !== this.iridescence && (_v2.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (_v2.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (_v2.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (_v2.iridescenceMap = this.iridescenceMap.toJSON(_v0).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (_v2.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(_v0).uuid), void 0 !== this.anisotropy && (_v2.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (_v2.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (_v2.anisotropyMap = this.anisotropyMap.toJSON(_v0).uuid), this.map && this.map.isTexture && (_v2.map = this.map.toJSON(_v0).uuid), this.matcap && this.matcap.isTexture && (_v2.matcap = this.matcap.toJSON(_v0).uuid), this.alphaMap && this.alphaMap.isTexture && (_v2.alphaMap = this.alphaMap.toJSON(_v0).uuid), this.lightMap && this.lightMap.isTexture && (_v2.lightMap = this.lightMap.toJSON(_v0).uuid, _v2.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (_v2.aoMap = this.aoMap.toJSON(_v0).uuid, _v2.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (_v2.bumpMap = this.bumpMap.toJSON(_v0).uuid, _v2.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (_v2.normalMap = this.normalMap.toJSON(_v0).uuid, _v2.normalMapType = this.normalMapType, _v2.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (_v2.displacementMap = this.displacementMap.toJSON(_v0).uuid, _v2.displacementScale = this.displacementScale, _v2.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (_v2.roughnessMap = this.roughnessMap.toJSON(_v0).uuid), this.metalnessMap && this.metalnessMap.isTexture && (_v2.metalnessMap = this.metalnessMap.toJSON(_v0).uuid), this.emissiveMap && this.emissiveMap.isTexture && (_v2.emissiveMap = this.emissiveMap.toJSON(_v0).uuid), this.specularMap && this.specularMap.isTexture && (_v2.specularMap = this.specularMap.toJSON(_v0).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (_v2.specularIntensityMap = this.specularIntensityMap.toJSON(_v0).uuid), this.specularColorMap && this.specularColorMap.isTexture && (_v2.specularColorMap = this.specularColorMap.toJSON(_v0).uuid), this.envMap && this.envMap.isTexture && (_v2.envMap = this.envMap.toJSON(_v0).uuid, void 0 !== this.combine && (_v2.combine = this.combine)), void 0 !== this.envMapRotation && (_v2.envMapRotation = this.envMapRotation.toArray()), void 0 !== this.envMapIntensity && (_v2.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (_v2.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (_v2.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (_v2.gradientMap = this.gradientMap.toJSON(_v0).uuid), void 0 !== this.transmission && (_v2.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (_v2.transmissionMap = this.transmissionMap.toJSON(_v0).uuid), void 0 !== this.thickness && (_v2.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (_v2.thicknessMap = this.thicknessMap.toJSON(_v0).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (_v2.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (_v2.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (_v2.size = this.size), null !== this.shadowSide && (_v2.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (_v2.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (_v2.blending = this.blending), 0 !== this.side && (_v2.side = this.side), !0 === this.vertexColors && (_v2.vertexColors = !0), this.opacity < 1 && (_v2.opacity = this.opacity), !0 === this.transparent && (_v2.transparent = !0), 204 !== this.blendSrc && (_v2.blendSrc = this.blendSrc), 205 !== this.blendDst && (_v2.blendDst = this.blendDst), 100 !== this.blendEquation && (_v2.blendEquation = this.blendEquation), null !== this.blendSrcAlpha && (_v2.blendSrcAlpha = this.blendSrcAlpha), null !== this.blendDstAlpha && (_v2.blendDstAlpha = this.blendDstAlpha), null !== this.blendEquationAlpha && (_v2.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (_v2.blendColor = this.blendColor.getHex()), 0 !== this.blendAlpha && (_v2.blendAlpha = this.blendAlpha), 3 !== this.depthFunc && (_v2.depthFunc = this.depthFunc), !1 === this.depthTest && (_v2.depthTest = this.depthTest), !1 === this.depthWrite && (_v2.depthWrite = this.depthWrite), !1 === this.colorWrite && (_v2.colorWrite = this.colorWrite), 255 !== this.stencilWriteMask && (_v2.stencilWriteMask = this.stencilWriteMask), 519 !== this.stencilFunc && (_v2.stencilFunc = this.stencilFunc), 0 !== this.stencilRef && (_v2.stencilRef = this.stencilRef), 255 !== this.stencilFuncMask && (_v2.stencilFuncMask = this.stencilFuncMask), 0 !== this.stencilFail && (_v2.stencilFail = this.stencilFail), 0 !== this.stencilZFail && (_v2.stencilZFail = this.stencilZFail), 0 !== this.stencilZPass && (_v2.stencilZPass = this.stencilZPass), !0 === this.stencilWrite && (_v2.stencilWrite = this.stencilWrite), void 0 !== this.rotation && 0 !== this.rotation && (_v2.rotation = this.rotation), !0 === this.polygonOffset && (_v2.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (_v2.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (_v2.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (_v2.linewidth = this.linewidth), void 0 !== this.dashSize && (_v2.dashSize = this.dashSize), void 0 !== this.gapSize && (_v2.gapSize = this.gapSize), void 0 !== this.scale && (_v2.scale = this.scale), !0 === this.dithering && (_v2.dithering = !0), this.alphaTest > 0 && (_v2.alphaTest = this.alphaTest), !0 === this.alphaHash && (_v2.alphaHash = !0), !0 === this.alphaToCoverage && (_v2.alphaToCoverage = !0), !0 === this.premultipliedAlpha && (_v2.premultipliedAlpha = !0), !0 === this.forceSinglePass && (_v2.forceSinglePass = !0), !0 === this.wireframe && (_v2.wireframe = !0), this.wireframeLinewidth > 1 && (_v2.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (_v2.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (_v2.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (_v2.flatShading = !0), !1 === this.visible && (_v2.visible = !1), !1 === this.toneMapped && (_v2.toneMapped = !1), !1 === this.fog && (_v2.fog = !1), Object.keys(this.userData).length > 0 && (_v2.userData = this.userData), _v1) {
        let _v0 = _v3(_v0.textures),
          _v1 = _v3(_v0.images);
        _v0.length > 0 && (_v2.textures = _v0), _v1.length > 0 && (_v2.images = _v1);
      }
      return _v2;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(_v0) {
      this.name = _v0.name, this.blending = _v0.blending, this.side = _v0.side, this.vertexColors = _v0.vertexColors, this.opacity = _v0.opacity, this.transparent = _v0.transparent, this.blendSrc = _v0.blendSrc, this.blendDst = _v0.blendDst, this.blendEquation = _v0.blendEquation, this.blendSrcAlpha = _v0.blendSrcAlpha, this.blendDstAlpha = _v0.blendDstAlpha, this.blendEquationAlpha = _v0.blendEquationAlpha, this.blendColor.copy(_v0.blendColor), this.blendAlpha = _v0.blendAlpha, this.depthFunc = _v0.depthFunc, this.depthTest = _v0.depthTest, this.depthWrite = _v0.depthWrite, this.stencilWriteMask = _v0.stencilWriteMask, this.stencilFunc = _v0.stencilFunc, this.stencilRef = _v0.stencilRef, this.stencilFuncMask = _v0.stencilFuncMask, this.stencilFail = _v0.stencilFail, this.stencilZFail = _v0.stencilZFail, this.stencilZPass = _v0.stencilZPass, this.stencilWrite = _v0.stencilWrite;
      let _v1 = _v0.clippingPlanes,
        _v2 = null;
      if (null !== _v1) {
        let _v0 = _v1.length;
        _v2 = Array(_v0);
        for (let _v0 = 0; _v0 !== _v0; ++_v0) _v2[_v0] = _v1[_v0].clone();
      }
      return this.clippingPlanes = _v2, this.clipIntersection = _v0.clipIntersection, this.clipShadows = _v0.clipShadows, this.shadowSide = _v0.shadowSide, this.colorWrite = _v0.colorWrite, this.precision = _v0.precision, this.polygonOffset = _v0.polygonOffset, this.polygonOffsetFactor = _v0.polygonOffsetFactor, this.polygonOffsetUnits = _v0.polygonOffsetUnits, this.dithering = _v0.dithering, this.alphaTest = _v0.alphaTest, this.alphaHash = _v0.alphaHash, this.alphaToCoverage = _v0.alphaToCoverage, this.premultipliedAlpha = _v0.premultipliedAlpha, this.forceSinglePass = _v0.forceSinglePass, this.visible = _v0.visible, this.toneMapped = _v0.toneMapped, this.userData = JSON.parse(JSON.stringify(_v0.userData)), this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
    set needsUpdate(_v0) {
      !0 === _v0 && this.version++;
    }
  }
  class _v242 extends _v241 {
    constructor(_v0) {
      super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new _v238(0), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new _v202(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(_v0);
    }
    copy(_v0) {
      return super.copy(_v0), this.color.copy(_v0.color), this.map = _v0.map, this.lightMap = _v0.lightMap, this.lightMapIntensity = _v0.lightMapIntensity, this.aoMap = _v0.aoMap, this.aoMapIntensity = _v0.aoMapIntensity, this.specularMap = _v0.specularMap, this.alphaMap = _v0.alphaMap, this.envMap = _v0.envMap, this.envMapRotation.copy(_v0.envMapRotation), this.combine = _v0.combine, this.reflectivity = _v0.reflectivity, this.refractionRatio = _v0.refractionRatio, this.wireframe = _v0.wireframe, this.wireframeLinewidth = _v0.wireframeLinewidth, this.wireframeLinecap = _v0.wireframeLinecap, this.wireframeLinejoin = _v0.wireframeLinejoin, this.fog = _v0.fog, this;
    }
  }
  let _v243 = new _v141(),
    _v244 = new _v139(),
    _v245 = 0;
  class _v246 {
    constructor(_v0, _v1, _v2 = !1) {
      if (Array.isArray(_v0)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = !0, Object.defineProperty(this, "id", {
        value: _v245++
      }), this.name = "", this.array = _v0, this.itemSize = _v1, this.count = void 0 !== _v0 ? _v0.length / _v1 : 0, this.normalized = _v2, this.usage = 0, this.updateRanges = [], this.gpuType = 0, this.version = 0;
    }
    onUploadCallback() {}
    set needsUpdate(_v0) {
      !0 === _v0 && this.version++;
    }
    setUsage(_v0) {
      return this.usage = _v0, this;
    }
    addUpdateRange(_v0, _v1) {
      this.updateRanges.push({
        start: _v0,
        count: _v1
      });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(_v0) {
      return this.name = _v0.name, this.array = new _v0.array.constructor(_v0.array), this.itemSize = _v0.itemSize, this.count = _v0.count, this.normalized = _v0.normalized, this.usage = _v0.usage, this.gpuType = _v0.gpuType, this;
    }
    copyAt(_v0, _v1, _v2) {
      _v0 *= this.itemSize, _v2 *= _v1.itemSize;
      for (let _v0 = 0, _v1 = this.itemSize; _v0 < _v1; _v0++) this.array[_v0 + _v0] = _v1.array[_v2 + _v0];
      return this;
    }
    copyArray(_v0) {
      return this.array.set(_v0), this;
    }
    applyMatrix3(_v0) {
      if (2 === this.itemSize) for (let _v0 = 0, _v1 = this.count; _v0 < _v1; _v0++) _v244.fromBufferAttribute(this, _v0), _v244.applyMatrix3(_v0), this.setXY(_v0, _v244.x, _v244.y);else if (3 === this.itemSize) for (let _v0 = 0, _v1 = this.count; _v0 < _v1; _v0++) _v243.fromBufferAttribute(this, _v0), _v243.applyMatrix3(_v0), this.setXYZ(_v0, _v243.x, _v243.y, _v243.z);
      return this;
    }
    applyMatrix4(_v0) {
      for (let _v0 = 0, _v1 = this.count; _v0 < _v1; _v0++) _v243.fromBufferAttribute(this, _v0), _v243.applyMatrix4(_v0), this.setXYZ(_v0, _v243.x, _v243.y, _v243.z);
      return this;
    }
    applyNormalMatrix(_v0) {
      for (let _v0 = 0, _v1 = this.count; _v0 < _v1; _v0++) _v243.fromBufferAttribute(this, _v0), _v243.applyNormalMatrix(_v0), this.setXYZ(_v0, _v243.x, _v243.y, _v243.z);
      return this;
    }
    transformDirection(_v0) {
      for (let _v0 = 0, _v1 = this.count; _v0 < _v1; _v0++) _v243.fromBufferAttribute(this, _v0), _v243.transformDirection(_v0), this.setXYZ(_v0, _v243.x, _v243.y, _v243.z);
      return this;
    }
    set(_v0, _v1 = 0) {
      return this.array.set(_v0, _v1), this;
    }
    getComponent(_v0, _v1) {
      let _v2 = this.array[_v0 * this.itemSize + _v1];
      return this.normalized && (_v2 = _v137(_v2, this.array)), _v2;
    }
    setComponent(_v0, _v1, _v2) {
      return this.normalized && (_v2 = _v138(_v2, this.array)), this.array[_v0 * this.itemSize + _v1] = _v2, this;
    }
    getX(_v0) {
      let _v1 = this.array[_v0 * this.itemSize];
      return this.normalized && (_v1 = _v137(_v1, this.array)), _v1;
    }
    setX(_v0, _v1) {
      return this.normalized && (_v1 = _v138(_v1, this.array)), this.array[_v0 * this.itemSize] = _v1, this;
    }
    getY(_v0) {
      let _v1 = this.array[_v0 * this.itemSize + 1];
      return this.normalized && (_v1 = _v137(_v1, this.array)), _v1;
    }
    setY(_v0, _v1) {
      return this.normalized && (_v1 = _v138(_v1, this.array)), this.array[_v0 * this.itemSize + 1] = _v1, this;
    }
    getZ(_v0) {
      let _v1 = this.array[_v0 * this.itemSize + 2];
      return this.normalized && (_v1 = _v137(_v1, this.array)), _v1;
    }
    setZ(_v0, _v1) {
      return this.normalized && (_v1 = _v138(_v1, this.array)), this.array[_v0 * this.itemSize + 2] = _v1, this;
    }
    getW(_v0) {
      let _v1 = this.array[_v0 * this.itemSize + 3];
      return this.normalized && (_v1 = _v137(_v1, this.array)), _v1;
    }
    setW(_v0, _v1) {
      return this.normalized && (_v1 = _v138(_v1, this.array)), this.array[_v0 * this.itemSize + 3] = _v1, this;
    }
    setXY(_v0, _v1, _v2) {
      return _v0 *= this.itemSize, this.normalized && (_v1 = _v138(_v1, this.array), _v2 = _v138(_v2, this.array)), this.array[_v0 + 0] = _v1, this.array[_v0 + 1] = _v2, this;
    }
    setXYZ(_v0, _v1, _v2, _v3) {
      return _v0 *= this.itemSize, this.normalized && (_v1 = _v138(_v1, this.array), _v2 = _v138(_v2, this.array), _v3 = _v138(_v3, this.array)), this.array[_v0 + 0] = _v1, this.array[_v0 + 1] = _v2, this.array[_v0 + 2] = _v3, this;
    }
    setXYZW(_v0, _v1, _v2, _v3, _v4) {
      return _v0 *= this.itemSize, this.normalized && (_v1 = _v138(_v1, this.array), _v2 = _v138(_v2, this.array), _v3 = _v138(_v3, this.array), _v4 = _v138(_v4, this.array)), this.array[_v0 + 0] = _v1, this.array[_v0 + 1] = _v2, this.array[_v0 + 2] = _v3, this.array[_v0 + 3] = _v4, this;
    }
    onUpload(_v0) {
      return this.onUploadCallback = _v0, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      let _v0 = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized
      };
      return "" !== this.name && (_v0.name = this.name), 0 !== this.usage && (_v0.usage = this.usage), _v0;
    }
  }
  class _v247 extends _v246 {
    constructor(_v0, _v1, _v2) {
      super(new Uint16Array(_v0), _v1, _v2);
    }
  }
  class _v248 extends _v246 {
    constructor(_v0, _v1, _v2) {
      super(new Uint32Array(_v0), _v1, _v2);
    }
  }
  class _v249 extends _v246 {
    constructor(_v0, _v1, _v2) {
      super(new Float32Array(_v0), _v1, _v2);
    }
  }
  let _v250 = 0,
    _v251 = new _v192(),
    _v252 = new _v219(),
    _v253 = new _v141(),
    _v254 = new _v166(),
    _v255 = new _v166(),
    _v256 = new _v141();
  class _v257 extends _v131 {
    constructor() {
      super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
        value: _v250++
      }), this.uuid = _v135(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
        start: 0,
        count: 1 / 0
      }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(_v0) {
      return Array.isArray(_v0) ? this.index = new (_v146(_v0) ? _v248 : _v247)(_v0, 1) : this.index = _v0, this;
    }
    setIndirect(_v0) {
      return this.indirect = _v0, this;
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(_v0) {
      return this.attributes[_v0];
    }
    setAttribute(_v0, _v1) {
      return this.attributes[_v0] = _v1, this;
    }
    deleteAttribute(_v0) {
      return delete this.attributes[_v0], this;
    }
    hasAttribute(_v0) {
      return void 0 !== this.attributes[_v0];
    }
    addGroup(_v0, _v1, _v2 = 0) {
      this.groups.push({
        start: _v0,
        count: _v1,
        materialIndex: _v2
      });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(_v0, _v1) {
      this.drawRange.start = _v0, this.drawRange.count = _v1;
    }
    applyMatrix4(_v0) {
      let _v1 = this.attributes.position;
      void 0 !== _v1 && (_v1.applyMatrix4(_v0), _v1.needsUpdate = !0);
      let _v2 = this.attributes.normal;
      if (void 0 !== _v2) {
        let _v0 = new _v144().getNormalMatrix(_v0);
        _v2.applyNormalMatrix(_v0), _v2.needsUpdate = !0;
      }
      let _v3 = this.attributes.tangent;
      return void 0 !== _v3 && (_v3.transformDirection(_v0), _v3.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }
    applyQuaternion(_v0) {
      return _v251.makeRotationFromQuaternion(_v0), this.applyMatrix4(_v251), this;
    }
    rotateX(_v0) {
      return _v251.makeRotationX(_v0), this.applyMatrix4(_v251), this;
    }
    rotateY(_v0) {
      return _v251.makeRotationY(_v0), this.applyMatrix4(_v251), this;
    }
    rotateZ(_v0) {
      return _v251.makeRotationZ(_v0), this.applyMatrix4(_v251), this;
    }
    translate(_v0, _v1, _v2) {
      return _v251.makeTranslation(_v0, _v1, _v2), this.applyMatrix4(_v251), this;
    }
    scale(_v0, _v1, _v2) {
      return _v251.makeScale(_v0, _v1, _v2), this.applyMatrix4(_v251), this;
    }
    lookAt(_v0) {
      return _v252.lookAt(_v0), _v252.updateMatrix(), this.applyMatrix4(_v252.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(_v253).negate(), this.translate(_v253.x, _v253.y, _v253.z), this;
    }
    setFromPoints(_v0) {
      let _v1 = this.getAttribute("position");
      if (void 0 === _v1) {
        let _v0 = [];
        for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
          let _v0 = _v0[_v0];
          _v0.push(_v0.x, _v0.y, _v0.z || 0);
        }
        this.setAttribute("position", new _v249(_v0, 3));
      } else {
        let _v0 = Math.min(_v0.length, _v1.count);
        for (let _v0 = 0; _v0 < _v0; _v0++) {
          let _v0 = _v0[_v0];
          _v1.setXYZ(_v0, _v0.x, _v0.y, _v0.z || 0);
        }
        _v0.length > _v1.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), _v1.needsUpdate = !0;
      }
      return this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new _v166());
      let _v0 = this.attributes.position,
        _v1 = this.morphAttributes.position;
      if (_v0 && _v0.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new _v141(-1 / 0, -1 / 0, -1 / 0), new _v141(Infinity, Infinity, Infinity));
        return;
      }
      if (void 0 !== _v0) {
        if (this.boundingBox.setFromBufferAttribute(_v0), _v1) for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) {
          let _v0 = _v1[_v0];
          _v254.setFromBufferAttribute(_v0), this.morphTargetsRelative ? (_v256.addVectors(this.boundingBox.min, _v254.min), this.boundingBox.expandByPoint(_v256), _v256.addVectors(this.boundingBox.max, _v254.max), this.boundingBox.expandByPoint(_v256)) : (this.boundingBox.expandByPoint(_v254.min), this.boundingBox.expandByPoint(_v254.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new _v184());
      let _v0 = this.attributes.position,
        _v1 = this.morphAttributes.position;
      if (_v0 && _v0.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new _v141(), 1 / 0);
        return;
      }
      if (_v0) {
        let _v0 = this.boundingSphere.center;
        if (_v254.setFromBufferAttribute(_v0), _v1) for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) {
          let _v0 = _v1[_v0];
          _v255.setFromBufferAttribute(_v0), this.morphTargetsRelative ? (_v256.addVectors(_v254.min, _v255.min), _v254.expandByPoint(_v256), _v256.addVectors(_v254.max, _v255.max), _v254.expandByPoint(_v256)) : (_v254.expandByPoint(_v255.min), _v254.expandByPoint(_v255.max));
        }
        _v254.getCenter(_v0);
        let _v1 = 0;
        for (let _v0 = 0, _v1 = _v0.count; _v0 < _v1; _v0++) _v256.fromBufferAttribute(_v0, _v0), _v1 = Math.max(_v1, _v0.distanceToSquared(_v256));
        if (_v1) for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) {
          let _v0 = _v1[_v0],
            _v1 = this.morphTargetsRelative;
          for (let _v0 = 0, _v1 = _v0.count; _v0 < _v1; _v0++) _v256.fromBufferAttribute(_v0, _v0), _v1 && (_v253.fromBufferAttribute(_v0, _v0), _v256.add(_v253)), _v1 = Math.max(_v1, _v0.distanceToSquared(_v256));
        }
        this.boundingSphere.radius = Math.sqrt(_v1), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      let _v0 = this.index,
        _v1 = this.attributes;
      if (null === _v0 || void 0 === _v1.position || void 0 === _v1.normal || void 0 === _v1.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      let _v2 = _v1.position,
        _v3 = _v1.normal,
        _v4 = _v1.uv;
      !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new _v246(new Float32Array(4 * _v2.count), 4));
      let _v5 = this.getAttribute("tangent"),
        _v6 = [],
        _v7 = [];
      for (let _v0 = 0; _v0 < _v2.count; _v0++) _v6[_v0] = new _v141(), _v7[_v0] = new _v141();
      let _v8 = new _v141(),
        _v9 = new _v141(),
        _v10 = new _v141(),
        _v11 = new _v139(),
        _v12 = new _v139(),
        _v13 = new _v139(),
        _v14 = new _v141(),
        _v15 = new _v141(),
        _v16 = this.groups;
      0 === _v16.length && (_v16 = [{
        start: 0,
        count: _v0.count
      }]);
      for (let _v0 = 0, _v1 = _v16.length; _v0 < _v1; ++_v0) {
        let _v0 = _v16[_v0],
          _v1 = _v0.start,
          _v2 = _v0.count;
        for (let _v0 = _v1, _v1 = _v1 + _v2; _v0 < _v1; _v0 += 3) !function (_v0, _v1, _v2) {
          _v8.fromBufferAttribute(_v2, _v0), _v9.fromBufferAttribute(_v2, _v1), _v10.fromBufferAttribute(_v2, _v2), _v11.fromBufferAttribute(_v4, _v0), _v12.fromBufferAttribute(_v4, _v1), _v13.fromBufferAttribute(_v4, _v2), _v9.sub(_v8), _v10.sub(_v8), _v12.sub(_v11), _v13.sub(_v11);
          let _v3 = 1 / (_v12.x * _v13.y - _v13.x * _v12.y);
          isFinite(_v3) && (_v14.copy(_v9).multiplyScalar(_v13.y).addScaledVector(_v10, -_v12.y).multiplyScalar(_v3), _v15.copy(_v10).multiplyScalar(_v12.x).addScaledVector(_v9, -_v13.x).multiplyScalar(_v3), _v6[_v0].add(_v14), _v6[_v1].add(_v14), _v6[_v2].add(_v14), _v7[_v0].add(_v15), _v7[_v1].add(_v15), _v7[_v2].add(_v15));
        }(_v0.getX(_v0 + 0), _v0.getX(_v0 + 1), _v0.getX(_v0 + 2));
      }
      let _v17 = new _v141(),
        _v18 = new _v141(),
        _v19 = new _v141(),
        _v20 = new _v141();
      function _v21(_v0) {
        _v19.fromBufferAttribute(_v3, _v0), _v20.copy(_v19);
        let _v1 = _v6[_v0];
        _v17.copy(_v1), _v17.sub(_v19.multiplyScalar(_v19.dot(_v1))).normalize(), _v18.crossVectors(_v20, _v1);
        let _v2 = _v18.dot(_v7[_v0]);
        _v5.setXYZW(_v0, _v17.x, _v17.y, _v17.z, _v2 < 0 ? -1 : 1);
      }
      for (let _v0 = 0, _v1 = _v16.length; _v0 < _v1; ++_v0) {
        let _v0 = _v16[_v0],
          _v1 = _v0.start,
          _v2 = _v0.count;
        for (let _v0 = _v1, _v1 = _v1 + _v2; _v0 < _v1; _v0 += 3) _v21(_v0.getX(_v0 + 0)), _v21(_v0.getX(_v0 + 1)), _v21(_v0.getX(_v0 + 2));
      }
    }
    computeVertexNormals() {
      let _v0 = this.index,
        _v1 = this.getAttribute("position");
      if (void 0 !== _v1) {
        let _v0 = this.getAttribute("normal");
        if (void 0 === _v0) _v0 = new _v246(new Float32Array(3 * _v1.count), 3), this.setAttribute("normal", _v0);else for (let _v0 = 0, _v1 = _v0.count; _v0 < _v1; _v0++) _v0.setXYZ(_v0, 0, 0, 0);
        let _v1 = new _v141(),
          _v2 = new _v141(),
          _v3 = new _v141(),
          _v4 = new _v141(),
          _v5 = new _v141(),
          _v6 = new _v141(),
          _v7 = new _v141(),
          _v8 = new _v141();
        if (_v0) for (let _v0 = 0, _v1 = _v0.count; _v0 < _v1; _v0 += 3) {
          let _v0 = _v0.getX(_v0 + 0),
            _v1 = _v0.getX(_v0 + 1),
            _v2 = _v0.getX(_v0 + 2);
          _v1.fromBufferAttribute(_v1, _v0), _v2.fromBufferAttribute(_v1, _v1), _v3.fromBufferAttribute(_v1, _v2), _v7.subVectors(_v3, _v2), _v8.subVectors(_v1, _v2), _v7.cross(_v8), _v4.fromBufferAttribute(_v0, _v0), _v5.fromBufferAttribute(_v0, _v1), _v6.fromBufferAttribute(_v0, _v2), _v4.add(_v7), _v5.add(_v7), _v6.add(_v7), _v0.setXYZ(_v0, _v4.x, _v4.y, _v4.z), _v0.setXYZ(_v1, _v5.x, _v5.y, _v5.z), _v0.setXYZ(_v2, _v6.x, _v6.y, _v6.z);
        } else for (let _v0 = 0, _v1 = _v1.count; _v0 < _v1; _v0 += 3) _v1.fromBufferAttribute(_v1, _v0 + 0), _v2.fromBufferAttribute(_v1, _v0 + 1), _v3.fromBufferAttribute(_v1, _v0 + 2), _v7.subVectors(_v3, _v2), _v8.subVectors(_v1, _v2), _v7.cross(_v8), _v0.setXYZ(_v0 + 0, _v7.x, _v7.y, _v7.z), _v0.setXYZ(_v0 + 1, _v7.x, _v7.y, _v7.z), _v0.setXYZ(_v0 + 2, _v7.x, _v7.y, _v7.z);
        this.normalizeNormals(), _v0.needsUpdate = !0;
      }
    }
    normalizeNormals() {
      let _v0 = this.attributes.normal;
      for (let _v0 = 0, _v1 = _v0.count; _v0 < _v1; _v0++) _v256.fromBufferAttribute(_v0, _v0), _v256.normalize(), _v0.setXYZ(_v0, _v256.x, _v256.y, _v256.z);
    }
    toNonIndexed() {
      function _v0(_v0, _v1) {
        let _v2 = _v0.array,
          _v3 = _v0.itemSize,
          _v4 = _v0.normalized,
          _v5 = new _v2.constructor(_v1.length * _v3),
          _v6 = 0,
          _v7 = 0;
        for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) {
          _v6 = _v0.isInterleavedBufferAttribute ? _v1[_v0] * _v0.data.stride + _v0.offset : _v1[_v0] * _v3;
          for (let _v0 = 0; _v0 < _v3; _v0++) _v5[_v7++] = _v2[_v6++];
        }
        return new _v246(_v5, _v3, _v4);
      }
      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      let _v1 = new _v257(),
        _v2 = this.index.array,
        _v3 = this.attributes;
      for (let _v0 in _v3) {
        let _v0 = _v0(_v3[_v0], _v2);
        _v1.setAttribute(_v0, _v0);
      }
      let _v4 = this.morphAttributes;
      for (let _v0 in _v4) {
        let _v0 = [],
          _v1 = _v4[_v0];
        for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) {
          let _v0 = _v0(_v1[_v0], _v2);
          _v0.push(_v0);
        }
        _v1.morphAttributes[_v0] = _v0;
      }
      _v1.morphTargetsRelative = this.morphTargetsRelative;
      let _v5 = this.groups;
      for (let _v0 = 0, _v1 = _v5.length; _v0 < _v1; _v0++) {
        let _v0 = _v5[_v0];
        _v1.addGroup(_v0.start, _v0.count, _v0.materialIndex);
      }
      return _v1;
    }
    toJSON() {
      let _v0 = {
        metadata: {
          version: 4.7,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      if (_v0.uuid = this.uuid, _v0.type = this.type, "" !== this.name && (_v0.name = this.name), Object.keys(this.userData).length > 0 && (_v0.userData = this.userData), void 0 !== this.parameters) {
        let _v0 = this.parameters;
        for (let _v0 in _v0) void 0 !== _v0[_v0] && (_v0[_v0] = _v0[_v0]);
        return _v0;
      }
      _v0.data = {
        attributes: {}
      };
      let _v1 = this.index;
      null !== _v1 && (_v0.data.index = {
        type: _v1.array.constructor.name,
        array: Array.prototype.slice.call(_v1.array)
      });
      let _v2 = this.attributes;
      for (let _v0 in _v2) {
        let _v0 = _v2[_v0];
        _v0.data.attributes[_v0] = _v0.toJSON(_v0.data);
      }
      let _v3 = {},
        _v4 = !1;
      for (let _v0 in this.morphAttributes) {
        let _v0 = this.morphAttributes[_v0],
          _v1 = [];
        for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
          let _v0 = _v0[_v0];
          _v1.push(_v0.toJSON(_v0.data));
        }
        _v1.length > 0 && (_v3[_v0] = _v1, _v4 = !0);
      }
      _v4 && (_v0.data.morphAttributes = _v3, _v0.data.morphTargetsRelative = this.morphTargetsRelative);
      let _v5 = this.groups;
      _v5.length > 0 && (_v0.data.groups = JSON.parse(JSON.stringify(_v5)));
      let _v6 = this.boundingSphere;
      return null !== _v6 && (_v0.data.boundingSphere = _v6.toJSON()), _v0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(_v0) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      let _v1 = {};
      this.name = _v0.name;
      let _v2 = _v0.index;
      null !== _v2 && this.setIndex(_v2.clone());
      let _v3 = _v0.attributes;
      for (let _v0 in _v3) {
        let _v0 = _v3[_v0];
        this.setAttribute(_v0, _v0.clone(_v1));
      }
      let _v4 = _v0.morphAttributes;
      for (let _v0 in _v4) {
        let _v0 = [],
          _v1 = _v4[_v0];
        for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) _v0.push(_v1[_v0].clone(_v1));
        this.morphAttributes[_v0] = _v0;
      }
      this.morphTargetsRelative = _v0.morphTargetsRelative;
      let _v5 = _v0.groups;
      for (let _v0 = 0, _v1 = _v5.length; _v0 < _v1; _v0++) {
        let _v0 = _v5[_v0];
        this.addGroup(_v0.start, _v0.count, _v0.materialIndex);
      }
      let _v6 = _v0.boundingBox;
      null !== _v6 && (this.boundingBox = _v6.clone());
      let _v7 = _v0.boundingSphere;
      return null !== _v7 && (this.boundingSphere = _v7.clone()), this.drawRange.start = _v0.drawRange.start, this.drawRange.count = _v0.drawRange.count, this.userData = _v0.userData, this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }
  let _v258 = new _v192(),
    _v259 = new class {
      constructor(_v0 = new _v141(), _v1 = new _v141(0, 0, -1)) {
        this.origin = _v0, this.direction = _v1;
      }
      set(_v0, _v1) {
        return this.origin.copy(_v0), this.direction.copy(_v1), this;
      }
      copy(_v0) {
        return this.origin.copy(_v0.origin), this.direction.copy(_v0.direction), this;
      }
      at(_v0, _v1) {
        return _v1.copy(this.origin).addScaledVector(this.direction, _v0);
      }
      lookAt(_v0) {
        return this.direction.copy(_v0).sub(this.origin).normalize(), this;
      }
      recast(_v0) {
        return this.origin.copy(this.at(_v0, _v185)), this;
      }
      closestPointToPoint(_v0, _v1) {
        _v1.subVectors(_v0, this.origin);
        let _v2 = _v1.dot(this.direction);
        return _v2 < 0 ? _v1.copy(this.origin) : _v1.copy(this.origin).addScaledVector(this.direction, _v2);
      }
      distanceToPoint(_v0) {
        return Math.sqrt(this.distanceSqToPoint(_v0));
      }
      distanceSqToPoint(_v0) {
        let _v1 = _v185.subVectors(_v0, this.origin).dot(this.direction);
        return _v1 < 0 ? this.origin.distanceToSquared(_v0) : (_v185.copy(this.origin).addScaledVector(this.direction, _v1), _v185.distanceToSquared(_v0));
      }
      distanceSqToSegment(_v0, _v1, _v2, _v3) {
        let _v4, _v5, _v6, _v7;
        _v186.copy(_v0).add(_v1).multiplyScalar(.5), _v187.copy(_v1).sub(_v0).normalize(), _v188.copy(this.origin).sub(_v186);
        let _v8 = .5 * _v0.distanceTo(_v1),
          _v9 = -this.direction.dot(_v187),
          _v10 = _v188.dot(this.direction),
          _v11 = -_v188.dot(_v187),
          _v12 = _v188.lengthSq(),
          _v13 = Math.abs(1 - _v9 * _v9);
        if (_v13 > 0) {
          if (_v4 = _v9 * _v11 - _v10, _v5 = _v9 * _v10 - _v11, _v7 = _v8 * _v13, _v4 >= 0) {
            if (_v5 >= -_v7) {
              if (_v5 <= _v7) {
                let _v0 = 1 / _v13;
                _v4 *= _v0, _v5 *= _v0, _v6 = _v4 * (_v4 + _v9 * _v5 + 2 * _v10) + _v5 * (_v9 * _v4 + _v5 + 2 * _v11) + _v12;
              } else _v6 = -(_v4 = Math.max(0, -(_v9 * (_v5 = _v8) + _v10))) * _v4 + _v5 * (_v5 + 2 * _v11) + _v12;
            } else _v6 = -(_v4 = Math.max(0, -(_v9 * (_v5 = -_v8) + _v10))) * _v4 + _v5 * (_v5 + 2 * _v11) + _v12;
          } else _v5 <= -_v7 ? (_v5 = (_v4 = Math.max(0, -(-_v9 * _v8 + _v10))) > 0 ? -_v8 : Math.min(Math.max(-_v8, -_v11), _v8), _v6 = -_v4 * _v4 + _v5 * (_v5 + 2 * _v11) + _v12) : _v5 <= _v7 ? (_v4 = 0, _v6 = (_v5 = Math.min(Math.max(-_v8, -_v11), _v8)) * (_v5 + 2 * _v11) + _v12) : (_v5 = (_v4 = Math.max(0, -(_v9 * _v8 + _v10))) > 0 ? _v8 : Math.min(Math.max(-_v8, -_v11), _v8), _v6 = -_v4 * _v4 + _v5 * (_v5 + 2 * _v11) + _v12);
        } else _v5 = _v9 > 0 ? -_v8 : _v8, _v6 = -(_v4 = Math.max(0, -(_v9 * _v5 + _v10))) * _v4 + _v5 * (_v5 + 2 * _v11) + _v12;
        return _v2 && _v2.copy(this.origin).addScaledVector(this.direction, _v4), _v3 && _v3.copy(_v186).addScaledVector(_v187, _v5), _v6;
      }
      intersectSphere(_v0, _v1) {
        _v185.subVectors(_v0.center, this.origin);
        let _v2 = _v185.dot(this.direction),
          _v3 = _v185.dot(_v185) - _v2 * _v2,
          _v4 = _v0.radius * _v0.radius;
        if (_v3 > _v4) return null;
        let _v5 = Math.sqrt(_v4 - _v3),
          _v6 = _v2 - _v5,
          _v7 = _v2 + _v5;
        return _v7 < 0 ? null : _v6 < 0 ? this.at(_v7, _v1) : this.at(_v6, _v1);
      }
      intersectsSphere(_v0) {
        return !(_v0.radius < 0) && this.distanceSqToPoint(_v0.center) <= _v0.radius * _v0.radius;
      }
      distanceToPlane(_v0) {
        let _v1 = _v0.normal.dot(this.direction);
        if (0 === _v1) return 0 === _v0.distanceToPoint(this.origin) ? 0 : null;
        let _v2 = -(this.origin.dot(_v0.normal) + _v0.constant) / _v1;
        return _v2 >= 0 ? _v2 : null;
      }
      intersectPlane(_v0, _v1) {
        let _v2 = this.distanceToPlane(_v0);
        return null === _v2 ? null : this.at(_v2, _v1);
      }
      intersectsPlane(_v0) {
        let _v1 = _v0.distanceToPoint(this.origin);
        return !!(0 === _v1 || _v0.normal.dot(this.direction) * _v1 < 0);
      }
      intersectBox(_v0, _v1) {
        let _v2,
          _v3,
          _v4,
          _v5,
          _v6,
          _v7,
          _v8 = 1 / this.direction.x,
          _v9 = 1 / this.direction.y,
          _v10 = 1 / this.direction.z,
          _v11 = this.origin;
        return (_v8 >= 0 ? (_v2 = (_v0.min.x - _v11.x) * _v8, _v3 = (_v0.max.x - _v11.x) * _v8) : (_v2 = (_v0.max.x - _v11.x) * _v8, _v3 = (_v0.min.x - _v11.x) * _v8), _v9 >= 0 ? (_v4 = (_v0.min.y - _v11.y) * _v9, _v5 = (_v0.max.y - _v11.y) * _v9) : (_v4 = (_v0.max.y - _v11.y) * _v9, _v5 = (_v0.min.y - _v11.y) * _v9), _v2 > _v5 || _v4 > _v3 || ((_v4 > _v2 || isNaN(_v2)) && (_v2 = _v4), (_v5 < _v3 || isNaN(_v3)) && (_v3 = _v5), _v10 >= 0 ? (_v6 = (_v0.min.z - _v11.z) * _v10, _v7 = (_v0.max.z - _v11.z) * _v10) : (_v6 = (_v0.max.z - _v11.z) * _v10, _v7 = (_v0.min.z - _v11.z) * _v10), _v2 > _v7 || _v6 > _v3 || ((_v6 > _v2 || _v2 != _v2) && (_v2 = _v6), (_v7 < _v3 || _v3 != _v3) && (_v3 = _v7), _v3 < 0))) ? null : this.at(_v2 >= 0 ? _v2 : _v3, _v1);
      }
      intersectsBox(_v0) {
        return null !== this.intersectBox(_v0, _v185);
      }
      intersectTriangle(_v0, _v1, _v2, _v3, _v4) {
        let _v5;
        _v189.subVectors(_v1, _v0), _v190.subVectors(_v2, _v0), _v191.crossVectors(_v189, _v190);
        let _v6 = this.direction.dot(_v191);
        if (_v6 > 0) {
          if (_v3) return null;
          _v5 = 1;
        } else {
          if (!(_v6 < 0)) return null;
          _v5 = -1, _v6 = -_v6;
        }
        _v188.subVectors(this.origin, _v0);
        let _v7 = _v5 * this.direction.dot(_v190.crossVectors(_v188, _v190));
        if (_v7 < 0) return null;
        let _v8 = _v5 * this.direction.dot(_v189.cross(_v188));
        if (_v8 < 0 || _v7 + _v8 > _v6) return null;
        let _v9 = -_v5 * _v188.dot(_v191);
        return _v9 < 0 ? null : this.at(_v9 / _v6, _v4);
      }
      applyMatrix4(_v0) {
        return this.origin.applyMatrix4(_v0), this.direction.transformDirection(_v0), this;
      }
      equals(_v0) {
        return _v0.origin.equals(this.origin) && _v0.direction.equals(this.direction);
      }
      clone() {
        return new this.constructor().copy(this);
      }
    }(),
    _v260 = new _v184(),
    _v261 = new _v141(),
    _v262 = new _v141(),
    _v263 = new _v141(),
    _v264 = new _v141(),
    _v265 = new _v141(),
    _v266 = new _v141(),
    _v267 = new _v141(),
    _v268 = new _v141();
  class _v269 extends _v219 {
    constructor(_v0 = new _v257(), _v1 = new _v242()) {
      super(), this.isMesh = !0, this.type = "Mesh", this.geometry = _v0, this.material = _v1, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
    }
    copy(_v0, _v1) {
      return super.copy(_v0, _v1), void 0 !== _v0.morphTargetInfluences && (this.morphTargetInfluences = _v0.morphTargetInfluences.slice()), void 0 !== _v0.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, _v0.morphTargetDictionary)), this.material = Array.isArray(_v0.material) ? _v0.material.slice() : _v0.material, this.geometry = _v0.geometry, this;
    }
    updateMorphTargets() {
      let _v0 = this.geometry.morphAttributes,
        _v1 = Object.keys(_v0);
      if (_v1.length > 0) {
        let _v0 = _v0[_v1[0]];
        if (void 0 !== _v0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
            let _v0 = _v0[_v0].name || String(_v0);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[_v0] = _v0;
          }
        }
      }
    }
    getVertexPosition(_v0, _v1) {
      let _v2 = this.geometry,
        _v3 = _v2.attributes.position,
        _v4 = _v2.morphAttributes.position,
        _v5 = _v2.morphTargetsRelative;
      _v1.fromBufferAttribute(_v3, _v0);
      let _v6 = this.morphTargetInfluences;
      if (_v4 && _v6) {
        _v266.set(0, 0, 0);
        for (let _v0 = 0, _v1 = _v4.length; _v0 < _v1; _v0++) {
          let _v0 = _v6[_v0],
            _v1 = _v4[_v0];
          0 !== _v0 && (_v265.fromBufferAttribute(_v1, _v0), _v5 ? _v266.addScaledVector(_v265, _v0) : _v266.addScaledVector(_v265.sub(_v1), _v0));
        }
        _v1.add(_v266);
      }
      return _v1;
    }
    raycast(_v0, _v1) {
      let _v2 = this.geometry,
        _v3 = this.material,
        _v4 = this.matrixWorld;
      void 0 === _v3 || (null === _v2.boundingSphere && _v2.computeBoundingSphere(), _v260.copy(_v2.boundingSphere), _v260.applyMatrix4(_v4), _v259.copy(_v0.ray).recast(_v0.near), !1 === _v260.containsPoint(_v259.origin) && (null === _v259.intersectSphere(_v260, _v261) || _v259.origin.distanceToSquared(_v261) > (_v0.far - _v0.near) ** 2) || (_v258.copy(_v4).invert(), _v259.copy(_v0.ray).applyMatrix4(_v258), (null === _v2.boundingBox || !1 !== _v259.intersectsBox(_v2.boundingBox)) && this._computeIntersections(_v0, _v1, _v259)));
    }
    _computeIntersections(_v0, _v1, _v2) {
      let _v3,
        _v4 = this.geometry,
        _v5 = this.material,
        _v6 = _v4.index,
        _v7 = _v4.attributes.position,
        _v8 = _v4.attributes.uv,
        _v9 = _v4.attributes.uv1,
        _v10 = _v4.attributes.normal,
        _v11 = _v4.groups,
        _v12 = _v4.drawRange;
      if (null !== _v6) {
        if (Array.isArray(_v5)) for (let _v0 = 0, _v1 = _v11.length; _v0 < _v1; _v0++) {
          let _v0 = _v11[_v0],
            _v1 = _v5[_v0.materialIndex],
            _v2 = Math.max(_v0.start, _v12.start),
            _v3 = Math.min(_v6.count, Math.min(_v0.start + _v0.count, _v12.start + _v12.count));
          for (let _v0 = _v2; _v0 < _v3; _v0 += 3) (_v3 = _v270(this, _v1, _v0, _v2, _v8, _v9, _v10, _v6.getX(_v0), _v6.getX(_v0 + 1), _v6.getX(_v0 + 2))) && (_v3.faceIndex = Math.floor(_v0 / 3), _v3.face.materialIndex = _v0.materialIndex, _v1.push(_v3));
        } else {
          let _v0 = Math.max(0, _v12.start),
            _v1 = Math.min(_v6.count, _v12.start + _v12.count);
          for (let _v0 = _v0; _v0 < _v1; _v0 += 3) (_v3 = _v270(this, _v5, _v0, _v2, _v8, _v9, _v10, _v6.getX(_v0), _v6.getX(_v0 + 1), _v6.getX(_v0 + 2))) && (_v3.faceIndex = Math.floor(_v0 / 3), _v1.push(_v3));
        }
      } else if (void 0 !== _v7) if (Array.isArray(_v5)) for (let _v0 = 0, _v1 = _v11.length; _v0 < _v1; _v0++) {
        let _v0 = _v11[_v0],
          _v1 = _v5[_v0.materialIndex],
          _v2 = Math.max(_v0.start, _v12.start),
          _v3 = Math.min(_v7.count, Math.min(_v0.start + _v0.count, _v12.start + _v12.count));
        for (let _v0 = _v2; _v0 < _v3; _v0 += 3) (_v3 = _v270(this, _v1, _v0, _v2, _v8, _v9, _v10, _v0, _v0 + 1, _v0 + 2)) && (_v3.faceIndex = Math.floor(_v0 / 3), _v3.face.materialIndex = _v0.materialIndex, _v1.push(_v3));
      } else {
        let _v0 = Math.max(0, _v12.start),
          _v1 = Math.min(_v7.count, _v12.start + _v12.count);
        for (let _v0 = _v0; _v0 < _v1; _v0 += 3) (_v3 = _v270(this, _v5, _v0, _v2, _v8, _v9, _v10, _v0, _v0 + 1, _v0 + 2)) && (_v3.faceIndex = Math.floor(_v0 / 3), _v1.push(_v3));
      }
    }
  }
  function _v270(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9) {
    _v0.getVertexPosition(_v7, _v262), _v0.getVertexPosition(_v8, _v263), _v0.getVertexPosition(_v9, _v264);
    let _v10 = function (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
      if (null === (1 === _v1.side ? _v3.intersectTriangle(_v6, _v5, _v4, !0, _v7) : _v3.intersectTriangle(_v4, _v5, _v6, 0 === _v1.side, _v7))) return null;
      _v268.copy(_v7), _v268.applyMatrix4(_v0.matrixWorld);
      let _v8 = _v2.ray.origin.distanceTo(_v268);
      return _v8 < _v2.near || _v8 > _v2.far ? null : {
        distance: _v8,
        point: _v268.clone(),
        object: _v0
      };
    }(_v0, _v1, _v2, _v3, _v262, _v263, _v264, _v267);
    if (_v10) {
      let _v0 = new _v141();
      _v233.getBarycoord(_v267, _v262, _v263, _v264, _v0), _v4 && (_v10.uv = _v233.getInterpolatedAttribute(_v4, _v7, _v8, _v9, _v0, new _v139())), _v5 && (_v10.uv1 = _v233.getInterpolatedAttribute(_v5, _v7, _v8, _v9, _v0, new _v139())), _v6 && (_v10.normal = _v233.getInterpolatedAttribute(_v6, _v7, _v8, _v9, _v0, new _v141()), _v10.normal.dot(_v3.direction) > 0 && _v10.normal.multiplyScalar(-1));
      let _v1 = {
        a: _v7,
        b: _v8,
        c: _v9,
        normal: new _v141(),
        materialIndex: 0
      };
      _v233.getNormal(_v262, _v263, _v264, _v1.normal), _v10.face = _v1, _v10.barycoord = _v0;
    }
    return _v10;
  }
  class _v271 extends _v257 {
    constructor(_v0 = 1, _v1 = 1, _v2 = 1, _v3 = 1, _v4 = 1, _v5 = 1) {
      super(), this.type = "BoxGeometry", this.parameters = {
        width: _v0,
        height: _v1,
        depth: _v2,
        widthSegments: _v3,
        heightSegments: _v4,
        depthSegments: _v5
      };
      const _v6 = this;
      _v3 = Math.floor(_v3), _v4 = Math.floor(_v4);
      const _v7 = [],
        _v8 = [],
        _v9 = [],
        _v10 = [];
      let _v11 = 0,
        _v12 = 0;
      function _v13(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10) {
        let _v11 = _v5 / _v8,
          _v12 = _v6 / _v9,
          _v13 = _v5 / 2,
          _v14 = _v6 / 2,
          _v15 = _v7 / 2,
          _v16 = _v8 + 1,
          _v17 = _v9 + 1,
          _v18 = 0,
          _v19 = 0,
          _v20 = new _v141();
        for (let _v0 = 0; _v0 < _v17; _v0++) {
          let _v0 = _v0 * _v12 - _v14;
          for (let _v0 = 0; _v0 < _v16; _v0++) {
            let _v0 = _v0 * _v11 - _v13;
            _v20[_v0] = _v0 * _v3, _v20[_v1] = _v0 * _v4, _v20[_v2] = _v15, _v8.push(_v20.x, _v20.y, _v20.z), _v20[_v0] = 0, _v20[_v1] = 0, _v20[_v2] = _v7 > 0 ? 1 : -1, _v9.push(_v20.x, _v20.y, _v20.z), _v10.push(_v0 / _v8), _v10.push(1 - _v0 / _v9), _v18 += 1;
          }
        }
        for (let _v0 = 0; _v0 < _v9; _v0++) for (let _v0 = 0; _v0 < _v8; _v0++) {
          let _v0 = _v11 + _v0 + _v16 * _v0,
            _v1 = _v11 + _v0 + _v16 * (_v0 + 1),
            _v2 = _v11 + (_v0 + 1) + _v16 * (_v0 + 1),
            _v3 = _v11 + (_v0 + 1) + _v16 * _v0;
          _v7.push(_v0, _v1, _v3), _v7.push(_v1, _v2, _v3), _v19 += 6;
        }
        _v6.addGroup(_v12, _v19, _v10), _v12 += _v19, _v11 += _v18;
      }
      _v13("z", "y", "x", -1, -1, _v2, _v1, _v0, _v5 = Math.floor(_v5), _v4, 0), _v13("z", "y", "x", 1, -1, _v2, _v1, -_v0, _v5, _v4, 1), _v13("x", "z", "y", 1, 1, _v0, _v2, _v1, _v3, _v5, 2), _v13("x", "z", "y", 1, -1, _v0, _v2, -_v1, _v3, _v5, 3), _v13("x", "y", "z", 1, -1, _v0, _v1, _v2, _v3, _v4, 4), _v13("x", "y", "z", -1, -1, _v0, _v1, -_v2, _v3, _v4, 5), this.setIndex(_v7), this.setAttribute("position", new _v249(_v8, 3)), this.setAttribute("normal", new _v249(_v9, 3)), this.setAttribute("uv", new _v249(_v10, 2));
    }
    copy(_v0) {
      return super.copy(_v0), this.parameters = Object.assign({}, _v0.parameters), this;
    }
    static fromJSON(_v0) {
      return new _v271(_v0.width, _v0.height, _v0.depth, _v0.widthSegments, _v0.heightSegments, _v0.depthSegments);
    }
  }
  function _v272(_v0) {
    let _v1 = {};
    for (let _v0 in _v0) for (let _v0 in _v1[_v0] = {}, _v0[_v0]) {
      let _v0 = _v0[_v0][_v0];
      _v0 && (_v0.isColor || _v0.isMatrix3 || _v0.isMatrix4 || _v0.isVector2 || _v0.isVector3 || _v0.isVector4 || _v0.isTexture || _v0.isQuaternion) ? _v0.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), _v1[_v0][_v0] = null) : _v1[_v0][_v0] = _v0.clone() : Array.isArray(_v0) ? _v1[_v0][_v0] = _v0.slice() : _v1[_v0][_v0] = _v0;
    }
    return _v1;
  }
  function _v273(_v0) {
    let _v1 = {};
    for (let _v0 = 0; _v0 < _v0.length; _v0++) {
      let _v0 = _v272(_v0[_v0]);
      for (let _v0 in _v0) _v1[_v0] = _v0[_v0];
    }
    return _v1;
  }
  function _v274(_v0) {
    let _v1 = _v0.getRenderTarget();
    return null === _v1 ? _v0.outputColorSpace : !0 === _v1.isXRRenderTarget ? _v1.texture.colorSpace : _v152.workingColorSpace;
  }
  class _v275 extends _v241 {
    constructor(_v0) {
      super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
        clipCullDistance: !1,
        multiDraw: !1
      }, this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0]
      }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== _v0 && this.setValues(_v0);
    }
    copy(_v0) {
      return super.copy(_v0), this.fragmentShader = _v0.fragmentShader, this.vertexShader = _v0.vertexShader, this.uniforms = _v272(_v0.uniforms), this.uniformsGroups = function (_v0) {
        let _v1 = [];
        for (let _v0 = 0; _v0 < _v0.length; _v0++) _v1.push(_v0[_v0].clone());
        return _v1;
      }(_v0.uniformsGroups), this.defines = Object.assign({}, _v0.defines), this.wireframe = _v0.wireframe, this.wireframeLinewidth = _v0.wireframeLinewidth, this.fog = _v0.fog, this.lights = _v0.lights, this.clipping = _v0.clipping, this.extensions = Object.assign({}, _v0.extensions), this.glslVersion = _v0.glslVersion, this;
    }
    toJSON(_v0) {
      let _v1 = super.toJSON(_v0);
      for (let _v0 in _v1.glslVersion = this.glslVersion, _v1.uniforms = {}, this.uniforms) {
        let _v0 = this.uniforms[_v0].value;
        _v0 && _v0.isTexture ? _v1.uniforms[_v0] = {
          type: "t",
          value: _v0.toJSON(_v0).uuid
        } : _v0 && _v0.isColor ? _v1.uniforms[_v0] = {
          type: "c",
          value: _v0.getHex()
        } : _v0 && _v0.isVector2 ? _v1.uniforms[_v0] = {
          type: "v2",
          value: _v0.toArray()
        } : _v0 && _v0.isVector3 ? _v1.uniforms[_v0] = {
          type: "v3",
          value: _v0.toArray()
        } : _v0 && _v0.isVector4 ? _v1.uniforms[_v0] = {
          type: "v4",
          value: _v0.toArray()
        } : _v0 && _v0.isMatrix3 ? _v1.uniforms[_v0] = {
          type: "m3",
          value: _v0.toArray()
        } : _v0 && _v0.isMatrix4 ? _v1.uniforms[_v0] = {
          type: "m4",
          value: _v0.toArray()
        } : _v1.uniforms[_v0] = {
          value: _v0
        };
      }
      Object.keys(this.defines).length > 0 && (_v1.defines = this.defines), _v1.vertexShader = this.vertexShader, _v1.fragmentShader = this.fragmentShader, _v1.lights = this.lights, _v1.clipping = this.clipping;
      let _v2 = {};
      for (let _v0 in this.extensions) !0 === this.extensions[_v0] && (_v2[_v0] = !0);
      return Object.keys(_v2).length > 0 && (_v1.extensions = _v2), _v1;
    }
  }
  class _v276 extends _v219 {
    constructor() {
      super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new _v192(), this.projectionMatrix = new _v192(), this.projectionMatrixInverse = new _v192(), this.coordinateSystem = 0, this._reversedDepth = !1;
    }
    get reversedDepth() {
      return this._reversedDepth;
    }
    copy(_v0, _v1) {
      return super.copy(_v0, _v1), this.matrixWorldInverse.copy(_v0.matrixWorldInverse), this.projectionMatrix.copy(_v0.projectionMatrix), this.projectionMatrixInverse.copy(_v0.projectionMatrixInverse), this.coordinateSystem = _v0.coordinateSystem, this;
    }
    getWorldDirection(_v0) {
      return super.getWorldDirection(_v0).negate();
    }
    updateMatrixWorld(_v0) {
      super.updateMatrixWorld(_v0), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(_v0, _v1) {
      super.updateWorldMatrix(_v0, _v1), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  let _v277 = new _v141(),
    _v278 = new _v139(),
    _v279 = new _v139();
  class _v280 extends _v276 {
    constructor(_v0 = 50, _v1 = 1, _v2 = .1, _v3 = 0) {
      super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = _v0, this.zoom = 1, this.near = _v2, this.far = _v3, this.focus = 10, this.aspect = _v1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(_v0, _v1) {
      return super.copy(_v0, _v1), this.fov = _v0.fov, this.zoom = _v0.zoom, this.near = _v0.near, this.far = _v0.far, this.focus = _v0.focus, this.aspect = _v0.aspect, this.view = null === _v0.view ? null : Object.assign({}, _v0.view), this.filmGauge = _v0.filmGauge, this.filmOffset = _v0.filmOffset, this;
    }
    setFocalLength(_v0) {
      let _v1 = .5 * this.getFilmHeight() / _v0;
      this.fov = 2 * _v134 * Math.atan(_v1), this.updateProjectionMatrix();
    }
    getFocalLength() {
      let _v0 = Math.tan(.5 * _v133 * this.fov);
      return .5 * this.getFilmHeight() / _v0;
    }
    getEffectiveFOV() {
      return 2 * _v134 * Math.atan(Math.tan(.5 * _v133 * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(_v0, _v1, _v2) {
      _v277.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), _v1.set(_v277.x, _v277.y).multiplyScalar(-_v0 / _v277.z), _v277.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), _v2.set(_v277.x, _v277.y).multiplyScalar(-_v0 / _v277.z);
    }
    getViewSize(_v0, _v1) {
      return this.getViewBounds(_v0, _v278, _v279), _v1.subVectors(_v279, _v278);
    }
    setViewOffset(_v0, _v1, _v2, _v3, _v4, _v5) {
      this.aspect = _v0 / _v1, null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = _v0, this.view.fullHeight = _v1, this.view.offsetX = _v2, this.view.offsetY = _v3, this.view.width = _v4, this.view.height = _v5, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      let _v0 = this.near,
        _v1 = _v0 * Math.tan(.5 * _v133 * this.fov) / this.zoom,
        _v2 = 2 * _v1,
        _v3 = this.aspect * _v2,
        _v4 = -.5 * _v3,
        _v5 = this.view;
      if (null !== this.view && this.view.enabled) {
        let _v0 = _v5.fullWidth,
          _v1 = _v5.fullHeight;
        _v4 += _v5.offsetX * _v3 / _v0, _v1 -= _v5.offsetY * _v2 / _v1, _v3 *= _v5.width / _v0, _v2 *= _v5.height / _v1;
      }
      let _v6 = this.filmOffset;
      0 !== _v6 && (_v4 += _v0 * _v6 / this.getFilmWidth()), this.projectionMatrix.makePerspective(_v4, _v4 + _v3, _v1, _v1 - _v2, _v0, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(_v0) {
      let _v1 = super.toJSON(_v0);
      return _v1.object.fov = this.fov, _v1.object.zoom = this.zoom, _v1.object.near = this.near, _v1.object.far = this.far, _v1.object.focus = this.focus, _v1.object.aspect = this.aspect, null !== this.view && (_v1.object.view = Object.assign({}, this.view)), _v1.object.filmGauge = this.filmGauge, _v1.object.filmOffset = this.filmOffset, _v1;
    }
  }
  class _v281 extends _v219 {
    constructor(_v0, _v1, _v2) {
      super(), this.type = "CubeCamera", this.renderTarget = _v2, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      const _v3 = new _v280(-90, 1, _v0, _v1);
      _v3.layers = this.layers, this.add(_v3);
      const _v4 = new _v280(-90, 1, _v0, _v1);
      _v4.layers = this.layers, this.add(_v4);
      const _v5 = new _v280(-90, 1, _v0, _v1);
      _v5.layers = this.layers, this.add(_v5);
      const _v6 = new _v280(-90, 1, _v0, _v1);
      _v6.layers = this.layers, this.add(_v6);
      const _v7 = new _v280(-90, 1, _v0, _v1);
      _v7.layers = this.layers, this.add(_v7);
      const _v8 = new _v280(-90, 1, _v0, _v1);
      _v8.layers = this.layers, this.add(_v8);
    }
    updateCoordinateSystem() {
      let _v0 = this.coordinateSystem,
        _v1 = this.children.concat(),
        [_v2, _v3, _v4, _v5, _v6, _v7] = _v1;
      for (let _v0 of _v1) this.remove(_v0);
      if (0 === _v0) _v2.up.set(0, 1, 0), _v2.lookAt(1, 0, 0), _v3.up.set(0, 1, 0), _v3.lookAt(-1, 0, 0), _v4.up.set(0, 0, -1), _v4.lookAt(0, 1, 0), _v5.up.set(0, 0, 1), _v5.lookAt(0, -1, 0), _v6.up.set(0, 1, 0), _v6.lookAt(0, 0, 1), _v7.up.set(0, 1, 0), _v7.lookAt(0, 0, -1);else if (0 === _v0) _v2.up.set(0, -1, 0), _v2.lookAt(-1, 0, 0), _v3.up.set(0, -1, 0), _v3.lookAt(1, 0, 0), _v4.up.set(0, 0, 1), _v4.lookAt(0, 1, 0), _v5.up.set(0, 0, -1), _v5.lookAt(0, -1, 0), _v6.up.set(0, -1, 0), _v6.lookAt(0, 0, 1), _v7.up.set(0, -1, 0), _v7.lookAt(0, 0, -1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + _v0);
      for (let _v0 of _v1) this.add(_v0), _v0.updateMatrixWorld();
    }
    update(_v0, _v1) {
      null === this.parent && this.updateMatrixWorld();
      let {
        renderTarget: _v2,
        activeMipmapLevel: _v3
      } = this;
      this.coordinateSystem !== _v0.coordinateSystem && (this.coordinateSystem = _v0.coordinateSystem, this.updateCoordinateSystem());
      let [_v4, _v5, _v6, _v7, _v8, _v9] = this.children,
        _v10 = _v0.getRenderTarget(),
        _v11 = _v0.getActiveCubeFace(),
        _v12 = _v0.getActiveMipmapLevel(),
        _v13 = _v0.xr.enabled;
      _v0.xr.enabled = !1;
      let _v14 = _v2.texture.generateMipmaps;
      _v2.texture.generateMipmaps = !1, _v0.setRenderTarget(_v2, 0, _v3), _v0.render(_v1, _v4), _v0.setRenderTarget(_v2, 1, _v3), _v0.render(_v1, _v5), _v0.setRenderTarget(_v2, 2, _v3), _v0.render(_v1, _v6), _v0.setRenderTarget(_v2, 3, _v3), _v0.render(_v1, _v7), _v0.setRenderTarget(_v2, 4, _v3), _v0.render(_v1, _v8), _v2.texture.generateMipmaps = _v14, _v0.setRenderTarget(_v2, 5, _v3), _v0.render(_v1, _v9), _v0.setRenderTarget(_v10, _v11, _v12), _v0.xr.enabled = _v13, _v2.texture.needsPMREMUpdate = !0;
    }
  }
  class _v282 extends _v161 {
    constructor(_v0 = [], _v1 = 301, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9) {
      super(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9), this.isCubeTexture = !0, this.flipY = !1;
    }
    get images() {
      return this.image;
    }
    set images(_v0) {
      this.image = _v0;
    }
  }
  class _v283 extends _v164 {
    constructor(_v0 = 1, _v1 = {}) {
      super(_v0, _v0, _v1), this.isWebGLCubeRenderTarget = !0;
      const _v2 = {
        width: _v0,
        height: _v0,
        depth: 1
      };
      this.texture = new _v282([_v2, _v2, _v2, _v2, _v2, _v2]), this._setTextureOptions(_v1), this.texture.isRenderTargetTexture = !0;
    }
    fromEquirectangularTexture(_v0, _v1) {
      this.texture.type = _v1.type, this.texture.colorSpace = _v1.colorSpace, this.texture.generateMipmaps = _v1.generateMipmaps, this.texture.minFilter = _v1.minFilter, this.texture.magFilter = _v1.magFilter;
      let _v2 = {
          uniforms: {
            tEquirect: {
              value: null
            }
          },
          vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
          fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        },
        _v3 = new _v271(5, 5, 5),
        _v4 = new _v275({
          name: "CubemapFromEquirect",
          uniforms: _v272(_v2.uniforms),
          vertexShader: _v2.vertexShader,
          fragmentShader: _v2.fragmentShader,
          side: 1,
          blending: 0
        });
      _v4.uniforms.tEquirect.value = _v1;
      let _v5 = new _v269(_v3, _v4),
        _v6 = _v1.minFilter;
      return 0 === _v1.minFilter && (_v1.minFilter = 0), new _v281(1, 10, this).update(_v0, _v5), _v1.minFilter = _v6, _v5.geometry.dispose(), _v5.material.dispose(), this;
    }
    clear(_v0, _v1 = !0, _v2 = !0, _v3 = !0) {
      let _v4 = _v0.getRenderTarget();
      for (let _v0 = 0; _v0 < 6; _v0++) _v0.setRenderTarget(this, _v0), _v0.clear(_v1, _v2, _v3);
      _v0.setRenderTarget(_v4);
    }
  }
  class _v284 extends _v219 {
    constructor() {
      super(), this.isGroup = !0, this.type = "Group";
    }
  }
  let _v285 = {
    type: "move"
  };
  class _v286 {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return null === this._hand && (this._hand = new _v284(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
        pinching: !1
      }), this._hand;
    }
    getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new _v284(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new _v141(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new _v141()), this._targetRay;
    }
    getGripSpace() {
      return null === this._grip && (this._grip = new _v284(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new _v141(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new _v141()), this._grip;
    }
    dispatchEvent(_v0) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(_v0), null !== this._grip && this._grip.dispatchEvent(_v0), null !== this._hand && this._hand.dispatchEvent(_v0), this;
    }
    connect(_v0) {
      if (_v0 && _v0.hand) {
        let _v0 = this._hand;
        if (_v0) for (let _v0 of _v0.hand.values()) this._getHandJoint(_v0, _v0);
      }
      return this.dispatchEvent({
        type: "connected",
        data: _v0
      }), this;
    }
    disconnect(_v0) {
      return this.dispatchEvent({
        type: "disconnected",
        data: _v0
      }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
    }
    update(_v0, _v1, _v2) {
      let _v3 = null,
        _v4 = null,
        _v5 = null,
        _v6 = this._targetRay,
        _v7 = this._grip,
        _v8 = this._hand;
      if (_v0 && "visible-blurred" !== _v1.session.visibilityState) {
        if (_v8 && _v0.hand) {
          for (let _v0 of (_v5 = !0, _v0.hand.values())) {
            let _v0 = _v1.getJointPose(_v0, _v2),
              _v1 = this._getHandJoint(_v8, _v0);
            null !== _v0 && (_v1.matrix.fromArray(_v0.transform.matrix), _v1.matrix.decompose(_v1.position, _v1.rotation, _v1.scale), _v1.matrixWorldNeedsUpdate = !0, _v1.jointRadius = _v0.radius), _v1.visible = null !== _v0;
          }
          let _v0 = _v8.joints["index-finger-tip"],
            _v1 = _v8.joints["thumb-tip"],
            _v2 = _v0.position.distanceTo(_v1.position);
          _v8.inputState.pinching && _v2 > .025 ? (_v8.inputState.pinching = !1, this.dispatchEvent({
            type: "pinchend",
            handedness: _v0.handedness,
            target: this
          })) : !_v8.inputState.pinching && _v2 <= .015 && (_v8.inputState.pinching = !0, this.dispatchEvent({
            type: "pinchstart",
            handedness: _v0.handedness,
            target: this
          }));
        } else null !== _v7 && _v0.gripSpace && null !== (_v4 = _v1.getPose(_v0.gripSpace, _v2)) && (_v7.matrix.fromArray(_v4.transform.matrix), _v7.matrix.decompose(_v7.position, _v7.rotation, _v7.scale), _v7.matrixWorldNeedsUpdate = !0, _v4.linearVelocity ? (_v7.hasLinearVelocity = !0, _v7.linearVelocity.copy(_v4.linearVelocity)) : _v7.hasLinearVelocity = !1, _v4.angularVelocity ? (_v7.hasAngularVelocity = !0, _v7.angularVelocity.copy(_v4.angularVelocity)) : _v7.hasAngularVelocity = !1);
        null !== _v6 && (null === (_v3 = _v1.getPose(_v0.targetRaySpace, _v2)) && null !== _v4 && (_v3 = _v4), null !== _v3 && (_v6.matrix.fromArray(_v3.transform.matrix), _v6.matrix.decompose(_v6.position, _v6.rotation, _v6.scale), _v6.matrixWorldNeedsUpdate = !0, _v3.linearVelocity ? (_v6.hasLinearVelocity = !0, _v6.linearVelocity.copy(_v3.linearVelocity)) : _v6.hasLinearVelocity = !1, _v3.angularVelocity ? (_v6.hasAngularVelocity = !0, _v6.angularVelocity.copy(_v3.angularVelocity)) : _v6.hasAngularVelocity = !1, this.dispatchEvent(_v285)));
      }
      return null !== _v6 && (_v6.visible = null !== _v3), null !== _v7 && (_v7.visible = null !== _v4), null !== _v8 && (_v8.visible = null !== _v5), this;
    }
    _getHandJoint(_v0, _v1) {
      if (void 0 === _v0.joints[_v1.jointName]) {
        let _v0 = new _v284();
        _v0.matrixAutoUpdate = !1, _v0.visible = !1, _v0.joints[_v1.jointName] = _v0, _v0.add(_v0);
      }
      return _v0.joints[_v1.jointName];
    }
  }
  class _v287 extends _v219 {
    constructor() {
      super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new _v202(), this.environmentIntensity = 1, this.environmentRotation = new _v202(), this.overrideMaterial = null, "u" > typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
    copy(_v0, _v1) {
      return super.copy(_v0, _v1), null !== _v0.background && (this.background = _v0.background.clone()), null !== _v0.environment && (this.environment = _v0.environment.clone()), null !== _v0.fog && (this.fog = _v0.fog.clone()), this.backgroundBlurriness = _v0.backgroundBlurriness, this.backgroundIntensity = _v0.backgroundIntensity, this.backgroundRotation.copy(_v0.backgroundRotation), this.environmentIntensity = _v0.environmentIntensity, this.environmentRotation.copy(_v0.environmentRotation), null !== _v0.overrideMaterial && (this.overrideMaterial = _v0.overrideMaterial.clone()), this.matrixAutoUpdate = _v0.matrixAutoUpdate, this;
    }
    toJSON(_v0) {
      let _v1 = super.toJSON(_v0);
      return null !== this.fog && (_v1.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (_v1.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (_v1.object.backgroundIntensity = this.backgroundIntensity), _v1.object.backgroundRotation = this.backgroundRotation.toArray(), 1 !== this.environmentIntensity && (_v1.object.environmentIntensity = this.environmentIntensity), _v1.object.environmentRotation = this.environmentRotation.toArray(), _v1;
    }
  }
  let _v288 = new _v141(),
    _v289 = new _v141(),
    _v290 = new _v144();
  class _v291 {
    constructor(_v0 = new _v141(1, 0, 0), _v1 = 0) {
      this.isPlane = !0, this.normal = _v0, this.constant = _v1;
    }
    set(_v0, _v1) {
      return this.normal.copy(_v0), this.constant = _v1, this;
    }
    setComponents(_v0, _v1, _v2, _v3) {
      return this.normal.set(_v0, _v1, _v2), this.constant = _v3, this;
    }
    setFromNormalAndCoplanarPoint(_v0, _v1) {
      return this.normal.copy(_v0), this.constant = -_v1.dot(this.normal), this;
    }
    setFromCoplanarPoints(_v0, _v1, _v2) {
      let _v3 = _v288.subVectors(_v2, _v1).cross(_v289.subVectors(_v0, _v1)).normalize();
      return this.setFromNormalAndCoplanarPoint(_v3, _v0), this;
    }
    copy(_v0) {
      return this.normal.copy(_v0.normal), this.constant = _v0.constant, this;
    }
    normalize() {
      let _v0 = 1 / this.normal.length();
      return this.normal.multiplyScalar(_v0), this.constant *= _v0, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(_v0) {
      return this.normal.dot(_v0) + this.constant;
    }
    distanceToSphere(_v0) {
      return this.distanceToPoint(_v0.center) - _v0.radius;
    }
    projectPoint(_v0, _v1) {
      return _v1.copy(_v0).addScaledVector(this.normal, -this.distanceToPoint(_v0));
    }
    intersectLine(_v0, _v1) {
      let _v2 = _v0.delta(_v288),
        _v3 = this.normal.dot(_v2);
      if (0 === _v3) return 0 === this.distanceToPoint(_v0.start) ? _v1.copy(_v0.start) : null;
      let _v4 = -(_v0.start.dot(this.normal) + this.constant) / _v3;
      return _v4 < 0 || _v4 > 1 ? null : _v1.copy(_v0.start).addScaledVector(_v2, _v4);
    }
    intersectsLine(_v0) {
      let _v1 = this.distanceToPoint(_v0.start),
        _v2 = this.distanceToPoint(_v0.end);
      return _v1 < 0 && _v2 > 0 || _v2 < 0 && _v1 > 0;
    }
    intersectsBox(_v0) {
      return _v0.intersectsPlane(this);
    }
    intersectsSphere(_v0) {
      return _v0.intersectsPlane(this);
    }
    coplanarPoint(_v0) {
      return _v0.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(_v0, _v1) {
      let _v2 = _v1 || _v290.getNormalMatrix(_v0),
        _v3 = this.coplanarPoint(_v288).applyMatrix4(_v0),
        _v4 = this.normal.applyMatrix3(_v2).normalize();
      return this.constant = -_v3.dot(_v4), this;
    }
    translate(_v0) {
      return this.constant -= _v0.dot(this.normal), this;
    }
    equals(_v0) {
      return _v0.normal.equals(this.normal) && _v0.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  let _v292 = new _v184(),
    _v293 = new _v139(.5, .5),
    _v294 = new _v141();
  class _v295 {
    constructor(_v0 = new _v291(), _v1 = new _v291(), _v2 = new _v291(), _v3 = new _v291(), _v4 = new _v291(), _v5 = new _v291()) {
      this.planes = [_v0, _v1, _v2, _v3, _v4, _v5];
    }
    set(_v0, _v1, _v2, _v3, _v4, _v5) {
      let _v6 = this.planes;
      return _v6[0].copy(_v0), _v6[1].copy(_v1), _v6[2].copy(_v2), _v6[3].copy(_v3), _v6[4].copy(_v4), _v6[5].copy(_v5), this;
    }
    copy(_v0) {
      let _v1 = this.planes;
      for (let _v0 = 0; _v0 < 6; _v0++) _v1[_v0].copy(_v0.planes[_v0]);
      return this;
    }
    setFromProjectionMatrix(_v0, _v1 = 0, _v2 = !1) {
      let _v3 = this.planes,
        _v4 = _v0.elements,
        _v5 = _v4[0],
        _v6 = _v4[1],
        _v7 = _v4[2],
        _v8 = _v4[3],
        _v9 = _v4[4],
        _v10 = _v4[5],
        _v11 = _v4[6],
        _v12 = _v4[7],
        _v13 = _v4[8],
        _v14 = _v4[9],
        _v15 = _v4[10],
        _v16 = _v4[11],
        _v17 = _v4[12],
        _v18 = _v4[13],
        _v19 = _v4[14],
        _v20 = _v4[15];
      if (_v3[0].setComponents(_v8 - _v5, _v12 - _v9, _v16 - _v13, _v20 - _v17).normalize(), _v3[1].setComponents(_v8 + _v5, _v12 + _v9, _v16 + _v13, _v20 + _v17).normalize(), _v3[2].setComponents(_v8 + _v6, _v12 + _v10, _v16 + _v14, _v20 + _v18).normalize(), _v3[3].setComponents(_v8 - _v6, _v12 - _v10, _v16 - _v14, _v20 - _v18).normalize(), _v2) _v3[4].setComponents(_v7, _v11, _v15, _v19).normalize(), _v3[5].setComponents(_v8 - _v7, _v12 - _v11, _v16 - _v15, _v20 - _v19).normalize();else if (_v3[4].setComponents(_v8 - _v7, _v12 - _v11, _v16 - _v15, _v20 - _v19).normalize(), 0 === _v1) _v3[5].setComponents(_v8 + _v7, _v12 + _v11, _v16 + _v15, _v20 + _v19).normalize();else if (0 === _v1) _v3[5].setComponents(_v7, _v11, _v15, _v19).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + _v1);
      return this;
    }
    intersectsObject(_v0) {
      if (void 0 !== _v0.boundingSphere) null === _v0.boundingSphere && _v0.computeBoundingSphere(), _v292.copy(_v0.boundingSphere).applyMatrix4(_v0.matrixWorld);else {
        let _v0 = _v0.geometry;
        null === _v0.boundingSphere && _v0.computeBoundingSphere(), _v292.copy(_v0.boundingSphere).applyMatrix4(_v0.matrixWorld);
      }
      return this.intersectsSphere(_v292);
    }
    intersectsSprite(_v0) {
      return _v292.center.set(0, 0, 0), _v292.radius = .7071067811865476 + _v293.distanceTo(_v0.center), _v292.applyMatrix4(_v0.matrixWorld), this.intersectsSphere(_v292);
    }
    intersectsSphere(_v0) {
      let _v1 = this.planes,
        _v2 = _v0.center,
        _v3 = -_v0.radius;
      for (let _v0 = 0; _v0 < 6; _v0++) if (_v1[_v0].distanceToPoint(_v2) < _v3) return !1;
      return !0;
    }
    intersectsBox(_v0) {
      let _v1 = this.planes;
      for (let _v0 = 0; _v0 < 6; _v0++) {
        let _v0 = _v1[_v0];
        if (_v294.x = _v0.normal.x > 0 ? _v0.max.x : _v0.min.x, _v294.y = _v0.normal.y > 0 ? _v0.max.y : _v0.min.y, _v294.z = _v0.normal.z > 0 ? _v0.max.z : _v0.min.z, 0 > _v0.distanceToPoint(_v294)) return !1;
      }
      return !0;
    }
    containsPoint(_v0) {
      let _v1 = this.planes;
      for (let _v0 = 0; _v0 < 6; _v0++) if (0 > _v1[_v0].distanceToPoint(_v0)) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class _v296 extends _v161 {
    constructor(_v0, _v1, _v2, _v3, _v4 = 0, _v5 = 0, _v6, _v7, _v8) {
      super(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8), this.isVideoTexture = !0, this.generateMipmaps = !1, this._requestVideoFrameCallbackId = 0;
      const _v9 = this;
      "requestVideoFrameCallback" in _v0 && (this._requestVideoFrameCallbackId = _v0.requestVideoFrameCallback(function _v0() {
        _v9.needsUpdate = !0, _v9._requestVideoFrameCallbackId = _v0.requestVideoFrameCallback(_v0);
      }));
    }
    clone() {
      return new this.constructor(this.image).copy(this);
    }
    update() {
      let _v0 = this.image;
      !1 == "requestVideoFrameCallback" in _v0 && _v0.readyState >= _v0.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
    }
    dispose() {
      0 !== this._requestVideoFrameCallbackId && this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId), super.dispose();
    }
  }
  class _v297 extends _v161 {
    constructor(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8) {
      super(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8), this.isCanvasTexture = !0, this.needsUpdate = !0;
    }
  }
  class _v298 extends _v161 {
    constructor(_v0, _v1, _v2 = 0, _v3, _v4, _v5, _v6 = 0, _v7 = 0, _v8, _v9 = 0, _v10 = 1) {
      if (0 !== _v9 && 0 !== _v9) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      super({
        width: _v0,
        height: _v1,
        depth: _v10
      }, _v3, _v4, _v5, _v6, _v7, _v9, _v2, _v8), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
    }
    copy(_v0) {
      return super.copy(_v0), this.source = new _v157(Object.assign({}, _v0.image)), this.compareFunction = _v0.compareFunction, this;
    }
    toJSON(_v0) {
      let _v1 = super.toJSON(_v0);
      return null !== this.compareFunction && (_v1.compareFunction = this.compareFunction), _v1;
    }
  }
  class _v299 extends _v161 {
    constructor(_v0 = null) {
      super(), this.sourceTexture = _v0, this.isExternalTexture = !0;
    }
    copy(_v0) {
      return super.copy(_v0), this.sourceTexture = _v0.sourceTexture, this;
    }
  }
  class _v300 {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null;
    }
    getPoint() {
      console.warn("THREE.Curve: .getPoint() not implemented.");
    }
    getPointAt(_v0, _v1) {
      let _v2 = this.getUtoTmapping(_v0);
      return this.getPoint(_v2, _v1);
    }
    getPoints(_v0 = 5) {
      let _v1 = [];
      for (let _v0 = 0; _v0 <= _v0; _v0++) _v1.push(this.getPoint(_v0 / _v0));
      return _v1;
    }
    getSpacedPoints(_v0 = 5) {
      let _v1 = [];
      for (let _v0 = 0; _v0 <= _v0; _v0++) _v1.push(this.getPointAt(_v0 / _v0));
      return _v1;
    }
    getLength() {
      let _v0 = this.getLengths();
      return _v0[_v0.length - 1];
    }
    getLengths(_v0 = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === _v0 + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      let _v1 = [],
        _v2,
        _v3 = this.getPoint(0),
        _v4 = 0;
      _v1.push(0);
      for (let _v0 = 1; _v0 <= _v0; _v0++) _v1.push(_v4 += (_v2 = this.getPoint(_v0 / _v0)).distanceTo(_v3)), _v3 = _v2;
      return this.cacheArcLengths = _v1, _v1;
    }
    updateArcLengths() {
      this.needsUpdate = !0, this.getLengths();
    }
    getUtoTmapping(_v0, _v1 = null) {
      let _v2,
        _v3 = this.getLengths(),
        _v4 = 0,
        _v5 = _v3.length;
      _v2 = _v1 || _v0 * _v3[_v5 - 1];
      let _v6 = 0,
        _v7 = _v5 - 1,
        _v8;
      for (; _v6 <= _v7;) if ((_v8 = _v3[_v4 = Math.floor(_v6 + (_v7 - _v6) / 2)] - _v2) < 0) _v6 = _v4 + 1;else if (_v8 > 0) _v7 = _v4 - 1;else {
        _v7 = _v4;
        break;
      }
      if (_v3[_v4 = _v7] === _v2) return _v4 / (_v5 - 1);
      let _v9 = _v3[_v4],
        _v10 = _v3[_v4 + 1];
      return (_v4 + (_v2 - _v9) / (_v10 - _v9)) / (_v5 - 1);
    }
    getTangent(_v0, _v1) {
      let _v2 = _v0 - 1e-4,
        _v3 = _v0 + 1e-4;
      _v2 < 0 && (_v2 = 0), _v3 > 1 && (_v3 = 1);
      let _v4 = this.getPoint(_v2),
        _v5 = this.getPoint(_v3),
        _v6 = _v1 || (_v4.isVector2 ? new _v139() : new _v141());
      return _v6.copy(_v5).sub(_v4).normalize(), _v6;
    }
    getTangentAt(_v0, _v1) {
      let _v2 = this.getUtoTmapping(_v0);
      return this.getTangent(_v2, _v1);
    }
    computeFrenetFrames(_v0, _v1 = !1) {
      let _v2 = new _v141(),
        _v3 = [],
        _v4 = [],
        _v5 = [],
        _v6 = new _v141(),
        _v7 = new _v192();
      for (let _v0 = 0; _v0 <= _v0; _v0++) {
        let _v0 = _v0 / _v0;
        _v3[_v0] = this.getTangentAt(_v0, new _v141());
      }
      _v4[0] = new _v141(), _v5[0] = new _v141();
      let _v8 = Number.MAX_VALUE,
        _v9 = Math.abs(_v3[0].x),
        _v10 = Math.abs(_v3[0].y),
        _v11 = Math.abs(_v3[0].z);
      _v9 <= _v8 && (_v8 = _v9, _v2.set(1, 0, 0)), _v10 <= _v8 && (_v8 = _v10, _v2.set(0, 1, 0)), _v11 <= _v8 && _v2.set(0, 0, 1), _v6.crossVectors(_v3[0], _v2).normalize(), _v4[0].crossVectors(_v3[0], _v6), _v5[0].crossVectors(_v3[0], _v4[0]);
      for (let _v0 = 1; _v0 <= _v0; _v0++) {
        if (_v4[_v0] = _v4[_v0 - 1].clone(), _v5[_v0] = _v5[_v0 - 1].clone(), _v6.crossVectors(_v3[_v0 - 1], _v3[_v0]), _v6.length() > Number.EPSILON) {
          _v6.normalize();
          let _v0 = Math.acos(_v136(_v3[_v0 - 1].dot(_v3[_v0]), -1, 1));
          _v4[_v0].applyMatrix4(_v7.makeRotationAxis(_v6, _v0));
        }
        _v5[_v0].crossVectors(_v3[_v0], _v4[_v0]);
      }
      if (!0 === _v1) {
        let _v0 = Math.acos(_v136(_v4[0].dot(_v4[_v0]), -1, 1));
        _v0 /= _v0, _v3[0].dot(_v6.crossVectors(_v4[0], _v4[_v0])) > 0 && (_v0 = -_v0);
        for (let _v0 = 1; _v0 <= _v0; _v0++) _v4[_v0].applyMatrix4(_v7.makeRotationAxis(_v3[_v0], _v0 * _v0)), _v5[_v0].crossVectors(_v3[_v0], _v4[_v0]);
      }
      return {
        tangents: _v3,
        normals: _v4,
        binormals: _v5
      };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(_v0) {
      return this.arcLengthDivisions = _v0.arcLengthDivisions, this;
    }
    toJSON() {
      let _v0 = {
        metadata: {
          version: 4.7,
          type: "Curve",
          generator: "Curve.toJSON"
        }
      };
      return _v0.arcLengthDivisions = this.arcLengthDivisions, _v0.type = this.type, _v0;
    }
    fromJSON(_v0) {
      return this.arcLengthDivisions = _v0.arcLengthDivisions, this;
    }
  }
  class _v301 extends _v300 {
    constructor(_v0 = 0, _v1 = 0, _v2 = 1, _v3 = 1, _v4 = 0, _v5 = 2 * Math.PI, _v6 = !1, _v7 = 0) {
      super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = _v0, this.aY = _v1, this.xRadius = _v2, this.yRadius = _v3, this.aStartAngle = _v4, this.aEndAngle = _v5, this.aClockwise = _v6, this.aRotation = _v7;
    }
    getPoint(_v0, _v1 = new _v139()) {
      let _v2 = 2 * Math.PI,
        _v3 = this.aEndAngle - this.aStartAngle,
        _v4 = Math.abs(_v3) < Number.EPSILON;
      for (; _v3 < 0;) _v3 += _v2;
      for (; _v3 > _v2;) _v3 -= _v2;
      _v3 < Number.EPSILON && (_v3 = _v4 ? 0 : _v2), !0 !== this.aClockwise || _v4 || (_v3 === _v2 ? _v3 = -_v2 : _v3 -= _v2);
      let _v5 = this.aStartAngle + _v0 * _v3,
        _v6 = this.aX + this.xRadius * Math.cos(_v5),
        _v7 = this.aY + this.yRadius * Math.sin(_v5);
      if (0 !== this.aRotation) {
        let _v0 = Math.cos(this.aRotation),
          _v1 = Math.sin(this.aRotation),
          _v2 = _v6 - this.aX,
          _v3 = _v7 - this.aY;
        _v6 = _v2 * _v0 - _v3 * _v1 + this.aX, _v7 = _v2 * _v1 + _v3 * _v0 + this.aY;
      }
      return _v1.set(_v6, _v7);
    }
    copy(_v0) {
      return super.copy(_v0), this.aX = _v0.aX, this.aY = _v0.aY, this.xRadius = _v0.xRadius, this.yRadius = _v0.yRadius, this.aStartAngle = _v0.aStartAngle, this.aEndAngle = _v0.aEndAngle, this.aClockwise = _v0.aClockwise, this.aRotation = _v0.aRotation, this;
    }
    toJSON() {
      let _v0 = super.toJSON();
      return _v0.aX = this.aX, _v0.aY = this.aY, _v0.xRadius = this.xRadius, _v0.yRadius = this.yRadius, _v0.aStartAngle = this.aStartAngle, _v0.aEndAngle = this.aEndAngle, _v0.aClockwise = this.aClockwise, _v0.aRotation = this.aRotation, _v0;
    }
    fromJSON(_v0) {
      return super.fromJSON(_v0), this.aX = _v0.aX, this.aY = _v0.aY, this.xRadius = _v0.xRadius, this.yRadius = _v0.yRadius, this.aStartAngle = _v0.aStartAngle, this.aEndAngle = _v0.aEndAngle, this.aClockwise = _v0.aClockwise, this.aRotation = _v0.aRotation, this;
    }
  }
  function _v302() {
    let _v0 = 0,
      _v1 = 0,
      _v2 = 0,
      _v3 = 0;
    function _v4(_v0, _v1, _v2, _v3) {
      _v0 = _v0, _v1 = _v2, _v2 = -3 * _v0 + 3 * _v1 - 2 * _v2 - _v3, _v3 = 2 * _v0 - 2 * _v1 + _v2 + _v3;
    }
    return {
      initCatmullRom: function (_v0, _v1, _v2, _v3, _v4) {
        _v4(_v1, _v2, _v4 * (_v2 - _v0), _v4 * (_v3 - _v1));
      },
      initNonuniformCatmullRom: function (_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
        let _v7 = (_v1 - _v0) / _v4 - (_v2 - _v0) / (_v4 + _v5) + (_v2 - _v1) / _v5,
          _v8 = (_v2 - _v1) / _v5 - (_v3 - _v1) / (_v5 + _v6) + (_v3 - _v2) / _v6;
        _v4(_v1, _v2, _v7 *= _v5, _v8 *= _v5);
      },
      calc: function (_v0) {
        let _v1 = _v0 * _v0;
        return _v0 + _v1 * _v0 + _v2 * _v1 + _v1 * _v0 * _v3;
      }
    };
  }
  let _v303 = new _v141(),
    _v304 = new _v302(),
    _v305 = new _v302(),
    _v306 = new _v302();
  function _v307(_v0, _v1, _v2, _v3, _v4) {
    let _v5 = (_v3 - _v1) * .5,
      _v6 = (_v4 - _v2) * .5,
      _v7 = _v0 * _v0;
    return _v0 * _v7 * (2 * _v2 - 2 * _v3 + _v5 + _v6) + (-3 * _v2 + 3 * _v3 - 2 * _v5 - _v6) * _v7 + _v5 * _v0 + _v2;
  }
  function _v308(_v0, _v1, _v2, _v3) {
    let _v4;
    return (_v4 = 1 - _v0) * _v4 * _v1 + 2 * (1 - _v0) * _v0 * _v2 + _v0 * _v0 * _v3;
  }
  function _v309(_v0, _v1, _v2, _v3, _v4) {
    let _v5, _v6;
    return (_v5 = 1 - _v0) * _v5 * _v5 * _v1 + 3 * (_v6 = 1 - _v0) * _v6 * _v0 * _v2 + 3 * (1 - _v0) * _v0 * _v0 * _v3 + _v0 * _v0 * _v0 * _v4;
  }
  class _v310 extends _v300 {
    constructor(_v0 = new _v139(), _v1 = new _v139(), _v2 = new _v139(), _v3 = new _v139()) {
      super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = _v0, this.v1 = _v1, this.v2 = _v2, this.v3 = _v3;
    }
    getPoint(_v0, _v1 = new _v139()) {
      let _v2 = this.v0,
        _v3 = this.v1,
        _v4 = this.v2,
        _v5 = this.v3;
      return _v1.set(_v309(_v0, _v2.x, _v3.x, _v4.x, _v5.x), _v309(_v0, _v2.y, _v3.y, _v4.y, _v5.y)), _v1;
    }
    copy(_v0) {
      return super.copy(_v0), this.v0.copy(_v0.v0), this.v1.copy(_v0.v1), this.v2.copy(_v0.v2), this.v3.copy(_v0.v3), this;
    }
    toJSON() {
      let _v0 = super.toJSON();
      return _v0.v0 = this.v0.toArray(), _v0.v1 = this.v1.toArray(), _v0.v2 = this.v2.toArray(), _v0.v3 = this.v3.toArray(), _v0;
    }
    fromJSON(_v0) {
      return super.fromJSON(_v0), this.v0.fromArray(_v0.v0), this.v1.fromArray(_v0.v1), this.v2.fromArray(_v0.v2), this.v3.fromArray(_v0.v3), this;
    }
  }
  class _v311 extends _v300 {
    constructor(_v0 = new _v139(), _v1 = new _v139()) {
      super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = _v0, this.v2 = _v1;
    }
    getPoint(_v0, _v1 = new _v139()) {
      return 1 === _v0 ? _v1.copy(this.v2) : (_v1.copy(this.v2).sub(this.v1), _v1.multiplyScalar(_v0).add(this.v1)), _v1;
    }
    getPointAt(_v0, _v1) {
      return this.getPoint(_v0, _v1);
    }
    getTangent(_v0, _v1 = new _v139()) {
      return _v1.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(_v0, _v1) {
      return this.getTangent(_v0, _v1);
    }
    copy(_v0) {
      return super.copy(_v0), this.v1.copy(_v0.v1), this.v2.copy(_v0.v2), this;
    }
    toJSON() {
      let _v0 = super.toJSON();
      return _v0.v1 = this.v1.toArray(), _v0.v2 = this.v2.toArray(), _v0;
    }
    fromJSON(_v0) {
      return super.fromJSON(_v0), this.v1.fromArray(_v0.v1), this.v2.fromArray(_v0.v2), this;
    }
  }
  class _v312 extends _v300 {
    constructor(_v0 = new _v139(), _v1 = new _v139(), _v2 = new _v139()) {
      super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = _v0, this.v1 = _v1, this.v2 = _v2;
    }
    getPoint(_v0, _v1 = new _v139()) {
      let _v2 = this.v0,
        _v3 = this.v1,
        _v4 = this.v2;
      return _v1.set(_v308(_v0, _v2.x, _v3.x, _v4.x), _v308(_v0, _v2.y, _v3.y, _v4.y)), _v1;
    }
    copy(_v0) {
      return super.copy(_v0), this.v0.copy(_v0.v0), this.v1.copy(_v0.v1), this.v2.copy(_v0.v2), this;
    }
    toJSON() {
      let _v0 = super.toJSON();
      return _v0.v0 = this.v0.toArray(), _v0.v1 = this.v1.toArray(), _v0.v2 = this.v2.toArray(), _v0;
    }
    fromJSON(_v0) {
      return super.fromJSON(_v0), this.v0.fromArray(_v0.v0), this.v1.fromArray(_v0.v1), this.v2.fromArray(_v0.v2), this;
    }
  }
  class _v313 extends _v300 {
    constructor(_v0 = []) {
      super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = _v0;
    }
    getPoint(_v0, _v1 = new _v139()) {
      let _v2 = this.points,
        _v3 = (_v2.length - 1) * _v0,
        _v4 = Math.floor(_v3),
        _v5 = _v3 - _v4,
        _v6 = _v2[0 === _v4 ? _v4 : _v4 - 1],
        _v7 = _v2[_v4],
        _v8 = _v2[_v4 > _v2.length - 2 ? _v2.length - 1 : _v4 + 1],
        _v9 = _v2[_v4 > _v2.length - 3 ? _v2.length - 1 : _v4 + 2];
      return _v1.set(_v307(_v5, _v6.x, _v7.x, _v8.x, _v9.x), _v307(_v5, _v6.y, _v7.y, _v8.y, _v9.y)), _v1;
    }
    copy(_v0) {
      super.copy(_v0), this.points = [];
      for (let _v0 = 0, _v1 = _v0.points.length; _v0 < _v1; _v0++) {
        let _v0 = _v0.points[_v0];
        this.points.push(_v0.clone());
      }
      return this;
    }
    toJSON() {
      let _v0 = super.toJSON();
      _v0.points = [];
      for (let _v0 = 0, _v1 = this.points.length; _v0 < _v1; _v0++) {
        let _v0 = this.points[_v0];
        _v0.points.push(_v0.toArray());
      }
      return _v0;
    }
    fromJSON(_v0) {
      super.fromJSON(_v0), this.points = [];
      for (let _v0 = 0, _v1 = _v0.points.length; _v0 < _v1; _v0++) {
        let _v0 = _v0.points[_v0];
        this.points.push(new _v139().fromArray(_v0));
      }
      return this;
    }
  }
  class _v314 extends _v257 {
    constructor(_v0 = 1, _v1 = 1, _v2 = 1, _v3 = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = {
        width: _v0,
        height: _v1,
        widthSegments: _v2,
        heightSegments: _v3
      };
      const _v4 = _v0 / 2,
        _v5 = _v1 / 2,
        _v6 = Math.floor(_v2),
        _v7 = Math.floor(_v3),
        _v8 = _v6 + 1,
        _v9 = _v7 + 1,
        _v10 = _v0 / _v6,
        _v11 = _v1 / _v7,
        _v12 = [],
        _v13 = [],
        _v14 = [],
        _v15 = [];
      for (let _v0 = 0; _v0 < _v9; _v0++) {
        const _v0 = _v0 * _v11 - _v5;
        for (let _v0 = 0; _v0 < _v8; _v0++) {
          const _v0 = _v0 * _v10 - _v4;
          _v13.push(_v0, -_v0, 0), _v14.push(0, 0, 1), _v15.push(_v0 / _v6), _v15.push(1 - _v0 / _v7);
        }
      }
      for (let _v0 = 0; _v0 < _v7; _v0++) for (let _v0 = 0; _v0 < _v6; _v0++) {
        const _v0 = _v0 + _v8 * _v0,
          _v1 = _v0 + _v8 * (_v0 + 1),
          _v2 = _v0 + 1 + _v8 * (_v0 + 1),
          _v3 = _v0 + 1 + _v8 * _v0;
        _v12.push(_v0, _v1, _v3), _v12.push(_v1, _v2, _v3);
      }
      this.setIndex(_v12), this.setAttribute("position", new _v249(_v13, 3)), this.setAttribute("normal", new _v249(_v14, 3)), this.setAttribute("uv", new _v249(_v15, 2));
    }
    copy(_v0) {
      return super.copy(_v0), this.parameters = Object.assign({}, _v0.parameters), this;
    }
    static fromJSON(_v0) {
      return new _v314(_v0.width, _v0.height, _v0.widthSegments, _v0.heightSegments);
    }
  }
  class _v315 extends _v241 {
    constructor(_v0) {
      super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 0, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(_v0);
    }
    copy(_v0) {
      return super.copy(_v0), this.depthPacking = _v0.depthPacking, this.map = _v0.map, this.alphaMap = _v0.alphaMap, this.displacementMap = _v0.displacementMap, this.displacementScale = _v0.displacementScale, this.displacementBias = _v0.displacementBias, this.wireframe = _v0.wireframe, this.wireframeLinewidth = _v0.wireframeLinewidth, this;
    }
  }
  class _v316 extends _v241 {
    constructor(_v0) {
      super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(_v0);
    }
    copy(_v0) {
      return super.copy(_v0), this.map = _v0.map, this.alphaMap = _v0.alphaMap, this.displacementMap = _v0.displacementMap, this.displacementScale = _v0.displacementScale, this.displacementBias = _v0.displacementBias, this;
    }
  }
  function _v317(_v0, _v1) {
    return _v0 && _v0.constructor !== _v1 ? "number" == typeof _v1.BYTES_PER_ELEMENT ? new _v1(_v0) : Array.prototype.slice.call(_v0) : _v0;
  }
  class _v318 {
    constructor(_v0, _v1, _v2, _v3) {
      this.parameterPositions = _v0, this._cachedIndex = 0, this.resultBuffer = void 0 !== _v3 ? _v3 : new _v1.constructor(_v2), this.sampleValues = _v1, this.valueSize = _v2, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(_v0) {
      let _v1 = this.parameterPositions,
        _v2 = this._cachedIndex,
        _v3 = _v1[_v2],
        _v4 = _v1[_v2 - 1];
      e: {
        t: {
          let _v0;
          i: {
            n: if (!(_v0 < _v3)) {
              for (let _v0 = _v2 + 2;;) {
                if (void 0 === _v3) {
                  if (_v0 < _v4) break n;
                  return _v2 = _v1.length, this._cachedIndex = _v2, this.copySampleValue_(_v2 - 1);
                }
                if (_v2 === _v0) break;
                if (_v4 = _v3, _v0 < (_v3 = _v1[++_v2])) break t;
              }
              _v0 = _v1.length;
              break i;
            }
            if (!(_v0 >= _v4)) {
              let _v0 = _v1[1];
              _v0 < _v0 && (_v2 = 2, _v4 = _v0);
              for (let _v0 = _v2 - 2;;) {
                if (void 0 === _v4) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (_v2 === _v0) break;
                if (_v3 = _v4, _v0 >= (_v4 = _v1[--_v2 - 1])) break t;
              }
              _v0 = _v2, _v2 = 0;
              break i;
            }
            break e;
          }
          for (; _v2 < _v0;) {
            let _v0 = _v2 + _v0 >>> 1;
            _v0 < _v1[_v0] ? _v0 = _v0 : _v2 = _v0 + 1;
          }
          if (_v3 = _v1[_v2], void 0 === (_v4 = _v1[_v2 - 1])) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (void 0 === _v3) return _v2 = _v1.length, this._cachedIndex = _v2, this.copySampleValue_(_v2 - 1);
        }
        this._cachedIndex = _v2, this.intervalChanged_(_v2, _v4, _v3);
      }
      return this.interpolate_(_v2, _v4, _v0, _v3);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(_v0) {
      let _v1 = this.resultBuffer,
        _v2 = this.sampleValues,
        _v3 = this.valueSize,
        _v4 = _v0 * _v3;
      for (let _v0 = 0; _v0 !== _v3; ++_v0) _v1[_v0] = _v2[_v4 + _v0];
      return _v1;
    }
    interpolate_() {
      throw Error("call to abstract method");
    }
    intervalChanged_() {}
  }
  class _v319 extends _v318 {
    constructor(_v0, _v1, _v2, _v3) {
      super(_v0, _v1, _v2, _v3), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
        endingStart: 0,
        endingEnd: 0
      };
    }
    intervalChanged_(_v0, _v1, _v2) {
      let _v3 = this.parameterPositions,
        _v4 = _v0 - 2,
        _v5 = _v0 + 1,
        _v6 = _v3[_v4],
        _v7 = _v3[_v5];
      if (void 0 === _v6) switch (this.getSettings_().endingStart) {
        case 0:
          _v4 = _v0, _v6 = 2 * _v1 - _v2;
          break;
        case 0:
          _v4 = _v3.length - 2, _v6 = _v1 + _v3[_v4] - _v3[_v4 + 1];
          break;
        default:
          _v4 = _v0, _v6 = _v2;
      }
      if (void 0 === _v7) switch (this.getSettings_().endingEnd) {
        case 0:
          _v5 = _v0, _v7 = 2 * _v2 - _v1;
          break;
        case 0:
          _v5 = 1, _v7 = _v2 + _v3[1] - _v3[0];
          break;
        default:
          _v5 = _v0 - 1, _v7 = _v1;
      }
      let _v8 = (_v2 - _v1) * .5,
        _v9 = this.valueSize;
      this._weightPrev = _v8 / (_v1 - _v6), this._weightNext = _v8 / (_v7 - _v2), this._offsetPrev = _v4 * _v9, this._offsetNext = _v5 * _v9;
    }
    interpolate_(_v0, _v1, _v2, _v3) {
      let _v4 = this.resultBuffer,
        _v5 = this.sampleValues,
        _v6 = this.valueSize,
        _v7 = _v0 * _v6,
        _v8 = _v7 - _v6,
        _v9 = this._offsetPrev,
        _v10 = this._offsetNext,
        _v11 = this._weightPrev,
        _v12 = this._weightNext,
        _v13 = (_v2 - _v1) / (_v3 - _v1),
        _v14 = _v13 * _v13,
        _v15 = _v14 * _v13,
        _v16 = -_v11 * _v15 + 2 * _v11 * _v14 - _v11 * _v13,
        _v17 = (1 + _v11) * _v15 + (-1.5 - 2 * _v11) * _v14 + (-.5 + _v11) * _v13 + 1,
        _v18 = (-1 - _v12) * _v15 + (1.5 + _v12) * _v14 + .5 * _v13,
        _v19 = _v12 * _v15 - _v12 * _v14;
      for (let _v0 = 0; _v0 !== _v6; ++_v0) _v4[_v0] = _v16 * _v5[_v9 + _v0] + _v17 * _v5[_v8 + _v0] + _v18 * _v5[_v7 + _v0] + _v19 * _v5[_v10 + _v0];
      return _v4;
    }
  }
  class _v320 extends _v318 {
    constructor(_v0, _v1, _v2, _v3) {
      super(_v0, _v1, _v2, _v3);
    }
    interpolate_(_v0, _v1, _v2, _v3) {
      let _v4 = this.resultBuffer,
        _v5 = this.sampleValues,
        _v6 = this.valueSize,
        _v7 = _v0 * _v6,
        _v8 = _v7 - _v6,
        _v9 = (_v2 - _v1) / (_v3 - _v1),
        _v10 = 1 - _v9;
      for (let _v0 = 0; _v0 !== _v6; ++_v0) _v4[_v0] = _v5[_v8 + _v0] * _v10 + _v5[_v7 + _v0] * _v9;
      return _v4;
    }
  }
  class _v321 extends _v318 {
    constructor(_v0, _v1, _v2, _v3) {
      super(_v0, _v1, _v2, _v3);
    }
    interpolate_(_v0) {
      return this.copySampleValue_(_v0 - 1);
    }
  }
  class _v322 {
    constructor(_v0, _v1, _v2, _v3) {
      if (void 0 === _v0) throw Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === _v1 || 0 === _v1.length) throw Error("THREE.KeyframeTrack: no keyframes in track named " + _v0);
      this.name = _v0, this.times = _v317(_v1, this.TimeBufferType), this.values = _v317(_v2, this.ValueBufferType), this.setInterpolation(_v3 || this.DefaultInterpolation);
    }
    static toJSON(_v0) {
      let _v1,
        _v2 = _v0.constructor;
      if (_v2.toJSON !== this.toJSON) _v1 = _v2.toJSON(_v0);else {
        _v1 = {
          name: _v0.name,
          times: _v317(_v0.times, Array),
          values: _v317(_v0.values, Array)
        };
        let _v0 = _v0.getInterpolation();
        _v0 !== _v0.DefaultInterpolation && (_v1.interpolation = _v0);
      }
      return _v1.type = _v0.ValueTypeName, _v1;
    }
    InterpolantFactoryMethodDiscrete(_v0) {
      return new _v321(this.times, this.values, this.getValueSize(), _v0);
    }
    InterpolantFactoryMethodLinear(_v0) {
      return new _v320(this.times, this.values, this.getValueSize(), _v0);
    }
    InterpolantFactoryMethodSmooth(_v0) {
      return new _v319(this.times, this.values, this.getValueSize(), _v0);
    }
    setInterpolation(_v0) {
      let _v1;
      switch (_v0) {
        case 0:
          _v1 = this.InterpolantFactoryMethodDiscrete;
          break;
        case 0:
          _v1 = this.InterpolantFactoryMethodLinear;
          break;
        case 0:
          _v1 = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === _v1) {
        let _v0 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) if (_v0 !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);else throw Error(_v0);
        return console.warn("THREE.KeyframeTrack:", _v0), this;
      }
      return this.createInterpolant = _v1, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return 0;
        case this.InterpolantFactoryMethodLinear:
          return 0;
        case this.InterpolantFactoryMethodSmooth:
          return 0;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(_v0) {
      if (0 !== _v0) {
        let _v0 = this.times;
        for (let _v0 = 0, _v1 = _v0.length; _v0 !== _v1; ++_v0) _v0[_v0] += _v0;
      }
      return this;
    }
    scale(_v0) {
      if (1 !== _v0) {
        let _v0 = this.times;
        for (let _v0 = 0, _v1 = _v0.length; _v0 !== _v1; ++_v0) _v0[_v0] *= _v0;
      }
      return this;
    }
    trim(_v0, _v1) {
      let _v2 = this.times,
        _v3 = _v2.length,
        _v4 = 0,
        _v5 = _v3 - 1;
      for (; _v4 !== _v3 && _v2[_v4] < _v0;) ++_v4;
      for (; -1 !== _v5 && _v2[_v5] > _v1;) --_v5;
      if (++_v5, 0 !== _v4 || _v5 !== _v3) {
        _v4 >= _v5 && (_v4 = (_v5 = Math.max(_v5, 1)) - 1);
        let _v0 = this.getValueSize();
        this.times = _v2.slice(_v4, _v5), this.values = this.values.slice(_v4 * _v0, _v5 * _v0);
      }
      return this;
    }
    validate() {
      var _v0;
      let _v1 = !0,
        _v2 = this.getValueSize();
      _v2 - Math.floor(_v2) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), _v1 = !1);
      let _v3 = this.times,
        _v4 = this.values,
        _v5 = _v3.length;
      0 === _v5 && (console.error("THREE.KeyframeTrack: Track is empty.", this), _v1 = !1);
      let _v6 = null;
      for (let _v0 = 0; _v0 !== _v5; _v0++) {
        let _v0 = _v3[_v0];
        if ("number" == typeof _v0 && isNaN(_v0)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, _v0, _v0), _v1 = !1;
          break;
        }
        if (null !== _v6 && _v6 > _v0) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, _v0, _v0, _v6), _v1 = !1;
          break;
        }
        _v6 = _v0;
      }
      if (void 0 !== _v4 && ArrayBuffer.isView(_v0 = _v4) && !(_v0 instanceof DataView)) for (let _v0 = 0, _v1 = _v4.length; _v0 !== _v1; ++_v0) {
        let _v0 = _v4[_v0];
        if (isNaN(_v0)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, _v0, _v0), _v1 = !1;
          break;
        }
      }
      return _v1;
    }
    optimize() {
      let _v0 = this.times.slice(),
        _v1 = this.values.slice(),
        _v2 = this.getValueSize(),
        _v3 = 0 === this.getInterpolation(),
        _v4 = _v0.length - 1,
        _v5 = 1;
      for (let _v0 = 1; _v0 < _v4; ++_v0) {
        let _v0 = !1,
          _v1 = _v0[_v0];
        if (_v1 !== _v0[_v0 + 1] && (1 !== _v0 || _v1 !== _v0[0])) if (_v3) _v0 = !0;else {
          let _v0 = _v0 * _v2,
            _v1 = _v0 - _v2,
            _v2 = _v0 + _v2;
          for (let _v0 = 0; _v0 !== _v2; ++_v0) {
            let _v0 = _v1[_v0 + _v0];
            if (_v0 !== _v1[_v1 + _v0] || _v0 !== _v1[_v2 + _v0]) {
              _v0 = !0;
              break;
            }
          }
        }
        if (_v0) {
          if (_v0 !== _v5) {
            _v0[_v5] = _v0[_v0];
            let _v0 = _v0 * _v2,
              _v1 = _v5 * _v2;
            for (let _v0 = 0; _v0 !== _v2; ++_v0) _v1[_v1 + _v0] = _v1[_v0 + _v0];
          }
          ++_v5;
        }
      }
      if (_v4 > 0) {
        _v0[_v5] = _v0[_v4];
        for (let _v0 = _v4 * _v2, _v1 = _v5 * _v2, _v2 = 0; _v2 !== _v2; ++_v2) _v1[_v1 + _v2] = _v1[_v0 + _v2];
        ++_v5;
      }
      return _v5 !== _v0.length ? (this.times = _v0.slice(0, _v5), this.values = _v1.slice(0, _v5 * _v2)) : (this.times = _v0, this.values = _v1), this;
    }
    clone() {
      let _v0 = this.times.slice(),
        _v1 = this.values.slice(),
        _v2 = new this.constructor(this.name, _v0, _v1);
      return _v2.createInterpolant = this.createInterpolant, _v2;
    }
  }
  _v322.prototype.ValueTypeName = "", _v322.prototype.TimeBufferType = Float32Array, _v322.prototype.ValueBufferType = Float32Array, _v322.prototype.DefaultInterpolation = 0;
  class _v323 extends _v322 {
    constructor(_v0, _v1, _v2) {
      super(_v0, _v1, _v2);
    }
  }
  _v323.prototype.ValueTypeName = "bool", _v323.prototype.ValueBufferType = Array, _v323.prototype.DefaultInterpolation = 0, _v323.prototype.InterpolantFactoryMethodLinear = void 0, _v323.prototype.InterpolantFactoryMethodSmooth = void 0, class extends _v322 {
    constructor(_v0, _v1, _v2, _v3) {
      super(_v0, _v1, _v2, _v3);
    }
  }.prototype.ValueTypeName = "color", class extends _v322 {
    constructor(_v0, _v1, _v2, _v3) {
      super(_v0, _v1, _v2, _v3);
    }
  }.prototype.ValueTypeName = "number";
  class _v324 extends _v318 {
    constructor(_v0, _v1, _v2, _v3) {
      super(_v0, _v1, _v2, _v3);
    }
    interpolate_(_v0, _v1, _v2, _v3) {
      let _v4 = this.resultBuffer,
        _v5 = this.sampleValues,
        _v6 = this.valueSize,
        _v7 = (_v2 - _v1) / (_v3 - _v1),
        _v8 = _v0 * _v6;
      for (let _v0 = _v8 + _v6; _v8 !== _v0; _v8 += 4) _v140.slerpFlat(_v4, 0, _v5, _v8 - _v6, _v5, _v8, _v7);
      return _v4;
    }
  }
  class _v325 extends _v322 {
    constructor(_v0, _v1, _v2, _v3) {
      super(_v0, _v1, _v2, _v3);
    }
    InterpolantFactoryMethodLinear(_v0) {
      return new _v324(this.times, this.values, this.getValueSize(), _v0);
    }
  }
  _v325.prototype.ValueTypeName = "quaternion", _v325.prototype.InterpolantFactoryMethodSmooth = void 0;
  class _v326 extends _v322 {
    constructor(_v0, _v1, _v2) {
      super(_v0, _v1, _v2);
    }
  }
  _v326.prototype.ValueTypeName = "string", _v326.prototype.ValueBufferType = Array, _v326.prototype.DefaultInterpolation = 0, _v326.prototype.InterpolantFactoryMethodLinear = void 0, _v326.prototype.InterpolantFactoryMethodSmooth = void 0, class extends _v322 {
    constructor(_v0, _v1, _v2, _v3) {
      super(_v0, _v1, _v2, _v3);
    }
  }.prototype.ValueTypeName = "vector";
  let _v327 = {
      enabled: !1,
      files: {},
      add: function (_v0, _v1) {
        !1 !== this.enabled && (this.files[_v0] = _v1);
      },
      get: function (_v0) {
        if (!1 !== this.enabled) return this.files[_v0];
      },
      remove: function (_v0) {
        delete this.files[_v0];
      },
      clear: function () {
        this.files = {};
      }
    },
    _v328 = new class {
      constructor(_v0, _v1, _v2) {
        let _v3;
        const _v4 = this;
        let _v5 = !1,
          _v6 = 0,
          _v7 = 0;
        const _v8 = [];
        this.onStart = void 0, this.onLoad = _v0, this.onProgress = _v1, this.onError = _v2, this.abortController = new AbortController(), this.itemStart = function (_v0) {
          _v7++, !1 === _v5 && void 0 !== _v4.onStart && _v4.onStart(_v0, _v6, _v7), _v5 = !0;
        }, this.itemEnd = function (_v0) {
          _v6++, void 0 !== _v4.onProgress && _v4.onProgress(_v0, _v6, _v7), _v6 === _v7 && (_v5 = !1, void 0 !== _v4.onLoad && _v4.onLoad());
        }, this.itemError = function (_v0) {
          void 0 !== _v4.onError && _v4.onError(_v0);
        }, this.resolveURL = function (_v0) {
          return _v3 ? _v3(_v0) : _v0;
        }, this.setURLModifier = function (_v0) {
          return _v3 = _v0, this;
        }, this.addHandler = function (_v0, _v1) {
          return _v8.push(_v0, _v1), this;
        }, this.removeHandler = function (_v0) {
          let _v1 = _v8.indexOf(_v0);
          return -1 !== _v1 && _v8.splice(_v1, 2), this;
        }, this.getHandler = function (_v0) {
          for (let _v0 = 0, _v1 = _v8.length; _v0 < _v1; _v0 += 2) {
            let _v0 = _v8[_v0],
              _v1 = _v8[_v0 + 1];
            if (_v0.global && (_v0.lastIndex = 0), _v0.test(_v0)) return _v1;
          }
          return null;
        }, this.abort = function () {
          return this.abortController.abort(), this.abortController = new AbortController(), this;
        };
      }
    }();
  class _v329 {
    constructor(_v0) {
      this.manager = void 0 !== _v0 ? _v0 : _v328, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {}
    loadAsync(_v0, _v1) {
      let _v2 = this;
      return new Promise(function (_v0, _v1) {
        _v2.load(_v0, _v0, _v1, _v1);
      });
    }
    parse() {}
    setCrossOrigin(_v0) {
      return this.crossOrigin = _v0, this;
    }
    setWithCredentials(_v0) {
      return this.withCredentials = _v0, this;
    }
    setPath(_v0) {
      return this.path = _v0, this;
    }
    setResourcePath(_v0) {
      return this.resourcePath = _v0, this;
    }
    setRequestHeader(_v0) {
      return this.requestHeader = _v0, this;
    }
    abort() {
      return this;
    }
  }
  _v329.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  let _v330 = new WeakMap();
  class _v331 extends _v329 {
    constructor(_v0) {
      super(_v0);
    }
    load(_v0, _v1, _v2, _v3) {
      void 0 !== this.path && (_v0 = this.path + _v0), _v0 = this.manager.resolveURL(_v0);
      let _v4 = this,
        _v5 = _v327.get(`image:${_v0}`);
      if (void 0 !== _v5) {
        if (!0 === _v5.complete) _v4.manager.itemStart(_v0), setTimeout(function () {
          _v1 && _v1(_v5), _v4.manager.itemEnd(_v0);
        }, 0);else {
          let _v0 = _v330.get(_v5);
          void 0 === _v0 && (_v0 = [], _v330.set(_v5, _v0)), _v0.push({
            onLoad: _v1,
            onError: _v3
          });
        }
        return _v5;
      }
      let _v6 = _v147("img");
      function _v7() {
        _v9(), _v1 && _v1(this);
        let _v0 = _v330.get(this) || [];
        for (let _v0 = 0; _v0 < _v0.length; _v0++) {
          let _v0 = _v0[_v0];
          _v0.onLoad && _v0.onLoad(this);
        }
        _v330.delete(this), _v4.manager.itemEnd(_v0);
      }
      function _v8(_v0) {
        _v9(), _v3 && _v3(_v0), _v327.remove(`image:${_v0}`);
        let _v1 = _v330.get(this) || [];
        for (let _v0 = 0; _v0 < _v1.length; _v0++) {
          let _v0 = _v1[_v0];
          _v0.onError && _v0.onError(_v0);
        }
        _v330.delete(this), _v4.manager.itemError(_v0), _v4.manager.itemEnd(_v0);
      }
      function _v9() {
        _v6.removeEventListener("load", _v7, !1), _v6.removeEventListener("error", _v8, !1);
      }
      return _v6.addEventListener("load", _v7, !1), _v6.addEventListener("error", _v8, !1), "data:" !== _v0.slice(0, 5) && void 0 !== this.crossOrigin && (_v6.crossOrigin = this.crossOrigin), _v327.add(`image:${_v0}`, _v6), _v4.manager.itemStart(_v0), _v6.src = _v0, _v6;
    }
  }
  class _v332 extends _v329 {
    constructor(_v0) {
      super(_v0);
    }
    load(_v0, _v1, _v2, _v3) {
      let _v4 = new _v161(),
        _v5 = new _v331(this.manager);
      return _v5.setCrossOrigin(this.crossOrigin), _v5.setPath(this.path), _v5.load(_v0, function (_v0) {
        _v4.image = _v0, _v4.needsUpdate = !0, void 0 !== _v1 && _v1(_v4);
      }, _v2, _v3), _v4;
    }
  }
  new WeakMap();
  class _v333 extends _v280 {
    constructor(_v0 = []) {
      super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = _v0;
    }
  }
  let _v334 = "\\[\\]\\.:\\/",
    _v335 = RegExp("[" + _v334 + "]", "g"),
    _v336 = "[^" + _v334 + "]",
    _v337 = "[^" + _v334.replace("\\.", "") + "]",
    _v338 = RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", _v336) + /(WCOD+)?/.source.replace("WCOD", _v337) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _v336) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _v336) + "$"),
    _v339 = ["material", "materials", "bones", "map"];
  class _v340 {
    constructor(_v0, _v1, _v2) {
      this.path = _v1, this.parsedPath = _v2 || _v340.parseTrackName(_v1), this.node = _v340.findNode(_v0, this.parsedPath.nodeName), this.rootNode = _v0, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(_v0, _v1, _v2) {
      return _v0 && _v0.isAnimationObjectGroup ? new _v340.Composite(_v0, _v1, _v2) : new _v340(_v0, _v1, _v2);
    }
    static sanitizeNodeName(_v0) {
      return _v0.replace(/\s/g, "_").replace(_v335, "");
    }
    static parseTrackName(_v0) {
      let _v1 = _v338.exec(_v0);
      if (null === _v1) throw Error("PropertyBinding: Cannot parse trackName: " + _v0);
      let _v2 = {
          nodeName: _v1[2],
          objectName: _v1[3],
          objectIndex: _v1[4],
          propertyName: _v1[5],
          propertyIndex: _v1[6]
        },
        _v3 = _v2.nodeName && _v2.nodeName.lastIndexOf(".");
      if (void 0 !== _v3 && -1 !== _v3) {
        let _v0 = _v2.nodeName.substring(_v3 + 1);
        -1 !== _v339.indexOf(_v0) && (_v2.nodeName = _v2.nodeName.substring(0, _v3), _v2.objectName = _v0);
      }
      if (null === _v2.propertyName || 0 === _v2.propertyName.length) throw Error("PropertyBinding: can not parse propertyName from trackName: " + _v0);
      return _v2;
    }
    static findNode(_v0, _v1) {
      if (void 0 === _v1 || "" === _v1 || "." === _v1 || -1 === _v1 || _v1 === _v0.name || _v1 === _v0.uuid) return _v0;
      if (_v0.skeleton) {
        let _v0 = _v0.skeleton.getBoneByName(_v1);
        if (void 0 !== _v0) return _v0;
      }
      if (_v0.children) {
        let _v0 = function (_v0) {
            for (let _v0 = 0; _v0 < _v0.length; _v0++) {
              let _v0 = _v0[_v0];
              if (_v0.name === _v1 || _v0.uuid === _v1) return _v0;
              let _v1 = _v0(_v0.children);
              if (_v1) return _v1;
            }
            return null;
          },
          _v1 = _v0(_v0.children);
        if (_v1) return _v1;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(_v0, _v1) {
      _v0[_v1] = this.targetObject[this.propertyName];
    }
    _getValue_array(_v0, _v1) {
      let _v2 = this.resolvedProperty;
      for (let _v0 = 0, _v1 = _v2.length; _v0 !== _v1; ++_v0) _v0[_v1++] = _v2[_v0];
    }
    _getValue_arrayElement(_v0, _v1) {
      _v0[_v1] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(_v0, _v1) {
      this.resolvedProperty.toArray(_v0, _v1);
    }
    _setValue_direct(_v0, _v1) {
      this.targetObject[this.propertyName] = _v0[_v1];
    }
    _setValue_direct_setNeedsUpdate(_v0, _v1) {
      this.targetObject[this.propertyName] = _v0[_v1], this.targetObject.needsUpdate = !0;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(_v0, _v1) {
      this.targetObject[this.propertyName] = _v0[_v1], this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_array(_v0, _v1) {
      let _v2 = this.resolvedProperty;
      for (let _v0 = 0, _v1 = _v2.length; _v0 !== _v1; ++_v0) _v2[_v0] = _v0[_v1++];
    }
    _setValue_array_setNeedsUpdate(_v0, _v1) {
      let _v2 = this.resolvedProperty;
      for (let _v0 = 0, _v1 = _v2.length; _v0 !== _v1; ++_v0) _v2[_v0] = _v0[_v1++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(_v0, _v1) {
      let _v2 = this.resolvedProperty;
      for (let _v0 = 0, _v1 = _v2.length; _v0 !== _v1; ++_v0) _v2[_v0] = _v0[_v1++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(_v0, _v1) {
      this.resolvedProperty[this.propertyIndex] = _v0[_v1];
    }
    _setValue_arrayElement_setNeedsUpdate(_v0, _v1) {
      this.resolvedProperty[this.propertyIndex] = _v0[_v1], this.targetObject.needsUpdate = !0;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(_v0, _v1) {
      this.resolvedProperty[this.propertyIndex] = _v0[_v1], this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_fromArray(_v0, _v1) {
      this.resolvedProperty.fromArray(_v0, _v1);
    }
    _setValue_fromArray_setNeedsUpdate(_v0, _v1) {
      this.resolvedProperty.fromArray(_v0, _v1), this.targetObject.needsUpdate = !0;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(_v0, _v1) {
      this.resolvedProperty.fromArray(_v0, _v1), this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _getValue_unbound(_v0, _v1) {
      this.bind(), this.getValue(_v0, _v1);
    }
    _setValue_unbound(_v0, _v1) {
      this.bind(), this.setValue(_v0, _v1);
    }
    bind() {
      let _v0 = this.node,
        _v1 = this.parsedPath,
        _v2 = _v1.objectName,
        _v3 = _v1.propertyName,
        _v4 = _v1.propertyIndex;
      if (_v0 || (_v0 = _v340.findNode(this.rootNode, _v1.nodeName), this.node = _v0), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !_v0) return void console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      if (_v2) {
        let _v0 = _v1.objectIndex;
        switch (_v2) {
          case "materials":
            if (!_v0.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!_v0.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            _v0 = _v0.material.materials;
            break;
          case "bones":
            if (!_v0.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            _v0 = _v0.skeleton.bones;
            for (let _v0 = 0; _v0 < _v0.length; _v0++) if (_v0[_v0].name === _v0) {
              _v0 = _v0;
              break;
            }
            break;
          case "map":
            if ("map" in _v0) {
              _v0 = _v0.map;
              break;
            }
            if (!_v0.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!_v0.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            _v0 = _v0.material.map;
            break;
          default:
            if (void 0 === _v0[_v2]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            _v0 = _v0[_v2];
        }
        if (void 0 !== _v0) {
          if (void 0 === _v0[_v0]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, _v0);
          _v0 = _v0[_v0];
        }
      }
      let _v5 = _v0[_v3];
      if (void 0 === _v5) return void console.error("THREE.PropertyBinding: Trying to update property for track: " + _v1.nodeName + "." + _v3 + " but it wasn't found.", _v0);
      let _v6 = this.Versioning.None;
      this.targetObject = _v0, !0 === _v0.isMaterial ? _v6 = this.Versioning.NeedsUpdate : !0 === _v0.isObject3D && (_v6 = this.Versioning.MatrixWorldNeedsUpdate);
      let _v7 = this.BindingType.Direct;
      if (void 0 !== _v4) {
        if ("morphTargetInfluences" === _v3) {
          if (!_v0.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          if (!_v0.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          void 0 !== _v0.morphTargetDictionary[_v4] && (_v4 = _v0.morphTargetDictionary[_v4]);
        }
        _v7 = this.BindingType.ArrayElement, this.resolvedProperty = _v5, this.propertyIndex = _v4;
      } else void 0 !== _v5.fromArray && void 0 !== _v5.toArray ? (_v7 = this.BindingType.HasFromToArray, this.resolvedProperty = _v5) : Array.isArray(_v5) ? (_v7 = this.BindingType.EntireArray, this.resolvedProperty = _v5) : this.propertyName = _v3;
      this.getValue = this.GetterByBindingType[_v7], this.setValue = this.SetterByBindingTypeAndVersioning[_v7][_v6];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  }
  function _v341(_v0, _v1, _v2, _v3) {
    let _v4 = function (_v0) {
      switch (_v0) {
        case 0:
        case 0:
          return {
            byteLength: 1,
            components: 1
          };
        case 0:
        case 0:
        case 0:
          return {
            byteLength: 2,
            components: 1
          };
        case 0:
        case 0:
          return {
            byteLength: 2,
            components: 4
          };
        case 0:
        case 0:
        case 0:
          return {
            byteLength: 4,
            components: 1
          };
        case 0:
        case 0:
          return {
            byteLength: 4,
            components: 3
          };
      }
      throw Error(`Unknown texture type ${_v0}.`);
    }(_v3);
    switch (_v2) {
      case 0:
        return _v0 * _v1;
      case 0:
      case 0:
        return _v0 * _v1 / _v4.components * _v4.byteLength;
      case 0:
      case 0:
        return _v0 * _v1 * 2 / _v4.components * _v4.byteLength;
      case 0:
        return _v0 * _v1 * 3 / _v4.components * _v4.byteLength;
      case 0:
      case 0:
        return _v0 * _v1 * 4 / _v4.components * _v4.byteLength;
      case 0:
      case 0:
      case 0:
      case 0:
        return Math.floor((_v0 + 3) / 4) * Math.floor((_v1 + 3) / 4) * 8;
      case 0:
      case 0:
      case 0:
      case 0:
        return Math.floor((_v0 + 3) / 4) * Math.floor((_v1 + 3) / 4) * 16;
      case 0:
      case 0:
        return Math.max(_v0, 16) * Math.max(_v1, 8) / 4;
      case 0:
      case 0:
        return Math.max(_v0, 8) * Math.max(_v1, 8) / 2;
      case 0:
        return Math.floor((_v0 + 4) / 5) * Math.floor((_v1 + 3) / 4) * 16;
      case 0:
        return Math.floor((_v0 + 4) / 5) * Math.floor((_v1 + 4) / 5) * 16;
      case 0:
        return Math.floor((_v0 + 5) / 6) * Math.floor((_v1 + 4) / 5) * 16;
      case 0:
        return Math.floor((_v0 + 5) / 6) * Math.floor((_v1 + 5) / 6) * 16;
      case 0:
        return Math.floor((_v0 + 7) / 8) * Math.floor((_v1 + 4) / 5) * 16;
      case 0:
        return Math.floor((_v0 + 7) / 8) * Math.floor((_v1 + 5) / 6) * 16;
      case 0:
        return Math.floor((_v0 + 7) / 8) * Math.floor((_v1 + 7) / 8) * 16;
      case 0:
        return Math.floor((_v0 + 9) / 10) * Math.floor((_v1 + 4) / 5) * 16;
      case 0:
        return Math.floor((_v0 + 9) / 10) * Math.floor((_v1 + 5) / 6) * 16;
      case 0:
        return Math.floor((_v0 + 9) / 10) * Math.floor((_v1 + 7) / 8) * 16;
      case 0:
        return Math.floor((_v0 + 9) / 10) * Math.floor((_v1 + 9) / 10) * 16;
      case 0:
        return Math.floor((_v0 + 11) / 12) * Math.floor((_v1 + 9) / 10) * 16;
      case 0:
        return Math.floor((_v0 + 11) / 12) * Math.floor((_v1 + 11) / 12) * 16;
      case 0:
      case 0:
      case 0:
      case 0:
      case 0:
        return Math.ceil(_v0 / 4) * Math.ceil(_v1 / 4) * 16;
      case 0:
      case 0:
        return Math.ceil(_v0 / 4) * Math.ceil(_v1 / 4) * 8;
    }
    throw Error(`Unable to determine texture byte length for ${_v2} format.`);
  }
  function _v342() {
    let _v0 = null,
      _v1 = !1,
      _v2 = null,
      _v3 = null;
    function _v4(_v0, _v1) {
      _v2(_v0, _v1), _v3 = _v0.requestAnimationFrame(_v4);
    }
    return {
      start: function () {
        !0 === _v1 || null !== _v2 && (_v3 = _v0.requestAnimationFrame(_v4), _v1 = !0);
      },
      stop: function () {
        _v0.cancelAnimationFrame(_v3), _v1 = !1;
      },
      setAnimationLoop: function (_v0) {
        _v2 = _v0;
      },
      setContext: function (_v0) {
        _v0 = _v0;
      }
    };
  }
  function _v343(_v0) {
    let _v1 = new WeakMap();
    return {
      get: function (_v0) {
        return _v0.isInterleavedBufferAttribute && (_v0 = _v0.data), _v1.get(_v0);
      },
      remove: function (_v0) {
        _v0.isInterleavedBufferAttribute && (_v0 = _v0.data);
        let _v1 = _v1.get(_v0);
        _v1 && (_v0.deleteBuffer(_v1.buffer), _v1.delete(_v0));
      },
      update: function (_v0, _v1) {
        if (_v0.isInterleavedBufferAttribute && (_v0 = _v0.data), _v0.isGLBufferAttribute) {
          let _v0 = _v1.get(_v0);
          (!_v0 || _v0.version < _v0.version) && _v1.set(_v0, {
            buffer: _v0.buffer,
            type: _v0.type,
            bytesPerElement: _v0.elementSize,
            version: _v0.version
          });
          return;
        }
        let _v2 = _v1.get(_v0);
        if (void 0 === _v2) _v1.set(_v0, function (_v0, _v1) {
          let _v2,
            _v3 = _v0.array,
            _v4 = _v0.usage,
            _v5 = _v3.byteLength,
            _v6 = _v0.createBuffer();
          if (_v0.bindBuffer(_v1, _v6), _v0.bufferData(_v1, _v3, _v4), _v0.onUploadCallback(), _v3 instanceof Float32Array) _v2 = _v0.FLOAT;else if ("u" > typeof Float16Array && _v3 instanceof Float16Array) _v2 = _v0.HALF_FLOAT;else if (_v3 instanceof Uint16Array) _v2 = _v0.isFloat16BufferAttribute ? _v0.HALF_FLOAT : _v0.UNSIGNED_SHORT;else if (_v3 instanceof Int16Array) _v2 = _v0.SHORT;else if (_v3 instanceof Uint32Array) _v2 = _v0.UNSIGNED_INT;else if (_v3 instanceof Int32Array) _v2 = _v0.INT;else if (_v3 instanceof Int8Array) _v2 = _v0.BYTE;else if (_v3 instanceof Uint8Array) _v2 = _v0.UNSIGNED_BYTE;else if (_v3 instanceof Uint8ClampedArray) _v2 = _v0.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + _v3);
          return {
            buffer: _v6,
            type: _v2,
            bytesPerElement: _v3.BYTES_PER_ELEMENT,
            version: _v0.version,
            size: _v5
          };
        }(_v0, _v1));else if (_v2.version < _v0.version) {
          if (_v2.size !== _v0.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
          !function (_v0, _v1, _v2) {
            let _v3 = _v1.array,
              _v4 = _v1.updateRanges;
            if (_v0.bindBuffer(_v2, _v0), 0 === _v4.length) _v0.bufferSubData(_v2, 0, _v3);else {
              _v4.sort((_v0, _v1) => _v0.start - _v1.start);
              let _v0 = 0;
              for (let _v0 = 1; _v0 < _v4.length; _v0++) {
                let _v0 = _v4[_v0],
                  _v1 = _v4[_v0];
                _v1.start <= _v0.start + _v0.count + 1 ? _v0.count = Math.max(_v0.count, _v1.start + _v1.count - _v0.start) : _v4[++_v0] = _v1;
              }
              _v4.length = _v0 + 1;
              for (let _v0 = 0, _v1 = _v4.length; _v0 < _v1; _v0++) {
                let _v0 = _v4[_v0];
                _v0.bufferSubData(_v2, _v0.start * _v3.BYTES_PER_ELEMENT, _v3, _v0.start, _v0.count);
              }
              _v1.clearUpdateRanges();
            }
            _v1.onUploadCallback();
          }(_v2.buffer, _v0, _v1), _v2.version = _v0.version;
        }
      }
    };
  }
  _v340.Composite = class {
    constructor(_v0, _v1, _v2) {
      const _v3 = _v2 || _v340.parseTrackName(_v1);
      this._targetGroup = _v0, this._bindings = _v0.subscribe_(_v1, _v3);
    }
    getValue(_v0, _v1) {
      this.bind();
      let _v2 = this._targetGroup.nCachedObjects_,
        _v3 = this._bindings[_v2];
      void 0 !== _v3 && _v3.getValue(_v0, _v1);
    }
    setValue(_v0, _v1) {
      let _v2 = this._bindings;
      for (let _v0 = this._targetGroup.nCachedObjects_, _v1 = _v2.length; _v0 !== _v1; ++_v0) _v2[_v0].setValue(_v0, _v1);
    }
    bind() {
      let _v0 = this._bindings;
      for (let _v0 = this._targetGroup.nCachedObjects_, _v1 = _v0.length; _v0 !== _v1; ++_v0) _v0[_v0].bind();
    }
    unbind() {
      let _v0 = this._bindings;
      for (let _v0 = this._targetGroup.nCachedObjects_, _v1 = _v0.length; _v0 !== _v1; ++_v0) _v0[_v0].unbind();
    }
  }, _v340.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  }, _v340.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  }, _v340.prototype.GetterByBindingType = [_v340.prototype._getValue_direct, _v340.prototype._getValue_array, _v340.prototype._getValue_arrayElement, _v340.prototype._getValue_toArray], _v340.prototype.SetterByBindingTypeAndVersioning = [[_v340.prototype._setValue_direct, _v340.prototype._setValue_direct_setNeedsUpdate, _v340.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [_v340.prototype._setValue_array, _v340.prototype._setValue_array_setNeedsUpdate, _v340.prototype._setValue_array_setMatrixWorldNeedsUpdate], [_v340.prototype._setValue_arrayElement, _v340.prototype._setValue_arrayElement_setNeedsUpdate, _v340.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [_v340.prototype._setValue_fromArray, _v340.prototype._setValue_fromArray_setNeedsUpdate, _v340.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]], new Float32Array(1), "u" > typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: "180"
    }
  })), "u" > typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "180");
  let _v344 = {
      alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
      alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
      alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
      alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
      alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
      alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
      aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
      aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
      batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n	}\n#endif",
      batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
      begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
      beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
      bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
      iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
      bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
      clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
      clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
      clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
      clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
      color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
      color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec3 vColor;\n#endif",
      color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n	vColor.xyz *= batchingColor.xyz;\n#endif",
      common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
      cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
      defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
      displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
      displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
      emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
      emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
      colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
      colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
      envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
      envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
      envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
      envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
      envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif",
      envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
      fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
      fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
      fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
      gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
      lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
      lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
      lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
      lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
      lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
      lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
      lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
      lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
      lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
      lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
      lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
      lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
      lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
      logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
      logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
      logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
      map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
      map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
      map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
      map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
      metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
      metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
      morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
      morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
      morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
      morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
      morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
      normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
      normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
      normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
      normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
      normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
      normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
      clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
      clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
      clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
      iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
      opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
      packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}",
      premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
      project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
      dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
      dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
      roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
      roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );\n		#ifdef USE_REVERSED_DEPTH_BUFFER\n			return step( depth, compare );\n		#else\n			return step( compare, depth );\n		#endif\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		#ifdef USE_REVERSED_DEPTH_BUFFER\n			float hard_shadow = step( distribution.x, compare );\n		#else\n			float hard_shadow = step( compare, distribution.x );\n		#endif\n		if ( hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		\n		float lightToPositionLength = length( lightToPosition );\n		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n				shadow = (\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n				) * ( 1.0 / 9.0 );\n			#else\n				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n			#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n#endif",
      shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
      shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
      shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
      skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
      skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
      skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
      specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
      specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
      tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
      tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
      transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
      transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
      uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
      uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
      uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
      worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
      background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
      background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
      backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
      backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
      cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
      cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
      depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
      depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
      distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
      distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
      equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
      equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
      linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
      linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
      meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
      meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
      meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
      meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
      meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
      meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
      meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
      meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
      meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
      meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
      meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
      meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
      meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
      meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
      points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
      points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
      shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
      shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}",
      sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
      sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
    },
    _v345 = {
      common: {
        diffuse: {
          value: new _v238(0)
        },
        opacity: {
          value: 1
        },
        map: {
          value: null
        },
        mapTransform: {
          value: new _v144()
        },
        alphaMap: {
          value: null
        },
        alphaMapTransform: {
          value: new _v144()
        },
        alphaTest: {
          value: 0
        }
      },
      specularmap: {
        specularMap: {
          value: null
        },
        specularMapTransform: {
          value: new _v144()
        }
      },
      envmap: {
        envMap: {
          value: null
        },
        envMapRotation: {
          value: new _v144()
        },
        flipEnvMap: {
          value: -1
        },
        reflectivity: {
          value: 1
        },
        ior: {
          value: 1.5
        },
        refractionRatio: {
          value: .98
        }
      },
      aomap: {
        aoMap: {
          value: null
        },
        aoMapIntensity: {
          value: 1
        },
        aoMapTransform: {
          value: new _v144()
        }
      },
      lightmap: {
        lightMap: {
          value: null
        },
        lightMapIntensity: {
          value: 1
        },
        lightMapTransform: {
          value: new _v144()
        }
      },
      bumpmap: {
        bumpMap: {
          value: null
        },
        bumpMapTransform: {
          value: new _v144()
        },
        bumpScale: {
          value: 1
        }
      },
      normalmap: {
        normalMap: {
          value: null
        },
        normalMapTransform: {
          value: new _v144()
        },
        normalScale: {
          value: new _v139(1, 1)
        }
      },
      displacementmap: {
        displacementMap: {
          value: null
        },
        displacementMapTransform: {
          value: new _v144()
        },
        displacementScale: {
          value: 1
        },
        displacementBias: {
          value: 0
        }
      },
      emissivemap: {
        emissiveMap: {
          value: null
        },
        emissiveMapTransform: {
          value: new _v144()
        }
      },
      metalnessmap: {
        metalnessMap: {
          value: null
        },
        metalnessMapTransform: {
          value: new _v144()
        }
      },
      roughnessmap: {
        roughnessMap: {
          value: null
        },
        roughnessMapTransform: {
          value: new _v144()
        }
      },
      gradientmap: {
        gradientMap: {
          value: null
        }
      },
      fog: {
        fogDensity: {
          value: 25e-5
        },
        fogNear: {
          value: 1
        },
        fogFar: {
          value: 0
        },
        fogColor: {
          value: new _v238(0)
        }
      },
      lights: {
        ambientLightColor: {
          value: []
        },
        lightProbe: {
          value: []
        },
        directionalLights: {
          value: [],
          properties: {
            direction: {},
            color: {}
          }
        },
        directionalLightShadows: {
          value: [],
          properties: {
            shadowIntensity: 1,
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        directionalShadowMap: {
          value: []
        },
        directionalShadowMatrix: {
          value: []
        },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {}
          }
        },
        spotLightShadows: {
          value: [],
          properties: {
            shadowIntensity: 1,
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        spotLightMap: {
          value: []
        },
        spotShadowMap: {
          value: []
        },
        spotLightMatrix: {
          value: []
        },
        pointLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            decay: {},
            distance: {}
          }
        },
        pointLightShadows: {
          value: [],
          properties: {
            shadowIntensity: 1,
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {}
          }
        },
        pointShadowMap: {
          value: []
        },
        pointShadowMatrix: {
          value: []
        },
        hemisphereLights: {
          value: [],
          properties: {
            direction: {},
            skyColor: {},
            groundColor: {}
          }
        },
        rectAreaLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            width: {},
            height: {}
          }
        },
        ltc_1: {
          value: null
        },
        ltc_2: {
          value: null
        }
      },
      points: {
        diffuse: {
          value: new _v238(0)
        },
        opacity: {
          value: 1
        },
        size: {
          value: 1
        },
        scale: {
          value: 1
        },
        map: {
          value: null
        },
        alphaMap: {
          value: null
        },
        alphaMapTransform: {
          value: new _v144()
        },
        alphaTest: {
          value: 0
        },
        uvTransform: {
          value: new _v144()
        }
      },
      sprite: {
        diffuse: {
          value: new _v238(0)
        },
        opacity: {
          value: 1
        },
        center: {
          value: new _v139(.5, .5)
        },
        rotation: {
          value: 0
        },
        map: {
          value: null
        },
        mapTransform: {
          value: new _v144()
        },
        alphaMap: {
          value: null
        },
        alphaMapTransform: {
          value: new _v144()
        },
        alphaTest: {
          value: 0
        }
      }
    },
    _v346 = {
      basic: {
        uniforms: _v273([_v345.common, _v345.specularmap, _v345.envmap, _v345.aomap, _v345.lightmap, _v345.fog]),
        vertexShader: _v344.meshbasic_vert,
        fragmentShader: _v344.meshbasic_frag
      },
      lambert: {
        uniforms: _v273([_v345.common, _v345.specularmap, _v345.envmap, _v345.aomap, _v345.lightmap, _v345.emissivemap, _v345.bumpmap, _v345.normalmap, _v345.displacementmap, _v345.fog, _v345.lights, {
          emissive: {
            value: new _v238(0)
          }
        }]),
        vertexShader: _v344.meshlambert_vert,
        fragmentShader: _v344.meshlambert_frag
      },
      phong: {
        uniforms: _v273([_v345.common, _v345.specularmap, _v345.envmap, _v345.aomap, _v345.lightmap, _v345.emissivemap, _v345.bumpmap, _v345.normalmap, _v345.displacementmap, _v345.fog, _v345.lights, {
          emissive: {
            value: new _v238(0)
          },
          specular: {
            value: new _v238(0)
          },
          shininess: {
            value: 30
          }
        }]),
        vertexShader: _v344.meshphong_vert,
        fragmentShader: _v344.meshphong_frag
      },
      standard: {
        uniforms: _v273([_v345.common, _v345.envmap, _v345.aomap, _v345.lightmap, _v345.emissivemap, _v345.bumpmap, _v345.normalmap, _v345.displacementmap, _v345.roughnessmap, _v345.metalnessmap, _v345.fog, _v345.lights, {
          emissive: {
            value: new _v238(0)
          },
          roughness: {
            value: 1
          },
          metalness: {
            value: 0
          },
          envMapIntensity: {
            value: 1
          }
        }]),
        vertexShader: _v344.meshphysical_vert,
        fragmentShader: _v344.meshphysical_frag
      },
      toon: {
        uniforms: _v273([_v345.common, _v345.aomap, _v345.lightmap, _v345.emissivemap, _v345.bumpmap, _v345.normalmap, _v345.displacementmap, _v345.gradientmap, _v345.fog, _v345.lights, {
          emissive: {
            value: new _v238(0)
          }
        }]),
        vertexShader: _v344.meshtoon_vert,
        fragmentShader: _v344.meshtoon_frag
      },
      matcap: {
        uniforms: _v273([_v345.common, _v345.bumpmap, _v345.normalmap, _v345.displacementmap, _v345.fog, {
          matcap: {
            value: null
          }
        }]),
        vertexShader: _v344.meshmatcap_vert,
        fragmentShader: _v344.meshmatcap_frag
      },
      points: {
        uniforms: _v273([_v345.points, _v345.fog]),
        vertexShader: _v344.points_vert,
        fragmentShader: _v344.points_frag
      },
      dashed: {
        uniforms: _v273([_v345.common, _v345.fog, {
          scale: {
            value: 1
          },
          dashSize: {
            value: 1
          },
          totalSize: {
            value: 2
          }
        }]),
        vertexShader: _v344.linedashed_vert,
        fragmentShader: _v344.linedashed_frag
      },
      depth: {
        uniforms: _v273([_v345.common, _v345.displacementmap]),
        vertexShader: _v344.depth_vert,
        fragmentShader: _v344.depth_frag
      },
      normal: {
        uniforms: _v273([_v345.common, _v345.bumpmap, _v345.normalmap, _v345.displacementmap, {
          opacity: {
            value: 1
          }
        }]),
        vertexShader: _v344.meshnormal_vert,
        fragmentShader: _v344.meshnormal_frag
      },
      sprite: {
        uniforms: _v273([_v345.sprite, _v345.fog]),
        vertexShader: _v344.sprite_vert,
        fragmentShader: _v344.sprite_frag
      },
      background: {
        uniforms: {
          uvTransform: {
            value: new _v144()
          },
          t2D: {
            value: null
          },
          backgroundIntensity: {
            value: 1
          }
        },
        vertexShader: _v344.background_vert,
        fragmentShader: _v344.background_frag
      },
      backgroundCube: {
        uniforms: {
          envMap: {
            value: null
          },
          flipEnvMap: {
            value: -1
          },
          backgroundBlurriness: {
            value: 0
          },
          backgroundIntensity: {
            value: 1
          },
          backgroundRotation: {
            value: new _v144()
          }
        },
        vertexShader: _v344.backgroundCube_vert,
        fragmentShader: _v344.backgroundCube_frag
      },
      cube: {
        uniforms: {
          tCube: {
            value: null
          },
          tFlip: {
            value: -1
          },
          opacity: {
            value: 1
          }
        },
        vertexShader: _v344.cube_vert,
        fragmentShader: _v344.cube_frag
      },
      equirect: {
        uniforms: {
          tEquirect: {
            value: null
          }
        },
        vertexShader: _v344.equirect_vert,
        fragmentShader: _v344.equirect_frag
      },
      distanceRGBA: {
        uniforms: _v273([_v345.common, _v345.displacementmap, {
          referencePosition: {
            value: new _v141()
          },
          nearDistance: {
            value: 1
          },
          farDistance: {
            value: 0
          }
        }]),
        vertexShader: _v344.distanceRGBA_vert,
        fragmentShader: _v344.distanceRGBA_frag
      },
      shadow: {
        uniforms: _v273([_v345.lights, _v345.fog, {
          color: {
            value: new _v238(0)
          },
          opacity: {
            value: 1
          }
        }]),
        vertexShader: _v344.shadow_vert,
        fragmentShader: _v344.shadow_frag
      }
    };
  _v346.physical = {
    uniforms: _v273([_v346.standard.uniforms, {
      clearcoat: {
        value: 0
      },
      clearcoatMap: {
        value: null
      },
      clearcoatMapTransform: {
        value: new _v144()
      },
      clearcoatNormalMap: {
        value: null
      },
      clearcoatNormalMapTransform: {
        value: new _v144()
      },
      clearcoatNormalScale: {
        value: new _v139(1, 1)
      },
      clearcoatRoughness: {
        value: 0
      },
      clearcoatRoughnessMap: {
        value: null
      },
      clearcoatRoughnessMapTransform: {
        value: new _v144()
      },
      dispersion: {
        value: 0
      },
      iridescence: {
        value: 0
      },
      iridescenceMap: {
        value: null
      },
      iridescenceMapTransform: {
        value: new _v144()
      },
      iridescenceIOR: {
        value: 1.3
      },
      iridescenceThicknessMinimum: {
        value: 100
      },
      iridescenceThicknessMaximum: {
        value: 400
      },
      iridescenceThicknessMap: {
        value: null
      },
      iridescenceThicknessMapTransform: {
        value: new _v144()
      },
      sheen: {
        value: 0
      },
      sheenColor: {
        value: new _v238(0)
      },
      sheenColorMap: {
        value: null
      },
      sheenColorMapTransform: {
        value: new _v144()
      },
      sheenRoughness: {
        value: 1
      },
      sheenRoughnessMap: {
        value: null
      },
      sheenRoughnessMapTransform: {
        value: new _v144()
      },
      transmission: {
        value: 0
      },
      transmissionMap: {
        value: null
      },
      transmissionMapTransform: {
        value: new _v144()
      },
      transmissionSamplerSize: {
        value: new _v139()
      },
      transmissionSamplerMap: {
        value: null
      },
      thickness: {
        value: 0
      },
      thicknessMap: {
        value: null
      },
      thicknessMapTransform: {
        value: new _v144()
      },
      attenuationDistance: {
        value: 0
      },
      attenuationColor: {
        value: new _v238(0)
      },
      specularColor: {
        value: new _v238(1, 1, 1)
      },
      specularColorMap: {
        value: null
      },
      specularColorMapTransform: {
        value: new _v144()
      },
      specularIntensity: {
        value: 1
      },
      specularIntensityMap: {
        value: null
      },
      specularIntensityMapTransform: {
        value: new _v144()
      },
      anisotropyVector: {
        value: new _v139()
      },
      anisotropyMap: {
        value: null
      },
      anisotropyMapTransform: {
        value: new _v144()
      }
    }]),
    vertexShader: _v344.meshphysical_vert,
    fragmentShader: _v344.meshphysical_frag
  };
  let _v347 = {
      r: 0,
      b: 0,
      g: 0
    },
    _v348 = new _v202(),
    _v349 = new _v192();
  function _v350(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
    let _v7,
      _v8,
      _v9 = new _v238(0),
      _v10 = +(!0 !== _v5),
      _v11 = null,
      _v12 = 0,
      _v13 = null;
    function _v14(_v0) {
      let _v1 = !0 === _v0.isScene ? _v0.background : null;
      return _v1 && _v1.isTexture && (_v1 = (_v0.backgroundBlurriness > 0 ? _v2 : _v1).get(_v1)), _v1;
    }
    function _v15(_v0, _v1) {
      _v0.getRGB(_v347, _v274(_v0)), _v3.buffers.color.setClear(_v347.r, _v347.g, _v347.b, _v1, _v6);
    }
    return {
      getClearColor: function () {
        return _v9;
      },
      setClearColor: function (_v0, _v1 = 1) {
        _v9.set(_v0), _v15(_v9, _v10 = _v1);
      },
      getClearAlpha: function () {
        return _v10;
      },
      setClearAlpha: function (_v0) {
        _v15(_v9, _v10 = _v0);
      },
      render: function (_v0) {
        let _v1 = !1,
          _v2 = _v14(_v0);
        null === _v2 ? _v15(_v9, _v10) : _v2 && _v2.isColor && (_v15(_v2, 1), _v1 = !0);
        let _v3 = _v0.xr.getEnvironmentBlendMode();
        "additive" === _v3 ? _v3.buffers.color.setClear(0, 0, 0, 1, _v6) : "alpha-blend" === _v3 && _v3.buffers.color.setClear(0, 0, 0, 0, _v6), (_v0.autoClear || _v1) && (_v3.buffers.depth.setTest(!0), _v3.buffers.depth.setMask(!0), _v3.buffers.color.setMask(!0), _v0.clear(_v0.autoClearColor, _v0.autoClearDepth, _v0.autoClearStencil));
      },
      addToRenderList: function (_v0, _v1) {
        let _v2 = _v14(_v1);
        _v2 && (_v2.isCubeTexture || 306 === _v2.mapping) ? (void 0 === _v8 && ((_v8 = new _v269(new _v271(1, 1, 1), new _v275({
          name: "BackgroundCubeMaterial",
          uniforms: _v272(_v346.backgroundCube.uniforms),
          vertexShader: _v346.backgroundCube.vertexShader,
          fragmentShader: _v346.backgroundCube.fragmentShader,
          side: 1,
          depthTest: !1,
          depthWrite: !1,
          fog: !1,
          allowOverride: !1
        }))).geometry.deleteAttribute("normal"), _v8.geometry.deleteAttribute("uv"), _v8.onBeforeRender = function (_v0, _v1, _v2) {
          this.matrixWorld.copyPosition(_v2.matrixWorld);
        }, Object.defineProperty(_v8.material, "envMap", {
          get: function () {
            return this.uniforms.envMap.value;
          }
        }), _v4.update(_v8)), _v348.copy(_v1.backgroundRotation), _v348.x *= -1, _v348.y *= -1, _v348.z *= -1, _v2.isCubeTexture && !1 === _v2.isRenderTargetTexture && (_v348.y *= -1, _v348.z *= -1), _v8.material.uniforms.envMap.value = _v2, _v8.material.uniforms.flipEnvMap.value = _v2.isCubeTexture && !1 === _v2.isRenderTargetTexture ? -1 : 1, _v8.material.uniforms.backgroundBlurriness.value = _v1.backgroundBlurriness, _v8.material.uniforms.backgroundIntensity.value = _v1.backgroundIntensity, _v8.material.uniforms.backgroundRotation.value.setFromMatrix4(_v349.makeRotationFromEuler(_v348)), _v8.material.toneMapped = _v152.getTransfer(_v2.colorSpace) !== _v129, (_v11 !== _v2 || _v12 !== _v2.version || _v13 !== _v0.toneMapping) && (_v8.material.needsUpdate = !0, _v11 = _v2, _v12 = _v2.version, _v13 = _v0.toneMapping), _v8.layers.enableAll(), _v0.unshift(_v8, _v8.geometry, _v8.material, 0, 0, null)) : _v2 && _v2.isTexture && (void 0 === _v7 && ((_v7 = new _v269(new _v314(2, 2), new _v275({
          name: "BackgroundMaterial",
          uniforms: _v272(_v346.background.uniforms),
          vertexShader: _v346.background.vertexShader,
          fragmentShader: _v346.background.fragmentShader,
          side: 0,
          depthTest: !1,
          depthWrite: !1,
          fog: !1,
          allowOverride: !1
        }))).geometry.deleteAttribute("normal"), Object.defineProperty(_v7.material, "map", {
          get: function () {
            return this.uniforms.t2D.value;
          }
        }), _v4.update(_v7)), _v7.material.uniforms.t2D.value = _v2, _v7.material.uniforms.backgroundIntensity.value = _v1.backgroundIntensity, _v7.material.toneMapped = _v152.getTransfer(_v2.colorSpace) !== _v129, !0 === _v2.matrixAutoUpdate && _v2.updateMatrix(), _v7.material.uniforms.uvTransform.value.copy(_v2.matrix), (_v11 !== _v2 || _v12 !== _v2.version || _v13 !== _v0.toneMapping) && (_v7.material.needsUpdate = !0, _v11 = _v2, _v12 = _v2.version, _v13 = _v0.toneMapping), _v7.layers.enableAll(), _v0.unshift(_v7, _v7.geometry, _v7.material, 0, 0, null));
      },
      dispose: function () {
        void 0 !== _v8 && (_v8.geometry.dispose(), _v8.material.dispose(), _v8 = void 0), void 0 !== _v7 && (_v7.geometry.dispose(), _v7.material.dispose(), _v7 = void 0);
      }
    };
  }
  function _v351(_v0, _v1) {
    let _v2 = _v0.getParameter(_v0.MAX_VERTEX_ATTRIBS),
      _v3 = {},
      _v4 = _v9(null),
      _v5 = _v4,
      _v6 = !1;
    function _v7(_v0) {
      return _v0.bindVertexArray(_v0);
    }
    function _v8(_v0) {
      return _v0.deleteVertexArray(_v0);
    }
    function _v9(_v0) {
      let _v1 = [],
        _v2 = [],
        _v3 = [];
      for (let _v0 = 0; _v0 < _v2; _v0++) _v1[_v0] = 0, _v2[_v0] = 0, _v3[_v0] = 0;
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: _v1,
        enabledAttributes: _v2,
        attributeDivisors: _v3,
        object: _v0,
        attributes: {},
        index: null
      };
    }
    function _v10() {
      let _v0 = _v5.newAttributes;
      for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) _v0[_v0] = 0;
    }
    function _v11(_v0) {
      _v12(_v0, 0);
    }
    function _v12(_v0, _v1) {
      let _v2 = _v5.newAttributes,
        _v3 = _v5.enabledAttributes,
        _v4 = _v5.attributeDivisors;
      _v2[_v0] = 1, 0 === _v3[_v0] && (_v0.enableVertexAttribArray(_v0), _v3[_v0] = 1), _v4[_v0] !== _v1 && (_v0.vertexAttribDivisor(_v0, _v1), _v4[_v0] = _v1);
    }
    function _v13() {
      let _v0 = _v5.newAttributes,
        _v1 = _v5.enabledAttributes;
      for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) _v1[_v0] !== _v0[_v0] && (_v0.disableVertexAttribArray(_v0), _v1[_v0] = 0);
    }
    function _v14(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
      !0 === _v6 ? _v0.vertexAttribIPointer(_v0, _v1, _v2, _v4, _v5) : _v0.vertexAttribPointer(_v0, _v1, _v2, _v3, _v4, _v5);
    }
    function _v15() {
      _v16(), _v6 = !0, _v5 !== _v4 && _v7((_v5 = _v4).object);
    }
    function _v16() {
      _v4.geometry = null, _v4.program = null, _v4.wireframe = !1;
    }
    return {
      setup: function (_v0, _v1, _v2, _v3, _v4) {
        var _v5, _v6;
        let _v7,
          _v8,
          _v9,
          _v10,
          _v11 = !1,
          _v12 = (_v5 = _v3, _v6 = _v2, _v7 = !0 === _v1.wireframe, void 0 === (_v8 = _v3[_v5.id]) && (_v8 = {}, _v3[_v5.id] = _v8), void 0 === (_v9 = _v8[_v6.id]) && (_v9 = {}, _v8[_v6.id] = _v9), void 0 === (_v10 = _v9[_v7]) && (_v10 = _v9(_v0.createVertexArray()), _v9[_v7] = _v10), _v10);
        _v5 !== _v12 && _v7((_v5 = _v12).object), (_v11 = function (_v0, _v1, _v2, _v3) {
          let _v4 = _v5.attributes,
            _v5 = _v1.attributes,
            _v6 = 0,
            _v7 = _v2.getAttributes();
          for (let _v0 in _v7) if (_v7[_v0].location >= 0) {
            let _v0 = _v4[_v0],
              _v1 = _v5[_v0];
            if (void 0 === _v1 && ("instanceMatrix" === _v0 && _v0.instanceMatrix && (_v1 = _v0.instanceMatrix), "instanceColor" === _v0 && _v0.instanceColor && (_v1 = _v0.instanceColor)), void 0 === _v0 || _v0.attribute !== _v1 || _v1 && _v0.data !== _v1.data) return !0;
            _v6++;
          }
          return _v5.attributesNum !== _v6 || _v5.index !== _v3;
        }(_v0, _v3, _v2, _v4)) && function (_v0, _v1, _v2, _v3) {
          let _v4 = {},
            _v5 = _v1.attributes,
            _v6 = 0,
            _v7 = _v2.getAttributes();
          for (let _v0 in _v7) if (_v7[_v0].location >= 0) {
            let _v0 = _v5[_v0];
            void 0 === _v0 && ("instanceMatrix" === _v0 && _v0.instanceMatrix && (_v0 = _v0.instanceMatrix), "instanceColor" === _v0 && _v0.instanceColor && (_v0 = _v0.instanceColor));
            let _v1 = {};
            _v1.attribute = _v0, _v0 && _v0.data && (_v1.data = _v0.data), _v4[_v0] = _v1, _v6++;
          }
          _v5.attributes = _v4, _v5.attributesNum = _v6, _v5.index = _v3;
        }(_v0, _v3, _v2, _v4), null !== _v4 && _v1.update(_v4, _v0.ELEMENT_ARRAY_BUFFER), (_v11 || _v6) && (_v6 = !1, function (_v0, _v1, _v2, _v3) {
          _v10();
          let _v4 = _v3.attributes,
            _v5 = _v2.getAttributes(),
            _v6 = _v1.defaultAttributeValues;
          for (let _v0 in _v5) {
            let _v0 = _v5[_v0];
            if (_v0.location >= 0) {
              let _v0 = _v4[_v0];
              if (void 0 === _v0 && ("instanceMatrix" === _v0 && _v0.instanceMatrix && (_v0 = _v0.instanceMatrix), "instanceColor" === _v0 && _v0.instanceColor && (_v0 = _v0.instanceColor)), void 0 !== _v0) {
                let _v0 = _v0.normalized,
                  _v1 = _v0.itemSize,
                  _v2 = _v1.get(_v0);
                if (void 0 === _v2) continue;
                let _v3 = _v2.buffer,
                  _v4 = _v2.type,
                  _v5 = _v2.bytesPerElement,
                  _v6 = _v4 === _v0.INT || _v4 === _v0.UNSIGNED_INT || 0 === _v0.gpuType;
                if (_v0.isInterleavedBufferAttribute) {
                  let _v0 = _v0.data,
                    _v1 = _v0.stride,
                    _v2 = _v0.offset;
                  if (_v0.isInstancedInterleavedBuffer) {
                    for (let _v0 = 0; _v0 < _v0.locationSize; _v0++) _v12(_v0.location + _v0, _v0.meshPerAttribute);
                    !0 !== _v0.isInstancedMesh && void 0 === _v3._maxInstanceCount && (_v3._maxInstanceCount = _v0.meshPerAttribute * _v0.count);
                  } else for (let _v0 = 0; _v0 < _v0.locationSize; _v0++) _v11(_v0.location + _v0);
                  _v0.bindBuffer(_v0.ARRAY_BUFFER, _v3);
                  for (let _v0 = 0; _v0 < _v0.locationSize; _v0++) _v14(_v0.location + _v0, _v1 / _v0.locationSize, _v4, _v0, _v1 * _v5, (_v2 + _v1 / _v0.locationSize * _v0) * _v5, _v6);
                } else {
                  if (_v0.isInstancedBufferAttribute) {
                    for (let _v0 = 0; _v0 < _v0.locationSize; _v0++) _v12(_v0.location + _v0, _v0.meshPerAttribute);
                    !0 !== _v0.isInstancedMesh && void 0 === _v3._maxInstanceCount && (_v3._maxInstanceCount = _v0.meshPerAttribute * _v0.count);
                  } else for (let _v0 = 0; _v0 < _v0.locationSize; _v0++) _v11(_v0.location + _v0);
                  _v0.bindBuffer(_v0.ARRAY_BUFFER, _v3);
                  for (let _v0 = 0; _v0 < _v0.locationSize; _v0++) _v14(_v0.location + _v0, _v1 / _v0.locationSize, _v4, _v0, _v1 * _v5, _v1 / _v0.locationSize * _v0 * _v5, _v6);
                }
              } else if (void 0 !== _v6) {
                let _v0 = _v6[_v0];
                if (void 0 !== _v0) switch (_v0.length) {
                  case 2:
                    _v0.vertexAttrib2fv(_v0.location, _v0);
                    break;
                  case 3:
                    _v0.vertexAttrib3fv(_v0.location, _v0);
                    break;
                  case 4:
                    _v0.vertexAttrib4fv(_v0.location, _v0);
                    break;
                  default:
                    _v0.vertexAttrib1fv(_v0.location, _v0);
                }
              }
            }
          }
          _v13();
        }(_v0, _v1, _v2, _v3), null !== _v4 && _v0.bindBuffer(_v0.ELEMENT_ARRAY_BUFFER, _v1.get(_v4).buffer));
      },
      reset: _v15,
      resetDefaultState: _v16,
      dispose: function () {
        for (let _v0 in _v15(), _v3) {
          let _v0 = _v3[_v0];
          for (let _v0 in _v0) {
            let _v0 = _v0[_v0];
            for (let _v0 in _v0) _v8(_v0[_v0].object), delete _v0[_v0];
            delete _v0[_v0];
          }
          delete _v3[_v0];
        }
      },
      releaseStatesOfGeometry: function (_v0) {
        if (void 0 === _v3[_v0.id]) return;
        let _v1 = _v3[_v0.id];
        for (let _v0 in _v1) {
          let _v0 = _v1[_v0];
          for (let _v0 in _v0) _v8(_v0[_v0].object), delete _v0[_v0];
          delete _v1[_v0];
        }
        delete _v3[_v0.id];
      },
      releaseStatesOfProgram: function (_v0) {
        for (let _v0 in _v3) {
          let _v0 = _v3[_v0];
          if (void 0 === _v0[_v0.id]) continue;
          let _v1 = _v0[_v0.id];
          for (let _v0 in _v1) _v8(_v1[_v0].object), delete _v1[_v0];
          delete _v0[_v0.id];
        }
      },
      initAttributes: _v10,
      enableAttribute: _v11,
      disableUnusedAttributes: _v13
    };
  }
  function _v352(_v0, _v1, _v2) {
    let _v3;
    function _v4(_v0, _v1, _v2) {
      0 !== _v2 && (_v0.drawArraysInstanced(_v3, _v0, _v1, _v2), _v2.update(_v1, _v3, _v2));
    }
    this.setMode = function (_v0) {
      _v3 = _v0;
    }, this.render = function (_v0, _v1) {
      _v0.drawArrays(_v3, _v0, _v1), _v2.update(_v1, _v3, 1);
    }, this.renderInstances = _v4, this.renderMultiDraw = function (_v0, _v1, _v2) {
      if (0 === _v2) return;
      _v1.get("WEBGL_multi_draw").multiDrawArraysWEBGL(_v3, _v0, 0, _v1, 0, _v2);
      let _v3 = 0;
      for (let _v0 = 0; _v0 < _v2; _v0++) _v3 += _v1[_v0];
      _v2.update(_v3, _v3, 1);
    }, this.renderMultiDrawInstances = function (_v0, _v1, _v2, _v3) {
      if (0 === _v2) return;
      let _v4 = _v1.get("WEBGL_multi_draw");
      if (null === _v4) for (let _v0 = 0; _v0 < _v0.length; _v0++) _v4(_v0[_v0], _v1[_v0], _v3[_v0]);else {
        _v4.multiDrawArraysInstancedWEBGL(_v3, _v0, 0, _v1, 0, _v3, 0, _v2);
        let _v0 = 0;
        for (let _v0 = 0; _v0 < _v2; _v0++) _v0 += _v1[_v0] * _v3[_v0];
        _v2.update(_v0, _v3, 1);
      }
    };
  }
  function _v353(_v0, _v1, _v2, _v3) {
    let _v4;
    function _v5(_v0) {
      if ("highp" === _v0) {
        if (_v0.getShaderPrecisionFormat(_v0.VERTEX_SHADER, _v0.HIGH_FLOAT).precision > 0 && _v0.getShaderPrecisionFormat(_v0.FRAGMENT_SHADER, _v0.HIGH_FLOAT).precision > 0) return "highp";
        _v0 = "mediump";
      }
      return "mediump" === _v0 && _v0.getShaderPrecisionFormat(_v0.VERTEX_SHADER, _v0.MEDIUM_FLOAT).precision > 0 && _v0.getShaderPrecisionFormat(_v0.FRAGMENT_SHADER, _v0.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    let _v6 = void 0 !== _v2.precision ? _v2.precision : "highp",
      _v7 = _v5(_v6);
    _v7 !== _v6 && (console.warn("THREE.WebGLRenderer:", _v6, "not supported, using", _v7, "instead."), _v6 = _v7);
    let _v8 = !0 === _v2.logarithmicDepthBuffer,
      _v9 = !0 === _v2.reversedDepthBuffer && _v1.has("EXT_clip_control"),
      _v10 = _v0.getParameter(_v0.MAX_TEXTURE_IMAGE_UNITS),
      _v11 = _v0.getParameter(_v0.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    return {
      isWebGL2: !0,
      getMaxAnisotropy: function () {
        if (void 0 !== _v4) return _v4;
        if (!0 === _v1.has("EXT_texture_filter_anisotropic")) {
          let _v0 = _v1.get("EXT_texture_filter_anisotropic");
          _v4 = _v0.getParameter(_v0.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else _v4 = 0;
        return _v4;
      },
      getMaxPrecision: _v5,
      textureFormatReadable: function (_v0) {
        return 0 === _v0 || _v3.convert(_v0) === _v0.getParameter(_v0.IMPLEMENTATION_COLOR_READ_FORMAT);
      },
      textureTypeReadable: function (_v0) {
        let _v1 = 0 === _v0 && (_v1.has("EXT_color_buffer_half_float") || _v1.has("EXT_color_buffer_float"));
        return 0 === _v0 || _v3.convert(_v0) === _v0.getParameter(_v0.IMPLEMENTATION_COLOR_READ_TYPE) || 0 === _v0 || !!_v1;
      },
      precision: _v6,
      logarithmicDepthBuffer: _v8,
      reversedDepthBuffer: _v9,
      maxTextures: _v10,
      maxVertexTextures: _v11,
      maxTextureSize: _v0.getParameter(_v0.MAX_TEXTURE_SIZE),
      maxCubemapSize: _v0.getParameter(_v0.MAX_CUBE_MAP_TEXTURE_SIZE),
      maxAttributes: _v0.getParameter(_v0.MAX_VERTEX_ATTRIBS),
      maxVertexUniforms: _v0.getParameter(_v0.MAX_VERTEX_UNIFORM_VECTORS),
      maxVaryings: _v0.getParameter(_v0.MAX_VARYING_VECTORS),
      maxFragmentUniforms: _v0.getParameter(_v0.MAX_FRAGMENT_UNIFORM_VECTORS),
      vertexTextures: _v11 > 0,
      maxSamples: _v0.getParameter(_v0.MAX_SAMPLES)
    };
  }
  function _v354(_v0) {
    let _v1 = this,
      _v2 = null,
      _v3 = 0,
      _v4 = !1,
      _v5 = !1,
      _v6 = new _v291(),
      _v7 = new _v144(),
      _v8 = {
        value: null,
        needsUpdate: !1
      };
    function _v9(_v0, _v1, _v2, _v3) {
      let _v4 = null !== _v0 ? _v0.length : 0,
        _v5 = null;
      if (0 !== _v4) {
        if (_v5 = _v8.value, !0 !== _v3 || null === _v5) {
          let _v0 = _v2 + 4 * _v4,
            _v1 = _v1.matrixWorldInverse;
          _v7.getNormalMatrix(_v1), (null === _v5 || _v5.length < _v0) && (_v5 = new Float32Array(_v0));
          for (let _v0 = 0, _v1 = _v2; _v0 !== _v4; ++_v0, _v1 += 4) _v6.copy(_v0[_v0]).applyMatrix4(_v1, _v7), _v6.normal.toArray(_v5, _v1), _v5[_v1 + 3] = _v6.constant;
        }
        _v8.value = _v5, _v8.needsUpdate = !0;
      }
      return _v1.numPlanes = _v4, _v1.numIntersection = 0, _v5;
    }
    this.uniform = _v8, this.numPlanes = 0, this.numIntersection = 0, this.init = function (_v0, _v1) {
      let _v2 = 0 !== _v0.length || _v1 || 0 !== _v3 || _v4;
      return _v4 = _v1, _v3 = _v0.length, _v2;
    }, this.beginShadows = function () {
      _v5 = !0, _v9(null);
    }, this.endShadows = function () {
      _v5 = !1;
    }, this.setGlobalState = function (_v0, _v1) {
      _v2 = _v9(_v0, _v1, 0);
    }, this.setState = function (_v0, _v1, _v2) {
      let _v3 = _v0.clippingPlanes,
        _v4 = _v0.clipIntersection,
        _v5 = _v0.clipShadows,
        _v6 = _v0.get(_v0);
      if (_v4 && null !== _v3 && 0 !== _v3.length && (!_v5 || _v5)) {
        let _v0 = _v5 ? 0 : _v3,
          _v1 = 4 * _v0,
          _v2 = _v6.clippingState || null;
        _v8.value = _v2, _v2 = _v9(_v3, _v1, _v1, _v2);
        for (let _v0 = 0; _v0 !== _v1; ++_v0) _v2[_v0] = _v2[_v0];
        _v6.clippingState = _v2, this.numIntersection = _v4 ? this.numPlanes : 0, this.numPlanes += _v0;
      } else _v5 ? _v9(null) : (_v8.value !== _v2 && (_v8.value = _v2, _v8.needsUpdate = _v3 > 0), _v1.numPlanes = _v3, _v1.numIntersection = 0);
    };
  }
  function _v355(_v0) {
    let _v1 = new WeakMap();
    function _v2(_v0, _v1) {
      return 303 === _v1 ? _v0.mapping = 301 : 304 === _v1 && (_v0.mapping = 302), _v0;
    }
    function _v3(_v0) {
      let _v1 = _v0.target;
      _v1.removeEventListener("dispose", _v3);
      let _v2 = _v1.get(_v1);
      void 0 !== _v2 && (_v1.delete(_v1), _v2.dispose());
    }
    return {
      get: function (_v0) {
        if (_v0 && _v0.isTexture) {
          let _v0 = _v0.mapping;
          if (303 === _v0 || 304 === _v0) if (_v1.has(_v0)) return _v2(_v1.get(_v0).texture, _v0.mapping);else {
            let _v0 = _v0.image;
            if (!_v0 || !(_v0.height > 0)) return null;
            {
              let _v0 = new _v283(_v0.height);
              return _v0.fromEquirectangularTexture(_v0, _v0), _v1.set(_v0, _v0), _v0.addEventListener("dispose", _v3), _v2(_v0.texture, _v0.mapping);
            }
          }
        }
        return _v0;
      },
      dispose: function () {
        _v1 = new WeakMap();
      }
    };
  }
  let _v356 = [.125, .215, .35, .446, .526, .582],
    _v357 = new class extends _v276 {
      constructor(_v0 = -1, _v1 = 1, _v2 = 1, _v3 = -1, _v4 = .1, _v5 = 0) {
        super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = _v0, this.right = _v1, this.top = _v2, this.bottom = _v3, this.near = _v4, this.far = _v5, this.updateProjectionMatrix();
      }
      copy(_v0, _v1) {
        return super.copy(_v0, _v1), this.left = _v0.left, this.right = _v0.right, this.top = _v0.top, this.bottom = _v0.bottom, this.near = _v0.near, this.far = _v0.far, this.zoom = _v0.zoom, this.view = null === _v0.view ? null : Object.assign({}, _v0.view), this;
      }
      setViewOffset(_v0, _v1, _v2, _v3, _v4, _v5) {
        null === this.view && (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        }), this.view.enabled = !0, this.view.fullWidth = _v0, this.view.fullHeight = _v1, this.view.offsetX = _v2, this.view.offsetY = _v3, this.view.width = _v4, this.view.height = _v5, this.updateProjectionMatrix();
      }
      clearViewOffset() {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
      }
      updateProjectionMatrix() {
        let _v0 = (this.right - this.left) / (2 * this.zoom),
          _v1 = (this.top - this.bottom) / (2 * this.zoom),
          _v2 = (this.right + this.left) / 2,
          _v3 = (this.top + this.bottom) / 2,
          _v4 = _v2 - _v0,
          _v5 = _v2 + _v0,
          _v6 = _v3 + _v1,
          _v7 = _v3 - _v1;
        if (null !== this.view && this.view.enabled) {
          let _v0 = (this.right - this.left) / this.view.fullWidth / this.zoom,
            _v1 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
          _v4 += _v0 * this.view.offsetX, _v5 = _v4 + _v0 * this.view.width, _v6 -= _v1 * this.view.offsetY, _v7 = _v6 - _v1 * this.view.height;
        }
        this.projectionMatrix.makeOrthographic(_v4, _v5, _v6, _v7, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
      }
      toJSON(_v0) {
        let _v1 = super.toJSON(_v0);
        return _v1.object.zoom = this.zoom, _v1.object.left = this.left, _v1.object.right = this.right, _v1.object.top = this.top, _v1.object.bottom = this.bottom, _v1.object.near = this.near, _v1.object.far = this.far, null !== this.view && (_v1.object.view = Object.assign({}, this.view)), _v1;
      }
    }(),
    _v358 = new _v238(),
    _v359 = null,
    _v360 = 0,
    _v361 = 0,
    _v362 = !1,
    _v363 = (1 + Math.sqrt(5)) / 2,
    _v364 = 1 / _v363,
    _v365 = [new _v141(-_v363, _v364, 0), new _v141(_v363, _v364, 0), new _v141(-_v364, 0, _v363), new _v141(_v364, 0, _v363), new _v141(0, _v363, -_v364), new _v141(0, _v363, _v364), new _v141(-1, 1, -1), new _v141(1, 1, -1), new _v141(-1, 1, 1), new _v141(1, 1, 1)],
    _v366 = new _v141();
  class _v367 {
    constructor(_v0) {
      this._renderer = _v0, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(_v0, _v1 = 0, _v2 = .1, _v3 = 100, _v4 = {}) {
      let {
        size: _v5 = 256,
        position: _v6 = _v366
      } = _v4;
      _v359 = this._renderer.getRenderTarget(), _v360 = this._renderer.getActiveCubeFace(), _v361 = this._renderer.getActiveMipmapLevel(), _v362 = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(_v5);
      let _v7 = this._allocateTargets();
      return _v7.depthBuffer = !0, this._sceneToCubeUV(_v0, _v2, _v3, _v7, _v6), _v1 > 0 && this._blur(_v7, 0, 0, _v1), this._applyPMREM(_v7), this._cleanup(_v7), _v7;
    }
    fromEquirectangular(_v0, _v1 = null) {
      return this._fromTexture(_v0, _v1);
    }
    fromCubemap(_v0, _v1 = null) {
      return this._fromTexture(_v0, _v1);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial && (this._cubemapMaterial = _v371(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial && (this._equirectMaterial = _v370(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(_v0) {
      this._lodMax = Math.floor(Math.log2(_v0)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
      for (let _v0 = 0; _v0 < this._lodPlanes.length; _v0++) this._lodPlanes[_v0].dispose();
    }
    _cleanup(_v0) {
      this._renderer.setRenderTarget(_v359, _v360, _v361), this._renderer.xr.enabled = _v362, _v0.scissorTest = !1, _v369(_v0, 0, 0, _v0.width, _v0.height);
    }
    _fromTexture(_v0, _v1) {
      301 === _v0.mapping || 302 === _v0.mapping ? this._setSize(0 === _v0.image.length ? 16 : _v0.image[0].width || _v0.image[0].image.width) : this._setSize(_v0.image.width / 4), _v359 = this._renderer.getRenderTarget(), _v360 = this._renderer.getActiveCubeFace(), _v361 = this._renderer.getActiveMipmapLevel(), _v362 = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
      let _v2 = _v1 || this._allocateTargets();
      return this._textureToCubeUV(_v0, _v2), this._applyPMREM(_v2), this._cleanup(_v2), _v2;
    }
    _allocateTargets() {
      let _v0 = 3 * Math.max(this._cubeSize, 112),
        _v1 = 4 * this._cubeSize,
        _v2 = {
          magFilter: 0,
          minFilter: 0,
          generateMipmaps: !1,
          type: 0,
          format: 0,
          colorSpace: _v127,
          depthBuffer: !1
        },
        _v3 = _v368(_v0, _v1, _v2);
      if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== _v0 || this._pingPongRenderTarget.height !== _v1) {
        var _v4;
        null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = _v368(_v0, _v1, _v2);
        let {
          _lodMax: _v0
        } = this;
        ({
          sizeLods: this._sizeLods,
          lodPlanes: this._lodPlanes,
          sigmas: this._sigmas
        } = function (_v0) {
          let _v1 = [],
            _v2 = [],
            _v3 = [],
            _v4 = _v0,
            _v5 = _v0 - 4 + 1 + _v356.length;
          for (let _v0 = 0; _v0 < _v5; _v0++) {
            let _v0 = Math.pow(2, _v4);
            _v2.push(_v0);
            let _v1 = 1 / _v0;
            _v0 > _v0 - 4 ? _v1 = _v356[_v0 - _v0 + 4 - 1] : 0 === _v0 && (_v1 = 0), _v3.push(_v1);
            let _v2 = 1 / (_v0 - 2),
              _v3 = -_v2,
              _v4 = 1 + _v2,
              _v5 = [_v3, _v3, _v4, _v3, _v4, _v4, _v3, _v3, _v4, _v4, _v3, _v4],
              _v6 = new Float32Array(108),
              _v7 = new Float32Array(72),
              _v8 = new Float32Array(36);
            for (let _v0 = 0; _v0 < 6; _v0++) {
              let _v0 = _v0 % 3 * 2 / 3 - 1,
                _v1 = _v0 > 2 ? 0 : -1,
                _v2 = [_v0, _v1, 0, _v0 + 2 / 3, _v1, 0, _v0 + 2 / 3, _v1 + 1, 0, _v0, _v1, 0, _v0 + 2 / 3, _v1 + 1, 0, _v0, _v1 + 1, 0];
              _v6.set(_v2, 18 * _v0), _v7.set(_v5, 12 * _v0);
              let _v3 = [_v0, _v0, _v0, _v0, _v0, _v0];
              _v8.set(_v3, 6 * _v0);
            }
            let _v9 = new _v257();
            _v9.setAttribute("position", new _v246(_v6, 3)), _v9.setAttribute("uv", new _v246(_v7, 2)), _v9.setAttribute("faceIndex", new _v246(_v8, 1)), _v1.push(_v9), _v4 > 4 && _v4--;
          }
          return {
            lodPlanes: _v1,
            sizeLods: _v2,
            sigmas: _v3
          };
        }(_v0)), this._blurMaterial = (_v4 = _v0, new _v275({
          name: "SphericalGaussianBlur",
          defines: {
            n: 20,
            CUBEUV_TEXEL_WIDTH: 1 / _v0,
            CUBEUV_TEXEL_HEIGHT: 1 / _v1,
            CUBEUV_MAX_MIP: `${_v4}.0`
          },
          uniforms: {
            envMap: {
              value: null
            },
            samples: {
              value: 1
            },
            weights: {
              value: new Float32Array(20)
            },
            latitudinal: {
              value: !1
            },
            dTheta: {
              value: 0
            },
            mipInt: {
              value: 0
            },
            poleAxis: {
              value: new _v141(0, 1, 0)
            }
          },
          vertexShader: _v372(),
          fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
          blending: 0,
          depthTest: !1,
          depthWrite: !1
        }));
      }
      return _v3;
    }
    _compileMaterial(_v0) {
      let _v1 = new _v269(this._lodPlanes[0], _v0);
      this._renderer.compile(_v1, _v357);
    }
    _sceneToCubeUV(_v0, _v1, _v2, _v3, _v4) {
      let _v5 = new _v280(90, 1, _v1, _v2),
        _v6 = [1, -1, 1, 1, 1, 1],
        _v7 = [1, 1, 1, -1, -1, -1],
        _v8 = this._renderer,
        _v9 = _v8.autoClear,
        _v10 = _v8.toneMapping;
      _v8.getClearColor(_v358), _v8.toneMapping = 0, _v8.autoClear = !1, _v8.state.buffers.depth.getReversed() && (_v8.setRenderTarget(_v3), _v8.clearDepth(), _v8.setRenderTarget(null));
      let _v11 = new _v242({
          name: "PMREM.Background",
          side: 1,
          depthWrite: !1,
          depthTest: !1
        }),
        _v12 = new _v269(new _v271(), _v11),
        _v13 = !1,
        _v14 = _v0.background;
      _v14 ? _v14.isColor && (_v11.color.copy(_v14), _v0.background = null, _v13 = !0) : (_v11.color.copy(_v358), _v13 = !0);
      for (let _v0 = 0; _v0 < 6; _v0++) {
        let _v0 = _v0 % 3;
        0 === _v0 ? (_v5.up.set(0, _v6[_v0], 0), _v5.position.set(_v4.x, _v4.y, _v4.z), _v5.lookAt(_v4.x + _v7[_v0], _v4.y, _v4.z)) : 1 === _v0 ? (_v5.up.set(0, 0, _v6[_v0]), _v5.position.set(_v4.x, _v4.y, _v4.z), _v5.lookAt(_v4.x, _v4.y + _v7[_v0], _v4.z)) : (_v5.up.set(0, _v6[_v0], 0), _v5.position.set(_v4.x, _v4.y, _v4.z), _v5.lookAt(_v4.x, _v4.y, _v4.z + _v7[_v0]));
        let _v1 = this._cubeSize;
        _v369(_v3, _v0 * _v1, _v0 > 2 ? _v1 : 0, _v1, _v1), _v8.setRenderTarget(_v3), _v13 && _v8.render(_v12, _v5), _v8.render(_v0, _v5);
      }
      _v12.geometry.dispose(), _v12.material.dispose(), _v8.toneMapping = _v10, _v8.autoClear = _v9, _v0.background = _v14;
    }
    _textureToCubeUV(_v0, _v1) {
      let _v2 = this._renderer,
        _v3 = 301 === _v0.mapping || 302 === _v0.mapping;
      _v3 ? (null === this._cubemapMaterial && (this._cubemapMaterial = _v371()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === _v0.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = _v370());
      let _v4 = _v3 ? this._cubemapMaterial : this._equirectMaterial,
        _v5 = new _v269(this._lodPlanes[0], _v4);
      _v4.uniforms.envMap.value = _v0;
      let _v6 = this._cubeSize;
      _v369(_v1, 0, 0, 3 * _v6, 2 * _v6), _v2.setRenderTarget(_v1), _v2.render(_v5, _v357);
    }
    _applyPMREM(_v0) {
      let _v1 = this._renderer,
        _v2 = _v1.autoClear;
      _v1.autoClear = !1;
      let _v3 = this._lodPlanes.length;
      for (let _v0 = 1; _v0 < _v3; _v0++) {
        let _v0 = Math.sqrt(this._sigmas[_v0] * this._sigmas[_v0] - this._sigmas[_v0 - 1] * this._sigmas[_v0 - 1]),
          _v1 = _v365[(_v3 - _v0 - 1) % _v365.length];
        this._blur(_v0, _v0 - 1, _v0, _v0, _v1);
      }
      _v1.autoClear = _v2;
    }
    _blur(_v0, _v1, _v2, _v3, _v4) {
      let _v5 = this._pingPongRenderTarget;
      this._halfBlur(_v0, _v5, _v1, _v2, _v3, "latitudinal", _v4), this._halfBlur(_v5, _v0, _v2, _v2, _v3, "longitudinal", _v4);
    }
    _halfBlur(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
      let _v7 = this._renderer,
        _v8 = this._blurMaterial;
      "latitudinal" !== _v5 && "longitudinal" !== _v5 && console.error("blur direction must be either latitudinal or longitudinal!");
      let _v9 = new _v269(this._lodPlanes[_v3], _v8),
        _v10 = _v8.uniforms,
        _v11 = this._sizeLods[_v2] - 1,
        _v12 = isFinite(_v4) ? Math.PI / (2 * _v11) : 2 * Math.PI / 39,
        _v13 = _v4 / _v12,
        _v14 = isFinite(_v4) ? 1 + Math.floor(3 * _v13) : 20;
      _v14 > 20 && console.warn(`sigmaRadians, ${_v4}, is too large and will clip, as it requested ${_v14} samples when the maximum is set to 20`);
      let _v15 = [],
        _v16 = 0;
      for (let _v0 = 0; _v0 < 20; ++_v0) {
        let _v0 = _v0 / _v13,
          _v1 = Math.exp(-_v0 * _v0 / 2);
        _v15.push(_v1), 0 === _v0 ? _v16 += _v1 : _v0 < _v14 && (_v16 += 2 * _v1);
      }
      for (let _v0 = 0; _v0 < _v15.length; _v0++) _v15[_v0] = _v15[_v0] / _v16;
      _v10.envMap.value = _v0.texture, _v10.samples.value = _v14, _v10.weights.value = _v15, _v10.latitudinal.value = "latitudinal" === _v5, _v6 && (_v10.poleAxis.value = _v6);
      let {
        _lodMax: _v17
      } = this;
      _v10.dTheta.value = _v12, _v10.mipInt.value = _v17 - _v2;
      let _v18 = this._sizeLods[_v3],
        _v19 = 4 * (this._cubeSize - _v18);
      _v369(_v1, 3 * _v18 * (_v3 > _v17 - 4 ? _v3 - _v17 + 4 : 0), _v19, 3 * _v18, 2 * _v18), _v7.setRenderTarget(_v1), _v7.render(_v9, _v357);
    }
  }
  function _v368(_v0, _v1, _v2) {
    let _v3 = new _v164(_v0, _v1, _v2);
    return _v3.texture.mapping = 306, _v3.texture.name = "PMREM.cubeUv", _v3.scissorTest = !0, _v3;
  }
  function _v369(_v0, _v1, _v2, _v3, _v4) {
    _v0.viewport.set(_v1, _v2, _v3, _v4), _v0.scissor.set(_v1, _v2, _v3, _v4);
  }
  function _v370() {
    return new _v275({
      name: "EquirectangularToCubeUV",
      uniforms: {
        envMap: {
          value: null
        }
      },
      vertexShader: _v372(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
      blending: 0,
      depthTest: !1,
      depthWrite: !1
    });
  }
  function _v371() {
    return new _v275({
      name: "CubemapToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        }
      },
      vertexShader: _v372(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
      blending: 0,
      depthTest: !1,
      depthWrite: !1
    });
  }
  function _v372() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
  }
  function _v373(_v0) {
    let _v1 = new WeakMap(),
      _v2 = null;
    function _v3(_v0) {
      let _v1 = _v0.target;
      _v1.removeEventListener("dispose", _v3);
      let _v2 = _v1.get(_v1);
      void 0 !== _v2 && (_v1.delete(_v1), _v2.dispose());
    }
    return {
      get: function (_v0) {
        if (_v0 && _v0.isTexture) {
          let _v0 = _v0.mapping,
            _v1 = 303 === _v0 || 304 === _v0,
            _v2 = 301 === _v0 || 302 === _v0;
          if (_v1 || _v2) {
            let _v0 = _v1.get(_v0),
              _v1 = void 0 !== _v0 ? _v0.texture.pmremVersion : 0;
            if (_v0.isRenderTargetTexture && _v0.pmremVersion !== _v1) return null === _v2 && (_v2 = new _v367(_v0)), (_v0 = _v1 ? _v2.fromEquirectangular(_v0, _v0) : _v2.fromCubemap(_v0, _v0)).texture.pmremVersion = _v0.pmremVersion, _v1.set(_v0, _v0), _v0.texture;
            {
              if (void 0 !== _v0) return _v0.texture;
              let _v0 = _v0.image;
              return _v1 && _v0 && _v0.height > 0 || _v2 && _v0 && function (_v0) {
                let _v1 = 0;
                for (let _v0 = 0; _v0 < 6; _v0++) void 0 !== _v0[_v0] && _v1++;
                return 6 === _v1;
              }(_v0) ? (null === _v2 && (_v2 = new _v367(_v0)), (_v0 = _v1 ? _v2.fromEquirectangular(_v0) : _v2.fromCubemap(_v0)).texture.pmremVersion = _v0.pmremVersion, _v1.set(_v0, _v0), _v0.addEventListener("dispose", _v3), _v0.texture) : null;
            }
          }
        }
        return _v0;
      },
      dispose: function () {
        _v1 = new WeakMap(), null !== _v2 && (_v2.dispose(), _v2 = null);
      }
    };
  }
  function _v374(_v0) {
    let _v1 = {};
    function _v2(_v0) {
      let _v1;
      if (void 0 !== _v1[_v0]) return _v1[_v0];
      switch (_v0) {
        case "WEBGL_depth_texture":
          _v1 = _v0.getExtension("WEBGL_depth_texture") || _v0.getExtension("MOZ_WEBGL_depth_texture") || _v0.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          _v1 = _v0.getExtension("EXT_texture_filter_anisotropic") || _v0.getExtension("MOZ_EXT_texture_filter_anisotropic") || _v0.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          _v1 = _v0.getExtension("WEBGL_compressed_texture_s3tc") || _v0.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || _v0.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          _v1 = _v0.getExtension("WEBGL_compressed_texture_pvrtc") || _v0.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          _v1 = _v0.getExtension(_v0);
      }
      return _v1[_v0] = _v1, _v1;
    }
    return {
      has: function (_v0) {
        return null !== _v2(_v0);
      },
      init: function () {
        _v2("EXT_color_buffer_float"), _v2("WEBGL_clip_cull_distance"), _v2("OES_texture_float_linear"), _v2("EXT_color_buffer_half_float"), _v2("WEBGL_multisampled_render_to_texture"), _v2("WEBGL_render_shared_exponent");
      },
      get: function (_v0) {
        let _v1 = _v2(_v0);
        return null === _v1 && _v149("THREE.WebGLRenderer: " + _v0 + " extension not supported."), _v1;
      }
    };
  }
  function _v375(_v0, _v1, _v2, _v3) {
    let _v4 = {},
      _v5 = new WeakMap();
    function _v6(_v0) {
      let _v1 = _v0.target;
      for (let _v0 in null !== _v1.index && _v1.remove(_v1.index), _v1.attributes) _v1.remove(_v1.attributes[_v0]);
      _v1.removeEventListener("dispose", _v6), delete _v4[_v1.id];
      let _v2 = _v5.get(_v1);
      _v2 && (_v1.remove(_v2), _v5.delete(_v1)), _v3.releaseStatesOfGeometry(_v1), !0 === _v1.isInstancedBufferGeometry && delete _v1._maxInstanceCount, _v2.memory.geometries--;
    }
    function _v7(_v0) {
      let _v1 = [],
        _v2 = _v0.index,
        _v3 = _v0.attributes.position,
        _v4 = 0;
      if (null !== _v2) {
        let _v0 = _v2.array;
        _v4 = _v2.version;
        for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0 += 3) {
          let _v0 = _v0[_v0 + 0],
            _v1 = _v0[_v0 + 1],
            _v2 = _v0[_v0 + 2];
          _v1.push(_v0, _v1, _v1, _v2, _v2, _v0);
        }
      } else {
        if (void 0 === _v3) return;
        let _v0 = _v3.array;
        _v4 = _v3.version;
        for (let _v0 = 0, _v1 = _v0.length / 3 - 1; _v0 < _v1; _v0 += 3) {
          let _v0 = _v0 + 0,
            _v1 = _v0 + 1,
            _v2 = _v0 + 2;
          _v1.push(_v0, _v1, _v1, _v2, _v2, _v0);
        }
      }
      let _v5 = new (_v146(_v1) ? _v248 : _v247)(_v1, 1);
      _v5.version = _v4;
      let _v6 = _v5.get(_v0);
      _v6 && _v1.remove(_v6), _v5.set(_v0, _v5);
    }
    return {
      get: function (_v0, _v1) {
        return !0 === _v4[_v1.id] || (_v1.addEventListener("dispose", _v6), _v4[_v1.id] = !0, _v2.memory.geometries++), _v1;
      },
      update: function (_v0) {
        let _v1 = _v0.attributes;
        for (let _v0 in _v1) _v1.update(_v1[_v0], _v0.ARRAY_BUFFER);
      },
      getWireframeAttribute: function (_v0) {
        let _v1 = _v5.get(_v0);
        if (_v1) {
          let _v0 = _v0.index;
          null !== _v0 && _v1.version < _v0.version && _v7(_v0);
        } else _v7(_v0);
        return _v5.get(_v0);
      }
    };
  }
  function _v376(_v0, _v1, _v2) {
    let _v3, _v4, _v5;
    function _v6(_v0, _v1, _v2) {
      0 !== _v2 && (_v0.drawElementsInstanced(_v3, _v1, _v4, _v0 * _v5, _v2), _v2.update(_v1, _v3, _v2));
    }
    this.setMode = function (_v0) {
      _v3 = _v0;
    }, this.setIndex = function (_v0) {
      _v4 = _v0.type, _v5 = _v0.bytesPerElement;
    }, this.render = function (_v0, _v1) {
      _v0.drawElements(_v3, _v1, _v4, _v0 * _v5), _v2.update(_v1, _v3, 1);
    }, this.renderInstances = _v6, this.renderMultiDraw = function (_v0, _v1, _v2) {
      if (0 === _v2) return;
      _v1.get("WEBGL_multi_draw").multiDrawElementsWEBGL(_v3, _v1, 0, _v4, _v0, 0, _v2);
      let _v3 = 0;
      for (let _v0 = 0; _v0 < _v2; _v0++) _v3 += _v1[_v0];
      _v2.update(_v3, _v3, 1);
    }, this.renderMultiDrawInstances = function (_v0, _v1, _v2, _v3) {
      if (0 === _v2) return;
      let _v4 = _v1.get("WEBGL_multi_draw");
      if (null === _v4) for (let _v0 = 0; _v0 < _v0.length; _v0++) _v6(_v0[_v0] / _v5, _v1[_v0], _v3[_v0]);else {
        _v4.multiDrawElementsInstancedWEBGL(_v3, _v1, 0, _v4, _v0, 0, _v3, 0, _v2);
        let _v0 = 0;
        for (let _v0 = 0; _v0 < _v2; _v0++) _v0 += _v1[_v0] * _v3[_v0];
        _v2.update(_v0, _v3, 1);
      }
    };
  }
  function _v377(_v0) {
    let _v1 = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: _v1,
      programs: null,
      autoReset: !0,
      reset: function () {
        _v1.calls = 0, _v1.triangles = 0, _v1.points = 0, _v1.lines = 0;
      },
      update: function (_v0, _v1, _v2) {
        switch (_v1.calls++, _v1) {
          case _v0.TRIANGLES:
            _v1.triangles += _v0 / 3 * _v2;
            break;
          case _v0.LINES:
            _v1.lines += _v0 / 2 * _v2;
            break;
          case _v0.LINE_STRIP:
            _v1.lines += _v2 * (_v0 - 1);
            break;
          case _v0.LINE_LOOP:
            _v1.lines += _v2 * _v0;
            break;
          case _v0.POINTS:
            _v1.points += _v2 * _v0;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", _v1);
        }
      }
    };
  }
  function _v378(_v0, _v1, _v2) {
    let _v3 = new WeakMap(),
      _v4 = new _v162();
    return {
      update: function (_v0, _v1, _v2) {
        let _v3 = _v0.morphTargetInfluences,
          _v4 = _v1.morphAttributes.position || _v1.morphAttributes.normal || _v1.morphAttributes.color,
          _v5 = void 0 !== _v4 ? _v4.length : 0,
          _v6 = _v3.get(_v1);
        if (void 0 === _v6 || _v6.count !== _v5) {
          void 0 !== _v6 && _v6.texture.dispose();
          let _v0 = void 0 !== _v1.morphAttributes.position,
            _v1 = void 0 !== _v1.morphAttributes.normal,
            _v2 = void 0 !== _v1.morphAttributes.color,
            _v3 = _v1.morphAttributes.position || [],
            _v4 = _v1.morphAttributes.normal || [],
            _v5 = _v1.morphAttributes.color || [],
            _v6 = 0;
          !0 === _v0 && (_v6 = 1), !0 === _v1 && (_v6 = 2), !0 === _v2 && (_v6 = 3);
          let _v7 = _v1.attributes.position.count * _v6,
            _v8 = 1;
          _v7 > _v1.maxTextureSize && (_v8 = Math.ceil(_v7 / _v1.maxTextureSize), _v7 = _v1.maxTextureSize);
          let _v9 = new Float32Array(_v7 * _v8 * 4 * _v5),
            _v10 = new _v165(_v9, _v7, _v8, _v5);
          _v10.type = 0, _v10.needsUpdate = !0;
          let _v11 = 4 * _v6;
          for (let _v0 = 0; _v0 < _v5; _v0++) {
            let _v0 = _v3[_v0],
              _v1 = _v4[_v0],
              _v2 = _v5[_v0],
              _v3 = _v7 * _v8 * 4 * _v0;
            for (let _v0 = 0; _v0 < _v0.count; _v0++) {
              let _v0 = _v0 * _v11;
              !0 === _v0 && (_v4.fromBufferAttribute(_v0, _v0), _v9[_v3 + _v0 + 0] = _v4.x, _v9[_v3 + _v0 + 1] = _v4.y, _v9[_v3 + _v0 + 2] = _v4.z, _v9[_v3 + _v0 + 3] = 0), !0 === _v1 && (_v4.fromBufferAttribute(_v1, _v0), _v9[_v3 + _v0 + 4] = _v4.x, _v9[_v3 + _v0 + 5] = _v4.y, _v9[_v3 + _v0 + 6] = _v4.z, _v9[_v3 + _v0 + 7] = 0), !0 === _v2 && (_v4.fromBufferAttribute(_v2, _v0), _v9[_v3 + _v0 + 8] = _v4.x, _v9[_v3 + _v0 + 9] = _v4.y, _v9[_v3 + _v0 + 10] = _v4.z, _v9[_v3 + _v0 + 11] = 4 === _v2.itemSize ? _v4.w : 1);
            }
          }
          _v6 = {
            count: _v5,
            texture: _v10,
            size: new _v139(_v7, _v8)
          }, _v3.set(_v1, _v6), _v1.addEventListener("dispose", function _v0() {
            _v10.dispose(), _v3.delete(_v1), _v1.removeEventListener("dispose", _v0);
          });
        }
        if (!0 === _v0.isInstancedMesh && null !== _v0.morphTexture) _v2.getUniforms().setValue(_v0, "morphTexture", _v0.morphTexture, _v2);else {
          let _v0 = 0;
          for (let _v0 = 0; _v0 < _v3.length; _v0++) _v0 += _v3[_v0];
          let _v1 = _v1.morphTargetsRelative ? 1 : 1 - _v0;
          _v2.getUniforms().setValue(_v0, "morphTargetBaseInfluence", _v1), _v2.getUniforms().setValue(_v0, "morphTargetInfluences", _v3);
        }
        _v2.getUniforms().setValue(_v0, "morphTargetsTexture", _v6.texture, _v2), _v2.getUniforms().setValue(_v0, "morphTargetsTextureSize", _v6.size);
      }
    };
  }
  function _v379(_v0, _v1, _v2, _v3) {
    let _v4 = new WeakMap();
    function _v5(_v0) {
      let _v1 = _v0.target;
      _v1.removeEventListener("dispose", _v5), _v2.remove(_v1.instanceMatrix), null !== _v1.instanceColor && _v2.remove(_v1.instanceColor);
    }
    return {
      update: function (_v0) {
        let _v1 = _v3.render.frame,
          _v2 = _v0.geometry,
          _v3 = _v1.get(_v0, _v2);
        if (_v4.get(_v3) !== _v1 && (_v1.update(_v3), _v4.set(_v3, _v1)), _v0.isInstancedMesh && (!1 === _v0.hasEventListener("dispose", _v5) && _v0.addEventListener("dispose", _v5), _v4.get(_v0) !== _v1 && (_v2.update(_v0.instanceMatrix, _v0.ARRAY_BUFFER), null !== _v0.instanceColor && _v2.update(_v0.instanceColor, _v0.ARRAY_BUFFER), _v4.set(_v0, _v1))), _v0.isSkinnedMesh) {
          let _v0 = _v0.skeleton;
          _v4.get(_v0) !== _v1 && (_v0.update(), _v4.set(_v0, _v1));
        }
        return _v3;
      },
      dispose: function () {
        _v4 = new WeakMap();
      }
    };
  }
  let _v380 = new _v161(),
    _v381 = new _v298(1, 1),
    _v382 = new _v165(),
    _v383 = new class extends _v161 {
      constructor(_v0 = null, _v1 = 1, _v2 = 1, _v3 = 1) {
        super(null), this.isData3DTexture = !0, this.image = {
          data: _v0,
          width: _v1,
          height: _v2,
          depth: _v3
        }, this.magFilter = 0, this.minFilter = 0, this.wrapR = 0, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
      }
    }(),
    _v384 = new _v282(),
    _v385 = [],
    _v386 = [],
    _v387 = new Float32Array(16),
    _v388 = new Float32Array(9),
    _v389 = new Float32Array(4);
  function _v390(_v0, _v1, _v2) {
    let _v3 = _v0[0];
    if (_v3 <= 0 || _v3 > 0) return _v0;
    let _v4 = _v1 * _v2,
      _v5 = _v385[_v4];
    if (void 0 === _v5 && (_v5 = new Float32Array(_v4), _v385[_v4] = _v5), 0 !== _v1) {
      _v3.toArray(_v5, 0);
      for (let _v0 = 1, _v1 = 0; _v0 !== _v1; ++_v0) _v1 += _v2, _v0[_v0].toArray(_v5, _v1);
    }
    return _v5;
  }
  function _v391(_v0, _v1) {
    if (_v0.length !== _v1.length) return !1;
    for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) if (_v0[_v0] !== _v1[_v0]) return !1;
    return !0;
  }
  function _v392(_v0, _v1) {
    for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) _v0[_v0] = _v1[_v0];
  }
  function _v393(_v0, _v1) {
    let _v2 = _v386[_v1];
    void 0 === _v2 && (_v2 = new Int32Array(_v1), _v386[_v1] = _v2);
    for (let _v0 = 0; _v0 !== _v1; ++_v0) _v2[_v0] = _v0.allocateTextureUnit();
    return _v2;
  }
  function _v394(_v0, _v1) {
    let _v2 = this.cache;
    _v2[0] !== _v1 && (_v0.uniform1f(this.addr, _v1), _v2[0] = _v1);
  }
  function _v395(_v0, _v1) {
    let _v2 = this.cache;
    if (void 0 !== _v1.x) (_v2[0] !== _v1.x || _v2[1] !== _v1.y) && (_v0.uniform2f(this.addr, _v1.x, _v1.y), _v2[0] = _v1.x, _v2[1] = _v1.y);else {
      if (_v391(_v2, _v1)) return;
      _v0.uniform2fv(this.addr, _v1), _v392(_v2, _v1);
    }
  }
  function _v396(_v0, _v1) {
    let _v2 = this.cache;
    if (void 0 !== _v1.x) (_v2[0] !== _v1.x || _v2[1] !== _v1.y || _v2[2] !== _v1.z) && (_v0.uniform3f(this.addr, _v1.x, _v1.y, _v1.z), _v2[0] = _v1.x, _v2[1] = _v1.y, _v2[2] = _v1.z);else if (void 0 !== _v1.r) (_v2[0] !== _v1.r || _v2[1] !== _v1.g || _v2[2] !== _v1.b) && (_v0.uniform3f(this.addr, _v1.r, _v1.g, _v1.b), _v2[0] = _v1.r, _v2[1] = _v1.g, _v2[2] = _v1.b);else {
      if (_v391(_v2, _v1)) return;
      _v0.uniform3fv(this.addr, _v1), _v392(_v2, _v1);
    }
  }
  function _v397(_v0, _v1) {
    let _v2 = this.cache;
    if (void 0 !== _v1.x) (_v2[0] !== _v1.x || _v2[1] !== _v1.y || _v2[2] !== _v1.z || _v2[3] !== _v1.w) && (_v0.uniform4f(this.addr, _v1.x, _v1.y, _v1.z, _v1.w), _v2[0] = _v1.x, _v2[1] = _v1.y, _v2[2] = _v1.z, _v2[3] = _v1.w);else {
      if (_v391(_v2, _v1)) return;
      _v0.uniform4fv(this.addr, _v1), _v392(_v2, _v1);
    }
  }
  function _v398(_v0, _v1) {
    let _v2 = this.cache,
      _v3 = _v1.elements;
    if (void 0 === _v3) {
      if (_v391(_v2, _v1)) return;
      _v0.uniformMatrix2fv(this.addr, !1, _v1), _v392(_v2, _v1);
    } else {
      if (_v391(_v2, _v3)) return;
      _v389.set(_v3), _v0.uniformMatrix2fv(this.addr, !1, _v389), _v392(_v2, _v3);
    }
  }
  function _v399(_v0, _v1) {
    let _v2 = this.cache,
      _v3 = _v1.elements;
    if (void 0 === _v3) {
      if (_v391(_v2, _v1)) return;
      _v0.uniformMatrix3fv(this.addr, !1, _v1), _v392(_v2, _v1);
    } else {
      if (_v391(_v2, _v3)) return;
      _v388.set(_v3), _v0.uniformMatrix3fv(this.addr, !1, _v388), _v392(_v2, _v3);
    }
  }
  function _v400(_v0, _v1) {
    let _v2 = this.cache,
      _v3 = _v1.elements;
    if (void 0 === _v3) {
      if (_v391(_v2, _v1)) return;
      _v0.uniformMatrix4fv(this.addr, !1, _v1), _v392(_v2, _v1);
    } else {
      if (_v391(_v2, _v3)) return;
      _v387.set(_v3), _v0.uniformMatrix4fv(this.addr, !1, _v387), _v392(_v2, _v3);
    }
  }
  function _v401(_v0, _v1) {
    let _v2 = this.cache;
    _v2[0] !== _v1 && (_v0.uniform1i(this.addr, _v1), _v2[0] = _v1);
  }
  function _v402(_v0, _v1) {
    let _v2 = this.cache;
    if (void 0 !== _v1.x) (_v2[0] !== _v1.x || _v2[1] !== _v1.y) && (_v0.uniform2i(this.addr, _v1.x, _v1.y), _v2[0] = _v1.x, _v2[1] = _v1.y);else {
      if (_v391(_v2, _v1)) return;
      _v0.uniform2iv(this.addr, _v1), _v392(_v2, _v1);
    }
  }
  function _v403(_v0, _v1) {
    let _v2 = this.cache;
    if (void 0 !== _v1.x) (_v2[0] !== _v1.x || _v2[1] !== _v1.y || _v2[2] !== _v1.z) && (_v0.uniform3i(this.addr, _v1.x, _v1.y, _v1.z), _v2[0] = _v1.x, _v2[1] = _v1.y, _v2[2] = _v1.z);else {
      if (_v391(_v2, _v1)) return;
      _v0.uniform3iv(this.addr, _v1), _v392(_v2, _v1);
    }
  }
  function _v404(_v0, _v1) {
    let _v2 = this.cache;
    if (void 0 !== _v1.x) (_v2[0] !== _v1.x || _v2[1] !== _v1.y || _v2[2] !== _v1.z || _v2[3] !== _v1.w) && (_v0.uniform4i(this.addr, _v1.x, _v1.y, _v1.z, _v1.w), _v2[0] = _v1.x, _v2[1] = _v1.y, _v2[2] = _v1.z, _v2[3] = _v1.w);else {
      if (_v391(_v2, _v1)) return;
      _v0.uniform4iv(this.addr, _v1), _v392(_v2, _v1);
    }
  }
  function _v405(_v0, _v1) {
    let _v2 = this.cache;
    _v2[0] !== _v1 && (_v0.uniform1ui(this.addr, _v1), _v2[0] = _v1);
  }
  function _v406(_v0, _v1) {
    let _v2 = this.cache;
    if (void 0 !== _v1.x) (_v2[0] !== _v1.x || _v2[1] !== _v1.y) && (_v0.uniform2ui(this.addr, _v1.x, _v1.y), _v2[0] = _v1.x, _v2[1] = _v1.y);else {
      if (_v391(_v2, _v1)) return;
      _v0.uniform2uiv(this.addr, _v1), _v392(_v2, _v1);
    }
  }
  function _v407(_v0, _v1) {
    let _v2 = this.cache;
    if (void 0 !== _v1.x) (_v2[0] !== _v1.x || _v2[1] !== _v1.y || _v2[2] !== _v1.z) && (_v0.uniform3ui(this.addr, _v1.x, _v1.y, _v1.z), _v2[0] = _v1.x, _v2[1] = _v1.y, _v2[2] = _v1.z);else {
      if (_v391(_v2, _v1)) return;
      _v0.uniform3uiv(this.addr, _v1), _v392(_v2, _v1);
    }
  }
  function _v408(_v0, _v1) {
    let _v2 = this.cache;
    if (void 0 !== _v1.x) (_v2[0] !== _v1.x || _v2[1] !== _v1.y || _v2[2] !== _v1.z || _v2[3] !== _v1.w) && (_v0.uniform4ui(this.addr, _v1.x, _v1.y, _v1.z, _v1.w), _v2[0] = _v1.x, _v2[1] = _v1.y, _v2[2] = _v1.z, _v2[3] = _v1.w);else {
      if (_v391(_v2, _v1)) return;
      _v0.uniform4uiv(this.addr, _v1), _v392(_v2, _v1);
    }
  }
  function _v409(_v0, _v1, _v2) {
    let _v3,
      _v4 = this.cache,
      _v5 = _v2.allocateTextureUnit();
    _v4[0] !== _v5 && (_v0.uniform1i(this.addr, _v5), _v4[0] = _v5), this.type === _v0.SAMPLER_2D_SHADOW ? (_v381.compareFunction = 515, _v3 = _v381) : _v3 = _v380, _v2.setTexture2D(_v1 || _v3, _v5);
  }
  function _v410(_v0, _v1, _v2) {
    let _v3 = this.cache,
      _v4 = _v2.allocateTextureUnit();
    _v3[0] !== _v4 && (_v0.uniform1i(this.addr, _v4), _v3[0] = _v4), _v2.setTexture3D(_v1 || _v383, _v4);
  }
  function _v411(_v0, _v1, _v2) {
    let _v3 = this.cache,
      _v4 = _v2.allocateTextureUnit();
    _v3[0] !== _v4 && (_v0.uniform1i(this.addr, _v4), _v3[0] = _v4), _v2.setTextureCube(_v1 || _v384, _v4);
  }
  function _v412(_v0, _v1, _v2) {
    let _v3 = this.cache,
      _v4 = _v2.allocateTextureUnit();
    _v3[0] !== _v4 && (_v0.uniform1i(this.addr, _v4), _v3[0] = _v4), _v2.setTexture2DArray(_v1 || _v382, _v4);
  }
  function _v413(_v0, _v1) {
    _v0.uniform1fv(this.addr, _v1);
  }
  function _v414(_v0, _v1) {
    let _v2 = _v390(_v1, this.size, 2);
    _v0.uniform2fv(this.addr, _v2);
  }
  function _v415(_v0, _v1) {
    let _v2 = _v390(_v1, this.size, 3);
    _v0.uniform3fv(this.addr, _v2);
  }
  function _v416(_v0, _v1) {
    let _v2 = _v390(_v1, this.size, 4);
    _v0.uniform4fv(this.addr, _v2);
  }
  function _v417(_v0, _v1) {
    let _v2 = _v390(_v1, this.size, 4);
    _v0.uniformMatrix2fv(this.addr, !1, _v2);
  }
  function _v418(_v0, _v1) {
    let _v2 = _v390(_v1, this.size, 9);
    _v0.uniformMatrix3fv(this.addr, !1, _v2);
  }
  function _v419(_v0, _v1) {
    let _v2 = _v390(_v1, this.size, 16);
    _v0.uniformMatrix4fv(this.addr, !1, _v2);
  }
  function _v420(_v0, _v1) {
    _v0.uniform1iv(this.addr, _v1);
  }
  function _v421(_v0, _v1) {
    _v0.uniform2iv(this.addr, _v1);
  }
  function _v422(_v0, _v1) {
    _v0.uniform3iv(this.addr, _v1);
  }
  function _v423(_v0, _v1) {
    _v0.uniform4iv(this.addr, _v1);
  }
  function _v424(_v0, _v1) {
    _v0.uniform1uiv(this.addr, _v1);
  }
  function _v425(_v0, _v1) {
    _v0.uniform2uiv(this.addr, _v1);
  }
  function _v426(_v0, _v1) {
    _v0.uniform3uiv(this.addr, _v1);
  }
  function _v427(_v0, _v1) {
    _v0.uniform4uiv(this.addr, _v1);
  }
  function _v428(_v0, _v1, _v2) {
    let _v3 = this.cache,
      _v4 = _v1.length,
      _v5 = _v393(_v2, _v4);
    _v391(_v3, _v5) || (_v0.uniform1iv(this.addr, _v5), _v392(_v3, _v5));
    for (let _v0 = 0; _v0 !== _v4; ++_v0) _v2.setTexture2D(_v1[_v0] || _v380, _v5[_v0]);
  }
  function _v429(_v0, _v1, _v2) {
    let _v3 = this.cache,
      _v4 = _v1.length,
      _v5 = _v393(_v2, _v4);
    _v391(_v3, _v5) || (_v0.uniform1iv(this.addr, _v5), _v392(_v3, _v5));
    for (let _v0 = 0; _v0 !== _v4; ++_v0) _v2.setTexture3D(_v1[_v0] || _v383, _v5[_v0]);
  }
  function _v430(_v0, _v1, _v2) {
    let _v3 = this.cache,
      _v4 = _v1.length,
      _v5 = _v393(_v2, _v4);
    _v391(_v3, _v5) || (_v0.uniform1iv(this.addr, _v5), _v392(_v3, _v5));
    for (let _v0 = 0; _v0 !== _v4; ++_v0) _v2.setTextureCube(_v1[_v0] || _v384, _v5[_v0]);
  }
  function _v431(_v0, _v1, _v2) {
    let _v3 = this.cache,
      _v4 = _v1.length,
      _v5 = _v393(_v2, _v4);
    _v391(_v3, _v5) || (_v0.uniform1iv(this.addr, _v5), _v392(_v3, _v5));
    for (let _v0 = 0; _v0 !== _v4; ++_v0) _v2.setTexture2DArray(_v1[_v0] || _v382, _v5[_v0]);
  }
  class _v432 {
    constructor(_v0, _v1, _v2) {
      this.id = _v0, this.addr = _v2, this.cache = [], this.type = _v1.type, this.setValue = function (_v0) {
        switch (_v0) {
          case 0:
            return _v394;
          case 0:
            return _v395;
          case 0:
            return _v396;
          case 0:
            return _v397;
          case 0:
            return _v398;
          case 0:
            return _v399;
          case 0:
            return _v400;
          case 0:
          case 0:
            return _v401;
          case 0:
          case 0:
            return _v402;
          case 0:
          case 0:
            return _v403;
          case 0:
          case 0:
            return _v404;
          case 0:
            return _v405;
          case 0:
            return _v406;
          case 0:
            return _v407;
          case 0:
            return _v408;
          case 0:
          case 0:
          case 0:
          case 0:
          case 0:
            return _v409;
          case 0:
          case 0:
          case 0:
            return _v410;
          case 0:
          case 0:
          case 0:
          case 0:
            return _v411;
          case 0:
          case 0:
          case 0:
          case 0:
            return _v412;
        }
      }(_v1.type);
    }
  }
  class _v433 {
    constructor(_v0, _v1, _v2) {
      this.id = _v0, this.addr = _v2, this.cache = [], this.type = _v1.type, this.size = _v1.size, this.setValue = function (_v0) {
        switch (_v0) {
          case 0:
            return _v413;
          case 0:
            return _v414;
          case 0:
            return _v415;
          case 0:
            return _v416;
          case 0:
            return _v417;
          case 0:
            return _v418;
          case 0:
            return _v419;
          case 0:
          case 0:
            return _v420;
          case 0:
          case 0:
            return _v421;
          case 0:
          case 0:
            return _v422;
          case 0:
          case 0:
            return _v423;
          case 0:
            return _v424;
          case 0:
            return _v425;
          case 0:
            return _v426;
          case 0:
            return _v427;
          case 0:
          case 0:
          case 0:
          case 0:
          case 0:
            return _v428;
          case 0:
          case 0:
          case 0:
            return _v429;
          case 0:
          case 0:
          case 0:
          case 0:
            return _v430;
          case 0:
          case 0:
          case 0:
          case 0:
            return _v431;
        }
      }(_v1.type);
    }
  }
  class _v434 {
    constructor(_v0) {
      this.id = _v0, this.seq = [], this.map = {};
    }
    setValue(_v0, _v1, _v2) {
      let _v3 = this.seq;
      for (let _v0 = 0, _v1 = _v3.length; _v0 !== _v1; ++_v0) {
        let _v0 = _v3[_v0];
        _v0.setValue(_v0, _v1[_v0.id], _v2);
      }
    }
  }
  let _v435 = /(\w+)(\])?(\[|\.)?/g;
  function _v436(_v0, _v1) {
    _v0.seq.push(_v1), _v0.map[_v1.id] = _v1;
  }
  class _v437 {
    constructor(_v0, _v1) {
      this.seq = [], this.map = {};
      const _v2 = _v0.getProgramParameter(_v1, _v0.ACTIVE_UNIFORMS);
      for (let _v0 = 0; _v0 < _v2; ++_v0) {
        const _v0 = _v0.getActiveUniform(_v1, _v0),
          _v1 = _v0.getUniformLocation(_v1, _v0.name);
        !function (_v0, _v1, _v2) {
          let _v3 = _v0.name,
            _v4 = _v3.length;
          for (_v435.lastIndex = 0;;) {
            let _v0 = _v435.exec(_v3),
              _v1 = _v435.lastIndex,
              _v2 = _v0[1],
              _v3 = "]" === _v0[2],
              _v4 = _v0[3];
            if (_v3 && (_v2 |= 0), void 0 === _v4 || "[" === _v4 && _v1 + 2 === _v4) {
              _v436(_v2, void 0 === _v4 ? new _v432(_v2, _v0, _v1) : new _v433(_v2, _v0, _v1));
              break;
            }
            {
              let _v0 = _v2.map[_v2];
              void 0 === _v0 && _v436(_v2, _v0 = new _v434(_v2)), _v2 = _v0;
            }
          }
        }(_v0, _v1, this);
      }
    }
    setValue(_v0, _v1, _v2, _v3) {
      let _v4 = this.map[_v1];
      void 0 !== _v4 && _v4.setValue(_v0, _v2, _v3);
    }
    setOptional(_v0, _v1, _v2) {
      let _v3 = _v1[_v2];
      void 0 !== _v3 && this.setValue(_v0, _v2, _v3);
    }
    static upload(_v0, _v1, _v2, _v3) {
      for (let _v0 = 0, _v1 = _v1.length; _v0 !== _v1; ++_v0) {
        let _v0 = _v1[_v0],
          _v1 = _v2[_v0.id];
        !1 !== _v1.needsUpdate && _v0.setValue(_v0, _v1.value, _v3);
      }
    }
    static seqWithValue(_v0, _v1) {
      let _v2 = [];
      for (let _v0 = 0, _v1 = _v0.length; _v0 !== _v1; ++_v0) {
        let _v0 = _v0[_v0];
        _v0.id in _v1 && _v2.push(_v0);
      }
      return _v2;
    }
  }
  function _v438(_v0, _v1, _v2) {
    let _v3 = _v0.createShader(_v1);
    return _v0.shaderSource(_v3, _v2), _v0.compileShader(_v3), _v3;
  }
  let _v439 = 0,
    _v440 = new _v144();
  function _v441(_v0, _v1, _v2) {
    let _v3 = _v0.getShaderParameter(_v1, _v0.COMPILE_STATUS),
      _v4 = (_v0.getShaderInfoLog(_v1) || "").trim();
    if (_v3 && "" === _v4) return "";
    let _v5 = /ERROR: 0:(\d+)/.exec(_v4);
    if (!_v5) return _v4;
    {
      let _v0 = parseInt(_v5[1]);
      return _v2.toUpperCase() + "\n\n" + _v4 + "\n\n" + function (_v0, _v1) {
        let _v2 = _v0.split("\n"),
          _v3 = [],
          _v4 = Math.max(_v1 - 6, 0),
          _v5 = Math.min(_v1 + 6, _v2.length);
        for (let _v0 = _v4; _v0 < _v5; _v0++) {
          let _v0 = _v0 + 1;
          _v3.push(`${_v0 === _v1 ? ">" : " "} ${_v0}: ${_v2[_v0]}`);
        }
        return _v3.join("\n");
      }(_v0.getShaderSource(_v1), _v0);
    }
  }
  let _v442 = new _v141();
  function _v443(_v0) {
    return "" !== _v0;
  }
  function _v444(_v0, _v1) {
    let _v2 = _v1.numSpotLightShadows + _v1.numSpotLightMaps - _v1.numSpotLightShadowsWithMaps;
    return _v0.replace(/NUM_DIR_LIGHTS/g, _v1.numDirLights).replace(/NUM_SPOT_LIGHTS/g, _v1.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, _v1.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, _v2).replace(/NUM_RECT_AREA_LIGHTS/g, _v1.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, _v1.numPointLights).replace(/NUM_HEMI_LIGHTS/g, _v1.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, _v1.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, _v1.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, _v1.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, _v1.numPointLightShadows);
  }
  function _v445(_v0, _v1) {
    return _v0.replace(/NUM_CLIPPING_PLANES/g, _v1.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, _v1.numClippingPlanes - _v1.numClipIntersection);
  }
  let _v446 = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function _v447(_v0) {
    return _v0.replace(_v446, _v449);
  }
  let _v448 = new Map();
  function _v449(_v0, _v1) {
    let _v2 = _v344[_v1];
    if (void 0 === _v2) {
      let _v0 = _v448.get(_v1);
      if (void 0 !== _v0) _v2 = _v344[_v0], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', _v1, _v0);else throw Error("Can not resolve #include <" + _v1 + ">");
    }
    return _v447(_v2);
  }
  let _v450 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function _v451(_v0) {
    return _v0.replace(_v450, _v452);
  }
  function _v452(_v0, _v1, _v2, _v3) {
    let _v4 = "";
    for (let _v0 = parseInt(_v1); _v0 < parseInt(_v2); _v0++) _v4 += _v3.replace(/\[\s*i\s*\]/g, "[ " + _v0 + " ]").replace(/UNROLLED_LOOP_INDEX/g, _v0);
    return _v4;
  }
  function _v453(_v0) {
    let _v1 = `precision ${_v0.precision} float;
	precision ${_v0.precision} int;
	precision ${_v0.precision} sampler2D;
	precision ${_v0.precision} samplerCube;
	precision ${_v0.precision} sampler3D;
	precision ${_v0.precision} sampler2DArray;
	precision ${_v0.precision} sampler2DShadow;
	precision ${_v0.precision} samplerCubeShadow;
	precision ${_v0.precision} sampler2DArrayShadow;
	precision ${_v0.precision} isampler2D;
	precision ${_v0.precision} isampler3D;
	precision ${_v0.precision} isamplerCube;
	precision ${_v0.precision} isampler2DArray;
	precision ${_v0.precision} usampler2D;
	precision ${_v0.precision} usampler3D;
	precision ${_v0.precision} usamplerCube;
	precision ${_v0.precision} usampler2DArray;
	`;
    return "highp" === _v0.precision ? _v1 += "\n#define HIGH_PRECISION" : "mediump" === _v0.precision ? _v1 += "\n#define MEDIUM_PRECISION" : "lowp" === _v0.precision && (_v1 += "\n#define LOW_PRECISION"), _v1;
  }
  function _v454(_v0, _v1, _v2, _v3) {
    let _v4,
      _v5,
      _v6,
      _v7,
      _v8,
      _v9,
      _v10 = _v0.getContext(),
      _v11 = _v2.defines,
      _v12 = _v2.vertexShader,
      _v13 = _v2.fragmentShader,
      _v14 = (_v8 = "SHADOWMAP_TYPE_BASIC", 1 === _v2.shadowMapType ? _v8 = "SHADOWMAP_TYPE_PCF" : 2 === _v2.shadowMapType ? _v8 = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === _v2.shadowMapType && (_v8 = "SHADOWMAP_TYPE_VSM"), _v8),
      _v15 = function (_v0) {
        let _v1 = "ENVMAP_TYPE_CUBE";
        if (_v0.envMap) switch (_v0.envMapMode) {
          case 301:
          case 302:
            _v1 = "ENVMAP_TYPE_CUBE";
            break;
          case 306:
            _v1 = "ENVMAP_TYPE_CUBE_UV";
        }
        return _v1;
      }(_v2),
      _v16 = (_v9 = "ENVMAP_MODE_REFLECTION", _v2.envMap && 302 === _v2.envMapMode && (_v9 = "ENVMAP_MODE_REFRACTION"), _v9),
      _v17 = function (_v0) {
        let _v1 = "ENVMAP_BLENDING_NONE";
        if (_v0.envMap) switch (_v0.combine) {
          case 0:
            _v1 = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case 1:
            _v1 = "ENVMAP_BLENDING_MIX";
            break;
          case 2:
            _v1 = "ENVMAP_BLENDING_ADD";
        }
        return _v1;
      }(_v2),
      _v18 = function (_v0) {
        let _v1 = _v0.envMapCubeUVHeight;
        if (null === _v1) return null;
        let _v2 = Math.log2(_v1) - 2;
        return {
          texelWidth: 1 / (3 * Math.max(Math.pow(2, _v2), 112)),
          texelHeight: 1 / _v1,
          maxMip: _v2
        };
      }(_v2),
      _v19 = [_v2.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", _v2.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(_v443).join("\n"),
      _v20 = function (_v0) {
        let _v1 = [];
        for (let _v0 in _v0) {
          let _v0 = _v0[_v0];
          !1 !== _v0 && _v1.push("#define " + _v0 + " " + _v0);
        }
        return _v1.join("\n");
      }(_v11),
      _v21 = _v10.createProgram(),
      _v22 = _v2.glslVersion ? "#version " + _v2.glslVersion + "\n" : "";
    if (_v2.isRawShaderMaterial) (_v4 = ["#define SHADER_TYPE " + _v2.shaderType, "#define SHADER_NAME " + _v2.shaderName, _v20].filter(_v443).join("\n")).length > 0 && (_v4 += "\n"), (_v5 = ["#define SHADER_TYPE " + _v2.shaderType, "#define SHADER_NAME " + _v2.shaderName, _v20].filter(_v443).join("\n")).length > 0 && (_v5 += "\n");else {
      let _v0, _v1, _v2, _v3;
      _v4 = [_v453(_v2), "#define SHADER_TYPE " + _v2.shaderType, "#define SHADER_NAME " + _v2.shaderName, _v20, _v2.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", _v2.batching ? "#define USE_BATCHING" : "", _v2.batchingColor ? "#define USE_BATCHING_COLOR" : "", _v2.instancing ? "#define USE_INSTANCING" : "", _v2.instancingColor ? "#define USE_INSTANCING_COLOR" : "", _v2.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", _v2.useFog && _v2.fog ? "#define USE_FOG" : "", _v2.useFog && _v2.fogExp2 ? "#define FOG_EXP2" : "", _v2.map ? "#define USE_MAP" : "", _v2.envMap ? "#define USE_ENVMAP" : "", _v2.envMap ? "#define " + _v16 : "", _v2.lightMap ? "#define USE_LIGHTMAP" : "", _v2.aoMap ? "#define USE_AOMAP" : "", _v2.bumpMap ? "#define USE_BUMPMAP" : "", _v2.normalMap ? "#define USE_NORMALMAP" : "", _v2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", _v2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", _v2.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", _v2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", _v2.anisotropy ? "#define USE_ANISOTROPY" : "", _v2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", _v2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", _v2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", _v2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", _v2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", _v2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", _v2.specularMap ? "#define USE_SPECULARMAP" : "", _v2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", _v2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", _v2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", _v2.metalnessMap ? "#define USE_METALNESSMAP" : "", _v2.alphaMap ? "#define USE_ALPHAMAP" : "", _v2.alphaHash ? "#define USE_ALPHAHASH" : "", _v2.transmission ? "#define USE_TRANSMISSION" : "", _v2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", _v2.thicknessMap ? "#define USE_THICKNESSMAP" : "", _v2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", _v2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", _v2.mapUv ? "#define MAP_UV " + _v2.mapUv : "", _v2.alphaMapUv ? "#define ALPHAMAP_UV " + _v2.alphaMapUv : "", _v2.lightMapUv ? "#define LIGHTMAP_UV " + _v2.lightMapUv : "", _v2.aoMapUv ? "#define AOMAP_UV " + _v2.aoMapUv : "", _v2.emissiveMapUv ? "#define EMISSIVEMAP_UV " + _v2.emissiveMapUv : "", _v2.bumpMapUv ? "#define BUMPMAP_UV " + _v2.bumpMapUv : "", _v2.normalMapUv ? "#define NORMALMAP_UV " + _v2.normalMapUv : "", _v2.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + _v2.displacementMapUv : "", _v2.metalnessMapUv ? "#define METALNESSMAP_UV " + _v2.metalnessMapUv : "", _v2.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + _v2.roughnessMapUv : "", _v2.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + _v2.anisotropyMapUv : "", _v2.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + _v2.clearcoatMapUv : "", _v2.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + _v2.clearcoatNormalMapUv : "", _v2.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + _v2.clearcoatRoughnessMapUv : "", _v2.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + _v2.iridescenceMapUv : "", _v2.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + _v2.iridescenceThicknessMapUv : "", _v2.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + _v2.sheenColorMapUv : "", _v2.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + _v2.sheenRoughnessMapUv : "", _v2.specularMapUv ? "#define SPECULARMAP_UV " + _v2.specularMapUv : "", _v2.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + _v2.specularColorMapUv : "", _v2.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + _v2.specularIntensityMapUv : "", _v2.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + _v2.transmissionMapUv : "", _v2.thicknessMapUv ? "#define THICKNESSMAP_UV " + _v2.thicknessMapUv : "", _v2.vertexTangents && !1 === _v2.flatShading ? "#define USE_TANGENT" : "", _v2.vertexColors ? "#define USE_COLOR" : "", _v2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", _v2.vertexUv1s ? "#define USE_UV1" : "", _v2.vertexUv2s ? "#define USE_UV2" : "", _v2.vertexUv3s ? "#define USE_UV3" : "", _v2.pointsUvs ? "#define USE_POINTS_UV" : "", _v2.flatShading ? "#define FLAT_SHADED" : "", _v2.skinning ? "#define USE_SKINNING" : "", _v2.morphTargets ? "#define USE_MORPHTARGETS" : "", _v2.morphNormals && !1 === _v2.flatShading ? "#define USE_MORPHNORMALS" : "", _v2.morphColors ? "#define USE_MORPHCOLORS" : "", _v2.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + _v2.morphTextureStride : "", _v2.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + _v2.morphTargetsCount : "", _v2.doubleSided ? "#define DOUBLE_SIDED" : "", _v2.flipSided ? "#define FLIP_SIDED" : "", _v2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", _v2.shadowMapEnabled ? "#define " + _v14 : "", _v2.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", _v2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", _v2.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", _v2.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(_v443).join("\n"), _v5 = [_v453(_v2), "#define SHADER_TYPE " + _v2.shaderType, "#define SHADER_NAME " + _v2.shaderName, _v20, _v2.useFog && _v2.fog ? "#define USE_FOG" : "", _v2.useFog && _v2.fogExp2 ? "#define FOG_EXP2" : "", _v2.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", _v2.map ? "#define USE_MAP" : "", _v2.matcap ? "#define USE_MATCAP" : "", _v2.envMap ? "#define USE_ENVMAP" : "", _v2.envMap ? "#define " + _v15 : "", _v2.envMap ? "#define " + _v16 : "", _v2.envMap ? "#define " + _v17 : "", _v18 ? "#define CUBEUV_TEXEL_WIDTH " + _v18.texelWidth : "", _v18 ? "#define CUBEUV_TEXEL_HEIGHT " + _v18.texelHeight : "", _v18 ? "#define CUBEUV_MAX_MIP " + _v18.maxMip + ".0" : "", _v2.lightMap ? "#define USE_LIGHTMAP" : "", _v2.aoMap ? "#define USE_AOMAP" : "", _v2.bumpMap ? "#define USE_BUMPMAP" : "", _v2.normalMap ? "#define USE_NORMALMAP" : "", _v2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", _v2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", _v2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", _v2.anisotropy ? "#define USE_ANISOTROPY" : "", _v2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", _v2.clearcoat ? "#define USE_CLEARCOAT" : "", _v2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", _v2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", _v2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", _v2.dispersion ? "#define USE_DISPERSION" : "", _v2.iridescence ? "#define USE_IRIDESCENCE" : "", _v2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", _v2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", _v2.specularMap ? "#define USE_SPECULARMAP" : "", _v2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", _v2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", _v2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", _v2.metalnessMap ? "#define USE_METALNESSMAP" : "", _v2.alphaMap ? "#define USE_ALPHAMAP" : "", _v2.alphaTest ? "#define USE_ALPHATEST" : "", _v2.alphaHash ? "#define USE_ALPHAHASH" : "", _v2.sheen ? "#define USE_SHEEN" : "", _v2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", _v2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", _v2.transmission ? "#define USE_TRANSMISSION" : "", _v2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", _v2.thicknessMap ? "#define USE_THICKNESSMAP" : "", _v2.vertexTangents && !1 === _v2.flatShading ? "#define USE_TANGENT" : "", _v2.vertexColors || _v2.instancingColor || _v2.batchingColor ? "#define USE_COLOR" : "", _v2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", _v2.vertexUv1s ? "#define USE_UV1" : "", _v2.vertexUv2s ? "#define USE_UV2" : "", _v2.vertexUv3s ? "#define USE_UV3" : "", _v2.pointsUvs ? "#define USE_POINTS_UV" : "", _v2.gradientMap ? "#define USE_GRADIENTMAP" : "", _v2.flatShading ? "#define FLAT_SHADED" : "", _v2.doubleSided ? "#define DOUBLE_SIDED" : "", _v2.flipSided ? "#define FLIP_SIDED" : "", _v2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", _v2.shadowMapEnabled ? "#define " + _v14 : "", _v2.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", _v2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", _v2.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", _v2.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", _v2.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", _v2.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== _v2.toneMapping ? "#define TONE_MAPPING" : "", 0 !== _v2.toneMapping ? _v344.tonemapping_pars_fragment : "", 0 !== _v2.toneMapping ? function (_v0, _v1) {
        let _v2;
        switch (_v1) {
          case 1:
            _v2 = "Linear";
            break;
          case 2:
            _v2 = "Reinhard";
            break;
          case 3:
            _v2 = "Cineon";
            break;
          case 4:
            _v2 = "ACESFilmic";
            break;
          case 6:
            _v2 = "AgX";
            break;
          case 7:
            _v2 = "Neutral";
            break;
          case 5:
            _v2 = "Custom";
            break;
          default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", _v1), _v2 = "Linear";
        }
        return "vec3 " + _v0 + "( vec3 color ) { return " + _v2 + "ToneMapping( color ); }";
      }("toneMapping", _v2.toneMapping) : "", _v2.dithering ? "#define DITHERING" : "", _v2.opaque ? "#define OPAQUE" : "", _v344.colorspace_pars_fragment, (_v0 = function (_v0) {
        _v152._getMatrix(_v440, _v152.workingColorSpace, _v0);
        let _v1 = `mat3( ${_v440.elements.map(_v0 => _v0.toFixed(4))} )`;
        switch (_v152.getTransfer(_v0)) {
          case _v128:
            return [_v1, "LinearTransferOETF"];
          case _v129:
            return [_v1, "sRGBTransferOETF"];
          default:
            return console.warn("THREE.WebGLProgram: Unsupported color space: ", _v0), [_v1, "LinearTransferOETF"];
        }
      }(_v2.outputColorSpace), `vec4 linearToOutputTexel( vec4 value ) {
	return ${_v0[1]}( vec4( value.rgb * ${_v0[0]}, value.a ) );
}`), (_v152.getLuminanceCoefficients(_v442), _v1 = _v442.x.toFixed(4), _v2 = _v442.y.toFixed(4), _v3 = _v442.z.toFixed(4), `float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( ${_v1}, ${_v2}, ${_v3} );
	return dot( weights, rgb );
}`), _v2.useDepthPacking ? "#define DEPTH_PACKING " + _v2.depthPacking : "", "\n"].filter(_v443).join("\n");
    }
    _v12 = _v445(_v12 = _v444(_v12 = _v447(_v12), _v2), _v2), _v13 = _v445(_v13 = _v444(_v13 = _v447(_v13), _v2), _v2), _v12 = _v451(_v12), _v13 = _v451(_v13), !0 !== _v2.isRawShaderMaterial && (_v22 = "#version 300 es\n", _v4 = [_v19, "#define attribute in\n#define varying out\n#define texture2D texture"].join("\n") + "\n" + _v4, _v5 = ["#define varying in", _v2.glslVersion === _v130 ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", _v2.glslVersion === _v130 ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + _v5);
    let _v23 = _v22 + _v4 + _v12,
      _v24 = _v22 + _v5 + _v13,
      _v25 = _v438(_v10, _v10.VERTEX_SHADER, _v23),
      _v26 = _v438(_v10, _v10.FRAGMENT_SHADER, _v24);
    function _v27(_v0) {
      if (_v0.debug.checkShaderErrors) {
        let _v0 = _v10.getProgramInfoLog(_v21) || "",
          _v1 = _v10.getShaderInfoLog(_v25) || "",
          _v2 = _v10.getShaderInfoLog(_v26) || "",
          _v3 = _v0.trim(),
          _v4 = _v1.trim(),
          _v5 = _v2.trim(),
          _v6 = !0,
          _v7 = !0;
        if (!1 === _v10.getProgramParameter(_v21, _v10.LINK_STATUS)) {
          if (_v6 = !1, "function" == typeof _v0.debug.onShaderError) _v0.debug.onShaderError(_v10, _v21, _v25, _v26);else {
            let _v0 = _v441(_v10, _v25, "vertex"),
              _v1 = _v441(_v10, _v26, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + _v10.getError() + " - VALIDATE_STATUS " + _v10.getProgramParameter(_v21, _v10.VALIDATE_STATUS) + "\n\nMaterial Name: " + _v0.name + "\nMaterial Type: " + _v0.type + "\n\nProgram Info Log: " + _v3 + "\n" + _v0 + "\n" + _v1);
          }
        } else "" !== _v3 ? console.warn("THREE.WebGLProgram: Program Info Log:", _v3) : ("" === _v4 || "" === _v5) && (_v7 = !1);
        _v7 && (_v0.diagnostics = {
          runnable: _v6,
          programLog: _v3,
          vertexShader: {
            log: _v4,
            prefix: _v4
          },
          fragmentShader: {
            log: _v5,
            prefix: _v5
          }
        });
      }
      _v10.deleteShader(_v25), _v10.deleteShader(_v26), _v6 = new _v437(_v10, _v21), _v7 = function (_v0, _v1) {
        let _v2 = {},
          _v3 = _v0.getProgramParameter(_v1, _v0.ACTIVE_ATTRIBUTES);
        for (let _v0 = 0; _v0 < _v3; _v0++) {
          let _v0 = _v0.getActiveAttrib(_v1, _v0),
            _v1 = _v0.name,
            _v2 = 1;
          _v0.type === _v0.FLOAT_MAT2 && (_v2 = 2), _v0.type === _v0.FLOAT_MAT3 && (_v2 = 3), _v0.type === _v0.FLOAT_MAT4 && (_v2 = 4), _v2[_v1] = {
            type: _v0.type,
            location: _v0.getAttribLocation(_v1, _v1),
            locationSize: _v2
          };
        }
        return _v2;
      }(_v10, _v21);
    }
    _v10.attachShader(_v21, _v25), _v10.attachShader(_v21, _v26), void 0 !== _v2.index0AttributeName ? _v10.bindAttribLocation(_v21, 0, _v2.index0AttributeName) : !0 === _v2.morphTargets && _v10.bindAttribLocation(_v21, 0, "position"), _v10.linkProgram(_v21), this.getUniforms = function () {
      return void 0 === _v6 && _v27(this), _v6;
    }, this.getAttributes = function () {
      return void 0 === _v7 && _v27(this), _v7;
    };
    let _v28 = !1 === _v2.rendererExtensionParallelShaderCompile;
    return this.isReady = function () {
      return !1 === _v28 && (_v28 = _v10.getProgramParameter(_v21, 0)), _v28;
    }, this.destroy = function () {
      _v3.releaseStatesOfProgram(this), _v10.deleteProgram(_v21), this.program = void 0;
    }, this.type = _v2.shaderType, this.name = _v2.shaderName, this.id = _v439++, this.cacheKey = _v1, this.usedTimes = 1, this.program = _v21, this.vertexShader = _v25, this.fragmentShader = _v26, this;
  }
  let _v455 = 0;
  class _v456 {
    constructor() {
      this.shaderCache = new Map(), this.materialCache = new Map();
    }
    update(_v0) {
      let _v1 = _v0.vertexShader,
        _v2 = _v0.fragmentShader,
        _v3 = this._getShaderStage(_v1),
        _v4 = this._getShaderStage(_v2),
        _v5 = this._getShaderCacheForMaterial(_v0);
      return !1 === _v5.has(_v3) && (_v5.add(_v3), _v3.usedTimes++), !1 === _v5.has(_v4) && (_v5.add(_v4), _v4.usedTimes++), this;
    }
    remove(_v0) {
      for (let _v0 of this.materialCache.get(_v0)) _v0.usedTimes--, 0 === _v0.usedTimes && this.shaderCache.delete(_v0.code);
      return this.materialCache.delete(_v0), this;
    }
    getVertexShaderID(_v0) {
      return this._getShaderStage(_v0.vertexShader).id;
    }
    getFragmentShaderID(_v0) {
      return this._getShaderStage(_v0.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(_v0) {
      let _v1 = this.materialCache,
        _v2 = _v1.get(_v0);
      return void 0 === _v2 && (_v2 = new Set(), _v1.set(_v0, _v2)), _v2;
    }
    _getShaderStage(_v0) {
      let _v1 = this.shaderCache,
        _v2 = _v1.get(_v0);
      return void 0 === _v2 && (_v2 = new _v457(_v0), _v1.set(_v0, _v2)), _v2;
    }
  }
  class _v457 {
    constructor(_v0) {
      this.id = _v455++, this.code = _v0, this.usedTimes = 0;
    }
  }
  function _v458(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
    let _v7 = new _v203(),
      _v8 = new _v456(),
      _v9 = new Set(),
      _v10 = [],
      _v11 = _v4.logarithmicDepthBuffer,
      _v12 = _v4.vertexTextures,
      _v13 = _v4.precision,
      _v14 = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
      };
    function _v15(_v0) {
      return (_v9.add(_v0), 0 === _v0) ? "uv" : `uv${_v0}`;
    }
    return {
      getParameters: function (_v0, _v1, _v2, _v3, _v4) {
        let _v5,
          _v6,
          _v7,
          _v8,
          _v9 = _v3.fog,
          _v10 = _v4.geometry,
          _v11 = _v0.isMeshStandardMaterial ? _v3.environment : null,
          _v12 = (_v0.isMeshStandardMaterial ? _v2 : _v1).get(_v0.envMap || _v11),
          _v13 = _v12 && 306 === _v12.mapping ? _v12.image.height : null,
          _v14 = _v14[_v0.type];
        null !== _v0.precision && (_v13 = _v4.getMaxPrecision(_v0.precision)) !== _v0.precision && console.warn("THREE.WebGLProgram.getParameters:", _v0.precision, "not supported, using", _v13, "instead.");
        let _v15 = _v10.morphAttributes.position || _v10.morphAttributes.normal || _v10.morphAttributes.color,
          _v16 = void 0 !== _v15 ? _v15.length : 0,
          _v17 = 0;
        if (void 0 !== _v10.morphAttributes.position && (_v17 = 1), void 0 !== _v10.morphAttributes.normal && (_v17 = 2), void 0 !== _v10.morphAttributes.color && (_v17 = 3), _v14) {
          let _v0 = _v346[_v14];
          _v5 = _v0.vertexShader, _v6 = _v0.fragmentShader;
        } else _v5 = _v0.vertexShader, _v6 = _v0.fragmentShader, _v8.update(_v0), _v7 = _v8.getVertexShaderID(_v0), _v8 = _v8.getFragmentShaderID(_v0);
        let _v18 = _v0.getRenderTarget(),
          _v19 = _v0.state.buffers.depth.getReversed(),
          _v20 = !0 === _v4.isInstancedMesh,
          _v21 = !0 === _v4.isBatchedMesh,
          _v22 = !!_v0.map,
          _v23 = !!_v0.matcap,
          _v24 = !!_v12,
          _v25 = !!_v0.aoMap,
          _v26 = !!_v0.lightMap,
          _v27 = !!_v0.bumpMap,
          _v28 = !!_v0.normalMap,
          _v29 = !!_v0.displacementMap,
          _v30 = !!_v0.emissiveMap,
          _v31 = !!_v0.metalnessMap,
          _v32 = !!_v0.roughnessMap,
          _v33 = _v0.anisotropy > 0,
          _v34 = _v0.clearcoat > 0,
          _v35 = _v0.dispersion > 0,
          _v36 = _v0.iridescence > 0,
          _v37 = _v0.sheen > 0,
          _v38 = _v0.transmission > 0,
          _v39 = _v33 && !!_v0.anisotropyMap,
          _v40 = _v34 && !!_v0.clearcoatMap,
          _v41 = _v34 && !!_v0.clearcoatNormalMap,
          _v42 = _v34 && !!_v0.clearcoatRoughnessMap,
          _v43 = _v36 && !!_v0.iridescenceMap,
          _v44 = _v36 && !!_v0.iridescenceThicknessMap,
          _v45 = _v37 && !!_v0.sheenColorMap,
          _v46 = _v37 && !!_v0.sheenRoughnessMap,
          _v47 = !!_v0.specularMap,
          _v48 = !!_v0.specularColorMap,
          _v49 = !!_v0.specularIntensityMap,
          _v50 = _v38 && !!_v0.transmissionMap,
          _v51 = _v38 && !!_v0.thicknessMap,
          _v52 = !!_v0.gradientMap,
          _v53 = !!_v0.alphaMap,
          _v54 = _v0.alphaTest > 0,
          _v55 = !!_v0.alphaHash,
          _v56 = !!_v0.extensions,
          _v57 = 0;
        _v0.toneMapped && (null === _v18 || !0 === _v18.isXRRenderTarget) && (_v57 = _v0.toneMapping);
        let _v58 = {
          shaderID: _v14,
          shaderType: _v0.type,
          shaderName: _v0.name,
          vertexShader: _v5,
          fragmentShader: _v6,
          defines: _v0.defines,
          customVertexShaderID: _v7,
          customFragmentShaderID: _v8,
          isRawShaderMaterial: !0 === _v0.isRawShaderMaterial,
          glslVersion: _v0.glslVersion,
          precision: _v13,
          batching: _v21,
          batchingColor: _v21 && null !== _v4._colorsTexture,
          instancing: _v20,
          instancingColor: _v20 && null !== _v4.instanceColor,
          instancingMorph: _v20 && null !== _v4.morphTexture,
          supportsVertexTextures: _v12,
          outputColorSpace: null === _v18 ? _v0.outputColorSpace : !0 === _v18.isXRRenderTarget ? _v18.texture.colorSpace : _v127,
          alphaToCoverage: !!_v0.alphaToCoverage,
          map: _v22,
          matcap: _v23,
          envMap: _v24,
          envMapMode: _v24 && _v12.mapping,
          envMapCubeUVHeight: _v13,
          aoMap: _v25,
          lightMap: _v26,
          bumpMap: _v27,
          normalMap: _v28,
          displacementMap: _v12 && _v29,
          emissiveMap: _v30,
          normalMapObjectSpace: _v28 && 1 === _v0.normalMapType,
          normalMapTangentSpace: _v28 && 0 === _v0.normalMapType,
          metalnessMap: _v31,
          roughnessMap: _v32,
          anisotropy: _v33,
          anisotropyMap: _v39,
          clearcoat: _v34,
          clearcoatMap: _v40,
          clearcoatNormalMap: _v41,
          clearcoatRoughnessMap: _v42,
          dispersion: _v35,
          iridescence: _v36,
          iridescenceMap: _v43,
          iridescenceThicknessMap: _v44,
          sheen: _v37,
          sheenColorMap: _v45,
          sheenRoughnessMap: _v46,
          specularMap: _v47,
          specularColorMap: _v48,
          specularIntensityMap: _v49,
          transmission: _v38,
          transmissionMap: _v50,
          thicknessMap: _v51,
          gradientMap: _v52,
          opaque: !1 === _v0.transparent && 1 === _v0.blending && !1 === _v0.alphaToCoverage,
          alphaMap: _v53,
          alphaTest: _v54,
          alphaHash: _v55,
          combine: _v0.combine,
          mapUv: _v22 && _v15(_v0.map.channel),
          aoMapUv: _v25 && _v15(_v0.aoMap.channel),
          lightMapUv: _v26 && _v15(_v0.lightMap.channel),
          bumpMapUv: _v27 && _v15(_v0.bumpMap.channel),
          normalMapUv: _v28 && _v15(_v0.normalMap.channel),
          displacementMapUv: _v29 && _v15(_v0.displacementMap.channel),
          emissiveMapUv: _v30 && _v15(_v0.emissiveMap.channel),
          metalnessMapUv: _v31 && _v15(_v0.metalnessMap.channel),
          roughnessMapUv: _v32 && _v15(_v0.roughnessMap.channel),
          anisotropyMapUv: _v39 && _v15(_v0.anisotropyMap.channel),
          clearcoatMapUv: _v40 && _v15(_v0.clearcoatMap.channel),
          clearcoatNormalMapUv: _v41 && _v15(_v0.clearcoatNormalMap.channel),
          clearcoatRoughnessMapUv: _v42 && _v15(_v0.clearcoatRoughnessMap.channel),
          iridescenceMapUv: _v43 && _v15(_v0.iridescenceMap.channel),
          iridescenceThicknessMapUv: _v44 && _v15(_v0.iridescenceThicknessMap.channel),
          sheenColorMapUv: _v45 && _v15(_v0.sheenColorMap.channel),
          sheenRoughnessMapUv: _v46 && _v15(_v0.sheenRoughnessMap.channel),
          specularMapUv: _v47 && _v15(_v0.specularMap.channel),
          specularColorMapUv: _v48 && _v15(_v0.specularColorMap.channel),
          specularIntensityMapUv: _v49 && _v15(_v0.specularIntensityMap.channel),
          transmissionMapUv: _v50 && _v15(_v0.transmissionMap.channel),
          thicknessMapUv: _v51 && _v15(_v0.thicknessMap.channel),
          alphaMapUv: _v53 && _v15(_v0.alphaMap.channel),
          vertexTangents: !!_v10.attributes.tangent && (_v28 || _v33),
          vertexColors: _v0.vertexColors,
          vertexAlphas: !0 === _v0.vertexColors && !!_v10.attributes.color && 4 === _v10.attributes.color.itemSize,
          pointsUvs: !0 === _v4.isPoints && !!_v10.attributes.uv && (_v22 || _v53),
          fog: !!_v9,
          useFog: !0 === _v0.fog,
          fogExp2: !!_v9 && _v9.isFogExp2,
          flatShading: !0 === _v0.flatShading && !1 === _v0.wireframe,
          sizeAttenuation: !0 === _v0.sizeAttenuation,
          logarithmicDepthBuffer: _v11,
          reversedDepthBuffer: _v19,
          skinning: !0 === _v4.isSkinnedMesh,
          morphTargets: void 0 !== _v10.morphAttributes.position,
          morphNormals: void 0 !== _v10.morphAttributes.normal,
          morphColors: void 0 !== _v10.morphAttributes.color,
          morphTargetsCount: _v16,
          morphTextureStride: _v17,
          numDirLights: _v1.directional.length,
          numPointLights: _v1.point.length,
          numSpotLights: _v1.spot.length,
          numSpotLightMaps: _v1.spotLightMap.length,
          numRectAreaLights: _v1.rectArea.length,
          numHemiLights: _v1.hemi.length,
          numDirLightShadows: _v1.directionalShadowMap.length,
          numPointLightShadows: _v1.pointShadowMap.length,
          numSpotLightShadows: _v1.spotShadowMap.length,
          numSpotLightShadowsWithMaps: _v1.numSpotLightShadowsWithMaps,
          numLightProbes: _v1.numLightProbes,
          numClippingPlanes: _v6.numPlanes,
          numClipIntersection: _v6.numIntersection,
          dithering: _v0.dithering,
          shadowMapEnabled: _v0.shadowMap.enabled && _v2.length > 0,
          shadowMapType: _v0.shadowMap.type,
          toneMapping: _v57,
          decodeVideoTexture: _v22 && !0 === _v0.map.isVideoTexture && _v152.getTransfer(_v0.map.colorSpace) === _v129,
          decodeVideoTextureEmissive: _v30 && !0 === _v0.emissiveMap.isVideoTexture && _v152.getTransfer(_v0.emissiveMap.colorSpace) === _v129,
          premultipliedAlpha: _v0.premultipliedAlpha,
          doubleSided: 2 === _v0.side,
          flipSided: 1 === _v0.side,
          useDepthPacking: _v0.depthPacking >= 0,
          depthPacking: _v0.depthPacking || 0,
          index0AttributeName: _v0.index0AttributeName,
          extensionClipCullDistance: _v56 && !0 === _v0.extensions.clipCullDistance && _v3.has("WEBGL_clip_cull_distance"),
          extensionMultiDraw: (_v56 && !0 === _v0.extensions.multiDraw || _v21) && _v3.has("WEBGL_multi_draw"),
          rendererExtensionParallelShaderCompile: _v3.has("KHR_parallel_shader_compile"),
          customProgramCacheKey: _v0.customProgramCacheKey()
        };
        return _v58.vertexUv1s = _v9.has(1), _v58.vertexUv2s = _v9.has(2), _v58.vertexUv3s = _v9.has(3), _v9.clear(), _v58;
      },
      getProgramCacheKey: function (_v0) {
        var _v1, _v2, _v3, _v4;
        let _v5 = [];
        if (_v0.shaderID ? _v5.push(_v0.shaderID) : (_v5.push(_v0.customVertexShaderID), _v5.push(_v0.customFragmentShaderID)), void 0 !== _v0.defines) for (let _v0 in _v0.defines) _v5.push(_v0), _v5.push(_v0.defines[_v0]);
        return !1 === _v0.isRawShaderMaterial && (_v1 = _v5, _v2 = _v0, _v1.push(_v2.precision), _v1.push(_v2.outputColorSpace), _v1.push(_v2.envMapMode), _v1.push(_v2.envMapCubeUVHeight), _v1.push(_v2.mapUv), _v1.push(_v2.alphaMapUv), _v1.push(_v2.lightMapUv), _v1.push(_v2.aoMapUv), _v1.push(_v2.bumpMapUv), _v1.push(_v2.normalMapUv), _v1.push(_v2.displacementMapUv), _v1.push(_v2.emissiveMapUv), _v1.push(_v2.metalnessMapUv), _v1.push(_v2.roughnessMapUv), _v1.push(_v2.anisotropyMapUv), _v1.push(_v2.clearcoatMapUv), _v1.push(_v2.clearcoatNormalMapUv), _v1.push(_v2.clearcoatRoughnessMapUv), _v1.push(_v2.iridescenceMapUv), _v1.push(_v2.iridescenceThicknessMapUv), _v1.push(_v2.sheenColorMapUv), _v1.push(_v2.sheenRoughnessMapUv), _v1.push(_v2.specularMapUv), _v1.push(_v2.specularColorMapUv), _v1.push(_v2.specularIntensityMapUv), _v1.push(_v2.transmissionMapUv), _v1.push(_v2.thicknessMapUv), _v1.push(_v2.combine), _v1.push(_v2.fogExp2), _v1.push(_v2.sizeAttenuation), _v1.push(_v2.morphTargetsCount), _v1.push(_v2.morphAttributeCount), _v1.push(_v2.numDirLights), _v1.push(_v2.numPointLights), _v1.push(_v2.numSpotLights), _v1.push(_v2.numSpotLightMaps), _v1.push(_v2.numHemiLights), _v1.push(_v2.numRectAreaLights), _v1.push(_v2.numDirLightShadows), _v1.push(_v2.numPointLightShadows), _v1.push(_v2.numSpotLightShadows), _v1.push(_v2.numSpotLightShadowsWithMaps), _v1.push(_v2.numLightProbes), _v1.push(_v2.shadowMapType), _v1.push(_v2.toneMapping), _v1.push(_v2.numClippingPlanes), _v1.push(_v2.numClipIntersection), _v1.push(_v2.depthPacking), _v3 = _v5, _v4 = _v0, _v7.disableAll(), _v4.supportsVertexTextures && _v7.enable(0), _v4.instancing && _v7.enable(1), _v4.instancingColor && _v7.enable(2), _v4.instancingMorph && _v7.enable(3), _v4.matcap && _v7.enable(4), _v4.envMap && _v7.enable(5), _v4.normalMapObjectSpace && _v7.enable(6), _v4.normalMapTangentSpace && _v7.enable(7), _v4.clearcoat && _v7.enable(8), _v4.iridescence && _v7.enable(9), _v4.alphaTest && _v7.enable(10), _v4.vertexColors && _v7.enable(11), _v4.vertexAlphas && _v7.enable(12), _v4.vertexUv1s && _v7.enable(13), _v4.vertexUv2s && _v7.enable(14), _v4.vertexUv3s && _v7.enable(15), _v4.vertexTangents && _v7.enable(16), _v4.anisotropy && _v7.enable(17), _v4.alphaHash && _v7.enable(18), _v4.batching && _v7.enable(19), _v4.dispersion && _v7.enable(20), _v4.batchingColor && _v7.enable(21), _v4.gradientMap && _v7.enable(22), _v3.push(_v7.mask), _v7.disableAll(), _v4.fog && _v7.enable(0), _v4.useFog && _v7.enable(1), _v4.flatShading && _v7.enable(2), _v4.logarithmicDepthBuffer && _v7.enable(3), _v4.reversedDepthBuffer && _v7.enable(4), _v4.skinning && _v7.enable(5), _v4.morphTargets && _v7.enable(6), _v4.morphNormals && _v7.enable(7), _v4.morphColors && _v7.enable(8), _v4.premultipliedAlpha && _v7.enable(9), _v4.shadowMapEnabled && _v7.enable(10), _v4.doubleSided && _v7.enable(11), _v4.flipSided && _v7.enable(12), _v4.useDepthPacking && _v7.enable(13), _v4.dithering && _v7.enable(14), _v4.transmission && _v7.enable(15), _v4.sheen && _v7.enable(16), _v4.opaque && _v7.enable(17), _v4.pointsUvs && _v7.enable(18), _v4.decodeVideoTexture && _v7.enable(19), _v4.decodeVideoTextureEmissive && _v7.enable(20), _v4.alphaToCoverage && _v7.enable(21), _v3.push(_v7.mask), _v5.push(_v0.outputColorSpace)), _v5.push(_v0.customProgramCacheKey), _v5.join();
      },
      getUniforms: function (_v0) {
        let _v1,
          _v2 = _v14[_v0.type];
        return _v1 = _v2 ? _v272(_v346[_v2].uniforms) : _v0.uniforms;
      },
      acquireProgram: function (_v0, _v1) {
        let _v2;
        for (let _v0 = 0, _v1 = _v10.length; _v0 < _v1; _v0++) {
          let _v0 = _v10[_v0];
          if (_v0.cacheKey === _v1) {
            _v2 = _v0, ++_v2.usedTimes;
            break;
          }
        }
        return void 0 === _v2 && (_v2 = new _v454(_v0, _v1, _v0, _v5), _v10.push(_v2)), _v2;
      },
      releaseProgram: function (_v0) {
        if (0 == --_v0.usedTimes) {
          let _v0 = _v10.indexOf(_v0);
          _v10[_v0] = _v10[_v10.length - 1], _v10.pop(), _v0.destroy();
        }
      },
      releaseShaderCache: function (_v0) {
        _v8.remove(_v0);
      },
      programs: _v10,
      dispose: function () {
        _v8.dispose();
      }
    };
  }
  function _v459() {
    let _v0 = new WeakMap();
    return {
      has: function (_v0) {
        return _v0.has(_v0);
      },
      get: function (_v0) {
        let _v1 = _v0.get(_v0);
        return void 0 === _v1 && (_v1 = {}, _v0.set(_v0, _v1)), _v1;
      },
      remove: function (_v0) {
        _v0.delete(_v0);
      },
      update: function (_v0, _v1, _v2) {
        _v0.get(_v0)[_v1] = _v2;
      },
      dispose: function () {
        _v0 = new WeakMap();
      }
    };
  }
  function _v460(_v0, _v1) {
    return _v0.groupOrder !== _v1.groupOrder ? _v0.groupOrder - _v1.groupOrder : _v0.renderOrder !== _v1.renderOrder ? _v0.renderOrder - _v1.renderOrder : _v0.material.id !== _v1.material.id ? _v0.material.id - _v1.material.id : _v0.z !== _v1.z ? _v0.z - _v1.z : _v0.id - _v1.id;
  }
  function _v461(_v0, _v1) {
    return _v0.groupOrder !== _v1.groupOrder ? _v0.groupOrder - _v1.groupOrder : _v0.renderOrder !== _v1.renderOrder ? _v0.renderOrder - _v1.renderOrder : _v0.z !== _v1.z ? _v1.z - _v0.z : _v0.id - _v1.id;
  }
  function _v462() {
    let _v0 = [],
      _v1 = 0,
      _v2 = [],
      _v3 = [],
      _v4 = [];
    function _v5(_v0, _v1, _v2, _v3, _v4, _v5) {
      let _v6 = _v0[_v1];
      return void 0 === _v6 ? (_v6 = {
        id: _v0.id,
        object: _v0,
        geometry: _v1,
        material: _v2,
        groupOrder: _v3,
        renderOrder: _v0.renderOrder,
        z: _v4,
        group: _v5
      }, _v0[_v1] = _v6) : (_v6.id = _v0.id, _v6.object = _v0, _v6.geometry = _v1, _v6.material = _v2, _v6.groupOrder = _v3, _v6.renderOrder = _v0.renderOrder, _v6.z = _v4, _v6.group = _v5), _v1++, _v6;
    }
    return {
      opaque: _v2,
      transmissive: _v3,
      transparent: _v4,
      init: function () {
        _v1 = 0, _v2.length = 0, _v3.length = 0, _v4.length = 0;
      },
      push: function (_v0, _v1, _v2, _v3, _v4, _v5) {
        let _v6 = _v5(_v0, _v1, _v2, _v3, _v4, _v5);
        _v2.transmission > 0 ? _v3.push(_v6) : !0 === _v2.transparent ? _v4.push(_v6) : _v2.push(_v6);
      },
      unshift: function (_v0, _v1, _v2, _v3, _v4, _v5) {
        let _v6 = _v5(_v0, _v1, _v2, _v3, _v4, _v5);
        _v2.transmission > 0 ? _v3.unshift(_v6) : !0 === _v2.transparent ? _v4.unshift(_v6) : _v2.unshift(_v6);
      },
      finish: function () {
        for (let _v0 = _v1, _v1 = _v0.length; _v0 < _v1; _v0++) {
          let _v0 = _v0[_v0];
          if (null === _v0.id) break;
          _v0.id = null, _v0.object = null, _v0.geometry = null, _v0.material = null, _v0.group = null;
        }
      },
      sort: function (_v0, _v1) {
        _v2.length > 1 && _v2.sort(_v0 || _v460), _v3.length > 1 && _v3.sort(_v1 || _v461), _v4.length > 1 && _v4.sort(_v1 || _v461);
      }
    };
  }
  function _v463() {
    let _v0 = new WeakMap();
    return {
      get: function (_v0, _v1) {
        let _v2,
          _v3 = _v0.get(_v0);
        return void 0 === _v3 ? (_v2 = new _v462(), _v0.set(_v0, [_v2])) : _v1 >= _v3.length ? (_v2 = new _v462(), _v3.push(_v2)) : _v2 = _v3[_v1], _v2;
      },
      dispose: function () {
        _v0 = new WeakMap();
      }
    };
  }
  function _v464() {
    let _v0 = {};
    return {
      get: function (_v0) {
        let _v1;
        if (void 0 !== _v0[_v0.id]) return _v0[_v0.id];
        switch (_v0.type) {
          case "DirectionalLight":
            _v1 = {
              direction: new _v141(),
              color: new _v238()
            };
            break;
          case "SpotLight":
            _v1 = {
              position: new _v141(),
              direction: new _v141(),
              color: new _v238(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;
          case "PointLight":
            _v1 = {
              position: new _v141(),
              color: new _v238(),
              distance: 0,
              decay: 0
            };
            break;
          case "HemisphereLight":
            _v1 = {
              direction: new _v141(),
              skyColor: new _v238(),
              groundColor: new _v238()
            };
            break;
          case "RectAreaLight":
            _v1 = {
              color: new _v238(),
              position: new _v141(),
              halfWidth: new _v141(),
              halfHeight: new _v141()
            };
        }
        return _v0[_v0.id] = _v1, _v1;
      }
    };
  }
  let _v465 = 0;
  function _v466(_v0, _v1) {
    return 2 * !!_v1.castShadow - 2 * !!_v0.castShadow + +!!_v1.map - !!_v0.map;
  }
  function _v467(_v0) {
    let _v1,
      _v2 = new _v464(),
      _v3 = (_v1 = {}, {
        get: function (_v0) {
          let _v1;
          if (void 0 !== _v1[_v0.id]) return _v1[_v0.id];
          switch (_v0.type) {
            case "DirectionalLight":
            case "SpotLight":
              _v1 = {
                shadowIntensity: 1,
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new _v139()
              };
              break;
            case "PointLight":
              _v1 = {
                shadowIntensity: 1,
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new _v139(),
                shadowCameraNear: 1,
                shadowCameraFar: 0
              };
          }
          return _v1[_v0.id] = _v1, _v1;
        }
      }),
      _v4 = {
        version: 0,
        hash: {
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
          numSpotMaps: -1,
          numLightProbes: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0
      };
    for (let _v0 = 0; _v0 < 9; _v0++) _v4.probe.push(new _v141());
    let _v5 = new _v141(),
      _v6 = new _v192(),
      _v7 = new _v192();
    return {
      setup: function (_v0) {
        let _v1 = 0,
          _v2 = 0,
          _v3 = 0;
        for (let _v0 = 0; _v0 < 9; _v0++) _v4.probe[_v0].set(0, 0, 0);
        let _v4 = 0,
          _v5 = 0,
          _v6 = 0,
          _v7 = 0,
          _v8 = 0,
          _v9 = 0,
          _v10 = 0,
          _v11 = 0,
          _v12 = 0,
          _v13 = 0,
          _v14 = 0;
        _v0.sort(_v466);
        for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
          let _v0 = _v0[_v0],
            _v1 = _v0.color,
            _v2 = _v0.intensity,
            _v3 = _v0.distance,
            _v4 = _v0.shadow && _v0.shadow.map ? _v0.shadow.map.texture : null;
          if (_v0.isAmbientLight) _v1 += _v1.r * _v2, _v2 += _v1.g * _v2, _v3 += _v1.b * _v2;else if (_v0.isLightProbe) {
            for (let _v0 = 0; _v0 < 9; _v0++) _v4.probe[_v0].addScaledVector(_v0.sh.coefficients[_v0], _v2);
            _v14++;
          } else if (_v0.isDirectionalLight) {
            let _v0 = _v2.get(_v0);
            if (_v0.color.copy(_v0.color).multiplyScalar(_v0.intensity), _v0.castShadow) {
              let _v0 = _v0.shadow,
                _v1 = _v3.get(_v0);
              _v1.shadowIntensity = _v0.intensity, _v1.shadowBias = _v0.bias, _v1.shadowNormalBias = _v0.normalBias, _v1.shadowRadius = _v0.radius, _v1.shadowMapSize = _v0.mapSize, _v4.directionalShadow[_v4] = _v1, _v4.directionalShadowMap[_v4] = _v4, _v4.directionalShadowMatrix[_v4] = _v0.shadow.matrix, _v9++;
            }
            _v4.directional[_v4] = _v0, _v4++;
          } else if (_v0.isSpotLight) {
            let _v0 = _v2.get(_v0);
            _v0.position.setFromMatrixPosition(_v0.matrixWorld), _v0.color.copy(_v1).multiplyScalar(_v2), _v0.distance = _v3, _v0.coneCos = Math.cos(_v0.angle), _v0.penumbraCos = Math.cos(_v0.angle * (1 - _v0.penumbra)), _v0.decay = _v0.decay, _v4.spot[_v6] = _v0;
            let _v1 = _v0.shadow;
            if (_v0.map && (_v4.spotLightMap[_v12] = _v0.map, _v12++, _v1.updateMatrices(_v0), _v0.castShadow && _v13++), _v4.spotLightMatrix[_v6] = _v1.matrix, _v0.castShadow) {
              let _v0 = _v3.get(_v0);
              _v0.shadowIntensity = _v1.intensity, _v0.shadowBias = _v1.bias, _v0.shadowNormalBias = _v1.normalBias, _v0.shadowRadius = _v1.radius, _v0.shadowMapSize = _v1.mapSize, _v4.spotShadow[_v6] = _v0, _v4.spotShadowMap[_v6] = _v4, _v11++;
            }
            _v6++;
          } else if (_v0.isRectAreaLight) {
            let _v0 = _v2.get(_v0);
            _v0.color.copy(_v1).multiplyScalar(_v2), _v0.halfWidth.set(.5 * _v0.width, 0, 0), _v0.halfHeight.set(0, .5 * _v0.height, 0), _v4.rectArea[_v7] = _v0, _v7++;
          } else if (_v0.isPointLight) {
            let _v0 = _v2.get(_v0);
            if (_v0.color.copy(_v0.color).multiplyScalar(_v0.intensity), _v0.distance = _v0.distance, _v0.decay = _v0.decay, _v0.castShadow) {
              let _v0 = _v0.shadow,
                _v1 = _v3.get(_v0);
              _v1.shadowIntensity = _v0.intensity, _v1.shadowBias = _v0.bias, _v1.shadowNormalBias = _v0.normalBias, _v1.shadowRadius = _v0.radius, _v1.shadowMapSize = _v0.mapSize, _v1.shadowCameraNear = _v0.camera.near, _v1.shadowCameraFar = _v0.camera.far, _v4.pointShadow[_v5] = _v1, _v4.pointShadowMap[_v5] = _v4, _v4.pointShadowMatrix[_v5] = _v0.shadow.matrix, _v10++;
            }
            _v4.point[_v5] = _v0, _v5++;
          } else if (_v0.isHemisphereLight) {
            let _v0 = _v2.get(_v0);
            _v0.skyColor.copy(_v0.color).multiplyScalar(_v2), _v0.groundColor.copy(_v0.groundColor).multiplyScalar(_v2), _v4.hemi[_v8] = _v0, _v8++;
          }
        }
        _v7 > 0 && (!0 === _v0.has("OES_texture_float_linear") ? (_v4.rectAreaLTC1 = _v345.LTC_FLOAT_1, _v4.rectAreaLTC2 = _v345.LTC_FLOAT_2) : (_v4.rectAreaLTC1 = _v345.LTC_HALF_1, _v4.rectAreaLTC2 = _v345.LTC_HALF_2)), _v4.ambient[0] = _v1, _v4.ambient[1] = _v2, _v4.ambient[2] = _v3;
        let _v15 = _v4.hash;
        (_v15.directionalLength !== _v4 || _v15.pointLength !== _v5 || _v15.spotLength !== _v6 || _v15.rectAreaLength !== _v7 || _v15.hemiLength !== _v8 || _v15.numDirectionalShadows !== _v9 || _v15.numPointShadows !== _v10 || _v15.numSpotShadows !== _v11 || _v15.numSpotMaps !== _v12 || _v15.numLightProbes !== _v14) && (_v4.directional.length = _v4, _v4.spot.length = _v6, _v4.rectArea.length = _v7, _v4.point.length = _v5, _v4.hemi.length = _v8, _v4.directionalShadow.length = _v9, _v4.directionalShadowMap.length = _v9, _v4.pointShadow.length = _v10, _v4.pointShadowMap.length = _v10, _v4.spotShadow.length = _v11, _v4.spotShadowMap.length = _v11, _v4.directionalShadowMatrix.length = _v9, _v4.pointShadowMatrix.length = _v10, _v4.spotLightMatrix.length = _v11 + _v12 - _v13, _v4.spotLightMap.length = _v12, _v4.numSpotLightShadowsWithMaps = _v13, _v4.numLightProbes = _v14, _v15.directionalLength = _v4, _v15.pointLength = _v5, _v15.spotLength = _v6, _v15.rectAreaLength = _v7, _v15.hemiLength = _v8, _v15.numDirectionalShadows = _v9, _v15.numPointShadows = _v10, _v15.numSpotShadows = _v11, _v15.numSpotMaps = _v12, _v15.numLightProbes = _v14, _v4.version = _v465++);
      },
      setupView: function (_v0, _v1) {
        let _v2 = 0,
          _v3 = 0,
          _v4 = 0,
          _v5 = 0,
          _v6 = 0,
          _v7 = _v1.matrixWorldInverse;
        for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
          let _v0 = _v0[_v0];
          if (_v0.isDirectionalLight) {
            let _v0 = _v4.directional[_v2];
            _v0.direction.setFromMatrixPosition(_v0.matrixWorld), _v5.setFromMatrixPosition(_v0.target.matrixWorld), _v0.direction.sub(_v5), _v0.direction.transformDirection(_v7), _v2++;
          } else if (_v0.isSpotLight) {
            let _v0 = _v4.spot[_v4];
            _v0.position.setFromMatrixPosition(_v0.matrixWorld), _v0.position.applyMatrix4(_v7), _v0.direction.setFromMatrixPosition(_v0.matrixWorld), _v5.setFromMatrixPosition(_v0.target.matrixWorld), _v0.direction.sub(_v5), _v0.direction.transformDirection(_v7), _v4++;
          } else if (_v0.isRectAreaLight) {
            let _v0 = _v4.rectArea[_v5];
            _v0.position.setFromMatrixPosition(_v0.matrixWorld), _v0.position.applyMatrix4(_v7), _v7.identity(), _v6.copy(_v0.matrixWorld), _v6.premultiply(_v7), _v7.extractRotation(_v6), _v0.halfWidth.set(.5 * _v0.width, 0, 0), _v0.halfHeight.set(0, .5 * _v0.height, 0), _v0.halfWidth.applyMatrix4(_v7), _v0.halfHeight.applyMatrix4(_v7), _v5++;
          } else if (_v0.isPointLight) {
            let _v0 = _v4.point[_v3];
            _v0.position.setFromMatrixPosition(_v0.matrixWorld), _v0.position.applyMatrix4(_v7), _v3++;
          } else if (_v0.isHemisphereLight) {
            let _v0 = _v4.hemi[_v6];
            _v0.direction.setFromMatrixPosition(_v0.matrixWorld), _v0.direction.transformDirection(_v7), _v6++;
          }
        }
      },
      state: _v4
    };
  }
  function _v468(_v0) {
    let _v1 = new _v467(_v0),
      _v2 = [],
      _v3 = [],
      _v4 = {
        lightsArray: _v2,
        shadowsArray: _v3,
        camera: null,
        lights: _v1,
        transmissionRenderTarget: {}
      };
    return {
      init: function (_v0) {
        _v4.camera = _v0, _v2.length = 0, _v3.length = 0;
      },
      state: _v4,
      setupLights: function () {
        _v1.setup(_v2);
      },
      setupLightsView: function (_v0) {
        _v1.setupView(_v2, _v0);
      },
      pushLight: function (_v0) {
        _v2.push(_v0);
      },
      pushShadow: function (_v0) {
        _v3.push(_v0);
      }
    };
  }
  function _v469(_v0) {
    let _v1 = new WeakMap();
    return {
      get: function (_v0, _v1 = 0) {
        let _v2,
          _v3 = _v1.get(_v0);
        return void 0 === _v3 ? (_v2 = new _v468(_v0), _v1.set(_v0, [_v2])) : _v1 >= _v3.length ? (_v2 = new _v468(_v0), _v3.push(_v2)) : _v2 = _v3[_v1], _v2;
      },
      dispose: function () {
        _v1 = new WeakMap();
      }
    };
  }
  function _v470(_v0, _v1, _v2) {
    let _v3 = new _v295(),
      _v4 = new _v139(),
      _v5 = new _v139(),
      _v6 = new _v162(),
      _v7 = new _v315({
        depthPacking: 0
      }),
      _v8 = new _v316(),
      _v9 = {},
      _v10 = _v2.maxTextureSize,
      _v11 = {
        0: 1,
        1: 0,
        2: 2
      },
      _v12 = new _v275({
        defines: {
          VSM_SAMPLES: 8
        },
        uniforms: {
          shadow_pass: {
            value: null
          },
          resolution: {
            value: new _v139()
          },
          radius: {
            value: 4
          }
        },
        vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
        fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
      }),
      _v13 = _v12.clone();
    _v13.defines.HORIZONTAL_PASS = 1;
    let _v14 = new _v257();
    _v14.setAttribute("position", new _v246(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    let _v15 = new _v269(_v14, _v12),
      _v16 = this;
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
    let _v17 = this.type;
    function _v18(_v0, _v1, _v2, _v3) {
      let _v4 = null,
        _v5 = !0 === _v2.isPointLight ? _v0.customDistanceMaterial : _v0.customDepthMaterial;
      if (void 0 !== _v5) _v4 = _v5;else if (_v4 = !0 === _v2.isPointLight ? _v8 : _v7, _v0.localClippingEnabled && !0 === _v1.clipShadows && Array.isArray(_v1.clippingPlanes) && 0 !== _v1.clippingPlanes.length || _v1.displacementMap && 0 !== _v1.displacementScale || _v1.alphaMap && _v1.alphaTest > 0 || _v1.map && _v1.alphaTest > 0 || !0 === _v1.alphaToCoverage) {
        let _v0 = _v4.uuid,
          _v1 = _v1.uuid,
          _v2 = _v9[_v0];
        void 0 === _v2 && (_v2 = {}, _v9[_v0] = _v2);
        let _v3 = _v2[_v1];
        void 0 === _v3 && (_v3 = _v4.clone(), _v2[_v1] = _v3, _v1.addEventListener("dispose", _v19)), _v4 = _v3;
      }
      return _v4.visible = _v1.visible, _v4.wireframe = _v1.wireframe, 3 === _v3 ? _v4.side = null !== _v1.shadowSide ? _v1.shadowSide : _v1.side : _v4.side = null !== _v1.shadowSide ? _v1.shadowSide : _v11[_v1.side], _v4.alphaMap = _v1.alphaMap, _v4.alphaTest = !0 === _v1.alphaToCoverage ? .5 : _v1.alphaTest, _v4.map = _v1.map, _v4.clipShadows = _v1.clipShadows, _v4.clippingPlanes = _v1.clippingPlanes, _v4.clipIntersection = _v1.clipIntersection, _v4.displacementMap = _v1.displacementMap, _v4.displacementScale = _v1.displacementScale, _v4.displacementBias = _v1.displacementBias, _v4.wireframeLinewidth = _v1.wireframeLinewidth, _v4.linewidth = _v1.linewidth, !0 === _v2.isPointLight && !0 === _v4.isMeshDistanceMaterial && (_v0.properties.get(_v4).light = _v2), _v4;
    }
    function _v19(_v0) {
      for (let _v0 in _v0.target.removeEventListener("dispose", _v19), _v9) {
        let _v0 = _v9[_v0],
          _v1 = _v0.target.uuid;
        _v1 in _v0 && (_v0[_v1].dispose(), delete _v0[_v1]);
      }
    }
    this.render = function (_v0, _v1, _v2) {
      if (!1 === _v16.enabled || !1 === _v16.autoUpdate && !1 === _v16.needsUpdate || 0 === _v0.length) return;
      let _v3 = _v0.getRenderTarget(),
        _v4 = _v0.getActiveCubeFace(),
        _v5 = _v0.getActiveMipmapLevel(),
        _v6 = _v0.state;
      _v6.setBlending(0), !0 === _v6.buffers.depth.getReversed() ? _v6.buffers.color.setClear(0, 0, 0, 0) : _v6.buffers.color.setClear(1, 1, 1, 1), _v6.buffers.depth.setTest(!0), _v6.setScissorTest(!1);
      let _v7 = 3 !== _v17 && 3 === this.type,
        _v8 = 3 === _v17 && 3 !== this.type;
      for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
        let _v0 = _v0[_v0],
          _v1 = _v0.shadow;
        if (void 0 === _v1) {
          console.warn("THREE.WebGLShadowMap:", _v0, "has no shadow.");
          continue;
        }
        if (!1 === _v1.autoUpdate && !1 === _v1.needsUpdate) continue;
        _v4.copy(_v1.mapSize);
        let _v2 = _v1.getFrameExtents();
        if (_v4.multiply(_v2), _v5.copy(_v1.mapSize), (_v4.x > _v10 || _v4.y > _v10) && (_v4.x > _v10 && (_v5.x = Math.floor(_v10 / _v2.x), _v4.x = _v5.x * _v2.x, _v1.mapSize.x = _v5.x), _v4.y > _v10 && (_v5.y = Math.floor(_v10 / _v2.y), _v4.y = _v5.y * _v2.y, _v1.mapSize.y = _v5.y)), null === _v1.map || !0 === _v7 || !0 === _v8) {
          let _v0 = 3 !== this.type ? {
            minFilter: 0,
            magFilter: 0
          } : {};
          null !== _v1.map && _v1.map.dispose(), _v1.map = new _v164(_v4.x, _v4.y, _v0), _v1.map.texture.name = _v0.name + ".shadowMap", _v1.camera.updateProjectionMatrix();
        }
        _v0.setRenderTarget(_v1.map), _v0.clear();
        let _v3 = _v1.getViewportCount();
        for (let _v0 = 0; _v0 < _v3; _v0++) {
          let _v0 = _v1.getViewport(_v0);
          _v6.set(_v5.x * _v0.x, _v5.y * _v0.y, _v5.x * _v0.z, _v5.y * _v0.w), _v6.viewport(_v6), _v1.updateMatrices(_v0, _v0), _v3 = _v1.getFrustum(), function _v0(_v1, _v2, _v3, _v4, _v5) {
            if (!1 === _v1.visible) return;
            if (_v1.layers.test(_v2.layers) && (_v1.isMesh || _v1.isLine || _v1.isPoints) && (_v1.castShadow || _v1.receiveShadow && 3 === _v5) && (!_v1.frustumCulled || _v3.intersectsObject(_v1))) {
              _v1.modelViewMatrix.multiplyMatrices(_v3.matrixWorldInverse, _v1.matrixWorld);
              let _v0 = _v1.update(_v1),
                _v1 = _v1.material;
              if (Array.isArray(_v1)) {
                let _v0 = _v0.groups;
                for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
                  let _v0 = _v0[_v0],
                    _v1 = _v1[_v0.materialIndex];
                  if (_v1 && _v1.visible) {
                    let _v0 = _v18(_v1, _v1, _v4, _v5);
                    _v1.onBeforeShadow(_v0, _v1, _v2, _v3, _v0, _v0, _v0), _v0.renderBufferDirect(_v3, null, _v0, _v0, _v1, _v0), _v1.onAfterShadow(_v0, _v1, _v2, _v3, _v0, _v0, _v0);
                  }
                }
              } else if (_v1.visible) {
                let _v0 = _v18(_v1, _v1, _v4, _v5);
                _v1.onBeforeShadow(_v0, _v1, _v2, _v3, _v0, _v0, null), _v0.renderBufferDirect(_v3, null, _v0, _v0, _v1, null), _v1.onAfterShadow(_v0, _v1, _v2, _v3, _v0, _v0, null);
              }
            }
            let _v6 = _v1.children;
            for (let _v0 = 0, _v1 = _v6.length; _v0 < _v1; _v0++) _v0(_v6[_v0], _v2, _v3, _v4, _v5);
          }(_v1, _v2, _v1.camera, _v0, this.type);
        }
        !0 !== _v1.isPointLightShadow && 3 === this.type && function (_v0, _v1) {
          let _v2 = _v1.update(_v15);
          _v12.defines.VSM_SAMPLES !== _v0.blurSamples && (_v12.defines.VSM_SAMPLES = _v0.blurSamples, _v13.defines.VSM_SAMPLES = _v0.blurSamples, _v12.needsUpdate = !0, _v13.needsUpdate = !0), null === _v0.mapPass && (_v0.mapPass = new _v164(_v4.x, _v4.y)), _v12.uniforms.shadow_pass.value = _v0.map.texture, _v12.uniforms.resolution.value = _v0.mapSize, _v12.uniforms.radius.value = _v0.radius, _v0.setRenderTarget(_v0.mapPass), _v0.clear(), _v0.renderBufferDirect(_v1, null, _v2, _v12, _v15, null), _v13.uniforms.shadow_pass.value = _v0.mapPass.texture, _v13.uniforms.resolution.value = _v0.mapSize, _v13.uniforms.radius.value = _v0.radius, _v0.setRenderTarget(_v0.map), _v0.clear(), _v0.renderBufferDirect(_v1, null, _v2, _v13, _v15, null);
        }(_v1, _v2), _v1.needsUpdate = !1;
      }
      _v17 = this.type, _v16.needsUpdate = !1, _v0.setRenderTarget(_v3, _v4, _v5);
    };
  }
  let _v471 = {
    0: 1,
    2: 6,
    4: 7,
    3: 5,
    1: 0,
    6: 2,
    7: 4,
    5: 3
  };
  function _v472(_v0, _v1) {
    let _v2 = new function () {
        let _v0 = !1,
          _v1 = new _v162(),
          _v2 = null,
          _v3 = new _v162(0, 0, 0, 0);
        return {
          setMask: function (_v0) {
            _v2 === _v0 || _v0 || (_v0.colorMask(_v0, _v0, _v0, _v0), _v2 = _v0);
          },
          setLocked: function (_v0) {
            _v0 = _v0;
          },
          setClear: function (_v0, _v1, _v2, _v3, _v4) {
            !0 === _v4 && (_v0 *= _v3, _v1 *= _v3, _v2 *= _v3), _v1.set(_v0, _v1, _v2, _v3), !1 === _v3.equals(_v1) && (_v0.clearColor(_v0, _v1, _v2, _v3), _v3.copy(_v1));
          },
          reset: function () {
            _v0 = !1, _v2 = null, _v3.set(-1, 0, 0, 0);
          }
        };
      }(),
      _v3 = new function () {
        let _v0 = !1,
          _v1 = !1,
          _v2 = null,
          _v3 = null,
          _v4 = null;
        return {
          setReversed: function (_v0) {
            if (_v1 !== _v0) {
              let _v0 = _v1.get("EXT_clip_control");
              _v0 ? _v0.clipControlEXT(_v0.LOWER_LEFT_EXT, _v0.ZERO_TO_ONE_EXT) : _v0.clipControlEXT(_v0.LOWER_LEFT_EXT, _v0.NEGATIVE_ONE_TO_ONE_EXT), _v1 = _v0;
              let _v1 = _v4;
              _v4 = null, this.setClear(_v1);
            }
          },
          getReversed: function () {
            return _v1;
          },
          setTest: function (_v0) {
            _v0 ? _v39(_v0.DEPTH_TEST) : _v40(_v0.DEPTH_TEST);
          },
          setMask: function (_v0) {
            _v2 === _v0 || _v0 || (_v0.depthMask(_v0), _v2 = _v0);
          },
          setFunc: function (_v0) {
            if (_v1 && (_v0 = _v471[_v0]), _v3 !== _v0) {
              switch (_v0) {
                case 0:
                  _v0.depthFunc(_v0.NEVER);
                  break;
                case 1:
                  _v0.depthFunc(_v0.ALWAYS);
                  break;
                case 2:
                  _v0.depthFunc(_v0.LESS);
                  break;
                case 3:
                default:
                  _v0.depthFunc(_v0.LEQUAL);
                  break;
                case 4:
                  _v0.depthFunc(_v0.EQUAL);
                  break;
                case 5:
                  _v0.depthFunc(_v0.GEQUAL);
                  break;
                case 6:
                  _v0.depthFunc(_v0.GREATER);
                  break;
                case 7:
                  _v0.depthFunc(_v0.NOTEQUAL);
              }
              _v3 = _v0;
            }
          },
          setLocked: function (_v0) {
            _v0 = _v0;
          },
          setClear: function (_v0) {
            _v4 !== _v0 && (_v1 && (_v0 = 1 - _v0), _v0.clearDepth(_v0), _v4 = _v0);
          },
          reset: function () {
            _v0 = !1, _v2 = null, _v3 = null, _v4 = null, _v1 = !1;
          }
        };
      }(),
      _v4 = new function () {
        let _v0 = !1,
          _v1 = null,
          _v2 = null,
          _v3 = null,
          _v4 = null,
          _v5 = null,
          _v6 = null,
          _v7 = null,
          _v8 = null;
        return {
          setTest: function (_v0) {
            _v0 || (_v0 ? _v39(_v0.STENCIL_TEST) : _v40(_v0.STENCIL_TEST));
          },
          setMask: function (_v0) {
            _v1 === _v0 || _v0 || (_v0.stencilMask(_v0), _v1 = _v0);
          },
          setFunc: function (_v0, _v1, _v2) {
            (_v2 !== _v0 || _v3 !== _v1 || _v4 !== _v2) && (_v0.stencilFunc(_v0, _v1, _v2), _v2 = _v0, _v3 = _v1, _v4 = _v2);
          },
          setOp: function (_v0, _v1, _v2) {
            (_v5 !== _v0 || _v6 !== _v1 || _v7 !== _v2) && (_v0.stencilOp(_v0, _v1, _v2), _v5 = _v0, _v6 = _v1, _v7 = _v2);
          },
          setLocked: function (_v0) {
            _v0 = _v0;
          },
          setClear: function (_v0) {
            _v8 !== _v0 && (_v0.clearStencil(_v0), _v8 = _v0);
          },
          reset: function () {
            _v0 = !1, _v1 = null, _v2 = null, _v3 = null, _v4 = null, _v5 = null, _v6 = null, _v7 = null, _v8 = null;
          }
        };
      }(),
      _v5 = new WeakMap(),
      _v6 = new WeakMap(),
      _v7 = {},
      _v8 = {},
      _v9 = new WeakMap(),
      _v10 = [],
      _v11 = null,
      _v12 = !1,
      _v13 = null,
      _v14 = null,
      _v15 = null,
      _v16 = null,
      _v17 = null,
      _v18 = null,
      _v19 = null,
      _v20 = new _v238(0, 0, 0),
      _v21 = 0,
      _v22 = !1,
      _v23 = null,
      _v24 = null,
      _v25 = null,
      _v26 = null,
      _v27 = null,
      _v28 = _v0.getParameter(_v0.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
      _v29 = !1,
      _v30 = _v0.getParameter(_v0.VERSION);
    -1 !== _v30.indexOf("WebGL") ? _v29 = parseFloat(/^WebGL (\d)/.exec(_v30)[1]) >= 1 : -1 !== _v30.indexOf("OpenGL ES") && (_v29 = parseFloat(/^OpenGL ES (\d)/.exec(_v30)[1]) >= 2);
    let _v31 = null,
      _v32 = {},
      _v33 = _v0.getParameter(_v0.SCISSOR_BOX),
      _v34 = _v0.getParameter(_v0.VIEWPORT),
      _v35 = new _v162().fromArray(_v33),
      _v36 = new _v162().fromArray(_v34);
    function _v37(_v0, _v1, _v2, _v3) {
      let _v4 = new Uint8Array(4),
        _v5 = _v0.createTexture();
      _v0.bindTexture(_v0, _v5), _v0.texParameteri(_v0, _v0.TEXTURE_MIN_FILTER, _v0.NEAREST), _v0.texParameteri(_v0, _v0.TEXTURE_MAG_FILTER, _v0.NEAREST);
      for (let _v0 = 0; _v0 < _v2; _v0++) _v0 === _v0.TEXTURE_3D || _v0 === _v0.TEXTURE_2D_ARRAY ? _v0.texImage3D(_v1, 0, _v0.RGBA, 1, 1, _v3, 0, _v0.RGBA, _v0.UNSIGNED_BYTE, _v4) : _v0.texImage2D(_v1 + _v0, 0, _v0.RGBA, 1, 1, 0, _v0.RGBA, _v0.UNSIGNED_BYTE, _v4);
      return _v5;
    }
    let _v38 = {};
    function _v39(_v0) {
      !0 !== _v7[_v0] && (_v0.enable(_v0), _v7[_v0] = !0);
    }
    function _v40(_v0) {
      !1 !== _v7[_v0] && (_v0.disable(_v0), _v7[_v0] = !1);
    }
    _v38[_v0.TEXTURE_2D] = _v37(_v0.TEXTURE_2D, _v0.TEXTURE_2D, 1), _v38[_v0.TEXTURE_CUBE_MAP] = _v37(_v0.TEXTURE_CUBE_MAP, _v0.TEXTURE_CUBE_MAP_POSITIVE_X, 6), _v38[_v0.TEXTURE_2D_ARRAY] = _v37(_v0.TEXTURE_2D_ARRAY, _v0.TEXTURE_2D_ARRAY, 1, 1), _v38[_v0.TEXTURE_3D] = _v37(_v0.TEXTURE_3D, _v0.TEXTURE_3D, 1, 1), _v2.setClear(0, 0, 0, 1), _v3.setClear(1), _v4.setClear(0), _v39(_v0.DEPTH_TEST), _v3.setFunc(3), _v44(!1), _v45(1), _v39(_v0.CULL_FACE), _v43(0);
    let _v41 = {
      100: _v0.FUNC_ADD,
      101: _v0.FUNC_SUBTRACT,
      102: _v0.FUNC_REVERSE_SUBTRACT
    };
    _v41[103] = _v0.MIN, _v41[104] = _v0.MAX;
    let _v42 = {
      200: _v0.ZERO,
      201: _v0.ONE,
      202: _v0.SRC_COLOR,
      204: _v0.SRC_ALPHA,
      210: _v0.SRC_ALPHA_SATURATE,
      208: _v0.DST_COLOR,
      206: _v0.DST_ALPHA,
      203: _v0.ONE_MINUS_SRC_COLOR,
      205: _v0.ONE_MINUS_SRC_ALPHA,
      209: _v0.ONE_MINUS_DST_COLOR,
      207: _v0.ONE_MINUS_DST_ALPHA,
      211: _v0.CONSTANT_COLOR,
      212: _v0.ONE_MINUS_CONSTANT_COLOR,
      213: _v0.CONSTANT_ALPHA,
      214: _v0.ONE_MINUS_CONSTANT_ALPHA
    };
    function _v43(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9) {
      if (0 === _v0) {
        !0 === _v12 && (_v40(_v0.BLEND), _v12 = !1);
        return;
      }
      if (!1 === _v12 && (_v39(_v0.BLEND), _v12 = !0), 5 !== _v0) {
        if (_v0 !== _v13 || _v9 !== _v22) {
          if ((100 !== _v14 || 100 !== _v17) && (_v0.blendEquation(_v0.FUNC_ADD), _v14 = 100, _v17 = 100), _v9) switch (_v0) {
            case 1:
              _v0.blendFuncSeparate(_v0.ONE, _v0.ONE_MINUS_SRC_ALPHA, _v0.ONE, _v0.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              _v0.blendFunc(_v0.ONE, _v0.ONE);
              break;
            case 3:
              _v0.blendFuncSeparate(_v0.ZERO, _v0.ONE_MINUS_SRC_COLOR, _v0.ZERO, _v0.ONE);
              break;
            case 4:
              _v0.blendFuncSeparate(_v0.DST_COLOR, _v0.ONE_MINUS_SRC_ALPHA, _v0.ZERO, _v0.ONE);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", _v0);
          } else switch (_v0) {
            case 1:
              _v0.blendFuncSeparate(_v0.SRC_ALPHA, _v0.ONE_MINUS_SRC_ALPHA, _v0.ONE, _v0.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              _v0.blendFuncSeparate(_v0.SRC_ALPHA, _v0.ONE, _v0.ONE, _v0.ONE);
              break;
            case 3:
              console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case 4:
              console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", _v0);
          }
          _v15 = null, _v16 = null, _v18 = null, _v19 = null, _v20.set(0, 0, 0), _v21 = 0, _v13 = _v0, _v22 = _v9;
        }
        return;
      }
      _v4 = _v4 || _v1, _v5 = _v5 || _v2, _v6 = _v6 || _v3, (_v1 !== _v14 || _v4 !== _v17) && (_v0.blendEquationSeparate(_v41[_v1], _v41[_v4]), _v14 = _v1, _v17 = _v4), (_v2 !== _v15 || _v3 !== _v16 || _v5 !== _v18 || _v6 !== _v19) && (_v0.blendFuncSeparate(_v42[_v2], _v42[_v3], _v42[_v5], _v42[_v6]), _v15 = _v2, _v16 = _v3, _v18 = _v5, _v19 = _v6), (!1 === _v7.equals(_v20) || _v8 !== _v21) && (_v0.blendColor(_v7.r, _v7.g, _v7.b, _v8), _v20.copy(_v7), _v21 = _v8), _v13 = _v0, _v22 = !1;
    }
    function _v44(_v0) {
      _v23 !== _v0 && (_v0 ? _v0.frontFace(_v0.CW) : _v0.frontFace(_v0.CCW), _v23 = _v0);
    }
    function _v45(_v0) {
      0 !== _v0 ? (_v39(_v0.CULL_FACE), _v0 !== _v24 && (1 === _v0 ? _v0.cullFace(_v0.BACK) : 2 === _v0 ? _v0.cullFace(_v0.FRONT) : _v0.cullFace(_v0.FRONT_AND_BACK))) : _v40(_v0.CULL_FACE), _v24 = _v0;
    }
    function _v46(_v0, _v1, _v2) {
      _v0 ? (_v39(_v0.POLYGON_OFFSET_FILL), (_v26 !== _v1 || _v27 !== _v2) && (_v0.polygonOffset(_v1, _v2), _v26 = _v1, _v27 = _v2)) : _v40(_v0.POLYGON_OFFSET_FILL);
    }
    return {
      buffers: {
        color: _v2,
        depth: _v3,
        stencil: _v4
      },
      enable: _v39,
      disable: _v40,
      bindFramebuffer: function (_v0, _v1) {
        return _v8[_v0] !== _v1 && (_v0.bindFramebuffer(_v0, _v1), _v8[_v0] = _v1, _v0 === _v0.DRAW_FRAMEBUFFER && (_v8[_v0.FRAMEBUFFER] = _v1), _v0 === _v0.FRAMEBUFFER && (_v8[_v0.DRAW_FRAMEBUFFER] = _v1), !0);
      },
      drawBuffers: function (_v0, _v1) {
        let _v2 = _v10,
          _v3 = !1;
        if (_v0) {
          void 0 === (_v2 = _v9.get(_v1)) && (_v2 = [], _v9.set(_v1, _v2));
          let _v0 = _v0.textures;
          if (_v2.length !== _v0.length || _v2[0] !== _v0.COLOR_ATTACHMENT0) {
            for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) _v2[_v0] = _v0.COLOR_ATTACHMENT0 + _v0;
            _v2.length = _v0.length, _v3 = !0;
          }
        } else _v2[0] !== _v0.BACK && (_v2[0] = _v0.BACK, _v3 = !0);
        _v3 && _v0.drawBuffers(_v2);
      },
      useProgram: function (_v0) {
        return _v11 !== _v0 && (_v0.useProgram(_v0), _v11 = _v0, !0);
      },
      setBlending: _v43,
      setMaterial: function (_v0, _v1) {
        2 === _v0.side ? _v40(_v0.CULL_FACE) : _v39(_v0.CULL_FACE);
        let _v2 = 1 === _v0.side;
        _v1 && (_v2 = !_v2), _v44(_v2), 1 === _v0.blending && !1 === _v0.transparent ? _v43(0) : _v43(_v0.blending, _v0.blendEquation, _v0.blendSrc, _v0.blendDst, _v0.blendEquationAlpha, _v0.blendSrcAlpha, _v0.blendDstAlpha, _v0.blendColor, _v0.blendAlpha, _v0.premultipliedAlpha), _v3.setFunc(_v0.depthFunc), _v3.setTest(_v0.depthTest), _v3.setMask(_v0.depthWrite), _v2.setMask(_v0.colorWrite);
        let _v3 = _v0.stencilWrite;
        _v4.setTest(_v3), _v3 && (_v4.setMask(_v0.stencilWriteMask), _v4.setFunc(_v0.stencilFunc, _v0.stencilRef, _v0.stencilFuncMask), _v4.setOp(_v0.stencilFail, _v0.stencilZFail, _v0.stencilZPass)), _v46(_v0.polygonOffset, _v0.polygonOffsetFactor, _v0.polygonOffsetUnits), !0 === _v0.alphaToCoverage ? _v39(_v0.SAMPLE_ALPHA_TO_COVERAGE) : _v40(_v0.SAMPLE_ALPHA_TO_COVERAGE);
      },
      setFlipSided: _v44,
      setCullFace: _v45,
      setLineWidth: function (_v0) {
        _v0 !== _v25 && (_v29 && _v0.lineWidth(_v0), _v25 = _v0);
      },
      setPolygonOffset: _v46,
      setScissorTest: function (_v0) {
        _v0 ? _v39(_v0.SCISSOR_TEST) : _v40(_v0.SCISSOR_TEST);
      },
      activeTexture: function (_v0) {
        void 0 === _v0 && (_v0 = _v0.TEXTURE0 + _v28 - 1), _v31 !== _v0 && (_v0.activeTexture(_v0), _v31 = _v0);
      },
      bindTexture: function (_v0, _v1, _v2) {
        void 0 === _v2 && (_v2 = null === _v31 ? _v0.TEXTURE0 + _v28 - 1 : _v31);
        let _v3 = _v32[_v2];
        void 0 === _v3 && (_v3 = {
          type: void 0,
          texture: void 0
        }, _v32[_v2] = _v3), (_v3.type !== _v0 || _v3.texture !== _v1) && (_v31 !== _v2 && (_v0.activeTexture(_v2), _v31 = _v2), _v0.bindTexture(_v0, _v1 || _v38[_v0]), _v3.type = _v0, _v3.texture = _v1);
      },
      unbindTexture: function () {
        let _v0 = _v32[_v31];
        void 0 !== _v0 && void 0 !== _v0.type && (_v0.bindTexture(_v0.type, null), _v0.type = void 0, _v0.texture = void 0);
      },
      compressedTexImage2D: function () {
        try {
          _v0.compressedTexImage2D(...arguments);
        } catch (_v0) {
          console.error("THREE.WebGLState:", _v0);
        }
      },
      compressedTexImage3D: function () {
        try {
          _v0.compressedTexImage3D(...arguments);
        } catch (_v0) {
          console.error("THREE.WebGLState:", _v0);
        }
      },
      texImage2D: function () {
        try {
          _v0.texImage2D(...arguments);
        } catch (_v0) {
          console.error("THREE.WebGLState:", _v0);
        }
      },
      texImage3D: function () {
        try {
          _v0.texImage3D(...arguments);
        } catch (_v0) {
          console.error("THREE.WebGLState:", _v0);
        }
      },
      updateUBOMapping: function (_v0, _v1) {
        let _v2 = _v6.get(_v1);
        void 0 === _v2 && (_v2 = new WeakMap(), _v6.set(_v1, _v2));
        let _v3 = _v2.get(_v0);
        void 0 === _v3 && (_v3 = _v0.getUniformBlockIndex(_v1, _v0.name), _v2.set(_v0, _v3));
      },
      uniformBlockBinding: function (_v0, _v1) {
        let _v2 = _v6.get(_v1).get(_v0);
        _v5.get(_v1) !== _v2 && (_v0.uniformBlockBinding(_v1, _v2, _v0.__bindingPointIndex), _v5.set(_v1, _v2));
      },
      texStorage2D: function () {
        try {
          _v0.texStorage2D(...arguments);
        } catch (_v0) {
          console.error("THREE.WebGLState:", _v0);
        }
      },
      texStorage3D: function () {
        try {
          _v0.texStorage3D(...arguments);
        } catch (_v0) {
          console.error("THREE.WebGLState:", _v0);
        }
      },
      texSubImage2D: function () {
        try {
          _v0.texSubImage2D(...arguments);
        } catch (_v0) {
          console.error("THREE.WebGLState:", _v0);
        }
      },
      texSubImage3D: function () {
        try {
          _v0.texSubImage3D(...arguments);
        } catch (_v0) {
          console.error("THREE.WebGLState:", _v0);
        }
      },
      compressedTexSubImage2D: function () {
        try {
          _v0.compressedTexSubImage2D(...arguments);
        } catch (_v0) {
          console.error("THREE.WebGLState:", _v0);
        }
      },
      compressedTexSubImage3D: function () {
        try {
          _v0.compressedTexSubImage3D(...arguments);
        } catch (_v0) {
          console.error("THREE.WebGLState:", _v0);
        }
      },
      scissor: function (_v0) {
        !1 === _v35.equals(_v0) && (_v0.scissor(_v0.x, _v0.y, _v0.z, _v0.w), _v35.copy(_v0));
      },
      viewport: function (_v0) {
        !1 === _v36.equals(_v0) && (_v0.viewport(_v0.x, _v0.y, _v0.z, _v0.w), _v36.copy(_v0));
      },
      reset: function () {
        _v0.disable(_v0.BLEND), _v0.disable(_v0.CULL_FACE), _v0.disable(_v0.DEPTH_TEST), _v0.disable(_v0.POLYGON_OFFSET_FILL), _v0.disable(_v0.SCISSOR_TEST), _v0.disable(_v0.STENCIL_TEST), _v0.disable(_v0.SAMPLE_ALPHA_TO_COVERAGE), _v0.blendEquation(_v0.FUNC_ADD), _v0.blendFunc(_v0.ONE, _v0.ZERO), _v0.blendFuncSeparate(_v0.ONE, _v0.ZERO, _v0.ONE, _v0.ZERO), _v0.blendColor(0, 0, 0, 0), _v0.colorMask(!0, !0, !0, !0), _v0.clearColor(0, 0, 0, 0), _v0.depthMask(!0), _v0.depthFunc(_v0.LESS), _v3.setReversed(!1), _v0.clearDepth(1), _v0.stencilMask(0), _v0.stencilFunc(_v0.ALWAYS, 0, 0), _v0.stencilOp(_v0.KEEP, _v0.KEEP, _v0.KEEP), _v0.clearStencil(0), _v0.cullFace(_v0.BACK), _v0.frontFace(_v0.CCW), _v0.polygonOffset(0, 0), _v0.activeTexture(_v0.TEXTURE0), _v0.bindFramebuffer(_v0.FRAMEBUFFER, null), _v0.bindFramebuffer(_v0.DRAW_FRAMEBUFFER, null), _v0.bindFramebuffer(_v0.READ_FRAMEBUFFER, null), _v0.useProgram(null), _v0.lineWidth(1), _v0.scissor(0, 0, _v0.canvas.width, _v0.canvas.height), _v0.viewport(0, 0, _v0.canvas.width, _v0.canvas.height), _v7 = {}, _v31 = null, _v32 = {}, _v8 = {}, _v9 = new WeakMap(), _v10 = [], _v11 = null, _v12 = !1, _v13 = null, _v14 = null, _v15 = null, _v16 = null, _v17 = null, _v18 = null, _v19 = null, _v20 = new _v238(0, 0, 0), _v21 = 0, _v22 = !1, _v23 = null, _v24 = null, _v25 = null, _v26 = null, _v27 = null, _v35.set(0, 0, _v0.canvas.width, _v0.canvas.height), _v36.set(0, 0, _v0.canvas.width, _v0.canvas.height), _v2.reset(), _v3.reset(), _v4.reset();
      }
    };
  }
  function _v473(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
    let _v7,
      _v8 = _v1.has("WEBGL_multisampled_render_to_texture") ? _v1.get("WEBGL_multisampled_render_to_texture") : null,
      _v9 = "u" > typeof navigator && /OculusBrowser/g.test(navigator.userAgent),
      _v10 = new _v139(),
      _v11 = new WeakMap(),
      _v12 = new WeakMap(),
      _v13 = !1;
    try {
      _v13 = "u" > typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (_v0) {}
    function _v14(_v0, _v1) {
      return _v13 ? new OffscreenCanvas(_v0, _v1) : _v147("canvas");
    }
    function _v15(_v0, _v1, _v2) {
      let _v3 = 1,
        _v4 = _v42(_v0);
      if ((_v4.width > _v2 || _v4.height > _v2) && (_v3 = _v2 / Math.max(_v4.width, _v4.height)), _v3 < 1) if ("u" > typeof HTMLImageElement && _v0 instanceof HTMLImageElement || "u" > typeof HTMLCanvasElement && _v0 instanceof HTMLCanvasElement || "u" > typeof ImageBitmap && _v0 instanceof ImageBitmap || "u" > typeof VideoFrame && _v0 instanceof VideoFrame) {
        let _v0 = Math.floor(_v3 * _v4.width),
          _v1 = Math.floor(_v3 * _v4.height);
        void 0 === _v7 && (_v7 = _v14(_v0, _v1));
        let _v2 = _v1 ? _v14(_v0, _v1) : _v7;
        return _v2.width = _v0, _v2.height = _v1, _v2.getContext("2d").drawImage(_v0, 0, 0, _v0, _v1), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + _v4.width + "x" + _v4.height + ") to (" + _v0 + "x" + _v1 + ")."), _v2;
      } else "data" in _v0 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + _v4.width + "x" + _v4.height + ").");
      return _v0;
    }
    function _v16(_v0) {
      return _v0.generateMipmaps;
    }
    function _v17(_v0) {
      _v0.generateMipmap(_v0);
    }
    function _v18(_v0, _v1, _v2, _v3, _v4 = !1) {
      if (null !== _v0) {
        if (void 0 !== _v0[_v0]) return _v0[_v0];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + _v0 + "'");
      }
      let _v5 = _v1;
      if (_v1 === _v0.RED && (_v2 === _v0.FLOAT && (_v5 = _v0.R32F), _v2 === _v0.HALF_FLOAT && (_v5 = _v0.R16F), _v2 === _v0.UNSIGNED_BYTE && (_v5 = _v0.R8)), _v1 === _v0.RED_INTEGER && (_v2 === _v0.UNSIGNED_BYTE && (_v5 = _v0.R8UI), _v2 === _v0.UNSIGNED_SHORT && (_v5 = _v0.R16UI), _v2 === _v0.UNSIGNED_INT && (_v5 = _v0.R32UI), _v2 === _v0.BYTE && (_v5 = _v0.R8I), _v2 === _v0.SHORT && (_v5 = _v0.R16I), _v2 === _v0.INT && (_v5 = _v0.R32I)), _v1 === _v0.RG && (_v2 === _v0.FLOAT && (_v5 = _v0.RG32F), _v2 === _v0.HALF_FLOAT && (_v5 = _v0.RG16F), _v2 === _v0.UNSIGNED_BYTE && (_v5 = _v0.RG8)), _v1 === _v0.RG_INTEGER && (_v2 === _v0.UNSIGNED_BYTE && (_v5 = _v0.RG8UI), _v2 === _v0.UNSIGNED_SHORT && (_v5 = _v0.RG16UI), _v2 === _v0.UNSIGNED_INT && (_v5 = _v0.RG32UI), _v2 === _v0.BYTE && (_v5 = _v0.RG8I), _v2 === _v0.SHORT && (_v5 = _v0.RG16I), _v2 === _v0.INT && (_v5 = _v0.RG32I)), _v1 === _v0.RGB_INTEGER && (_v2 === _v0.UNSIGNED_BYTE && (_v5 = _v0.RGB8UI), _v2 === _v0.UNSIGNED_SHORT && (_v5 = _v0.RGB16UI), _v2 === _v0.UNSIGNED_INT && (_v5 = _v0.RGB32UI), _v2 === _v0.BYTE && (_v5 = _v0.RGB8I), _v2 === _v0.SHORT && (_v5 = _v0.RGB16I), _v2 === _v0.INT && (_v5 = _v0.RGB32I)), _v1 === _v0.RGBA_INTEGER && (_v2 === _v0.UNSIGNED_BYTE && (_v5 = _v0.RGBA8UI), _v2 === _v0.UNSIGNED_SHORT && (_v5 = _v0.RGBA16UI), _v2 === _v0.UNSIGNED_INT && (_v5 = _v0.RGBA32UI), _v2 === _v0.BYTE && (_v5 = _v0.RGBA8I), _v2 === _v0.SHORT && (_v5 = _v0.RGBA16I), _v2 === _v0.INT && (_v5 = _v0.RGBA32I)), _v1 === _v0.RGB && (_v2 === _v0.UNSIGNED_INT_5_9_9_9_REV && (_v5 = _v0.RGB9_E5), _v2 === _v0.UNSIGNED_INT_10F_11F_11F_REV && (_v5 = _v0.R11F_G11F_B10F)), _v1 === _v0.RGBA) {
        let _v0 = _v4 ? _v128 : _v152.getTransfer(_v3);
        _v2 === _v0.FLOAT && (_v5 = _v0.RGBA32F), _v2 === _v0.HALF_FLOAT && (_v5 = _v0.RGBA16F), _v2 === _v0.UNSIGNED_BYTE && (_v5 = _v0 === _v129 ? _v0.SRGB8_ALPHA8 : _v0.RGBA8), _v2 === _v0.UNSIGNED_SHORT_4_4_4_4 && (_v5 = _v0.RGBA4), _v2 === _v0.UNSIGNED_SHORT_5_5_5_1 && (_v5 = _v0.RGB5_A1);
      }
      return (_v5 === _v0.R16F || _v5 === _v0.R32F || _v5 === _v0.RG16F || _v5 === _v0.RG32F || _v5 === _v0.RGBA16F || _v5 === _v0.RGBA32F) && _v1.get("EXT_color_buffer_float"), _v5;
    }
    function _v19(_v0, _v1) {
      let _v2;
      return _v0 ? null === _v1 || 0 === _v1 || 0 === _v1 ? _v2 = _v0.DEPTH24_STENCIL8 : 0 === _v1 ? _v2 = _v0.DEPTH32F_STENCIL8 : 0 === _v1 && (_v2 = _v0.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : null === _v1 || 0 === _v1 || 0 === _v1 ? _v2 = _v0.DEPTH_COMPONENT24 : 0 === _v1 ? _v2 = _v0.DEPTH_COMPONENT32F : 0 === _v1 && (_v2 = _v0.DEPTH_COMPONENT16), _v2;
    }
    function _v20(_v0, _v1) {
      return !0 === _v16(_v0) || _v0.isFramebufferTexture && 0 !== _v0.minFilter && 0 !== _v0.minFilter ? Math.log2(Math.max(_v1.width, _v1.height)) + 1 : void 0 !== _v0.mipmaps && _v0.mipmaps.length > 0 ? _v0.mipmaps.length : _v0.isCompressedTexture && Array.isArray(_v0.image) ? _v1.mipmaps.length : 1;
    }
    function _v21(_v0) {
      let _v1 = _v0.target;
      _v1.removeEventListener("dispose", _v21), function (_v0) {
        let _v1 = _v3.get(_v0);
        if (void 0 === _v1.__webglInit) return;
        let _v2 = _v0.source,
          _v3 = _v12.get(_v2);
        if (_v3) {
          let _v0 = _v3[_v1.__cacheKey];
          _v0.usedTimes--, 0 === _v0.usedTimes && _v23(_v0), 0 === Object.keys(_v3).length && _v12.delete(_v2);
        }
        _v3.remove(_v0);
      }(_v1), _v1.isVideoTexture && _v11.delete(_v1);
    }
    function _v22(_v0) {
      let _v1 = _v0.target;
      _v1.removeEventListener("dispose", _v22), function (_v0) {
        let _v1 = _v3.get(_v0);
        if (_v0.depthTexture && (_v0.depthTexture.dispose(), _v3.remove(_v0.depthTexture)), _v0.isWebGLCubeRenderTarget) for (let _v0 = 0; _v0 < 6; _v0++) {
          if (Array.isArray(_v1.__webglFramebuffer[_v0])) for (let _v0 = 0; _v0 < _v1.__webglFramebuffer[_v0].length; _v0++) _v0.deleteFramebuffer(_v1.__webglFramebuffer[_v0][_v0]);else _v0.deleteFramebuffer(_v1.__webglFramebuffer[_v0]);
          _v1.__webglDepthbuffer && _v0.deleteRenderbuffer(_v1.__webglDepthbuffer[_v0]);
        } else {
          if (Array.isArray(_v1.__webglFramebuffer)) for (let _v0 = 0; _v0 < _v1.__webglFramebuffer.length; _v0++) _v0.deleteFramebuffer(_v1.__webglFramebuffer[_v0]);else _v0.deleteFramebuffer(_v1.__webglFramebuffer);
          if (_v1.__webglDepthbuffer && _v0.deleteRenderbuffer(_v1.__webglDepthbuffer), _v1.__webglMultisampledFramebuffer && _v0.deleteFramebuffer(_v1.__webglMultisampledFramebuffer), _v1.__webglColorRenderbuffer) for (let _v0 = 0; _v0 < _v1.__webglColorRenderbuffer.length; _v0++) _v1.__webglColorRenderbuffer[_v0] && _v0.deleteRenderbuffer(_v1.__webglColorRenderbuffer[_v0]);
          _v1.__webglDepthRenderbuffer && _v0.deleteRenderbuffer(_v1.__webglDepthRenderbuffer);
        }
        let _v2 = _v0.textures;
        for (let _v0 = 0, _v1 = _v2.length; _v0 < _v1; _v0++) {
          let _v0 = _v3.get(_v2[_v0]);
          _v0.__webglTexture && (_v0.deleteTexture(_v0.__webglTexture), _v6.memory.textures--), _v3.remove(_v2[_v0]);
        }
        _v3.remove(_v0);
      }(_v1);
    }
    function _v23(_v0) {
      let _v1 = _v3.get(_v0);
      _v0.deleteTexture(_v1.__webglTexture);
      let _v2 = _v0.source,
        _v3 = _v12.get(_v2);
      delete _v3[_v1.__cacheKey], _v6.memory.textures--;
    }
    let _v24 = 0;
    function _v25(_v0, _v1) {
      var _v2;
      let _v3,
        _v4 = _v3.get(_v0);
      if (_v0.isVideoTexture && (_v2 = _v0, _v3 = _v6.render.frame, _v11.get(_v2) !== _v3 && (_v11.set(_v2, _v3), _v2.update())), !1 === _v0.isRenderTargetTexture && !0 !== _v0.isExternalTexture && _v0.version > 0 && _v4.__version !== _v0.version) {
        let _v0 = _v0.image;
        if (null === _v0) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else {
          if (!1 !== _v0.complete) return void _v32(_v4, _v0, _v1);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
      } else _v0.isExternalTexture && (_v4.__webglTexture = _v0.sourceTexture ? _v0.sourceTexture : null);
      _v2.bindTexture(_v0.TEXTURE_2D, _v4.__webglTexture, _v0.TEXTURE0 + _v1);
    }
    let _v26 = {
        0: _v0.REPEAT,
        0: _v0.CLAMP_TO_EDGE,
        0: _v0.MIRRORED_REPEAT
      },
      _v27 = {
        0: _v0.NEAREST,
        0: _v0.NEAREST_MIPMAP_NEAREST,
        0: _v0.NEAREST_MIPMAP_LINEAR,
        0: _v0.LINEAR,
        0: _v0.LINEAR_MIPMAP_NEAREST,
        0: _v0.LINEAR_MIPMAP_LINEAR
      },
      _v28 = {
        512: _v0.NEVER,
        519: _v0.ALWAYS,
        513: _v0.LESS,
        515: _v0.LEQUAL,
        514: _v0.EQUAL,
        518: _v0.GEQUAL,
        516: _v0.GREATER,
        517: _v0.NOTEQUAL
      };
    function _v29(_v0, _v1) {
      if ((0 === _v1.type && !1 === _v1.has("OES_texture_float_linear") && (0 === _v1.magFilter || 0 === _v1.magFilter || 0 === _v1.magFilter || 0 === _v1.magFilter || 0 === _v1.minFilter || 0 === _v1.minFilter || 0 === _v1.minFilter || 0 === _v1.minFilter) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), _v0.texParameteri(_v0, _v0.TEXTURE_WRAP_S, _v26[_v1.wrapS]), _v0.texParameteri(_v0, _v0.TEXTURE_WRAP_T, _v26[_v1.wrapT]), (_v0 === _v0.TEXTURE_3D || _v0 === _v0.TEXTURE_2D_ARRAY) && _v0.texParameteri(_v0, _v0.TEXTURE_WRAP_R, _v26[_v1.wrapR]), _v0.texParameteri(_v0, _v0.TEXTURE_MAG_FILTER, _v27[_v1.magFilter]), _v0.texParameteri(_v0, _v0.TEXTURE_MIN_FILTER, _v27[_v1.minFilter]), _v1.compareFunction && (_v0.texParameteri(_v0, _v0.TEXTURE_COMPARE_MODE, _v0.COMPARE_REF_TO_TEXTURE), _v0.texParameteri(_v0, _v0.TEXTURE_COMPARE_FUNC, _v28[_v1.compareFunction])), !0 === _v1.has("EXT_texture_filter_anisotropic")) && 0 !== _v1.magFilter && (0 === _v1.minFilter || 0 === _v1.minFilter) && (0 !== _v1.type || !1 !== _v1.has("OES_texture_float_linear")) && (_v1.anisotropy > 1 || _v3.get(_v1).__currentAnisotropy)) {
        let _v0 = _v1.get("EXT_texture_filter_anisotropic");
        _v0.texParameterf(_v0, _v0.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_v1.anisotropy, _v4.getMaxAnisotropy())), _v3.get(_v1).__currentAnisotropy = _v1.anisotropy;
      }
    }
    function _v30(_v0, _v1) {
      let _v2,
        _v3 = !1;
      void 0 === _v0.__webglInit && (_v0.__webglInit = !0, _v1.addEventListener("dispose", _v21));
      let _v4 = _v1.source,
        _v5 = _v12.get(_v4);
      void 0 === _v5 && (_v5 = {}, _v12.set(_v4, _v5));
      let _v6 = ((_v2 = []).push(_v1.wrapS), _v2.push(_v1.wrapT), _v2.push(_v1.wrapR || 0), _v2.push(_v1.magFilter), _v2.push(_v1.minFilter), _v2.push(_v1.anisotropy), _v2.push(_v1.internalFormat), _v2.push(_v1.format), _v2.push(_v1.type), _v2.push(_v1.generateMipmaps), _v2.push(_v1.premultiplyAlpha), _v2.push(_v1.flipY), _v2.push(_v1.unpackAlignment), _v2.push(_v1.colorSpace), _v2.join());
      if (_v6 !== _v0.__cacheKey) {
        void 0 === _v5[_v6] && (_v5[_v6] = {
          texture: _v0.createTexture(),
          usedTimes: 0
        }, _v6.memory.textures++, _v3 = !0), _v5[_v6].usedTimes++;
        let _v0 = _v5[_v0.__cacheKey];
        void 0 !== _v0 && (_v5[_v0.__cacheKey].usedTimes--, 0 === _v0.usedTimes && _v23(_v1)), _v0.__cacheKey = _v6, _v0.__webglTexture = _v5[_v6].texture;
      }
      return _v3;
    }
    function _v31(_v0, _v1, _v2) {
      return Math.floor(Math.floor(_v0 / _v2) / _v1);
    }
    function _v32(_v0, _v1, _v2) {
      let _v3 = _v0.TEXTURE_2D;
      (_v1.isDataArrayTexture || _v1.isCompressedArrayTexture) && (_v3 = _v0.TEXTURE_2D_ARRAY), _v1.isData3DTexture && (_v3 = _v0.TEXTURE_3D);
      let _v4 = _v30(_v0, _v1),
        _v5 = _v1.source;
      _v2.bindTexture(_v3, _v0.__webglTexture, _v0.TEXTURE0 + _v2);
      let _v6 = _v3.get(_v5);
      if (_v5.version !== _v6.__version || !0 === _v4) {
        let _v0;
        _v2.activeTexture(_v0.TEXTURE0 + _v2);
        let _v1 = _v152.getPrimaries(_v152.workingColorSpace),
          _v2 = "" === _v1.colorSpace ? null : _v152.getPrimaries(_v1.colorSpace),
          _v3 = "" === _v1.colorSpace || _v1 === _v2 ? _v0.NONE : _v0.BROWSER_DEFAULT_WEBGL;
        _v0.pixelStorei(_v0.UNPACK_FLIP_Y_WEBGL, _v1.flipY), _v0.pixelStorei(_v0.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _v1.premultiplyAlpha), _v0.pixelStorei(_v0.UNPACK_ALIGNMENT, _v1.unpackAlignment), _v0.pixelStorei(_v0.UNPACK_COLORSPACE_CONVERSION_WEBGL, _v3);
        let _v4 = _v15(_v1.image, !1, _v4.maxTextureSize);
        _v4 = _v41(_v1, _v4);
        let _v5 = _v5.convert(_v1.format, _v1.colorSpace),
          _v6 = _v5.convert(_v1.type),
          _v7 = _v18(_v1.internalFormat, _v5, _v6, _v1.colorSpace, _v1.isVideoTexture);
        _v29(_v3, _v1);
        let _v8 = _v1.mipmaps,
          _v9 = !0 !== _v1.isVideoTexture,
          _v10 = void 0 === _v6.__version || !0 === _v4,
          _v11 = _v5.dataReady,
          _v12 = _v20(_v1, _v4);
        if (_v1.isDepthTexture) _v7 = _v19(0 === _v1.format, _v1.type), _v10 && (_v9 ? _v2.texStorage2D(_v0.TEXTURE_2D, 1, _v7, _v4.width, _v4.height) : _v2.texImage2D(_v0.TEXTURE_2D, 0, _v7, _v4.width, _v4.height, 0, _v5, _v6, null));else if (_v1.isDataTexture) {
          if (_v8.length > 0) {
            _v9 && _v10 && _v2.texStorage2D(_v0.TEXTURE_2D, _v12, _v7, _v8[0].width, _v8[0].height);
            for (let _v0 = 0, _v1 = _v8.length; _v0 < _v1; _v0++) _v0 = _v8[_v0], _v9 ? _v11 && _v2.texSubImage2D(_v0.TEXTURE_2D, _v0, 0, 0, _v0.width, _v0.height, _v5, _v6, _v0.data) : _v2.texImage2D(_v0.TEXTURE_2D, _v0, _v7, _v0.width, _v0.height, 0, _v5, _v6, _v0.data);
            _v1.generateMipmaps = !1;
          } else _v9 ? (_v10 && _v2.texStorage2D(_v0.TEXTURE_2D, _v12, _v7, _v4.width, _v4.height), _v11 && function (_v0, _v1, _v2, _v3) {
            let _v4 = _v0.updateRanges;
            if (0 === _v4.length) _v2.texSubImage2D(_v0.TEXTURE_2D, 0, 0, 0, _v1.width, _v1.height, _v2, _v3, _v1.data);else {
              _v4.sort((_v0, _v1) => _v0.start - _v1.start);
              let _v0 = 0;
              for (let _v0 = 1; _v0 < _v4.length; _v0++) {
                let _v0 = _v4[_v0],
                  _v1 = _v4[_v0],
                  _v2 = _v0.start + _v0.count,
                  _v3 = _v31(_v1.start, _v1.width, 4),
                  _v4 = _v31(_v0.start, _v1.width, 4);
                _v1.start <= _v2 + 1 && _v3 === _v4 && _v31(_v1.start + _v1.count - 1, _v1.width, 4) === _v3 ? _v0.count = Math.max(_v0.count, _v1.start + _v1.count - _v0.start) : _v4[++_v0] = _v1;
              }
              _v4.length = _v0 + 1;
              let _v1 = _v0.getParameter(_v0.UNPACK_ROW_LENGTH),
                _v2 = _v0.getParameter(_v0.UNPACK_SKIP_PIXELS),
                _v3 = _v0.getParameter(_v0.UNPACK_SKIP_ROWS);
              _v0.pixelStorei(_v0.UNPACK_ROW_LENGTH, _v1.width);
              for (let _v0 = 0, _v1 = _v4.length; _v0 < _v1; _v0++) {
                let _v0 = _v4[_v0],
                  _v1 = Math.floor(_v0.start / 4),
                  _v2 = Math.ceil(_v0.count / 4),
                  _v3 = _v1 % _v1.width,
                  _v4 = Math.floor(_v1 / _v1.width);
                _v0.pixelStorei(_v0.UNPACK_SKIP_PIXELS, _v3), _v0.pixelStorei(_v0.UNPACK_SKIP_ROWS, _v4), _v2.texSubImage2D(_v0.TEXTURE_2D, 0, _v3, _v4, _v2, 1, _v2, _v3, _v1.data);
              }
              _v0.clearUpdateRanges(), _v0.pixelStorei(_v0.UNPACK_ROW_LENGTH, _v1), _v0.pixelStorei(_v0.UNPACK_SKIP_PIXELS, _v2), _v0.pixelStorei(_v0.UNPACK_SKIP_ROWS, _v3);
            }
          }(_v1, _v4, _v5, _v6)) : _v2.texImage2D(_v0.TEXTURE_2D, 0, _v7, _v4.width, _v4.height, 0, _v5, _v6, _v4.data);
        } else if (_v1.isCompressedTexture) {
          if (_v1.isCompressedArrayTexture) {
            _v9 && _v10 && _v2.texStorage3D(_v0.TEXTURE_2D_ARRAY, _v12, _v7, _v8[0].width, _v8[0].height, _v4.depth);
            for (let _v0 = 0, _v1 = _v8.length; _v0 < _v1; _v0++) if (_v0 = _v8[_v0], 0 !== _v1.format) {
              if (null !== _v5) {
                if (_v9) {
                  if (_v11) if (_v1.layerUpdates.size > 0) {
                    let _v0 = _v341(_v0.width, _v0.height, _v1.format, _v1.type);
                    for (let _v0 of _v1.layerUpdates) {
                      let _v0 = _v0.data.subarray(_v0 * _v0 / _v0.data.BYTES_PER_ELEMENT, (_v0 + 1) * _v0 / _v0.data.BYTES_PER_ELEMENT);
                      _v2.compressedTexSubImage3D(_v0.TEXTURE_2D_ARRAY, _v0, 0, 0, _v0, _v0.width, _v0.height, 1, _v5, _v0);
                    }
                    _v1.clearLayerUpdates();
                  } else _v2.compressedTexSubImage3D(_v0.TEXTURE_2D_ARRAY, _v0, 0, 0, 0, _v0.width, _v0.height, _v4.depth, _v5, _v0.data);
                } else _v2.compressedTexImage3D(_v0.TEXTURE_2D_ARRAY, _v0, _v7, _v0.width, _v0.height, _v4.depth, 0, _v0.data, 0, 0);
              } else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            } else _v9 ? _v11 && _v2.texSubImage3D(_v0.TEXTURE_2D_ARRAY, _v0, 0, 0, 0, _v0.width, _v0.height, _v4.depth, _v5, _v6, _v0.data) : _v2.texImage3D(_v0.TEXTURE_2D_ARRAY, _v0, _v7, _v0.width, _v0.height, _v4.depth, 0, _v5, _v6, _v0.data);
          } else {
            _v9 && _v10 && _v2.texStorage2D(_v0.TEXTURE_2D, _v12, _v7, _v8[0].width, _v8[0].height);
            for (let _v0 = 0, _v1 = _v8.length; _v0 < _v1; _v0++) _v0 = _v8[_v0], 0 !== _v1.format ? null !== _v5 ? _v9 ? _v11 && _v2.compressedTexSubImage2D(_v0.TEXTURE_2D, _v0, 0, 0, _v0.width, _v0.height, _v5, _v0.data) : _v2.compressedTexImage2D(_v0.TEXTURE_2D, _v0, _v7, _v0.width, _v0.height, 0, _v0.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : _v9 ? _v11 && _v2.texSubImage2D(_v0.TEXTURE_2D, _v0, 0, 0, _v0.width, _v0.height, _v5, _v6, _v0.data) : _v2.texImage2D(_v0.TEXTURE_2D, _v0, _v7, _v0.width, _v0.height, 0, _v5, _v6, _v0.data);
          }
        } else if (_v1.isDataArrayTexture) {
          if (_v9) {
            if (_v10 && _v2.texStorage3D(_v0.TEXTURE_2D_ARRAY, _v12, _v7, _v4.width, _v4.height, _v4.depth), _v11) if (_v1.layerUpdates.size > 0) {
              let _v0 = _v341(_v4.width, _v4.height, _v1.format, _v1.type);
              for (let _v0 of _v1.layerUpdates) {
                let _v0 = _v4.data.subarray(_v0 * _v0 / _v4.data.BYTES_PER_ELEMENT, (_v0 + 1) * _v0 / _v4.data.BYTES_PER_ELEMENT);
                _v2.texSubImage3D(_v0.TEXTURE_2D_ARRAY, 0, 0, 0, _v0, _v4.width, _v4.height, 1, _v5, _v6, _v0);
              }
              _v1.clearLayerUpdates();
            } else _v2.texSubImage3D(_v0.TEXTURE_2D_ARRAY, 0, 0, 0, 0, _v4.width, _v4.height, _v4.depth, _v5, _v6, _v4.data);
          } else _v2.texImage3D(_v0.TEXTURE_2D_ARRAY, 0, _v7, _v4.width, _v4.height, _v4.depth, 0, _v5, _v6, _v4.data);
        } else if (_v1.isData3DTexture) _v9 ? (_v10 && _v2.texStorage3D(_v0.TEXTURE_3D, _v12, _v7, _v4.width, _v4.height, _v4.depth), _v11 && _v2.texSubImage3D(_v0.TEXTURE_3D, 0, 0, 0, 0, _v4.width, _v4.height, _v4.depth, _v5, _v6, _v4.data)) : _v2.texImage3D(_v0.TEXTURE_3D, 0, _v7, _v4.width, _v4.height, _v4.depth, 0, _v5, _v6, _v4.data);else if (_v1.isFramebufferTexture) {
          if (_v10) if (_v9) _v2.texStorage2D(_v0.TEXTURE_2D, _v12, _v7, _v4.width, _v4.height);else {
            let _v0 = _v4.width,
              _v1 = _v4.height;
            for (let _v0 = 0; _v0 < _v12; _v0++) _v2.texImage2D(_v0.TEXTURE_2D, _v0, _v7, _v0, _v1, 0, _v5, _v6, null), _v0 >>= 1, _v1 >>= 1;
          }
        } else if (_v8.length > 0) {
          if (_v9 && _v10) {
            let _v0 = _v42(_v8[0]);
            _v2.texStorage2D(_v0.TEXTURE_2D, _v12, _v7, _v0.width, _v0.height);
          }
          for (let _v0 = 0, _v1 = _v8.length; _v0 < _v1; _v0++) _v0 = _v8[_v0], _v9 ? _v11 && _v2.texSubImage2D(_v0.TEXTURE_2D, _v0, 0, 0, _v5, _v6, _v0) : _v2.texImage2D(_v0.TEXTURE_2D, _v0, _v7, _v5, _v6, _v0);
          _v1.generateMipmaps = !1;
        } else if (_v9) {
          if (_v10) {
            let _v0 = _v42(_v4);
            _v2.texStorage2D(_v0.TEXTURE_2D, _v12, _v7, _v0.width, _v0.height);
          }
          _v11 && _v2.texSubImage2D(_v0.TEXTURE_2D, 0, 0, 0, _v5, _v6, _v4);
        } else _v2.texImage2D(_v0.TEXTURE_2D, 0, _v7, _v5, _v6, _v4);
        _v16(_v1) && _v17(_v3), _v6.__version = _v5.version, _v1.onUpdate && _v1.onUpdate(_v1);
      }
      _v0.__version = _v1.version;
    }
    function _v33(_v0, _v1, _v2, _v3, _v4, _v5) {
      let _v6 = _v5.convert(_v2.format, _v2.colorSpace),
        _v7 = _v5.convert(_v2.type),
        _v8 = _v18(_v2.internalFormat, _v6, _v7, _v2.colorSpace),
        _v9 = _v3.get(_v1),
        _v10 = _v3.get(_v2);
      if (_v10.__renderTarget = _v1, !_v9.__hasExternalTextures) {
        let _v0 = Math.max(1, _v1.width >> _v5),
          _v1 = Math.max(1, _v1.height >> _v5);
        _v4 === _v0.TEXTURE_3D || _v4 === _v0.TEXTURE_2D_ARRAY ? _v2.texImage3D(_v4, _v5, _v8, _v0, _v1, _v1.depth, 0, _v6, _v7, null) : _v2.texImage2D(_v4, _v5, _v8, _v0, _v1, 0, _v6, _v7, null);
      }
      _v2.bindFramebuffer(_v0.FRAMEBUFFER, _v0), _v40(_v1) ? _v8.framebufferTexture2DMultisampleEXT(_v0.FRAMEBUFFER, _v3, _v4, _v10.__webglTexture, 0, _v39(_v1)) : (_v4 === _v0.TEXTURE_2D || _v4 >= _v0.TEXTURE_CUBE_MAP_POSITIVE_X && _v4 <= _v0.TEXTURE_CUBE_MAP_NEGATIVE_Z) && _v0.framebufferTexture2D(_v0.FRAMEBUFFER, _v3, _v4, _v10.__webglTexture, _v5), _v2.bindFramebuffer(_v0.FRAMEBUFFER, null);
    }
    function _v34(_v0, _v1, _v2) {
      if (_v0.bindRenderbuffer(_v0.RENDERBUFFER, _v0), _v1.depthBuffer) {
        let _v0 = _v1.depthTexture,
          _v1 = _v0 && _v0.isDepthTexture ? _v0.type : null,
          _v2 = _v19(_v1.stencilBuffer, _v1),
          _v3 = _v1.stencilBuffer ? _v0.DEPTH_STENCIL_ATTACHMENT : _v0.DEPTH_ATTACHMENT,
          _v4 = _v39(_v1);
        _v40(_v1) ? _v8.renderbufferStorageMultisampleEXT(_v0.RENDERBUFFER, _v4, _v2, _v1.width, _v1.height) : _v2 ? _v0.renderbufferStorageMultisample(_v0.RENDERBUFFER, _v4, _v2, _v1.width, _v1.height) : _v0.renderbufferStorage(_v0.RENDERBUFFER, _v2, _v1.width, _v1.height), _v0.framebufferRenderbuffer(_v0.FRAMEBUFFER, _v3, _v0.RENDERBUFFER, _v0);
      } else {
        let _v0 = _v1.textures;
        for (let _v0 = 0; _v0 < _v0.length; _v0++) {
          let _v0 = _v0[_v0],
            _v1 = _v5.convert(_v0.format, _v0.colorSpace),
            _v2 = _v5.convert(_v0.type),
            _v3 = _v18(_v0.internalFormat, _v1, _v2, _v0.colorSpace),
            _v4 = _v39(_v1);
          _v2 && !1 === _v40(_v1) ? _v0.renderbufferStorageMultisample(_v0.RENDERBUFFER, _v4, _v3, _v1.width, _v1.height) : _v40(_v1) ? _v8.renderbufferStorageMultisampleEXT(_v0.RENDERBUFFER, _v4, _v3, _v1.width, _v1.height) : _v0.renderbufferStorage(_v0.RENDERBUFFER, _v3, _v1.width, _v1.height);
        }
      }
      _v0.bindRenderbuffer(_v0.RENDERBUFFER, null);
    }
    function _v35(_v0, _v1) {
      if (_v1 && _v1.isWebGLCubeRenderTarget) throw Error("Depth Texture with cube render targets is not supported");
      if (_v2.bindFramebuffer(_v0.FRAMEBUFFER, _v0), !(_v1.depthTexture && _v1.depthTexture.isDepthTexture)) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
      let _v2 = _v3.get(_v1.depthTexture);
      _v2.__renderTarget = _v1, _v2.__webglTexture && _v1.depthTexture.image.width === _v1.width && _v1.depthTexture.image.height === _v1.height || (_v1.depthTexture.image.width = _v1.width, _v1.depthTexture.image.height = _v1.height, _v1.depthTexture.needsUpdate = !0), _v25(_v1.depthTexture, 0);
      let _v3 = _v2.__webglTexture,
        _v4 = _v39(_v1);
      if (0 === _v1.depthTexture.format) _v40(_v1) ? _v8.framebufferTexture2DMultisampleEXT(_v0.FRAMEBUFFER, _v0.DEPTH_ATTACHMENT, _v0.TEXTURE_2D, _v3, 0, _v4) : _v0.framebufferTexture2D(_v0.FRAMEBUFFER, _v0.DEPTH_ATTACHMENT, _v0.TEXTURE_2D, _v3, 0);else if (0 === _v1.depthTexture.format) _v40(_v1) ? _v8.framebufferTexture2DMultisampleEXT(_v0.FRAMEBUFFER, _v0.DEPTH_STENCIL_ATTACHMENT, _v0.TEXTURE_2D, _v3, 0, _v4) : _v0.framebufferTexture2D(_v0.FRAMEBUFFER, _v0.DEPTH_STENCIL_ATTACHMENT, _v0.TEXTURE_2D, _v3, 0);else throw Error("Unknown depthTexture format");
    }
    function _v36(_v0) {
      let _v1 = _v3.get(_v0),
        _v2 = !0 === _v0.isWebGLCubeRenderTarget;
      if (_v1.__boundDepthTexture !== _v0.depthTexture) {
        let _v0 = _v0.depthTexture;
        if (_v1.__depthDisposeCallback && _v1.__depthDisposeCallback(), _v0) {
          let _v0 = () => {
            delete _v1.__boundDepthTexture, delete _v1.__depthDisposeCallback, _v0.removeEventListener("dispose", _v0);
          };
          _v0.addEventListener("dispose", _v0), _v1.__depthDisposeCallback = _v0;
        }
        _v1.__boundDepthTexture = _v0;
      }
      if (_v0.depthTexture && !_v1.__autoAllocateDepthBuffer) {
        if (_v2) throw Error("target.depthTexture not supported in Cube render targets");
        let _v0 = _v0.texture.mipmaps;
        _v0 && _v0.length > 0 ? _v35(_v1.__webglFramebuffer[0], _v0) : _v35(_v1.__webglFramebuffer, _v0);
      } else if (_v2) {
        _v1.__webglDepthbuffer = [];
        for (let _v0 = 0; _v0 < 6; _v0++) if (_v2.bindFramebuffer(_v0.FRAMEBUFFER, _v1.__webglFramebuffer[_v0]), void 0 === _v1.__webglDepthbuffer[_v0]) _v1.__webglDepthbuffer[_v0] = _v0.createRenderbuffer(), _v34(_v1.__webglDepthbuffer[_v0], _v0, !1);else {
          let _v0 = _v0.stencilBuffer ? _v0.DEPTH_STENCIL_ATTACHMENT : _v0.DEPTH_ATTACHMENT,
            _v1 = _v1.__webglDepthbuffer[_v0];
          _v0.bindRenderbuffer(_v0.RENDERBUFFER, _v1), _v0.framebufferRenderbuffer(_v0.FRAMEBUFFER, _v0, _v0.RENDERBUFFER, _v1);
        }
      } else {
        let _v0 = _v0.texture.mipmaps;
        if (_v0 && _v0.length > 0 ? _v2.bindFramebuffer(_v0.FRAMEBUFFER, _v1.__webglFramebuffer[0]) : _v2.bindFramebuffer(_v0.FRAMEBUFFER, _v1.__webglFramebuffer), void 0 === _v1.__webglDepthbuffer) _v1.__webglDepthbuffer = _v0.createRenderbuffer(), _v34(_v1.__webglDepthbuffer, _v0, !1);else {
          let _v0 = _v0.stencilBuffer ? _v0.DEPTH_STENCIL_ATTACHMENT : _v0.DEPTH_ATTACHMENT,
            _v1 = _v1.__webglDepthbuffer;
          _v0.bindRenderbuffer(_v0.RENDERBUFFER, _v1), _v0.framebufferRenderbuffer(_v0.FRAMEBUFFER, _v0, _v0.RENDERBUFFER, _v1);
        }
      }
      _v2.bindFramebuffer(_v0.FRAMEBUFFER, null);
    }
    let _v37 = [],
      _v38 = [];
    function _v39(_v0) {
      return Math.min(_v4.maxSamples, _v0.samples);
    }
    function _v40(_v0) {
      let _v1 = _v3.get(_v0);
      return _v0.samples > 0 && !0 === _v1.has("WEBGL_multisampled_render_to_texture") && !1 !== _v1.__useRenderToTexture;
    }
    function _v41(_v0, _v1) {
      let _v2 = _v0.colorSpace,
        _v3 = _v0.format,
        _v4 = _v0.type;
      return !0 === _v0.isCompressedTexture || !0 === _v0.isVideoTexture || _v2 !== _v127 && "" !== _v2 && (_v152.getTransfer(_v2) === _v129 ? (0 !== _v3 || 0 !== _v4) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", _v2)), _v1;
    }
    function _v42(_v0) {
      return "u" > typeof HTMLImageElement && _v0 instanceof HTMLImageElement ? (_v10.width = _v0.naturalWidth || _v0.width, _v10.height = _v0.naturalHeight || _v0.height) : "u" > typeof VideoFrame && _v0 instanceof VideoFrame ? (_v10.width = _v0.displayWidth, _v10.height = _v0.displayHeight) : (_v10.width = _v0.width, _v10.height = _v0.height), _v10;
    }
    this.allocateTextureUnit = function () {
      let _v0 = _v24;
      return _v0 >= _v4.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + _v0 + " texture units while this GPU supports only " + _v4.maxTextures), _v24 += 1, _v0;
    }, this.resetTextureUnits = function () {
      _v24 = 0;
    }, this.setTexture2D = _v25, this.setTexture2DArray = function (_v0, _v1) {
      let _v2 = _v3.get(_v0);
      !1 === _v0.isRenderTargetTexture && _v0.version > 0 && _v2.__version !== _v0.version ? _v32(_v2, _v0, _v1) : _v2.bindTexture(_v0.TEXTURE_2D_ARRAY, _v2.__webglTexture, _v0.TEXTURE0 + _v1);
    }, this.setTexture3D = function (_v0, _v1) {
      let _v2 = _v3.get(_v0);
      !1 === _v0.isRenderTargetTexture && _v0.version > 0 && _v2.__version !== _v0.version ? _v32(_v2, _v0, _v1) : _v2.bindTexture(_v0.TEXTURE_3D, _v2.__webglTexture, _v0.TEXTURE0 + _v1);
    }, this.setTextureCube = function (_v0, _v1) {
      let _v2 = _v3.get(_v0);
      _v0.version > 0 && _v2.__version !== _v0.version ? function (_v0, _v1, _v2) {
        if (6 !== _v1.image.length) return;
        let _v3 = _v30(_v0, _v1),
          _v4 = _v1.source;
        _v2.bindTexture(_v0.TEXTURE_CUBE_MAP, _v0.__webglTexture, _v0.TEXTURE0 + _v2);
        let _v5 = _v3.get(_v4);
        if (_v4.version !== _v5.__version || !0 === _v3) {
          let _v0;
          _v2.activeTexture(_v0.TEXTURE0 + _v2);
          let _v1 = _v152.getPrimaries(_v152.workingColorSpace),
            _v2 = "" === _v1.colorSpace ? null : _v152.getPrimaries(_v1.colorSpace),
            _v3 = "" === _v1.colorSpace || _v1 === _v2 ? _v0.NONE : _v0.BROWSER_DEFAULT_WEBGL;
          _v0.pixelStorei(_v0.UNPACK_FLIP_Y_WEBGL, _v1.flipY), _v0.pixelStorei(_v0.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _v1.premultiplyAlpha), _v0.pixelStorei(_v0.UNPACK_ALIGNMENT, _v1.unpackAlignment), _v0.pixelStorei(_v0.UNPACK_COLORSPACE_CONVERSION_WEBGL, _v3);
          let _v4 = _v1.isCompressedTexture || _v1.image[0].isCompressedTexture,
            _v5 = _v1.image[0] && _v1.image[0].isDataTexture,
            _v6 = [];
          for (let _v0 = 0; _v0 < 6; _v0++) _v4 || _v5 ? _v6[_v0] = _v5 ? _v1.image[_v0].image : _v1.image[_v0] : _v6[_v0] = _v15(_v1.image[_v0], !0, _v4.maxCubemapSize), _v6[_v0] = _v41(_v1, _v6[_v0]);
          let _v7 = _v6[0],
            _v8 = _v5.convert(_v1.format, _v1.colorSpace),
            _v9 = _v5.convert(_v1.type),
            _v10 = _v18(_v1.internalFormat, _v8, _v9, _v1.colorSpace),
            _v11 = !0 !== _v1.isVideoTexture,
            _v12 = void 0 === _v5.__version || !0 === _v3,
            _v13 = _v4.dataReady,
            _v14 = _v20(_v1, _v7);
          if (_v29(_v0.TEXTURE_CUBE_MAP, _v1), _v4) {
            _v11 && _v12 && _v2.texStorage2D(_v0.TEXTURE_CUBE_MAP, _v14, _v10, _v7.width, _v7.height);
            for (let _v0 = 0; _v0 < 6; _v0++) {
              _v0 = _v6[_v0].mipmaps;
              for (let _v0 = 0; _v0 < _v0.length; _v0++) {
                let _v0 = _v0[_v0];
                0 !== _v1.format ? null !== _v8 ? _v11 ? _v13 && _v2.compressedTexSubImage2D(_v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, _v0, 0, 0, _v0.width, _v0.height, _v8, _v0.data) : _v2.compressedTexImage2D(_v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, _v0, _v10, _v0.width, _v0.height, 0, _v0.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : _v11 ? _v13 && _v2.texSubImage2D(_v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, _v0, 0, 0, _v0.width, _v0.height, _v8, _v9, _v0.data) : _v2.texImage2D(_v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, _v0, _v10, _v0.width, _v0.height, 0, _v8, _v9, _v0.data);
              }
            }
          } else {
            if (_v0 = _v1.mipmaps, _v11 && _v12) {
              _v0.length > 0 && _v14++;
              let _v0 = _v42(_v6[0]);
              _v2.texStorage2D(_v0.TEXTURE_CUBE_MAP, _v14, _v10, _v0.width, _v0.height);
            }
            for (let _v0 = 0; _v0 < 6; _v0++) if (_v5) {
              _v11 ? _v13 && _v2.texSubImage2D(_v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, 0, 0, 0, _v6[_v0].width, _v6[_v0].height, _v8, _v9, _v6[_v0].data) : _v2.texImage2D(_v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, 0, _v10, _v6[_v0].width, _v6[_v0].height, 0, _v8, _v9, _v6[_v0].data);
              for (let _v0 = 0; _v0 < _v0.length; _v0++) {
                let _v0 = _v0[_v0].image[_v0].image;
                _v11 ? _v13 && _v2.texSubImage2D(_v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, _v0 + 1, 0, 0, _v0.width, _v0.height, _v8, _v9, _v0.data) : _v2.texImage2D(_v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, _v0 + 1, _v10, _v0.width, _v0.height, 0, _v8, _v9, _v0.data);
              }
            } else {
              _v11 ? _v13 && _v2.texSubImage2D(_v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, 0, 0, 0, _v8, _v9, _v6[_v0]) : _v2.texImage2D(_v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, 0, _v10, _v8, _v9, _v6[_v0]);
              for (let _v0 = 0; _v0 < _v0.length; _v0++) {
                let _v0 = _v0[_v0];
                _v11 ? _v13 && _v2.texSubImage2D(_v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, _v0 + 1, 0, 0, _v8, _v9, _v0.image[_v0]) : _v2.texImage2D(_v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, _v0 + 1, _v10, _v8, _v9, _v0.image[_v0]);
              }
            }
          }
          _v16(_v1) && _v17(_v0.TEXTURE_CUBE_MAP), _v5.__version = _v4.version, _v1.onUpdate && _v1.onUpdate(_v1);
        }
        _v0.__version = _v1.version;
      }(_v2, _v0, _v1) : _v2.bindTexture(_v0.TEXTURE_CUBE_MAP, _v2.__webglTexture, _v0.TEXTURE0 + _v1);
    }, this.rebindTextures = function (_v0, _v1, _v2) {
      let _v3 = _v3.get(_v0);
      void 0 !== _v1 && _v33(_v3.__webglFramebuffer, _v0, _v0.texture, _v0.COLOR_ATTACHMENT0, _v0.TEXTURE_2D, 0), void 0 !== _v2 && _v36(_v0);
    }, this.setupRenderTarget = function (_v0) {
      let _v1 = _v0.texture,
        _v2 = _v3.get(_v0),
        _v3 = _v3.get(_v1);
      _v0.addEventListener("dispose", _v22);
      let _v4 = _v0.textures,
        _v5 = !0 === _v0.isWebGLCubeRenderTarget,
        _v6 = _v4.length > 1;
      if (!_v6 && (void 0 === _v3.__webglTexture && (_v3.__webglTexture = _v0.createTexture()), _v3.__version = _v1.version, _v6.memory.textures++), _v5) {
        _v2.__webglFramebuffer = [];
        for (let _v0 = 0; _v0 < 6; _v0++) if (_v1.mipmaps && _v1.mipmaps.length > 0) {
          _v2.__webglFramebuffer[_v0] = [];
          for (let _v0 = 0; _v0 < _v1.mipmaps.length; _v0++) _v2.__webglFramebuffer[_v0][_v0] = _v0.createFramebuffer();
        } else _v2.__webglFramebuffer[_v0] = _v0.createFramebuffer();
      } else {
        if (_v1.mipmaps && _v1.mipmaps.length > 0) {
          _v2.__webglFramebuffer = [];
          for (let _v0 = 0; _v0 < _v1.mipmaps.length; _v0++) _v2.__webglFramebuffer[_v0] = _v0.createFramebuffer();
        } else _v2.__webglFramebuffer = _v0.createFramebuffer();
        if (_v6) for (let _v0 = 0, _v1 = _v4.length; _v0 < _v1; _v0++) {
          let _v0 = _v3.get(_v4[_v0]);
          void 0 === _v0.__webglTexture && (_v0.__webglTexture = _v0.createTexture(), _v6.memory.textures++);
        }
        if (_v0.samples > 0 && !1 === _v40(_v0)) {
          _v2.__webglMultisampledFramebuffer = _v0.createFramebuffer(), _v2.__webglColorRenderbuffer = [], _v2.bindFramebuffer(_v0.FRAMEBUFFER, _v2.__webglMultisampledFramebuffer);
          for (let _v0 = 0; _v0 < _v4.length; _v0++) {
            let _v0 = _v4[_v0];
            _v2.__webglColorRenderbuffer[_v0] = _v0.createRenderbuffer(), _v0.bindRenderbuffer(_v0.RENDERBUFFER, _v2.__webglColorRenderbuffer[_v0]);
            let _v1 = _v5.convert(_v0.format, _v0.colorSpace),
              _v2 = _v5.convert(_v0.type),
              _v3 = _v18(_v0.internalFormat, _v1, _v2, _v0.colorSpace, !0 === _v0.isXRRenderTarget),
              _v4 = _v39(_v0);
            _v0.renderbufferStorageMultisample(_v0.RENDERBUFFER, _v4, _v3, _v0.width, _v0.height), _v0.framebufferRenderbuffer(_v0.FRAMEBUFFER, _v0.COLOR_ATTACHMENT0 + _v0, _v0.RENDERBUFFER, _v2.__webglColorRenderbuffer[_v0]);
          }
          _v0.bindRenderbuffer(_v0.RENDERBUFFER, null), _v0.depthBuffer && (_v2.__webglDepthRenderbuffer = _v0.createRenderbuffer(), _v34(_v2.__webglDepthRenderbuffer, _v0, !0)), _v2.bindFramebuffer(_v0.FRAMEBUFFER, null);
        }
      }
      if (_v5) {
        _v2.bindTexture(_v0.TEXTURE_CUBE_MAP, _v3.__webglTexture), _v29(_v0.TEXTURE_CUBE_MAP, _v1);
        for (let _v0 = 0; _v0 < 6; _v0++) if (_v1.mipmaps && _v1.mipmaps.length > 0) for (let _v0 = 0; _v0 < _v1.mipmaps.length; _v0++) _v33(_v2.__webglFramebuffer[_v0][_v0], _v0, _v1, _v0.COLOR_ATTACHMENT0, _v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, _v0);else _v33(_v2.__webglFramebuffer[_v0], _v0, _v1, _v0.COLOR_ATTACHMENT0, _v0.TEXTURE_CUBE_MAP_POSITIVE_X + _v0, 0);
        _v16(_v1) && _v17(_v0.TEXTURE_CUBE_MAP), _v2.unbindTexture();
      } else if (_v6) {
        for (let _v0 = 0, _v1 = _v4.length; _v0 < _v1; _v0++) {
          let _v0 = _v4[_v0],
            _v1 = _v3.get(_v0),
            _v2 = _v0.TEXTURE_2D;
          (_v0.isWebGL3DRenderTarget || _v0.isWebGLArrayRenderTarget) && (_v2 = _v0.isWebGL3DRenderTarget ? _v0.TEXTURE_3D : _v0.TEXTURE_2D_ARRAY), _v2.bindTexture(_v2, _v1.__webglTexture), _v29(_v2, _v0), _v33(_v2.__webglFramebuffer, _v0, _v0, _v0.COLOR_ATTACHMENT0 + _v0, _v2, 0), _v16(_v0) && _v17(_v2);
        }
        _v2.unbindTexture();
      } else {
        let _v0 = _v0.TEXTURE_2D;
        if ((_v0.isWebGL3DRenderTarget || _v0.isWebGLArrayRenderTarget) && (_v0 = _v0.isWebGL3DRenderTarget ? _v0.TEXTURE_3D : _v0.TEXTURE_2D_ARRAY), _v2.bindTexture(_v0, _v3.__webglTexture), _v29(_v0, _v1), _v1.mipmaps && _v1.mipmaps.length > 0) for (let _v0 = 0; _v0 < _v1.mipmaps.length; _v0++) _v33(_v2.__webglFramebuffer[_v0], _v0, _v1, _v0.COLOR_ATTACHMENT0, _v0, _v0);else _v33(_v2.__webglFramebuffer, _v0, _v1, _v0.COLOR_ATTACHMENT0, _v0, 0);
        _v16(_v1) && _v17(_v0), _v2.unbindTexture();
      }
      _v0.depthBuffer && _v36(_v0);
    }, this.updateRenderTargetMipmap = function (_v0) {
      let _v1 = _v0.textures;
      for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) {
        let _v0 = _v1[_v0];
        if (_v16(_v0)) {
          let _v0 = _v0.isWebGLCubeRenderTarget ? _v0.TEXTURE_CUBE_MAP : _v0.isWebGL3DRenderTarget ? _v0.TEXTURE_3D : _v0.isWebGLArrayRenderTarget || _v0.isCompressedArrayTexture ? _v0.TEXTURE_2D_ARRAY : _v0.TEXTURE_2D,
            _v1 = _v3.get(_v0).__webglTexture;
          _v2.bindTexture(_v0, _v1), _v17(_v0), _v2.unbindTexture();
        }
      }
    }, this.updateMultisampleRenderTarget = function (_v0) {
      if (_v0.samples > 0) {
        if (!1 === _v40(_v0)) {
          let _v0 = _v0.textures,
            _v1 = _v0.width,
            _v2 = _v0.height,
            _v3 = _v0.COLOR_BUFFER_BIT,
            _v4 = _v0.stencilBuffer ? _v0.DEPTH_STENCIL_ATTACHMENT : _v0.DEPTH_ATTACHMENT,
            _v5 = _v3.get(_v0),
            _v6 = _v0.length > 1;
          if (_v6) for (let _v0 = 0; _v0 < _v0.length; _v0++) _v2.bindFramebuffer(_v0.FRAMEBUFFER, _v5.__webglMultisampledFramebuffer), _v0.framebufferRenderbuffer(_v0.FRAMEBUFFER, _v0.COLOR_ATTACHMENT0 + _v0, _v0.RENDERBUFFER, null), _v2.bindFramebuffer(_v0.FRAMEBUFFER, _v5.__webglFramebuffer), _v0.framebufferTexture2D(_v0.DRAW_FRAMEBUFFER, _v0.COLOR_ATTACHMENT0 + _v0, _v0.TEXTURE_2D, null, 0);
          _v2.bindFramebuffer(_v0.READ_FRAMEBUFFER, _v5.__webglMultisampledFramebuffer);
          let _v7 = _v0.texture.mipmaps;
          _v7 && _v7.length > 0 ? _v2.bindFramebuffer(_v0.DRAW_FRAMEBUFFER, _v5.__webglFramebuffer[0]) : _v2.bindFramebuffer(_v0.DRAW_FRAMEBUFFER, _v5.__webglFramebuffer);
          for (let _v0 = 0; _v0 < _v0.length; _v0++) {
            if (_v0.resolveDepthBuffer && (_v0.depthBuffer && (_v3 |= _v0.DEPTH_BUFFER_BIT), _v0.stencilBuffer && _v0.resolveStencilBuffer && (_v3 |= _v0.STENCIL_BUFFER_BIT)), _v6) {
              _v0.framebufferRenderbuffer(_v0.READ_FRAMEBUFFER, _v0.COLOR_ATTACHMENT0, _v0.RENDERBUFFER, _v5.__webglColorRenderbuffer[_v0]);
              let _v0 = _v3.get(_v0[_v0]).__webglTexture;
              _v0.framebufferTexture2D(_v0.DRAW_FRAMEBUFFER, _v0.COLOR_ATTACHMENT0, _v0.TEXTURE_2D, _v0, 0);
            }
            _v0.blitFramebuffer(0, 0, _v1, _v2, 0, 0, _v1, _v2, _v3, _v0.NEAREST), !0 === _v9 && (_v37.length = 0, _v38.length = 0, _v37.push(_v0.COLOR_ATTACHMENT0 + _v0), _v0.depthBuffer && !1 === _v0.resolveDepthBuffer && (_v37.push(_v4), _v38.push(_v4), _v0.invalidateFramebuffer(_v0.DRAW_FRAMEBUFFER, _v38)), _v0.invalidateFramebuffer(_v0.READ_FRAMEBUFFER, _v37));
          }
          if (_v2.bindFramebuffer(_v0.READ_FRAMEBUFFER, null), _v2.bindFramebuffer(_v0.DRAW_FRAMEBUFFER, null), _v6) for (let _v0 = 0; _v0 < _v0.length; _v0++) {
            _v2.bindFramebuffer(_v0.FRAMEBUFFER, _v5.__webglMultisampledFramebuffer), _v0.framebufferRenderbuffer(_v0.FRAMEBUFFER, _v0.COLOR_ATTACHMENT0 + _v0, _v0.RENDERBUFFER, _v5.__webglColorRenderbuffer[_v0]);
            let _v0 = _v3.get(_v0[_v0]).__webglTexture;
            _v2.bindFramebuffer(_v0.FRAMEBUFFER, _v5.__webglFramebuffer), _v0.framebufferTexture2D(_v0.DRAW_FRAMEBUFFER, _v0.COLOR_ATTACHMENT0 + _v0, _v0.TEXTURE_2D, _v0, 0);
          }
          _v2.bindFramebuffer(_v0.DRAW_FRAMEBUFFER, _v5.__webglMultisampledFramebuffer);
        } else if (_v0.depthBuffer && !1 === _v0.resolveDepthBuffer && _v9) {
          let _v0 = _v0.stencilBuffer ? _v0.DEPTH_STENCIL_ATTACHMENT : _v0.DEPTH_ATTACHMENT;
          _v0.invalidateFramebuffer(_v0.DRAW_FRAMEBUFFER, [_v0]);
        }
      }
    }, this.setupDepthRenderbuffer = _v36, this.setupFrameBufferTexture = _v33, this.useMultisampledRTT = _v40;
  }
  function _v474(_v0, _v1) {
    return {
      convert: function (_v0, _v1 = "") {
        let _v2,
          _v3 = _v152.getTransfer(_v1);
        if (0 === _v0) return _v0.UNSIGNED_BYTE;
        if (0 === _v0) return _v0.UNSIGNED_SHORT_4_4_4_4;
        if (0 === _v0) return _v0.UNSIGNED_SHORT_5_5_5_1;
        if (0 === _v0) return _v0.UNSIGNED_INT_5_9_9_9_REV;
        if (0 === _v0) return _v0.UNSIGNED_INT_10F_11F_11F_REV;
        if (0 === _v0) return _v0.BYTE;
        if (0 === _v0) return _v0.SHORT;
        if (0 === _v0) return _v0.UNSIGNED_SHORT;
        if (0 === _v0) return _v0.INT;
        if (0 === _v0) return _v0.UNSIGNED_INT;
        if (0 === _v0) return _v0.FLOAT;
        if (0 === _v0) return _v0.HALF_FLOAT;
        if (0 === _v0) return _v0.ALPHA;
        if (0 === _v0) return _v0.RGB;
        if (0 === _v0) return _v0.RGBA;
        if (0 === _v0) return _v0.DEPTH_COMPONENT;
        if (0 === _v0) return _v0.DEPTH_STENCIL;
        if (0 === _v0) return _v0.RED;
        if (0 === _v0) return _v0.RED_INTEGER;
        if (0 === _v0) return _v0.RG;
        if (0 === _v0) return _v0.RG_INTEGER;
        if (0 === _v0) return _v0.RGBA_INTEGER;
        if (0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0) if (_v3 === _v129) {
          if (null === (_v2 = _v1.get("WEBGL_compressed_texture_s3tc_srgb"))) return null;
          if (0 === _v0) return _v2.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (0 === _v0) return _v2.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (0 === _v0) return _v2.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (0 === _v0) return _v2.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          if (null === (_v2 = _v1.get("WEBGL_compressed_texture_s3tc"))) return null;
          if (0 === _v0) return _v2.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (0 === _v0) return _v2.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (0 === _v0) return _v2.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (0 === _v0) return _v2.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
        if (0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0) {
          if (null === (_v2 = _v1.get("WEBGL_compressed_texture_pvrtc"))) return null;
          if (0 === _v0) return _v2.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (0 === _v0) return _v2.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (0 === _v0) return _v2.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (0 === _v0) return _v2.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
        if (0 === _v0 || 0 === _v0 || 0 === _v0) {
          if (null === (_v2 = _v1.get("WEBGL_compressed_texture_etc"))) return null;
          if (0 === _v0 || 0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ETC2 : _v2.COMPRESSED_RGB8_ETC2;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : _v2.COMPRESSED_RGBA8_ETC2_EAC;
        }
        if (0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0) {
          if (null === (_v2 = _v1.get("WEBGL_compressed_texture_astc"))) return null;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : _v2.COMPRESSED_RGBA_ASTC_4x4_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : _v2.COMPRESSED_RGBA_ASTC_5x4_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : _v2.COMPRESSED_RGBA_ASTC_5x5_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : _v2.COMPRESSED_RGBA_ASTC_6x5_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : _v2.COMPRESSED_RGBA_ASTC_6x6_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : _v2.COMPRESSED_RGBA_ASTC_8x5_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : _v2.COMPRESSED_RGBA_ASTC_8x6_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : _v2.COMPRESSED_RGBA_ASTC_8x8_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : _v2.COMPRESSED_RGBA_ASTC_10x5_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : _v2.COMPRESSED_RGBA_ASTC_10x6_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : _v2.COMPRESSED_RGBA_ASTC_10x8_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : _v2.COMPRESSED_RGBA_ASTC_10x10_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : _v2.COMPRESSED_RGBA_ASTC_12x10_KHR;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : _v2.COMPRESSED_RGBA_ASTC_12x12_KHR;
        }
        if (0 === _v0 || 0 === _v0 || 0 === _v0) {
          if (null === (_v2 = _v1.get("EXT_texture_compression_bptc"))) return null;
          if (0 === _v0) return _v3 === _v129 ? _v2.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : _v2.COMPRESSED_RGBA_BPTC_UNORM_EXT;
          if (0 === _v0) return _v2.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
          if (0 === _v0) return _v2.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
        }
        if (0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0) {
          if (null === (_v2 = _v1.get("EXT_texture_compression_rgtc"))) return null;
          if (0 === _v0) return _v2.COMPRESSED_RED_RGTC1_EXT;
          if (0 === _v0) return _v2.COMPRESSED_SIGNED_RED_RGTC1_EXT;
          if (0 === _v0) return _v2.COMPRESSED_RED_GREEN_RGTC2_EXT;
          if (0 === _v0) return _v2.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
        }
        return 0 === _v0 ? _v0.UNSIGNED_INT_24_8 : void 0 !== _v0[_v0] ? _v0[_v0] : null;
      }
    };
  }
  let _v475 = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
    _v476 = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
  class _v477 {
    constructor() {
      this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
    }
    init(_v0, _v1) {
      if (null === this.texture) {
        let _v0 = new _v299(_v0.texture);
        (_v0.depthNear !== _v1.depthNear || _v0.depthFar !== _v1.depthFar) && (this.depthNear = _v0.depthNear, this.depthFar = _v0.depthFar), this.texture = _v0;
      }
    }
    getMesh(_v0) {
      if (null !== this.texture && null === this.mesh) {
        let _v0 = _v0.cameras[0].viewport,
          _v1 = new _v275({
            vertexShader: _v475,
            fragmentShader: _v476,
            uniforms: {
              depthColor: {
                value: this.texture
              },
              depthWidth: {
                value: _v0.z
              },
              depthHeight: {
                value: _v0.w
              }
            }
          });
        this.mesh = new _v269(new _v314(20, 20), _v1);
      }
      return this.mesh;
    }
    reset() {
      this.texture = null, this.mesh = null;
    }
    getDepthTexture() {
      return this.texture;
    }
  }
  class _v478 extends _v131 {
    constructor(_v0, _v1) {
      super();
      const _v2 = this;
      let _v3 = null,
        _v4 = 1,
        _v5 = null,
        _v6 = "local-floor",
        _v7 = 1,
        _v8 = null,
        _v9 = null,
        _v10 = null,
        _v11 = null,
        _v12 = null,
        _v13 = null;
      const _v14 = "u" > typeof XRWebGLBinding,
        _v15 = new _v477(),
        _v16 = {},
        _v17 = _v1.getContextAttributes();
      let _v18 = null,
        _v19 = null;
      const _v20 = [],
        _v21 = [],
        _v22 = new _v139();
      let _v23 = null;
      const _v24 = new _v280();
      _v24.viewport = new _v162();
      const _v25 = new _v280();
      _v25.viewport = new _v162();
      const _v26 = [_v24, _v25],
        _v27 = new _v333();
      let _v28 = null,
        _v29 = null;
      function _v30(_v0) {
        let _v1 = _v21.indexOf(_v0.inputSource);
        if (-1 === _v1) return;
        let _v2 = _v20[_v1];
        void 0 !== _v2 && (_v2.update(_v0.inputSource, _v0.frame, _v8 || _v5), _v2.dispatchEvent({
          type: _v0.type,
          data: _v0.inputSource
        }));
      }
      function _v31() {
        _v3.removeEventListener("select", _v30), _v3.removeEventListener("selectstart", _v30), _v3.removeEventListener("selectend", _v30), _v3.removeEventListener("squeeze", _v30), _v3.removeEventListener("squeezestart", _v30), _v3.removeEventListener("squeezeend", _v30), _v3.removeEventListener("end", _v31), _v3.removeEventListener("inputsourceschange", _v32);
        for (let _v0 = 0; _v0 < _v20.length; _v0++) {
          let _v0 = _v21[_v0];
          null !== _v0 && (_v21[_v0] = null, _v20[_v0].disconnect(_v0));
        }
        for (let _v0 in _v28 = null, _v29 = null, _v15.reset(), _v16) delete _v16[_v0];
        _v0.setRenderTarget(_v18), _v12 = null, _v11 = null, _v10 = null, _v3 = null, _v19 = null, _v37.stop(), _v2.isPresenting = !1, _v0.setPixelRatio(_v23), _v0.setSize(_v22.width, _v22.height, !1), _v2.dispatchEvent({
          type: "sessionend"
        });
      }
      function _v32(_v0) {
        for (let _v0 = 0; _v0 < _v0.removed.length; _v0++) {
          let _v0 = _v0.removed[_v0],
            _v1 = _v21.indexOf(_v0);
          _v1 >= 0 && (_v21[_v1] = null, _v20[_v1].disconnect(_v0));
        }
        for (let _v0 = 0; _v0 < _v0.added.length; _v0++) {
          let _v0 = _v0.added[_v0],
            _v1 = _v21.indexOf(_v0);
          if (-1 === _v1) {
            for (let _v0 = 0; _v0 < _v20.length; _v0++) if (_v0 >= _v21.length) {
              _v21.push(_v0), _v1 = _v0;
              break;
            } else if (null === _v21[_v0]) {
              _v21[_v0] = _v0, _v1 = _v0;
              break;
            }
            if (-1 === _v1) break;
          }
          let _v2 = _v20[_v1];
          _v2 && _v2.connect(_v0);
        }
      }
      this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (_v0) {
        let _v1 = _v20[_v0];
        return void 0 === _v1 && (_v1 = new _v286(), _v20[_v0] = _v1), _v1.getTargetRaySpace();
      }, this.getControllerGrip = function (_v0) {
        let _v1 = _v20[_v0];
        return void 0 === _v1 && (_v1 = new _v286(), _v20[_v0] = _v1), _v1.getGripSpace();
      }, this.getHand = function (_v0) {
        let _v1 = _v20[_v0];
        return void 0 === _v1 && (_v1 = new _v286(), _v20[_v0] = _v1), _v1.getHandSpace();
      }, this.setFramebufferScaleFactor = function (_v0) {
        _v4 = _v0, !0 === _v2.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function (_v0) {
        _v6 = _v0, !0 === _v2.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function () {
        return _v8 || _v5;
      }, this.setReferenceSpace = function (_v0) {
        _v8 = _v0;
      }, this.getBaseLayer = function () {
        return null !== _v11 ? _v11 : _v12;
      }, this.getBinding = function () {
        return null === _v10 && _v14 && (_v10 = new XRWebGLBinding(_v3, _v1)), _v10;
      }, this.getFrame = function () {
        return _v13;
      }, this.getSession = function () {
        return _v3;
      }, this.setSession = async function (_v0) {
        if (null !== (_v3 = _v0)) {
          if (_v18 = _v0.getRenderTarget(), _v3.addEventListener("select", _v30), _v3.addEventListener("selectstart", _v30), _v3.addEventListener("selectend", _v30), _v3.addEventListener("squeeze", _v30), _v3.addEventListener("squeezestart", _v30), _v3.addEventListener("squeezeend", _v30), _v3.addEventListener("end", _v31), _v3.addEventListener("inputsourceschange", _v32), !0 !== _v17.xrCompatible && (await _v1.makeXRCompatible()), _v23 = _v0.getPixelRatio(), _v0.getSize(_v22), _v14 && "createProjectionLayer" in XRWebGLBinding.prototype) {
            let _v0 = null,
              _v1 = null,
              _v2 = null;
            _v17.depth && (_v2 = _v17.stencil ? _v1.DEPTH24_STENCIL8 : _v1.DEPTH_COMPONENT24, _v0 = _v17.stencil ? 0 : 0, _v1 = _v17.stencil ? 0 : 0);
            let _v3 = {
              colorFormat: _v1.RGBA8,
              depthFormat: _v2,
              scaleFactor: _v4
            };
            _v11 = (_v10 = this.getBinding()).createProjectionLayer(_v3), _v3.updateRenderState({
              layers: [_v11]
            }), _v0.setPixelRatio(1), _v0.setSize(_v11.textureWidth, _v11.textureHeight, !1), _v19 = new _v164(_v11.textureWidth, _v11.textureHeight, {
              format: 0,
              type: 0,
              depthTexture: new _v298(_v11.textureWidth, _v11.textureHeight, _v1, void 0, void 0, void 0, void 0, void 0, void 0, _v0),
              stencilBuffer: _v17.stencil,
              colorSpace: _v0.outputColorSpace,
              samples: 4 * !!_v17.antialias,
              resolveDepthBuffer: !1 === _v11.ignoreDepthValues,
              resolveStencilBuffer: !1 === _v11.ignoreDepthValues
            });
          } else {
            let _v0 = {
              antialias: _v17.antialias,
              alpha: !0,
              depth: _v17.depth,
              stencil: _v17.stencil,
              framebufferScaleFactor: _v4
            };
            _v12 = new XRWebGLLayer(_v3, _v1, _v0), _v3.updateRenderState({
              baseLayer: _v12
            }), _v0.setPixelRatio(1), _v0.setSize(_v12.framebufferWidth, _v12.framebufferHeight, !1), _v19 = new _v164(_v12.framebufferWidth, _v12.framebufferHeight, {
              format: 0,
              type: 0,
              colorSpace: _v0.outputColorSpace,
              stencilBuffer: _v17.stencil,
              resolveDepthBuffer: !1 === _v12.ignoreDepthValues,
              resolveStencilBuffer: !1 === _v12.ignoreDepthValues
            });
          }
          _v19.isXRRenderTarget = !0, this.setFoveation(_v7), _v8 = null, _v5 = await _v3.requestReferenceSpace(_v6), _v37.setContext(_v3), _v37.start(), _v2.isPresenting = !0, _v2.dispatchEvent({
            type: "sessionstart"
          });
        }
      }, this.getEnvironmentBlendMode = function () {
        if (null !== _v3) return _v3.environmentBlendMode;
      }, this.getDepthTexture = function () {
        return _v15.getDepthTexture();
      };
      const _v33 = new _v141(),
        _v34 = new _v141();
      function _v35(_v0, _v1) {
        null === _v1 ? _v0.matrixWorld.copy(_v0.matrix) : _v0.matrixWorld.multiplyMatrices(_v1.matrixWorld, _v0.matrix), _v0.matrixWorldInverse.copy(_v0.matrixWorld).invert();
      }
      this.updateCamera = function (_v0) {
        var _v1, _v2, _v3;
        if (null === _v3) return;
        let _v4 = _v0.near,
          _v5 = _v0.far;
        null !== _v15.texture && (_v15.depthNear > 0 && (_v4 = _v15.depthNear), _v15.depthFar > 0 && (_v5 = _v15.depthFar)), _v27.near = _v25.near = _v24.near = _v4, _v27.far = _v25.far = _v24.far = _v5, (_v28 !== _v27.near || _v29 !== _v27.far) && (_v3.updateRenderState({
          depthNear: _v27.near,
          depthFar: _v27.far
        }), _v28 = _v27.near, _v29 = _v27.far), _v27.layers.mask = 6 | _v0.layers.mask, _v24.layers.mask = 3 & _v27.layers.mask, _v25.layers.mask = 5 & _v27.layers.mask;
        let _v6 = _v0.parent,
          _v7 = _v27.cameras;
        _v35(_v27, _v6);
        for (let _v0 = 0; _v0 < _v7.length; _v0++) _v35(_v7[_v0], _v6);
        2 === _v7.length ? function (_v0, _v1, _v2) {
          _v33.setFromMatrixPosition(_v1.matrixWorld), _v34.setFromMatrixPosition(_v2.matrixWorld);
          let _v3 = _v33.distanceTo(_v34),
            _v4 = _v1.projectionMatrix.elements,
            _v5 = _v2.projectionMatrix.elements,
            _v6 = _v4[14] / (_v4[10] - 1),
            _v7 = _v4[14] / (_v4[10] + 1),
            _v8 = (_v4[9] + 1) / _v4[5],
            _v9 = (_v4[9] - 1) / _v4[5],
            _v10 = (_v4[8] - 1) / _v4[0],
            _v11 = (_v5[8] + 1) / _v5[0],
            _v12 = _v3 / (-_v10 + _v11),
            _v13 = -(_v12 * _v10);
          if (_v1.matrixWorld.decompose(_v0.position, _v0.quaternion, _v0.scale), _v0.translateX(_v13), _v0.translateZ(_v12), _v0.matrixWorld.compose(_v0.position, _v0.quaternion, _v0.scale), _v0.matrixWorldInverse.copy(_v0.matrixWorld).invert(), -1 === _v4[10]) _v0.projectionMatrix.copy(_v1.projectionMatrix), _v0.projectionMatrixInverse.copy(_v1.projectionMatrixInverse);else {
            let _v0 = _v6 + _v12,
              _v1 = _v7 + _v12;
            _v0.projectionMatrix.makePerspective(_v6 * _v10 - _v13, _v6 * _v11 + (_v3 - _v13), _v8 * _v7 / _v1 * _v0, _v9 * _v7 / _v1 * _v0, _v0, _v1), _v0.projectionMatrixInverse.copy(_v0.projectionMatrix).invert();
          }
        }(_v27, _v24, _v25) : _v27.projectionMatrix.copy(_v24.projectionMatrix), _v1 = _v0, _v2 = _v27, null === (_v3 = _v6) ? _v1.matrix.copy(_v2.matrixWorld) : (_v1.matrix.copy(_v3.matrixWorld), _v1.matrix.invert(), _v1.matrix.multiply(_v2.matrixWorld)), _v1.matrix.decompose(_v1.position, _v1.quaternion, _v1.scale), _v1.updateMatrixWorld(!0), _v1.projectionMatrix.copy(_v2.projectionMatrix), _v1.projectionMatrixInverse.copy(_v2.projectionMatrixInverse), _v1.isPerspectiveCamera && (_v1.fov = 2 * _v134 * Math.atan(1 / _v1.projectionMatrix.elements[5]), _v1.zoom = 1);
      }, this.getCamera = function () {
        return _v27;
      }, this.getFoveation = function () {
        if (null !== _v11 || null !== _v12) return _v7;
      }, this.setFoveation = function (_v0) {
        _v7 = _v0, null !== _v11 && (_v11.fixedFoveation = _v0), null !== _v12 && void 0 !== _v12.fixedFoveation && (_v12.fixedFoveation = _v0);
      }, this.hasDepthSensing = function () {
        return null !== _v15.texture;
      }, this.getDepthSensingMesh = function () {
        return _v15.getMesh(_v27);
      }, this.getCameraTexture = function (_v0) {
        return _v16[_v0];
      };
      let _v36 = null;
      const _v37 = new _v342();
      _v37.setAnimationLoop(function (_v0, _v1) {
        if (_v9 = _v1.getViewerPose(_v8 || _v5), _v13 = _v1, null !== _v9) {
          let _v0 = _v9.views;
          null !== _v12 && (_v0.setRenderTargetFramebuffer(_v19, _v12.framebuffer), _v0.setRenderTarget(_v19));
          let _v1 = !1;
          _v0.length !== _v27.cameras.length && (_v27.cameras.length = 0, _v1 = !0);
          for (let _v0 = 0; _v0 < _v0.length; _v0++) {
            let _v0 = _v0[_v0],
              _v1 = null;
            if (null !== _v12) _v1 = _v12.getViewport(_v0);else {
              let _v0 = _v10.getViewSubImage(_v11, _v0);
              _v1 = _v0.viewport, 0 === _v0 && (_v0.setRenderTargetTextures(_v19, _v0.colorTexture, _v0.depthStencilTexture), _v0.setRenderTarget(_v19));
            }
            let _v2 = _v26[_v0];
            void 0 === _v2 && ((_v2 = new _v280()).layers.enable(_v0), _v2.viewport = new _v162(), _v26[_v0] = _v2), _v2.matrix.fromArray(_v0.transform.matrix), _v2.matrix.decompose(_v2.position, _v2.quaternion, _v2.scale), _v2.projectionMatrix.fromArray(_v0.projectionMatrix), _v2.projectionMatrixInverse.copy(_v2.projectionMatrix).invert(), _v2.viewport.set(_v1.x, _v1.y, _v1.width, _v1.height), 0 === _v0 && (_v27.matrix.copy(_v2.matrix), _v27.matrix.decompose(_v27.position, _v27.quaternion, _v27.scale)), !0 === _v1 && _v27.cameras.push(_v2);
          }
          let _v2 = _v3.enabledFeatures;
          if (_v2 && _v2.includes("depth-sensing") && "gpu-optimized" == _v3.depthUsage && _v14) {
            let _v0 = (_v10 = _v2.getBinding()).getDepthInformation(_v0[0]);
            _v0 && _v0.isValid && _v0.texture && _v15.init(_v0, _v3.renderState);
          }
          if (_v2 && _v2.includes("camera-access") && _v14) {
            _v0.state.unbindTexture(), _v10 = _v2.getBinding();
            for (let _v0 = 0; _v0 < _v0.length; _v0++) {
              let _v0 = _v0[_v0].camera;
              if (_v0) {
                let _v0 = _v16[_v0];
                _v0 || (_v0 = new _v299(), _v16[_v0] = _v0);
                let _v1 = _v10.getCameraImage(_v0);
                _v0.sourceTexture = _v1;
              }
            }
          }
        }
        for (let _v0 = 0; _v0 < _v20.length; _v0++) {
          let _v0 = _v21[_v0],
            _v1 = _v20[_v0];
          null !== _v0 && void 0 !== _v1 && _v1.update(_v0, _v1, _v8 || _v5);
        }
        _v36 && _v36(_v0, _v1), _v1.detectedPlanes && _v2.dispatchEvent({
          type: "planesdetected",
          data: _v1
        }), _v13 = null;
      }), this.setAnimationLoop = function (_v0) {
        _v36 = _v0;
      }, this.dispose = function () {};
    }
  }
  let _v479 = new _v202(),
    _v480 = new _v192();
  function _v481(_v0, _v1) {
    function _v2(_v0, _v1) {
      !0 === _v0.matrixAutoUpdate && _v0.updateMatrix(), _v1.value.copy(_v0.matrix);
    }
    function _v3(_v0, _v1) {
      _v0.opacity.value = _v1.opacity, _v1.color && _v0.diffuse.value.copy(_v1.color), _v1.emissive && _v0.emissive.value.copy(_v1.emissive).multiplyScalar(_v1.emissiveIntensity), _v1.map && (_v0.map.value = _v1.map, _v2(_v1.map, _v0.mapTransform)), _v1.alphaMap && (_v0.alphaMap.value = _v1.alphaMap, _v2(_v1.alphaMap, _v0.alphaMapTransform)), _v1.bumpMap && (_v0.bumpMap.value = _v1.bumpMap, _v2(_v1.bumpMap, _v0.bumpMapTransform), _v0.bumpScale.value = _v1.bumpScale, 1 === _v1.side && (_v0.bumpScale.value *= -1)), _v1.normalMap && (_v0.normalMap.value = _v1.normalMap, _v2(_v1.normalMap, _v0.normalMapTransform), _v0.normalScale.value.copy(_v1.normalScale), 1 === _v1.side && _v0.normalScale.value.negate()), _v1.displacementMap && (_v0.displacementMap.value = _v1.displacementMap, _v2(_v1.displacementMap, _v0.displacementMapTransform), _v0.displacementScale.value = _v1.displacementScale, _v0.displacementBias.value = _v1.displacementBias), _v1.emissiveMap && (_v0.emissiveMap.value = _v1.emissiveMap, _v2(_v1.emissiveMap, _v0.emissiveMapTransform)), _v1.specularMap && (_v0.specularMap.value = _v1.specularMap, _v2(_v1.specularMap, _v0.specularMapTransform)), _v1.alphaTest > 0 && (_v0.alphaTest.value = _v1.alphaTest);
      let _v2 = _v1.get(_v1),
        _v3 = _v2.envMap,
        _v4 = _v2.envMapRotation;
      _v3 && (_v0.envMap.value = _v3, _v479.copy(_v4), _v479.x *= -1, _v479.y *= -1, _v479.z *= -1, _v3.isCubeTexture && !1 === _v3.isRenderTargetTexture && (_v479.y *= -1, _v479.z *= -1), _v0.envMapRotation.value.setFromMatrix4(_v480.makeRotationFromEuler(_v479)), _v0.flipEnvMap.value = _v3.isCubeTexture && !1 === _v3.isRenderTargetTexture ? -1 : 1, _v0.reflectivity.value = _v1.reflectivity, _v0.ior.value = _v1.ior, _v0.refractionRatio.value = _v1.refractionRatio), _v1.lightMap && (_v0.lightMap.value = _v1.lightMap, _v0.lightMapIntensity.value = _v1.lightMapIntensity, _v2(_v1.lightMap, _v0.lightMapTransform)), _v1.aoMap && (_v0.aoMap.value = _v1.aoMap, _v0.aoMapIntensity.value = _v1.aoMapIntensity, _v2(_v1.aoMap, _v0.aoMapTransform));
    }
    return {
      refreshFogUniforms: function (_v0, _v1) {
        _v1.color.getRGB(_v0.fogColor.value, _v274(_v0)), _v1.isFog ? (_v0.fogNear.value = _v1.near, _v0.fogFar.value = _v1.far) : _v1.isFogExp2 && (_v0.fogDensity.value = _v1.density);
      },
      refreshMaterialUniforms: function (_v0, _v1, _v2, _v3, _v4) {
        var _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18, _v19, _v20, _v21, _v22, _v23, _v24, _v25, _v26, _v27;
        let _v28;
        _v1.isMeshBasicMaterial || _v1.isMeshLambertMaterial ? _v3(_v0, _v1) : _v1.isMeshToonMaterial ? (_v3(_v0, _v1), _v5 = _v0, (_v6 = _v1).gradientMap && (_v5.gradientMap.value = _v6.gradientMap)) : _v1.isMeshPhongMaterial ? (_v3(_v0, _v1), _v7 = _v0, _v8 = _v1, _v7.specular.value.copy(_v8.specular), _v7.shininess.value = Math.max(_v8.shininess, 1e-4)) : _v1.isMeshStandardMaterial ? (_v3(_v0, _v1), _v9 = _v0, _v10 = _v1, _v9.metalness.value = _v10.metalness, _v10.metalnessMap && (_v9.metalnessMap.value = _v10.metalnessMap, _v2(_v10.metalnessMap, _v9.metalnessMapTransform)), _v9.roughness.value = _v10.roughness, _v10.roughnessMap && (_v9.roughnessMap.value = _v10.roughnessMap, _v2(_v10.roughnessMap, _v9.roughnessMapTransform)), _v10.envMap && (_v9.envMapIntensity.value = _v10.envMapIntensity), _v1.isMeshPhysicalMaterial && (_v11 = _v0, _v12 = _v1, _v13 = _v4, _v11.ior.value = _v12.ior, _v12.sheen > 0 && (_v11.sheenColor.value.copy(_v12.sheenColor).multiplyScalar(_v12.sheen), _v11.sheenRoughness.value = _v12.sheenRoughness, _v12.sheenColorMap && (_v11.sheenColorMap.value = _v12.sheenColorMap, _v2(_v12.sheenColorMap, _v11.sheenColorMapTransform)), _v12.sheenRoughnessMap && (_v11.sheenRoughnessMap.value = _v12.sheenRoughnessMap, _v2(_v12.sheenRoughnessMap, _v11.sheenRoughnessMapTransform))), _v12.clearcoat > 0 && (_v11.clearcoat.value = _v12.clearcoat, _v11.clearcoatRoughness.value = _v12.clearcoatRoughness, _v12.clearcoatMap && (_v11.clearcoatMap.value = _v12.clearcoatMap, _v2(_v12.clearcoatMap, _v11.clearcoatMapTransform)), _v12.clearcoatRoughnessMap && (_v11.clearcoatRoughnessMap.value = _v12.clearcoatRoughnessMap, _v2(_v12.clearcoatRoughnessMap, _v11.clearcoatRoughnessMapTransform)), _v12.clearcoatNormalMap && (_v11.clearcoatNormalMap.value = _v12.clearcoatNormalMap, _v2(_v12.clearcoatNormalMap, _v11.clearcoatNormalMapTransform), _v11.clearcoatNormalScale.value.copy(_v12.clearcoatNormalScale), 1 === _v12.side && _v11.clearcoatNormalScale.value.negate())), _v12.dispersion > 0 && (_v11.dispersion.value = _v12.dispersion), _v12.iridescence > 0 && (_v11.iridescence.value = _v12.iridescence, _v11.iridescenceIOR.value = _v12.iridescenceIOR, _v11.iridescenceThicknessMinimum.value = _v12.iridescenceThicknessRange[0], _v11.iridescenceThicknessMaximum.value = _v12.iridescenceThicknessRange[1], _v12.iridescenceMap && (_v11.iridescenceMap.value = _v12.iridescenceMap, _v2(_v12.iridescenceMap, _v11.iridescenceMapTransform)), _v12.iridescenceThicknessMap && (_v11.iridescenceThicknessMap.value = _v12.iridescenceThicknessMap, _v2(_v12.iridescenceThicknessMap, _v11.iridescenceThicknessMapTransform))), _v12.transmission > 0 && (_v11.transmission.value = _v12.transmission, _v11.transmissionSamplerMap.value = _v13.texture, _v11.transmissionSamplerSize.value.set(_v13.width, _v13.height), _v12.transmissionMap && (_v11.transmissionMap.value = _v12.transmissionMap, _v2(_v12.transmissionMap, _v11.transmissionMapTransform)), _v11.thickness.value = _v12.thickness, _v12.thicknessMap && (_v11.thicknessMap.value = _v12.thicknessMap, _v2(_v12.thicknessMap, _v11.thicknessMapTransform)), _v11.attenuationDistance.value = _v12.attenuationDistance, _v11.attenuationColor.value.copy(_v12.attenuationColor)), _v12.anisotropy > 0 && (_v11.anisotropyVector.value.set(_v12.anisotropy * Math.cos(_v12.anisotropyRotation), _v12.anisotropy * Math.sin(_v12.anisotropyRotation)), _v12.anisotropyMap && (_v11.anisotropyMap.value = _v12.anisotropyMap, _v2(_v12.anisotropyMap, _v11.anisotropyMapTransform))), _v11.specularIntensity.value = _v12.specularIntensity, _v11.specularColor.value.copy(_v12.specularColor), _v12.specularColorMap && (_v11.specularColorMap.value = _v12.specularColorMap, _v2(_v12.specularColorMap, _v11.specularColorMapTransform)), _v12.specularIntensityMap && (_v11.specularIntensityMap.value = _v12.specularIntensityMap, _v2(_v12.specularIntensityMap, _v11.specularIntensityMapTransform)))) : _v1.isMeshMatcapMaterial ? (_v3(_v0, _v1), _v14 = _v0, (_v15 = _v1).matcap && (_v14.matcap.value = _v15.matcap)) : _v1.isMeshDepthMaterial ? _v3(_v0, _v1) : _v1.isMeshDistanceMaterial ? (_v3(_v0, _v1), _v16 = _v0, _v17 = _v1, _v28 = _v1.get(_v17).light, _v16.referencePosition.value.setFromMatrixPosition(_v28.matrixWorld), _v16.nearDistance.value = _v28.shadow.camera.near, _v16.farDistance.value = _v28.shadow.camera.far) : _v1.isMeshNormalMaterial ? _v3(_v0, _v1) : _v1.isLineBasicMaterial ? (_v18 = _v0, _v19 = _v1, _v18.diffuse.value.copy(_v19.color), _v18.opacity.value = _v19.opacity, _v19.map && (_v18.map.value = _v19.map, _v2(_v19.map, _v18.mapTransform)), _v1.isLineDashedMaterial && (_v20 = _v0, _v21 = _v1, _v20.dashSize.value = _v21.dashSize, _v20.totalSize.value = _v21.dashSize + _v21.gapSize, _v20.scale.value = _v21.scale)) : _v1.isPointsMaterial ? (_v22 = _v0, _v23 = _v1, _v24 = _v2, _v25 = _v3, _v22.diffuse.value.copy(_v23.color), _v22.opacity.value = _v23.opacity, _v22.size.value = _v23.size * _v24, _v22.scale.value = .5 * _v25, _v23.map && (_v22.map.value = _v23.map, _v2(_v23.map, _v22.uvTransform)), _v23.alphaMap && (_v22.alphaMap.value = _v23.alphaMap, _v2(_v23.alphaMap, _v22.alphaMapTransform)), _v23.alphaTest > 0 && (_v22.alphaTest.value = _v23.alphaTest)) : _v1.isSpriteMaterial ? (_v26 = _v0, _v27 = _v1, _v26.diffuse.value.copy(_v27.color), _v26.opacity.value = _v27.opacity, _v26.rotation.value = _v27.rotation, _v27.map && (_v26.map.value = _v27.map, _v2(_v27.map, _v26.mapTransform)), _v27.alphaMap && (_v26.alphaMap.value = _v27.alphaMap, _v2(_v27.alphaMap, _v26.alphaMapTransform)), _v27.alphaTest > 0 && (_v26.alphaTest.value = _v27.alphaTest)) : _v1.isShadowMaterial ? (_v0.color.value.copy(_v1.color), _v0.opacity.value = _v1.opacity) : _v1.isShaderMaterial && (_v1.uniformsNeedUpdate = !1);
      }
    };
  }
  function _v482(_v0, _v1, _v2, _v3) {
    let _v4 = {},
      _v5 = {},
      _v6 = [],
      _v7 = _v0.getParameter(_v0.MAX_UNIFORM_BUFFER_BINDINGS);
    function _v8(_v0) {
      let _v1 = {
        boundary: 0,
        storage: 0
      };
      return "number" == typeof _v0 || "boolean" == typeof _v0 ? (_v1.boundary = 4, _v1.storage = 4) : _v0.isVector2 ? (_v1.boundary = 8, _v1.storage = 8) : _v0.isVector3 || _v0.isColor ? (_v1.boundary = 16, _v1.storage = 12) : _v0.isVector4 ? (_v1.boundary = 16, _v1.storage = 16) : _v0.isMatrix3 ? (_v1.boundary = 48, _v1.storage = 48) : _v0.isMatrix4 ? (_v1.boundary = 64, _v1.storage = 64) : _v0.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", _v0), _v1;
    }
    function _v9(_v0) {
      let _v1 = _v0.target;
      _v1.removeEventListener("dispose", _v9);
      let _v2 = _v6.indexOf(_v1.__bindingPointIndex);
      _v6.splice(_v2, 1), _v0.deleteBuffer(_v4[_v1.id]), delete _v4[_v1.id], delete _v5[_v1.id];
    }
    return {
      bind: function (_v0, _v1) {
        let _v2 = _v1.program;
        _v3.uniformBlockBinding(_v0, _v2);
      },
      update: function (_v0, _v1) {
        var _v2;
        let _v3,
          _v4,
          _v5,
          _v6,
          _v7 = _v4[_v0.id];
        void 0 === _v7 && (function (_v0) {
          let _v1 = _v0.uniforms,
            _v2 = 0;
          for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) {
            let _v0 = Array.isArray(_v1[_v0]) ? _v1[_v0] : [_v1[_v0]];
            for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
              let _v0 = _v0[_v0],
                _v1 = Array.isArray(_v0.value) ? _v0.value : [_v0.value];
              for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) {
                let _v0 = _v8(_v1[_v0]),
                  _v1 = _v2 % 16,
                  _v2 = _v1 % _v0.boundary,
                  _v3 = _v1 + _v2;
                _v2 += _v2, 0 !== _v3 && 16 - _v3 < _v0.storage && (_v2 += 16 - _v3), _v0.__data = new Float32Array(_v0.storage / Float32Array.BYTES_PER_ELEMENT), _v0.__offset = _v2, _v2 += _v0.storage;
              }
            }
          }
          let _v3 = _v2 % 16;
          _v3 > 0 && (_v2 += 16 - _v3), _v0.__size = _v2, _v0.__cache = {};
        }(_v0), (_v2 = _v0).__bindingPointIndex = _v3 = function () {
          for (let _v0 = 0; _v0 < _v7; _v0++) if (-1 === _v6.indexOf(_v0)) return _v6.push(_v0), _v0;
          return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        }(), _v4 = _v0.createBuffer(), _v5 = _v2.__size, _v6 = _v2.usage, _v0.bindBuffer(_v0.UNIFORM_BUFFER, _v4), _v0.bufferData(_v0.UNIFORM_BUFFER, _v5, _v6), _v0.bindBuffer(_v0.UNIFORM_BUFFER, null), _v0.bindBufferBase(_v0.UNIFORM_BUFFER, _v3, _v4), _v7 = _v4, _v4[_v0.id] = _v7, _v0.addEventListener("dispose", _v9));
        let _v8 = _v1.program;
        _v3.updateUBOMapping(_v0, _v8);
        let _v9 = _v1.render.frame;
        _v5[_v0.id] !== _v9 && (function (_v0) {
          let _v1 = _v4[_v0.id],
            _v2 = _v0.uniforms,
            _v3 = _v0.__cache;
          _v0.bindBuffer(_v0.UNIFORM_BUFFER, _v1);
          for (let _v0 = 0, _v1 = _v2.length; _v0 < _v1; _v0++) {
            let _v0 = Array.isArray(_v2[_v0]) ? _v2[_v0] : [_v2[_v0]];
            for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
              let _v0 = _v0[_v0];
              if (!0 === function (_v0, _v1, _v2, _v3) {
                let _v4 = _v0.value,
                  _v5 = _v1 + "_" + _v2;
                if (void 0 === _v3[_v5]) return "number" == typeof _v4 || "boolean" == typeof _v4 ? _v3[_v5] = _v4 : _v3[_v5] = _v4.clone(), !0;
                {
                  let _v0 = _v3[_v5];
                  if ("number" == typeof _v4 || "boolean" == typeof _v4) {
                    if (_v0 !== _v4) return _v3[_v5] = _v4, !0;
                  } else if (!1 === _v0.equals(_v4)) return _v0.copy(_v4), !0;
                }
                return !1;
              }(_v0, _v0, _v0, _v3)) {
                let _v0 = _v0.__offset,
                  _v1 = Array.isArray(_v0.value) ? _v0.value : [_v0.value],
                  _v2 = 0;
                for (let _v0 = 0; _v0 < _v1.length; _v0++) {
                  let _v0 = _v1[_v0],
                    _v1 = _v8(_v0);
                  "number" == typeof _v0 || "boolean" == typeof _v0 ? (_v0.__data[0] = _v0, _v0.bufferSubData(_v0.UNIFORM_BUFFER, _v0 + _v2, _v0.__data)) : _v0.isMatrix3 ? (_v0.__data[0] = _v0.elements[0], _v0.__data[1] = _v0.elements[1], _v0.__data[2] = _v0.elements[2], _v0.__data[3] = 0, _v0.__data[4] = _v0.elements[3], _v0.__data[5] = _v0.elements[4], _v0.__data[6] = _v0.elements[5], _v0.__data[7] = 0, _v0.__data[8] = _v0.elements[6], _v0.__data[9] = _v0.elements[7], _v0.__data[10] = _v0.elements[8], _v0.__data[11] = 0) : (_v0.toArray(_v0.__data, _v2), _v2 += _v1.storage / Float32Array.BYTES_PER_ELEMENT);
                }
                _v0.bufferSubData(_v0.UNIFORM_BUFFER, _v0, _v0.__data);
              }
            }
          }
          _v0.bindBuffer(_v0.UNIFORM_BUFFER, null);
        }(_v0), _v5[_v0.id] = _v9);
      },
      dispose: function () {
        for (let _v0 in _v4) _v0.deleteBuffer(_v4[_v0]);
        _v6 = [], _v4 = {}, _v5 = {};
      }
    };
  }
  class _v483 {
    constructor(_v0 = {}) {
      let _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18, _v19, _v20, _v21, _v22, _v23, _v24, _v25;
      const {
        canvas: _v26 = function () {
          let _v0 = _v147("canvas");
          return _v0.style.display = "block", _v0;
        }(),
        context: _v27 = null,
        depth: _v28 = !0,
        stencil: _v29 = !1,
        alpha: _v30 = !1,
        antialias: _v31 = !1,
        premultipliedAlpha: _v32 = !0,
        preserveDrawingBuffer: _v33 = !1,
        powerPreference: _v34 = "default",
        failIfMajorPerformanceCaveat: _v35 = !1,
        reversedDepthBuffer: _v36 = !1
      } = _v0;
      if (this.isWebGLRenderer = !0, null !== _v27) {
        if ("u" > typeof WebGLRenderingContext && _v27 instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        _v1 = _v27.getContextAttributes().alpha;
      } else _v1 = _v30;
      const _v37 = new Uint32Array(4),
        _v38 = new Int32Array(4);
      let _v39 = null,
        _v40 = null;
      const _v41 = [],
        _v42 = [];
      this.domElement = _v26, this.debug = {
        checkShaderErrors: !0,
        onShaderError: null
      }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
      const _v43 = this;
      let _v44 = !1;
      this._outputColorSpace = _v126;
      let _v45 = 0,
        _v46 = 0,
        _v47 = null,
        _v48 = -1,
        _v49 = null;
      const _v50 = new _v162(),
        _v51 = new _v162();
      let _v52 = null;
      const _v53 = new _v238(0);
      let _v54 = 0,
        _v55 = _v26.width,
        _v56 = _v26.height,
        _v57 = 1,
        _v58 = null,
        _v59 = null;
      const _v60 = new _v162(0, 0, _v55, _v56),
        _v61 = new _v162(0, 0, _v55, _v56);
      let _v62 = !1;
      const _v63 = new _v295();
      let _v64 = !1,
        _v65 = !1;
      const _v66 = new _v192(),
        _v67 = new _v141(),
        _v68 = new _v162(),
        _v69 = {
          background: null,
          fog: null,
          environment: null,
          overrideMaterial: null,
          isScene: !0
        };
      let _v70 = !1;
      function _v71() {
        return null === _v47 ? _v57 : 1;
      }
      let _v72 = _v27;
      function _v73(_v0, _v1) {
        return _v26.getContext(_v0, _v1);
      }
      try {
        if ("setAttribute" in _v26 && _v26.setAttribute("data-engine", "three.js r180"), _v26.addEventListener("webglcontextlost", _v76, !1), _v26.addEventListener("webglcontextrestored", _v77, !1), _v26.addEventListener("webglcontextcreationerror", _v78, !1), null === _v72) {
          const _v0 = "webgl2";
          if (_v72 = _v73(_v0, {
            alpha: !0,
            depth: _v28,
            stencil: _v29,
            antialias: _v31,
            premultipliedAlpha: _v32,
            preserveDrawingBuffer: _v33,
            powerPreference: _v34,
            failIfMajorPerformanceCaveat: _v35
          }), null === _v72) if (_v73(_v0)) throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.");
        }
      } catch (_v0) {
        throw console.error("THREE.WebGLRenderer: " + _v0.message), _v0;
      }
      function _v74() {
        (_v2 = new _v374(_v72)).init(), _v23 = new _v474(_v72, _v2), _v3 = new _v353(_v72, _v2, _v0, _v23), _v4 = new _v472(_v72, _v2), _v3.reversedDepthBuffer && _v36 && _v4.buffers.depth.setReversed(!0), _v5 = new _v377(_v72), _v6 = new _v459(), _v7 = new _v473(_v72, _v2, _v4, _v6, _v3, _v23, _v5), _v8 = new _v355(_v43), _v9 = new _v373(_v43), _v10 = new _v343(_v72), _v24 = new _v351(_v72, _v10), _v11 = new _v375(_v72, _v10, _v5, _v24), _v12 = new _v379(_v72, _v11, _v10, _v5), _v20 = new _v378(_v72, _v3, _v7), _v17 = new _v354(_v6), _v13 = new _v458(_v43, _v8, _v9, _v2, _v3, _v24, _v17), _v14 = new _v481(_v43, _v6), _v15 = new _v463(), _v16 = new _v469(_v2), _v19 = new _v350(_v43, _v8, _v9, _v4, _v12, _v1, _v32), _v18 = new _v470(_v43, _v12, _v3), _v25 = new _v482(_v72, _v5, _v3, _v4), _v21 = new _v352(_v72, _v2, _v5), _v22 = new _v376(_v72, _v2, _v5), _v5.programs = _v13.programs, _v43.capabilities = _v3, _v43.extensions = _v2, _v43.properties = _v6, _v43.renderLists = _v15, _v43.shadowMap = _v18, _v43.state = _v4, _v43.info = _v5;
      }
      _v74();
      const _v75 = new _v478(_v43, _v72);
      function _v76(_v0) {
        _v0.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), _v44 = !0;
      }
      function _v77() {
        console.log("THREE.WebGLRenderer: Context Restored."), _v44 = !1;
        let _v0 = _v5.autoReset,
          _v1 = _v18.enabled,
          _v2 = _v18.autoUpdate,
          _v3 = _v18.needsUpdate,
          _v4 = _v18.type;
        _v74(), _v5.autoReset = _v0, _v18.enabled = _v1, _v18.autoUpdate = _v2, _v18.needsUpdate = _v3, _v18.type = _v4;
      }
      function _v78(_v0) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", _v0.statusMessage);
      }
      function _v79(_v0) {
        var _v1, _v2;
        let _v3,
          _v4 = _v0.target;
        _v4.removeEventListener("dispose", _v79), _v2 = _v1 = _v4, void 0 !== (_v3 = _v6.get(_v2).programs) && (_v3.forEach(function (_v0) {
          _v13.releaseProgram(_v0);
        }), _v2.isShaderMaterial && _v13.releaseShaderCache(_v2)), _v6.remove(_v1);
      }
      function _v80(_v0, _v1, _v2) {
        !0 === _v0.transparent && 2 === _v0.side && !1 === _v0.forceSinglePass ? (_v0.side = 1, _v0.needsUpdate = !0, _v90(_v0, _v1, _v2), _v0.side = 0, _v0.needsUpdate = !0, _v90(_v0, _v1, _v2), _v0.side = 2) : _v90(_v0, _v1, _v2);
      }
      this.xr = _v75, this.getContext = function () {
        return _v72;
      }, this.getContextAttributes = function () {
        return _v72.getContextAttributes();
      }, this.forceContextLoss = function () {
        let _v0 = _v2.get("WEBGL_lose_context");
        _v0 && _v0.loseContext();
      }, this.forceContextRestore = function () {
        let _v0 = _v2.get("WEBGL_lose_context");
        _v0 && _v0.restoreContext();
      }, this.getPixelRatio = function () {
        return _v57;
      }, this.setPixelRatio = function (_v0) {
        void 0 !== _v0 && (_v57 = _v0, this.setSize(_v55, _v56, !1));
      }, this.getSize = function (_v0) {
        return _v0.set(_v55, _v56);
      }, this.setSize = function (_v0, _v1, _v2 = !0) {
        _v75.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (_v55 = _v0, _v56 = _v1, _v26.width = Math.floor(_v0 * _v57), _v26.height = Math.floor(_v1 * _v57), !0 === _v2 && (_v26.style.width = _v0 + "px", _v26.style.height = _v1 + "px"), this.setViewport(0, 0, _v0, _v1));
      }, this.getDrawingBufferSize = function (_v0) {
        return _v0.set(_v55 * _v57, _v56 * _v57).floor();
      }, this.setDrawingBufferSize = function (_v0, _v1, _v2) {
        _v55 = _v0, _v56 = _v1, _v57 = _v2, _v26.width = Math.floor(_v0 * _v2), _v26.height = Math.floor(_v1 * _v2), this.setViewport(0, 0, _v0, _v1);
      }, this.getCurrentViewport = function (_v0) {
        return _v0.copy(_v50);
      }, this.getViewport = function (_v0) {
        return _v0.copy(_v60);
      }, this.setViewport = function (_v0, _v1, _v2, _v3) {
        _v0.isVector4 ? _v60.set(_v0.x, _v0.y, _v0.z, _v0.w) : _v60.set(_v0, _v1, _v2, _v3), _v4.viewport(_v50.copy(_v60).multiplyScalar(_v57).round());
      }, this.getScissor = function (_v0) {
        return _v0.copy(_v61);
      }, this.setScissor = function (_v0, _v1, _v2, _v3) {
        _v0.isVector4 ? _v61.set(_v0.x, _v0.y, _v0.z, _v0.w) : _v61.set(_v0, _v1, _v2, _v3), _v4.scissor(_v51.copy(_v61).multiplyScalar(_v57).round());
      }, this.getScissorTest = function () {
        return _v62;
      }, this.setScissorTest = function (_v0) {
        _v4.setScissorTest(_v62 = _v0);
      }, this.setOpaqueSort = function (_v0) {
        _v58 = _v0;
      }, this.setTransparentSort = function (_v0) {
        _v59 = _v0;
      }, this.getClearColor = function (_v0) {
        return _v0.copy(_v19.getClearColor());
      }, this.setClearColor = function () {
        _v19.setClearColor(...arguments);
      }, this.getClearAlpha = function () {
        return _v19.getClearAlpha();
      }, this.setClearAlpha = function () {
        _v19.setClearAlpha(...arguments);
      }, this.clear = function (_v0 = !0, _v1 = !0, _v2 = !0) {
        let _v3 = 0;
        if (_v0) {
          let _v0 = !1;
          if (null !== _v47) {
            let _v0 = _v47.texture.format;
            _v0 = 0 === _v0 || 0 === _v0 || 0 === _v0;
          }
          if (_v0) {
            let _v0 = _v47.texture.type,
              _v1 = 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0 || 0 === _v0,
              _v2 = _v19.getClearColor(),
              _v3 = _v19.getClearAlpha(),
              _v4 = _v2.r,
              _v5 = _v2.g,
              _v6 = _v2.b;
            _v1 ? (_v37[0] = _v4, _v37[1] = _v5, _v37[2] = _v6, _v37[3] = _v3, _v72.clearBufferuiv(_v72.COLOR, 0, _v37)) : (_v38[0] = _v4, _v38[1] = _v5, _v38[2] = _v6, _v38[3] = _v3, _v72.clearBufferiv(_v72.COLOR, 0, _v38));
          } else _v3 |= _v72.COLOR_BUFFER_BIT;
        }
        _v1 && (_v3 |= _v72.DEPTH_BUFFER_BIT), _v2 && (_v3 |= _v72.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(0)), _v72.clear(_v3);
      }, this.clearColor = function () {
        this.clear(!0, !1, !1);
      }, this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }, this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }, this.dispose = function () {
        _v26.removeEventListener("webglcontextlost", _v76, !1), _v26.removeEventListener("webglcontextrestored", _v77, !1), _v26.removeEventListener("webglcontextcreationerror", _v78, !1), _v19.dispose(), _v15.dispose(), _v16.dispose(), _v6.dispose(), _v8.dispose(), _v9.dispose(), _v12.dispose(), _v24.dispose(), _v25.dispose(), _v13.dispose(), _v75.dispose(), _v75.removeEventListener("sessionstart", _v82), _v75.removeEventListener("sessionend", _v83), _v84.stop();
      }, this.renderBufferDirect = function (_v0, _v1, _v2, _v3, _v4, _v5) {
        let _v6;
        null === _v1 && (_v1 = _v69);
        let _v7 = _v4.isMesh && 0 > _v4.matrixWorld.determinant(),
          _v8 = function (_v0, _v1, _v2, _v3, _v4) {
            var _v5, _v6;
            !0 !== _v1.isScene && (_v1 = _v69), _v7.resetTextureUnits();
            let _v7 = _v1.fog,
              _v8 = _v3.isMeshStandardMaterial ? _v1.environment : null,
              _v9 = null === _v47 ? _v43.outputColorSpace : !0 === _v47.isXRRenderTarget ? _v47.texture.colorSpace : _v127,
              _v10 = (_v3.isMeshStandardMaterial ? _v9 : _v8).get(_v3.envMap || _v8),
              _v11 = !0 === _v3.vertexColors && !!_v2.attributes.color && 4 === _v2.attributes.color.itemSize,
              _v12 = !!_v2.attributes.tangent && (!!_v3.normalMap || _v3.anisotropy > 0),
              _v13 = !!_v2.morphAttributes.position,
              _v14 = !!_v2.morphAttributes.normal,
              _v15 = !!_v2.morphAttributes.color,
              _v16 = 0;
            _v3.toneMapped && (null === _v47 || !0 === _v47.isXRRenderTarget) && (_v16 = _v43.toneMapping);
            let _v17 = _v2.morphAttributes.position || _v2.morphAttributes.normal || _v2.morphAttributes.color,
              _v18 = void 0 !== _v17 ? _v17.length : 0,
              _v19 = _v6.get(_v3),
              _v20 = _v40.state.lights;
            if (!0 === _v64 && (!0 === _v65 || _v0 !== _v49)) {
              let _v0 = _v0 === _v49 && _v3.id === _v48;
              _v17.setState(_v3, _v0, _v0);
            }
            let _v21 = !1;
            _v3.version === _v19.__version ? _v19.needsLights && _v19.lightsStateVersion !== _v20.state.version || _v19.outputColorSpace !== _v9 || _v4.isBatchedMesh && !1 === _v19.batching ? _v21 = !0 : _v4.isBatchedMesh || !0 !== _v19.batching ? _v4.isBatchedMesh && !0 === _v19.batchingColor && null === _v4.colorTexture || _v4.isBatchedMesh && !1 === _v19.batchingColor && null !== _v4.colorTexture || _v4.isInstancedMesh && !1 === _v19.instancing ? _v21 = !0 : _v4.isInstancedMesh || !0 !== _v19.instancing ? _v4.isSkinnedMesh && !1 === _v19.skinning ? _v21 = !0 : _v4.isSkinnedMesh || !0 !== _v19.skinning ? _v4.isInstancedMesh && !0 === _v19.instancingColor && null === _v4.instanceColor || _v4.isInstancedMesh && !1 === _v19.instancingColor && null !== _v4.instanceColor || _v4.isInstancedMesh && !0 === _v19.instancingMorph && null === _v4.morphTexture || _v4.isInstancedMesh && !1 === _v19.instancingMorph && null !== _v4.morphTexture || _v19.envMap !== _v10 || !0 === _v3.fog && _v19.fog !== _v7 || void 0 !== _v19.numClippingPlanes && (_v19.numClippingPlanes !== _v17.numPlanes || _v19.numIntersection !== _v17.numIntersection) || _v19.vertexAlphas !== _v11 || _v19.vertexTangents !== _v12 || _v19.morphTargets !== _v13 || _v19.morphNormals !== _v14 || _v19.morphColors !== _v15 || _v19.toneMapping !== _v16 ? _v21 = !0 : _v19.morphTargetsCount !== _v18 && (_v21 = !0) : _v21 = !0 : _v21 = !0 : _v21 = !0 : (_v21 = !0, _v19.__version = _v3.version);
            let _v22 = _v19.currentProgram;
            !0 === _v21 && (_v22 = _v90(_v3, _v1, _v4));
            let _v23 = !1,
              _v24 = !1,
              _v25 = !1,
              _v26 = _v22.getUniforms(),
              _v27 = _v19.uniforms;
            if (_v4.useProgram(_v22.program) && (_v23 = !0, _v24 = !0, _v25 = !0), _v3.id !== _v48 && (_v48 = _v3.id, _v24 = !0), _v23 || _v49 !== _v0) {
              _v4.buffers.depth.getReversed() && !0 !== _v0.reversedDepth && (_v0._reversedDepth = !0, _v0.updateProjectionMatrix()), _v26.setValue(_v72, "projectionMatrix", _v0.projectionMatrix), _v26.setValue(_v72, "viewMatrix", _v0.matrixWorldInverse);
              let _v0 = _v26.map.cameraPosition;
              void 0 !== _v0 && _v0.setValue(_v72, _v67.setFromMatrixPosition(_v0.matrixWorld)), _v3.logarithmicDepthBuffer && _v26.setValue(_v72, "logDepthBufFC", 2 / (Math.log(_v0.far + 1) / Math.LN2)), (_v3.isMeshPhongMaterial || _v3.isMeshToonMaterial || _v3.isMeshLambertMaterial || _v3.isMeshBasicMaterial || _v3.isMeshStandardMaterial || _v3.isShaderMaterial) && _v26.setValue(_v72, "isOrthographic", !0 === _v0.isOrthographicCamera), _v49 !== _v0 && (_v49 = _v0, _v24 = !0, _v25 = !0);
            }
            if (_v4.isSkinnedMesh) {
              _v26.setOptional(_v72, _v4, "bindMatrix"), _v26.setOptional(_v72, _v4, "bindMatrixInverse");
              let _v0 = _v4.skeleton;
              _v0 && (null === _v0.boneTexture && _v0.computeBoneTexture(), _v26.setValue(_v72, "boneTexture", _v0.boneTexture, _v7));
            }
            _v4.isBatchedMesh && (_v26.setOptional(_v72, _v4, "batchingTexture"), _v26.setValue(_v72, "batchingTexture", _v4._matricesTexture, _v7), _v26.setOptional(_v72, _v4, "batchingIdTexture"), _v26.setValue(_v72, "batchingIdTexture", _v4._indirectTexture, _v7), _v26.setOptional(_v72, _v4, "batchingColorTexture"), null !== _v4._colorsTexture && _v26.setValue(_v72, "batchingColorTexture", _v4._colorsTexture, _v7));
            let _v28 = _v2.morphAttributes;
            if ((void 0 !== _v28.position || void 0 !== _v28.normal || void 0 !== _v28.color) && _v20.update(_v4, _v2, _v22), (_v24 || _v19.receiveShadow !== _v4.receiveShadow) && (_v19.receiveShadow = _v4.receiveShadow, _v26.setValue(_v72, "receiveShadow", _v4.receiveShadow)), _v3.isMeshGouraudMaterial && null !== _v3.envMap && (_v27.envMap.value = _v10, _v27.flipEnvMap.value = _v10.isCubeTexture && !1 === _v10.isRenderTargetTexture ? -1 : 1), _v3.isMeshStandardMaterial && null === _v3.envMap && null !== _v1.environment && (_v27.envMapIntensity.value = _v1.environmentIntensity), _v24 && (_v26.setValue(_v72, "toneMappingExposure", _v43.toneMappingExposure), _v19.needsLights && (_v5 = _v27, _v6 = _v25, _v5.ambientLightColor.needsUpdate = _v6, _v5.lightProbe.needsUpdate = _v6, _v5.directionalLights.needsUpdate = _v6, _v5.directionalLightShadows.needsUpdate = _v6, _v5.pointLights.needsUpdate = _v6, _v5.pointLightShadows.needsUpdate = _v6, _v5.spotLights.needsUpdate = _v6, _v5.spotLightShadows.needsUpdate = _v6, _v5.rectAreaLights.needsUpdate = _v6, _v5.hemisphereLights.needsUpdate = _v6), _v7 && !0 === _v3.fog && _v14.refreshFogUniforms(_v27, _v7), _v14.refreshMaterialUniforms(_v27, _v3, _v57, _v56, _v40.state.transmissionRenderTarget[_v0.id]), _v437.upload(_v72, _v91(_v19), _v27, _v7)), _v3.isShaderMaterial && !0 === _v3.uniformsNeedUpdate && (_v437.upload(_v72, _v91(_v19), _v27, _v7), _v3.uniformsNeedUpdate = !1), _v3.isSpriteMaterial && _v26.setValue(_v72, "center", _v4.center), _v26.setValue(_v72, "modelViewMatrix", _v4.modelViewMatrix), _v26.setValue(_v72, "normalMatrix", _v4.normalMatrix), _v26.setValue(_v72, "modelMatrix", _v4.matrixWorld), _v3.isShaderMaterial || _v3.isRawShaderMaterial) {
              let _v0 = _v3.uniformsGroups;
              for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
                let _v0 = _v0[_v0];
                _v25.update(_v0, _v22), _v25.bind(_v0, _v22);
              }
            }
            return _v22;
          }(_v0, _v1, _v2, _v3, _v4);
        _v4.setMaterial(_v3, _v7);
        let _v9 = _v2.index,
          _v10 = 1;
        if (!0 === _v3.wireframe) {
          if (void 0 === (_v9 = _v11.getWireframeAttribute(_v2))) return;
          _v10 = 2;
        }
        let _v11 = _v2.drawRange,
          _v12 = _v2.attributes.position,
          _v13 = _v11.start * _v10,
          _v14 = (_v11.start + _v11.count) * _v10;
        null !== _v5 && (_v13 = Math.max(_v13, _v5.start * _v10), _v14 = Math.min(_v14, (_v5.start + _v5.count) * _v10)), null !== _v9 ? (_v13 = Math.max(_v13, 0), _v14 = Math.min(_v14, _v9.count)) : null != _v12 && (_v13 = Math.max(_v13, 0), _v14 = Math.min(_v14, _v12.count));
        let _v15 = _v14 - _v13;
        if (_v15 < 0 || _v15 === 1 / 0) return;
        _v24.setup(_v4, _v3, _v8, _v2, _v9);
        let _v16 = _v21;
        if (null !== _v9 && (_v6 = _v10.get(_v9), (_v16 = _v22).setIndex(_v6)), _v4.isMesh) !0 === _v3.wireframe ? (_v4.setLineWidth(_v3.wireframeLinewidth * _v71()), _v16.setMode(_v72.LINES)) : _v16.setMode(_v72.TRIANGLES);else if (_v4.isLine) {
          let _v0 = _v3.linewidth;
          void 0 === _v0 && (_v0 = 1), _v4.setLineWidth(_v0 * _v71()), _v4.isLineSegments ? _v16.setMode(_v72.LINES) : _v4.isLineLoop ? _v16.setMode(_v72.LINE_LOOP) : _v16.setMode(_v72.LINE_STRIP);
        } else _v4.isPoints ? _v16.setMode(_v72.POINTS) : _v4.isSprite && _v16.setMode(_v72.TRIANGLES);
        if (_v4.isBatchedMesh) {
          if (null !== _v4._multiDrawInstances) _v149("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), _v16.renderMultiDrawInstances(_v4._multiDrawStarts, _v4._multiDrawCounts, _v4._multiDrawCount, _v4._multiDrawInstances);else if (_v2.get("WEBGL_multi_draw")) _v16.renderMultiDraw(_v4._multiDrawStarts, _v4._multiDrawCounts, _v4._multiDrawCount);else {
            let _v0 = _v4._multiDrawStarts,
              _v1 = _v4._multiDrawCounts,
              _v2 = _v4._multiDrawCount,
              _v3 = _v9 ? _v10.get(_v9).bytesPerElement : 1,
              _v4 = _v6.get(_v3).currentProgram.getUniforms();
            for (let _v0 = 0; _v0 < _v2; _v0++) _v4.setValue(_v72, "_gl_DrawID", _v0), _v16.render(_v0[_v0] / _v3, _v1[_v0]);
          }
        } else if (_v4.isInstancedMesh) _v16.renderInstances(_v13, _v15, _v4.count);else if (_v2.isInstancedBufferGeometry) {
          let _v0 = void 0 !== _v2._maxInstanceCount ? _v2._maxInstanceCount : 1 / 0,
            _v1 = Math.min(_v2.instanceCount, _v0);
          _v16.renderInstances(_v13, _v15, _v1);
        } else _v16.render(_v13, _v15);
      }, this.compile = function (_v0, _v1, _v2 = null) {
        null === _v2 && (_v2 = _v0), (_v40 = _v16.get(_v2)).init(_v1), _v42.push(_v40), _v2.traverseVisible(function (_v0) {
          _v0.isLight && _v0.layers.test(_v1.layers) && (_v40.pushLight(_v0), _v0.castShadow && _v40.pushShadow(_v0));
        }), _v0 !== _v2 && _v0.traverseVisible(function (_v0) {
          _v0.isLight && _v0.layers.test(_v1.layers) && (_v40.pushLight(_v0), _v0.castShadow && _v40.pushShadow(_v0));
        }), _v40.setupLights();
        let _v3 = new Set();
        return _v0.traverse(function (_v0) {
          if (!(_v0.isMesh || _v0.isPoints || _v0.isLine || _v0.isSprite)) return;
          let _v1 = _v0.material;
          if (_v1) if (Array.isArray(_v1)) for (let _v0 = 0; _v0 < _v1.length; _v0++) {
            let _v0 = _v1[_v0];
            _v80(_v0, _v2, _v0), _v3.add(_v0);
          } else _v80(_v1, _v2, _v0), _v3.add(_v1);
        }), _v40 = _v42.pop(), _v3;
      }, this.compileAsync = function (_v0, _v1, _v2 = null) {
        let _v3 = this.compile(_v0, _v1, _v2);
        return new Promise(_v0 => {
          function _v1() {
            (_v3.forEach(function (_v0) {
              _v6.get(_v0).currentProgram.isReady() && _v3.delete(_v0);
            }), 0 === _v3.size) ? _v0(_v0) : setTimeout(_v1, 10);
          }
          null !== _v2.get("KHR_parallel_shader_compile") ? _v1() : setTimeout(_v1, 10);
        });
      };
      let _v81 = null;
      function _v82() {
        _v84.stop();
      }
      function _v83() {
        _v84.start();
      }
      const _v84 = new _v342();
      function _v85(_v0, _v1, _v2, _v3) {
        if (!1 === _v0.visible) return;
        if (_v0.layers.test(_v1.layers)) {
          if (_v0.isGroup) _v2 = _v0.renderOrder;else if (_v0.isLOD) !0 === _v0.autoUpdate && _v0.update(_v1);else if (_v0.isLight) _v40.pushLight(_v0), _v0.castShadow && _v40.pushShadow(_v0);else if (_v0.isSprite) {
            if (!_v0.frustumCulled || _v63.intersectsSprite(_v0)) {
              _v3 && _v68.setFromMatrixPosition(_v0.matrixWorld).applyMatrix4(_v66);
              let _v0 = _v12.update(_v0),
                _v1 = _v0.material;
              _v1.visible && _v39.push(_v0, _v0, _v1, _v2, _v68.z, null);
            }
          } else if ((_v0.isMesh || _v0.isLine || _v0.isPoints) && (!_v0.frustumCulled || _v63.intersectsObject(_v0))) {
            let _v0 = _v12.update(_v0),
              _v1 = _v0.material;
            if (_v3 && (void 0 !== _v0.boundingSphere ? (null === _v0.boundingSphere && _v0.computeBoundingSphere(), _v68.copy(_v0.boundingSphere.center)) : (null === _v0.boundingSphere && _v0.computeBoundingSphere(), _v68.copy(_v0.boundingSphere.center)), _v68.applyMatrix4(_v0.matrixWorld).applyMatrix4(_v66)), Array.isArray(_v1)) {
              let _v0 = _v0.groups;
              for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
                let _v0 = _v0[_v0],
                  _v1 = _v1[_v0.materialIndex];
                _v1 && _v1.visible && _v39.push(_v0, _v0, _v1, _v2, _v68.z, _v0);
              }
            } else _v1.visible && _v39.push(_v0, _v0, _v1, _v2, _v68.z, null);
          }
        }
        let _v4 = _v0.children;
        for (let _v0 = 0, _v1 = _v4.length; _v0 < _v1; _v0++) _v85(_v4[_v0], _v1, _v2, _v3);
      }
      function _v86(_v0, _v1, _v2, _v3) {
        let _v4 = _v0.opaque,
          _v5 = _v0.transmissive,
          _v6 = _v0.transparent;
        _v40.setupLightsView(_v2), !0 === _v64 && _v17.setGlobalState(_v43.clippingPlanes, _v2), _v3 && _v4.viewport(_v50.copy(_v3)), _v4.length > 0 && _v88(_v4, _v1, _v2), _v5.length > 0 && _v88(_v5, _v1, _v2), _v6.length > 0 && _v88(_v6, _v1, _v2), _v4.buffers.depth.setTest(!0), _v4.buffers.depth.setMask(!0), _v4.buffers.color.setMask(!0), _v4.setPolygonOffset(!1);
      }
      function _v87(_v0, _v1, _v2, _v3) {
        if (null !== (!0 === _v2.isScene ? _v2.overrideMaterial : null)) return;
        void 0 === _v40.state.transmissionRenderTarget[_v3.id] && (_v40.state.transmissionRenderTarget[_v3.id] = new _v164(1, 1, {
          generateMipmaps: !0,
          type: _v2.has("EXT_color_buffer_half_float") || _v2.has("EXT_color_buffer_float") ? 0 : 0,
          minFilter: 0,
          samples: 4,
          stencilBuffer: _v29,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: _v152.workingColorSpace
        }));
        let _v4 = _v40.state.transmissionRenderTarget[_v3.id],
          _v5 = _v3.viewport || _v50;
        _v4.setSize(_v5.z * _v43.transmissionResolutionScale, _v5.w * _v43.transmissionResolutionScale);
        let _v6 = _v43.getRenderTarget(),
          _v7 = _v43.getActiveCubeFace(),
          _v8 = _v43.getActiveMipmapLevel();
        _v43.setRenderTarget(_v4), _v43.getClearColor(_v53), (_v54 = _v43.getClearAlpha()) < 1 && _v43.setClearColor(0, .5), _v43.clear(), _v70 && _v19.render(_v2);
        let _v9 = _v43.toneMapping;
        _v43.toneMapping = 0;
        let _v10 = _v3.viewport;
        if (void 0 !== _v3.viewport && (_v3.viewport = void 0), _v40.setupLightsView(_v3), !0 === _v64 && _v17.setGlobalState(_v43.clippingPlanes, _v3), _v88(_v0, _v2, _v3), _v7.updateMultisampleRenderTarget(_v4), _v7.updateRenderTargetMipmap(_v4), !1 === _v2.has("WEBGL_multisampled_render_to_texture")) {
          let _v0 = !1;
          for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) {
            let _v0 = _v1[_v0],
              _v1 = _v0.object,
              _v2 = _v0.geometry,
              _v3 = _v0.material,
              _v4 = _v0.group;
            if (2 === _v3.side && _v1.layers.test(_v3.layers)) {
              let _v0 = _v3.side;
              _v3.side = 1, _v3.needsUpdate = !0, _v89(_v1, _v2, _v3, _v2, _v3, _v4), _v3.side = _v0, _v3.needsUpdate = !0, _v0 = !0;
            }
          }
          !0 === _v0 && (_v7.updateMultisampleRenderTarget(_v4), _v7.updateRenderTargetMipmap(_v4));
        }
        _v43.setRenderTarget(_v6, _v7, _v8), _v43.setClearColor(_v53, _v54), void 0 !== _v10 && (_v3.viewport = _v10), _v43.toneMapping = _v9;
      }
      function _v88(_v0, _v1, _v2) {
        let _v3 = !0 === _v1.isScene ? _v1.overrideMaterial : null;
        for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
          let _v0 = _v0[_v0],
            _v1 = _v0.object,
            _v2 = _v0.geometry,
            _v3 = _v0.group,
            _v4 = _v0.material;
          !0 === _v4.allowOverride && null !== _v3 && (_v4 = _v3), _v1.layers.test(_v2.layers) && _v89(_v1, _v1, _v2, _v2, _v4, _v3);
        }
      }
      function _v89(_v0, _v1, _v2, _v3, _v4, _v5) {
        _v0.onBeforeRender(_v43, _v1, _v2, _v3, _v4, _v5), _v0.modelViewMatrix.multiplyMatrices(_v2.matrixWorldInverse, _v0.matrixWorld), _v0.normalMatrix.getNormalMatrix(_v0.modelViewMatrix), _v4.onBeforeRender(_v43, _v1, _v2, _v3, _v0, _v5), !0 === _v4.transparent && 2 === _v4.side && !1 === _v4.forceSinglePass ? (_v4.side = 1, _v4.needsUpdate = !0, _v43.renderBufferDirect(_v2, _v1, _v3, _v4, _v0, _v5), _v4.side = 0, _v4.needsUpdate = !0, _v43.renderBufferDirect(_v2, _v1, _v3, _v4, _v0, _v5), _v4.side = 2) : _v43.renderBufferDirect(_v2, _v1, _v3, _v4, _v0, _v5), _v0.onAfterRender(_v43, _v1, _v2, _v3, _v4, _v5);
      }
      function _v90(_v0, _v1, _v2) {
        var _v3;
        !0 !== _v1.isScene && (_v1 = _v69);
        let _v4 = _v6.get(_v0),
          _v5 = _v40.state.lights,
          _v6 = _v40.state.shadowsArray,
          _v7 = _v5.state.version,
          _v8 = _v13.getParameters(_v0, _v5.state, _v6, _v1, _v2),
          _v9 = _v13.getProgramCacheKey(_v8),
          _v10 = _v4.programs;
        _v4.environment = _v0.isMeshStandardMaterial ? _v1.environment : null, _v4.fog = _v1.fog, _v4.envMap = (_v0.isMeshStandardMaterial ? _v9 : _v8).get(_v0.envMap || _v4.environment), _v4.envMapRotation = null !== _v4.environment && null === _v0.envMap ? _v1.environmentRotation : _v0.envMapRotation, void 0 === _v10 && (_v0.addEventListener("dispose", _v79), _v4.programs = _v10 = new Map());
        let _v11 = _v10.get(_v9);
        if (void 0 !== _v11) {
          if (_v4.currentProgram === _v11 && _v4.lightsStateVersion === _v7) return _v92(_v0, _v8), _v11;
        } else _v8.uniforms = _v13.getUniforms(_v0), _v0.onBeforeCompile(_v8, _v43), _v11 = _v13.acquireProgram(_v8, _v9), _v10.set(_v9, _v11), _v4.uniforms = _v8.uniforms;
        let _v12 = _v4.uniforms;
        return (_v0.isShaderMaterial || _v0.isRawShaderMaterial) && !0 !== _v0.clipping || (_v12.clippingPlanes = _v17.uniform), _v92(_v0, _v8), _v4.needsLights = (_v3 = _v0).isMeshLambertMaterial || _v3.isMeshToonMaterial || _v3.isMeshPhongMaterial || _v3.isMeshStandardMaterial || _v3.isShadowMaterial || _v3.isShaderMaterial && !0 === _v3.lights, _v4.lightsStateVersion = _v7, _v4.needsLights && (_v12.ambientLightColor.value = _v5.state.ambient, _v12.lightProbe.value = _v5.state.probe, _v12.directionalLights.value = _v5.state.directional, _v12.directionalLightShadows.value = _v5.state.directionalShadow, _v12.spotLights.value = _v5.state.spot, _v12.spotLightShadows.value = _v5.state.spotShadow, _v12.rectAreaLights.value = _v5.state.rectArea, _v12.ltc_1.value = _v5.state.rectAreaLTC1, _v12.ltc_2.value = _v5.state.rectAreaLTC2, _v12.pointLights.value = _v5.state.point, _v12.pointLightShadows.value = _v5.state.pointShadow, _v12.hemisphereLights.value = _v5.state.hemi, _v12.directionalShadowMap.value = _v5.state.directionalShadowMap, _v12.directionalShadowMatrix.value = _v5.state.directionalShadowMatrix, _v12.spotShadowMap.value = _v5.state.spotShadowMap, _v12.spotLightMatrix.value = _v5.state.spotLightMatrix, _v12.spotLightMap.value = _v5.state.spotLightMap, _v12.pointShadowMap.value = _v5.state.pointShadowMap, _v12.pointShadowMatrix.value = _v5.state.pointShadowMatrix), _v4.currentProgram = _v11, _v4.uniformsList = null, _v11;
      }
      function _v91(_v0) {
        if (null === _v0.uniformsList) {
          let _v0 = _v0.currentProgram.getUniforms();
          _v0.uniformsList = _v437.seqWithValue(_v0.seq, _v0.uniforms);
        }
        return _v0.uniformsList;
      }
      function _v92(_v0, _v1) {
        let _v2 = _v6.get(_v0);
        _v2.outputColorSpace = _v1.outputColorSpace, _v2.batching = _v1.batching, _v2.batchingColor = _v1.batchingColor, _v2.instancing = _v1.instancing, _v2.instancingColor = _v1.instancingColor, _v2.instancingMorph = _v1.instancingMorph, _v2.skinning = _v1.skinning, _v2.morphTargets = _v1.morphTargets, _v2.morphNormals = _v1.morphNormals, _v2.morphColors = _v1.morphColors, _v2.morphTargetsCount = _v1.morphTargetsCount, _v2.numClippingPlanes = _v1.numClippingPlanes, _v2.numIntersection = _v1.numClipIntersection, _v2.vertexAlphas = _v1.vertexAlphas, _v2.vertexTangents = _v1.vertexTangents, _v2.toneMapping = _v1.toneMapping;
      }
      _v84.setAnimationLoop(function (_v0) {
        _v81 && _v81(_v0);
      }), "u" > typeof self && _v84.setContext(self), this.setAnimationLoop = function (_v0) {
        _v81 = _v0, _v75.setAnimationLoop(_v0), null === _v0 ? _v84.stop() : _v84.start();
      }, _v75.addEventListener("sessionstart", _v82), _v75.addEventListener("sessionend", _v83), this.render = function (_v0, _v1) {
        if (void 0 !== _v1 && !0 !== _v1.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (!0 === _v44) return;
        if (!0 === _v0.matrixWorldAutoUpdate && _v0.updateMatrixWorld(), null === _v1.parent && !0 === _v1.matrixWorldAutoUpdate && _v1.updateMatrixWorld(), !0 === _v75.enabled && !0 === _v75.isPresenting && (!0 === _v75.cameraAutoUpdate && _v75.updateCamera(_v1), _v1 = _v75.getCamera()), !0 === _v0.isScene && _v0.onBeforeRender(_v43, _v0, _v1, _v47), (_v40 = _v16.get(_v0, _v42.length)).init(_v1), _v42.push(_v40), _v66.multiplyMatrices(_v1.projectionMatrix, _v1.matrixWorldInverse), _v63.setFromProjectionMatrix(_v66, 0, _v1.reversedDepth), _v65 = this.localClippingEnabled, _v64 = _v17.init(this.clippingPlanes, _v65), (_v39 = _v15.get(_v0, _v41.length)).init(), _v41.push(_v39), !0 === _v75.enabled && !0 === _v75.isPresenting) {
          let _v0 = _v43.xr.getDepthSensingMesh();
          null !== _v0 && _v85(_v0, _v1, -1 / 0, _v43.sortObjects);
        }
        _v85(_v0, _v1, 0, _v43.sortObjects), _v39.finish(), !0 === _v43.sortObjects && _v39.sort(_v58, _v59), (_v70 = !1 === _v75.enabled || !1 === _v75.isPresenting || !1 === _v75.hasDepthSensing()) && _v19.addToRenderList(_v39, _v0), this.info.render.frame++, !0 === _v64 && _v17.beginShadows();
        let _v2 = _v40.state.shadowsArray;
        _v18.render(_v2, _v0, _v1), !0 === _v64 && _v17.endShadows(), !0 === this.info.autoReset && this.info.reset();
        let _v3 = _v39.opaque,
          _v4 = _v39.transmissive;
        if (_v40.setupLights(), _v1.isArrayCamera) {
          let _v0 = _v1.cameras;
          if (_v4.length > 0) for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) _v87(_v3, _v4, _v0, _v0[_v0]);
          _v70 && _v19.render(_v0);
          for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
            let _v0 = _v0[_v0];
            _v86(_v39, _v0, _v0, _v0.viewport);
          }
        } else _v4.length > 0 && _v87(_v3, _v4, _v0, _v1), _v70 && _v19.render(_v0), _v86(_v39, _v0, _v1);
        null !== _v47 && 0 === _v46 && (_v7.updateMultisampleRenderTarget(_v47), _v7.updateRenderTargetMipmap(_v47)), !0 === _v0.isScene && _v0.onAfterRender(_v43, _v0, _v1), _v24.resetDefaultState(), _v48 = -1, _v49 = null, _v42.pop(), _v42.length > 0 ? (_v40 = _v42[_v42.length - 1], !0 === _v64 && _v17.setGlobalState(_v43.clippingPlanes, _v40.state.camera)) : _v40 = null, _v41.pop(), _v39 = _v41.length > 0 ? _v41[_v41.length - 1] : null;
      }, this.getActiveCubeFace = function () {
        return _v45;
      }, this.getActiveMipmapLevel = function () {
        return _v46;
      }, this.getRenderTarget = function () {
        return _v47;
      }, this.setRenderTargetTextures = function (_v0, _v1, _v2) {
        let _v3 = _v6.get(_v0);
        _v3.__autoAllocateDepthBuffer = !1 === _v0.resolveDepthBuffer, !1 === _v3.__autoAllocateDepthBuffer && (_v3.__useRenderToTexture = !1), _v6.get(_v0.texture).__webglTexture = _v1, _v6.get(_v0.depthTexture).__webglTexture = _v3.__autoAllocateDepthBuffer ? void 0 : _v2, _v3.__hasExternalTextures = !0;
      }, this.setRenderTargetFramebuffer = function (_v0, _v1) {
        let _v2 = _v6.get(_v0);
        _v2.__webglFramebuffer = _v1, _v2.__useDefaultFramebuffer = void 0 === _v1;
      };
      const _v93 = _v72.createFramebuffer();
      this.setRenderTarget = function (_v0, _v1 = 0, _v2 = 0) {
        _v47 = _v0, _v45 = _v1, _v46 = _v2;
        let _v3 = !0,
          _v4 = null,
          _v5 = !1,
          _v6 = !1;
        if (_v0) {
          let _v0 = _v6.get(_v0);
          if (void 0 !== _v0.__useDefaultFramebuffer) _v4.bindFramebuffer(_v72.FRAMEBUFFER, null), _v3 = !1;else if (void 0 === _v0.__webglFramebuffer) _v7.setupRenderTarget(_v0);else if (_v0.__hasExternalTextures) _v7.rebindTextures(_v0, _v6.get(_v0.texture).__webglTexture, _v6.get(_v0.depthTexture).__webglTexture);else if (_v0.depthBuffer) {
            let _v0 = _v0.depthTexture;
            if (_v0.__boundDepthTexture !== _v0) {
              if (null !== _v0 && _v6.has(_v0) && (_v0.width !== _v0.image.width || _v0.height !== _v0.image.height)) throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
              _v7.setupDepthRenderbuffer(_v0);
            }
          }
          let _v1 = _v0.texture;
          (_v1.isData3DTexture || _v1.isDataArrayTexture || _v1.isCompressedArrayTexture) && (_v6 = !0);
          let _v2 = _v6.get(_v0).__webglFramebuffer;
          _v0.isWebGLCubeRenderTarget ? (_v4 = Array.isArray(_v2[_v1]) ? _v2[_v1][_v2] : _v2[_v1], _v5 = !0) : _v4 = _v0.samples > 0 && !1 === _v7.useMultisampledRTT(_v0) ? _v6.get(_v0).__webglMultisampledFramebuffer : Array.isArray(_v2) ? _v2[_v2] : _v2, _v50.copy(_v0.viewport), _v51.copy(_v0.scissor), _v52 = _v0.scissorTest;
        } else _v50.copy(_v60).multiplyScalar(_v57).floor(), _v51.copy(_v61).multiplyScalar(_v57).floor(), _v52 = _v62;
        if (0 !== _v2 && (_v4 = _v93), _v4.bindFramebuffer(_v72.FRAMEBUFFER, _v4) && _v3 && _v4.drawBuffers(_v0, _v4), _v4.viewport(_v50), _v4.scissor(_v51), _v4.setScissorTest(_v52), _v5) {
          let _v0 = _v6.get(_v0.texture);
          _v72.framebufferTexture2D(_v72.FRAMEBUFFER, _v72.COLOR_ATTACHMENT0, _v72.TEXTURE_CUBE_MAP_POSITIVE_X + _v1, _v0.__webglTexture, _v2);
        } else if (_v6) for (let _v0 = 0; _v0 < _v0.textures.length; _v0++) {
          let _v0 = _v6.get(_v0.textures[_v0]);
          _v72.framebufferTextureLayer(_v72.FRAMEBUFFER, _v72.COLOR_ATTACHMENT0 + _v0, _v0.__webglTexture, _v2, _v1);
        } else if (null !== _v0 && 0 !== _v2) {
          let _v0 = _v6.get(_v0.texture);
          _v72.framebufferTexture2D(_v72.FRAMEBUFFER, _v72.COLOR_ATTACHMENT0, _v72.TEXTURE_2D, _v0.__webglTexture, _v2);
        }
        _v48 = -1;
      }, this.readRenderTargetPixels = function (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7 = 0) {
        if (!(_v0 && _v0.isWebGLRenderTarget)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let _v8 = _v6.get(_v0).__webglFramebuffer;
        if (_v0.isWebGLCubeRenderTarget && void 0 !== _v6 && (_v8 = _v8[_v6]), _v8) {
          _v4.bindFramebuffer(_v72.FRAMEBUFFER, _v8);
          try {
            let _v0 = _v0.textures[_v7],
              _v1 = _v0.format,
              _v2 = _v0.type;
            if (!_v3.textureFormatReadable(_v1)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            if (!_v3.textureTypeReadable(_v2)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            _v1 >= 0 && _v1 <= _v0.width - _v3 && _v2 >= 0 && _v2 <= _v0.height - _v4 && (_v0.textures.length > 1 && _v72.readBuffer(_v72.COLOR_ATTACHMENT0 + _v7), _v72.readPixels(_v1, _v2, _v3, _v4, _v23.convert(_v1), _v23.convert(_v2), _v5));
          } finally {
            let _v0 = null !== _v47 ? _v6.get(_v47).__webglFramebuffer : null;
            _v4.bindFramebuffer(_v72.FRAMEBUFFER, _v0);
          }
        }
      }, this.readRenderTargetPixelsAsync = async function (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7 = 0) {
        if (!(_v0 && _v0.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let _v8 = _v6.get(_v0).__webglFramebuffer;
        if (_v0.isWebGLCubeRenderTarget && void 0 !== _v6 && (_v8 = _v8[_v6]), _v8) if (_v1 >= 0 && _v1 <= _v0.width - _v3 && _v2 >= 0 && _v2 <= _v0.height - _v4) {
          var _v9;
          _v4.bindFramebuffer(_v72.FRAMEBUFFER, _v8);
          let _v0 = _v0.textures[_v7],
            _v1 = _v0.format,
            _v2 = _v0.type;
          if (!_v3.textureFormatReadable(_v1)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!_v3.textureTypeReadable(_v2)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          let _v3 = _v72.createBuffer();
          _v72.bindBuffer(_v72.PIXEL_PACK_BUFFER, _v3), _v72.bufferData(_v72.PIXEL_PACK_BUFFER, _v5.byteLength, _v72.STREAM_READ), _v0.textures.length > 1 && _v72.readBuffer(_v72.COLOR_ATTACHMENT0 + _v7), _v72.readPixels(_v1, _v2, _v3, _v4, _v23.convert(_v1), _v23.convert(_v2), 0);
          let _v4 = null !== _v47 ? _v6.get(_v47).__webglFramebuffer : null;
          _v4.bindFramebuffer(_v72.FRAMEBUFFER, _v4);
          let _v5 = _v72.fenceSync(_v72.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return _v72.flush(), await (_v9 = _v72, new Promise(function (_v0, _v1) {
            setTimeout(function _v0() {
              switch (_v9.clientWaitSync(_v5, _v9.SYNC_FLUSH_COMMANDS_BIT, 0)) {
                case _v9.WAIT_FAILED:
                  _v1();
                  break;
                case _v9.TIMEOUT_EXPIRED:
                  setTimeout(_v0, 4);
                  break;
                default:
                  _v0();
              }
            }, 4);
          })), _v72.bindBuffer(_v72.PIXEL_PACK_BUFFER, _v3), _v72.getBufferSubData(_v72.PIXEL_PACK_BUFFER, 0, _v5), _v72.deleteBuffer(_v3), _v72.deleteSync(_v5), _v5;
        } else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }, this.copyFramebufferToTexture = function (_v0, _v1 = null, _v2 = 0) {
        let _v3 = Math.pow(2, -_v2),
          _v4 = Math.floor(_v0.image.width * _v3),
          _v5 = Math.floor(_v0.image.height * _v3),
          _v6 = null !== _v1 ? _v1.x : 0,
          _v7 = null !== _v1 ? _v1.y : 0;
        _v7.setTexture2D(_v0, 0), _v72.copyTexSubImage2D(_v72.TEXTURE_2D, _v2, 0, 0, _v6, _v7, _v4, _v5), _v4.unbindTexture();
      };
      const _v94 = _v72.createFramebuffer(),
        _v95 = _v72.createFramebuffer();
      this.copyTextureToTexture = function (_v0, _v1, _v2 = null, _v3 = null, _v4 = 0, _v5 = null) {
        let _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15;
        null === _v5 && (0 !== _v4 ? (_v149("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), _v5 = _v4, _v4 = 0) : _v5 = 0);
        let _v16 = _v0.isCompressedTexture ? _v0.mipmaps[_v5] : _v0.image;
        if (null !== _v2) _v6 = _v2.max.x - _v2.min.x, _v7 = _v2.max.y - _v2.min.y, _v8 = _v2.isBox3 ? _v2.max.z - _v2.min.z : 1, _v9 = _v2.min.x, _v10 = _v2.min.y, _v11 = _v2.isBox3 ? _v2.min.z : 0;else {
          let _v0 = Math.pow(2, -_v4);
          _v6 = Math.floor(_v16.width * _v0), _v7 = Math.floor(_v16.height * _v0), _v8 = _v0.isDataArrayTexture ? _v16.depth : _v0.isData3DTexture ? Math.floor(_v16.depth * _v0) : 1, _v9 = 0, _v10 = 0, _v11 = 0;
        }
        null !== _v3 ? (_v12 = _v3.x, _v13 = _v3.y, _v14 = _v3.z) : (_v12 = 0, _v13 = 0, _v14 = 0);
        let _v17 = _v23.convert(_v1.format),
          _v18 = _v23.convert(_v1.type);
        _v1.isData3DTexture ? (_v7.setTexture3D(_v1, 0), _v15 = _v72.TEXTURE_3D) : _v1.isDataArrayTexture || _v1.isCompressedArrayTexture ? (_v7.setTexture2DArray(_v1, 0), _v15 = _v72.TEXTURE_2D_ARRAY) : (_v7.setTexture2D(_v1, 0), _v15 = _v72.TEXTURE_2D), _v72.pixelStorei(_v72.UNPACK_FLIP_Y_WEBGL, _v1.flipY), _v72.pixelStorei(_v72.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _v1.premultiplyAlpha), _v72.pixelStorei(_v72.UNPACK_ALIGNMENT, _v1.unpackAlignment);
        let _v19 = _v72.getParameter(_v72.UNPACK_ROW_LENGTH),
          _v20 = _v72.getParameter(_v72.UNPACK_IMAGE_HEIGHT),
          _v21 = _v72.getParameter(_v72.UNPACK_SKIP_PIXELS),
          _v22 = _v72.getParameter(_v72.UNPACK_SKIP_ROWS),
          _v23 = _v72.getParameter(_v72.UNPACK_SKIP_IMAGES);
        _v72.pixelStorei(_v72.UNPACK_ROW_LENGTH, _v16.width), _v72.pixelStorei(_v72.UNPACK_IMAGE_HEIGHT, _v16.height), _v72.pixelStorei(_v72.UNPACK_SKIP_PIXELS, _v9), _v72.pixelStorei(_v72.UNPACK_SKIP_ROWS, _v10), _v72.pixelStorei(_v72.UNPACK_SKIP_IMAGES, _v11);
        let _v24 = _v0.isDataArrayTexture || _v0.isData3DTexture,
          _v25 = _v1.isDataArrayTexture || _v1.isData3DTexture;
        if (_v0.isDepthTexture) {
          let _v0 = _v6.get(_v0),
            _v1 = _v6.get(_v1),
            _v2 = _v6.get(_v0.__renderTarget),
            _v3 = _v6.get(_v1.__renderTarget);
          _v4.bindFramebuffer(_v72.READ_FRAMEBUFFER, _v2.__webglFramebuffer), _v4.bindFramebuffer(_v72.DRAW_FRAMEBUFFER, _v3.__webglFramebuffer);
          for (let _v0 = 0; _v0 < _v8; _v0++) _v24 && (_v72.framebufferTextureLayer(_v72.READ_FRAMEBUFFER, _v72.COLOR_ATTACHMENT0, _v6.get(_v0).__webglTexture, _v4, _v11 + _v0), _v72.framebufferTextureLayer(_v72.DRAW_FRAMEBUFFER, _v72.COLOR_ATTACHMENT0, _v6.get(_v1).__webglTexture, _v5, _v14 + _v0)), _v72.blitFramebuffer(_v9, _v10, _v6, _v7, _v12, _v13, _v6, _v7, _v72.DEPTH_BUFFER_BIT, _v72.NEAREST);
          _v4.bindFramebuffer(_v72.READ_FRAMEBUFFER, null), _v4.bindFramebuffer(_v72.DRAW_FRAMEBUFFER, null);
        } else if (0 !== _v4 || _v0.isRenderTargetTexture || _v6.has(_v0)) {
          let _v0 = _v6.get(_v0),
            _v1 = _v6.get(_v1);
          _v4.bindFramebuffer(_v72.READ_FRAMEBUFFER, _v94), _v4.bindFramebuffer(_v72.DRAW_FRAMEBUFFER, _v95);
          for (let _v0 = 0; _v0 < _v8; _v0++) _v24 ? _v72.framebufferTextureLayer(_v72.READ_FRAMEBUFFER, _v72.COLOR_ATTACHMENT0, _v0.__webglTexture, _v4, _v11 + _v0) : _v72.framebufferTexture2D(_v72.READ_FRAMEBUFFER, _v72.COLOR_ATTACHMENT0, _v72.TEXTURE_2D, _v0.__webglTexture, _v4), _v25 ? _v72.framebufferTextureLayer(_v72.DRAW_FRAMEBUFFER, _v72.COLOR_ATTACHMENT0, _v1.__webglTexture, _v5, _v14 + _v0) : _v72.framebufferTexture2D(_v72.DRAW_FRAMEBUFFER, _v72.COLOR_ATTACHMENT0, _v72.TEXTURE_2D, _v1.__webglTexture, _v5), 0 !== _v4 ? _v72.blitFramebuffer(_v9, _v10, _v6, _v7, _v12, _v13, _v6, _v7, _v72.COLOR_BUFFER_BIT, _v72.NEAREST) : _v25 ? _v72.copyTexSubImage3D(_v15, _v5, _v12, _v13, _v14 + _v0, _v9, _v10, _v6, _v7) : _v72.copyTexSubImage2D(_v15, _v5, _v12, _v13, _v9, _v10, _v6, _v7);
          _v4.bindFramebuffer(_v72.READ_FRAMEBUFFER, null), _v4.bindFramebuffer(_v72.DRAW_FRAMEBUFFER, null);
        } else _v25 ? _v0.isDataTexture || _v0.isData3DTexture ? _v72.texSubImage3D(_v15, _v5, _v12, _v13, _v14, _v6, _v7, _v8, _v17, _v18, _v16.data) : _v1.isCompressedArrayTexture ? _v72.compressedTexSubImage3D(_v15, _v5, _v12, _v13, _v14, _v6, _v7, _v8, _v17, _v16.data) : _v72.texSubImage3D(_v15, _v5, _v12, _v13, _v14, _v6, _v7, _v8, _v17, _v18, _v16) : _v0.isDataTexture ? _v72.texSubImage2D(_v72.TEXTURE_2D, _v5, _v12, _v13, _v6, _v7, _v17, _v18, _v16.data) : _v0.isCompressedTexture ? _v72.compressedTexSubImage2D(_v72.TEXTURE_2D, _v5, _v12, _v13, _v16.width, _v16.height, _v17, _v16.data) : _v72.texSubImage2D(_v72.TEXTURE_2D, _v5, _v12, _v13, _v6, _v7, _v17, _v18, _v16);
        _v72.pixelStorei(_v72.UNPACK_ROW_LENGTH, _v19), _v72.pixelStorei(_v72.UNPACK_IMAGE_HEIGHT, _v20), _v72.pixelStorei(_v72.UNPACK_SKIP_PIXELS, _v21), _v72.pixelStorei(_v72.UNPACK_SKIP_ROWS, _v22), _v72.pixelStorei(_v72.UNPACK_SKIP_IMAGES, _v23), 0 === _v5 && _v1.generateMipmaps && _v72.generateMipmap(_v15), _v4.unbindTexture();
      }, this.initRenderTarget = function (_v0) {
        void 0 === _v6.get(_v0).__webglFramebuffer && _v7.setupRenderTarget(_v0);
      }, this.initTexture = function (_v0) {
        _v0.isCubeTexture ? _v7.setTextureCube(_v0, 0) : _v0.isData3DTexture ? _v7.setTexture3D(_v0, 0) : _v0.isDataArrayTexture || _v0.isCompressedArrayTexture ? _v7.setTexture2DArray(_v0, 0) : _v7.setTexture2D(_v0, 0), _v4.unbindTexture();
      }, this.resetState = function () {
        _v45 = 0, _v46 = 0, _v47 = null, _v4.reset(), _v24.reset();
      }, "u" > typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
    get coordinateSystem() {
      return 0;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(_v0) {
      this._outputColorSpace = _v0;
      let _v1 = this.getContext();
      _v1.drawingBufferColorSpace = _v152._getDrawingBufferColorSpace(_v0), _v1.unpackColorSpace = _v152._getUnpackColorSpace();
    }
  }
  let _v484 = _v33.FILMS.reduce((_v0, _v1) => _v0 + _v1.width + 10, 0),
    _v485 = _v33.FILMS.map((_v0, _v1) => _v33.FILMS.slice(0, _v1).reduce((_v0, _v1) => _v0 + _v1.width + 10, 0)),
    _v486 = `
  uniform float u_halfWidth;
  uniform float u_designHalfWidth;
  uniform float u_depth;
  uniform float u_speed;
  varying vec2 vUv;
  const float PI = 3.141592653589793;

  float profile(float q) {
    return sin(PI * q) * exp(-q * q);
  }
  float slope(float q) {
    return (PI * cos(PI * q) - 2.0 * q * sin(PI * q)) * exp(-q * q);
  }
  float smooth01(float a, float b, float x) {
    float t = clamp((x - a) / (b - a), 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
  }
  void main() {
    vUv = uv;
    vec4 w = modelMatrix * vec4(position, 1.0);
    float q = w.x / u_halfWidth * 1.15 - 0.2;
    float edge = w.x / u_halfWidth;
    float bank = -0.16 * slope(q) / PI;
    bank += 1.8 * u_speed * smooth01(0.3, 0.9, abs(edge)) * sign(edge);
    float c = cos(bank), s = sin(bank);
    float oldY = w.y, oldZ = w.z;
    w.y = oldY * c - oldZ * s;
    w.z = oldY * s + oldZ * c;
    w.z -= u_depth * profile(q);
    w.y += 0.03 * w.x;
    float lift = 1.0 - smooth01(-1.0, 0.3, edge);
    w.y += 0.1 * u_designHalfWidth * u_speed * lift;
    w.z += 0.2 * u_designHalfWidth * u_speed * lift;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,
    _v487 = `
  uniform sampler2D u_film;
  uniform vec2 u_size;
  uniform float u_imageAspect;
  uniform float u_cropScale;
  uniform float u_warmFilmGrade;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    float planeAspect = u_size.x / u_size.y;
    if (u_imageAspect > planeAspect) {
      float ratio = planeAspect / u_imageAspect;
      uv.x = (uv.x - 0.5) * ratio + 0.5;
    } else {
      float ratio = u_imageAspect / planeAspect;
      uv.y = (uv.y - 0.5) * ratio + 0.5;
    }
    vec2 local = (vUv - 0.5) * u_size;
    float radius = 20.0;
    vec2 q = abs(local) - (u_size * 0.5 - radius);
    float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
    float alpha = 1.0 - smoothstep(-1.4, 1.4, d);
    if (alpha < 0.01) discard;
    uv = (uv - 0.5) / u_cropScale + 0.5;
    vec4 color = texture2D(u_film, uv);
    float warmPixels = smoothstep(0.18, 0.50, min(color.r, color.g) - color.b);
    vec3 graded = vec3(color.r * 0.70, color.g * 0.46, max(color.b, 0.04));
    color.rgb = mix(color.rgb, graded, u_warmFilmGrade * warmPixels);
    gl_FragColor = vec4(color.rgb, color.a * alpha);
    #include <colorspace_fragment>
  }
`,
    _v488 = `
  uniform sampler2D u_credit;
  varying vec2 vUv;
  void main() {
    vec4 color = texture2D(u_credit, vUv);
    if (color.a < 0.01) discard;
    gl_FragColor = color;
    #include <colorspace_fragment>
  }
`,
    _v489 = () => {
      let _v0 = (0, _v15.useRef)(null),
        _v1 = (0, _v15.useRef)(null),
        _v2 = (0, _v15.useRef)(null),
        [_v3, _v4] = (0, _v15.useState)(null),
        [_v5, _v6] = (0, _v15.useState)(!1),
        [_v7, _v8] = (0, _v15.useState)(!1);
      (0, _v15.useEffect)(() => {
        if (!_v0.current || !_v1.current) return;
        let _v0 = (({
          canvas: _v0,
          stage: _v1,
          onMetrics: _v2,
          onDraggingChange: _v3
        }) => {
          let _v4;
          try {
            _v4 = new _v483({
              canvas: _v0,
              alpha: !0,
              antialias: !0,
              powerPreference: "high-performance"
            });
          } catch {
            return null;
          }
          _v4.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)), _v4.setClearColor(0, 0), _v4.outputColorSpace = _v126;
          let _v5 = new _v287(),
            _v6 = new _v280(53.4, 1, 1, 0),
            _v7 = new _v332();
          _v7.setCrossOrigin("anonymous");
          let _v8 = [],
            _v9 = [],
            _v10 = _v33.FILMS.map(_v0 => {
              var _v1;
              let _v2,
                _v3,
                _v4,
                _v5,
                _v6,
                _v7,
                _v8,
                _v9,
                _v10,
                _v11 = _v7.load(_v0.poster, _v0 => {
                  _v12.uniforms.u_imageAspect.value = _v0.image.width / _v0.image.height;
                });
              _v11.colorSpace = _v126, _v11.minFilter = 0, _v11.magFilter = 0;
              let _v12 = new _v275({
                  uniforms: {
                    u_film: {
                      value: _v11
                    },
                    u_size: {
                      value: new _v139(_v0.width, 412)
                    },
                    u_imageAspect: {
                      value: 16 / 9
                    },
                    u_cropScale: {
                      value: 1
                    },
                    u_warmFilmGrade: {
                      value: 0
                    },
                    u_halfWidth: {
                      value: 720
                    },
                    u_designHalfWidth: {
                      value: 720
                    },
                    u_depth: {
                      value: 144
                    },
                    u_speed: {
                      value: 0
                    }
                  },
                  vertexShader: _v486,
                  fragmentShader: _v487,
                  transparent: !0,
                  depthTest: !0,
                  depthWrite: !0,
                  side: 2
                }),
                _v13 = new _v269(new _v314(_v0.width, 412, 24, 24), _v12);
              _v13.frustumCulled = !1, _v5.add(_v13);
              let _v14 = (_v1 = _v12.uniforms, (_v2 = document.createElement("canvas")).width = 3 * _v0.width, _v2.height = 96, _v3 = !1, _v4 = 32, _v5 = _v2.getContext("2d"), (_v6 = new _v297(_v2)).colorSpace = _v126, _v6.minFilter = 0, _v6.magFilter = 0, _v6.generateMipmaps = !1, (_v7 = () => {
                if (_v5) {
                  if (_v5.setTransform(3, 0, 0, 3, 0, 0), _v5.clearRect(0, 0, _v0.width, _v4), _v5.textBaseline = "alphabetic", _v5.textAlign = "left", _v5.fillStyle = "#f9fafb", _v5.letterSpacing = "-0.4px", _v3) {
                    _v5.font = '500 26px "ABCRepro-Medium", sans-serif', _v5.fillText(_v0.title, 0, 26), _v5.fillStyle = "#b6c0cc", _v5.font = '350 24px "ABCRepro-Regular", sans-serif';
                    let _v0 = `by ${_v0.author}`.split(" "),
                      _v1 = "",
                      _v2 = 60;
                    for (let _v0 of _v0) {
                      let _v0 = _v1 ? `${_v1} ${_v0}` : _v0;
                      _v1 && _v5.measureText(_v0).width > _v0.width - 8 ? (_v5.fillText(_v1, 0, _v2), _v1 = _v0, _v2 += 32) : _v1 = _v0;
                    }
                    _v5.fillText(_v1, 0, _v2);
                  } else {
                    _v5.font = '500 20px "ABCRepro-Medium", sans-serif', _v5.fillText(_v0.title, 0, 21);
                    let _v0 = _v5.measureText(_v0.title).width + 24;
                    _v5.fillStyle = "#b6c0cc", _v5.font = '350 18px "ABCRepro-Regular", sans-serif', _v5.fillText(`by ${_v0.author}`, _v0, 21);
                  }
                  _v6.needsUpdate = !0;
                }
              })(), _v8 = !1, Promise.all([document.fonts.load('500 20px "ABCRepro-Medium"'), document.fonts.load('350 18px "ABCRepro-Regular"')]).then(() => {
                _v8 || _v7();
              }).catch(() => void 0), _v9 = new _v275({
                uniforms: {
                  u_credit: {
                    value: _v6
                  },
                  u_halfWidth: _v1.u_halfWidth,
                  u_designHalfWidth: _v1.u_designHalfWidth,
                  u_depth: _v1.u_depth,
                  u_speed: _v1.u_speed
                },
                vertexShader: _v486,
                fragmentShader: _v488,
                transparent: !0,
                depthTest: !0,
                depthWrite: !1,
                side: 2
              }), (_v10 = new _v269(new _v314(_v0.width, 32, 24, 4), _v9)).position.y = -236, _v10.frustumCulled = !1, {
                mesh: _v10,
                setMobile: _v0 => {
                  _v3 !== _v0 && (_v2.height = 3 * (_v4 = (_v3 = _v0) ? 108 : 32), _v10.geometry.dispose(), _v10.geometry = new _v314(_v0.width, _v4, 24, 4), _v10.position.y = -206 - (_v3 ? 22 : 14) - _v4 / 2, _v6.dispose(), (_v6 = new _v297(_v2)).colorSpace = _v126, _v6.minFilter = 0, _v6.magFilter = 0, _v6.generateMipmaps = !1, _v9.uniforms.u_credit.value = _v6, _v7());
                },
                dispose: () => {
                  _v8 = !0, _v10.geometry.dispose(), _v9.dispose(), _v6.dispose();
                }
              });
              _v13.add(_v14.mesh), _v9.push(_v14);
              let _v15 = document.createElement("video");
              _v15.crossOrigin = "anonymous", _v15.src = _v0.video, _v15.poster = _v0.poster, _v15.muted = !0, _v15.defaultMuted = !0, _v15.loop = !0, _v15.autoplay = !0, _v15.playsInline = !0, _v15.preload = "auto", _v15.setAttribute("playsinline", "");
              let _v16 = new _v296(_v15);
              _v16.colorSpace = _v126, _v16.minFilter = 0, _v16.magFilter = 0, _v16.generateMipmaps = !1;
              let _v17 = () => {
                _v15.readyState >= 2 && (_v12.uniforms.u_film.value = _v16, _v12.uniforms.u_imageAspect.value = _v15.videoWidth / _v15.videoHeight || 16 / 9, _v12.uniforms.u_cropScale.value = "SWELL" === _v0.title ? 1.55 : 1, _v12.uniforms.u_warmFilmGrade.value = +("SWELL" === _v0.title));
              };
              return _v15.addEventListener("loadeddata", _v17), _v15.addEventListener("playing", _v17), _v15.play().catch(() => void 0), _v8.push({
                video: _v15,
                texture: _v16,
                poster: _v11,
                showVideo: _v17
              }), _v13;
            }),
            _v11 = 0,
            _v12 = 0,
            _v13 = 563,
            _v14 = 0,
            _v15 = !1,
            _v16 = 1,
            _v17 = _v484,
            _v18 = !1,
            _v19 = 0,
            _v20 = 0,
            _v21 = 0,
            _v22 = !1,
            _v23 = !1,
            _v24 = 0,
            _v25 = 0,
            _v26 = 0,
            _v27 = 0,
            _v28 = 0,
            _v29 = performance.now(),
            _v30 = 0,
            _v31 = _v0 => _v485[_v0] * _v16 + (_v15 ? 8 * _v0 : 0),
            _v32 = () => _v12 * (_v15 ? .085 : _v14 / 563 * .1),
            _v33 = () => {
              _v12 = Math.min(_v11 = _v1.clientWidth || 0, 0), _v13 = (_v15 = _v11 <= 600) ? 340 : 563, _v17 = _v484 * (_v16 = _v15 ? .44 : 1) + (_v15 ? 8 * _v33.FILMS.length : 0);
              let _v0 = _v15 ? 80 : 240;
              _v14 = _v13 + 2 * _v0, _v2({
                stageHeight: _v13,
                canvasHeight: _v14,
                canvasTop: -_v0,
                mobile: _v15
              }), _v18 && _v10[0].scale.x === _v16 || (_v20 = _v19 = _v15 ? _v11 / 2 - _v31(3) - _v33.FILMS[3].width / 2 * _v16 : (_v11 - _v33.FILMS[3].width) / 2 - _v485[3] - 153, _v18 = !0), _v4.setSize(_v11, _v14, !1), _v6.aspect = _v11 / _v14, _v6.position.set(0, 0, _v14 / 2 / Math.tan(_v6.fov / 2 * _v133)), _v6.updateProjectionMatrix(), _v10.forEach((_v0, _v1) => {
                _v0.scale.setScalar(_v16), _v0.position.y = 22 * !!_v15, _v9[_v1].setMobile(_v15), _v0.material.uniforms.u_halfWidth.value = _v11 / 2, _v0.material.uniforms.u_designHalfWidth.value = _v12 / 2, _v0.material.uniforms.u_depth.value = _v32();
              });
            },
            _v34 = new ResizeObserver(_v33);
          _v34.observe(_v1), _v33();
          let _v35 = _v0 => {
            let _v1 = Math.min(Math.max(_v0 - _v29, 0), 50);
            _v29 = _v0, _v22 || (_v19 -= 24 * (_v15 ? .5 : 1) * _v1 / 0), _v20 += (_v19 - _v20) * Math.min(.1 * (_v1 / (0 / 60) || 1), 1), _v19 > 2 * _v17 && _v20 > 2 * _v17 && (_v19 -= _v17, _v20 -= _v17), _v19 < -(2 * _v17) && _v20 < -(2 * _v17) && (_v19 += _v17, _v20 += _v17);
            let _v2 = Math.tanh((_v19 - _v20) / 550),
              _v3 = Math.abs(_v2 * Math.abs(_v2));
            _v21 += (_v3 - _v21) * .12, _v21 = Math.min(_v21, .45), _v10.forEach((_v0, _v1) => {
              let _v2;
              _v0.position.x = (_v2 = _v31(_v1) + _v33.FILMS[_v1].width / 2 * _v16 + _v20) + Math.round((_v11 / 2 - _v2) / _v17) * _v17 - _v11 / 2, _v0.material.uniforms.u_speed.value = _v21, _v0.material.uniforms.u_depth.value = _v32() * (1 + 1.1 * _v21);
            }), _v4.render(_v5, _v6), _v30 = requestAnimationFrame(_v35);
          };
          _v35(performance.now());
          let _v36 = new _v141(),
            _v37 = (_v0, _v1, _v2, _v3) => {
              let _v4 = _v0 / _v2 * 1.15 - .2,
                _v5 = -_v3 * Math.sin(Math.PI * _v4) * Math.exp(-_v4 * _v4);
              return _v36.set(_v0, _v1 + .03 * _v0, _v5).project(_v6), {
                x: (_v36.x + 1) / 2 * _v11,
                y: (1 - _v36.y) / 2 * _v14
              };
            },
            _v38 = (_v0, _v1) => {
              let _v2 = _v11 / 2,
                _v3 = _v32(),
                _v4 = _v0.position.x,
                _v5 = _v1.width * _v0.scale.x,
                _v6 = 412 * _v0.scale.x,
                _v7 = _v5 / 2,
                _v8 = 1 / 0,
                _v9 = -1 / 0;
              for (let _v0 = 0; _v0 < 7; _v0 += 1) {
                let _v0 = _v37(_v4 - _v7 + _v5 * _v0 / 6, _v0.position.y, _v2, _v3);
                _v8 = Math.min(_v8, _v0.x), _v9 = Math.max(_v9, _v0.x);
              }
              let _v10 = _v37(_v4, _v0.position.y + _v6 / 2, _v2, _v3),
                _v11 = _v37(_v4, _v0.position.y - _v6 / 2, _v2, _v3);
              return {
                minX: _v8,
                maxX: _v9,
                minY: _v10.y,
                maxY: _v11.y,
                centerX: (_v8 + _v9) / 2
              };
            };
          return {
            beginDrag: _v0 => {
              if ("mouse" !== _v0.pointerType || 0 === _v0.button) {
                _v8.forEach(({
                  video: _v0
                }) => {
                  _v0.play().catch(() => void 0);
                }), _v22 = !0, _v23 = !1, _v24 = _v26 = _v0.clientX, _v25 = _v0.clientY, _v27 = 0, _v28 = performance.now();
                try {
                  _v1.setPointerCapture(_v0.pointerId);
                } catch {}
              }
            },
            moveDrag: _v0 => {
              if (!_v22) return;
              let _v1 = _v0.clientX - _v26;
              if (!_v23) {
                let _v0 = Math.abs(_v0.clientX - _v24),
                  _v1 = Math.abs(_v0.clientY - _v25);
                if (_v0 < 10 || _v0 < _v1) return;
                _v23 = !0, _v3(!0);
              }
              _v19 += _v27 = _v1 * (_v15 ? 1 : 1.5), _v26 = _v0.clientX, _v28 = performance.now();
            },
            endDrag: _v0 => {
              let _v1 = _v0 && _v22 && !_v23 && 10 > Math.max(Math.abs(_v0.clientX - _v24), Math.abs(_v0.clientY - _v25)) ? (_v0 => {
                let _v1 = _v0.getBoundingClientRect(),
                  _v2 = _v0.clientX - _v1.left,
                  _v3 = _v0.clientY - _v1.top,
                  _v4 = null,
                  _v5 = 1 / 0;
                for (let _v0 = 0; _v0 < _v10.length; _v0 += 1) {
                  let _v0 = _v33.FILMS[_v0];
                  if (!_v0) continue;
                  let _v1 = _v38(_v10[_v0], _v0);
                  if (_v2 < _v1.minX || _v2 > _v1.maxX || _v3 < _v1.minY || _v3 > _v1.maxY) continue;
                  let _v2 = Math.abs(_v2 - _v1.centerX);
                  _v2 < _v5 && (_v4 = _v0, _v5 = _v2);
                }
                return _v4;
              })(_v0) : null;
              return _v23 && performance.now() - _v28 < 100 && (_v19 += 12 * _v27), _v22 = !1, _v23 = !1, _v3(!1), _v1;
            },
            dispose: () => {
              cancelAnimationFrame(_v30), _v34.disconnect(), _v9.forEach(_v0 => _v0.dispose()), _v10.forEach(_v0 => {
                _v0.geometry.dispose(), _v0.material.dispose();
              }), _v8.forEach(({
                video: _v0,
                texture: _v1,
                poster: _v2,
                showVideo: _v3
              }) => {
                _v0.removeEventListener("loadeddata", _v3), _v0.removeEventListener("playing", _v3), _v0.pause(), _v0.removeAttribute("src"), _v0.load(), _v1.dispose(), _v2.dispose();
              }), _v4.dispose();
            }
          };
        })({
          stage: _v0.current,
          canvas: _v1.current,
          onMetrics: _v4,
          onDraggingChange: _v6
        });
        return _v0 ? (_v2.current = _v0, () => {
          _v2.current = null, _v0.dispose();
        }) : void _v8(!0);
      }, []);
      let _v9 = _v3 ? {
        height: `${_v3.stageHeight}px`,
        overflow: _v3.mobile ? "hidden" : "visible",
        touchAction: "pan-y"
      } : {
        height: "563px",
        touchAction: "pan-y",
        "@media (max-width: 600px)": {
          height: "340px",
          overflow: "hidden"
        }
      };
      return (0, _v10.jsxs)(_v16.Box, {
        ref: _v0,
        cursor: _v5 ? "grabbing" : "grab",
        onLostPointerCapture: () => _v2.current?.endDrag(),
        onPointerCancel: () => _v2.current?.endDrag(),
        onPointerDown: _v0 => _v2.current?.beginDrag(_v0.nativeEvent),
        onPointerMove: _v0 => _v2.current?.moveDrag(_v0.nativeEvent),
        onPointerUp: _v0 => {
          let _v1 = _v2.current?.endDrag(_v0.nativeEvent);
          _v1 && window.open(_v1.href, "_blank", "noopener,noreferrer");
        },
        mt: {
          base: 0,
          md: "2xl"
        },
        position: "relative",
        sx: _v9,
        userSelect: "none",
        w: "100%",
        children: [_v7 ? (0, _v10.jsx)(_v38.Flex, {
          gap: "10px",
          overflow: "hidden",
          pt: "75px",
          children: _v33.FILMS.map(_v0 => (0, _v10.jsx)(_v83.Link, {
            _hover: {
              color: "inherit",
              textDecoration: "none"
            },
            color: "inherit",
            display: "block",
            flexShrink: "0",
            href: _v0.href,
            isExternal: !0,
            children: (0, _v10.jsxs)(_v16.Box, {
              as: "figure",
              m: "0",
              children: [(0, _v10.jsx)(_v113.Image, {
                alt: "",
                borderRadius: "lg",
                h: {
                  base: "183px",
                  md: "412px"
                },
                objectFit: "cover",
                src: _v0.poster,
                w: {
                  base: "320px",
                  md: "720px"
                }
              }), (0, _v10.jsxs)(_v38.Flex, {
                align: "baseline",
                color: "text-primary",
                fontFamily: "heading",
                fontSize: "20px",
                fontWeight: "medium",
                gap: "24px",
                lineHeight: "26px",
                mt: "14px",
                whiteSpace: "nowrap",
                children: [(0, _v10.jsx)(_v30.Text, {
                  as: "span",
                  children: _v0.title
                }), (0, _v10.jsx)(_v30.Text, {
                  as: "span",
                  color: "text-secondary",
                  fontFamily: "body",
                  fontSize: "18px",
                  fontWeight: "regular",
                  lineHeight: "24px",
                  children: (0, _v31.translate)({
                    singular: "by {author}",
                    replacements: {
                      author: _v0.author
                    },
                    dictionary: {
                      es: {
                        singular: "por {author}"
                      },
                      "de-DE": {
                        singular: "von {author}"
                      },
                      "fr-FR": {
                        singular: "par {author}"
                      },
                      "ja-JP": {
                        singular: "{author}による"
                      },
                      "ko-KR": {
                        singular: "{author} 작성"
                      },
                      "pt-BR": {
                        singular: "por {author}"
                      },
                      "zh-CN": {
                        singular: "由 {author}"
                      }
                    }
                  })
                })]
              })]
            })
          }, _v0.title))
        }) : (0, _v10.jsx)("canvas", {
          ref: _v1,
          "aria-label": `Vimeo Staff Picks: ${_v33.FILMS.map(_v0 => `${_v0.title} by ${_v0.author}`).join("; ")}`,
          role: "img",
          style: {
            position: "absolute",
            left: 0,
            display: "block",
            width: "100%",
            height: `${_v3?.canvasHeight ?? 0}px`,
            top: `${_v3?.canvasTop ?? -240}px`,
            pointerEvents: "none"
          }
        }), (0, _v10.jsx)(_v30.Text, {
          bottom: {
            base: "20px",
            md: "34px"
          },
          color: "text-secondary",
          pointerEvents: "none",
          position: "absolute",
          right: {
            base: "20px",
            md: "43px"
          },
          variant: "body-sm",
          textTransform: "uppercase",
          children: (0, _v31.translate)({
            singular: "Drag to explore Staff Picks",
            dictionary: {
              es: {
                singular: "Arrastra para explorar Staff Picks"
              },
              "de-DE": {
                singular: "Ziehen, um Staff Picks zu entdecken"
              },
              "fr-FR": {
                singular: "Faites glisser pour explorer les Staff Picks"
              },
              "ja-JP": {
                singular: "ドラッグしてStaff Picksを探索する"
              },
              "ko-KR": {
                singular: "끌어서 Staff Picks 탐색"
              },
              "pt-BR": {
                singular: "Arraste para explorar Staff Picks"
              },
              "zh-CN": {
                singular: "拖动以探索 Staff Picks"
              }
            }
          })
        })]
      });
    },
    _v490 = _v0 => (0, _v10.jsx)(_v125, {
      children: _v0
    }),
    _v491 = ({
      onClaim: _v0
    }) => (0, _v10.jsxs)(_v16.Box, {
      as: "section",
      pt: "2xl",
      children: [(0, _v10.jsx)(_v103, {
        position: "relative",
        zIndex: 1,
        children: (0, _v10.jsxs)(_v38.Flex, {
          align: "center",
          direction: "column",
          gap: {
            base: "xl",
            md: "800"
          },
          pt: {
            base: "2xl",
            md: "1200"
          },
          textAlign: "center",
          children: [(0, _v10.jsxs)(_v16.Box, {
            children: [(0, _v10.jsxs)(_v30.Text, {
              as: "h1",
              variant: {
                base: "heading-xl",
                md: "heading-3xl"
              },
              children: [(0, _v31.translate)({
                singular: "We're investing {UNDERLINE}$5 million{/UNDERLINE}",
                replacements: {
                  UNDERLINE: _v490
                },
                dictionary: {
                  es: {
                    singular: "Estamos invirtiendo {UNDERLINE}$5 million{/UNDERLINE}"
                  },
                  "de-DE": {
                    singular: "Wir investieren {UNDERLINE}$5 million{/UNDERLINE}"
                  },
                  "fr-FR": {
                    singular: "Nous investissons {UNDERLINE}$5 million{/UNDERLINE}"
                  },
                  "ja-JP": {
                    singular: "私たちは{UNDERLINE}$5 million{/UNDERLINE}を投資しています"
                  },
                  "ko-KR": {
                    singular: "우리는 {UNDERLINE}$5 million{/UNDERLINE}을 투자하고 있습니다"
                  },
                  "pt-BR": {
                    singular: "Estamos investindo {UNDERLINE}$5 million{/UNDERLINE}"
                  },
                  "zh-CN": {
                    singular: "我们将投资 {UNDERLINE}$5 million{/UNDERLINE}"
                  }
                }
              }), (0, _v10.jsx)("br", {}), (0, _v31.translate)({
                singular: "in indie filmmakers.",
                dictionary: {
                  es: {
                    singular: "en cineastas indie."
                  },
                  "de-DE": {
                    singular: "in Indie-Filmemachern."
                  },
                  "fr-FR": {
                    singular: "chez les cinéastes indépendants."
                  },
                  "ja-JP": {
                    singular: "インディ映画制作者内。"
                  },
                  "pt-BR": {
                    singular: "em cineastas independentes."
                  },
                  "zh-CN": {
                    singular: "在独立电影制作人中。"
                  }
                }
              })]
            }), (0, _v10.jsx)(_v30.Text, {
              color: "text-secondary",
              mt: "lg",
              variant: {
                base: "body-lg",
                md: "body-xl"
              },
              children: (0, _v31.translate)({
                singular: "An exclusive discount on Vimeo Professional for independent creators.",
                dictionary: {
                  es: {
                    singular: "Un descuento exclusivo en Vimeo Professional para creadores independientes."
                  },
                  "de-DE": {
                    singular: "Ein exklusiver Rabatt auf Vimeo Professional für unabhängige Kreative."
                  },
                  "fr-FR": {
                    singular: "Une remise exclusive sur Vimeo Professional destinée aux créateurs indépendants."
                  },
                  "ja-JP": {
                    singular: "独立系クリエイター向けのVimeo Professional専用割引。"
                  },
                  "ko-KR": {
                    singular: "독립 크리에이터를 위한 Vimeo Professional 전용 할인입니다."
                  },
                  "pt-BR": {
                    singular: "Um desconto exclusivo no Vimeo Professional para criadores independentes."
                  },
                  "zh-CN": {
                    singular: "为独立创作者提供的 Vimeo Professional 独家折扣。"
                  }
                }
              })
            })]
          }), (0, _v10.jsxs)(_v38.Flex, {
            align: "center",
            direction: "column",
            gap: "md",
            children: [(0, _v10.jsx)(_v110, {
              onClick: _v0,
              size: "hero",
              tone: "primary",
              children: (0, _v31.translate)({
                singular: "Claim your indie discount",
                dictionary: {
                  es: {
                    singular: "Reclama tu descuento indie"
                  },
                  "de-DE": {
                    singular: "Beanspruchen Sie Ihren Indie‑Rabatt"
                  },
                  "fr-FR": {
                    singular: "Obtenez votre remise Indie"
                  },
                  "ja-JP": {
                    singular: "インディ割引を申請する"
                  },
                  "ko-KR": {
                    singular: "indie 할인 수령"
                  },
                  "pt-BR": {
                    singular: "Resgatar seu desconto indie"
                  },
                  "zh-CN": {
                    singular: "领取您的 Indie Program 折扣"
                  }
                }
              })
            }), (0, _v10.jsx)(_v30.Text, {
              color: "text-secondary",
              variant: "body-lg",
              children: (0, _v31.translate)({
                singular: "Limited spots available",
                dictionary: {
                  es: {
                    singular: "Plazas limitadas disponibles"
                  },
                  "de-DE": {
                    singular: "Begrenzte Plätze verfügbar"
                  },
                  "fr-FR": {
                    singular: "Places limitées"
                  },
                  "ja-JP": {
                    singular: "枠に限りがあります"
                  },
                  "ko-KR": {
                    singular: "한정된 자리만 제공됩니다"
                  },
                  "pt-BR": {
                    singular: "Vagas limitadas"
                  },
                  "zh-CN": {
                    singular: "名额有限"
                  }
                }
              })
            })]
          })]
        })
      }), (0, _v10.jsx)(_v489, {})]
    }),
    _v492 = [{
      number: "01",
      title: (0, _v31.translate)({
        singular: "Claim your discount",
        dictionary: {
          es: {
            singular: "Reclama tu descuento"
          },
          "de-DE": {
            singular: "Beanspruchen Sie Ihren Rabatt"
          },
          "fr-FR": {
            singular: "Obtenez votre remise"
          },
          "ja-JP": {
            singular: "割引を申請する"
          },
          "ko-KR": {
            singular: "할인 수령"
          },
          "pt-BR": {
            singular: "Resgatar seu desconto"
          },
          "zh-CN": {
            singular: "领取折扣"
          }
        }
      }),
      description: (0, _v31.translate)({
        singular: "Start your application for the Indie Program.",
        dictionary: {
          es: {
            singular: "Comienza tu solicitud para el Indie Program."
          },
          "de-DE": {
            singular: "Starten Sie Ihre Bewerbung für das Indie‑Programm."
          },
          "fr-FR": {
            singular: "Commencez votre candidature pour l'Indie Program."
          },
          "ja-JP": {
            singular: "Indie Programへの申請を始める。"
          },
          "ko-KR": {
            singular: "Indie Program 신청을 시작하세요."
          },
          "pt-BR": {
            singular: "Inicie sua inscrição para o Indie Program."
          },
          "zh-CN": {
            singular: "开始申请 Indie Program。"
          }
        }
      })
    }, {
      number: "02",
      title: (0, _v31.translate)({
        singular: "Tell us about your work",
        dictionary: {
          es: {
            singular: "Cuéntanos sobre tu trabajo"
          },
          "de-DE": {
            singular: "Erzählen Sie uns von Ihrer Arbeit"
          },
          "fr-FR": {
            singular: "Parlez-nous de votre travail"
          },
          "ja-JP": {
            singular: "作品について教えてください"
          },
          "ko-KR": {
            singular: "작품에 대해 알려주세요"
          },
          "pt-BR": {
            singular: "Conte-nos sobre seu trabalho"
          },
          "zh-CN": {
            singular: "告诉我们您的作品"
          }
        }
      }),
      description: (0, _v31.translate)({
        singular: "Answer a few questions and share your work.",
        dictionary: {
          es: {
            singular: "Responde unas preguntas y comparte tu trabajo."
          },
          "de-DE": {
            singular: "Beantworten Sie ein paar Fragen und teilen Sie Ihre Arbeit."
          },
          "fr-FR": {
            singular: "Répondez à quelques questions et partagez votre travail."
          },
          "ja-JP": {
            singular: "いくつかの質問に答えて、作品を共有してください。"
          },
          "ko-KR": {
            singular: "몇 가지 질문에 답하고 작품을 공유하세요."
          },
          "pt-BR": {
            singular: "Responda algumas perguntas e compartilhe seu trabalho."
          },
          "zh-CN": {
            singular: "回答几个问题并分享您的作品。"
          }
        }
      })
    }, {
      number: "03",
      title: (0, _v31.translate)({
        singular: "Start creating at the indie price",
        dictionary: {
          es: {
            singular: "Empieza a crear al precio indie"
          },
          "de-DE": {
            singular: "Jetzt zum Indie‑Preis loslegen"
          },
          "fr-FR": {
            singular: "Commencez à créer au tarif Indie"
          },
          "ja-JP": {
            singular: "インディ価格で制作を始める"
          },
          "ko-KR": {
            singular: "indie 가격으로 창작을 시작하세요"
          },
          "pt-BR": {
            singular: "Comece a criar com o preço indie"
          },
          "zh-CN": {
            singular: "以 Indie Program 价格开始创作"
          }
        }
      }),
      description: (0, _v31.translate)({
        singular: "Make Vimeo Professional the home for what comes next.",
        dictionary: {
          es: {
            singular: "Haz de Vimeo Professional el hogar de lo que viene a continuación."
          },
          "de-DE": {
            singular: "Machen Sie Vimeo Professional zum Zuhause für das, was als Nächstes kommt."
          },
          "fr-FR": {
            singular: "Faites de Vimeo Professional le foyer de ce qui vient ensuite."
          },
          "ja-JP": {
            singular: "Vimeo Professional を次の活動の拠点にしましょう。"
          },
          "ko-KR": {
            singular: "다음 단계를 위한 중심으로 Vimeo Professional을 만드세요."
          },
          "pt-BR": {
            singular: "Faça do Vimeo Professional a casa para o que vem a seguir."
          },
          "zh-CN": {
            singular: "让 Vimeo Professional 成为下一步创作的归属。"
          }
        }
      })
    }],
    _v493 = () => (0, _v10.jsxs)(_v103, {
      as: "section",
      py: {
        base: "3xl",
        md: "105px"
      },
      children: [(0, _v10.jsx)(_v30.Text, {
        as: "h2",
        fontSize: {
          base: "heading-xl",
          md: "52px"
        },
        variant: {
          base: "heading-xl",
          md: "heading-3xl"
        },
        children: (0, _v31.translate)({
          singular: "Three steps. Then back to making.",
          dictionary: {
            es: {
              singular: "Tres pasos. Luego vuelve a crear."
            },
            "de-DE": {
              singular: "Drei Schritte. Dann zurück zum Filmemachen."
            },
            "fr-FR": {
              singular: "Trois étapes. Puis retour à la création."
            },
            "ja-JP": {
              singular: "3つのステップ。その後は制作に戻りましょう。"
            },
            "ko-KR": {
              singular: "세 단계. 그다음 제작으로 복귀하세요."
            },
            "pt-BR": {
              singular: "Três etapas. Depois, de volta à criação."
            },
            "zh-CN": {
              singular: "三步完成，然后继续创作。"
            }
          }
        })
      }), (0, _v10.jsx)(_v38.Flex, {
        direction: {
          base: "column",
          md: "row"
        },
        gap: {
          base: "xl",
          md: "3xl"
        },
        mt: {
          base: "xl",
          md: "1200"
        },
        children: _v492.map(_v0 => (0, _v10.jsxs)(_v16.Box, {
          borderColor: "stroke",
          borderTopWidth: "2px",
          flex: "1",
          pt: "lg",
          children: [(0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            variant: "body-lg",
            children: _v0.number
          }), (0, _v10.jsx)(_v30.Text, {
            fontSize: {
              base: "22px",
              md: "25px"
            },
            lineHeight: {
              base: "28px",
              md: "28.25px"
            },
            mt: "lg",
            variant: "heading-md",
            children: _v0.title
          }), (0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            mt: "md",
            variant: "body-lg",
            children: _v0.description
          })]
        }, _v0.number))
      })]
    }),
    _v494 = () => (0, _v10.jsx)(_v103, {
      as: "section",
      py: {
        base: "3xl",
        md: "142px"
      },
      children: (0, _v10.jsxs)(_v38.Flex, {
        align: {
          lg: "flex-start"
        },
        direction: {
          base: "column",
          lg: "row"
        },
        gap: {
          base: "xl",
          lg: "2xl",
          xl: "80px"
        },
        children: [(0, _v10.jsx)(_v30.Text, {
          as: "h2",
          flex: {
            base: "0 0 auto",
            lg: "0 0 46.8%"
          },
          fontSize: {
            base: "heading-xl",
            md: "58px"
          },
          variant: {
            base: "heading-xl",
            md: "heading-3xl"
          },
          children: (0, _v31.translate)({
            singular: "For the ones who make it anyway.",
            dictionary: {
              es: {
                singular: "Para quienes lo hacen de todos modos."
              },
              "de-DE": {
                singular: "Für diejenigen, die es trotzdem machen."
              },
              "fr-FR": {
                singular: "Pour celles et ceux qui le font malgré tout."
              },
              "ja-JP": {
                singular: "それでも作り続ける人たちへ。"
              },
              "ko-KR": {
                singular: "그래도 만들어내는 이들을 위해."
              },
              "pt-BR": {
                singular: "Para quem faz mesmo assim."
              },
              "zh-CN": {
                singular: "献给那些仍坚持创作的人。"
              }
            }
          })
        }), (0, _v10.jsxs)(_v38.Flex, {
          direction: "column",
          flex: "1",
          gap: "xl",
          minW: "0",
          pt: {
            lg: "sm"
          },
          children: [(0, _v10.jsx)(_v30.Text, {
            fontFamily: "body",
            fontSize: {
              base: "20px",
              md: "26px"
            },
            letterSpacing: {
              base: "-0.8px",
              md: "-1.04px"
            },
            lineHeight: {
              base: "27px",
              md: "32.5px"
            },
            children: (0, _v31.translate)({
              singular: "Before the premieres and the credits, there was a story someone had to tell. Vimeo has always been the place where your work is treated right.",
              dictionary: {
                es: {
                  singular: "Antes de los estrenos y los créditos, hubo una historia que alguien debía contar. Vimeo siempre ha sido el lugar donde tu trabajo recibe el trato que merece."
                },
                "de-DE": {
                  singular: "Vor den Premieren und den Credits gab es eine Geschichte, die jemand erzählen musste. Vimeo war schon immer der Ort, an dem Ihre Arbeit richtig behandelt wird."
                },
                "fr-FR": {
                  singular: "Avant les avant-premières et les crédits, il y avait une histoire que quelqu'un devait raconter. Vimeo a toujours été l'endroit où votre travail est respecté."
                },
                "ja-JP": {
                  singular: "プレミアやクレジットの前に、語られるべき物語がありました。Vimeoは常に、あなたの作品が適切に扱われる場所であり続けました。"
                },
                "ko-KR": {
                  singular: "시사회와 크레딧 이전에는 누군가가 전해야 할 이야기가 있었습니다. Vimeo는 항상 여러분의 작품을 제대로 다루는 장소였습니다."
                },
                "pt-BR": {
                  singular: "Antes das estreias e dos créditos, havia uma história que alguém precisava contar. O Vimeo sempre foi o lugar onde seu trabalho é tratado com respeito."
                },
                "zh-CN": {
                  singular: "在首映和片尾字幕之前，总有一个人要讲述的故事。Vimeo 一直是那个对您的作品给予尊重的地方。"
                }
              }
            })
          }), (0, _v10.jsx)(_v30.Text, {
            color: "text-secondary",
            variant: {
              base: "body-lg",
              md: "body-xl"
            },
            children: (0, _v31.translate)({
              singular: "From the first upload to the next Staff Pick, independent voices have shaped this community. The Indie Program is our way of making more room for them.",
              dictionary: {
                es: {
                  singular: "Desde la primera subida hasta el próximo Staff Pick, las voces independientes han dado forma a esta comunidad. El Indie Program es nuestra forma de hacerles más espacio."
                },
                "de-DE": {
                  singular: "Vom ersten Upload bis zum nächsten Staff Pick haben unabhängige Stimmen diese Community geprägt. Das Indie‑Programm ist unser Weg, ihnen mehr Raum zu geben."
                },
                "fr-FR": {
                  singular: "Du premier téléchargement au prochain Staff Pick, les voix indépendantes ont façonné cette communauté. L'Indie Program est notre façon de leur faire plus de place."
                },
                "ja-JP": {
                  singular: "最初のアップロードから次のStaff Pickまで、インディペンデントな声がこのコミュニティを形作ってきました。Indie Programは、彼らにもっと席を作るための取り組みです。"
                },
                "ko-KR": {
                  singular: "첫 업로드부터 다음 Staff Pick까지, 독립적인 목소리들이 이 커뮤니티를 만들어왔습니다. Indie Program은 그들을 위해 더 많은 자리를 마련하는 우리의 방법입니다."
                },
                "pt-BR": {
                  singular: "Do primeiro upload ao próximo Staff Pick, vozes independentes moldaram esta comunidade. O Indie Program é a nossa forma de abrir mais espaço para elas."
                },
                "zh-CN": {
                  singular: "从第一次上传到下一个 Staff Pick，独立的声音塑造了这个社区。Indie Program 是我们为他们腾出更多空间的方式。"
                }
              }
            })
          })]
        })]
      })
    });
  var _v495 = _v0.i(0),
    _v496 = _v0.i(0),
    _v497 = _v0.i(0),
    _v498 = _v0.i(0);
  let _v499 = () => {
    let _v0 = (0, _v495.useRouter)(),
      _v1 = (0, _v20.useViewer)(),
      _v2 = null === _v1,
      _v3 = !!_v1?.user;
    return (0, _v10.jsx)(_v16.Box, {
      as: "footer",
      bg: "background",
      children: (0, _v10.jsx)(_v103, {
        py: {
          base: "2xl",
          md: "3xl"
        },
        children: (0, _v10.jsxs)(_v496.VStack, {
          spacing: {
            base: "xl",
            md: (0, _v84.rem)(80)
          },
          children: [(0, _v10.jsxs)(_v112.Grid, {
            gap: {
              base: "2xl",
              md: "0"
            },
            gridTemplateColumns: {
              base: "1fr",
              md: "repeat(6, 1fr)"
            },
            children: [(0, _v10.jsxs)(_v496.VStack, {
              align: "flex-start",
              display: "inline-flex",
              gridColumn: {
                base: "",
                md: "1 / span 2"
              },
              spacing: "md",
              children: [(0, _v10.jsx)(_v30.Text, {
                variant: "heading-xl",
                children: (0, _v31.translate)({
                  singular: "Get started for free",
                  dictionary: {
                    es: {
                      singular: "Probar gratis"
                    },
                    "de-DE": {
                      singular: "Gratis nutzen"
                    },
                    "fr-FR": {
                      singular: "Essayez"
                    },
                    "ja-JP": {
                      singular: "無料で始める"
                    },
                    "ko-KR": {
                      singular: "무료 시작"
                    },
                    "pt-BR": {
                      singular: "Comece grátis"
                    }
                  }
                })
              }), (0, _v10.jsxs)(_v496.VStack, {
                as: "ul",
                align: "flex-start",
                spacing: "sm",
                children: [(0, _v10.jsx)(_v83.Link, {
                  href: (0, _v498.buildUpgradePlanUrl)({
                    paywallTrigger: "footer_sign_up_widget_pricing_link",
                    paywallLocation: "footer",
                    paywallFeature: "general"
                  }),
                  children: (0, _v31.translate)({
                    singular: "Pricing",
                    dictionary: {
                      es: {
                        singular: "Precio"
                      },
                      "de-DE": {
                        singular: "Preise"
                      },
                      "fr-FR": {
                        singular: "Tarifs"
                      },
                      "ja-JP": {
                        singular: "料金"
                      },
                      "ko-KR": {
                        singular: "가격 책정"
                      },
                      "pt-BR": {
                        singular: "Preços"
                      },
                      "zh-CN": {
                        singular: "定价"
                      }
                    }
                  })
                }), (0, _v10.jsx)(_v83.Link, {
                  href: "/enterprise/contact-us",
                  children: (0, _v31.translate)({
                    singular: "Contact sales",
                    dictionary: {
                      es: {
                        singular: "Comunicarse con Ventas"
                      },
                      "de-DE": {
                        singular: "Sales-Team kontaktieren"
                      },
                      "fr-FR": {
                        singular: "Service commercial"
                      },
                      "ja-JP": {
                        singular: "営業チームへ問い合わせる"
                      },
                      "ko-KR": {
                        singular: "영업팀에 문의"
                      },
                      "pt-BR": {
                        singular: "Falar com vendas"
                      },
                      "zh-CN": {
                        singular: "联系销售"
                      }
                    }
                  })
                }), (0, _v10.jsx)(_v83.Link, {
                  href: "/watch-demo",
                  children: (0, _v31.translate)({
                    singular: "Watch demos",
                    dictionary: {
                      es: {
                        singular: "Ver demostraciones"
                      },
                      "de-DE": {
                        singular: "Demos ansehen"
                      },
                      "fr-FR": {
                        singular: "Regarder les démos"
                      },
                      "ja-JP": {
                        singular: "デモ版を視聴"
                      },
                      "ko-KR": {
                        singular: "데모 보기"
                      },
                      "pt-BR": {
                        singular: "Ver demonstrações"
                      },
                      "zh-CN": {
                        singular: "观看演示"
                      }
                    }
                  })
                })]
              }), _v2 || _v3 ? null : (0, _v10.jsx)(_v21.Button, {
                onClick: () => void _v0.push("/join"),
                rightIcon: (0, _v10.jsx)(_v105.ArrowRight, {}),
                size: "lg",
                children: (0, _v31.translate)({
                  singular: "Join",
                  dictionary: {
                    es: {
                      singular: "Unirse"
                    },
                    "de-DE": {
                      singular: "Registrieren"
                    },
                    "fr-FR": {
                      singular: "S'inscrire"
                    },
                    "ja-JP": {
                      singular: "登録"
                    },
                    "ko-KR": {
                      singular: "가입"
                    },
                    "pt-BR": {
                      singular: "Inscrever-se"
                    },
                    "zh-CN": {
                      singular: "加入"
                    }
                  }
                })
              })]
            }), (0, _v10.jsxs)(_v496.VStack, {
              align: "flex-start",
              display: "inline-flex",
              gridColumn: {
                base: "",
                md: "5 / span 2"
              },
              spacing: "md",
              children: [(0, _v10.jsx)(_v30.Text, {
                variant: "heading-md",
                children: (0, _v31.translate)({
                  singular: "24/7 customer support",
                  dictionary: {
                    es: {
                      singular: "Atención al cliente 24x7"
                    },
                    "de-DE": {
                      singular: "Wir sind 24/7 für Sie da"
                    },
                    "fr-FR": {
                      singular: "Assistance client 24 h/24 et 7 j/7"
                    },
                    "ja-JP": {
                      singular: "24時間年中無休のサポート"
                    },
                    "ko-KR": {
                      singular: "연중무휴 24시간 지원"
                    },
                    "pt-BR": {
                      singular: "Suporte ao cliente 24/7"
                    },
                    "zh-CN": {
                      singular: "全天候客户支持"
                    }
                  }
                })
              }), (0, _v10.jsx)(_v30.Text, {
                variant: "body-lg",
                children: (0, _v31.translate)({
                  singular: "Our customer support team is available to help 24/7. Enterprise members also receive dedicated account managers and a guaranteed uptime SLA.",
                  dictionary: {
                    es: {
                      singular: "Nuestro equipo de asistencia al cliente está disponible las 24 horas, los 7 días de la semana. Los miembros Enterprise también reciben gerentes de cuenta especializados y un SLA de tiempo de actividad garantizado."
                    },
                    "de-DE": {
                      singular: "Unser Kundensupport steht Ihnen rund um die Uhr zur Seite. Enterprise-Mitglieder profitieren außerdem von der Unterstützung durch dedizierte Kundenbetreuer und einem SLA für garantierte Verfügbarkeit."
                    },
                    "fr-FR": {
                      singular: "Notre équipe d'assistance client est disponible 24 h/24 et 7 j/7. Les membres Entreprise bénéficient également de l'aide d'un responsable de compte attitré et d'une disponibilité garantie."
                    },
                    "ja-JP": {
                      singular: "Vimeoのカスタマーサポートチームが24時間年中無休で対応します。Enterpriseメンバーには、専用のアカウントマネージャーがつき、保証された稼働時間SLAが提供されます。"
                    },
                    "ko-KR": {
                      singular: "연중무휴 24시간 고객 지원이 제공됩니다. Enterprise 회원에게는 전담 계정 관리자와 보장된 가동 시간 SLA 또한 제공합니다."
                    },
                    "pt-BR": {
                      singular: "Nossa equipe de suporte ao cliente está disponível para ajudar 24 horas por dia, 7 dias da semana. Quem assina o Enterprise também pode contar com uma equipe de gerentes de conta dedicada e um SLA de tempo de atividade garantido."
                    },
                    "zh-CN": {
                      singular: "我们的客户支持团队全天候提供帮助。我们还会向 Enterprise 计划用户提供专职客户经理以及保证正常运行时间的服务级别协议。"
                    }
                  }
                })
              }), (0, _v10.jsx)(_v21.Button, {
                as: _v104.default,
                href: "/help/contact",
                rightIcon: (0, _v10.jsx)(_v105.ArrowRight, {}),
                size: "lg",
                variant: "secondary",
                children: (0, _v31.translate)({
                  singular: "Contact support",
                  dictionary: {
                    es: {
                      singular: "Contactar al equipo de asistencia"
                    },
                    "de-DE": {
                      singular: "Support kontaktieren"
                    },
                    "fr-FR": {
                      singular: "Contacter l'assistance"
                    },
                    "ja-JP": {
                      singular: "サポートへのお問い合わせ"
                    },
                    "ko-KR": {
                      singular: "지원팀에 문의"
                    },
                    "pt-BR": {
                      singular: "Entre em contato com o suporte"
                    },
                    "zh-CN": {
                      singular: "联系支持团队"
                    }
                  }
                })
              })]
            })]
          }), (0, _v10.jsx)(_v497.Footer.Links, {}), (0, _v10.jsx)(_v497.Footer.Legal, {
            impressumQualifies: _v1?.impressumQualifies ?? !1,
            terminateContractQualifies: _v1?.terminateContractQualifies ?? !1
          })]
        })
      })
    });
  };
  var _v500 = _v0.i(0),
    _v501 = _v0.i(0),
    _v502 = _v0.i(0),
    _v503 = _v0.i(0),
    _v504 = _v0.i(0),
    _v505 = _v0.i(0),
    _v506 = _v0.i(0);
  let _v507 = (0, _v500.default)(async () => ({
      default: (await _v0.A(0)).LoginJoinModal
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v508 = () => {
      let _v0 = (0, _v20.useViewer)(),
        _v1 = null === _v0,
        _v2 = !!_v0?.user,
        _v3 = (0, _v505.useLoginJoinModalState)();
      return (0, _v10.jsx)(_v501.Navigation, {
        bgColor: "black",
        paddingX: "0",
        position: "sticky",
        top: "0",
        zIndex: "1100",
        children: (0, _v10.jsxs)(_v103, {
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          children: [(0, _v10.jsx)(_v501.Navigation.LeftContent, {
            children: (0, _v10.jsx)(_v83.Link, {
              "aria-label": (0, _v31.translate)({
                singular: "Go to Vimeo home page",
                dictionary: {
                  es: {
                    singular: "Ir a la página de inicio de Vimeo"
                  },
                  "de-DE": {
                    singular: "Zur Startseite von Vimeo"
                  },
                  "fr-FR": {
                    singular: "Aller à la page d'accueil Vimeo"
                  },
                  "ja-JP": {
                    singular: "Vimeoホームページに移動"
                  },
                  "ko-KR": {
                    singular: "Vimeo 홈페이지로 이동"
                  },
                  "pt-BR": {
                    singular: "Ir para a página inicial do Vimeo"
                  },
                  "zh-CN": {
                    singular: "前往 Vimeo 主页"
                  }
                }
              }),
              display: "flex",
              href: "/",
              variant: "secondary",
              children: (0, _v10.jsx)(_v506.default, {
                color: "text-primary",
                width: (0, _v84.rem)(78)
              })
            })
          }), (0, _v10.jsx)(_v501.Navigation.RightContent, {
            children: (0, _v10.jsxs)(_v504.LoginJoinModalContext.Provider, {
              value: _v3,
              children: [(0, _v10.jsx)(_v21.Button, {
                as: _v104.default,
                display: {
                  base: "none",
                  md: "inline-flex"
                },
                href: "/enterprise/contact-us",
                variant: "tertiary",
                children: (0, _v31.translate)({
                  singular: "Contact sales",
                  dictionary: {
                    es: {
                      singular: "Comunicarse con Ventas"
                    },
                    "de-DE": {
                      singular: "Sales-Team kontaktieren"
                    },
                    "fr-FR": {
                      singular: "Service commercial"
                    },
                    "ja-JP": {
                      singular: "営業チームへ問い合わせる"
                    },
                    "ko-KR": {
                      singular: "영업팀에 문의"
                    },
                    "pt-BR": {
                      singular: "Falar com vendas"
                    },
                    "zh-CN": {
                      singular: "联系销售"
                    }
                  }
                })
              }), !_v1 && !_v2 && (0, _v10.jsx)(_v503.Join, {}), (0, _v10.jsx)(_v502.AccountMenu, {
                hasThemeSupport: !1
              }), _v3.modal && (0, _v10.jsx)(_v507, {})]
            })
          })]
        })
      });
    };
  var _v509 = _v0.i(0);
  let _v510 = _v0 => Math.max(0, Math.min(1, _v0)),
    _v511 = {
      "--card-tilt-x": "0deg",
      "--card-tilt-y": "0deg",
      "--card-light-x": "50%",
      "--card-light-y": "50%",
      "--card-lift": "0px",
      backgroundColor: "rgba(190, 227, 248, 0.08)",
      transform: "perspective(1100px) rotateX(var(--card-tilt-x)) rotateY(var(--card-tilt-y)) translateZ(var(--card-lift))",
      transformStyle: "preserve-3d",
      transition: "transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.26s",
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        opacity: 0,
        pointerEvents: "none",
        transition: "opacity 0.2s"
      },
      "&::before": {
        background: "radial-gradient(460px circle at var(--card-light-x) var(--card-light-y), rgba(190, 227, 248, 0.16), rgba(190, 227, 248, 0.04) 36%, transparent 70%)"
      },
      "&::after": {
        boxShadow: "inset 0 0 0 1px rgba(190, 227, 248, 0.12)"
      },
      '&[data-active="true"]': {
        "--card-lift": "8px",
        boxShadow: "0 18px 32px rgba(0, 0, 0, 0.22)",
        transition: "transform 90ms ease-out, box-shadow 0.22s"
      },
      '&[data-active="true"]::before, &[data-active="true"]::after': {
        opacity: 1
      }
    },
    _v512 = {
      position: "relative",
      zIndex: 1,
      transform: "translateZ(10px)"
    },
    _v513 = ({
      pricing: _v0
    }) => {
      let _v1 = (0, _v15.useRef)(null),
        _v2 = (0, _v15.useCallback)(_v0 => {
          let _v1 = _v1.current;
          if (!_v1 || "touch" === _v0.pointerType) return;
          let _v2 = _v1.getBoundingClientRect(),
            _v3 = _v510((_v0.clientX - _v2.left) / _v2.width),
            _v4 = _v510((_v0.clientY - _v2.top) / _v2.height);
          _v1.style.setProperty("--card-tilt-x", `${(.5 - _v4) * 8}deg`), _v1.style.setProperty("--card-tilt-y", `${(_v3 - .5) * 10}deg`), _v1.style.setProperty("--card-light-x", `${100 * _v3}%`), _v1.style.setProperty("--card-light-y", `${100 * _v4}%`), _v1.dataset.active = "true";
        }, []),
        _v3 = (0, _v15.useCallback)(() => {
          let _v0 = _v1.current;
          _v0 && (_v0.style.setProperty("--card-tilt-x", "0deg"), _v0.style.setProperty("--card-tilt-y", "0deg"), delete _v0.dataset.active);
        }, []);
      return (0, _v10.jsx)(_v38.Flex, {
        ref: _v1,
        borderRadius: "16px",
        flex: {
          base: "0 0 auto",
          lg: "0 1 44.5%"
        },
        isolation: "isolate",
        maxW: "570px",
        padding: "24px 42px",
        position: "relative",
        sx: _v511,
        w: "100%",
        onPointerCancel: _v3,
        onPointerEnter: _v2,
        onPointerLeave: _v3,
        onPointerMove: _v2,
        children: (0, _v10.jsxs)(_v38.Flex, {
          direction: "column",
          flex: "1",
          justify: "space-between",
          sx: _v512,
          children: [(0, _v10.jsxs)(_v16.Box, {
            children: [(0, _v10.jsx)(_v30.Text, {
              fontFamily: "heading",
              fontSize: {
                base: "17px",
                md: "20px"
              },
              letterSpacing: {
                base: "-0.6px",
                md: "-0.8px"
              },
              lineHeight: {
                base: "24px",
                md: "28px"
              },
              children: (0, _v31.translate)({
                singular: "Vimeo Professional  x  Indie Program",
                dictionary: {
                  "de-DE": {
                    singular: "Vimeo Professional  x  Indie‑Programm"
                  }
                }
              })
            }), (0, _v10.jsx)(_v38.Flex, {
              align: "baseline",
              gap: "md",
              mt: "15px",
              children: _v0 ? (0, _v10.jsxs)(_v10.Fragment, {
                children: [(0, _v10.jsx)(_v30.Text, {
                  fontFamily: "heading",
                  fontSize: {
                    base: "66px",
                    md: "90px"
                  },
                  letterSpacing: {
                    base: "-5px",
                    md: "-7.5px"
                  },
                  lineHeight: {
                    base: "73px",
                    md: "100px"
                  },
                  children: _v0.indieMonthly
                }), (0, _v10.jsx)(_v30.Text, {
                  color: "#7e8894",
                  fontSize: {
                    base: "24px",
                    md: "32px"
                  },
                  letterSpacing: "-0.4px",
                  lineHeight: "22.95px",
                  textDecoration: "line-through",
                  children: _v0.listMonthly
                }), (0, _v10.jsx)(_v30.Text, {
                  color: "text-secondary",
                  fontSize: {
                    base: "18px",
                    md: "22px"
                  },
                  letterSpacing: "-0.4px",
                  lineHeight: "29.7px",
                  children: (0, _v31.translate)({
                    singular: "/ month",
                    dictionary: {
                      es: {
                        singular: "/ mes"
                      },
                      "de-DE": {
                        singular: "/ Monat"
                      },
                      "fr-FR": {
                        singular: "/ mois"
                      },
                      "ja-JP": {
                        singular: "/月"
                      },
                      "pt-BR": {
                        singular: "/ mês"
                      },
                      "zh-CN": {
                        singular: "/ 月"
                      }
                    }
                  })
                })]
              }) : (0, _v10.jsx)(_v64.Skeleton, {
                borderRadius: "md",
                h: {
                  base: "73px",
                  md: "100px"
                },
                w: {
                  base: "11rem",
                  md: "13rem"
                }
              })
            })]
          }), (0, _v10.jsxs)(_v38.Flex, {
            direction: "column",
            gap: "md",
            children: [(0, _v10.jsx)(_v30.Text, {
              fontSize: "14px",
              letterSpacing: "-0.35px",
              lineHeight: "20px",
              children: (0, _v31.translate)({
                singular: "{included} seats included · Up to {maximum}",
                replacements: {
                  included: _v33.CORE_PLAN.includedSeats,
                  maximum: _v33.CORE_PLAN.maximumSeats
                },
                dictionary: {
                  es: {
                    singular: "{included} asientos incluidos · Hasta {maximum}"
                  },
                  "de-DE": {
                    singular: "{included} Plätze inklusive · Bis zu {maximum}"
                  },
                  "fr-FR": {
                    singular: "{included} sièges inclus · Jusqu'à {maximum}"
                  },
                  "ja-JP": {
                    singular: "{included}席が含まれます · 最大{maximum}"
                  },
                  "ko-KR": {
                    singular: "{included}석 포함 · 최대 {maximum}"
                  },
                  "pt-BR": {
                    singular: "{included} assentos incluídos · Até {maximum}"
                  },
                  "zh-CN": {
                    singular: "{included} 个席位包含 · 最多 {maximum}"
                  }
                }
              })
            }), _v0 ? (0, _v10.jsx)(_v30.Text, {
              color: "#7e8894",
              fontSize: "13px",
              letterSpacing: "-0.4px",
              lineHeight: "18.2px",
              children: (0, _v31.translate)({
                singular: "{discount}% off · {price}/year, billed annually.",
                replacements: {
                  discount: _v0.discountPercent,
                  price: _v0.indieAnnual
                },
                dictionary: {
                  es: {
                    singular: "{discount}% de descuento · {price}/año, facturado anualmente."
                  },
                  "de-DE": {
                    singular: "{discount}% Rabatt · {price}/Jahr, jährlich abgerechnet."
                  },
                  "fr-FR": {
                    singular: "{discount}% de réduction · {price}/an, facturé annuellement."
                  },
                  "ja-JP": {
                    singular: "{discount}% オフ · {price}/年、年額請求"
                  },
                  "ko-KR": {
                    singular: "{discount}% 할인 · 연 {price}, 연간 청구"
                  },
                  "pt-BR": {
                    singular: "{discount}% de desconto · {price}/ano, cobrado anualmente."
                  },
                  "zh-CN": {
                    singular: "{discount}% 折扣 · {price}/年，按年计费。"
                  }
                }
              })
            }) : (0, _v10.jsx)(_v64.Skeleton, {
              h: "18.2px",
              w: "160px"
            })]
          })]
        })
      });
    },
    _v514 = [{
      title: (0, _v31.translate)({
        singular: "Unlimited public storage and bandwidth",
        dictionary: {
          es: {
            singular: "Almacenamiento y ancho de banda públicos ilimitados"
          },
          "de-DE": {
            singular: "Unbegrenzter öffentlicher Speicherplatz und Bandbreite"
          },
          "fr-FR": {
            singular: "Stockage public illimité et bande passante illimitée"
          },
          "ja-JP": {
            singular: "無制限の公開ストレージと帯域幅"
          },
          "ko-KR": {
            singular: "공개 저장 공간 및 대역폭 무제한"
          },
          "pt-BR": {
            singular: "Armazenamento público e largura de banda ilimitados"
          },
          "zh-CN": {
            singular: "无限公共存储和带宽"
          }
        }
      }),
      description: (0, _v31.translate)({
        singular: "7 TB managed storage.",
        dictionary: {
          es: {
            singular: "7 TB de almacenamiento gestionado."
          },
          "de-DE": {
            singular: "7 TB verwalteter Speicher."
          },
          "fr-FR": {
            singular: "7 TB de stockage géré."
          },
          "ja-JP": {
            singular: "7 TB の管理済みストレージ."
          },
          "ko-KR": {
            singular: "7 TB 관리형 스토리지."
          },
          "pt-BR": {
            singular: "7 TB de armazenamento gerenciado."
          },
          "zh-CN": {
            singular: "7 TB 托管存储."
          }
        }
      }),
      Icon: _v86.Database
    }, {
      title: (0, _v31.translate)({
        singular: "Share with confidence",
        dictionary: {
          es: {
            singular: "Comparte con confianza"
          },
          "de-DE": {
            singular: "Mit Vertrauen teilen"
          },
          "fr-FR": {
            singular: "Partagez en toute confiance"
          },
          "ja-JP": {
            singular: "安心して共有する"
          },
          "ko-KR": {
            singular: "안심하고 공유하세요"
          },
          "pt-BR": {
            singular: "Compartilhe com confiança"
          },
          "zh-CN": {
            singular: "放心分享"
          }
        }
      }),
      description: (0, _v31.translate)({
        singular: "Unlisted links, embed-only videos and domain-level embed privacy.",
        dictionary: {
          es: {
            singular: "Enlaces no listados, vídeos solo para incrustar y privacidad de incrustación a nivel de dominio."
          },
          "de-DE": {
            singular: "Nicht gelistete Links, nur per Einbettung abspielbare Videos und Einbettungs‑Privatsphäre auf Domain‑Ebene."
          },
          "fr-FR": {
            singular: "Liens non répertoriés, vidéos uniquement intégrables et confidentialité d'intégration au niveau du domaine."
          },
          "ja-JP": {
            singular: "非公開リンク、埋め込み専用動画、ドメインレベルの埋め込みプライバシー。"
          },
          "ko-KR": {
            singular: "비공개(목록 제외) 링크, 임베드 전용 비디오 및 도메인 수준 임베드 개인정보 설정."
          },
          "pt-BR": {
            singular: "Links não listados, vídeos apenas incorporáveis e privacidade de incorporação a nível de domínio."
          },
          "zh-CN": {
            singular: "非公开链接、仅可嵌入的视频及域名级别嵌入隐私设置。"
          }
        }
      }),
      Icon: _v509.Lock
    }, {
      title: (0, _v31.translate)({
        singular: "2 TB/mo managed bandwidth",
        dictionary: {
          es: {
            singular: "2 TB/mes de ancho de banda gestionado"
          },
          "de-DE": {
            singular: "2 TB/Monat verwaltete Bandbreite"
          },
          "fr-FR": {
            singular: "2 TB/mo de bande passante gérée"
          },
          "ja-JP": {
            singular: "2 TB/月 の管理帯域幅"
          },
          "ko-KR": {
            singular: "2 TB/월 관리형 대역폭"
          },
          "pt-BR": {
            singular: "2 TB/mês de largura de banda gerenciada"
          },
          "zh-CN": {
            singular: "每月 2 TB 托管带宽"
          }
        }
      }),
      description: (0, _v31.translate)({
        singular: "Stream and share your films with your audience.",
        dictionary: {
          es: {
            singular: "Transmite y comparte tus películas con tu audiencia."
          },
          "de-DE": {
            singular: "Streamen und teilen Sie Ihre Filme mit Ihrem Publikum."
          },
          "fr-FR": {
            singular: "Diffusez et partagez vos films avec votre public."
          },
          "ja-JP": {
            singular: "作品をストリーミングして観客と共有しましょう。"
          },
          "ko-KR": {
            singular: "영화를 스트리밍하고 관객과 공유하세요."
          },
          "pt-BR": {
            singular: "Transmita e compartilhe seus filmes com seu público."
          },
          "zh-CN": {
            singular: "向观众流式播放并分享您的影片。"
          }
        }
      }),
      Icon: _v88.Speedometer
    }],
    _v515 = ({
      pricing: _v0
    }) => (0, _v10.jsx)(_v16.Box, {
      as: "section",
      bg: "surface",
      pb: {
        base: "3xl",
        md: "122px"
      },
      pt: {
        base: "3xl",
        md: "112px"
      },
      children: (0, _v10.jsxs)(_v103, {
        children: [(0, _v10.jsxs)(_v30.Text, {
          as: "h2",
          fontSize: {
            base: "heading-xl",
            md: "54px"
          },
          variant: {
            base: "heading-xl",
            md: "heading-3xl"
          },
          children: [(0, _v31.translate)({
            singular: "Everything your film needs.",
            dictionary: {
              es: {
                singular: "Todo lo que necesita tu película."
              },
              "de-DE": {
                singular: "Alles, was Ihr Film braucht."
              },
              "fr-FR": {
                singular: "Tout ce dont votre film a besoin."
              },
              "ja-JP": {
                singular: "あなたの作品に必要なすべて。"
              },
              "ko-KR": {
                singular: "영화에 필요한 모든 것."
              },
              "pt-BR": {
                singular: "Tudo que seu filme precisa."
              },
              "zh-CN": {
                singular: "您的影片所需的一切。"
              }
            }
          }), (0, _v10.jsx)("br", {}), (0, _v31.translate)({
            singular: "None of what it doesn’t.",
            dictionary: {
              "fr-FR": {
                singular: "Rien de ce qui n'est pas nécessaire."
              },
              "ko-KR": {
                singular: "그렇지 않은 것은 아무것도 아닙니다."
              }
            }
          })]
        }), (0, _v10.jsxs)(_v38.Flex, {
          align: "stretch",
          direction: {
            base: "column",
            lg: "row"
          },
          gap: {
            base: "xl",
            lg: "2xl"
          },
          justify: "space-between",
          mt: {
            base: "xl",
            md: "800"
          },
          children: [(0, _v10.jsx)(_v513, {
            pricing: _v0
          }), (0, _v10.jsx)(_v38.Flex, {
            direction: "column",
            flex: {
              base: "0 0 auto",
              lg: "1 1 0"
            },
            justify: "center",
            minW: "0",
            pt: {
              base: "0",
              lg: "lg"
            },
            w: "100%",
            children: _v514.map(({
              title: _v0,
              description: _v1,
              Icon: _v2
            }) => (0, _v10.jsxs)(_v38.Flex, {
              _last: {
                borderBottomWidth: 0
              },
              align: "flex-start",
              borderBottomWidth: "1px",
              borderColor: "stroke",
              gap: "5",
              py: "lg",
              children: [(0, _v10.jsx)(_v38.Flex, {
                align: "center",
                bg: "rgba(190, 227, 248, 0.08)",
                borderRadius: "md",
                boxSize: "lg",
                flex: "0 0 auto",
                justify: "center",
                children: (0, _v10.jsx)(_v2, {
                  "aria-hidden": "true",
                  boxSize: "xs",
                  color: "text-primary"
                })
              }), (0, _v10.jsxs)(_v16.Box, {
                flex: "1",
                minW: "0",
                children: [(0, _v10.jsx)(_v30.Text, {
                  fontFamily: "heading",
                  fontSize: {
                    base: "20px",
                    md: "22px"
                  },
                  letterSpacing: {
                    base: "-0.6px",
                    md: "-0.77px"
                  },
                  lineHeight: {
                    base: "25px",
                    md: "25.3px"
                  },
                  children: _v0
                }), (0, _v10.jsx)(_v30.Text, {
                  color: "text-secondary",
                  fontSize: "16px",
                  letterSpacing: "-0.4px",
                  lineHeight: "20.8px",
                  mt: "7px",
                  children: _v1
                })]
              })]
            }, _v0))
          })]
        })]
      })
    });
  var _v516 = _v0.i(0),
    _v517 = _v0.i(0),
    _v518 = _v0.i(0),
    _v519 = _v0.i(0);
  let _v520 = "indie-program:apply";
  var _v521 = _v0.i(0);
  let _v522 = () => {
    let {
        claim: _v0,
        isIndieAvailable: _v1,
        isOpen: _v2,
        onClose: _v3
      } = (() => {
        let {
            isOpen: _v0,
            onOpen: _v1,
            onClose: _v2
          } = (0, _v516.useDisclosure)(),
          _v3 = (0, _v15.useContext)(_v517.ViewerContext),
          {
            canClaim: _v4,
            isLoading: _v5,
            sample: _v6
          } = (() => {
            let _v0 = (0, _v519.useOrionSetting)("indie_program_enrollment"),
              _v1 = (0, _v518.useOrionLoading)(),
              [_v2, _v3] = (0, _v15.useState)(!1),
              _v4 = (0, _v15.useCallback)(() => {
                _v1 || _v3("open" === _v0);
              }, [_v0, _v1]);
            return {
              canClaim: _v2,
              isLoading: _v1,
              sample: _v4
            };
          })(),
          _v7 = (0, _v15.useRef)(!1),
          _v8 = (0, _v15.useCallback)(() => {
            try {
              window.sessionStorage.removeItem(_v520);
            } catch {}
            _v6(), _v1();
          }, [_v1, _v6]),
          _v9 = (0, _v15.useCallback)(() => {
            if (!_v3?.user) {
              try {
                window.sessionStorage.setItem(_v520, "1");
              } catch {}
              let _v0 = new URL(window.location.href);
              window.location.href = `/log_in?redirect=${encodeURIComponent(`${_v0.pathname}${_v0.search}`)}`;
              return;
            }
            if (_v5) {
              _v7.current = !0;
              return;
            }
            _v8();
          }, [_v5, _v8, _v3]);
        return (0, _v15.useEffect)(() => {
          _v7.current && !_v5 && (_v7.current = !1, _v8());
        }, [_v5, _v8]), (0, _v15.useEffect)(() => {
          if (_v3?.user != null && !_v5) {
            try {
              if (null === window.sessionStorage.getItem(_v520)) return;
            } catch {
              return;
            }
            _v8();
          }
        }, [_v5, _v8, _v3]), {
          claim: _v9,
          isIndieAvailable: _v4,
          isOpen: _v0,
          onClose: _v2
        };
      })(),
      _v4 = (0, _v521.useIndiePricing)(),
      _v5 = (0, _v20.useViewer)(),
      [_v6] = (0, _v15.useState)(_v18),
      {
        trackCtaClicked: _v7
      } = _v19(_v6),
      _v8 = _v5?.user ? "signed_in" : "signed_out",
      _v9 = (0, _v15.useCallback)(() => {
        _v7({
          location: "hero",
          authStatus: _v8
        }), _v0();
      }, [_v8, _v0, _v7]),
      _v10 = (0, _v15.useCallback)(() => {
        _v7({
          location: "closing",
          authStatus: _v8
        }), _v0();
      }, [_v8, _v0, _v7]),
      _v11 = !_v5?.isFromCopyrightRestrictedRegion && !_v5?.isSimplifiedSite;
    return (0, _v10.jsxs)(_v16.Box, {
      bg: "black",
      color: "text-primary",
      overflowX: "clip",
      children: [(0, _v10.jsx)(_v508, {}), (0, _v10.jsxs)(_v16.Box, {
        as: "main",
        children: [(0, _v10.jsx)(_v491, {
          onClaim: _v9
        }), (0, _v10.jsx)(_v494, {}), (0, _v10.jsx)(_v515, {
          pricing: _v4
        }), (0, _v10.jsx)(_v493, {}), _v11 && (0, _v10.jsx)(_v116, {}), (0, _v10.jsx)(_v123, {}), (0, _v10.jsx)(_v111, {
          onClaim: _v10
        })]
      }), (0, _v10.jsx)(_v499, {}), _v1 ? _v5?.user ? (0, _v10.jsx)(_v102, {
        flowId: _v6,
        isOpen: _v2,
        onClose: _v3,
        pricing: _v4
      }) : null : (0, _v10.jsx)(_v34, {
        flowId: _v6,
        isOpen: _v2,
        onClose: _v3
      })]
    });
  };
  (0, _v13.withPageSetup)(() => {
    let _v0 = _v9.default.env.ENVIRONMENT?.startsWith("ci-") ?? !1;
    return "production" !== (0, _v12.default)() || _v0 ? {
      props: {
        forceTheme: "dark",
        isThemePersistent: !1
      }
    } : {
      notFound: !0
    };
  }, {
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => (0, _v10.jsxs)(_v10.Fragment, {
    children: [(0, _v10.jsxs)(_v11.default, {
      children: [(0, _v10.jsx)("title", {
        children: (0, _v14.translate)("Indie Program")
      }), (0, _v10.jsx)("meta", {
        name: "description",
        content: (0, _v14.translate)({
          singular: "An exclusive discount on Vimeo Professional for independent filmmakers and creators.",
          dictionary: {
            es: {
              singular: "Un descuento exclusivo en Vimeo Professional para cineastas independientes y creadores."
            },
            "de-DE": {
              singular: "Ein exklusiver Rabatt auf Vimeo Professional für unabhängige Filmemacher und Kreative."
            },
            "fr-FR": {
              singular: "Une remise exclusive sur Vimeo Professional pour les cinéastes et les créateurs indépendants."
            },
            "ja-JP": {
              singular: "独立系の映画製作者およびクリエイター向けのVimeo Professional限定割引."
            },
            "ko-KR": {
              singular: "독립 영화 제작자 및 크리에이터를 위한 Vimeo Professional 전용 할인."
            },
            "pt-BR": {
              singular: "Um desconto exclusivo no Vimeo Professional para cineastas independentes e criadores."
            },
            "zh-CN": {
              singular: "为独立电影制作人和创作者提供的 Vimeo Professional 专属折扣。"
            }
          }
        })
      })]
    }), (0, _v10.jsx)(_v522, {})]
  })], 0);
}