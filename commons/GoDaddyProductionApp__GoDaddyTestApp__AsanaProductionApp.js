{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = ((_v1 = {})[_v1.GoDaddyProductionApp = 0] = "GoDaddyProductionApp", _v1[_v1.GoDaddyTestApp = 0] = "GoDaddyTestApp", _v1[_v1.AsanaProductionApp = 0] = "AsanaProductionApp", _v1[_v1.AsanaDevelopmentApp = 0] = "AsanaDevelopmentApp", _v1[_v1.AsanaTestApp = 0] = "AsanaTestApp", _v1[_v1.ZoomProductionApp = 0] = "ZoomProductionApp", _v1[_v1.ZoomDevelopmentApp = 0] = "ZoomDevelopmentApp", _v1[_v1.VenuesDevelopmentApp = 0] = "VenuesDevelopmentApp", _v1[_v1.VimeoOTT = 0] = "VimeoOTT", _v1[_v1.WixProductionApp = 0] = "WixProductionApp", _v1[_v1.AmazeApp = 0] = "AmazeApp", _v1[_v1.WebexProductionApp = 0] = "WebexProductionApp", _v1[_v1.WebexDevelopmentApp = 0] = "WebexDevelopmentApp", _v1[_v1.GoogleMeetProductionApp = 0] = "GoogleMeetProductionApp", _v1[_v1.GoogleMeetDevelopmentApp = 0] = "GoogleMeetDevelopmentApp", _v1);
  let _v9 = {
      0: "godaddy",
      0: "godaddy",
      0: "asana",
      0: "asana",
      0: "asana",
      0: "zoom",
      0: "zoom",
      0: "venues",
      0: "ott",
      0: "wix",
      0: "webex",
      0: "webex",
      0: "google_meet",
      0: "google_meet"
    },
    _v10 = {
      interact: () => (0, _v4.translate)({
        singular: "Like videos, comment on videos, or add them to Watch Later on your behalf.",
        dictionary: {
          es: {
            singular: "Darle Me gusta, comentar videos o agregarlos a la lista Ver después en tu nombre."
          },
          "de-DE": {
            singular: "Markiere Videos mit Likes, kommentiere sie und füge sie in deinem Namen zur Später anschauen-Liste hinzu."
          },
          "fr-FR": {
            singular: "Aimer ou commenter des vidéos ou les ajouter à votre liste Regarder plus tard en votre nom."
          },
          "ja-JP": {
            singular: "あなたの代わりに動画をいいねしたり、コメントしたり、「後で見る」に追加したりしてください。"
          },
          "ko-KR": {
            singular: "나를 대신하여 동영상 좋아하기, 동영상에 소감 달기 또는 나중에 보기에 추가합니다."
          },
          "pt-BR": {
            singular: "Curtir vídeos, comentar em vídeos ou adicionar vídeos na lista do Assistir Depois em seu nome."
          },
          "zh-CN": {
            singular: "代您点赞视频、评论视频，或将视频添加到稍后观看。"
          }
        }
      }),
      create: () => (0, _v4.translate)({
        singular: "Create Showcases, Groups, Channels, and Portfolios on your behalf.",
        dictionary: {
          es: {
            singular: "Crear presentaciones, grupos, canales y portafolios en tu nombre."
          },
          "de-DE": {
            singular: "Erstellen von Videos, Präsentationen, Gruppen, Kanälen und Portfolios in deinem Namen."
          },
          "fr-FR": {
            singular: "Créer des présentations, groupes, chaînes et portfolios en votre nom."
          },
          "ja-JP": {
            singular: "あなたの代わりにショーケース、グループ、チャンネル、およびポートフォリオを作成します。"
          },
          "ko-KR": {
            singular: "나를 대신하여 쇼케이스, 그룹, 채널 및 포트폴리오를 생성합니다."
          },
          "pt-BR": {
            singular: "Criar Vitrines, Grupos, Canais e Portfólios em seu nome."
          },
          "zh-CN": {
            singular: "代表您创建展示、群组、频道和作品集。"
          }
        }
      }),
      edit: () => (0, _v4.translate)({
        singular: "Edit video settings, Showcases, Groups, Channels, and Portfolios on your behalf.",
        dictionary: {
          es: {
            singular: "Editar opciones de configuración de video, presentaciones, grupos, canales y portafolios en tu nombre."
          },
          "de-DE": {
            singular: "Bearbeiten von Videos, Präsentationen, Gruppen, Kanälen und Portfolios in deinem Namen."
          },
          "fr-FR": {
            singular: "Modifier des paramètres, présentations, groupes, chaînes et portfolios en votre nom."
          },
          "ja-JP": {
            singular: "あなたの代わりに動画設定、ショーケース、グループ、チャンネル、およびポートフォリオを編集します。"
          },
          "ko-KR": {
            singular: "나를 대신하여 동영상 설정, 쇼케이스, 그룹, 채널 및 포트폴리오를 편집합니다."
          },
          "pt-BR": {
            singular: "Editar configurações de vídeo, Vitrines, Grupos, Canais e Portfólios em seu nome."
          },
          "zh-CN": {
            singular: "代您编辑视频设置、展示、群组、频道和作品集。"
          }
        }
      }),
      upload: () => (0, _v4.translate)({
        singular: "Upload videos on your behalf.",
        dictionary: {
          es: {
            singular: "Subir videos en tu nombre."
          },
          "de-DE": {
            singular: "Lade Videos in deinem Namen hoch."
          },
          "fr-FR": {
            singular: "Mettre en ligne des vidéos en votre nom."
          },
          "ja-JP": {
            singular: "動画のアップロードを許可する。"
          },
          "ko-KR": {
            singular: "나를 대신하여 동영상을 업로드합니다."
          },
          "pt-BR": {
            singular: "Carregar vídeos em seu nome."
          },
          "zh-CN": {
            singular: "代表您上传视频。"
          }
        }
      }),
      delete: () => (0, _v4.translate)({
        singular: "Delete videos, Showcases, Groups, Channels, and Portfolios on your behalf.",
        dictionary: {
          es: {
            singular: "Borrar videos, presentaciones, grupos, canales y portafolios en tu nombre."
          },
          "de-DE": {
            singular: "Löschen von Videos, Präsentationen, Gruppen, Kanälen und Portfolios in deinem Namen."
          },
          "fr-FR": {
            singular: "Supprimer des vidéos, présentations, groupes, chaînes et portfolios en votre nom."
          },
          "ja-JP": {
            singular: "あなたの代わりに動画、ショーケース、グループ、チャンネル、およびポートフォリオを削除します。"
          },
          "ko-KR": {
            singular: "나를 대신하여 동영상, 쇼케이스, 그룹, 채널 및 포트폴리오를 삭제합니다."
          },
          "pt-BR": {
            singular: "Excluir vídeos, Vitrines, Grupos, Canais e Portfólios em seu nome."
          },
          "zh-CN": {
            singular: "代表您删除视频、橱窗、群组、频道和作品集。"
          }
        }
      }),
      purchased: () => (0, _v4.translate)({
        singular: "Access your Vimeo On Demand purchase history.",
        dictionary: {
          es: {
            singular: "Acceder a tu historial de compras de Vimeo On Demand."
          },
          "de-DE": {
            singular: "Sichere dir Zugriff auf deine Vimeo auf Abruf-Kaufhistorie."
          },
          "fr-FR": {
            singular: "Accédez à votre historique d'achats Vimeo On Demand."
          },
          "ja-JP": {
            singular: "Vimeoオンデマンド購入履歴にアクセスする。"
          },
          "ko-KR": {
            singular: "내 Vimeo 온디맨드 구매 내역 보기"
          },
          "pt-BR": {
            singular: "Acessar seu histórico de compras do Vimeo On Demand."
          },
          "zh-CN": {
            singular: "访问您的 Vimeo On Demand 购买历史记录。"
          }
        }
      }),
      purchase: () => (0, _v4.translate)({
        singular: "Purchase Vimeo On Demand videos on your behalf.",
        dictionary: {
          es: {
            singular: "Comprar videos de Vimeo On Demand en tu nombre."
          },
          "de-DE": {
            singular: "Kaufe Vimeo Auf Abruf-Videos in deinem Namen."
          },
          "fr-FR": {
            singular: "Acheter des vidéos Vimeo On Demand en votre nom."
          },
          "ja-JP": {
            singular: "Vimeoオンデマンド動画の購入を許可する。"
          },
          "ko-KR": {
            singular: "나를 대신하여 Vimeo 온디맨드 동영상을 구매합니다."
          },
          "pt-BR": {
            singular: "Comprar vídeos do Vimeo On Demand em seu nome."
          },
          "zh-CN": {
            singular: "代表您购买 Vimeo On Demand 视频。"
          }
        }
      }),
      stats: () => (0, _v4.translate)({
        singular: "Access stats about your videos.",
        dictionary: {
          es: {
            singular: "Acceder a las estadísticas sobre tus videos."
          },
          "de-DE": {
            singular: "Hol dir Statistiken zu deinen Videos."
          },
          "fr-FR": {
            singular: "Accédez aux stats de vos vidéos."
          },
          "ja-JP": {
            singular: "自分の動画の統計データにアクセスする。"
          },
          "ko-KR": {
            singular: "내 동영상 통계에 액세스."
          },
          "pt-BR": {
            singular: "Acessar estatísticas sobre os meus vídeos."
          },
          "zh-CN": {
            singular: "访问有关视频的统计数据。"
          }
        }
      }),
      promo_codes: () => (0, _v4.translate)({
        singular: "Create and view promo codes for your On Demand videos.",
        dictionary: {
          es: {
            singular: "Crear y ver códigos promocionales para tus videos de On Demand."
          },
          "de-DE": {
            singular: "Erstelle und zeige Promo-Codes für deine auf Abruf-Videos."
          },
          "fr-FR": {
            singular: "Créer et afficher des codes promotionnels pour vos vidéos On Demand."
          },
          "ja-JP": {
            singular: "オンデマンド動画用のプロモーションコードを作成および表示する。"
          },
          "ko-KR": {
            singular: "내 온디맨드 동영상에 사용할 수 있는 프로모션 코드를 생성하고 확인하세요."
          },
          "pt-BR": {
            singular: "Criar e ver códigos promocionais para os seus vídeos do On Demand."
          },
          "zh-CN": {
            singular: "为您的 On Demand 视频创建和查看促销代码。"
          }
        }
      }),
      email: () => (0, _v4.translate)({
        singular: "Access your verified email address.",
        dictionary: {
          es: {
            singular: "Acceder a tu dirección de correo electrónico verificada."
          },
          "de-DE": {
            singular: "Greife auf deine verifizierte E-Mail-Adresse zurück."
          },
          "fr-FR": {
            singular: "Accédez à votre adresse e-mail vérifiée."
          },
          "ja-JP": {
            singular: "認証されたメールアドレスにアクセスする。"
          },
          "ko-KR": {
            singular: "내 검증된 이메일 주소에 액세스."
          },
          "pt-BR": {
            singular: "Acessar seu endereço de e-mail verificado."
          },
          "zh-CN": {
            singular: "访问您已验证的电子邮件地址。"
          }
        }
      }),
      video_files: () => (0, _v4.translate)({
        singular: "Access your video files",
        dictionary: {
          es: {
            singular: "Acceder a tus archivos de video"
          },
          "de-DE": {
            singular: "Zugriff auf deine Videodateien"
          },
          "fr-FR": {
            singular: "Accédez à vos fichiers vidéos"
          },
          "ja-JP": {
            singular: "動画ファイルへのアクセス"
          },
          "ko-KR": {
            singular: "동영상 파일 액세스"
          },
          "pt-BR": {
            singular: "Acessar seus arquivos de vídeo"
          },
          "zh-CN": {
            singular: "访问您的视频文件"
          }
        }
      }),
      private: () => (0, _v4.translate)({
        singular: "Access your private videos, Showcases, Groups, Channels, and Portfolios.",
        dictionary: {
          es: {
            singular: "Acceder a tus videos, presentaciones, grupos, canales y portafolios privados."
          },
          "de-DE": {
            singular: "Zugriff auf deine privaten Videos, Präsentationen, Gruppen, Kanäle und Portfolios"
          },
          "fr-FR": {
            singular: "Accéder à vos vidéos, présentations, groupes, chaînes et portfolios privés."
          },
          "ja-JP": {
            singular: "自分のプライベート動画、ショーケース、グループ、チャンネル、およびポートフォリオへアクセスする。"
          },
          "ko-KR": {
            singular: "내 비공개 동영상, 쇼케이스, 그룹, 채널 및 포트폴리오에 액세스합니다."
          },
          "pt-BR": {
            singular: "Acessar seus vídeos privados, Vitrines, Grupos, Canais e Portfólios."
          },
          "zh-CN": {
            singular: "访问您的私人视频、橱窗、群组、频道和作品集。"
          }
        }
      }),
      public: () => (0, _v4.translate)({
        singular: "Access your public videos, Showcases, Groups, Channels, and Portfolios.",
        dictionary: {
          es: {
            singular: "Acceder a tus videos, presentaciones, grupos, canales y portafolios públicos."
          },
          "de-DE": {
            singular: "Zugriff auf deine öffentlichen Videos, Präsentationen, Gruppen, Kanäle und Portfolios"
          },
          "fr-FR": {
            singular: "Accéder à vos vidéos, présentations, groupes, chaînes et portfolios publics."
          },
          "ja-JP": {
            singular: "一般公開動画、ショーケース、グループ、チャンネル、およびポートフォリオへアクセスする。"
          },
          "ko-KR": {
            singular: "내 공개 동영상, 쇼케이스, 그룹, 채널 및 포트폴리오에 액세스합니다."
          },
          "pt-BR": {
            singular: "Acessar seus vídeos públicos, Vitrines, Grupos, Canais e Portfólios."
          },
          "zh-CN": {
            singular: "访问您的公开视频、展示、群组、频道和作品集。"
          }
        }
      })
    },
    _v11 = {
      TERMS_LINK: _v0 => (0, _v2.jsx)(_v5.Link, {
        href: "/terms",
        target: "_blank",
        variant: "minimal",
        children: _v0
      }, "terms"),
      PRIVACY_LINK: _v0 => (0, _v2.jsx)(_v5.Link, {
        href: "/privacy",
        target: "_blank",
        variant: "minimal",
        children: _v0
      }, "privacy"),
      COOKIE_LINK: _v0 => (0, _v2.jsx)(_v5.Link, {
        href: "/cookie_policy",
        target: "_blank",
        variant: "minimal",
        children: _v0
      }, "cookie")
    },
    _v12 = _v0 => ({
      extensionUpsellLink: "https://chromewebstore.google.com/detail/vimeo-record-screen-webca/ejfmffkmeigkphomnpabpdabfddeadcb?hl=en",
      getLoginHeading: () => (0, _v4.translate)({
        singular: "Connect your Vimeo account to {BRAND_NAME}",
        replacements: {
          BRAND_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Conecta tu cuenta de Vimeo a {BRAND_NAME}"
          },
          "de-DE": {
            singular: "Dein Vimeo-Konto mit {BRAND_NAME} verknüpfen"
          },
          "fr-FR": {
            singular: "Connectez votre compte Vimeo à {BRAND_NAME}"
          },
          "ja-JP": {
            singular: "Vimeoアカウントを {BRAND_NAME} に接続"
          },
          "ko-KR": {
            singular: "Vimeo 계정을 {BRAND_NAME}에 연결하세요"
          },
          "pt-BR": {
            singular: "Conecte sua conta do Vimeo ao {BRAND_NAME}"
          },
          "zh-CN": {
            singular: "将您的 Vimeo 帐户连接到 {BRAND_NAME}"
          }
        }
      }),
      getLoginPrompt: () => (0, _v4.translate)({
        singular: "Log in to your Vimeo account to unlock powerful video tools. After you connect, your videos will appear on both {BRAND_NAME} and Vimeo.",
        replacements: {
          BRAND_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Inicia sesión en tu cuenta de Vimeo para acceder a herramientas de video poderosas. Una vez que conectes la cuenta, tus videos aparecerán en {BRAND_NAME} y Vimeo."
          },
          "de-DE": {
            singular: "Melde dich bei deinem Vimeo-Konto an, um dir leistungsstarke Videotools zu sichern. Nach der Verknüpfung werden deine Videos auf {BRAND_NAME} und Vimeo angezeigt."
          },
          "fr-FR": {
            singular: "Connectez-vous à votre compte Vimeo pour profiter d'outils vidéo puissants. Une fois connecté(e), vos vidéos apparaîtront à la fois sur {BRAND_NAME} et sur Vimeo."
          },
          "ja-JP": {
            singular: "Vimeoアカウントにログインして、強力な動画ツールを活用しましょう。接続すると、{BRAND_NAME} とVimeoの両方に動画が表示されます。"
          },
          "ko-KR": {
            singular: "Vimeo 계정에 로그인하여 강력한 동영상 도구를 이용하세요. 연결한 다음에는 Vimeo와 {BRAND_NAME} 두 곳 모두에 동영상이 나타납니다."
          },
          "pt-BR": {
            singular: "Faça o login na sua conta do Vimeo para liberar ferramentas poderosas de vídeo. Depois de se conectar, seus vídeos aparecerão em ambos, no {BRAND_NAME} e no Vimeo."
          },
          "zh-CN": {
            singular: "登录您的 Vimeo 账户，解锁功能强大的视频工具。连接之后，您的视频将同时出现在 {BRAND_NAME} 和 Vimeo 上。"
          }
        }
      }),
      getJoinHeading: () => (0, _v4.translate)({
        singular: "Connect your Vimeo account to {BRAND_NAME}",
        replacements: {
          BRAND_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Conecta tu cuenta de Vimeo a {BRAND_NAME}"
          },
          "de-DE": {
            singular: "Dein Vimeo-Konto mit {BRAND_NAME} verknüpfen"
          },
          "fr-FR": {
            singular: "Connectez votre compte Vimeo à {BRAND_NAME}"
          },
          "ja-JP": {
            singular: "Vimeoアカウントを {BRAND_NAME} に接続"
          },
          "ko-KR": {
            singular: "Vimeo 계정을 {BRAND_NAME}에 연결하세요"
          },
          "pt-BR": {
            singular: "Conecte sua conta do Vimeo ao {BRAND_NAME}"
          },
          "zh-CN": {
            singular: "将您的 Vimeo 帐户连接到 {BRAND_NAME}"
          }
        }
      }),
      getJoinPrompt: () => (0, _v4.translate)({
        singular: "Create a Vimeo account to unlock powerful video tools. After you connect, your videos will appear on both {BRAND_NAME} and Vimeo.",
        replacements: {
          BRAND_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Crea una cuenta de Vimeo para acceder a herramientas de video poderosas. Una vez que conectes la cuenta, tus videos aparecerán en {BRAND_NAME} y Vimeo."
          },
          "de-DE": {
            singular: "Erstelle ein Vimeo-Konto, um dir leistungsstarke Videotools zu sichern. Nach der Verknüpfung werden deine Videos auf {BRAND_NAME} und Vimeo angezeigt."
          },
          "fr-FR": {
            singular: "Créez un compte Vimeo pour profiter d'outils vidéo puissants. Une fois connecté(e), vos vidéos apparaîtront à la fois sur {BRAND_NAME} et sur Vimeo."
          },
          "ja-JP": {
            singular: "Vimeoアカウントを作成して、強力な動画ツールを活用しましょう。接続すると、{BRAND_NAME} とVimeoの両方に動画が表示されます。"
          },
          "ko-KR": {
            singular: "Vimeo 계정을 만들어 강력한 동영상 도구를 이용하세요. 연결한 다음에는 Vimeo와 {BRAND_NAME} 두 곳 모두에 동영상이 나타납니다."
          },
          "pt-BR": {
            singular: "Crie uma conta do Vimeo para liberar ferramentas poderosas de vídeo. Depois de se conectar, seus vídeos aparecerão em ambos, no {BRAND_NAME} e no Vimeo."
          },
          "zh-CN": {
            singular: "创建 Vimeo 账户，解锁功能强大的视频工具。连接之后，您的视频将同时出现在 {BRAND_NAME} 和 Vimeo 上。"
          }
        }
      }),
      getAuthHeading: () => (0, _v4.translate)({
        singular: "Allow {BRAND_NAME} to access your Vimeo account?",
        replacements: {
          BRAND_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "¿Deseas permitir que {BRAND_NAME} acceda a tu cuenta de Vimeo?"
          },
          "de-DE": {
            singular: "Darf {BRAND_NAME} auf dein Vimeo-Konto zugreifen?"
          },
          "fr-FR": {
            singular: "Autoriser {BRAND_NAME} à accéder à votre compte Vimeo ?"
          },
          "ja-JP": {
            singular: "{BRAND_NAME} によるVimeoアカウントへのアクセスを許可しますか？"
          },
          "ko-KR": {
            singular: "{BRAND_NAME}이(가) 회원님의 Vimeo 계정에 액세스하도록 허용할까요?"
          },
          "pt-BR": {
            singular: "Permitir que o {BRAND_NAME} acesse sua conta do Vimeo?"
          },
          "zh-CN": {
            singular: "允许 {BRAND_NAME} 访问您的 Vimeo 账户？"
          }
        }
      }),
      getAuthPrompt: () => (0, _v4.translate)({
        singular: "When you allow {BRAND_NAME} to access your Vimeo account, your videos will appear in both accounts.",
        replacements: {
          BRAND_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Si permites que {BRAND_NAME} acceda a tu cuenta de Vimeo, los videos aparecerán en ambas cuentas."
          },
          "de-DE": {
            singular: "Wenn du {BRAND_NAME} den Zugriff auf dein Vimeo-Konto erlaubst, werden deine Videos in beiden Konten angezeigt."
          },
          "fr-FR": {
            singular: "En autorisant {BRAND_NAME} à accéder à votre compte Vimeo, vous ferez apparaître vos vidéos sur les deux comptes."
          },
          "ja-JP": {
            singular: "{BRAND_NAME} にあなたのVimeoアカウントへのアクセスを許可すると、動画は両方のアカウントに表示されるようになります。"
          },
          "ko-KR": {
            singular: "{BRAND_NAME}이(가) 회원님의 Vimeo 계정에 액세스하도록 허용하면 두 계정 모두에 동영상이 나타납니다."
          },
          "pt-BR": {
            singular: "Quando você permite que o {BRAND_NAME} acesse sua conta do Vimeo, seus vídeos aparecerão em ambas as contas."
          },
          "zh-CN": {
            singular: "当您允许 {BRAND_NAME} 访问您的 Vimeo 帐户时，您的视频将出现在两个帐户中。"
          }
        }
      }),
      getAuthPermissionsPrompt: () => (0, _v4.translate)({
        singular: "Give {BRAND_NAME} permission to:",
        replacements: {
          BRAND_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Dar permiso a {BRAND_NAME} para:"
          },
          "de-DE": {
            singular: "Erlaube {BRAND_NAME} Folgendes:"
          },
          "fr-FR": {
            singular: "Accorder à {BRAND_NAME} les autorisations suivantes :"
          },
          "ja-JP": {
            singular: "{BRAND_NAME} に次のアクセスを許可する："
          },
          "ko-KR": {
            singular: "{BRAND_NAME}에게 다음 권한을 부여합니다."
          },
          "pt-BR": {
            singular: "Dê ao {BRAND_NAME} permissão para:"
          },
          "zh-CN": {
            singular: "允许 {BRAND_NAME}："
          }
        }
      }),
      getAuthPermissions: _v0 => {
        let _v1 = "" === _v0 ? ["private", "public"] : decodeURIComponent(_v0.replaceAll("+", " ")).split(" ");
        return Object.keys(_v10).filter(_v0 => _v1.includes(_v0)).map(_v0 => _v10[_v0]());
      },
      getAuthDisclaimer: () => (0, _v4.translate)({
        singular: "Don’t worry, {BRAND_LINK}{BRAND_NAME}{BRAND_LINK} won’t have access to your password. To change your application preferences, go to your {SETTINGS_LINK}settings{SETTINGS_LINK}.",
        replacements: {
          BRAND_NAME: _v0,
          SETTINGS_LINK: _v0 => (0, _v2.jsx)(_v5.Link, {
            href: "/settings/apps",
            target: "_blank",
            children: _v0
          }),
          BRAND_LINK: _v0 => (0, _v2.jsx)(_v5.Link, {
            href: "#",
            target: "_blank",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "No te preocupes; {BRAND_LINK}{BRAND_NAME}{BRAND_LINK} no tendrá acceso a tu contraseña. Para cambiar las preferencias de la aplicación, ve a la {SETTINGS_LINK}configuración{SETTINGS_LINK}."
          },
          "de-DE": {
            singular: "Keine Sorge, {BRAND_LINK}{BRAND_NAME}{BRAND_LINK} hat keinen Zugriff auf dein Kennwort. Du kannst die Optionen für Apps in deinen {SETTINGS_LINK}Einstellungen{SETTINGS_LINK} ändern."
          },
          "fr-FR": {
            singular: "Ne vous inquiétez pas, {BRAND_LINK}{BRAND_NAME}{BRAND_LINK} n'aura pas accès à votre mot de passe. Pour modifier les préférences de l'application, rendez-vous dans vos {SETTINGS_LINK}paramètres{SETTINGS_LINK}."
          },
          "ja-JP": {
            singular: "{BRAND_LINK}{BRAND_NAME}{BRAND_LINK}があなたのパスワードにアクセスすることはありませんのでご安心ください。アプリの詳細設定を変更するには、{SETTINGS_LINK}設定{SETTINGS_LINK}より行ってください。"
          },
          "ko-KR": {
            singular: "걱정하지 마세요. {BRAND_LINK}{BRAND_NAME}{BRAND_LINK}이(가) 회원님의 비밀번호에 액세스할 수 없습니다. 앱 설정을 변경하려면 {SETTINGS_LINK}설정{SETTINGS_LINK}으로 이동하세요."
          },
          "pt-BR": {
            singular: "Não se preocupe, o {BRAND_LINK}{BRAND_NAME}{BRAND_LINK} não terá acesso à sua senha. Para alterar as suas preferências do aplicativo, acesse suas {SETTINGS_LINK}configurações{SETTINGS_LINK}."
          },
          "zh-CN": {
            singular: "别担心，{BRAND_LINK}{BRAND_NAME}{BRAND_LINK} 无法获得您的密码。要更改应用程序首选项，请前往您的{SETTINGS_LINK}设置{SETTINGS_LINK}。"
          }
        }
      }),
      hasReturnPromptLink: () => !0,
      getReturnPrompt: () => (0, _v4.translate)({
        singular: "Back to {BRAND_NAME}",
        replacements: {
          BRAND_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Volver a {BRAND_NAME}"
          },
          "de-DE": {
            singular: "Zurück zu {BRAND_NAME}"
          },
          "fr-FR": {
            singular: "Retour à {BRAND_NAME}"
          },
          "ja-JP": {
            singular: "{BRAND_NAME} に戻る"
          },
          "ko-KR": {
            singular: "{BRAND_NAME}로 돌아가기"
          },
          "pt-BR": {
            singular: "Voltar para o {BRAND_NAME}"
          },
          "zh-CN": {
            singular: "返回 {BRAND_NAME}"
          }
        }
      }),
      getUploadAlreadyConnected: () => (0, _v4.translate)({
        singular: "Do more with Vimeo and {BRAND_NAME}",
        replacements: {
          BRAND_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Sé más productivo con Vimeo y {BRAND_NAME}"
          },
          "de-DE": {
            singular: "Mehr Möglichkeiten mit Vimeo und {BRAND_NAME}"
          },
          "fr-FR": {
            singular: "Allez plus loin avec Vimeo et {BRAND_NAME}"
          },
          "ja-JP": {
            singular: "Vimeoと {BRAND_NAME} でさらに活用しましょう"
          },
          "ko-KR": {
            singular: "Vimeo와 {BRAND_NAME}로 더 많은 기능을 이용하세요"
          },
          "pt-BR": {
            singular: "Faça mais com o Vimeo e o {BRAND_NAME}"
          },
          "zh-CN": {
            singular: "利用 Vimeo 和 {BRAND_NAME} 完成更多任务"
          }
        }
      }),
      getUploadConnecting: () => (0, _v4.translate)({
        singular: "Connecting your Vimeo and {BRAND_NAME} accounts…",
        replacements: {
          BRAND_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Conectando las cuentas de Vimeo y {BRAND_NAME}…"
          },
          "de-DE": {
            singular: "Deine Konten bei Vimeo und {BRAND_NAME} werden verknüpft …"
          },
          "fr-FR": {
            singular: "Connexion de vos comptes Vimeo et {BRAND_NAME}..."
          },
          "ja-JP": {
            singular: "Vimeoアカウントと {BRAND_NAME} アカウントを接続しています..."
          },
          "ko-KR": {
            singular: "Vimeo를 {BRAND_NAME} 계정에 연결 중..."
          },
          "pt-BR": {
            singular: "Conectando suas contas do Vimeo e {BRAND_NAME}..."
          },
          "zh-CN": {
            singular: "正在连接您的 Vimeo 和 {BRAND_NAME} 账户..."
          }
        }
      }),
      getUploadTransferComplete: () => (0, _v4.translate)({
        singular: "Videos are now available on both {BRAND_NAME} and Vimeo.",
        replacements: {
          BRAND_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Los videos ahora están disponibles en {BRAND_NAME} y Vimeo."
          },
          "de-DE": {
            singular: "Videos sind jetzt auf {BRAND_NAME} und Vimeo verfügbar."
          },
          "fr-FR": {
            singular: "Vos vidéos sont désormais disponibles sur {BRAND_NAME} et Vimeo."
          },
          "ja-JP": {
            singular: "動画は {BRAND_NAME} とVimeoの両方で利用可能になりました。"
          },
          "ko-KR": {
            singular: "이제 Vimeo와 {BRAND_NAME} 두 곳 모두에서 동영상을 확인할 수 있습니다."
          },
          "pt-BR": {
            singular: "Agora os vídeos estão disponíveis em ambos, no {BRAND_NAME} e no Vimeo."
          },
          "zh-CN": {
            singular: "视频现已在 {BRAND_NAME} 和 Vimeo 上线。"
          }
        }
      }),
      getTermsAndConditions: () => (0, _v4.translate)({
        singular: "By joining Vimeo, you agree to our {TERMS_LINK}Terms of Service{/TERMS_LINK}, {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK} and {COOKIE_LINK}Cookie Policy{/COOKIE_LINK}.",
        replacements: _v11,
        dictionary: {
          es: {
            singular: "Al registrarse en Vimeo, acepta nuestros {TERMS_LINK}Términos y condiciones{/TERMS_LINK}, nuestra {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK} y nuestra {COOKIE_LINK}Política de cookies{/COOKIE_LINK}."
          },
          "de-DE": {
            singular: "Wenn du dich bei Vimeo registrierst, stimmst du unseren{TERMS_LINK}Nutzungsbedingungen{/TERMS_LINK}, {PRIVACY_LINK} Datenschutzrichtlinien{/PRIVACY_LINK} und {COOKIE_LINK}Cookie-Richtlinien zu.{/COOKIE_LINK}"
          },
          "fr-FR": {
            singular: "En vous inscrivant sur Vimeo, vous acceptez nos {TERMS_LINK}conditions d'utilisation{/TERMS_LINK}, notre {PRIVACY_LINK}politique de confidentialité{/PRIVACY_LINK} et notre {COOKIE_LINK}politique concernant les cookies{/COOKIE_LINK}."
          },
          "ja-JP": {
            singular: "Vimeoにご登録いただくと、{TERMS_LINK}利用規約{/TERMS_LINK}、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}、{COOKIE_LINK}Cookieポリシー{/COOKIE_LINK}に同意したものとみなされます。"
          },
          "ko-KR": {
            singular: "Vimeo에 가입함으로써 {TERMS_LINK}서비스 약관{/TERMS_LINK} 및 {PRIVACY_LINK}개인정보보호 정책{/PRIVACY_LINK}, {COOKIE_LINK}쿠키 정책{/COOKIE_LINK}에 동의하게 됩니다."
          },
          "pt-BR": {
            singular: "Ao se cadastrar no Vimeo, você concorda com os {TERMS_LINK}Termos de Serviço{/TERMS_LINK}, com a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK} e com a {COOKIE_LINK}Política de Cookie do Vimeo.{/COOKIE_LINK}"
          },
          "zh-CN": {
            singular: "加入 Vimeo，即表示您同意我们的{TERMS_LINK}服务条款{/TERMS_LINK}、{PRIVACY_LINK}隐私政策{/PRIVACY_LINK}和 {COOKIE_LINK}Cookie 政策{/COOKIE_LINK}。"
          }
        }
      }),
      getDisclaimer: () => void 0,
      getHeaderDisclaimer: () => void 0
    }),
    _v13 = {
      godaddy: {
        ..._v12("GoDaddy"),
        logo: (0, _v2.jsx)(_v7.default, {
          height: (0, _v3.rem)(40),
          width: (0, _v3.rem)(40)
        })
      },
      asana: {
        ..._v12("Asana"),
        extensionUpsellLink: "https://vimeo.com/record?utm_campaign=screen_recorder&utm_content=asana_conversion_flow_cta&vcid=",
        logo: (0, _v2.jsx)(_v6.default, {
          height: (0, _v3.rem)(40),
          width: (0, _v3.rem)(56)
        }),
        hasReturnPromptLink: () => !1,
        getReturnPrompt: () => (0, _v4.translate)({
          singular: "You can close this tab.",
          dictionary: {
            es: {
              singular: "Puedes cerrar esta pestaña."
            },
            "de-DE": {
              singular: "Du kannst diesen Tab schließen."
            },
            "fr-FR": {
              singular: "Vous pouvez fermer cet onglet."
            },
            "ja-JP": {
              singular: "このタブを閉じてください。"
            },
            "ko-KR": {
              singular: "이제 이 탭을 닫아도 됩니다."
            },
            "pt-BR": {
              singular: "Você pode fechar essa aba."
            },
            "zh-CN": {
              singular: "您可以关闭此选项卡。"
            }
          }
        }),
        getTermsAndConditions: () => (0, _v4.translate)({
          singular: "Your existing and future videos can be managed through Vimeo and Asana. By joining Vimeo, you agree to Vimeo's {TERMS_LINK}Terms of Service{/TERMS_LINK}, {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}, and {COOKIE_LINK}Cookie Policy{/COOKIE_LINK}.",
          replacements: _v11,
          dictionary: {
            es: {
              singular: "Tus videos actuales y futuros pueden ser gestionados a través de Vimeo y Asana. Al registrarse en Vimeo, acepta nuestros {TERMS_LINK}Términos y condiciones{/TERMS_LINK}, nuestra {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK}, y nuestra {COOKIE_LINK}Política de cookies{/COOKIE_LINK}."
            },
            "de-DE": {
              singular: "Du kannst deine bestehenden und künftigen Videos über Vimeo und Asana verwalten. Wenn du dich bei Vimeo registrierst, akzeptierst du die{TERMS_LINK}Nutzungsbedingungen{/TERMS_LINK}, die {PRIVACY_LINK} Datenschutzrichtlinien{/PRIVACY_LINK} und die{COOKIE_LINK}Cookie-Richtlinien{/COOKIE_LINK} von Vimeo."
            },
            "fr-FR": {
              singular: "Vos vidéos existantes et à venir peuvent être gérées via Vimeo et Asana. En vous inscrivant sur Vimeo, vous acceptez nos {TERMS_LINK}conditions d'utilisation{/TERMS_LINK}, notre {PRIVACY_LINK}politique de confidentialité{/PRIVACY_LINK} et notre {COOKIE_LINK}politique concernant les cookies{/COOKIE_LINK}."
            },
            "ja-JP": {
              singular: "既存および今後の動画は、VimeoとAsanaを介して管理できます。Vimeoにご登録いただくと、Vimeoの{TERMS_LINK}利用規約{/TERMS_LINK}、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}、{COOKIE_LINK}Cookieポリシー{/COOKIE_LINK}に同意したものとみなされます。"
            },
            "ko-KR": {
              singular: "Vimeo와 Asana를 통해 기존 및 향후 동영상을 관리할 수 있습니다. Vimeo에 가입함으로써 Vimeo의 {TERMS_LINK}서비스 약관{/TERMS_LINK}, {PRIVACY_LINK}개인정보보호 정책{/PRIVACY_LINK} 및 {COOKIE_LINK}쿠키 정책{/COOKIE_LINK}에 동의하게 됩니다."
            },
            "pt-BR": {
              singular: "Seus vídeos existentes e futuros podem ser gerenciados por meio do Vimeo e da Asana. Ao se cadastrar no Vimeo, você concorda com os {TERMS_LINK}Termos de Serviço{/TERMS_LINK}, com a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK} e com a {COOKIE_LINK}Política de Cookie do Vimeo{/COOKIE_LINK}."
            },
            "zh-CN": {
              singular: "您可以通过 Vimeo 和 Asana 管理现有和未来的视频。加入 Vimeo 即表示您同意 Vimeo 的{TERMS_LINK}服务条款{/TERMS_LINK}、{PRIVACY_LINK}隐私政策{/PRIVACY_LINK}和 {COOKIE_LINK}Cookie 政策{/COOKIE_LINK}。"
            }
          }
        }),
        getDisclaimer: () => (0, _v4.translate)({
          singular: "By signing in, I agree and understand that the organization that controls my email domain will administer my account, including any requests to access or delete my personal information, and have access to my account information, including my viewing activity. I further understand that the same organization will retain access and ownership to my videos, even if I delete my account or leave that organization.",
          dictionary: {
            es: {
              singular: "Al iniciar sesión, comprendo y acepto que la organización que controla mi dominio de correo electrónico administrará mi cuenta, incluida cualquier solicitud para acceder a mi información personal o eliminarla, y tendrá acceso a la información de mi cuenta; esto abarca mis datos de visualización. Asimismo, comprendo que la misma organización conservará el acceso a mis videos y la propiedad de estos, incluso si elimino mi cuenta o abandono esa organización."
            },
            "de-DE": {
              singular: "Indem ich mich anmelde, stimme ich zu und nehme zur Kenntnis, dass die Organisation, die meine E-Mail-Domain betreibt, mein Konto verwaltet – darunter auch die Zugriffsanforderungen oder Anträge auf Löschung meiner persönlichen Informationen. Des Weiteren hat die Organisation Zugriff auf meine Kontoinformationen, einschließlich meiner Ansichten. Ich nehme außerdem zur Kenntnis, dass diese Organisation weiterhin Zugang zu meinen Videos hat und auch weiterhin der Eigentümer der Videos ist, selbst wenn ich mein Konto lösche oder die Organisation verlasse."
            },
            "fr-FR": {
              singular: "En me connectant, je comprends et j'accepte que l'organisation qui contrôle mon domaine de messagerie administrera mon compte, traitant notamment toute demande d'accès à mes informations personnelles ou toute demande de suppression de celles-ci, et qu'elle aura accès aux informations de mon compte, y compris à mon historique de visionnage. Je comprends également que cette organisation conservera l'accès et la propriété de mes vidéos, et ce même si je supprime mon compte ou si je quitte cette organisation."
            },
            "ja-JP": {
              singular: "サインインすることにより、Eメールドメインを管理する組織が、個人情報へのアクセスまたは削除の要求を含め、自分のアカウントを管理し、閲覧アクティビティを含む自分のアカウント情報にアクセスできることに同意します。さらに、アカウントを削除したり所属の組織を離れたとしても、同じ組織が自分の動画へのアクセスと所有権を保持することを理解したものとします。"
            },
            "ko-KR": {
              singular: "로그인함으로써 본인의 이메일 도메인을 관리하는 조직이 본인의 개인 정보에 대한 액세스 또는 삭제 요청을 비롯한 본인의 계정을 관리하고 본인의 시청 활동 및 계정 정보에 액세스할 수 있다는 점을 이해하고 동의합니다. 또한, 계정을 삭제하거나 해당 조직에서 탈퇴하더라도 동일한 조직이 본인의 동영상에 대한 액세스 권한 및 소유권을 유지한다는 점을 이해합니다."
            },
            "pt-BR": {
              singular: "Ao fazer login, concordo e entendo que a organização que controla meu domínio de e-mail administrará minha conta, incluindo quaisquer solicitações para acessar ou excluir minhas informações pessoais, e terá acesso às informações da minha conta, incluindo minha atividade de visualização. Além disso, entendo que a mesma organização manterá o acesso e a propriedade dos meus vídeos, mesmo se eu excluir minha conta ou sair dessa organização."
            },
            "zh-CN": {
              singular: "登录即表示我同意并了解，控制我的电子邮件域名的组织将管理我的账户，包括任何访问或删除我的个人信息的请求，有权访问我的账户信息，包括我的观看活动。我进一步了解，即使我已删除账户或离开该组织，该组织也将继续拥有我的视频的访问权限和所有权。"
            }
          }
        }),
        getHeaderDisclaimer: () => (0, _v4.translate)({
          singular: "Anyone with the link can view your videos.",
          dictionary: {
            es: {
              singular: "Cualquier persona que tenga el enlace puede ver tus videos."
            },
            "de-DE": {
              singular: "Jede Person, die über den Link verfügt, kann deine Videos ansehen."
            },
            "fr-FR": {
              singular: "Toute personne munie du lien peut voir vos vidéos."
            },
            "ja-JP": {
              singular: "リンクを持つすべての人が動画を視聴できます。"
            },
            "ko-KR": {
              singular: "링크가 있는 사람은 누구나 동영상을 볼 수 있습니다."
            },
            "pt-BR": {
              singular: "Qualquer pessoa com o link pode ver seus vídeos."
            },
            "zh-CN": {
              singular: "拥有该链接的任何人都将可以观看您的视频。"
            }
          }
        })
      },
      zoom: {
        ..._v12("Zoom"),
        logo: (0, _v2.jsx)(function (_v0) {
          return (0, _v2.jsxs)("svg", {
            width: "35",
            height: "35",
            viewBox: "0 0 35 35",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._v0,
            children: [(0, _v2.jsx)("rect", {
              width: "35",
              height: "35",
              rx: "3",
              fill: "#2D8CFF"
            }), (0, _v2.jsxs)("g", {
              clipPath: "url(#clip0)",
              children: [(0, _v2.jsx)("path", {
                d: "M15.4175 23.9919C13.451 23.9919 11.4839 23.9931 9.51746 23.9919C7.48534 23.9907 6.00026 22.4394 5.99969 20.3177C5.99854 17.4892 5.99911 14.6608 5.99969 11.8324C5.99969 11.2121 6.19547 11.0087 6.79261 11.0087C10.8119 11.0081 14.8318 11.0291 18.8517 10.9991C20.7894 10.9847 22.4075 12.6428 22.3776 14.683C22.3355 17.5204 22.3672 20.3596 22.3666 23.1983C22.3666 23.7814 22.1651 23.9919 21.606 23.9919C19.5427 23.9925 17.4801 23.9919 15.4175 23.9919Z",
                fill: "#FDFEFE"
              }), (0, _v2.jsx)("path", {
                d: "M28.9959 17.5008C28.9959 19.43 28.997 21.3592 28.9941 23.2885C28.9935 23.5326 29.0529 23.829 28.7914 23.9603C28.5398 24.0869 28.3377 23.8853 28.1448 23.7384C26.548 22.526 24.9541 21.3095 23.3538 20.1025C23.2029 19.9885 23.1517 19.8709 23.1529 19.682C23.1598 18.2327 23.1598 16.7834 23.1529 15.3335C23.1517 15.1445 23.2035 15.0275 23.3544 14.9135C24.9546 13.7066 26.5486 12.49 28.1453 11.2777C28.3359 11.1325 28.5294 10.9099 28.7851 11.0425C29.0546 11.1823 28.9935 11.4888 28.9941 11.7426C28.997 13.6622 28.9959 15.5818 28.9959 17.5008Z",
                fill: "#FDFDFE"
              })]
            }), (0, _v2.jsx)("defs", {
              children: (0, _v2.jsx)("clipPath", {
                id: "clip0",
                children: (0, _v2.jsx)("rect", {
                  width: "23",
                  height: "13",
                  fill: "white",
                  transform: "translate(6 11)"
                })
              })
            })]
          });
        }, {
          height: (0, _v3.rem)(40),
          width: (0, _v3.rem)(32)
        })
      },
      venues: {
        ..._v12("Vimeo Venues"),
        getJoinPrompt: () => "Access Venues and much more with your FREE Vimeo account.",
        logo: null
      },
      ott: {
        ..._v12("Vimeo OTT"),
        logo: null
      },
      wix: {
        ..._v12("Wix"),
        logo: (0, _v2.jsx)(function (_v0) {
          return (0, _v2.jsxs)("svg", {
            width: "58",
            height: "32",
            viewBox: "0 0 35 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._v0,
            children: [(0, _v2.jsxs)("g", {
              clipPath: "url(#clip0_3513_77071)",
              children: [(0, _v2.jsx)("path", {
                d: "M20.0322 0.266238C19.3569 0.613345 19.0643 1.26128 19.0643 3.01996C19.0643 3.01996 19.402 2.67285 19.9421 2.46458C20.336 2.31417 20.6174 2.11748 20.82 1.96706C21.4052 1.51582 21.4952 0.972023 21.4952 0.0232627C21.4839 0.0232627 20.5611 -0.0345886 20.0322 0.266238Z",
                fill: "#000000"
              }), (0, _v2.jsx)("path", {
                d: "M15.9019 0.672438C15.3167 1.16996 15.1704 2.02616 15.1704 2.02616L13.2797 9.4774L11.7267 3.37988C11.5804 2.73194 11.2878 1.93359 10.8489 1.37822C10.3087 0.672438 9.18328 0.626157 9.04823 0.626157C8.94694 0.626157 7.8328 0.672438 7.24759 1.37822C6.80868 1.93359 6.51608 2.73194 6.36977 3.37988L4.90675 9.4774L3.01608 2.02616C3.01608 2.02616 2.86977 1.22781 2.28457 0.672438C1.36174 -0.18376 0 0.0245039 0 0.0245039L3.60129 13.9667C3.60129 13.9667 4.7717 14.0708 5.35691 13.77C6.13344 13.365 6.52733 13.0757 6.96624 11.1667C7.40514 9.46583 8.57556 4.51376 8.66559 4.16665C8.71061 4.01624 8.8119 3.565 9.1045 3.565C9.39711 3.565 9.49839 3.96996 9.54341 4.16665C9.64469 4.51376 10.8039 9.46583 11.2428 11.1667C11.7267 13.0642 12.0643 13.365 12.8521 13.77C13.4373 14.0708 14.6077 13.9667 14.6077 13.9667L18.1865 0.0245039C18.1865 0.0245039 16.8248 -0.17219 15.9019 0.672438Z",
                fill: "#000000"
              }), (0, _v2.jsx)("path", {
                d: "M21.484 2.26782C21.484 2.26782 21.2364 2.61493 20.7525 2.91576C20.4148 3.11245 20.1222 3.21658 19.7846 3.41328C19.1994 3.7141 19.0531 4.01493 19.0531 4.46617V4.61658V5.36865V5.51906V13.9191C19.0531 13.9191 19.9759 14.0232 20.5611 13.7224C21.3377 13.3174 21.484 12.924 21.484 11.2232V2.82319V2.26782Z",
                fill: "#000000"
              }), (0, _v2.jsx)("path", {
                d: "M30.4309 7.023L35.0001 0.0692779C35.0001 0.0692779 33.1094 -0.27783 32.1303 0.62465C31.5001 1.18002 30.8699 2.22134 30.8699 2.22134L29.2155 4.72052C29.1142 4.87093 29.0242 4.97506 28.8779 4.97506C28.7316 4.97506 28.5853 4.82465 28.5403 4.72052L26.8859 2.22134C26.8859 2.22134 26.2107 1.2263 25.6255 0.62465C24.6576 -0.27783 22.7557 0.0692779 22.7557 0.0692779L27.1785 7.01143L22.6544 13.9536C22.6544 13.9536 24.6464 14.2081 25.6255 13.3056C26.2557 12.7503 26.8409 11.8015 26.8409 11.8015L28.4953 9.30233C28.5965 9.15192 28.6866 9.04779 28.8329 9.04779C28.9792 9.04779 29.1255 9.1982 29.1705 9.30233L30.8248 11.8015C30.8248 11.8015 31.4551 12.7503 32.0403 13.3056C33.0081 14.2081 34.9551 13.9536 34.9551 13.9536L30.4309 7.023Z",
                fill: "#000000"
              })]
            }), (0, _v2.jsx)("defs", {
              children: (0, _v2.jsx)("clipPath", {
                id: "clip0_3513_77071",
                children: (0, _v2.jsx)("rect", {
                  width: "35",
                  height: "14",
                  fill: "white"
                })
              })
            })]
          });
        }, {
          height: (0, _v3.rem)(32),
          width: (0, _v3.rem)(60)
        })
      }
    };
  _v0.s(["PartnerAppIds", () => _v8, "canSkipGrantStep", 0, _v0 => 0 === _v0, "getCopyForApp", 0, (_v0, _v1) => {
    let _v2 = _v13[_v9[_v0]];
    if (_v2) return _v2;
    let _v3 = null;
    if (_v1?.thumbnail && _v1.thumbnail.sizes.length > 0) {
      let _v0 = _v1.thumbnail.sizes.length > 1 ? `${_v1.thumbnail.sizes[0].link} 1x, ${_v1.thumbnail.sizes[1].link} 2x` : `${_v1.thumbnail.sizes[0].link} 1x`;
      _v3 = (0, _v2.jsx)("img", {
        srcSet: _v0,
        alt: _v1?.name
      });
    }
    return {
      ..._v12(_v1?.name || "APP"),
      logo: _v3
    };
  }, "getPartnerEmailWarningCopy", 0, (_v0, _v1, _v2) => {
    let _v3 = "APP";
    switch (_v0) {
      case 0:
      case 0:
        _v3 = "Webex";
        break;
      case 0:
      case 0:
        _v3 = "Zoom";
    }
    return (0, _v4.translate)({
      singular: "The {APP_NAME} account you are connecting ({PARTNER_EMAILS}) does not match your Vimeo account ({USER_EMAIL}). Are you sure you want to connect?",
      replacements: {
        APP_NAME: _v3,
        PARTNER_EMAILS: _v1,
        USER_EMAIL: _v2
      },
      dictionary: {
        es: {
          singular: "La cuenta de {APP_NAME} que estás conectando ({PARTNER_EMAILS}) no coincide con tu cuenta de Vimeo ({USER_EMAIL}). ¿Estás seguro de que deseas conectar?"
        },
        "de-DE": {
          singular: "Das {APP_NAME}-Konto, das du verbindest ({PARTNER_EMAILS}), stimmt nicht mit deinem Vimeo-Konto ({USER_EMAIL}) überein. Möchtest du wirklich eine Verbindung herstellen?"
        },
        "fr-FR": {
          singular: "Le compte {APP_NAME} que vous connectez ({PARTNER_EMAILS}) ne correspond pas à votre compte Vimeo ({USER_EMAIL}). Voulez-vous vraiment le connecter ?"
        },
        "ja-JP": {
          singular: "接続しようとしている {APP_NAME} アカウント（{PARTNER_EMAILS}）は、Vimeoアカウント（{USER_EMAIL}）と一致しません。接続してもよろしいですか？"
        },
        "ko-KR": {
          singular: "연결하려는 {APP_NAME} 계정({PARTNER_EMAILS})이 Vimeo 계정({USER_EMAIL})과 일치하지 않습니다. 그래도 계속할까요?"
        },
        "pt-BR": {
          singular: "A conta do {APP_NAME} que você está conectando ({PARTNER_EMAILS}) não corresponde à sua conta do Vimeo ({USER_EMAIL}). Quer mesmo conectar?"
        },
        "zh-CN": {
          singular: "您连接的 {APP_NAME} 帐户 ({PARTNER_EMAILS}) 与您的 Vimeo 帐户 ({USER_EMAIL}) 不匹配。您确定要连接吗？"
        }
      }
    });
  }, "getTrackingName", 0, function (_v0, _v1) {
    return "godaddy_create" === _v1 || "godaddy_upload" === _v1 ? "godaddy" : null != _v0 && Object.keys(_v9).includes(_v0.toString()) ? _v9[_v0.toString()] : "none";
  }], 0);
}