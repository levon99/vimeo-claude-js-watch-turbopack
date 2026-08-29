{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
    NOT_ALLOWED: "notAllowed",
    USER_QUOTA: "userQuota",
    CHAT_GPT_QUOTA: "chatGptQuota",
    INTERNAL: "internal",
    INTERNAL_INTERRUPTED: "internalInterrupted"
  };
  _v0.s(["EScriptGenerationError", 0, _v2], 0);
  let _v3 = {
    editorPlaceholder: (0, _v1.translate)({
      singular: "Copy and paste or type a script",
      dictionary: {
        es: {
          singular: "Copie y pegue o escriba un guion"
        },
        "de-DE": {
          singular: "Kopieren und einfügen oder ein Skript eingeben"
        },
        "fr-FR": {
          singular: "Copiez et collez ou tapez un script"
        },
        "ja-JP": {
          singular: "スクリプトをコピーして貼り付けるか入力する"
        },
        "ko-KR": {
          singular: "스크립트 복사하여 붙여넣기 또는 입력"
        },
        "pt-BR": {
          singular: "Copie e cole ou digite um roteiro"
        },
        "zh-CN": {
          singular: "复制并粘贴或键入脚本"
        }
      }
    }),
    dictationBasedScroll: (0, _v1.translate)({
      singular: "Auto",
      dictionary: {
        es: {
          singular: "Automático"
        },
        "de-DE": {
          singular: "Automatisch"
        },
        "ja-JP": {
          singular: "自動"
        },
        "ko-KR": {
          singular: "자동"
        },
        "pt-BR": {
          singular: "Automático"
        },
        "zh-CN": {
          singular: "自动"
        }
      }
    }),
    speedOff: (0, _v1.translate)({
      singular: "Off",
      dictionary: {
        es: {
          singular: "Desactivado"
        },
        "de-DE": {
          singular: "Aus"
        },
        "fr-FR": {
          singular: "Désactivé"
        },
        "ja-JP": {
          singular: "オフ"
        },
        "ko-KR": {
          singular: "꺼짐"
        },
        "pt-BR": {
          singular: "Desligado"
        },
        "zh-CN": {
          singular: "关闭"
        }
      }
    }),
    script: {
      editor: {
        stopGenerationButton: (0, _v1.translate)({
          singular: "Stop generating",
          dictionary: {
            es: {
              singular: "Dejar de generar"
            },
            "de-DE": {
              singular: "Erzeugen beenden"
            },
            "fr-FR": {
              singular: "Arrêter la génération"
            },
            "ja-JP": {
              singular: "生成を停止する"
            },
            "ko-KR": {
              singular: "생성 중지"
            },
            "pt-BR": {
              singular: "Parar de gerar"
            },
            "zh-CN": {
              singular: "停止生成"
            }
          }
        })
      },
      generate: {
        promptPlaceholder: (0, _v1.translate)({
          singular: "Ask AI to write a script for you",
          dictionary: {
            es: {
              singular: "Pídale a la IA que le escriba un guion"
            },
            "de-DE": {
              singular: "Bitten Sie AI, ein Skript für Sie zu schreiben"
            },
            "fr-FR": {
              singular: "Demandez à l'IA d'écrire un script pour vous"
            },
            "ja-JP": {
              singular: "AIにスクリプトを書いてもらう"
            },
            "ko-KR": {
              singular: "AI에게 스크립트 작성 요청하기"
            },
            "pt-BR": {
              singular: "Peça à IA para escrever um roteiro para você"
            },
            "zh-CN": {
              singular: "让 AI 为您编写脚本"
            }
          }
        }),
        errors: {
          [_v2.CHAT_GPT_QUOTA]: {
            text: (0, _v1.translate)({
              singular: "Our AI script generator is busy. Try again in a minute.",
              dictionary: {
                es: {
                  singular: "Nuestro generador de guiones basado en IA está ocupado. Inténtalo de nuevo en un minuto."
                },
                "de-DE": {
                  singular: "Unser KI-Skript-Generator ist beschäftigt. Bitte versuche es in einer Minute nochmal."
                },
                "fr-FR": {
                  singular: "Notre générateur de scripts optimisé par l'IA n'est pas disponible. Veuillez réessayer dans une minute."
                },
                "ja-JP": {
                  singular: "AIスクリプトジェネレーターが混み合っています。数分後に再度お試しください。"
                },
                "ko-KR": {
                  singular: "AI 스크립트 작성기가 사용 중입니다. 잠시 후 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Nosso gerador de roteiros de IA está ocupado. Tente novamente em alguns minutos."
                },
                "zh-CN": {
                  singular: "我们的 AI 文稿生成器很忙。请一分钟后再试。"
                }
              }
            })
          },
          [_v2.INTERNAL]: {
            text: (0, _v1.translate)({
              singular: "Something went wrong. Please try again later.",
              dictionary: {
                es: {
                  singular: "Se produjo un error. Vuelve a intentarlo más tarde."
                },
                "de-DE": {
                  singular: "Hier ist etwas schiefgelaufen. Bitte versuche es später erneut."
                },
                "fr-FR": {
                  singular: "Une erreur s'est produite. Veuillez réessayer plus tard."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。しばらくしてからもう一度お試しください。"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다. 나중에 다시 시도하세요"
                },
                "pt-BR": {
                  singular: "Algo deu errado. Tente novamente mais tarde."
                },
                "zh-CN": {
                  singular: "出错了。请稍后再试。"
                }
              }
            })
          },
          [_v2.INTERNAL_INTERRUPTED]: {
            text: (0, _v1.translate)({
              singular: "Something went wrong while preparing your script. Try again later.",
              dictionary: {
                es: {
                  singular: "Ocurrió un error al preparar tu guion. Vuelve a intentarlo más tarde."
                },
                "de-DE": {
                  singular: "Bei der Erstellung deines Skripts ist etwas schiefgelaufen. Versuche es später noch einmal."
                },
                "fr-FR": {
                  singular: "Une erreur s'est produite lors de la préparation de votre script. Veuillez réessayer plus tard."
                },
                "ja-JP": {
                  singular: "スクリプトの準備中に問題が発生しました。しばらくしてから、再試行してください。"
                },
                "ko-KR": {
                  singular: "스크립트를 준비하는 동안 문제가 발생했습니다. 나중에 다시 시도하세요."
                },
                "pt-BR": {
                  singular: "Algo deu errado ao preparar seu roteiro. Tente novamente mais tarde."
                },
                "zh-CN": {
                  singular: "准备脚本时出错。请稍后再试。"
                }
              }
            })
          },
          [_v2.NOT_ALLOWED]: {
            text: (0, _v1.translate)({
              singular: "Something went wrong. Try again later.",
              dictionary: {
                es: {
                  singular: "Se produjo un error. Vuelve a intentarlo más tarde."
                },
                "de-DE": {
                  singular: "Hier ist etwas schiefgelaufen. Versuche es später noch einmal."
                },
                "fr-FR": {
                  singular: "Une erreur s'est produite. Veuillez réessayer plus tard."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。しばらくしてから、再試行してください。"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다. 나중에 다시 시도하세요."
                },
                "pt-BR": {
                  singular: "Algo deu errado. Tente novamente mais tarde."
                },
                "zh-CN": {
                  singular: "出错了。请稍后再试。"
                }
              }
            })
          },
          [_v2.USER_QUOTA]: {
            text: (0, _v1.translate)({
              singular: "You’ve reached the maximum number of scripts you can request per minute. Try again in a minute.",
              dictionary: {
                es: {
                  singular: "Has alcanzado el número máximo de guiones que puedes solicitar por minuto. Inténtalo de nuevo en un minuto."
                },
                "de-DE": {
                  singular: "Du hast die maximale Anzahl von Skripten erreicht, die du pro Minute anfordern kannst. Bitte versuche es in einer Minute nochmal."
                },
                "fr-FR": {
                  singular: "Vous avez atteint le nombre maximum de scripts que vous pouvez demander par minute. Veuillez réessayer dans une minute."
                },
                "ja-JP": {
                  singular: "1分あたりにリクエストできるスクリプトの上限数に達しました。数分後に再度お試しください。"
                },
                "ko-KR": {
                  singular: "분당 요청할 수 있는 최대 스크립트 수에 도달했습니다. 잠시 후 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Você atingiu o número máximo de roteiros que pode solicitar por minuto. Tente novamente em alguns minutos."
                },
                "zh-CN": {
                  singular: "您已达到每分钟可以请求的最大脚本数。请一分钟后再试。"
                }
              }
            })
          }
        }
      },
      promptConfigurator: {
        duration: {
          label: (0, _v1.translate)({
            singular: "Duration",
            dictionary: {
              es: {
                singular: "Duración"
              },
              "de-DE": {
                singular: "Dauer"
              },
              "fr-FR": {
                singular: "Durée "
              },
              "ja-JP": {
                singular: "期間"
              },
              "ko-KR": {
                singular: "길이"
              },
              "pt-BR": {
                singular: "Duração"
              },
              "zh-CN": {
                singular: "时长"
              }
            }
          }),
          options: {
            short: (0, _v1.translate)({
              singular: "Short",
              dictionary: {
                es: {
                  singular: "Corto"
                },
                "de-DE": {
                  singular: "Kurz"
                },
                "fr-FR": {
                  singular: "Court"
                },
                "ja-JP": {
                  singular: "短編"
                },
                "ko-KR": {
                  singular: "단편"
                },
                "pt-BR": {
                  singular: "Curto"
                },
                "zh-CN": {
                  singular: "短"
                }
              }
            }),
            medium: (0, _v1.translate)({
              singular: "Medium",
              dictionary: {
                es: {
                  singular: "Mediano"
                },
                "de-DE": {
                  singular: "Mittel"
                },
                "fr-FR": {
                  singular: "Mate"
                },
                "ja-JP": {
                  singular: "ミディアム"
                },
                "ko-KR": {
                  singular: "중간"
                },
                "pt-BR": {
                  singular: "Médio"
                },
                "zh-CN": {
                  singular: "中"
                }
              }
            }),
            long: (0, _v1.translate)({
              singular: "Long",
              dictionary: {
                es: {
                  singular: "Largo"
                },
                "de-DE": {
                  singular: "Lang"
                },
                "ja-JP": {
                  singular: "長編"
                },
                "ko-KR": {
                  singular: "장편"
                },
                "pt-BR": {
                  singular: "Longo"
                },
                "zh-CN": {
                  singular: "长"
                }
              }
            })
          }
        },
        tone: {
          label: (0, _v1.translate)({
            singular: "Tone",
            dictionary: {
              es: {
                singular: "Tono"
              },
              "de-DE": {
                singular: "Ton"
              },
              "fr-FR": {
                singular: "Ton"
              },
              "ja-JP": {
                singular: "口調"
              },
              "ko-KR": {
                singular: "어조"
              },
              "pt-BR": {
                singular: "Sinal"
              },
              "zh-CN": {
                singular: "语气"
              }
            }
          }),
          options: {
            funny: (0, _v1.translate)({
              singular: "Funny",
              dictionary: {
                es: {
                  singular: "Divertido"
                },
                "de-DE": {
                  singular: "Lustig"
                },
                "fr-FR": {
                  singular: "Amusant"
                },
                "ja-JP": {
                  singular: "面白い"
                },
                "ko-KR": {
                  singular: "재밌는"
                },
                "pt-BR": {
                  singular: "Divertido"
                },
                "zh-CN": {
                  singular: "有趣"
                }
              }
            }),
            formal: (0, _v1.translate)({
              singular: "Formal",
              dictionary: {
                "fr-FR": {
                  singular: "Formel"
                },
                "ja-JP": {
                  singular: "丁寧"
                },
                "ko-KR": {
                  singular: "정중한"
                },
                "zh-CN": {
                  singular: "正式"
                }
              }
            }),
            casual: (0, _v1.translate)({
              singular: "Casual",
              dictionary: {
                "ja-JP": {
                  singular: "カジュアル"
                },
                "ko-KR": {
                  singular: "캐주얼"
                },
                "zh-CN": {
                  singular: "随意"
                }
              }
            }),
            direct: (0, _v1.translate)({
              singular: "Direct",
              dictionary: {
                es: {
                  singular: "Directo"
                },
                "de-DE": {
                  singular: "Direkt"
                },
                "ja-JP": {
                  singular: "率直"
                },
                "ko-KR": {
                  singular: "솔직한"
                },
                "pt-BR": {
                  singular: "Direto"
                },
                "zh-CN": {
                  singular: "直接"
                }
              }
            }),
            confident: (0, _v1.translate)({
              singular: "Confident",
              dictionary: {
                es: {
                  singular: "Seguro"
                },
                "de-DE": {
                  singular: "Selbstbewusst"
                },
                "fr-FR": {
                  singular: "Confiant"
                },
                "ja-JP": {
                  singular: "自信に満ちた"
                },
                "ko-KR": {
                  singular: "자신감 있는"
                },
                "pt-BR": {
                  singular: "Confiante"
                },
                "zh-CN": {
                  singular: "自信"
                }
              }
            }),
            inspiring: (0, _v1.translate)({
              singular: "Inspiring",
              dictionary: {
                es: {
                  singular: "Inspirador"
                },
                "de-DE": {
                  singular: "Inspirierend"
                },
                "fr-FR": {
                  singular: "Inspirant"
                },
                "ja-JP": {
                  singular: "鼓舞する"
                },
                "ko-KR": {
                  singular: "영감을 주는"
                },
                "pt-BR": {
                  singular: "Inspirador"
                },
                "zh-CN": {
                  singular: "鼓舞人心"
                }
              }
            })
          }
        }
      }
    },
    survey: {
      placeholder: (0, _v1.translate)({
        singular: "What do you like about the generated script?",
        dictionary: {
          es: {
            singular: "¿Qué le gusta del guion que se generó?"
          },
          "de-DE": {
            singular: "Was gefällt dir an dem erstellten Skript?"
          },
          "fr-FR": {
            singular: "Qu'est-ce qui vous plaît dans le script généré ?"
          },
          "ja-JP": {
            singular: "生成されたスクリプトについて気に入っている点は何ですか？"
          },
          "ko-KR": {
            singular: "생성된 스크립트에서 어떤 점이 마음에 드시나요?"
          },
          "pt-BR": {
            singular: "Fale mais sobre o que você gostou do roteiro gerado"
          },
          "zh-CN": {
            singular: "喜欢生成的这个脚本吗？"
          }
        }
      }),
      header: (0, _v1.translate)({
        singular: "Provide additional feedback",
        dictionary: {
          es: {
            singular: "Proporcione información adicional"
          },
          "de-DE": {
            singular: "Zusätzliches Feedback geben"
          },
          "fr-FR": {
            singular: "Fournir des commentaires supplémentaires"
          },
          "ja-JP": {
            singular: "フィードバックをさらに提供する"
          },
          "ko-KR": {
            singular: "추가 피드백 제공"
          },
          "pt-BR": {
            singular: "Forneça mais comentários"
          },
          "zh-CN": {
            singular: "提供更多反馈"
          }
        }
      }),
      button: (0, _v1.translate)({
        singular: "Submit",
        dictionary: {
          es: {
            singular: "Enviar"
          },
          "de-DE": {
            singular: "Senden"
          },
          "fr-FR": {
            singular: "Envoyer"
          },
          "ja-JP": {
            singular: "送信"
          },
          "ko-KR": {
            singular: "제출"
          },
          "pt-BR": {
            singular: "Enviar"
          },
          "zh-CN": {
            singular: "提交"
          }
        }
      })
    },
    upgradeUpsell: {
      heading: (0, _v1.translate)({
        singular: "Save time and perfect your recordings with our AI-powered toolset",
        dictionary: {
          es: {
            singular: "Ahorre tiempo y perfeccione sus grabaciones con nuestro conjunto de herramientas basadas en IA"
          },
          "de-DE": {
            singular: "Sparen Sie Zeit und perfektionieren Sie Ihre Aufnahmen mit unserem KI-gestützten Toolset"
          },
          "fr-FR": {
            singular: "Gagnez du temps et perfectionnez vos enregistrements grâce à notre ensemble d'outils optimisés par l'IA."
          },
          "ja-JP": {
            singular: "AIを活用したツールセットで時間を節約し、録画を完璧に"
          },
          "ko-KR": {
            singular: "AI 기반 도구 세트로 시간을 절약하고 완벽한 녹화본을 만드세요."
          },
          "pt-BR": {
            singular: "Economize tempo e aperfeiçoe suas gravações usando nosso conjunto de ferramentas com IA"
          },
          "zh-CN": {
            singular: "利用 AI 驱动的工具集为您节省时间，完善录像"
          }
        }
      }),
      primaryCTAText: (0, _v1.translate)({
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
      }),
      upgradeButton: (0, _v1.translate)({
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
      }),
      upgradeToPlanButton: _v0 => (0, _v1.translate)({
        singular: "Upgrade to {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Cambiar a {PLAN_NAME}"
          },
          "de-DE": {
            singular: "Upgrade auf {PLAN_NAME} vornehmen"
          },
          "fr-FR": {
            singular: "Passez à l'abonnement {PLAN_NAME}"
          },
          "ja-JP": {
            singular: "{PLAN_NAME} にアップグレード"
          },
          "ko-KR": {
            singular: "{PLAN_NAME} 요금제로 업그레이드"
          },
          "pt-BR": {
            singular: "Fazer upgrade para {PLAN_NAME}"
          },
          "zh-CN": {
            singular: "升级到 {PLAN_NAME}"
          }
        }
      }),
      secondaryCTAText: (0, _v1.translate)({
        singular: "Compare all plans",
        dictionary: {
          es: {
            singular: "Comparar todos los planes"
          },
          "de-DE": {
            singular: "Alle Pläne vergleichen"
          },
          "fr-FR": {
            singular: "Comparez tous les plans"
          },
          "ja-JP": {
            singular: "すべてのプランを比較"
          },
          "ko-KR": {
            singular: "모든 요금제 확인하기"
          },
          "pt-BR": {
            singular: "Comparar todos os planos"
          },
          "zh-CN": {
            singular: "比较所有套餐"
          }
        }
      }),
      features: {
        aiGenerate: (0, _v1.translate)({
          singular: "Generate a script in seconds with a simple prompt",
          dictionary: {
            es: {
              singular: "Genere un guion en segundos con una simple indicación"
            },
            "de-DE": {
              singular: "Erstellen Sie ein Skript in Sekundenschnelle mit einer einfachen Aufforderung"
            },
            "fr-FR": {
              singular: "Générez un script en quelques secondes à l'aide d'une simple invite de commande."
            },
            "ja-JP": {
              singular: "簡単なプロンプトで数秒でスクリプトを生成"
            },
            "ko-KR": {
              singular: "간단한 프롬프트로 몇 초 만에 스크립트 생성"
            },
            "pt-BR": {
              singular: "Gere um roteiro em segundos com uma simples solicitação"
            },
            "zh-CN": {
              singular: "只需输入简单的提示，即可在几秒钟内生成脚本"
            }
          }
        }),
        aiCustomization: (0, _v1.translate)({
          singular: "Select from different tones, ask AI for revisions, and more",
          dictionary: {
            es: {
              singular: "Seleccione entre diferentes tonos, pídale revisiones a la IA y mucho más"
            },
            "de-DE": {
              singular: "Wählen Sie aus verschiedenen Tönen, fragen Sie die KI nach Überarbeitungen und mehr"
            },
            "fr-FR": {
              singular: "Choisissez parmi différents tons, demandez à l'IA d'effectuer des révisions, etc."
            },
            "ja-JP": {
              singular: "さまざまなトーンからの選択やAIに修正を依頼など"
            },
            "ko-KR": {
              singular: "다양한 톤을 선택하고, AI에게 수정 요청하는 등의 기능 제공"
            },
            "pt-BR": {
              singular: "Selecione diferentes estilos de escrita, peça revisões à IA e muito mais"
            },
            "zh-CN": {
              singular: "选择不同的语气，要求 AI 进行修改等"
            }
          }
        }),
        smartTeleprompter: (0, _v1.translate)({
          singular: "Nail your message every time with the automated teleprompter",
          dictionary: {
            es: {
              singular: "Deje un mensaje en todo momento con el teleprompter automatizado"
            },
            "de-DE": {
              singular: "Bringen Sie Ihre Botschaft jederzeit auf den Punkt – mit dem automatisierten Teleprompter"
            },
            "fr-FR": {
              singular: "Faites passer votre message grâce au téléprompteur automatisé."
            },
            "ja-JP": {
              singular: "自動テレプロンプターで毎回メッセージを確実に伝達"
            },
            "ko-KR": {
              singular: "자동화된 텔레프롬프터로 항상 완벽한 메시지 전달"
            },
            "pt-BR": {
              singular: "Acerte na mosca em cada mensagem com o teleprompter automatizado"
            },
            "zh-CN": {
              singular: "使用自动提词器，每次都能准确表达您想说的话"
            }
          }
        })
      }
    },
    tooltips: {
      scrollButtons: {
        pause: (0, _v1.translate)({
          singular: "Pause",
          dictionary: {
            es: {
              singular: "Pausar"
            },
            "ja-JP": {
              singular: "一時停止"
            },
            "ko-KR": {
              singular: "일시중지"
            },
            "pt-BR": {
              singular: "Pausar"
            },
            "zh-CN": {
              singular: "暂停"
            }
          }
        }),
        play: (0, _v1.translate)({
          singular: "Play",
          dictionary: {
            es: {
              singular: "Reproducir"
            },
            "de-DE": {
              singular: "Abspielen"
            },
            "fr-FR": {
              singular: "Lire"
            },
            "ja-JP": {
              singular: "再生"
            },
            "ko-KR": {
              singular: "재생"
            },
            "zh-CN": {
              singular: "播放"
            }
          }
        }),
        reset: (0, _v1.translate)({
          singular: "Start over",
          dictionary: {
            es: {
              singular: "Empezar de nuevo"
            },
            "de-DE": {
              singular: "Noch einmal starten"
            },
            "fr-FR": {
              singular: "Recommencer"
            },
            "ja-JP": {
              singular: "やり直す"
            },
            "ko-KR": {
              singular: "다시 시작"
            },
            "pt-BR": {
              singular: "Recomeçar"
            },
            "zh-CN": {
              singular: "重新开始"
            }
          }
        })
      },
      speed: (0, _v1.translate)({
        singular: "Speed",
        dictionary: {
          es: {
            singular: "Velocidad"
          },
          "de-DE": {
            singular: "Geschwindigkeit"
          },
          "fr-FR": {
            singular: "Vitesse"
          },
          "ja-JP": {
            singular: "スピード"
          },
          "ko-KR": {
            singular: "속도"
          },
          "pt-BR": {
            singular: "Velocidade"
          },
          "zh-CN": {
            singular: "速度"
          }
        }
      }),
      decreaseFontSize: (0, _v1.translate)({
        singular: "Decrease text size",
        dictionary: {
          es: {
            singular: "Disminuir el tamaño del texto"
          },
          "de-DE": {
            singular: "Schriftgröße verkleinern"
          },
          "fr-FR": {
            singular: "Réduire la taille du texte"
          },
          "ja-JP": {
            singular: "テキストサイズを小さくする"
          },
          "ko-KR": {
            singular: "텍스트 크기 줄이기"
          },
          "pt-BR": {
            singular: "Reduzir tamanho do texto"
          },
          "zh-CN": {
            singular: "减小文本大小"
          }
        }
      }),
      increaseFontSize: (0, _v1.translate)({
        singular: "Increase text size",
        dictionary: {
          es: {
            singular: "Aumentar el tamaño del texto"
          },
          "de-DE": {
            singular: "Vergrößern Sie die Textgröße"
          },
          "fr-FR": {
            singular: "Augmenter la taille du texte"
          },
          "ja-JP": {
            singular: "テキストサイズを大きくする"
          },
          "ko-KR": {
            singular: "텍스트 크기 늘리기"
          },
          "pt-BR": {
            singular: "Aumentar o tamanho do texto"
          },
          "zh-CN": {
            singular: "增加文本大小"
          }
        }
      }),
      close: (0, _v1.translate)({
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
      }),
      generateScript: (0, _v1.translate)({
        singular: "Generate script with AI",
        dictionary: {
          es: {
            singular: "Generar un guion con IA"
          },
          "de-DE": {
            singular: "Skript mit KI erstellen"
          },
          "fr-FR": {
            singular: "Générer un script avec l’IA"
          },
          "ja-JP": {
            singular: "AIでスクリプトを生成"
          },
          "ko-KR": {
            singular: "AI로 스크립트 생성"
          },
          "pt-BR": {
            singular: "Gerar roteiro com IA"
          },
          "zh-CN": {
            singular: "用人工智能生成脚本"
          }
        }
      })
    }
  };
  _v0.s(["translations", 0, _v3], 0);
}