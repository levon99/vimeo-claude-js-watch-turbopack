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
    _v29 = _v0.i(0);
  let _v30 = () => {
    let _v0 = navigator.userAgent;
    return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(_v0) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(_v0) ? "mobile" : "desktop";
  };
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  let _v34 = (0, _v33.translate)({
      singular: "Audio and subtitles",
      dictionary: {
        es: {
          singular: "Audio y subtítulos"
        },
        "de-DE": {
          singular: "Audio und Untertitel"
        },
        "fr-FR": {
          singular: "Audio et sous-titres"
        },
        "ja-JP": {
          singular: "音声と字幕"
        },
        "ko-KR": {
          singular: "오디오 및 자막"
        },
        "pt-BR": {
          singular: "Áudio e legendas"
        },
        "zh-CN": {
          singular: "音频和字幕"
        }
      }
    }),
    _v35 = (0, _v33.translate)({
      singular: "Subtitles only",
      dictionary: {
        es: {
          singular: "Solo subtítulos"
        },
        "de-DE": {
          singular: "Nur Untertitel"
        },
        "fr-FR": {
          singular: "Sous-titres uniquement"
        },
        "ja-JP": {
          singular: "字幕のみ"
        },
        "ko-KR": {
          singular: "자막만"
        },
        "pt-BR": {
          singular: "Somente legendas"
        },
        "zh-CN": {
          singular: "仅限字幕"
        }
      }
    }),
    _v36 = (0, _v33.translate)({
      singular: "Select languages",
      dictionary: {
        es: {
          singular: "Seleccionar idiomas"
        },
        "de-DE": {
          singular: "Sprachen auswählen"
        },
        "fr-FR": {
          singular: "Sélectionnez les langues"
        },
        "ja-JP": {
          singular: "言語を選択"
        },
        "ko-KR": {
          singular: "언어 선택"
        },
        "pt-BR": {
          singular: "Selecione os idiomas"
        },
        "zh-CN": {
          singular: "选择语言"
        }
      }
    }),
    _v37 = (0, _v33.translate)({
      singular: "Select option",
      dictionary: {
        es: {
          singular: "Seleccionar opción"
        },
        "de-DE": {
          singular: "Option auswählen"
        },
        "fr-FR": {
          singular: "Sélectionnez une option"
        },
        "ja-JP": {
          singular: "オプションを選択"
        },
        "ko-KR": {
          singular: "옵션 선택"
        },
        "pt-BR": {
          singular: "Selecionar opção"
        },
        "zh-CN": {
          singular: "选择选项"
        }
      }
    }),
    _v38 = (0, _v33.translate)({
      singular: "Calculating cost...",
      dictionary: {
        es: {
          singular: "Calculando el costo…"
        },
        "de-DE": {
          singular: "Kosten werden berechnet ..."
        },
        "fr-FR": {
          singular: "Calcul du coût..."
        },
        "ja-JP": {
          singular: "コストを計算しています…"
        },
        "ko-KR": {
          singular: "비용 계산 중..."
        },
        "pt-BR": {
          singular: "Calculando custo..."
        },
        "zh-CN": {
          singular: "正在计算成本..."
        }
      }
    });
  (0, _v33.translate)({
    singular: "Purchase",
    dictionary: {
      es: {
        singular: "Comprar"
      },
      "de-DE": {
        singular: "Kaufen"
      },
      "fr-FR": {
        singular: "Acheter"
      },
      "ja-JP": {
        singular: "購入"
      },
      "ko-KR": {
        singular: "구입"
      },
      "pt-BR": {
        singular: "Comprar"
      }
    }
  });
  let _v39 = (0, _v33.translate)({
      singular: "Cancel",
      dictionary: {
        es: {
          singular: "Cancelar"
        },
        "de-DE": {
          singular: "Abbrechen"
        },
        "fr-FR": {
          singular: "Annuler"
        },
        "ja-JP": {
          singular: "キャンセル"
        },
        "ko-KR": {
          singular: "취소"
        },
        "pt-BR": {
          singular: "Cancelar"
        },
        "zh-CN": {
          singular: "取消"
        }
      }
    }),
    _v40 = (0, _v33.translate)({
      singular: "Review and translate",
      dictionary: {
        es: {
          singular: "Revise y traduzca"
        },
        "de-DE": {
          singular: "Überprüfen und übersetzen"
        },
        "fr-FR": {
          singular: "Révisez et traduisez"
        },
        "ja-JP": {
          singular: "レビューおよび翻訳"
        },
        "ko-KR": {
          singular: "검토 및 번역"
        },
        "pt-BR": {
          singular: "Revise e traduza"
        },
        "zh-CN": {
          singular: "审核和翻译"
        }
      }
    }),
    _v41 = (0, _v33.translate)({
      singular: "Translate",
      dictionary: {
        es: {
          singular: "Traducir"
        },
        "de-DE": {
          singular: "Übersetzen"
        },
        "fr-FR": {
          singular: "Traduire"
        },
        "ja-JP": {
          singular: "翻訳"
        },
        "ko-KR": {
          singular: "번역합니다."
        },
        "pt-BR": {
          singular: "Traduzir"
        },
        "zh-CN": {
          singular: "翻译"
        }
      }
    }),
    _v42 = (0, _v33.translate)({
      singular: "Translations may already exist in the languages you selected. They won't be translated again.",
      dictionary: {
        es: {
          singular: "Es posible que ya existan traducciones en los idiomas que seleccionó. No se traducirán de nuevo."
        },
        "de-DE": {
          singular: "Möglicherweise sind in den von Ihnen ausgewählten Sprachen bereits Übersetzungen vorhanden. Sie werden nicht erneut übersetzt werden."
        },
        "fr-FR": {
          singular: "Il se peut que des traductions existent déjà dans les langues que vous avez sélectionnées. Elles ne seront pas à nouveau traduites."
        },
        "ja-JP": {
          singular: "選択された言語には、すでに翻訳が存在する可能性があります。すでに翻訳済みの言語については、再翻訳は行われません。"
        },
        "ko-KR": {
          singular: "선택하신 언어로 이미 번역되었을 수 있습니다. 이 경우 다시 번역되지 않습니다."
        },
        "pt-BR": {
          singular: "É possível que já existam traduções nos idiomas que você selecionou. Elas não serão traduzidos novamente."
        },
        "zh-CN": {
          singular: "您选择的语言可能已经存在翻译。它们不会再被翻译。"
        }
      }
    }),
    _v43 = (0, _v33.translate)({
      singular: "Next",
      dictionary: {
        es: {
          singular: "Siguiente"
        },
        "de-DE": {
          singular: "Weiter"
        },
        "fr-FR": {
          singular: "Suivant"
        },
        "ja-JP": {
          singular: "次へ"
        },
        "ko-KR": {
          singular: "다음"
        },
        "pt-BR": {
          singular: "Próxima"
        },
        "zh-CN": {
          singular: "下一步"
        }
      }
    }),
    _v44 = (0, _v33.translate)({
      singular: "View your",
      dictionary: {
        es: {
          singular: "Consulte su"
        },
        "de-DE": {
          singular: "Sehen Sie sich Ihre verbleibenden Credits an oder finden Sie heraus, wie Credits funktionieren."
        },
        "fr-FR": {
          singular: "Consultez votre"
        },
        "ja-JP": {
          singular: "次を表示："
        },
        "ko-KR": {
          singular: "확인하기:"
        },
        "pt-BR": {
          singular: "Confira o seu"
        },
        "zh-CN": {
          singular: "查看您的"
        }
      }
    }),
    _v45 = (0, _v33.translate)({
      singular: "or",
      dictionary: {
        es: {
          singular: "o"
        },
        "de-DE": {
          singular: "oder"
        },
        "fr-FR": {
          singular: "ou"
        },
        "ja-JP": {
          singular: "または"
        },
        "ko-KR": {
          singular: "또는"
        },
        "pt-BR": {
          singular: "ou"
        },
        "zh-CN": {
          singular: "或"
        }
      }
    });
  (0, _v33.translate)({
    singular: "Buy 10,000 credits",
    dictionary: {
      es: {
        singular: "Compre 10.000 créditos"
      },
      "de-DE": {
        singular: "10.000 Credits kaufen"
      },
      "fr-FR": {
        singular: "Acheter 10 000 crédits"
      },
      "ja-JP": {
        singular: "10,000クレジットを購入"
      },
      "ko-KR": {
        singular: "10,000 크레딧 구매"
      },
      "pt-BR": {
        singular: "Compre 10.000 créditos"
      },
      "zh-CN": {
        singular: "购买 10,000 点数"
      }
    }
  }), (0, _v33.translate)({
    singular: "Skip if a video has existing translations",
    dictionary: {
      es: {
        singular: "Omitir si un video tiene traducciones existentes"
      },
      "de-DE": {
        singular: "Überspringen, wenn ein Video bereits Übersetzungen hat"
      },
      "fr-FR": {
        singular: "Ignorer si une vidéo a des traductions existantes"
      },
      "ja-JP": {
        singular: "動画に既に翻訳がある場合はスキップする"
      },
      "ko-KR": {
        singular: "동영상에 기존 번역이 있는 경우 건너뛰기"
      },
      "pt-BR": {
        singular: "Pule se um vídeo já tiver traduções"
      },
      "zh-CN": {
        singular: "如果视频已有翻译，则跳过"
      }
    }
  });
  let _v46 = (0, _v33.translate)({
      singular: "AI credit usage",
      dictionary: {
        es: {
          singular: "uso de créditos de IA"
        },
        "de-DE": {
          singular: "Verwendung von AI-Credits"
        },
        "fr-FR": {
          singular: "utilisation des crédits IA"
        },
        "ja-JP": {
          singular: "AIクレジットの利用状況"
        },
        "ko-KR": {
          singular: "AI 크레딧 사용 내역"
        },
        "pt-BR": {
          singular: "uso de créditos de IA"
        },
        "zh-CN": {
          singular: "AI 积分使用情况"
        }
      }
    }),
    _v47 = (0, _v33.translate)({
      singular: "learn how credits work",
      dictionary: {
        es: {
          singular: "descubra cómo funcionan los créditos"
        },
        "de-DE": {
          singular: "Erfahren Sie, wie Credits funktionieren"
        },
        "fr-FR": {
          singular: "découvrez comment fonctionnent les crédits"
        },
        "ja-JP": {
          singular: "クレジットの仕組みを学ぶ"
        },
        "ko-KR": {
          singular: "크레딧 알아보기"
        },
        "pt-BR": {
          singular: "saiba como funcionam os créditos"
        },
        "zh-CN": {
          singular: "了解积分的运作方式"
        }
      }
    }),
    _v48 = (0, _v33.translate)({
      singular: "By continuing, you confirm you’ve met all legal requirements to use the voices of the people in the selected videos to create synthetic audio. That may include getting written consent.",
      dictionary: {
        es: {
          singular: "Al continuar, confirma que cumple todos los requisitos legales para utilizar las voces de las personas que aparecen en los videos seleccionados para crear audio sintético. Eso puede incluir obtener el consentimiento por escrito."
        },
        "de-DE": {
          singular: "Wenn Sie fortfahren, bestätigen Sie, dass Sie alle rechtlichen Voraussetzungen erfüllen, um die Stimmen der Personen in den ausgewählten Videos für die Erstellung von synthetischem Audio zu verwenden. Hierzu kann auch die Einholung einer schriftlichen Einwilligung gehören."
        },
        "fr-FR": {
          singular: "En continuant, vous confirmez que vous avez satisfait à toutes les exigences légales pour utiliser les voix des personnes figurant dans les vidéos sélectionnées afin de créer un son synthétique. Cela peut inclure l'obtention d'un consentement écrit."
        },
        "ja-JP": {
          singular: "続行することで、選択した動画の登場人物の声を使用して合成音声を作成するためのすべての法的要件を満たしていることを確認することになります。これには、書面による同意を得ることが含まれる場合があります。"
        },
        "ko-KR": {
          singular: "계속 진행하면 선택한 동영상에 나오는 사람들의 목소리로 합성 오디오를 생성하는 데 필요한 모든 법적 요건을 충족했음을 확인한 것으로 간주됩니다. 여기에는 서면 동의를 받는 것도 포함될 수 있습니다."
        },
        "pt-BR": {
          singular: "Ao continuar, você confirma que cumpriu todos os requisitos legais para usar as vozes das pessoas nos vídeos selecionados para criar áudio sintético. Um desses requisitos pode ser o consentimento por escrito."
        },
        "zh-CN": {
          singular: "继续即表示您确认，您符合使用所选视频中人物的声音创建合成音频的所有法律要求。这可能包括获得书面同意。"
        }
      }
    });
  (0, _v33.translate)({
    singular: "Credits per minute",
    dictionary: {
      es: {
        singular: "Créditos por minuto"
      },
      "de-DE": {
        singular: "Credits pro Minute"
      },
      "fr-FR": {
        singular: "Crédits par minute"
      },
      "ja-JP": {
        singular: "1分あたりのクレジット数"
      },
      "ko-KR": {
        singular: "분당 크레딧"
      },
      "pt-BR": {
        singular: "Créditos por minuto"
      },
      "zh-CN": {
        singular: "每分钟积分"
      }
    }
  });
  let _v49 = (0, _v33.translate)({
      singular: "You don't have enough credits for this translation. Contact your admin to buy more.",
      dictionary: {
        es: {
          singular: "No tiene suficientes créditos para esta traducción. Póngase en contacto con el administrador para comprar más."
        },
        "de-DE": {
          singular: "Sie haben nicht genügend Guthaben für diese Übersetzung. Kontaktieren Sie Ihren Administrator, um mehr zu kaufen."
        },
        "fr-FR": {
          singular: "Vous n'avez pas assez de crédits pour cette traduction. Contactez votre administrateur pour en acheter davantage."
        },
        "ja-JP": {
          singular: "この翻訳に必要なクレジットが足りません。管理者に連絡して、追加購入してください。"
        },
        "ko-KR": {
          singular: "번역할 크레딧이 부족합니다. 추가로 구매하려면 관리자에게 문의하세요."
        },
        "pt-BR": {
          singular: "Você não tem créditos suficientes para essa tradução. Entre em contato com o administrador para comprar mais."
        },
        "zh-CN": {
          singular: "您没有足够的积分来进行此翻译。如需购买更多，请联系您的管理员。"
        }
      }
    }),
    _v50 = (0, _v33.translate)({
      singular: "There was a problem applying your selection. Try again.",
      dictionary: {
        es: {
          singular: "Hubo un problema al aplicar su selección. Inténtelo de nuevo."
        },
        "de-DE": {
          singular: "Beim Anwenden Ihrer Auswahl ist ein Problem aufgetreten. Nochmal versuchen."
        },
        "fr-FR": {
          singular: "Un problème est survenu lors de l'application de votre sélection. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "選択内容を適用中に問題が発生しました。もう一度お試しください。"
        },
        "ko-KR": {
          singular: "선택을 적용하는 데 문제가 발생했습니다. 다시 시도해 주세요."
        },
        "pt-BR": {
          singular: "Houve um problema ao aplicar a sua seleção. Tente novamente."
        },
        "zh-CN": {
          singular: "应用您的选择时出现了问题。请重试。"
        }
      }
    }),
    _v51 = (0, _v33.translate)({
      singular: "Loading languages...",
      dictionary: {
        es: {
          singular: "Cargando idiomas..."
        },
        "de-DE": {
          singular: "Sprachen werden geladen ..."
        },
        "fr-FR": {
          singular: "Chargement des langues..."
        },
        "ja-JP": {
          singular: "言語を読み込み中..."
        },
        "ko-KR": {
          singular: "언어 로딩 중..."
        },
        "pt-BR": {
          singular: "Carregando idiomas..."
        },
        "zh-CN": {
          singular: "正在加载语言..."
        }
      }
    }),
    _v52 = (0, _v33.translate)({
      singular: "Credits per minute",
      dictionary: {
        es: {
          singular: "Créditos por minuto"
        },
        "de-DE": {
          singular: "Credits pro Minute"
        },
        "fr-FR": {
          singular: "Crédits par minute"
        },
        "ja-JP": {
          singular: "1分あたりのクレジット数"
        },
        "ko-KR": {
          singular: "분당 크레딧"
        },
        "pt-BR": {
          singular: "Créditos por minuto"
        },
        "zh-CN": {
          singular: "每分钟积分"
        }
      }
    }),
    _v53 = (0, _v33.translate)({
      singular: "Languages",
      dictionary: {
        es: {
          singular: "Idiomas"
        },
        "de-DE": {
          singular: "Sprachen"
        },
        "fr-FR": {
          singular: "Langues"
        },
        "ja-JP": {
          singular: "言語"
        },
        "ko-KR": {
          singular: "언어"
        },
        "pt-BR": {
          singular: "Idiomas"
        }
      }
    }),
    _v54 = (0, _v33.translate)({
      singular: "Total minutes",
      dictionary: {
        es: {
          singular: "Minutos totales"
        },
        "de-DE": {
          singular: "Gesamtanzahl der Minuten"
        },
        "fr-FR": {
          singular: "Minutes totales"
        },
        "ja-JP": {
          singular: "合計分数"
        },
        "ko-KR": {
          singular: "총 시간(분)"
        },
        "pt-BR": {
          singular: "Total de minutos"
        },
        "zh-CN": {
          singular: "总时长"
        }
      }
    }),
    _v55 = (0, _v33.translate)({
      singular: "Cost",
      dictionary: {
        es: {
          singular: "Coste"
        },
        "de-DE": {
          singular: "Kosten"
        },
        "fr-FR": {
          singular: "Coût"
        },
        "ja-JP": {
          singular: "費用"
        },
        "ko-KR": {
          singular: "비용"
        },
        "pt-BR": {
          singular: "Custo"
        },
        "zh-CN": {
          singular: "费用"
        }
      }
    }),
    _v56 = (0, _v33.translate)({
      singular: "credits remaining",
      dictionary: {
        es: {
          singular: "Créditos restantes"
        },
        "de-DE": {
          singular: "Verbleibende Credits"
        },
        "fr-FR": {
          singular: "Crédits restants"
        },
        "ja-JP": {
          singular: "残りクレジット"
        },
        "ko-KR": {
          singular: "남은 크레딧"
        },
        "pt-BR": {
          singular: "Créditos restantes"
        },
        "zh-CN": {
          singular: "剩余积分"
        }
      }
    }),
    _v57 = (0, _v33.translate)({
      singular: "Translations started",
      dictionary: {
        es: {
          singular: "Las traducciones han comenzado"
        },
        "de-DE": {
          singular: "Übersetzungen wurden gestartet"
        },
        "fr-FR": {
          singular: "Les traductions ont commencé"
        },
        "ja-JP": {
          singular: "翻訳を開始しました"
        },
        "ko-KR": {
          singular: "번역이 시작되었습니다."
        },
        "pt-BR": {
          singular: "Traduções iniciadas"
        },
        "zh-CN": {
          singular: "翻译已开始"
        }
      }
    }),
    _v58 = (0, _v33.translate)({
      singular: "Translations failed",
      dictionary: {
        es: {
          singular: "Las traducciones fallaron"
        },
        "de-DE": {
          singular: "Übersetzungen sind fehlgeschlagen"
        },
        "fr-FR": {
          singular: "Les traductions ont échoué"
        },
        "ja-JP": {
          singular: "翻訳に失敗しました"
        },
        "ko-KR": {
          singular: "번역 실패"
        },
        "pt-BR": {
          singular: "Falha nas traduções"
        },
        "zh-CN": {
          singular: "翻译失败"
        }
      }
    }),
    _v59 = (0, _v33.translate)({
      singular: "Failed to create batch AI session",
      dictionary: {
        es: {
          singular: "Error al crear la sesión de IA por lotes"
        },
        "de-DE": {
          singular: "Fehler beim Erstellen einer Batch-AI-Sitzung."
        },
        "fr-FR": {
          singular: "Échec de la création d'une session d'IA groupée"
        },
        "ja-JP": {
          singular: "バッチAIセッションを作成できませんでした"
        },
        "ko-KR": {
          singular: "배치 AI 세션을 생성하지 못했습니다."
        },
        "pt-BR": {
          singular: "Falha ao criar sessão de IA em lote"
        },
        "zh-CN": {
          singular: "无法创建批量 AI 会话"
        }
      }
    }),
    _v60 = (0, _v33.translate)({
      singular: "User ID not available",
      dictionary: {
        es: {
          singular: "ID de usuario no disponible"
        },
        "de-DE": {
          singular: "Benutzer-ID ist nicht verfügbar."
        },
        "fr-FR": {
          singular: "L'identifiant utilisateur n'est pas disponible"
        },
        "ja-JP": {
          singular: "ユーザー ID を取得できません"
        },
        "ko-KR": {
          singular: "사용자 ID를 사용할 수 없습니다."
        },
        "pt-BR": {
          singular: "ID de usuário não disponível"
        },
        "zh-CN": {
          singular: "用户 ID 不可用"
        }
      }
    }),
    _v61 = (0, _v33.translate)({
      singular: "Translation type is required",
      dictionary: {
        es: {
          singular: "El tipo de traducción es obligatorio"
        },
        "de-DE": {
          singular: "Übersetzungstyp ist erforderlich"
        },
        "fr-FR": {
          singular: "Le type de traduction est requis."
        },
        "ja-JP": {
          singular: "翻訳タイプは必須です"
        },
        "ko-KR": {
          singular: "번역 유형은 필수입니다."
        },
        "pt-BR": {
          singular: "O tipo de tradução é obrigatório"
        },
        "zh-CN": {
          singular: "需要指定翻译类型"
        }
      }
    }),
    _v62 = (0, _v33.translate)({
      singular: "Folder does not contain clips",
      dictionary: {
        es: {
          singular: "La carpeta no contiene clips"
        },
        "de-DE": {
          singular: "Der Ordner enthält keine Clips."
        },
        "fr-FR": {
          singular: "Le dossier ne contient pas de clips"
        },
        "ja-JP": {
          singular: "フォルダーにクリップが含まれていません"
        },
        "ko-KR": {
          singular: "폴더에 포함된 클립이 없습니다."
        },
        "pt-BR": {
          singular: "A pasta não contém clipes"
        },
        "zh-CN": {
          singular: "文件夹不包含剪辑"
        }
      }
    }),
    _v63 = (0, _v33.translate)({
      singular: "Job is taking longer than expected. It will continue in the background.",
      dictionary: {
        es: {
          singular: "El trabajo está tardando más de lo esperado. Continuará en segundo plano."
        },
        "de-DE": {
          singular: "Der Vorgang dauert länger als erwartet. Es wird im Hintergrund weiterlaufen."
        },
        "fr-FR": {
          singular: "La tâche prend plus de temps que prévu. Elle se poursuivra en arrière-plan."
        },
        "ja-JP": {
          singular: "ジョブに予想より時間がかかっています。処理はバックグラウンドで続行されます。"
        },
        "ko-KR": {
          singular: "작업에 예상보다 많은 시간이 소요되고 있습니다. 백그라운드에서 계속 진행됩니다."
        },
        "pt-BR": {
          singular: "O trabalho está demorando mais do que o esperado. Ele continuará em segundo plano."
        },
        "zh-CN": {
          singular: "工作比预期的要花费更长的时间。它将在后台继续。"
        }
      }
    }),
    _v64 = {
      title: (0, _v33.translate)({
        singular: "Cancel translations",
        dictionary: {
          es: {
            singular: "Cancelar las traducciones"
          },
          "de-DE": {
            singular: "Übersetzungen abbrechen"
          },
          "fr-FR": {
            singular: "Annuler les traductions"
          },
          "ja-JP": {
            singular: "翻訳をキャンセル"
          },
          "ko-KR": {
            singular: "번역 취소"
          },
          "pt-BR": {
            singular: "Cancelar traduções"
          },
          "zh-CN": {
            singular: "取消翻译"
          }
        }
      }),
      message: (0, _v33.translate)({
        singular: "Only translations that haven’t started yet will be canceled. You’ll be charged for the finished translations.",
        dictionary: {
          es: {
            singular: "Solo se cancelarán las traducciones que aún no hayan comenzado. Se le cobrará por las traducciones terminadas."
          },
          "de-DE": {
            singular: "Nur Übersetzungen, die noch nicht begonnen wurden, werden aufgehoben. Fertige Übersetzungen werden Ihnen in Rechnung gestellt."
          },
          "fr-FR": {
            singular: "Seules les traductions qui n'ont pas encore commencé seront annulées. Les traductions terminées vous seront facturées."
          },
          "ja-JP": {
            singular: "まだ開始されていない翻訳のみがキャンセルされます。完了した翻訳に対しては料金が請求されます。"
          },
          "ko-KR": {
            singular: "아직 시작하지 않은 번역만 취소됩니다. 완료된 번역본에 대해 비용이 청구됩니다."
          },
          "pt-BR": {
            singular: "Somente as traduções que ainda não foram iniciadas serão canceladas. Você receberá a cobrança pelas traduções concluídas."
          },
          "zh-CN": {
            singular: "只有尚未开始的翻译才会被取消。您将被收取完成翻译的费用。"
          }
        }
      }),
      goBack: (0, _v33.translate)({
        singular: "Go back",
        dictionary: {
          es: {
            singular: "Volver"
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
            singular: "돌아가기"
          },
          "pt-BR": {
            singular: "Voltar"
          },
          "zh-CN": {
            singular: "返回"
          }
        }
      }),
      confirmCancel: (0, _v33.translate)({
        singular: "Confirm",
        dictionary: {
          es: {
            singular: "Confirmar"
          },
          "de-DE": {
            singular: "Bestätigen"
          },
          "fr-FR": {
            singular: "Confirmer"
          },
          "ja-JP": {
            singular: "確定"
          },
          "ko-KR": {
            singular: "확인"
          },
          "pt-BR": {
            singular: "Confirmar"
          },
          "zh-CN": {
            singular: "确认"
          }
        }
      })
    },
    _v65 = (0, _v2.createContext)(null),
    _v66 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v2.useState)(0),
        [_v3] = (0, _v2.useState)(null),
        [_v4] = (0, _v2.useState)(0),
        [_v5] = (0, _v2.useState)(0),
        [_v6, _v7] = (0, _v2.useState)(!1),
        [_v8, _v9] = (0, _v2.useState)(!1),
        [_v10, _v11] = (0, _v2.useState)(null),
        [_v12, _v13] = (0, _v2.useState)(!1),
        [_v14, _v15] = (0, _v2.useState)(!1),
        _v16 = (0, _v29.useViewer)(),
        _v17 = (0, _v31.useToast)(),
        _v18 = _v3?.quota?.remaining,
        _v19 = async (_v0, _v1, _v2) => {
          if (_v7(!0), !_v0 && (!_v2 || 0 === _v2.length) && !_v1) {
            _v9(!0), _v7(!1);
            return;
          }
          try {
            let _v0 = await new Promise(_v0 => {
              setTimeout(() => {
                _v0({
                  creditsCost: 0,
                  duration: 0
                });
              }, 0);
            });
            _v11(_v0);
          } catch (_v0) {
            _v9(!0);
          } finally {
            _v7(!1);
          }
        },
        {
          data: _v20
        } = (0, _v32.useGetUser)(() => {
          let _v0 = _v16?.team?.ownerId;
          return _v0 ? {
            select: ["aiCreditsQuota"],
            where: {
              userId: _v0
            }
          } : null;
        }),
        _v21 = _v20?.aiCreditsQuota?.remaining || 0,
        _v22 = (0, _v2.useCallback)(async () => {
          try {
            if (_v13(!0), (await new Promise(_v0 => {
              setTimeout(() => {
                _v0({
                  jobId: 123
                });
              }, 0);
            })).jobId) return _v17({
              title: _v57,
              variant: "success"
            }), !0;
            return _v17({
              title: _v58,
              variant: "warning"
            }), !1;
          } catch (_v0) {
            return _v15(!0), !1;
          } finally {
            _v13(!1);
          }
        }, [_v17]);
      return (0, _v1.jsx)(_v65.Provider, {
        value: {
          amount: _v1 ? _v4 : 0,
          balance: _v18,
          isEnoughTokens: () => !!_v3?.duration && _v4 <= (_v18 ?? 0),
          minutes: _v5,
          langCnt: _v1,
          duration: _v3?.duration ?? 0,
          setLangCnt: _v2,
          calculateAiEstimate: _v19,
          loadingEstimate: _v6,
          estimateError: _v8,
          estimateData: _v10,
          availableAiCredits: _v21,
          confirmPurchase: _v22,
          loadingPurchase: _v12,
          purchaseError: _v14
        },
        children: _v0
      });
    },
    _v67 = () => {
      let _v0 = (0, _v2.useContext)(_v65);
      if (!_v0) throw Error("useTokensContext must be used within a TokensContextProvider");
      return _v0;
    };
  var _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  async function _v72({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v70.measureLatency)("getUserAiBatchsessions", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/ai/batchsessions?${(0, _v71.searchQueryString)(_v3)}&fields=${_v1.map(_v71.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v71.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v71.deepCamelCase)(_v1);
    });
  }
  async function _v73({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v70.measureLatency)("postUserAiBatchsessions", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/ai/batchsessions?fields=${_v1.map(_v71.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v71.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v71.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v71.deepCamelCase)(_v1);
    });
  }
  _v0.s(["getUserAiBatchsessions", 0, _v72, "postUserAiBatchsessions", 0, _v73], 0);
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  function _v78() {
    let {
        mutate: _v0
      } = (0, _v75.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v77.useGctlConfig)(),
      [_v5, _v6] = (0, _v69.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/ai/batchsessions${(0, _v69.serializeQuery)(_v0)}`, _v72({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  function _v79() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v77.useGctlConfig)(),
      [_v4, _v5] = (0, _v69.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v73({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }
  "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v77.useGctlConfig)();
    return (0, _v74.default)(_v2 ? `/users/${_v2.where.userId}/ai/batchsessions${(0, _v69.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v72({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/ai/batchsessions",
    method: "GET"
  }), "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(_v78, {
    endpoint: "/users/:userId/ai/batchsessions",
    method: "GET"
  }), "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v77.useGctlConfig)();
    return (0, _v76.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/ai/batchsessions?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v72({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/ai/batchsessions",
    method: "GET"
  }), "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(_v79, {
    endpoint: "/users/:userId/ai/batchsessions",
    method: "POST"
  });
  let _v80 = () => {
      let _v0 = (0, _v31.useToast)();
      return (_v0, _v1 = "neutral", _v2) => {
        _v0({
          title: _v0,
          variant: _v1,
          duration: _v2
        });
      };
    },
    _v81 = {
      subtitling: "translations_subtitles",
      dubbing: "translations_dubbings"
    };
  var _v82 = _v0.i(0);
  function _v83() {
    let {
        mutate: _v0
      } = (0, _v75.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v77.useGctlConfig)(),
      [_v5, _v6] = (0, _v69.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/ai_credits/estimate${(0, _v69.serializeQuery)(_v0)}`, (0, _v82.postUserAiCreditsEstimate)({
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
  async function _v84({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      projectId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v70.measureLatency)("getUserProjectItemsDeep", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/projects/${_v3}/items/deep?${(0, _v71.searchQueryString)(_v4)}&fields=${_v1.map(_v71.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v71.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v71.deepCamelCase)(_v1);
    });
  }
  function _v85() {
    let {
        mutate: _v0
      } = (0, _v75.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v77.useGctlConfig)(),
      [_v5, _v6] = (0, _v69.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/projects/${_v0.where.projectId}/items/deep${(0, _v69.serializeQuery)(_v0)}`, _v84({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v77.useGctlConfig)();
    return (0, _v74.default)(_v2 ? `/users/${_v2.where.userId}/ai_credits/estimate${(0, _v69.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v82.getUserAiCreditsEstimate)({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/ai_credits/estimate",
    method: "GET"
  }), "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v75.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v77.useGctlConfig)(),
      [_v5, _v6] = (0, _v69.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/ai_credits/estimate${(0, _v69.serializeQuery)(_v0)}`, (0, _v82.getUserAiCreditsEstimate)({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/users/:userId/ai_credits/estimate",
    method: "GET"
  }), "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(_v83, {
    endpoint: "/users/:userId/ai_credits/estimate",
    method: "POST"
  }), "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v77.useGctlConfig)();
    return (0, _v74.default)(_v2 ? `/users/${_v2.where.userId}/projects/${_v2.where.projectId}/items/deep${(0, _v69.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v84({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/projects/:projectId/items/deep",
    method: "GET"
  }), "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(_v85, {
    endpoint: "/users/:userId/projects/:projectId/items/deep",
    method: "GET"
  }), "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v77.useGctlConfig)();
    return (0, _v76.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/projects/${_v2.where.projectId}/items/deep?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v84({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/projects/:projectId/items/deep",
    method: "GET"
  });
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0);
  function _v91({
    creditsPerMin: _v0,
    totalCost: _v1,
    totalDuration: _v2,
    selectedLanguages: _v3,
    translationType: _v4,
    sendViewCreditsConfirmationModalEvent: _v5
  }) {
    let {
        availableAiCredits: _v6
      } = _v67(),
      _v7 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      _v7.current || void 0 !== _v1 && null !== _v4 && void 0 !== _v6 && (_v5(_v4, _v6, _v1, _v6 - _v1), _v7.current = !0);
    }, [_v4, _v1, _v6, _v5]);
    let _v8 = (0, _v2.useMemo)(() => {
        let _v0 = "dubbing" === _v4,
          _v1 = _v3.length > 0 && "getDisplayLabel" in _v3[0];
        return _v0 && _v1 ? _v3.map(_v0 => _v0.getDisplayLabel()).join(", ") : _v3.map(_v0 => _v0.label).join(", ");
      }, [_v3, _v4]),
      _v9 = [{
        label: _v52,
        value: (_v0 ?? 0).toLocaleString(),
        icon: (0, _v1.jsx)(_v19.VimeoCoin, {
          boxSize: "2xs"
        })
      }, {
        label: _v53,
        value: _v3.length,
        labelIcon: (0, _v1.jsx)(_v12.Flex, {
          alignItems: "center",
          children: (0, _v1.jsx)(_v87.Tooltip, {
            label: _v8,
            placement: "top",
            children: (0, _v1.jsx)(_v11.Box, {
              as: "span",
              ml: (0, _v15.rem)(4),
              display: "inline-flex",
              children: (0, _v1.jsx)(_v90.InfoCircle, {
                color: "text-secondary",
                boxSize: "2xs"
              })
            })
          })
        })
      }, {
        label: _v54,
        value: `${(_v2 ?? 0).toLocaleString()}`
      }, {
        label: _v55,
        value: `${(_v1 ?? 0).toLocaleString()}`,
        icon: (0, _v1.jsx)(_v19.VimeoCoin, {
          boxSize: "2xs"
        })
      }];
    return (0, _v1.jsxs)(_v11.Box, {
      children: [!_v1 || _v6 < _v1 && (0, _v1.jsx)(_v88.Alert, {
        display: "flex",
        alignItems: "center",
        mb: (0, _v15.rem)(8),
        status: "error",
        children: (0, _v1.jsx)(_v89.AlertDescription, {
          children: _v49
        })
      }), (0, _v1.jsx)(_v17.Text, {
        variant: "body-md",
        mb: (0, _v15.rem)(16),
        children: _v42
      }), (0, _v1.jsx)(_v11.Box, {
        bgColor: "stroke",
        p: (0, _v15.rem)(16),
        borderRadius: (0, _v15.rem)(15),
        children: _v9.map((_v0, _v1) => (0, _v1.jsxs)(_v12.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          w: "100%",
          mb: _v1 < _v9.length - 1 ? (0, _v15.rem)(12) : 0,
          children: [(0, _v1.jsxs)(_v12.Flex, {
            alignItems: "center",
            gap: (0, _v15.rem)(8),
            children: [(0, _v1.jsx)(_v17.Text, {
              variant: "Cost" === _v0.label ? "heading-xs" : "body-md",
              color: "Cost" === _v0.label ? "text-primary" : "text-secondary",
              children: _v0.label
            }), _v0.labelIcon]
          }), (0, _v1.jsxs)(_v12.Flex, {
            alignItems: "center",
            gap: (0, _v15.rem)(4),
            children: [_v0.icon && _v0.icon, (0, _v1.jsx)(_v17.Text, {
              variant: "Cost" === _v0.label ? "heading-xs" : "body-md",
              children: _v0.value
            })]
          })]
        }, _v0.label))
      }), (0, _v1.jsxs)(_v12.Flex, {
        mt: (0, _v15.rem)(8),
        alignItems: "baseline",
        flexWrap: "wrap",
        children: [(0, _v1.jsx)(_v17.Text, {
          variant: "body-xl",
          fontSize: (0, _v15.rem)(14),
          color: "text-secondary",
          ml: (0, _v15.rem)(8),
          children: _v44
        }), (0, _v1.jsx)(_v86.Link, {
          variant: "inline-tertiary",
          href: "https://vimeo.com/manage/team/billing",
          ml: (0, _v15.rem)(4),
          fontSize: (0, _v15.rem)(14),
          target: "_blank",
          rel: "noopener noreferrer",
          children: _v46
        }), (0, _v1.jsx)(_v17.Text, {
          variant: "body-xl",
          fontSize: (0, _v15.rem)(14),
          color: "text-secondary",
          ml: (0, _v15.rem)(4),
          children: _v45
        }), (0, _v1.jsx)(_v86.Link, {
          variant: "inline-tertiary",
          href: "https://help.vimeo.com/hc/en-us/articles/33610803164177-About-AI-Credits",
          ml: (0, _v15.rem)(4),
          fontSize: (0, _v15.rem)(14),
          target: "_blank",
          rel: "noopener noreferrer",
          children: _v47
        })]
      })]
    });
  }
  var _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = (0, _v2.createContext)(null),
    _v97 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v29.useViewer)(),
        {
          capabilities: _v2
        } = (0, _v94.useCapability)(["hasOriginalTranslationsAccents"], _v1?.teamUser?.ownerId),
        {
          data: _v3,
          isLoading: _v4
        } = (0, _v95.useGetVideosTranslationsLanguages)({
          query: {
            type: "accents"
          },
          select: ["code", "localized", "native", "accents"]
        }),
        {
          data: _v5,
          isLoading: _v6
        } = (0, _v95.useGetVideosTranslationsLanguages)({
          query: {
            type: "subtitling"
          },
          select: ["code", "localized", "native"]
        }),
        _v7 = {
          dubbingLanguagesList: _v3?.data ?? [],
          subtitlingLanguagesList: _v5?.data ?? [],
          isLoading: _v4 || _v6,
          hasOriginalTranslationsAccents: !!_v2?.hasOriginalTranslationsAccents
        };
      return (0, _v1.jsx)(_v96.Provider, {
        value: _v7,
        children: _v0
      });
    },
    _v98 = () => {
      let _v0 = (0, _v2.useContext)(_v96);
      if (!_v0) throw Error("useVideoTranslationsContext must be used within a VideoTranslationsContextProvider");
      return _v0;
    },
    _v99 = ({
      selectedLanguages: _v0,
      onChange: _v1,
      translationType: _v2,
      languages: _v3,
      availableLanguages: _v4,
      isLoading: _v5
    }) => {
      let {
          setLangCnt: _v6
        } = _v67(),
        {
          hasOriginalTranslationsAccents: _v7
        } = _v98(),
        _v8 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v3?.filter(_v0 => _v0.includes(_v0.value));
          _v6(_v1.length), _v1(_v1);
        }, [_v6, _v1, _v3]);
      return _v2 ? "dubbing" === _v2 ? _v4 ? (0, _v1.jsx)(_v11.Box, {
        pt: (0, _v15.rem)(8),
        children: (0, _v1.jsx)(_v92.LanguageSelectList, {
          availableLanguages: _v4,
          selectedLanguages: _v0,
          onChange: _v0 => {
            _v6(_v0.length), _v1(_v0);
          },
          hasOriginalTranslationsAccents: _v7
        })
      }) : null : (0, _v1.jsx)(_v11.Box, {
        pt: (0, _v15.rem)(8),
        children: (0, _v1.jsx)(_v93.Select, {
          id: `select-${_v2}-languages`,
          multiple: !0,
          placeholder: _v5 ? _v51 : _v36,
          withPortal: !1,
          variant: "withCheck",
          disabled: _v5,
          items: _v3,
          onValueChange: _v0 => {
            _v8(_v0.value);
          },
          value: _v0.map(_v0 => _v0.value),
          children: _v0 => {
            let _v1,
              _v2 = (_v1 = _v0.value, -1 !== _v0.findIndex(({
                value: _v0
              }) => _v0 === _v1));
            return (0, _v1.jsx)(_v93.SelectItem, {
              item: _v0,
              sx: {
                pointerEvents: "auto !important"
              },
              "data-state": _v2 ? "checked" : "unchecked",
              children: (0, _v1.jsx)(_v93.SelectItemText, {
                children: _v0.label
              })
            });
          }
        }, `select-${_v2}-languages`)
      }) : null;
    };
  var _v100 = _v0.i(0);
  let _v101 = ({
    setTranslationType: _v0,
    canUseSubtitling: _v1,
    canUseDubbing: _v2,
    translationType: _v3
  }) => {
    let _v4 = [];
    return _v1 && _v4.push({
      value: "subtitling",
      label: _v35,
      subLabel: "Create subtitles using these videos' transcripts."
    }), _v2 && _v4.push({
      value: "dubbing",
      label: _v34,
      subLabel: "Create subtitles and spoken translations for these videos using the voices in them."
    }), (0, _v1.jsxs)(_v11.Box, {
      children: [(0, _v1.jsx)(_v17.Text, {
        variant: "body-md",
        mb: (0, _v15.rem)(16),
        children: _v42
      }), (0, _v1.jsx)(_v93.Select, {
        id: "translation-type-select",
        value: _v3 ? [_v3] : [],
        items: _v4,
        onValueChange: _v0 => _v0(_v0.value[0]),
        placeholder: _v37,
        children: _v0 => (0, _v1.jsx)(_v93.SelectItem, {
          display: "flex",
          children: (0, _v1.jsxs)(_v100.VStack, {
            alignItems: "flex-start",
            gap: 0,
            children: [(0, _v1.jsx)(_v17.Text, {
              variant: "body-md",
              children: _v4.find(_v0 => _v0.value === _v0.value)?.label
            }), (0, _v1.jsx)(_v17.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v4.find(_v0 => _v0.value === _v0.value)?.subLabel
            })]
          })
        })
      }, "translation-type-select")]
    });
  };
  function _v102({
    selectedLanguages: _v0,
    setSelectedLanguages: _v1,
    setTranslationType: _v2,
    translationType: _v3,
    stepOneHasError: _v4,
    canTranslateText: _v5,
    canTranslateDubbing: _v6
  }) {
    let {
        dubbingLanguagesList: _v7,
        subtitlingLanguagesList: _v8,
        isLoading: _v9
      } = _v98(),
      _v10 = (0, _v2.useCallback)(_v0 => _v0.sort((_v0, _v1) => _v0.localized < _v1.localized ? -1 : +(_v0.localized > _v1.localized)).map(_v0 => ({
        value: _v0.code || "",
        label: _v0.localized || "",
        native: _v0.native || ""
      })), []),
      _v11 = (0, _v2.useMemo)(() => "subtitling" === _v3 ? _v10(_v8 ?? []) : _v10(_v7 ?? []), [_v3, _v10, _v8, _v7]);
    return (0, _v1.jsxs)(_v11.Box, {
      children: [_v4 && (0, _v1.jsx)(_v88.Alert, {
        display: "flex",
        alignItems: "center",
        mb: (0, _v15.rem)(8),
        status: "error",
        children: (0, _v1.jsx)(_v89.AlertDescription, {
          children: _v50
        })
      }), (0, _v1.jsx)(_v101, {
        canUseSubtitling: _v5,
        canUseDubbing: _v6,
        setTranslationType: _v2,
        translationType: _v3
      }), (0, _v1.jsx)(_v99, {
        languages: _v11,
        selectedLanguages: _v0,
        onChange: _v1,
        translationType: _v3,
        availableLanguages: "dubbing" === _v3 ? _v7 : void 0,
        isLoading: _v9
      })]
    });
  }
  function _v103({
    isModalOpen: _v0,
    handleModalChange: _v1,
    isFolder: _v2,
    folderName: _v3,
    clipItems: _v4,
    folderId: _v5,
    onComplete: _v6,
    canTranslateText: _v7,
    canTranslateDubbing: _v8
  }) {
    let _v9,
      _v10,
      _v11,
      _v12,
      _v13,
      _v14,
      _v15,
      _v16,
      _v17,
      _v18 = (0, _v2.useContext)(_v20.ViewerContext),
      [_v19, _v20] = (0, _v2.useState)(0),
      [_v21, _v22] = (0, _v2.useState)(null),
      [_v23, _v24] = (0, _v2.useState)([]),
      {
        availableAiCredits: _v25
      } = _v67(),
      {
        sendNextTranslationStepEvent: _v26,
        sendCancelTranslateSettingsEvent: _v27,
        sendConfirmBulkTranslateEvent: _v28,
        sendCancelCreditsConfirmationModalEvent: _v29,
        sendViewTranslateVideoSettingsEvent: _v30,
        sendViewCreditsConfirmationModalEvent: _v31
      } = (_v9 = (0, _v29.useViewer)(), _v10 = (0, _v21.usePico)(), _v11 = (0, _v2.useCallback)(_v0 => {
        null !== _v10 && _v10.track("library_ai_bulk_translate_modal_shown", {
          generation_id: _v0.generationId,
          video_count: _v0.videoCount
        });
      }, [_v10]), _v12 = (0, _v2.useCallback)(_v0 => {
        null !== _v10 && _v10.track("library_ai_bulk_translate_submitted", {
          generation_id: _v0.generationId,
          video_count: _v0.videoCount,
          product_type: _v0.productType,
          source_language_code: _v0.sourceLanguageCode,
          target_language_codes: _v0.targetLanguageCodes,
          language_count: _v0.languageCount,
          speaker_count: _v0.speakerCount
        });
      }, [_v10]), _v13 = {
        trackLibraryAiBulkTranslateModalShown: _v11,
        trackLibraryAiBulkTranslateSubmitted: _v12,
        trackLibraryAiBulkTranslateCanceled: (0, _v2.useCallback)(_v0 => {
          null !== _v10 && _v10.track("library_ai_bulk_translate_canceled", {
            generation_id: _v0.generationId,
            page: _v0.page,
            video_count: _v0.videoCount,
            product_type: _v0.productType
          });
        }, [_v10]),
        trackLibraryAiBulkAiCreditsModalShown: (0, _v2.useCallback)(_v0 => {
          null !== _v10 && _v10.track("library_ai_bulk_ai_credits_modal_shown", {
            generation_id: _v0.generationId,
            credits_available: _v0.creditsAvailable,
            credits_for_usage: _v0.creditsForUsage,
            credits_remaining: _v0.creditsRemaining,
            product_type: _v0.productType
          });
        }, [_v10]),
        trackLibraryAiBulkConfirmed: (0, _v2.useCallback)(_v0 => {
          null !== _v10 && _v10.track("library_ai_bulk_confirmed", {
            generation_id: _v0.generationId,
            video_count: _v0.videoCount,
            product_type: _v0.productType,
            source_language_code: _v0.sourceLanguageCode,
            target_language_codes: _v0.targetLanguageCodes,
            language_count: _v0.languageCount,
            speaker_count: _v0.speakerCount,
            credits_available: _v0.creditsAvailable,
            credits_for_usage: _v0.creditsForUsage,
            credits_remaining: _v0.creditsRemaining,
            checkbox_status: _v0.checkboxStatus
          });
        }, [_v10])
      }, null === (_v14 = (0, _v2.useRef)(null)).current && (_v14.current = crypto.randomUUID()), _v15 = _v14.current, _v16 = (_v0, _v1, _v2, _v3) => {
        (0, _v27.sendBpEventWithContexts)("vimeo.select_credits_confirmation_modal", {
          ...(0, _v22.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          ...(0, _v25.buildTeamBpContextFromTeamUser)(_v9?.teamUser),
          ...(0, _v28.buildThirdPartyIntegrationBpContext)({
            integration_id: null,
            integration_name: null,
            is_partner: null
          }),
          ...(0, _v24.buildProductAnalyticsBpContext)({
            product: "ai",
            feature: "ai_bulk_translate",
            location: "modal",
            modal_name: "add_on_ai_credits_checkout",
            copy: _v0,
            flow: "dubbing" === _v1 ? "audio_and_subtitles" : "subtitles"
          }),
          ...(0, _v26.buildWebBpContext)({
            page_name: "video_library"
          })
        }, 1, {
          credits_available: _v2,
          credits_for_usage: _v3,
          credits_remaining: _v2 - _v3,
          checkbox_status: null
        });
      }, {
        sendNextTranslationStepEvent: (_v0, _v1 = {
          videoCount: 0,
          sourceLanguageCode: null,
          targetLanguageCodes: [],
          speakerCount: null
        }) => {
          (0, _v27.sendBpEventWithContexts)("vimeo.save_translate_settings", {
            ...(0, _v22.buildActionBpContext)({
              action_type: "click",
              feature: null
            }),
            ...(0, _v24.buildProductAnalyticsBpContext)({
              product: "ai",
              feature: "ai_bulk_translate",
              location: "modal",
              device_type: _v30(),
              modal_name: "translation_bulk_modal",
              flow: "dubbing" === _v0 ? "audio_and_subtitles" : "subtitles",
              copy: "next"
            }),
            ...(0, _v25.buildTeamBpContextFromTeamUser)(_v9?.teamUser),
            ...(0, _v26.buildWebBpContext)({
              page_name: "video_library"
            })
          }, 1), _v13.trackLibraryAiBulkTranslateSubmitted({
            generationId: _v15,
            videoCount: _v1.videoCount,
            productType: "dubbing" === _v0 ? "audio_and_subtitles" : "subtitles_only",
            sourceLanguageCode: _v1.sourceLanguageCode,
            targetLanguageCodes: _v1.targetLanguageCodes,
            languageCount: _v1.targetLanguageCodes.length,
            speakerCount: _v1.speakerCount
          });
        },
        sendViewCreditsConfirmationModalEvent: (_v0, _v1, _v2, _v3) => {
          (0, _v27.sendBpEventWithContexts)("vimeo.view_credits_confirmation_modal", {
            ...(0, _v24.buildProductAnalyticsBpContext)({
              product: "ai",
              feature: "ai_bulk_translate",
              location: "modal",
              modal_name: "add_on_ai_credits_checkout",
              copy: "review_and_translate",
              flow: "dubbing" === _v0 ? "audio_and_subtitles" : "subtitles"
            }),
            ...(0, _v26.buildWebBpContext)({
              page_name: "video_library"
            }),
            ...(0, _v23.buildViewBpContext)({
              view_type: "impression",
              feature: null
            }),
            ...(0, _v25.buildTeamBpContextFromTeamUser)(_v9?.teamUser),
            ...(0, _v28.buildThirdPartyIntegrationBpContext)({
              integration_id: null,
              integration_name: null,
              is_partner: null
            })
          }, 1, {
            credits_available: _v1,
            credits_for_usage: _v2,
            credits_remaining: _v3
          }), _v13.trackLibraryAiBulkAiCreditsModalShown({
            generationId: _v15,
            creditsAvailable: _v1,
            creditsForUsage: _v2,
            creditsRemaining: _v3,
            productType: "dubbing" === _v0 ? "audio_and_subtitles" : "subtitles_only"
          });
        },
        sendCancelTranslateSettingsEvent: (_v0, _v1) => {
          (0, _v27.sendBpEventWithContexts)("vimeo.cancel_translate_settings", {
            ...(0, _v22.buildActionBpContext)({
              action_type: "click",
              feature: null
            }),
            ...(0, _v24.buildProductAnalyticsBpContext)({
              product: "ai",
              feature: "ai_bulk_translate",
              location: "modal",
              modal_name: "translation_bulk_modal",
              flow: "dubbing" === _v0 ? "audio_and_subtitles" : "subtitles",
              copy: "cancel"
            }),
            ...(0, _v25.buildTeamBpContextFromTeamUser)(_v9?.teamUser),
            ...(0, _v26.buildWebBpContext)({
              page_name: "video_library"
            })
          }, 1, {
            device_type: _v30(),
            value: null
          }), _v13.trackLibraryAiBulkTranslateCanceled({
            generationId: _v15,
            page: "bulk_translate_settings",
            videoCount: _v1,
            productType: "dubbing" === _v0 ? "audio_and_subtitles" : "subtitling" === _v0 ? "subtitles_only" : null
          });
        },
        sendConfirmBulkTranslateEvent: _v0 => {
          let _v1 = "dubbing" === _v0.translationType ? "audio_and_subtitles" : "subtitling" === _v0.translationType ? "subtitles_only" : null;
          _v16("translate", _v0.translationType, _v0.creditsAvailable, _v0.creditsForUsage), null !== _v1 && _v13.trackLibraryAiBulkConfirmed({
            generationId: _v15,
            videoCount: _v0.videoCount,
            productType: _v1,
            sourceLanguageCode: _v0.sourceLanguageCode,
            targetLanguageCodes: _v0.targetLanguageCodes,
            languageCount: _v0.targetLanguageCodes.length,
            speakerCount: _v0.speakerCount,
            creditsAvailable: _v0.creditsAvailable,
            creditsForUsage: _v0.creditsForUsage,
            creditsRemaining: _v0.creditsAvailable - _v0.creditsForUsage,
            checkboxStatus: _v0.checkboxStatus
          });
        },
        sendCancelCreditsConfirmationModalEvent: (_v0, _v1, _v2, _v3) => {
          _v16("cancel", _v0, _v1, _v2), _v13.trackLibraryAiBulkTranslateCanceled({
            generationId: _v15,
            page: "credits_confirmation",
            videoCount: _v3,
            productType: "dubbing" === _v0 ? "audio_and_subtitles" : "subtitling" === _v0 ? "subtitles_only" : null
          });
        },
        sendViewTranslateVideoSettingsEvent: _v0 => {
          (0, _v27.sendBpEventWithContexts)("vimeo.view_translate_video_settings", {
            ...(0, _v24.buildProductAnalyticsBpContext)({
              product: "ai",
              feature: "ai_bulk_translate",
              location: "modal",
              modal_name: "translation_bulk_modal"
            }),
            ...(0, _v23.buildViewBpContext)({
              view_type: "impression",
              feature: null
            }),
            ...(0, _v25.buildTeamBpContextFromTeamUser)(_v9?.teamUser),
            ...(0, _v26.buildWebBpContext)({
              page_name: "video_library"
            })
          }, 1), _v13.trackLibraryAiBulkTranslateModalShown({
            generationId: _v15,
            videoCount: _v0
          });
        }
      });
    (0, _v2.useEffect)(function () {
      _v30(_v4?.length ?? 0);
    }, []);
    let {
        getPaginatedClipsFromFolders: _v32,
        fetchFolderVideoData: _v33,
        hasLoadedAllFolderPages: _v34,
        estimateFolderClipsData: _v35,
        isEstimateFolderClipsLoading: _v36,
        estimateFolderClipsDataError: _v37,
        folderClipsData: _v38,
        isFolderClipsDataLoading: _v39,
        folderClipsDataError: _v40,
        resetFolderVideoPaginationState: _v41
      } = function () {
        let [_v0, {
            data: _v1,
            loading: _v2,
            error: _v3
          }] = _v85(),
          [_v4, {
            data: _v5,
            loading: _v6,
            error: _v7
          }] = _v83(),
          [_v8, _v9] = (0, _v2.useState)(null),
          [_v10, _v11] = (0, _v2.useState)(null),
          [_v12, _v13] = (0, _v2.useState)(null),
          [_v14, _v15] = (0, _v2.useState)(null);
        (0, _v2.useEffect)(function () {
          _v9(_v1 ?? null);
        }, [_v1]), (0, _v2.useEffect)(function () {
          _v13(_v5 ?? null);
        }, [_v5]), (0, _v2.useEffect)(function () {
          _v11(_v3 ?? null);
        }, [_v3]), (0, _v2.useEffect)(function () {
          _v15(_v7 ?? null);
        }, [_v7]);
        let [_v16, _v17] = (0, _v2.useState)(1),
          [_v18, _v19] = (0, _v2.useState)(!1),
          [_v20, _v21] = (0, _v2.useState)([]),
          _v22 = _v80(),
          _v23 = (0, _v2.useRef)(!1),
          _v24 = (0, _v2.useCallback)(() => {
            _v17(1), _v21([]), _v19(!1), _v9(null), _v13(null), _v11(null), _v15(null);
          }, []),
          _v25 = (0, _v2.useCallback)((_v0, _v1, _v2, _v3) => {
            if (_v0 && _v18 && _v8 && !_v2) {
              let _v0 = _v8.data.map(_v0 => ({
                id: _v0.video.id,
                duration: _v0.video.duration
              }));
              if (_v21(_v0 => [..._v0, ..._v0]), null !== _v8.paging.next) {
                let _v0 = _v16 + 1;
                _v17(_v0), _v0({
                  where: {
                    userId: _v0,
                    projectId: _v1 || 0
                  },
                  select: ["video.duration", "video.id"],
                  query: {
                    perPage: 999,
                    page: _v0
                  }
                });
              } else {
                _v19(!1);
                let _v0 = 0 === _v20.length ? _v0 : [..._v20, ..._v0],
                  _v1 = _v0.map(_v0 => ({
                    clipId: _v0.id,
                    duration: _v0.duration
                  }));
                _v0.length > 0 && null !== _v2 && _v4({
                  select: ["serviceName", "jobNumbers", "creditsAmount", "minutes", "details", "rate", "size", "creditsPerMinute"],
                  where: {
                    userId: _v0
                  },
                  variables: {
                    serviceName: _v2,
                    videos: _v1,
                    jobNumbers: _v3
                  }
                });
              }
            }
          }, [_v8, _v2, _v18, _v16, _v20, _v0, _v4]);
        return (0, _v2.useEffect)(function () {
          _v8?.total !== 0 || _v23.current || (_v22(_v62, "warning"), _v23.current = !0);
        }, [_v8, _v22]), {
          getPaginatedClipsFromFolders: _v25,
          fetchFolderVideoData: (0, _v2.useCallback)((_v0, _v1) => {
            _v0 && _v1 && (_v21([]), _v19(!0), _v17(1), _v23.current = !1, _v0({
              where: {
                userId: Number(_v0),
                projectId: _v1
              },
              select: ["video.duration", "video.id"],
              query: {
                perPage: 999,
                page: 1
              }
            }));
          }, [_v0]),
          hasLoadedAllFolderPages: _v18,
          estimateFolderClipsData: _v12,
          isEstimateFolderClipsLoading: _v6,
          estimateFolderClipsDataError: _v14,
          folderClipsData: _v8,
          isFolderClipsDataLoading: _v2,
          folderClipsDataError: _v10,
          resetFolderVideoPaginationState: _v24
        };
      }(),
      {
        getClipsEstimateData: _v42,
        estimateClipsData: _v43,
        isEstimateClipsLoading: _v44,
        estimateClipsDataError: _v45,
        resetEstimateClipsState: _v46
      } = function () {
        let [_v0, {
            loading: _v1,
            data: _v2,
            error: _v3
          }] = _v83(),
          [_v4, _v5] = (0, _v2.useState)(null),
          [_v6, _v7] = (0, _v2.useState)(null);
        (0, _v2.useEffect)(function () {
          _v5(_v2 ?? null);
        }, [_v2]), (0, _v2.useEffect)(function () {
          _v7(_v3 ?? null);
        }, [_v3]);
        let _v8 = (0, _v2.useCallback)(() => {
          _v5(null), _v7(null);
        }, []);
        return {
          getClipsEstimateData: (0, _v2.useCallback)(({
            userId: _v0,
            clipItems: _v1,
            translationType: _v2,
            selectedLanguagesLength: _v3
          }) => {
            if (!_v0 || 0 === _v1.length || null === _v2) return;
            let _v4 = _v1.map(_v0 => ({
              clipId: _v0.videoId,
              duration: _v0.duration
            }));
            _v0({
              select: ["serviceName", "jobNumbers", "creditsAmount", "minutes", "details", "rate", "size", "creditsPerMinute"],
              where: {
                userId: Number(_v0)
              },
              variables: {
                serviceName: _v2,
                videos: _v4,
                jobNumbers: _v3
              }
            });
          }, [_v0]),
          estimateClipsData: _v4,
          isEstimateClipsLoading: _v1,
          estimateClipsDataError: _v6,
          resetEstimateClipsState: _v8
        };
      }(),
      _v47 = _v2 ? _v35 : _v43,
      _v48 = _v4?.length ?? _v47?.size ?? 0,
      _v49 = (0, _v2.useMemo)(() => _v23.map(_v0 => "code" in _v0 ? _v0.code : _v0.value), [_v23]),
      _v50 = (0, _v2.useCallback)(() => {
        _v26(_v21, {
          videoCount: _v48,
          sourceLanguageCode: null,
          targetLanguageCodes: _v49,
          speakerCount: null
        }), _v20(_v0 => _v0 + 1);
      }, [_v21, _v48, _v49]),
      _v51 = !!(_v45 || _v37 || _v40),
      _v52 = (0, _v2.useCallback)((_v0 = !0) => {
        _v0 && (0 === _v19 ? _v27(_v21, _v48) : 1 === _v19 && _v29(_v21, _v25, _v47?.creditsAmount ?? 0, _v48)), _v1(!1);
      }, [_v25, _v47?.creditsAmount, _v1, _v27, _v29, _v19, _v21, _v48]),
      {
        handleConfirmPurchase: _v53,
        isSubmitLoading: _v54,
        batchSessionJobError: _v55
      } = ((_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
        let [_v7, _v8] = (0, _v2.useState)({
            isActive: !1,
            sessionUri: null,
            pollCount: 0
          }),
          [_v9, {
            data: _v10,
            loading: _v11,
            error: _v12
          }] = _v79(),
          [_v13, {
            data: _v14,
            loading: _v15
          }] = _v78(),
          _v16 = _v80(),
          _v17 = (0, _v2.useRef)(_v16);
        _v17.current = _v16;
        let _v18 = (0, _v2.useContext)(_v20.ViewerContext),
          _v19 = _v18?.team?.ownerId,
          _v20 = (0, _v2.useRef)(!1);
        return (0, _v2.useEffect)(function () {
          let _v0 = _v10?.uri;
          _v0 ? _v8({
            isActive: !0,
            sessionUri: _v0,
            pollCount: 0
          }) : _v20.current && !_v11 && _v17.current(_v59, "warning"), _v20.current = _v11;
        }, [_v11, _v10]), (0, _v2.useEffect)(function () {
          if (!_v7.isActive || !_v19) return;
          let _v0 = setInterval(() => {
            if (_v7.pollCount >= 12) {
              clearInterval(_v0), _v17.current(_v63, "info"), _v8({
                isActive: !1,
                sessionUri: null,
                pollCount: 0
              }), _v5?.(), _v6?.();
              return;
            }
            _v15 || (_v13({
              where: {
                userId: _v19
              },
              select: ["status", "uri"]
            }), _v8(_v0 => ({
              ..._v0,
              pollCount: _v0.pollCount + 1
            })));
          }, 0);
          return () => clearInterval(_v0);
        }, [_v7, _v19, _v15, _v13, _v5, _v6]), (0, _v2.useEffect)(function () {
          if (!_v7.isActive || !_v14?.data) return;
          let _v0 = _v14.data.find(_v0 => _v0.uri === _v7.sessionUri);
          _v0 && (_v8({
            isActive: !1,
            sessionUri: null,
            pollCount: 0
          }), "ERROR" === _v0.status ? _v17.current(_v59, "warning") : _v6?.(), _v5?.());
        }, [_v14, _v7, _v5, _v6]), {
          handleConfirmPurchase: () => {
            let _v0;
            if (!_v19) return void _v16(_v60, "warning");
            if (!_v1) return void _v16(_v61, "warning");
            let _v1 = _v0.length > 0 && "code" in _v0[0];
            _v0 = "dubbing" === _v1 && _v1 ? _v0.map(_v0 => ({
              target_lang: _v0.code,
              target_accent: _v0.accent?.key
            })) : _v0.map(_v0 => _v0.value), _v9({
              where: {
                userId: _v19
              },
              select: ["uri"],
              variables: {
                type: _v81[_v1],
                targetLanguages: _v0,
                serviceOverrideCache: !1,
                ...(_v2 && _v3 ? {
                  folder_ids: [_v3]
                } : {}),
                ...(_v4?.length ? {
                  clip_ids: _v4.map(_v0 => _v0.videoId)
                } : {})
              }
            });
          },
          isSubmitLoading: _v11 || _v7.isActive,
          batchSessionJobError: _v12
        };
      })(_v23, _v21, _v2, _v5, _v4, (0, _v2.useCallback)(() => {
        _v52(!1);
      }, [_v52]), _v6);
    (0, _v2.useEffect)(function () {
      _v32(_v18?.team?.ownerId, _v5, _v21, _v23.length);
    }, [_v32, _v18?.team?.ownerId, _v5, _v21, _v23.length, _v38, _v39]), (0, _v2.useEffect)(function () {
      0 === _v19 && (_v35 && !_v34 || _v43) && _v50();
    }, [_v19, _v34, _v35, _v50, _v43]);
    let _v56 = _v2 && _v3 ? (0, _v33.translate)({
        singular: 'Translate "{FOLDER_NAME}"',
        replacements: {
          FOLDER_NAME: _v3
        },
        dictionary: {
          es: {
            singular: 'Traduce "{FOLDER_NAME}"'
          },
          "de-DE": {
            singular: "„{FOLDER_NAME}“ übersetzen"
          },
          "fr-FR": {
            singular: "Traduire « {FOLDER_NAME} »"
          },
          "ja-JP": {
            singular: "「{FOLDER_NAME}」を翻訳"
          },
          "ko-KR": {
            singular: '"{FOLDER_NAME}" 번역'
          },
          "pt-BR": {
            singular: 'Traduzir "{FOLDER_NAME}"'
          },
          "zh-CN": {
            singular: '翻译 "{FOLDER_NAME}"'
          }
        }
      }) : _v4 ? (_v17 = _v4.length, (0, _v33.translate)({
        singular: "Translate {COUNT} videos",
        replacements: {
          COUNT: _v17
        },
        dictionary: {
          es: {
            singular: "Traducir {COUNT} videos"
          },
          "de-DE": {
            singular: "{COUNT} Videos übersetzen"
          },
          "fr-FR": {
            singular: "Traduire {COUNT} vidéos"
          },
          "ja-JP": {
            singular: "{COUNT}件の動画を翻訳"
          },
          "ko-KR": {
            singular: "동영상 {COUNT}개 번역하기"
          },
          "pt-BR": {
            singular: "Traduzir {COUNT} vídeos"
          },
          "zh-CN": {
            singular: "翻译 {COUNT} 个视频"
          }
        }
      })) : null,
      _v57 = [{
        component: (0, _v1.jsx)(_v102, {
          canTranslateText: _v7,
          canTranslateDubbing: _v8,
          selectedLanguages: _v23,
          setSelectedLanguages: _v24,
          setTranslationType: _v0 => {
            _v22(_v0), _v24([]);
          },
          translationType: _v21,
          stepOneHasError: _v51
        }),
        header: _v56,
        nextText: _v43,
        isLoading: !!((_v34 || _v36 || _v44) && !_v51),
        handleNextStep: () => {
          let _v0 = _v18?.team?.ownerId;
          _v0 && (_v5 && _v2 && _v33(String(_v18?.team?.ownerId), _v5), !_v2 && _v4 && _v4.length > 0 && _v42({
            userId: _v0,
            clipItems: _v4,
            translationType: _v21,
            selectedLanguagesLength: _v23.length
          }));
        },
        isNextDisabled: 0 === _v23.length
      }, {
        component: (0, _v1.jsx)(_v91, {
          creditsPerMin: _v47?.creditsPerMinute,
          totalCost: _v47?.creditsAmount,
          totalDuration: _v47?.minutes,
          selectedLanguages: _v23,
          translationType: _v21,
          sendViewCreditsConfirmationModalEvent: _v31
        }),
        header: _v40,
        nextText: _v41,
        prevText: _v39,
        isLoading: _v54 && !_v55,
        handleNextStep: () => {
          _v28({
            translationType: _v21,
            creditsAvailable: _v25,
            creditsForUsage: _v47?.creditsAmount ?? 0,
            videoCount: _v48,
            sourceLanguageCode: null,
            targetLanguageCodes: _v49,
            speakerCount: null,
            checkboxStatus: null
          }), _v53();
        },
        isNextDisabled: _v54 || !_v47?.creditsAmount || _v25 < _v47?.creditsAmount,
        legalText: (0, _v1.jsx)(_v17.Text, {
          variant: "body-xs",
          fontWeight: "350",
          color: "text-secondary",
          children: _v48
        }),
        subFooterText: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v19.VimeoCoin, {
            boxSize: "2xs"
          }), (0, _v1.jsx)(_v11.Box, {
            as: "span",
            ml: (0, _v15.rem)(4),
            children: _v25.toLocaleString()
          }), (0, _v1.jsx)(_v11.Box, {
            as: "span",
            ml: (0, _v15.rem)(4),
            children: _v56
          })]
        })
      }];
    return (0, _v1.jsxs)(_v5.Modal, {
      size: "md",
      isOpen: _v0,
      onClose: _v52,
      closeOnOverlayClick: !1,
      children: [(0, _v1.jsx)(_v6.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
        children: [(0, _v1.jsxs)(_v11.Box, {
          paddingLeft: "15px",
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateColumns: _v19 > 0 ? "20px 1fr" : "1fr",
          alignItems: "center",
          children: [_v19 > 0 && (0, _v1.jsx)(_v3.IconButton, {
            "aria-label": "prev-step",
            size: "xs",
            marginTop: (0, _v15.rem)(20),
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v18.ChevronLeft, {}),
            onClick: () => {
              _v41(), _v46(), _v20(_v0 => _v0 - 1);
            },
            isDisabled: _v36
          }), (0, _v1.jsx)(_v8.ModalHeader, {
            paddingLeft: (0, _v15.rem)(10),
            flex: 1,
            fontSize: (0, _v15.rem)(20),
            children: _v57[_v19]?.header
          })]
        }), (0, _v1.jsx)(_v4.ModalCloseButton, {
          onClick: () => _v52()
        }), _v36 ? (0, _v1.jsx)(_v11.Box, {
          h: (0, _v15.rem)(268),
          children: (0, _v1.jsxs)(_v16.Center, {
            h: "100%",
            display: "flex",
            flexDirection: "column",
            children: [(0, _v1.jsx)(_v17.Text, {
              pt: (0, _v15.rem)(8),
              variant: "body-md",
              children: _v38
            }), (0, _v1.jsx)(_v13.Spinner, {})]
          })
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v9.ModalBody, {
            children: _v57[_v19]?.component
          }), (0, _v1.jsxs)(_v10.ModalFooter, {
            flexDirection: "column",
            gap: (0, _v15.rem)(16),
            children: [_v57[_v19]?.legalText && _v57[_v19].legalText, (0, _v1.jsxs)(_v12.Flex, {
              width: "100%",
              gap: (0, _v15.rem)(16),
              children: [(0, _v1.jsx)(_v14.Button, {
                flex: 1,
                variant: "secondary",
                onClick: () => _v52(),
                children: _v39
              }), (0, _v1.jsx)(_v14.Button, {
                flex: 1,
                variant: "primary",
                isLoading: _v57[_v19]?.isLoading,
                onClick: () => _v57[_v19]?.handleNextStep(),
                isDisabled: _v57[_v19]?.isNextDisabled,
                children: _v57[_v19].nextText
              })]
            }), _v57[_v19]?.subFooterText && (0, _v1.jsx)(_v12.Flex, {
              fontSize: "body-sm",
              color: "text-secondary",
              justifyContent: "center",
              width: "100%",
              children: _v57[_v19].subFooterText
            })]
          })]
        })]
      })]
    });
  }
  async function _v104({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      batchsessionId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v70.measureLatency)("getUserAiBatchsession", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/ai/batchsessions/${_v3}?${(0, _v71.searchQueryString)(_v4)}&fields=${_v1.map(_v71.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v71.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v71.deepCamelCase)(_v1);
    });
  }
  async function _v105({
    baseUrl: _v0,
    where: {
      userId: _v1,
      batchsessionId: _v2
    },
    ..._v3
  }) {
    return (0, _v70.measureLatency)("deleteUserAiBatchsession", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/ai/batchsessions/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v71.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v71.deepCamelCase)(_v1);
    });
  }
  async function _v106({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      batchsessionId: _v4
    },
    ..._v5
  }) {
    return (0, _v70.measureLatency)("patchUserAiBatchsession", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/ai/batchsessions/${_v4}?fields=${_v1.map(_v71.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v71.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v71.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v71.deepCamelCase)(_v1);
    });
  }
  function _v107() {
    let {
        mutate: _v0
      } = (0, _v75.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v77.useGctlConfig)(),
      [_v5, _v6] = (0, _v69.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/ai/batchsessions/${_v0.where.batchsessionId}${(0, _v69.serializeQuery)(_v0)}`, _v106({
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
  _v0.s(["deleteUserAiBatchsession", 0, _v105, "getUserAiBatchsession", 0, _v104, "patchUserAiBatchsession", 0, _v106], 0), "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v77.useGctlConfig)();
    return (0, _v74.default)(_v2 ? `/users/${_v2.where.userId}/ai/batchsessions/${_v2.where.batchsessionId}${(0, _v69.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v104({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/ai/batchsessions/:batchsessionId",
    method: "GET"
  }), "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v75.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v77.useGctlConfig)(),
      [_v5, _v6] = (0, _v69.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/ai/batchsessions/${_v0.where.batchsessionId}${(0, _v69.serializeQuery)(_v0)}`, _v104({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/users/:userId/ai/batchsessions/:batchsessionId",
    method: "GET"
  }), "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v75.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v77.useGctlConfig)(),
      [_v5, _v6] = (0, _v69.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/ai/batchsessions/${_v0.where.batchsessionId}${(0, _v69.serializeQuery)(_v0)}`, _v105({
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
  }, {
    endpoint: "/users/:userId/ai/batchsessions/:batchsessionId",
    method: "DELETE"
  }), "true" === _v68.default.env.STORYBOOK && (0, _v69.assignMswData)(_v107, {
    endpoint: "/users/:userId/ai/batchsessions/:batchsessionId",
    method: "PATCH"
  });
  let _v108 = ({
      isOpen: _v0,
      onClose: _v1,
      job: _v2,
      onJobActionComplete: _v3
    }) => {
      let [_v4, {
          loading: _v5,
          error: _v6
        }] = _v107(),
        _v7 = (0, _v31.useToast)(),
        _v8 = (0, _v2.useRef)(0),
        _v9 = (0, _v2.useCallback)(() => {
          let _v0 = Date.now();
          _v0 - _v8.current > 0 && _v7({
            title: "Something went wrong",
            status: "error"
          }), _v8.current = _v0;
        }, [_v7]);
      (0, _v2.useEffect)(function () {
        _v6 && _v9();
      }, [_v6, _v9]);
      let _v10 = (0, _v2.useCallback)(() => {
        if (!_v2?.uri) {
          _v9(), _v1();
          return;
        }
        let _v0 = _v2.uri.split("/"),
          _v1 = parseInt(_v0[2], 10),
          _v2 = _v0[_v0.length - 1];
        if (!_v1 || isNaN(_v1) || !_v2) {
          _v9(), _v1();
          return;
        }
        _v4({
          select: ["uri"],
          where: {
            userId: _v1,
            batchsessionId: _v2
          },
          variables: {
            action: "PAUSE"
          }
        }).then(() => {
          _v3 && _v3({
            isTriggeredByUser: !0
          });
        }).catch(() => {
          _v9();
        }).finally(() => {
          _v1();
        });
      }, [_v2, _v4, _v1, _v3, _v9]);
      return _v2?.uri ? (0, _v1.jsxs)(_v5.Modal, {
        isOpen: _v0,
        onClose: _v1,
        children: [(0, _v1.jsx)(_v6.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
          children: [(0, _v1.jsx)(_v8.ModalHeader, {
            fontSize: "heading-md",
            children: _v64.title
          }), (0, _v1.jsx)(_v9.ModalBody, {
            children: (0, _v1.jsx)(_v17.Text, {
              variant: "body-xl",
              fontSize: "body-md",
              children: _v64.message
            })
          }), (0, _v1.jsxs)(_v10.ModalFooter, {
            children: [(0, _v1.jsx)(_v14.Button, {
              onClick: _v1,
              variant: "tertiary",
              isDisabled: _v5,
              fontSize: "heading-xs",
              children: _v64.goBack
            }), (0, _v1.jsx)(_v14.Button, {
              onClick: _v10,
              variant: "primary",
              isLoading: _v5,
              fontSize: "heading-xs",
              children: _v64.confirmCancel
            })]
          })]
        })]
      }) : null;
    },
    _v109 = (0, _v2.createContext)({
      setModalContextState: () => console.log("noop"),
      openCancelJobModal: () => console.log("noop")
    }),
    _v110 = _v0 => (0, _v1.jsx)(_v66, {
      children: (0, _v1.jsx)(_v97, {
        children: (0, _v1.jsx)(_v103, {
          ..._v0
        })
      })
    });
  _v0.s(["BulkAiModalProvider", 0, ({
    children: _v0,
    onJobActionComplete: _v1
  }) => {
    let [_v2, _v3] = (0, _v2.useState)({
        isActive: !1,
        state: null
      }),
      [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(null),
      {
        isActive: _v8,
        state: _v9
      } = _v2,
      _v10 = (0, _v2.useCallback)(_v0 => {
        _v7(_v0), _v5(!0);
      }, []),
      _v11 = (0, _v2.useCallback)(() => {
        _v7(null), _v5(!1);
      }, []);
    return (0, _v1.jsxs)(_v109.Provider, {
      value: {
        setModalContextState: _v3,
        openCancelJobModal: _v10
      },
      children: [_v0, _v8 && (0, _v1.jsx)(_v110, {
        isModalOpen: _v8,
        handleModalChange: _v0 => {
          _v0 || _v3({
            isActive: !1,
            state: null
          });
        },
        ..._v9
      }), _v4 && _v6 && (0, _v1.jsx)(_v108, {
        isOpen: _v4,
        onClose: _v11,
        job: _v6,
        onJobActionComplete: _v1
      })]
    });
  }, "useBulkAiModal", 0, () => {
    let {
      setModalContextState: _v0,
      openCancelJobModal: _v1
    } = (0, _v2.useContext)(_v109);
    if (!_v0 || !_v1) throw Error("useBulkAiModal must be used within a BulkAiModalProvider");
    return {
      openBulkAiModal: _v0 => _v0({
        isActive: !0,
        state: _v0
      }),
      closeBulkAiModal: () => _v0({
        isActive: !1,
        state: null
      }),
      openCancelJobModal: _v1
    };
  }], 0);
  var _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0);
  let _v115 = _v0 => "completed" === _v0 || "completed_with_errors" === _v0 || "timeout" === _v0,
    _v116 = (0, _v111.default)(() => _v0.A(0).then(_v0 => _v0.BulkPrivacyModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v117 = (0, _v112.create)(_v0 => ({
      modalProps: null,
      openBulkPrivacyModal: _v0 => _v0({
        modalProps: _v0
      }),
      closeBulkPrivacyModal: () => _v0({
        modalProps: null
      }),
      activeBatches: [],
      addActiveBatch: _v0 => _v0(_v0 => !_v0 || _v0.activeBatches.some(_v0 => _v0.batchId === _v0.batchId) ? _v0 : {
        activeBatches: [..._v0.activeBatches, _v0]
      }),
      removeActiveBatch: _v0 => _v0(_v0 => ({
        activeBatches: _v0.activeBatches.filter(_v0 => _v0.batchId !== _v0)
      }))
    })),
    _v118 = ({
      batch: _v0
    }) => {
      let _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8 = _v117(_v0 => _v0.removeActiveBatch),
        _v9 = (0, _v31.useToast)({
          icon: (0, _v1.jsx)(_v31.ToastIcon, {})
        }),
        _v10 = (0, _v2.useCallback)(_v0 => {
          _v9.close((0, _v113.getUpdatingToastId)(_v0.batchId)), "completed" === _v0.status ? _v9({
            title: (0, _v33.translate)({
              singular: "Privacy settings have been updated",
              dictionary: {
                es: {
                  singular: "La configuración de privacidad se ha actualizado"
                },
                "de-DE": {
                  singular: "Die Datenschutzeinstellungen wurden aktualisiert"
                },
                "fr-FR": {
                  singular: "Les paramètres de confidentialité ont été mis à jour"
                },
                "ja-JP": {
                  singular: "プライバシー設定が更新されました"
                },
                "ko-KR": {
                  singular: "프라이버시 설정이 업데이트되었습니다"
                },
                "pt-BR": {
                  singular: "As configurações de privacidade foram atualizadas"
                },
                "zh-CN": {
                  singular: "隐私设置已更新"
                }
              }
            }),
            variant: "success",
            duration: 0,
            isClosable: !0
          }) : "completed_with_errors" === _v0.status && _v9({
            title: (0, _v33.translate)({
              singular: "{COUNT} item could not be updated",
              plural: "{COUNT} items could not be updated",
              count: _v0.failed,
              replacements: {
                COUNT: _v0.failed
              },
              dictionary: {
                es: {
                  singular: "{COUNT} elemento no se pudo actualizar",
                  plural: "{COUNT} elementos no se pudieron actualizar"
                },
                "de-DE": {
                  singular: "{COUNT} Element konnte nicht aktualisiert werden",
                  plural: "{COUNT} Elemente konnten nicht aktualisiert werden"
                },
                "fr-FR": {
                  singular: "{COUNT} élément n'a pas pu être mis à jour",
                  plural: "{COUNT} éléments n'ont pas pu être mis à jour"
                },
                "ja-JP": {
                  singular: "{COUNT} 件のアイテムを更新できませんでした",
                  plural: "{COUNT} 件のアイテムを更新できませんでした"
                },
                "ko-KR": {
                  singular: "{COUNT}개의 항목을 업데이트할 수 없습니다",
                  plural: "{COUNT}개의 항목을 업데이트할 수 없습니다"
                },
                "pt-BR": {
                  singular: "{COUNT} item não pôde ser atualizado",
                  plural: "{COUNT} itens não puderam ser atualizados"
                },
                "zh-CN": {
                  singular: "{COUNT} 个项目无法更新",
                  plural: "{COUNT} 个项目无法更新"
                }
              }
            }),
            variant: "warning"
          }), _v8(_v0.batchId);
        }, [_v9, _v8, _v0.batchId]),
        _v11 = (0, _v2.useCallback)(() => {
          _v8(_v0.batchId);
        }, [_v8, _v0.batchId]);
      return _v1 = _v0?.batchId, _v2 = _v0?.userId, _v3 = (0, _v2.useRef)(_v10), _v4 = (0, _v2.useRef)(_v11), _v5 = (0, _v2.useRef)(0), _v6 = (0, _v2.useRef)(!1), (0, _v2.useEffect)(() => {
        _v3.current = _v10;
      }, [_v10]), (0, _v2.useEffect)(() => {
        _v4.current = _v11;
      }, [_v11]), (0, _v2.useEffect)(() => {
        _v5.current = 0, _v6.current = !1;
      }, [_v1, _v2]), _v7 = () => {
        _v6.current || (_v6.current = !0, _v4.current?.());
      }, (0, _v114.useGetUserBulkAction)(() => _v2 && _v1 ? {
        where: {
          userId: _v2,
          batchId: _v1
        }
      } : null, {
        refreshInterval: _v0 => {
          let _v1 = _v0?.status;
          return !_v0 || _v5.current >= 60 || _v115(_v1) ? 0 : 0;
        },
        revalidateOnFocus: !1,
        shouldRetryOnError: !1,
        onSuccess: _v0 => {
          if (_v115(_v0?.status)) return void (!_v6.current && (_v6.current = !0, _v3.current?.(_v0)));
          _v5.current += 1, _v5.current >= 60 && _v7();
        },
        onError: _v7
      }), null;
    };
  _v0.s(["BulkPrivacyModalHost", 0, () => {
    let _v0 = _v117(_v0 => _v0.modalProps),
      _v1 = _v117(_v0 => _v0.closeBulkPrivacyModal),
      _v2 = _v117(_v0 => _v0.activeBatches),
      _v3 = _v117(_v0 => _v0.addActiveBatch);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v0 && (0, _v1.jsx)(_v116, {
        ..._v0,
        isOpen: !!_v0,
        onClose: _v1,
        onSubmitAccepted: _v3
      }), _v2.map(_v0 => (0, _v1.jsx)(_v118, {
        batch: _v0
      }, _v0.batchId))]
    });
  }, "useBulkPrivacyModal", 0, () => ({
    openBulkPrivacyModal: _v117(_v0 => _v0.openBulkPrivacyModal),
    closeBulkPrivacyModal: _v117(_v0 => _v0.closeBulkPrivacyModal)
  })], 0);
}