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
    _v9 = _v0.i(0);
  _v0.s(["SelectAllBanner", 0, ({
    folderName: _v0 = "this folder",
    libraryType: _v1,
    loadedSelectedCount: _v2,
    totalVideosCount: _v3,
    actualSelectedCount: _v4,
    onSelectAllInFolder: _v5,
    onClearSelection: _v6,
    allInFolderEnabled: _v7
  }) => {
    let [_v8, _v9] = (0, _v2.useState)(!1),
      _v10 = void 0 !== _v7,
      _v11 = _v3 > 0 && _v2 >= _v3,
      {
        trackLibrarySelectAllBannerDisplayed: _v12,
        trackLibrarySelectAllBannerSelectAllClicked: _v13,
        trackLibrarySelectAllBannerClearAllClicked: _v14
      } = (0, _v8.useLibraryTracking)();
    return (0, _v9.usePicoEffect)(() => {
      _v12({
        libraryType: _v1,
        itemsCount: _v3
      });
    }, [_v1, _v3], {
      once: !0
    }), (0, _v1.jsx)(_v4.VStack, {
      background: "surface",
      "data-testid": "select-all-banner",
      borderRadius: "sm",
      children: (0, _v1.jsx)(_v3.HStack, {
        gap: "2",
        p: "2",
        children: (_v10 ? _v7 : _v8) || _v11 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v6.Text, {
            variant: "body-md",
            children: (0, _v1.jsx)("span", {
              children: (0, _v7.translate)({
                count: _v4 ?? _v3,
                singular: "All {BOLD}{NUM_ITEMS} video in {NAME}{/BOLD} is selected.",
                plural: "All {BOLD}{NUM_ITEMS} videos in {NAME}{/BOLD} are selected.",
                replacements: {
                  NUM_ITEMS: _v4 ?? _v3,
                  NAME: _v0,
                  BOLD: _v0 => (0, _v1.jsx)(_v6.Text, {
                    as: "span",
                    variant: "heading-xs",
                    children: _v0
                  })
                },
                dictionary: {
                  es: {
                    singular: "Todo el {BOLD}{NUM_ITEMS} vídeo en {NAME}{/BOLD} está seleccionado.",
                    plural: "Todos los {BOLD}{NUM_ITEMS} vídeos en {NAME}{/BOLD} están seleccionados."
                  },
                  "de-DE": {
                    singular: "Das {BOLD}{NUM_ITEMS} Video in {NAME}{/BOLD} ist ausgewählt.",
                    plural: "Alle {BOLD}{NUM_ITEMS} Videos in {NAME}{/BOLD} sind ausgewählt."
                  },
                  "fr-FR": {
                    singular: "Toute la {BOLD}{NUM_ITEMS} vidéo dans {NAME}{/BOLD} est sélectionnée.",
                    plural: "Toutes les {BOLD}{NUM_ITEMS} vidéos dans {NAME}{/BOLD} sont sélectionnées."
                  },
                  "ja-JP": {
                    singular: "{NAME}内の{BOLD}{NUM_ITEMS}件のビデオが選択されています。",
                    plural: "{NAME}内の{BOLD}{NUM_ITEMS}件すべてのビデオが選択されています。"
                  },
                  "ko-KR": {
                    singular: "모든 {BOLD}{NUM_ITEMS}개의 {NAME} 비디오{/BOLD}가 선택되었습니다.",
                    plural: "모든 {BOLD}{NUM_ITEMS}개의 {NAME} 비디오{/BOLD}가 선택되었습니다."
                  },
                  "pt-BR": {
                    singular: "O {BOLD}{NUM_ITEMS} vídeo em {NAME}{/BOLD} está selecionado.",
                    plural: "Todos os {BOLD}{NUM_ITEMS} vídeos em {NAME}{/BOLD} estão selecionados."
                  },
                  "zh-CN": {
                    singular: "已选择 {BOLD}{NUM_ITEMS} 个在 {NAME} 中的视频{/BOLD}.",
                    plural: "已选择 {BOLD}{NUM_ITEMS} 个在 {NAME} 中的视频{/BOLD}."
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v5.Button, {
            onClick: () => {
              _v14({
                libraryType: _v1
              }), _v10 || _v9(!1), _v6();
            },
            size: "sm",
            variant: "tertiary",
            children: (0, _v7.translate)({
              singular: "Clear selection",
              dictionary: {
                es: {
                  singular: "Borrar selección"
                },
                "de-DE": {
                  singular: "Auswahl aufheben"
                },
                "fr-FR": {
                  singular: "Effacer la sélection"
                },
                "ja-JP": {
                  singular: "選択をクリア"
                },
                "ko-KR": {
                  singular: "선택 해제"
                },
                "pt-BR": {
                  singular: "Limpar seleção"
                },
                "zh-CN": {
                  singular: "清除选择"
                }
              }
            })
          })]
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v6.Text, {
            variant: "body-md",
            children: (0, _v1.jsx)("span", {
              children: (0, _v7.translate)({
                count: _v2,
                singular: "The {BOLD}{NUM_ITEMS} loaded video{/BOLD} is selected.",
                plural: "The {BOLD}{NUM_ITEMS} loaded videos{/BOLD} are selected.",
                replacements: {
                  NUM_ITEMS: _v2,
                  BOLD: _v0 => (0, _v1.jsx)(_v6.Text, {
                    as: "span",
                    variant: "heading-xs",
                    children: _v0
                  })
                },
                dictionary: {
                  es: {
                    singular: "El {BOLD}{NUM_ITEMS} vídeo cargado{/BOLD} está seleccionado.",
                    plural: "Los {BOLD}{NUM_ITEMS} vídeos cargados{/BOLD} están seleccionados."
                  },
                  "de-DE": {
                    singular: "Das {BOLD}{NUM_ITEMS} geladene Video{/BOLD} ist ausgewählt.",
                    plural: "Die {BOLD}{NUM_ITEMS} geladenen Videos{/BOLD} sind ausgewählt."
                  },
                  "fr-FR": {
                    singular: "La {BOLD}{NUM_ITEMS} vidéo chargée{/BOLD} est sélectionnée.",
                    plural: "Les {BOLD}{NUM_ITEMS} vidéos chargées{/BOLD} sont sélectionnées."
                  },
                  "ja-JP": {
                    singular: "読み込まれた{BOLD}{NUM_ITEMS}件の動画が選択されています。",
                    plural: "読み込まれた{BOLD}{NUM_ITEMS}件の動画が選択されています。"
                  },
                  "ko-KR": {
                    singular: "{BOLD}{NUM_ITEMS}개의 로드된 동영상{/BOLD}이 선택되었습니다.",
                    plural: "{BOLD}{NUM_ITEMS}개의 로드된 동영상{/BOLD}이 선택되었습니다."
                  },
                  "pt-BR": {
                    singular: "O {BOLD}{NUM_ITEMS} vídeo carregado{/BOLD} está selecionado.",
                    plural: "Os {BOLD}{NUM_ITEMS} vídeos carregados{/BOLD} estão selecionados."
                  },
                  "zh-CN": {
                    singular: "已选择{BOLD}{NUM_ITEMS}个已加载的视频{/BOLD}.",
                    plural: "已选择{BOLD}{NUM_ITEMS}个已加载的视频{/BOLD}."
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v5.Button, {
            onClick: () => {
              _v13({
                libraryType: _v1,
                itemsCount: _v3
              }), _v10 || _v9(!0), _v5();
            },
            size: "sm",
            variant: "tertiary",
            children: (0, _v7.translate)({
              count: _v3,
              singular: "Select the {NUM_ITEMS} video in this folder.",
              plural: "Select all {NUM_ITEMS} videos in this folder.",
              replacements: {
                NUM_ITEMS: _v3
              },
              dictionary: {
                es: {
                  singular: "Seleccionar el {NUM_ITEMS} video en esta carpeta.",
                  plural: "Seleccionar todos los {NUM_ITEMS} videos en esta carpeta."
                },
                "de-DE": {
                  singular: "Das {NUM_ITEMS} Video in diesem Ordner auswählen.",
                  plural: "Alle {NUM_ITEMS} Videos in diesem Ordner auswählen."
                },
                "fr-FR": {
                  singular: "Sélectionner la vidéo {NUM_ITEMS} de ce dossier.",
                  plural: "Sélectionner toutes les {NUM_ITEMS} vidéos de ce dossier."
                },
                "ja-JP": {
                  singular: "このフォルダ内の{NUM_ITEMS}本の動画を選択",
                  plural: "このフォルダ内の{NUM_ITEMS}本の動画をすべて選択"
                },
                "ko-KR": {
                  singular: "이 폴더의 {NUM_ITEMS}개 동영상을 선택합니다.",
                  plural: "이 폴더의 {NUM_ITEMS}개 동영상을 모두 선택합니다."
                },
                "pt-BR": {
                  singular: "Selecione o {NUM_ITEMS} vídeo nesta pasta.",
                  plural: "Selecione todos os {NUM_ITEMS} vídeos nesta pasta."
                },
                "zh-CN": {
                  singular: "选择该文件夹中的 {NUM_ITEMS} 个视频。",
                  plural: "选择该文件夹中的所有 {NUM_ITEMS} 个视频。"
                }
              }
            })
          })]
        })
      })
    });
  }]);
}