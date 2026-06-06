{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9({
    featuresList: _v0
  }) {
    return (0, _v1.jsx)(_v6.Flex, {
      as: "ul",
      flexDir: "column",
      children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v6.Flex, {
        as: "li",
        my: "sm",
        color: "slate.50",
        fontWeight: "medium",
        children: [(0, _v1.jsx)(_v8.Checkmark, {
          boxSize: (0, _v7.rem)(20),
          mr: "sm",
          fill: "slate.50"
        }), _v0]
      }, `feature-${_v1}`))
    });
  }
  var _v10 = _v0.i(0);
  let _v11 = {
    ContactUs: (0, _v10.translate)({
      singular: "Contact us",
      dictionary: {
        es: {
          singular: "Contáctenos"
        },
        "de-DE": {
          singular: "Kontaktieren Sie uns"
        },
        "fr-FR": {
          singular: "Contactez-nous"
        },
        "ja-JP": {
          singular: "お問い合わせ"
        },
        "ko-KR": {
          singular: "문의하기"
        },
        "pt-BR": {
          singular: "Entre em contato conosco"
        },
        "zh-CN": {
          singular: "联系我们"
        }
      }
    }),
    CaptureLeadsAndViewerLevelInsights: (0, _v10.translate)({
      singular: "Capture leads and viewer-level insights",
      dictionary: {
        es: {
          singular: "Capte clientes potenciales y obtenga información a nivel del espectador"
        },
        "de-DE": {
          singular: "Erfassen Sie Leads und Einblicke auf Zuschauerebene"
        },
        "fr-FR": {
          singular: "Identifiez les prospects potentiels et obtenez des informations sur les spectateurs."
        },
        "ja-JP": {
          singular: "リードと視聴者レベルのインサイトを取得"
        },
        "ko-KR": {
          singular: "리드 및 시청자 수준의 인사이트 확보"
        },
        "pt-BR": {
          singular: "Capture leads e insights no nível do espectador"
        },
        "zh-CN": {
          singular: "捕捉潜在客户和观众层面的见解"
        }
      }
    }),
    Explore: (0, _v10.translate)({
      singular: "Explore",
      dictionary: {
        es: {
          singular: "Explora"
        },
        "de-DE": {
          singular: "Entdecken"
        },
        "fr-FR": {
          singular: "Explorer"
        },
        "ja-JP": {
          singular: "検索"
        },
        "ko-KR": {
          singular: "탐색"
        },
        "zh-CN": {
          singular: "探索"
        }
      }
    }),
    Upgrade: (0, _v10.translate)({
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
    UpgradeBannerText: (0, _v10.translate)({
      singular: "Upgrade to capture leads and viewer-level insights with registration",
      dictionary: {
        es: {
          singular: "Actualice su suscripción para captar clientes potenciales e información a nivel del espectador con el registro"
        },
        "de-DE": {
          singular: "Nehmen Sie ein Upgrade vor, um mit der Registrierung Leads und Einblicke auf Zuschauendenebene zu erhalten"
        },
        "fr-FR": {
          singular: "Passez au niveau supérieur pour générer des prospects et obtenir des données clés sur les spectateurs grâce au processus d'inscription"
        },
        "ja-JP": {
          singular: "アップグレードして、登録することでリードと視聴者レベルのインサイトを取得しましょう。"
        },
        "ko-KR": {
          singular: "등록을 통해 리드 및 뷰어 수준의 인사이트를 확보할 수 있도록 업그레이드하세요."
        },
        "pt-BR": {
          singular: "Faça o upgrade para capturar leads e insights no nível do espectador com as inscrições"
        },
        "zh-CN": {
          singular: "通过注册升级以捕获潜在客户和观众级别的见解"
        }
      }
    }),
    UpgradePromptText: (0, _v10.translate)({
      singular: "Upgrade to capture leads and viewer-level insights with registration",
      dictionary: {
        es: {
          singular: "Actualice su suscripción para captar clientes potenciales e información a nivel del espectador con el registro"
        },
        "de-DE": {
          singular: "Nehmen Sie ein Upgrade vor, um mit der Registrierung Leads und Einblicke auf Zuschauendenebene zu erhalten"
        },
        "fr-FR": {
          singular: "Passez au niveau supérieur pour générer des prospects et obtenir des données clés sur les spectateurs grâce au processus d'inscription"
        },
        "ja-JP": {
          singular: "アップグレードして、登録することでリードと視聴者レベルのインサイトを取得しましょう。"
        },
        "ko-KR": {
          singular: "등록을 통해 리드 및 뷰어 수준의 인사이트를 확보할 수 있도록 업그레이드하세요."
        },
        "pt-BR": {
          singular: "Faça o upgrade para capturar leads e insights no nível do espectador com as inscrições"
        },
        "zh-CN": {
          singular: "通过注册升级以捕获潜在客户和观众级别的见解"
        }
      }
    }),
    UpgradeInfoForTeamUsers: (0, _v10.translate)({
      singular: "Your team’s plan does not include registration. Reach out to your account owner for more details.",
      dictionary: {
        es: {
          singular: "El plan de su equipo no incluye el registro. Póngase en contacto con el propietario de la cuenta para obtener más detalles."
        },
        "de-DE": {
          singular: "Der Plan für Ihr Team beinhaltet keine Registrierung. Weitere Informationen erhalten Sie von Ihrem Kontoinhaber."
        },
        "fr-FR": {
          singular: "L'abonnement de votre équipe n'inclut pas l'inscription. Contactez le propriétaire de votre compte pour plus de détails."
        },
        "ja-JP": {
          singular: "チームのプランに登録は含まれていません。詳しくは、アカウント所有者にお問い合わせください。"
        },
        "ko-KR": {
          singular: "팀의 요금제에 등록이 포함되어 있지 않습니다. 자세한 내용은 계정 소유자에게 문의하세요."
        },
        "pt-BR": {
          singular: "O plano da sua equipe não inclui o registro. Entre em contato com o proprietário da conta para obter mais detalhes."
        },
        "zh-CN": {
          singular: "您团队的套餐不包括注册。请联系您的帐户所有者了解更多详情。"
        }
      }
    }),
    UpgradeModalEventHeaderText: (0, _v10.translate)({
      singular: "Create engaging events with ease",
      dictionary: {
        es: {
          singular: "Crea eventos atractivos con facilidad"
        },
        "de-DE": {
          singular: "Erstellen Sie mühelos ansprechende Veranstaltungen"
        },
        "fr-FR": {
          singular: "Créez des événements engageants facilement"
        },
        "ja-JP": {
          singular: "魅力的なイベントを簡単に作成"
        },
        "ko-KR": {
          singular: "손쉽게 참여도 높은 이벤트를 제작하세요"
        },
        "pt-BR": {
          singular: "Crie eventos envolventes com facilidade"
        },
        "zh-CN": {
          singular: "轻松创建引人参与的活动"
        }
      }
    }),
    UpgradeModalEventSubHeaderText: (0, _v10.translate)({
      singular: "Host any type of virtual event, from webinars to town halls, team trainings, and more.",
      dictionary: {
        es: {
          singular: "Organice cualquier tipo de evento virtual, desde seminarios web hasta reuniones generales, capacitaciones para equipos y mucho más."
        },
        "de-DE": {
          singular: "Veranstalten Sie jede Art von virtuellem Event, von Webinaren bis hin zu Mitarbeiterversammlungen, Teambesprechungen und mehr."
        },
        "fr-FR": {
          singular: "Animez n'importe quel type d'événement virtuel, qu'il s'agisse de webinaires, d'assemblées, de formations d'équipe, etc."
        },
        "ja-JP": {
          singular: "ウェビナー、全社会議、チームトレーニングなど、あらゆる種類のバーチャルイベントをホスティング。"
        },
        "ko-KR": {
          singular: "웨비나, 타운홀, 팀 교육 등 유형에 구애받지 않고 가상 이벤트를 개최하세요."
        },
        "pt-BR": {
          singular: "Organize qualquer tipo de evento virtual, como webinars, reuniões, treinamentos em equipe e muito mais."
        },
        "zh-CN": {
          singular: "举办任何类型的虚拟活动，从网络研讨会到员工大会、团队培训等。"
        }
      }
    }),
    UpgradeModalVideoHeaderText: (0, _v10.translate)({
      singular: "Upgrade to capture leads with registration",
      dictionary: {
        es: {
          singular: "Actualice su suscripción para captar clientes potenciales con el registro"
        },
        "de-DE": {
          singular: "Nehmen Sie ein Upgrade vor, um mit der Registrierung Leads zu erfassen."
        },
        "fr-FR": {
          singular: "Effectuez une mise à niveau pour collecter des opportunités commerciales grâce à l'inscription"
        },
        "ja-JP": {
          singular: "アップグレードして登録し、リードを取得しましょう。"
        },
        "ko-KR": {
          singular: "등록을 통해 리드를 수집하려면 업그레이드하세요"
        },
        "pt-BR": {
          singular: "Faça o upgrade para capturar leads com inscrição."
        },
        "zh-CN": {
          singular: "立即升级，通过注册捕获潜在客户"
        }
      }
    }),
    UpgradeModalVideoSubHeaderText: (0, _v10.translate)({
      singular: "Add a custom form to any video or event.",
      dictionary: {
        es: {
          singular: "Agregue un formulario personalizado a cualquier video o evento."
        },
        "de-DE": {
          singular: "Fügen Sie ein benutzerdefiniertes Formular zu einem beliebigen Video oder Event hinzu."
        },
        "fr-FR": {
          singular: "Ajoutez un formulaire personnalisé à une vidéo ou un événement."
        },
        "ja-JP": {
          singular: "動画またはイベントにカスタムフォームを追加します。"
        },
        "ko-KR": {
          singular: "동영상이나 이벤트에 커스텀 양식을 추가하세요."
        },
        "pt-BR": {
          singular: "Adicione um formulário personalizado a qualquer vídeo ou evento."
        },
        "zh-CN": {
          singular: "将自定义表单添加到任何视频或活动。"
        }
      }
    }),
    UpgradeModalEnterpriseSubtitle: (0, _v10.translate)({
      singular: "Host events of all kinds, from webinars to live broadcasts, team events, and more.",
      dictionary: {
        es: {
          singular: "Organice eventos de todo tipo, desde seminarios web hasta transmisiones en vivo, eventos de equipo y mucho más."
        },
        "de-DE": {
          singular: "Hosten Sie Events aller Art, von Webinaren bis hin zu Live-Übertragungen, Team-Events und mehr."
        },
        "fr-FR": {
          singular: "Animez des événements de toutes sortes, qu'il s'agisse de webinaires, de diffusions en direct, d'événements d'équipe, etc."
        },
        "ja-JP": {
          singular: "ウェビナー、ライブ配信、チームイベントなど、あらゆる種類のイベントをホスティング。"
        },
        "ko-KR": {
          singular: "웨비나부터 라이브 방송, 팀 이벤트 등 모든 종류의 이벤트를 주최할 수 있습니다."
        },
        "pt-BR": {
          singular: "Organize eventos de todos os tipos, como webinars, transmissões ao vivo, eventos de equipe e muito mais."
        },
        "zh-CN": {
          singular: "举办各种活动，从网络研讨会到直播、团队活动等。"
        }
      }
    }),
    EnterpriseTalkToTeam: (0, _v10.translate)({
      singular: "Talk to our team to add registration to your Enterprise plan.",
      dictionary: {
        es: {
          singular: "Hable con nuestro equipo para agregar la inscripción a su plan Enterprise."
        },
        "de-DE": {
          singular: "Sprechen Sie mit unserem Team, um die Registrierung zu Ihrem Enterprise-Tarif hinzuzufügen."
        },
        "fr-FR": {
          singular: "Contactez notre équipe pour ajouter l'inscription à votre forfait Entreprise."
        },
        "ja-JP": {
          singular: "Enterpriseプランに登録を追加するには、Vimeoのチームまでご相談ください。"
        },
        "ko-KR": {
          singular: "Enterprise 요금제에 등록 기능을 추가하려면 저희 팀에 문의하세요."
        },
        "pt-BR": {
          singular: "Fale com nossa equipe para adicionar inscrições ao seu plano Enterprise."
        },
        "zh-CN": {
          singular: "请联系我们的团队，将注册信息添加到您的 Enterprise 套餐中。"
        }
      }
    }),
    EnterpriseEventFeaturesList: [(0, _v10.translate)({
      singular: "Unlimited videos",
      dictionary: {
        es: {
          singular: "Videos ilimitados"
        },
        "de-DE": {
          singular: "Unbegrenzte Videos"
        },
        "fr-FR": {
          singular: "Nombre illimité de vidéos"
        },
        "ja-JP": {
          singular: "無制限の動画"
        },
        "ko-KR": {
          singular: "동영상 무제한"
        },
        "pt-BR": {
          singular: "Vídeos ilimitados"
        },
        "zh-CN": {
          singular: "无限数量的视频"
        }
      }
    }), (0, _v10.translate)({
      singular: "More team members",
      dictionary: {
        es: {
          singular: "Más miembros del equipo"
        },
        "de-DE": {
          singular: "Mehr Teammitglieder"
        },
        "fr-FR": {
          singular: "Plus de membres d'équipe"
        },
        "ja-JP": {
          singular: "チームメンバー数を増やせる"
        },
        "ko-KR": {
          singular: "더 많은 팀원"
        },
        "pt-BR": {
          singular: "Mais integrantes de equipe"
        },
        "zh-CN": {
          singular: "更多团队成员"
        }
      }
    }), (0, _v10.translate)({
      singular: "Dedicated support",
      dictionary: {
        es: {
          singular: "Asistencia exclusiva"
        },
        "de-DE": {
          singular: "Dedizierter Support"
        },
        "fr-FR": {
          singular: "Assistance dédiée"
        },
        "ja-JP": {
          singular: "専用のサポート"
        },
        "ko-KR": {
          singular: "전담 지원"
        },
        "pt-BR": {
          singular: "Suporte exclusivo"
        },
        "zh-CN": {
          singular: "专门支持"
        }
      }
    }), (0, _v10.translate)({
      singular: "SSO (SAML) and SCIM (OKRA, AZURE)",
      dictionary: {
        es: {
          singular: "SSO (SAML) y SCIM (OKRA, AZURE)"
        },
        "de-DE": {
          singular: "SSO (SAML) und SCIM (OKRA, AZURE)"
        },
        "fr-FR": {
          singular: "SSO (SAML) et SCIM (OKRA, AZURE)"
        },
        "ja-JP": {
          singular: "SSO（SAML）およびSCIM（OKRA、AZURE）"
        },
        "ko-KR": {
          singular: "SSO (SAML) 및 SCIM (OKRA, AZURE)"
        },
        "pt-BR": {
          singular: "SSO (SAML) e SCIM (OKRA, AZURE)"
        },
        "zh-CN": {
          singular: "SSO (SAML) 与 SCIM (OKRA, AZURE)"
        }
      }
    })],
    EnterpriseVideoFeaturesList: [(0, _v10.translate)({
      singular: "Dedicated support",
      dictionary: {
        es: {
          singular: "Asistencia exclusiva"
        },
        "de-DE": {
          singular: "Dedizierter Support"
        },
        "fr-FR": {
          singular: "Assistance dédiée"
        },
        "ja-JP": {
          singular: "専用のサポート"
        },
        "ko-KR": {
          singular: "전담 지원"
        },
        "pt-BR": {
          singular: "Suporte exclusivo"
        },
        "zh-CN": {
          singular: "专门支持"
        }
      }
    }), (0, _v10.translate)({
      singular: "SSO (SAML) and SCIM (OKRA, AZURE)",
      dictionary: {
        es: {
          singular: "SSO (SAML) y SCIM (OKRA, AZURE)"
        },
        "de-DE": {
          singular: "SSO (SAML) und SCIM (OKRA, AZURE)"
        },
        "fr-FR": {
          singular: "SSO (SAML) et SCIM (OKRA, AZURE)"
        },
        "ja-JP": {
          singular: "SSO（SAML）およびSCIM（OKRA、AZURE）"
        },
        "ko-KR": {
          singular: "SSO (SAML) 및 SCIM (OKRA, AZURE)"
        },
        "pt-BR": {
          singular: "SSO (SAML) e SCIM (OKRA, AZURE)"
        },
        "zh-CN": {
          singular: "SSO (SAML) 与 SCIM (OKRA, AZURE)"
        }
      }
    }), (0, _v10.translate)({
      singular: "Advanced Marketing Integrations",
      dictionary: {
        es: {
          singular: "Integraciones de marketing avanzadas"
        },
        "de-DE": {
          singular: "Erweiterte Marketing-Integrationen"
        },
        "fr-FR": {
          singular: "Intégrations marketing avancées"
        },
        "ja-JP": {
          singular: "高度なマーケティングインテグレーション"
        },
        "ko-KR": {
          singular: "마케팅 고급 통합"
        },
        "pt-BR": {
          singular: "Integrações avançadas de marketing"
        },
        "zh-CN": {
          singular: "Advanced 营销集成"
        }
      }
    })],
    EnterprisePlanEventSubheader: (0, _v10.translate)({
      singular: "Superior engagement, quality, and support",
      dictionary: {
        es: {
          singular: "Compromiso, calidad y soporte superiores"
        },
        "de-DE": {
          singular: "Überlegene Interaktion, Qualität und Support"
        },
        "fr-FR": {
          singular: "Engagement, qualité et support supérieurs"
        },
        "ja-JP": {
          singular: "優れたエンゲージメント、品質、サポート"
        },
        "ko-KR": {
          singular: "우수한 참여도, 품질 및 지원"
        },
        "pt-BR": {
          singular: "Engajamento, qualidade e suporte superiores"
        },
        "zh-CN": {
          singular: "卓越的互动、质量与支持"
        }
      }
    }),
    EnterprisePlanVideoSubheader: (0, _v10.translate)({
      singular: "More security, control, and support",
      dictionary: {
        es: {
          singular: "Más seguridad, control y asistencia"
        },
        "de-DE": {
          singular: "Mehr Sicherheit, Kontrolle und Unterstützung"
        },
        "fr-FR": {
          singular: "Sécurité, contrôle et assistance supplémentaires"
        },
        "ja-JP": {
          singular: "セキュリティ、制御、サポート体制を強化"
        },
        "ko-KR": {
          singular: "추가적인 보안, 제어, 지원 기능을 이용하세요."
        },
        "pt-BR": {
          singular: "Mais segurança, controle e suporte"
        },
        "zh-CN": {
          singular: "更多安全、控制和支持"
        }
      }
    }),
    tier1UpgradeModalFeaturesListEnterprise: [(0, _v10.translate)({
      singular: "Customizable event registration forms",
      dictionary: {
        es: {
          singular: "Formularios de inscripción a eventos personalizables"
        },
        "de-DE": {
          singular: "Anpassbare Anmeldeformulare für Veranstaltungen"
        },
        "fr-FR": {
          singular: "Des formulaires personnalisables pour l'inscription aux événements ;"
        },
        "ja-JP": {
          singular: "カスタマイズ可能なイベント登録フォーム"
        },
        "ko-KR": {
          singular: "커스텀 가능한 이벤트 등록 양식"
        },
        "pt-BR": {
          singular: "Formulários customizáveis de inscrição em eventos"
        },
        "zh-CN": {
          singular: "可定制的活动注册表"
        }
      }
    }), (0, _v10.translate)({
      singular: "Branded confirmation, reminder, and thank you emails",
      dictionary: {
        es: {
          singular: "Correos electrónicos de confirmación, de recordatorio y de agradecimiento con su marca"
        },
        "de-DE": {
          singular: "Markenspezifische Bestätigungs-, Erinnerungs- und Dankes-E-Mails"
        },
        "fr-FR": {
          singular: "Envoyez des e-mails de confirmation, de rappel et de remerciement à l'image de votre marque."
        },
        "ja-JP": {
          singular: "ブランド化された確認メール、リマインダーメール、お礼のメール"
        },
        "ko-KR": {
          singular: "브랜딩 가능한 확인, 알림, 감사 이메일 발송"
        },
        "pt-BR": {
          singular: "E-mails de confirmação, lembrete e agradecimento com sua marca"
        },
        "zh-CN": {
          singular: "品牌化确认、提醒和感谢邮件"
        }
      }
    }), (0, _v10.translate)({
      singular: "Viewer-level analytics that connect to your CRM",
      dictionary: {
        es: {
          singular: "Análisis a nivel del espectador conectado a su CRM"
        },
        "de-DE": {
          singular: "Analysen auf Zuschauerebene mit Verknüpfung zu Ihrem CRM"
        },
        "fr-FR": {
          singular: "Des statistiques spectateur qui vous relient à votre CRM ;"
        },
        "ja-JP": {
          singular: "CRMにつながる視聴者レベルの分析"
        },
        "ko-KR": {
          singular: "CRM과 연결되는 시청자 수준의 분석 데이터"
        },
        "pt-BR": {
          singular: "Análise do público com conexão ao seu CRM"
        },
        "zh-CN": {
          singular: "与 CRM 连接的观众级分析"
        }
      }
    })],
    demoUpgradeModalFeaturesListEnterprise: [(0, _v10.translate)({
      singular: "Go live with confidence with backup streams",
      dictionary: {
        es: {
          singular: "Transmita en vivo con confianza con las transmisiones de respaldo"
        },
        "de-DE": {
          singular: "Mit gutem Gefühl live gehen – mit Backup-Streams"
        },
        "fr-FR": {
          singular: "Diffusez en direct en toute confiance avec les streams de secours."
        },
        "ja-JP": {
          singular: "バックアップストリームで安心のライブ配信"
        },
        "ko-KR": {
          singular: "백업 스트림으로 자신있게 라이브 방송 시작하기"
        },
        "pt-BR": {
          singular: "Com as cópias de segurança, você transmite ao vivo com toda a confiança"
        },
        "zh-CN": {
          singular: "配置了备份流，可安心直播"
        }
      }
    }), (0, _v10.translate)({
      singular: "Engage with chats, polls, and moderated Q&A",
      dictionary: {
        es: {
          singular: "Entretenga con chats, encuestas y Q&A moderados"
        },
        "de-DE": {
          singular: "Beteiligen Sie sich mit Chats, Umfragen und moderierten Fragen und Antworten"
        },
        "fr-FR": {
          singular: "Participez aux discussions, aux sondages et aux questions-réponses modérées."
        },
        "ja-JP": {
          singular: "チャット、アンケート、モデレータ―による質問セッション機能でエンゲージメントを向上"
        },
        "ko-KR": {
          singular: "채팅, 투표 및 관리형 Q&A 참여"
        },
        "pt-BR": {
          singular: "Interaja por meio de chats, enquetes e perguntas e respostas com moderação"
        },
        "zh-CN": {
          singular: "利用聊天、投票和问答审核等工具互动"
        }
      }
    }), (0, _v10.translate)({
      singular: "Stream to social and other destinations",
      dictionary: {
        es: {
          singular: "Transmita a redes sociales y otros destinos"
        },
        "de-DE": {
          singular: "Auf soziale Netzwerke und andere Zielorte streamen"
        },
        "fr-FR": {
          singular: "Diffusez des flux sur les réseaux sociaux et d'autres destinations ;"
        },
        "ja-JP": {
          singular: "SNSやその他の配信先にストリーミング"
        },
        "ko-KR": {
          singular: "소셜 미디어 및 기타 대상으로 스트리밍"
        },
        "pt-BR": {
          singular: "Faça transmissões para as redes sociais e muito mais"
        },
        "zh-CN": {
          singular: "流式传输到社交和其他目的地"
        }
      }
    }), (0, _v10.translate)({
      singular: "Drive leads with customizable registration",
      dictionary: {
        es: {
          singular: "Gane clientes potenciales con la inscripción personalizable"
        },
        "de-DE": {
          singular: "Leads mit anpassbarer Registrierung vorantreiben"
        },
        "fr-FR": {
          singular: "Générez des prospects grâce à une option d'inscription personnalisable."
        },
        "ja-JP": {
          singular: "カスタマイズ可能な登録でリードを促進"
        },
        "ko-KR": {
          singular: "커스텀 등록을 통해 리드 확보"
        },
        "pt-BR": {
          singular: "Capture leads por meio de formulários de inscrição customizáveis"
        },
        "zh-CN": {
          singular: "利用过可定制的注册表来吸引潜在客户"
        }
      }
    }), (0, _v10.translate)({
      singular: "Get viewer-level analytics that connect to your CRM",
      dictionary: {
        es: {
          singular: "Obtenga análisis a nivel del espectador conectado a su CRM"
        },
        "de-DE": {
          singular: "Erhalten Sie Analysen auf Zuschauerebene, die Sie mit Ihrem CRM verbinden"
        },
        "fr-FR": {
          singular: "Obtenez des statistiques spectateur qui vous relient à votre CRM"
        },
        "ja-JP": {
          singular: "CRMにつながる視聴者レベルの分析を取得"
        },
        "ko-KR": {
          singular: "CRM에 연결되는 시청자 수준 분석 데이터 확보"
        },
        "pt-BR": {
          singular: "Obtenha análises do público que se conectam ao seu CRM"
        },
        "zh-CN": {
          singular: "获取与 CRM 连接的观众级分析"
        }
      }
    })],
    AdvancedPlanEventSubheader: (0, _v10.translate)({
      singular: "Stream high-quality events and webinars",
      dictionary: {
        es: {
          singular: "Transmitir eventos y webinars de alta calidad"
        },
        "de-DE": {
          singular: "Hochwertige Veranstaltungen und Webinare streamen"
        },
        "fr-FR": {
          singular: "Diffusez des événements et webinaires de haute qualité"
        },
        "ja-JP": {
          singular: "高品質のイベントやウェビナーを配信"
        },
        "ko-KR": {
          singular: "고품질 이벤트 및 웨비나 스트리밍"
        },
        "pt-BR": {
          singular: "Transmitir eventos e webinars de alta qualidade"
        },
        "zh-CN": {
          singular: "推流高质量活动与网络研讨会"
        }
      }
    }),
    AdvancedPlanVideoSubheader: (0, _v10.translate)({
      singular: "Expand your reach through live events",
      dictionary: {
        es: {
          singular: "Amplíe su alcance mediante eventos en vivo"
        },
        "de-DE": {
          singular: "Erhöhen Sie Ihre Reichweite mithilfe von Live-Events"
        },
        "fr-FR": {
          singular: "Étendez votre portée grâce à des événements en direct"
        },
        "ja-JP": {
          singular: "ライブイベントでリーチを拡大できます"
        },
        "ko-KR": {
          singular: "라이브 이벤트를 통해 더 많은 시청자를 만나세요."
        },
        "pt-BR": {
          singular: "Amplie seu alcance com eventos ao vivo"
        },
        "zh-CN": {
          singular: "通过直播活动扩大您的影响力"
        }
      }
    }),
    AdvanceEventFeaturesList: [(0, _v10.translate)({
      singular: "500 videos",
      dictionary: {
        "de-DE": {
          singular: "500 Videos"
        },
        "fr-FR": {
          singular: "500 vidéos"
        },
        "ja-JP": {
          singular: "500 本の動画"
        },
        "ko-KR": {
          singular: "500개 비디오"
        },
        "pt-BR": {
          singular: "500 vídeos"
        },
        "zh-CN": {
          singular: "500 个视频"
        }
      }
    }), (0, _v10.translate)({
      singular: "Virtual events and webinars",
      dictionary: {
        es: {
          singular: "Eventos virtuales y webinars"
        },
        "de-DE": {
          singular: "Virtuelle Veranstaltungen und Webinare"
        },
        "fr-FR": {
          singular: "Événements virtuels et webinaires"
        },
        "ja-JP": {
          singular: "バーチャルイベントとウェビナー"
        },
        "ko-KR": {
          singular: "가상 이벤트 및 웨비나"
        },
        "pt-BR": {
          singular: "Eventos virtuais e webinars"
        },
        "zh-CN": {
          singular: "虚拟活动与网络研讨会"
        }
      }
    }), (0, _v10.translate)({
      singular: "Simulcasting",
      dictionary: {
        es: {
          singular: "Transmisión simultánea"
        },
        "fr-FR": {
          singular: "Diffusion simultanée"
        },
        "ja-JP": {
          singular: "同時配信"
        },
        "ko-KR": {
          singular: "동시 방송"
        },
        "pt-BR": {
          singular: "Transmissão simultânea"
        },
        "zh-CN": {
          singular: "联播"
        }
      }
    }), (0, _v10.translate)({
      singular: "Attendee registration",
      dictionary: {
        es: {
          singular: "Registro de los asistentes"
        },
        "de-DE": {
          singular: "Teilnehmerregistrierung"
        },
        "fr-FR": {
          singular: "Inscription des participants"
        },
        "ja-JP": {
          singular: "参加者の登録"
        },
        "ko-KR": {
          singular: "참석자 등록"
        },
        "pt-BR": {
          singular: "Inscrição de participantes"
        },
        "zh-CN": {
          singular: "出席者注册"
        }
      }
    })],
    AdvanceVideoFeaturesList: [(0, _v10.translate)({
      singular: "Virtual events and webinars",
      dictionary: {
        es: {
          singular: "Eventos virtuales y webinars"
        },
        "de-DE": {
          singular: "Virtuelle Veranstaltungen und Webinare"
        },
        "fr-FR": {
          singular: "Événements virtuels et webinaires"
        },
        "ja-JP": {
          singular: "バーチャルイベントとウェビナー"
        },
        "ko-KR": {
          singular: "가상 이벤트 및 웨비나"
        },
        "pt-BR": {
          singular: "Eventos virtuais e webinars"
        },
        "zh-CN": {
          singular: "虚拟活动与网络研讨会"
        }
      }
    }), (0, _v10.translate)({
      singular: "Simulcasting",
      dictionary: {
        es: {
          singular: "Transmisión simultánea"
        },
        "fr-FR": {
          singular: "Diffusion simultanée"
        },
        "ja-JP": {
          singular: "同時配信"
        },
        "ko-KR": {
          singular: "동시 방송"
        },
        "pt-BR": {
          singular: "Transmissão simultânea"
        },
        "zh-CN": {
          singular: "联播"
        }
      }
    }), (0, _v10.translate)({
      singular: "Viewer registration",
      dictionary: {
        es: {
          singular: "Registro de espectador"
        },
        "de-DE": {
          singular: "Zuschauer-Registrierung"
        },
        "fr-FR": {
          singular: "Inscription du spectateur"
        },
        "ja-JP": {
          singular: "視聴者登録"
        },
        "ko-KR": {
          singular: "뷰어 등록"
        },
        "pt-BR": {
          singular: "Registro do espectador"
        },
        "zh-CN": {
          singular: "观众注册"
        }
      }
    })]
  };
  _v0.s(["default", 0, _v11], 0);
  var _v12 = _v0.i(0);
  _v0.s(["UpsellModal", 0, ({
    hideModal: _v0,
    entityType: _v1,
    hasLiveSubscription: _v2,
    templateType: _v3 = "default",
    tracking: _v4
  }) => {
    let _v5 = (0, _v5.useViewer)(),
      _v6 = "enterprise" === _v3 && _v2,
      _v7 = _v1 === _v12.ENTITY_TYPE.VIDEO,
      _v8 = (0, _v2.useMemo)(() => "default" === _v3 ? {
        headerText: _v7 ? _v11.UpgradeModalVideoHeaderText : _v11.UpgradeModalEventHeaderText,
        subHeaderText: _v7 ? _v11.UpgradeModalVideoSubHeaderText : _v11.UpgradeModalEventSubHeaderText,
        excludePlans: [_v4.PLANS.STARTER, _v4.PLANS.STANDARD, _v4.PLANS.CREATOR],
        planOverrides: {
          advanced: {
            subHeading: _v7 ? _v11.AdvancedPlanVideoSubheader : _v11.AdvancedPlanEventSubheader,
            featuresList: _v7 ? _v11.AdvanceVideoFeaturesList : _v11.AdvanceEventFeaturesList
          },
          enterprise: {
            subHeading: _v7 ? _v11.EnterprisePlanVideoSubheader : _v11.EnterprisePlanEventSubheader,
            featuresList: _v7 ? _v11.EnterpriseVideoFeaturesList : _v11.EnterpriseEventFeaturesList
          }
        },
        mkcCode: "ent-upgrade-bottom"
      } : _v6 ? {
        enterpriseTitle: _v11.CaptureLeadsAndViewerLevelInsights,
        enterpriseSubtitle: _v11.EnterpriseTalkToTeam,
        customFeaturesList: (0, _v1.jsx)(_v9, {
          featuresList: _v11.tier1UpgradeModalFeaturesListEnterprise
        }),
        mkcCode: "ent-upgrade-bottom"
      } : {
        enterpriseTitle: _v11.UpgradeModalEventHeaderText,
        enterpriseSubtitle: _v11.UpgradeModalEnterpriseSubtitle,
        customFeaturesList: (0, _v1.jsx)(_v9, {
          featuresList: _v11.demoUpgradeModalFeaturesListEnterprise
        }),
        mkcCode: "ent-upgrade-bottom"
      }, [_v3, _v6, _v7]);
    return (0, _v1.jsx)(_v3.default, {
      apiUrl: _v5?.apiUrl,
      userConfig: {
        jwt: _v5?.jwt,
        userId: _v5?.user?.id
      },
      templateType: _v3,
      onClose: _v0,
      modalConfig: _v8,
      tracking: _v4 || {
        params: {
          feature: "unified event",
          location: window.location.href,
          page: "registration",
          upsell_name: "registration_in_unified_event"
        },
        paywallTracking: {
          paywallTrigger: "lead_capture_widget_registration_button",
          paywallLocation: "lead_capture",
          paywallType: "popup",
          paywallFeature: "registration"
        }
      }
    });
  }], 0);
}