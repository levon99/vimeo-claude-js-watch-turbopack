{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (_v0, _v1) => _v0?.restrictedVideoStorageLimit ?? _v1,
    _v4 = (_v0, _v1) => _v0?.videoStoragePeriodicQuota ?? _v1,
    _v5 = (_v0, _v1 = "2TB", _v2 = "month") => _v0?.bandwidth?.quotaPeriod !== "year" && (_v0 || "year" !== _v2) ? (0, _v1.translate)({
      singular: "{BANDWIDTH} per month",
      replacements: {
        BANDWIDTH: _v0?.bandwidth?.periodicQuota || _v1
      },
      dictionary: {
        es: {
          singular: "{BANDWIDTH} por mes"
        },
        "de-DE": {
          singular: "{BANDWIDTH} pro Monat"
        },
        "fr-FR": {
          singular: "{BANDWIDTH} par mois"
        },
        "ja-JP": {
          singular: "{BANDWIDTH} / 月"
        },
        "ko-KR": {
          singular: "{BANDWIDTH} 매월"
        },
        "pt-BR": {
          singular: "{BANDWIDTH} por mês"
        },
        "zh-CN": {
          singular: "{BANDWIDTH} 每月"
        }
      }
    }) : (0, _v1.translate)({
      singular: "{BANDWIDTH} per year",
      replacements: {
        BANDWIDTH: _v0?.bandwidth?.periodicQuota || _v1
      },
      dictionary: {
        es: {
          singular: "{BANDWIDTH} por año"
        },
        "de-DE": {
          singular: "{BANDWIDTH} pro Jahr"
        },
        "fr-FR": {
          singular: "{BANDWIDTH} par an"
        },
        "ja-JP": {
          singular: "{BANDWIDTH} / 年"
        },
        "ko-KR": {
          singular: "{BANDWIDTH} 연간"
        },
        "pt-BR": {
          singular: "{BANDWIDTH} por ano"
        },
        "zh-CN": {
          singular: "{BANDWIDTH} 每年"
        }
      }
    }),
    _v6 = [{
      text: (0, _v1.translate)({
        singular: "Screen recording",
        dictionary: {
          es: {
            singular: "Grabación de pantalla"
          },
          "de-DE": {
            singular: "Bildschirmaufnahme"
          },
          "fr-FR": {
            singular: "Enregistrement d'écran"
          },
          "ja-JP": {
            singular: "画面録画"
          },
          "ko-KR": {
            singular: "화면 녹화"
          },
          "pt-BR": {
            singular: "Gravação de tela"
          },
          "zh-CN": {
            singular: "屏幕录制"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Record your screen from your browser with webcam and audio access.",
        dictionary: {
          es: {
            singular: "Grabe su pantalla desde el navegador con acceso a la cámara web y al audio."
          },
          "de-DE": {
            singular: "Zeichnen Sie Ihren Bildschirm über Ihren Browser mit Webcam- und Audio-Zugriff auf."
          },
          "fr-FR": {
            singular: "Enregistrez votre écran depuis votre navigateur avec un accès à votre webcam et votre son."
          },
          "ja-JP": {
            singular: "ウェブカメラと音声へのアクセスでブラウザーから画面を録画。"
          },
          "ko-KR": {
            singular: "웹캠 및 오디오 액세스를 통해 브라우저에서 화면을 녹화합니다."
          },
          "pt-BR": {
            singular: "Grave a tela do seu navegador com acesso à sua webcam e áudio."
          },
          "zh-CN": {
            singular: "开启网络摄像头和音频访问权限，从浏览器录制屏幕。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Professionally designed templates",
        dictionary: {
          es: {
            singular: "Plantillas diseñadas por profesionales"
          },
          "de-DE": {
            singular: "Professionell designte Vorlagen"
          },
          "fr-FR": {
            singular: "Modèles professionnels"
          },
          "ja-JP": {
            singular: "プロがデザインしたテンプレート"
          },
          "ko-KR": {
            singular: "전문 디자인 템플릿"
          },
          "pt-BR": {
            singular: "Modelos criados por profissionais"
          },
          "zh-CN": {
            singular: "专业设计的模板"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Create polished videos in minutes from scratch, or by customizing our ready-made templates with your own text, media, music, and more.",
        dictionary: {
          es: {
            singular: "Cree videos de calidad en cuestión de minutos desde cero o personalizando nuestras plantillas prediseñadas con su propio texto, archivos, música y mucho más."
          },
          "de-DE": {
            singular: "Erstellen Sie rasch hochwertige und von Grund auf neue Videos, oder passen Sie unsere vorgefertigten Vorlagen mit Ihren eigenen Texten, Medien, Tonspuren und mehr an."
          },
          "fr-FR": {
            singular: "Créez de toute pièce des vidéos impeccables en quelques minutes ou choisissez un modèle prêt à l'emploi à personnaliser avec le texte, les médias et la musique de votre choix."
          },
          "ja-JP": {
            singular: "洗練された動画を初めから作成するか、独自のテキストやメディア、音楽などを視聴して既存のテンプレートをカスタマイズ。"
          },
          "ko-KR": {
            singular: "단 몇 분 만에 세련된 동영상을 만들 수 있습니다. 처음부터 직접 만들거나 사전 제작된 템플릿을 사용하여 나만의 텍스트, 미디어, 음악 등으로 커스텀할 수 있습니다."
          },
          "pt-BR": {
            singular: "Crie vídeos perfeitos a partir do início em poucos minutos ou customize nossos modelos já prontos usando seu próprio texto, mídia, música e outros recursos."
          },
          "zh-CN": {
            singular: "几分钟即可从零开始制作精美的视频，也可以使用自己的文本、媒体、音乐等将我们的现成模板个性化。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Trimming and timeline editing",
        dictionary: {
          es: {
            singular: "Recorte y edición de la línea de tiempo"
          },
          "de-DE": {
            singular: "Zuschneiden und Bearbeiten der Zeitleiste"
          },
          "fr-FR": {
            singular: "Découpage et modification de la séquence"
          },
          "ja-JP": {
            singular: "トリミングとタイムライン編集"
          },
          "ko-KR": {
            singular: "자르기 및 타임라인 편집"
          },
          "pt-BR": {
            singular: "Corte e edição de linha do tempo"
          },
          "zh-CN": {
            singular: "修剪和时间线编辑"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Easily edit the length, timing, and flow of your video by trimming or resizing your raw media assets.",
        dictionary: {
          es: {
            singular: "Para editar fácilmente la duración, el tiempo y el flujo de su video, recorte o redimensione sus recursos multimedia sin procesar."
          },
          "de-DE": {
            singular: "Bearbeiten Sie einfach durch Zuschneiden oder Größenanpassung Ihrer Rohdaten die Länge, das Timing und den Ablauf Ihres Videos."
          },
          "fr-FR": {
            singular: "Modifiez facilement la longueur, le rythme et la fluidité de votre vidéo en découpant ou redimensionnant les ressources multimédia brutes."
          },
          "ja-JP": {
            singular: "Rawメディアアセットをトリミングまたはサイズ変更することで、動画の長さやタイミング、流れを簡単に編集できます。"
          },
          "ko-KR": {
            singular: "미디어 원본을 자르거나 크기를 조정하여 동영상의 길이, 타이밍, 흐름을 쉽게 편집할 수 있습니다."
          },
          "pt-BR": {
            singular: "Corte ou redimensione seu acervo bruto de vídeos para alterar facilmente a duração, o ritmo e o fluxo do seu vídeo."
          },
          "zh-CN": {
            singular: "通过修剪或调整原始媒体资产的大小，轻松编辑视频的时长、时间和流程。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "GIF maker",
        dictionary: {
          es: {
            singular: "Realizador de gif"
          },
          "de-DE": {
            singular: "GIF-Editor"
          },
          "fr-FR": {
            singular: "Créateur de GIF"
          },
          "ja-JP": {
            singular: "gifメーカー"
          },
          "ko-KR": {
            singular: "GIF 메이커"
          },
          "pt-BR": {
            singular: "Criador de gif"
          },
          "zh-CN": {
            singular: "GIF 制作工具"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Upload any clip and create a high-quality GIF in seconds.",
        dictionary: {
          es: {
            singular: "Suba cualquier clip y cree un GIF de alta calidad en segundos."
          },
          "de-DE": {
            singular: "Laden Sie einen beliebigen Clip hoch und erstellen Sie in Sekundenschnelle ein hochwertiges GIF."
          },
          "fr-FR": {
            singular: "Importez un clip de votre choix pour créer un GIF de haute qualité en quelques secondes."
          },
          "ja-JP": {
            singular: "クリップをアップロードして、高画質のGIFを数秒で作成できます。"
          },
          "ko-KR": {
            singular: "원하는 클립을 업로드하고 몇 초 만에 고품질 GIF를 만들 수 있습니다."
          },
          "pt-BR": {
            singular: "Carregue um clipe e crie um GIF de alta qualidade em segundos."
          },
          "zh-CN": {
            singular: "上传任何剪辑片段，几秒钟即可创建优质 GIF。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Remove Vimeo watermark",
        dictionary: {
          es: {
            singular: "Quitar la marca de agua de Vimeo"
          },
          "de-DE": {
            singular: "Vimeo-Wasserzeichen entfernen"
          },
          "fr-FR": {
            singular: "Supprimer le filigrane Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoのウォーターマークを削除"
          },
          "ko-KR": {
            singular: "Vimeo 워터마크 제거"
          },
          "pt-BR": {
            singular: "Remover marca d'água do Vimeo"
          },
          "zh-CN": {
            singular: "去除 Vimeo 水印"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Export your created and edited videos without the Vimeo watermark.",
        dictionary: {
          es: {
            singular: "Exporte sus videos creados y editados sin la marca de agua de Vimeo."
          },
          "de-DE": {
            singular: "Exportieren Sie Ihre erstellten und bearbeiteten Videos ohne das Vimeo-Wasserzeichen."
          },
          "fr-FR": {
            singular: "Exportez les vidéos que vous avez créées et montées sans le filigrane Vimeo."
          },
          "ja-JP": {
            singular: "Vimeoのウォーターマークなしに作成・編集した動画をエクスポート。"
          },
          "ko-KR": {
            singular: "Vimeo 워터마크 없이 제작하고 편집한 동영상을 내보냅니다."
          },
          "pt-BR": {
            singular: "Exporte seus vídeos criados e editados sem a marca d'água do Vimeo."
          },
          "zh-CN": {
            singular: "导出创建和编辑的视频，不带 Vimeo 水印。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Stock photos, videos, and music",
        dictionary: {
          es: {
            singular: "Archivo de fotos, videos y música"
          },
          "de-DE": {
            singular: "Stockfotos, Videos und Musik"
          },
          "fr-FR": {
            singular: "Photos, vidéos et sons sous licence"
          },
          "ja-JP": {
            singular: "ストック写真、動画、音楽"
          },
          "ko-KR": {
            singular: "스톡 사진, 동영상, 음악"
          },
          "pt-BR": {
            singular: "Acervo de fotos, vídeos e músicas"
          },
          "zh-CN": {
            singular: "库存图片、视频和音乐"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Choose from over 11M video and 150M photo stock assets and licensed audio tracks to add to your video.",
        dictionary: {
          es: {
            singular: "Elija entre más de 11 millones de recursos de archivos de video y 150 millones de fotos y pistas de audio con licencia para agregar a su video."
          },
          "de-DE": {
            singular: "Wählen Sie im Archiv aus über 11 Mio. Videos, 150 Mio. Fotos und lizenzierten Tonspuren aus, die Sie Ihrem Video hinzufügen können."
          },
          "fr-FR": {
            singular: "Choisissez parmi plus de 11 millions de vidéos, 150 millions de photos et de pistes audio sous licence à ajouter à votre vidéo."
          },
          "ja-JP": {
            singular: "1,100万を超える動画と1億5,000万のストック写真アセット、およびライセンスされた音声トラックから選択して、動画に追加できます。"
          },
          "ko-KR": {
            singular: "1100만 개 이상의 동영상, 1억 5000만 개 이상의 사진 스톡 자산, 라이선스가 있는 오디오 트랙 중에서 선택하여 동영상에 추가할 수 있습니다."
          },
          "pt-BR": {
            singular: "Aproveite um acervo de mais de 11 milhões de vídeos, 150 milhões de fotos e faixas de áudio licenciadas para adicionar à sua produção."
          },
          "zh-CN": {
            singular: "从超过 1100 万视频和 1.5 亿图片库存资产以及获得许可的音轨中进行选择，然后添加到您的视频中。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "Teleprompter",
        dictionary: {
          "fr-FR": {
            singular: "Téléprompteur"
          },
          "ja-JP": {
            singular: "テレプロンプター"
          },
          "ko-KR": {
            singular: "텔레프롬프터"
          },
          "zh-CN": {
            singular: "提词器"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Web-based teleprompter displays your script at your preferred font size and scrolling pace.",
        dictionary: {
          es: {
            singular: "El teleprompter basado en web reproduce su guion con el tamaño de letra y el ritmo de desplazamiento que prefiera."
          },
          "de-DE": {
            singular: "Der webbasierte Teleprompter zeigt Ihr Skript in der von Ihnen gewünschten Schriftgröße und Bildlaufgeschwindigkeit an."
          },
          "fr-FR": {
            singular: "Le téléprompteur en ligne affiche votre texte à la taille de police et au rythme de défilement de votre choix."
          },
          "ja-JP": {
            singular: "ウェブベースのテレプロンプターを使用すれば、お好きなフォントサイズとスクロールペースでスクリプトを表示できます。"
          },
          "ko-KR": {
            singular: "웹 기반 텔레프롬프터에 원하는 폰트 크기와 스크롤 속도로 스크립트가 표시됩니다."
          },
          "pt-BR": {
            singular: "O teleprompter online exibe o roteiro no tamanho de fonte e ritmo de rolagem de sua preferência."
          },
          "zh-CN": {
            singular: "基于 Web 的提词器以您首选的字体大小和滚动速度显示您的脚本。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }, {
      text: (0, _v1.translate)({
        singular: "Text-based video editing",
        dictionary: {
          es: {
            singular: "Edición de video basada en texto"
          },
          "de-DE": {
            singular: "Textbasierte Videobearbeitung"
          },
          "fr-FR": {
            singular: "Montage vidéo basé sur le texte"
          },
          "ja-JP": {
            singular: "テキストベースの動画編集"
          },
          "ko-KR": {
            singular: "텍스트 기반 동영상 편집"
          },
          "pt-BR": {
            singular: "Edição de vídeo baseada em texto"
          },
          "zh-CN": {
            singular: "基于文本的视频编辑"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Edit your video by simply editing the automatically-generated transcript text.",
        dictionary: {
          es: {
            singular: "Edite su video simplemente modificando el texto de la transcripción generada automáticamente."
          },
          "de-DE": {
            singular: "Bearbeiten Sie Ihr Video, indem Sie einfach den automatisch erstellten Text des Transkripts bearbeiten."
          },
          "fr-FR": {
            singular: "Modifiez votre vidéo en éditant simplement le texte de la transcription générée automatiquement."
          },
          "ja-JP": {
            singular: "自動生成されたスクリプトのテキストを編集すると、動画も編集されます。"
          },
          "ko-KR": {
            singular: "자동 생성된 스크립트를 간단히 편집하는 것으로 동영상을 편집할 수 있습니다."
          },
          "pt-BR": {
            singular: "Editar vídeos de forma fácil ao editar a transcrição de texto gerada automaticamente."
          },
          "zh-CN": {
            singular: "只需编辑自动生成的转录文稿即可编辑视频。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }, {
      text: (0, _v1.translate)({
        singular: "Brand kit",
        dictionary: {
          es: {
            singular: "Kit de marca"
          },
          "de-DE": {
            singular: "Brand Kit"
          },
          "fr-FR": {
            singular: "Kit de marque"
          },
          "ja-JP": {
            singular: "ブランドキット"
          },
          "ko-KR": {
            singular: "브랜드 키트"
          },
          "pt-BR": {
            singular: "Kit de marca"
          },
          "zh-CN": {
            singular: "品牌工具包"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Add your brand’s logo, colors, and watermark to your videos.",
        dictionary: {
          es: {
            singular: "Agregue el logotipo, los colores y la marca de agua de su marca a sus videos."
          },
          "de-DE": {
            singular: "Fügen Sie Ihren Videos das Logo, die Farben und das Wasserzeichen Ihrer Marke hinzu."
          },
          "fr-FR": {
            singular: "Ajoutez le logo, les couleurs et le filigrane de votre marque à vos vidéos."
          },
          "ja-JP": {
            singular: "動画にブランドのロゴと色、ウォーターマークを追加。"
          },
          "ko-KR": {
            singular: "동영상에 브랜드 로고, 색상, 워터마크를 추가합니다."
          },
          "pt-BR": {
            singular: "Adicione o logo, as cores e a marca d'água da sua marca aos seus vídeos."
          },
          "zh-CN": {
            singular: "为您的视频添加品牌徽标、颜色和水印。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_CORE_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "Custom fonts",
        dictionary: {
          es: {
            singular: "Fuentes personalizadas"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Schriftarten"
          },
          "fr-FR": {
            singular: "Polices personnalisées"
          },
          "ja-JP": {
            singular: "カスタムフォント"
          },
          "ko-KR": {
            singular: "사용자 지정 글꼴"
          },
          "pt-BR": {
            singular: "Fontes personalizadas"
          },
          "zh-CN": {
            singular: "自定义字体"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Upload custom fonts to your brand kit.",
        dictionary: {
          es: {
            singular: "Suba fuentes personalizadas a su kit de marca."
          },
          "de-DE": {
            singular: "Laden Sie benutzerdefinierte Schriftarten für Ihr Brand Kit hoch."
          },
          "fr-FR": {
            singular: "Mettez en ligne des polices personnalisées dans votre Kit de marque."
          },
          "ja-JP": {
            singular: "カスタムフォントをブランドキットにアップロードします。"
          },
          "ko-KR": {
            singular: "브랜드 키트에 커스텀 폰트를 업로드합니다."
          },
          "pt-BR": {
            singular: "Carregar fontes customizadas para o kit de sua marca."
          },
          "zh-CN": {
            singular: "将自定义字体上传到品牌工具包。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_CORE_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "Custom intros and outros",
        dictionary: {
          es: {
            singular: "Introducciones y cierres personalizados"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Intros und Outros"
          },
          "fr-FR": {
            singular: "Personnaliser les intros et les outros"
          },
          "ja-JP": {
            singular: "カスタムイントロおよびアウトロ"
          },
          "ko-KR": {
            singular: "커스텀 인트로 및 아우트로"
          },
          "pt-BR": {
            singular: "Introduções e telas pós-vídeo customizadas"
          },
          "zh-CN": {
            singular: "自定义片头和片尾"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Upload custom intros and outros to your brand kit.",
        dictionary: {
          es: {
            singular: "Suba introducciones y cierres personalizados a su kit de marca."
          },
          "de-DE": {
            singular: "Laden Sie benutzerdefinierte Intros und Outros für Ihr Brand Kit hoch."
          },
          "fr-FR": {
            singular: "Mettez en ligne des intros et des outros personnalisées dans votre Kit de marque."
          },
          "ja-JP": {
            singular: "カスタムイントロおよびアウトロをブランドキットにアップロードします。"
          },
          "ko-KR": {
            singular: "브랜드 키트에 커스텀 인트로 및 아우트로를 업로드합니다."
          },
          "pt-BR": {
            singular: "Carregar introduções e telas pós-vídeo customizadas para o kit da sua marca."
          },
          "zh-CN": {
            singular: "将自定义片头和片尾上传到您的品牌工具包。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "Team templates",
        dictionary: {
          es: {
            singular: "Plantillas del equipo"
          },
          "de-DE": {
            singular: "Team-Vorlagen"
          },
          "fr-FR": {
            singular: "Modèles d'équipe"
          },
          "ja-JP": {
            singular: "チームテンプレート"
          },
          "ko-KR": {
            singular: "팀 템플릿"
          },
          "pt-BR": {
            singular: "Modelos de equipe"
          },
          "zh-CN": {
            singular: "团队模板"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Create and save custom video templates for your team.",
        dictionary: {
          es: {
            singular: "Cree y guarde plantillas de video personalizadas para su equipo."
          },
          "de-DE": {
            singular: "Erstelle und speichere benutzerdefinierte Videovorlagen für dein Team."
          },
          "fr-FR": {
            singular: "Créez et enregistrez des modèles vidéo personnalisés pour votre équipe"
          },
          "ja-JP": {
            singular: "チーム用のカスタム動画テンプレートを作成して保存する"
          },
          "ko-KR": {
            singular: "팀을 위한 커스텀 동영상 템플릿을 만들고 저장하세요."
          },
          "pt-BR": {
            singular: "Crie e salve modelos de vídeo customizados para sua equipe."
          },
          "zh-CN": {
            singular: "为团队创建并保存自定义视频模板。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }],
    _v7 = [{
      text: (0, _v1.translate)({
        singular: "Transcription",
        dictionary: {
          es: {
            singular: "Transcripción"
          },
          "de-DE": {
            singular: "Transkription"
          },
          "ja-JP": {
            singular: "トランスクリプション"
          },
          "ko-KR": {
            singular: "스크립트 생성"
          },
          "pt-BR": {
            singular: "Transcrição"
          },
          "zh-CN": {
            singular: "转录"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Using AI to transcribe your video",
        dictionary: {
          es: {
            singular: "Usar la IA para transcribir su video"
          },
          "de-DE": {
            singular: "KI zum Transkribieren Ihres Videos nutzen"
          },
          "fr-FR": {
            singular: "Utiliser l'IA pour transcrire votre vidéo"
          },
          "ja-JP": {
            singular: "AIを使用した動画の文字起こし"
          },
          "ko-KR": {
            singular: "AI를 사용한 동영상 대화록 생성"
          },
          "pt-BR": {
            singular: "Usar IA para transcrever seu vídeo"
          },
          "zh-CN": {
            singular: "使用 AI 转录视频"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }, {
      text: (0, _v1.translate)({
        singular: "Subtitle translations",
        dictionary: {
          es: {
            singular: "Traducciones de subtítulos"
          },
          "de-DE": {
            singular: "Untertitelübersetzungen"
          },
          "fr-FR": {
            singular: "Traductions de sous-titres"
          },
          "ja-JP": {
            singular: "字幕翻訳"
          },
          "ko-KR": {
            singular: "자막 번역"
          },
          "pt-BR": {
            singular: "Traduções de legendas"
          },
          "zh-CN": {
            singular: "字幕翻译"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Translate the subtitles of your video into 36 languages. All paid plans include the ability to try it for free.",
        dictionary: {
          es: {
            singular: "Traduzca los subtítulos de su video a 36 idiomas. Todos los planes de pago incluyen la posibilidad de probarlo sin costo."
          },
          "de-DE": {
            singular: "Übersetzen Sie die Untertitel Ihres Videos in 36 Sprachen. Alle kostenpflichtigen Pläne beinhalten die Möglichkeit, diese Funktion kostenlos zu testen."
          },
          "fr-FR": {
            singular: "Traduisez les sous-titres de votre vidéo en 36 langues. Tous les abonnements payants incluent un essai gratuit de cette fonctionnalité."
          },
          "ja-JP": {
            singular: "動画の字幕を36言語に翻訳します。すべての有料プランで、無料でお試しいただけるようになっています。"
          },
          "ko-KR": {
            singular: "동영상 자막을 36개 언어로 번역합니다. 모든 유료 플랜은 무료로 시험 사용을 해 볼 수 있습니다."
          },
          "pt-BR": {
            singular: "Traduza as legendas do seu vídeo para 36 idiomas. Todos os planos pagos permitem experimentar o recurso de graça."
          },
          "zh-CN": {
            singular: "将您的视频字幕翻译成 36 种语言。所有付费套餐都包含免费试用的权利。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }, {
      text: (0, _v1.translate)({
        singular: "Buy AI credits",
        dictionary: {
          es: {
            singular: "Compre créditos de IA"
          },
          "de-DE": {
            singular: "AI-Credits kaufen"
          },
          "fr-FR": {
            singular: "Acheter des crédits d'IA"
          },
          "ja-JP": {
            singular: "AIクレジットを購入"
          },
          "ko-KR": {
            singular: "AI 크레딧 구매"
          },
          "pt-BR": {
            singular: "Comprar créditos de IA"
          },
          "zh-CN": {
            singular: "购买 AI 点数"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Purchase additional AI credits to power features like transcription, subtitle translations, and script generation.",
        dictionary: {
          es: {
            singular: "Adquiera créditos adicionales de IA para habilitar funciones como transcripción, traducción de subtítulos, y generación de guiones."
          },
          "de-DE": {
            singular: "Erwerben Sie zusätzliche KI-Credits, um Funktionen wie Transkription, Untertitelübersetzungen und Skriptgenerierung zu ermöglichen."
          },
          "fr-FR": {
            singular: "Achetez des crédits d'IA supplémentaires pour activer des fonctionnalités telles que la transcription, la traduction des sous-titres et la génération de scripts."
          },
          "ja-JP": {
            singular: "文字起こし、字幕翻訳、スクリプト生成などの機能を利用するために、追加のAIクレジットを購入してください。"
          },
          "ko-KR": {
            singular: "전사, 자막 번역 및 스크립트 생성과 같은 기능을 이용하려면 추가 AI 크레딧을 구매하세요."
          },
          "pt-BR": {
            singular: "Compre créditos adicionais de IA para habilitar recursos como transcrição, tradução de legendas e geração de roteiros."
          },
          "zh-CN": {
            singular: "购买额外的 AI 积分以支持转录、字幕翻译和脚本生成等功能。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }, {
      text: (0, _v1.translate)({
        singular: "AI script generator",
        dictionary: {
          es: {
            singular: "Generador de guiones de IA"
          },
          "de-DE": {
            singular: "KI-Skript-Generator"
          },
          "fr-FR": {
            singular: "Générateur de scripts optimisé par l'IA"
          },
          "ja-JP": {
            singular: "AIスクリプトジェネレーター"
          },
          "ko-KR": {
            singular: "AI 스크립트 작성기"
          },
          "pt-BR": {
            singular: "Gerador de roteiros de IA"
          },
          "zh-CN": {
            singular: "AI 脚本生成器"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Generate a complete video script in seconds by typing a brief description, and your preferred tone and length.",
        dictionary: {
          es: {
            singular: "Genere un guion de video completo en segundos escribiendo una breve descripción y el tono y la duración que prefiere."
          },
          "de-DE": {
            singular: "Erstellen Sie in Sekundenschnelle ein komplettes Videoskript, indem Sie eine kurze Beschreibung, den gewünschten Ton und die gewünschte Länge eingeben."
          },
          "fr-FR": {
            singular: "Générer un script vidéo complet en quelques secondes en saisissant une brève description, ainsi que le ton et la durée souhaités."
          },
          "ja-JP": {
            singular: "簡単な説明、好ましいトーン、長さを入力するだけで、完全な動画スクリプトを数秒で生成できます。"
          },
          "ko-KR": {
            singular: "간단한 설명, 원하는 톤과 길이를 입력하면 몇 초 만에 동영상 스크립트가 생성됩니다."
          },
          "pt-BR": {
            singular: "Gere um roteiro de vídeo completo em questão de segundos, digitando uma breve descrição, o estilo e a duração preferidos."
          },
          "zh-CN": {
            singular: "只需输入简要说明以及您的语气和长度偏好，即可在几秒钟内生成一份完整的视频脚本。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }, {
      text: (0, _v1.translate)({
        singular: "AI-generated video details and summaries",
        dictionary: {
          es: {
            singular: "Detalles y resúmenes de videos generados por IA"
          },
          "de-DE": {
            singular: "KI-generierte Videodetails und Zusammenfassungen"
          },
          "fr-FR": {
            singular: "Détails et résumés de vidéos générés par l'IA"
          },
          "ja-JP": {
            singular: "AI生成の動画詳細と要約"
          },
          "ko-KR": {
            singular: "AI가 생성한 동영상 세부 정보 및 요약"
          },
          "pt-BR": {
            singular: "Detalhes e resumos de vídeos gerados por IA"
          },
          "zh-CN": {
            singular: "AI 生成的视频详情与摘要"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Auto-generate video details including a video title, description, tags, and a shareable email summary of your video.",
        dictionary: {
          es: {
            singular: "Genere automáticamente los detalles del video, incluido el título, la descripción, las etiquetas y un resumen de este que se puede compartir por correo electrónico."
          },
          "de-DE": {
            singular: "Generieren Sie automatisch Videodetails, einschließlich eines Videotitels, einer Beschreibung, Tags und einer E-Mail-Zusammenfassung Ihres Videos, die Sie mit anderen teilen können."
          },
          "fr-FR": {
            singular: "Générez automatiquement les détails de votre vidéo, y compris le titre, la description, les balises et un résumé partageable par e-mail."
          },
          "ja-JP": {
            singular: "動画のタイトル、概要、タグ、共有可能なメールの概要など、動画の詳細を自動生成します。"
          },
          "ko-KR": {
            singular: "동영상 제목, 설명, 태그, 공유 가능한 이메일 요약을 포함한 동영상 세부 정보를 자동으로 생성합니다."
          },
          "pt-BR": {
            singular: "Gere automaticamente os detalhes do vídeo, incluindo título, descrição, tags e um resumo compartilhável por e-mail."
          },
          "zh-CN": {
            singular: "自动生成视频详细信息，包括视频标题、描述、标签和视频的可共享电子邮件摘要。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }, {
      text: (0, _v1.translate)({
        singular: "Auto chapters",
        dictionary: {
          es: {
            singular: "Capítulos automáticos"
          },
          "de-DE": {
            singular: "Automatisch generierte Kapitel"
          },
          "fr-FR": {
            singular: "Chapitres automatiques"
          },
          "ja-JP": {
            singular: "自動チャプター"
          },
          "ko-KR": {
            singular: "자동 챕터"
          },
          "pt-BR": {
            singular: "Capítulos automáticos"
          },
          "zh-CN": {
            singular: "自动章节"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Generate automatic chapters to section your video into relevant moments.",
        dictionary: {
          es: {
            singular: "Genere capítulos automáticos para dividir su video en momentos relevantes."
          },
          "de-DE": {
            singular: "Erstellen Sie automatische Kapitel, um Ihr Video in relevante Momente zu unterteilen."
          },
          "fr-FR": {
            singular: "Générez des chapitres automatiques pour diviser votre vidéo en moments pertinents."
          },
          "ja-JP": {
            singular: "自動チャプターを生成して、動画を関連性の高いセクションに分割します。"
          },
          "ko-KR": {
            singular: "자동 챕터를 생성하여 동영상을 관련성 있는 순간으로 구분할 수 있습니다."
          },
          "pt-BR": {
            singular: "Gere capítulos automáticos para dividir seu vídeo em momentos importantes."
          },
          "zh-CN": {
            singular: "自动生成章节，将视频分为相关片段。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }, {
      text: (0, _v1.translate)({
        singular: "Highlight reels",
        dictionary: {
          es: {
            singular: "Destacar carretes"
          },
          "de-DE": {
            singular: "Rollen hervorheben"
          },
          "fr-FR": {
            singular: "Temps forts"
          },
          "ja-JP": {
            singular: "ハイライトリール"
          },
          "ko-KR": {
            singular: "하이라이트 릴스"
          },
          "pt-BR": {
            singular: "Destaque reels"
          },
          "zh-CN": {
            singular: "精彩片段"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Synthesize a long video into a short, digestible video summary tailored to what the viewer is looking for.",
        dictionary: {
          es: {
            singular: "Sintetice un video largo en un resumen breve y digerible adaptado a lo que busca el espectador."
          },
          "de-DE": {
            singular: "Fassen Sie ein langes Video zu einer kurzen, leicht verständlichen Videozusammenfassung zusammen, die auf das zugeschnitten ist, wonach der Zuschauer sucht."
          },
          "fr-FR": {
            singular: "Synthétisez une longue vidéo en un résumé vidéo court et digeste, adapté à ce que recherche le spectateur."
          },
          "ja-JP": {
            singular: "長い動画を、視聴者が探している内容に合わせた短くてわかりやすい動画の概要に合成します。"
          },
          "ko-KR": {
            singular: "뷰어가 원하는 내용에 맞춰 긴 동영상을 짧고 이해하기 쉬운 동영상 요약본으로 변환하세요."
          },
          "pt-BR": {
            singular: "Sintetize um vídeo longo em um vídeo curto e resumido, com base no que o espectador está procurando."
          },
          "zh-CN": {
            singular: "根据观众的需求，将长视频合成为简短、易理解的视频摘要。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        core: !0,
        professional: !0,
        studio: !0,
        production: !0,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Ask AI",
        dictionary: {
          es: {
            singular: "Pídale a la IA"
          },
          "de-DE": {
            singular: "KI fragen"
          },
          "fr-FR": {
            singular: "Interroger l'IA"
          },
          "ja-JP": {
            singular: "AIに聞く"
          },
          "ko-KR": {
            singular: "AI에게 물어보기"
          },
          "pt-BR": {
            singular: "Perguntar à IA"
          },
          "zh-CN": {
            singular: "向 AI 提问"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Enable viewers to ask questions by selecting from pre-generated Q&A or ask open-ended natural language questions",
        dictionary: {
          es: {
            singular: "Permita que los espectadores hagan preguntas seleccionando preguntas y respuestas generadas previamente o haga preguntas abiertas en lenguaje natural."
          },
          "de-DE": {
            singular: "Ermöglichen Sie es den Zuschauern, Fragen zu stellen, indem Sie aus vorgefertigten Fragen und Antworten auswählen oder offene Fragen in natürlicher Sprache stellen."
          },
          "fr-FR": {
            singular: "Permettez aux spectateurs de poser des questions provenant de questions-réponses pré-générées ou de poser des questions ouvertes en langage naturel"
          },
          "ja-JP": {
            singular: "視聴者が事前生成されたQ&Aから選択して質問したり、自然言語で自由形式の質問をしたりできるようにします"
          },
          "ko-KR": {
            singular: "뷰어가 미리 생성된 Q&A 중에서 궁금한 질문과 그에 대한 답변을 찾아보거나 직접 질문을 자유롭게 할 수 있습니다."
          },
          "pt-BR": {
            singular: "Permita que os espectadores façam perguntas selecionando opções geradas com antecedência ou fazendo perguntas abertas usando linguagem natural"
          },
          "zh-CN": {
            singular: "让观众能够通过选择预先生成的问答进行提问，或提出开放式自然语言问题。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        core: !0,
        professional: !0,
        studio: !0,
        production: !0,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Audio dubbing",
        dictionary: {
          es: {
            singular: "Doblaje de audio"
          },
          "de-DE": {
            singular: "Audio-Synchronisation"
          },
          "fr-FR": {
            singular: "Doublage audio"
          },
          "ja-JP": {
            singular: "音声吹き替え"
          },
          "ko-KR": {
            singular: "오디오 더빙"
          },
          "pt-BR": {
            singular: "Dublagem de áudio"
          },
          "zh-CN": {
            singular: "音频配音"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Translate your videos’ audio and captions into dozens of languages.",
        dictionary: {
          es: {
            singular: "Traduzca el audio y las leyendas de sus videos a diversos idiomas."
          },
          "de-DE": {
            singular: "Übersetzen Sie Audio und Untertitel Ihrer Videos in Dutzende von Sprachen."
          },
          "fr-FR": {
            singular: "Traduisez l'audio et les sous-titres (SME) de vos vidéos dans des dizaines de langues."
          },
          "ja-JP": {
            singular: "動画の音声とキャプションを多数の言語に翻訳できます。"
          },
          "ko-KR": {
            singular: "동영상의 오디오와 캡션을 수십 가지 언어로 번역하세요."
          },
          "pt-BR": {
            singular: "Traduza o áudio e as legendas dos seus vídeos para dezenas de idiomas."
          },
          "zh-CN": {
            singular: "将视频的音频和字幕翻译成多种语言。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Custom dictionary",
        dictionary: {
          es: {
            singular: "Diccionario personalizado"
          },
          "de-DE": {
            singular: "Benutzerdefiniertes Wörterbuch"
          },
          "fr-FR": {
            singular: "Dictionnaire personnalisé"
          },
          "ja-JP": {
            singular: "カスタム辞書"
          },
          "ko-KR": {
            singular: "커스텀 사전"
          },
          "pt-BR": {
            singular: "Dicionário personalizado"
          },
          "zh-CN": {
            singular: "自定义词典"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Increase transcript accuracy by providing terms and names unique to your organization",
        dictionary: {
          es: {
            singular: "Aumente la precisión de las transcripciones proporcionando términos y nombres exclusivos para su organización"
          },
          "de-DE": {
            singular: "Erhöhen Sie die Genauigkeit des Transkripts, indem Sie Begriffe und Namen angeben, die für Ihr Unternehmen einzigartig sind."
          },
          "fr-FR": {
            singular: "Améliorez la précision des transcriptions en fournissant des termes et des noms uniques à votre organisation"
          },
          "ja-JP": {
            singular: "組織固有の用語と名称を提供することで、文字起こしの精度を向上させます"
          },
          "ko-KR": {
            singular: "조직 고유의 용어와 이름을 제공하여 대화록 정확도를 높이세요."
          },
          "pt-BR": {
            singular: "Aumente a precisão da transcrição fornecendo termos e nomes exclusivos da sua organização"
          },
          "zh-CN": {
            singular: "通过提供贵组织独有的术语和名称，提高转录的准确性"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: (0, _v1.translate)({
          singular: "{AMOUNT} words",
          replacements: {
            AMOUNT: 50
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} palabras"
            },
            "de-DE": {
              singular: "{AMOUNT} Wörter"
            },
            "fr-FR": {
              singular: "{AMOUNT} mots"
            },
            "ja-JP": {
              singular: "{AMOUNT}語"
            },
            "ko-KR": {
              singular: "{AMOUNT} 단어"
            },
            "pt-BR": {
              singular: "{AMOUNT} palavras"
            },
            "zh-CN": {
              singular: "{AMOUNT} 个单词"
            }
          }
        }),
        core: (0, _v1.translate)({
          singular: "{AMOUNT} words",
          replacements: {
            AMOUNT: 50
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} palabras"
            },
            "de-DE": {
              singular: "{AMOUNT} Wörter"
            },
            "fr-FR": {
              singular: "{AMOUNT} mots"
            },
            "ja-JP": {
              singular: "{AMOUNT}語"
            },
            "ko-KR": {
              singular: "{AMOUNT} 단어"
            },
            "pt-BR": {
              singular: "{AMOUNT} palavras"
            },
            "zh-CN": {
              singular: "{AMOUNT} 个单词"
            }
          }
        }),
        professional: (0, _v1.translate)({
          singular: "{AMOUNT} words",
          replacements: {
            AMOUNT: 50
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} palabras"
            },
            "de-DE": {
              singular: "{AMOUNT} Wörter"
            },
            "fr-FR": {
              singular: "{AMOUNT} mots"
            },
            "ja-JP": {
              singular: "{AMOUNT}語"
            },
            "ko-KR": {
              singular: "{AMOUNT} 단어"
            },
            "pt-BR": {
              singular: "{AMOUNT} palavras"
            },
            "zh-CN": {
              singular: "{AMOUNT} 个单词"
            }
          }
        }),
        studio: (0, _v1.translate)({
          singular: "{AMOUNT} words",
          replacements: {
            AMOUNT: 50
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} palabras"
            },
            "de-DE": {
              singular: "{AMOUNT} Wörter"
            },
            "fr-FR": {
              singular: "{AMOUNT} mots"
            },
            "ja-JP": {
              singular: "{AMOUNT}語"
            },
            "ko-KR": {
              singular: "{AMOUNT} 단어"
            },
            "pt-BR": {
              singular: "{AMOUNT} palavras"
            },
            "zh-CN": {
              singular: "{AMOUNT} 个单词"
            }
          }
        }),
        production: (0, _v1.translate)({
          singular: "{AMOUNT} words",
          replacements: {
            AMOUNT: 50
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} palabras"
            },
            "de-DE": {
              singular: "{AMOUNT} Wörter"
            },
            "fr-FR": {
              singular: "{AMOUNT} mots"
            },
            "ja-JP": {
              singular: "{AMOUNT}語"
            },
            "ko-KR": {
              singular: "{AMOUNT} 단어"
            },
            "pt-BR": {
              singular: "{AMOUNT} palavras"
            },
            "zh-CN": {
              singular: "{AMOUNT} 个单词"
            }
          }
        }),
        enterprise: (0, _v1.translate)({
          singular: "{AMOUNT} words",
          replacements: {
            AMOUNT: 0
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} palabras"
            },
            "de-DE": {
              singular: "{AMOUNT} Wörter"
            },
            "fr-FR": {
              singular: "{AMOUNT} mots"
            },
            "ja-JP": {
              singular: "{AMOUNT}語"
            },
            "ko-KR": {
              singular: "{AMOUNT} 단어"
            },
            "pt-BR": {
              singular: "{AMOUNT} palavras"
            },
            "zh-CN": {
              singular: "{AMOUNT} 个单词"
            }
          }
        })
      }
    }],
    _v8 = [{
      text: (0, _v1.translate)({
        singular: "Event broadcast tools",
        dictionary: {
          es: {
            singular: "Herramientas de transmisión de eventos"
          },
          "de-DE": {
            singular: "Tools für Event-Übertragungen"
          },
          "fr-FR": {
            singular: "Outils de diffusion d'événements"
          },
          "ja-JP": {
            singular: "イベント配信ツール"
          },
          "ko-KR": {
            singular: "이벤트 방송 도구"
          },
          "pt-BR": {
            singular: "Ferramentas de transmissão de eventos"
          },
          "zh-CN": {
            singular: "活动直播工具"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Produce live events with Vimeo's browser-based broadcasting tool or with a third-party encoder via RTMP.",
        dictionary: {
          es: {
            singular: "Produzca eventos en vivo con la herramienta de transmisión basada en el navegador de Vimeo o con un codificador externo a través de RTMP."
          },
          "de-DE": {
            singular: "Produzieren Sie Live-Events mit dem browserbasierten Broadcasting-Tool von Vimeo oder mit einem Encoder eines Drittanbieters über RTMP."
          },
          "fr-FR": {
            singular: "Produisez des événements en direct grâce à l'outil de diffusion sur navigateur de Vimeo ou à l'aide d'un encodeur tiers via RTMP."
          },
          "ja-JP": {
            singular: "Vimeoのブラウザベースの放送ツールまたはRTMPを介したサードパーティのエンコーダーでライブイベントを作成。"
          },
          "ko-KR": {
            singular: "Vimeo의 브라우저 기반 방송 도구 또는 RTMP를 통해 타사 인코더로 라이브 이벤트를 제작합니다."
          },
          "pt-BR": {
            singular: "Produza eventos ao vivo com a ferramenta de transmissão do Vimeo baseada em navegador ou com um codificador de terceiros via RTMP."
          },
          "zh-CN": {
            singular: "使用 Vimeo 基于浏览器的广播工具或通过 RTMP 使用第三方编码器制作直播活动。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
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
      }),
      tooltip: (0, _v1.translate)({
        singular: "Simultaneously stream your live event to up to 10 integrated destinations (like Facebook, YouTube, and LinkedIn) and up to 20 custom RTMP destinations.",
        dictionary: {
          es: {
            singular: "Transmita simultáneamente su evento en vivo hasta a 10 destinos integrados (como Facebook, YouTube y LinkedIn) y hasta a 20 destinos RTMP personalizados."
          },
          "de-DE": {
            singular: "Sie können Ihren Stream an bis zu 10 integrierte Ziele (Facebook, YouTube, LinkedIn) und an bis zu 20 benutzerdefinierte RTMP-Ziele gleichzeitig übertragen."
          },
          "fr-FR": {
            singular: "Diffusez simultanément votre événement en direct vers un maximum de 10 destinations intégrées (comme Facebook, YouTube et LinkedIn) et jusqu'à 20 destinations RTMP personnalisées."
          },
          "ja-JP": {
            singular: "一度に最大 10 件までの統合された配信先（Facebook、YouTube、LinkedInなど）にライブイベントを同時ストリーミングできます。さらに、最大 20 件のカスタムRTMP配信先へのストリーミングが可能です。"
          },
          "ko-KR": {
            singular: "한번에 최대 10개의 연동 목적지(Facebook, YouTube, LinkedIn 등)와 최대 20개의 커스텀 RTMP 목적지로 라이브 이벤트를 동시 방송할 수 있습니다."
          },
          "pt-BR": {
            singular: "Transmita simultaneamente seu evento ao vivo para até 10 destinos integrados (como Facebook, YouTube e LinkedIn) e até 20 destinos RTMP personalizados."
          },
          "zh-CN": {
            singular: "同时将您的直播活动流式传输到最多 10 个集成目的地（如 Facebook、YouTube 和 LinkedIn）和最多 20 个自定义 RTMP 目的地。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "Q&A and polls",
        dictionary: {
          es: {
            singular: "Sesiones de preguntas y respuestas y encuestas"
          },
          "de-DE": {
            singular: "Fragerunden und Umfragen"
          },
          "fr-FR": {
            singular: "Questions-réponses et sondages"
          },
          "ja-JP": {
            singular: "質問セッションとアンケート"
          },
          "ko-KR": {
            singular: "Q/A 및 투표"
          },
          "pt-BR": {
            singular: "Enquetes e sessão de perguntas e respostas"
          },
          "zh-CN": {
            singular: "问答和投票"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Include live Q&A and polls to engage your audience during events.",
        dictionary: {
          es: {
            singular: "Incluya preguntas y respuestas y encuestas en vivo para atraer a la audiencia durante los eventos."
          },
          "de-DE": {
            singular: "Binden Sie Live-Fragerunden und Umfragen in Ihre Events ein, um mit Ihrer Zielgruppe zu interagieren."
          },
          "fr-FR": {
            singular: "Ajoutez des séances de questions-réponses et des sondages en direct pour impliquer votre public durant les événements."
          },
          "ja-JP": {
            singular: "イベント中に視聴者とつながるライブ質問セッションとアンケート付き。"
          },
          "ko-KR": {
            singular: "실시간 Q/A, 투표를 진행하여 이벤트 동안 시청자 참여를 유도합니다."
          },
          "pt-BR": {
            singular: "Inclua enquetes e perguntas e respostas ao vivo para envolver o público durante os eventos."
          },
          "zh-CN": {
            singular: "包括在线问答和投票，以便在活动期间吸引观众。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "Audience chat",
        dictionary: {
          es: {
            singular: "Chat para los espectadores"
          },
          "de-DE": {
            singular: "Publikum-Chat"
          },
          "fr-FR": {
            singular: "Fenêtre de discussion"
          },
          "ja-JP": {
            singular: "視聴者チャット"
          },
          "ko-KR": {
            singular: "시청자 채팅"
          },
          "pt-BR": {
            singular: "Chat com o público"
          },
          "zh-CN": {
            singular: "观众聊天"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Enable live attendee chat during the event.",
        dictionary: {
          es: {
            singular: "Habilite el chat para los asistentes en vivo durante el evento."
          },
          "de-DE": {
            singular: "Aktivieren Sie Live-Chat für Ihre Teilnehmer*innen während des Events."
          },
          "fr-FR": {
            singular: "Activez la discussion en direct pour les participants durant un événement."
          },
          "ja-JP": {
            singular: "イベント中に参加者のライブチャットを有効化。"
          },
          "ko-KR": {
            singular: "이벤트 중 참석자 실시간 채팅을 활성화합니다."
          },
          "pt-BR": {
            singular: "Ative o chat ao vivo com participantes durante o evento."
          },
          "zh-CN": {
            singular: "在活动期间启用出席者在线聊天功能。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "Stream health with real-time data",
        dictionary: {
          es: {
            singular: "Estado de la transmisión con datos en tiempo real"
          },
          "de-DE": {
            singular: "Stream-Status mit Echtzeitdaten"
          },
          "fr-FR": {
            singular: "État du streaming avec données en temps réel"
          },
          "ja-JP": {
            singular: "リアルタイムデータを使用したストリーム状態"
          },
          "ko-KR": {
            singular: "실시간 데이터로 보는 스트림 상태"
          },
          "pt-BR": {
            singular: "Condição da transmissão com dados em tempo real"
          },
          "zh-CN": {
            singular: "通过实时数据了解流式播放状况数据"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Get real-time data on the stability and performance of your stream.",
        dictionary: {
          es: {
            singular: "Obtenga datos en tiempo real sobre la estabilidad y el rendimiento de su transmisión."
          },
          "de-DE": {
            singular: "Sie erhalten Echtzeitdaten über die Stabilität und Performance Ihres Streams."
          },
          "fr-FR": {
            singular: "Obtenez des données en temps réel sur la stabilité et les performances de votre stream."
          },
          "ja-JP": {
            singular: "配信の安定性とパフォーマンスに関するリアルタイムデータを取得。"
          },
          "ko-KR": {
            singular: "스트림의 안정성과 성과에 대한 실시간 데이터를 확인합니다."
          },
          "pt-BR": {
            singular: "Obtenha dados em tempo real sobre a estabilidade e o desempenho de sua transmissão."
          },
          "zh-CN": {
            singular: "获取有关直播稳定性和表现的实时数据。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "Live Teleprompter",
        dictionary: {
          es: {
            singular: "Teleprompter en vivo"
          },
          "de-DE": {
            singular: "Live-Teleprompter"
          },
          "fr-FR": {
            singular: "Téléprompteur en direct"
          },
          "ja-JP": {
            singular: "ライブテレプロンプター"
          },
          "ko-KR": {
            singular: "라이브 텔레프롬프터"
          },
          "pt-BR": {
            singular: "Teleprompter ao vivo"
          },
          "zh-CN": {
            singular: "实时提词器"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Stay on script while our web-based teleprompter displays your script at your preferred font size and scrolling pace.",
        dictionary: {
          es: {
            singular: "Manténgase en el guion mientras nuestro teleprompter basado en web reproduce su guion con el tamaño de letra y el ritmo de desplazamiento que prefiera."
          },
          "de-DE": {
            singular: "Bleiben Sie beim Skript, während unser webbasierter Teleprompter Ihr Skript in der von Ihnen bevorzugten Schriftgröße und Bildlaufgeschwindigkeit anzeigt."
          },
          "fr-FR": {
            singular: "Restez sur le script pendant que notre téléprompteur en ligne affiche votre texte à la taille de police et au rythme de défilement de votre choix."
          },
          "ja-JP": {
            singular: "ウェブベースのテレプロンプターが、お好みのフォントサイズとスクロール速度でスクリプトを表示している間にスクリプトに沿って読んだり話したりできます。"
          },
          "ko-KR": {
            singular: "웹 기반 텔레프롬프터가 선호하는 폰트 크기와 스크롤 속도로 대본을 표시하는 동안 대본에 맞춰 진행하세요."
          },
          "pt-BR": {
            singular: "Mantenha-se no script enquanto nosso teleprompter online exibe seu roteiro no tamanho de fonte e ritmo de rolagem de sua preferência."
          },
          "zh-CN": {
            singular: "使用我们基于 Web 的提词器，以首选的字体大小和滚动速度显示脚本，从而确保内容不出错。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "Concurrent streams",
        dictionary: {
          es: {
            singular: "Transmisiones concurrentes"
          },
          "de-DE": {
            singular: "Gleichzeitige Streams"
          },
          "fr-FR": {
            singular: "Streams simultanés"
          },
          "ja-JP": {
            singular: "同時配信"
          },
          "ko-KR": {
            singular: "동시 스트림"
          },
          "pt-BR": {
            singular: "Transmissões simultâneas"
          },
          "zh-CN": {
            singular: "并发视频流"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Stream separate live events at once from the same domain.",
        dictionary: {
          es: {
            singular: "Transmita distintos eventos en vivo a la vez desde el mismo dominio."
          },
          "de-DE": {
            singular: "Streamen Sie separate Live-Events gleichzeitig von derselben Domain aus."
          },
          "fr-FR": {
            singular: "Diffusez des événements en direct distincts en même temps à partir du même domaine."
          },
          "ja-JP": {
            singular: "同じドメインから別々のライブイベントを一度にストリーミング。"
          },
          "ko-KR": {
            singular: "동일한 도메인에서 각각의 라이브 이벤트를 동시에 스트리밍합니다."
          },
          "pt-BR": {
            singular: "Transmita simultaneamente eventos ao vivo separados do mesmo domínio."
          },
          "zh-CN": {
            singular: "从同一个域同时流式传输不同的直播活动。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: "2",
        studio: "2",
        production: "2",
        enterprise: "3+"
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Guest speakers",
        dictionary: {
          es: {
            singular: "Oradores invitados"
          },
          "de-DE": {
            singular: "Gastredner"
          },
          "fr-FR": {
            singular: "Intervenants extérieurs"
          },
          "ja-JP": {
            singular: "ゲストスピーカー"
          },
          "ko-KR": {
            singular: "초청 발표자"
          },
          "pt-BR": {
            singular: "Palestrantes convidados"
          },
          "zh-CN": {
            singular: "嘉宾演讲人"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Invite guests outside of your team or organization to present remotely.",
        dictionary: {
          es: {
            singular: "Incluya a invitados externos en su equipo u organización para que hagan presentaciones a distancia."
          },
          "de-DE": {
            singular: "Laden Sie Gäste außerhalb Ihres Teams oder Ihrer Organisation ein, um remote eine Präsentation zu halten."
          },
          "fr-FR": {
            singular: "Invitez des intervenants externes à participer à distance."
          },
          "ja-JP": {
            singular: "リモートでプレゼンできるよう、チームまたは組織以外のゲストを招待。"
          },
          "ko-KR": {
            singular: "팀이나 조직의 외부 게스트를 초대하여 원격 프레젠테이션을 진행합니다."
          },
          "pt-BR": {
            singular: "Traga convidados de fora da equipe ou da organização para fazer apresentações remotas."
          },
          "zh-CN": {
            singular: "邀请不属于您的团队或组织的嘉宾远程演示。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: (0, _v1.translate)({
          singular: "Up to {AMOUNT}",
          replacements: {
            AMOUNT: 7
          },
          dictionary: {
            es: {
              singular: "Hasta {AMOUNT}"
            },
            "de-DE": {
              singular: "Bis zu {AMOUNT}"
            },
            "fr-FR": {
              singular: "Jusqu’à {AMOUNT}"
            },
            "ja-JP": {
              singular: "{AMOUNT}人まで"
            },
            "ko-KR": {
              singular: "최대 {AMOUNT}명"
            },
            "pt-BR": {
              singular: "Até {AMOUNT}"
            },
            "zh-CN": {
              singular: "最多 {AMOUNT} 个"
            }
          }
        }),
        studio: (0, _v1.translate)({
          singular: "Up to {AMOUNT}",
          replacements: {
            AMOUNT: 10
          },
          dictionary: {
            es: {
              singular: "Hasta {AMOUNT}"
            },
            "de-DE": {
              singular: "Bis zu {AMOUNT}"
            },
            "fr-FR": {
              singular: "Jusqu’à {AMOUNT}"
            },
            "ja-JP": {
              singular: "{AMOUNT}人まで"
            },
            "ko-KR": {
              singular: "최대 {AMOUNT}명"
            },
            "pt-BR": {
              singular: "Até {AMOUNT}"
            },
            "zh-CN": {
              singular: "最多 {AMOUNT} 个"
            }
          }
        }),
        production: (0, _v1.translate)({
          singular: "Up to {AMOUNT}",
          replacements: {
            AMOUNT: 10
          },
          dictionary: {
            es: {
              singular: "Hasta {AMOUNT}"
            },
            "de-DE": {
              singular: "Bis zu {AMOUNT}"
            },
            "fr-FR": {
              singular: "Jusqu’à {AMOUNT}"
            },
            "ja-JP": {
              singular: "{AMOUNT}人まで"
            },
            "ko-KR": {
              singular: "최대 {AMOUNT}명"
            },
            "pt-BR": {
              singular: "Até {AMOUNT}"
            },
            "zh-CN": {
              singular: "最多 {AMOUNT} 个"
            }
          }
        }),
        enterprise: (0, _v1.translate)({
          singular: "Up to {AMOUNT}",
          replacements: {
            AMOUNT: 12
          },
          dictionary: {
            es: {
              singular: "Hasta {AMOUNT}"
            },
            "de-DE": {
              singular: "Bis zu {AMOUNT}"
            },
            "fr-FR": {
              singular: "Jusqu’à {AMOUNT}"
            },
            "ja-JP": {
              singular: "{AMOUNT}人まで"
            },
            "ko-KR": {
              singular: "최대 {AMOUNT}명"
            },
            "pt-BR": {
              singular: "Até {AMOUNT}"
            },
            "zh-CN": {
              singular: "最多 {AMOUNT} 个"
            }
          }
        })
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Studio encoding software",
        dictionary: {
          es: {
            singular: "Software de codificación Studio"
          },
          "de-DE": {
            singular: "Studio-Codierungssoftware"
          },
          "fr-FR": {
            singular: "Logiciel d’encodage Studio"
          },
          "ja-JP": {
            singular: "Studioエンコードソフトウェア"
          },
          "ko-KR": {
            singular: "Studio 인코딩 소프트웨어"
          },
          "pt-BR": {
            singular: "Software de codificação Studio"
          },
          "zh-CN": {
            singular: "Studio 编码软件"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Get access to Livestream Studio, Vimeo's Desktop encoding software.",
        dictionary: {
          es: {
            singular: "Acceda a Livestream Studio, el software de codificación de escritorio de Vimeo."
          },
          "de-DE": {
            singular: "Sie erhalten Zugang zu Livestream Studio, der Verschlüsselungssoftware für Vimeo Desktop."
          },
          "fr-FR": {
            singular: "Accédez à Livestream Studio, le logiciel d'encodage pour ordinateur de bureau de Vimeo."
          },
          "ja-JP": {
            singular: "VimeoのデスクトップエンコーディングソフトウェアであるLivestream Studioへのアクセス。"
          },
          "ko-KR": {
            singular: "Vimeo의 데스크톱 인코딩 소프트웨어인 Livestream Studio에 액세스하세요."
          },
          "pt-BR": {
            singular: "Acesse o Livestream Studio, software de codificação do Vimeo para computador."
          },
          "zh-CN": {
            singular: "访问 Vimeo 的桌面编码软件 Livestream Studio。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: (0, _v1.translate)({
          singular: "{AMOUNT} license",
          replacements: {
            AMOUNT: 1
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} licencia"
            },
            "de-DE": {
              singular: "{AMOUNT} Lizenz"
            },
            "fr-FR": {
              singular: "{AMOUNT} licence"
            },
            "ja-JP": {
              singular: "{AMOUNT} ライセンス"
            },
            "ko-KR": {
              singular: "{AMOUNT} 라이선스"
            },
            "pt-BR": {
              singular: "{AMOUNT} licença"
            },
            "zh-CN": {
              singular: "{AMOUNT} 许可证"
            }
          }
        }),
        studio: (0, _v1.translate)({
          singular: "{AMOUNT} license",
          replacements: {
            AMOUNT: 1
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} licencia"
            },
            "de-DE": {
              singular: "{AMOUNT} Lizenz"
            },
            "fr-FR": {
              singular: "{AMOUNT} licence"
            },
            "ja-JP": {
              singular: "{AMOUNT} ライセンス"
            },
            "ko-KR": {
              singular: "{AMOUNT} 라이선스"
            },
            "pt-BR": {
              singular: "{AMOUNT} licença"
            },
            "zh-CN": {
              singular: "{AMOUNT} 许可证"
            }
          }
        }),
        production: (0, _v1.translate)({
          singular: "{AMOUNT} license",
          replacements: {
            AMOUNT: 1
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} licencia"
            },
            "de-DE": {
              singular: "{AMOUNT} Lizenz"
            },
            "fr-FR": {
              singular: "{AMOUNT} licence"
            },
            "ja-JP": {
              singular: "{AMOUNT} ライセンス"
            },
            "ko-KR": {
              singular: "{AMOUNT} 라이선스"
            },
            "pt-BR": {
              singular: "{AMOUNT} licença"
            },
            "zh-CN": {
              singular: "{AMOUNT} 许可证"
            }
          }
        }),
        enterprise: (0, _v1.translate)({
          singular: "{AMOUNT} licences",
          replacements: {
            AMOUNT: "3+"
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} licencias"
            },
            "de-DE": {
              singular: "{AMOUNT} Lizenzen"
            },
            "fr-FR": {
              singular: "{AMOUNT} licences"
            },
            "ja-JP": {
              singular: "{AMOUNT} ライセンス"
            },
            "ko-KR": {
              singular: "라이선스 {AMOUNT}개"
            },
            "pt-BR": {
              singular: "{AMOUNT} licenças"
            },
            "zh-CN": {
              singular: "{AMOUNT} 个许可"
            }
          }
        })
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Live automated closed captioning",
        dictionary: {
          es: {
            singular: "Subtítulos ocultos automatizados en vivo"
          },
          "de-DE": {
            singular: "Automatische Live-Untertitel"
          },
          "fr-FR": {
            singular: "Sous-titrage automatique en direct"
          },
          "ja-JP": {
            singular: "ライブ配信向け自動クローズドキャプション"
          },
          "ko-KR": {
            singular: "실시간 자동 폐쇄 자막"
          },
          "pt-BR": {
            singular: "Legendas ocultas automatizadas ao vivo"
          },
          "zh-CN": {
            singular: "实时自动隐藏式字幕"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Vimeo automatically translate audio to text during live events using Google's transcription service.",
        dictionary: {
          es: {
            singular: "Vimeo traduce automáticamente el audio a texto durante los eventos en vivo utilizando el servicio de transcripción de Google."
          },
          "de-DE": {
            singular: "Vimeo nutzt den Transkriptionsservice von Google, um während Live-Events Audio in Text zu übertragen."
          },
          "fr-FR": {
            singular: "Vimeo convertit automatiquement l'audio en texte pendant les événements en direct grâce au service de transcription de Google."
          },
          "ja-JP": {
            singular: "Vimeoは、Googleのトランスクリプションサービスを使用してライブイベント中に音声をテキストへ自動的に翻訳します。"
          },
          "ko-KR": {
            singular: "Vimeo는 Google의 트랜스크립션 서비스를 사용하여 라이브 이벤트 중에 오디오를 텍스트로 자동 변환합니다."
          },
          "pt-BR": {
            singular: "O Vimeo traduz automaticamente áudio para texto durante eventos ao vivo usando o serviço de transcrição do Google."
          },
          "zh-CN": {
            singular: "Vimeo 使用了 Google 的转录服务，在直播活动中会自动将音频转录为文本。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: (0, _v1.translate)({
          singular: "{AMOUNT} hours",
          replacements: {
            AMOUNT: 2
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} horas"
            },
            "de-DE": {
              singular: "{AMOUNT} Stunden"
            },
            "fr-FR": {
              singular: "{AMOUNT} heures"
            },
            "ja-JP": {
              singular: "{AMOUNT}時間"
            },
            "ko-KR": {
              singular: "{AMOUNT} 시간"
            },
            "pt-BR": {
              singular: "{AMOUNT} horas"
            },
            "zh-CN": {
              singular: "{AMOUNT} 小时"
            }
          }
        }),
        studio: (0, _v1.translate)({
          singular: "{AMOUNT} hours",
          replacements: {
            AMOUNT: 4
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} horas"
            },
            "de-DE": {
              singular: "{AMOUNT} Stunden"
            },
            "fr-FR": {
              singular: "{AMOUNT} heures"
            },
            "ja-JP": {
              singular: "{AMOUNT}時間"
            },
            "ko-KR": {
              singular: "{AMOUNT} 시간"
            },
            "pt-BR": {
              singular: "{AMOUNT} horas"
            },
            "zh-CN": {
              singular: "{AMOUNT} 小时"
            }
          }
        }),
        production: (0, _v1.translate)({
          singular: "{AMOUNT} hours",
          replacements: {
            AMOUNT: 4
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} horas"
            },
            "de-DE": {
              singular: "{AMOUNT} Stunden"
            },
            "fr-FR": {
              singular: "{AMOUNT} heures"
            },
            "ja-JP": {
              singular: "{AMOUNT}時間"
            },
            "ko-KR": {
              singular: "{AMOUNT} 시간"
            },
            "pt-BR": {
              singular: "{AMOUNT} horas"
            },
            "zh-CN": {
              singular: "{AMOUNT} 小时"
            }
          }
        }),
        enterprise: (0, _v1.translate)({
          singular: "{AMOUNT} hours",
          replacements: {
            AMOUNT: "30+"
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} horas"
            },
            "de-DE": {
              singular: "{AMOUNT} Stunden"
            },
            "fr-FR": {
              singular: "{AMOUNT} heures"
            },
            "ja-JP": {
              singular: "{AMOUNT}時間"
            },
            "ko-KR": {
              singular: "{AMOUNT} 시간"
            },
            "pt-BR": {
              singular: "{AMOUNT} horas"
            },
            "zh-CN": {
              singular: "{AMOUNT} 小时"
            }
          }
        })
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Live manual closed captions",
        dictionary: {
          es: {
            singular: "Subtítulos ocultos manuales en vivo"
          },
          "de-DE": {
            singular: "Manuelle Live-Untertitel"
          },
          "fr-FR": {
            singular: "Sous-titres codés manuels en direct"
          },
          "ja-JP": {
            singular: "ライブ配信向け手動クローズドキャプション"
          },
          "ko-KR": {
            singular: "실시간 폐쇄 자막"
          },
          "pt-BR": {
            singular: "Closed captions (cc) manuais ao vivo"
          },
          "zh-CN": {
            singular: "实时人工隐藏式字幕"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Bring manually transcribed captions into our Livestream Studio software or another encoder of your choice.",
        dictionary: {
          es: {
            singular: "Incorpore leyendas transcritas manualmente a nuestro software Livestream Studio u otro codificador de su elección."
          },
          "de-DE": {
            singular: "Bringen Sie manuell transkribierte erweiterte Untertitel in unsere Livestream Studio Software oder einen anderen Encoder Ihrer Wahl."
          },
          "fr-FR": {
            singular: "Intégrez manuellement les sous-titres transcrits dans notre logiciel Livestream Studio ou dans l'encodeur de votre choix."
          },
          "ja-JP": {
            singular: "手動で文字起こししたキャプションをLivestream Studioソフトウェアまたは選択した別のエンコーダーに取り込みます。"
          },
          "ko-KR": {
            singular: "수동으로 작성한 캡션을 Livestream Studio 소프트웨어 또는 원하는 다른 인코더로 가져올 수 있습니다."
          },
          "pt-BR": {
            singular: "Importe legendas transcritas manualmente para nosso software Livestream Studio ou o codificador que preferir."
          },
          "zh-CN": {
            singular: "将手动转录的字幕输入我们的 Livestream Studio 软件或您心仪的其他编码器。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "CSV uploads",
        dictionary: {
          es: {
            singular: "Subidas de archivos CSV"
          },
          "de-DE": {
            singular: "CSV-Uploads"
          },
          "fr-FR": {
            singular: "Importations CSV"
          },
          "ja-JP": {
            singular: "CSVのアップロード"
          },
          "ko-KR": {
            singular: "CSV 업로드"
          },
          "pt-BR": {
            singular: "Carregamentos de arquivos CSV"
          },
          "zh-CN": {
            singular: "CSV 上传"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Import event registrants through CSV upload, which can be synced with your existing marketing tool. Advanced users can currently integrate with Mailchimp, Hubspot, Constant Contact, Campaign Monitor, and Keap. Enterprise users can integrate with Marketo for Webinars.",
        dictionary: {
          es: {
            singular: "Para importar los asistentes del evento, suba un archivo CSV, que se puede sincronizar con su herramienta de marketing existente. En la actualidad, los usuarios pueden integrarse con MailChimp, Hubspot, Constant Contact, Campaign Monitor y Keap. Los usuarios de Enterprise se pueden integrar con Marketo para los seminarios web."
          },
          "de-DE": {
            singular: "Laden Sie eine CSV-Datei hoch und importieren Sie Event-Teilnehmer*innen, die mit Ihren bestehenden Marketing-Tool synchronisiert werden können. Benutzer*innen des Advanced-Tarifs können derzeit mit Mailchimp, Hubspot, Constant Contact, Campaign Monitor und Keap integrieren. Benutzer*innen des Enterprise-Tarifs können mit Marketo für Webinare integrieren."
          },
          "fr-FR": {
            singular: "Importez une liste des personnes inscrites à votre événement au format .CSV et synchronisez-la avec votre outil de marketing existant. À l'heure actuelle, les utilisateurs ayant un abonnement Advanced bénéficient d'une intégration à Mailchimp, Hubspot, Constant Contact, Campaign Monitor et Keap. Les utilisateurs Entreprise bénéficient quant à eux d'une intégration avec Marketo pour les webinaires."
          },
          "ja-JP": {
            singular: "既存のマーケティングツールと同期できるCSVアップロードを介してイベント登録者データをインポート。Advancedユーザーは現在、Mailchimp、Hubspot、Constant Contact、Campaign Monitor、およびKeapと統合できます。Enterpriseユーザーはウェビナー用にMarketoと統合できます。"
          },
          "ko-KR": {
            singular: "기존 마케팅 도구와 동기화할 수 있는 CSV 업로드를 통해 이벤트 등록자를 가져옵니다. Advanced 사용자는 현재 Mailchimp, Hubspot, Constant Contact, Campaign Monitor, Keap과 통합할 수 있습니다. Enterprise 사용자는 웨비나를 위해 Marketo와 통합할 수 있습니다."
          },
          "pt-BR": {
            singular: "Importe os inscritos nos seus eventos carregando um arquivo CSV, que pode ser sincronizado com sua ferramenta de marketing existente. No momento, os usuários do plano Advanced podem fazer a integração com o MailChimp, o HubSpot, o Constant Contact, o Campaign Monitor e o Keap. Já os usuários do plano Enterprise podem aproveitar a integração com o Marketo para webinars."
          },
          "zh-CN": {
            singular: "通过 CSV 上传导入活动注册者，可与现有营销工具同步。Advanced 用户目前可与 Mailchimp、Hubspot、Constant Contact、Campaign Monitor 和 Keap 集成。Enterprise 用户可将网络研讨会与 Marketo 集成。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
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
      }),
      tooltip: (0, _v1.translate)({
        singular: "Capture attendee registrations for your live event with branded forms and customizable form fields.",
        dictionary: {
          es: {
            singular: "Registre las inscripciones de los asistentes en su evento en vivo con formularios de la marca y campos de formularios personalizables."
          },
          "de-DE": {
            singular: "Erfassen Sie die Teilnehmerregistrierungen für Ihr Live-Event mit markenspezifischen Formularen und personalisierbaren Formularfeldern."
          },
          "fr-FR": {
            singular: "Créez des formulaires à l'image de votre marque et des champs personnalisables pour enregistrer les inscriptions des participants à votre événement en direct."
          },
          "ja-JP": {
            singular: "ブランドフォームとカスタマイズ可能なフォームを使用して、ライブイベントの参加者登録をキャプチャー。"
          },
          "ko-KR": {
            singular: "브랜딩한 양식과 커스텀 양식 필드를 사용하여 라이브 이벤트 참석자 등록을 수집합니다."
          },
          "pt-BR": {
            singular: "Colete inscrições de participantes para seu evento ao vivo, usando formulários com sua marca e campos de formulário customizáveis."
          },
          "zh-CN": {
            singular: "使用有品牌标识的表单和可定制的表单字段捕获直播活动的出席者注册名单。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: (0, _v1.translate)({
          singular: "{AMOUNT} per event",
          replacements: {
            AMOUNT: 100
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} por evento"
            },
            "de-DE": {
              singular: "{AMOUNT} pro Event"
            },
            "fr-FR": {
              singular: "{AMOUNT} par événement"
            },
            "ja-JP": {
              singular: "1イベントにつき{AMOUNT}人"
            },
            "ko-KR": {
              singular: "이벤트당 {AMOUNT}명"
            },
            "pt-BR": {
              singular: "{AMOUNT} por evento"
            },
            "zh-CN": {
              singular: "每场活动 {AMOUNT}"
            }
          }
        }),
        studio: (0, _v1.translate)({
          singular: "{AMOUNT} per event",
          replacements: {
            AMOUNT: 200
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} por evento"
            },
            "de-DE": {
              singular: "{AMOUNT} pro Event"
            },
            "fr-FR": {
              singular: "{AMOUNT} par événement"
            },
            "ja-JP": {
              singular: "1イベントにつき{AMOUNT}人"
            },
            "ko-KR": {
              singular: "이벤트당 {AMOUNT}명"
            },
            "pt-BR": {
              singular: "{AMOUNT} por evento"
            },
            "zh-CN": {
              singular: "每场活动 {AMOUNT}"
            }
          }
        }),
        production: (0, _v1.translate)({
          singular: "{AMOUNT} per event",
          replacements: {
            AMOUNT: 200
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} por evento"
            },
            "de-DE": {
              singular: "{AMOUNT} pro Event"
            },
            "fr-FR": {
              singular: "{AMOUNT} par événement"
            },
            "ja-JP": {
              singular: "1イベントにつき{AMOUNT}人"
            },
            "ko-KR": {
              singular: "이벤트당 {AMOUNT}명"
            },
            "pt-BR": {
              singular: "{AMOUNT} por evento"
            },
            "zh-CN": {
              singular: "每场活动 {AMOUNT}"
            }
          }
        }),
        enterprise: (0, _v1.translate)({
          singular: "{AMOUNT} per event",
          replacements: {
            AMOUNT: "500+"
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} por evento"
            },
            "de-DE": {
              singular: "{AMOUNT} pro Event"
            },
            "fr-FR": {
              singular: "{AMOUNT} par événement"
            },
            "ja-JP": {
              singular: "1イベントにつき{AMOUNT}人"
            },
            "ko-KR": {
              singular: "이벤트당 {AMOUNT}명"
            },
            "pt-BR": {
              singular: "{AMOUNT} por evento"
            },
            "zh-CN": {
              singular: "每场活动 {AMOUNT}"
            }
          }
        })
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Branded invite and reminder emails",
        dictionary: {
          es: {
            singular: "Correos electrónicos de invitación y recordatorios con presencia de la marca"
          },
          "de-DE": {
            singular: "Markenspezifische Einladungs- und Erinnerungs-E-Mails"
          },
          "fr-FR": {
            singular: "Invitations et e-mails de rappel à l'image de votre marque"
          },
          "ja-JP": {
            singular: "ブランド化された招待状とリマインダーメール"
          },
          "ko-KR": {
            singular: "브랜딩 가능한 초대 및 알림 이메일"
          },
          "pt-BR": {
            singular: "Convites e e-mails de lembrete com sua marca"
          },
          "zh-CN": {
            singular: "品牌邀请和提醒电子邮件"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Send customizable and branded confirmation, reminder, and thank you emails to event registrants.",
        dictionary: {
          es: {
            singular: "Envíe correos electrónicos personalizados de confirmación, recordatorio y agradecimiento con el logo de su marca a los asistentes del evento."
          },
          "de-DE": {
            singular: "Senden Sie anpassbare und markenspezifische Bestätigungen, Dankesschreiben und E-Mail-Erinnerungen an die Teilnehmenden."
          },
          "fr-FR": {
            singular: "Envoyez des e-mails de confirmation, de rappel et de remerciement personnalisables et à l'image de votre marque aux personnes qui se sont inscrites à votre événement."
          },
          "ja-JP": {
            singular: "カスタマイズ可能でブランド化された確認メール、リマインダーメール、お礼のメールをイベント登録者に送信できます。"
          },
          "ko-KR": {
            singular: "이벤트 등록자에게 커스텀과 브랜딩이 가능한 확인, 알림, 감사 이메일을 발송합니다."
          },
          "pt-BR": {
            singular: "Envie e-mails customizáveis de confirmação, de lembrete ou de agradecimento com sua marca aos inscritos no seu evento."
          },
          "zh-CN": {
            singular: "向活动注册者发送可定制、有品牌标识的确认、提醒和感谢电子邮件。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Marketing integrations",
        dictionary: {
          es: {
            singular: "Integración de marketing"
          },
          "de-DE": {
            singular: "Marketing-Integrationen"
          },
          "fr-FR": {
            singular: "Intégrations marketing"
          },
          "ja-JP": {
            singular: "マーケティングの統合"
          },
          "ko-KR": {
            singular: "마케팅 통합"
          },
          "pt-BR": {
            singular: "Integração de marketing"
          },
          "zh-CN": {
            singular: "营销集成"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Integrate with your preferred marketing automation platform e.g. Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor",
        dictionary: {
          es: {
            singular: "Intégrelo con su plataforma de automatización de marketing preferida, por ejemplo, Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor"
          },
          "de-DE": {
            singular: "Integrationen mit Ihren bevorzugten Marketing-Automatisierungsplattformen, z. B. Constant Contact, HubSpot, Mailchimp, Keap, Campaign Monitor"
          },
          "fr-FR": {
            singular: "Bénéficiez d'une intégration avec votre plateforme d'automatisation marketing préférée (par ex., Constant Contact, Hubspot, Mailchimp, Keap ou Campaign Monitor)"
          },
          "ja-JP": {
            singular: "お好きなマーケティング自動化プラットフォームとの統合が可能です。（例：Constant Contact、Hubspot、Mailchimp、Keap、Campaign Monitor）"
          },
          "ko-KR": {
            singular: "자주 쓰는 마케팅 자동화 플랫폼과 통합합니다(예: Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor)."
          },
          "pt-BR": {
            singular: "Faça a integração com a plataforma de automação de marketing de sua preferência, como Constant Contact, HubSpot, Mailchimp, Keap, Campaign Monitor"
          },
          "zh-CN": {
            singular: "与您首选的营销自动化平台集成，例如 Constant Contact、Hubspot、Mailchimp、Keap、Campaign Monitor"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: "Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor",
        studio: "Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor",
        production: "Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor",
        enterprise: "Marketo"
      }
    }, {
      text: (0, _v1.translate)({
        singular: "DVR streaming",
        dictionary: {
          es: {
            singular: "Transmisión de DVR"
          },
          "de-DE": {
            singular: "Video-Streaming"
          },
          "fr-FR": {
            singular: "Streaming DVR"
          },
          "ja-JP": {
            singular: "DVRストリーミング"
          },
          "ko-KR": {
            singular: "DVR 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão de DVR"
          },
          "zh-CN": {
            singular: "DVR 直播"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Pause and rewind streams while they are live",
        dictionary: {
          es: {
            singular: "Pause y rebobine transmisiones mientras están ocurriendo"
          },
          "de-DE": {
            singular: "Pausieren und Zurückspulen von Streams während sie live sind"
          },
          "fr-FR": {
            singular: "Mettez les flux en pause et revenez en arrière pendant qu'ils sont en direct"
          },
          "ja-JP": {
            singular: "ライブ中のストリームの一時停止と巻き戻し"
          },
          "ko-KR": {
            singular: "실시간 스트리밍 중 일시 정지 및 되감기"
          },
          "pt-BR": {
            singular: "Pause e retroceda transmissões enquanto estão ao vivo"
          },
          "zh-CN": {
            singular: "在流媒体直播时暂停和回退"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "Scheduled simulive",
        dictionary: {
          es: {
            singular: "Simulive programado"
          },
          "de-DE": {
            singular: "Geplantes Simulive"
          },
          "fr-FR": {
            singular: "Simulive programmé"
          },
          "ja-JP": {
            singular: "スケジュールされた疑似ライブ"
          },
          "ko-KR": {
            singular: "예정된 시뮬라이브"
          },
          "pt-BR": {
            singular: "Simulive programado"
          },
          "zh-CN": {
            singular: "预定模拟直播"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Schedule your stream to go live with a pre-recorded video at the time and date of your choosing.",
        dictionary: {
          es: {
            singular: "Programe su transmisión para que salga con un video pregrabado a la hora y fecha que elija."
          },
          "de-DE": {
            singular: "Planen Sie Ihren Stream so, dass er mit einem voraufgezeichneten Video zu einer Uhrzeit und einem Datum Ihrer Wahl live geht."
          },
          "fr-FR": {
            singular: "Programmez la diffusion de votre flux avec une vidéo préenregistrée à l'heure et à la date de votre choix."
          },
          "ja-JP": {
            singular: "選択した日時に事前に録画した動画をライブ配信するように、ストリームのスケジュールを設定します。"
          },
          "ko-KR": {
            singular: "선택한 시간과 날짜에 사전 녹화된 동영상으로 라이브 스트리밍을 예약하세요."
          },
          "pt-BR": {
            singular: "Programe sua transmissão para ir ao ar com um vídeo pré-gravado na data e hora que preferir."
          },
          "zh-CN": {
            singular: "预定直播，在所选时间和日期直播预先录制的视频。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "Moderated Q&A",
        dictionary: {
          es: {
            singular: "Sesión de preguntas y respuestas moderada"
          },
          "de-DE": {
            singular: "Moderierte Fragerunden"
          },
          "fr-FR": {
            singular: "Modération des séances de questions-réponses"
          },
          "ja-JP": {
            singular: "モデレーターが管理する質問セッション"
          },
          "ko-KR": {
            singular: "Q/A 관리"
          },
          "pt-BR": {
            singular: "Moderação de perguntas e respostas"
          },
          "zh-CN": {
            singular: "经审核的问答"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Review and approve questions to answer during your live event.",
        dictionary: {
          es: {
            singular: "Revise y apruebe las preguntas para responder durante su evento en vivo."
          },
          "de-DE": {
            singular: "Überprüfe und genehmige Fragen, die du während deines Live-Events entgegennimmst."
          },
          "fr-FR": {
            singular: "Passez en revue et approuvez les questions auxquelles répondre durant votre événement en direct."
          },
          "ja-JP": {
            singular: "ライブイベント中に回答する質問内容を確認して承認しましょう。"
          },
          "ko-KR": {
            singular: "라이브 이벤트 중에 답변할 질문을 검토하고 승인합니다."
          },
          "pt-BR": {
            singular: "Consulte e aprove perguntas para responder durante seu evento ao vivo."
          },
          "zh-CN": {
            singular: "审查并批准直播活动期间要回答的问题。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Live stream to a private showcase",
        dictionary: {
          es: {
            singular: "Transmisión en vivo a una presentación privada"
          },
          "de-DE": {
            singular: "Livestream-Übertragung im Rahmen einer privaten Präsentation"
          },
          "fr-FR": {
            singular: "Streaming en direct dans vos présentations privées"
          },
          "ja-JP": {
            singular: "プライベートショーケースへのライブストリーミング"
          },
          "ko-KR": {
            singular: "비공개 쇼케이스로 라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão ao vivo para vitrines privadas"
          },
          "zh-CN": {
            singular: "实时流式传输到私人橱窗"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Stream your live event to a private Showcase so you can control exactly who views your content.",
        dictionary: {
          es: {
            singular: "Transmita su evento en vivo a una presentación privada para que pueda controlar exactamente quién ve su contenido."
          },
          "de-DE": {
            singular: "Streame dein Live-Event in einer privaten Präsentation und kontrolliere so, wer deine Inhalte sehen kann."
          },
          "fr-FR": {
            singular: "Diffusez votre événement en direct dans le cadre d'une présentation privée pour ainsi contrôler qui peut visionner votre contenu."
          },
          "ja-JP": {
            singular: "ライブイベントをプライベートショーケースにストリーミングすることで、コンテンツを閲覧するユーザーを正確に管理できます。"
          },
          "ko-KR": {
            singular: "라이브 이벤트를 비공개 쇼케이스로 스트리밍하여 콘텐츠를 시청하는 사람을 정확히 제어할 수 있습니다."
          },
          "pt-BR": {
            singular: "Transmita seu evento ao vivo para uma vitrine privada para controlar exatamente quem pode ver seu conteúdo."
          },
          "zh-CN": {
            singular: "将您的直播活动流式传输到私人橱窗，以便您可以精确控制哪些人可以观看。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Backup stream enablement",
        dictionary: {
          es: {
            singular: "Habilitación de las transmisiones de respaldo"
          },
          "de-DE": {
            singular: "Backup-Stream-Aktivierung"
          },
          "fr-FR": {
            singular: "Activation du stream de secours"
          },
          "ja-JP": {
            singular: "バックアップストリームの有効化"
          },
          "ko-KR": {
            singular: "백업 스트림 활성화"
          },
          "pt-BR": {
            singular: "Ativação de backup de transmissões"
          },
          "zh-CN": {
            singular: "启用备份流"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Monitor the quality of your live stream in real time and automatically switch to a backup stream in the event of an outage.",
        dictionary: {
          es: {
            singular: "Supervise la calidad de su transmisión en vivo en tiempo real y cambie automáticamente a una transmisión de respaldo en caso de interrupción."
          },
          "de-DE": {
            singular: "Überwache die Qualität deines Live-Streams in Echtzeit und schalte bei einem Ausfall automatisch auf einen Backup-Stream um."
          },
          "fr-FR": {
            singular: "Surveillez la qualité de votre stream en direct en temps réel et passez automatiquement à un stream de secours en cas de panne."
          },
          "ja-JP": {
            singular: "ライブストリームの画質をリアルタイムで監視し、停止状態になった場合は自動的にバックアップストリームに切り替えます。"
          },
          "ko-KR": {
            singular: "라이브 스트림의 품질을 실시간으로 모니터링하고 중단 시 백업 스트림으로 자동 전환합니다."
          },
          "pt-BR": {
            singular: "Monitore a qualidade da sua transmissão ao vivo em tempo real e, no caso de quedas, alterne automaticamente para uma cópia de segurança de transmissão."
          },
          "zh-CN": {
            singular: "实时监测直播质量，并在发生中断时自动切换到备份流。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Fail-safe streaming",
        dictionary: {
          es: {
            singular: "Transmisión a prueba de fallas"
          },
          "de-DE": {
            singular: "Ausfallsicheres Streaming"
          },
          "fr-FR": {
            singular: "Streaming à sécurité intégrée"
          },
          "ja-JP": {
            singular: "フェイルセーフストリーミング"
          },
          "ko-KR": {
            singular: "페일 세이프 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão à prova de falhas"
          },
          "zh-CN": {
            singular: "自动防故障的直播"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "High latency streaming protocol that adds a layer of protection to avoid a choppy viewing experience. Ideal for situations where audience interaction is not required",
        dictionary: {
          es: {
            singular: "Protocolo de transmisión de alta latencia que agrega una capa de protección para evitar una experiencia de visualización entrecortada. Ideal para situaciones donde no se requiere interacción con la audiencia"
          },
          "de-DE": {
            singular: "Streaming-Protokoll mit hoher Latenz und einer zusätzlichen Schutzebene, um ein ruckeliges Seherlebnis zu vermeiden. Ideal für Situationen, in denen keine Interaktion mit dem Publikum erforderlich ist."
          },
          "fr-FR": {
            singular: "Protocole de streaming à latence élevée qui ajoute un niveau de protection pour éviter une expérience de visionnage hachée. Idéal pour les situations où l'interaction avec le public n'est pas nécessaire."
          },
          "ja-JP": {
            singular: "不安定な視聴エクスペリエンスを回避するために保護を強化する、高遅延ストリーミングプロトコルです。視聴者とのインタラクションが不要な場合に適しています。"
          },
          "ko-KR": {
            singular: "대기 시간이 긴 스트리밍 프로토콜로서 고르지 못한 시청 환경을 방지하는 보호 기능을 추가합니다. 시청자와의 상호 작용이 필요하지 않은 경우에 이상적입니다."
          },
          "pt-BR": {
            singular: "Protocolo de transmissão de alta latência que adiciona uma camada de proteção para evitar uma experiência de visualização picada. Ideal para situações em que não é necessária a interação com o público"
          },
          "zh-CN": {
            singular: "高延迟的流媒体直播协议，通过添加一层保护来避免观看体验不流畅。适用于不需要与观众互动的情况"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)("eCDN"),
      tooltip: (0, _v1.translate)({
        singular: "Ensures that the content of the stream is securely delivered to the audience in a scalable way to ensure professional-quality experiences.",
        dictionary: {
          es: {
            singular: "Garantice que el contenido de la transmisión se entrega a la audiencia de forma segura y escalable para garantizar experiencias de calidad profesional."
          },
          "de-DE": {
            singular: "Stellt sicher, dass der Inhalt des Streams auf sichere und skalierbare Weise an das Publikum übermittelt wird, sodass ein Erlebnis in professioneller Qualität gewährleistet ist."
          },
          "fr-FR": {
            singular: "Veille à ce que le contenu du flux soit transmis en toute sécurité au public de manière évolutive afin de garantir des expériences de qualité professionnelle."
          },
          "ja-JP": {
            singular: "ストリームのコンテンツがスケーラブルな方法で安全に視聴者に配信され、プロ品質のエクスペリエンスが保証されます。"
          },
          "ko-KR": {
            singular: "스트리밍 콘텐츠를 확장 가능한 방식으로 시청자에게 안전하게 전달하여 전문가 수준의 경험을 보장합니다."
          },
          "pt-BR": {
            singular: "Garante que o conteúdo da transmissão seja entregue com segurança ao público de forma dimensionável para garantir experiências de qualidade profissional."
          },
          "zh-CN": {
            singular: "确保以可扩展的方式将直播内容安全传输给观众，打造专业品质的体验。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Live API",
        dictionary: {
          es: {
            singular: "API en vivo"
          },
          "de-DE": {
            singular: "Live-API"
          },
          "fr-FR": {
            singular: "API live"
          },
          "ja-JP": {
            singular: "ライブAPI"
          },
          "ko-KR": {
            singular: "라이브 api"
          },
          "pt-BR": {
            singular: "API ao vivo"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Use Vimeo's Live API to customize and manage your recurring live events from your native applications.",
        dictionary: {
          es: {
            singular: "Utilice la Live API de Vimeo para personalizar y gestionar sus eventos en vivo recurrentes desde sus aplicaciones nativas."
          },
          "de-DE": {
            singular: "Passe deine wiederkehrenden Live-Events an und verwalte sie mit der Live-API von Vimeo auf deinen nativen Anwendungen."
          },
          "fr-FR": {
            singular: "Utilisez l'API Live de Vimeo pour personnaliser et gérer vos événements en direct récurrents à partir de vos applications natives."
          },
          "ja-JP": {
            singular: "VimeoのLive APIを使用して、ネイティブアプリケーションから定期的なライブイベントをカスタマイズおよび管理できます。"
          },
          "ko-KR": {
            singular: "Vimeo의 Live API를 사용하여 기본 앱에서 반복 라이브 이벤트를 커스텀하고 관리합니다."
          },
          "pt-BR": {
            singular: "Use a API ao Vivo do Vimeo para customizar e gerenciar seus eventos ao vivo recorrentes dos seus aplicativos nativos."
          },
          "zh-CN": {
            singular: "使用 Vimeo 的 Live API 在原生应用程序中定制和管理您的定期直播活动。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Webinar API",
        dictionary: {
          es: {
            singular: "API de seminarios web"
          },
          "de-DE": {
            singular: "Webinar-API"
          },
          "fr-FR": {
            singular: "API Webinaire"
          },
          "ja-JP": {
            singular: "ウェビナーAPI"
          },
          "ko-KR": {
            singular: "웨비나 API"
          },
          "pt-BR": {
            singular: "API de webinar"
          },
          "zh-CN": {
            singular: "网络研讨会 API"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Use Vimeo's Webinar API to create, manage, and upload attendees at scale within your existing CRM system.",
        dictionary: {
          es: {
            singular: "Utilice la API de seminarios web de Vimeo para crear, gestionar y subir asistentes, según las necesidades, dentro de su sistema de CRM existente."
          },
          "de-DE": {
            singular: "Mit der Vimeo Webinar API kannst du Teilnehmende in deinem bestehenden CRM-System erstellen, verwalten und hochladen."
          },
          "fr-FR": {
            singular: "Utilisez l’API pour webinaires de Vimeo pour créer, gérer et importer des participants à grande échelle depuis votre système CRM existant."
          },
          "ja-JP": {
            singular: "VimeoウェビナーAPIを使用し、既存のCRMシステム内で多数の参加者を作成、管理、アップロード。"
          },
          "ko-KR": {
            singular: "Vimeo 웨비나 API를 사용하여 기존 CRM 시스템 내에서 대규모 참석자를 생성, 관리, 업로드하세요."
          },
          "pt-BR": {
            singular: "Use a API de webinar do Vimeo para criar, gerenciar e carregar participantes em grande escala dentro do seu sistema de CRM existente."
          },
          "zh-CN": {
            singular: "使用 Vimeo 的网络研讨会 API，在现有的 CRM 系统中大规模创建、管理和上传出席者。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }],
    _v9 = [{
      text: (0, _v1.translate)({
        singular: "Create folders and subfolders",
        dictionary: {
          es: {
            singular: "Crear carpetas y subcarpetas"
          },
          "de-DE": {
            singular: "Ordner und Unterordner erstellen"
          },
          "fr-FR": {
            singular: "Créer des dossiers et des sous-dossiers"
          },
          "ja-JP": {
            singular: "フォルダーとサブフォルダーを作成"
          },
          "ko-KR": {
            singular: "폴더 및 하위 폴더 만들기"
          },
          "pt-BR": {
            singular: "Criar pastas e subpastas"
          },
          "zh-CN": {
            singular: "创建文件夹和子文件夹"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Create folders and subfolders for maximum organization of videos.",
        dictionary: {
          es: {
            singular: "Cree carpetas y subcarpetas para organizar al máximo los videos."
          },
          "de-DE": {
            singular: "Erstellen Sie Ordner und Unterordner für eine optimale Organisation der Videos."
          },
          "fr-FR": {
            singular: "Créez des dossiers et sous-dossiers pour organiser au mieux vos vidéos."
          },
          "ja-JP": {
            singular: "最大限に動画整理機能を活用するためのフォルダーとサブフォルダーの作成。"
          },
          "ko-KR": {
            singular: "폴더와 하위 폴더를 생성하여 동영상을 최대한 잘 정리합니다."
          },
          "pt-BR": {
            singular: "Crie pastas e subpastas para organizar todos os seus vídeos."
          },
          "zh-CN": {
            singular: "创建文件夹和子文件夹，最大限度地组织视频。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Zoom and Webex uploads",
        dictionary: {
          es: {
            singular: "Subidas de Zoom y Webex"
          },
          "de-DE": {
            singular: "Zoom- und Webex-Uploads"
          },
          "fr-FR": {
            singular: "Mises en ligne Zoom et WebEx"
          },
          "ja-JP": {
            singular: "ZoomおよびWebexのアップロード"
          },
          "ko-KR": {
            singular: "Zoom 및 Webex 업로드"
          },
          "pt-BR": {
            singular: "Uploads do Zoom e Webex"
          },
          "zh-CN": {
            singular: "Zoom 和 Webex 上传"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Automatically upload your Zoom and WebEx recordings to edit, share, organize, and make all of your meetings searchable.",
        dictionary: {
          es: {
            singular: "Suba automáticamente sus grabaciones de Zoom y WebEx para editarlas, compartirlas, organizarlas y hacer que se puedan buscar todas sus reuniones."
          },
          "de-DE": {
            singular: "Laden Sie Zoom- und WebEx-Aufzeichnungen automatisch hoch, um sie zu bearbeiten, zu teilen und zu organisieren und alle Ihre Meetings durchsuchbar zu machen."
          },
          "fr-FR": {
            singular: "Transférez automatiquement vos enregistrements Zoom et WebEx pour les modifier, les partager, les organiser et les rendre consultables."
          },
          "ja-JP": {
            singular: "ZoomとWebExの録画を自動的にアップロードして、すべての会議を編集、共有、整理、検索可能にします。"
          },
          "ko-KR": {
            singular: "Zoom 및 WebEx 녹화본을 자동으로 업로드하면 모든 회의를 편집, 공유, 관리하고 검색 가능하게 할 수 있습니다."
          },
          "pt-BR": {
            singular: "Carregue suas gravações do Zoom e Webex automaticamente para editar, compartilhar, organizar e tornar todas as suas reuniões pesquisáveis."
          },
          "zh-CN": {
            singular: "自动上传您的 Zoom 和 WebEx 录制内容，以编辑、共享、组织您的所有会议并使之可搜索。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Slack integration",
        dictionary: {
          es: {
            singular: "Integración con Slack"
          },
          "de-DE": {
            singular: "Slack-Integration"
          },
          "fr-FR": {
            singular: "Intégration Slack"
          },
          "ja-JP": {
            singular: "Slackとの統合"
          },
          "ko-KR": {
            singular: "Slack 통합"
          },
          "pt-BR": {
            singular: "Integração com Slack"
          },
          "zh-CN": {
            singular: "Slack 集成"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Get Slack notifications when new videos are added, settings are changed, or new comments are left on videos",
        dictionary: {
          es: {
            singular: "Reciba notificaciones de Slack cuando se agreguen nuevos videos, se cambie la configuración o se dejen nuevos comentarios en los videos"
          },
          "de-DE": {
            singular: "Erhalten Sie Slack-Benachrichtigungen, wenn neue Videos hinzugefügt werden, Einstellungen geändert werden oder neue Kommentare zu Videos hinterlassen werden"
          },
          "fr-FR": {
            singular: "Recevez des notifications Slack lors de l'ajout de nouvelles vidéos, de modification des paramètres ou d'ajout de commentaires sur les vidéos."
          },
          "ja-JP": {
            singular: "新しいビデオが追加されたとき、設定が変更されたとき、動画に新しいコメントが残されたときにSlack通知を受信"
          },
          "ko-KR": {
            singular: "새 동영상이 추가되거나, 설정이 변경되거나, 동영상에 새 댓글이 달릴 때 Slack 알림을 받으세요."
          },
          "pt-BR": {
            singular: "Receba notificações do Slack quando vídeos novos forem adicionados, as configurações forem alteradas ou comentários novos forem deixados nos vídeos"
          },
          "zh-CN": {
            singular: "添加新视频、更改设置或视频得到新评论时，获取 Slack 通知"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Adobe Premiere Pro integration",
        dictionary: {
          es: {
            singular: "Integración de Adobe Premiere Pro"
          },
          "de-DE": {
            singular: "Integration von Adobe Premier Pro"
          },
          "fr-FR": {
            singular: "Intégration dans Adobe Premiere Pro"
          },
          "ja-JP": {
            singular: "Adobe Premier Pro との連携"
          },
          "ko-KR": {
            singular: "Adobe Premier Pro 연동"
          },
          "pt-BR": {
            singular: "Integração ao Adobe Premiere Pro"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Auto-sync comments between Vimeo and Premiere Pro, allowing you to easily address feedback right from your timeline.",
        dictionary: {
          es: {
            singular: "Sincronice automáticamente los comentarios entre Vimeo y Premiere Pro, lo que le permite abordar fácilmente las observaciones directamente desde su línea de tiempo."
          },
          "de-DE": {
            singular: "Synchronisieren Sie Kommentare automatisch zwischen Vimeo und Premiere Pro, sodass Sie Feedback ganz einfach direkt von Ihrer Chronik aus bearbeiten können."
          },
          "fr-FR": {
            singular: "Synchronisez automatiquement les commentaires entre Vimeo et Premiere Pro pour traiter facilement les retours directement depuis votre timeline."
          },
          "ja-JP": {
            singular: "VimeoとPremiere Proの間でコメントを自動同期し、タイムラインから直接フィードバックに対応できます。"
          },
          "ko-KR": {
            singular: "Vimeo와 Premiere Pro 간 댓글을 자동 동기화하여 타임라인에서 바로 피드백을 처리할 수 있습니다."
          },
          "pt-BR": {
            singular: "Sincronize automaticamente os comentários entre o Vimeo e o Premiere Pro para responder ao feedback diretamente da linha do tempo."
          },
          "zh-CN": {
            singular: "Vimeo 与 Premiere Pro 间的评论可自动同步，便于您直接在时间线上轻松处理反馈。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Replace version in URL",
        dictionary: {
          es: {
            singular: "Remplaza la versión en la URL"
          },
          "de-DE": {
            singular: "Ersetze die Version, ohne die URL zu ändern."
          },
          "fr-FR": {
            singular: "Remplacer la version dans l’URL"
          },
          "ja-JP": {
            singular: "同じURLでバージョンを置き換え"
          },
          "ko-KR": {
            singular: "URL에서 버전 교체"
          },
          "pt-BR": {
            singular: "Substituir versão no URL"
          },
          "zh-CN": {
            singular: "替换 URL 中的版本"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Replace your video with a new version while maintaining the same URL.",
        dictionary: {
          es: {
            singular: "Sustituya su video por una nueva versión y conserve la misma URL."
          },
          "de-DE": {
            singular: "Ersetzen Sie Ihr Video durch eine neue Version und behalten Sie dabei die gleiche URL bei."
          },
          "fr-FR": {
            singular: "Remplacez votre vidéo par une nouvelle version tout en conservant la même URL."
          },
          "ja-JP": {
            singular: "同じURLのまま新しいバージョンに動画を置き換え。"
          },
          "ko-KR": {
            singular: "동영상을 새 버전으로 교체해도 동영상 URL은 그대로 유지됩니다."
          },
          "pt-BR": {
            singular: "Substitua seu vídeo por uma nova versão mantendo o mesmo URL."
          },
          "zh-CN": {
            singular: "将您的视频替换为新版本，并保持 URL 不变。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Shared folders",
        dictionary: {
          es: {
            singular: "Carpetas compartidas"
          },
          "de-DE": {
            singular: "Gemeinsame Ordner"
          },
          "fr-FR": {
            singular: "Dossiers partagés"
          },
          "ja-JP": {
            singular: "共有フォルダー"
          },
          "ko-KR": {
            singular: "공유 폴더"
          },
          "pt-BR": {
            singular: "Pastas compartilhadas"
          },
          "zh-CN": {
            singular: "共享文件夹"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "A private workspace where teams can share video within a pre-defined team.",
        dictionary: {
          es: {
            singular: "Un espacio de trabajo privado en el que los equipos pueden compartir videos dentro de un equipo predefinido."
          },
          "de-DE": {
            singular: "Ein privater Arbeitsbereich, in dem Teams Videos innerhalb eines vordefinierten Teams teilen können."
          },
          "fr-FR": {
            singular: "Un espace de travail privé où les membres peuvent partager des vidéos avec une équipe prédéfinie."
          },
          "ja-JP": {
            singular: "所定のチームで動画を共有できるプライベートワークスペース"
          },
          "ko-KR": {
            singular: "팀이 미리 구성된 팀 내에서 동영상을 공유할 수 있는 비공개 워크스페이스입니다."
          },
          "pt-BR": {
            singular: "Área de trabalho privada onde as equipes podem compartilhar vídeos dentro de uma equipe predefinida."
          },
          "zh-CN": {
            singular: "一个私人工作空间，团队可以在预定义的团队内共享视频。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }, {
      text: (0, _v1.translate)({
        singular: "Search by caption",
        dictionary: {
          es: {
            singular: "Búsqueda por subtítulo"
          },
          "de-DE": {
            singular: "Untertitelsuche"
          },
          "fr-FR": {
            singular: "Recherche par sous-titres"
          },
          "ja-JP": {
            singular: "キャプションで検索"
          },
          "ko-KR": {
            singular: "자막을 통한 검색"
          },
          "pt-BR": {
            singular: "Pesquisa por legenda"
          },
          "zh-CN": {
            singular: "按字幕搜索"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Search videos by captions or tags for example: find a recording of a meeting you missed, a training video, or a leadership announcement.",
        dictionary: {
          es: {
            singular: "Busque videos por subtítulos o etiquetas, por ejemplo, busque la grabación de una reunión a la que no asistió, el video de una capacitación o un anuncio de liderazgo."
          },
          "de-DE": {
            singular: "Durchsuchen Sie Videos nach erweiterten Untertiteln oder Tags, um z. B. eine Aufzeichnung eines verpassten Meetings, ein Schulungsvideo oder ein Ankündigungsvideo einer Führungskraft zu finden."
          },
          "fr-FR": {
            singular: "Recherchez des vidéos à partir des légendes ou mots-clés. Vous pouvez par exemple rechercher l'enregistrement d'une réunion à laquelle vous n'avez pas pu assister, une vidéo de formation ou un communiqué de la direction."
          },
          "ja-JP": {
            singular: "キャプションやタグで動画を検索：例）見逃した会議、研修動画、リーダーシップの発表などの録画を検索します。"
          },
          "ko-KR": {
            singular: "자막이나 태그로 동영상을 검색합니다. 예를 들어 놓친 회의나 교육 영상 또는 경영진 공지를 찾아볼 수 있습니다."
          },
          "pt-BR": {
            singular: "Pesquise vídeos por legendas ou tags, por exemplo: encontre a gravação de uma reunião que perdeu, um vídeo de treinamento ou um anúncio da equipe de liderança."
          },
          "zh-CN": {
            singular: "按字幕或标签搜索视频，例如：查找您错过的会议录像、培训视频或领导公告。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }, {
      text: (0, _v1.translate)({
        singular: "Version history",
        dictionary: {
          es: {
            singular: "Historial de versiones"
          },
          "de-DE": {
            singular: "Versionsverlauf"
          },
          "fr-FR": {
            singular: "Historique des versions"
          },
          "ja-JP": {
            singular: "バージョン履歴"
          },
          "ko-KR": {
            singular: "버전 기록"
          },
          "pt-BR": {
            singular: "Histórico de versões"
          },
          "zh-CN": {
            singular: "版本历史"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Track changes and comments across previous versions of your videos.",
        dictionary: {
          es: {
            singular: "Realice un seguimiento de los cambios y comentarios en las versiones anteriores de sus videos."
          },
          "de-DE": {
            singular: "Verfolgen Sie Änderungen und Kommentare in früheren Versionen Ihrer Videos."
          },
          "fr-FR": {
            singular: "Suivez les modifications et commentaires pour les anciennes versions de vos vidéos."
          },
          "ja-JP": {
            singular: "動画の以前のバージョンの変更とコメントを追跡できます。"
          },
          "ko-KR": {
            singular: "동영상의 이전 버전에서 변경 사항과 댓글을 추적합니다."
          },
          "pt-BR": {
            singular: "Acompanhe as alterações e comentários das versões anteriores de seus vídeos."
          },
          "zh-CN": {
            singular: "跟踪您视频各个历史版本的变更和评论。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "File transfer",
        dictionary: {
          es: {
            singular: "Transferencia de archivos"
          },
          "de-DE": {
            singular: "Dateiübertragung"
          },
          "fr-FR": {
            singular: "Transfert de fichier"
          },
          "ja-JP": {
            singular: "ファイル転送"
          },
          "ko-KR": {
            singular: "파일 전송"
          },
          "pt-BR": {
            singular: "Transferência de arquivo"
          },
          "zh-CN": {
            singular: "文件传输"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Securely and privately share any size video file for your collaborators to download at the quality of their choice.",
        dictionary: {
          es: {
            singular: "Comparta de forma segura y privada archivos de video de cualquier tamaño para que sus colaboradores los descarguen con la calidad que elijan."
          },
          "de-DE": {
            singular: "Teilen Sie sicher und privat beliebig große Videodateien mit Ihren Mitbearbeiter*innen. Diese können sich die Dateien in der jeweils gewünschten Auflösung herunterladen."
          },
          "fr-FR": {
            singular: "Partagez tout type de fichier vidéo avec vos collaborateurs, de manière sécurisée et confidentielle. Ils pourront ensuite le télécharger dans la qualité de leur choix."
          },
          "ja-JP": {
            singular: "どのサイズの動画ファイルも共同制作メンバーと安全かつプライベートに共有でき、選択した画質でダウンロードができます。"
          },
          "ko-KR": {
            singular: "모든 크기의 동영상 파일을 비공개로 안전하게 공유할 수 있으며 협업자는 이를 원하는 화질로 다운로드할 수 있습니다."
          },
          "pt-BR": {
            singular: "Compartilhe arquivos de vídeo de todos os tamanhos, de forma segura e privada, para serem baixados por seus colaboradores e de acordo com a qualidade de preferência deles."
          },
          "zh-CN": {
            singular: "安全、私密地分享任何大小的视频文件，供您的合作者以他们选择的质量进行下载。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }, {
      text: (0, _v1.translate)({
        singular: "Video library",
        dictionary: {
          es: {
            singular: "Videoteca"
          },
          "de-DE": {
            singular: "Video-Bibliothek"
          },
          "fr-FR": {
            singular: "Vidéothèque"
          },
          "ja-JP": {
            singular: "動画ライブラリ"
          },
          "ko-KR": {
            singular: "동영상 라이브러리"
          },
          "pt-BR": {
            singular: "Biblioteca de vídeos"
          },
          "zh-CN": {
            singular: "视频库"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Contribute, organize, and search for content with secure access for your whole team all in one space.",
        dictionary: {
          es: {
            singular: "Contribuya, organice y busque contenido con acceso seguro para todo su equipo, todo en un mismo espacio."
          },
          "de-DE": {
            singular: "Du und dein gesamtes Team können mit sicherem Zugriff Inhalte beisteuern, organisieren und suchen – alles an einem Ort."
          },
          "fr-FR": {
            singular: "Contribuez, organisez et recherchez du contenu avec un accès sécurisé pour toute l'équipe, le tout dans un seul espace."
          },
          "ja-JP": {
            singular: "チーム全員が、1つのスペースで安全にアクセスできるコンテンツを投稿、整理、検索します。"
          },
          "ko-KR": {
            singular: "팀 전체가 한 공간에서 안전하게 액세스하여 콘텐츠를 제공, 구성 및 검색할 수 있습니다."
          },
          "pt-BR": {
            singular: "Contribua, organize e busque conteúdo com acesso seguro para toda a sua equipe em um único espaço."
          },
          "zh-CN": {
            singular: "在一个空间贡献、整理和搜索内容，供整个团队安全访问。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }],
    _v10 = [{
      text: (0, _v1.translate)({
        singular: "Video review",
        dictionary: {
          es: {
            singular: "Revisión de video"
          },
          "de-DE": {
            singular: "Video-Review"
          },
          "fr-FR": {
            singular: "Relecture vidéo"
          },
          "ja-JP": {
            singular: "動画レビュー"
          },
          "ko-KR": {
            singular: "동영상 리뷰"
          },
          "pt-BR": {
            singular: "Revisão de vídeo"
          },
          "zh-CN": {
            singular: "视频审阅"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Share feedback with time-stamped comments and stay aligned with project status and approvals.",
        dictionary: {
          es: {
            singular: "Compartir comentarios con marcas de tiempo y mantenerse alineado con el estado del proyecto y las aprobaciones."
          },
          "de-DE": {
            singular: "Teilen Sie Feedback mit zeitgestempelten Kommentaren und behalten Sie den Überblick über Projektstatus und Freigaben."
          },
          "fr-FR": {
            singular: "Partagez des retours avec des commentaires horodatés et restez alignés sur l'état du projet et les approbations."
          },
          "ja-JP": {
            singular: "タイムスタンプ付きのコメントでフィードバックを共有し、プロジェクトの状況と承認を常に把握できます。"
          },
          "ko-KR": {
            singular: "타임스탬프가 포함된 코멘트로 피드백을 공유하고 프로젝트 진행 상황 및 승인 상태를 함께 파악하세요."
          },
          "pt-BR": {
            singular: "Compartilhe feedback com comentários com carimbo de tempo e mantenha-se alinhado ao status e às aprovações do projeto."
          },
          "zh-CN": {
            singular: "通过带有时间戳的评论共享反馈，并与项目状态和审批保持一致。"
          }
        }
      }),
      tiers: {
        free: (0, _v1.translate)({
          singular: "Unlimited",
          dictionary: {
            es: {
              singular: "Ilimitado"
            },
            "de-DE": {
              singular: "Unbegrenzt"
            },
            "fr-FR": {
              singular: "Illimité"
            },
            "ja-JP": {
              singular: "無制限"
            },
            "ko-KR": {
              singular: "무제한"
            },
            "pt-BR": {
              singular: "Ilimitado"
            },
            "zh-CN": {
              singular: "无限"
            }
          }
        }),
        creator: (0, _v1.translate)({
          singular: "Unlimited",
          dictionary: {
            es: {
              singular: "Ilimitado"
            },
            "de-DE": {
              singular: "Unbegrenzt"
            },
            "fr-FR": {
              singular: "Illimité"
            },
            "ja-JP": {
              singular: "無制限"
            },
            "ko-KR": {
              singular: "무제한"
            },
            "pt-BR": {
              singular: "Ilimitado"
            },
            "zh-CN": {
              singular: "无限"
            }
          }
        }),
        core: (0, _v1.translate)({
          singular: "Unlimited",
          dictionary: {
            es: {
              singular: "Ilimitado"
            },
            "de-DE": {
              singular: "Unbegrenzt"
            },
            "fr-FR": {
              singular: "Illimité"
            },
            "ja-JP": {
              singular: "無制限"
            },
            "ko-KR": {
              singular: "무제한"
            },
            "pt-BR": {
              singular: "Ilimitado"
            },
            "zh-CN": {
              singular: "无限"
            }
          }
        }),
        professional: (0, _v1.translate)({
          singular: "Unlimited",
          dictionary: {
            es: {
              singular: "Ilimitado"
            },
            "de-DE": {
              singular: "Unbegrenzt"
            },
            "fr-FR": {
              singular: "Illimité"
            },
            "ja-JP": {
              singular: "無制限"
            },
            "ko-KR": {
              singular: "무제한"
            },
            "pt-BR": {
              singular: "Ilimitado"
            },
            "zh-CN": {
              singular: "无限"
            }
          }
        }),
        studio: (0, _v1.translate)({
          singular: "Unlimited",
          dictionary: {
            es: {
              singular: "Ilimitado"
            },
            "de-DE": {
              singular: "Unbegrenzt"
            },
            "fr-FR": {
              singular: "Illimité"
            },
            "ja-JP": {
              singular: "無制限"
            },
            "ko-KR": {
              singular: "무제한"
            },
            "pt-BR": {
              singular: "Ilimitado"
            },
            "zh-CN": {
              singular: "无限"
            }
          }
        }),
        production: (0, _v1.translate)({
          singular: "Unlimited",
          dictionary: {
            es: {
              singular: "Ilimitado"
            },
            "de-DE": {
              singular: "Unbegrenzt"
            },
            "fr-FR": {
              singular: "Illimité"
            },
            "ja-JP": {
              singular: "無制限"
            },
            "ko-KR": {
              singular: "무제한"
            },
            "pt-BR": {
              singular: "Ilimitado"
            },
            "zh-CN": {
              singular: "无限"
            }
          }
        }),
        enterprise: (0, _v1.translate)({
          singular: "Unlimited",
          dictionary: {
            es: {
              singular: "Ilimitado"
            },
            "de-DE": {
              singular: "Unbegrenzt"
            },
            "fr-FR": {
              singular: "Illimité"
            },
            "ja-JP": {
              singular: "無制限"
            },
            "ko-KR": {
              singular: "무제한"
            },
            "pt-BR": {
              singular: "Ilimitado"
            },
            "zh-CN": {
              singular: "无限"
            }
          }
        })
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Configurable review link",
        dictionary: {
          es: {
            singular: "Enlace de revisión configurable"
          },
          "de-DE": {
            singular: "Konfigurierbarer Review-Link"
          },
          "fr-FR": {
            singular: "Lien de relecture configurable"
          },
          "ja-JP": {
            singular: "カスタマイズ可能なレビューリンク"
          },
          "ko-KR": {
            singular: "구성 가능한 리뷰 링크"
          },
          "pt-BR": {
            singular: "Link de revisão configurável"
          },
          "zh-CN": {
            singular: "可配置的审阅链接"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Tailor the review experience for each recipient. Assign passwords, set link expiration, allow download access, and more.",
        dictionary: {
          es: {
            singular: "Personalice la experiencia de revisión para cada destinatario. Asigne contraseñas, establezca la expiración de los enlaces, permita el acceso a las descargas y mucho más."
          },
          "de-DE": {
            singular: "Passen Sie die Überprüfung für jeden Empfänger an. Vergeben Sie Passwörter, legen Sie den Ablauf von Links fest, erlauben Sie den Zugriff auf Downloads und vieles mehr."
          },
          "fr-FR": {
            singular: "Adaptez l'expérience de révision à chaque destinataire. Attribuez des mots de passe, définissez la durée de validité des liens, autorisez l'accès aux téléchargements, etc."
          },
          "ja-JP": {
            singular: "各受信者のレビュー体験を調整します。パスワードの割り当て、リンクの有効期限の設定、ダウンロードアクセスの許可などを行います。"
          },
          "ko-KR": {
            singular: "받는 사람별로 리뷰 경험을 맞춤화하세요. 비밀번호를 설정하고 링크 만료를 지정하며 다운로드 액세스를 허용하는 등 다양한 설정을 할 수 있습니다."
          },
          "pt-BR": {
            singular: "Personalize a experiência de revisão para cada pessoa convidada. Defina senhas, datas de expiração, permissões de download e muito mais."
          },
          "zh-CN": {
            singular: "为每位接收者定制专属审阅体验。可设置密码、链接有效期、下载权限等。"
          }
        }
      }),
      tiers: {
        free: (0, _v1.translate)({
          singular: "1 link per video",
          dictionary: {
            es: {
              singular: "1 enlace por video"
            },
            "de-DE": {
              singular: "1 Link pro Video"
            },
            "fr-FR": {
              singular: "1 lien par vidéo"
            },
            "ja-JP": {
              singular: "動画ごとに1つのリンク"
            },
            "ko-KR": {
              singular: "동영상당 링크 1개"
            },
            "pt-BR": {
              singular: "1 link por vídeo"
            },
            "zh-CN": {
              singular: "每个视频 1 个链接"
            }
          }
        }),
        creator: !0,
        core: !0,
        professional: !0,
        studio: !0,
        production: !0,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Custom expiration",
        dictionary: {
          es: {
            singular: "Expiración personalizada"
          },
          "de-DE": {
            singular: "Benutzerdefiniertes Ablaufdatum"
          },
          "fr-FR": {
            singular: "Expiration personnalisée"
          },
          "ja-JP": {
            singular: "カスタム有効期限"
          },
          "ko-KR": {
            singular: "사용자 지정 만료"
          },
          "pt-BR": {
            singular: "Expiração personalizada"
          },
          "zh-CN": {
            singular: "自定义到期时间"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Set a custom expiration date for your review links.",
        dictionary: {
          es: {
            singular: "Establecer una fecha de caducidad personalizada para sus enlaces de revisión."
          },
          "de-DE": {
            singular: "Legen Sie ein benutzerdefiniertes Ablaufdatum für Ihre Review-Links fest."
          },
          "fr-FR": {
            singular: "Définissez une date d’expiration personnalisée pour vos liens de relecture."
          },
          "ja-JP": {
            singular: "レビューリンクのカスタム有効期限を設定します。"
          },
          "ko-KR": {
            singular: "리뷰 링크의 사용자 지정 만료일을 설정하세요."
          },
          "pt-BR": {
            singular: "Defina uma data de expiração personalizada para seus links de revisão."
          },
          "zh-CN": {
            singular: "为您的审阅链接设置自定义到期日期。"
          }
        }
      }),
      tiers: {
        free: (0, _v1.translate)({
          singular: "Up to 1 month",
          dictionary: {
            es: {
              singular: "Hasta 1 mes"
            },
            "de-DE": {
              singular: "Bis zu 1 Monat"
            },
            "fr-FR": {
              singular: "Jusqu'à 1 mois"
            },
            "ja-JP": {
              singular: "最大1か月"
            },
            "ko-KR": {
              singular: "최대 1개월"
            },
            "pt-BR": {
              singular: "Até 1 mês"
            },
            "zh-CN": {
              singular: "最多 1 个月"
            }
          }
        }),
        creator: !0,
        core: !0,
        professional: !0,
        studio: !0,
        production: !0,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Allow reviewers to download",
        dictionary: {
          es: {
            singular: "Permitir que los revisores descarguen"
          },
          "de-DE": {
            singular: "Reviewern das Herunterladen erlauben"
          },
          "fr-FR": {
            singular: "Autoriser les relecteurs à télécharger"
          },
          "ja-JP": {
            singular: "レビュアーにダウンロードを許可する"
          },
          "ko-KR": {
            singular: "검토자가 다운로드할 수 있도록 허용"
          },
          "pt-BR": {
            singular: "Permitir que os revisores baixem"
          },
          "zh-CN": {
            singular: "允许审阅者下载"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Allow reviewers to download the video from the review page.",
        dictionary: {
          es: {
            singular: "Permitir que los revisores descarguen el video desde la página de revisión."
          },
          "de-DE": {
            singular: "Erlaube Reviewern, das Video von der Review-Seite herunterzuladen."
          },
          "fr-FR": {
            singular: "Autoriser les relecteurs à télécharger la vidéo depuis la page de relecture."
          },
          "ja-JP": {
            singular: "レビュー ページからレビュアーが動画をダウンロードできるようにします。"
          },
          "ko-KR": {
            singular: "검토자가 리뷰 페이지에서 동영상을 다운로드할 수 있도록 허용합니다."
          },
          "pt-BR": {
            singular: "Permitir que os revisores baixem o vídeo a partir da página de revisão."
          },
          "zh-CN": {
            singular: "允许审阅者从审阅页面下载视频。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Password protection",
        dictionary: {
          es: {
            singular: "Protección por contraseña"
          },
          "de-DE": {
            singular: "Kennwortschutz"
          },
          "fr-FR": {
            singular: "Protection par mot de passe"
          },
          "ja-JP": {
            singular: "動画のパスワード保護"
          },
          "ko-KR": {
            singular: "비밀번호로 동영상 보호"
          },
          "pt-BR": {
            singular: "Proteção com senha"
          },
          "zh-CN": {
            singular: "密码保护"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Require reviewers to enter a password to access the review page.",
        dictionary: {
          es: {
            singular: "Requerir que los revisores introduzcan una contraseña para acceder a la página de revisión."
          },
          "de-DE": {
            singular: "Reviewer müssen ein Passwort eingeben, um auf die Review-Seite zuzugreifen."
          },
          "fr-FR": {
            singular: "Exiger que les relecteurs saisissent un mot de passe pour accéder à la page de relecture."
          },
          "ja-JP": {
            singular: "レビュアーにレビュー ページへアクセスする際にパスワードの入力を求めます。"
          },
          "ko-KR": {
            singular: "검토자가 리뷰 페이지에 접근하려면 비밀번호를 입력하도록 요구합니다."
          },
          "pt-BR": {
            singular: "Exigir que os revisores insiram uma senha para acessar a página de revisão."
          },
          "zh-CN": {
            singular: "要求审阅者输入密码以访问审阅页面。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }, {
      text: (0, _v1.translate)({
        singular: "Customize appearance",
        dictionary: {
          es: {
            singular: "Personalizar apariencia"
          },
          "de-DE": {
            singular: "Erscheinungsbild anpassen"
          },
          "fr-FR": {
            singular: "Personnaliser l’apparence"
          },
          "ja-JP": {
            singular: "外観をカスタマイズ"
          },
          "ko-KR": {
            singular: "외관 사용자 지정"
          },
          "pt-BR": {
            singular: "Personalizar aparência"
          },
          "zh-CN": {
            singular: "自定义外观"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Customize the appearance of the review page with your branding.",
        dictionary: {
          es: {
            singular: "Personalizar la apariencia de la página de revisión con su marca."
          },
          "de-DE": {
            singular: "Passen Sie das Erscheinungsbild der Review-Seite an Ihr Branding an."
          },
          "fr-FR": {
            singular: "Personnalisez l’apparence de la page de relecture avec votre image de marque."
          },
          "ja-JP": {
            singular: "ブランドに合わせてレビュー ページの外観をカスタマイズします。"
          },
          "ko-KR": {
            singular: "브랜딩으로 리뷰 페이지의 외관을 사용자 지정하세요."
          },
          "pt-BR": {
            singular: "Personalize a aparência da página de revisão com sua marca."
          },
          "zh-CN": {
            singular: "使用您的品牌自定义审阅页面的外观。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PAID_PLANS
    }],
    _v11 = [{
      text: (0, _v1.translate)({
        singular: "Basic viewer analytics",
        dictionary: {
          es: {
            singular: "Estadísticas básicas de los espectadores"
          },
          "de-DE": {
            singular: "Grundlegende Zuschaueranalysen"
          },
          "fr-FR": {
            singular: "Analyses de base liées aux spectateurs"
          },
          "ja-JP": {
            singular: "基本的な視聴者分析"
          },
          "ko-KR": {
            singular: "기본 시청자 분석"
          },
          "pt-BR": {
            singular: "Análise básica de espectador"
          },
          "zh-CN": {
            singular: "基本观众分析"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "View date, video, source, device, region, time series graphs, and time-based reporting on several metrics all in a single dashboard.",
        dictionary: {
          es: {
            singular: "Vea la fecha, el video, la fuente, el dispositivo, la región, los gráficos de series temporales y los informes basados en tiempo de varias métricas, todo en un único panel."
          },
          "de-DE": {
            singular: "Zeigen Sie Datum, Video, Quelle, Gerät, Region, Zeitreihendiagramme und zeitbasierte Berichte zu verschiedenen Metriken auf einem einzigen Dashboard an."
          },
          "fr-FR": {
            singular: "Consultez la date, la vidéo, la source, l'appareil, la région, les diagrammes chronologiques et les rapports temporels pour différents indicateurs, le tout sur un seul tableau de bord."
          },
          "ja-JP": {
            singular: "日付、動画、ソース、デバイス、地域、時系列グラフ、および複数のメトリックに関する時系列レポートを、1 つのダッシュボードにすべて表示します。"
          },
          "ko-KR": {
            singular: "하나의 대시보드에서 여러 측정 항목에 대한 날짜, 동영상, 소스, 기기, 지역, 타임 시리즈 그래프, 시간 기반 보고서를 모두 볼 수 있습니다."
          },
          "pt-BR": {
            singular: "Visualize a data, o vídeo, a origem, o dispositivo, a região, os gráficos de série temporal e os relatórios baseados em tempo de várias métricas, tudo em um mesmo painel de controle."
          },
          "zh-CN": {
            singular: "在一个单一仪表板中查看日期、视频、来源、设备、地区、时间序列图以及多个基于时间的指标报告。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Engagement analytics",
        dictionary: {
          es: {
            singular: "Estadísticas de interacción"
          },
          "de-DE": {
            singular: "Analysen zur Interaktion"
          },
          "fr-FR": {
            singular: "Analyses liées à l'implication"
          },
          "ja-JP": {
            singular: "エンゲージメント分析"
          },
          "ko-KR": {
            singular: "참여도 분석"
          },
          "pt-BR": {
            singular: "Análise de engajamento"
          },
          "zh-CN": {
            singular: "参与分析"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Track the performance of various interaction tools on your video, including end cards, CTAs, and contact forms.",
        dictionary: {
          es: {
            singular: "Realice un seguimiento del rendimiento de diversas herramientas de interacción en su video, incluidas las tarjetas finales, las CTA y los formularios de contacto."
          },
          "de-DE": {
            singular: "Überwachen Sie die Leistung diverser Interaktionstools Ihres Videos, einschließlich Endkarten, CTAs und Kontaktformulare."
          },
          "fr-FR": {
            singular: "Suivez les performances de différents outils d'interaction utilisés dans vos vidéos, dont les cartes de fin, les appels à l'action et les formulaires de contact."
          },
          "ja-JP": {
            singular: "エンドカード、CTA、お問い合わせフォームなど、動画のさまざまなインタラクションツールのパフォーマンスを追跡します。"
          },
          "ko-KR": {
            singular: "종료 카드, CTA, 연락처 양식 등 다양한 동영상 인터랙티브 도구의 성능을 추적합니다."
          },
          "pt-BR": {
            singular: "Acompanhe o desempenho de várias ferramentas de interação nos seus vídeos, incluindo cartões finais, CTAs e formulários de contato."
          },
          "zh-CN": {
            singular: "跟踪视频中各种交互工具的性能，包括结束卡、行动号召 (CTA) 和联系表。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Social analytics",
        dictionary: {
          es: {
            singular: "Estadísticas de redes sociales"
          },
          "de-DE": {
            singular: "Analysen zu Social Media"
          },
          "fr-FR": {
            singular: "Analyses sur les réseaux sociaux"
          },
          "ja-JP": {
            singular: "ソーシャル分析"
          },
          "ko-KR": {
            singular: "소셜 분석"
          },
          "pt-BR": {
            singular: "Análise de redes sociais"
          },
          "zh-CN": {
            singular: "社交分析"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Monitor every view, like, share, and percentage watched across videos posted to your social channels (reporting for YouTube and Facebook).",
        dictionary: {
          es: {
            singular: "Supervise todas las visualizaciones, los Me gusta, el contenido compartido y los porcentajes de visualización de los videos publicados en sus canales de redes sociales (informes para YouTube y Facebook)."
          },
          "de-DE": {
            singular: "Überwachen Sie für alle auf Ihren Social-Media-Kanälen geposteten Videos die Aufrufe, Likes, Shares und wie viel Prozent der Videos angeschaut wurden (Berichte für YouTube und Facebook)."
          },
          "fr-FR": {
            singular: "Surveillez les vues, les mentions J'aime, les partages et le pourcentage de visionnage pour chacune de vos vidéos publiées sur les réseaux sociaux (rapports pour YouTube et Facebook)."
          },
          "ja-JP": {
            singular: "ソーシャルチャネル（YouTubeとFacebook）に投稿された動画の視聴回数、いいね数、シェア数、視聴率などをすべてモニタリングします。"
          },
          "ko-KR": {
            singular: "소셜 미디어 채널(YouTube 및 Facebook 보고)에 게시된 동영상의 조회 수, 좋아요, 공유, 시청률을 모니터링합니다."
          },
          "pt-BR": {
            singular: "Acompanhe cada visualização, curtida, compartilhamento e percentual assistido dos vídeos postados nas suas redes sociais (relatórios para YouTube e Facebook)."
          },
          "zh-CN": {
            singular: "监测发布到社交渠道的视频的每一次观看、点赞、分享和观看时长百分比（YouTube 和 Facebook 监测报告）。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Event analytics",
        dictionary: {
          es: {
            singular: "Analítica de eventos"
          },
          "de-DE": {
            singular: "Event-Analysen"
          },
          "fr-FR": {
            singular: "Analyses d'événements"
          },
          "ja-JP": {
            singular: "イベント分析"
          },
          "ko-KR": {
            singular: "이벤트 분석"
          },
          "pt-BR": {
            singular: "Análises de eventos"
          },
          "zh-CN": {
            singular: "活动分析"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Track overall performance of your live events including registration, attendance, and engagement metrics plus more.",
        dictionary: {
          es: {
            singular: "Realice un seguimiento del rendimiento general de sus eventos en vivo, incluidas las métricas de registro, asistencia y participación, y mucho más."
          },
          "de-DE": {
            singular: "Überwache die Gesamtperformance deiner Live-Events, einschließlich Registrierung, Teilnahme, Interaktion und anderer Metriken."
          },
          "fr-FR": {
            singular: "Suivez les performances générales de vos événements en direct, dont les inscriptions, la participation et l'implication."
          },
          "ja-JP": {
            singular: "登録、出席、エンゲージメントの指標など、ライブイベントの全体的なパフォーマンスを追跡します。"
          },
          "ko-KR": {
            singular: "등록, 참석, 참여 지표 등을 포함한 라이브 이벤트의 전반적인 성과를 추적합니다."
          },
          "pt-BR": {
            singular: "Acompanhe o desempenho geral dos seus eventos ao vivo, incluindo métricas de inscrição, participação, engajamento e mais."
          },
          "zh-CN": {
            singular: "跟踪直播活动的整体表现，包括注册、出席率和参与度等指标。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "Team-level analytics",
        dictionary: {
          es: {
            singular: "Estadísticas a nivel de equipo"
          },
          "de-DE": {
            singular: "Analysen auf Teamebene"
          },
          "fr-FR": {
            singular: "Analyses liées aux équipes"
          },
          "ja-JP": {
            singular: "チームレベルの分析"
          },
          "ko-KR": {
            singular: "팀 수준 분석"
          },
          "pt-BR": {
            singular: "Análise de equipe"
          },
          "zh-CN": {
            singular: "团队级分析"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Track viewing activity for team members, like whether they viewed a video, how many times they viewed, and their average watch time",
        dictionary: {
          es: {
            singular: "Seguimiento de la actividad de visualización de los miembros del equipo, como si han visto un video, cuántas veces lo han visto y su tiempo de visualización promedio"
          },
          "de-DE": {
            singular: "Verfolgen Sie die Betrachtungsaktivitäten von Teammitgliedern, z. B. ob sie ein Video angesehen haben, wie oft sie es angesehen haben und wie lange sie es durchschnittlich angesehen haben."
          },
          "fr-FR": {
            singular: "Suivez l'activité de visionnage des membres de l'équipe, p. ex. : s'ils ont regardé une vidéo, combien de fois ils l'ont regardée et leur durée moyenne de visionnage."
          },
          "ja-JP": {
            singular: "チームメンバーの視聴アクティビティ（動画を視聴したかどうか、視聴回数、平均視聴時間など）を追跡します。"
          },
          "ko-KR": {
            singular: "동영상 시청 여부, 시청 횟수, 평균 시청 시간 등 팀원의 시청 활동을 추적합니다."
          },
          "pt-BR": {
            singular: "Acompanhe a atividade de visualização dos integrantes da equipe, por exemplo, se eles assistiram a um vídeo, quantas vezes assistiram e o tempo médio de exibição"
          },
          "zh-CN": {
            singular: "跟踪团队成员的观看活动，如是否观看视频、观看次数和平均观看时间"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !0,
        production: !0,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Learning Platform integration",
        dictionary: {
          es: {
            singular: "Integración de la plataforma de aprendizaje"
          },
          "de-DE": {
            singular: "Integration der Lernplattform"
          },
          "fr-FR": {
            singular: "Intégration de la plateforme d'apprentissage"
          },
          "ja-JP": {
            singular: "学習プラットフォームの統合"
          },
          "ko-KR": {
            singular: "학습 플랫폼 연동"
          },
          "pt-BR": {
            singular: "Integração da Plataforma de Aprendizagem"
          },
          "zh-CN": {
            singular: "学习平台集成"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Share user level video completion and progress analytics with your organization's learning platform.",
        dictionary: {
          es: {
            singular: "Comparta los análisis de finalización y progreso de videos a nivel de usuario con la plataforma de aprendizaje de su organización."
          },
          "de-DE": {
            singular: "Teilen Sie die Analysen zu Videoabschlüssen und Fortschritten auf Benutzerebene mit der Lernplattform Ihres Unternehmens."
          },
          "fr-FR": {
            singular: "Partagez les statistiques de progression et d'achèvement des vidéos au niveau utilisateur avec la plateforme d'apprentissage de votre organisation."
          },
          "ja-JP": {
            singular: "ユーザーレベルの動画完了と進捗状況の分析を組織の学習プラットフォームと共有します。"
          },
          "ko-KR": {
            singular: "개별 사용자의 동영상 시청 완료 및 진행률 분석 데이터를 조직의 학습 플랫폼과 공유하세요."
          },
          "pt-BR": {
            singular: "Compartilhe as análises de conclusão e progresso de vídeos no nível de usuário com a plataforma de aprendizado da sua organização."
          },
          "zh-CN": {
            singular: "与贵组织的学习平台共享用户级别的视频完成和进度分析。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }],
    _v12 = [{
      text: (0, _v1.translate)({
        singular: "Self-serve knowledge base",
        dictionary: {
          es: {
            singular: "Base de conocimientos de autoservicio"
          },
          "de-DE": {
            singular: "Wissensdatenbank für den Self-Service"
          },
          "fr-FR": {
            singular: "Base de connaissances en libre-service"
          },
          "ja-JP": {
            singular: "ナレッジセンター"
          },
          "ko-KR": {
            singular: "셀프 서비스 지식 기반"
          },
          "pt-BR": {
            singular: "Base de conhecimento de autoatendimento"
          },
          "zh-CN": {
            singular: "自助式知识库"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Access to our help center with 100s of articles and step-by-step instructions for how to accomplish tasks and troubleshoot.",
        dictionary: {
          es: {
            singular: "Acceso a nuestro centro de ayuda con cientos de artículos e instrucciones paso a paso para realizar tareas y solucionar problemas."
          },
          "de-DE": {
            singular: "Zugang zu unserem Hilfecenter mit Hunderten Artikeln und Anleitungen zu Aufgaben oder Fehlerbehebungen."
          },
          "fr-FR": {
            singular: "Accès à notre centre d'aide, où vous trouverez des centaines d'articles et d'instructions détaillées conçus pour vous aider à accomplir des tâches et résoudre des problèmes."
          },
          "ja-JP": {
            singular: "豊富な記事と、タスク実行とトラブルシューティングに関する段階的な説明が掲載されたヘルプセンターへのアクセス。"
          },
          "ko-KR": {
            singular: "도움말 센터에서 작업 수행과 문제 해결 방법에 대한 수백 개의 도움말과 단계별 지침을 확인합니다."
          },
          "pt-BR": {
            singular: "Acesso à nossa Central de Ajuda com centenas de artigos e instruções passo a passo sobre como realizar tarefas e solucionar problemas."
          },
          "zh-CN": {
            singular: "访问我们的帮助中心，其中包含 100 多篇有关如何完成任务和排除故障的文章和分步说明。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Email support",
        dictionary: {
          es: {
            singular: "Asistencia por correo electrónico"
          },
          "de-DE": {
            singular: "E-Mail-Support"
          },
          "fr-FR": {
            singular: "Assistance par e-mail"
          },
          "ja-JP": {
            singular: "E メールサポート"
          },
          "ko-KR": {
            singular: "이메일 지원"
          },
          "pt-BR": {
            singular: "Suporte técnico por e-mail"
          },
          "zh-CN": {
            singular: "电子邮件支持"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Ability to email Vimeo via web form for support.",
        dictionary: {
          es: {
            singular: "Posibilidad de contactar a Vimeo a través de un formulario web para recibir asistencia."
          },
          "de-DE": {
            singular: "Wenn du Support brauchst, kannst du über ein Webformular E-Mail-Kontakt mit Vimeo aufnehmen."
          },
          "fr-FR": {
            singular: "Possibilité de contacter Vimeo par e-mail pour bénéficier d’une assistance, en remplissant un formulaire en ligne."
          },
          "ja-JP": {
            singular: "サポートのためにWebフォームを介してVimeoにEメールすることが可能。"
          },
          "ko-KR": {
            singular: "웹 양식을 통해 Vimeo에 이메일을 보내 지원을 요청할 수 있습니다."
          },
          "pt-BR": {
            singular: "Suporte técnico do Vimeo por e-mail via formulário online."
          },
          "zh-CN": {
            singular: "可通过网络表单向 Vimeo 发送电子邮件，获取支持。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
    }, {
      text: (0, _v1.translate)({
        singular: "Chat support for live events",
        dictionary: {
          es: {
            singular: "Asistencia por chat para eventos en vivo"
          },
          "de-DE": {
            singular: "Chat-Support für Live-Events"
          },
          "fr-FR": {
            singular: "Assistance par chat pour les événements en direct"
          },
          "ja-JP": {
            singular: "ライブイベントのチャットサポート"
          },
          "ko-KR": {
            singular: "라이브 이벤트 채팅 지원"
          },
          "pt-BR": {
            singular: "Suporte por chat para eventos ao vivo"
          },
          "zh-CN": {
            singular: "直播活动聊天支持"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Ability to talk to a rep in real time via chat.",
        dictionary: {
          es: {
            singular: "Posibilidad de hablar con un representante a través del chat en tiempo real."
          },
          "de-DE": {
            singular: "Chat-Kontakt mit einem Vertreter für ein Echtzeit-Gespräch."
          },
          "fr-FR": {
            singular: "Possibilité d'échanger avec un agent en temps réel via une discussion en ligne."
          },
          "ja-JP": {
            singular: "チャットを介して担当者とリアルタイムで話すことが可能。"
          },
          "ko-KR": {
            singular: "담당자와 채팅을 통해 실시간으로 대화할 수 있습니다."
          },
          "pt-BR": {
            singular: "Recurso de contato com um representante em tempo real por meio de chat (chat)."
          },
          "zh-CN": {
            singular: "可通过聊天与代表实时交谈。"
          }
        }
      }),
      tiers: _v2.REPACKAGING_PRO_AND_ABOVE
    }, {
      text: (0, _v1.translate)({
        singular: "99.9% uptime SLA",
        dictionary: {
          es: {
            singular: "ANS de tiempo de actividad del 99.9 %"
          },
          "de-DE": {
            singular: "SLA mit 99,9 % Verfügbarkeit"
          },
          "fr-FR": {
            singular: "Taux de disponibilité de 99,9 % (SLA)"
          },
          "ja-JP": {
            singular: "アップタイム99.9％のSLA"
          },
          "ko-KR": {
            singular: "99.9% 업타임 SLA"
          },
          "pt-BR": {
            singular: "SLA de 99,9% de tempo de atividade"
          },
          "zh-CN": {
            singular: "99.9% 正常运行时间 SLA"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Commitment from Vimeo to make the service available with a monthly uptime percentage. See terms for details.",
        dictionary: {
          es: {
            singular: "Compromiso de Vimeo de hacer que el servicio esté disponible con un porcentaje de tiempo de actividad mensual. Consulte los términos para obtener detalles."
          },
          "de-DE": {
            singular: "Vimeo bietet eine Verfügbarkeitsgarantie des Dienstes in Form einer monatlich festgelegten prozentualen Laufzeit. Für weitere Details siehe AGB."
          },
          "fr-FR": {
            singular: "Vimeo s'engage à assurer un certain taux mensuel de disponibilité du service. Consultez les conditions pour en savoir plus."
          },
          "ja-JP": {
            singular: "月間の稼働率でサービスの利用を可能にするというVimeoのコミットメント。詳細については規約をご確認ください。"
          },
          "ko-KR": {
            singular: "월간 업타임 비율로 서비스를 제공할 것을 약속드립니다. 자세한 내용은 약관을 참조하세요."
          },
          "pt-BR": {
            singular: "Compromisso do Vimeo de garantir a disponibilidade do serviço com uma porcentagem mensal de tempo de atividade. Consulte os termos para obter detalhes."
          },
          "zh-CN": {
            singular: "Vimeo 承诺每月按正常运行时间百分比提供服务。详见条款。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Phone support",
        dictionary: {
          es: {
            singular: "Asistencia telefónica"
          },
          "de-DE": {
            singular: "Telefonischer Support"
          },
          "fr-FR": {
            singular: "Assistance par téléphone"
          },
          "ja-JP": {
            singular: "電話サポート"
          },
          "ko-KR": {
            singular: "전화 지원"
          },
          "pt-BR": {
            singular: "Suporte por telefone"
          },
          "zh-CN": {
            singular: "电话支持"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Ability to call Vimeo for real-time support. Levels vary by support tier.",
        dictionary: {
          es: {
            singular: "Posibilidad de llamar a Vimeo para recibir asistencia en tiempo real. Los niveles varían según el nivel de asistencia."
          },
          "de-DE": {
            singular: "Support von Vimeo in Echtzeit verfügbar. Das Ausmaß variiert je nach Support-Stufe."
          },
          "fr-FR": {
            singular: "Possibilité d'appeler Vimeo pour bénéficier d'une assistance en temps réel. Les services varient en fonction du niveau d'assistance."
          },
          "ja-JP": {
            singular: "リアルタイムサポートのためにVimeoに電話が可能。サポートプランによってレベルは異なります。"
          },
          "ko-KR": {
            singular: "Vimeo에 전화하여 실시간 지원을 요청할 수 있습니다. 수준은 지원 등급에 따라 다릅니다."
          },
          "pt-BR": {
            singular: "Suporte técnico do Vimeo em tempo real por telefone. Os níveis variam conforme o nível de suporte."
          },
          "zh-CN": {
            singular: "可致电 Vimeo 获得实时支持。级别因支持层而异。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }],
    _v13 = [{
      text: (0, _v1.translate)({
        singular: "Account Manager",
        dictionary: {
          es: {
            singular: "Gerente de la cuenta"
          },
          "de-DE": {
            singular: "Kundenbetreuer/in"
          },
          "fr-FR": {
            singular: "Responsable de compte"
          },
          "ja-JP": {
            singular: "アカウントマネージャー"
          },
          "ko-KR": {
            singular: "계정 관리자"
          },
          "pt-BR": {
            singular: "Gerente da conta"
          },
          "zh-CN": {
            singular: "客户经理"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Get a dedicated Vimeo Account Manager to ensure your success.",
        dictionary: {
          es: {
            singular: "Obtenga un gerente de cuentas de Vimeo exclusivo para garantizar su éxito."
          },
          "de-DE": {
            singular: "Dein persönlicher Vimeo Account Manager kümmert sich darum, dass alles optimal funktioniert."
          },
          "fr-FR": {
            singular: "Bénéficiez de l’aide d’un gestionnaire de compte Vimeo attitré pour assurer votre réussite."
          },
          "ja-JP": {
            singular: "目標達成に役立つ自分専用のVimeoアカウントマネージャー。"
          },
          "ko-KR": {
            singular: "전담 Vimeo 계정 관리자를 통해 필요한 지원을 받아 보세요."
          },
          "pt-BR": {
            singular: "Tenha um gerente de conta exclusivo do Vimeo para garantir seu sucesso."
          },
          "zh-CN": {
            singular: "获得专职 Vimeo 客户经理，确保您取得成功。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Production services",
        dictionary: {
          es: {
            singular: "Servicios de producción"
          },
          "de-DE": {
            singular: "Produktionsdienstleistungen"
          },
          "fr-FR": {
            singular: "Services de production"
          },
          "ja-JP": {
            singular: "プロダクションサービス"
          },
          "ko-KR": {
            singular: "프로덕션 서비스"
          },
          "pt-BR": {
            singular: "Serviços de produção"
          },
          "zh-CN": {
            singular: "制作服务"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "In-person and remote production services to help you host a successful live event.",
        dictionary: {
          es: {
            singular: "Servicios de producción en persona y remotos para ayudarte a organizar un evento en vivo exitoso."
          },
          "de-DE": {
            singular: "Produktionsdienstleistungen vor Ort und remote helfen dir, erfolgreiche Live-Events zu veranstalten."
          },
          "fr-FR": {
            singular: "Des services de production en personne et à distance pour vous aider à organiser un événement en direct réussi."
          },
          "ja-JP": {
            singular: "ライブイベントを成功させるための対面およびリモートプロダクションサービス。"
          },
          "ko-KR": {
            singular: "라이브 이벤트의 성공적인 주최를 지원하는 대면 및 원격 프로덕션 서비스를 제공합니다."
          },
          "pt-BR": {
            singular: "Serviços de produção presenciais e remotos para ajudar você a organizar um evento ao vivo de sucesso."
          },
          "zh-CN": {
            singular: "我们提供现场和远程制作服务帮助您成功举办直播活动。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }, {
      text: (0, _v1.translate)({
        singular: "Training",
        dictionary: {
          es: {
            singular: "Capacitación"
          },
          "fr-FR": {
            singular: "Formation"
          },
          "ja-JP": {
            singular: "トレーニング"
          },
          "ko-KR": {
            singular: "트레이닝"
          },
          "pt-BR": {
            singular: "Treinamento"
          },
          "zh-CN": {
            singular: "培训"
          }
        }
      }),
      tooltip: (0, _v1.translate)({
        singular: "Access training for your team to help you get the most out of Vimeo Enterprise.",
        dictionary: {
          es: {
            singular: "Acceda a capacitación para su equipo para que pueda aprovechar Vimeo Enterprise al máximo."
          },
          "de-DE": {
            singular: "Mit Schulungen für dein Team holst du das Beste aus Vimeo Enterprise heraus."
          },
          "fr-FR": {
            singular: "Accédez à des formations pour votre équipe afin de vous aider à tirer le meilleur parti de Vimeo Entreprise."
          },
          "ja-JP": {
            singular: "Vimeo Enterpriseを最大限に活用するためのチーム向けトレーニングにアクセス。"
          },
          "ko-KR": {
            singular: "팀 교육 콘텐츠에 액세스해 Vimeo Enterprise 활용법을 확인하세요."
          },
          "pt-BR": {
            singular: "Acesso a treinamento para sua equipe aproveitar ao máximo o Vimeo Enterprise."
          },
          "zh-CN": {
            singular: "为您的团队提供培训，帮助您充分利用 Vimeo Enterprise。"
          }
        }
      }),
      tiers: {
        free: !1,
        creator: !1,
        professional: !1,
        studio: !1,
        production: !1,
        enterprise: !0
      }
    }];
  _v0.s(["AI_FEATURES", 0, _v7, "ANALYTICS_FEATURES", 0, _v11, "COLLABORATION_FEATURES", 0, _v9, "EDITING_FEATURES", 0, _v6, "ENTERPRISE_FEATURES", 0, _v13, "REVIEWS_FEATURES", 0, _v10, "SUPPORT_FEATURES", 0, _v12, "WEBINARS_FEATURES", 0, _v8, "getCoreFeatures", 0, (_v0, _v1 = !1) => [{
    text: (0, _v1.translate)({
      singular: "Seats",
      dictionary: {
        es: {
          singular: "Plazas"
        },
        "de-DE": {
          singular: "Plätze"
        },
        "fr-FR": {
          singular: "Places"
        },
        "ja-JP": {
          singular: "利用者数"
        },
        "ko-KR": {
          singular: "사용자 수"
        },
        "pt-BR": {
          singular: "Assentos"
        },
        "zh-CN": {
          singular: "席位"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "The number of users included in your plan that can upload, manage, and share videos.",
      dictionary: {
        es: {
          singular: "El número de usuarios incluidos en tu plan que pueden subir, gestionar y compartir videos."
        },
        "de-DE": {
          singular: "Die Anzahl der in Ihrem Tarif enthaltenen Benutzer, die Videos hochladen, verwalten und teilen können."
        },
        "fr-FR": {
          singular: "Le nombre d'utilisateurs inclus dans votre forfait qui peuvent téléverser, gérer et partager des vidéos."
        },
        "ja-JP": {
          singular: "プランに含まれる、動画をアップロード、管理、共有できるユーザー数です。"
        },
        "ko-KR": {
          singular: "귀하의 요금제에 포함되어 동영상을 업로드, 관리 및 공유할 수 있는 사용자 수입니다."
        },
        "pt-BR": {
          singular: "O número de usuários incluídos em seu plano que podem enviar, gerenciar e compartilhar vídeos."
        },
        "zh-CN": {
          singular: "计划中包含的、可上传、管理和分享视频的用户数量。"
        }
      }
    }),
    tiers: {
      free: `${_v0?.free?.teamSeats || 1}`,
      creator: `${_v0?.creator?.teamSeats || 1}`,
      core: `${_v0?.core?.teamSeats || 1}`,
      professional: `${_v0?.professional?.teamSeats || 10}`,
      studio: `${_v0?.studio?.teamSeats || 10}`,
      production: `${_v0?.production?.teamSeats || 20}`,
      enterprise: (0, _v1.translate)({
        singular: "Custom",
        dictionary: {
          es: {
            singular: "Personalizar"
          },
          "de-DE": {
            singular: "Benutzerdefiniert"
          },
          "fr-FR": {
            singular: "Personnalisé"
          },
          "ja-JP": {
            singular: "カスタム"
          },
          "ko-KR": {
            singular: "커스텀"
          },
          "pt-BR": {
            singular: "Customizado"
          },
          "zh-CN": {
            singular: "自定义"
          }
        }
      })
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Admins",
      dictionary: {
        es: {
          singular: "Administradores"
        },
        "de-DE": {
          singular: "Administratoren"
        },
        "fr-FR": {
          singular: "Administrateurs"
        },
        "ja-JP": {
          singular: "管理者"
        },
        "ko-KR": {
          singular: "관리자"
        },
        "pt-BR": {
          singular: "Administradores"
        },
        "zh-CN": {
          singular: "管理员"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "The number of admin users who can manage account settings, billing, and team members.",
      dictionary: {
        es: {
          singular: "El número de usuarios administradores que pueden gestionar la configuración de la cuenta, la facturación y los miembros del equipo."
        },
        "de-DE": {
          singular: "Die Anzahl der Administratoren, die Kontoeinstellungen, Abrechnung und Teammitglieder verwalten können."
        },
        "fr-FR": {
          singular: "Nombre d'administrateurs pouvant gérer les paramètres du compte, la facturation et les membres de l'équipe."
        },
        "ja-JP": {
          singular: "アカウント設定、請求、チームメンバーの管理を行える管理者ユーザーの人数。"
        },
        "ko-KR": {
          singular: "계정 설정, 청구 및 팀 구성원 관리를 할 수 있는 관리자 수입니다."
        },
        "pt-BR": {
          singular: "Número de administradores que podem gerenciar as configurações da conta, faturamento e membros da equipe."
        },
        "zh-CN": {
          singular: "可管理账户设置、计费和团队成员的管理员用户数量。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      core: !1,
      professional: !1,
      studio: "3",
      production: "10",
      enterprise: (0, _v1.translate)({
        singular: "Custom",
        dictionary: {
          es: {
            singular: "Personalizar"
          },
          "de-DE": {
            singular: "Benutzerdefiniert"
          },
          "fr-FR": {
            singular: "Personnalisé"
          },
          "ja-JP": {
            singular: "カスタム"
          },
          "ko-KR": {
            singular: "커스텀"
          },
          "pt-BR": {
            singular: "Customizado"
          },
          "zh-CN": {
            singular: "自定义"
          }
        }
      })
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Add users",
      dictionary: {
        es: {
          singular: "Agregar usuarios"
        },
        "de-DE": {
          singular: "Benutzer hinzufügen"
        },
        "fr-FR": {
          singular: "Ajoutez des utilisateurs"
        },
        "ja-JP": {
          singular: "ユーザーの追加"
        },
        "ko-KR": {
          singular: "사용자 추가"
        },
        "pt-BR": {
          singular: "Adicionar usuários"
        },
        "zh-CN": {
          singular: "添加用户"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Ability to purchase additional users for your plan.",
      dictionary: {
        es: {
          singular: "Capacidad para adquirir usuarios adicionales para su plan."
        },
        "de-DE": {
          singular: "Möglichkeit, zusätzliche Benutzer für Ihren Tarif zu erwerben."
        },
        "fr-FR": {
          singular: "Possibilité d'acheter des utilisateurs supplémentaires pour votre forfait."
        },
        "ja-JP": {
          singular: "プランに追加ユーザーを購入できる機能。"
        },
        "ko-KR": {
          singular: "요금제에 추가 사용자를 구매할 수 있는 기능입니다."
        },
        "pt-BR": {
          singular: "Capacidade de adquirir usuários adicionais para o seu plano."
        },
        "zh-CN": {
          singular: "可以为您的订阅计划购买额外用户。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      core: (0, _v1.translate)({
        singular: "Up to {AMOUNT}",
        replacements: {
          AMOUNT: 3
        },
        dictionary: {
          es: {
            singular: "Hasta {AMOUNT}"
          },
          "de-DE": {
            singular: "Bis zu {AMOUNT}"
          },
          "fr-FR": {
            singular: "Jusqu’à {AMOUNT}"
          },
          "ja-JP": {
            singular: "{AMOUNT}人まで"
          },
          "ko-KR": {
            singular: "최대 {AMOUNT}명"
          },
          "pt-BR": {
            singular: "Até {AMOUNT}"
          },
          "zh-CN": {
            singular: "最多 {AMOUNT} 个"
          }
        }
      }),
      professional: (0, _v1.translate)({
        singular: "Up to {AMOUNT}",
        replacements: {
          AMOUNT: 20
        },
        dictionary: {
          es: {
            singular: "Hasta {AMOUNT}"
          },
          "de-DE": {
            singular: "Bis zu {AMOUNT}"
          },
          "fr-FR": {
            singular: "Jusqu’à {AMOUNT}"
          },
          "ja-JP": {
            singular: "{AMOUNT}人まで"
          },
          "ko-KR": {
            singular: "최대 {AMOUNT}명"
          },
          "pt-BR": {
            singular: "Até {AMOUNT}"
          },
          "zh-CN": {
            singular: "最多 {AMOUNT} 个"
          }
        }
      }),
      studio: (0, _v1.translate)({
        singular: "Up to {AMOUNT}",
        replacements: {
          AMOUNT: 200
        },
        dictionary: {
          es: {
            singular: "Hasta {AMOUNT}"
          },
          "de-DE": {
            singular: "Bis zu {AMOUNT}"
          },
          "fr-FR": {
            singular: "Jusqu’à {AMOUNT}"
          },
          "ja-JP": {
            singular: "{AMOUNT}人まで"
          },
          "ko-KR": {
            singular: "최대 {AMOUNT}명"
          },
          "pt-BR": {
            singular: "Até {AMOUNT}"
          },
          "zh-CN": {
            singular: "最多 {AMOUNT} 个"
          }
        }
      }),
      production: (0, _v1.translate)({
        singular: "Unlimited",
        dictionary: {
          es: {
            singular: "Ilimitado"
          },
          "de-DE": {
            singular: "Unbegrenzt"
          },
          "fr-FR": {
            singular: "Illimité"
          },
          "ja-JP": {
            singular: "無制限"
          },
          "ko-KR": {
            singular: "무제한"
          },
          "pt-BR": {
            singular: "Ilimitado"
          },
          "zh-CN": {
            singular: "无限"
          }
        }
      }),
      enterprise: (0, _v1.translate)({
        singular: "Custom",
        dictionary: {
          es: {
            singular: "Personalizar"
          },
          "de-DE": {
            singular: "Benutzerdefiniert"
          },
          "fr-FR": {
            singular: "Personnalisé"
          },
          "ja-JP": {
            singular: "カスタム"
          },
          "ko-KR": {
            singular: "커스텀"
          },
          "pt-BR": {
            singular: "Customizado"
          },
          "zh-CN": {
            singular: "自定义"
          }
        }
      })
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Managed storage",
      dictionary: {
        es: {
          singular: "Almacenamiento gestionado"
        },
        "de-DE": {
          singular: "Verwalteter Speicher"
        },
        "fr-FR": {
          singular: "Stockage géré"
        },
        "ja-JP": {
          singular: "マネージドストレージ"
        },
        "ko-KR": {
          singular: "관리형 스토리지"
        },
        "pt-BR": {
          singular: "Armazenamento gerenciado"
        },
        "zh-CN": {
          singular: "托管存储"
        }
      }
    }),
    tooltip: _v1 ? (0, _v1.translate)({
      singular: "Storage for private and embeddable videos. Public non-embeddable videos do not contribute to managed storage",
      dictionary: {
        es: {
          singular: "Almacenamiento para vídeos privados e incrustables. Los vídeos públicos no incrustables no contribuyen al almacenamiento gestionado"
        },
        "de-DE": {
          singular: "Speicher für private und einbettbare Videos. Öffentliche nicht einbettbare Videos tragen nicht zum verwalteten Speicher bei"
        },
        "fr-FR": {
          singular: "Stockage pour les vidéos privées et intégrables. Les vidéos publiques non intégrables ne contribuent pas au stockage géré"
        },
        "ja-JP": {
          singular: "プライベートおよび埋め込み可能な動画のストレージ。公開の埋め込み不可動画は管理対象ストレージには含まれません"
        },
        "ko-KR": {
          singular: "비공개 및 임베드 가능한 동영상용 저장소입니다. 임베드 불가한 공개 동영상은 관리형 저장소에 포함되지 않습니다"
        },
        "pt-BR": {
          singular: "Armazenamento para vídeos privados e incorporáveis. Vídeos públicos não incorporáveis não contribuem para o armazenamento gerenciado"
        },
        "zh-CN": {
          singular: "用于私有和可嵌入视频的存储。公开的不可嵌入视频不计入托管存储"
        }
      }
    }) : (0, _v1.translate)({
      singular: "Storage for private, unlisted, and embeddable videos. Public videos non-embeddable do not contribute to managed storage",
      dictionary: {
        es: {
          singular: "Almacenamiento para videos privados, no listados e integrables. Los videos públicos no integrables no contribuyen al almacenamiento gestionado"
        },
        "de-DE": {
          singular: "Speicher für private, nicht gelistete und einbettbare Videos. Öffentliche, nicht einbettbare Videos tragen nicht zum verwalteten Speicher bei"
        },
        "fr-FR": {
          singular: "Stockage pour les vidéos privées, non répertoriées et intégrables. Les vidéos publiques non intégrables ne contribuent pas au stockage géré"
        },
        "ja-JP": {
          singular: "プライベート、非公開、埋め込み可能な動画のためのストレージ。埋め込み不可のパブリック動画は管理対象ストレージにカウントされません"
        },
        "ko-KR": {
          singular: "비공개, 미등록 및 임베드 가능한 동영상을 위한 스토리지. 임베드 불가한 공개 동영상은 관리형 스토리지에 포함되지 않습니다"
        },
        "pt-BR": {
          singular: "Armazenamento para vídeos privados, não listados e incorporáveis. Vídeos públicos não incorporáveis não contribuem para o armazenamento gerenciado"
        },
        "zh-CN": {
          singular: "用于私有、未列出和可嵌入视频的存储。公开的不可嵌入视频不计入托管存储"
        }
      }
    }),
    tiers: {
      free: _v3(_v0?.free, "1GB"),
      creator: _v3(_v0?.creator, "50GB"),
      core: _v3(_v0?.core, "300GB"),
      professional: _v3(_v0?.professional, "7TB"),
      studio: _v3(_v0?.studio, "10TB"),
      production: _v3(_v0?.production, "25TB"),
      enterprise: (0, _v1.translate)({
        singular: "Custom",
        dictionary: {
          es: {
            singular: "Personalizar"
          },
          "de-DE": {
            singular: "Benutzerdefiniert"
          },
          "fr-FR": {
            singular: "Personnalisé"
          },
          "ja-JP": {
            singular: "カスタム"
          },
          "ko-KR": {
            singular: "커스텀"
          },
          "pt-BR": {
            singular: "Customizado"
          },
          "zh-CN": {
            singular: "自定义"
          }
        }
      })
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Total storage",
      dictionary: {
        es: {
          singular: "Almacenamiento total"
        },
        "de-DE": {
          singular: "Gesamtspeicher"
        },
        "fr-FR": {
          singular: "Stockage total"
        },
        "ja-JP": {
          singular: "合計ストレージ"
        },
        "ko-KR": {
          singular: "총 저장 용량"
        },
        "pt-BR": {
          singular: "Armazenamento total"
        },
        "zh-CN": {
          singular: "总存储"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Total storage for all videos including public and non-embedded videos.",
      dictionary: {
        es: {
          singular: "Almacenamiento total para todos los videos, incluidos los videos públicos y los videos no integrados."
        },
        "de-DE": {
          singular: "Gesamtspeicher für alle Videos, einschließlich öffentlicher und nicht eingebetteter Videos."
        },
        "fr-FR": {
          singular: "Stockage total pour toutes les vidéos, y compris les vidéos publiques et les vidéos non intégrées."
        },
        "ja-JP": {
          singular: "パブリック動画や埋め込みされていない動画を含む、すべての動画の合計ストレージ。"
        },
        "ko-KR": {
          singular: "공개 및 임베드되지 않은 동영상을 포함한 모든 동영상의 총 저장 용량입니다."
        },
        "pt-BR": {
          singular: "Armazenamento total para todos os vídeos, incluindo vídeos públicos e não incorporados."
        },
        "zh-CN": {
          singular: "包括公开视频和非嵌入式视频在内的所有视频的总存储。"
        }
      }
    }),
    tiers: {
      free: _v4(_v0?.free, "1GB"),
      creator: _v4(_v0?.creator, "7TB"),
      core: _v4(_v0?.core, "7TB"),
      professional: _v4(_v0?.professional, "7TB"),
      studio: _v4(_v0?.studio, "10TB"),
      production: _v4(_v0?.production, "25TB"),
      enterprise: (0, _v1.translate)({
        singular: "Custom",
        dictionary: {
          es: {
            singular: "Personalizar"
          },
          "de-DE": {
            singular: "Benutzerdefiniert"
          },
          "fr-FR": {
            singular: "Personnalisé"
          },
          "ja-JP": {
            singular: "カスタム"
          },
          "ko-KR": {
            singular: "커스텀"
          },
          "pt-BR": {
            singular: "Customizado"
          },
          "zh-CN": {
            singular: "自定义"
          }
        }
      })
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Screen recording",
      dictionary: {
        es: {
          singular: "Grabación de pantalla"
        },
        "de-DE": {
          singular: "Bildschirmaufnahme"
        },
        "fr-FR": {
          singular: "Enregistrement d'écran"
        },
        "ja-JP": {
          singular: "画面録画"
        },
        "ko-KR": {
          singular: "화면 녹화"
        },
        "pt-BR": {
          singular: "Gravação de tela"
        },
        "zh-CN": {
          singular: "屏幕录制"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Record your screen from your browser with webcam and audio access.",
      dictionary: {
        es: {
          singular: "Grabe su pantalla desde el navegador con acceso a la cámara web y al audio."
        },
        "de-DE": {
          singular: "Zeichnen Sie Ihren Bildschirm über Ihren Browser mit Webcam- und Audio-Zugriff auf."
        },
        "fr-FR": {
          singular: "Enregistrez votre écran depuis votre navigateur avec un accès à votre webcam et votre son."
        },
        "ja-JP": {
          singular: "ウェブカメラと音声へのアクセスでブラウザーから画面を録画。"
        },
        "ko-KR": {
          singular: "웹캠 및 오디오 액세스를 통해 브라우저에서 화면을 녹화합니다."
        },
        "pt-BR": {
          singular: "Grave a tela do seu navegador com acesso à sua webcam e áudio."
        },
        "zh-CN": {
          singular: "开启网络摄像头和音频访问权限，从浏览器录制屏幕。"
        }
      }
    }),
    tiers: {
      free: (0, _v1.translate)({
        singular: "2k only",
        dictionary: {
          es: {
            singular: "Solo 2k"
          },
          "de-DE": {
            singular: "Nur 2k"
          },
          "fr-FR": {
            singular: "2k uniquement"
          },
          "ja-JP": {
            singular: "2kのみ"
          },
          "ko-KR": {
            singular: "2k 전용"
          },
          "pt-BR": {
            singular: "somente 2k"
          },
          "zh-CN": {
            singular: "仅限 2k"
          }
        }
      }),
      creator: (0, _v1.translate)({
        singular: "Unlimited",
        dictionary: {
          es: {
            singular: "Ilimitado"
          },
          "de-DE": {
            singular: "Unbegrenzt"
          },
          "fr-FR": {
            singular: "Illimité"
          },
          "ja-JP": {
            singular: "無制限"
          },
          "ko-KR": {
            singular: "무제한"
          },
          "pt-BR": {
            singular: "Ilimitado"
          },
          "zh-CN": {
            singular: "无限"
          }
        }
      }),
      core: (0, _v1.translate)({
        singular: "Unlimited",
        dictionary: {
          es: {
            singular: "Ilimitado"
          },
          "de-DE": {
            singular: "Unbegrenzt"
          },
          "fr-FR": {
            singular: "Illimité"
          },
          "ja-JP": {
            singular: "無制限"
          },
          "ko-KR": {
            singular: "무제한"
          },
          "pt-BR": {
            singular: "Ilimitado"
          },
          "zh-CN": {
            singular: "无限"
          }
        }
      }),
      professional: (0, _v1.translate)({
        singular: "Unlimited",
        dictionary: {
          es: {
            singular: "Ilimitado"
          },
          "de-DE": {
            singular: "Unbegrenzt"
          },
          "fr-FR": {
            singular: "Illimité"
          },
          "ja-JP": {
            singular: "無制限"
          },
          "ko-KR": {
            singular: "무제한"
          },
          "pt-BR": {
            singular: "Ilimitado"
          },
          "zh-CN": {
            singular: "无限"
          }
        }
      }),
      studio: (0, _v1.translate)({
        singular: "Unlimited",
        dictionary: {
          es: {
            singular: "Ilimitado"
          },
          "de-DE": {
            singular: "Unbegrenzt"
          },
          "fr-FR": {
            singular: "Illimité"
          },
          "ja-JP": {
            singular: "無制限"
          },
          "ko-KR": {
            singular: "무제한"
          },
          "pt-BR": {
            singular: "Ilimitado"
          },
          "zh-CN": {
            singular: "无限"
          }
        }
      }),
      production: (0, _v1.translate)({
        singular: "Unlimited",
        dictionary: {
          es: {
            singular: "Ilimitado"
          },
          "de-DE": {
            singular: "Unbegrenzt"
          },
          "fr-FR": {
            singular: "Illimité"
          },
          "ja-JP": {
            singular: "無制限"
          },
          "ko-KR": {
            singular: "무제한"
          },
          "pt-BR": {
            singular: "Ilimitado"
          },
          "zh-CN": {
            singular: "无限"
          }
        }
      }),
      enterprise: (0, _v1.translate)({
        singular: "Unlimited",
        dictionary: {
          es: {
            singular: "Ilimitado"
          },
          "de-DE": {
            singular: "Unbegrenzt"
          },
          "fr-FR": {
            singular: "Illimité"
          },
          "ja-JP": {
            singular: "無制限"
          },
          "ko-KR": {
            singular: "무제한"
          },
          "pt-BR": {
            singular: "Ilimitado"
          },
          "zh-CN": {
            singular: "无限"
          }
        }
      })
    }
  }, {
    text: (0, _v1.translate)({
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
    }),
    tooltip: (0, _v1.translate)({
      singular: "Produce and promote stunning virtual events and webinars with our suite of event management and production tools.",
      dictionary: {
        es: {
          singular: "Produzca y promocione eventos virtuales y seminarios web impresionantes con nuestra suite de herramientas de gestión y producción de eventos."
        },
        "de-DE": {
          singular: "Produzieren und bewerben Sie beeindruckende virtuelle Veranstaltungen und Webinare mit unserer Suite von Event-Management- und Produktionstools."
        },
        "fr-FR": {
          singular: "Créez et promouvez des événements virtuels et des webinaires époustouflants grâce à notre suite d'outils de gestion d'événements et de production."
        },
        "ja-JP": {
          singular: "当社のイベント管理および制作ツール群を利用して、印象的なバーチャルイベントやウェビナーを制作・プロモートできます。"
        },
        "ko-KR": {
          singular: "이벤트 관리 및 제작 도구 모음을 통해 인상적인 가상 이벤트와 웨비나를 제작하고 홍보하세요."
        },
        "pt-BR": {
          singular: "Produza e promova eventos virtuais e webinars impressionantes com nossa suíte de ferramentas de gerenciamento e produção de eventos."
        },
        "zh-CN": {
          singular: "使用我们的一套活动管理与制作工具，打造并推广精彩的虚拟活动和网络研讨会。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      core: !1,
      professional: (0, _v1.translate)({
        singular: "Unlimited",
        dictionary: {
          es: {
            singular: "Ilimitado"
          },
          "de-DE": {
            singular: "Unbegrenzt"
          },
          "fr-FR": {
            singular: "Illimité"
          },
          "ja-JP": {
            singular: "無制限"
          },
          "ko-KR": {
            singular: "무제한"
          },
          "pt-BR": {
            singular: "Ilimitado"
          },
          "zh-CN": {
            singular: "无限"
          }
        }
      }),
      studio: (0, _v1.translate)({
        singular: "Unlimited",
        dictionary: {
          es: {
            singular: "Ilimitado"
          },
          "de-DE": {
            singular: "Unbegrenzt"
          },
          "fr-FR": {
            singular: "Illimité"
          },
          "ja-JP": {
            singular: "無制限"
          },
          "ko-KR": {
            singular: "무제한"
          },
          "pt-BR": {
            singular: "Ilimitado"
          },
          "zh-CN": {
            singular: "无限"
          }
        }
      }),
      production: (0, _v1.translate)({
        singular: "Unlimited",
        dictionary: {
          es: {
            singular: "Ilimitado"
          },
          "de-DE": {
            singular: "Unbegrenzt"
          },
          "fr-FR": {
            singular: "Illimité"
          },
          "ja-JP": {
            singular: "無制限"
          },
          "ko-KR": {
            singular: "무제한"
          },
          "pt-BR": {
            singular: "Ilimitado"
          },
          "zh-CN": {
            singular: "无限"
          }
        }
      }),
      enterprise: (0, _v1.translate)({
        singular: "Unlimited",
        dictionary: {
          es: {
            singular: "Ilimitado"
          },
          "de-DE": {
            singular: "Unbegrenzt"
          },
          "fr-FR": {
            singular: "Illimité"
          },
          "ja-JP": {
            singular: "無制限"
          },
          "ko-KR": {
            singular: "무제한"
          },
          "pt-BR": {
            singular: "Ilimitado"
          },
          "zh-CN": {
            singular: "无限"
          }
        }
      })
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Bandwidth",
      dictionary: {
        es: {
          singular: "Ancho de banda"
        },
        "de-DE": {
          singular: "Bandbreite"
        },
        "fr-FR": {
          singular: "Bande passante"
        },
        "ja-JP": {
          singular: "転送量"
        },
        "ko-KR": {
          singular: "대역폭"
        },
        "pt-BR": {
          singular: "Largura de banda"
        },
        "zh-CN": {
          singular: "带宽"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Bandwidth is the data used in order to deliver your videos to viewers.  We’ve set the limit so that 99% of our users will never reach it. You can always track your bandwidth usage within your account. If you do end up reaching the limit for your billing period, you can upgrade to higher tiers or discuss a more suitable plan with our sales team.",
      dictionary: {
        es: {
          singular: "El ancho de banda es la cantidad de datos utilizada para entregar sus videos a los espectadores.  Hemos establecido el límite de modo que el 99% de nuestros usuarios nunca lo alcanzará. Siempre puede supervisar su uso de ancho de banda desde su cuenta. Si finalmente alcanza el límite durante su período de facturación, puede actualizar a niveles superiores o hablar con nuestro equipo de ventas para encontrar un plan más adecuado."
        },
        "de-DE": {
          singular: "Bandbreite ist die Datenmenge, die verwendet wird, um Ihre Videos an Zuschauer zu übertragen.  Wir haben das Limit so gesetzt, dass 99 % unserer Nutzer es niemals erreichen werden. Sie können Ihre Bandbreitennutzung jederzeit in Ihrem Konto verfolgen. Sollten Sie das Limit für Ihren Abrechnungszeitraum doch erreichen, können Sie auf höhere Stufen upgraden oder mit unserem Vertriebsteam über einen für Sie geeigneteren Plan sprechen."
        },
        "fr-FR": {
          singular: "La bande passante correspond aux données utilisées pour diffuser vos vidéos aux spectateurs.  Nous avons fixé la limite de sorte que 99% de nos utilisateurs ne l'atteindront jamais. Vous pouvez toujours suivre votre utilisation de la bande passante dans votre compte. Si vous atteignez la limite pour votre période de facturation, vous pouvez passer à des forfaits supérieurs ou discuter d'un plan plus adapté avec notre équipe commerciale."
        },
        "ja-JP": {
          singular: "帯域幅は、視聴者に動画を配信するために使用されるデータ量です。  99%のユーザーが上限に達することのないように上限を設定しています。アカウント内で帯域幅の使用状況を常に確認できます。請求期間内に上限に達した場合は、上位のプランにアップグレードするか、営業チームと相談してより適したプランをご検討ください。"
        },
        "ko-KR": {
          singular: "대역폭은 동영상을 시청자에게 전달하는 데 사용되는 데이터입니다.  저희는 전체 사용자의 99%가 이 한도에 도달하지 않도록 한도를 설정해 두었습니다. 계정에서 대역폭 사용량을 언제든지 확인할 수 있습니다. 청구 기간 동안 한도에 도달할 경우 상위 요금제로 업그레이드하거나 영업팀과 더 적합한 요금제에 대해 상담할 수 있습니다."
        },
        "pt-BR": {
          singular: "A largura de banda é a quantidade de dados usada para entregar seus vídeos aos espectadores.  Definimos o limite de modo que 99% dos nossos usuários nunca o alcançarão. Você sempre pode acompanhar o uso de largura de banda na sua conta. Se você acabar atingindo o limite no seu período de cobrança, pode atualizar para níveis superiores ou discutir um plano mais adequado com nossa equipe de vendas."
        },
        "zh-CN": {
          singular: "带宽是用于将你的视频传输给观众所消耗的数据。我们设置的限制以确保 99% 的用户永远不会达到该上限。你可以随时在账户中查看带宽使用情况。如果在某个计费周期内确实达到限额，你可以升级到更高的套餐，或与我们的销售团队讨论更合适的方案。"
        }
      }
    }),
    tiers: {
      free: _v5(_v0?.free, "1TB"),
      creator: _v5(_v0?.creator, "1TB"),
      core: _v5(_v0?.core, "2TB"),
      professional: _v5(_v0?.professional, "2TB"),
      studio: _v5(_v0?.studio, "36TB", "year"),
      production: _v5(_v0?.production, "120TB", "year"),
      enterprise: (0, _v1.translate)({
        singular: "Custom",
        dictionary: {
          es: {
            singular: "Personalizar"
          },
          "de-DE": {
            singular: "Benutzerdefiniert"
          },
          "fr-FR": {
            singular: "Personnalisé"
          },
          "ja-JP": {
            singular: "カスタム"
          },
          "ko-KR": {
            singular: "커스텀"
          },
          "pt-BR": {
            singular: "Customizado"
          },
          "zh-CN": {
            singular: "自定义"
          }
        }
      })
    }
  }], "getMarketingFeatures", 0, _v0 => [{
    text: (0, _v1.translate)({
      singular: "Native publishing across channels",
      dictionary: {
        es: {
          singular: "Publicación nativa en todos los canales"
        },
        "de-DE": {
          singular: "Native Veröffentlichung auf verschiedenen Kanälen"
        },
        "fr-FR": {
          singular: "Publication native sur les canaux"
        },
        "ja-JP": {
          singular: "チャンネル間でのネイティブ投稿"
        },
        "ko-KR": {
          singular: "여러 채널에 네이티브 형식 게시"
        },
        "pt-BR": {
          singular: "Publicação direta em vários canais"
        },
        "zh-CN": {
          singular: "跨频道原生发布"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Publish natively to Facebook, YouTube, LinkedIn, Twitter, Pinterest, and Shopify.",
      dictionary: {
        es: {
          singular: "Realice publicaciones nativas en Facebook, YouTube, LinkedIn, Twitter, Pinterest y Shopify."
        },
        "de-DE": {
          singular: "Native Veröffentlichung auf Facebook, YouTube, LinkedIn, Twitter, Pinterest und Shopify."
        },
        "fr-FR": {
          singular: "Publication native sur Facebook, YouTube, LinkedIn, Twitter, Pinterest et Shopify."
        },
        "ja-JP": {
          singular: "Facebook、YouTube、LinkedIn、X（旧Twitter）、Pinterest、Shopifyにネイティブ投稿します。"
        },
        "ko-KR": {
          singular: "Facebook, YouTube, LinkedIn, Twitter, Pinterest, Shopify에 네이티브 형식으로 게시합니다."
        },
        "pt-BR": {
          singular: "Faça publicações diretamente no Facebook, YouTube, LinkedIn, Twitter, Pinterest e Shopify."
        },
        "zh-CN": {
          singular: "原生发布到 Facebook、YouTube、LinkedIn、Twitter、Pinterest 和 Shopify。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Embed videos anywhere",
      dictionary: {
        es: {
          singular: "Inserción de videos en cualquier lugar"
        },
        "de-DE": {
          singular: "Videos überall einbetten"
        },
        "fr-FR": {
          singular: "Intégration de vidéos sur les supports de votre choix"
        },
        "ja-JP": {
          singular: "どこにでも自由に動画を埋め込む"
        },
        "ko-KR": {
          singular: "자유로운 동영상 임베드"
        },
        "pt-BR": {
          singular: "Incorporação de vídeos em qualquer lugar"
        },
        "zh-CN": {
          singular: "随处嵌入视频"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Post/embed your video or event on a page outside Vimeo.",
      dictionary: {
        es: {
          singular: "Publique/inserte su video o evento en una página fuera de Vimeo."
        },
        "de-DE": {
          singular: "Posten Sie oder betten Sie Ihr Video oder Event auf einer Website außerhalb von Vimeo ein."
        },
        "fr-FR": {
          singular: "Publiez/intégrez votre vidéo ou événement sur une page externe à Vimeo."
        },
        "ja-JP": {
          singular: "Vimeo以外のページに動画やイベントを投稿 / 埋め込み。"
        },
        "ko-KR": {
          singular: "Vimeo 외부 페이지에 동영상 또는 이벤트를 게시/임베드합니다."
        },
        "pt-BR": {
          singular: "Publique/incorpore seus vídeos ou eventos em uma página fora do Vimeo."
        },
        "zh-CN": {
          singular: "在 Vimeo 以外的页面发布/嵌入您的视频或活动。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Video showcases",
      dictionary: {
        es: {
          singular: "Presentaciones en video"
        },
        "de-DE": {
          singular: "Video-Präsentationen"
        },
        "fr-FR": {
          singular: "Présentations vidéo"
        },
        "ja-JP": {
          singular: "動画ショーケース"
        },
        "ko-KR": {
          singular: "동영상 쇼케이스"
        },
        "pt-BR": {
          singular: "Vitrines de vídeo"
        },
        "zh-CN": {
          singular: "视频展示"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Organize, present and share videos in a professional gallery. On Standard and above, customize with your own branding.",
      dictionary: {
        es: {
          singular: "Organice, presente y comparta videos en una galería profesional. Con Standard y planes superiores, personalícelo con su propia marca."
        },
        "de-DE": {
          singular: "Organisieren, präsentieren und teilen Sie Videos in einer professionellen Galerie. Ab Standard und höher können Sie mit Ihrem eigenen Branding anpassen."
        },
        "fr-FR": {
          singular: "Organisez, présentez et partagez des vidéos dans une galerie professionnelle. Les versions Standard et supérieures proposent des options de personnalisation avec votre propre image de marque."
        },
        "ja-JP": {
          singular: "プロフェッショナルなギャラリーで動画を整理し、公開し、共有しましょう。Standard以上では、独自のブランドでカスタマイズできます。"
        },
        "ko-KR": {
          singular: "전문적인 갤러리에서 동영상을 정리하고, 선보이고, 공유하세요. Standard 요금제 이상부터 자체 브랜딩으로 커스텀할 수 있습니다."
        },
        "pt-BR": {
          singular: "Organize, apresente e compartilhe vídeos em uma galeria profissional. Nos planos Standard e superiores, personalize com sua própria marca."
        },
        "zh-CN": {
          singular: "在专业图库中组织、展示和共享视频。在标准版及更高版本中，您可以自定义品牌元素。"
        }
      }
    }),
    tiers: {
      free: (0, _v1.translate)({
        singular: "Create {AMOUNT} showcases",
        replacements: {
          AMOUNT: 5
        },
        dictionary: {
          es: {
            singular: "Crear {AMOUNT} presentaciones"
          },
          "de-DE": {
            singular: "{AMOUNT} Präsentationen erstellen"
          },
          "fr-FR": {
            singular: "Créer {AMOUNT}  des présentations"
          },
          "ja-JP": {
            singular: "ショーケースを{AMOUNT}つ作成する"
          },
          "ko-KR": {
            singular: "쇼케이스 {AMOUNT}개 만들기"
          },
          "pt-BR": {
            singular: "Criar {AMOUNT} vitrines"
          },
          "zh-CN": {
            singular: "创建 {AMOUNT} 个橱窗"
          }
        }
      }),
      creator: !0,
      core: !0,
      professional: !0,
      studio: !0,
      production: !0,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Embed videos as GIFs in email",
      dictionary: {
        es: {
          singular: "Insertar videos como GIF en correos electrónicos"
        },
        "de-DE": {
          singular: "Videos als GIFs in E-Mail einbetten"
        },
        "fr-FR": {
          singular: "Intégrer des vidéos sous forme de GIF dans les e-mails"
        },
        "ja-JP": {
          singular: "動画をGIFとしてメールに埋め込む"
        },
        "ko-KR": {
          singular: "이메일에 동영상 GIF 임베드"
        },
        "pt-BR": {
          singular: "Incorporar vídeos como GIFs em e-mails"
        },
        "zh-CN": {
          singular: "将视频作为 GIF 嵌入到电子邮件中"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Create GIFs from your favorite videos and easily embed within your emails.",
      dictionary: {
        es: {
          singular: "Cree GIF de sus videos favoritos e insértelos fácilmente en sus correos electrónicos."
        },
        "de-DE": {
          singular: "Erstellen Sie aus Ihren Lieblingsvideos GIFs, die Sie anschließend ganz einfach in Ihre E-Mails einbetten können."
        },
        "fr-FR": {
          singular: "Créez des GIF à partir de vos vidéos préférées et intégrez-les facilement à vos e-mails."
        },
        "ja-JP": {
          singular: "お好きな動画からGIFを作成して、簡単にEメールに埋め込むことができます。"
        },
        "ko-KR": {
          singular: "좋아하는 동영상으로 GIF를 만들고 이메일에 쉽게 임베드할 수 있습니다."
        },
        "pt-BR": {
          singular: "Crie GIFs dos seus vídeos favoritos e incorpore-os facilmente aos seus e-mails."
        },
        "zh-CN": {
          singular: "使用您喜爱的视频创建 GIF，并轻松嵌入到您的电子邮件中。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Custom video link",
      dictionary: {
        es: {
          singular: "Enlaces a videos personalizados"
        },
        "de-DE": {
          singular: "Benutzerdefinierter Video-Link"
        },
        "fr-FR": {
          singular: "Liens vidéo personnalisés"
        },
        "ja-JP": {
          singular: "カスタム動画リンク"
        },
        "ko-KR": {
          singular: "동영상 커스텀 링크"
        },
        "pt-BR": {
          singular: "Customização de link de vídeo"
        },
        "zh-CN": {
          singular: "自定义视频链接"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Create your own custom URL for any of your videos.",
      dictionary: {
        es: {
          singular: "Cree su propia URL personalizada para cualquiera de sus videos."
        },
        "de-DE": {
          singular: "Erstellen Sie für alle Ihre Videos eine eigene, benutzerdefinierte URL."
        },
        "fr-FR": {
          singular: "Créez votre propre URL personnalisée pour vos vidéos."
        },
        "ja-JP": {
          singular: "動画用に独自のカスタムURLを作成。"
        },
        "ko-KR": {
          singular: "동영상의 커스텀 URL을 생성합니다."
        },
        "pt-BR": {
          singular: "Crie URLs customizados para todos os seus vídeos."
        },
        "zh-CN": {
          singular: "为您的任何视频创建自己的自定义 URL。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_PAID_PLANS
  }, {
    text: (0, _v1.translate)({
      singular: "Sell videos as a subscription service",
      dictionary: {
        es: {
          singular: "Venta de videos como un servicio de suscripción"
        },
        "de-DE": {
          singular: "Videos als Abo-Dienst verkaufen"
        },
        "fr-FR": {
          singular: "Vente de vidéos en tant que service d'abonnement"
        },
        "ja-JP": {
          singular: "サブスクリプションサービスとして動画を販売"
        },
        "ko-KR": {
          singular: "구독 서비스로 동영상 판매"
        },
        "pt-BR": {
          singular: "Venda vídeos como serviço de assinatura"
        },
        "zh-CN": {
          singular: "作为订阅服务的形式销售视频"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Use Vimeo OTT to earn money from your on-demand and live videos.",
      dictionary: {
        es: {
          singular: "Use Vimeo OTT para ganar dinero con sus videos On Demand y en vivo."
        },
        "de-DE": {
          singular: "Nutzen Sie Vimeo OTT, um mit Ihren On-Demand- und Live-Videos Geld zu verdienen."
        },
        "fr-FR": {
          singular: "Choisissez Vimeo OTT pour gagner de l'argent avec vos vidéos à la demande et en direct."
        },
        "ja-JP": {
          singular: "Vimeo OTTを使用して、オンデマンドとライブ動画から収益を上げましょう。"
        },
        "ko-KR": {
          singular: "Vimeo OTT를 사용하여 온디맨드･라이브 동영상으로 수익을 창출하세요."
        },
        "pt-BR": {
          singular: "Use o Vimeo OTT para ganhar dinheiro com seus vídeos On Demand e ao vivo."
        },
        "zh-CN": {
          singular: "使用 Vimeo OTT 将您的点播和直播视频变现。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Video SEO",
      dictionary: {
        es: {
          singular: "SEO de videos"
        },
        "de-DE": {
          singular: "Video-SEO"
        },
        "fr-FR": {
          singular: "Référencement des vidéos"
        },
        "ja-JP": {
          singular: "動画SEO"
        },
        "ko-KR": {
          singular: "동영상 SEO"
        },
        "pt-BR": {
          singular: "SEO de vídeo"
        },
        "zh-CN": {
          singular: "视频 SEO"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Optimize your public videos to make them more discoverable on Google Search.",
      dictionary: {
        es: {
          singular: "Optimice sus videos públicos para que se puedan encontrar mejor en las búsquedas de Google."
        },
        "de-DE": {
          singular: "Optimiere deine öffentlichen Videos, damit sie in der Google Suche schneller gefunden werden."
        },
        "fr-FR": {
          singular: "Optimisez vos vidéos publiques pour améliorer leur visibilité dans les résultats de recherche Google."
        },
        "ja-JP": {
          singular: "Google 検索でより表示されやすくなるよう公開した動画を最適化します。"
        },
        "ko-KR": {
          singular: "공개 동영상을 최적화하여 Google 검색에서 더 쉽게 검색되게 할 수 있습니다."
        },
        "pt-BR": {
          singular: "Otimize seus vídeos públicos para ficar mais fácil encontrá-los em buscas no Google."
        },
        "zh-CN": {
          singular: "优化您的公开视频，让 Google 搜索更容易找到它们。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Showcase SEO",
      dictionary: {
        es: {
          singular: "SEO de presentación"
        },
        "de-DE": {
          singular: "SEO für Präsentationen"
        },
        "fr-FR": {
          singular: "Optimisation pour les moteurs de recherche des présentations"
        },
        "ja-JP": {
          singular: "ショーケースSEO"
        },
        "ko-KR": {
          singular: "쇼케이스 SEO"
        },
        "pt-BR": {
          singular: "SEO da Vitrine"
        },
        "zh-CN": {
          singular: "橱窗搜索引擎优化"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Optimize your public showcases to make them more discoverable on Google Search.",
      dictionary: {
        es: {
          singular: "Optimice sus presentaciones públicas para que se puedan encontrar mejor en las búsquedas de Google."
        },
        "de-DE": {
          singular: "Optimiere deine öffentlichen Präsentationen, damit sie in der Google Suche schneller gefunden werden."
        },
        "fr-FR": {
          singular: "Optimisez vos présentations publiques pour améliorer leur visibilité dans les résultats de recherche Google."
        },
        "ja-JP": {
          singular: "Google検索でより表示されやすくなるよう公開したショーケースを最適化。"
        },
        "ko-KR": {
          singular: "공개 쇼케이스를 최적화하여 Google 검색에서 더 쉽게 찾을 수 있습니다."
        },
        "pt-BR": {
          singular: "Otimize suas vitrines públicas para ficar mais fácil de achá-las na busca do Google."
        },
        "zh-CN": {
          singular: "优化您的公开橱窗，让 Google 搜索更容易找到它们。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Custom cards and calls-to-action in the player",
      dictionary: {
        es: {
          singular: "Tarjetas personalizadas y llamadas a la acción en el reproductor"
        },
        "de-DE": {
          singular: "Benutzerdefinierte Karten und Handlungsaufrufe im Player"
        },
        "fr-FR": {
          singular: "Cartes personnalisées et appels à l'action dans le player"
        },
        "ja-JP": {
          singular: "プレーヤーのカスタムカードとCTA機能"
        },
        "ko-KR": {
          singular: "플레이어 내 커스텀 카드와 콜 투 액션"
        },
        "pt-BR": {
          singular: "Cartões personalizados e chamadas para ação no player"
        },
        "zh-CN": {
          singular: "播放器中的自定义卡片和行动号召"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Add call-to-action buttons and end cards to your videos.",
      dictionary: {
        es: {
          singular: "Agregue botones de llamada a la acción y tarjetas finales a sus videos."
        },
        "de-DE": {
          singular: "Fügen Sie Ihren Videos Call-to-Action-Buttons und Endkarten hinzu."
        },
        "fr-FR": {
          singular: "Ajoutez des boutons d'appel à l'action et des cartes de fin à vos vidéos."
        },
        "ja-JP": {
          singular: "動画にCTAボタンとエンドカードを追加。"
        },
        "ko-KR": {
          singular: "동영상에 콜 투 액션 버튼과 종료 카드를 추가합니다."
        },
        "pt-BR": {
          singular: "Adicione botões de CTA e cartões finais aos seus vídeos."
        },
        "zh-CN": {
          singular: "在视频中添加行动号召按钮和结束卡。"
        }
      }
    }),
    tiers: _v0 ? _v2.REPACKAGING_PRO_AND_ABOVE : _v2.REPACKAGING_PAID_PLANS_EXCEPT_CORE
  }, {
    text: (0, _v1.translate)({
      singular: "Lead capture with custom forms",
      dictionary: {
        es: {
          singular: "Captación de clientes potenciales con formularios personalizados"
        },
        "de-DE": {
          singular: "Erfassung mit benutzerdefinierten Formularen"
        },
        "fr-FR": {
          singular: "Collecte d'opportunités commerciales grâce à des formulaires personnalisés"
        },
        "ja-JP": {
          singular: "カスタムフォームを使用したリードキャプチャ"
        },
        "ko-KR": {
          singular: "커스텀 양식을 통한 리드 수집"
        },
        "pt-BR": {
          singular: "Captura de leads com formulários customizados"
        },
        "zh-CN": {
          singular: "使用自定义表单捕获潜在客户"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Add custom form fields to your video or showcase to collect viewer information.",
      dictionary: {
        es: {
          singular: "Agregue campos de formulario personalizados a su video o presentación para recopilar la información de los espectadores."
        },
        "de-DE": {
          singular: "Fügen Sie Ihrem Video oder Ihrer Präsentation benutzerdefinierte Formularfelder hinzu, um Informationen über Zuschauende zu sammeln."
        },
        "fr-FR": {
          singular: "Ajoutez des champs de formulaire personnalisés à vos vidéos et présentations pour recueillir des informations sur les spectateurs."
        },
        "ja-JP": {
          singular: "動画またはショーケースにカスタムフォーム欄を追加して、視聴者情報を収集します。"
        },
        "ko-KR": {
          singular: "동영상 또는 쇼케이스에 커스텀 양식 필드를 추가하여 뷰어 정보를 수집하세요."
        },
        "pt-BR": {
          singular: "Adicione campos de formulário personalizados ao seu vídeo ou vitrine para coletar informações dos espectadores."
        },
        "zh-CN": {
          singular: "在您的视频或展示中添加自定义表单字段以收集观众信息。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_PRO_AND_ABOVE
  }, {
    text: (0, _v1.translate)({
      singular: "Marketing Integrations",
      dictionary: {
        es: {
          singular: "Integraciones de marketing"
        },
        "de-DE": {
          singular: "Marketing-Integrationen"
        },
        "fr-FR": {
          singular: "Intégrations marketing"
        },
        "ja-JP": {
          singular: "マーケティングの統合"
        },
        "ko-KR": {
          singular: "마케팅 통합"
        },
        "pt-BR": {
          singular: "Integrações de Marketing"
        },
        "zh-CN": {
          singular: "营销集成"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Integrate with your preferred marketing automation platform e.g. Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor",
      dictionary: {
        es: {
          singular: "Intégrelo con su plataforma de automatización de marketing preferida, por ejemplo, Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor"
        },
        "de-DE": {
          singular: "Integrationen mit Ihren bevorzugten Marketing-Automatisierungsplattformen, z. B. Constant Contact, HubSpot, Mailchimp, Keap, Campaign Monitor"
        },
        "fr-FR": {
          singular: "Bénéficiez d'une intégration avec votre plateforme d'automatisation marketing préférée (par ex., Constant Contact, Hubspot, Mailchimp, Keap ou Campaign Monitor)"
        },
        "ja-JP": {
          singular: "お好きなマーケティング自動化プラットフォームとの統合が可能です。（例：Constant Contact、Hubspot、Mailchimp、Keap、Campaign Monitor）"
        },
        "ko-KR": {
          singular: "자주 쓰는 마케팅 자동화 플랫폼과 통합합니다(예: Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor)."
        },
        "pt-BR": {
          singular: "Faça a integração com a plataforma de automação de marketing de sua preferência, como Constant Contact, HubSpot, Mailchimp, Keap, Campaign Monitor"
        },
        "zh-CN": {
          singular: "与您首选的营销自动化平台集成，例如 Constant Contact、Hubspot、Mailchimp、Keap、Campaign Monitor"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: "Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor",
      studio: "Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor",
      production: "Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor",
      enterprise: "Marketo"
    }
  }], "getPrivacyFeatures", 0, (_v0, _v1) => [{
    text: (0, _v1.translate)({
      singular: "Two-Factor Authentication (2FA)",
      dictionary: {
        es: {
          singular: "Autenticación de dos factores (2FA)"
        },
        "de-DE": {
          singular: "Zwei-Faktor-Authentifizierung (2FA)"
        },
        "fr-FR": {
          singular: "Authentification à deux facteurs (2FA)"
        },
        "ja-JP": {
          singular: "二段階認証（2FA）"
        },
        "ko-KR": {
          singular: "2단계 인증 (2FA)"
        },
        "pt-BR": {
          singular: "Autenticação de Dois Fatores (2FA)"
        },
        "zh-CN": {
          singular: "双因素验证 (2FA)"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Enable 2FA to protect your account from unauthorized access.",
      dictionary: {
        es: {
          singular: "Active la 2FA para proteger su cuenta de accesos no autorizados."
        },
        "de-DE": {
          singular: "Aktivieren Sie Zwei-Faktor-Authentifizierung (2FA), um Ihr Konto vor unbefugtem Zugriff zu schützen."
        },
        "fr-FR": {
          singular: "Activez l'authentification à deux facteurs pour protéger votre compte contre les accès non autorisés."
        },
        "ja-JP": {
          singular: "二段階認証（2FA）を有効にして、不正アクセスからアカウントを保護。"
        },
        "ko-KR": {
          singular: "2FA를 활성화하여 무단 액세스로부터 계정을 보호합니다."
        },
        "pt-BR": {
          singular: "Ative o método de autenticação 2FA para proteger sua conta contra acesso não autorizado."
        },
        "zh-CN": {
          singular: "启用 2FA，防止他人未经授权访问您的帐户。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Password protection",
      dictionary: {
        es: {
          singular: "Protección por contraseña"
        },
        "de-DE": {
          singular: "Kennwortschutz"
        },
        "fr-FR": {
          singular: "Protection par mot de passe"
        },
        "ja-JP": {
          singular: "動画のパスワード保護"
        },
        "ko-KR": {
          singular: "비밀번호로 동영상 보호"
        },
        "pt-BR": {
          singular: "Proteção com senha"
        },
        "zh-CN": {
          singular: "密码保护"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Require viewers to enter a password to access your videos or live events.",
      dictionary: {
        es: {
          singular: "Exija a los espectadores que ingresen una contraseña para acceder a sus videos o eventos en vivo."
        },
        "de-DE": {
          singular: "Fordern Sie Zuschauende auf, ein Kennwort einzugeben, um Zugang zu Ihren Videos oder Live-Events zu erhalten."
        },
        "fr-FR": {
          singular: "Demandez aux spectateurs de saisir un mot de passe pour accéder à vos vidéos ou événements en direct."
        },
        "ja-JP": {
          singular: "視聴者の動画やライブイベントへのアクセス時にパスワードの入力を要求する。"
        },
        "ko-KR": {
          singular: "시청자가 동영상이나 라이브 이벤트에 액세스하려면 비밀번호를 입력해야 합니다."
        },
        "pt-BR": {
          singular: "Exija que os espectadores usem uma senha para acessar seus vídeos ou eventos ao vivo."
        },
        "zh-CN": {
          singular: "要求观众输入密码才能访问您的视频或直播活动。"
        }
      }
    }),
    tiers: _v0 ? _v2.REPACKAGING_PRO_AND_ABOVE : _v2.REPACKAGING_PAID_PLANS
  }, {
    text: (0, _v1.translate)({
      singular: "Unlisted links for sharing",
      dictionary: {
        es: {
          singular: "Enlaces no listados para compartir"
        },
        "de-DE": {
          singular: "Nicht gelistete Links zum Teilen"
        },
        "fr-FR": {
          singular: "Liens non répertoriés pour le partage"
        },
        "ja-JP": {
          singular: "共有用の非公開リンク"
        },
        "ko-KR": {
          singular: "공유용 비공개 링크"
        },
        "pt-BR": {
          singular: "Links não listados para compartilhamento"
        },
        "zh-CN": {
          singular: "用于共享的未列出链接"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Share your videos with a link that is not searchable on Google or Vimeo.",
      dictionary: {
        es: {
          singular: "Comparta sus videos con un enlace que no se pueda buscar en Google o Vimeo."
        },
        "de-DE": {
          singular: "Teilen Sie Ihre Videos über einen Link, der über Google oder Vimeo nicht auffindbar ist."
        },
        "fr-FR": {
          singular: "Partagez vos vidéos à l'aide d'un lien qui n'apparaît pas dans les résultats de recherche Google ou Vimeo."
        },
        "ja-JP": {
          singular: "GoogleやVimeoで検索できないリンクで動画を共有。"
        },
        "ko-KR": {
          singular: "Google이나 Vimeo에서는 검색되지 않는 링크로 동영상을 공유합니다."
        },
        "pt-BR": {
          singular: "Compartilhe seus vídeos com links que não podem ser encontrados no Google nem no Vimeo."
        },
        "zh-CN": {
          singular: "使用无法在 Google 或 Vimeo 上搜索到的链接分享您的视频。"
        }
      }
    }),
    tiers: _v0 || _v1 ? _v2.REPACKAGING_CORE_AND_ABOVE : _v2.REPACKAGING_PAID_PLANS
  }, {
    text: (0, _v1.translate)({
      singular: "Embed domain level privacy",
      dictionary: {
        es: {
          singular: "Incorpore privacidad a nivel de dominio"
        },
        "de-DE": {
          singular: "Integriere Datenschutz auf Domain-Ebene."
        },
        "fr-FR": {
          singular: "Intégrer la confidentialité au niveau du domaine"
        },
        "ja-JP": {
          singular: "埋め込み動画のドメインレベルでのプライバシー"
        },
        "ko-KR": {
          singular: "도메인 수준 프라이버시 임베드"
        },
        "pt-BR": {
          singular: "Incorpore privacidade no nível de domínio"
        },
        "zh-CN": {
          singular: "嵌入域名级隐私"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Restrict access to your embedded videos based on domain name.",
      dictionary: {
        es: {
          singular: "Restrinja el acceso a sus videos insertados en función del nombre del dominio."
        },
        "de-DE": {
          singular: "Beschränke den Zugriff auf deine eingebetteten Videos anhand des Domain-Namens."
        },
        "fr-FR": {
          singular: "Limitez l’accès à vos vidéos intégrées en fonction du nom de domaine."
        },
        "ja-JP": {
          singular: "ドメイン名ごとに埋め込み動画のへのアクセスを制限。"
        },
        "ko-KR": {
          singular: "임베드된 동영상에 대한 액세스를 도메인 이름 기반으로 제한합니다."
        },
        "pt-BR": {
          singular: "Restrinja o acesso aos seus vídeos incorporados com base no nome do domínio."
        },
        "zh-CN": {
          singular: "根据域名限制对嵌入视频的访问。"
        }
      }
    }),
    tiers: _v0 || _v1 ? _v2.REPACKAGING_CORE_AND_ABOVE : _v2.REPACKAGING_PAID_PLANS
  }, {
    text: (0, _v1.translate)({
      singular: "Restrict video access",
      dictionary: {
        es: {
          singular: "Acceso restringido a los videos"
        },
        "de-DE": {
          singular: "Videozugriff beschränken"
        },
        "fr-FR": {
          singular: "Accès aux vidéos restreint"
        },
        "ja-JP": {
          singular: "動画アクセスの制限"
        },
        "ko-KR": {
          singular: "동영상 액세스 제한"
        },
        "pt-BR": {
          singular: "Restrição de acesso ao vídeo"
        },
        "zh-CN": {
          singular: "限制视频访问"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Restrict video access to specific people.",
      dictionary: {
        es: {
          singular: "Restrinja el acceso a los videos a personas específicas."
        },
        "de-DE": {
          singular: "Beschränke den Videozugriff auf bestimmte Personen."
        },
        "fr-FR": {
          singular: "Limitez l’accès à vos vidéos pour certaines personnes."
        },
        "ja-JP": {
          singular: "特定の人に対し動画アクセスを制限。"
        },
        "ko-KR": {
          singular: "지정된 사람들만 동영상에 액세스할 수 있도록 제한합니다."
        },
        "pt-BR": {
          singular: "Restrinja o acesso ao vídeo para pessoas específicas."
        },
        "zh-CN": {
          singular: "将视频访问权限限制为特定用户。"
        }
      }
    }),
    tiers: _v0 ? _v2.REPACKAGING_PRO_AND_ABOVE : _v2.REPACKAGING_PAID_PLANS
  }, {
    text: (0, _v1.translate)({
      singular: "Digital rights management (DRM)",
      dictionary: {
        es: {
          singular: "Gestión de derechos digitales (DRM)"
        },
        "de-DE": {
          singular: "Digital Rights Management (DRM)"
        },
        "fr-FR": {
          singular: "Gestion des droits numériques (DRM)"
        },
        "ja-JP": {
          singular: "デジタル著作権管理 (DRM)"
        },
        "ko-KR": {
          singular: "디지털 저작권 관리(DRM)"
        },
        "pt-BR": {
          singular: "Gerenciamento de direitos digitais (DRM)"
        },
        "zh-CN": {
          singular: "数字版权管理（DRM）"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Protect videos from unauthorized access by blocking viewer downloads and screen recording.",
      dictionary: {
        es: {
          singular: "Proteja los videos del acceso no autorizado bloqueando las descargas de los espectadores y la grabación de pantalla."
        },
        "de-DE": {
          singular: "Schützen Sie Videos vor unberechtigtem Zugriff, indem Sie Downloads und Bildschirmaufnahmen durch Zuschauende blockieren."
        },
        "fr-FR": {
          singular: "Protégez les vidéos contre les accès non autorisés en bloquant les téléchargements et l'enregistrement de l'écran."
        },
        "ja-JP": {
          singular: "視聴者のダウンロードと画面録画をブロックすることで、不正アクセスから動画を保護します。"
        },
        "ko-KR": {
          singular: "뷰어의 다운로드 및 화면 녹화를 차단하여 무단 액세스로부터 동영상을 보호합니다."
        },
        "pt-BR": {
          singular: "Proteja os vídeos contra acesso não autorizado bloqueando os downloads dos espectadores e a gravação de tela."
        },
        "zh-CN": {
          singular: "通过阻止观众下载和屏幕录制来保护视频免受未经授权的访问。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Geo-blocking",
      dictionary: {
        es: {
          singular: "Bloqueo geográfico"
        },
        "de-DE": {
          singular: "Geoblocking"
        },
        "fr-FR": {
          singular: "Blocage géographique"
        },
        "ja-JP": {
          singular: "地域別ブロック"
        },
        "ko-KR": {
          singular: "지역 차단"
        },
        "pt-BR": {
          singular: "Bloqueio geográfico"
        },
        "zh-CN": {
          singular: "地理封锁"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Restrict access to videos (VOD and live) by location.",
      dictionary: {
        es: {
          singular: "Restrinja el acceso a los videos (VOD y en vivo) por ubicación."
        },
        "de-DE": {
          singular: "Beschränken Sie den Zugriff auf Videos (VOD und Live) nach Standort."
        },
        "fr-FR": {
          singular: "Limitez l'accès aux vidéos (VOD et en direct) en fonction du lieu."
        },
        "ja-JP": {
          singular: "場所ごとに動画（VODおよびライブ）へのアクセスを制限します。"
        },
        "ko-KR": {
          singular: "위치별로 동영상(VOD 및 라이브) 액세스를 제한하세요."
        },
        "pt-BR": {
          singular: "Restrinja o acesso a vídeos (VOD e ao vivo) por localização."
        },
        "zh-CN": {
          singular: "按位置限制对视频（视频点播和直播）的访问。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Custom Subdomain",
      dictionary: {
        es: {
          singular: "Subdominio personalizado"
        },
        "de-DE": {
          singular: "Benutzerdefinierte Subdomain"
        },
        "fr-FR": {
          singular: "Sous-domaine personnalisé"
        },
        "ja-JP": {
          singular: "カスタムサブドメイン"
        },
        "ko-KR": {
          singular: "커스텀 하위 도메인"
        },
        "pt-BR": {
          singular: "Subdomínio personalizado"
        },
        "zh-CN": {
          singular: "自定义子域名"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Use a personalized web address on a subdomain dedicated to your organization.",
      dictionary: {
        es: {
          singular: "Use una dirección web personalizada en un subdominio dedicado a su organización."
        },
        "de-DE": {
          singular: "Verwenden Sie eine personalisierte Webadresse auf einer Subdomain für Ihr Unternehmen."
        },
        "fr-FR": {
          singular: "Utilisez une adresse Web personnalisée avec un sous-domaine dédié à votre organisation."
        },
        "ja-JP": {
          singular: "組織専用のサブドメインにパーソナライズされたウェブアドレスを使用します。"
        },
        "ko-KR": {
          singular: "조직 전용 하위 도메인에서 맞춤형 웹 주소를 사용하세요."
        },
        "pt-BR": {
          singular: "Use um endereço web personalizado em um subdomínio dedicado à sua organização."
        },
        "zh-CN": {
          singular: "在贵组织的专属子域上使用个性化 Web 地址。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Data residency",
      dictionary: {
        es: {
          singular: "Residencia de datos"
        },
        "de-DE": {
          singular: "Datenresidenz"
        },
        "fr-FR": {
          singular: "Localisation des données"
        },
        "ja-JP": {
          singular: "データレジデンシー"
        },
        "ko-KR": {
          singular: "데이터 상주 위치"
        },
        "pt-BR": {
          singular: "Residência de dados"
        },
        "zh-CN": {
          singular: "数据驻留"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Choose between storing videos in the United States or in Europe.",
      dictionary: {
        es: {
          singular: "Elija entre almacenar los videos en los Estados Unidos o en Europa."
        },
        "de-DE": {
          singular: "Wählen Sie, ob Sie Videos in den USA oder in Europa speichern wollen."
        },
        "fr-FR": {
          singular: "Choisissez de stocker vos vidéos aux États-Unis ou en Europe."
        },
        "ja-JP": {
          singular: "動画の保存場所を米国またはヨーロッパから選択します。"
        },
        "ko-KR": {
          singular: "미국 또는 유럽 중 동영상 저장 위치를 선택하세요."
        },
        "pt-BR": {
          singular: "Escolha entre armazenar vídeos nos Estados Unidos ou na Europa."
        },
        "zh-CN": {
          singular: "选择在美国或欧洲存储视频。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Audit logs (CSV/API)",
      dictionary: {
        es: {
          singular: "Registros de auditoría (CSV/API)"
        },
        "de-DE": {
          singular: "Audit-Protokolle (CSV/API)"
        },
        "fr-FR": {
          singular: "Journaux d'audit (CSV/API)"
        },
        "ja-JP": {
          singular: "監査ログ（CSV/API）"
        },
        "ko-KR": {
          singular: "감사 로그(CSV/API)"
        },
        "pt-BR": {
          singular: "Registros de fiscalização (CSV/API)"
        },
        "zh-CN": {
          singular: "审计日志 (CSV/API)"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Ability to generate audit logs to enable review of team activity and maintain records for compliance purposes.",
      dictionary: {
        es: {
          singular: "Capacidad de generar registros de auditoría para permitir la revisión de la actividad del equipo y mantener registros con fines de cumplimiento."
        },
        "de-DE": {
          singular: "Möglichkeit zur Erstellung von Audit-Protokollen, um die Überprüfung von Teamaktivitäten zu ermöglichen und Aufzeichnungen für Compliance-Zwecke zu führen."
        },
        "fr-FR": {
          singular: "Possibilité de générer des journaux d'audit pour permettre l'examen de l'activité de l'équipe et conserver des dossiers à des fins de conformité."
        },
        "ja-JP": {
          singular: "監査ログを生成してチームの活動をレビューし、コンプライアンス目的で記録を維持できるようにする機能。"
        },
        "ko-KR": {
          singular: "감사 로그 생성 기능을 통해 팀 활동을 검토하고 규정 준수를 위한 기록을 유지할 수 있습니다."
        },
        "pt-BR": {
          singular: "Permite gerar registros de fiscalização para análise da atividade da equipe e manutenção de registros para fins de conformidade."
        },
        "zh-CN": {
          singular: "能够生成审计日志，支持为合规目的审查团队活动，保留活动记录。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "SOC 2 Type II Report",
      dictionary: {
        es: {
          singular: "Informe SOC 2 de tipo II"
        },
        "de-DE": {
          singular: "SOC-2-Type-II-Bericht"
        },
        "fr-FR": {
          singular: "Certification SOC 2 de type 2"
        },
        "ja-JP": {
          singular: "SOC 2 タイプ II レポート"
        },
        "ko-KR": {
          singular: "SOC 2 유형 II 보고서"
        },
        "pt-BR": {
          singular: "Relatório SOC 2 Tipo 2"
        },
        "zh-CN": {
          singular: "SOC 2 Type II 报告"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Access to the industry-standard report that captures how Vimeo safeguards customer data and assesses how well those controls are operating.",
      dictionary: {
        es: {
          singular: "Acceso al informe estándar del sector que registra el modo en que Vimeo protege los datos de los clientes y evalúa el funcionamiento de esos controles."
        },
        "de-DE": {
          singular: "Zugang zu einem Bericht nach Branchenstandard, der festhält, wie Vimeo Kundendaten schützt, und bewertet, wie gut diese Kontrollen funktionieren."
        },
        "fr-FR": {
          singular: "Accès au rapport sur les normes du secteur qui décrit la manière dont Vimeo protège les données des clients et évalue le bon fonctionnement des contrôles mis en place."
        },
        "ja-JP": {
          singular: "Vimeoの顧客データの保護方法とそれらの制御機能を評価する業界標準レポートへのアクセス。"
        },
        "ko-KR": {
          singular: "업계 표준 보고서에 액세스하여 Vimeo의 고객 데이터 보호 방식과 이러한 제어의 작동 상태 평가 결과를 확인합니다."
        },
        "pt-BR": {
          singular: "Acesso ao relatório padrão do setor que captura como o Vimeo protege os dados dos clientes e avalia a qualidade da operação desses controles."
        },
        "zh-CN": {
          singular: "访问行业标准报告，了解 Vimeo 如何保护客户数据，并评估这些控制措施的效果。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Grant folder and video access to groups",
      dictionary: {
        es: {
          singular: "Permita acceso por grupos a carpetas y videos"
        },
        "de-DE": {
          singular: "Gruppen den Zugriff auf Ordner und Videos ermöglichen"
        },
        "fr-FR": {
          singular: "Accorder l’accès aux dossiers et aux vidéos à des groupes"
        },
        "ja-JP": {
          singular: "フォルダーと動画へのアクセスをグループに許可"
        },
        "ko-KR": {
          singular: "그룹에 폴더 및 동영상 액세스 권한 부여"
        },
        "pt-BR": {
          singular: "Conceda acesso a pastas e vídeos a grupos"
        },
        "zh-CN": {
          singular: "授予群组文件夹和视频访问权限"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Restrict folder and video access by individuals or groups within your organization.",
      dictionary: {
        es: {
          singular: "Restrinja el acceso a carpetas y videos a determinadas personas o grupos dentro de su organización."
        },
        "de-DE": {
          singular: "Beschränke den Zugriff auf Ordner und Videos durch Personen oder Gruppen in deinem Unternehmen."
        },
        "fr-FR": {
          singular: "Limitez l’accès à vos vidéos et dossiers à des personnes ou des groupes au sein de votre entreprise."
        },
        "ja-JP": {
          singular: "組織内の個人やグループに対しフォルダーや動画へのアクセスを制限。"
        },
        "ko-KR": {
          singular: "폴더 및 동영상 액세스를 조직 내 개인 또는 그룹별로 제한합니다."
        },
        "pt-BR": {
          singular: "Restrinja o acesso a pastas e vídeos por indivíduos ou grupos dentro da sua organização."
        },
        "zh-CN": {
          singular: "限制组织内个人或群组访问文件夹和视频的权限。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Single sign-on (SSO)",
      dictionary: {
        es: {
          singular: "Inicio de sesión único (SSO)"
        },
        "de-DE": {
          singular: "Single-Sign-on (SSO)"
        },
        "fr-FR": {
          singular: "Authentification unique (SSO)"
        },
        "ja-JP": {
          singular: "シングルサインオン (SSO)"
        },
        "ko-KR": {
          singular: "싱글 사인온 (SSO)"
        },
        "pt-BR": {
          singular: "Autenticação Única (SSO)"
        },
        "zh-CN": {
          singular: "单点登录 (SSO)"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Ability to securely sign into Vimeo using a single login credential.",
      dictionary: {
        es: {
          singular: "Posibilidad de iniciar sesión de forma segura en Vimeo utilizando una única credencial de inicio de sesión."
        },
        "de-DE": {
          singular: "Sichere Anmeldung bei Vimeo mit eigenen Anmeldedaten."
        },
        "fr-FR": {
          singular: "Possibilité de se connecter de manière sécurisée à Vimeo à l'aide d'un identifiant unique."
        },
        "ja-JP": {
          singular: "シングルログイン認証情報を使用したVimeoへの安全なサインインが可能。"
        },
        "ko-KR": {
          singular: "통합 로그인 정보를 사용하여 Vimeo에 안전하게 로그인할 수 있습니다."
        },
        "pt-BR": {
          singular: "Acesso seguro ao Vimeo usando uma única credencial de login."
        },
        "zh-CN": {
          singular: "使用单一登录凭据安全登录 Vimeo。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Directory & Provisioning (SCIM)",
      dictionary: {
        es: {
          singular: "Directorio y aprovisionamiento (SCIM)"
        },
        "de-DE": {
          singular: "Verzeichnis und Bereitstellung (SCIM)"
        },
        "fr-FR": {
          singular: "Répertoire et provisionnement (SCIM)"
        },
        "ja-JP": {
          singular: "ディレクトリとプロビジョニング（SCIM）"
        },
        "ko-KR": {
          singular: "디렉터리 및 프로비저닝(SCIM)"
        },
        "pt-BR": {
          singular: "Diretório e provisionamento (SCIM)"
        },
        "zh-CN": {
          singular: "目录和预置 (SCIM)"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "System for Cross-domain Identity Management - a standard for automating the exchange of user identity information between identity providers and IT systems.",
      dictionary: {
        es: {
          singular: "Sistema para la gestión de identidades entre dominios: estándar para automatizar el intercambio de información sobre la identidad de los usuarios entre los proveedores de identidades y los sistemas de TI."
        },
        "de-DE": {
          singular: "SCIM (System for Cross-domain Identity Management) – ein Standard zur Automatisierung des Austauschs von Benutzeridentitätsinformationen zwischen Identitätsanbietern und IT-Systemen."
        },
        "fr-FR": {
          singular: "Le System for Cross-domain Identity Management est une norme permettant d'automatiser l'échange d'informations sur l'identité des utilisateurs entre les fournisseurs d'identité et les systèmes informatiques."
        },
        "ja-JP": {
          singular: "クロスドメインID管理システム - IDプロバイダーとITシステム間のユーザーID情報の交換を自動化するための標準です。"
        },
        "ko-KR": {
          singular: "도메인 간 ID 관리 시스템 - ID 제공자와 IT 시스템 간의 사용자 ID 정보 교환을 자동화하는 표준입니다."
        },
        "pt-BR": {
          singular: "System for Cross-Domain Identity Management — padrão para automatizar a troca de informações de identidade de usuário entre provedores de identidade e sistemas de TI."
        },
        "zh-CN": {
          singular: "跨域身份管理系统——身份提供商与 IT 系统之间自动交换用户身份信息的标准。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Custom permissions",
      dictionary: {
        es: {
          singular: "Permisos personalizados"
        },
        "de-DE": {
          singular: "Benutzerdefinierte Berechtigungen"
        },
        "fr-FR": {
          singular: "Autorisations personnalisées"
        },
        "ja-JP": {
          singular: "カスタム権限"
        },
        "ko-KR": {
          singular: "커스텀 권한"
        },
        "pt-BR": {
          singular: "Permissões customizadas"
        },
        "zh-CN": {
          singular: "自定义权限"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Enable and disable granular capabilities for specific individuals.",
      dictionary: {
        es: {
          singular: "Habilite y deshabilite capacidades específicas para individuos determinados."
        },
        "de-DE": {
          singular: "Aktiviere und deaktiviere detaillierte Funktionen für bestimmte Benutzer."
        },
        "fr-FR": {
          singular: "Activez et désactivez des fonctionnalités particulières pour des individus spécifiques."
        },
        "ja-JP": {
          singular: "特定のユーザーに対して細かな機能を有効化または無効化。"
        },
        "ko-KR": {
          singular: "특정 개인에 대해 세분화된 기능을 활성화/비활성화합니다."
        },
        "pt-BR": {
          singular: "Ative e desative recursos de indivíduos específicos."
        },
        "zh-CN": {
          singular: "启用和禁用特定个人的细粒度功能。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Custom data retention",
      dictionary: {
        es: {
          singular: "Conservación de datos personalizada"
        },
        "de-DE": {
          singular: "Benutzerdefinierte Datenspeicherung"
        },
        "fr-FR": {
          singular: "Conservation personnalisée des données"
        },
        "ja-JP": {
          singular: "カスタムデータの保持"
        },
        "ko-KR": {
          singular: "커스텀 데이터 보존"
        },
        "pt-BR": {
          singular: "Retenção de dados personalizada"
        },
        "zh-CN": {
          singular: "自定义数据保留"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Ability to set data retention policies that match your organization's requirements.",
      dictionary: {
        es: {
          singular: "Capacidad de establecer políticas de conservación de datos que se ajusten a los requisitos de su organización."
        },
        "de-DE": {
          singular: "Möglichkeit, eine Datenaufbewahrungsrichtlinie festzulegen, die den Anforderungen Ihrer Organisation entspricht."
        },
        "fr-FR": {
          singular: "Possibilité de définir des politiques de conservation des données qui correspondent aux exigences de votre organisation."
        },
        "ja-JP": {
          singular: "組織の要件に一致するデータ保持ポリシーを設定する機能。"
        },
        "ko-KR": {
          singular: "조직의 요구 사항에 맞는 데이터 보존 정책을 설정할 수 있습니다."
        },
        "pt-BR": {
          singular: "Permite definir políticas de retenção de dados que reflitam os requisitos da sua organização."
        },
        "zh-CN": {
          singular: "能够设置符合贵组织要求的数据保留政策。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "HIPAA-compliant video playback",
      dictionary: {
        es: {
          singular: "Reproducción de video conforme a la HIPAA"
        },
        "de-DE": {
          singular: "HIPAA-konforme Videowiedergabe"
        },
        "fr-FR": {
          singular: "Lecture vidéo conforme à l'HIPAA"
        },
        "ja-JP": {
          singular: "HIPAA準拠の動画再生"
        },
        "ko-KR": {
          singular: "HIPAA 준수 동영상 재생"
        },
        "pt-BR": {
          singular: "Reprodução de vídeo compatível com HIPAA"
        },
        "zh-CN": {
          singular: "符合 HIPAA 标准的视频播放"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "HIPAA-compliant video playback solution with the option to execute a Business Associate Agreement.",
      dictionary: {
        es: {
          singular: "Solución de reproducción de video conforme a la HIPAA con la opción de ejecutar un acuerdo de socio comercial."
        },
        "de-DE": {
          singular: "HIPAA-konforme Videowiedergabelösung mit der Option zum Abschluss einer Geschäftspartnervereinbarung."
        },
        "fr-FR": {
          singular: "Solution de lecture vidéo conforme à la loi HIPAA avec la possibilité d'exécuter un accord de partenariat."
        },
        "ja-JP": {
          singular: "ビジネスアソシエイト契約を締結するオプションを含む、HIPAA準拠の動画再生ソリューション。"
        },
        "ko-KR": {
          singular: "사업 협력 계약(BAA) 체결 옵션을 제공하는 HIPAA 준수 동영상 재생 솔루션입니다."
        },
        "pt-BR": {
          singular: "Solução de reprodução de vídeo compatível com HIPAA com a opção de executar um Acordo de Associado Comercial."
        },
        "zh-CN": {
          singular: "符合 HIPAA 标准的视频播放解决方案，可选择签署业务伙伴协议。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "Data Processing Addendum (DPA)",
      dictionary: {
        es: {
          singular: "Anexo de procesamiento de datos (DPA)"
        },
        "de-DE": {
          singular: "Zusatz zur Datenverarbeitung (DPA)"
        },
        "fr-FR": {
          singular: "Avenant relatif au traitement des données (DPA)"
        },
        "ja-JP": {
          singular: "データ処理補遺（DPA）"
        },
        "ko-KR": {
          singular: "데이터 처리 부록(DPA)"
        },
        "pt-BR": {
          singular: "Adendo de Processamento de Dados (DPA)"
        },
        "zh-CN": {
          singular: "数据处理附录 (DPA)"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "A Data Processing Addendum is incorporated into the Terms for Enterprise Services.",
      dictionary: {
        es: {
          singular: "Se incorpora un anexo de procesamiento de datos a los términos de los servicios de Enterprise."
        },
        "de-DE": {
          singular: "Ein Zusatz zur Datenverarbeitung wurde in die Bedingungen für Enterprise Services aufgenommen."
        },
        "fr-FR": {
          singular: "Un avenant relatif au traitement des données est intégré aux Conditions d'utilisation Entreprise."
        },
        "ja-JP": {
          singular: "データ処理補遺は、Enterpriseサービスの利用規約に組み込まれています。"
        },
        "ko-KR": {
          singular: "데이터 처리 부록은 Enterprise 서비스 약관에 통합되어 있습니다."
        },
        "pt-BR": {
          singular: "Um Adendo de Processamento de Dados está incluído nos Termos dos serviços Enterprise."
        },
        "zh-CN": {
          singular: "数据处理附录已纳入 Enterprise 服务条款中。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }, {
    text: (0, _v1.translate)({
      singular: "China delivery for VOD",
      dictionary: {
        es: {
          singular: "Entrega en China para VOD"
        },
        "de-DE": {
          singular: "China-Zustellung für VOD"
        },
        "fr-FR": {
          singular: "Diffusion en Chine pour VOD"
        },
        "ja-JP": {
          singular: "VODの中国配信"
        },
        "ko-KR": {
          singular: "VOD 중국 전송"
        },
        "pt-BR": {
          singular: "Entrega na China para VOD"
        },
        "zh-CN": {
          singular: "传送视频点播内容到中国"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "On-demand video delivery to China for internal audiences.",
      dictionary: {
        es: {
          singular: "Entrega de videos on-demand en China para audiencias internas."
        },
        "de-DE": {
          singular: "Bereitstellung von On-Demand-Videos in China für interne Zielgruppen."
        },
        "fr-FR": {
          singular: "Diffusion de vidéos à la demande en Chine pour les publics internes."
        },
        "ja-JP": {
          singular: "中国国内の視聴者向けにオンデマンドビデオを配信します。"
        },
        "ko-KR": {
          singular: "중국 내 시청자를 위해 온디맨드 동영상 중국 전송"
        },
        "pt-BR": {
          singular: "Entrega de vídeos sob demanda na China para público interno."
        },
        "zh-CN": {
          singular: "向中国境内观众传送视频点播内容。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }], "getVideoPlayerFeatures", 0, _v0 => [{
    text: (0, _v1.translate)({
      singular: "No ads before, after, or on your video",
      dictionary: {
        es: {
          singular: "Sin anuncios antes, durante o después de su video"
        },
        "de-DE": {
          singular: "Keine Werbung vor, nach oder auf deinem Video"
        },
        "fr-FR": {
          singular: "Aucune publicité avant, après, ou pendant vos vidéos"
        },
        "ja-JP": {
          singular: "動画周りに広告はゼロ"
        },
        "ko-KR": {
          singular: "동영상 재생 전후・도중에 광고 없음"
        },
        "pt-BR": {
          singular: "Sem anúncio antes, depois ou durante seus vídeos"
        },
        "zh-CN": {
          singular: "视频前后或上方均无广告"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Vimeo never clutters your videos with ads before, after, or on top of videos or the video player.",
      dictionary: {
        es: {
          singular: "Vimeo nunca saturará sus videos con anuncios antes, después o encima de los videos o del reproductor de video."
        },
        "de-DE": {
          singular: "Bei Vimeo werden Ihre Videos nie von Werbung gestört, weder vor, während oder auf Ihren Videos noch über dem Video-Player."
        },
        "fr-FR": {
          singular: "Vimeo ne diffuse jamais des publicités avant, pendant ou après vos vidéos, ni même dans le player vidéo."
        },
        "ja-JP": {
          singular: "Vimeoでは動画または動画プレーヤーの前後や動画上に広告を表示しないため、スムーズな視聴を可能にします。"
        },
        "ko-KR": {
          singular: "Vimeo는 동영상과 동영상 플레이어의 앞, 뒤, 중간에 광고를 넣지 않습니다."
        },
        "pt-BR": {
          singular: "O Vimeo nunca sobrecarrega seus vídeos com anúncios antes, depois ou sobre seu conteúdo nem no player de vídeo."
        },
        "zh-CN": {
          singular: "Vimeo 绝不会在您的视频前面、后面或顶部或视频播放器上添加广告。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "4K & HDR Support & Dolby Vision",
      dictionary: {
        es: {
          singular: "Compatibilidad con 4K, HDR y Dolby Vision"
        },
        "de-DE": {
          singular: "4K, HDR und Dolby Vision werden unterstützt"
        },
        "fr-FR": {
          singular: "Prise en charge 4K, HDR et Dolby Vision"
        },
        "ja-JP": {
          singular: "4K、HDR、ドルビービジョンに対応"
        },
        "ko-KR": {
          singular: "4K/HDR 지원 및 Dolby Vision"
        },
        "pt-BR": {
          singular: "Dolby Vision e compatibilidade com 4K e HDR"
        },
        "zh-CN": {
          singular: "4K 和 HDR 支持以及 Dolby Vision"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Deliver your content to viewers in the highest quality to improve the viewing experience and connect better with your audience.",
      dictionary: {
        es: {
          singular: "Ofrezca su contenido a los espectadores con la máxima calidad para mejorar la experiencia de visualización y conectar mejor con su audiencia."
        },
        "de-DE": {
          singular: "Bieten Sie Ihren Zuschauer*innen Inhalte in Spitzenqualität, um das Zuschauererlebnis und die Verbindung zu Ihrer Zielgruppe noch besser zu machen."
        },
        "fr-FR": {
          singular: "Diffusez votre contenu dans la meilleure qualité possible afin d'améliorer l'expérience de visionnage des spectateurs et de renforcer le lien qui vous unit."
        },
        "ja-JP": {
          singular: "視聴者に最高画質でコンテンツを配信し、視聴体験を向上させ、視聴者とのつながりを深めましょう。"
        },
        "ko-KR": {
          singular: "시청자에게 최고 품질의 콘텐츠를 전달하여 시청 경험은 향상되고 시청자와의 교류는 더 원활해집니다."
        },
        "pt-BR": {
          singular: "Entregue aos espectadores seu conteúdo com a mais alta qualidade para melhorar a experiência de visualização e conectar-se melhor com o público."
        },
        "zh-CN": {
          singular: "向观众提供最高品质的内容，以改善观看体验，更好地与观众建立联系。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Embed videos anywhere",
      dictionary: {
        es: {
          singular: "Inserción de videos en cualquier lugar"
        },
        "de-DE": {
          singular: "Videos überall einbetten"
        },
        "fr-FR": {
          singular: "Intégration de vidéos sur les supports de votre choix"
        },
        "ja-JP": {
          singular: "どこにでも自由に動画を埋め込む"
        },
        "ko-KR": {
          singular: "자유로운 동영상 임베드"
        },
        "pt-BR": {
          singular: "Incorporação de vídeos em qualquer lugar"
        },
        "zh-CN": {
          singular: "随处嵌入视频"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Post your video or event on a page outside Vimeo",
      dictionary: {
        es: {
          singular: "Publique su video o evento en una página fuera de Vimeo"
        },
        "de-DE": {
          singular: "Posten Sie Ihr Video oder Event auf einer Website außerhalb von Vimeo."
        },
        "fr-FR": {
          singular: "Publiez votre vidéo ou événement sur une page externe à Vimeo"
        },
        "ja-JP": {
          singular: "Vimeo以外のページで動画やイベントを投稿"
        },
        "ko-KR": {
          singular: "Vimeo 외부 페이지에 동영상 또는 이벤트를 게시합니다."
        },
        "pt-BR": {
          singular: "Poste seu vídeo ou evento em uma página fora do Vimeo."
        },
        "zh-CN": {
          singular: "在 Vimeo 以外的页面上发布您的视频或活动"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Playback speed control",
      dictionary: {
        es: {
          singular: "Controle la velocidad de reproducción"
        },
        "de-DE": {
          singular: "Playback-Geschwindigkeitssteuerungen"
        },
        "fr-FR": {
          singular: "Commandes de vitesse de lecture"
        },
        "ja-JP": {
          singular: "再生速度コントロール"
        },
        "ko-KR": {
          singular: "재생 속도 제어"
        },
        "pt-BR": {
          singular: "Controles da velocidade de reprodução"
        },
        "zh-CN": {
          singular: "回放速度控制"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Control the speed at which viewers experience your videos.",
      dictionary: {
        es: {
          singular: "Controle la velocidad a la que los espectadores ven sus videos."
        },
        "de-DE": {
          singular: "Steuern Sie die Geschwindigkeit, mit der Ihr Publikum Ihre Videos sieht."
        },
        "fr-FR": {
          singular: "Contrôlez la vitesse à laquelle les spectateurs visionnent vos vidéos."
        },
        "ja-JP": {
          singular: "動画の視聴スピードをコントロール。"
        },
        "ko-KR": {
          singular: "시청자의 동영상 재생 속도를 제어하세요."
        },
        "pt-BR": {
          singular: "Controle a velocidade com a qual os espectadores assistem aos seus vídeos."
        },
        "zh-CN": {
          singular: "控制观众观看视频的速度。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Upload or download transcripts",
      dictionary: {
        es: {
          singular: "Subida o descarga de transcripciones"
        },
        "de-DE": {
          singular: "Transkripte hoch- oder herunterladen"
        },
        "fr-FR": {
          singular: "Mise en ligne ou téléchargement de transcriptions"
        },
        "ja-JP": {
          singular: "トランスクリプトのアップロードまたはダウンロード"
        },
        "ko-KR": {
          singular: "스크립트 업로드/다운로드"
        },
        "pt-BR": {
          singular: "Carregamento e download de transcrições"
        },
        "zh-CN": {
          singular: "上传或下载转录文稿"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Manually upload your own transcription file, and download to make changes.",
      dictionary: {
        es: {
          singular: "Suba manualmente su propio archivo de transcripción y descárguelo para realizar cambios."
        },
        "de-DE": {
          singular: "Laden Sie Ihre eigene Transkriptionsdatei manuell hoch und wieder herunter, um Änderungen vorzunehmen."
        },
        "fr-FR": {
          singular: "Transférez manuellement votre propre fichier de transcription et téléchargez-le pour y apporter des modifications."
        },
        "ja-JP": {
          singular: "独自のトランスクリプションファイルを手動でアップロード、さらにダウンロードして変更を追加。"
        },
        "ko-KR": {
          singular: "스크립트 파일을 직접 업로드합니다. 다운로드하여 스크립트를 수정할 수도 있습니다."
        },
        "pt-BR": {
          singular: "Carregue manualmente seu próprio arquivo de transcrição e baixe-o se precisar fazer alterações."
        },
        "zh-CN": {
          singular: "手动上传自己的转录文件，下载转录文件进行修改。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Automated Closed Captioning",
      dictionary: {
        es: {
          singular: "Subtítulos ocultos automatizados"
        },
        "de-DE": {
          singular: "Automatische Videotext-Untertitel"
        },
        "fr-FR": {
          singular: "Sous-titrage codé automatisé"
        },
        "ja-JP": {
          singular: "自動クローズドキャプション"
        },
        "ko-KR": {
          singular: "자동 자막(CC)"
        },
        "pt-BR": {
          singular: "Legendagem oculta automatizada"
        },
        "zh-CN": {
          singular: "自动隐藏式字幕"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Automated closed-captioning on all new video uploads. Available for video on-demand and for live events.",
      dictionary: {
        es: {
          singular: "Subtítulos ocultos automatizados en todos los nuevos videos subidos. Disponible para Video On Demand y para eventos en vivo."
        },
        "de-DE": {
          singular: "Automatische Videotext-Untertitel auf allen neuen Video-Uploads. Verfügbar für Video On Demand und Live-Events."
        },
        "fr-FR": {
          singular: "Sous-titrage codé automatique pour toutes les nouvelles vidéos mises en ligne. Disponible pour les vidéos à la demande et les événements en direct."
        },
        "ja-JP": {
          singular: "すべての新規アップロード動画に自動クローズドキャプション。オンデマンド動画とライブイベントでご利用いただけます。"
        },
        "ko-KR": {
          singular: "새로 업로드된 모든 동영상에 자동 자막 기능이 제공됩니다. 온디맨드 동영상과 라이브 이벤트에 사용할 수 있습니다."
        },
        "pt-BR": {
          singular: "Legendagem oculta automatizada em todos os seus novos vídeos. Disponível para vídeos on demand e eventos ao vivo."
        },
        "zh-CN": {
          singular: "为所有新上传的视频添加自动隐藏式字幕。适用于视频点播和直播活动。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Transcript editing",
      dictionary: {
        es: {
          singular: "Edición de transcripciones"
        },
        "de-DE": {
          singular: "Transkriptbearbeitung"
        },
        "fr-FR": {
          singular: "Modification des transcriptions"
        },
        "ja-JP": {
          singular: "トランスクリプトの編集"
        },
        "ko-KR": {
          singular: "스크립트 편집"
        },
        "pt-BR": {
          singular: "Edição de transcrição"
        },
        "zh-CN": {
          singular: "脚本编辑"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Easily edit your video transcripts directly in Vimeo. You don't need to leave the platform. Edit your transcript right next to the video in Vimeo's transcript editor panel.",
      dictionary: {
        es: {
          singular: "Edite las transcripciones de sus videos con facilidad directamente en Vimeo. Sin salir de la plataforma. Edite su transcripción justo al lado del video en el panel del editor de transcripciones de Vimeo."
        },
        "de-DE": {
          singular: "Bearbeiten Sie Ihre Video-Transkripte ganz bequem direkt in Vimeo. Dazu brauchen Sie die Plattform nicht zu verlassen. Bearbeiten Sie Ihr Transkript direkt neben dem Video, im Transkript-Editor von Vimeo."
        },
        "fr-FR": {
          singular: "Modifiez facilement les transcriptions de vos vidéos directement sur Vimeo. Vous n’avez pas besoin de quitter la plateforme. Grâce au panneau de révision des transcriptions de Vimeo, apportez des modifications aux transcriptions dans la même plateforme."
        },
        "ja-JP": {
          singular: "Vimeo内で動画トランスクリプトを直接簡単に編集可能。プラットフォームから離れることなく、動画のすぐ横にあるトランスクリプトエディターパネルからトランスクリプトの編集ができます。"
        },
        "ko-KR": {
          singular: "Vimeo에서 동영상 스크립트를 직접 손쉽게 편집하세요. 플랫폼을 떠나지 않고 Vimeo의 스크립트 에디터 패널에서 동영상 바로 옆에 있는 스크립트를 편집할 수 있습니다."
        },
        "pt-BR": {
          singular: "Edite facilmente as transcrições dos seus vídeos diretamente no Vimeo. Não é preciso sair da plataforma. Basta usar o painel de edição de transcrição do Vimeo, logo ao lado do vídeo."
        },
        "zh-CN": {
          singular: "直接在 Vimeo 中轻松编辑视频转录文稿。您无需离开平台。通过 Vimeo 的转录文稿编辑器面板，就在视频旁边编辑转录文稿。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Chapters",
      dictionary: {
        es: {
          singular: "Capítulos"
        },
        "de-DE": {
          singular: "Kapitel"
        },
        "fr-FR": {
          singular: "Chapitres"
        },
        "ja-JP": {
          singular: "チャプター"
        },
        "ko-KR": {
          singular: "챕터"
        },
        "pt-BR": {
          singular: "Capítulos"
        },
        "zh-CN": {
          singular: "章节"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Add chapters to make your videos easy for viewers to navigate and boost SEO discoverability.",
      dictionary: {
        es: {
          singular: "Agregue capítulos para que los espectadores puedan navegar fácilmente por sus videos y aumentar la capacidad de descubrimiento de SEO."
        },
        "de-DE": {
          singular: "Unterteilen Sie Ihre Videos in Kapitel, um Zuschauenden einen schnelleren Zugang zu bieten und die SEO-Auffindbarkeit zu verbessern."
        },
        "fr-FR": {
          singular: "Ajoutez des chapitres à vos vidéos pour permettre aux spectateurs de les parcourir facilement et améliorer leur référencement en ligne."
        },
        "ja-JP": {
          singular: "チャプターを追加して視聴者のナビゲートを簡単にし、SEOの検出率を向上。"
        },
        "ko-KR": {
          singular: "챕터를 추가하면 시청자가 동영상을 쉽게 탐색하고 SEO 검색 가능성도 높일 수 있습니다."
        },
        "pt-BR": {
          singular: "Adicione capítulos para facilitar a navegação pelos seus vídeos e impulsioná-los nos resultados de pesquisa."
        },
        "zh-CN": {
          singular: "添加章节，方便观众浏览视频，并提高搜索引擎优化的可发现性。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_ALL_SHOWN_TIERS
  }, {
    text: (0, _v1.translate)({
      singular: "Player customization",
      dictionary: {
        es: {
          singular: "Reproductor personalizable"
        },
        "de-DE": {
          singular: "Individuelle Anpassung des Players"
        },
        "fr-FR": {
          singular: "Personnalisation du player"
        },
        "ja-JP": {
          singular: "プレーヤー カスタマイズ"
        },
        "ko-KR": {
          singular: "커스텀 플레이어"
        },
        "pt-BR": {
          singular: "Customização do player"
        },
        "zh-CN": {
          singular: "播放器定制"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Show or remove player elements from view and customize the color of the player elements (playbar, title, description).",
      dictionary: {
        es: {
          singular: "Muestre u oculte elementos del reproductor y personalice el color de los elementos (barra de reproducción, título, descripción)."
        },
        "de-DE": {
          singular: "Blenden Sie Player-Elemente ein oder aus und passen Sie die Elemente farblich an (Playleiste, Titel, Beschreibung)."
        },
        "fr-FR": {
          singular: "Affichez ou masquez les éléments du player et personnalisez la couleur de ses éléments pour l’adapter à votre marque (barre de lecture, titre, description)."
        },
        "ja-JP": {
          singular: "視聴画面でのプレーヤー要素の表示／非表示、プレーヤー要素（再生バー、タイトル、説明）の色をカスタマイズ。"
        },
        "ko-KR": {
          singular: "보기에서 플레이어 요소를 표시하거나 제거하고 플레이어 요소(플레이바, 제목, 설명)의 색상을 커스텀합니다."
        },
        "pt-BR": {
          singular: "Mostre ou remova elementos visuais do player e personalize as cores (barra de reprodução, título, descrição)."
        },
        "zh-CN": {
          singular: "显示或移除视图中的播放器元素并自定义播放器元素（播放栏、标题、描述）的颜色。"
        }
      }
    }),
    tiers: _v0 ? _v2.REPACKAGING_PRO_AND_ABOVE : _v2.REPACKAGING_PAID_PLANS
  }, {
    text: (0, _v1.translate)({
      singular: "Player branding",
      dictionary: {
        es: {
          singular: "Personalización del reproductor"
        },
        "de-DE": {
          singular: "Player-Branding"
        },
        "fr-FR": {
          singular: "Personnalisation du lecteur"
        },
        "ja-JP": {
          singular: "プレーヤーブランディング"
        },
        "ko-KR": {
          singular: "플레이어 브랜딩"
        },
        "pt-BR": {
          singular: "Personalização do player"
        },
        "zh-CN": {
          singular: "播放器品牌化"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Add a logo to Vimeo's video player.",
      dictionary: {
        es: {
          singular: "Agregue un logotipo al reproductor de video de Vimeo."
        },
        "de-DE": {
          singular: "Fügen Sie ein Logo zum Vimeo Video-Player hinzu."
        },
        "fr-FR": {
          singular: "Ajoutez un logo au player vidéo de Vimeo."
        },
        "ja-JP": {
          singular: "Vimeoの動画プレーヤーにロゴを追加。"
        },
        "ko-KR": {
          singular: "Vimeo 동영상 플레이어에 로고를 추가하세요."
        },
        "pt-BR": {
          singular: "Adicione um logotipo ao player de vídeo do Vimeo."
        },
        "zh-CN": {
          singular: "为 Vimeo 的视频播放器添加徽标。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_PRO_AND_ABOVE
  }, {
    text: (0, _v1.translate)({
      singular: "3rd party player support",
      dictionary: {
        es: {
          singular: "Compatibilidad con reproductores de terceros"
        },
        "de-DE": {
          singular: "Support für externe Video-Player"
        },
        "fr-FR": {
          singular: "Prise en charge de players tiers"
        },
        "ja-JP": {
          singular: "サードパーティプレーヤー対応"
        },
        "ko-KR": {
          singular: "타사 플레이어 지원"
        },
        "pt-BR": {
          singular: "Suporte a players de terceiros"
        },
        "zh-CN": {
          singular: "第三方播放器支持"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Vimeo supports raw video files (HLS, DASH, MP4 etc.), so you can use third party players while leveraging Vimeo as a transcode and distribution service.",
      dictionary: {
        es: {
          singular: "Vimeo admite archivos de video sin procesar (HLS, DASH, MP4, etc.), por lo que puede utilizar reproductores externos y aprovechar Vimeo como servicio de transcodificación y distribución."
        },
        "de-DE": {
          singular: "Vimeo unterstützt rohe Videodateien (HLS, DASH, MP4 usw.). Sie können also Player von Drittanbietern verwenden, während Sie Vimeo als Umkodierungs- und Vertriebsdienst nutzen."
        },
        "fr-FR": {
          singular: "Vimeo prend en charge des fichiers vidéo bruts (HLS, DASH, MP4, etc.) pour vous permettre d'utiliser des players tiers tout en exploitant Vimeo comme service de transcodage et de distribution."
        },
        "ja-JP": {
          singular: "Vimeoは動画のRAWファイル（HLS、DASH、MP4など）に対応しているため、Vimeoをトランスコードおよび配信サービスとして活用しながら、サードパーティのプレーヤーを使用できます。"
        },
        "ko-KR": {
          singular: "Vimeo는 동영상 원본 파일(HLS, DASH, MP4 등)을 지원하므로 Vimeo를 트랜스코딩 및 배포 서비스로 활용하면서 타사 플레이어를 사용할 수 있습니다."
        },
        "pt-BR": {
          singular: "O Vimeo é compatível com arquivos de vídeo brutos (HLS, DASH, MP4, etc.) para você poder usar players de terceiros enquanto aproveita o Vimeo como serviço de transcodificação e distribuição."
        },
        "zh-CN": {
          singular: "Vimeo 支持原始视频文件（HLS、DASH、MP4 等），因此您可以使用第三方播放器，同时利用 Vimeo 作为转码和分发服务。"
        }
      }
    }),
    tiers: _v2.REPACKAGING_PRO_AND_ABOVE
  }, {
    text: (0, _v1.translate)({
      singular: "Interactive video",
      dictionary: {
        es: {
          singular: "Video interactivo"
        },
        "de-DE": {
          singular: "Interaktives Video"
        },
        "fr-FR": {
          singular: "Vidéo interactive"
        },
        "ja-JP": {
          singular: "インタラクティブ動画"
        },
        "ko-KR": {
          singular: "인터랙티브 동영상"
        },
        "pt-BR": {
          singular: "Vídeo interativo"
        },
        "zh-CN": {
          singular: "交互式视频"
        }
      }
    }),
    tooltip: (0, _v1.translate)({
      singular: "Create fully-interactive video experiences featuring clickable hotspots, customizable overlays, shoppable functionality, and more.",
      dictionary: {
        es: {
          singular: "Cree experiencias de video totalmente interactivas que incluyan puntos de acceso en los que se pueda hacer clic, superposiciones personalizables, funciones de compra y mucho más."
        },
        "de-DE": {
          singular: "Erstelle komplett interaktive Videoerlebnisse mit anklickbaren Hotspots, anpassbaren Einblendungen, Kaufmöglichkeiten und mehr."
        },
        "fr-FR": {
          singular: "Créez des expériences vidéo entièrement interactives à l'aide de zones cliquables, de superpositions personnalisables, de fonctionnalités d'achat et bien plus encore."
        },
        "ja-JP": {
          singular: "クリック可能なホットスポット、カスタマイズ可能なオーバーレイ、動画内で購入可能にする機能などを備えた、完全にインタラクティブな動画体験を作成。"
        },
        "ko-KR": {
          singular: "클릭할 수 있는 핫스팟, 커스텀 오버레이, 쇼핑 기능 등을 갖춘 완전한 참여형 동영상 경험을 만듭니다."
        },
        "pt-BR": {
          singular: "Crie experiências de vídeo totalmente interativas apresentando hotspots clicáveis, sobreposições customizáveis, funcionalidades de compras e muito mais."
        },
        "zh-CN": {
          singular: "创建完全交互的视频体验，包括可点击的热点、可自定义的视频叠加层、购物功能等。"
        }
      }
    }),
    tiers: {
      free: !1,
      creator: !1,
      professional: !1,
      studio: !1,
      production: !1,
      enterprise: !0
    }
  }], "isCreatorJuly2026", 0, _v0 => {
    let _v1 = _v0?.find(_v0 => "creator" === _v0.tier);
    return !!_v1 && (_v2.CREATOR_JULY_2026_SKUS.includes(_v1.id.monthly ?? "") || _v2.CREATOR_JULY_2026_SKUS.includes(_v1.id.annual ?? ""));
  }, "isCreatorV2", 0, _v0 => {
    let _v1 = _v0?.find(_v0 => "creator" === _v0.tier);
    return !!_v1 && (_v2.CREATOR_V2_SKUS.includes(_v1.id.monthly ?? "") || _v2.CREATOR_V2_SKUS.includes(_v1.id.annual ?? ""));
  }]);
}