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
    _v11 = _v0.i(0);
  let _v12 = ["folder_defaults_folder_detail", "folder_defaults_library"];
  _v0.s(["FolderDefaultsIntroPopover", 0, function ({
    children: _v0,
    announcementId: _v1,
    ownerId: _v2,
    enabled: _v3,
    placement: _v4 = "bottom-end",
    offset: _v5,
    anchorDisplay: _v6 = "block",
    onSetDefaults: _v7,
    ..._v8
  }) {
    let {
        settings: _v9
      } = (0, _v11.useOrionSettings)(),
      {
        capabilities: _v10
      } = (0, _v9.useCapability)(["folderUploadPresets"], _v2),
      _v11 = !0 === _v10.folderUploadPresets,
      {
        acknowledge: _v12,
        isActive: _v13
      } = (0, _v3.useAnnouncement)({
        id: _v1,
        isEligible: _v3 && _v11 && _v9.enable_folder_defaults_intro_popover
      }),
      _v14 = (0, _v2.useCallback)(() => {
        _v12(), _v7();
      }, [_v12, _v7]),
      _v15 = (0, _v2.isValidElement)(_v0) && Object.keys(_v8).length > 0 ? (0, _v2.cloneElement)(_v0, _v8) : _v0;
    return _v13 ? (0, _v1.jsx)(_v4.AnnouncementPopover, {
      isOpen: !0,
      trackingId: "folder_defaults",
      anchorWithinChildren: !0,
      onAcknowledge: _v14,
      onClose: _v12,
      showCloseButton: !0,
      placement: _v4,
      offset: _v5,
      badge: (0, _v1.jsx)(_v5.Badge, {
        variant: "new",
        size: "sm",
        children: (0, _v1.jsx)(_v8.Text, {
          color: "text-primary",
          variant: "heading-2xs",
          children: (0, _v10.translate)({
            singular: "New",
            dictionary: {
              es: {
                singular: "Nuevo"
              },
              "de-DE": {
                singular: "Neu"
              },
              "fr-FR": {
                singular: "Nouveau"
              },
              "ja-JP": {
                singular: "新規作成"
              },
              "ko-KR": {
                singular: "신규"
              },
              "pt-BR": {
                singular: "Novo"
              },
              "zh-CN": {
                singular: "新"
              }
            }
          })
        })
      }),
      title: (0, _v10.translate)({
        singular: "Set folder privacy defaults",
        dictionary: {
          es: {
            singular: "Establecer valores predeterminados de privacidad de la carpeta"
          },
          "de-DE": {
            singular: "Standardwerte für die Ordner-Privatsphäre festlegen"
          },
          "fr-FR": {
            singular: "Définir les paramètres de confidentialité du dossier"
          },
          "ja-JP": {
            singular: "フォルダのプライバシー既定値を設定"
          },
          "ko-KR": {
            singular: "폴더의 공개 범위 기본값 설정"
          },
          "pt-BR": {
            singular: "Definir padrões de privacidade da pasta"
          },
          "zh-CN": {
            singular: "设置文件夹隐私默认值"
          }
        }
      }),
      body: (0, _v10.translate)({
        singular: "Set default values for link privacy, embed availability and video downloads for every new video uploaded in this folder.",
        dictionary: {
          es: {
            singular: "Establecer valores predeterminados para la privacidad de los enlaces, la disponibilidad de incrustación y las descargas de vídeo para cada nuevo vídeo subido en esta carpeta."
          },
          "de-DE": {
            singular: "Standardwerte für Link-Privatsphäre, Einbettungsverfügbarkeit und Video-Downloads für jedes neu in diesen Ordner hochgeladene Video festlegen."
          },
          "fr-FR": {
            singular: "Définir les valeurs par défaut pour la confidentialité des liens, la disponibilité de l'intégration et les téléchargements vidéo pour chaque nouvelle vidéo téléchargée dans ce dossier."
          },
          "ja-JP": {
            singular: "このフォルダにアップロードされるすべての新しい動画について、リンクのプライバシー設定、埋め込みの可否、および動画ダウンロードの既定値を設定します。"
          },
          "ko-KR": {
            singular: "이 폴더에 업로드되는 모든 새 동영상에 대해 링크 공개 범위, 임베드 허용 여부 및 동영상 다운로드의 기본값을 설정합니다."
          },
          "pt-BR": {
            singular: "Defina valores padrão para a privacidade do link, disponibilidade de incorporação e downloads de vídeo para cada novo vídeo enviado nesta pasta."
          },
          "zh-CN": {
            singular: "为在此文件夹中上传的每个新视频设置链接隐私、嵌入可用性和视频下载的默认值。"
          }
        }
      }),
      acknowledgeLabel: (0, _v10.translate)({
        singular: "Set defaults",
        dictionary: {
          es: {
            singular: "Establecer valores predeterminados"
          },
          "de-DE": {
            singular: "Standardeinstellungen festlegen"
          },
          "fr-FR": {
            singular: "Définir comme valeurs par défaut"
          },
          "ja-JP": {
            singular: "デフォルトを設定する"
          },
          "ko-KR": {
            singular: "기본값 설정"
          },
          "pt-BR": {
            singular: "Definir padrões"
          },
          "zh-CN": {
            singular: "设置默认值"
          }
        }
      }),
      children: (0, _v1.jsx)(_v7.PopoverAnchor, {
        children: (0, _v1.jsx)(_v6.Box, {
          display: _v6,
          children: _v15
        })
      })
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v15
    });
  }, "useAcknowledgeFolderDefaultsIntro", 0, function () {
    let _v0 = (0, _v3.useAcknowledgeAnnouncement)();
    return (0, _v2.useCallback)(() => {
      _v12.forEach(_v0 => _v0(_v0));
    }, [_v0]);
  }]);
}