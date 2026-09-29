{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = ({
    children: _v0
  }) => (0, _v1.jsx)(_v5.Flex, {
    display: {
      base: "none",
      md: "flex"
    },
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "stroke",
    borderRadius: "8px",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    padding: "35px",
    margin: "20px 0",
    children: _v0
  });
  _v0.s(["HintWrapper", 0, _v6], 0), _v0.s(["UploadDropzoneHint", 0, ({
    page: _v0
  }) => (0, _v1.jsxs)(_v6, {
    children: [(0, _v1.jsx)(_v3.Upload, {
      height: "20px",
      width: "20px",
      color: "text-secondary"
    }), (0, _v1.jsx)(_v2.Text, {
      variant: "body-md",
      color: "text-secondary",
      children: _v0 ? (0, _v4.translate)({
        singular: "Drag and drop videos anywhere to upload to '{PAGE}', or directly into a folder",
        replacements: {
          PAGE: _v0
        },
        dictionary: {
          es: {
            singular: "Arrastra y suelta videos en cualquier lugar para subirlos a '{PAGE}', o directamente en una carpeta"
          },
          "de-DE": {
            singular: "Ziehen Sie Videos per Drag & Drop an eine beliebige Stelle, um sie auf '{PAGE}' hochzuladen, oder direkt in einen Ordner"
          },
          "fr-FR": {
            singular: "Glissez-déposez des vidéos n'importe où pour les téléverser vers '{PAGE}', ou directement dans un dossier"
          },
          "ja-JP": {
            singular: "動画をどこにでもドラッグ＆ドロップして'{PAGE}', またはフォルダに直接アップロードできます"
          },
          "ko-KR": {
            singular: "비디오를 어디에나 끌어다 놓아 '{PAGE}', 또는 폴더에 직접 업로드하세요"
          },
          "pt-BR": {
            singular: "Arraste e solte vídeos em qualquer lugar para enviar para '{PAGE}', ou diretamente em uma pasta"
          },
          "zh-CN": {
            singular: "将视频拖放到任意位置以上传到 '{PAGE}', 或直接放入文件夹"
          }
        }
      }) : (0, _v4.translate)({
        singular: "Drag and drop videos anywhere to upload",
        dictionary: {
          es: {
            singular: "Arrastre y suelte videos en cualquier lugar para subirlos"
          },
          "de-DE": {
            singular: "Zum Hochladen können Sie Videos per „Drag-and-drop“ an beliebige Stellen ziehen und ablegen"
          },
          "fr-FR": {
            singular: "Faites glisser et déposez les vidéos n'importe où pour les mettre en ligne"
          },
          "ja-JP": {
            singular: "どこにでも動画をドラッグ＆ドロップしてアップロード"
          },
          "ko-KR": {
            singular: "어디로든 드래그 앤 드롭하여 동영상 업로드"
          },
          "pt-BR": {
            singular: "Arraste e solte vídeos em qualquer lugar para carregá-los"
          },
          "zh-CN": {
            singular: "将视频拖放到任意位置开始上传"
          }
        }
      })
    })]
  })], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = (0, _v7.default)(async () => {
    let {
      ThreeSixtyModal: _v0
    } = await _v0.A(0);
    return {
      default: _v0
    };
  }, {
    loadableGenerated: {
      modules: [0]
    }
  });
  _v0.s(["EmptyStateDropzoneFooter", 0, ({
    set360SourceType: _v0,
    threeSixtyType: _v1
  }) => {
    let [_v2, _v3] = (0, _v8.useState)(!1);
    return (0, _v1.jsxs)(_v5.Flex, {
      margin: (0, _v12.rem)(10),
      align: {
        base: "flex-start",
        md: "center"
      },
      gap: "md",
      flexDirection: {
        base: "column",
        md: "row"
      },
      justify: {
        base: "center",
        md: "space-between"
      },
      mx: {
        base: "sm",
        md: "0"
      },
      children: [(0, _v1.jsx)(_v11.Paragraph, {
        size: "sm",
        margin: `0 ${(0, _v12.rem)(6)}`,
        color: "text-tertiary",
        children: (0, _v4.translate)({
          singular: "Learn more about uploading in the {VIDEO}Video{/VIDEO} Guidelines, {COMPRESSION}Compression{/COMPRESSION} Guidelines, and {HELPCENTER}Help Center{/HELPCENTER}.",
          replacements: {
            VIDEO: _v0 => (0, _v1.jsx)(_v10.Link, {
              href: "/help/guidelines#video",
              target: "_blank",
              variant: "inline-tertiary",
              fontSize: (0, _v12.rem)(12),
              children: _v0
            }, "guidelines"),
            COMPRESSION: _v0 => (0, _v1.jsx)(_v10.Link, {
              href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426043233169-Video-and-audio-compression-guidelines",
              target: "_blank",
              rel: "noopener noreferrer",
              variant: "inline-tertiary",
              fontSize: (0, _v12.rem)(12),
              children: _v0
            }, "compression"),
            HELPCENTER: _v0 => (0, _v1.jsx)(_v10.Link, {
              href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/sections/12397317457169-Upload-and-video-settings",
              target: "_blank",
              rel: "noopener noreferrer",
              variant: "inline-tertiary",
              fontSize: (0, _v12.rem)(12),
              children: _v0
            }, "help-center")
          },
          dictionary: {
            es: {
              singular: "Obtén más información sobre la subida de archivos en las Directrices de {VIDEO}Video{/VIDEO}, las Directrices de {COMPRESSION}Compresión{/COMPRESSION} y en el {HELPCENTER}Centro de ayuda{/HELPCENTER}."
            },
            "de-DE": {
              singular: "Weitere Informationen zum Hochladen findest du in den {VIDEO}Video{/VIDEO} -Richtlinien, {COMPRESSION}Komprimierungsrichtlinien{/COMPRESSION} und im {HELPCENTER}Hilfe-Center{/HELPCENTER}."
            },
            "fr-FR": {
              singular: "En savoir plus sur la mise en ligne en consultant les instructions pour la {VIDEO}Vidéo{/VIDEO} et pour la {COMPRESSION}Compression{/COMPRESSION}, ainsi que le {HELPCENTER}Centre d'aide{/HELPCENTER}."
            },
            "ja-JP": {
              singular: "{VIDEO}動画{/VIDEO}ガイドライン、{COMPRESSION}圧縮{/COMPRESSION}ガイドライン、{HELPCENTER}ヘルプセンター{/HELPCENTER}でアップロードについての詳細を見る。"
            },
            "ko-KR": {
              singular: "{VIDEO}동영상{/VIDEO} 지침과 {COMPRESSION}압축{/COMPRESSION} 지침 및 {HELPCENTER}도움말 센터{/HELPCENTER}에서 업로드하는 방법에 대해 알아보세요."
            },
            "pt-BR": {
              singular: "Saiba mais sobre carregamentos nas {VIDEO}Regras de{/VIDEO} Vídeo, {COMPRESSION}Regras de{/COMPRESSION} Compressão e {HELPCENTER}Central de Ajuda{/HELPCENTER}."
            },
            "zh-CN": {
              singular: "请参阅{VIDEO}视频{/VIDEO}指南、{COMPRESSION}压缩{/COMPRESSION}指南和{HELPCENTER}帮助中心{/HELPCENTER}，详细了解上传。"
            }
          }
        })
      }), (0, _v1.jsx)(_v9.Button, {
        variant: "tertiary",
        size: "xs",
        onClick: () => {
          _v3(!0);
        },
        children: (0, _v4.translate)({
          singular: "360 video settings",
          dictionary: {
            es: {
              singular: "360 ajustes de video"
            },
            "de-DE": {
              singular: "360°-Video-Einstellungen"
            },
            "fr-FR": {
              singular: "Paramètres des vidéos à 360°"
            },
            "ja-JP": {
              singular: "360度動画の設定"
            },
            "ko-KR": {
              singular: "360 동영상 설정"
            },
            "pt-BR": {
              singular: "Configurações de vídeo 360"
            },
            "zh-CN": {
              singular: "360 视频设置"
            }
          }
        })
      }), (0, _v1.jsx)(_v13, {
        isOpen: _v2,
        onClose: () => _v3(!1),
        threeSixtyType: _v1,
        set360SourceType: _v0
      })]
    });
  }], 0);
}