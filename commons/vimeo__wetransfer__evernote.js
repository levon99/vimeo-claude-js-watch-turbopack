{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = ["vimeo", "wetransfer", "evernote", "harvest", "splice", "mileiq", "issuu", "komoot", "aol", "remini", "meetup", "streamyard", "airtable", "tractive"],
    _v3 = new Set(_v2),
    _v4 = _v0 => _v3.has(_v0),
    _v5 = {
      vimeo: "Vimeo",
      wetransfer: "WeTransfer",
      evernote: "Evernote",
      harvest: "Harvest",
      splice: "Splice",
      mileiq: "MileIQ",
      issuu: "Issuu",
      komoot: "komoot",
      aol: "AOL",
      remini: "Remini",
      meetup: "Meetup",
      streamyard: "StreamYard",
      airtable: "Airtable",
      tractive: "Tractive"
    },
    _v6 = {
      wetransfer: "Ultimate",
      streamyard: "Advanced",
      evernote: "Advanced",
      harvest: "Teams",
      mileiq: "Unlimited",
      issuu: "Unlimited",
      komoot: "Premium"
    },
    _v7 = {
      vimeo: String((0, _v1.translate)({
        singular: "Video hosting, editing, and distribution.",
        dictionary: {
          es: {
            singular: "Alojamiento, edición y distribución de video."
          },
          "de-DE": {
            singular: "Video‑Hosting, -Bearbeitung und -Verteilung."
          },
          "fr-FR": {
            singular: "Hébergement, montage et diffusion de vidéos."
          },
          "ja-JP": {
            singular: "動画のホスティング、編集、配信。"
          },
          "ko-KR": {
            singular: "비디오 호스팅, 편집 및 배포."
          },
          "pt-BR": {
            singular: "Hospedagem, edição e distribuição de vídeo."
          },
          "zh-CN": {
            singular: "视频托管、编辑与分发。"
          }
        }
      })),
      wetransfer: String((0, _v1.translate)({
        singular: "Send unlimited files up to 1TB—whether video, or anything else.",
        dictionary: {
          es: {
            singular: "Envía archivos ilimitados de hasta 1TB—ya sean videos o cualquier otra cosa."
          },
          "de-DE": {
            singular: "Senden Sie unbegrenzt Dateien bis zu 1 TB—egal ob Video oder etwas anderes."
          },
          "fr-FR": {
            singular: "Envoyez des fichiers illimités jusqu'à 1 To—qu'il s'agisse de vidéos ou de tout autre fichier."
          },
          "ja-JP": {
            singular: "動画でもその他のファイルでも、最大1TBまでのファイルを無制限に送信できます。"
          },
          "ko-KR": {
            singular: "동영상이든 그 외 어떤 파일이든 최대 1TB까지 파일을 무제한으로 전송하세요—"
          },
          "pt-BR": {
            singular: "Envie arquivos ilimitados de até 1TB—sejam vídeos ou qualquer outra coisa."
          },
          "zh-CN": {
            singular: "发送不限数量、每个文件最大 1TB 的文件—无论是视频还是其他任何类型。"
          }
        }
      })),
      evernote: String((0, _v1.translate)({
        singular: "Organize your pre-production, production and post-production in one place.",
        dictionary: {
          es: {
            singular: "Organiza tu preproducción, producción y posproducción en un solo lugar."
          },
          "de-DE": {
            singular: "Organisieren Sie Ihre Vorproduktion, Produktion und Postproduktion an einem Ort."
          },
          "fr-FR": {
            singular: "Organisez votre pré-production, votre production et votre post-production au même endroit."
          },
          "ja-JP": {
            singular: "プリプロダクション、プロダクション、ポストプロダクションを1か所で管理できます。"
          },
          "ko-KR": {
            singular: "프리프로덕션, 프로덕션, 포스트프로덕션을 한곳에서 정리하세요."
          },
          "pt-BR": {
            singular: "Organize sua pré-produção, produção e pós-produção em um só lugar."
          },
          "zh-CN": {
            singular: "将前期制作、制作和后期制作集中在一个地方进行管理。"
          }
        }
      })),
      harvest: String((0, _v1.translate)({
        singular: "Track hours across shoots and edits, and bill clients straight from the timesheet invoices.",
        dictionary: {
          es: {
            singular: "Registra horas de rodajes y ediciones, y factura a los clientes directamente desde las hojas de tiempo."
          },
          "de-DE": {
            singular: "Erfassen Sie Stunden für Drehs und Schnittarbeiten und fakturieren Sie Kunden direkt aus den Stundenzetteln."
          },
          "fr-FR": {
            singular: "Suivez les heures des tournages et des montages, et facturez les clients directement depuis les feuilles de temps."
          },
          "ja-JP": {
            singular: "撮影や編集での作業時間を追跡し、タイムシートの請求書から直接クライアントに請求できます。"
          },
          "ko-KR": {
            singular: "촬영과 편집 전반의 근무 시간을 추적하고, 타임시트 인보이스에서 바로 고객에게 청구하세요."
          },
          "pt-BR": {
            singular: "Controle as horas de filmagens e edições e emita faturas aos clientes diretamente a partir da folha de ponto."
          },
          "zh-CN": {
            singular: "跟踪拍摄和剪辑的工时，并可直接从工时表开具发票向客户收费。"
          }
        }
      })),
      splice: String((0, _v1.translate)({
        singular: "Edit and polish videos on your phone with pro-grade tools.",
        dictionary: {
          es: {
            singular: "Edita y perfecciona videos en tu teléfono con herramientas de nivel profesional."
          },
          "de-DE": {
            singular: "Bearbeiten und veredeln Sie Videos auf Ihrem Smartphone mit Profi-Tools."
          },
          "fr-FR": {
            singular: "Montez et peaufinez des vidéos sur votre téléphone grâce à des outils de qualité professionnelle."
          },
          "ja-JP": {
            singular: "プロ仕様のツールでスマートフォンの動画を編集・仕上げます。"
          },
          "ko-KR": {
            singular: "휴대폰에서 전문가급 도구로 동영상을 편집하고 다듬으세요."
          },
          "pt-BR": {
            singular: "Edite e aprimore vídeos no seu celular com ferramentas de nível profissional."
          },
          "zh-CN": {
            singular: "在手机上使用专业级工具编辑和润色视频。"
          }
        }
      })),
      mileiq: String((0, _v1.translate)({
        singular: "Automatically track drives and turn mileage into tax-ready reports.",
        dictionary: {
          es: {
            singular: "Rastrea automáticamente los trayectos y convierte el kilometraje en informes listos para impuestos."
          },
          "de-DE": {
            singular: "Fahrten automatisch erfassen und Kilometer in steuerfertige Berichte umwandeln."
          },
          "fr-FR": {
            singular: "Suivez automatiquement vos déplacements et transformez le kilométrage en rapports prêts pour les impôts."
          },
          "ja-JP": {
            singular: "走行を自動で記録し、走行距離を税務申告用のレポートに変換します。"
          },
          "ko-KR": {
            singular: "운행을 자동으로 추적하여 주행 거리를 세금 신고용 보고서로 변환하세요."
          },
          "pt-BR": {
            singular: "Rastreie viagens automaticamente e converta a quilometragem em relatórios prontos para a declaração de impostos."
          },
          "zh-CN": {
            singular: "自动追踪行程并将里程转换为可用于报税的报告。"
          }
        }
      })),
      issuu: String((0, _v1.translate)({
        singular: "Publish, share, and monetize digital publications.",
        dictionary: {
          es: {
            singular: "Publica, comparte y monetiza publicaciones digitales."
          },
          "de-DE": {
            singular: "Digitale Publikationen veröffentlichen, teilen und monetarisieren."
          },
          "fr-FR": {
            singular: "Publiez, partagez et monétisez des publications numériques."
          },
          "ja-JP": {
            singular: "デジタル出版物を公開、共有、収益化する。"
          },
          "ko-KR": {
            singular: "디지털 출판물을 발행, 공유하고 수익화하세요."
          },
          "pt-BR": {
            singular: "Publique, compartilhe e monetize publicações digitais."
          },
          "zh-CN": {
            singular: "发布、分享并从数字刊物中实现变现。"
          }
        }
      })),
      komoot: String((0, _v1.translate)({
        singular: "Plan and navigate hikes, bike rides, and runs with turn-by-turn routes.",
        dictionary: {
          es: {
            singular: "Planifica y navega rutas de senderismo, paseos en bicicleta y carreras con indicaciones giro a giro."
          },
          "de-DE": {
            singular: "Planen und navigieren Sie Wanderungen, Radtouren und Läufe mit Turn-by-Turn-Routen."
          },
          "fr-FR": {
            singular: "Planifiez et suivez vos randonnées, sorties à vélo et courses grâce à des itinéraires pas à pas."
          },
          "ja-JP": {
            singular: "ターンバイターン方式のルートでハイキング、サイクリング、ランニングを計画・ナビゲートできます。"
          },
          "ko-KR": {
            singular: "턴바이턴 경로로 하이킹, 자전거 라이딩, 달리기를 계획하고 길을 안내받으세요."
          },
          "pt-BR": {
            singular: "Planeje e navegue por trilhas, passeios de bicicleta e corridas com rotas curva a curva."
          },
          "zh-CN": {
            singular: "使用逐段导航路线规划并导航徒步、骑行和跑步行程。"
          }
        }
      })),
      aol: String((0, _v1.translate)({
        singular: "Email, news, and entertainment.",
        dictionary: {
          es: {
            singular: "Correo electrónico, noticias y entretenimiento."
          },
          "de-DE": {
            singular: "E‑Mail, Nachrichten und Unterhaltung."
          },
          "fr-FR": {
            singular: "Courriel, actualités et divertissement."
          },
          "ja-JP": {
            singular: "メール、ニュース、エンターテインメント。"
          },
          "ko-KR": {
            singular: "이메일, 뉴스 및 엔터테인먼트."
          },
          "pt-BR": {
            singular: "E-mail, notícias e entretenimento."
          },
          "zh-CN": {
            singular: "电子邮件、新闻与娱乐。"
          }
        }
      })),
      remini: String((0, _v1.translate)({
        singular: "AI that turns blurry photos into sharp, print-ready images.",
        dictionary: {
          es: {
            singular: "IA que convierte fotos borrosas en imágenes nítidas, listas para imprimir."
          },
          "de-DE": {
            singular: "KI, die unscharfe Fotos in scharfe, druckfertige Bilder verwandelt."
          },
          "fr-FR": {
            singular: "IA qui transforme les photos floues en images nettes, prêtes à l'impression."
          },
          "ja-JP": {
            singular: "ぼやけた写真を鮮明で印刷に適した画像に変換するAI。"
          },
          "ko-KR": {
            singular: "흐릿한 사진을 선명하고 인쇄용으로 바로 쓸 수 있는 이미지로 바꿔주는 AI."
          },
          "pt-BR": {
            singular: "IA que transforma fotos borradas em imagens nítidas, prontas para impressão."
          },
          "zh-CN": {
            singular: "将模糊照片转换为清晰、可直接打印的图像的 AI。"
          }
        }
      })),
      meetup: String((0, _v1.translate)({
        singular: "Find local groups and events for whatever you love.",
        dictionary: {
          es: {
            singular: "Encuentra grupos y eventos locales para todo lo que te apasiona."
          },
          "de-DE": {
            singular: "Finden Sie lokale Gruppen und Veranstaltungen für das, was Sie lieben."
          },
          "fr-FR": {
            singular: "Trouvez des groupes et des événements locaux pour tout ce que vous aimez."
          },
          "ja-JP": {
            singular: "好きなことに関する地域のグループやイベントを見つけましょう。"
          },
          "ko-KR": {
            singular: "관심 있는 모든 것에 대한 지역 모임과 이벤트를 찾아보세요."
          },
          "pt-BR": {
            singular: "Encontre grupos e eventos locais para tudo o que você ama."
          },
          "zh-CN": {
            singular: "查找本地群组和活动，满足你的各种兴趣。"
          }
        }
      })),
      streamyard: String((0, _v1.translate)({
        singular: "Go live to multiple platforms at once—all in your browser.",
        dictionary: {
          es: {
            singular: "Transmite en vivo a múltiples plataformas a la vez—todo desde tu navegador."
          },
          "de-DE": {
            singular: "Gleichzeitig auf mehreren Plattformen live gehen—alles in Ihrem Browser."
          },
          "fr-FR": {
            singular: "Diffusez en direct sur plusieurs plateformes à la fois—le tout depuis votre navigateur."
          },
          "ja-JP": {
            singular: "ブラウザだけで複数のプラットフォームへ同時にライブ配信できます。"
          },
          "ko-KR": {
            singular: "여러 플랫폼으로 동시에 라이브 방송하세요—모두 브라우저에서."
          },
          "pt-BR": {
            singular: "Transmita ao vivo para várias plataformas ao mesmo tempo—tudo no seu navegador."
          },
          "zh-CN": {
            singular: "在浏览器中同时向多个平台直播—全部在浏览器内完成。"
          }
        }
      })),
      airtable: String((0, _v1.translate)({
        singular: "Build flexible databases and workflows without code.",
        dictionary: {
          es: {
            singular: "Crea bases de datos y flujos de trabajo flexibles sin código."
          },
          "de-DE": {
            singular: "Erstellen Sie flexible Datenbanken und Workflows ohne Code."
          },
          "fr-FR": {
            singular: "Créez des bases de données et des flux de travail flexibles sans écrire de code."
          },
          "ja-JP": {
            singular: "コード不要で柔軟なデータベースとワークフローを構築します。"
          },
          "ko-KR": {
            singular: "코드 없이 유연한 데이터베이스와 워크플로를 구축하세요."
          },
          "pt-BR": {
            singular: "Crie bancos de dados e fluxos de trabalho flexíveis sem código."
          },
          "zh-CN": {
            singular: "无需编码即可构建灵活的数据库和工作流程。"
          }
        }
      })),
      tractive: String((0, _v1.translate)({
        singular: "Keep tabs on your dog or cat with live GPS tracking.",
        dictionary: {
          es: {
            singular: "Controla a tu perro o gato con seguimiento GPS en tiempo real."
          },
          "de-DE": {
            singular: "Behalten Sie Ihren Hund oder Ihre Katze mit Live-GPS-Tracking im Blick."
          },
          "fr-FR": {
            singular: "Surveillez votre chien ou votre chat grâce à la localisation GPS en temps réel."
          },
          "ja-JP": {
            singular: "ライブGPS追跡で犬や猫の居場所を把握できます。"
          },
          "ko-KR": {
            singular: "실시간 GPS로 반려견 또는 반려묘를 추적하세요."
          },
          "pt-BR": {
            singular: "Monitore seu cachorro ou gato com rastreamento GPS em tempo real."
          },
          "zh-CN": {
            singular: "通过实时 GPS 跟踪随时掌握你的狗或猫的位置。"
          }
        }
      }))
    },
    _v8 = {
      remini: {
        ios: "https://apps.apple.com/app/id1470373330",
        android: "https://play.google.com/store/apps/details?id=com.bigwinepot.nwdn.international"
      },
      splice: {
        ios: "https://apps.apple.com/app/id409838725",
        android: "https://play.google.com/store/apps/details?id=com.splice.video.editor"
      }
    };
  _v0.s(["PRODUCT_DESCRIPTIONS", 0, _v7, "PRODUCT_ENTRY_URLS", 0, {
    wetransfer: "https://wetransfer.com",
    evernote: "https://evernote.com",
    harvest: "https://www.getharvest.com",
    splice: "https://spliceapp.com",
    mileiq: "https://www.mileiq.com",
    issuu: "https://issuu.com",
    komoot: "https://komoot.com",
    aol: "https://www.aol.com",
    remini: "https://remini.ai",
    meetup: "https://www.meetup.com",
    streamyard: "https://streamyard.com",
    airtable: "https://airtable.com",
    tractive: "https://tractive.com"
  }, "PRODUCT_HERO_URLS", 0, {
    wetransfer: "https://i.vimeocdn.com/custom_asset/5a642f2aeefa998d4d74621a5b3cb6a2",
    evernote: "https://i.vimeocdn.com/custom_asset/0412634ae9b81af5e43b117df868c256",
    harvest: "https://i.vimeocdn.com/custom_asset/5d121cef3d483319d655bf302b15f1c9",
    splice: "https://i.vimeocdn.com/custom_asset/e5217c6d2bcafa4676e68db4e03f75d4",
    mileiq: "https://i.vimeocdn.com/custom_asset/aa1c93b28ae1ac0eb7a7e02e16196a26",
    issuu: "https://i.vimeocdn.com/custom_asset/22ac6952c37d5456675ad9398716026d",
    komoot: "https://i.vimeocdn.com/custom_asset/2a6991933f9cf5cd2fbc6fb0fb4cb6e7",
    aol: "https://i.vimeocdn.com/custom_asset/0d8b832c3ab7aa2ca8f709c16a01f490",
    remini: "https://i.vimeocdn.com/custom_asset/15581e33576ebe0fc10a4e109f68749f",
    meetup: "https://i.vimeocdn.com/custom_asset/a71eaa467949ecf7b64655615c62cc0a",
    streamyard: "https://i.vimeocdn.com/custom_asset/056e247efd30ffac6a73d3df25dbae0c",
    airtable: "https://i.vimeocdn.com/custom_asset/ce7bfdd19ffcdc97c2b47832a7a434d4",
    tractive: "https://i.vimeocdn.com/custom_asset/1ca9e9e94181a58ec2a0e69a70c9e83e"
  }, "PRODUCT_IDS", 0, _v2, "PRODUCT_NAMES", 0, _v5, "PRODUCT_TIER_LABELS", 0, _v6, "getProductDisplayName", 0, _v0 => {
    if (!_v4(_v0)) return _v0;
    let _v1 = _v6[_v0];
    return void 0 === _v1 ? _v5[_v0] : `${_v5[_v0]} ${_v1}`;
  }, "getProductStoreUrl", 0, (_v0, _v1) => _v8[_v0]?.[_v1], "isProductId", 0, _v4]);
}