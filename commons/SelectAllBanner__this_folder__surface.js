{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["SelectAllBanner", 0, ({
    folderName: _v0 = "this folder",
    loadedSelectedCount: _v1,
    totalVideosCount: _v2,
    actualSelectedCount: _v3,
    onSelectAllInFolder: _v4,
    onClearSelection: _v5,
    allInFolderEnabled: _v6
  }) => {
    let [_v7, _v8] = _v2.default.useState(!1),
      _v9 = void 0 !== _v6;
    return (0, _v1.jsx)(_v4.VStack, {
      background: "surface",
      "data-testid": "select-all-banner",
      borderRadius: "sm",
      children: (0, _v1.jsx)(_v3.HStack, {
        gap: "2",
        p: "2",
        children: (_v9 ? _v6 : _v7) ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v6.Text, {
            variant: "body-md",
            children: (0, _v1.jsx)("span", {
              children: (0, _v7.translate)({
                count: _v3 ?? _v2,
                singular: "All {BOLD}{NUM_ITEMS} video in {NAME}{/BOLD} is selected.",
                plural: "All {BOLD}{NUM_ITEMS} videos in {NAME}{/BOLD} are selected.",
                replacements: {
                  NUM_ITEMS: _v3 ?? _v2,
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
              _v9 || _v8(!1), _v5();
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
                count: _v1,
                singular: "The {BOLD}{NUM_ITEMS} loaded video{/BOLD} is selected.",
                plural: "All {BOLD}{NUM_ITEMS} loaded videos{/BOLD} are selected.",
                replacements: {
                  NUM_ITEMS: _v1,
                  BOLD: _v0 => (0, _v1.jsx)(_v6.Text, {
                    as: "span",
                    variant: "heading-xs",
                    children: _v0
                  })
                },
                dictionary: {
                  es: {
                    singular: "El {BOLD}{NUM_ITEMS} vídeo cargado{/BOLD} está seleccionado.",
                    plural: "Todos los {BOLD}{NUM_ITEMS} vídeos cargados{/BOLD} están seleccionados."
                  },
                  "de-DE": {
                    singular: "Das {BOLD}{NUM_ITEMS} geladene Video{/BOLD} ist ausgewählt.",
                    plural: "Alle {BOLD}{NUM_ITEMS} geladenen Videos{/BOLD} sind ausgewählt."
                  },
                  "fr-FR": {
                    singular: "La {BOLD}{NUM_ITEMS} vidéo chargée{/BOLD} est sélectionnée.",
                    plural: "Les {BOLD}{NUM_ITEMS} vidéos chargées{/BOLD} sont sélectionnées."
                  },
                  "ja-JP": {
                    singular: "読み込まれた{BOLD}{NUM_ITEMS}件のビデオが選択されています。",
                    plural: "読み込まれた{BOLD}{NUM_ITEMS}件すべてのビデオが選択されています。"
                  },
                  "ko-KR": {
                    singular: "{BOLD}{NUM_ITEMS}개의 로드된 비디오{/BOLD}가 선택되었습니다.",
                    plural: "{BOLD}{NUM_ITEMS}개의 로드된 비디오{/BOLD}가 선택되었습니다."
                  },
                  "pt-BR": {
                    singular: "O {BOLD}{NUM_ITEMS} vídeo carregado{/BOLD} está selecionado.",
                    plural: "Todos os {BOLD}{NUM_ITEMS} vídeos carregados{/BOLD} estão selecionados."
                  },
                  "zh-CN": {
                    singular: "已选择 {BOLD}{NUM_ITEMS} 个已加载的视频{/BOLD}.",
                    plural: "已选择 {BOLD}{NUM_ITEMS} 个已加载的视频{/BOLD}."
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v5.Button, {
            onClick: () => {
              _v9 || _v8(!0), _v4();
            },
            size: "sm",
            variant: "tertiary",
            children: (0, _v7.translate)({
              count: _v2,
              singular: "Select the {NUM_ITEMS} video in this folder.",
              plural: "Select all {NUM_ITEMS} videos in this folder.",
              replacements: {
                NUM_ITEMS: _v2
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